import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  Command,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestHandlerOptions,
  HandlerExecutionContext,
  MetadataBearer,
  Pluggable,
} from "@aws-sdk/types";

import { getCacheKey } from "./getCacheKey";
import { EndpointDiscoveryClientResolvedConfig } from "./resolveEndpointDiscoveryClientConfig";
import { updateDiscoveredEndpointInCache } from "./updateDiscoveredEndpointInCache";

export const endpointDiscoveryMiddlewareOptions: FinalizeRequestHandlerOptions = {
  name: "endpointDiscoveryMiddleware",
  step: "finalizeRequest",
  tags: ["ENDPOINT_DISCOVERY"],
  override: true,
};

export type EndpointDiscoveryMiddlewareConfig = {
  isDiscoveredEndpointRequired: boolean;
  getEndpointDiscoveryId: () => string | undefined;
  discoveryEndpointCommandCtor: new (comandConfig: any) => Command<any, any, any, any, any>;
};

export const endpointDiscoveryMiddleware = (
  config: EndpointDiscoveryClientResolvedConfig,
  middlewareConfig: EndpointDiscoveryMiddlewareConfig
) => <Output extends MetadataBearer = MetadataBearer>(
  next: FinalizeHandler<any, Output>,
  context: HandlerExecutionContext
): FinalizeHandler<any, Output> => async (
  args: FinalizeHandlerArguments<any>
): Promise<FinalizeHandlerOutput<Output>> => {
  const { isDiscoveredEndpointRequired, discoveryEndpointCommandCtor, getEndpointDiscoveryId } = middlewareConfig;
  const { commandName } = context;

  if (isDiscoveredEndpointRequired === true) {
    // call await on Endpoint Discovery API utility so that function blocks
    // till discovered endpoint is updated in cache
    await updateDiscoveredEndpointInCache(config, {
      commandName,
      discoveryEndpointCommandCtor,
      getEndpointDiscoveryId,
    });
  } else if (isDiscoveredEndpointRequired === false) {
    // Do not call await await on Endpoint Discovery API utility so that function
    // does not block, the command will use discovered endpoint, if available.
    updateDiscoveredEndpointInCache(config, {
      commandName,
      discoveryEndpointCommandCtor,
      getEndpointDiscoveryId,
    });
  }

  const { client } = config;
  const { request } = args;
  const cacheKey = getCacheKey(commandName, client?.config, getEndpointDiscoveryId);
  if (cacheKey && HttpRequest.isInstance(request)) {
    const endpoints = client?.config.endpointCache.get(cacheKey);
    if (endpoints && endpoints.length > 0) {
      request.hostname = endpoints[0].Address;
    }
  }

  return next(args);
};

export const getEndpointDiscoveryCommandPlugin = (
  pluginConfig: EndpointDiscoveryClientResolvedConfig,
  middlewareConfig: EndpointDiscoveryMiddlewareConfig
): Pluggable<any, any> => ({
  applyToStack: (commandStack) => {
    commandStack.add(endpointDiscoveryMiddleware(pluginConfig, middlewareConfig), endpointDiscoveryMiddlewareOptions);
  },
});
