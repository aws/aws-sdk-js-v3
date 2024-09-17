import { LoadedConfigSelectors } from "@smithy/node-config-provider";

import { DEFAULT_REQUEST_CHECKSUM_CALCULATION, RequestChecksumCalculation } from "./constants";
import { SelectorType, stringUnionSelector } from "./stringUnionSelector";

export const ENV_REQUEST_CHECKSUM_CALCULATION = "AWS_REQUEST_CHECKSUM_CALCULATION";
export const CONFIG_REQUEST_CHECKSUM_CALCULATION = "request_checksum_calculation";

export const NODE_REQUEST_CHECKSUM_CALCULATION_CONFIG_OPTIONS: LoadedConfigSelectors<RequestChecksumCalculation> = {
  environmentVariableSelector: (env) =>
    // @ts-expect-error Type 'string | undefined' is not assignable to type 'RequestChecksumCalculation | undefined'.
    stringUnionSelector(env, ENV_REQUEST_CHECKSUM_CALCULATION, RequestChecksumCalculation, SelectorType.ENV),
  configFileSelector: (profile) =>
    // @ts-expect-error Type 'string | undefined' is not assignable to type 'RequestChecksumCalculation | undefined'.
    stringUnionSelector(profile, CONFIG_REQUEST_CHECKSUM_CALCULATION, RequestChecksumCalculation, SelectorType.CONFIG),
  default: DEFAULT_REQUEST_CHECKSUM_CALCULATION,
};
