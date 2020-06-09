import {
  getRetryPlugin,
  retryMiddleware,
  retryMiddlewareOptions
} from "./retryMiddleware";
import {
  MiddlewareStack,
  RetryStrategy,
  FinalizeHandlerArguments
} from "@aws-sdk/types";

describe("getRetryPlugin", () => {
  const mockClientStack = {
    add: jest.fn()
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("adds retryMiddleware if maxAttempts > 1", () => {
    [2, 3, 4].forEach(maxAttempts => {
      it(`when maxAttempts=${maxAttempts}`, () => {
        getRetryPlugin({
          maxAttempts,
          retryStrategy: {} as RetryStrategy
        }).applyToStack(
          (mockClientStack as unknown) as MiddlewareStack<any, any>
        );
        expect(mockClientStack.add).toHaveBeenCalledTimes(1);
        expect(mockClientStack.add.mock.calls[0][1]).toEqual(
          retryMiddlewareOptions
        );
      });
    });
  });

  describe("skips adding retryMiddleware if maxAttempts <= 1", () => {
    [0, 1].forEach(maxAttempts => {
      it(`when maxAttempts=${maxAttempts}`, () => {
        getRetryPlugin({
          maxAttempts,
          retryStrategy: {} as RetryStrategy
        }).applyToStack(
          (mockClientStack as unknown) as MiddlewareStack<any, any>
        );
        expect(mockClientStack.add).toHaveBeenCalledTimes(0);
      });
    });
  });
});

describe("retryMiddleware", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls retryStrategy.retry with next and args", async () => {
    const maxAttempts = 2;
    const next = jest.fn();
    const args = {
      request: {}
    };
    const mockRetryStrategy = {
      maxAttempts,
      retry: jest.fn()
    };

    await retryMiddleware({
      maxAttempts,
      retryStrategy: mockRetryStrategy
    })(next)(args as FinalizeHandlerArguments<any>);
    expect(mockRetryStrategy.retry).toHaveBeenCalledTimes(1);
    expect(mockRetryStrategy.retry).toHaveBeenCalledWith(next, args);
  });
});
