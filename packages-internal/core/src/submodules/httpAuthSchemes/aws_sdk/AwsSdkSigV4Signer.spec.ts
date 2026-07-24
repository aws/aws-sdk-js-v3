import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { AwsSdkSigV4Signer } from "./AwsSdkSigV4Signer";

describe(AwsSdkSigV4Signer.name, () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("sets clockSkewCorrected when skew exceeds detection threshold", async () => {
    const signer = new AwsSdkSigV4Signer();
    const fiveMinMs = 5 * 60 * 1000;
    const serverTime = new Date(Date.now() + fiveMinMs).toISOString();

    let error: Error | any;
    try {
      signer.errorHandler({
        _preRequestSystemClockOffset: 0,
        config: {
          systemClockOffset: 0,
        },
      })(
        Object.assign(new Error("uh oh"), {
          $metadata: {},
          $response: {
            headers: { date: serverTime },
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

  describe("when disableClockSkewCorrection is true", () => {
    it("sign() does not capture _requestSentAt or _preRequestSystemClockOffset", async () => {
      const signer = new AwsSdkSigV4Signer();
      const signingProperties: Record<string, unknown> = {
        context: { endpointV2: { properties: {} } },
        config: {
          systemClockOffset: 60_000,
          signer: async () => ({
            sign: async (request: any) => request,
          }),
          disableClockSkewCorrection: async () => true,
        },
      };

      const { HttpRequest } = await import("@smithy/core/protocols");
      const httpRequest = new HttpRequest({ hostname: "example.com", path: "/" });
      await signer.sign(httpRequest, { accessKeyId: "akid", secretAccessKey: "secret" }, signingProperties);

      expect(signingProperties._requestSentAt).toBeUndefined();
      expect(signingProperties._preRequestSystemClockOffset).toBeUndefined();
      expect(signingProperties._disableClockSkewCorrection).toBe(true);
    });

    it("errorHandler() does not update systemClockOffset or set clockSkewCorrected", async () => {
      const signer = new AwsSdkSigV4Signer();
      const oneHourMs = 60 * 60 * 1000;
      const serverTime = new Date(Date.now() + oneHourMs).toISOString();
      const config = { systemClockOffset: 0 };

      let error: Error | any;
      try {
        signer.errorHandler({
          _disableClockSkewCorrection: true,
          _preRequestSystemClockOffset: 0,
          config,
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

      expect(config.systemClockOffset).toBe(0);
      expect((error as any).$metadata.clockSkewCorrected).toBeUndefined();
    });

    it("successHandler() does not update systemClockOffset", () => {
      const signer = new AwsSdkSigV4Signer();
      const oneHourMs = 60 * 60 * 1000;
      const serverTime = new Date(Date.now() + oneHourMs).toISOString();
      const config = { systemClockOffset: 0 };

      signer.successHandler(
        { headers: { date: serverTime }, statusCode: 200 },
        {
          _disableClockSkewCorrection: true,
          config,
        }
      );

      expect(config.systemClockOffset).toBe(0);
    });
  });
});
