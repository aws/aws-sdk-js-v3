import { Logger } from "@aws-sdk/types";

import { deserializerMiddleware } from "./deserializerMiddleware";

describe("deserializerMiddleware", () => {
  const mockNext = jest.fn();
  const mockDeserializer = jest.fn();

  const mockOptions = {
    endpoint: () =>
      Promise.resolve({
        protocol: "protocol",
        hostname: "hostname",
        path: "path",
      }),
  };

  const mockArgs = {
    input: {
      inputKey: "inputValue",
    },
    request: {
      method: "GET",
      headers: {},
    },
  };

  const mockOutput = {
    $metadata: {
      statusCode: 200,
      requestId: "requestId",
    },
    outputKey: "outputValue",
  };

  const mockNextResponse = {
    response: {
      statusCode: 200,
      headers: {},
    },
  };

  const mockResponse = {
    response: mockNextResponse.response,
    output: mockOutput,
  };

  beforeEach(() => {
    mockNext.mockResolvedValueOnce(mockNextResponse);
    mockDeserializer.mockResolvedValueOnce(mockOutput);
  });

  afterEach(() => {
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith(mockArgs);
    expect(mockDeserializer).toHaveBeenCalledTimes(1);
    expect(mockDeserializer).toHaveBeenCalledWith(mockNextResponse.response, mockOptions);
    jest.clearAllMocks();
  });

  it("returns without logging if context.logger is not defined", async () => {
    const response = await deserializerMiddleware(mockOptions, mockDeserializer)(mockNext, {})(mockArgs);
    expect(response).toStrictEqual(mockResponse);
  });

  it("returns without logging if context.logger doesn't have debug/info function", async () => {
    const logger = {} as Logger;
    const response = await deserializerMiddleware(mockOptions, mockDeserializer)(mockNext, { logger })(mockArgs);
    expect(response).toStrictEqual(mockResponse);
  });

  it("logs output if context.logger has info function", async () => {
    const logger = ({ info: jest.fn() } as unknown) as Logger;

    const outputFilterSensitiveLog = jest.fn().mockImplementationOnce((output) => output);
    const response = await deserializerMiddleware(mockOptions, mockDeserializer)(mockNext, {
      logger,
      outputFilterSensitiveLog: outputFilterSensitiveLog,
    })(mockArgs);

    const { $metadata, ...outputWithoutMetadata } = mockOutput;
    expect(response).toStrictEqual(mockResponse);
    expect(outputFilterSensitiveLog).toHaveBeenCalledTimes(1);
    expect(outputFilterSensitiveLog).toHaveBeenCalledWith(outputWithoutMetadata);
    expect(logger.info).toHaveBeenCalledTimes(1);
    expect(logger.info).toHaveBeenCalledWith({ output: outputWithoutMetadata });
  });
});
