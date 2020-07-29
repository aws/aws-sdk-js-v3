import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import {
  CreateBatchPredictionCommandInput,
  CreateBatchPredictionCommandOutput,
} from "./commands/CreateBatchPredictionCommand";
import {
  CreateDataSourceFromRDSCommandInput,
  CreateDataSourceFromRDSCommandOutput,
} from "./commands/CreateDataSourceFromRDSCommand";
import {
  CreateDataSourceFromRedshiftCommandInput,
  CreateDataSourceFromRedshiftCommandOutput,
} from "./commands/CreateDataSourceFromRedshiftCommand";
import {
  CreateDataSourceFromS3CommandInput,
  CreateDataSourceFromS3CommandOutput,
} from "./commands/CreateDataSourceFromS3Command";
import { CreateEvaluationCommandInput, CreateEvaluationCommandOutput } from "./commands/CreateEvaluationCommand";
import { CreateMLModelCommandInput, CreateMLModelCommandOutput } from "./commands/CreateMLModelCommand";
import {
  CreateRealtimeEndpointCommandInput,
  CreateRealtimeEndpointCommandOutput,
} from "./commands/CreateRealtimeEndpointCommand";
import {
  DeleteBatchPredictionCommandInput,
  DeleteBatchPredictionCommandOutput,
} from "./commands/DeleteBatchPredictionCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import { DeleteEvaluationCommandInput, DeleteEvaluationCommandOutput } from "./commands/DeleteEvaluationCommand";
import { DeleteMLModelCommandInput, DeleteMLModelCommandOutput } from "./commands/DeleteMLModelCommand";
import {
  DeleteRealtimeEndpointCommandInput,
  DeleteRealtimeEndpointCommandOutput,
} from "./commands/DeleteRealtimeEndpointCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DescribeBatchPredictionsCommandInput,
  DescribeBatchPredictionsCommandOutput,
} from "./commands/DescribeBatchPredictionsCommand";
import {
  DescribeDataSourcesCommandInput,
  DescribeDataSourcesCommandOutput,
} from "./commands/DescribeDataSourcesCommand";
import {
  DescribeEvaluationsCommandInput,
  DescribeEvaluationsCommandOutput,
} from "./commands/DescribeEvaluationsCommand";
import { DescribeMLModelsCommandInput, DescribeMLModelsCommandOutput } from "./commands/DescribeMLModelsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import { GetBatchPredictionCommandInput, GetBatchPredictionCommandOutput } from "./commands/GetBatchPredictionCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand";
import { GetEvaluationCommandInput, GetEvaluationCommandOutput } from "./commands/GetEvaluationCommand";
import { GetMLModelCommandInput, GetMLModelCommandOutput } from "./commands/GetMLModelCommand";
import { PredictCommandInput, PredictCommandOutput } from "./commands/PredictCommand";
import {
  UpdateBatchPredictionCommandInput,
  UpdateBatchPredictionCommandOutput,
} from "./commands/UpdateBatchPredictionCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import { UpdateEvaluationCommandInput, UpdateEvaluationCommandOutput } from "./commands/UpdateEvaluationCommand";
import { UpdateMLModelCommandInput, UpdateMLModelCommandOutput } from "./commands/UpdateMLModelCommand";
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
  | AddTagsCommandInput
  | CreateBatchPredictionCommandInput
  | CreateDataSourceFromRDSCommandInput
  | CreateDataSourceFromRedshiftCommandInput
  | CreateDataSourceFromS3CommandInput
  | CreateEvaluationCommandInput
  | CreateMLModelCommandInput
  | CreateRealtimeEndpointCommandInput
  | DeleteBatchPredictionCommandInput
  | DeleteDataSourceCommandInput
  | DeleteEvaluationCommandInput
  | DeleteMLModelCommandInput
  | DeleteRealtimeEndpointCommandInput
  | DeleteTagsCommandInput
  | DescribeBatchPredictionsCommandInput
  | DescribeDataSourcesCommandInput
  | DescribeEvaluationsCommandInput
  | DescribeMLModelsCommandInput
  | DescribeTagsCommandInput
  | GetBatchPredictionCommandInput
  | GetDataSourceCommandInput
  | GetEvaluationCommandInput
  | GetMLModelCommandInput
  | PredictCommandInput
  | UpdateBatchPredictionCommandInput
  | UpdateDataSourceCommandInput
  | UpdateEvaluationCommandInput
  | UpdateMLModelCommandInput;

export type ServiceOutputTypes =
  | AddTagsCommandOutput
  | CreateBatchPredictionCommandOutput
  | CreateDataSourceFromRDSCommandOutput
  | CreateDataSourceFromRedshiftCommandOutput
  | CreateDataSourceFromS3CommandOutput
  | CreateEvaluationCommandOutput
  | CreateMLModelCommandOutput
  | CreateRealtimeEndpointCommandOutput
  | DeleteBatchPredictionCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteEvaluationCommandOutput
  | DeleteMLModelCommandOutput
  | DeleteRealtimeEndpointCommandOutput
  | DeleteTagsCommandOutput
  | DescribeBatchPredictionsCommandOutput
  | DescribeDataSourcesCommandOutput
  | DescribeEvaluationsCommandOutput
  | DescribeMLModelsCommandOutput
  | DescribeTagsCommandOutput
  | GetBatchPredictionCommandOutput
  | GetDataSourceCommandOutput
  | GetEvaluationCommandOutput
  | GetMLModelCommandOutput
  | PredictCommandOutput
  | UpdateBatchPredictionCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateEvaluationCommandOutput
  | UpdateMLModelCommandOutput;

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
}

export type MachineLearningClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type MachineLearningClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>Definition of the public APIs
 *             exposed by Amazon Machine Learning</p>
 */
export class MachineLearningClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MachineLearningClientResolvedConfig
> {
  readonly config: MachineLearningClientResolvedConfig;

  constructor(configuration: MachineLearningClientConfig) {
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
    super(_config_6);
    this.config = _config_6;
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
