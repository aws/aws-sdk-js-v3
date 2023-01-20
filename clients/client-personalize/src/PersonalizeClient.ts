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
  CreateBatchInferenceJobCommandInput,
  CreateBatchInferenceJobCommandOutput,
} from "./commands/CreateBatchInferenceJobCommand";
import {
  CreateBatchSegmentJobCommandInput,
  CreateBatchSegmentJobCommandOutput,
} from "./commands/CreateBatchSegmentJobCommand";
import { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "./commands/CreateCampaignCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import {
  CreateDatasetExportJobCommandInput,
  CreateDatasetExportJobCommandOutput,
} from "./commands/CreateDatasetExportJobCommand";
import { CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput } from "./commands/CreateDatasetGroupCommand";
import {
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput,
} from "./commands/CreateDatasetImportJobCommand";
import { CreateEventTrackerCommandInput, CreateEventTrackerCommandOutput } from "./commands/CreateEventTrackerCommand";
import { CreateFilterCommandInput, CreateFilterCommandOutput } from "./commands/CreateFilterCommand";
import {
  CreateMetricAttributionCommandInput,
  CreateMetricAttributionCommandOutput,
} from "./commands/CreateMetricAttributionCommand";
import { CreateRecommenderCommandInput, CreateRecommenderCommandOutput } from "./commands/CreateRecommenderCommand";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "./commands/CreateSchemaCommand";
import { CreateSolutionCommandInput, CreateSolutionCommandOutput } from "./commands/CreateSolutionCommand";
import {
  CreateSolutionVersionCommandInput,
  CreateSolutionVersionCommandOutput,
} from "./commands/CreateSolutionVersionCommand";
import { DeleteCampaignCommandInput, DeleteCampaignCommandOutput } from "./commands/DeleteCampaignCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import { DeleteDatasetGroupCommandInput, DeleteDatasetGroupCommandOutput } from "./commands/DeleteDatasetGroupCommand";
import { DeleteEventTrackerCommandInput, DeleteEventTrackerCommandOutput } from "./commands/DeleteEventTrackerCommand";
import { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "./commands/DeleteFilterCommand";
import {
  DeleteMetricAttributionCommandInput,
  DeleteMetricAttributionCommandOutput,
} from "./commands/DeleteMetricAttributionCommand";
import { DeleteRecommenderCommandInput, DeleteRecommenderCommandOutput } from "./commands/DeleteRecommenderCommand";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "./commands/DeleteSchemaCommand";
import { DeleteSolutionCommandInput, DeleteSolutionCommandOutput } from "./commands/DeleteSolutionCommand";
import { DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput } from "./commands/DescribeAlgorithmCommand";
import {
  DescribeBatchInferenceJobCommandInput,
  DescribeBatchInferenceJobCommandOutput,
} from "./commands/DescribeBatchInferenceJobCommand";
import {
  DescribeBatchSegmentJobCommandInput,
  DescribeBatchSegmentJobCommandOutput,
} from "./commands/DescribeBatchSegmentJobCommand";
import { DescribeCampaignCommandInput, DescribeCampaignCommandOutput } from "./commands/DescribeCampaignCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import {
  DescribeDatasetExportJobCommandInput,
  DescribeDatasetExportJobCommandOutput,
} from "./commands/DescribeDatasetExportJobCommand";
import {
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput,
} from "./commands/DescribeDatasetGroupCommand";
import {
  DescribeDatasetImportJobCommandInput,
  DescribeDatasetImportJobCommandOutput,
} from "./commands/DescribeDatasetImportJobCommand";
import {
  DescribeEventTrackerCommandInput,
  DescribeEventTrackerCommandOutput,
} from "./commands/DescribeEventTrackerCommand";
import {
  DescribeFeatureTransformationCommandInput,
  DescribeFeatureTransformationCommandOutput,
} from "./commands/DescribeFeatureTransformationCommand";
import { DescribeFilterCommandInput, DescribeFilterCommandOutput } from "./commands/DescribeFilterCommand";
import {
  DescribeMetricAttributionCommandInput,
  DescribeMetricAttributionCommandOutput,
} from "./commands/DescribeMetricAttributionCommand";
import { DescribeRecipeCommandInput, DescribeRecipeCommandOutput } from "./commands/DescribeRecipeCommand";
import {
  DescribeRecommenderCommandInput,
  DescribeRecommenderCommandOutput,
} from "./commands/DescribeRecommenderCommand";
import { DescribeSchemaCommandInput, DescribeSchemaCommandOutput } from "./commands/DescribeSchemaCommand";
import { DescribeSolutionCommandInput, DescribeSolutionCommandOutput } from "./commands/DescribeSolutionCommand";
import {
  DescribeSolutionVersionCommandInput,
  DescribeSolutionVersionCommandOutput,
} from "./commands/DescribeSolutionVersionCommand";
import { GetSolutionMetricsCommandInput, GetSolutionMetricsCommandOutput } from "./commands/GetSolutionMetricsCommand";
import {
  ListBatchInferenceJobsCommandInput,
  ListBatchInferenceJobsCommandOutput,
} from "./commands/ListBatchInferenceJobsCommand";
import {
  ListBatchSegmentJobsCommandInput,
  ListBatchSegmentJobsCommandOutput,
} from "./commands/ListBatchSegmentJobsCommand";
import { ListCampaignsCommandInput, ListCampaignsCommandOutput } from "./commands/ListCampaignsCommand";
import {
  ListDatasetExportJobsCommandInput,
  ListDatasetExportJobsCommandOutput,
} from "./commands/ListDatasetExportJobsCommand";
import { ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput } from "./commands/ListDatasetGroupsCommand";
import {
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "./commands/ListDatasetImportJobsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import { ListEventTrackersCommandInput, ListEventTrackersCommandOutput } from "./commands/ListEventTrackersCommand";
import { ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand";
import {
  ListMetricAttributionMetricsCommandInput,
  ListMetricAttributionMetricsCommandOutput,
} from "./commands/ListMetricAttributionMetricsCommand";
import {
  ListMetricAttributionsCommandInput,
  ListMetricAttributionsCommandOutput,
} from "./commands/ListMetricAttributionsCommand";
import { ListRecipesCommandInput, ListRecipesCommandOutput } from "./commands/ListRecipesCommand";
import { ListRecommendersCommandInput, ListRecommendersCommandOutput } from "./commands/ListRecommendersCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import { ListSolutionsCommandInput, ListSolutionsCommandOutput } from "./commands/ListSolutionsCommand";
import {
  ListSolutionVersionsCommandInput,
  ListSolutionVersionsCommandOutput,
} from "./commands/ListSolutionVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartRecommenderCommandInput, StartRecommenderCommandOutput } from "./commands/StartRecommenderCommand";
import { StopRecommenderCommandInput, StopRecommenderCommandOutput } from "./commands/StopRecommenderCommand";
import {
  StopSolutionVersionCreationCommandInput,
  StopSolutionVersionCreationCommandOutput,
} from "./commands/StopSolutionVersionCreationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateCampaignCommandInput, UpdateCampaignCommandOutput } from "./commands/UpdateCampaignCommand";
import {
  UpdateMetricAttributionCommandInput,
  UpdateMetricAttributionCommandOutput,
} from "./commands/UpdateMetricAttributionCommand";
import { UpdateRecommenderCommandInput, UpdateRecommenderCommandOutput } from "./commands/UpdateRecommenderCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateBatchInferenceJobCommandInput
  | CreateBatchSegmentJobCommandInput
  | CreateCampaignCommandInput
  | CreateDatasetCommandInput
  | CreateDatasetExportJobCommandInput
  | CreateDatasetGroupCommandInput
  | CreateDatasetImportJobCommandInput
  | CreateEventTrackerCommandInput
  | CreateFilterCommandInput
  | CreateMetricAttributionCommandInput
  | CreateRecommenderCommandInput
  | CreateSchemaCommandInput
  | CreateSolutionCommandInput
  | CreateSolutionVersionCommandInput
  | DeleteCampaignCommandInput
  | DeleteDatasetCommandInput
  | DeleteDatasetGroupCommandInput
  | DeleteEventTrackerCommandInput
  | DeleteFilterCommandInput
  | DeleteMetricAttributionCommandInput
  | DeleteRecommenderCommandInput
  | DeleteSchemaCommandInput
  | DeleteSolutionCommandInput
  | DescribeAlgorithmCommandInput
  | DescribeBatchInferenceJobCommandInput
  | DescribeBatchSegmentJobCommandInput
  | DescribeCampaignCommandInput
  | DescribeDatasetCommandInput
  | DescribeDatasetExportJobCommandInput
  | DescribeDatasetGroupCommandInput
  | DescribeDatasetImportJobCommandInput
  | DescribeEventTrackerCommandInput
  | DescribeFeatureTransformationCommandInput
  | DescribeFilterCommandInput
  | DescribeMetricAttributionCommandInput
  | DescribeRecipeCommandInput
  | DescribeRecommenderCommandInput
  | DescribeSchemaCommandInput
  | DescribeSolutionCommandInput
  | DescribeSolutionVersionCommandInput
  | GetSolutionMetricsCommandInput
  | ListBatchInferenceJobsCommandInput
  | ListBatchSegmentJobsCommandInput
  | ListCampaignsCommandInput
  | ListDatasetExportJobsCommandInput
  | ListDatasetGroupsCommandInput
  | ListDatasetImportJobsCommandInput
  | ListDatasetsCommandInput
  | ListEventTrackersCommandInput
  | ListFiltersCommandInput
  | ListMetricAttributionMetricsCommandInput
  | ListMetricAttributionsCommandInput
  | ListRecipesCommandInput
  | ListRecommendersCommandInput
  | ListSchemasCommandInput
  | ListSolutionVersionsCommandInput
  | ListSolutionsCommandInput
  | ListTagsForResourceCommandInput
  | StartRecommenderCommandInput
  | StopRecommenderCommandInput
  | StopSolutionVersionCreationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCampaignCommandInput
  | UpdateMetricAttributionCommandInput
  | UpdateRecommenderCommandInput;

export type ServiceOutputTypes =
  | CreateBatchInferenceJobCommandOutput
  | CreateBatchSegmentJobCommandOutput
  | CreateCampaignCommandOutput
  | CreateDatasetCommandOutput
  | CreateDatasetExportJobCommandOutput
  | CreateDatasetGroupCommandOutput
  | CreateDatasetImportJobCommandOutput
  | CreateEventTrackerCommandOutput
  | CreateFilterCommandOutput
  | CreateMetricAttributionCommandOutput
  | CreateRecommenderCommandOutput
  | CreateSchemaCommandOutput
  | CreateSolutionCommandOutput
  | CreateSolutionVersionCommandOutput
  | DeleteCampaignCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteDatasetGroupCommandOutput
  | DeleteEventTrackerCommandOutput
  | DeleteFilterCommandOutput
  | DeleteMetricAttributionCommandOutput
  | DeleteRecommenderCommandOutput
  | DeleteSchemaCommandOutput
  | DeleteSolutionCommandOutput
  | DescribeAlgorithmCommandOutput
  | DescribeBatchInferenceJobCommandOutput
  | DescribeBatchSegmentJobCommandOutput
  | DescribeCampaignCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeDatasetExportJobCommandOutput
  | DescribeDatasetGroupCommandOutput
  | DescribeDatasetImportJobCommandOutput
  | DescribeEventTrackerCommandOutput
  | DescribeFeatureTransformationCommandOutput
  | DescribeFilterCommandOutput
  | DescribeMetricAttributionCommandOutput
  | DescribeRecipeCommandOutput
  | DescribeRecommenderCommandOutput
  | DescribeSchemaCommandOutput
  | DescribeSolutionCommandOutput
  | DescribeSolutionVersionCommandOutput
  | GetSolutionMetricsCommandOutput
  | ListBatchInferenceJobsCommandOutput
  | ListBatchSegmentJobsCommandOutput
  | ListCampaignsCommandOutput
  | ListDatasetExportJobsCommandOutput
  | ListDatasetGroupsCommandOutput
  | ListDatasetImportJobsCommandOutput
  | ListDatasetsCommandOutput
  | ListEventTrackersCommandOutput
  | ListFiltersCommandOutput
  | ListMetricAttributionMetricsCommandOutput
  | ListMetricAttributionsCommandOutput
  | ListRecipesCommandOutput
  | ListRecommendersCommandOutput
  | ListSchemasCommandOutput
  | ListSolutionVersionsCommandOutput
  | ListSolutionsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartRecommenderCommandOutput
  | StopRecommenderCommandOutput
  | StopSolutionVersionCreationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCampaignCommandOutput
  | UpdateMetricAttributionCommandOutput
  | UpdateRecommenderCommandOutput;

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

type PersonalizeClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of PersonalizeClient class constructor that set the region, credentials and other options.
 */
export interface PersonalizeClientConfig extends PersonalizeClientConfigType {}

type PersonalizeClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of PersonalizeClient class. This is resolved and normalized from the {@link PersonalizeClientConfig | constructor configuration interface}.
 */
export interface PersonalizeClientResolvedConfig extends PersonalizeClientResolvedConfigType {}

/**
 * <p>Amazon Personalize is a machine learning service that makes it easy to add individualized
 *       recommendations to customers.</p>
 */
export class PersonalizeClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  PersonalizeClientResolvedConfig
> {
  /**
   * The resolved configuration of PersonalizeClient class. This is resolved and normalized from the {@link PersonalizeClientConfig | constructor configuration interface}.
   */
  readonly config: PersonalizeClientResolvedConfig;

  constructor(configuration: PersonalizeClientConfig) {
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
