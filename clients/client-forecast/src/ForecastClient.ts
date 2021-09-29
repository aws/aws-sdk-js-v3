import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import { CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput } from "./commands/CreateDatasetGroupCommand";
import {
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput,
} from "./commands/CreateDatasetImportJobCommand";
import { CreateForecastCommandInput, CreateForecastCommandOutput } from "./commands/CreateForecastCommand";
import {
  CreateForecastExportJobCommandInput,
  CreateForecastExportJobCommandOutput,
} from "./commands/CreateForecastExportJobCommand";
import {
  CreatePredictorBacktestExportJobCommandInput,
  CreatePredictorBacktestExportJobCommandOutput,
} from "./commands/CreatePredictorBacktestExportJobCommand";
import { CreatePredictorCommandInput, CreatePredictorCommandOutput } from "./commands/CreatePredictorCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import { DeleteDatasetGroupCommandInput, DeleteDatasetGroupCommandOutput } from "./commands/DeleteDatasetGroupCommand";
import {
  DeleteDatasetImportJobCommandInput,
  DeleteDatasetImportJobCommandOutput,
} from "./commands/DeleteDatasetImportJobCommand";
import { DeleteForecastCommandInput, DeleteForecastCommandOutput } from "./commands/DeleteForecastCommand";
import {
  DeleteForecastExportJobCommandInput,
  DeleteForecastExportJobCommandOutput,
} from "./commands/DeleteForecastExportJobCommand";
import {
  DeletePredictorBacktestExportJobCommandInput,
  DeletePredictorBacktestExportJobCommandOutput,
} from "./commands/DeletePredictorBacktestExportJobCommand";
import { DeletePredictorCommandInput, DeletePredictorCommandOutput } from "./commands/DeletePredictorCommand";
import { DeleteResourceTreeCommandInput, DeleteResourceTreeCommandOutput } from "./commands/DeleteResourceTreeCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import {
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput,
} from "./commands/DescribeDatasetGroupCommand";
import {
  DescribeDatasetImportJobCommandInput,
  DescribeDatasetImportJobCommandOutput,
} from "./commands/DescribeDatasetImportJobCommand";
import { DescribeForecastCommandInput, DescribeForecastCommandOutput } from "./commands/DescribeForecastCommand";
import {
  DescribeForecastExportJobCommandInput,
  DescribeForecastExportJobCommandOutput,
} from "./commands/DescribeForecastExportJobCommand";
import {
  DescribePredictorBacktestExportJobCommandInput,
  DescribePredictorBacktestExportJobCommandOutput,
} from "./commands/DescribePredictorBacktestExportJobCommand";
import { DescribePredictorCommandInput, DescribePredictorCommandOutput } from "./commands/DescribePredictorCommand";
import { GetAccuracyMetricsCommandInput, GetAccuracyMetricsCommandOutput } from "./commands/GetAccuracyMetricsCommand";
import { ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput } from "./commands/ListDatasetGroupsCommand";
import {
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "./commands/ListDatasetImportJobsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import {
  ListForecastExportJobsCommandInput,
  ListForecastExportJobsCommandOutput,
} from "./commands/ListForecastExportJobsCommand";
import { ListForecastsCommandInput, ListForecastsCommandOutput } from "./commands/ListForecastsCommand";
import {
  ListPredictorBacktestExportJobsCommandInput,
  ListPredictorBacktestExportJobsCommandOutput,
} from "./commands/ListPredictorBacktestExportJobsCommand";
import { ListPredictorsCommandInput, ListPredictorsCommandOutput } from "./commands/ListPredictorsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StopResourceCommandInput, StopResourceCommandOutput } from "./commands/StopResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDatasetGroupCommandInput, UpdateDatasetGroupCommandOutput } from "./commands/UpdateDatasetGroupCommand";
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
  | CreateDatasetCommandInput
  | CreateDatasetGroupCommandInput
  | CreateDatasetImportJobCommandInput
  | CreateForecastCommandInput
  | CreateForecastExportJobCommandInput
  | CreatePredictorBacktestExportJobCommandInput
  | CreatePredictorCommandInput
  | DeleteDatasetCommandInput
  | DeleteDatasetGroupCommandInput
  | DeleteDatasetImportJobCommandInput
  | DeleteForecastCommandInput
  | DeleteForecastExportJobCommandInput
  | DeletePredictorBacktestExportJobCommandInput
  | DeletePredictorCommandInput
  | DeleteResourceTreeCommandInput
  | DescribeDatasetCommandInput
  | DescribeDatasetGroupCommandInput
  | DescribeDatasetImportJobCommandInput
  | DescribeForecastCommandInput
  | DescribeForecastExportJobCommandInput
  | DescribePredictorBacktestExportJobCommandInput
  | DescribePredictorCommandInput
  | GetAccuracyMetricsCommandInput
  | ListDatasetGroupsCommandInput
  | ListDatasetImportJobsCommandInput
  | ListDatasetsCommandInput
  | ListForecastExportJobsCommandInput
  | ListForecastsCommandInput
  | ListPredictorBacktestExportJobsCommandInput
  | ListPredictorsCommandInput
  | ListTagsForResourceCommandInput
  | StopResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDatasetGroupCommandInput;

export type ServiceOutputTypes =
  | CreateDatasetCommandOutput
  | CreateDatasetGroupCommandOutput
  | CreateDatasetImportJobCommandOutput
  | CreateForecastCommandOutput
  | CreateForecastExportJobCommandOutput
  | CreatePredictorBacktestExportJobCommandOutput
  | CreatePredictorCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteDatasetGroupCommandOutput
  | DeleteDatasetImportJobCommandOutput
  | DeleteForecastCommandOutput
  | DeleteForecastExportJobCommandOutput
  | DeletePredictorBacktestExportJobCommandOutput
  | DeletePredictorCommandOutput
  | DeleteResourceTreeCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeDatasetGroupCommandOutput
  | DescribeDatasetImportJobCommandOutput
  | DescribeForecastCommandOutput
  | DescribeForecastExportJobCommandOutput
  | DescribePredictorBacktestExportJobCommandOutput
  | DescribePredictorCommandOutput
  | GetAccuracyMetricsCommandOutput
  | ListDatasetGroupsCommandOutput
  | ListDatasetImportJobsCommandOutput
  | ListDatasetsCommandOutput
  | ListForecastExportJobsCommandOutput
  | ListForecastsCommandOutput
  | ListPredictorBacktestExportJobsCommandOutput
  | ListPredictorsCommandOutput
  | ListTagsForResourceCommandOutput
  | StopResourceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDatasetGroupCommandOutput;

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

type ForecastClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ForecastClient class constructor that set the region, credentials and other options.
 */
export interface ForecastClientConfig extends ForecastClientConfigType {}

type ForecastClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ForecastClient class. This is resolved and normalized from the {@link ForecastClientConfig | constructor configuration interface}.
 */
export interface ForecastClientResolvedConfig extends ForecastClientResolvedConfigType {}

/**
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 */
export class ForecastClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ForecastClientResolvedConfig
> {
  /**
   * The resolved configuration of ForecastClient class. This is resolved and normalized from the {@link ForecastClientConfig | constructor configuration interface}.
   */
  readonly config: ForecastClientResolvedConfig;

  constructor(configuration: ForecastClientConfig) {
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
