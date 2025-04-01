import { HttpResponse } from "@smithy/protocol-http";
import { Logger } from "@smithy/types";
import { createChecksumStream } from "@smithy/util-stream";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { PreviouslyResolved } from "./configuration";
import { ChecksumAlgorithm } from "./constants";
import { getChecksum } from "./getChecksum";
import { getChecksumAlgorithmListForResponse } from "./getChecksumAlgorithmListForResponse";
import { getChecksumLocationName } from "./getChecksumLocationName";
import { isStreaming } from "./isStreaming";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";
import { validateChecksumFromResponse } from "./validateChecksumFromResponse";

vi.mock("@smithy/util-stream");
vi.mock("./getChecksum");
vi.mock("./getChecksumLocationName");
vi.mock("./getChecksumAlgorithmListForResponse");
vi.mock("./isStreaming");
vi.mock("./selectChecksumAlgorithmFunction");

describe(validateChecksumFromResponse.name, () => {
  const mockConfig = {
    base64Encoder: vi.fn(),
  } as unknown as PreviouslyResolved;

  const mockBody = {};
  const mockBodyStream = { isStream: true };
  const mockHeaders = {};
  const mockResponse = {
    body: mockBody,
    headers: mockHeaders,
  } as HttpResponse;

  const mockChecksum = "mockChecksum";
  const mockResponseAlgorithms = [ChecksumAlgorithm.CRC32, ChecksumAlgorithm.CRC32C, ChecksumAlgorithm.CRC64NVME];
  const mockLogger = { warn: vi.fn() } as unknown as Logger;

  const mockOptions = {
    config: mockConfig,
    responseAlgorithms: mockResponseAlgorithms,
    logger: mockLogger,
  };

  const mockChecksumAlgorithmFn = vi.fn();

  const getMockResponseWithHeader = (headerKey: string, headerValue: string) => ({
    ...mockResponse,
    headers: {
      ...mockHeaders,
      [headerKey]: headerValue,
    },
  });

  beforeEach(() => {
    vi.mocked(getChecksumLocationName).mockImplementation((algorithm) => algorithm);
    vi.mocked(getChecksumAlgorithmListForResponse).mockImplementation(
      (responseAlgorithms) => responseAlgorithms as any
    );
    vi.mocked(selectChecksumAlgorithmFunction).mockReturnValue(mockChecksumAlgorithmFn);
    vi.mocked(getChecksum).mockResolvedValue(mockChecksum);
    vi.mocked(createChecksumStream).mockReturnValue(mockBodyStream as any);
  });

  afterEach(() => {
    expect(getChecksumAlgorithmListForResponse).toHaveBeenCalledTimes(1);
    vi.clearAllMocks();
  });

  describe("skip validation", () => {
    afterEach(() => {
      expect(getChecksum).not.toHaveBeenCalled();
    });

    it("if response algorithms is empty", async () => {
      const emptyAlgorithmsList: string[] = [];
      await validateChecksumFromResponse(mockResponse, { ...mockOptions, responseAlgorithms: emptyAlgorithmsList });
      expect(getChecksumAlgorithmListForResponse).toHaveBeenCalledWith(emptyAlgorithmsList);
      expect(getChecksumLocationName).not.toHaveBeenCalled();
      expect(selectChecksumAlgorithmFunction).not.toHaveBeenCalled();
    });

    it("if updated algorithm list from response is empty", async () => {
      vi.mocked(getChecksumAlgorithmListForResponse).mockImplementation(() => []);
      await validateChecksumFromResponse(mockResponse, mockOptions);
      expect(getChecksumAlgorithmListForResponse).toHaveBeenCalledWith(mockResponseAlgorithms);
      expect(getChecksumLocationName).not.toHaveBeenCalled();
      expect(selectChecksumAlgorithmFunction).not.toHaveBeenCalled();
    });

    it("if checksum is not present in header", async () => {
      await validateChecksumFromResponse(mockResponse, mockOptions);
      expect(getChecksumAlgorithmListForResponse).toHaveBeenCalledWith(mockResponseAlgorithms);
      expect(getChecksumLocationName).toHaveBeenCalledTimes(mockResponseAlgorithms.length);
      expect(selectChecksumAlgorithmFunction).not.toHaveBeenCalled();
    });

    it(`if checksum algorithm is ${ChecksumAlgorithm.CRC64NVME} and dependency is not available`, async () => {
      const dependencyErrorMsg = "Dependency not available";
      vi.mocked(selectChecksumAlgorithmFunction).mockImplementation(() => {
        throw new Error(dependencyErrorMsg);
      });
      const responseWithChecksum = getMockResponseWithHeader(ChecksumAlgorithm.CRC64NVME, mockChecksum);
      await validateChecksumFromResponse(responseWithChecksum, mockOptions);
      expect(getChecksumAlgorithmListForResponse).toHaveBeenCalledWith(mockResponseAlgorithms);
      expect(getChecksumLocationName).toHaveBeenCalledTimes(mockResponseAlgorithms.length);
      expect(selectChecksumAlgorithmFunction).toHaveBeenCalledTimes(1);
      expect(mockLogger.warn).toHaveBeenCalledTimes(1);
      expect(mockLogger.warn).toHaveBeenCalledWith(
        `Skipping ${ChecksumAlgorithm.CRC64NVME} checksum validation: ${dependencyErrorMsg}`
      );
    });
  });

  describe("successful validation", () => {
    const validateCalls = (isStream: boolean, checksumAlgoFn: ChecksumAlgorithm) => {
      expect(getChecksumAlgorithmListForResponse).toHaveBeenCalledWith(mockResponseAlgorithms);
      expect(selectChecksumAlgorithmFunction).toHaveBeenCalledTimes(1);

      if (isStream) {
        expect(getChecksum).not.toHaveBeenCalled();
        expect(createChecksumStream).toHaveBeenCalledTimes(1);
        expect(createChecksumStream).toHaveBeenCalledWith({
          expectedChecksum: mockChecksum,
          checksumSourceLocation: checksumAlgoFn,
          checksum: new mockChecksumAlgorithmFn(),
          source: mockBody,
          base64Encoder: mockConfig.base64Encoder,
        });
      } else {
        expect(getChecksum).toHaveBeenCalledTimes(1);
        expect(getChecksum).toHaveBeenCalledWith(mockBody, {
          checksumAlgorithmFn: mockChecksumAlgorithmFn,
          base64Encoder: mockConfig.base64Encoder,
        });
        expect(createChecksumStream).not.toHaveBeenCalled();
      }
    };

    it.each([false, true])("when checksum is populated for first algorithm when streaming: %s", async (isStream) => {
      vi.mocked(isStreaming).mockReturnValue(isStream);
      const responseWithChecksum = getMockResponseWithHeader(mockResponseAlgorithms[0], mockChecksum);
      await validateChecksumFromResponse(responseWithChecksum, mockOptions);
      expect(getChecksumLocationName).toHaveBeenCalledTimes(1);
      expect(getChecksumLocationName).toHaveBeenCalledWith(mockResponseAlgorithms[0]);
      validateCalls(isStream, mockResponseAlgorithms[0]);
    });

    it.each([false, true])("when checksum is populated for second algorithm when streaming: %s", async (isStream) => {
      vi.mocked(isStreaming).mockReturnValue(isStream);
      const responseWithChecksum = getMockResponseWithHeader(mockResponseAlgorithms[1], mockChecksum);
      await validateChecksumFromResponse(responseWithChecksum, mockOptions);
      expect(getChecksumLocationName).toHaveBeenCalledTimes(2);
      expect(getChecksumLocationName).toHaveBeenNthCalledWith(1, mockResponseAlgorithms[0]);
      expect(getChecksumLocationName).toHaveBeenNthCalledWith(2, mockResponseAlgorithms[1]);
      validateCalls(isStream, mockResponseAlgorithms[1]);
    });

    it.each([false, true])("when checksum is populated for third algorithm when streaming: %s", async (isStream) => {
      vi.mocked(isStreaming).mockReturnValue(isStream);
      const responseWithChecksum = getMockResponseWithHeader(mockResponseAlgorithms[2], mockChecksum);
      await validateChecksumFromResponse(responseWithChecksum, mockOptions);
      expect(getChecksumLocationName).toHaveBeenCalledTimes(3);
      expect(getChecksumLocationName).toHaveBeenNthCalledWith(1, mockResponseAlgorithms[0]);
      expect(getChecksumLocationName).toHaveBeenNthCalledWith(2, mockResponseAlgorithms[1]);
      expect(getChecksumLocationName).toHaveBeenNthCalledWith(3, mockResponseAlgorithms[2]);
      validateCalls(isStream, mockResponseAlgorithms[2]);
    });
  });

  it("throw error if checksum value is not accurate when not streaming", async () => {
    vi.mocked(isStreaming).mockReturnValue(false);

    const incorrectChecksum = "incorrectChecksum";
    const responseWithChecksum = getMockResponseWithHeader(mockResponseAlgorithms[0], incorrectChecksum);

    try {
      await validateChecksumFromResponse(responseWithChecksum, mockOptions);
      fail("should throw checksum mismatch error");
    } catch (error) {
      expect(error.message).toMatch(
        `Checksum mismatch: expected "${mockChecksum}" but received "${incorrectChecksum}"` +
          ` in response header "${mockResponseAlgorithms[0]}".`
      );
    }

    expect(getChecksumAlgorithmListForResponse).toHaveBeenCalledWith(mockResponseAlgorithms);
    expect(selectChecksumAlgorithmFunction).toHaveBeenCalledTimes(1);
    expect(getChecksumLocationName).toHaveBeenCalledTimes(1);
    expect(getChecksum).toHaveBeenCalledTimes(1);
    expect(createChecksumStream).not.toHaveBeenCalled();
  });

  it("return if checksum value is not accurate when streaming, as error will be thrown when stream is consumed", async () => {
    vi.mocked(isStreaming).mockReturnValue(true);

    // This override does not matter for the purpose of unit test, but is kept for completeness.
    const incorrectChecksum = "incorrectChecksum";
    const responseWithChecksum = getMockResponseWithHeader(mockResponseAlgorithms[0], incorrectChecksum);

    await validateChecksumFromResponse(responseWithChecksum, mockOptions);

    expect(getChecksumAlgorithmListForResponse).toHaveBeenCalledWith(mockResponseAlgorithms);
    expect(selectChecksumAlgorithmFunction).toHaveBeenCalledTimes(1);
    expect(getChecksumLocationName).toHaveBeenCalledTimes(1);
    expect(getChecksum).not.toHaveBeenCalled();
    expect(createChecksumStream).toHaveBeenCalledTimes(1);
    expect(responseWithChecksum.body).toBe(mockBodyStream);
  });
});
