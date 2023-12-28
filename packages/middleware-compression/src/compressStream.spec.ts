import { Readable } from "stream";
import { createGzip } from "zlib";

import { compressStream } from "./compressStream";

jest.mock("zlib", () => ({
  createGzip: jest.fn().mockImplementation(() => {
    const mockStream = new Readable({ read() {} }); // Create a mock readable stream
    mockStream.pipe = jest.fn().mockReturnValue(mockStream); // Mock the pipe method
    return mockStream;
  }),
}));

describe(compressStream.name, () => {
  let testDataStream: Readable;

  beforeEach(() => {
    // Create a readable stream from a string
    testDataStream = Readable.from("test data");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should compress a readble stream using gzip", async () => {
    const receivedOutput = await compressStream(testDataStream);

    expect(receivedOutput).toBeInstanceOf(Readable);
    expect(createGzip).toHaveBeenCalledTimes(1);
  });

  it("should throw an error if compression fails", async () => {
    const compressionErrorMsg = "compression error message";
    const compressionError = new Error(compressionErrorMsg);
    (createGzip as jest.Mock).mockImplementationOnce(() => {
      throw compressionError;
    });

    await expect(compressStream(testDataStream)).rejects.toThrow(compressionError);

    expect(createGzip).toHaveBeenCalledTimes(1);
  });
});
