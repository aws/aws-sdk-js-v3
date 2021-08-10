import { loadConfig } from "@aws-sdk/node-config-provider";

import { ENDPOINT_CONFIG_OPTIONS } from "./remoteProvider/EndpointConfigOptions";

export const getInstanceMetadataHost = async () => {
  const endpoint = await loadConfig(ENDPOINT_CONFIG_OPTIONS)();
  if (!endpoint) {
    return "169.254.169.254";
  }
  const { host } = new URL(endpoint);
  return host;
};
