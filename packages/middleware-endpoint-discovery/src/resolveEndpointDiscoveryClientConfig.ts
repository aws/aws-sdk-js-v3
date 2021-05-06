import { EndpointCache } from "@aws-sdk/endpoint-cache";
import { Client, Command } from "@aws-sdk/types";

export interface EndpointDiscoveryClientInputConfig {}

interface PreviouslyResolved {}

export interface EndpointDiscoveryClientResolvedConfig {
  client?: Client<any, any, any>;
  endpointDiscoveryCommandCtor?: new (comandConfig: any) => Command<any, any, any, any, any>;
  endpointCache: EndpointCache;
}

export const resolveEndpointDiscoveryClientConfig = <T>(
  input: T & PreviouslyResolved & EndpointDiscoveryClientInputConfig
): T & EndpointDiscoveryClientResolvedConfig => ({
  ...input,
  endpointCache: new EndpointCache(1000),
});
