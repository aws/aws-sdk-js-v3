// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultPersonalizeHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateBatchInferenceJobCommandInput,
  CreateBatchInferenceJobCommandOutput,
} from "./commands/CreateBatchInferenceJobCommand";
import type {
  CreateBatchSegmentJobCommandInput,
  CreateBatchSegmentJobCommandOutput,
} from "./commands/CreateBatchSegmentJobCommand";
import type { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "./commands/CreateCampaignCommand";
import type {
  CreateDataDeletionJobCommandInput,
  CreateDataDeletionJobCommandOutput,
} from "./commands/CreateDataDeletionJobCommand";
import type { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import type {
  CreateDatasetExportJobCommandInput,
  CreateDatasetExportJobCommandOutput,
} from "./commands/CreateDatasetExportJobCommand";
import type {
  CreateDatasetGroupCommandInput,
  CreateDatasetGroupCommandOutput,
} from "./commands/CreateDatasetGroupCommand";
import type {
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput,
} from "./commands/CreateDatasetImportJobCommand";
import type {
  CreateEventTrackerCommandInput,
  CreateEventTrackerCommandOutput,
} from "./commands/CreateEventTrackerCommand";
import type { CreateFilterCommandInput, CreateFilterCommandOutput } from "./commands/CreateFilterCommand";
import type {
  CreateMetricAttributionCommandInput,
  CreateMetricAttributionCommandOutput,
} from "./commands/CreateMetricAttributionCommand";
import type {
  CreateRecommenderCommandInput,
  CreateRecommenderCommandOutput,
} from "./commands/CreateRecommenderCommand";
import type { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "./commands/CreateSchemaCommand";
import type { CreateSolutionCommandInput, CreateSolutionCommandOutput } from "./commands/CreateSolutionCommand";
import type {
  CreateSolutionVersionCommandInput,
  CreateSolutionVersionCommandOutput,
} from "./commands/CreateSolutionVersionCommand";
import type { DeleteCampaignCommandInput, DeleteCampaignCommandOutput } from "./commands/DeleteCampaignCommand";
import type { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import type {
  DeleteDatasetGroupCommandInput,
  DeleteDatasetGroupCommandOutput,
} from "./commands/DeleteDatasetGroupCommand";
import type {
  DeleteEventTrackerCommandInput,
  DeleteEventTrackerCommandOutput,
} from "./commands/DeleteEventTrackerCommand";
import type { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "./commands/DeleteFilterCommand";
import type {
  DeleteMetricAttributionCommandInput,
  DeleteMetricAttributionCommandOutput,
} from "./commands/DeleteMetricAttributionCommand";
import type {
  DeleteRecommenderCommandInput,
  DeleteRecommenderCommandOutput,
} from "./commands/DeleteRecommenderCommand";
import type { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "./commands/DeleteSchemaCommand";
import type { DeleteSolutionCommandInput, DeleteSolutionCommandOutput } from "./commands/DeleteSolutionCommand";
import type {
  DescribeAlgorithmCommandInput,
  DescribeAlgorithmCommandOutput,
} from "./commands/DescribeAlgorithmCommand";
import type {
  DescribeBatchInferenceJobCommandInput,
  DescribeBatchInferenceJobCommandOutput,
} from "./commands/DescribeBatchInferenceJobCommand";
import type {
  DescribeBatchSegmentJobCommandInput,
  DescribeBatchSegmentJobCommandOutput,
} from "./commands/DescribeBatchSegmentJobCommand";
import type { DescribeCampaignCommandInput, DescribeCampaignCommandOutput } from "./commands/DescribeCampaignCommand";
import type {
  DescribeDataDeletionJobCommandInput,
  DescribeDataDeletionJobCommandOutput,
} from "./commands/DescribeDataDeletionJobCommand";
import type { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import type {
  DescribeDatasetExportJobCommandInput,
  DescribeDatasetExportJobCommandOutput,
} from "./commands/DescribeDatasetExportJobCommand";
import type {
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput,
} from "./commands/DescribeDatasetGroupCommand";
import type {
  DescribeDatasetImportJobCommandInput,
  DescribeDatasetImportJobCommandOutput,
} from "./commands/DescribeDatasetImportJobCommand";
import type {
  DescribeEventTrackerCommandInput,
  DescribeEventTrackerCommandOutput,
} from "./commands/DescribeEventTrackerCommand";
import type {
  DescribeFeatureTransformationCommandInput,
  DescribeFeatureTransformationCommandOutput,
} from "./commands/DescribeFeatureTransformationCommand";
import type { DescribeFilterCommandInput, DescribeFilterCommandOutput } from "./commands/DescribeFilterCommand";
import type {
  DescribeMetricAttributionCommandInput,
  DescribeMetricAttributionCommandOutput,
} from "./commands/DescribeMetricAttributionCommand";
import type { DescribeRecipeCommandInput, DescribeRecipeCommandOutput } from "./commands/DescribeRecipeCommand";
import type {
  DescribeRecommenderCommandInput,
  DescribeRecommenderCommandOutput,
} from "./commands/DescribeRecommenderCommand";
import type { DescribeSchemaCommandInput, DescribeSchemaCommandOutput } from "./commands/DescribeSchemaCommand";
import type { DescribeSolutionCommandInput, DescribeSolutionCommandOutput } from "./commands/DescribeSolutionCommand";
import type {
  DescribeSolutionVersionCommandInput,
  DescribeSolutionVersionCommandOutput,
} from "./commands/DescribeSolutionVersionCommand";
import type {
  GetSolutionMetricsCommandInput,
  GetSolutionMetricsCommandOutput,
} from "./commands/GetSolutionMetricsCommand";
import type {
  ListBatchInferenceJobsCommandInput,
  ListBatchInferenceJobsCommandOutput,
} from "./commands/ListBatchInferenceJobsCommand";
import type {
  ListBatchSegmentJobsCommandInput,
  ListBatchSegmentJobsCommandOutput,
} from "./commands/ListBatchSegmentJobsCommand";
import type { ListCampaignsCommandInput, ListCampaignsCommandOutput } from "./commands/ListCampaignsCommand";
import type {
  ListDataDeletionJobsCommandInput,
  ListDataDeletionJobsCommandOutput,
} from "./commands/ListDataDeletionJobsCommand";
import type {
  ListDatasetExportJobsCommandInput,
  ListDatasetExportJobsCommandOutput,
} from "./commands/ListDatasetExportJobsCommand";
import type {
  ListDatasetGroupsCommandInput,
  ListDatasetGroupsCommandOutput,
} from "./commands/ListDatasetGroupsCommand";
import type {
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "./commands/ListDatasetImportJobsCommand";
import type { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import type {
  ListEventTrackersCommandInput,
  ListEventTrackersCommandOutput,
} from "./commands/ListEventTrackersCommand";
import type { ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand";
import type {
  ListMetricAttributionMetricsCommandInput,
  ListMetricAttributionMetricsCommandOutput,
} from "./commands/ListMetricAttributionMetricsCommand";
import type {
  ListMetricAttributionsCommandInput,
  ListMetricAttributionsCommandOutput,
} from "./commands/ListMetricAttributionsCommand";
import type { ListRecipesCommandInput, ListRecipesCommandOutput } from "./commands/ListRecipesCommand";
import type { ListRecommendersCommandInput, ListRecommendersCommandOutput } from "./commands/ListRecommendersCommand";
import type { ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import type { ListSolutionsCommandInput, ListSolutionsCommandOutput } from "./commands/ListSolutionsCommand";
import type {
  ListSolutionVersionsCommandInput,
  ListSolutionVersionsCommandOutput,
} from "./commands/ListSolutionVersionsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { StartRecommenderCommandInput, StartRecommenderCommandOutput } from "./commands/StartRecommenderCommand";
import type { StopRecommenderCommandInput, StopRecommenderCommandOutput } from "./commands/StopRecommenderCommand";
import type {
  StopSolutionVersionCreationCommandInput,
  StopSolutionVersionCreationCommandOutput,
} from "./commands/StopSolutionVersionCreationCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateCampaignCommandInput, UpdateCampaignCommandOutput } from "./commands/UpdateCampaignCommand";
import type { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "./commands/UpdateDatasetCommand";
import type {
  UpdateMetricAttributionCommandInput,
  UpdateMetricAttributionCommandOutput,
} from "./commands/UpdateMetricAttributionCommand";
import type {
  UpdateRecommenderCommandInput,
  UpdateRecommenderCommandOutput,
} from "./commands/UpdateRecommenderCommand";
import type { UpdateSolutionCommandInput, UpdateSolutionCommandOutput } from "./commands/UpdateSolutionCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CreateBatchInferenceJobCommandInput
  | CreateBatchSegmentJobCommandInput
  | CreateCampaignCommandInput
  | CreateDataDeletionJobCommandInput
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
  | DescribeDataDeletionJobCommandInput
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
  | ListDataDeletionJobsCommandInput
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
  | UpdateDatasetCommandInput
  | UpdateMetricAttributionCommandInput
  | UpdateRecommenderCommandInput
  | UpdateSolutionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateBatchInferenceJobCommandOutput
  | CreateBatchSegmentJobCommandOutput
  | CreateCampaignCommandOutput
  | CreateDataDeletionJobCommandOutput
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
  | DescribeDataDeletionJobCommandOutput
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
  | ListDataDeletionJobsCommandOutput
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
  | UpdateDatasetCommandOutput
  | UpdateMetricAttributionCommandOutput
  | UpdateRecommenderCommandOutput
  | UpdateSolutionCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type PersonalizeClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of PersonalizeClient class constructor that set the region, credentials and other options.
 */
export interface PersonalizeClientConfig extends PersonalizeClientConfigType {}

/**
 * @public
 */
export type PersonalizeClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of PersonalizeClient class. This is resolved and normalized from the {@link PersonalizeClientConfig | constructor configuration interface}.
 */
export interface PersonalizeClientResolvedConfig extends PersonalizeClientResolvedConfigType {}

/**
 * <p>Amazon Personalize is a machine learning service that makes it easy to add individualized
 *       recommendations to customers.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<PersonalizeClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultPersonalizeHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: PersonalizeClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
