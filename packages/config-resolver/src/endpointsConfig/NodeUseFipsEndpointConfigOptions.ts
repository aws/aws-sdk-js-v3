import { LoadedConfigSelectors } from "@aws-sdk/node-config-provider";
import { booleanSelector, SelectorType } from "@aws-sdk/util-config-provider";

/**
 * @internal
 */
export const ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
/**
 * @internal
 */
export const CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
/**
 * @internal
 */
export const DEFAULT_USE_FIPS_ENDPOINT = false;

/**
 * @internal
 */
export const NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: LoadedConfigSelectors<boolean> = {
  environmentVariableSelector: (env: NodeJS.ProcessEnv) =>
    booleanSelector(env, ENV_USE_FIPS_ENDPOINT, SelectorType.ENV),
  configFileSelector: (profile) => booleanSelector(profile, CONFIG_USE_FIPS_ENDPOINT, SelectorType.CONFIG),
  default: false,
};
