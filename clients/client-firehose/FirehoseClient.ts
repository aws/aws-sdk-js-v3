import {
  CreateDeliveryStreamCommandInput,
  CreateDeliveryStreamCommandOutput,
} from "./commands/CreateDeliveryStreamCommand";
import {
  DeleteDeliveryStreamCommandInput,
  DeleteDeliveryStreamCommandOutput,
} from "./commands/DeleteDeliveryStreamCommand";
import {
  DescribeDeliveryStreamCommandInput,
  DescribeDeliveryStreamCommandOutput,
} from "./commands/DescribeDeliveryStreamCommand";
import {
  ListDeliveryStreamsCommandInput,
  ListDeliveryStreamsCommandOutput,
} from "./commands/ListDeliveryStreamsCommand";
import {
  ListTagsForDeliveryStreamCommandInput,
  ListTagsForDeliveryStreamCommandOutput,
} from "./commands/ListTagsForDeliveryStreamCommand";
import { PutRecordBatchCommandInput, PutRecordBatchCommandOutput } from "./commands/PutRecordBatchCommand";
import { PutRecordCommandInput, PutRecordCommandOutput } from "./commands/PutRecordCommand";
import {
  StartDeliveryStreamEncryptionCommandInput,
  StartDeliveryStreamEncryptionCommandOutput,
} from "./commands/StartDeliveryStreamEncryptionCommand";
import {
  StopDeliveryStreamEncryptionCommandInput,
  StopDeliveryStreamEncryptionCommandOutput,
} from "./commands/StopDeliveryStreamEncryptionCommand";
import { TagDeliveryStreamCommandInput, TagDeliveryStreamCommandOutput } from "./commands/TagDeliveryStreamCommand";
import {
  UntagDeliveryStreamCommandInput,
  UntagDeliveryStreamCommandOutput,
} from "./commands/UntagDeliveryStreamCommand";
import { UpdateDestinationCommandInput, UpdateDestinationCommandOutput } from "./commands/UpdateDestinationCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import {
  LoggerInputConfig,
  LoggerResolvedConfig,
  getLoggerPlugin,
  resolveLoggerConfig,
} from "@aws-sdk/middleware-logger";
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
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateDeliveryStreamCommandInput
  | DeleteDeliveryStreamCommandInput
  | DescribeDeliveryStreamCommandInput
  | ListDeliveryStreamsCommandInput
  | ListTagsForDeliveryStreamCommandInput
  | PutRecordBatchCommandInput
  | PutRecordCommandInput
  | StartDeliveryStreamEncryptionCommandInput
  | StopDeliveryStreamEncryptionCommandInput
  | TagDeliveryStreamCommandInput
  | UntagDeliveryStreamCommandInput
  | UpdateDestinationCommandInput;

export type ServiceOutputTypes =
  | CreateDeliveryStreamCommandOutput
  | DeleteDeliveryStreamCommandOutput
  | DescribeDeliveryStreamCommandOutput
  | ListDeliveryStreamsCommandOutput
  | ListTagsForDeliveryStreamCommandOutput
  | PutRecordBatchCommandOutput
  | PutRecordCommandOutput
  | StartDeliveryStreamEncryptionCommandOutput
  | StopDeliveryStreamEncryptionCommandOutput
  | TagDeliveryStreamCommandOutput
  | UntagDeliveryStreamCommandOutput
  | UpdateDestinationCommandOutput;

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
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type FirehoseClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig &
  LoggerInputConfig;

export type FirehoseClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig &
  LoggerResolvedConfig;

/**
 * <fullname>Amazon Kinesis Data Firehose API Reference</fullname>
 *          <p>Amazon Kinesis Data Firehose is a fully managed service that delivers real-time
 *          streaming data to destinations such as Amazon Simple Storage Service (Amazon S3), Amazon
 *          Elasticsearch Service (Amazon ES), Amazon Redshift, and Splunk.</p>
 */
export class FirehoseClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  FirehoseClientResolvedConfig
> {
  readonly config: FirehoseClientResolvedConfig;

  constructor(configuration: FirehoseClientConfig) {
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
    let _config_7 = resolveLoggerConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
