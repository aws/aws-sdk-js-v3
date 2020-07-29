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
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@aws-sdk/eventstream-serde-config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

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
  | UpdateShardCountCommandInput;

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
  | UpdateShardCountCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;
}

export type KinesisClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig &
  EventStreamSerdeInputConfig;

export type KinesisClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig &
  EventStreamSerdeResolvedConfig;

/**
 * <fullname>Amazon Kinesis Data Streams Service API Reference</fullname>
 *         <p>Amazon Kinesis Data Streams is a managed service that scales elastically for
 *             real-time processing of streaming big data.</p>
 */
export class KinesisClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  KinesisClientResolvedConfig
> {
  readonly config: KinesisClientResolvedConfig;

  constructor(configuration: KinesisClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    let _config_7 = resolveEventStreamSerdeConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
