import { describe, expect, test as it } from "vitest";

import { AwsSdkSigV4Signer } from "./AwsSdkSigV4Signer";

describe(AwsSdkSigV4Signer.name, () => {
  it("sets clockSkewCorrected metadata in error handler if systemClockOffset was updated", async () => {
    const signer = new AwsSdkSigV4Signer();

    let error: Error | any;
    try {
      signer.errorHandler({
        config: {
          systemClockOffset: 30 * 60 * 1000,
        },
      })(
        Object.assign(new Error("uh oh"), {
          $metadata: {},
          $response: {
            headers: {
              date: new Date().toISOString(),
            },
            statusCode: 500,
          },
        })
      );
    } catch (e) {
      error = e as Error;
    }

    expect((error as any).$metadata.clockSkewCorrected).toBe(true);
  });

  it("sets clockSkewCorrected metadata when systemClockOffset was already corrected by a concurrent request", async () => {
    const signer = new AwsSdkSigV4Signer();
    const oneHourMs = 60 * 60 * 1000;
    const serverTime = new Date(Date.now() + oneHourMs).toISOString();

    let error: Error | any;
    try {
      signer.errorHandler({
        // _preRequestSystemClockOffset: 0 — clock was in sync when this request started;
        // a concurrent request corrected it to oneHourMs before this error handler ran.
        _preRequestSystemClockOffset: 0,
        config: {
          systemClockOffset: oneHourMs,
        },
      })(
        Object.assign(new Error("RequestTimeTooSkewed"), {
          name: "RequestTimeTooSkewed",
          // ServerTime is parsed from the XML error response body and is the reliable
          // indicator that this is a genuine clock-skew error (not just any HTTP error
          // that happens to include a date header).
          ServerTime: serverTime,
          $metadata: {},
          $response: {
            headers: { date: serverTime },
            statusCode: 403,
          },
        })
      );
    } catch (e) {
      error = e as Error;
    }

    // Without the fix, clockSkewCorrected is false here because the offset didn't change
    // (a concurrent request already updated it). The request must still be retried.
    expect((error as any).$metadata.clockSkewCorrected).toBe(true);
  });

  it("sets clockSkewCorrected when server time is embedded in error message (DynamoDB-style, no Date header)", async () => {
    const signer = new AwsSdkSigV4Signer();
    const oneHourMs = 60 * 60 * 1000;
    const serverDate = new Date(Date.now() + oneHourMs);
    // Compact AWS timestamp format: YYYYMMDDTHHMMSSz
    const compact = serverDate.toISOString().replace(/[-:]|\.\d{3}/g, "");
    const message = `Signature expired: 20000101T000000Z is now earlier than ... (${compact} - 5 min. ahead of your clock)`;

    let error: Error | any;
    try {
      signer.errorHandler({
        _preRequestSystemClockOffset: 0,
        config: {
          systemClockOffset: 0,
        },
      })(
        Object.assign(new Error(message), {
          name: "InvalidSignatureException",
          // No ServerTime field — this is a JSON-protocol service (e.g. DynamoDB).
          $metadata: {},
          $response: {
            headers: {}, // no Date header in response
            statusCode: 403,
          },
        })
      );
    } catch (e) {
      error = e as Error;
    }

    expect((error as any).$metadata.clockSkewCorrected).toBe(true);
  });

  it("sets clockSkewCorrected from error message when offset was already corrected by a concurrent request", async () => {
    const signer = new AwsSdkSigV4Signer();
    const oneHourMs = 60 * 60 * 1000;
    const serverDate = new Date(Date.now() + oneHourMs);
    const compact = serverDate.toISOString().replace(/[-:]|\.\d{3}/g, "");
    const message = `Signature expired: 20000101T000000Z is now earlier than ... (${compact} - 5 min. ahead of your clock)`;

    let error: Error | any;
    try {
      signer.errorHandler({
        // _preRequestSystemClockOffset: 0 — clock was in sync when this request started;
        // a concurrent request corrected it to oneHourMs before this error handler ran.
        _preRequestSystemClockOffset: 0,
        config: {
          systemClockOffset: oneHourMs,
        },
      })(
        Object.assign(new Error(message), {
          name: "InvalidSignatureException",
          $metadata: {},
          $response: {
            headers: {},
            statusCode: 403,
          },
        })
      );
    } catch (e) {
      error = e as Error;
    }

    expect((error as any).$metadata.clockSkewCorrected).toBe(true);
  });

  it("does not set clockSkewCorrected when error message has no compact timestamp", async () => {
    const signer = new AwsSdkSigV4Signer();
    const oneHourMs = 60 * 60 * 1000;

    let error: Error | any;
    try {
      signer.errorHandler({
        _preRequestSystemClockOffset: 0,
        config: {
          systemClockOffset: 0,
        },
      })(
        Object.assign(new Error("InvalidSignatureException"), {
          name: "InvalidSignatureException",
          // Message contains no (YYYYMMDDTHHMMSSz ...) segment.
          $metadata: {},
          $response: { headers: {}, statusCode: 403 },
        })
      );
    } catch (e) {
      error = e as Error;
    }

    expect((error as any).$metadata.clockSkewCorrected).toBeUndefined();
  });

  it("does not parse server time from a message with a bare (non-parenthesized) compact timestamp", async () => {
    const signer = new AwsSdkSigV4Signer();
    const oneHourMs = 60 * 60 * 1000;
    const serverDate = new Date(Date.now() + oneHourMs);
    const compact = serverDate.toISOString().replace(/[-:]|\.\d{3}/g, "");
    // Timestamp appears in the message but NOT inside parentheses — should not match.
    const message = `Signature expired: ${compact} is now earlier than ...`;

    let error: Error | any;
    try {
      signer.errorHandler({
        _preRequestSystemClockOffset: 0,
        config: {
          systemClockOffset: 0,
        },
      })(
        Object.assign(new Error(message), {
          name: "InvalidSignatureException",
          $metadata: {},
          $response: { headers: {}, statusCode: 403 },
        })
      );
    } catch (e) {
      error = e as Error;
    }

    expect((error as any).$metadata.clockSkewCorrected).toBeUndefined();
  });

  it("does not set clockSkewCorrected for non-clock-skew errors even when systemClockOffset is non-zero", async () => {
    const signer = new AwsSdkSigV4Signer();
    const oneHourMs = 60 * 60 * 1000;
    const serverTime = new Date(Date.now() + oneHourMs).toISOString();

    let error: Error | any;
    try {
      signer.errorHandler({
        config: {
          systemClockOffset: oneHourMs,
        },
      })(
        Object.assign(new Error("Throttling"), {
          name: "Throttling",
          // No ServerTime property — this error is not a clock-skew response.
          // Only the date HTTP header is present (standard on all responses).
          $metadata: {},
          $response: {
            headers: { date: serverTime },
            statusCode: 429,
          },
        })
      );
    } catch (e) {
      error = e as Error;
    }

    expect((error as any).$metadata.clockSkewCorrected).toBeUndefined();
  });
});
