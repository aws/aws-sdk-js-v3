import { LoadedConfigSelectors } from "@smithy/node-config-provider";

import { RequestChecksumCalculation } from "./constants";
import { SelectorType, stringUnionSelector } from "./stringUnionSelector";

export const ENV_REQUEST_CHECKSUM_CALCULATION = "AWS_REQUEST_CHECKSUM_CALCULATION";
export const CONFIG_REQUEST_CHECKSUM_CALCULATION = "request_checksum_calculation";
export const DEFAULT_REQUEST_CHECKSUM_CALCULATION = RequestChecksumCalculation.WHEN_SUPPORTED;

export const NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS: LoadedConfigSelectors<string> = {
  environmentVariableSelector: (env) =>
    stringUnionSelector(env, ENV_REQUEST_CHECKSUM_CALCULATION, RequestChecksumCalculation, SelectorType.ENV),
  configFileSelector: (profile) =>
    stringUnionSelector(profile, CONFIG_REQUEST_CHECKSUM_CALCULATION, RequestChecksumCalculation, SelectorType.CONFIG),
  default: DEFAULT_REQUEST_CHECKSUM_CALCULATION,
};
