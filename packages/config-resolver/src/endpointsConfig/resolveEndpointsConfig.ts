import { Endpoint, Provider, RegionInfoProvider, UrlParser } from "@aws-sdk/types";

import { getEndpointFromRegion } from "./utils/getEndpointFromRegion";
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
}

interface PreviouslyResolved {
  regionInfoProvider: RegionInfoProvider;
  urlParser: UrlParser;
  region: Provider<string>;
}

export interface EndpointsResolvedConfig extends Required<EndpointsInputConfig> {
  /**
   * Resolved value for input {@link EndpointsResolvedConfig.endpoint}
   */
  endpoint: Provider<Endpoint>;

  /**
   * Whether the endpoint is specified by caller.
   * @internal
   */
  isCustomEndpoint: boolean;
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
});
