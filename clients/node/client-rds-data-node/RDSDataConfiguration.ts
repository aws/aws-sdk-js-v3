import * as __aws_sdk_credential_provider_node from "@aws-sdk/credential-provider-node";
import * as __aws_sdk_hash_node from "@aws-sdk/hash-node";
import * as __aws_sdk_node_http_handler from "@aws-sdk/node-http-handler";
import * as __aws_sdk_region_provider from "@aws-sdk/region-provider";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as __aws_sdk_url_parser_node from "@aws-sdk/url-parser-node";
import * as __aws_sdk_util_body_length_node from "@aws-sdk/util-body-length-node";
import { Protocol, TransferHandler } from "@aws-sdk/types";
import { HttpRequest, HttpResponse, HttpHandler } from "@aws-sdk/protocol-http";
import { RestJsonProtocol } from "@aws-sdk/protocol-rest-json";

export interface RDSDataConfiguration {
  /**
   * The credentials used to sign requests.
   *
   * If no static credentials are supplied, the SDK will attempt to credentials from known environment variables, from shared configuration and credentials files, and from the EC2 Instance Metadata Service, in that order.
   */
  credentials?:
  | __aws_sdk_types.Credentials
  | __aws_sdk_types.Provider<__aws_sdk_types.Credentials>;

  /**
   * A function that determines how long (in milliseconds) the SDK should wait before retrying a request
   */
  delayDecider?: __aws_sdk_types.DelayDecider;

  /**
   * The fully qualified endpoint of the webservice. This is only required when using a custom endpoint (for example, when using a local version of S3).
   */
  endpoint?:
  | string
  | __aws_sdk_types.HttpEndpoint
  | __aws_sdk_types.Provider<__aws_sdk_types.HttpEndpoint>;

  /**
   * The endpoint provider to call if no endpoint is provided
   */
  endpointProvider?: any;

  /**
   * The HTTP handler to use
   */
  httpHandler?: HttpHandler;

  /**
   * Whether sockets should be kept open even when there are no outstanding requests so that future requests can forgo having to reestablish a TCP or TLS connection. Defaults to true.
   */
  keepAlive?: boolean;

  /**
   * The maximum number of redirects to follow for a service request. Set to `0` to disable retries.
   */
  maxRedirects?: number;

  /**
   * The maximum number of times requests that encounter potentially transient failures should be retried
   */
  maxRetries?: number;

  /**
   * The configuration profile to use.
   */
  profile?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __aws_sdk_types.Provider<string>;

  /**
   * A function that determines whether an error is retryable
   */
  retryDecider?: __aws_sdk_types.RetryDecider;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface that computes the SHA-256 HMAC or checksum of a string or binary buffer
   */
  sha256?: __aws_sdk_types.HashConstructor;

  /**
   * The signer to use when signing requests.
   */
  signer?: __aws_sdk_types.RequestSigner;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Whether SSL is enabled for requests.
   */
  sslEnabled?: boolean;

  /**
   * The function that will be used to convert strings into HTTP endpoints
   */
  urlParser?: __aws_sdk_types.UrlParser;

  /**
   *
   */
  protocol?: Protocol<any, any>;
}

export interface RDSDataResolvableConfiguration extends RDSDataConfiguration {
  /**
   * Whether the HTTP handler was injected by the user and should thus not be destroyed when this client is
   */
  _user_injected_http_handler: any;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker: (body: any) => number | undefined;
}

export interface RDSDataResolvedConfiguration
  extends RDSDataConfiguration {
  _user_injected_http_handler: boolean;

  bodyLengthChecker: (body: any) => number | undefined;

  credentials: __aws_sdk_types.Provider<__aws_sdk_types.Credentials>;

  endpoint: __aws_sdk_types.Provider<__aws_sdk_types.HttpEndpoint>;

  endpointProvider: any;

  httpHandler: HttpHandler;

  keepAlive: boolean;

  maxRedirects: number;

  maxRetries: number;

  region: __aws_sdk_types.Provider<string>;

  sha256: __aws_sdk_types.HashConstructor;

  signer: __aws_sdk_types.RequestSigner;

  signingName: string;

  sslEnabled: boolean;

  urlParser: __aws_sdk_types.UrlParser;

  protocol: Protocol<any, any>;
}

export const configurationProperties: __aws_sdk_types.ConfigurationDefinition<
  RDSDataResolvableConfiguration,
  RDSDataResolvedConfiguration
> = {
  profile: {},
  maxRedirects: {
    defaultValue: 10
  },
  maxRetries: {
    defaultValue: 3
  },
  region: {
    defaultProvider: __aws_sdk_region_provider.defaultProvider,
    normalize: (
      value: string | __aws_sdk_types.Provider<string> | undefined
    ) => {
      if (typeof value === "string") {
        const promisified = Promise.resolve(value);
        return () => promisified;
      }

      return value!;
    }
  },
  sslEnabled: {
    defaultValue: true
  },
  urlParser: {
    defaultValue: __aws_sdk_url_parser_node.parseUrl
  },
  endpointProvider: {
    defaultValue: (sslEnabled: boolean, region: string) => ({
      protocol: sslEnabled ? "https:" : "http:",
      path: "/",
      hostname: `rds-data.${region}.amazonaws.com`
    })
  },
  endpoint: {
    defaultProvider: (configuration: {
      sslEnabled: boolean;
      endpointProvider: any;
      region: __aws_sdk_types.Provider<string>;
    }) => {
      const promisified = configuration
        .region()
        .then(region =>
          configuration.endpointProvider(configuration.sslEnabled, region)
        );
      return () => promisified;
    },
    normalize: (
      value:
        | string
        | __aws_sdk_types.HttpEndpoint
        | __aws_sdk_types.Provider<__aws_sdk_types.HttpEndpoint>
        | undefined,
      configuration: {
        urlParser?: __aws_sdk_types.UrlParser;
      }
    ): __aws_sdk_types.Provider<__aws_sdk_types.HttpEndpoint> => {
      if (typeof value === "string") {
        const promisified = Promise.resolve(configuration.urlParser!(value));
        return () => promisified;
      } else if (typeof value === "object") {
        const promisified = Promise.resolve(value);
        return () => promisified;
      }

      // Users are not required to supply an endpoint, so `value`
      // could be undefined. This function, however, will only be
      // invoked if `value` is defined, so the return will never
      // be undefined.
      return value!;
    }
  },
  keepAlive: {
    defaultValue: true
  },
  _user_injected_http_handler: {
    defaultProvider: (configuration: { httpHandler?: any }) =>
      !configuration.httpHandler
  },
  httpHandler: {
    defaultProvider: (configuration: { keepAlive: boolean }) =>
      new __aws_sdk_node_http_handler.NodeHttpHandler(configuration)
  },
  bodyLengthChecker: {
    defaultValue: __aws_sdk_util_body_length_node.calculateBodyLength
  },
  retryDecider: {},
  delayDecider: {},
  credentials: {
    defaultProvider: __aws_sdk_credential_provider_node.defaultProvider,
    normalize: (
      value:
        | __aws_sdk_types.Credentials
        | __aws_sdk_types.Provider<__aws_sdk_types.Credentials>
        | undefined
    ) => {
      if (typeof value === "object") {
        const promisified = Promise.resolve(value);
        return () => promisified;
      }

      return value!;
    }
  },
  sha256: {
    defaultValue: __aws_sdk_hash_node.Hash.bind(null, "sha256")
  },
  signingName: {
    defaultValue: "rds-data"
  },
  signer: {
    defaultProvider: (configuration: {
      credentials: __aws_sdk_types.Provider<__aws_sdk_types.Credentials>;
      region: __aws_sdk_types.Provider<string>;
      sha256: __aws_sdk_types.HashConstructor;
      signingName: string;
    }) =>
      new __aws_sdk_signature_v4.SignatureV4({
        credentials: configuration.credentials,
        region: configuration.region,
        service: configuration.signingName,
        sha256: configuration.sha256,
        uriEscapePath: true
      })
  },
  protocol: {
    defaultProvider: (configuration: {
      httpHandler: TransferHandler<
        HttpRequest,
        HttpResponse
      >;
    }) => new RestJsonProtocol(configuration.httpHandler)
  }
};
