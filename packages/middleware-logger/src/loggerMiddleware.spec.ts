import { FinalizeHandlerArguments, Logger, MiddlewareStack } from "@aws-sdk/types";

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
      headers: {},
    },
    output: {
      $metadata: {
        statusCode: 200,
        requestId: "requestId",
      },
      outputKey: "outputValue",
    },
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

  it("returns without logging if context.logger doesn't have debug/info functions", async () => {
    const logger = {} as Logger;
    const response = await loggerMiddleware()(next, { logger })(args as FinalizeHandlerArguments<any>);
    expect(next).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(mockResponse);
  });

  it("logs $metadata, input, output if context.logger has info function", async () => {
    const logger = ({ info: jest.fn() } as unknown) as Logger;

    const inputFilterSensitiveLog = jest.fn().mockImplementationOnce((input) => input);
    const outputFilterSensitiveLog = jest.fn().mockImplementationOnce((output) => output);
    const context = {
      logger,
      inputFilterSensitiveLog,
      outputFilterSensitiveLog,
    };

    const response = await loggerMiddleware()(next, context)(args as FinalizeHandlerArguments<any>);
    expect(next).toHaveBeenCalledTimes(1);
    expect(response).toStrictEqual(mockResponse);

    expect(inputFilterSensitiveLog).toHaveBeenCalledTimes(1);
    expect(outputFilterSensitiveLog).toHaveBeenCalledTimes(1);
    expect(logger.info).toHaveBeenCalledTimes(1);

    const {
      output: { $metadata, ...outputWithoutMetadata },
    } = mockResponse;
    expect(logger.info).toHaveBeenCalledWith({
      $metadata,
      input: args.input,
      output: outputWithoutMetadata,
    });
  });
});
