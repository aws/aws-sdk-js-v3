import { normalizeProvider } from "@smithy/util-middleware";

import {
  DEFAULT_REQUEST_CHECKSUM_CALCULATION,
  DEFAULT_RESPONSE_CHECKSUM_VALIDATION,
  RequestChecksumCalculation,
  ResponseChecksumValidation,
} from "./constants";
import { resolveFlexibleChecksumsConfig } from "./resolveFlexibleChecksumsConfig";

jest.mock("@smithy/util-middleware");

describe(resolveFlexibleChecksumsConfig.name, () => {
  beforeEach(() => {
    (normalizeProvider as jest.Mock).mockImplementation((input) => input);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns default client checksums configuration, if not provided", () => {
    const resolvedConfig = resolveFlexibleChecksumsConfig({});
    expect(resolvedConfig).toEqual({
      requestChecksumCalculation: DEFAULT_REQUEST_CHECKSUM_CALCULATION,
      responseChecksumValidation: DEFAULT_RESPONSE_CHECKSUM_VALIDATION,
    });
    expect(normalizeProvider).toHaveBeenCalledTimes(2);
  });

  it("normalizes client checksums configuration", () => {
    const mockInput = {
      requestChecksumCalculation: RequestChecksumCalculation.WHEN_REQUIRED,
      responseChecksumValidation: ResponseChecksumValidation.WHEN_REQUIRED,
    };
    const resolvedConfig = resolveFlexibleChecksumsConfig(mockInput);
    expect(resolvedConfig).toEqual(mockInput);
    expect(normalizeProvider).toHaveBeenCalledTimes(2);
  });
});
