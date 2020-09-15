import { Logger } from "@aws-sdk/types";

import { serializerMiddleware } from "./serializerMiddleware";

describe("serializerMiddleware", () => {
  const mockNext = jest.fn();
  const mockSerializer = jest.fn();

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
  };

  const mockRequest = {
    method: "GET",
    headers: {},
  };

  const mockResponse = {
    statusCode: 200,
    headers: {},
  };

  const mockOutput = {
    $metadata: {
      statusCode: 200,
      requestId: "requestId",
    },
    outputKey: "outputValue",
  };

  const mockReturn = {
    response: mockResponse,
    output: mockOutput,
  };

  beforeEach(() => {
    mockNext.mockResolvedValueOnce(mockReturn);
    mockSerializer.mockResolvedValueOnce(mockRequest);
  });

  afterEach(() => {
    expect(mockSerializer).toHaveBeenCalledTimes(1);
    expect(mockSerializer).toHaveBeenCalledWith(mockArgs.input, mockOptions);
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith({ ...mockArgs, request: mockRequest });
    jest.clearAllMocks();
  });

  it("returns without logging if context.logger is not defined", async () => {
    const response = await serializerMiddleware(mockOptions, mockSerializer)(mockNext, {})(mockArgs);
    expect(response).toStrictEqual(mockReturn);
  });

  it("returns without logging if context.logger doesn't have debug/info function", async () => {
    const logger = {} as Logger;
    const response = await serializerMiddleware(mockOptions, mockSerializer)(mockNext, { logger })(mockArgs);
    expect(response).toStrictEqual(mockReturn);
  });

  it("logs input if context.logger has info function", async () => {
    const logger = ({ info: jest.fn() } as unknown) as Logger;

    const inputFilterSensitiveLog = jest.fn().mockImplementationOnce((input) => input);
    const response = await serializerMiddleware(mockOptions, mockSerializer)(mockNext, {
      logger,
      inputFilterSensitiveLog,
    })(mockArgs);

    expect(response).toStrictEqual(mockReturn);
    expect(inputFilterSensitiveLog).toHaveBeenCalledTimes(1);
    expect(inputFilterSensitiveLog).toHaveBeenCalledWith(mockArgs.input);
    expect(logger.info).toHaveBeenCalledTimes(1);
    expect(logger.info).toHaveBeenCalledWith({ input: mockArgs.input });
  });

  it("logs request if context.logger has debug function", async () => {
    const logger = ({ debug: jest.fn() } as unknown) as Logger;

    const response = await serializerMiddleware(mockOptions, mockSerializer)(mockNext, { logger })(mockArgs);

    expect(response).toStrictEqual(mockReturn);
    expect(logger.debug).toHaveBeenCalledTimes(1);
    expect(logger.debug).toHaveBeenCalledWith({ httpRequest: mockRequest });
  });
});
