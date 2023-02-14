// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@aws-sdk/eventstream-serde-config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { AddTagsToStreamCommandInput, AddTagsToStreamCommandOutput } from "./commands/AddTagsToStreamCommand";
import { CreateStreamCommandInput, CreateStreamCommandOutput } from "./commands/CreateStreamCommand";
import {
  DecreaseStreamRetentionPeriodCommandInput,
  DecreaseStreamRetentionPeriodCommandOutput,
} from "./commands/DecreaseStreamRetentionPeriodCommand";
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

export type ServiceInputTypes =
  | AddTagsToStreamCommandInput
  | CreateStreamCommandInput
  | DecreaseStreamRetentionPeriodCommandInput
  | DeleteStreamCommandInput
  | DeregisterStreamConsumerCommandInput
  | DescribeLimitsCommandInput
  | DescribeStreamCommandInput
  | DescribeStreamConsumerCommandInput
  | DescribeStreamSummaryCommandInput
  | DisableEnhancedMonitoringCommandInput
  | EnableEnhancedMonitoringCommandInput
  | GetRecordsCommandInput
  | GetShardIteratorCommandInput
  | IncreaseStreamRetentionPeriodCommandInput
  | ListShardsCommandInput
  | ListStreamConsumersCommandInput
  | ListStreamsCommandInput
  | ListTagsForStreamCommandInput
  | MergeShardsCommandInput
  | PutRecordCommandInput
  | PutRecordsCommandInput
  | RegisterStreamConsumerCommandInput
  | RemoveTagsFromStreamCommandInput
  | SplitShardCommandInput
  | StartStreamEncryptionCommandInput
  | StopStreamEncryptionCommandInput
  | SubscribeToShardCommandInput
  | UpdateShardCountCommandInput
  | UpdateStreamModeCommandInput;

export type ServiceOutputTypes =
  | AddTagsToStreamCommandOutput
  | CreateStreamCommandOutput
  | DecreaseStreamRetentionPeriodCommandOutput
  | DeleteStreamCommandOutput
  | DeregisterStreamConsumerCommandOutput
  | DescribeLimitsCommandOutput
  | DescribeStreamCommandOutput
  | DescribeStreamConsumerCommandOutput
  | DescribeStreamSummaryCommandOutput
  | DisableEnhancedMonitoringCommandOutput
  | EnableEnhancedMonitoringCommandOutput
  | GetRecordsCommandOutput
  | GetShardIteratorCommandOutput
  | IncreaseStreamRetentionPeriodCommandOutput
  | ListShardsCommandOutput
  | ListStreamConsumersCommandOutput
  | ListStreamsCommandOutput
  | ListTagsForStreamCommandOutput
  | MergeShardsCommandOutput
  | PutRecordCommandOutput
  | PutRecordsCommandOutput
  | RegisterStreamConsumerCommandOutput
  | RemoveTagsFromStreamCommandOutput
  | SplitShardCommandOutput
  | StartStreamEncryptionCommandOutput
  | StopStreamEncryptionCommandOutput
  | SubscribeToShardCommandOutput
  | UpdateShardCountCommandOutput
  | UpdateStreamModeCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type KinesisClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  EventStreamSerdeInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of KinesisClient class constructor that set the region, credentials and other options.
 */
export interface KinesisClientConfig extends KinesisClientConfigType {}

type KinesisClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  EventStreamSerdeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of KinesisClient class. This is resolved and normalized from the {@link KinesisClientConfig | constructor configuration interface}.
 */
export interface KinesisClientResolvedConfig extends KinesisClientResolvedConfigType {}

/**
 * <fullname>Amazon Kinesis Data Streams Service API Reference</fullname>
 *          <p>Amazon Kinesis Data Streams is a managed service that scales elastically for real-time
 *             processing of streaming big data.</p>
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

  constructor(configuration: KinesisClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveEventStreamSerdeConfig(_config_7);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
