import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  HandlerExecutionContext,
  MetadataBearer,
} from "@aws-sdk/types";

import { getCacheKey } from "./getCacheKey";
import { EndpointDiscoveryMiddlewareConfig } from "./getEndpointDiscoveryCommandPlugin";
import { EndpointDiscoveryResolvedConfig } from "./resolveEndpointDiscoveryConfig";
import { updateDiscoveredEndpointInCache } from "./updateDiscoveredEndpointInCache";

export const endpointDiscoveryMiddleware = (
  config: EndpointDiscoveryResolvedConfig,
  middlewareConfig: EndpointDiscoveryMiddlewareConfig
) => <Output extends MetadataBearer = MetadataBearer>(
  next: FinalizeHandler<any, Output>,
  context: HandlerExecutionContext
): FinalizeHandler<any, Output> => async (
  args: FinalizeHandlerArguments<any>
): Promise<FinalizeHandlerOutput<Output>> => {
  if (config.isCustomEndpoint) {
    if (config.isClientEndpointDiscoveryEnabled) {
      throw new Error(`Custom endpoint is supplied; endpointDiscoveryEnabled must not be true.`);
    }
    return next(args);
  }

  const { endpointDiscoveryCommandCtor } = config;
  const { isDiscoveredEndpointRequired, identifiers } = middlewareConfig;
  const { clientName, commandName } = context;
  const isEndpointDiscoveryEnabled = await config.endpointDiscoveryEnabled();

  if (isDiscoveredEndpointRequired) {
    // throw error if endpoint discovery is required, and it's explicitly disabled.
    if (isEndpointDiscoveryEnabled === false) {
      throw new Error(
        `Endpoint Discovery is disabled but ${commandName} on ${clientName} requires it.` +
          ` Please check your configurations.`
      );
    }
    // call await on Endpoint Discovery API utility so that function blocks
    // till discovered endpoint is updated in cache
    await updateDiscoveredEndpointInCache(config, {
      ...middlewareConfig,
      commandName,
      endpointDiscoveryCommandCtor: endpointDiscoveryCommandCtor!,
    });
  } else {
    // Discover endpoints only if endpoint discovery is explicitly enabled.
    if (isEndpointDiscoveryEnabled) {
      // Do not call await await on Endpoint Discovery API utility so that function
      // does not block, the command will use discovered endpoint, if available.
      updateDiscoveredEndpointInCache(config, {
        ...middlewareConfig,
        commandName,
        endpointDiscoveryCommandCtor: endpointDiscoveryCommandCtor!,
      });
    }
  }

  const { request } = args;
  const cacheKey = await getCacheKey(commandName, config, { identifiers });
  if (cacheKey && HttpRequest.isInstance(request)) {
    const endpoint = config.endpointCache.getEndpoint(cacheKey);
    if (endpoint) {
      request.hostname = endpoint;
    }
  }

  return next(args);
};
