import { LoadedConfigSelectors } from "@smithy/node-config-provider";

import { DEFAULT_RESPONSE_CHECKSUM_VALIDATION, ResponseChecksumValidation } from "./constants";
import { SelectorType, stringUnionSelector } from "./stringUnionSelector";

export const ENV_RESPONSE_CHECKSUM_VALIDATION = "AWS_RESPONSE_CHECKSUM_VALIDATION";
export const CONFIG_RESPONSE_CHECKSUM_VALIDATION = "response_checksum_validation";

export const NODE_RESPONSE_CHECKSUM_VALIDATION_CONFIG_OPTIONS: LoadedConfigSelectors<ResponseChecksumValidation> = {
  environmentVariableSelector: (env) =>
    // @ts-expect-error Type 'string | undefined' is not assignable to type 'ResponseChecksumValidation | undefined'.
    stringUnionSelector(env, ENV_RESPONSE_CHECKSUM_VALIDATION, ResponseChecksumValidation, SelectorType.ENV),
  configFileSelector: (profile) =>
    // @ts-expect-error Type 'string | undefined' is not assignable to type 'ResponseChecksumValidation | undefined'.
    stringUnionSelector(profile, CONFIG_RESPONSE_CHECKSUM_VALIDATION, ResponseChecksumValidation, SelectorType.CONFIG),
  default: DEFAULT_RESPONSE_CHECKSUM_VALIDATION,
};
