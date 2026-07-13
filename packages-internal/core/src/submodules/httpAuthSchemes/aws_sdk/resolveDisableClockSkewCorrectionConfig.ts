import { normalizeProvider } from "@smithy/core/client";
import type { Provider } from "@smithy/types";

import { DEFAULT_DISABLE_CLOCK_SKEW_CORRECTION } from "./NODE_DISABLE_CLOCK_SKEW_CORRECTION_CONFIG_OPTIONS";

/**
 * @public
 */
export interface DisableClockSkewCorrectionInputConfig {
  /**
   * Whether to disable clock skew correction. When true, the SDK will not adjust
   * the signing timestamp, will not update the client clock offset from response
   * headers, and will not retry clock skew errors.
   *
   * Defaults to false (correction enabled).
   */
  disableClockSkewCorrection?: boolean | Provider<boolean>;
}

/**
 * @internal
 */
export interface DisableClockSkewCorrectionResolvedConfig {
  /**
   * Resolved value for input config {@link DisableClockSkewCorrectionInputConfig.disableClockSkewCorrection}
   */
  disableClockSkewCorrection: Provider<boolean>;
}

/**
 * @internal
 */
export const resolveDisableClockSkewCorrectionConfig = <T>(
  input: T & DisableClockSkewCorrectionInputConfig
): T & DisableClockSkewCorrectionResolvedConfig => {
  return Object.assign(input, {
    disableClockSkewCorrection: normalizeProvider(
      input.disableClockSkewCorrection ?? DEFAULT_DISABLE_CLOCK_SKEW_CORRECTION
    ),
  });
};
