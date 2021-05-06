import { HttpRequest } from "@aws-sdk/protocol-http";
import {
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
  identifiers?: Map<String, String>;
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
  const { client } = config;
  const { endpointDiscoveryCommandCtor } = client?.config;
  const { isDiscoveredEndpointRequired, identifiers } = middlewareConfig;
  const { commandName } = context;

  if (isDiscoveredEndpointRequired) {
    // call await on Endpoint Discovery API utility so that function blocks
    // till discovered endpoint is updated in cache
    await updateDiscoveredEndpointInCache(config, {
      ...middlewareConfig,
      commandName,
      endpointDiscoveryCommandCtor,
    });
  } else {
    // Do not call await await on Endpoint Discovery API utility so that function
    // does not block, the command will use discovered endpoint, if available.
    updateDiscoveredEndpointInCache(config, {
      ...middlewareConfig,
      commandName,
      endpointDiscoveryCommandCtor,
    });
  }

  const { request } = args;
  const cacheKey = await getCacheKey(commandName, client?.config, { identifiers });
  if (cacheKey && HttpRequest.isInstance(request)) {
    const endpoint = client?.config.endpointCache.getEndpoint(cacheKey);
    if (endpoint) {
      request.hostname = endpoint;
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
