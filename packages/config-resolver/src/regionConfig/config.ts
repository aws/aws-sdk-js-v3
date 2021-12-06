import { LoadedConfigSelectors, LocalConfigOptions } from "@aws-sdk/node-config-provider";

export const REGION_ENV_NAME = "AWS_REGION";
export const REGION_INI_NAME = "region";

export const NODE_REGION_CONFIG_OPTIONS: LoadedConfigSelectors<string> = {
  environmentVariableSelector: (env) => env[REGION_ENV_NAME],
  configFileSelector: (profile) => profile[REGION_INI_NAME],
  default: () => {
    throw new Error("Region is missing");
  },
};

export const NODE_REGION_CONFIG_FILE_OPTIONS: LocalConfigOptions = {
  preferredFile: "credentials",
};
