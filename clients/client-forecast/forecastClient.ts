import {
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput
} from "./commands/CreateDatasetCommand";
import {
  CreateDatasetGroupCommandInput,
  CreateDatasetGroupCommandOutput
} from "./commands/CreateDatasetGroupCommand";
import {
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput
} from "./commands/CreateDatasetImportJobCommand";
import {
  CreateForecastCommandInput,
  CreateForecastCommandOutput
} from "./commands/CreateForecastCommand";
import {
  CreateForecastExportJobCommandInput,
  CreateForecastExportJobCommandOutput
} from "./commands/CreateForecastExportJobCommand";
import {
  CreatePredictorCommandInput,
  CreatePredictorCommandOutput
} from "./commands/CreatePredictorCommand";
import {
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput
} from "./commands/DeleteDatasetCommand";
import {
  DeleteDatasetGroupCommandInput,
  DeleteDatasetGroupCommandOutput
} from "./commands/DeleteDatasetGroupCommand";
import {
  DeleteDatasetImportJobCommandInput,
  DeleteDatasetImportJobCommandOutput
} from "./commands/DeleteDatasetImportJobCommand";
import {
  DeleteForecastCommandInput,
  DeleteForecastCommandOutput
} from "./commands/DeleteForecastCommand";
import {
  DeleteForecastExportJobCommandInput,
  DeleteForecastExportJobCommandOutput
} from "./commands/DeleteForecastExportJobCommand";
import {
  DeletePredictorCommandInput,
  DeletePredictorCommandOutput
} from "./commands/DeletePredictorCommand";
import {
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput
} from "./commands/DescribeDatasetCommand";
import {
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput
} from "./commands/DescribeDatasetGroupCommand";
import {
  DescribeDatasetImportJobCommandInput,
  DescribeDatasetImportJobCommandOutput
} from "./commands/DescribeDatasetImportJobCommand";
import {
  DescribeForecastCommandInput,
  DescribeForecastCommandOutput
} from "./commands/DescribeForecastCommand";
import {
  DescribeForecastExportJobCommandInput,
  DescribeForecastExportJobCommandOutput
} from "./commands/DescribeForecastExportJobCommand";
import {
  DescribePredictorCommandInput,
  DescribePredictorCommandOutput
} from "./commands/DescribePredictorCommand";
import {
  GetAccuracyMetricsCommandInput,
  GetAccuracyMetricsCommandOutput
} from "./commands/GetAccuracyMetricsCommand";
import {
  ListDatasetGroupsCommandInput,
  ListDatasetGroupsCommandOutput
} from "./commands/ListDatasetGroupsCommand";
import {
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput
} from "./commands/ListDatasetImportJobsCommand";
import {
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput
} from "./commands/ListDatasetsCommand";
import {
  ListForecastExportJobsCommandInput,
  ListForecastExportJobsCommandOutput
} from "./commands/ListForecastExportJobsCommand";
import {
  ListForecastsCommandInput,
  ListForecastsCommandOutput
} from "./commands/ListForecastsCommand";
import {
  ListPredictorsCommandInput,
  ListPredictorsCommandOutput
} from "./commands/ListPredictorsCommand";
import {
  UpdateDatasetGroupCommandInput,
  UpdateDatasetGroupCommandOutput
} from "./commands/UpdateDatasetGroupCommand";
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
  | CreateDatasetCommandInput
  | CreateDatasetGroupCommandInput
  | CreateDatasetImportJobCommandInput
  | CreateForecastCommandInput
  | CreateForecastExportJobCommandInput
  | CreatePredictorCommandInput
  | DeleteDatasetCommandInput
  | DeleteDatasetGroupCommandInput
  | DeleteDatasetImportJobCommandInput
  | DeleteForecastCommandInput
  | DeleteForecastExportJobCommandInput
  | DeletePredictorCommandInput
  | DescribeDatasetCommandInput
  | DescribeDatasetGroupCommandInput
  | DescribeDatasetImportJobCommandInput
  | DescribeForecastCommandInput
  | DescribeForecastExportJobCommandInput
  | DescribePredictorCommandInput
  | GetAccuracyMetricsCommandInput
  | ListDatasetGroupsCommandInput
  | ListDatasetImportJobsCommandInput
  | ListDatasetsCommandInput
  | ListForecastExportJobsCommandInput
  | ListForecastsCommandInput
  | ListPredictorsCommandInput
  | UpdateDatasetGroupCommandInput;

export type ServiceOutputTypes =
  | CreateDatasetCommandOutput
  | CreateDatasetGroupCommandOutput
  | CreateDatasetImportJobCommandOutput
  | CreateForecastCommandOutput
  | CreateForecastExportJobCommandOutput
  | CreatePredictorCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteDatasetGroupCommandOutput
  | DeleteDatasetImportJobCommandOutput
  | DeleteForecastCommandOutput
  | DeleteForecastExportJobCommandOutput
  | DeletePredictorCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeDatasetGroupCommandOutput
  | DescribeDatasetImportJobCommandOutput
  | DescribeForecastCommandOutput
  | DescribeForecastExportJobCommandOutput
  | DescribePredictorCommandOutput
  | GetAccuracyMetricsCommandOutput
  | ListDatasetGroupsCommandOutput
  | ListDatasetImportJobsCommandOutput
  | ListDatasetsCommandOutput
  | ListForecastExportJobsCommandOutput
  | ListForecastsCommandOutput
  | ListPredictorsCommandOutput
  | UpdateDatasetGroupCommandOutput;

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

export type forecastClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type forecastClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 */
export class forecastClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  forecastClientResolvedConfig
> {
  readonly config: forecastClientResolvedConfig;

  constructor(configuration: forecastClientConfig) {
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
