import { DEFAULT_CHECKSUM_ALGORITHM, RequestChecksumCalculation } from "./constants";
import { getChecksumAlgorithmForRequest } from "./getChecksumAlgorithmForRequest";
import { CLIENT_SUPPORTED_ALGORITHMS } from "./types";

describe(getChecksumAlgorithmForRequest.name, () => {
  const mockRequestAlgorithmMember = "mockRequestAlgorithmMember";

  describe("when requestAlgorithmMember is not provided", () => {
    describe(`when requestChecksumCalculation is '${RequestChecksumCalculation.WHEN_REQUIRED}'`, () => {
      const mockOptions = { requestChecksumCalculation: RequestChecksumCalculation.WHEN_REQUIRED };

      it(`returns ${DEFAULT_CHECKSUM_ALGORITHM} if requestChecksumRequired is set`, () => {
        expect(getChecksumAlgorithmForRequest({}, { ...mockOptions, requestChecksumRequired: true })).toEqual(
          DEFAULT_CHECKSUM_ALGORITHM
        );
      });

      it("returns undefined if requestChecksumRequired is false", () => {
        expect(getChecksumAlgorithmForRequest({}, { ...mockOptions, requestChecksumRequired: false })).toBeUndefined();
      });
    });

    describe(`when requestChecksumCalculation is '${RequestChecksumCalculation.WHEN_SUPPORTED}'`, () => {
      const mockOptions = { requestChecksumCalculation: RequestChecksumCalculation.WHEN_SUPPORTED };

      it(`returns ${DEFAULT_CHECKSUM_ALGORITHM} if requestChecksumRequired is set`, () => {
        expect(getChecksumAlgorithmForRequest({}, { ...mockOptions, requestChecksumRequired: true })).toEqual(
          DEFAULT_CHECKSUM_ALGORITHM
        );
      });

      it(`returns ${DEFAULT_CHECKSUM_ALGORITHM} if requestChecksumRequired is false`, () => {
        expect(getChecksumAlgorithmForRequest({}, { ...mockOptions, requestChecksumRequired: false })).toEqual(
          DEFAULT_CHECKSUM_ALGORITHM
        );
      });
    });
  });

  describe("when requestAlgorithmMember is not set in input", () => {
    const mockOptionsWithAlgoMember = { requestAlgorithmMember: mockRequestAlgorithmMember };

    describe(`when requestChecksumCalculation is '${RequestChecksumCalculation.WHEN_REQUIRED}'`, () => {
      const mockOptions = {
        ...mockOptionsWithAlgoMember,
        requestChecksumCalculation: RequestChecksumCalculation.WHEN_REQUIRED,
      };

      it(`returns ${DEFAULT_CHECKSUM_ALGORITHM} if requestChecksumRequired is set`, () => {
        expect(getChecksumAlgorithmForRequest({}, { ...mockOptions, requestChecksumRequired: true })).toEqual(
          DEFAULT_CHECKSUM_ALGORITHM
        );
      });

      it("returns undefined if requestChecksumRequired is false", () => {
        expect(getChecksumAlgorithmForRequest({}, { ...mockOptions, requestChecksumRequired: false })).toBeUndefined();
      });
    });

    describe(`when requestChecksumCalculation is '${RequestChecksumCalculation.WHEN_SUPPORTED}'`, () => {
      const mockOptions = {
        ...mockOptionsWithAlgoMember,
        requestChecksumCalculation: RequestChecksumCalculation.WHEN_SUPPORTED,
      };

      it(`returns ${DEFAULT_CHECKSUM_ALGORITHM} if requestChecksumRequired is set`, () => {
        expect(getChecksumAlgorithmForRequest({}, { ...mockOptions, requestChecksumRequired: true })).toEqual(
          DEFAULT_CHECKSUM_ALGORITHM
        );
      });

      it(`returns ${DEFAULT_CHECKSUM_ALGORITHM} if requestChecksumRequired is false`, () => {
        expect(getChecksumAlgorithmForRequest({}, { ...mockOptions, requestChecksumRequired: false })).toEqual(
          DEFAULT_CHECKSUM_ALGORITHM
        );
      });
    });
  });

  it("throws error if input[requestAlgorithmMember] if not supported by client", () => {
    const unsupportedAlgo = "unsupportedAlgo";
    const mockInput = { [mockRequestAlgorithmMember]: unsupportedAlgo };
    const mockOptions = {
      requestChecksumRequired: true,
      requestAlgorithmMember: mockRequestAlgorithmMember,
      requestChecksumCalculation: RequestChecksumCalculation.WHEN_REQUIRED,
    };
    expect(() => {
      getChecksumAlgorithmForRequest(mockInput, mockOptions);
    }).toThrow(
      `The checksum algorithm "${unsupportedAlgo}" is not supported by the client.` +
        ` Select one of ${CLIENT_SUPPORTED_ALGORITHMS}.`
    );
  });

  describe("returns input[requestAlgorithmMember] if supported by client", () => {
    it.each(CLIENT_SUPPORTED_ALGORITHMS)("Supported algorithm: %s", (supportedAlgorithm) => {
      const mockInput = { [mockRequestAlgorithmMember]: supportedAlgorithm };
      const mockOptions = {
        requestChecksumRequired: true,
        requestAlgorithmMember: mockRequestAlgorithmMember,
        requestChecksumCalculation: RequestChecksumCalculation.WHEN_REQUIRED,
      };
      expect(getChecksumAlgorithmForRequest(mockInput, mockOptions)).toEqual(supportedAlgorithm);
    });
  });
});
