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

import {
  CreateAutoPredictorCommandInput,
  CreateAutoPredictorCommandOutput,
} from "./commands/CreateAutoPredictorCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import { CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput } from "./commands/CreateDatasetGroupCommand";
import {
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput,
} from "./commands/CreateDatasetImportJobCommand";
import {
  CreateExplainabilityCommandInput,
  CreateExplainabilityCommandOutput,
} from "./commands/CreateExplainabilityCommand";
import {
  CreateExplainabilityExportCommandInput,
  CreateExplainabilityExportCommandOutput,
} from "./commands/CreateExplainabilityExportCommand";
import { CreateForecastCommandInput, CreateForecastCommandOutput } from "./commands/CreateForecastCommand";
import {
  CreateForecastExportJobCommandInput,
  CreateForecastExportJobCommandOutput,
} from "./commands/CreateForecastExportJobCommand";
import { CreateMonitorCommandInput, CreateMonitorCommandOutput } from "./commands/CreateMonitorCommand";
import {
  CreatePredictorBacktestExportJobCommandInput,
  CreatePredictorBacktestExportJobCommandOutput,
} from "./commands/CreatePredictorBacktestExportJobCommand";
import { CreatePredictorCommandInput, CreatePredictorCommandOutput } from "./commands/CreatePredictorCommand";
import {
  CreateWhatIfAnalysisCommandInput,
  CreateWhatIfAnalysisCommandOutput,
} from "./commands/CreateWhatIfAnalysisCommand";
import {
  CreateWhatIfForecastCommandInput,
  CreateWhatIfForecastCommandOutput,
} from "./commands/CreateWhatIfForecastCommand";
import {
  CreateWhatIfForecastExportCommandInput,
  CreateWhatIfForecastExportCommandOutput,
} from "./commands/CreateWhatIfForecastExportCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import { DeleteDatasetGroupCommandInput, DeleteDatasetGroupCommandOutput } from "./commands/DeleteDatasetGroupCommand";
import {
  DeleteDatasetImportJobCommandInput,
  DeleteDatasetImportJobCommandOutput,
} from "./commands/DeleteDatasetImportJobCommand";
import {
  DeleteExplainabilityCommandInput,
  DeleteExplainabilityCommandOutput,
} from "./commands/DeleteExplainabilityCommand";
import {
  DeleteExplainabilityExportCommandInput,
  DeleteExplainabilityExportCommandOutput,
} from "./commands/DeleteExplainabilityExportCommand";
import { DeleteForecastCommandInput, DeleteForecastCommandOutput } from "./commands/DeleteForecastCommand";
import {
  DeleteForecastExportJobCommandInput,
  DeleteForecastExportJobCommandOutput,
} from "./commands/DeleteForecastExportJobCommand";
import { DeleteMonitorCommandInput, DeleteMonitorCommandOutput } from "./commands/DeleteMonitorCommand";
import {
  DeletePredictorBacktestExportJobCommandInput,
  DeletePredictorBacktestExportJobCommandOutput,
} from "./commands/DeletePredictorBacktestExportJobCommand";
import { DeletePredictorCommandInput, DeletePredictorCommandOutput } from "./commands/DeletePredictorCommand";
import { DeleteResourceTreeCommandInput, DeleteResourceTreeCommandOutput } from "./commands/DeleteResourceTreeCommand";
import {
  DeleteWhatIfAnalysisCommandInput,
  DeleteWhatIfAnalysisCommandOutput,
} from "./commands/DeleteWhatIfAnalysisCommand";
import {
  DeleteWhatIfForecastCommandInput,
  DeleteWhatIfForecastCommandOutput,
} from "./commands/DeleteWhatIfForecastCommand";
import {
  DeleteWhatIfForecastExportCommandInput,
  DeleteWhatIfForecastExportCommandOutput,
} from "./commands/DeleteWhatIfForecastExportCommand";
import {
  DescribeAutoPredictorCommandInput,
  DescribeAutoPredictorCommandOutput,
} from "./commands/DescribeAutoPredictorCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import {
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput,
} from "./commands/DescribeDatasetGroupCommand";
import {
  DescribeDatasetImportJobCommandInput,
  DescribeDatasetImportJobCommandOutput,
} from "./commands/DescribeDatasetImportJobCommand";
import {
  DescribeExplainabilityCommandInput,
  DescribeExplainabilityCommandOutput,
} from "./commands/DescribeExplainabilityCommand";
import {
  DescribeExplainabilityExportCommandInput,
  DescribeExplainabilityExportCommandOutput,
} from "./commands/DescribeExplainabilityExportCommand";
import { DescribeForecastCommandInput, DescribeForecastCommandOutput } from "./commands/DescribeForecastCommand";
import {
  DescribeForecastExportJobCommandInput,
  DescribeForecastExportJobCommandOutput,
} from "./commands/DescribeForecastExportJobCommand";
import { DescribeMonitorCommandInput, DescribeMonitorCommandOutput } from "./commands/DescribeMonitorCommand";
import {
  DescribePredictorBacktestExportJobCommandInput,
  DescribePredictorBacktestExportJobCommandOutput,
} from "./commands/DescribePredictorBacktestExportJobCommand";
import { DescribePredictorCommandInput, DescribePredictorCommandOutput } from "./commands/DescribePredictorCommand";
import {
  DescribeWhatIfAnalysisCommandInput,
  DescribeWhatIfAnalysisCommandOutput,
} from "./commands/DescribeWhatIfAnalysisCommand";
import {
  DescribeWhatIfForecastCommandInput,
  DescribeWhatIfForecastCommandOutput,
} from "./commands/DescribeWhatIfForecastCommand";
import {
  DescribeWhatIfForecastExportCommandInput,
  DescribeWhatIfForecastExportCommandOutput,
} from "./commands/DescribeWhatIfForecastExportCommand";
import { GetAccuracyMetricsCommandInput, GetAccuracyMetricsCommandOutput } from "./commands/GetAccuracyMetricsCommand";
import { ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput } from "./commands/ListDatasetGroupsCommand";
import {
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "./commands/ListDatasetImportJobsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import {
  ListExplainabilitiesCommandInput,
  ListExplainabilitiesCommandOutput,
} from "./commands/ListExplainabilitiesCommand";
import {
  ListExplainabilityExportsCommandInput,
  ListExplainabilityExportsCommandOutput,
} from "./commands/ListExplainabilityExportsCommand";
import {
  ListForecastExportJobsCommandInput,
  ListForecastExportJobsCommandOutput,
} from "./commands/ListForecastExportJobsCommand";
import { ListForecastsCommandInput, ListForecastsCommandOutput } from "./commands/ListForecastsCommand";
import {
  ListMonitorEvaluationsCommandInput,
  ListMonitorEvaluationsCommandOutput,
} from "./commands/ListMonitorEvaluationsCommand";
import { ListMonitorsCommandInput, ListMonitorsCommandOutput } from "./commands/ListMonitorsCommand";
import {
  ListPredictorBacktestExportJobsCommandInput,
  ListPredictorBacktestExportJobsCommandOutput,
} from "./commands/ListPredictorBacktestExportJobsCommand";
import { ListPredictorsCommandInput, ListPredictorsCommandOutput } from "./commands/ListPredictorsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWhatIfAnalysesCommandInput, ListWhatIfAnalysesCommandOutput } from "./commands/ListWhatIfAnalysesCommand";
import {
  ListWhatIfForecastExportsCommandInput,
  ListWhatIfForecastExportsCommandOutput,
} from "./commands/ListWhatIfForecastExportsCommand";
import {
  ListWhatIfForecastsCommandInput,
  ListWhatIfForecastsCommandOutput,
} from "./commands/ListWhatIfForecastsCommand";
import { ResumeResourceCommandInput, ResumeResourceCommandOutput } from "./commands/ResumeResourceCommand";
import { StopResourceCommandInput, StopResourceCommandOutput } from "./commands/StopResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDatasetGroupCommandInput, UpdateDatasetGroupCommandOutput } from "./commands/UpdateDatasetGroupCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateAutoPredictorCommandInput
  | CreateDatasetCommandInput
  | CreateDatasetGroupCommandInput
  | CreateDatasetImportJobCommandInput
  | CreateExplainabilityCommandInput
  | CreateExplainabilityExportCommandInput
  | CreateForecastCommandInput
  | CreateForecastExportJobCommandInput
  | CreateMonitorCommandInput
  | CreatePredictorBacktestExportJobCommandInput
  | CreatePredictorCommandInput
  | CreateWhatIfAnalysisCommandInput
  | CreateWhatIfForecastCommandInput
  | CreateWhatIfForecastExportCommandInput
  | DeleteDatasetCommandInput
  | DeleteDatasetGroupCommandInput
  | DeleteDatasetImportJobCommandInput
  | DeleteExplainabilityCommandInput
  | DeleteExplainabilityExportCommandInput
  | DeleteForecastCommandInput
  | DeleteForecastExportJobCommandInput
  | DeleteMonitorCommandInput
  | DeletePredictorBacktestExportJobCommandInput
  | DeletePredictorCommandInput
  | DeleteResourceTreeCommandInput
  | DeleteWhatIfAnalysisCommandInput
  | DeleteWhatIfForecastCommandInput
  | DeleteWhatIfForecastExportCommandInput
  | DescribeAutoPredictorCommandInput
  | DescribeDatasetCommandInput
  | DescribeDatasetGroupCommandInput
  | DescribeDatasetImportJobCommandInput
  | DescribeExplainabilityCommandInput
  | DescribeExplainabilityExportCommandInput
  | DescribeForecastCommandInput
  | DescribeForecastExportJobCommandInput
  | DescribeMonitorCommandInput
  | DescribePredictorBacktestExportJobCommandInput
  | DescribePredictorCommandInput
  | DescribeWhatIfAnalysisCommandInput
  | DescribeWhatIfForecastCommandInput
  | DescribeWhatIfForecastExportCommandInput
  | GetAccuracyMetricsCommandInput
  | ListDatasetGroupsCommandInput
  | ListDatasetImportJobsCommandInput
  | ListDatasetsCommandInput
  | ListExplainabilitiesCommandInput
  | ListExplainabilityExportsCommandInput
  | ListForecastExportJobsCommandInput
  | ListForecastsCommandInput
  | ListMonitorEvaluationsCommandInput
  | ListMonitorsCommandInput
  | ListPredictorBacktestExportJobsCommandInput
  | ListPredictorsCommandInput
  | ListTagsForResourceCommandInput
  | ListWhatIfAnalysesCommandInput
  | ListWhatIfForecastExportsCommandInput
  | ListWhatIfForecastsCommandInput
  | ResumeResourceCommandInput
  | StopResourceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDatasetGroupCommandInput;

export type ServiceOutputTypes =
  | CreateAutoPredictorCommandOutput
  | CreateDatasetCommandOutput
  | CreateDatasetGroupCommandOutput
  | CreateDatasetImportJobCommandOutput
  | CreateExplainabilityCommandOutput
  | CreateExplainabilityExportCommandOutput
  | CreateForecastCommandOutput
  | CreateForecastExportJobCommandOutput
  | CreateMonitorCommandOutput
  | CreatePredictorBacktestExportJobCommandOutput
  | CreatePredictorCommandOutput
  | CreateWhatIfAnalysisCommandOutput
  | CreateWhatIfForecastCommandOutput
  | CreateWhatIfForecastExportCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteDatasetGroupCommandOutput
  | DeleteDatasetImportJobCommandOutput
  | DeleteExplainabilityCommandOutput
  | DeleteExplainabilityExportCommandOutput
  | DeleteForecastCommandOutput
  | DeleteForecastExportJobCommandOutput
  | DeleteMonitorCommandOutput
  | DeletePredictorBacktestExportJobCommandOutput
  | DeletePredictorCommandOutput
  | DeleteResourceTreeCommandOutput
  | DeleteWhatIfAnalysisCommandOutput
  | DeleteWhatIfForecastCommandOutput
  | DeleteWhatIfForecastExportCommandOutput
  | DescribeAutoPredictorCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeDatasetGroupCommandOutput
  | DescribeDatasetImportJobCommandOutput
  | DescribeExplainabilityCommandOutput
  | DescribeExplainabilityExportCommandOutput
  | DescribeForecastCommandOutput
  | DescribeForecastExportJobCommandOutput
  | DescribeMonitorCommandOutput
  | DescribePredictorBacktestExportJobCommandOutput
  | DescribePredictorCommandOutput
  | DescribeWhatIfAnalysisCommandOutput
  | DescribeWhatIfForecastCommandOutput
  | DescribeWhatIfForecastExportCommandOutput
  | GetAccuracyMetricsCommandOutput
  | ListDatasetGroupsCommandOutput
  | ListDatasetImportJobsCommandOutput
  | ListDatasetsCommandOutput
  | ListExplainabilitiesCommandOutput
  | ListExplainabilityExportsCommandOutput
  | ListForecastExportJobsCommandOutput
  | ListForecastsCommandOutput
  | ListMonitorEvaluationsCommandOutput
  | ListMonitorsCommandOutput
  | ListPredictorBacktestExportJobsCommandOutput
  | ListPredictorsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWhatIfAnalysesCommandOutput
  | ListWhatIfForecastExportsCommandOutput
  | ListWhatIfForecastsCommandOutput
  | ResumeResourceCommandOutput
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

type ForecastClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of ForecastClient class constructor that set the region, credentials and other options.
 */
export interface ForecastClientConfig extends ForecastClientConfigType {}

type ForecastClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
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
