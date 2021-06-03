import { FinalizeHandlerArguments, HandlerExecutionContext, MiddlewareStack, RetryStrategy } from "@aws-sdk/types";

import { getRetryPlugin, retryMiddleware, retryMiddlewareOptions } from "./retryMiddleware";

describe(getRetryPlugin.name, () => {
  const mockClientStack = {
    add: jest.fn(),
  };
  const mockRetryStrategy = {
    mode: "mock",
    retry: jest.fn(),
  };

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
  const mockRetryStrategy = {
    mode: "mock",
    retry: jest.fn(),
  };
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls retryStrategy.retry with next and args", async () => {
    const maxAttempts = 2;
    const next = jest.fn();
    const args = {
      request: {},
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
