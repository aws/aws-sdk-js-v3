import { LoadedConfigSelectors } from "@smithy/node-config-provider";

import { DEFAULT_REQUEST_CHECKSUM_CALCULATION, RequestChecksumCalculation } from "./constants";
import { SelectorType, stringUnionSelector } from "./stringUnionSelector";

/**
 * @internal
 */
export const ENV_REQUEST_CHECKSUM_CALCULATION = "AWS_REQUEST_CHECKSUM_CALCULATION";

/**
 * @internal
 */
export const CONFIG_REQUEST_CHECKSUM_CALCULATION = "request_checksum_calculation";

/**
 * @internal
 */
export const NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS: LoadedConfigSelectors<RequestChecksumCalculation> = {
  environmentVariableSelector: (env) =>
    stringUnionSelector(env, ENV_REQUEST_CHECKSUM_CALCULATION, RequestChecksumCalculation, SelectorType.ENV),
  configFileSelector: (profile) =>
    stringUnionSelector(profile, CONFIG_REQUEST_CHECKSUM_CALCULATION, RequestChecksumCalculation, SelectorType.CONFIG),
  default: DEFAULT_REQUEST_CHECKSUM_CALCULATION,
};
