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
}

interface PreviouslyResolved {
  regionInfoProvider: RegionInfoProvider;
  urlParser: UrlParser;
  region: Provider<string>;
  useFipsEndpoint: Provider<boolean>;
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
}

export const resolveEndpointsConfig = <T>(
  input: T & EndpointsInputConfig & PreviouslyResolved
): T & EndpointsResolvedConfig => {
  const useDualstackEndpoint = normalizeBoolean(input.useDualstackEndpoint!);
  const { endpoint, useFipsEndpoint } = input;
  return {
    ...input,
    tls: input.tls ?? true,
    endpoint: endpoint
      ? normalizeEndpoint({ ...input, endpoint })
      : () => getEndpointFromRegion({ ...input, useDualstackEndpoint, useFipsEndpoint }),
    isCustomEndpoint: endpoint ? true : false,
    useDualstackEndpoint,
  };
};
