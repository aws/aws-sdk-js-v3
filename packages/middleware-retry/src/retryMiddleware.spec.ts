import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { isServerError, isThrottlingError, isTransientError } from "@aws-sdk/service-error-classification";
import { FinalizeHandlerArguments, HandlerExecutionContext, MiddlewareStack } from "@aws-sdk/types";
import { INVOCATION_ID_HEADER, REQUEST_HEADER } from "@aws-sdk/util-retry";
import { v4 } from "uuid";

import { getRetryPlugin, retryMiddleware, retryMiddlewareOptions } from "./retryMiddleware";

jest.mock("@aws-sdk/service-error-classification");
jest.mock("@aws-sdk/protocol-http");
jest.mock("uuid");

describe(getRetryPlugin.name, () => {
  const mockClientStack = {
    add: jest.fn(),
  };
  const mockRetryStrategy = {
    mode: "mock",
    retry: jest.fn(),
  };
  beforeEach(() => {
    (isThrottlingError as jest.Mock).mockReturnValue(false);
    (isTransientError as jest.Mock).mockReturnValue(false);
    (isServerError as jest.Mock).mockReturnValue(false);
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

  describe("adds retryMiddleware", () => {
    [1, 2, 3].forEach((maxAttempts) => {
      it(`when maxAttempts=${maxAttempts}`, () => {
        getRetryPlugin({
          maxAttempts: () => Promise.resolve(maxAttempts),
          retryStrategy: jest.fn().mockResolvedValue(mockRetryStrategy),
        }).applyToStack(mockClientStack as unknown as MiddlewareStack<any, any>);
        expect(mockClientStack.add).toHaveBeenCalledTimes(1);
        expect(mockClientStack.add.mock.calls[0][1]).toEqual(retryMiddlewareOptions);
      });
    });
  });
});

describe(retryMiddleware.name, () => {
  const maxAttempts = 2;
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("RetryStrategy", () => {
    const mockRetryStrategy = {
      mode: "mock",
      retry: jest.fn(),
    };

    it("calls retryStrategy.retry with next and args", async () => {
      const next = jest.fn();
      const args = {
        request: { headers: {} },
      };
      const context: HandlerExecutionContext = {};

      await retryMiddleware({
        maxAttempts: () => Promise.resolve(maxAttempts),
        retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
      })(
        next,
        context
      )(args as FinalizeHandlerArguments<any>);
      expect(mockRetryStrategy.retry).toHaveBeenCalledTimes(1);
      expect(mockRetryStrategy.retry).toHaveBeenCalledWith(next, args);
      expect(context.userAgent).toContainEqual(["cfg/retry-mode", mockRetryStrategy.mode]);
    });
  });

  describe("RetryStrategyV2", () => {
    const args = {
      request: { headers: {} },
    };
    const partitionId = "test_partition_id";
    const context: HandlerExecutionContext = {
      partition_id: partitionId,
    };
    const mockRetryToken = {
      getRetryToken: () => 1,
      getRetryDelay: () => 1,
      getRetryCount: () => 1,
    };
    const mockRetryStrategy = {
      mode: "mock",
      acquireInitialRetryToken: jest.fn().mockResolvedValue(mockRetryToken),
      refreshRetryTokenForRetry: jest.fn().mockResolvedValue(mockRetryToken),
      recordSuccess: jest.fn(),
    };
    const mockResponse = "mockResponse";
    const mockSuccess = {
      response: mockResponse,
      output: {
        $metadata: {},
      },
    };
    const getErrorWithValues = (retryAfter: number | string, retryAfterHeaderName?: string) => {
      const error = new Error("mockError");
      Object.defineProperty(error, "$response", {
        value: {
          headers: { [retryAfterHeaderName ? retryAfterHeaderName : "retry-after"]: String(retryAfter) },
        },
      });
      return error;
    };

    it("calls acquireInitialRetryToken and records success when next succeeds", async () => {
      const next = jest.fn().mockResolvedValueOnce(mockSuccess);
      const { response, output } = await retryMiddleware({
        maxAttempts: () => Promise.resolve(maxAttempts),
        retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
      })(
        next,
        context
      )(args as FinalizeHandlerArguments<any>);
      expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledTimes(1);
      expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledWith(partitionId);
      expect(mockRetryStrategy.recordSuccess).toHaveBeenCalledTimes(1);
      expect(mockRetryStrategy.recordSuccess).toHaveBeenCalledWith(mockRetryToken);
      expect(output.$metadata.attempts).toBe(1);
    });

    describe("throws when token cannot be refreshed", () => {
      it("throw last request error", async () => {
        const requestError = new Error("mockRequestError");
        (isThrottlingError as jest.Mock).mockReturnValue(true);
        const next = jest.fn().mockRejectedValue(requestError);
        const errorInfo = {
          errorType: "THROTTLING",
        };
        const mockRetryStrategy = {
          mode: "mock",
          acquireInitialRetryToken: jest.fn().mockResolvedValue(mockRetryToken),
          refreshRetryTokenForRetry: jest.fn().mockRejectedValue(new Error("Cannot refresh token")),
          recordSuccess: jest.fn(),
        };
        try {
          await retryMiddleware({
            maxAttempts: () => Promise.resolve(maxAttempts),
            retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
          })(
            next,
            context
          )(args as FinalizeHandlerArguments<any>);
        } catch (error) {
          expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledTimes(1);
          expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledWith(partitionId);
          expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledTimes(1);
          expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledWith(mockRetryToken, errorInfo);
          expect(error).toStrictEqual(requestError);
          expect(error.$metadata.attempts).toBe(1);
          expect(error.$metadata.totalRetryDelay).toBeDefined();
        }
      });
    });

    describe("calls acquireInitialRetryToken and refreshes retry token", () => {
      const mockError = new Error("mockError");
      it("sets throttling error type", async () => {
        (isThrottlingError as jest.Mock).mockReturnValue(true);
        const next = jest.fn().mockRejectedValueOnce(mockError).mockResolvedValueOnce(mockSuccess);
        const errorInfo = {
          errorType: "THROTTLING",
        };
        const { response, output } = await retryMiddleware({
          maxAttempts: () => Promise.resolve(maxAttempts),
          retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
        })(
          next,
          context
        )(args as FinalizeHandlerArguments<any>);
        expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledTimes(1);
        expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledWith(partitionId);
        expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledTimes(1);
        expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledWith(mockRetryToken, errorInfo);
        expect(output.$metadata.attempts).toBe(2);
        expect(output.$metadata.totalRetryDelay).toBeDefined();
      });
      it("sets transient error type", async () => {
        (isTransientError as jest.Mock).mockReturnValue(true);
        (isThrottlingError as jest.Mock).mockReturnValue(false);
        const next = jest.fn().mockRejectedValueOnce(mockError).mockResolvedValueOnce(mockSuccess);
        const errorInfo = {
          errorType: "TRANSIENT",
        };
        const { response, output } = await retryMiddleware({
          maxAttempts: () => Promise.resolve(maxAttempts),
          retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
        })(
          next,
          context
        )(args as FinalizeHandlerArguments<any>);
        expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledTimes(1);
        expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledWith(partitionId);
        expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledTimes(1);
        expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledWith(mockRetryToken, errorInfo);
        expect(output.$metadata.attempts).toBe(2);
        expect(output.$metadata.totalRetryDelay).toBeDefined();
      });
      it("sets server error type", async () => {
        (isServerError as jest.Mock).mockReturnValue(true);
        (isTransientError as jest.Mock).mockReturnValue(false);
        (isThrottlingError as jest.Mock).mockReturnValue(false);
        const next = jest.fn().mockRejectedValueOnce(mockError).mockResolvedValueOnce(mockSuccess);
        const errorInfo = {
          errorType: "SERVER_ERROR",
        };
        const { response, output } = await retryMiddleware({
          maxAttempts: () => Promise.resolve(maxAttempts),
          retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
        })(
          next,
          context
        )(args as FinalizeHandlerArguments<any>);
        expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledTimes(1);
        expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledWith(partitionId);
        expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledTimes(1);
        expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledWith(mockRetryToken, errorInfo);
        expect(output.$metadata.attempts).toBe(2);
        expect(output.$metadata.totalRetryDelay).toBeDefined();
      });
      it("sets client error type", async () => {
        (isServerError as jest.Mock).mockReturnValue(false);
        (isTransientError as jest.Mock).mockReturnValue(false);
        (isThrottlingError as jest.Mock).mockReturnValue(false);
        const next = jest.fn().mockRejectedValueOnce(mockError).mockResolvedValueOnce(mockSuccess);
        const errorInfo = {
          errorType: "CLIENT_ERROR",
        };
        const { response, output } = await retryMiddleware({
          maxAttempts: () => Promise.resolve(maxAttempts),
          retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
        })(
          next,
          context
        )(args as FinalizeHandlerArguments<any>);
        expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledTimes(1);
        expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledWith(partitionId);
        expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledTimes(1);
        expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledWith(mockRetryToken, errorInfo);
        expect(output.$metadata.attempts).toBe(2);
        expect(output.$metadata.totalRetryDelay).toBeDefined();
      });

      describe("when retry-after is not set", () => {
        it("should not set retryAfter in errorInfo", async () => {
          const { isInstance } = HttpResponse;
          (isInstance as unknown as jest.Mock).mockReturnValue(true);
          Object.defineProperty(mockError, "$response", {
            value: {
              headers: { ["other-header"]: "foo" },
            },
          });
          const next = jest.fn().mockRejectedValueOnce(mockError).mockResolvedValueOnce(mockSuccess);
          const errorInfo = {
            errorType: "CLIENT_ERROR",
          };
          const { response, output } = await retryMiddleware({
            maxAttempts: () => Promise.resolve(maxAttempts),
            retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
          })(
            next,
            context
          )(args as FinalizeHandlerArguments<any>);
          expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledTimes(1);
          expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledWith(partitionId);
          expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledTimes(1);
          expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledWith(mockRetryToken, errorInfo);
          expect(output.$metadata.attempts).toBe(2);
          expect(output.$metadata.totalRetryDelay).toBeDefined();
        });
      });

      describe("when retry-after is set", () => {
        const now = Date.now();
        const retryAfterDate = new Date(now + 3000);
        const { isInstance } = HttpResponse;
        (isInstance as unknown as jest.Mock).mockReturnValue(true);
        const errorInfo = {
          errorType: "CLIENT_ERROR",
          retryAfterHint: retryAfterDate,
        };
        it("parses retry-after from date string", async () => {
          const error = getErrorWithValues(retryAfterDate.toISOString());
          const next = jest.fn().mockRejectedValueOnce(error).mockResolvedValueOnce(mockSuccess);
          const { response, output } = await retryMiddleware({
            maxAttempts: () => Promise.resolve(maxAttempts),
            retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
          })(
            next,
            context
          )(args as FinalizeHandlerArguments<any>);
          expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledTimes(1);
          expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledWith(partitionId);
          expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledTimes(1);
          expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledWith(mockRetryToken, errorInfo);
          expect(output.$metadata.attempts).toBe(2);
          expect(output.$metadata.totalRetryDelay).toBeDefined();
        });
        it("parses retry-after from seconds", async () => {
          const error = getErrorWithValues(retryAfterDate.getTime() / 1000);
          const next = jest.fn().mockRejectedValueOnce(error).mockResolvedValueOnce(mockSuccess);
          const { response, output } = await retryMiddleware({
            maxAttempts: () => Promise.resolve(maxAttempts),
            retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
          })(
            next,
            context
          )(args as FinalizeHandlerArguments<any>);
          expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledTimes(1);
          expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledWith(partitionId);
          expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledTimes(1);
          expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledWith(mockRetryToken, errorInfo);
          expect(output.$metadata.attempts).toBe(2);
          expect(output.$metadata.totalRetryDelay).toBeDefined();
        });
        it("parses retry-after from Retry-After header name", async () => {
          const error = getErrorWithValues(retryAfterDate.toISOString(), "Retry-After");
          const next = jest.fn().mockRejectedValueOnce(error).mockResolvedValueOnce(mockSuccess);
          const { response, output } = await retryMiddleware({
            maxAttempts: () => Promise.resolve(maxAttempts),
            retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
          })(
            next,
            context
          )(args as FinalizeHandlerArguments<any>);
          expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledTimes(1);
          expect(mockRetryStrategy.acquireInitialRetryToken).toHaveBeenCalledWith(partitionId);
          expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledTimes(1);
          expect(mockRetryStrategy.refreshRetryTokenForRetry).toHaveBeenCalledWith(mockRetryToken, errorInfo);
          expect(output.$metadata.attempts).toBe(2);
          expect(output.$metadata.totalRetryDelay).toBeDefined();
        });
        (isInstance as unknown as jest.Mock).mockReturnValue(false);
      });
    });

    describe("retry headers", () => {
      describe("not added if HttpRequest.isInstance returns false", () => {
        it(`retry informational header: ${INVOCATION_ID_HEADER}`, async () => {
          const next = jest.fn().mockResolvedValueOnce(mockSuccess);
          await retryMiddleware({
            maxAttempts: () => Promise.resolve(maxAttempts),
            retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
          })(
            next,
            context
          )(args as FinalizeHandlerArguments<any>);
          expect(next).toHaveBeenCalledTimes(1);
          expect(next.mock.calls[0][0].request.headers[INVOCATION_ID_HEADER]).not.toBeDefined();
        });
      });
      it(`header for each attempt as ${REQUEST_HEADER}`, async () => {
        const next = jest.fn().mockResolvedValueOnce(mockSuccess);
        await retryMiddleware({
          maxAttempts: () => Promise.resolve(maxAttempts),
          retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
        })(
          next,
          context
        )(args as FinalizeHandlerArguments<any>);
        expect(next).toHaveBeenCalledTimes(1);
        expect(next.mock.calls[0][0].request.headers[REQUEST_HEADER]).not.toBeDefined();
      });

      describe("added if HttpRequest.isInstance returns true", () => {
        it(`retry informational header: ${INVOCATION_ID_HEADER}`, async () => {
          const retryAfterDate = new Date(Date.now() + 3000);
          const error = getErrorWithValues(retryAfterDate.toISOString());
          const { isInstance } = HttpRequest;
          (isInstance as unknown as jest.Mock).mockReturnValue(true);
          (isThrottlingError as jest.Mock).mockReturnValue(true);
          const next = jest.fn().mockRejectedValueOnce(error).mockResolvedValueOnce(mockSuccess);
          await retryMiddleware({
            maxAttempts: () => Promise.resolve(maxAttempts),
            retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
          })(
            next,
            context
          )(args as FinalizeHandlerArguments<any>);
          expect(next).toHaveBeenCalledTimes(2);
          expect(next.mock.calls[0][0].request.headers[INVOCATION_ID_HEADER]).toBeDefined();
          expect(next.mock.calls[1][0].request.headers[INVOCATION_ID_HEADER]).toBeDefined();
        });
        it(`header for each attempt as ${REQUEST_HEADER}`, async () => {
          const retryAfterDate = new Date(Date.now() + 3000);
          const error = getErrorWithValues(retryAfterDate.toISOString());
          const { isInstance } = HttpRequest;
          (isInstance as unknown as jest.Mock).mockReturnValue(true);
          (isThrottlingError as jest.Mock).mockReturnValue(true);
          const next = jest.fn().mockRejectedValueOnce(error).mockResolvedValueOnce(mockSuccess);
          await retryMiddleware({
            maxAttempts: () => Promise.resolve(maxAttempts),
            retryStrategy: jest.fn().mockResolvedValue({ ...mockRetryStrategy, maxAttempts }),
          })(
            next,
            context
          )(args as FinalizeHandlerArguments<any>);
          expect(next).toHaveBeenCalledTimes(2);
          expect(next.mock.calls[0][0].request.headers[REQUEST_HEADER]).toBeDefined();
          expect(next.mock.calls[1][0].request.headers[REQUEST_HEADER]).toBeDefined();
        });
      });
    });
  });
});
