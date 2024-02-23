import type { Profile } from "@smithy/types";

import { EndpointMode } from "./EndpointMode";

const ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
const CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";

interface EndpointModeConfigOptions {
  environmentVariableSelector: (env: NodeJS.ProcessEnv) => string | undefined;
  configFileSelector: (profile: Profile) => string | undefined;
  default: EndpointMode;
}

export const getEndpointModeConfigOptions = (): EndpointModeConfigOptions => {
  return {
    environmentVariableSelector: (env: NodeJS.ProcessEnv): string | undefined => env[ENV_ENDPOINT_MODE_NAME],
    configFileSelector: (profile: Profile): string | undefined => profile[CONFIG_ENDPOINT_MODE_NAME],
    default: "IPv4",
  };
};
