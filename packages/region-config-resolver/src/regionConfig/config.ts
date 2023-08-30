import { LoadedConfigSelectors, LocalConfigOptions } from "@smithy/node-config-provider";

/**
 * @internal
 */
export const REGION_ENV_NAME = "AWS_REGION";
/**
 * @internal
 */
export const REGION_INI_NAME = "region";

/**
 * @internal
 */
export const NODE_REGION_CONFIG_OPTIONS: LoadedConfigSelectors<string> = {
  environmentVariableSelector: (env) => env[REGION_ENV_NAME],
  configFileSelector: (profile) => profile[REGION_INI_NAME],
  default: () => {
    throw new Error("Region is missing");
  },
};

/**
 * @internal
 */
export const NODE_REGION_CONFIG_FILE_OPTIONS: LocalConfigOptions = {
  preferredFile: "credentials",
};
