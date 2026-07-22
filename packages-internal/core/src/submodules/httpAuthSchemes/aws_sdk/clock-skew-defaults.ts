import { loadConfig } from "@smithy/core/config";

import { NODE_DISABLE_CLOCK_SKEW_CORRECTION_CONFIG_OPTIONS } from "./clock-skew-node-config";

/**
 * @internal
 * Node.js default: lazily reads from env var / shared config file.
 * Browser counterpart (via index binding) exports `false`.
 */
export const DEFAULT_DISABLE_CLOCK_SKEW_CORRECTION = loadConfig(NODE_DISABLE_CLOCK_SKEW_CORRECTION_CONFIG_OPTIONS);
