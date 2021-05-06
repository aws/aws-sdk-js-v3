import { Command } from "@aws-sdk/types";

import { getCacheKey } from "./getCacheKey";
import { EndpointDiscoveryMiddlewareConfig } from "./getEndpointDiscoveryCommandPlugin";
import { EndpointDiscoveryClientResolvedConfig } from "./resolveEndpointDiscoveryClientConfig";

export type updateDiscoveredEndpointInCacheOptions = EndpointDiscoveryMiddlewareConfig & {
  commandName: string;
  endpointDiscoveryCommandCtor: new (comandConfig: any) => Command<any, any, any, any, any>;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const updateDiscoveredEndpointInCache = async (
  config: EndpointDiscoveryClientResolvedConfig,
  options: updateDiscoveredEndpointInCacheOptions
) => {
  const { client } = config;
  const { endpointCache } = client?.config;

  const { commandName, identifiers } = options;
  const cacheKey = await getCacheKey(commandName, client?.config, { identifiers });

  let endpoints = endpointCache.get(cacheKey);

  // Wait for other endpoint operations to complete before making new calls.
  while (endpoints && endpoints.length === 1 && endpoints[0].Address === "") {
    await sleep(1000);
    endpoints = endpointCache.get(cacheKey);
  }

  if (endpoints && endpoints.length > 0) {
    // Endpoint record is present in cache.
    return;
  } else {
    // put in a placeholder for endpoints already requested, prevent
    // too much in-flight calls.
    const placeholderEndpoints = [{ Address: "", CachePeriodInMinutes: 1 }];
    endpointCache.set(cacheKey, placeholderEndpoints);

    try {
      const command = new options.endpointDiscoveryCommandCtor({
        Operation: commandName.substr(0, commandName.length - 7), // strip "Command"
        Identifiers: identifiers,
      });
      const { Endpoints } = await client?.send(command);
      endpointCache.set(cacheKey, Endpoints);
    } catch (error) {
      if (error.name === "InvalidEndpointException" || error.$metadata?.httpStatusCode === 421) {
        // Endpoint is invalid, delete the cache entry.
        endpointCache.delete(cacheKey);
      }
      if (options.isDiscoveredEndpointRequired) {
        // Endpoint Discovery is required, rethrow error.
        throw error;
      } else {
        // Endpoint Discovery is optional. No error needs to be thrown.
        // Set placeHolder endpoint to disable refresh for one minute.
        endpointCache.set(cacheKey, placeholderEndpoints);
      }
    }
  }
};
