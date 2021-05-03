import { Command } from "@aws-sdk/types";

import { getCacheKey } from "./getCacheKey";
import { EndpointDiscoveryClientResolvedConfig } from "./resolveEndpointDiscoveryClientConfig";

export type updateDiscoveredEndpointInCacheOptions = {
  commandName: string;
  endpointDiscoveryCommandCtor: new (comandConfig: any) => Command<any, any, any, any, any>;
  endpointDiscoveryId?: string;
};

export const updateDiscoveredEndpointInCache = async (
  config: EndpointDiscoveryClientResolvedConfig,
  options: updateDiscoveredEndpointInCacheOptions
) => {
  const { client } = config;
  const { endpointCache } = client?.config;

  const { commandName, endpointDiscoveryId } = options;
  const cacheKey = await getCacheKey(commandName, client?.config, { endpointDiscoveryId });

  const endpoints = endpointCache.get(cacheKey);
  if (endpoints && endpoints.length === 1 && endpoints[0].Address === "") {
    // endpoint operation is being made but response not yet received
    // or endpoint operation just failed in 1 minute.
    return;
  } else if (endpoints && endpoints.length > 0) {
    // Endpoint record is present in cache.
    return;
  } else {
    // put in a placeholder for endpoints already requested, prevent
    // too much in-flight calls.
    endpointCache.set(cacheKey, [
      {
        Address: "",
        CachePeriodInMinutes: 1,
      },
    ]);

    try {
      const command = new options.endpointDiscoveryCommandCtor({
        Operation: commandName.substr(0, commandName.length - 7), // strip "Command"
        Identifiers: endpointDiscoveryId,
      });
      const { Endpoints } = await client?.send(command);
      endpointCache.set(cacheKey, Endpoints);
    } catch (error) {
      endpointCache.set(cacheKey, [
        {
          Address: "",
          CachePeriodInMinutes: 1, // Not to make more endpoint operation in next 1 minute
        },
      ]);
    }
  }
};
