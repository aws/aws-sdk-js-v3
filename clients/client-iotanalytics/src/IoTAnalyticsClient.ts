// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
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

import { BatchPutMessageCommandInput, BatchPutMessageCommandOutput } from "./commands/BatchPutMessageCommand";
import {
  CancelPipelineReprocessingCommandInput,
  CancelPipelineReprocessingCommandOutput,
} from "./commands/CancelPipelineReprocessingCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import {
  CreateDatasetContentCommandInput,
  CreateDatasetContentCommandOutput,
} from "./commands/CreateDatasetContentCommand";
import { CreateDatastoreCommandInput, CreateDatastoreCommandOutput } from "./commands/CreateDatastoreCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "./commands/CreatePipelineCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import {
  DeleteDatasetContentCommandInput,
  DeleteDatasetContentCommandOutput,
} from "./commands/DeleteDatasetContentCommand";
import { DeleteDatastoreCommandInput, DeleteDatastoreCommandOutput } from "./commands/DeleteDatastoreCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "./commands/DeletePipelineCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import { DescribeDatastoreCommandInput, DescribeDatastoreCommandOutput } from "./commands/DescribeDatastoreCommand";
import {
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput,
} from "./commands/DescribeLoggingOptionsCommand";
import { DescribePipelineCommandInput, DescribePipelineCommandOutput } from "./commands/DescribePipelineCommand";
import { GetDatasetContentCommandInput, GetDatasetContentCommandOutput } from "./commands/GetDatasetContentCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import {
  ListDatasetContentsCommandInput,
  ListDatasetContentsCommandOutput,
} from "./commands/ListDatasetContentsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import { ListDatastoresCommandInput, ListDatastoresCommandOutput } from "./commands/ListDatastoresCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "./commands/ListPipelinesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput } from "./commands/PutLoggingOptionsCommand";
import {
  RunPipelineActivityCommandInput,
  RunPipelineActivityCommandOutput,
} from "./commands/RunPipelineActivityCommand";
import { SampleChannelDataCommandInput, SampleChannelDataCommandOutput } from "./commands/SampleChannelDataCommand";
import {
  StartPipelineReprocessingCommandInput,
  StartPipelineReprocessingCommandOutput,
} from "./commands/StartPipelineReprocessingCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "./commands/UpdateDatasetCommand";
import { UpdateDatastoreCommandInput, UpdateDatastoreCommandOutput } from "./commands/UpdateDatastoreCommand";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "./commands/UpdatePipelineCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchPutMessageCommandInput
  | CancelPipelineReprocessingCommandInput
  | CreateChannelCommandInput
  | CreateDatasetCommandInput
  | CreateDatasetContentCommandInput
  | CreateDatastoreCommandInput
  | CreatePipelineCommandInput
  | DeleteChannelCommandInput
  | DeleteDatasetCommandInput
  | DeleteDatasetContentCommandInput
  | DeleteDatastoreCommandInput
  | DeletePipelineCommandInput
  | DescribeChannelCommandInput
  | DescribeDatasetCommandInput
  | DescribeDatastoreCommandInput
  | DescribeLoggingOptionsCommandInput
  | DescribePipelineCommandInput
  | GetDatasetContentCommandInput
  | ListChannelsCommandInput
  | ListDatasetContentsCommandInput
  | ListDatasetsCommandInput
  | ListDatastoresCommandInput
  | ListPipelinesCommandInput
  | ListTagsForResourceCommandInput
  | PutLoggingOptionsCommandInput
  | RunPipelineActivityCommandInput
  | SampleChannelDataCommandInput
  | StartPipelineReprocessingCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateChannelCommandInput
  | UpdateDatasetCommandInput
  | UpdateDatastoreCommandInput
  | UpdatePipelineCommandInput;

export type ServiceOutputTypes =
  | BatchPutMessageCommandOutput
  | CancelPipelineReprocessingCommandOutput
  | CreateChannelCommandOutput
  | CreateDatasetCommandOutput
  | CreateDatasetContentCommandOutput
  | CreateDatastoreCommandOutput
  | CreatePipelineCommandOutput
  | DeleteChannelCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteDatasetContentCommandOutput
  | DeleteDatastoreCommandOutput
  | DeletePipelineCommandOutput
  | DescribeChannelCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeDatastoreCommandOutput
  | DescribeLoggingOptionsCommandOutput
  | DescribePipelineCommandOutput
  | GetDatasetContentCommandOutput
  | ListChannelsCommandOutput
  | ListDatasetContentsCommandOutput
  | ListDatasetsCommandOutput
  | ListDatastoresCommandOutput
  | ListPipelinesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutLoggingOptionsCommandOutput
  | RunPipelineActivityCommandOutput
  | SampleChannelDataCommandOutput
  | StartPipelineReprocessingCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateChannelCommandOutput
  | UpdateDatasetCommandOutput
  | UpdateDatastoreCommandOutput
  | UpdatePipelineCommandOutput;

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
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type IoTAnalyticsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of IoTAnalyticsClient class constructor that set the region, credentials and other options.
 */
export interface IoTAnalyticsClientConfig extends IoTAnalyticsClientConfigType {}

type IoTAnalyticsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of IoTAnalyticsClient class. This is resolved and normalized from the {@link IoTAnalyticsClientConfig | constructor configuration interface}.
 */
export interface IoTAnalyticsClientResolvedConfig extends IoTAnalyticsClientResolvedConfigType {}

/**
 * <p>IoT Analytics allows you to collect large amounts of device data, process messages, and store them.
 *         You can then query the data and run sophisticated analytics on it.  IoT Analytics enables advanced
 *     data exploration through integration with Jupyter Notebooks and data visualization through integration
 *     with Amazon QuickSight.</p>
 *
 *          <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data
 *     often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result
 *     the data from these devices can have significant gaps, corrupted messages, and false readings that must be
 *     cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data
 *     from external sources. </p>
 *
 *          <p>IoT Analytics automates the steps required to analyze data from IoT devices. IoT Analytics
 *     filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You
 *     can set up the service to collect only the data you need from your devices, apply mathematical transforms
 *     to process the data, and enrich the data with device-specific metadata such as device type and location
 *     before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine,
 *     or perform more complex analytics and machine learning inference. IoT Analytics includes pre-built models
 *     for common IoT use cases so you can answer questions like which devices are about to fail or which customers
 *     are at risk of abandoning their wearable devices.</p>
 */
export class IoTAnalyticsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTAnalyticsClientResolvedConfig
> {
  /**
   * The resolved configuration of IoTAnalyticsClient class. This is resolved and normalized from the {@link IoTAnalyticsClientConfig | constructor configuration interface}.
   */
  readonly config: IoTAnalyticsClientResolvedConfig;

  constructor(configuration: IoTAnalyticsClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
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
