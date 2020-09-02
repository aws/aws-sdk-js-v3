import { FinalizeHandlerArguments, MiddlewareStack } from "@aws-sdk/types";

import { getLoggerPlugin, loggerMiddleware, loggerMiddlewareOptions } from "./loggerMiddleware";

describe("getLoggerPlugin", () => {
  const mockClientStack = {
    add: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("adds loggerMiddleware", () => {
    getLoggerPlugin({}).applyToStack((mockClientStack as unknown) as MiddlewareStack<any, any>);
    expect(mockClientStack.add).toHaveBeenCalledTimes(1);
    expect(mockClientStack.add.mock.calls[0][1]).toEqual(loggerMiddlewareOptions);
  });
});

describe("loggerMiddleware", () => {
  const next = jest.fn();
  const args = {
    request: {
      method: "GET",
      headers: {},
    },
  };
  const mockResponse = {
    statusCode: 200,
    headers: {},
  };

  beforeEach(() => {
    next.mockResolvedValueOnce(mockResponse);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns without logging if context.logger is not defined", async () => {
    const response = await loggerMiddleware()(next, {})(args as FinalizeHandlerArguments<any>);
    expect(next).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(mockResponse);
  });
});
