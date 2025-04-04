import { BuildHandlerOptions, HttpHandlerOptions, MiddlewareStack, Pluggable } from "@smithy/types";

import { endpointDiscoveryMiddleware } from "./endpointDiscoveryMiddleware";
import { EndpointDiscoveryResolvedConfig, PreviouslyResolved } from "./resolveEndpointDiscoveryConfig";

/**
 * @internal
 */
export const endpointDiscoveryMiddlewareOptions: BuildHandlerOptions = {
  name: "endpointDiscoveryMiddleware",
  step: "build",
  tags: ["ENDPOINT_DISCOVERY"],
  override: true,
};

/**
 * @public
 */
export interface EndpointDiscoveryMiddlewareConfig {
  isDiscoveredEndpointRequired: boolean;
  clientStack: MiddlewareStack<any, any>;
  options?: HttpHandlerOptions;
  identifiers?: Record<string, string>;
}

/**
 * @internal
 */
export const getEndpointDiscoveryPlugin = (
  pluginConfig: EndpointDiscoveryResolvedConfig & PreviouslyResolved,
  middlewareConfig: EndpointDiscoveryMiddlewareConfig
): Pluggable<any, any> => ({
  applyToStack: (commandStack) => {
    commandStack.add(endpointDiscoveryMiddleware(pluginConfig, middlewareConfig), endpointDiscoveryMiddlewareOptions);
  },
});

/**
 * @internal
 * @deprecated Use getEndpointDiscoveryPlugin
 */
export const getEndpointDiscoveryRequiredPlugin = (
  pluginConfig: EndpointDiscoveryResolvedConfig & PreviouslyResolved,
  middlewareConfig: Omit<EndpointDiscoveryMiddlewareConfig, "isDiscoveredEndpointRequired">
): Pluggable<any, any> => ({
  applyToStack: (commandStack) => {
    commandStack.add(
      endpointDiscoveryMiddleware(pluginConfig, { ...middlewareConfig, isDiscoveredEndpointRequired: true }),
      endpointDiscoveryMiddlewareOptions
    );
  },
});

/**
 * @internal
 * @deprecated Use getEndpointDiscoveryPlugin
 */
export const getEndpointDiscoveryOptionalPlugin = (
  pluginConfig: EndpointDiscoveryResolvedConfig & PreviouslyResolved,
  middlewareConfig: Omit<EndpointDiscoveryMiddlewareConfig, "isDiscoveredEndpointRequired">
): Pluggable<any, any> => ({
  applyToStack: (commandStack) => {
    commandStack.add(
      endpointDiscoveryMiddleware(pluginConfig, { ...middlewareConfig, isDiscoveredEndpointRequired: false }),
      endpointDiscoveryMiddlewareOptions
    );
  },
});
