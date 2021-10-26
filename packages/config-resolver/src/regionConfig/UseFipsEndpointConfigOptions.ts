import { LoadedConfigSelectors } from "@aws-sdk/node-config-provider";

export const ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
export const CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
export const DEFAULT_USE_FIPS_ENDPOINT = false;

export const USE_FIPS_ENDPOINT_CONFIG_OPTIONS: LoadedConfigSelectors<boolean> = {
  environmentVariableSelector: (env) => {
    if (!Object.prototype.hasOwnProperty.call(env, ENV_USE_FIPS_ENDPOINT)) return undefined;
    if (env[ENV_USE_FIPS_ENDPOINT] === "true") return true;
    if (env[ENV_USE_FIPS_ENDPOINT] === "false") return false;
    throw new Error(
      `Cannot load env ${ENV_USE_FIPS_ENDPOINT}. Expected "true" or "false", got ${env[ENV_USE_FIPS_ENDPOINT]}.`
    );
  },
  configFileSelector: (profile) => {
    if (!Object.prototype.hasOwnProperty.call(profile, CONFIG_USE_FIPS_ENDPOINT)) return undefined;
    if (profile[CONFIG_USE_FIPS_ENDPOINT] === "true") return true;
    if (profile[CONFIG_USE_FIPS_ENDPOINT] === "false") return false;
    throw new Error(
      `Cannot load shared config entry ${CONFIG_USE_FIPS_ENDPOINT}. Expected "true" or "false", got ${profile[CONFIG_USE_FIPS_ENDPOINT]}.`
    );
  },
  default: DEFAULT_USE_FIPS_ENDPOINT,
};
