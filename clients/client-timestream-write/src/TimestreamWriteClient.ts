// smithy-typescript generated code
import {
  type EndpointDiscoveryInputConfig,
  type EndpointDiscoveryResolvedConfig,
  resolveEndpointDiscoveryConfig,
} from "@aws-sdk/middleware-endpoint-discovery";
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultTimestreamWriteHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateBatchLoadTaskCommandInput,
  CreateBatchLoadTaskCommandOutput,
} from "./commands/CreateBatchLoadTaskCommand";
import type { CreateDatabaseCommandInput, CreateDatabaseCommandOutput } from "./commands/CreateDatabaseCommand";
import type { CreateTableCommandInput, CreateTableCommandOutput } from "./commands/CreateTableCommand";
import type { DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput } from "./commands/DeleteDatabaseCommand";
import type { DeleteTableCommandInput, DeleteTableCommandOutput } from "./commands/DeleteTableCommand";
import type {
  DescribeBatchLoadTaskCommandInput,
  DescribeBatchLoadTaskCommandOutput,
} from "./commands/DescribeBatchLoadTaskCommand";
import type { DescribeDatabaseCommandInput, DescribeDatabaseCommandOutput } from "./commands/DescribeDatabaseCommand";
import {
  type DescribeEndpointsCommandInput,
  type DescribeEndpointsCommandOutput,
  DescribeEndpointsCommand,
} from "./commands/DescribeEndpointsCommand";
import type { DescribeTableCommandInput, DescribeTableCommandOutput } from "./commands/DescribeTableCommand";
import type {
  ListBatchLoadTasksCommandInput,
  ListBatchLoadTasksCommandOutput,
} from "./commands/ListBatchLoadTasksCommand";
import type { ListDatabasesCommandInput, ListDatabasesCommandOutput } from "./commands/ListDatabasesCommand";
import type { ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ResumeBatchLoadTaskCommandInput,
  ResumeBatchLoadTaskCommandOutput,
} from "./commands/ResumeBatchLoadTaskCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateDatabaseCommandInput, UpdateDatabaseCommandOutput } from "./commands/UpdateDatabaseCommand";
import type { UpdateTableCommandInput, UpdateTableCommandOutput } from "./commands/UpdateTableCommand";
import type { WriteRecordsCommandInput, WriteRecordsCommandOutput } from "./commands/WriteRecordsCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateBatchLoadTaskCommandInput
  | CreateDatabaseCommandInput
  | CreateTableCommandInput
  | DeleteDatabaseCommandInput
  | DeleteTableCommandInput
  | DescribeBatchLoadTaskCommandInput
  | DescribeDatabaseCommandInput
  | DescribeEndpointsCommandInput
  | DescribeTableCommandInput
  | ListBatchLoadTasksCommandInput
  | ListDatabasesCommandInput
  | ListTablesCommandInput
  | ListTagsForResourceCommandInput
  | ResumeBatchLoadTaskCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDatabaseCommandInput
  | UpdateTableCommandInput
  | WriteRecordsCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateBatchLoadTaskCommandOutput
  | CreateDatabaseCommandOutput
  | CreateTableCommandOutput
  | DeleteDatabaseCommandOutput
  | DeleteTableCommandOutput
  | DescribeBatchLoadTaskCommandOutput
  | DescribeDatabaseCommandOutput
  | DescribeEndpointsCommandOutput
  | DescribeTableCommandOutput
  | ListBatchLoadTasksCommandOutput
  | ListDatabasesCommandOutput
  | ListTablesCommandOutput
  | ListTagsForResourceCommandOutput
  | ResumeBatchLoadTaskCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDatabaseCommandOutput
  | UpdateTableCommandOutput
  | WriteRecordsCommandOutput;

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
  defaultUserAgentProvider?: __Provider<__UserAgent>;

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
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
  /**
   * The provider which populates default for endpointDiscoveryEnabled configuration, if it's
   * not passed during client creation.
   * @internal
   */
  endpointDiscoveryEnabledProvider?: __Provider<boolean | undefined>;

}

/**
 * @public
 */
export type TimestreamWriteClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  EndpointDiscoveryInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of TimestreamWriteClient class constructor that set the region, credentials and other options.
 */
export interface TimestreamWriteClientConfig extends TimestreamWriteClientConfigType {}

/**
 * @public
 */
export type TimestreamWriteClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  EndpointDiscoveryResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of TimestreamWriteClient class. This is resolved and normalized from the {@link TimestreamWriteClientConfig | constructor configuration interface}.
 */
export interface TimestreamWriteClientResolvedConfig extends TimestreamWriteClientResolvedConfigType {}

/**
 * <fullname>Amazon Timestream Write</fullname>
 *          <p>Amazon Timestream is a fast, scalable, fully managed time-series database service
 *          that makes it easy to store and analyze trillions of time-series data points per day. With
 *             Timestream, you can easily store and analyze IoT sensor data to derive insights
 *          from your IoT applications. You can analyze industrial telemetry to streamline equipment
 *          management and maintenance. You can also store and analyze log data and metrics to improve
 *          the performance and availability of your applications. </p>
 *          <p>Timestream is built from the ground up to effectively ingest, process, and
 *          store time-series data. It organizes data to optimize query processing. It automatically
 *          scales based on the volume of data ingested and on the query volume to ensure you receive
 *          optimal performance while inserting and querying data. As your data grows over time,
 *             Timestream’s adaptive query processing engine spans across storage tiers to
 *          provide fast analysis while reducing costs.</p>
 * @public
 */
export class TimestreamWriteClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  TimestreamWriteClientResolvedConfig
> {
  /**
   * The resolved configuration of TimestreamWriteClient class. This is resolved and normalized from the {@link TimestreamWriteClientConfig | constructor configuration interface}.
   */
  readonly config: TimestreamWriteClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<TimestreamWriteClientConfig>) {
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
    const _config_8 = resolveEndpointDiscoveryConfig(_config_7, { endpointDiscoveryCommandCtor: DescribeEndpointsCommand });
    const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
    this.config = _config_9;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultTimestreamWriteHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: TimestreamWriteClientResolvedConfig) =>
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
