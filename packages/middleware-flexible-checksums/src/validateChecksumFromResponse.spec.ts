import { HttpResponse } from "@smithy/protocol-http";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { PreviouslyResolved } from "./configuration";
import { ChecksumAlgorithm } from "./constants";
import { getChecksum } from "./getChecksum";
import { getChecksumAlgorithmListForResponse } from "./getChecksumAlgorithmListForResponse";
import { getChecksumLocationName } from "./getChecksumLocationName";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";
import { validateChecksumFromResponse } from "./validateChecksumFromResponse";

vi.mock("./getChecksum");
vi.mock("./getChecksumLocationName");
vi.mock("./getChecksumAlgorithmListForResponse");
vi.mock("./selectChecksumAlgorithmFunction");

describe(validateChecksumFromResponse.name, () => {
  const mockConfig = {
    streamHasher: vi.fn(),
    base64Encoder: vi.fn(),
  } as unknown as PreviouslyResolved;

  const mockBody = {};
  const mockHeaders = {};
  const mockResponse = {
    body: mockBody,
    headers: mockHeaders,
  } as HttpResponse;

  const mockChecksum = "mockChecksum";
  const mockResponseAlgorithms = [ChecksumAlgorithm.CRC32, ChecksumAlgorithm.CRC32C];

  const mockOptions = {
    config: mockConfig,
    responseAlgorithms: mockResponseAlgorithms,
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
    vi.mocked(getChecksumAlgorithmListForResponse).mockImplementation((responseAlgorithms) => responseAlgorithms);
    vi.mocked(selectChecksumAlgorithmFunction).mockReturnValue(mockChecksumAlgorithmFn);
    vi.mocked(getChecksum).mockResolvedValue(mockChecksum);
  });

  afterEach(() => {
    expect(getChecksumAlgorithmListForResponse).toHaveBeenCalledTimes(1);
    vi.clearAllMocks();
  });

  describe("skip validation", () => {
    afterEach(() => {
      expect(selectChecksumAlgorithmFunction).not.toHaveBeenCalled();
      expect(getChecksum).not.toHaveBeenCalled();
    });

    it("if response algorithms is empty", async () => {
      const emptyAlgorithmsList: string[] = [];
      await validateChecksumFromResponse(mockResponse, { ...mockOptions, responseAlgorithms: emptyAlgorithmsList });
      expect(getChecksumAlgorithmListForResponse).toHaveBeenCalledWith(emptyAlgorithmsList);
      expect(getChecksumLocationName).not.toHaveBeenCalled();
    });

    it("if updated algorithm list from response is empty", async () => {
      vi.mocked(getChecksumAlgorithmListForResponse).mockImplementation(() => []);
      await validateChecksumFromResponse(mockResponse, mockOptions);
      expect(getChecksumAlgorithmListForResponse).toHaveBeenCalledWith(mockResponseAlgorithms);
      expect(getChecksumLocationName).not.toHaveBeenCalled();
    });

    it("if checksum is not present in header", async () => {
      await validateChecksumFromResponse(mockResponse, mockOptions);
      expect(getChecksumAlgorithmListForResponse).toHaveBeenCalledWith(mockResponseAlgorithms);
      expect(getChecksumLocationName).toHaveBeenCalledTimes(mockResponseAlgorithms.length);
    });
  });

  describe("successful validation", () => {
    afterEach(() => {
      expect(getChecksumAlgorithmListForResponse).toHaveBeenCalledWith(mockResponseAlgorithms);
      expect(selectChecksumAlgorithmFunction).toHaveBeenCalledTimes(1);
      expect(getChecksum).toHaveBeenCalledTimes(1);
    });

    it("when checksum is populated for first algorithm", async () => {
      const responseWithChecksum = getMockResponseWithHeader(mockResponseAlgorithms[0], mockChecksum);
      await validateChecksumFromResponse(responseWithChecksum, mockOptions);
      expect(getChecksumLocationName).toHaveBeenCalledTimes(1);
      expect(getChecksumLocationName).toHaveBeenCalledWith(mockResponseAlgorithms[0]);
    });

    it("when checksum is populated for second algorithm", async () => {
      const responseWithChecksum = getMockResponseWithHeader(mockResponseAlgorithms[1], mockChecksum);
      await validateChecksumFromResponse(responseWithChecksum, mockOptions);
      expect(getChecksumLocationName).toHaveBeenCalledTimes(2);
      expect(getChecksumLocationName).toHaveBeenNthCalledWith(1, mockResponseAlgorithms[0]);
      expect(getChecksumLocationName).toHaveBeenNthCalledWith(2, mockResponseAlgorithms[1]);
    });
  });

  it("throw error if checksum value is not accurate", async () => {
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
  });
});
