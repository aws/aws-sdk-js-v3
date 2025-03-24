import { LoadedConfigSelectors } from "@smithy/node-config-provider";

import { DEFAULT_RESPONSE_CHECKSUM_VALIDATION, ResponseChecksumValidation } from "./constants";
import { SelectorType, stringUnionSelector } from "./stringUnionSelector";

/**
 * @internal
 */
export const ENV_RESPONSE_CHECKSUM_VALIDATION = "AWS_RESPONSE_CHECKSUM_VALIDATION";

/**
 * @internal
 */
export const CONFIG_RESPONSE_CHECKSUM_VALIDATION = "response_checksum_validation";

/**
 * @internal
 */
export const NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS: LoadedConfigSelectors<ResponseChecksumValidation> = {
  environmentVariableSelector: (env) =>
    stringUnionSelector(env, ENV_RESPONSE_CHECKSUM_VALIDATION, ResponseChecksumValidation, SelectorType.ENV),
  configFileSelector: (profile) =>
    stringUnionSelector(profile, CONFIG_RESPONSE_CHECKSUM_VALIDATION, ResponseChecksumValidation, SelectorType.CONFIG),
  default: DEFAULT_RESPONSE_CHECKSUM_VALIDATION,
};
