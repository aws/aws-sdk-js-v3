import { toUint8Array } from "@smithy/util-utf8";
import { gzip } from "zlib";

import { compressString } from "./compressString";
import { CompressionAlgorithm } from "./constants";

const compressionSuffix = "compressed";
const compressionSep = ".";

jest.mock("@smithy/util-utf8");
jest.mock("util", () => ({ promisify: jest.fn().mockImplementation((fn) => fn) }));
jest.mock("zlib", () => ({
  gzip: jest.fn().mockImplementation((data) => [data, compressionSuffix].join(compressionSep)),
}));

describe(compressString.name, () => {
  const testData = "test";

  beforeEach(() => {
    (toUint8Array as jest.Mock).mockImplementation((data) => data);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should compress data with gzip", async () => {
    const receivedOutput = await compressString(testData, CompressionAlgorithm.GZIP);
    const expectedOutput = [testData, compressionSuffix].join(compressionSep);

    expect(receivedOutput).toEqual(expectedOutput);
    expect(gzip).toHaveBeenCalledTimes(1);
    expect(gzip).toHaveBeenCalledWith(testData);
    expect(toUint8Array).toHaveBeenCalledTimes(2);
    expect(toUint8Array).toHaveBeenNthCalledWith(1, testData);
    expect(toUint8Array).toHaveBeenNthCalledWith(2, expectedOutput);
  });

  it("should throw an error for unsupported compression algorithm", async () => {
    const unsupportedAlgorithm = "unsupported" as CompressionAlgorithm;

    await expect(compressString(testData, unsupportedAlgorithm)).rejects.toThrow(
      new Error(`Only '${CompressionAlgorithm.GZIP}' is supported for compression. Got '${unsupportedAlgorithm}'.`)
    );

    expect(gzip).not.toHaveBeenCalled();
    expect(toUint8Array).not.toHaveBeenCalled();
  });

  it("should throw an error if compression fails", async () => {
    const compressionErrorMsg = "compression error message";
    const compressionError = new Error(compressionErrorMsg);
    (gzip as unknown as jest.Mock).mockImplementationOnce(() => {
      throw compressionError;
    });

    await expect(compressString(testData, CompressionAlgorithm.GZIP)).rejects.toThrow(
      new Error("Failure during compression: " + compressionErrorMsg)
    );

    expect(gzip).toHaveBeenCalledTimes(1);
    expect(gzip).toHaveBeenCalledWith(testData);
    expect(toUint8Array).toHaveBeenCalledTimes(1);
    expect(toUint8Array).toHaveBeenCalledWith(testData);
  });
});
