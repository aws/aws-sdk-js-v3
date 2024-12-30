import { describe, expect, test as it } from "vitest";

import { ChecksumAlgorithm, DEFAULT_CHECKSUM_ALGORITHM } from "./constants";
import { getChecksumAlgorithmForRequest } from "./getChecksumAlgorithmForRequest";
import { CLIENT_SUPPORTED_ALGORITHMS } from "./types";

describe(getChecksumAlgorithmForRequest.name, () => {
  const mockRequestAlgorithmMember = "mockRequestAlgorithmMember";

  describe("when requestAlgorithmMember is not provided", () => {
    it(`returns ${DEFAULT_CHECKSUM_ALGORITHM} if requestChecksumRequired is set`, () => {
      expect(getChecksumAlgorithmForRequest({}, { requestChecksumRequired: true })).toEqual(DEFAULT_CHECKSUM_ALGORITHM);
    });

    it("returns undefined if requestChecksumRequired is false", () => {
      expect(getChecksumAlgorithmForRequest({}, { requestChecksumRequired: false })).toBeUndefined();
    });
  });

  describe("when requestAlgorithmMember is not set in input", () => {
    const mockOptions = { requestAlgorithmMember: mockRequestAlgorithmMember };

    it(`returns ${DEFAULT_CHECKSUM_ALGORITHM} if requestChecksumRequired is set`, () => {
      expect(getChecksumAlgorithmForRequest({}, { ...mockOptions, requestChecksumRequired: true })).toEqual(
        DEFAULT_CHECKSUM_ALGORITHM
      );
    });

    it("returns undefined if requestChecksumRequired is false", () => {
      expect(getChecksumAlgorithmForRequest({}, { ...mockOptions, requestChecksumRequired: false })).toBeUndefined();
    });
  });

  it("throws error if input[requestAlgorithmMember] if not supported by client", () => {
    const unsupportedAlgo = "unsupportedAlgo";
    const mockInput = { [mockRequestAlgorithmMember]: unsupportedAlgo };
    const mockOptions = { requestChecksumRequired: true, requestAlgorithmMember: mockRequestAlgorithmMember };
    expect(() => {
      getChecksumAlgorithmForRequest(mockInput, mockOptions);
    }).toThrowError(
      `The checksum algorithm "${unsupportedAlgo}" is not supported by the client.` +
        ` Select one of ${CLIENT_SUPPORTED_ALGORITHMS}.`
    );
  });

  describe("returns input[requestAlgorithmMember] if supported by client", () => {
    it.each(CLIENT_SUPPORTED_ALGORITHMS)("Supported algorithm: %s", (supportedAlgorithm) => {
      const mockInput = { [mockRequestAlgorithmMember]: supportedAlgorithm };
      const mockOptions = { requestChecksumRequired: true, requestAlgorithmMember: mockRequestAlgorithmMember };
      expect(getChecksumAlgorithmForRequest(mockInput, mockOptions)).toEqual(supportedAlgorithm);
    });
  });
});
