import { describe, expect, test as it } from "vitest";

import { AwsSdkSigV4Signer } from "./AwsSdkSigV4Signer";

describe(AwsSdkSigV4Signer.name, () => {
  it("sets clockSkewCorrected when systemClockOffset is updated locally", async () => {
    const signer = new AwsSdkSigV4Signer();

    let error: Error | any;
    try {
      signer.errorHandler({
        _preRequestSystemClockOffset: 30 * 60 * 1000,
        config: {
          systemClockOffset: 30 * 60 * 1000,
        },
      })(
        Object.assign(new Error("uh oh"), {
          $metadata: {},
          $response: {
            headers: { date: new Date().toISOString() },
            statusCode: 500,
          },
        })
      );
    } catch (e) {
      error = e as Error;
    }

    expect((error as any).$metadata.clockSkewCorrected).toBe(true);
  });

  it("sets clockSkewCorrected when offset was already corrected by a concurrent request (ServerTime)", async () => {
    const signer = new AwsSdkSigV4Signer();
    const oneHourMs = 60 * 60 * 1000;
    const serverTime = new Date(Date.now() + oneHourMs).toISOString();

    let error: Error | any;
    try {
      signer.errorHandler({
        _preRequestSystemClockOffset: 0,
        config: {
          systemClockOffset: oneHourMs,
        },
      })(
        Object.assign(new Error("RequestTimeTooSkewed"), {
          name: "RequestTimeTooSkewed",
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

    expect((error as any).$metadata.clockSkewCorrected).toBe(true);
  });

  it("does not set clockSkewCorrected when no server time is available", async () => {
    const signer = new AwsSdkSigV4Signer();

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
          $metadata: {},
          $response: { headers: {}, statusCode: 403 },
        })
      );
    } catch (e) {
      error = e as Error;
    }

    expect((error as any).$metadata.clockSkewCorrected).toBeUndefined();
  });

  it("does not set clockSkewCorrected for non-clock-skew errors with matching offset", async () => {
    const signer = new AwsSdkSigV4Signer();
    const oneHourMs = 60 * 60 * 1000;
    const serverTime = new Date(Date.now() + oneHourMs).toISOString();

    let error: Error | any;
    try {
      signer.errorHandler({
        _preRequestSystemClockOffset: oneHourMs,
        config: {
          systemClockOffset: oneHourMs,
        },
      })(
        Object.assign(new Error("Throttling"), {
          name: "Throttling",
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
