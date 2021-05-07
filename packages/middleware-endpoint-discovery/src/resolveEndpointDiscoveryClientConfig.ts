import { EndpointCache } from "@aws-sdk/endpoint-cache";
import { Client, Command, Provider } from "@aws-sdk/types";

export interface EndpointDiscoveryClientInputConfig {}

interface PreviouslyResolved {
  endpointCacheSize?: number;
  endpointDiscoveryEnabled?: boolean | Provider<boolean | undefined>;
}

export interface EndpointDiscoveryClientResolvedConfig {
  client?: Client<any, any, any>;
  endpointDiscoveryCommandCtor?: new (comandConfig: any) => Command<any, any, any, any, any>;
  endpointCache: EndpointCache;
  endpointDiscoveryEnabled: Provider<boolean | undefined>;
  isClientEndpointDiscoveryEnabled: boolean;
}

export const resolveEndpointDiscoveryClientConfig = <T>(
  input: T & PreviouslyResolved & EndpointDiscoveryClientInputConfig
): T & EndpointDiscoveryClientResolvedConfig => ({
  ...input,
  endpointCache: new EndpointCache(input.endpointCacheSize ?? 1000),
  endpointDiscoveryEnabled: input.endpointDiscoveryEnabled
    ? normalizeEndpointDiscoveryEnabled(input.endpointDiscoveryEnabled)
    : () => Promise.resolve(undefined),
  isClientEndpointDiscoveryEnabled: input.endpointDiscoveryEnabled !== undefined,
});

const normalizeEndpointDiscoveryEnabled = (endpointDiscoveryEnabled: boolean | Provider<boolean | undefined>) => {
  if (typeof endpointDiscoveryEnabled === "boolean") {
    const promisified = Promise.resolve(endpointDiscoveryEnabled);
    return () => promisified;
  }
  return endpointDiscoveryEnabled as Provider<boolean>;
};
