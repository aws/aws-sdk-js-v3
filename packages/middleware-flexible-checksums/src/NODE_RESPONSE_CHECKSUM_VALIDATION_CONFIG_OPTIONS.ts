import { LoadedConfigSelectors } from "@smithy/node-config-provider";

import { RequestChecksumCalculation } from "./constants";
import { SelectorType, stringUnionSelector } from "./stringUnionSelector";

export const ENV_RESPONSE_CHECKSUM_VALIDATION = "AWS_RESPONSE_CHECKSUM_VALIDATION";
export const CONFIG_RESPONSE_CHECKSUM_VALIDATION = "response_checksum_validation";
export const DEFAULT_RESPONSE_CHECKSUM_VALIDATION = RequestChecksumCalculation.WHEN_SUPPORTED;

export const NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS: LoadedConfigSelectors<string> = {
  environmentVariableSelector: (env) =>
    stringUnionSelector(env, ENV_RESPONSE_CHECKSUM_VALIDATION, RequestChecksumCalculation, SelectorType.ENV),
  configFileSelector: (profile) =>
    stringUnionSelector(profile, CONFIG_RESPONSE_CHECKSUM_VALIDATION, RequestChecksumCalculation, SelectorType.CONFIG),
  default: DEFAULT_RESPONSE_CHECKSUM_VALIDATION,
};
