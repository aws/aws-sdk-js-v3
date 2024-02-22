const ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
const CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";

interface Profile {
  [key: string]: string | undefined;
}

interface Env {
  [key: string]: string | undefined;
}

interface EndpointConfigOptions {
  environmentVariableSelector: (env: Env) => string | undefined;
  configFileSelector: (profile: Profile) => string | undefined;
  default: undefined;
}

const getEndpointConfigOptions = (): EndpointConfigOptions => {
  return {
    environmentVariableSelector: (env: Env): string | undefined => env[ENV_ENDPOINT_NAME],
    configFileSelector: (profile: Profile): string | undefined => profile[CONFIG_ENDPOINT_NAME],
    default: undefined,
  };
};

export default getEndpointConfigOptions;
