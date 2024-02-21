const ENV_ENDPOINT_NAME: string = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
const CONFIG_ENDPOINT_NAME: string = "ec2_metadata_service_endpoint";

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
    environmentVariableSelector: (env: Env): string | undefined => {
      return env[ENV_ENDPOINT_NAME];
    },
    configFileSelector: (profile: Profile): string | undefined => {
      return profile[CONFIG_ENDPOINT_NAME];
    },
    default: undefined,
  };
};

export default getEndpointConfigOptions;
