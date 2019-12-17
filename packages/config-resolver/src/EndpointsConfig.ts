import {
  Provider,
  UrlParser,
  Endpoint,
  RegionInfoProvider,
  RegionInfo
} from "@aws-sdk/types";

export function normalizeEndpoint(
  endpoint?: string | Endpoint | Provider<Endpoint>,
  urlParser?: UrlParser
): Provider<Endpoint> {
  if (typeof endpoint === "string") {
    const promisified = Promise.resolve(urlParser!(endpoint));
    return () => promisified;
  } else if (typeof endpoint === "object") {
    const promisified = Promise.resolve(endpoint);
    return () => promisified;
  }
  return endpoint!;
}

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
export interface EndpointsResolvedConfig
  extends Required<EndpointsInputConfig> {
  endpoint: Provider<Endpoint>;
}
export function resolveEndpointsConfig<T>(
  input: T & EndpointsInputConfig & PreviouslyResolved
): T & EndpointsResolvedConfig {
  const tls = input.tls || true;
  const endpoint: Provider<Endpoint> = input.endpoint
    ? normalizeEndpoint(input.endpoint, input.urlParser)
    : () =>
        input.region().then(async region => {
          const hostname = (
            (await input.regionInfoProvider(region)) || ({} as RegionInfo)
          ).hostname;
          if (!hostname)
            throw new Error("Cannot resolve hostname from client config");
          const endpoint = input.urlParser(hostname);
          endpoint.protocol = tls ? "https:" : "http:";
          return endpoint;
        });
  return {
    ...input,
    endpoint,
    tls
  };
}
