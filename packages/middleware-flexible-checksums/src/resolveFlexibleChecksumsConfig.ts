import { Provider } from "@smithy/types";
import { normalizeProvider } from "@smithy/util-middleware";

import { DEFAULT_REQUEST_CHECKSUM_CALCULATION, DEFAULT_RESPONSE_CHECKSUM_VALIDATION } from "./constants";

export interface FlexibleChecksumsInputConfig {
  /**
   * Determines when a checksum will be calculated for request payloads.
   */
  requestChecksumCalculation?: string | Provider<string>;

  /**
   * Determines when checksum validation will be performed on response payloads.
   */
  responseChecksumValidation?: string | Provider<string>;
}

export interface FlexibleChecksumsResolvedConfig {
  requestChecksumCalculation: Provider<string>;
  responseChecksumValidation: Provider<string>;
}

export const resolveFlexibleChecksumsConfig = <T>(
  input: T & FlexibleChecksumsInputConfig
): T & FlexibleChecksumsResolvedConfig => ({
  ...input,
  requestChecksumCalculation: normalizeProvider(
    input.requestChecksumCalculation ?? DEFAULT_REQUEST_CHECKSUM_CALCULATION
  ),
  responseChecksumValidation: normalizeProvider(
    input.responseChecksumValidation ?? DEFAULT_RESPONSE_CHECKSUM_VALIDATION
  ),
});
