import { FinalizeRequestHandlerOptions, HttpHandlerOptions, MiddlewareStack, Pluggable } from "@aws-sdk/types";

import { endpointDiscoveryMiddleware } from "./endpointDiscoveryMiddleware";
import { EndpointDiscoveryResolvedConfig } from "./resolveEndpointDiscoveryConfig";

export const endpointDiscoveryMiddlewareOptions: FinalizeRequestHandlerOptions = {
  name: "endpointDiscoveryMiddleware",
  step: "finalizeRequest",
  tags: ["ENDPOINT_DISCOVERY"],
  override: true,
};

export type EndpointDiscoveryMiddlewareConfig = {
  isDiscoveredEndpointRequired: boolean;
  clientStack: MiddlewareStack<any, any>;
  options?: HttpHandlerOptions;
  identifiers?: { [key: string]: string };
};

export const getEndpointDiscoveryPlugin = (
  pluginConfig: EndpointDiscoveryResolvedConfig,
  middlewareConfig: EndpointDiscoveryMiddlewareConfig
): Pluggable<any, any> => ({
  applyToStack: (commandStack) => {
    commandStack.add(endpointDiscoveryMiddleware(pluginConfig, middlewareConfig), endpointDiscoveryMiddlewareOptions);
  },
});

export const getEndpointDiscoveryRequiredPlugin = (
  pluginConfig: EndpointDiscoveryResolvedConfig,
  middlewareConfig: Omit<EndpointDiscoveryMiddlewareConfig, "isDiscoveredEndpointRequired">
): Pluggable<any, any> => ({
  applyToStack: (commandStack) => {
    commandStack.add(
      endpointDiscoveryMiddleware(pluginConfig, { ...middlewareConfig, isDiscoveredEndpointRequired: true }),
      endpointDiscoveryMiddlewareOptions
    );
  },
});

export const getEndpointDiscoveryOptionalPlugin = (
  pluginConfig: EndpointDiscoveryResolvedConfig,
  middlewareConfig: Omit<EndpointDiscoveryMiddlewareConfig, "isDiscoveredEndpointRequired">
): Pluggable<any, any> => ({
  applyToStack: (commandStack) => {
    commandStack.add(
      endpointDiscoveryMiddleware(pluginConfig, { ...middlewareConfig, isDiscoveredEndpointRequired: false }),
      endpointDiscoveryMiddlewareOptions
    );
  },
});
