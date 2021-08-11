import { loadConfig } from "@aws-sdk/node-config-provider";

import { Endpoint } from "./remoteProvider/Endpoint";
import { ENDPOINT_CONFIG_OPTIONS } from "./remoteProvider/EndpointConfigOptions";
import { EndpointMode } from "./remoteProvider/EndpointMode";
import { ENDPOINT_MODE_CONFIG_OPTIONS } from "./remoteProvider/EndpointModeConfigOptions";

export const getInstanceMetadataHost = async () => {
  const endpoint = await loadConfig(ENDPOINT_CONFIG_OPTIONS)();
  if (!endpoint) {
    const endpointMode = await loadConfig(ENDPOINT_MODE_CONFIG_OPTIONS)();
    switch (endpointMode) {
      case EndpointMode.IPv4:
        return Endpoint.IPv4;
      case EndpointMode.IPv6:
        return Endpoint.IPv6;
      default:
        throw new Error(`Unsupported endpoint mode: ${endpointMode}.` + ` Select from ${Object.values(EndpointMode)}`);
    }
  }
  const { host } = new URL(endpoint);
  return host;
};
