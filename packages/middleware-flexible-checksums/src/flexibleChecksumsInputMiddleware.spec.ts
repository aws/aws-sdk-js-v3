import { setFeature } from "@aws-sdk/core";
import { afterEach, describe, expect, test as it, vi } from "vitest";

import { PreviouslyResolved } from "./configuration";
import { DEFAULT_CHECKSUM_ALGORITHM, RequestChecksumCalculation, ResponseChecksumValidation } from "./constants";
import { flexibleChecksumsInputMiddleware } from "./flexibleChecksumsInputMiddleware";

vi.mock("@aws-sdk/core");

describe(flexibleChecksumsInputMiddleware.name, () => {
  const mockNext = vi.fn();
  const mockRequestValidationModeMember = "mockRequestValidationModeMember";

  const mockConfig = {
    requestChecksumCalculation: () => Promise.resolve(RequestChecksumCalculation.WHEN_SUPPORTED),
    responseChecksumValidation: () => Promise.resolve(ResponseChecksumValidation.WHEN_SUPPORTED),
  } as PreviouslyResolved;

  afterEach(() => {
    expect(mockNext).toHaveBeenCalledTimes(1);
    vi.clearAllMocks();
  });

  describe("sets input.requestValidationModeMember", () => {
    it("when requestValidationModeMember is defined and responseChecksumValidation is supported", async () => {
      const mockMiddlewareConfigWithMockRequestValidationModeMember = {
        requestValidationModeMember: mockRequestValidationModeMember,
      };
      const handler = flexibleChecksumsInputMiddleware(
        mockConfig,
        mockMiddlewareConfigWithMockRequestValidationModeMember
      )(mockNext, {});
      await handler({ input: {} });
      expect(mockNext).toHaveBeenCalledWith({ input: { [mockRequestValidationModeMember]: "ENABLED" } });
    });
  });

  describe("leaves input.requestValidationModeMember", () => {
    const mockArgs = { input: {} };

    it("when requestValidationModeMember is not defined", async () => {
      const handler = flexibleChecksumsInputMiddleware(mockConfig, {})(mockNext, {});
      await handler(mockArgs);
      expect(mockNext).toHaveBeenCalledWith(mockArgs);
    });

    it("when responseChecksumValidation is required", async () => {
      const mockConfigResWhenRequired = {
        ...mockConfig,
        responseChecksumValidation: () => Promise.resolve(ResponseChecksumValidation.WHEN_REQUIRED),
      } as PreviouslyResolved;

      const handler = flexibleChecksumsInputMiddleware(mockConfigResWhenRequired, {})(mockNext, {});
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

      const handler = flexibleChecksumsInputMiddleware(mockConfigOverride, {})(mockNext, {});
      await handler({ input: {} });

      expect(setFeature).toHaveBeenCalledTimes(2);
      if (configKey === "requestChecksumCalculation") {
        expect(setFeature).toHaveBeenNthCalledWith(1, expect.anything(), feature, value);
      } else {
        expect(setFeature).toHaveBeenNthCalledWith(2, expect.anything(), feature, value);
      }
    });
  });
});
