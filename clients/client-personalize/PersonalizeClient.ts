import {
  CreateBatchInferenceJobCommandInput,
  CreateBatchInferenceJobCommandOutput
} from "./commands/CreateBatchInferenceJobCommand";
import {
  CreateCampaignCommandInput,
  CreateCampaignCommandOutput
} from "./commands/CreateCampaignCommand";
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
  CreateEventTrackerCommandInput,
  CreateEventTrackerCommandOutput
} from "./commands/CreateEventTrackerCommand";
import {
  CreateSchemaCommandInput,
  CreateSchemaCommandOutput
} from "./commands/CreateSchemaCommand";
import {
  CreateSolutionCommandInput,
  CreateSolutionCommandOutput
} from "./commands/CreateSolutionCommand";
import {
  CreateSolutionVersionCommandInput,
  CreateSolutionVersionCommandOutput
} from "./commands/CreateSolutionVersionCommand";
import {
  DeleteCampaignCommandInput,
  DeleteCampaignCommandOutput
} from "./commands/DeleteCampaignCommand";
import {
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput
} from "./commands/DeleteDatasetCommand";
import {
  DeleteDatasetGroupCommandInput,
  DeleteDatasetGroupCommandOutput
} from "./commands/DeleteDatasetGroupCommand";
import {
  DeleteEventTrackerCommandInput,
  DeleteEventTrackerCommandOutput
} from "./commands/DeleteEventTrackerCommand";
import {
  DeleteSchemaCommandInput,
  DeleteSchemaCommandOutput
} from "./commands/DeleteSchemaCommand";
import {
  DeleteSolutionCommandInput,
  DeleteSolutionCommandOutput
} from "./commands/DeleteSolutionCommand";
import {
  DescribeAlgorithmCommandInput,
  DescribeAlgorithmCommandOutput
} from "./commands/DescribeAlgorithmCommand";
import {
  DescribeBatchInferenceJobCommandInput,
  DescribeBatchInferenceJobCommandOutput
} from "./commands/DescribeBatchInferenceJobCommand";
import {
  DescribeCampaignCommandInput,
  DescribeCampaignCommandOutput
} from "./commands/DescribeCampaignCommand";
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
  DescribeEventTrackerCommandInput,
  DescribeEventTrackerCommandOutput
} from "./commands/DescribeEventTrackerCommand";
import {
  DescribeFeatureTransformationCommandInput,
  DescribeFeatureTransformationCommandOutput
} from "./commands/DescribeFeatureTransformationCommand";
import {
  DescribeRecipeCommandInput,
  DescribeRecipeCommandOutput
} from "./commands/DescribeRecipeCommand";
import {
  DescribeSchemaCommandInput,
  DescribeSchemaCommandOutput
} from "./commands/DescribeSchemaCommand";
import {
  DescribeSolutionCommandInput,
  DescribeSolutionCommandOutput
} from "./commands/DescribeSolutionCommand";
import {
  DescribeSolutionVersionCommandInput,
  DescribeSolutionVersionCommandOutput
} from "./commands/DescribeSolutionVersionCommand";
import {
  GetSolutionMetricsCommandInput,
  GetSolutionMetricsCommandOutput
} from "./commands/GetSolutionMetricsCommand";
import {
  ListBatchInferenceJobsCommandInput,
  ListBatchInferenceJobsCommandOutput
} from "./commands/ListBatchInferenceJobsCommand";
import {
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput
} from "./commands/ListCampaignsCommand";
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
  ListEventTrackersCommandInput,
  ListEventTrackersCommandOutput
} from "./commands/ListEventTrackersCommand";
import {
  ListRecipesCommandInput,
  ListRecipesCommandOutput
} from "./commands/ListRecipesCommand";
import {
  ListSchemasCommandInput,
  ListSchemasCommandOutput
} from "./commands/ListSchemasCommand";
import {
  ListSolutionVersionsCommandInput,
  ListSolutionVersionsCommandOutput
} from "./commands/ListSolutionVersionsCommand";
import {
  ListSolutionsCommandInput,
  ListSolutionsCommandOutput
} from "./commands/ListSolutionsCommand";
import {
  UpdateCampaignCommandInput,
  UpdateCampaignCommandOutput
} from "./commands/UpdateCampaignCommand";
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
  | CreateBatchInferenceJobCommandInput
  | CreateCampaignCommandInput
  | CreateDatasetCommandInput
  | CreateDatasetGroupCommandInput
  | CreateDatasetImportJobCommandInput
  | CreateEventTrackerCommandInput
  | CreateSchemaCommandInput
  | CreateSolutionCommandInput
  | CreateSolutionVersionCommandInput
  | DeleteCampaignCommandInput
  | DeleteDatasetCommandInput
  | DeleteDatasetGroupCommandInput
  | DeleteEventTrackerCommandInput
  | DeleteSchemaCommandInput
  | DeleteSolutionCommandInput
  | DescribeAlgorithmCommandInput
  | DescribeBatchInferenceJobCommandInput
  | DescribeCampaignCommandInput
  | DescribeDatasetCommandInput
  | DescribeDatasetGroupCommandInput
  | DescribeDatasetImportJobCommandInput
  | DescribeEventTrackerCommandInput
  | DescribeFeatureTransformationCommandInput
  | DescribeRecipeCommandInput
  | DescribeSchemaCommandInput
  | DescribeSolutionCommandInput
  | DescribeSolutionVersionCommandInput
  | GetSolutionMetricsCommandInput
  | ListBatchInferenceJobsCommandInput
  | ListCampaignsCommandInput
  | ListDatasetGroupsCommandInput
  | ListDatasetImportJobsCommandInput
  | ListDatasetsCommandInput
  | ListEventTrackersCommandInput
  | ListRecipesCommandInput
  | ListSchemasCommandInput
  | ListSolutionVersionsCommandInput
  | ListSolutionsCommandInput
  | UpdateCampaignCommandInput;

export type ServiceOutputTypes =
  | CreateBatchInferenceJobCommandOutput
  | CreateCampaignCommandOutput
  | CreateDatasetCommandOutput
  | CreateDatasetGroupCommandOutput
  | CreateDatasetImportJobCommandOutput
  | CreateEventTrackerCommandOutput
  | CreateSchemaCommandOutput
  | CreateSolutionCommandOutput
  | CreateSolutionVersionCommandOutput
  | DeleteCampaignCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteDatasetGroupCommandOutput
  | DeleteEventTrackerCommandOutput
  | DeleteSchemaCommandOutput
  | DeleteSolutionCommandOutput
  | DescribeAlgorithmCommandOutput
  | DescribeBatchInferenceJobCommandOutput
  | DescribeCampaignCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeDatasetGroupCommandOutput
  | DescribeDatasetImportJobCommandOutput
  | DescribeEventTrackerCommandOutput
  | DescribeFeatureTransformationCommandOutput
  | DescribeRecipeCommandOutput
  | DescribeSchemaCommandOutput
  | DescribeSolutionCommandOutput
  | DescribeSolutionVersionCommandOutput
  | GetSolutionMetricsCommandOutput
  | ListBatchInferenceJobsCommandOutput
  | ListCampaignsCommandOutput
  | ListDatasetGroupsCommandOutput
  | ListDatasetImportJobsCommandOutput
  | ListDatasetsCommandOutput
  | ListEventTrackersCommandOutput
  | ListRecipesCommandOutput
  | ListSchemasCommandOutput
  | ListSolutionVersionsCommandOutput
  | ListSolutionsCommandOutput
  | UpdateCampaignCommandOutput;

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

export type PersonalizeClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type PersonalizeClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>Amazon Personalize is a machine learning service that makes it easy to add individualized
 *       recommendations to customers.</p>
 */
export class PersonalizeClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  PersonalizeClientResolvedConfig
> {
  readonly config: PersonalizeClientResolvedConfig;

  constructor(configuration: PersonalizeClientConfig) {
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
