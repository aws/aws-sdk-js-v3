import { loadConfig } from "@aws-sdk/node-config-provider";
import { parseUrl } from "@aws-sdk/url-parser";

import { Endpoint } from "./remoteProvider/Endpoint";
import {
  CONFIG_ENDPOINT_NAME,
  ENDPOINT_CONFIG_OPTIONS,
  ENV_ENDPOINT_NAME,
} from "./remoteProvider/EndpointConfigOptions";
import { EndpointMode } from "./remoteProvider/EndpointMode";
import {
  CONFIG_ENDPOINT_MODE_NAME,
  ENDPOINT_MODE_CONFIG_OPTIONS,
  ENV_ENDPOINT_MODE_NAME,
} from "./remoteProvider/EndpointModeConfigOptions";

/**
 * Returns the host to use for instance metadata service call.
 *
 * The host is read from endpoint which can be set either in
 * {@link ENV_ENDPOINT_NAME} environment variable or {@link CONFIG_ENDPOINT_NAME}
 * configuration property.
 *
 * If endpoint is not set, then endpoint mode is read either from
 * {@link ENV_ENDPOINT_MODE_NAME} environment variable or {@link CONFIG_ENDPOINT_MODE_NAME}
 * configuration property. If endpoint mode is not set, then default endpoint mode
 * {@link EndpointMode.IPv4} is used.
 *
 * If endpoint mode is set to {@link EndpointMode.IPv4}, then the host is {@link Endpoint.IPv4}.
 * If endpoint mode is set to {@link EndpointMode.IPv6}, then the host is {@link Endpoint.IPv6}.
 *
 * @returns Host to use for instance metadata service call.
 */
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

  const { hostname, port } = parseUrl(endpoint);
  return `${hostname}${port ? `:${port}` : ""}`;
};
