import { Endpoint, Provider, RegionInfoProvider, UrlParser } from "@aws-sdk/types";

import { getEndpointFromRegion } from "./utils/getEndpointFromRegion";
import { normalizeBoolean } from "./utils/normalizeBoolean";
import { normalizeEndpoint } from "./utils/normalizeEndpoint";

export interface EndpointsInputConfig {
  /**
   * The fully qualified endpoint of the webservice. This is only required when using a custom endpoint (for example, when using a local version of S3).
   */
  endpoint?: string | Endpoint | Provider<Endpoint>;

  /**
   * Whether TLS is enabled for requests.
   */
  tls?: boolean;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | Provider<boolean>;
}

interface PreviouslyResolved {
  regionInfoProvider: RegionInfoProvider;
  urlParser: UrlParser;
  region: Provider<string>;
}

export interface EndpointsResolvedConfig extends Required<EndpointsInputConfig> {
  /**
   * Resolved value for input {@link EndpointsInputConfig.endpoint}
   */
  endpoint: Provider<Endpoint>;

  /**
   * Whether the endpoint is specified by caller.
   * @internal
   */
  isCustomEndpoint: boolean;

  /**
   * Resolved value for input {@link EndpointsInputConfig.useDualstackEndpoint}
   */
  useDualstackEndpoint: Provider<boolean>;

  /**
   * Resolved value for input {@link EndpointsInputConfig.useFipsEndpoint}
   */
  useFipsEndpoint: Provider<boolean>;
}

export const resolveEndpointsConfig = <T>(
  input: T & EndpointsInputConfig & PreviouslyResolved
): T & EndpointsResolvedConfig => ({
  ...input,
  tls: input.tls ?? true,
  endpoint: input.endpoint
    ? normalizeEndpoint({ ...input, endpoint: input.endpoint })
    : () => getEndpointFromRegion(input),
  isCustomEndpoint: input.endpoint ? true : false,
  useDualstackEndpoint: normalizeBoolean(input.useDualstackEndpoint!),
  useFipsEndpoint: normalizeBoolean(input.useFipsEndpoint!),
});
