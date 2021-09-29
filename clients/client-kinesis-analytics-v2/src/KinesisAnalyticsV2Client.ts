import {
  AddApplicationCloudWatchLoggingOptionCommandInput,
  AddApplicationCloudWatchLoggingOptionCommandOutput,
} from "./commands/AddApplicationCloudWatchLoggingOptionCommand";
import {
  AddApplicationInputCommandInput,
  AddApplicationInputCommandOutput,
} from "./commands/AddApplicationInputCommand";
import {
  AddApplicationInputProcessingConfigurationCommandInput,
  AddApplicationInputProcessingConfigurationCommandOutput,
} from "./commands/AddApplicationInputProcessingConfigurationCommand";
import {
  AddApplicationOutputCommandInput,
  AddApplicationOutputCommandOutput,
} from "./commands/AddApplicationOutputCommand";
import {
  AddApplicationReferenceDataSourceCommandInput,
  AddApplicationReferenceDataSourceCommandOutput,
} from "./commands/AddApplicationReferenceDataSourceCommand";
import {
  AddApplicationVpcConfigurationCommandInput,
  AddApplicationVpcConfigurationCommandOutput,
} from "./commands/AddApplicationVpcConfigurationCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import {
  CreateApplicationPresignedUrlCommandInput,
  CreateApplicationPresignedUrlCommandOutput,
} from "./commands/CreateApplicationPresignedUrlCommand";
import {
  CreateApplicationSnapshotCommandInput,
  CreateApplicationSnapshotCommandOutput,
} from "./commands/CreateApplicationSnapshotCommand";
import {
  DeleteApplicationCloudWatchLoggingOptionCommandInput,
  DeleteApplicationCloudWatchLoggingOptionCommandOutput,
} from "./commands/DeleteApplicationCloudWatchLoggingOptionCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import {
  DeleteApplicationInputProcessingConfigurationCommandInput,
  DeleteApplicationInputProcessingConfigurationCommandOutput,
} from "./commands/DeleteApplicationInputProcessingConfigurationCommand";
import {
  DeleteApplicationOutputCommandInput,
  DeleteApplicationOutputCommandOutput,
} from "./commands/DeleteApplicationOutputCommand";
import {
  DeleteApplicationReferenceDataSourceCommandInput,
  DeleteApplicationReferenceDataSourceCommandOutput,
} from "./commands/DeleteApplicationReferenceDataSourceCommand";
import {
  DeleteApplicationSnapshotCommandInput,
  DeleteApplicationSnapshotCommandOutput,
} from "./commands/DeleteApplicationSnapshotCommand";
import {
  DeleteApplicationVpcConfigurationCommandInput,
  DeleteApplicationVpcConfigurationCommandOutput,
} from "./commands/DeleteApplicationVpcConfigurationCommand";
import {
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
} from "./commands/DescribeApplicationCommand";
import {
  DescribeApplicationSnapshotCommandInput,
  DescribeApplicationSnapshotCommandOutput,
} from "./commands/DescribeApplicationSnapshotCommand";
import {
  DescribeApplicationVersionCommandInput,
  DescribeApplicationVersionCommandOutput,
} from "./commands/DescribeApplicationVersionCommand";
import {
  DiscoverInputSchemaCommandInput,
  DiscoverInputSchemaCommandOutput,
} from "./commands/DiscoverInputSchemaCommand";
import {
  ListApplicationSnapshotsCommandInput,
  ListApplicationSnapshotsCommandOutput,
} from "./commands/ListApplicationSnapshotsCommand";
import {
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "./commands/ListApplicationVersionsCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RollbackApplicationCommandInput,
  RollbackApplicationCommandOutput,
} from "./commands/RollbackApplicationCommand";
import { StartApplicationCommandInput, StartApplicationCommandOutput } from "./commands/StartApplicationCommand";
import { StopApplicationCommandInput, StopApplicationCommandOutput } from "./commands/StopApplicationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import {
  UpdateApplicationMaintenanceConfigurationCommandInput,
  UpdateApplicationMaintenanceConfigurationCommandOutput,
} from "./commands/UpdateApplicationMaintenanceConfigurationCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
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
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
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
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddApplicationCloudWatchLoggingOptionCommandInput
  | AddApplicationInputCommandInput
  | AddApplicationInputProcessingConfigurationCommandInput
  | AddApplicationOutputCommandInput
  | AddApplicationReferenceDataSourceCommandInput
  | AddApplicationVpcConfigurationCommandInput
  | CreateApplicationCommandInput
  | CreateApplicationPresignedUrlCommandInput
  | CreateApplicationSnapshotCommandInput
  | DeleteApplicationCloudWatchLoggingOptionCommandInput
  | DeleteApplicationCommandInput
  | DeleteApplicationInputProcessingConfigurationCommandInput
  | DeleteApplicationOutputCommandInput
  | DeleteApplicationReferenceDataSourceCommandInput
  | DeleteApplicationSnapshotCommandInput
  | DeleteApplicationVpcConfigurationCommandInput
  | DescribeApplicationCommandInput
  | DescribeApplicationSnapshotCommandInput
  | DescribeApplicationVersionCommandInput
  | DiscoverInputSchemaCommandInput
  | ListApplicationSnapshotsCommandInput
  | ListApplicationVersionsCommandInput
  | ListApplicationsCommandInput
  | ListTagsForResourceCommandInput
  | RollbackApplicationCommandInput
  | StartApplicationCommandInput
  | StopApplicationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApplicationCommandInput
  | UpdateApplicationMaintenanceConfigurationCommandInput;

export type ServiceOutputTypes =
  | AddApplicationCloudWatchLoggingOptionCommandOutput
  | AddApplicationInputCommandOutput
  | AddApplicationInputProcessingConfigurationCommandOutput
  | AddApplicationOutputCommandOutput
  | AddApplicationReferenceDataSourceCommandOutput
  | AddApplicationVpcConfigurationCommandOutput
  | CreateApplicationCommandOutput
  | CreateApplicationPresignedUrlCommandOutput
  | CreateApplicationSnapshotCommandOutput
  | DeleteApplicationCloudWatchLoggingOptionCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteApplicationInputProcessingConfigurationCommandOutput
  | DeleteApplicationOutputCommandOutput
  | DeleteApplicationReferenceDataSourceCommandOutput
  | DeleteApplicationSnapshotCommandOutput
  | DeleteApplicationVpcConfigurationCommandOutput
  | DescribeApplicationCommandOutput
  | DescribeApplicationSnapshotCommandOutput
  | DescribeApplicationVersionCommandOutput
  | DiscoverInputSchemaCommandOutput
  | ListApplicationSnapshotsCommandOutput
  | ListApplicationVersionsCommandOutput
  | ListApplicationsCommandOutput
  | ListTagsForResourceCommandOutput
  | RollbackApplicationCommandOutput
  | StartApplicationCommandOutput
  | StopApplicationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateApplicationMaintenanceConfigurationCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type KinesisAnalyticsV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of KinesisAnalyticsV2Client class constructor that set the region, credentials and other options.
 */
export interface KinesisAnalyticsV2ClientConfig extends KinesisAnalyticsV2ClientConfigType {}

type KinesisAnalyticsV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of KinesisAnalyticsV2Client class. This is resolved and normalized from the {@link KinesisAnalyticsV2ClientConfig | constructor configuration interface}.
 */
export interface KinesisAnalyticsV2ClientResolvedConfig extends KinesisAnalyticsV2ClientResolvedConfigType {}

/**
 * <p>Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using Java, SQL, or Scala. The service
 *       enables you to quickly author and run Java, SQL, or Scala code against streaming sources to perform time
 *       series analytics, feed real-time dashboards, and create real-time metrics.</p>
 */
export class KinesisAnalyticsV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  /**
   * The resolved configuration of KinesisAnalyticsV2Client class. This is resolved and normalized from the {@link KinesisAnalyticsV2ClientConfig | constructor configuration interface}.
   */
  readonly config: KinesisAnalyticsV2ClientResolvedConfig;

  constructor(configuration: KinesisAnalyticsV2ClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
