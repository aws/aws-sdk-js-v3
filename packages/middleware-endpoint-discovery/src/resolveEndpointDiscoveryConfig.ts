import { EndpointCache } from "@aws-sdk/endpoint-cache";
import { Credentials, Provider } from "@aws-sdk/types";

export interface EndpointDiscoveryInputConfig {}

interface PreviouslyResolved {
  isCustomEndpoint: boolean;
  credentials: Provider<Credentials>;
  /**
   * The size of the client cache storing endpoints from endpoint discovery operations.
   * Defaults to 1000.
   */
  endpointCacheSize?: number;
  /**
   * Whether to call operations with endpoints given by service dynamically.
   * Setting this config to `true` will enable endpoint discovery for all applicable operations.
   * Setting it to `false` will explicitly disable endpoint discovery even though operations that
   * require endpoint discovery will presumably fail. Leaving it to undefined means SDK only do
   * endpoint discovery when it's required. Defaults to `undefined`.
   */
  endpointDiscoveryEnabled?: boolean | undefined;
  endpointDiscoveryEnabledProvider: Provider<boolean | undefined>;
}

export interface EndpointDiscoveryResolvedConfig {
  isCustomEndpoint: boolean;
  credentials: Provider<Credentials>;
  endpointDiscoveryCommandCtor: new (comandConfig: any) => any;
  endpointCache: EndpointCache;
  endpointDiscoveryEnabled: Provider<boolean | undefined>;
  isClientEndpointDiscoveryEnabled: boolean;
}

export const resolveEndpointDiscoveryConfig = <T>(
  input: T & PreviouslyResolved & EndpointDiscoveryInputConfig,
  endpointDiscoveryCommandCtor: new (comandConfig: any) => any
): T & EndpointDiscoveryResolvedConfig => ({
  ...input,
  endpointDiscoveryCommandCtor,
  endpointCache: new EndpointCache(input.endpointCacheSize ?? 1000),
  endpointDiscoveryEnabled:
    input.endpointDiscoveryEnabled !== undefined
      ? () => Promise.resolve(input.endpointDiscoveryEnabled)
      : input.endpointDiscoveryEnabledProvider,
  isClientEndpointDiscoveryEnabled: input.endpointDiscoveryEnabled !== undefined,
});
