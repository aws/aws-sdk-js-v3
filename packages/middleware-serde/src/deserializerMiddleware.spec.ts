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
    jest.clearAllMocks();
  });

  it("calls deserializer and populates response object", async () => {
    await expect(deserializerMiddleware(mockOptions, mockDeserializer)(mockNext, {})(mockArgs)).resolves.toStrictEqual(
      mockResponse
    );

    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockNext).toHaveBeenCalledWith(mockArgs);
    expect(mockDeserializer).toHaveBeenCalledTimes(1);
    expect(mockDeserializer).toHaveBeenCalledWith(mockNextResponse.response, mockOptions);
  });
});
