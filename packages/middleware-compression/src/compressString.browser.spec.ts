// @jest-environment jsdom
import { toUint8Array } from "@smithy/util-utf8";
import { gzip } from "fflate";

import { compressString } from "./compressString.browser";

jest.mock("@smithy/util-utf8");
jest.mock("fflate");

describe(compressString.name, () => {
  const testData = "test";
  const compressionSuffix = "compressed";
  const compressionSeparator = ".";

  beforeEach(() => {
    (toUint8Array as jest.Mock).mockImplementation((data) => data);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should compress data with gzip", async () => {
    (gzip as jest.Mock).mockImplementation((data, callback) => {
      callback(null, [data, compressionSuffix].join(compressionSeparator));
    });
    const receivedOutput = await compressString(testData);
    const expectedOutput = [testData, compressionSuffix].join(compressionSeparator);

    expect(receivedOutput).toEqual(expectedOutput);
    expect(gzip).toHaveBeenCalledTimes(1);
    expect(gzip).toHaveBeenCalledWith(testData, expect.any(Function));
    expect(toUint8Array).toHaveBeenCalledTimes(1);
    expect(toUint8Array).toHaveBeenCalledWith(testData);
  });

  it("should throw an error if compression fails", async () => {
    const compressionErrorMsg = "compression error message";
    const compressionError = new Error(compressionErrorMsg);
    (gzip as jest.Mock).mockImplementation((data, callback) => {
      callback(compressionError);
    });

    await expect(compressString(testData)).rejects.toThrow(
      new Error("Failure during compression: " + compressionErrorMsg)
    );

    expect(gzip).toHaveBeenCalledTimes(1);
    expect(gzip).toHaveBeenCalledWith(testData, expect.any(Function));
    expect(toUint8Array).toHaveBeenCalledTimes(1);
    expect(toUint8Array).toHaveBeenCalledWith(testData);
  });
});
