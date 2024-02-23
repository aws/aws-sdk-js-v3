import type { Profile } from "@smithy/types";

const ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
const CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";

interface EndpointConfigOptions {
  environmentVariableSelector: (env: NodeJS.ProcessEnv) => string | undefined;
  configFileSelector: (profile: Profile) => string | undefined;
  default: undefined;
}

export const getEndpointConfigOptions = (): EndpointConfigOptions => {
  return {
    environmentVariableSelector: (env: NodeJS.ProcessEnv): string | undefined => env[ENV_ENDPOINT_NAME],
    configFileSelector: (profile: Profile): string | undefined => profile[CONFIG_ENDPOINT_NAME],
    default: undefined,
  };
};
