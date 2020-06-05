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

  it("adds retryMiddleware if maxRetries > 0", () => {
    const maxAttempts = 1;
    getRetryPlugin({
      maxAttempts,
      retryStrategy: {} as RetryStrategy
    }).applyToStack((mockClientStack as unknown) as MiddlewareStack<any, any>);
    expect(mockClientStack.add).toHaveBeenCalledTimes(1);
    expect(mockClientStack.add.mock.calls[0][1]).toEqual(
      retryMiddlewareOptions
    );
  });

  it("skips adding retryMiddleware if maxRetries = 0", () => {
    const maxAttempts = 0;
    getRetryPlugin({
      maxAttempts,
      retryStrategy: {} as RetryStrategy
    }).applyToStack((mockClientStack as unknown) as MiddlewareStack<any, any>);
    expect(mockClientStack.add).toHaveBeenCalledTimes(0);
  });
});

describe("retryMiddleware", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls retryStrategy.retry with next and args", async () => {
    const maxAttempts = 1;
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
