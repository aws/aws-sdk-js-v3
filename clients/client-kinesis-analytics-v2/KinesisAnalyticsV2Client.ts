import {
  AddApplicationCloudWatchLoggingOptionCommandInput,
  AddApplicationCloudWatchLoggingOptionCommandOutput
} from "./commands/AddApplicationCloudWatchLoggingOptionCommand";
import {
  AddApplicationInputCommandInput,
  AddApplicationInputCommandOutput
} from "./commands/AddApplicationInputCommand";
import {
  AddApplicationInputProcessingConfigurationCommandInput,
  AddApplicationInputProcessingConfigurationCommandOutput
} from "./commands/AddApplicationInputProcessingConfigurationCommand";
import {
  AddApplicationOutputCommandInput,
  AddApplicationOutputCommandOutput
} from "./commands/AddApplicationOutputCommand";
import {
  AddApplicationReferenceDataSourceCommandInput,
  AddApplicationReferenceDataSourceCommandOutput
} from "./commands/AddApplicationReferenceDataSourceCommand";
import {
  AddApplicationVpcConfigurationCommandInput,
  AddApplicationVpcConfigurationCommandOutput
} from "./commands/AddApplicationVpcConfigurationCommand";
import {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput
} from "./commands/CreateApplicationCommand";
import {
  CreateApplicationSnapshotCommandInput,
  CreateApplicationSnapshotCommandOutput
} from "./commands/CreateApplicationSnapshotCommand";
import {
  DeleteApplicationCloudWatchLoggingOptionCommandInput,
  DeleteApplicationCloudWatchLoggingOptionCommandOutput
} from "./commands/DeleteApplicationCloudWatchLoggingOptionCommand";
import {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput
} from "./commands/DeleteApplicationCommand";
import {
  DeleteApplicationInputProcessingConfigurationCommandInput,
  DeleteApplicationInputProcessingConfigurationCommandOutput
} from "./commands/DeleteApplicationInputProcessingConfigurationCommand";
import {
  DeleteApplicationOutputCommandInput,
  DeleteApplicationOutputCommandOutput
} from "./commands/DeleteApplicationOutputCommand";
import {
  DeleteApplicationReferenceDataSourceCommandInput,
  DeleteApplicationReferenceDataSourceCommandOutput
} from "./commands/DeleteApplicationReferenceDataSourceCommand";
import {
  DeleteApplicationSnapshotCommandInput,
  DeleteApplicationSnapshotCommandOutput
} from "./commands/DeleteApplicationSnapshotCommand";
import {
  DeleteApplicationVpcConfigurationCommandInput,
  DeleteApplicationVpcConfigurationCommandOutput
} from "./commands/DeleteApplicationVpcConfigurationCommand";
import {
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput
} from "./commands/DescribeApplicationCommand";
import {
  DescribeApplicationSnapshotCommandInput,
  DescribeApplicationSnapshotCommandOutput
} from "./commands/DescribeApplicationSnapshotCommand";
import {
  DiscoverInputSchemaCommandInput,
  DiscoverInputSchemaCommandOutput
} from "./commands/DiscoverInputSchemaCommand";
import {
  ListApplicationSnapshotsCommandInput,
  ListApplicationSnapshotsCommandOutput
} from "./commands/ListApplicationSnapshotsCommand";
import {
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput
} from "./commands/ListApplicationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  StartApplicationCommandInput,
  StartApplicationCommandOutput
} from "./commands/StartApplicationCommand";
import {
  StopApplicationCommandInput,
  StopApplicationCommandOutput
} from "./commands/StopApplicationCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput
} from "./commands/UpdateApplicationCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
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
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddApplicationCloudWatchLoggingOptionCommandInput
  | AddApplicationInputCommandInput
  | AddApplicationInputProcessingConfigurationCommandInput
  | AddApplicationOutputCommandInput
  | AddApplicationReferenceDataSourceCommandInput
  | AddApplicationVpcConfigurationCommandInput
  | CreateApplicationCommandInput
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
  | DiscoverInputSchemaCommandInput
  | ListApplicationSnapshotsCommandInput
  | ListApplicationsCommandInput
  | ListTagsForResourceCommandInput
  | StartApplicationCommandInput
  | StopApplicationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApplicationCommandInput;

export type ServiceOutputTypes =
  | AddApplicationCloudWatchLoggingOptionCommandOutput
  | AddApplicationInputCommandOutput
  | AddApplicationInputProcessingConfigurationCommandOutput
  | AddApplicationOutputCommandOutput
  | AddApplicationReferenceDataSourceCommandOutput
  | AddApplicationVpcConfigurationCommandOutput
  | CreateApplicationCommandOutput
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
  | DiscoverInputSchemaCommandOutput
  | ListApplicationSnapshotsCommandOutput
  | ListApplicationsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartApplicationCommandOutput
  | StopApplicationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApplicationCommandOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type KinesisAnalyticsV2ClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type KinesisAnalyticsV2ClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Amazon Kinesis Data Analytics is a fully managed service that you can use to process and analyze streaming data using SQL or Java. The service
 *       enables you to quickly author and run SQL or Java code against streaming sources to perform time
 *       series analytics, feed real-time dashboards, and create real-time metrics.</p>
 */
export class KinesisAnalyticsV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  readonly config: KinesisAnalyticsV2ClientResolvedConfig;

  constructor(configuration: KinesisAnalyticsV2ClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
