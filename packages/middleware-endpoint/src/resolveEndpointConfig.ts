import { Endpoint, EndpointParameters, EndpointV2, Logger, Provider, UrlParser } from "@aws-sdk/types";
import { normalizeProvider } from "@aws-sdk/util-middleware";

/**
 * Endpoint config interfaces and resolver for Endpoint v2. They live in separate package to allow per-service onboarding.
 * When all services onboard the endpoint v2, the resolver in config-resolver package can be removed.
 * This interface includes all the endpoint parameters with built-in bindings of "AWS::*" and "SDK::*"
 */
export interface EndpointInputConfig<T extends EndpointParameters = EndpointParameters> {
  /**
   * The fully qualified endpoint of the webservice. This is only required when using a custom endpoint (for example, when using a local version of S3).
   */
  endpoint?: string | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>;

  endpointProvider?: (params: T, context?: { logger?: Logger }) => EndpointV2;

  /**
   * Whether TLS is enabled for requests.
   * @deprecated
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

interface PreviouslyResolved<T extends EndpointParameters = EndpointParameters> {
  urlParser: UrlParser;
  region: Provider<string>;
  endpointProvider: (params: T, context?: { logger?: Logger }) => EndpointV2;
  logger?: Logger;
}

export interface EndpointResolvedConfig<T extends EndpointParameters = EndpointParameters> {
  /**
   * Resolved value for input {@link EndpointsInputConfig.endpoint}
   * @deprecated Use {@link EndpointResolvedConfig.endpointProvider} instead
   */
  endpoint?: Provider<Endpoint>;

  endpointProvider: (params: T, context?: { logger?: Logger }) => EndpointV2;

  /**
   * Whether TLS is enabled for requests.
   * @deprecated
   */
  tls: boolean;

  /**
   * Whether the endpoint is specified by caller.
   * @internal
   * @deprecated
   */
  isCustomEndpoint?: boolean;

  /**
   * Resolved value for input {@link EndpointsInputConfig.useDualstackEndpoint}
   */
  useDualstackEndpoint: Provider<boolean>;

  /**
   * Resolved value for input {@link EndpointsInputConfig.useFipsEndpoint}
   */
  useFipsEndpoint: Provider<boolean>;
}

export const resolveEndpointConfig = <T, P extends EndpointParameters = EndpointParameters>(
  input: T & EndpointInputConfig<P> & PreviouslyResolved<P>
): T & EndpointResolvedConfig<P> => {
  const tls = input.tls ?? true;
  const { endpoint } = input;
  const resolvedEndpoint =
    endpoint != null
      ? typeof endpoint === "function"
        ? async () => {
            return toEndpointV1(await endpoint());
          }
        : normalizeProvider(toEndpointV1(endpoint))
      : undefined;
  const isCustomEndpoint = input.endpoint ? true : false;
  return {
    ...input,
    endpoint: resolvedEndpoint,
    tls,
    isCustomEndpoint,
    useDualstackEndpoint: normalizeProvider(input.useDualstackEndpoint ?? false),
    useFipsEndpoint: normalizeProvider(input.useFipsEndpoint ?? false),
    // endpointProvider,
  };
};

declare const toEndpointV1: (endpoint: string | Endpoint | EndpointV2) => Endpoint; // TODO(endpointsV2) implementation
