import { Provider, UrlParser, Endpoint } from "@aws-sdk/types";

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

export namespace EndpointsConfig {
  export interface Input {
    /**
     * The fully qualified endpoint of the webservice. This is only required when using a custom endpoint (for example, when using a local version of S3).
     */
    endpoint?: string | Endpoint | Provider<Endpoint>;

    /**
     * The endpoint provider to call if no endpoint is provided
     */
    endpointProvider?: any;

    /**
     * Whether TLS is enabled for requests.
     */
    tls?: boolean;
  }
  interface PreviouslyResolved {
    urlParser: UrlParser;
    region: Provider<string>;
    service: string;
  }
  export interface Resolved extends Required<Input> {
    endpoint: Provider<Endpoint>;
  }
  export function resolve<T>(
    input: T & Input & PreviouslyResolved
  ): T & Resolved {
    const tls = input.tls || true;
    const defaultProvider = (tls: boolean, region: string) => ({
      protocol: tls ? "https:" : "http:",
      path: "/",
      hostname: `${input.service}.${region}.amazonaws.com`
    });
    const endpointProvider = input.endpointProvider || defaultProvider;
    let endpoint: Provider<Endpoint> = input.endpoint
      ? normalizeEndpoint(input.endpoint, input.urlParser)
      : () => input.region().then(region => endpointProvider(tls, region));
    return {
      ...input,
      endpointProvider,
      endpoint,
      tls
    };
  }
}
//export separately for showing comment block in Intellisense
export type EndpointsConfigInput = EndpointsConfig.Input;
