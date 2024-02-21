import { getEndpointMode } from "./getEndpointMode";

const ENV_ENDPOINT_MODE_NAME: string = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
const CONFIG_ENDPOINT_MODE_NAME: string = "ec2_metadata_service_endpoint_mode";

interface Env {
  [key: string]: string | undefined;
}

interface Profile {
  [key: string]: string | undefined;
}

interface EndpointModeConfigOptions {
  environmentVariableSelector: (env: Env) => string | undefined;
  configFileSelector: (profile: Profile) => string | undefined;
  default: string;
}

const getEndpointModeConfigOptions = (): EndpointModeConfigOptions => {
  return {
    environmentVariableSelector: (env: Env): string | undefined => env[ENV_ENDPOINT_MODE_NAME],
    configFileSelector: (profile: Profile): string | undefined => profile[CONFIG_ENDPOINT_MODE_NAME],
    default: getEndpointMode().IPv4,
  };
};

export default getEndpointModeConfigOptions;
