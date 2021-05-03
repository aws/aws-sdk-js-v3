import { Client, Command } from "@aws-sdk/types";
import LRUCache from "lru-cache";

export interface EndpointDiscoveryClientInputConfig {}

interface PreviouslyResolved {}

export interface EndpointDiscoveryClientResolvedConfig {
  client?: Client<any, any, any>;
  discoveryEndpointCommandCtor?: new (comandConfig: any) => Command<any, any, any, any, any>;
  endpointCache: LRUCache<string, string>;
}

export const resolveEndpointDiscoveryClientConfig = <T>(
  input: T & PreviouslyResolved & EndpointDiscoveryClientInputConfig
): T & EndpointDiscoveryClientResolvedConfig => ({
  ...input,
  endpointCache: new LRUCache(),
});
