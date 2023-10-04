import { LoadedConfigSelectors } from "@smithy/node-config-provider";

const ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
const CONFIG_ENDPOINT_URL = "endpoint_url";

export const getEndpointUrlConfig = (serviceId: string): LoadedConfigSelectors<string | undefined> => ({
  environmentVariableSelector: (env) => {
    // The value provided by a service-specific environment variable.
    const serviceEndpointUrlSections = [ENV_ENDPOINT_URL, serviceId.toUpperCase()];
    const serviceEndpointUrl = env[serviceEndpointUrlSections.join("_")];
    if (serviceEndpointUrl) return serviceEndpointUrl;

    // The value provided by the global endpoint environment variable.
    const endpointUrl = env[ENV_ENDPOINT_URL];
    if (endpointUrl) return endpointUrl;

    return undefined;
  },

  configFileSelector: (profile) => {
    // The value provided by a service-specific parameter from a services definition section
    // referenced in a profile in the shared configuration file.

    // ToDo: profile is selected one. It does not have access to other 'services' section.
    // We should call loadSharedConfigFiles directly.

    // The value provided by the global parameter from a profile in the shared configuration file.
    const endpointUrl = profile[CONFIG_ENDPOINT_URL];
    if (endpointUrl) return endpointUrl;

    return undefined;
  },

  default: undefined,
});
