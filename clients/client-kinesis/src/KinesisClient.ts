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
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@smithy/eventstream-serde-config-resolver";
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
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultKinesisHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AddTagsToStreamCommandInput, AddTagsToStreamCommandOutput } from "./commands/AddTagsToStreamCommand";
import { CreateStreamCommandInput, CreateStreamCommandOutput } from "./commands/CreateStreamCommand";
import {
  DecreaseStreamRetentionPeriodCommandInput,
  DecreaseStreamRetentionPeriodCommandOutput,
} from "./commands/DecreaseStreamRetentionPeriodCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteStreamCommandInput, DeleteStreamCommandOutput } from "./commands/DeleteStreamCommand";
import {
  DeregisterStreamConsumerCommandInput,
  DeregisterStreamConsumerCommandOutput,
} from "./commands/DeregisterStreamConsumerCommand";
import { DescribeLimitsCommandInput, DescribeLimitsCommandOutput } from "./commands/DescribeLimitsCommand";
import { DescribeStreamCommandInput, DescribeStreamCommandOutput } from "./commands/DescribeStreamCommand";
import {
  DescribeStreamConsumerCommandInput,
  DescribeStreamConsumerCommandOutput,
} from "./commands/DescribeStreamConsumerCommand";
import {
  DescribeStreamSummaryCommandInput,
  DescribeStreamSummaryCommandOutput,
} from "./commands/DescribeStreamSummaryCommand";
import {
  DisableEnhancedMonitoringCommandInput,
  DisableEnhancedMonitoringCommandOutput,
} from "./commands/DisableEnhancedMonitoringCommand";
import {
  EnableEnhancedMonitoringCommandInput,
  EnableEnhancedMonitoringCommandOutput,
} from "./commands/EnableEnhancedMonitoringCommand";
import { GetRecordsCommandInput, GetRecordsCommandOutput } from "./commands/GetRecordsCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import { GetShardIteratorCommandInput, GetShardIteratorCommandOutput } from "./commands/GetShardIteratorCommand";
import {
  IncreaseStreamRetentionPeriodCommandInput,
  IncreaseStreamRetentionPeriodCommandOutput,
} from "./commands/IncreaseStreamRetentionPeriodCommand";
import { ListShardsCommandInput, ListShardsCommandOutput } from "./commands/ListShardsCommand";
import {
  ListStreamConsumersCommandInput,
  ListStreamConsumersCommandOutput,
} from "./commands/ListStreamConsumersCommand";
import { ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand";
import { ListTagsForStreamCommandInput, ListTagsForStreamCommandOutput } from "./commands/ListTagsForStreamCommand";
import { MergeShardsCommandInput, MergeShardsCommandOutput } from "./commands/MergeShardsCommand";
import { PutRecordCommandInput, PutRecordCommandOutput } from "./commands/PutRecordCommand";
import { PutRecordsCommandInput, PutRecordsCommandOutput } from "./commands/PutRecordsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  RegisterStreamConsumerCommandInput,
  RegisterStreamConsumerCommandOutput,
} from "./commands/RegisterStreamConsumerCommand";
import {
  RemoveTagsFromStreamCommandInput,
  RemoveTagsFromStreamCommandOutput,
} from "./commands/RemoveTagsFromStreamCommand";
import { SplitShardCommandInput, SplitShardCommandOutput } from "./commands/SplitShardCommand";
import {
  StartStreamEncryptionCommandInput,
  StartStreamEncryptionCommandOutput,
} from "./commands/StartStreamEncryptionCommand";
import {
  StopStreamEncryptionCommandInput,
  StopStreamEncryptionCommandOutput,
} from "./commands/StopStreamEncryptionCommand";
import { SubscribeToShardCommandInput, SubscribeToShardCommandOutput } from "./commands/SubscribeToShardCommand";
import { UpdateShardCountCommandInput, UpdateShardCountCommandOutput } from "./commands/UpdateShardCountCommand";
import { UpdateStreamModeCommandInput, UpdateStreamModeCommandOutput } from "./commands/UpdateStreamModeCommand";
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
  | AddTagsToStreamCommandInput
  | CreateStreamCommandInput
  | DecreaseStreamRetentionPeriodCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteStreamCommandInput
  | DeregisterStreamConsumerCommandInput
  | DescribeLimitsCommandInput
  | DescribeStreamCommandInput
  | DescribeStreamConsumerCommandInput
  | DescribeStreamSummaryCommandInput
  | DisableEnhancedMonitoringCommandInput
  | EnableEnhancedMonitoringCommandInput
  | GetRecordsCommandInput
  | GetResourcePolicyCommandInput
  | GetShardIteratorCommandInput
  | IncreaseStreamRetentionPeriodCommandInput
  | ListShardsCommandInput
  | ListStreamConsumersCommandInput
  | ListStreamsCommandInput
  | ListTagsForStreamCommandInput
  | MergeShardsCommandInput
  | PutRecordCommandInput
  | PutRecordsCommandInput
  | PutResourcePolicyCommandInput
  | RegisterStreamConsumerCommandInput
  | RemoveTagsFromStreamCommandInput
  | SplitShardCommandInput
  | StartStreamEncryptionCommandInput
  | StopStreamEncryptionCommandInput
  | SubscribeToShardCommandInput
  | UpdateShardCountCommandInput
  | UpdateStreamModeCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddTagsToStreamCommandOutput
  | CreateStreamCommandOutput
  | DecreaseStreamRetentionPeriodCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteStreamCommandOutput
  | DeregisterStreamConsumerCommandOutput
  | DescribeLimitsCommandOutput
  | DescribeStreamCommandOutput
  | DescribeStreamConsumerCommandOutput
  | DescribeStreamSummaryCommandOutput
  | DisableEnhancedMonitoringCommandOutput
  | EnableEnhancedMonitoringCommandOutput
  | GetRecordsCommandOutput
  | GetResourcePolicyCommandOutput
  | GetShardIteratorCommandOutput
  | IncreaseStreamRetentionPeriodCommandOutput
  | ListShardsCommandOutput
  | ListStreamConsumersCommandOutput
  | ListStreamsCommandOutput
  | ListTagsForStreamCommandOutput
  | MergeShardsCommandOutput
  | PutRecordCommandOutput
  | PutRecordsCommandOutput
  | PutResourcePolicyCommandOutput
  | RegisterStreamConsumerCommandOutput
  | RemoveTagsFromStreamCommandOutput
  | SplitShardCommandOutput
  | StartStreamEncryptionCommandOutput
  | StopStreamEncryptionCommandOutput
  | SubscribeToShardCommandOutput
  | UpdateShardCountCommandOutput
  | UpdateStreamModeCommandOutput;

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
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type KinesisClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  EventStreamSerdeInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of KinesisClient class constructor that set the region, credentials and other options.
 */
export interface KinesisClientConfig extends KinesisClientConfigType {}

/**
 * @public
 */
export type KinesisClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  EventStreamSerdeResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of KinesisClient class. This is resolved and normalized from the {@link KinesisClientConfig | constructor configuration interface}.
 */
export interface KinesisClientResolvedConfig extends KinesisClientResolvedConfigType {}

/**
 * <fullname>Amazon Kinesis Data Streams Service API Reference</fullname>
 *          <p>Amazon Kinesis Data Streams is a managed service that scales elastically for real-time
 *             processing of streaming big data.</p>
 * @public
 */
export class KinesisClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  KinesisClientResolvedConfig
> {
  /**
   * The resolved configuration of KinesisClient class. This is resolved and normalized from the {@link KinesisClientConfig | constructor configuration interface}.
   */
  readonly config: KinesisClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<KinesisClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveEventStreamSerdeConfig(_config_6);
    const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
    const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
    this.config = _config_9;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultKinesisHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: KinesisClientResolvedConfig) =>
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
