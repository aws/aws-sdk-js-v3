// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  ClientProtocol,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultS3VectorsHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import { CreateVectorBucketCommandInput, CreateVectorBucketCommandOutput } from "./commands/CreateVectorBucketCommand";
import { DeleteIndexCommandInput, DeleteIndexCommandOutput } from "./commands/DeleteIndexCommand";
import { DeleteVectorBucketCommandInput, DeleteVectorBucketCommandOutput } from "./commands/DeleteVectorBucketCommand";
import {
  DeleteVectorBucketPolicyCommandInput,
  DeleteVectorBucketPolicyCommandOutput,
} from "./commands/DeleteVectorBucketPolicyCommand";
import { DeleteVectorsCommandInput, DeleteVectorsCommandOutput } from "./commands/DeleteVectorsCommand";
import { GetIndexCommandInput, GetIndexCommandOutput } from "./commands/GetIndexCommand";
import { GetVectorBucketCommandInput, GetVectorBucketCommandOutput } from "./commands/GetVectorBucketCommand";
import {
  GetVectorBucketPolicyCommandInput,
  GetVectorBucketPolicyCommandOutput,
} from "./commands/GetVectorBucketPolicyCommand";
import { GetVectorsCommandInput, GetVectorsCommandOutput } from "./commands/GetVectorsCommand";
import { ListIndexesCommandInput, ListIndexesCommandOutput } from "./commands/ListIndexesCommand";
import { ListVectorBucketsCommandInput, ListVectorBucketsCommandOutput } from "./commands/ListVectorBucketsCommand";
import { ListVectorsCommandInput, ListVectorsCommandOutput } from "./commands/ListVectorsCommand";
import {
  PutVectorBucketPolicyCommandInput,
  PutVectorBucketPolicyCommandOutput,
} from "./commands/PutVectorBucketPolicyCommand";
import { PutVectorsCommandInput, PutVectorsCommandOutput } from "./commands/PutVectorsCommand";
import { QueryVectorsCommandInput, QueryVectorsCommandOutput } from "./commands/QueryVectorsCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateIndexCommandInput
  | CreateVectorBucketCommandInput
  | DeleteIndexCommandInput
  | DeleteVectorBucketCommandInput
  | DeleteVectorBucketPolicyCommandInput
  | DeleteVectorsCommandInput
  | GetIndexCommandInput
  | GetVectorBucketCommandInput
  | GetVectorBucketPolicyCommandInput
  | GetVectorsCommandInput
  | ListIndexesCommandInput
  | ListVectorBucketsCommandInput
  | ListVectorsCommandInput
  | PutVectorBucketPolicyCommandInput
  | PutVectorsCommandInput
  | QueryVectorsCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateIndexCommandOutput
  | CreateVectorBucketCommandOutput
  | DeleteIndexCommandOutput
  | DeleteVectorBucketCommandOutput
  | DeleteVectorBucketPolicyCommandOutput
  | DeleteVectorsCommandOutput
  | GetIndexCommandOutput
  | GetVectorBucketCommandOutput
  | GetVectorBucketPolicyCommandOutput
  | GetVectorsCommandOutput
  | ListIndexesCommandOutput
  | ListVectorBucketsCommandOutput
  | ListVectorsCommandOutput
  | PutVectorBucketPolicyCommandOutput
  | PutVectorsCommandOutput
  | QueryVectorsCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type S3VectorsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of S3VectorsClient class constructor that set the region, credentials and other options.
 */
export interface S3VectorsClientConfig extends S3VectorsClientConfigType {}

/**
 * @public
 */
export type S3VectorsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of S3VectorsClient class. This is resolved and normalized from the {@link S3VectorsClientConfig | constructor configuration interface}.
 */
export interface S3VectorsClientResolvedConfig extends S3VectorsClientResolvedConfigType {}

/**
 * <p>Amazon S3 vector buckets are a bucket type to store and search vectors with sub-second search times. They are designed to provide dedicated API operations for you to interact with vectors to do similarity search. Within a vector bucket, you use a vector index to organize and logically group your vector data. When you make a write or read request, you direct it to a single vector index. You store your vector data as vectors. A vector contains a key (a name that you assign), a multi-dimensional vector, and, optionally, metadata that describes a vector. The key uniquely identifies the vector in a vector index.</p>
 * @public
 */
export class S3VectorsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  S3VectorsClientResolvedConfig
> {
  /**
   * The resolved configuration of S3VectorsClient class. This is resolved and normalized from the {@link S3VectorsClientConfig | constructor configuration interface}.
   */
  readonly config: S3VectorsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<S3VectorsClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultS3VectorsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: S3VectorsClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
