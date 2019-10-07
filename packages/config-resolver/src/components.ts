import {
  Credentials,
  Provider,
  HashConstructor,
  UrlParser,
  Protocol,
  HttpOptions,
  StreamCollector,
  Decoder,
  Encoder
} from "@aws-sdk/types";
import {
  HttpEndpoint,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from "@aws-sdk/protocol-http";

export interface RuntimeDependencies {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs
   */
  httpHandler?: HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface that computes the SHA-256 HMAC or checksum of a string or binary buffer
   */
  sha256?: HashConstructor;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => Provider<Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => Provider<string>;

  /**
   * The function that will be used to convert strings into HTTP endpoints
   */
  urlParser?: UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: Encoder;

  /**
   * The function that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;
}

export interface AWSClientRuntimeConfiguration extends RuntimeDependencies {
  /**
   * The function that will be used to populate serializing protocol
   */
  protocolDefaultProvider?: (
    handler: HttpHandler
  ) => Protocol<HttpRequest, HttpResponse>;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * The service name with which to construct endpoints.
   */
  service?: string;
}

export function normalizeProvider<T>(input: T | Provider<T>): Provider<T> {
  if (typeof input === "object") {
    const promisified = Promise.resolve(input);
    return () => promisified;
  }
  return input as Provider<T>;
}

export function normalizeEndpoint(
  endpoint?: string | HttpEndpoint | Provider<HttpEndpoint>,
  urlParser?: UrlParser
): Provider<HttpEndpoint> {
  if (typeof endpoint === "string") {
    const promisified = Promise.resolve(urlParser!(endpoint));
    return () => promisified;
  } else if (typeof endpoint === "object") {
    const promisified = Promise.resolve(endpoint);
    return () => promisified;
  }
  return endpoint!;
}

export namespace RegionConfiguration {
  export interface Input {
    /**
     * The AWS region to which this client will send requests
     */
    region?: string | Provider<string>;
  }
  interface PreviouslyResolved {
    regionDefaultProvider: (input: any) => Provider<string>;
  }
  export interface Resolved {
    region: Provider<string>;
  }
  export function resolve<T>(
    input: T & Input & PreviouslyResolved
  ): T & Resolved {
    let region = input.region || input.regionDefaultProvider(input as any);
    return {
      ...input,
      region: normalizeProvider(region)
    };
  }
}
//export separately for showing comment block in Intellisense
export type RegionConfigurationInput = RegionConfiguration.Input;

export namespace EndpointsConfig {
  export interface Input {
    /**
     * The fully qualified endpoint of the webservice. This is only required when using a custom endpoint (for example, when using a local version of S3).
     */
    endpoint?: string | HttpEndpoint | Provider<HttpEndpoint>;

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
    endpoint: Provider<HttpEndpoint>;
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
    let endpoint: Provider<HttpEndpoint> = input.endpoint
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

export namespace ProtocolConfig {
  export interface Input {
    /**
     * The serializing protocol to used in request
     */
    protocol?: Protocol<any, any>;
  }
  interface PreviouslyResolved {
    httpHandler: HttpHandler;
    protocolDefaultProvider: (
      handler: HttpHandler
    ) => Protocol<HttpRequest, HttpResponse, HttpOptions>;
  }
  export type Resolved = Required<Input>;
  export function resolve<T>(
    input: T & Input & PreviouslyResolved
  ): T & Resolved {
    return {
      ...input,
      protocol:
        input.protocol || input.protocolDefaultProvider(input.httpHandler)
    };
  }
}
//export separately for showing comment block in Intellisense
export type ProtocolConfigInput = ProtocolConfig.Input;
