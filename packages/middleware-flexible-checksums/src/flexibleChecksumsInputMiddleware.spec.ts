import { setFeature } from "@aws-sdk/core";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { PreviouslyResolved } from "./configuration";
import { DEFAULT_CHECKSUM_ALGORITHM, RequestChecksumCalculation, ResponseChecksumValidation } from "./constants";
import { flexibleChecksumsInputMiddleware } from "./flexibleChecksumsInputMiddleware";
import { hasHeaderWithPrefix } from "./hasHeaderWithPrefix";

vi.mock("@aws-sdk/core");
vi.mock("./hasHeaderWithPrefix");

describe(flexibleChecksumsInputMiddleware.name, () => {
  const mockNext = vi.fn();

  const mockRequestAlgorithmMember = "mockRequestAlgorithmMember";
  const mockRequestValidationModeMember = "mockRequestValidationModeMember";
  const mockMiddlewareConfig = { requestChecksumRequired: false };

  const mockConfig = {
    requestChecksumCalculation: () => Promise.resolve(RequestChecksumCalculation.WHEN_SUPPORTED),
    responseChecksumValidation: () => Promise.resolve(ResponseChecksumValidation.WHEN_SUPPORTED),
  } as PreviouslyResolved;

  beforeEach(() => {
    vi.mocked(hasHeaderWithPrefix).mockReturnValue(false);
  });

  afterEach(() => {
    expect(mockNext).toHaveBeenCalledTimes(1);
    vi.clearAllMocks();
  });

  describe("sets input.requestAlgorithmMember", () => {
    describe("input[requestAlgorithmMember] is not defined and", () => {
      const mockMiddlewareConfigWithRequestAlgorithmMember = {
        ...mockMiddlewareConfig,
        requestAlgorithmMember: mockRequestAlgorithmMember,
      };

      it("requestChecksumCalculation is supported", async () => {
        const handler = flexibleChecksumsInputMiddleware(mockConfig, mockMiddlewareConfigWithRequestAlgorithmMember)(
          mockNext,
          {}
        );
        await handler({ input: {}, request: {} });
        expect(mockNext).toHaveBeenCalledWith({
          input: { [mockRequestAlgorithmMember]: DEFAULT_CHECKSUM_ALGORITHM },
          request: {},
        });
      });

      it("requestChecksumRequired is set to true", async () => {
        const mockConfigWithReqChecksumCalculationWhenRequired = {
          ...mockConfig,
          requestChecksumCalculation: () => Promise.resolve(RequestChecksumCalculation.WHEN_REQUIRED),
        };

        const handler = flexibleChecksumsInputMiddleware(mockConfigWithReqChecksumCalculationWhenRequired, {
          ...mockMiddlewareConfigWithRequestAlgorithmMember,
          requestChecksumRequired: true,
        })(mockNext, {});

        await handler({ input: {}, request: {} });
        expect(mockNext).toHaveBeenCalledWith({
          input: { [mockRequestAlgorithmMember]: DEFAULT_CHECKSUM_ALGORITHM },
          request: {},
        });
      });
    });
  });

  describe("leaves input.requestAlgorithmMember", () => {
    const mockMiddlewareConfigWithRequestAlgorithmMember = {
      ...mockMiddlewareConfig,
      requestAlgorithmMember: mockRequestAlgorithmMember,
    };

    it("when input[requestAlgorithmMember] is defined", async () => {
      const handler = flexibleChecksumsInputMiddleware(mockConfig, mockMiddlewareConfigWithRequestAlgorithmMember)(
        mockNext,
        {}
      );
      await handler({ input: { [mockRequestAlgorithmMember]: "SHA256" } });
      expect(mockNext).toHaveBeenCalledWith({ input: { [mockRequestAlgorithmMember]: "SHA256" } });
    });

    it("if requestChecksumCalculation is required and requestChecksumRequired is false", async () => {
      const mockConfigReqChecksumCalculationWhenRequired = {
        ...mockConfig,
        requestChecksumCalculation: () => Promise.resolve(RequestChecksumCalculation.WHEN_REQUIRED),
      } as PreviouslyResolved;

      const handler = flexibleChecksumsInputMiddleware(
        mockConfigReqChecksumCalculationWhenRequired,
        mockMiddlewareConfigWithRequestAlgorithmMember
      )(mockNext, {});
      await handler({ input: {}, request: {} });
      expect(mockNext).toHaveBeenCalledWith({ input: {}, request: {} });
    });

    it("if checksum header is set", async () => {
      const mockArgs = { input: {}, request: { key: "value" } };
      vi.mocked(hasHeaderWithPrefix).mockReturnValue(true);

      const handler = flexibleChecksumsInputMiddleware(mockConfig, {
        ...mockMiddlewareConfigWithRequestAlgorithmMember,
        requestChecksumRequired: true,
      })(mockNext, {});

      await handler(mockArgs);
      expect(mockNext).toHaveBeenCalledWith(mockArgs);
    });
  });

  describe("sets input.requestValidationModeMember", () => {
    it("when requestValidationModeMember is defined and responseChecksumValidation is supported", async () => {
      const mockMiddlewareConfigWithMockRequestValidationModeMember = {
        ...mockMiddlewareConfig,
        requestValidationModeMember: mockRequestValidationModeMember,
      };
      const handler = flexibleChecksumsInputMiddleware(
        mockConfig,
        mockMiddlewareConfigWithMockRequestValidationModeMember
      )(mockNext, {});
      await handler({ input: {}, request: {} });
      expect(mockNext).toHaveBeenCalledWith({ input: { [mockRequestValidationModeMember]: "ENABLED" }, request: {} });
    });
  });

  describe("leaves input.requestValidationModeMember", () => {
    const mockArgs = { input: {}, request: {} };

    it("when requestValidationModeMember is not defined", async () => {
      const handler = flexibleChecksumsInputMiddleware(mockConfig, mockMiddlewareConfig)(mockNext, {});
      await handler(mockArgs);
      expect(mockNext).toHaveBeenCalledWith(mockArgs);
    });

    it("when responseChecksumValidation is required", async () => {
      const mockConfigResWhenRequired = {
        ...mockConfig,
        responseChecksumValidation: () => Promise.resolve(ResponseChecksumValidation.WHEN_REQUIRED),
      } as PreviouslyResolved;

      const handler = flexibleChecksumsInputMiddleware(mockConfigResWhenRequired, mockMiddlewareConfig)(mockNext, {});
      await handler(mockArgs);

      expect(mockNext).toHaveBeenCalledWith(mockArgs);
    });
  });

  describe("set feature", () => {
    it.each([
      [
        "FLEXIBLE_CHECKSUMS_REQ_WHEN_REQUIRED",
        "a",
        "requestChecksumCalculation",
        RequestChecksumCalculation.WHEN_REQUIRED,
      ],
      [
        "FLEXIBLE_CHECKSUMS_REQ_WHEN_SUPPORTED",
        "Z",
        "requestChecksumCalculation",
        RequestChecksumCalculation.WHEN_SUPPORTED,
      ],
      [
        "FLEXIBLE_CHECKSUMS_RES_WHEN_REQUIRED",
        "c",
        "responseChecksumValidation",
        ResponseChecksumValidation.WHEN_REQUIRED,
      ],
      [
        "FLEXIBLE_CHECKSUMS_RES_WHEN_SUPPORTED",
        "b",
        "responseChecksumValidation",
        ResponseChecksumValidation.WHEN_SUPPORTED,
      ],
    ])("logs %s:%s when %s=%s", async (feature, value, configKey, configValue) => {
      const mockConfigOverride = {
        ...mockConfig,
        [configKey]: () => Promise.resolve(configValue),
      } as PreviouslyResolved;

      const handler = flexibleChecksumsInputMiddleware(mockConfigOverride, mockMiddlewareConfig)(mockNext, {});
      await handler({ input: {}, request: {} });

      expect(setFeature).toHaveBeenCalledTimes(2);
      if (configKey === "requestChecksumCalculation") {
        expect(setFeature).toHaveBeenNthCalledWith(1, expect.anything(), feature, value);
      } else {
        expect(setFeature).toHaveBeenNthCalledWith(2, expect.anything(), feature, value);
      }
    });
  });
});
