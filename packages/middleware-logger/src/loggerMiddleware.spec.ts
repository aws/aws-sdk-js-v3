import { Logger, MiddlewareStack } from "@aws-sdk/types";

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
  const mockNext = jest.fn();

  const mockArgs = {
    input: {
      inputKey: "inputValue",
    },
    request: {
      method: "GET",
      headers: {},
    },
  };

  const mockResponse = {
    output: {
      $metadata: {
        statusCode: 200,
        requestId: "requestId",
      },
      outputKey: "outputValue",
    },
  };

  beforeEach(() => {
    mockNext.mockResolvedValueOnce(mockResponse);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns without logging if context.logger is not defined", async () => {
    const response = await loggerMiddleware()(mockNext, {})(mockArgs);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(mockResponse);
  });

  it("returns without logging if context.logger doesn't have info function", async () => {
    const logger = {} as Logger;
    const response = await loggerMiddleware()(mockNext, { logger })(mockArgs);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(mockResponse);
  });

  it("logs $metadata if context.logger has info function", async () => {
    const logger = ({ info: jest.fn() } as unknown) as Logger;

    const context = {
      logger,
    };

    const response = await loggerMiddleware()(mockNext, context)(mockArgs);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(mockResponse);

    expect(logger.info).toHaveBeenCalledTimes(1);

    const {
      output: { $metadata },
    } = mockResponse;
    expect(logger.info).toHaveBeenCalledWith({
      $metadata,
    });
  });
});
