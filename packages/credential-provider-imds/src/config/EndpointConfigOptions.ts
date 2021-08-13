import { LoadedConfigSelectors } from "@aws-sdk/node-config-provider";

export const ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
export const CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";

export const ENDPOINT_CONFIG_OPTIONS: LoadedConfigSelectors<string | undefined> = {
  environmentVariableSelector: (env) => env[ENV_ENDPOINT_NAME],
  configFileSelector: (profile) => profile[CONFIG_ENDPOINT_NAME],
  default: undefined,
};
