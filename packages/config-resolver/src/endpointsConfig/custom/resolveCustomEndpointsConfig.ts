import { Endpoint, Provider, UrlParser } from "@aws-sdk/types";

export interface CustomEndpointsInputConfig {
  /**
   * The fully qualified endpoint of the webservice.
   */
  endpoint: string | Endpoint | Provider<Endpoint>;

  /**
   * Whether TLS is enabled for requests.
   */
  tls?: boolean;
}

interface PreviouslyResolved {
  urlParser: UrlParser;
}

export interface CustomEndpointsResolvedConfig extends Required<CustomEndpointsInputConfig> {
  /**
   * Resolved value for input {@link CustomEndpointsInputConfig.endpoint}
   */
  endpoint: Provider<Endpoint>;
  /**
   * Whether the endpoint is specified by caller.
   * @internal
   */
  isCustomEndpoint: true;
}

export const resolveCustomEndpointsConfig = <T>(
  input: T & CustomEndpointsInputConfig & PreviouslyResolved
): T & CustomEndpointsResolvedConfig => ({
  ...input,
  tls: input.tls ?? true,
  endpoint: normalizeEndpoint(input),
  isCustomEndpoint: true,
});

const normalizeEndpoint = (input: CustomEndpointsInputConfig & PreviouslyResolved): Provider<Endpoint> => {
  const { endpoint, urlParser } = input;
  if (typeof endpoint === "string") {
    const promisified = Promise.resolve(urlParser(endpoint));
    return () => promisified;
  } else if (typeof endpoint === "object") {
    const promisified = Promise.resolve(endpoint);
    return () => promisified;
  }
  return endpoint;
};
