import {
  BatchPutMessageRequest,
  BatchPutMessageResponse,
  CancelPipelineReprocessingRequest,
  CancelPipelineReprocessingResponse,
  CreateChannelRequest,
  CreateChannelResponse,
  CreateDatasetContentRequest,
  CreateDatasetContentResponse,
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateDatastoreRequest,
  CreateDatastoreResponse,
  CreatePipelineRequest,
  CreatePipelineResponse,
  DeleteChannelRequest,
  DeleteDatasetContentRequest,
  DeleteDatasetRequest,
  DeleteDatastoreRequest,
  DeletePipelineRequest,
  DescribeChannelRequest,
  DescribeChannelResponse,
  DescribeDatasetRequest,
  DescribeDatasetResponse,
  DescribeDatastoreRequest,
  DescribeDatastoreResponse,
  DescribeLoggingOptionsRequest,
  DescribeLoggingOptionsResponse,
  DescribePipelineRequest,
  DescribePipelineResponse,
  GetDatasetContentRequest,
  GetDatasetContentResponse,
  ListChannelsRequest,
  ListChannelsResponse,
  ListDatasetContentsRequest,
  ListDatasetContentsResponse,
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListDatastoresRequest,
  ListDatastoresResponse,
  ListPipelinesRequest,
  ListPipelinesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  PutLoggingOptionsRequest,
  RunPipelineActivityRequest,
  RunPipelineActivityResponse,
  SampleChannelDataRequest,
  SampleChannelDataResponse,
  StartPipelineReprocessingRequest,
  StartPipelineReprocessingResponse,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateChannelRequest,
  UpdateDatasetRequest,
  UpdateDatastoreRequest,
  UpdatePipelineRequest
} from "./models/index";
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
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | BatchPutMessageRequest
  | CancelPipelineReprocessingRequest
  | CreateChannelRequest
  | CreateDatasetContentRequest
  | CreateDatasetRequest
  | CreateDatastoreRequest
  | CreatePipelineRequest
  | DeleteChannelRequest
  | DeleteDatasetContentRequest
  | DeleteDatasetRequest
  | DeleteDatastoreRequest
  | DeletePipelineRequest
  | DescribeChannelRequest
  | DescribeDatasetRequest
  | DescribeDatastoreRequest
  | DescribeLoggingOptionsRequest
  | DescribePipelineRequest
  | GetDatasetContentRequest
  | ListChannelsRequest
  | ListDatasetContentsRequest
  | ListDatasetsRequest
  | ListDatastoresRequest
  | ListPipelinesRequest
  | ListTagsForResourceRequest
  | PutLoggingOptionsRequest
  | RunPipelineActivityRequest
  | SampleChannelDataRequest
  | StartPipelineReprocessingRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateChannelRequest
  | UpdateDatasetRequest
  | UpdateDatastoreRequest
  | UpdatePipelineRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | BatchPutMessageResponse
  | CancelPipelineReprocessingResponse
  | CreateChannelResponse
  | CreateDatasetContentResponse
  | CreateDatasetResponse
  | CreateDatastoreResponse
  | CreatePipelineResponse
  | DescribeChannelResponse
  | DescribeDatasetResponse
  | DescribeDatastoreResponse
  | DescribeLoggingOptionsResponse
  | DescribePipelineResponse
  | GetDatasetContentResponse
  | ListChannelsResponse
  | ListDatasetContentsResponse
  | ListDatasetsResponse
  | ListDatastoresResponse
  | ListPipelinesResponse
  | ListTagsForResourceResponse
  | RunPipelineActivityResponse
  | SampleChannelDataResponse
  | StartPipelineReprocessingResponse
  | TagResourceResponse
  | UntagResourceResponse;

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

export type IoTAnalyticsClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type IoTAnalyticsClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>AWS IoT Analytics allows you to collect large amounts of device data, process messages, and store them.
 *     You can then query the data and run sophisticated analytics on it.  AWS IoT Analytics enables advanced
 *     data exploration through integration with Jupyter Notebooks and data visualization through integration
 *     with Amazon QuickSight.</p>
 *
 *          <p>Traditional analytics and business intelligence tools are designed to process structured data. IoT data
 *     often comes from devices that record noisy processes (such as temperature, motion, or sound). As a result
 *     the data from these devices can have significant gaps, corrupted messages, and false readings that must be
 *     cleaned up before analysis can occur. Also, IoT data is often only meaningful in the context of other data
 *     from external sources. </p>
 *
 *          <p>AWS IoT Analytics automates the steps required to analyze data from IoT devices. AWS IoT Analytics
 *     filters, transforms, and enriches IoT data before storing it in a time-series data store for analysis. You
 *     can set up the service to collect only the data you need from your devices, apply mathematical transforms
 *     to process the data, and enrich the data with device-specific metadata such as device type and location
 *     before storing it. Then, you can analyze your data by running queries using the built-in SQL query engine,
 *     or perform more complex analytics and machine learning inference. AWS IoT Analytics includes pre-built models
 *     for common IoT use cases so you can answer questions like which devices are about to fail or which customers
 *     are at risk of abandoning their wearable devices.</p>
 */
export class IoTAnalyticsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTAnalyticsClientResolvedConfig
> {
  readonly config: IoTAnalyticsClientResolvedConfig;

  constructor(configuration: IoTAnalyticsClientConfig) {
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
