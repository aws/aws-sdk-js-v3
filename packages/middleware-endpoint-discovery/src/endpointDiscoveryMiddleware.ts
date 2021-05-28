import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOutput,
  HandlerExecutionContext,
  MetadataBearer,
} from "@aws-sdk/types";

import { getCacheKey } from "./getCacheKey";
import { EndpointDiscoveryMiddlewareConfig } from "./getEndpointDiscoveryPlugin";
import { EndpointDiscoveryResolvedConfig, PreviouslyResolved } from "./resolveEndpointDiscoveryConfig";
import { updateDiscoveredEndpointInCache } from "./updateDiscoveredEndpointInCache";

export const endpointDiscoveryMiddleware =
  (config: EndpointDiscoveryResolvedConfig & PreviouslyResolved, middlewareConfig: EndpointDiscoveryMiddlewareConfig) =>
  <Output extends MetadataBearer = MetadataBearer>(
    next: BuildHandler<any, Output>,
    context: HandlerExecutionContext
  ): BuildHandler<any, Output> =>
  async (args: BuildHandlerArguments<any>): Promise<BuildHandlerOutput<Output>> => {
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
    const cacheKey = await getCacheKey(commandName, config, { identifiers });

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
        cacheKey,
        endpointDiscoveryCommandCtor,
      });
    } else if (isEndpointDiscoveryEnabled) {
      // Discover endpoints only if endpoint discovery is explicitly enabled.
      // Do not call await await on Endpoint Discovery API utility so that function
      // does not block, the command will use discovered endpoint, if available.
      updateDiscoveredEndpointInCache(config, {
        ...middlewareConfig,
        commandName,
        cacheKey,
        endpointDiscoveryCommandCtor,
      });
    }

    const { request } = args;
    if (cacheKey && HttpRequest.isInstance(request)) {
      const endpoint = config.endpointCache.getEndpoint(cacheKey);
      if (endpoint) {
        request.hostname = endpoint;
      }
    }

    return next(args);
  };
