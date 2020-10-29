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
    response: {
      statusCode: 200,
      headers: {
        "x-amzn-requestid": "requestId",
        "x-amz-id-2": "extendedRequestId",
        "x-amz-cf-id": "cfId",
      },
    },
    output: {
      outputKey: "outputValue",
    },
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns without logging if context.logger is not defined", async () => {
    mockNext.mockResolvedValueOnce(mockResponse);
    const response = await loggerMiddleware()(mockNext, {})(mockArgs);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(mockResponse);
  });

  it("returns without logging if context.logger doesn't have info function", async () => {
    mockNext.mockResolvedValueOnce(mockResponse);
    const logger = {} as Logger;
    const response = await loggerMiddleware()(mockNext, { logger })(mockArgs);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(mockResponse);
  });

  it("logs metadata if context.logger has info function", async () => {
    mockNext.mockResolvedValueOnce(mockResponse);
    const logger = ({ info: jest.fn() } as unknown) as Logger;

    const context = {
      logger,
    };

    const response = await loggerMiddleware()(mockNext, context)(mockArgs);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(mockResponse);

    expect(logger.info).toHaveBeenCalledTimes(1);

    expect(logger.info).toHaveBeenCalledWith({
      metadata: {
        statusCode: mockResponse.response.statusCode,
        requestId: mockResponse.response.headers["x-amzn-requestid"],
        extendedRequestId: mockResponse.response.headers["x-amz-id-2"],
        cfId: mockResponse.response.headers["x-amz-cf-id"],
      },
    });
  });

  it("logs header x-amzn-request-id as requestId if x-amzn-requestid is not present", async () => {
    const requestIdBackup = "requestIdBackup";
    const customResponse = {
      ...mockResponse,
      response: {
        ...mockResponse.response,
        headers: {
          "x-amzn-request-id": requestIdBackup,
        },
      },
    };
    mockNext.mockResolvedValueOnce(customResponse);
    const logger = ({ info: jest.fn() } as unknown) as Logger;

    const context = {
      logger,
    };

    const response = await loggerMiddleware()(mockNext, context)(mockArgs);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(customResponse);

    expect(logger.info).toHaveBeenCalledTimes(1);

    expect(logger.info).toHaveBeenCalledWith({
      metadata: {
        statusCode: customResponse.response.statusCode,
        requestId: requestIdBackup,
        extendedRequestId: undefined,
        cfId: undefined,
      },
    });
  });
});
