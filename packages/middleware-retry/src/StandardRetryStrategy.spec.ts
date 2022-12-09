import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { isThrottlingError } from "@aws-sdk/service-error-classification";
import {
  DEFAULT_MAX_ATTEMPTS,
  DEFAULT_RETRY_DELAY_BASE,
  INITIAL_RETRY_TOKENS,
  RETRY_MODES,
  THROTTLING_RETRY_DELAY_BASE,
} from "@aws-sdk/util-retry";
import { v4 } from "uuid";

import { getDefaultRetryQuota } from "./defaultRetryQuota";
import { defaultDelayDecider } from "./delayDecider";
import { defaultRetryDecider } from "./retryDecider";
import { StandardRetryStrategy } from "./StandardRetryStrategy";
import { RetryQuota } from "./types";

jest.mock("@aws-sdk/service-error-classification");
jest.mock("./delayDecider");
jest.mock("./retryDecider");
jest.mock("./defaultRetryQuota");
jest.mock("@aws-sdk/protocol-http");
jest.mock("uuid");

describe("defaultStrategy", () => {
  let next: jest.Mock; // variable for next mock function in utility methods
  const maxAttempts = 3;

  const mockDefaultRetryQuota = {
    hasRetryTokens: jest.fn().mockReturnValue(true),
    retrieveRetryTokens: jest.fn().mockReturnValue(1),
    releaseRetryTokens: jest.fn(),
  };

  const mockSuccessfulOperation = (maxAttempts: number, options?: { mockResponse?: string }) => {
    next = jest.fn().mockResolvedValueOnce({
      response: options?.mockResponse,
      output: { $metadata: {} },
    });

    const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
    return retryStrategy.retry(next, { request: { headers: {} } } as any);
  };

  const mockFailedOperation = async (maxAttempts: number, options?: { mockError?: Error }) => {
    const mockError = options?.mockError ?? new Error("mockError");
    next = jest.fn().mockRejectedValue(mockError);

    const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
    try {
      await retryStrategy.retry(next, { request: { headers: {} } } as any);
    } catch (error) {
      expect(error).toStrictEqual(mockError);
      return error;
    }
  };

  const mockSuccessAfterOneFail = (maxAttempts: number, options?: { mockError?: Error; mockResponse?: string }) => {
    const mockError = options?.mockError ?? new Error("mockError");
    const mockResponse = {
      response: options?.mockResponse,
      output: { $metadata: {} },
    };

    next = jest.fn().mockRejectedValueOnce(mockError).mockResolvedValueOnce(mockResponse);

    const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
    return retryStrategy.retry(next, { request: { headers: {} } } as any);
  };

  const mockSuccessAfterTwoFails = (maxAttempts: number, options?: { mockError?: Error; mockResponse?: string }) => {
    const mockError = options?.mockError ?? new Error("mockError");
    const mockResponse = {
      response: options?.mockResponse,
      output: { $metadata: {} },
    };

    next = jest
      .fn()
      .mockRejectedValueOnce(mockError)
      .mockRejectedValueOnce(mockError)
      .mockResolvedValueOnce(mockResponse);

    const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
    return retryStrategy.retry(next, { request: { headers: {} } } as any);
  };

  beforeEach(() => {
    (isThrottlingError as jest.Mock).mockReturnValue(true);
    (defaultDelayDecider as jest.Mock).mockReturnValue(0);
    (defaultRetryDecider as jest.Mock).mockReturnValue(true);
    (getDefaultRetryQuota as jest.Mock).mockReturnValue(mockDefaultRetryQuota);
    (HttpRequest as unknown as jest.Mock).mockReturnValue({
      isInstance: jest.fn().mockReturnValue(false),
    });
    (HttpResponse as unknown as jest.Mock).mockReturnValue({
      isInstance: jest.fn().mockReturnValue(false),
    });
    (v4 as jest.Mock).mockReturnValue("42");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("sets maxAttemptsProvider as class member variable", () => {
    [1, 2, 3].forEach((maxAttempts) => {
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      expect(retryStrategy["maxAttemptsProvider"]()).resolves.toBe(maxAttempts);
    });
  });

  it(`sets mode=${RETRY_MODES.STANDARD}`, () => {
    const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
    expect(retryStrategy.mode).toStrictEqual(RETRY_MODES.STANDARD);
  });

  it("handles non-standard errors", () => {
    const nonStandardErrors = [undefined, "foo", { foo: "bar" }, 123, false, null];
    const maxAttempts = 1;
    const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
    for (const error of nonStandardErrors) {
      next = jest.fn().mockRejectedValue(error);
      expect(retryStrategy.retry(next, { request: { headers: {} } } as any)).rejects.toBeInstanceOf(Error);
    }
  });

  describe("retryDecider init", () => {
    it("sets defaultRetryDecider if options is undefined", () => {
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      expect(retryStrategy["retryDecider"]).toBe(defaultRetryDecider);
    });

    it("sets defaultRetryDecider if options.retryDecider is undefined", () => {
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts), {});
      expect(retryStrategy["retryDecider"]).toBe(defaultRetryDecider);
    });

    it("sets options.retryDecider if defined", () => {
      const retryDecider = jest.fn();
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts), {
        retryDecider,
      });
      expect(retryStrategy["retryDecider"]).toBe(retryDecider);
    });
  });

  describe("delayDecider init", () => {
    it("sets defaultDelayDecider if options is undefined", () => {
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      expect(retryStrategy["delayDecider"]).toBe(defaultDelayDecider);
    });

    it("sets defaultDelayDecider if options.delayDecider undefined", () => {
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts), {});
      expect(retryStrategy["delayDecider"]).toBe(defaultDelayDecider);
    });

    it("sets options.delayDecider if defined", () => {
      const delayDecider = jest.fn();
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts), {
        delayDecider,
      });
      expect(retryStrategy["delayDecider"]).toBe(delayDecider);
    });
  });

  describe("retryQuota init", () => {
    it("sets getDefaultRetryQuota if options is undefined", () => {
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      expect(retryStrategy["retryQuota"]).toBe(getDefaultRetryQuota(INITIAL_RETRY_TOKENS));
    });

    it("sets getDefaultRetryQuota if options.delayDecider undefined", () => {
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts), {});
      expect(retryStrategy["retryQuota"]).toBe(getDefaultRetryQuota(INITIAL_RETRY_TOKENS));
    });

    it("sets options.retryQuota if defined", () => {
      const retryQuota = {} as RetryQuota;
      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts), {
        retryQuota,
      });
      expect(retryStrategy["retryQuota"]).toBe(retryQuota);
    });
  });

  describe("delayDecider", () => {
    describe("delayBase value passed", () => {
      const testDelayBasePassed = async (delayBaseToTest: number, mockThrottlingError: boolean) => {
        (isThrottlingError as jest.Mock).mockReturnValueOnce(mockThrottlingError);

        const mockError = new Error();
        await mockSuccessAfterOneFail(maxAttempts, { mockError });

        expect(isThrottlingError as jest.Mock).toHaveBeenCalledTimes(1);
        expect(isThrottlingError as jest.Mock).toHaveBeenCalledWith(mockError);
        expect(defaultDelayDecider as jest.Mock).toHaveBeenCalledTimes(1);
        expect((defaultDelayDecider as jest.Mock).mock.calls[0][0]).toBe(delayBaseToTest);
      };

      it("should be equal to THROTTLING_RETRY_DELAY_BASE if error is throttling error", async () => {
        return testDelayBasePassed(THROTTLING_RETRY_DELAY_BASE, true);
      });

      it("should be equal to DEFAULT_RETRY_DELAY_BASE in error is not a throttling error", async () => {
        return testDelayBasePassed(DEFAULT_RETRY_DELAY_BASE, false);
      });
    });

    describe("attempts value passed", () => {
      it("on successful operation", async () => {
        await mockSuccessfulOperation(maxAttempts);
        expect(defaultDelayDecider as jest.Mock).not.toHaveBeenCalled();
      });

      it("in case of single failure", async () => {
        await mockSuccessAfterOneFail(maxAttempts);
        expect(defaultDelayDecider as jest.Mock).toHaveBeenCalledTimes(1);
        expect((defaultDelayDecider as jest.Mock).mock.calls[0][1]).toBe(1);
      });

      it("on all fails", async () => {
        await mockFailedOperation(maxAttempts);
        expect(defaultDelayDecider as jest.Mock).toHaveBeenCalledTimes(2);
        expect((defaultDelayDecider as jest.Mock).mock.calls[0][1]).toBe(1);
        expect((defaultDelayDecider as jest.Mock).mock.calls[1][1]).toBe(2);
      });
    });

    describe("totalRetryDelay", () => {
      describe("when retry-after is not set", () => {
        it("should be equal to sum of values computed by delayDecider", async () => {
          jest.spyOn(global, "setTimeout");

          const FIRST_DELAY = 100;
          const SECOND_DELAY = 200;

          (defaultDelayDecider as jest.Mock).mockReturnValueOnce(FIRST_DELAY).mockReturnValueOnce(SECOND_DELAY);

          const maxAttempts = 3;
          const error = await mockFailedOperation(maxAttempts);
          expect(error.$metadata.totalRetryDelay).toEqual(FIRST_DELAY + SECOND_DELAY);

          expect(defaultDelayDecider as jest.Mock).toHaveBeenCalledTimes(maxAttempts - 1);
          expect(setTimeout).toHaveBeenCalledTimes(maxAttempts - 1);
          expect((setTimeout as unknown as jest.Mock).mock.calls[0][1]).toBe(FIRST_DELAY);
          expect((setTimeout as unknown as jest.Mock).mock.calls[1][1]).toBe(SECOND_DELAY);
        });
      });

      describe("when retry-after is set", () => {
        const getErrorWithValues = async (
          delayDeciderInMs: number,
          retryAfter: number | string,
          retryAfterHeaderName?: string
        ) => {
          (defaultDelayDecider as jest.Mock).mockReturnValueOnce(delayDeciderInMs);

          const maxAttempts = 2;
          const mockError = new Error();
          Object.defineProperty(mockError, "$response", {
            value: {
              headers: { [retryAfterHeaderName ? retryAfterHeaderName : "retry-after"]: String(retryAfter) },
            },
          });
          const error = await mockFailedOperation(maxAttempts, { mockError });
          expect(defaultDelayDecider as jest.Mock).toHaveBeenCalledTimes(maxAttempts - 1);
          expect(setTimeout).toHaveBeenCalledTimes(maxAttempts - 1);

          return error;
        };

        beforeEach(() => {
          jest.spyOn(global, "setTimeout");
        });

        describe("uses retry-after value if it's greater than that from delayDecider", () => {
          beforeEach(() => {
            const { isInstance } = HttpResponse;
            (isInstance as unknown as jest.Mock).mockReturnValueOnce(true);
          });

          describe("when value is in seconds", () => {
            const testWithHeaderName = async (retryAfterHeaderName: string) => {
              const delayDeciderInMs = 2000;
              const retryAfterInSeconds = 3;

              const error = await getErrorWithValues(delayDeciderInMs, retryAfterInSeconds, retryAfterHeaderName);
              expect(error.$metadata.totalRetryDelay).toEqual(retryAfterInSeconds * 1000);
              expect((setTimeout as unknown as jest.Mock).mock.calls[0][1]).toBe(retryAfterInSeconds * 1000);
            };

            it("with header in small case", async () => {
              testWithHeaderName("retry-after");
            });

            it("with header with first letter capital", async () => {
              testWithHeaderName("Retry-After");
            });
          });

          it("when value is a Date", async () => {
            const mockDateNow = Date.now();
            jest.spyOn(Date, "now").mockReturnValue(mockDateNow);

            const delayDeciderInMs = 2000;
            const retryAfterInSeconds = 3;
            const retryAfterDate = new Date(mockDateNow + retryAfterInSeconds * 1000);

            const error = await getErrorWithValues(delayDeciderInMs, retryAfterDate.toISOString());
            expect(error.$metadata.totalRetryDelay).toEqual(retryAfterInSeconds * 1000);
            expect((setTimeout as unknown as jest.Mock).mock.calls[0][1]).toBe(retryAfterInSeconds * 1000);
          });
        });

        it("ignores retry-after value if it's smaller than that from delayDecider", async () => {
          const delayDeciderInMs = 3000;
          const retryAfterInSeconds = 2;

          const error = await getErrorWithValues(delayDeciderInMs, retryAfterInSeconds);
          expect(error.$metadata.totalRetryDelay).toEqual(delayDeciderInMs);
          expect((setTimeout as unknown as jest.Mock).mock.calls[0][1]).toBe(delayDeciderInMs);
        });
      });
    });
  });

  describe("retryQuota", () => {
    describe("hasRetryTokens", () => {
      it("not called on successful operation", async () => {
        const { hasRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        await mockSuccessfulOperation(maxAttempts);
        expect(hasRetryTokens).not.toHaveBeenCalled();
      });

      it("called once in case of single failure", async () => {
        const { hasRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        await mockSuccessAfterOneFail(maxAttempts);
        expect(hasRetryTokens).toHaveBeenCalledTimes(1);
      });

      it("called once on each retry request", async () => {
        const { hasRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        await mockFailedOperation(maxAttempts);
        expect(hasRetryTokens).toHaveBeenCalledTimes(maxAttempts - 1);
      });
    });

    describe("releaseRetryTokens", () => {
      it("called once without param on successful operation", async () => {
        const { releaseRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        await mockSuccessfulOperation(maxAttempts);
        expect(releaseRetryTokens).toHaveBeenCalledTimes(1);
        expect(releaseRetryTokens).toHaveBeenCalledWith(undefined);
      });

      it("called once with retryTokenAmount in case of single failure", async () => {
        const retryTokens = 15;
        const { releaseRetryTokens, retrieveRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        (retrieveRetryTokens as jest.Mock).mockReturnValueOnce(retryTokens);

        await mockSuccessAfterOneFail(maxAttempts);
        expect(releaseRetryTokens).toHaveBeenCalledTimes(1);
        expect(releaseRetryTokens).toHaveBeenCalledWith(retryTokens);
      });

      it("called once with second retryTokenAmount in case of two failures", async () => {
        const retryTokensFirst = 15;
        const retryTokensSecond = 30;

        const { releaseRetryTokens, retrieveRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);

        (retrieveRetryTokens as jest.Mock).mockReturnValueOnce(retryTokensFirst).mockReturnValueOnce(retryTokensSecond);

        await mockSuccessAfterTwoFails(maxAttempts);
        expect(releaseRetryTokens).toHaveBeenCalledTimes(1);
        expect(releaseRetryTokens).toHaveBeenCalledWith(retryTokensSecond);
      });

      it("not called on unsuccessful operation", async () => {
        const { releaseRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        await mockFailedOperation(maxAttempts);
        expect(releaseRetryTokens).not.toHaveBeenCalled();
      });
    });

    describe("retrieveRetryTokens", () => {
      it("not called on successful operation", async () => {
        const { retrieveRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        await mockSuccessfulOperation(maxAttempts);
        expect(retrieveRetryTokens).not.toHaveBeenCalled();
      });

      it("called once in case of single failure", async () => {
        const { retrieveRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        await mockSuccessAfterOneFail(maxAttempts);
        expect(retrieveRetryTokens).toHaveBeenCalledTimes(1);
      });

      it("called once on each retry request", async () => {
        const { retrieveRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        await mockFailedOperation(maxAttempts);
        expect(retrieveRetryTokens).toHaveBeenCalledTimes(maxAttempts - 1);
      });
    });
  });

  describe("should not retry", () => {
    it("when the handler completes successfully", async () => {
      const mockResponse = "mockResponse";
      const { response, output } = await mockSuccessfulOperation(maxAttempts, {
        mockResponse,
      });

      expect(response).toStrictEqual(mockResponse);
      expect(output.$metadata.attempts).toBe(1);
      expect(output.$metadata.totalRetryDelay).toBe(0);
      expect(defaultRetryDecider as jest.Mock).not.toHaveBeenCalled();
      expect(defaultDelayDecider as jest.Mock).not.toHaveBeenCalled();
    });

    it("when retryDecider returns false", async () => {
      (defaultRetryDecider as jest.Mock).mockReturnValueOnce(false);
      const mockError = new Error();
      await mockFailedOperation(maxAttempts, { mockError });
      expect(defaultRetryDecider as jest.Mock).toHaveBeenCalledTimes(1);
      expect(defaultRetryDecider as jest.Mock).toHaveBeenCalledWith(mockError);
    });

    it("when the maximum number of attempts is reached", async () => {
      await mockFailedOperation(maxAttempts);
      expect(defaultRetryDecider as jest.Mock).toHaveBeenCalledTimes(maxAttempts - 1);
    });

    describe("when retryQuota.hasRetryTokens returns false", () => {
      it("in the first request", async () => {
        const { hasRetryTokens, retrieveRetryTokens, releaseRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        (hasRetryTokens as jest.Mock).mockReturnValueOnce(false);

        const mockError = new Error();
        await mockFailedOperation(maxAttempts, { mockError });

        expect(hasRetryTokens).toHaveBeenCalledTimes(1);
        expect(hasRetryTokens).toHaveBeenCalledWith(mockError);
        expect(retrieveRetryTokens).not.toHaveBeenCalled();
        expect(releaseRetryTokens).not.toHaveBeenCalled();
      });

      it("after the first retry", async () => {
        const { hasRetryTokens, retrieveRetryTokens, releaseRetryTokens } = getDefaultRetryQuota(INITIAL_RETRY_TOKENS);
        (hasRetryTokens as jest.Mock).mockReturnValueOnce(true).mockReturnValueOnce(false);

        const mockError = new Error();
        await mockFailedOperation(maxAttempts, { mockError });

        expect(hasRetryTokens).toHaveBeenCalledTimes(2);
        [1, 2].forEach((n) => {
          expect(hasRetryTokens).toHaveBeenNthCalledWith(n, mockError);
        });
        expect(retrieveRetryTokens).toHaveBeenCalledTimes(1);
        expect(retrieveRetryTokens).toHaveBeenCalledWith(mockError);
        expect(releaseRetryTokens).not.toHaveBeenCalled();
      });
    });
  });

  describe("retry informational header: amz-sdk-invocation-id", () => {
    describe("not added if HttpRequest.isInstance returns false", () => {
      it("on successful operation", async () => {
        await mockSuccessfulOperation(maxAttempts);
        expect(next).toHaveBeenCalledTimes(1);
        expect(next.mock.calls[0][0].request.headers["amz-sdk-invocation-id"]).not.toBeDefined();
      });

      it("in case of single failure", async () => {
        await mockSuccessAfterOneFail(maxAttempts);
        expect(next).toHaveBeenCalledTimes(2);
        [0, 1].forEach((index) => {
          expect(next.mock.calls[index][0].request.headers["amz-sdk-invocation-id"]).not.toBeDefined();
        });
      });

      it("in case of all failures", async () => {
        await mockFailedOperation(maxAttempts);
        expect(next).toHaveBeenCalledTimes(maxAttempts);
        [...Array(maxAttempts).keys()].forEach((index) => {
          expect(next.mock.calls[index][0].request.headers["amz-sdk-invocation-id"]).not.toBeDefined();
        });
      });
    });

    it("uses a unique header for every SDK operation invocation", async () => {
      const { isInstance } = HttpRequest;
      (isInstance as unknown as jest.Mock).mockReturnValue(true);

      const uuidForInvocationOne = "uuid-invocation-1";
      const uuidForInvocationTwo = "uuid-invocation-2";
      (v4 as jest.Mock).mockReturnValueOnce(uuidForInvocationOne).mockReturnValueOnce(uuidForInvocationTwo);

      const next = jest.fn().mockResolvedValue({
        response: "mockResponse",
        output: { $metadata: {} },
      });

      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      await retryStrategy.retry(next, { request: { headers: {} } } as any);
      await retryStrategy.retry(next, { request: { headers: {} } } as any);

      expect(next).toHaveBeenCalledTimes(2);
      expect(next.mock.calls[0][0].request.headers["amz-sdk-invocation-id"]).toBe(uuidForInvocationOne);
      expect(next.mock.calls[1][0].request.headers["amz-sdk-invocation-id"]).toBe(uuidForInvocationTwo);

      (isInstance as unknown as jest.Mock).mockReturnValue(false);
    });

    it("uses same value for additional HTTP requests associated with an SDK operation", async () => {
      const { isInstance } = HttpRequest;
      (isInstance as unknown as jest.Mock).mockReturnValueOnce(true);

      const uuidForInvocation = "uuid-invocation-1";
      (v4 as jest.Mock).mockReturnValueOnce(uuidForInvocation);

      await mockSuccessAfterOneFail(maxAttempts);

      expect(next).toHaveBeenCalledTimes(2);
      expect(next.mock.calls[0][0].request.headers["amz-sdk-invocation-id"]).toBe(uuidForInvocation);
      expect(next.mock.calls[1][0].request.headers["amz-sdk-invocation-id"]).toBe(uuidForInvocation);

      (isInstance as unknown as jest.Mock).mockReturnValue(false);
    });
  });

  describe("retry informational header: amz-sdk-request", () => {
    describe("not added if HttpRequest.isInstance returns false", () => {
      it("on successful operation", async () => {
        await mockSuccessfulOperation(maxAttempts);
        expect(next).toHaveBeenCalledTimes(1);
        expect(next.mock.calls[0][0].request.headers["amz-sdk-request"]).not.toBeDefined();
      });

      it("in case of single failure", async () => {
        await mockSuccessAfterOneFail(maxAttempts);
        expect(next).toHaveBeenCalledTimes(2);
        [0, 1].forEach((index) => {
          expect(next.mock.calls[index][0].request.headers["amz-sdk-request"]).not.toBeDefined();
        });
      });

      it("in case of all failures", async () => {
        await mockFailedOperation(maxAttempts);
        expect(next).toHaveBeenCalledTimes(maxAttempts);
        [...Array(maxAttempts).keys()].forEach((index) => {
          expect(next.mock.calls[index][0].request.headers["amz-sdk-request"]).not.toBeDefined();
        });
      });
    });

    it("adds header for each attempt", async () => {
      const { isInstance } = HttpRequest;
      (isInstance as unknown as jest.Mock).mockReturnValue(true);

      const mockError = new Error("mockError");
      next = jest.fn((args) => {
        // the header needs to be verified inside jest.Mock as arguments in
        // jest.mocks.calls has the value passed in final call
        const index = next.mock.calls.length - 1;
        expect(args.request.headers["amz-sdk-request"]).toBe(`attempt=${index + 1}; max=${maxAttempts}`);
        throw mockError;
      });

      const retryStrategy = new StandardRetryStrategy(() => Promise.resolve(maxAttempts));
      try {
        await retryStrategy.retry(next, { request: { headers: {} } } as any);
      } catch (error) {
        expect(error).toStrictEqual(mockError);
        return error;
      }

      expect(next).toHaveBeenCalledTimes(maxAttempts);
      (isInstance as unknown as jest.Mock).mockReturnValue(false);
    });
  });

  describe("defaults maxAttempts to DEFAULT_MAX_ATTEMPTS", () => {
    it("when maxAttemptsProvider throws error", async () => {
      const { isInstance } = HttpRequest;
      (isInstance as unknown as jest.Mock).mockReturnValue(true);

      next = jest.fn((args) => {
        expect(args.request.headers["amz-sdk-request"]).toBe(`attempt=1; max=${DEFAULT_MAX_ATTEMPTS}`);
        return Promise.resolve({
          response: "mockResponse",
          output: { $metadata: {} },
        });
      });

      const retryStrategy = new StandardRetryStrategy(() => Promise.reject("ERROR"));
      await retryStrategy.retry(next, { request: { headers: {} } } as any);

      expect(next).toHaveBeenCalledTimes(1);
      (isInstance as unknown as jest.Mock).mockReturnValue(false);
    });
  });
});
