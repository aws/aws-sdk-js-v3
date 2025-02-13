import { normalizeProvider } from "@smithy/util-middleware";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import {
  DEFAULT_REQUEST_CHECKSUM_CALCULATION,
  DEFAULT_RESPONSE_CHECKSUM_VALIDATION,
  RequestChecksumCalculation,
  ResponseChecksumValidation,
} from "./constants";
import { resolveFlexibleChecksumsConfig } from "./resolveFlexibleChecksumsConfig";

vi.mock("@smithy/util-middleware");

describe(resolveFlexibleChecksumsConfig.name, () => {
  beforeEach(() => {
    vi.mocked(normalizeProvider).mockImplementation((input) => input as any);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("returns default client checksums configuration, if not provided", () => {
    const resolvedConfig = resolveFlexibleChecksumsConfig({});
    expect(resolvedConfig).toEqual({
      requestChecksumCalculation: DEFAULT_REQUEST_CHECKSUM_CALCULATION,
      responseChecksumValidation: DEFAULT_RESPONSE_CHECKSUM_VALIDATION,
      requestStreamBufferSize: 0,
    });
    expect(normalizeProvider).toHaveBeenCalledTimes(2);
  });

  it("normalizes client checksums configuration", () => {
    const mockInput = {
      requestChecksumCalculation: RequestChecksumCalculation.WHEN_REQUIRED,
      responseChecksumValidation: ResponseChecksumValidation.WHEN_REQUIRED,
      requestStreamBufferSize: 0,
    };
    const resolvedConfig = resolveFlexibleChecksumsConfig(mockInput);
    expect(resolvedConfig).toEqual(mockInput);
    expect(normalizeProvider).toHaveBeenCalledTimes(2);
  });
});
