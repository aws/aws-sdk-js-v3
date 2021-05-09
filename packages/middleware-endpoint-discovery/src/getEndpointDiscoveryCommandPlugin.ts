import { FinalizeRequestHandlerOptions, Pluggable } from "@aws-sdk/types";

import { endpointDiscoveryMiddleware } from "./endpointDiscoveryMiddleware";
import { EndpointDiscoveryClientResolvedConfig } from "./resolveEndpointDiscoveryClientConfig";

export const endpointDiscoveryMiddlewareOptions: FinalizeRequestHandlerOptions = {
  name: "endpointDiscoveryMiddleware",
  step: "finalizeRequest",
  tags: ["ENDPOINT_DISCOVERY"],
  override: true,
};

export type EndpointDiscoveryMiddlewareConfig = {
  isDiscoveredEndpointRequired: boolean;
  identifiers?: { [key: string]: string };
};

export const getEndpointDiscoveryCommandPlugin = (
  pluginConfig: EndpointDiscoveryClientResolvedConfig,
  middlewareConfig: EndpointDiscoveryMiddlewareConfig
): Pluggable<any, any> => ({
  applyToStack: (commandStack) => {
    commandStack.add(endpointDiscoveryMiddleware(pluginConfig, middlewareConfig), endpointDiscoveryMiddlewareOptions);
  },
});
