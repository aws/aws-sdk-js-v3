// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateBatchInferenceJobCommandInput,
  CreateBatchInferenceJobCommandOutput,
} from "../commands/CreateBatchInferenceJobCommand";
import {
  CreateBatchSegmentJobCommandInput,
  CreateBatchSegmentJobCommandOutput,
} from "../commands/CreateBatchSegmentJobCommand";
import { CreateCampaignCommandInput, CreateCampaignCommandOutput } from "../commands/CreateCampaignCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "../commands/CreateDatasetCommand";
import {
  CreateDatasetExportJobCommandInput,
  CreateDatasetExportJobCommandOutput,
} from "../commands/CreateDatasetExportJobCommand";
import { CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput } from "../commands/CreateDatasetGroupCommand";
import {
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput,
} from "../commands/CreateDatasetImportJobCommand";
import { CreateEventTrackerCommandInput, CreateEventTrackerCommandOutput } from "../commands/CreateEventTrackerCommand";
import { CreateFilterCommandInput, CreateFilterCommandOutput } from "../commands/CreateFilterCommand";
import {
  CreateMetricAttributionCommandInput,
  CreateMetricAttributionCommandOutput,
} from "../commands/CreateMetricAttributionCommand";
import { CreateRecommenderCommandInput, CreateRecommenderCommandOutput } from "../commands/CreateRecommenderCommand";
import { CreateSchemaCommandInput, CreateSchemaCommandOutput } from "../commands/CreateSchemaCommand";
import { CreateSolutionCommandInput, CreateSolutionCommandOutput } from "../commands/CreateSolutionCommand";
import {
  CreateSolutionVersionCommandInput,
  CreateSolutionVersionCommandOutput,
} from "../commands/CreateSolutionVersionCommand";
import { DeleteCampaignCommandInput, DeleteCampaignCommandOutput } from "../commands/DeleteCampaignCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import { DeleteDatasetGroupCommandInput, DeleteDatasetGroupCommandOutput } from "../commands/DeleteDatasetGroupCommand";
import { DeleteEventTrackerCommandInput, DeleteEventTrackerCommandOutput } from "../commands/DeleteEventTrackerCommand";
import { DeleteFilterCommandInput, DeleteFilterCommandOutput } from "../commands/DeleteFilterCommand";
import {
  DeleteMetricAttributionCommandInput,
  DeleteMetricAttributionCommandOutput,
} from "../commands/DeleteMetricAttributionCommand";
import { DeleteRecommenderCommandInput, DeleteRecommenderCommandOutput } from "../commands/DeleteRecommenderCommand";
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "../commands/DeleteSchemaCommand";
import { DeleteSolutionCommandInput, DeleteSolutionCommandOutput } from "../commands/DeleteSolutionCommand";
import { DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput } from "../commands/DescribeAlgorithmCommand";
import {
  DescribeBatchInferenceJobCommandInput,
  DescribeBatchInferenceJobCommandOutput,
} from "../commands/DescribeBatchInferenceJobCommand";
import {
  DescribeBatchSegmentJobCommandInput,
  DescribeBatchSegmentJobCommandOutput,
} from "../commands/DescribeBatchSegmentJobCommand";
import { DescribeCampaignCommandInput, DescribeCampaignCommandOutput } from "../commands/DescribeCampaignCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
import {
  DescribeDatasetExportJobCommandInput,
  DescribeDatasetExportJobCommandOutput,
} from "../commands/DescribeDatasetExportJobCommand";
import {
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput,
} from "../commands/DescribeDatasetGroupCommand";
import {
  DescribeDatasetImportJobCommandInput,
  DescribeDatasetImportJobCommandOutput,
} from "../commands/DescribeDatasetImportJobCommand";
import {
  DescribeEventTrackerCommandInput,
  DescribeEventTrackerCommandOutput,
} from "../commands/DescribeEventTrackerCommand";
import {
  DescribeFeatureTransformationCommandInput,
  DescribeFeatureTransformationCommandOutput,
} from "../commands/DescribeFeatureTransformationCommand";
import { DescribeFilterCommandInput, DescribeFilterCommandOutput } from "../commands/DescribeFilterCommand";
import {
  DescribeMetricAttributionCommandInput,
  DescribeMetricAttributionCommandOutput,
} from "../commands/DescribeMetricAttributionCommand";
import { DescribeRecipeCommandInput, DescribeRecipeCommandOutput } from "../commands/DescribeRecipeCommand";
import {
  DescribeRecommenderCommandInput,
  DescribeRecommenderCommandOutput,
} from "../commands/DescribeRecommenderCommand";
import { DescribeSchemaCommandInput, DescribeSchemaCommandOutput } from "../commands/DescribeSchemaCommand";
import { DescribeSolutionCommandInput, DescribeSolutionCommandOutput } from "../commands/DescribeSolutionCommand";
import {
  DescribeSolutionVersionCommandInput,
  DescribeSolutionVersionCommandOutput,
} from "../commands/DescribeSolutionVersionCommand";
import { GetSolutionMetricsCommandInput, GetSolutionMetricsCommandOutput } from "../commands/GetSolutionMetricsCommand";
import {
  ListBatchInferenceJobsCommandInput,
  ListBatchInferenceJobsCommandOutput,
} from "../commands/ListBatchInferenceJobsCommand";
import {
  ListBatchSegmentJobsCommandInput,
  ListBatchSegmentJobsCommandOutput,
} from "../commands/ListBatchSegmentJobsCommand";
import { ListCampaignsCommandInput, ListCampaignsCommandOutput } from "../commands/ListCampaignsCommand";
import {
  ListDatasetExportJobsCommandInput,
  ListDatasetExportJobsCommandOutput,
} from "../commands/ListDatasetExportJobsCommand";
import { ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput } from "../commands/ListDatasetGroupsCommand";
import {
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "../commands/ListDatasetImportJobsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import { ListEventTrackersCommandInput, ListEventTrackersCommandOutput } from "../commands/ListEventTrackersCommand";
import { ListFiltersCommandInput, ListFiltersCommandOutput } from "../commands/ListFiltersCommand";
import {
  ListMetricAttributionMetricsCommandInput,
  ListMetricAttributionMetricsCommandOutput,
} from "../commands/ListMetricAttributionMetricsCommand";
import {
  ListMetricAttributionsCommandInput,
  ListMetricAttributionsCommandOutput,
} from "../commands/ListMetricAttributionsCommand";
import { ListRecipesCommandInput, ListRecipesCommandOutput } from "../commands/ListRecipesCommand";
import { ListRecommendersCommandInput, ListRecommendersCommandOutput } from "../commands/ListRecommendersCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import { ListSolutionsCommandInput, ListSolutionsCommandOutput } from "../commands/ListSolutionsCommand";
import {
  ListSolutionVersionsCommandInput,
  ListSolutionVersionsCommandOutput,
} from "../commands/ListSolutionVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartRecommenderCommandInput, StartRecommenderCommandOutput } from "../commands/StartRecommenderCommand";
import { StopRecommenderCommandInput, StopRecommenderCommandOutput } from "../commands/StopRecommenderCommand";
import {
  StopSolutionVersionCreationCommandInput,
  StopSolutionVersionCreationCommandOutput,
} from "../commands/StopSolutionVersionCreationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateCampaignCommandInput, UpdateCampaignCommandOutput } from "../commands/UpdateCampaignCommand";
import {
  UpdateMetricAttributionCommandInput,
  UpdateMetricAttributionCommandOutput,
} from "../commands/UpdateMetricAttributionCommand";
import { UpdateRecommenderCommandInput, UpdateRecommenderCommandOutput } from "../commands/UpdateRecommenderCommand";
import {
  Algorithm,
  AlgorithmImage,
  AutoMLConfig,
  AutoMLResult,
  BatchInferenceJob,
  BatchInferenceJobConfig,
  BatchInferenceJobInput,
  BatchInferenceJobOutput,
  BatchInferenceJobSummary,
  BatchSegmentJob,
  BatchSegmentJobInput,
  BatchSegmentJobOutput,
  BatchSegmentJobSummary,
  Campaign,
  CampaignConfig,
  CampaignSummary,
  CampaignUpdateSummary,
  CategoricalHyperParameterRange,
  ContinuousHyperParameterRange,
  CreateBatchInferenceJobRequest,
  CreateBatchInferenceJobResponse,
  CreateBatchSegmentJobRequest,
  CreateBatchSegmentJobResponse,
  CreateCampaignRequest,
  CreateCampaignResponse,
  CreateDatasetExportJobRequest,
  CreateDatasetExportJobResponse,
  CreateDatasetGroupRequest,
  CreateDatasetGroupResponse,
  CreateDatasetImportJobRequest,
  CreateDatasetImportJobResponse,
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateEventTrackerRequest,
  CreateEventTrackerResponse,
  CreateFilterRequest,
  CreateFilterResponse,
  CreateMetricAttributionRequest,
  CreateMetricAttributionResponse,
  CreateRecommenderRequest,
  CreateRecommenderResponse,
  CreateSchemaRequest,
  CreateSchemaResponse,
  CreateSolutionRequest,
  CreateSolutionResponse,
  CreateSolutionVersionRequest,
  CreateSolutionVersionResponse,
  Dataset,
  DatasetExportJob,
  DatasetExportJobOutput,
  DatasetExportJobSummary,
  DatasetGroup,
  DatasetGroupSummary,
  DatasetImportJob,
  DatasetImportJobSummary,
  DatasetSchema,
  DatasetSchemaSummary,
  DatasetSummary,
  DataSource,
  DefaultCategoricalHyperParameterRange,
  DefaultContinuousHyperParameterRange,
  DefaultHyperParameterRanges,
  DefaultIntegerHyperParameterRange,
  DeleteCampaignRequest,
  DeleteDatasetGroupRequest,
  DeleteDatasetRequest,
  DeleteEventTrackerRequest,
  DeleteFilterRequest,
  DeleteMetricAttributionRequest,
  DeleteRecommenderRequest,
  DeleteSchemaRequest,
  DeleteSolutionRequest,
  DescribeAlgorithmRequest,
  DescribeAlgorithmResponse,
  DescribeBatchInferenceJobRequest,
  DescribeBatchInferenceJobResponse,
  DescribeBatchSegmentJobRequest,
  DescribeBatchSegmentJobResponse,
  DescribeCampaignRequest,
  DescribeCampaignResponse,
  DescribeDatasetExportJobRequest,
  DescribeDatasetExportJobResponse,
  DescribeDatasetGroupRequest,
  DescribeDatasetGroupResponse,
  DescribeDatasetImportJobRequest,
  DescribeDatasetImportJobResponse,
  DescribeDatasetRequest,
  DescribeDatasetResponse,
  DescribeEventTrackerRequest,
  DescribeEventTrackerResponse,
  DescribeFeatureTransformationRequest,
  DescribeFeatureTransformationResponse,
  DescribeFilterRequest,
  DescribeFilterResponse,
  DescribeMetricAttributionRequest,
  DescribeMetricAttributionResponse,
  DescribeRecipeRequest,
  DescribeRecipeResponse,
  DescribeRecommenderRequest,
  DescribeRecommenderResponse,
  DescribeSchemaRequest,
  DescribeSchemaResponse,
  DescribeSolutionRequest,
  DescribeSolutionResponse,
  DescribeSolutionVersionRequest,
  DescribeSolutionVersionResponse,
  EventTracker,
  EventTrackerSummary,
  FeatureTransformation,
  Filter,
  FilterSummary,
  GetSolutionMetricsRequest,
  GetSolutionMetricsResponse,
  HPOConfig,
  HPOObjective,
  HPOResourceConfig,
  HyperParameterRanges,
  IntegerHyperParameterRange,
  InvalidInputException,
  InvalidNextTokenException,
  LimitExceededException,
  ListBatchInferenceJobsRequest,
  ListBatchInferenceJobsResponse,
  ListBatchSegmentJobsRequest,
  ListBatchSegmentJobsResponse,
  ListCampaignsRequest,
  ListCampaignsResponse,
  ListDatasetExportJobsRequest,
  ListDatasetExportJobsResponse,
  ListDatasetGroupsRequest,
  ListDatasetGroupsResponse,
  ListDatasetImportJobsRequest,
  ListDatasetImportJobsResponse,
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListEventTrackersRequest,
  ListEventTrackersResponse,
  ListFiltersRequest,
  ListFiltersResponse,
  ListMetricAttributionMetricsRequest,
  ListMetricAttributionMetricsResponse,
  ListMetricAttributionsRequest,
  ListMetricAttributionsResponse,
  ListRecipesRequest,
  ListRecipesResponse,
  ListRecommendersRequest,
  ListRecommendersResponse,
  ListSchemasRequest,
  ListSchemasResponse,
  ListSolutionsRequest,
  ListSolutionsResponse,
  ListSolutionVersionsRequest,
  ListSolutionVersionsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  MetricAttribute,
  MetricAttribution,
  MetricAttributionOutput,
  MetricAttributionSummary,
  OptimizationObjective,
  Recipe,
  RecipeSummary,
  Recommender,
  RecommenderConfig,
  RecommenderSummary,
  RecommenderUpdateSummary,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  S3DataConfig,
  Solution,
  SolutionConfig,
  SolutionSummary,
  SolutionVersion,
  SolutionVersionSummary,
  StartRecommenderRequest,
  StartRecommenderResponse,
  StopRecommenderRequest,
  StopRecommenderResponse,
  StopSolutionVersionCreationRequest,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TooManyTagKeysException,
  TooManyTagsException,
  TunedHPOParams,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateCampaignRequest,
  UpdateCampaignResponse,
  UpdateMetricAttributionRequest,
  UpdateMetricAttributionResponse,
  UpdateRecommenderRequest,
  UpdateRecommenderResponse,
} from "../models/models_0";
import { PersonalizeServiceException as __BaseException } from "../models/PersonalizeServiceException";

/**
 * serializeAws_json1_1CreateBatchInferenceJobCommand
 */
export const se_CreateBatchInferenceJobCommand = async (
  input: CreateBatchInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBatchInferenceJob");
  let body: any;
  body = JSON.stringify(se_CreateBatchInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBatchSegmentJobCommand
 */
export const se_CreateBatchSegmentJobCommand = async (
  input: CreateBatchSegmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBatchSegmentJob");
  let body: any;
  body = JSON.stringify(se_CreateBatchSegmentJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCampaignCommand
 */
export const se_CreateCampaignCommand = async (
  input: CreateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCampaign");
  let body: any;
  body = JSON.stringify(se_CreateCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDatasetCommand
 */
export const se_CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataset");
  let body: any;
  body = JSON.stringify(se_CreateDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDatasetExportJobCommand
 */
export const se_CreateDatasetExportJobCommand = async (
  input: CreateDatasetExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDatasetExportJob");
  let body: any;
  body = JSON.stringify(se_CreateDatasetExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDatasetGroupCommand
 */
export const se_CreateDatasetGroupCommand = async (
  input: CreateDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDatasetGroup");
  let body: any;
  body = JSON.stringify(se_CreateDatasetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDatasetImportJobCommand
 */
export const se_CreateDatasetImportJobCommand = async (
  input: CreateDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDatasetImportJob");
  let body: any;
  body = JSON.stringify(se_CreateDatasetImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEventTrackerCommand
 */
export const se_CreateEventTrackerCommand = async (
  input: CreateEventTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEventTracker");
  let body: any;
  body = JSON.stringify(se_CreateEventTrackerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFilterCommand
 */
export const se_CreateFilterCommand = async (
  input: CreateFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFilter");
  let body: any;
  body = JSON.stringify(se_CreateFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMetricAttributionCommand
 */
export const se_CreateMetricAttributionCommand = async (
  input: CreateMetricAttributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateMetricAttribution");
  let body: any;
  body = JSON.stringify(se_CreateMetricAttributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRecommenderCommand
 */
export const se_CreateRecommenderCommand = async (
  input: CreateRecommenderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRecommender");
  let body: any;
  body = JSON.stringify(se_CreateRecommenderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSchemaCommand
 */
export const se_CreateSchemaCommand = async (
  input: CreateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSchema");
  let body: any;
  body = JSON.stringify(se_CreateSchemaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSolutionCommand
 */
export const se_CreateSolutionCommand = async (
  input: CreateSolutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSolution");
  let body: any;
  body = JSON.stringify(se_CreateSolutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSolutionVersionCommand
 */
export const se_CreateSolutionVersionCommand = async (
  input: CreateSolutionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSolutionVersion");
  let body: any;
  body = JSON.stringify(se_CreateSolutionVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCampaignCommand
 */
export const se_DeleteCampaignCommand = async (
  input: DeleteCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCampaign");
  let body: any;
  body = JSON.stringify(se_DeleteCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDatasetCommand
 */
export const se_DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDataset");
  let body: any;
  body = JSON.stringify(se_DeleteDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDatasetGroupCommand
 */
export const se_DeleteDatasetGroupCommand = async (
  input: DeleteDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDatasetGroup");
  let body: any;
  body = JSON.stringify(se_DeleteDatasetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEventTrackerCommand
 */
export const se_DeleteEventTrackerCommand = async (
  input: DeleteEventTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEventTracker");
  let body: any;
  body = JSON.stringify(se_DeleteEventTrackerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFilterCommand
 */
export const se_DeleteFilterCommand = async (
  input: DeleteFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFilter");
  let body: any;
  body = JSON.stringify(se_DeleteFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMetricAttributionCommand
 */
export const se_DeleteMetricAttributionCommand = async (
  input: DeleteMetricAttributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMetricAttribution");
  let body: any;
  body = JSON.stringify(se_DeleteMetricAttributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRecommenderCommand
 */
export const se_DeleteRecommenderCommand = async (
  input: DeleteRecommenderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRecommender");
  let body: any;
  body = JSON.stringify(se_DeleteRecommenderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSchemaCommand
 */
export const se_DeleteSchemaCommand = async (
  input: DeleteSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSchema");
  let body: any;
  body = JSON.stringify(se_DeleteSchemaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSolutionCommand
 */
export const se_DeleteSolutionCommand = async (
  input: DeleteSolutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSolution");
  let body: any;
  body = JSON.stringify(se_DeleteSolutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAlgorithmCommand
 */
export const se_DescribeAlgorithmCommand = async (
  input: DescribeAlgorithmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAlgorithm");
  let body: any;
  body = JSON.stringify(se_DescribeAlgorithmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBatchInferenceJobCommand
 */
export const se_DescribeBatchInferenceJobCommand = async (
  input: DescribeBatchInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBatchInferenceJob");
  let body: any;
  body = JSON.stringify(se_DescribeBatchInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBatchSegmentJobCommand
 */
export const se_DescribeBatchSegmentJobCommand = async (
  input: DescribeBatchSegmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBatchSegmentJob");
  let body: any;
  body = JSON.stringify(se_DescribeBatchSegmentJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCampaignCommand
 */
export const se_DescribeCampaignCommand = async (
  input: DescribeCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCampaign");
  let body: any;
  body = JSON.stringify(se_DescribeCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDatasetCommand
 */
export const se_DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDataset");
  let body: any;
  body = JSON.stringify(se_DescribeDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDatasetExportJobCommand
 */
export const se_DescribeDatasetExportJobCommand = async (
  input: DescribeDatasetExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDatasetExportJob");
  let body: any;
  body = JSON.stringify(se_DescribeDatasetExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDatasetGroupCommand
 */
export const se_DescribeDatasetGroupCommand = async (
  input: DescribeDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDatasetGroup");
  let body: any;
  body = JSON.stringify(se_DescribeDatasetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDatasetImportJobCommand
 */
export const se_DescribeDatasetImportJobCommand = async (
  input: DescribeDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDatasetImportJob");
  let body: any;
  body = JSON.stringify(se_DescribeDatasetImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEventTrackerCommand
 */
export const se_DescribeEventTrackerCommand = async (
  input: DescribeEventTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEventTracker");
  let body: any;
  body = JSON.stringify(se_DescribeEventTrackerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFeatureTransformationCommand
 */
export const se_DescribeFeatureTransformationCommand = async (
  input: DescribeFeatureTransformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFeatureTransformation");
  let body: any;
  body = JSON.stringify(se_DescribeFeatureTransformationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFilterCommand
 */
export const se_DescribeFilterCommand = async (
  input: DescribeFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFilter");
  let body: any;
  body = JSON.stringify(se_DescribeFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMetricAttributionCommand
 */
export const se_DescribeMetricAttributionCommand = async (
  input: DescribeMetricAttributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMetricAttribution");
  let body: any;
  body = JSON.stringify(se_DescribeMetricAttributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRecipeCommand
 */
export const se_DescribeRecipeCommand = async (
  input: DescribeRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRecipe");
  let body: any;
  body = JSON.stringify(se_DescribeRecipeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRecommenderCommand
 */
export const se_DescribeRecommenderCommand = async (
  input: DescribeRecommenderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRecommender");
  let body: any;
  body = JSON.stringify(se_DescribeRecommenderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSchemaCommand
 */
export const se_DescribeSchemaCommand = async (
  input: DescribeSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSchema");
  let body: any;
  body = JSON.stringify(se_DescribeSchemaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSolutionCommand
 */
export const se_DescribeSolutionCommand = async (
  input: DescribeSolutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSolution");
  let body: any;
  body = JSON.stringify(se_DescribeSolutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSolutionVersionCommand
 */
export const se_DescribeSolutionVersionCommand = async (
  input: DescribeSolutionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSolutionVersion");
  let body: any;
  body = JSON.stringify(se_DescribeSolutionVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSolutionMetricsCommand
 */
export const se_GetSolutionMetricsCommand = async (
  input: GetSolutionMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSolutionMetrics");
  let body: any;
  body = JSON.stringify(se_GetSolutionMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBatchInferenceJobsCommand
 */
export const se_ListBatchInferenceJobsCommand = async (
  input: ListBatchInferenceJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBatchInferenceJobs");
  let body: any;
  body = JSON.stringify(se_ListBatchInferenceJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListBatchSegmentJobsCommand
 */
export const se_ListBatchSegmentJobsCommand = async (
  input: ListBatchSegmentJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListBatchSegmentJobs");
  let body: any;
  body = JSON.stringify(se_ListBatchSegmentJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCampaignsCommand
 */
export const se_ListCampaignsCommand = async (
  input: ListCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCampaigns");
  let body: any;
  body = JSON.stringify(se_ListCampaignsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDatasetExportJobsCommand
 */
export const se_ListDatasetExportJobsCommand = async (
  input: ListDatasetExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDatasetExportJobs");
  let body: any;
  body = JSON.stringify(se_ListDatasetExportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDatasetGroupsCommand
 */
export const se_ListDatasetGroupsCommand = async (
  input: ListDatasetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDatasetGroups");
  let body: any;
  body = JSON.stringify(se_ListDatasetGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDatasetImportJobsCommand
 */
export const se_ListDatasetImportJobsCommand = async (
  input: ListDatasetImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDatasetImportJobs");
  let body: any;
  body = JSON.stringify(se_ListDatasetImportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDatasetsCommand
 */
export const se_ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDatasets");
  let body: any;
  body = JSON.stringify(se_ListDatasetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEventTrackersCommand
 */
export const se_ListEventTrackersCommand = async (
  input: ListEventTrackersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEventTrackers");
  let body: any;
  body = JSON.stringify(se_ListEventTrackersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFiltersCommand
 */
export const se_ListFiltersCommand = async (
  input: ListFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFilters");
  let body: any;
  body = JSON.stringify(se_ListFiltersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMetricAttributionMetricsCommand
 */
export const se_ListMetricAttributionMetricsCommand = async (
  input: ListMetricAttributionMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMetricAttributionMetrics");
  let body: any;
  body = JSON.stringify(se_ListMetricAttributionMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMetricAttributionsCommand
 */
export const se_ListMetricAttributionsCommand = async (
  input: ListMetricAttributionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMetricAttributions");
  let body: any;
  body = JSON.stringify(se_ListMetricAttributionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRecipesCommand
 */
export const se_ListRecipesCommand = async (
  input: ListRecipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRecipes");
  let body: any;
  body = JSON.stringify(se_ListRecipesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRecommendersCommand
 */
export const se_ListRecommendersCommand = async (
  input: ListRecommendersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRecommenders");
  let body: any;
  body = JSON.stringify(se_ListRecommendersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSchemasCommand
 */
export const se_ListSchemasCommand = async (
  input: ListSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSchemas");
  let body: any;
  body = JSON.stringify(se_ListSchemasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSolutionsCommand
 */
export const se_ListSolutionsCommand = async (
  input: ListSolutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSolutions");
  let body: any;
  body = JSON.stringify(se_ListSolutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSolutionVersionsCommand
 */
export const se_ListSolutionVersionsCommand = async (
  input: ListSolutionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSolutionVersions");
  let body: any;
  body = JSON.stringify(se_ListSolutionVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartRecommenderCommand
 */
export const se_StartRecommenderCommand = async (
  input: StartRecommenderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartRecommender");
  let body: any;
  body = JSON.stringify(se_StartRecommenderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopRecommenderCommand
 */
export const se_StopRecommenderCommand = async (
  input: StopRecommenderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopRecommender");
  let body: any;
  body = JSON.stringify(se_StopRecommenderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopSolutionVersionCreationCommand
 */
export const se_StopSolutionVersionCreationCommand = async (
  input: StopSolutionVersionCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopSolutionVersionCreation");
  let body: any;
  body = JSON.stringify(se_StopSolutionVersionCreationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCampaignCommand
 */
export const se_UpdateCampaignCommand = async (
  input: UpdateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCampaign");
  let body: any;
  body = JSON.stringify(se_UpdateCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMetricAttributionCommand
 */
export const se_UpdateMetricAttributionCommand = async (
  input: UpdateMetricAttributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMetricAttribution");
  let body: any;
  body = JSON.stringify(se_UpdateMetricAttributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateRecommenderCommand
 */
export const se_UpdateRecommenderCommand = async (
  input: UpdateRecommenderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateRecommender");
  let body: any;
  body = JSON.stringify(se_UpdateRecommenderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateBatchInferenceJobCommand
 */
export const de_CreateBatchInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBatchInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBatchInferenceJobResponse(data, context);
  const response: CreateBatchInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateBatchInferenceJobCommandError
 */
const de_CreateBatchInferenceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchInferenceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateBatchSegmentJobCommand
 */
export const de_CreateBatchSegmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchSegmentJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBatchSegmentJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBatchSegmentJobResponse(data, context);
  const response: CreateBatchSegmentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateBatchSegmentJobCommandError
 */
const de_CreateBatchSegmentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchSegmentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateCampaignCommand
 */
export const de_CreateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCampaignResponse(data, context);
  const response: CreateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateCampaignCommandError
 */
const de_CreateCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDatasetCommand
 */
export const de_CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDatasetResponse(data, context);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDatasetCommandError
 */
const de_CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDatasetExportJobCommand
 */
export const de_CreateDatasetExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDatasetExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDatasetExportJobResponse(data, context);
  const response: CreateDatasetExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDatasetExportJobCommandError
 */
const de_CreateDatasetExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDatasetGroupCommand
 */
export const de_CreateDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDatasetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDatasetGroupResponse(data, context);
  const response: CreateDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDatasetGroupCommandError
 */
const de_CreateDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDatasetImportJobCommand
 */
export const de_CreateDatasetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDatasetImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDatasetImportJobResponse(data, context);
  const response: CreateDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDatasetImportJobCommandError
 */
const de_CreateDatasetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateEventTrackerCommand
 */
export const de_CreateEventTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventTrackerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEventTrackerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEventTrackerResponse(data, context);
  const response: CreateEventTrackerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateEventTrackerCommandError
 */
const de_CreateEventTrackerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventTrackerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateFilterCommand
 */
export const de_CreateFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFilterResponse(data, context);
  const response: CreateFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateFilterCommandError
 */
const de_CreateFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateMetricAttributionCommand
 */
export const de_CreateMetricAttributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMetricAttributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateMetricAttributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateMetricAttributionResponse(data, context);
  const response: CreateMetricAttributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateMetricAttributionCommandError
 */
const de_CreateMetricAttributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMetricAttributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateRecommenderCommand
 */
export const de_CreateRecommenderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecommenderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRecommenderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRecommenderResponse(data, context);
  const response: CreateRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateRecommenderCommandError
 */
const de_CreateRecommenderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecommenderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateSchemaCommand
 */
export const de_CreateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSchemaResponse(data, context);
  const response: CreateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSchemaCommandError
 */
const de_CreateSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateSolutionCommand
 */
export const de_CreateSolutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSolutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSolutionResponse(data, context);
  const response: CreateSolutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSolutionCommandError
 */
const de_CreateSolutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateSolutionVersionCommand
 */
export const de_CreateSolutionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolutionVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSolutionVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSolutionVersionResponse(data, context);
  const response: CreateSolutionVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateSolutionVersionCommandError
 */
const de_CreateSolutionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolutionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteCampaignCommand
 */
export const de_DeleteCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCampaignCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteCampaignCommandError
 */
const de_DeleteCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDatasetCommand
 */
export const de_DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDatasetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDatasetCommandError
 */
const de_DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDatasetGroupCommand
 */
export const de_DeleteDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDatasetGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDatasetGroupCommandError
 */
const de_DeleteDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteEventTrackerCommand
 */
export const de_DeleteEventTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventTrackerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEventTrackerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEventTrackerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEventTrackerCommandError
 */
const de_DeleteEventTrackerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventTrackerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteFilterCommand
 */
export const de_DeleteFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteFilterCommandError
 */
const de_DeleteFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteMetricAttributionCommand
 */
export const de_DeleteMetricAttributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricAttributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMetricAttributionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMetricAttributionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteMetricAttributionCommandError
 */
const de_DeleteMetricAttributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricAttributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteRecommenderCommand
 */
export const de_DeleteRecommenderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommenderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRecommenderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRecommenderCommandError
 */
const de_DeleteRecommenderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommenderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteSchemaCommand
 */
export const de_DeleteSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSchemaCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSchemaCommandError
 */
const de_DeleteSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteSolutionCommand
 */
export const de_DeleteSolutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSolutionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSolutionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteSolutionCommandError
 */
const de_DeleteSolutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAlgorithmCommand
 */
export const de_DescribeAlgorithmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlgorithmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAlgorithmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAlgorithmResponse(data, context);
  const response: DescribeAlgorithmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAlgorithmCommandError
 */
const de_DescribeAlgorithmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlgorithmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeBatchInferenceJobCommand
 */
export const de_DescribeBatchInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBatchInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBatchInferenceJobResponse(data, context);
  const response: DescribeBatchInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeBatchInferenceJobCommandError
 */
const de_DescribeBatchInferenceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchInferenceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeBatchSegmentJobCommand
 */
export const de_DescribeBatchSegmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchSegmentJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBatchSegmentJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBatchSegmentJobResponse(data, context);
  const response: DescribeBatchSegmentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeBatchSegmentJobCommandError
 */
const de_DescribeBatchSegmentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchSegmentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeCampaignCommand
 */
export const de_DescribeCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCampaignResponse(data, context);
  const response: DescribeCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeCampaignCommandError
 */
const de_DescribeCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDatasetCommand
 */
export const de_DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDatasetResponse(data, context);
  const response: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDatasetCommandError
 */
const de_DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDatasetExportJobCommand
 */
export const de_DescribeDatasetExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDatasetExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDatasetExportJobResponse(data, context);
  const response: DescribeDatasetExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDatasetExportJobCommandError
 */
const de_DescribeDatasetExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDatasetGroupCommand
 */
export const de_DescribeDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDatasetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDatasetGroupResponse(data, context);
  const response: DescribeDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDatasetGroupCommandError
 */
const de_DescribeDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDatasetImportJobCommand
 */
export const de_DescribeDatasetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDatasetImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDatasetImportJobResponse(data, context);
  const response: DescribeDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDatasetImportJobCommandError
 */
const de_DescribeDatasetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEventTrackerCommand
 */
export const de_DescribeEventTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTrackerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEventTrackerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEventTrackerResponse(data, context);
  const response: DescribeEventTrackerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEventTrackerCommandError
 */
const de_DescribeEventTrackerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTrackerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFeatureTransformationCommand
 */
export const de_DescribeFeatureTransformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeatureTransformationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFeatureTransformationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFeatureTransformationResponse(data, context);
  const response: DescribeFeatureTransformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeFeatureTransformationCommandError
 */
const de_DescribeFeatureTransformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeatureTransformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFilterCommand
 */
export const de_DescribeFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFilterResponse(data, context);
  const response: DescribeFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeFilterCommandError
 */
const de_DescribeFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMetricAttributionCommand
 */
export const de_DescribeMetricAttributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricAttributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMetricAttributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMetricAttributionResponse(data, context);
  const response: DescribeMetricAttributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMetricAttributionCommandError
 */
const de_DescribeMetricAttributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricAttributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeRecipeCommand
 */
export const de_DescribeRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecipeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRecipeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRecipeResponse(data, context);
  const response: DescribeRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRecipeCommandError
 */
const de_DescribeRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeRecommenderCommand
 */
export const de_DescribeRecommenderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommenderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRecommenderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRecommenderResponse(data, context);
  const response: DescribeRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRecommenderCommandError
 */
const de_DescribeRecommenderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommenderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSchemaCommand
 */
export const de_DescribeSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSchemaResponse(data, context);
  const response: DescribeSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSchemaCommandError
 */
const de_DescribeSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSolutionCommand
 */
export const de_DescribeSolutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSolutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSolutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSolutionResponse(data, context);
  const response: DescribeSolutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSolutionCommandError
 */
const de_DescribeSolutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSolutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSolutionVersionCommand
 */
export const de_DescribeSolutionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSolutionVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSolutionVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSolutionVersionResponse(data, context);
  const response: DescribeSolutionVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeSolutionVersionCommandError
 */
const de_DescribeSolutionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSolutionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetSolutionMetricsCommand
 */
export const de_GetSolutionMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolutionMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSolutionMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSolutionMetricsResponse(data, context);
  const response: GetSolutionMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSolutionMetricsCommandError
 */
const de_GetSolutionMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolutionMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListBatchInferenceJobsCommand
 */
export const de_ListBatchInferenceJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchInferenceJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBatchInferenceJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBatchInferenceJobsResponse(data, context);
  const response: ListBatchInferenceJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListBatchInferenceJobsCommandError
 */
const de_ListBatchInferenceJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchInferenceJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListBatchSegmentJobsCommand
 */
export const de_ListBatchSegmentJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchSegmentJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListBatchSegmentJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListBatchSegmentJobsResponse(data, context);
  const response: ListBatchSegmentJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListBatchSegmentJobsCommandError
 */
const de_ListBatchSegmentJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchSegmentJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListCampaignsCommand
 */
export const de_ListCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCampaignsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCampaignsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCampaignsResponse(data, context);
  const response: ListCampaignsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListCampaignsCommandError
 */
const de_ListCampaignsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCampaignsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDatasetExportJobsCommand
 */
export const de_ListDatasetExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetExportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDatasetExportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDatasetExportJobsResponse(data, context);
  const response: ListDatasetExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDatasetExportJobsCommandError
 */
const de_ListDatasetExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDatasetGroupsCommand
 */
export const de_ListDatasetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDatasetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDatasetGroupsResponse(data, context);
  const response: ListDatasetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDatasetGroupsCommandError
 */
const de_ListDatasetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDatasetImportJobsCommand
 */
export const de_ListDatasetImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetImportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDatasetImportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDatasetImportJobsResponse(data, context);
  const response: ListDatasetImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDatasetImportJobsCommandError
 */
const de_ListDatasetImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDatasetsCommand
 */
export const de_ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDatasetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDatasetsResponse(data, context);
  const response: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDatasetsCommandError
 */
const de_ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListEventTrackersCommand
 */
export const de_ListEventTrackersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventTrackersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEventTrackersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEventTrackersResponse(data, context);
  const response: ListEventTrackersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListEventTrackersCommandError
 */
const de_ListEventTrackersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventTrackersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListFiltersCommand
 */
export const de_ListFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFiltersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFiltersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFiltersResponse(data, context);
  const response: ListFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListFiltersCommandError
 */
const de_ListFiltersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFiltersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListMetricAttributionMetricsCommand
 */
export const de_ListMetricAttributionMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricAttributionMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMetricAttributionMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMetricAttributionMetricsResponse(data, context);
  const response: ListMetricAttributionMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListMetricAttributionMetricsCommandError
 */
const de_ListMetricAttributionMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricAttributionMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListMetricAttributionsCommand
 */
export const de_ListMetricAttributionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricAttributionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMetricAttributionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMetricAttributionsResponse(data, context);
  const response: ListMetricAttributionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListMetricAttributionsCommandError
 */
const de_ListMetricAttributionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricAttributionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListRecipesCommand
 */
export const de_ListRecipesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecipesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRecipesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRecipesResponse(data, context);
  const response: ListRecipesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRecipesCommandError
 */
const de_ListRecipesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecipesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListRecommendersCommand
 */
export const de_ListRecommendersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRecommendersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRecommendersResponse(data, context);
  const response: ListRecommendersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListRecommendersCommandError
 */
const de_ListRecommendersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListSchemasCommand
 */
export const de_ListSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSchemasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSchemasResponse(data, context);
  const response: ListSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSchemasCommandError
 */
const de_ListSchemasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListSolutionsCommand
 */
export const de_ListSolutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSolutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSolutionsResponse(data, context);
  const response: ListSolutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSolutionsCommandError
 */
const de_ListSolutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListSolutionVersionsCommand
 */
export const de_ListSolutionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolutionVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSolutionVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSolutionVersionsResponse(data, context);
  const response: ListSolutionVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListSolutionVersionsCommandError
 */
const de_ListSolutionVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolutionVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartRecommenderCommand
 */
export const de_StartRecommenderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecommenderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartRecommenderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartRecommenderResponse(data, context);
  const response: StartRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartRecommenderCommandError
 */
const de_StartRecommenderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecommenderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopRecommenderCommand
 */
export const de_StopRecommenderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRecommenderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopRecommenderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopRecommenderResponse(data, context);
  const response: StopRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopRecommenderCommandError
 */
const de_StopRecommenderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRecommenderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopSolutionVersionCreationCommand
 */
export const de_StopSolutionVersionCreationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSolutionVersionCreationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopSolutionVersionCreationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopSolutionVersionCreationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopSolutionVersionCreationCommandError
 */
const de_StopSolutionVersionCreationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSolutionVersionCreationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagKeysException":
    case "com.amazonaws.personalize#TooManyTagKeysException":
      throw await de_TooManyTagKeysExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateCampaignCommand
 */
export const de_UpdateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCampaignResponse(data, context);
  const response: UpdateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateCampaignCommandError
 */
const de_UpdateCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateMetricAttributionCommand
 */
export const de_UpdateMetricAttributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMetricAttributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMetricAttributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateMetricAttributionResponse(data, context);
  const response: UpdateMetricAttributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateMetricAttributionCommandError
 */
const de_UpdateMetricAttributionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMetricAttributionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateRecommenderCommand
 */
export const de_UpdateRecommenderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecommenderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateRecommenderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateRecommenderResponse(data, context);
  const response: UpdateRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateRecommenderCommandError
 */
const de_UpdateRecommenderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecommenderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagKeysExceptionRes
 */
const de_TooManyTagKeysExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagKeysException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagKeysException(body, context);
  const exception = new TooManyTagKeysException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1ArnList
 */
const se_ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AutoMLConfig
 */
const se_AutoMLConfig = (input: AutoMLConfig, context: __SerdeContext): any => {
  return {
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.recipeList != null && { recipeList: se_ArnList(input.recipeList, context) }),
  };
};

/**
 * serializeAws_json1_1BatchInferenceJobConfig
 */
const se_BatchInferenceJobConfig = (input: BatchInferenceJobConfig, context: __SerdeContext): any => {
  return {
    ...(input.itemExplorationConfig != null && {
      itemExplorationConfig: se_HyperParameters(input.itemExplorationConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_1BatchInferenceJobInput
 */
const se_BatchInferenceJobInput = (input: BatchInferenceJobInput, context: __SerdeContext): any => {
  return {
    ...(input.s3DataSource != null && { s3DataSource: se_S3DataConfig(input.s3DataSource, context) }),
  };
};

/**
 * serializeAws_json1_1BatchInferenceJobOutput
 */
const se_BatchInferenceJobOutput = (input: BatchInferenceJobOutput, context: __SerdeContext): any => {
  return {
    ...(input.s3DataDestination != null && { s3DataDestination: se_S3DataConfig(input.s3DataDestination, context) }),
  };
};

/**
 * serializeAws_json1_1BatchSegmentJobInput
 */
const se_BatchSegmentJobInput = (input: BatchSegmentJobInput, context: __SerdeContext): any => {
  return {
    ...(input.s3DataSource != null && { s3DataSource: se_S3DataConfig(input.s3DataSource, context) }),
  };
};

/**
 * serializeAws_json1_1BatchSegmentJobOutput
 */
const se_BatchSegmentJobOutput = (input: BatchSegmentJobOutput, context: __SerdeContext): any => {
  return {
    ...(input.s3DataDestination != null && { s3DataDestination: se_S3DataConfig(input.s3DataDestination, context) }),
  };
};

/**
 * serializeAws_json1_1CampaignConfig
 */
const se_CampaignConfig = (input: CampaignConfig, context: __SerdeContext): any => {
  return {
    ...(input.itemExplorationConfig != null && {
      itemExplorationConfig: se_HyperParameters(input.itemExplorationConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_1CategoricalHyperParameterRange
 */
const se_CategoricalHyperParameterRange = (input: CategoricalHyperParameterRange, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_CategoricalValues(input.values, context) }),
  };
};

/**
 * serializeAws_json1_1CategoricalHyperParameterRanges
 */
const se_CategoricalHyperParameterRanges = (input: CategoricalHyperParameterRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CategoricalHyperParameterRange(entry, context);
    });
};

/**
 * serializeAws_json1_1CategoricalValues
 */
const se_CategoricalValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ContinuousHyperParameterRange
 */
const se_ContinuousHyperParameterRange = (input: ContinuousHyperParameterRange, context: __SerdeContext): any => {
  return {
    ...(input.maxValue != null && { maxValue: __serializeFloat(input.maxValue) }),
    ...(input.minValue != null && { minValue: __serializeFloat(input.minValue) }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1ContinuousHyperParameterRanges
 */
const se_ContinuousHyperParameterRanges = (input: ContinuousHyperParameterRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ContinuousHyperParameterRange(entry, context);
    });
};

/**
 * serializeAws_json1_1CreateBatchInferenceJobRequest
 */
const se_CreateBatchInferenceJobRequest = (input: CreateBatchInferenceJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.batchInferenceJobConfig != null && {
      batchInferenceJobConfig: se_BatchInferenceJobConfig(input.batchInferenceJobConfig, context),
    }),
    ...(input.filterArn != null && { filterArn: input.filterArn }),
    ...(input.jobInput != null && { jobInput: se_BatchInferenceJobInput(input.jobInput, context) }),
    ...(input.jobName != null && { jobName: input.jobName }),
    ...(input.jobOutput != null && { jobOutput: se_BatchInferenceJobOutput(input.jobOutput, context) }),
    ...(input.numResults != null && { numResults: input.numResults }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateBatchSegmentJobRequest
 */
const se_CreateBatchSegmentJobRequest = (input: CreateBatchSegmentJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.filterArn != null && { filterArn: input.filterArn }),
    ...(input.jobInput != null && { jobInput: se_BatchSegmentJobInput(input.jobInput, context) }),
    ...(input.jobName != null && { jobName: input.jobName }),
    ...(input.jobOutput != null && { jobOutput: se_BatchSegmentJobOutput(input.jobOutput, context) }),
    ...(input.numResults != null && { numResults: input.numResults }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateCampaignRequest
 */
const se_CreateCampaignRequest = (input: CreateCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.campaignConfig != null && { campaignConfig: se_CampaignConfig(input.campaignConfig, context) }),
    ...(input.minProvisionedTPS != null && { minProvisionedTPS: input.minProvisionedTPS }),
    ...(input.name != null && { name: input.name }),
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDatasetExportJobRequest
 */
const se_CreateDatasetExportJobRequest = (input: CreateDatasetExportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetArn != null && { datasetArn: input.datasetArn }),
    ...(input.ingestionMode != null && { ingestionMode: input.ingestionMode }),
    ...(input.jobName != null && { jobName: input.jobName }),
    ...(input.jobOutput != null && { jobOutput: se_DatasetExportJobOutput(input.jobOutput, context) }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDatasetGroupRequest
 */
const se_CreateDatasetGroupRequest = (input: CreateDatasetGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDatasetImportJobRequest
 */
const se_CreateDatasetImportJobRequest = (input: CreateDatasetImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.dataSource != null && { dataSource: se_DataSource(input.dataSource, context) }),
    ...(input.datasetArn != null && { datasetArn: input.datasetArn }),
    ...(input.importMode != null && { importMode: input.importMode }),
    ...(input.jobName != null && { jobName: input.jobName }),
    ...(input.publishAttributionMetricsToS3 != null && {
      publishAttributionMetricsToS3: input.publishAttributionMetricsToS3,
    }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDatasetRequest
 */
const se_CreateDatasetRequest = (input: CreateDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.datasetType != null && { datasetType: input.datasetType }),
    ...(input.name != null && { name: input.name }),
    ...(input.schemaArn != null && { schemaArn: input.schemaArn }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateEventTrackerRequest
 */
const se_CreateEventTrackerRequest = (input: CreateEventTrackerRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateFilterRequest
 */
const se_CreateFilterRequest = (input: CreateFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.filterExpression != null && { filterExpression: input.filterExpression }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateMetricAttributionRequest
 */
const se_CreateMetricAttributionRequest = (input: CreateMetricAttributionRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.metrics != null && { metrics: se_MetricAttributes(input.metrics, context) }),
    ...(input.metricsOutputConfig != null && {
      metricsOutputConfig: se_MetricAttributionOutput(input.metricsOutputConfig, context),
    }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1CreateRecommenderRequest
 */
const se_CreateRecommenderRequest = (input: CreateRecommenderRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.recipeArn != null && { recipeArn: input.recipeArn }),
    ...(input.recommenderConfig != null && {
      recommenderConfig: se_RecommenderConfig(input.recommenderConfig, context),
    }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateSchemaRequest
 */
const se_CreateSchemaRequest = (input: CreateSchemaRequest, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.name != null && { name: input.name }),
    ...(input.schema != null && { schema: input.schema }),
  };
};

/**
 * serializeAws_json1_1CreateSolutionRequest
 */
const se_CreateSolutionRequest = (input: CreateSolutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.eventType != null && { eventType: input.eventType }),
    ...(input.name != null && { name: input.name }),
    ...(input.performAutoML != null && { performAutoML: input.performAutoML }),
    ...(input.performHPO != null && { performHPO: input.performHPO }),
    ...(input.recipeArn != null && { recipeArn: input.recipeArn }),
    ...(input.solutionConfig != null && { solutionConfig: se_SolutionConfig(input.solutionConfig, context) }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateSolutionVersionRequest
 */
const se_CreateSolutionVersionRequest = (input: CreateSolutionVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.solutionArn != null && { solutionArn: input.solutionArn }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
    ...(input.trainingMode != null && { trainingMode: input.trainingMode }),
  };
};

/**
 * serializeAws_json1_1DatasetExportJobOutput
 */
const se_DatasetExportJobOutput = (input: DatasetExportJobOutput, context: __SerdeContext): any => {
  return {
    ...(input.s3DataDestination != null && { s3DataDestination: se_S3DataConfig(input.s3DataDestination, context) }),
  };
};

/**
 * serializeAws_json1_1DataSource
 */
const se_DataSource = (input: DataSource, context: __SerdeContext): any => {
  return {
    ...(input.dataLocation != null && { dataLocation: input.dataLocation }),
  };
};

/**
 * serializeAws_json1_1DeleteCampaignRequest
 */
const se_DeleteCampaignRequest = (input: DeleteCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.campaignArn != null && { campaignArn: input.campaignArn }),
  };
};

/**
 * serializeAws_json1_1DeleteDatasetGroupRequest
 */
const se_DeleteDatasetGroupRequest = (input: DeleteDatasetGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
  };
};

/**
 * serializeAws_json1_1DeleteDatasetRequest
 */
const se_DeleteDatasetRequest = (input: DeleteDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetArn != null && { datasetArn: input.datasetArn }),
  };
};

/**
 * serializeAws_json1_1DeleteEventTrackerRequest
 */
const se_DeleteEventTrackerRequest = (input: DeleteEventTrackerRequest, context: __SerdeContext): any => {
  return {
    ...(input.eventTrackerArn != null && { eventTrackerArn: input.eventTrackerArn }),
  };
};

/**
 * serializeAws_json1_1DeleteFilterRequest
 */
const se_DeleteFilterRequest = (input: DeleteFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.filterArn != null && { filterArn: input.filterArn }),
  };
};

/**
 * serializeAws_json1_1DeleteMetricAttributionRequest
 */
const se_DeleteMetricAttributionRequest = (input: DeleteMetricAttributionRequest, context: __SerdeContext): any => {
  return {
    ...(input.metricAttributionArn != null && { metricAttributionArn: input.metricAttributionArn }),
  };
};

/**
 * serializeAws_json1_1DeleteRecommenderRequest
 */
const se_DeleteRecommenderRequest = (input: DeleteRecommenderRequest, context: __SerdeContext): any => {
  return {
    ...(input.recommenderArn != null && { recommenderArn: input.recommenderArn }),
  };
};

/**
 * serializeAws_json1_1DeleteSchemaRequest
 */
const se_DeleteSchemaRequest = (input: DeleteSchemaRequest, context: __SerdeContext): any => {
  return {
    ...(input.schemaArn != null && { schemaArn: input.schemaArn }),
  };
};

/**
 * serializeAws_json1_1DeleteSolutionRequest
 */
const se_DeleteSolutionRequest = (input: DeleteSolutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.solutionArn != null && { solutionArn: input.solutionArn }),
  };
};

/**
 * serializeAws_json1_1DescribeAlgorithmRequest
 */
const se_DescribeAlgorithmRequest = (input: DescribeAlgorithmRequest, context: __SerdeContext): any => {
  return {
    ...(input.algorithmArn != null && { algorithmArn: input.algorithmArn }),
  };
};

/**
 * serializeAws_json1_1DescribeBatchInferenceJobRequest
 */
const se_DescribeBatchInferenceJobRequest = (input: DescribeBatchInferenceJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.batchInferenceJobArn != null && { batchInferenceJobArn: input.batchInferenceJobArn }),
  };
};

/**
 * serializeAws_json1_1DescribeBatchSegmentJobRequest
 */
const se_DescribeBatchSegmentJobRequest = (input: DescribeBatchSegmentJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.batchSegmentJobArn != null && { batchSegmentJobArn: input.batchSegmentJobArn }),
  };
};

/**
 * serializeAws_json1_1DescribeCampaignRequest
 */
const se_DescribeCampaignRequest = (input: DescribeCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.campaignArn != null && { campaignArn: input.campaignArn }),
  };
};

/**
 * serializeAws_json1_1DescribeDatasetExportJobRequest
 */
const se_DescribeDatasetExportJobRequest = (input: DescribeDatasetExportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetExportJobArn != null && { datasetExportJobArn: input.datasetExportJobArn }),
  };
};

/**
 * serializeAws_json1_1DescribeDatasetGroupRequest
 */
const se_DescribeDatasetGroupRequest = (input: DescribeDatasetGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
  };
};

/**
 * serializeAws_json1_1DescribeDatasetImportJobRequest
 */
const se_DescribeDatasetImportJobRequest = (input: DescribeDatasetImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetImportJobArn != null && { datasetImportJobArn: input.datasetImportJobArn }),
  };
};

/**
 * serializeAws_json1_1DescribeDatasetRequest
 */
const se_DescribeDatasetRequest = (input: DescribeDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetArn != null && { datasetArn: input.datasetArn }),
  };
};

/**
 * serializeAws_json1_1DescribeEventTrackerRequest
 */
const se_DescribeEventTrackerRequest = (input: DescribeEventTrackerRequest, context: __SerdeContext): any => {
  return {
    ...(input.eventTrackerArn != null && { eventTrackerArn: input.eventTrackerArn }),
  };
};

/**
 * serializeAws_json1_1DescribeFeatureTransformationRequest
 */
const se_DescribeFeatureTransformationRequest = (
  input: DescribeFeatureTransformationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.featureTransformationArn != null && { featureTransformationArn: input.featureTransformationArn }),
  };
};

/**
 * serializeAws_json1_1DescribeFilterRequest
 */
const se_DescribeFilterRequest = (input: DescribeFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.filterArn != null && { filterArn: input.filterArn }),
  };
};

/**
 * serializeAws_json1_1DescribeMetricAttributionRequest
 */
const se_DescribeMetricAttributionRequest = (input: DescribeMetricAttributionRequest, context: __SerdeContext): any => {
  return {
    ...(input.metricAttributionArn != null && { metricAttributionArn: input.metricAttributionArn }),
  };
};

/**
 * serializeAws_json1_1DescribeRecipeRequest
 */
const se_DescribeRecipeRequest = (input: DescribeRecipeRequest, context: __SerdeContext): any => {
  return {
    ...(input.recipeArn != null && { recipeArn: input.recipeArn }),
  };
};

/**
 * serializeAws_json1_1DescribeRecommenderRequest
 */
const se_DescribeRecommenderRequest = (input: DescribeRecommenderRequest, context: __SerdeContext): any => {
  return {
    ...(input.recommenderArn != null && { recommenderArn: input.recommenderArn }),
  };
};

/**
 * serializeAws_json1_1DescribeSchemaRequest
 */
const se_DescribeSchemaRequest = (input: DescribeSchemaRequest, context: __SerdeContext): any => {
  return {
    ...(input.schemaArn != null && { schemaArn: input.schemaArn }),
  };
};

/**
 * serializeAws_json1_1DescribeSolutionRequest
 */
const se_DescribeSolutionRequest = (input: DescribeSolutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.solutionArn != null && { solutionArn: input.solutionArn }),
  };
};

/**
 * serializeAws_json1_1DescribeSolutionVersionRequest
 */
const se_DescribeSolutionVersionRequest = (input: DescribeSolutionVersionRequest, context: __SerdeContext): any => {
  return {
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

/**
 * serializeAws_json1_1FeatureTransformationParameters
 */
const se_FeatureTransformationParameters = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1GetSolutionMetricsRequest
 */
const se_GetSolutionMetricsRequest = (input: GetSolutionMetricsRequest, context: __SerdeContext): any => {
  return {
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

/**
 * serializeAws_json1_1HPOConfig
 */
const se_HPOConfig = (input: HPOConfig, context: __SerdeContext): any => {
  return {
    ...(input.algorithmHyperParameterRanges != null && {
      algorithmHyperParameterRanges: se_HyperParameterRanges(input.algorithmHyperParameterRanges, context),
    }),
    ...(input.hpoObjective != null && { hpoObjective: se_HPOObjective(input.hpoObjective, context) }),
    ...(input.hpoResourceConfig != null && {
      hpoResourceConfig: se_HPOResourceConfig(input.hpoResourceConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_1HPOObjective
 */
const se_HPOObjective = (input: HPOObjective, context: __SerdeContext): any => {
  return {
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.metricRegex != null && { metricRegex: input.metricRegex }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1HPOResourceConfig
 */
const se_HPOResourceConfig = (input: HPOResourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.maxNumberOfTrainingJobs != null && { maxNumberOfTrainingJobs: input.maxNumberOfTrainingJobs }),
    ...(input.maxParallelTrainingJobs != null && { maxParallelTrainingJobs: input.maxParallelTrainingJobs }),
  };
};

/**
 * serializeAws_json1_1HyperParameterRanges
 */
const se_HyperParameterRanges = (input: HyperParameterRanges, context: __SerdeContext): any => {
  return {
    ...(input.categoricalHyperParameterRanges != null && {
      categoricalHyperParameterRanges: se_CategoricalHyperParameterRanges(
        input.categoricalHyperParameterRanges,
        context
      ),
    }),
    ...(input.continuousHyperParameterRanges != null && {
      continuousHyperParameterRanges: se_ContinuousHyperParameterRanges(input.continuousHyperParameterRanges, context),
    }),
    ...(input.integerHyperParameterRanges != null && {
      integerHyperParameterRanges: se_IntegerHyperParameterRanges(input.integerHyperParameterRanges, context),
    }),
  };
};

/**
 * serializeAws_json1_1HyperParameters
 */
const se_HyperParameters = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1IntegerHyperParameterRange
 */
const se_IntegerHyperParameterRange = (input: IntegerHyperParameterRange, context: __SerdeContext): any => {
  return {
    ...(input.maxValue != null && { maxValue: input.maxValue }),
    ...(input.minValue != null && { minValue: input.minValue }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1IntegerHyperParameterRanges
 */
const se_IntegerHyperParameterRanges = (input: IntegerHyperParameterRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_IntegerHyperParameterRange(entry, context);
    });
};

/**
 * serializeAws_json1_1ListBatchInferenceJobsRequest
 */
const se_ListBatchInferenceJobsRequest = (input: ListBatchInferenceJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

/**
 * serializeAws_json1_1ListBatchSegmentJobsRequest
 */
const se_ListBatchSegmentJobsRequest = (input: ListBatchSegmentJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

/**
 * serializeAws_json1_1ListCampaignsRequest
 */
const se_ListCampaignsRequest = (input: ListCampaignsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.solutionArn != null && { solutionArn: input.solutionArn }),
  };
};

/**
 * serializeAws_json1_1ListDatasetExportJobsRequest
 */
const se_ListDatasetExportJobsRequest = (input: ListDatasetExportJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetArn != null && { datasetArn: input.datasetArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListDatasetGroupsRequest
 */
const se_ListDatasetGroupsRequest = (input: ListDatasetGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListDatasetImportJobsRequest
 */
const se_ListDatasetImportJobsRequest = (input: ListDatasetImportJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetArn != null && { datasetArn: input.datasetArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListDatasetsRequest
 */
const se_ListDatasetsRequest = (input: ListDatasetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListEventTrackersRequest
 */
const se_ListEventTrackersRequest = (input: ListEventTrackersRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListFiltersRequest
 */
const se_ListFiltersRequest = (input: ListFiltersRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListMetricAttributionMetricsRequest
 */
const se_ListMetricAttributionMetricsRequest = (
  input: ListMetricAttributionMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.metricAttributionArn != null && { metricAttributionArn: input.metricAttributionArn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListMetricAttributionsRequest
 */
const se_ListMetricAttributionsRequest = (input: ListMetricAttributionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListRecipesRequest
 */
const se_ListRecipesRequest = (input: ListRecipesRequest, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.recipeProvider != null && { recipeProvider: input.recipeProvider }),
  };
};

/**
 * serializeAws_json1_1ListRecommendersRequest
 */
const se_ListRecommendersRequest = (input: ListRecommendersRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListSchemasRequest
 */
const se_ListSchemasRequest = (input: ListSchemasRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListSolutionsRequest
 */
const se_ListSolutionsRequest = (input: ListSolutionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListSolutionVersionsRequest
 */
const se_ListSolutionVersionsRequest = (input: ListSolutionVersionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.solutionArn != null && { solutionArn: input.solutionArn }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_1MetricAttribute
 */
const se_MetricAttribute = (input: MetricAttribute, context: __SerdeContext): any => {
  return {
    ...(input.eventType != null && { eventType: input.eventType }),
    ...(input.expression != null && { expression: input.expression }),
    ...(input.metricName != null && { metricName: input.metricName }),
  };
};

/**
 * serializeAws_json1_1MetricAttributes
 */
const se_MetricAttributes = (input: MetricAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MetricAttribute(entry, context);
    });
};

/**
 * serializeAws_json1_1MetricAttributesNamesList
 */
const se_MetricAttributesNamesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1MetricAttributionOutput
 */
const se_MetricAttributionOutput = (input: MetricAttributionOutput, context: __SerdeContext): any => {
  return {
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.s3DataDestination != null && { s3DataDestination: se_S3DataConfig(input.s3DataDestination, context) }),
  };
};

/**
 * serializeAws_json1_1OptimizationObjective
 */
const se_OptimizationObjective = (input: OptimizationObjective, context: __SerdeContext): any => {
  return {
    ...(input.itemAttribute != null && { itemAttribute: input.itemAttribute }),
    ...(input.objectiveSensitivity != null && { objectiveSensitivity: input.objectiveSensitivity }),
  };
};

/**
 * serializeAws_json1_1RecommenderConfig
 */
const se_RecommenderConfig = (input: RecommenderConfig, context: __SerdeContext): any => {
  return {
    ...(input.itemExplorationConfig != null && {
      itemExplorationConfig: se_HyperParameters(input.itemExplorationConfig, context),
    }),
    ...(input.minRecommendationRequestsPerSecond != null && {
      minRecommendationRequestsPerSecond: input.minRecommendationRequestsPerSecond,
    }),
  };
};

/**
 * serializeAws_json1_1S3DataConfig
 */
const se_S3DataConfig = (input: S3DataConfig, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.path != null && { path: input.path }),
  };
};

/**
 * serializeAws_json1_1SolutionConfig
 */
const se_SolutionConfig = (input: SolutionConfig, context: __SerdeContext): any => {
  return {
    ...(input.algorithmHyperParameters != null && {
      algorithmHyperParameters: se_HyperParameters(input.algorithmHyperParameters, context),
    }),
    ...(input.autoMLConfig != null && { autoMLConfig: se_AutoMLConfig(input.autoMLConfig, context) }),
    ...(input.eventValueThreshold != null && { eventValueThreshold: input.eventValueThreshold }),
    ...(input.featureTransformationParameters != null && {
      featureTransformationParameters: se_FeatureTransformationParameters(
        input.featureTransformationParameters,
        context
      ),
    }),
    ...(input.hpoConfig != null && { hpoConfig: se_HPOConfig(input.hpoConfig, context) }),
    ...(input.optimizationObjective != null && {
      optimizationObjective: se_OptimizationObjective(input.optimizationObjective, context),
    }),
  };
};

/**
 * serializeAws_json1_1StartRecommenderRequest
 */
const se_StartRecommenderRequest = (input: StartRecommenderRequest, context: __SerdeContext): any => {
  return {
    ...(input.recommenderArn != null && { recommenderArn: input.recommenderArn }),
  };
};

/**
 * serializeAws_json1_1StopRecommenderRequest
 */
const se_StopRecommenderRequest = (input: StopRecommenderRequest, context: __SerdeContext): any => {
  return {
    ...(input.recommenderArn != null && { recommenderArn: input.recommenderArn }),
  };
};

/**
 * serializeAws_json1_1StopSolutionVersionCreationRequest
 */
const se_StopSolutionVersionCreationRequest = (
  input: StopSolutionVersionCreationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.tagKey != null && { tagKey: input.tagKey }),
    ...(input.tagValue != null && { tagValue: input.tagValue }),
  };
};

/**
 * serializeAws_json1_1TagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeys(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateCampaignRequest
 */
const se_UpdateCampaignRequest = (input: UpdateCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.campaignArn != null && { campaignArn: input.campaignArn }),
    ...(input.campaignConfig != null && { campaignConfig: se_CampaignConfig(input.campaignConfig, context) }),
    ...(input.minProvisionedTPS != null && { minProvisionedTPS: input.minProvisionedTPS }),
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

/**
 * serializeAws_json1_1UpdateMetricAttributionRequest
 */
const se_UpdateMetricAttributionRequest = (input: UpdateMetricAttributionRequest, context: __SerdeContext): any => {
  return {
    ...(input.addMetrics != null && { addMetrics: se_MetricAttributes(input.addMetrics, context) }),
    ...(input.metricAttributionArn != null && { metricAttributionArn: input.metricAttributionArn }),
    ...(input.metricsOutputConfig != null && {
      metricsOutputConfig: se_MetricAttributionOutput(input.metricsOutputConfig, context),
    }),
    ...(input.removeMetrics != null && { removeMetrics: se_MetricAttributesNamesList(input.removeMetrics, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateRecommenderRequest
 */
const se_UpdateRecommenderRequest = (input: UpdateRecommenderRequest, context: __SerdeContext): any => {
  return {
    ...(input.recommenderArn != null && { recommenderArn: input.recommenderArn }),
    ...(input.recommenderConfig != null && {
      recommenderConfig: se_RecommenderConfig(input.recommenderConfig, context),
    }),
  };
};

/**
 * deserializeAws_json1_1Algorithm
 */
const de_Algorithm = (output: any, context: __SerdeContext): Algorithm => {
  return {
    algorithmArn: __expectString(output.algorithmArn),
    algorithmImage: output.algorithmImage != null ? de_AlgorithmImage(output.algorithmImage, context) : undefined,
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    defaultHyperParameterRanges:
      output.defaultHyperParameterRanges != null
        ? de_DefaultHyperParameterRanges(output.defaultHyperParameterRanges, context)
        : undefined,
    defaultHyperParameters:
      output.defaultHyperParameters != null ? de_HyperParameters(output.defaultHyperParameters, context) : undefined,
    defaultResourceConfig:
      output.defaultResourceConfig != null ? de_ResourceConfig(output.defaultResourceConfig, context) : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    roleArn: __expectString(output.roleArn),
    trainingInputMode: __expectString(output.trainingInputMode),
  } as any;
};

/**
 * deserializeAws_json1_1AlgorithmImage
 */
const de_AlgorithmImage = (output: any, context: __SerdeContext): AlgorithmImage => {
  return {
    dockerURI: __expectString(output.dockerURI),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1ArnList
 */
const de_ArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoMLConfig
 */
const de_AutoMLConfig = (output: any, context: __SerdeContext): AutoMLConfig => {
  return {
    metricName: __expectString(output.metricName),
    recipeList: output.recipeList != null ? de_ArnList(output.recipeList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AutoMLResult
 */
const de_AutoMLResult = (output: any, context: __SerdeContext): AutoMLResult => {
  return {
    bestRecipeArn: __expectString(output.bestRecipeArn),
  } as any;
};

/**
 * deserializeAws_json1_1BatchInferenceJob
 */
const de_BatchInferenceJob = (output: any, context: __SerdeContext): BatchInferenceJob => {
  return {
    batchInferenceJobArn: __expectString(output.batchInferenceJobArn),
    batchInferenceJobConfig:
      output.batchInferenceJobConfig != null
        ? de_BatchInferenceJobConfig(output.batchInferenceJobConfig, context)
        : undefined,
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    failureReason: __expectString(output.failureReason),
    filterArn: __expectString(output.filterArn),
    jobInput: output.jobInput != null ? de_BatchInferenceJobInput(output.jobInput, context) : undefined,
    jobName: __expectString(output.jobName),
    jobOutput: output.jobOutput != null ? de_BatchInferenceJobOutput(output.jobOutput, context) : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    numResults: __expectInt32(output.numResults),
    roleArn: __expectString(output.roleArn),
    solutionVersionArn: __expectString(output.solutionVersionArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1BatchInferenceJobConfig
 */
const de_BatchInferenceJobConfig = (output: any, context: __SerdeContext): BatchInferenceJobConfig => {
  return {
    itemExplorationConfig:
      output.itemExplorationConfig != null ? de_HyperParameters(output.itemExplorationConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchInferenceJobInput
 */
const de_BatchInferenceJobInput = (output: any, context: __SerdeContext): BatchInferenceJobInput => {
  return {
    s3DataSource: output.s3DataSource != null ? de_S3DataConfig(output.s3DataSource, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchInferenceJobOutput
 */
const de_BatchInferenceJobOutput = (output: any, context: __SerdeContext): BatchInferenceJobOutput => {
  return {
    s3DataDestination:
      output.s3DataDestination != null ? de_S3DataConfig(output.s3DataDestination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchInferenceJobs
 */
const de_BatchInferenceJobs = (output: any, context: __SerdeContext): BatchInferenceJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchInferenceJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchInferenceJobSummary
 */
const de_BatchInferenceJobSummary = (output: any, context: __SerdeContext): BatchInferenceJobSummary => {
  return {
    batchInferenceJobArn: __expectString(output.batchInferenceJobArn),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    failureReason: __expectString(output.failureReason),
    jobName: __expectString(output.jobName),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    solutionVersionArn: __expectString(output.solutionVersionArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1BatchSegmentJob
 */
const de_BatchSegmentJob = (output: any, context: __SerdeContext): BatchSegmentJob => {
  return {
    batchSegmentJobArn: __expectString(output.batchSegmentJobArn),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    failureReason: __expectString(output.failureReason),
    filterArn: __expectString(output.filterArn),
    jobInput: output.jobInput != null ? de_BatchSegmentJobInput(output.jobInput, context) : undefined,
    jobName: __expectString(output.jobName),
    jobOutput: output.jobOutput != null ? de_BatchSegmentJobOutput(output.jobOutput, context) : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    numResults: __expectInt32(output.numResults),
    roleArn: __expectString(output.roleArn),
    solutionVersionArn: __expectString(output.solutionVersionArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1BatchSegmentJobInput
 */
const de_BatchSegmentJobInput = (output: any, context: __SerdeContext): BatchSegmentJobInput => {
  return {
    s3DataSource: output.s3DataSource != null ? de_S3DataConfig(output.s3DataSource, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchSegmentJobOutput
 */
const de_BatchSegmentJobOutput = (output: any, context: __SerdeContext): BatchSegmentJobOutput => {
  return {
    s3DataDestination:
      output.s3DataDestination != null ? de_S3DataConfig(output.s3DataDestination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BatchSegmentJobs
 */
const de_BatchSegmentJobs = (output: any, context: __SerdeContext): BatchSegmentJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchSegmentJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchSegmentJobSummary
 */
const de_BatchSegmentJobSummary = (output: any, context: __SerdeContext): BatchSegmentJobSummary => {
  return {
    batchSegmentJobArn: __expectString(output.batchSegmentJobArn),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    failureReason: __expectString(output.failureReason),
    jobName: __expectString(output.jobName),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    solutionVersionArn: __expectString(output.solutionVersionArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1Campaign
 */
const de_Campaign = (output: any, context: __SerdeContext): Campaign => {
  return {
    campaignArn: __expectString(output.campaignArn),
    campaignConfig: output.campaignConfig != null ? de_CampaignConfig(output.campaignConfig, context) : undefined,
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    latestCampaignUpdate:
      output.latestCampaignUpdate != null ? de_CampaignUpdateSummary(output.latestCampaignUpdate, context) : undefined,
    minProvisionedTPS: __expectInt32(output.minProvisionedTPS),
    name: __expectString(output.name),
    solutionVersionArn: __expectString(output.solutionVersionArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1CampaignConfig
 */
const de_CampaignConfig = (output: any, context: __SerdeContext): CampaignConfig => {
  return {
    itemExplorationConfig:
      output.itemExplorationConfig != null ? de_HyperParameters(output.itemExplorationConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Campaigns
 */
const de_Campaigns = (output: any, context: __SerdeContext): CampaignSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CampaignSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CampaignSummary
 */
const de_CampaignSummary = (output: any, context: __SerdeContext): CampaignSummary => {
  return {
    campaignArn: __expectString(output.campaignArn),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1CampaignUpdateSummary
 */
const de_CampaignUpdateSummary = (output: any, context: __SerdeContext): CampaignUpdateSummary => {
  return {
    campaignConfig: output.campaignConfig != null ? de_CampaignConfig(output.campaignConfig, context) : undefined,
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    minProvisionedTPS: __expectInt32(output.minProvisionedTPS),
    solutionVersionArn: __expectString(output.solutionVersionArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1CategoricalHyperParameterRange
 */
const de_CategoricalHyperParameterRange = (output: any, context: __SerdeContext): CategoricalHyperParameterRange => {
  return {
    name: __expectString(output.name),
    values: output.values != null ? de_CategoricalValues(output.values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CategoricalHyperParameterRanges
 */
const de_CategoricalHyperParameterRanges = (output: any, context: __SerdeContext): CategoricalHyperParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CategoricalHyperParameterRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CategoricalValues
 */
const de_CategoricalValues = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContinuousHyperParameterRange
 */
const de_ContinuousHyperParameterRange = (output: any, context: __SerdeContext): ContinuousHyperParameterRange => {
  return {
    maxValue: __limitedParseDouble(output.maxValue),
    minValue: __limitedParseDouble(output.minValue),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1ContinuousHyperParameterRanges
 */
const de_ContinuousHyperParameterRanges = (output: any, context: __SerdeContext): ContinuousHyperParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContinuousHyperParameterRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateBatchInferenceJobResponse
 */
const de_CreateBatchInferenceJobResponse = (output: any, context: __SerdeContext): CreateBatchInferenceJobResponse => {
  return {
    batchInferenceJobArn: __expectString(output.batchInferenceJobArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateBatchSegmentJobResponse
 */
const de_CreateBatchSegmentJobResponse = (output: any, context: __SerdeContext): CreateBatchSegmentJobResponse => {
  return {
    batchSegmentJobArn: __expectString(output.batchSegmentJobArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateCampaignResponse
 */
const de_CreateCampaignResponse = (output: any, context: __SerdeContext): CreateCampaignResponse => {
  return {
    campaignArn: __expectString(output.campaignArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDatasetExportJobResponse
 */
const de_CreateDatasetExportJobResponse = (output: any, context: __SerdeContext): CreateDatasetExportJobResponse => {
  return {
    datasetExportJobArn: __expectString(output.datasetExportJobArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDatasetGroupResponse
 */
const de_CreateDatasetGroupResponse = (output: any, context: __SerdeContext): CreateDatasetGroupResponse => {
  return {
    datasetGroupArn: __expectString(output.datasetGroupArn),
    domain: __expectString(output.domain),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDatasetImportJobResponse
 */
const de_CreateDatasetImportJobResponse = (output: any, context: __SerdeContext): CreateDatasetImportJobResponse => {
  return {
    datasetImportJobArn: __expectString(output.datasetImportJobArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDatasetResponse
 */
const de_CreateDatasetResponse = (output: any, context: __SerdeContext): CreateDatasetResponse => {
  return {
    datasetArn: __expectString(output.datasetArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateEventTrackerResponse
 */
const de_CreateEventTrackerResponse = (output: any, context: __SerdeContext): CreateEventTrackerResponse => {
  return {
    eventTrackerArn: __expectString(output.eventTrackerArn),
    trackingId: __expectString(output.trackingId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateFilterResponse
 */
const de_CreateFilterResponse = (output: any, context: __SerdeContext): CreateFilterResponse => {
  return {
    filterArn: __expectString(output.filterArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateMetricAttributionResponse
 */
const de_CreateMetricAttributionResponse = (output: any, context: __SerdeContext): CreateMetricAttributionResponse => {
  return {
    metricAttributionArn: __expectString(output.metricAttributionArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateRecommenderResponse
 */
const de_CreateRecommenderResponse = (output: any, context: __SerdeContext): CreateRecommenderResponse => {
  return {
    recommenderArn: __expectString(output.recommenderArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateSchemaResponse
 */
const de_CreateSchemaResponse = (output: any, context: __SerdeContext): CreateSchemaResponse => {
  return {
    schemaArn: __expectString(output.schemaArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateSolutionResponse
 */
const de_CreateSolutionResponse = (output: any, context: __SerdeContext): CreateSolutionResponse => {
  return {
    solutionArn: __expectString(output.solutionArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateSolutionVersionResponse
 */
const de_CreateSolutionVersionResponse = (output: any, context: __SerdeContext): CreateSolutionVersionResponse => {
  return {
    solutionVersionArn: __expectString(output.solutionVersionArn),
  } as any;
};

/**
 * deserializeAws_json1_1Dataset
 */
const de_Dataset = (output: any, context: __SerdeContext): Dataset => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetArn: __expectString(output.datasetArn),
    datasetGroupArn: __expectString(output.datasetGroupArn),
    datasetType: __expectString(output.datasetType),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    schemaArn: __expectString(output.schemaArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1DatasetExportJob
 */
const de_DatasetExportJob = (output: any, context: __SerdeContext): DatasetExportJob => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetArn: __expectString(output.datasetArn),
    datasetExportJobArn: __expectString(output.datasetExportJobArn),
    failureReason: __expectString(output.failureReason),
    ingestionMode: __expectString(output.ingestionMode),
    jobName: __expectString(output.jobName),
    jobOutput: output.jobOutput != null ? de_DatasetExportJobOutput(output.jobOutput, context) : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1DatasetExportJobOutput
 */
const de_DatasetExportJobOutput = (output: any, context: __SerdeContext): DatasetExportJobOutput => {
  return {
    s3DataDestination:
      output.s3DataDestination != null ? de_S3DataConfig(output.s3DataDestination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DatasetExportJobs
 */
const de_DatasetExportJobs = (output: any, context: __SerdeContext): DatasetExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetExportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetExportJobSummary
 */
const de_DatasetExportJobSummary = (output: any, context: __SerdeContext): DatasetExportJobSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetExportJobArn: __expectString(output.datasetExportJobArn),
    failureReason: __expectString(output.failureReason),
    jobName: __expectString(output.jobName),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1DatasetGroup
 */
const de_DatasetGroup = (output: any, context: __SerdeContext): DatasetGroup => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    domain: __expectString(output.domain),
    failureReason: __expectString(output.failureReason),
    kmsKeyArn: __expectString(output.kmsKeyArn),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1DatasetGroups
 */
const de_DatasetGroups = (output: any, context: __SerdeContext): DatasetGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetGroupSummary
 */
const de_DatasetGroupSummary = (output: any, context: __SerdeContext): DatasetGroupSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    domain: __expectString(output.domain),
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1DatasetImportJob
 */
const de_DatasetImportJob = (output: any, context: __SerdeContext): DatasetImportJob => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    dataSource: output.dataSource != null ? de_DataSource(output.dataSource, context) : undefined,
    datasetArn: __expectString(output.datasetArn),
    datasetImportJobArn: __expectString(output.datasetImportJobArn),
    failureReason: __expectString(output.failureReason),
    importMode: __expectString(output.importMode),
    jobName: __expectString(output.jobName),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    publishAttributionMetricsToS3: __expectBoolean(output.publishAttributionMetricsToS3),
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1DatasetImportJobs
 */
const de_DatasetImportJobs = (output: any, context: __SerdeContext): DatasetImportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetImportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetImportJobSummary
 */
const de_DatasetImportJobSummary = (output: any, context: __SerdeContext): DatasetImportJobSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetImportJobArn: __expectString(output.datasetImportJobArn),
    failureReason: __expectString(output.failureReason),
    importMode: __expectString(output.importMode),
    jobName: __expectString(output.jobName),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1Datasets
 */
const de_Datasets = (output: any, context: __SerdeContext): DatasetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetSchema
 */
const de_DatasetSchema = (output: any, context: __SerdeContext): DatasetSchema => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    domain: __expectString(output.domain),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    schema: __expectString(output.schema),
    schemaArn: __expectString(output.schemaArn),
  } as any;
};

/**
 * deserializeAws_json1_1DatasetSchemaSummary
 */
const de_DatasetSchemaSummary = (output: any, context: __SerdeContext): DatasetSchemaSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    domain: __expectString(output.domain),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    schemaArn: __expectString(output.schemaArn),
  } as any;
};

/**
 * deserializeAws_json1_1DatasetSummary
 */
const de_DatasetSummary = (output: any, context: __SerdeContext): DatasetSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetArn: __expectString(output.datasetArn),
    datasetType: __expectString(output.datasetType),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1DataSource
 */
const de_DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    dataLocation: __expectString(output.dataLocation),
  } as any;
};

/**
 * deserializeAws_json1_1DefaultCategoricalHyperParameterRange
 */
const de_DefaultCategoricalHyperParameterRange = (
  output: any,
  context: __SerdeContext
): DefaultCategoricalHyperParameterRange => {
  return {
    isTunable: __expectBoolean(output.isTunable),
    name: __expectString(output.name),
    values: output.values != null ? de_CategoricalValues(output.values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DefaultCategoricalHyperParameterRanges
 */
const de_DefaultCategoricalHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultCategoricalHyperParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DefaultCategoricalHyperParameterRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DefaultContinuousHyperParameterRange
 */
const de_DefaultContinuousHyperParameterRange = (
  output: any,
  context: __SerdeContext
): DefaultContinuousHyperParameterRange => {
  return {
    isTunable: __expectBoolean(output.isTunable),
    maxValue: __limitedParseDouble(output.maxValue),
    minValue: __limitedParseDouble(output.minValue),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1DefaultContinuousHyperParameterRanges
 */
const de_DefaultContinuousHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultContinuousHyperParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DefaultContinuousHyperParameterRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DefaultHyperParameterRanges
 */
const de_DefaultHyperParameterRanges = (output: any, context: __SerdeContext): DefaultHyperParameterRanges => {
  return {
    categoricalHyperParameterRanges:
      output.categoricalHyperParameterRanges != null
        ? de_DefaultCategoricalHyperParameterRanges(output.categoricalHyperParameterRanges, context)
        : undefined,
    continuousHyperParameterRanges:
      output.continuousHyperParameterRanges != null
        ? de_DefaultContinuousHyperParameterRanges(output.continuousHyperParameterRanges, context)
        : undefined,
    integerHyperParameterRanges:
      output.integerHyperParameterRanges != null
        ? de_DefaultIntegerHyperParameterRanges(output.integerHyperParameterRanges, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DefaultIntegerHyperParameterRange
 */
const de_DefaultIntegerHyperParameterRange = (
  output: any,
  context: __SerdeContext
): DefaultIntegerHyperParameterRange => {
  return {
    isTunable: __expectBoolean(output.isTunable),
    maxValue: __expectInt32(output.maxValue),
    minValue: __expectInt32(output.minValue),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1DefaultIntegerHyperParameterRanges
 */
const de_DefaultIntegerHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultIntegerHyperParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DefaultIntegerHyperParameterRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DescribeAlgorithmResponse
 */
const de_DescribeAlgorithmResponse = (output: any, context: __SerdeContext): DescribeAlgorithmResponse => {
  return {
    algorithm: output.algorithm != null ? de_Algorithm(output.algorithm, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBatchInferenceJobResponse
 */
const de_DescribeBatchInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeBatchInferenceJobResponse => {
  return {
    batchInferenceJob:
      output.batchInferenceJob != null ? de_BatchInferenceJob(output.batchInferenceJob, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBatchSegmentJobResponse
 */
const de_DescribeBatchSegmentJobResponse = (output: any, context: __SerdeContext): DescribeBatchSegmentJobResponse => {
  return {
    batchSegmentJob: output.batchSegmentJob != null ? de_BatchSegmentJob(output.batchSegmentJob, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeCampaignResponse
 */
const de_DescribeCampaignResponse = (output: any, context: __SerdeContext): DescribeCampaignResponse => {
  return {
    campaign: output.campaign != null ? de_Campaign(output.campaign, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetExportJobResponse
 */
const de_DescribeDatasetExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetExportJobResponse => {
  return {
    datasetExportJob:
      output.datasetExportJob != null ? de_DatasetExportJob(output.datasetExportJob, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetGroupResponse
 */
const de_DescribeDatasetGroupResponse = (output: any, context: __SerdeContext): DescribeDatasetGroupResponse => {
  return {
    datasetGroup: output.datasetGroup != null ? de_DatasetGroup(output.datasetGroup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetImportJobResponse
 */
const de_DescribeDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetImportJobResponse => {
  return {
    datasetImportJob:
      output.datasetImportJob != null ? de_DatasetImportJob(output.datasetImportJob, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetResponse
 */
const de_DescribeDatasetResponse = (output: any, context: __SerdeContext): DescribeDatasetResponse => {
  return {
    dataset: output.dataset != null ? de_Dataset(output.dataset, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEventTrackerResponse
 */
const de_DescribeEventTrackerResponse = (output: any, context: __SerdeContext): DescribeEventTrackerResponse => {
  return {
    eventTracker: output.eventTracker != null ? de_EventTracker(output.eventTracker, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFeatureTransformationResponse
 */
const de_DescribeFeatureTransformationResponse = (
  output: any,
  context: __SerdeContext
): DescribeFeatureTransformationResponse => {
  return {
    featureTransformation:
      output.featureTransformation != null
        ? de_FeatureTransformation(output.featureTransformation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFilterResponse
 */
const de_DescribeFilterResponse = (output: any, context: __SerdeContext): DescribeFilterResponse => {
  return {
    filter: output.filter != null ? de_Filter(output.filter, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMetricAttributionResponse
 */
const de_DescribeMetricAttributionResponse = (
  output: any,
  context: __SerdeContext
): DescribeMetricAttributionResponse => {
  return {
    metricAttribution:
      output.metricAttribution != null ? de_MetricAttribution(output.metricAttribution, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRecipeResponse
 */
const de_DescribeRecipeResponse = (output: any, context: __SerdeContext): DescribeRecipeResponse => {
  return {
    recipe: output.recipe != null ? de_Recipe(output.recipe, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRecommenderResponse
 */
const de_DescribeRecommenderResponse = (output: any, context: __SerdeContext): DescribeRecommenderResponse => {
  return {
    recommender: output.recommender != null ? de_Recommender(output.recommender, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSchemaResponse
 */
const de_DescribeSchemaResponse = (output: any, context: __SerdeContext): DescribeSchemaResponse => {
  return {
    schema: output.schema != null ? de_DatasetSchema(output.schema, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSolutionResponse
 */
const de_DescribeSolutionResponse = (output: any, context: __SerdeContext): DescribeSolutionResponse => {
  return {
    solution: output.solution != null ? de_Solution(output.solution, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSolutionVersionResponse
 */
const de_DescribeSolutionVersionResponse = (output: any, context: __SerdeContext): DescribeSolutionVersionResponse => {
  return {
    solutionVersion: output.solutionVersion != null ? de_SolutionVersion(output.solutionVersion, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EventTracker
 */
const de_EventTracker = (output: any, context: __SerdeContext): EventTracker => {
  return {
    accountId: __expectString(output.accountId),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    eventTrackerArn: __expectString(output.eventTrackerArn),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
    trackingId: __expectString(output.trackingId),
  } as any;
};

/**
 * deserializeAws_json1_1EventTrackers
 */
const de_EventTrackers = (output: any, context: __SerdeContext): EventTrackerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventTrackerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventTrackerSummary
 */
const de_EventTrackerSummary = (output: any, context: __SerdeContext): EventTrackerSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    eventTrackerArn: __expectString(output.eventTrackerArn),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1FeatureTransformation
 */
const de_FeatureTransformation = (output: any, context: __SerdeContext): FeatureTransformation => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    defaultParameters:
      output.defaultParameters != null ? de_FeaturizationParameters(output.defaultParameters, context) : undefined,
    featureTransformationArn: __expectString(output.featureTransformationArn),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1FeatureTransformationParameters
 */
const de_FeatureTransformationParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1FeaturizationParameters
 */
const de_FeaturizationParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1Filter
 */
const de_Filter = (output: any, context: __SerdeContext): Filter => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    failureReason: __expectString(output.failureReason),
    filterArn: __expectString(output.filterArn),
    filterExpression: __expectString(output.filterExpression),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1Filters
 */
const de_Filters = (output: any, context: __SerdeContext): FilterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FilterSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FilterSummary
 */
const de_FilterSummary = (output: any, context: __SerdeContext): FilterSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    failureReason: __expectString(output.failureReason),
    filterArn: __expectString(output.filterArn),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1GetSolutionMetricsResponse
 */
const de_GetSolutionMetricsResponse = (output: any, context: __SerdeContext): GetSolutionMetricsResponse => {
  return {
    metrics: output.metrics != null ? de_Metrics(output.metrics, context) : undefined,
    solutionVersionArn: __expectString(output.solutionVersionArn),
  } as any;
};

/**
 * deserializeAws_json1_1HPOConfig
 */
const de_HPOConfig = (output: any, context: __SerdeContext): HPOConfig => {
  return {
    algorithmHyperParameterRanges:
      output.algorithmHyperParameterRanges != null
        ? de_HyperParameterRanges(output.algorithmHyperParameterRanges, context)
        : undefined,
    hpoObjective: output.hpoObjective != null ? de_HPOObjective(output.hpoObjective, context) : undefined,
    hpoResourceConfig:
      output.hpoResourceConfig != null ? de_HPOResourceConfig(output.hpoResourceConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HPOObjective
 */
const de_HPOObjective = (output: any, context: __SerdeContext): HPOObjective => {
  return {
    metricName: __expectString(output.metricName),
    metricRegex: __expectString(output.metricRegex),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1HPOResourceConfig
 */
const de_HPOResourceConfig = (output: any, context: __SerdeContext): HPOResourceConfig => {
  return {
    maxNumberOfTrainingJobs: __expectString(output.maxNumberOfTrainingJobs),
    maxParallelTrainingJobs: __expectString(output.maxParallelTrainingJobs),
  } as any;
};

/**
 * deserializeAws_json1_1HyperParameterRanges
 */
const de_HyperParameterRanges = (output: any, context: __SerdeContext): HyperParameterRanges => {
  return {
    categoricalHyperParameterRanges:
      output.categoricalHyperParameterRanges != null
        ? de_CategoricalHyperParameterRanges(output.categoricalHyperParameterRanges, context)
        : undefined,
    continuousHyperParameterRanges:
      output.continuousHyperParameterRanges != null
        ? de_ContinuousHyperParameterRanges(output.continuousHyperParameterRanges, context)
        : undefined,
    integerHyperParameterRanges:
      output.integerHyperParameterRanges != null
        ? de_IntegerHyperParameterRanges(output.integerHyperParameterRanges, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HyperParameters
 */
const de_HyperParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1IntegerHyperParameterRange
 */
const de_IntegerHyperParameterRange = (output: any, context: __SerdeContext): IntegerHyperParameterRange => {
  return {
    maxValue: __expectInt32(output.maxValue),
    minValue: __expectInt32(output.minValue),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1IntegerHyperParameterRanges
 */
const de_IntegerHyperParameterRanges = (output: any, context: __SerdeContext): IntegerHyperParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IntegerHyperParameterRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InvalidInputException
 */
const de_InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListBatchInferenceJobsResponse
 */
const de_ListBatchInferenceJobsResponse = (output: any, context: __SerdeContext): ListBatchInferenceJobsResponse => {
  return {
    batchInferenceJobs:
      output.batchInferenceJobs != null ? de_BatchInferenceJobs(output.batchInferenceJobs, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListBatchSegmentJobsResponse
 */
const de_ListBatchSegmentJobsResponse = (output: any, context: __SerdeContext): ListBatchSegmentJobsResponse => {
  return {
    batchSegmentJobs:
      output.batchSegmentJobs != null ? de_BatchSegmentJobs(output.batchSegmentJobs, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListCampaignsResponse
 */
const de_ListCampaignsResponse = (output: any, context: __SerdeContext): ListCampaignsResponse => {
  return {
    campaigns: output.campaigns != null ? de_Campaigns(output.campaigns, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDatasetExportJobsResponse
 */
const de_ListDatasetExportJobsResponse = (output: any, context: __SerdeContext): ListDatasetExportJobsResponse => {
  return {
    datasetExportJobs:
      output.datasetExportJobs != null ? de_DatasetExportJobs(output.datasetExportJobs, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDatasetGroupsResponse
 */
const de_ListDatasetGroupsResponse = (output: any, context: __SerdeContext): ListDatasetGroupsResponse => {
  return {
    datasetGroups: output.datasetGroups != null ? de_DatasetGroups(output.datasetGroups, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDatasetImportJobsResponse
 */
const de_ListDatasetImportJobsResponse = (output: any, context: __SerdeContext): ListDatasetImportJobsResponse => {
  return {
    datasetImportJobs:
      output.datasetImportJobs != null ? de_DatasetImportJobs(output.datasetImportJobs, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDatasetsResponse
 */
const de_ListDatasetsResponse = (output: any, context: __SerdeContext): ListDatasetsResponse => {
  return {
    datasets: output.datasets != null ? de_Datasets(output.datasets, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListEventTrackersResponse
 */
const de_ListEventTrackersResponse = (output: any, context: __SerdeContext): ListEventTrackersResponse => {
  return {
    eventTrackers: output.eventTrackers != null ? de_EventTrackers(output.eventTrackers, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListFiltersResponse
 */
const de_ListFiltersResponse = (output: any, context: __SerdeContext): ListFiltersResponse => {
  return {
    Filters: output.Filters != null ? de_Filters(output.Filters, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListMetricAttributionMetricsResponse
 */
const de_ListMetricAttributionMetricsResponse = (
  output: any,
  context: __SerdeContext
): ListMetricAttributionMetricsResponse => {
  return {
    metrics: output.metrics != null ? de_MetricAttributes(output.metrics, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListMetricAttributionsResponse
 */
const de_ListMetricAttributionsResponse = (output: any, context: __SerdeContext): ListMetricAttributionsResponse => {
  return {
    metricAttributions:
      output.metricAttributions != null ? de_MetricAttributions(output.metricAttributions, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListRecipesResponse
 */
const de_ListRecipesResponse = (output: any, context: __SerdeContext): ListRecipesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    recipes: output.recipes != null ? de_Recipes(output.recipes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRecommendersResponse
 */
const de_ListRecommendersResponse = (output: any, context: __SerdeContext): ListRecommendersResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    recommenders: output.recommenders != null ? de_Recommenders(output.recommenders, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSchemasResponse
 */
const de_ListSchemasResponse = (output: any, context: __SerdeContext): ListSchemasResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    schemas: output.schemas != null ? de_Schemas(output.schemas, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSolutionsResponse
 */
const de_ListSolutionsResponse = (output: any, context: __SerdeContext): ListSolutionsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    solutions: output.solutions != null ? de_Solutions(output.solutions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSolutionVersionsResponse
 */
const de_ListSolutionVersionsResponse = (output: any, context: __SerdeContext): ListSolutionVersionsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    solutionVersions:
      output.solutionVersions != null ? de_SolutionVersions(output.solutionVersions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MetricAttribute
 */
const de_MetricAttribute = (output: any, context: __SerdeContext): MetricAttribute => {
  return {
    eventType: __expectString(output.eventType),
    expression: __expectString(output.expression),
    metricName: __expectString(output.metricName),
  } as any;
};

/**
 * deserializeAws_json1_1MetricAttributes
 */
const de_MetricAttributes = (output: any, context: __SerdeContext): MetricAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricAttribution
 */
const de_MetricAttribution = (output: any, context: __SerdeContext): MetricAttribution => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    metricAttributionArn: __expectString(output.metricAttributionArn),
    metricsOutputConfig:
      output.metricsOutputConfig != null ? de_MetricAttributionOutput(output.metricsOutputConfig, context) : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1MetricAttributionOutput
 */
const de_MetricAttributionOutput = (output: any, context: __SerdeContext): MetricAttributionOutput => {
  return {
    roleArn: __expectString(output.roleArn),
    s3DataDestination:
      output.s3DataDestination != null ? de_S3DataConfig(output.s3DataDestination, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MetricAttributions
 */
const de_MetricAttributions = (output: any, context: __SerdeContext): MetricAttributionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricAttributionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricAttributionSummary
 */
const de_MetricAttributionSummary = (output: any, context: __SerdeContext): MetricAttributionSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    metricAttributionArn: __expectString(output.metricAttributionArn),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1Metrics
 */
const de_Metrics = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseDouble(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1OptimizationObjective
 */
const de_OptimizationObjective = (output: any, context: __SerdeContext): OptimizationObjective => {
  return {
    itemAttribute: __expectString(output.itemAttribute),
    objectiveSensitivity: __expectString(output.objectiveSensitivity),
  } as any;
};

/**
 * deserializeAws_json1_1Recipe
 */
const de_Recipe = (output: any, context: __SerdeContext): Recipe => {
  return {
    algorithmArn: __expectString(output.algorithmArn),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    description: __expectString(output.description),
    featureTransformationArn: __expectString(output.featureTransformationArn),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    recipeArn: __expectString(output.recipeArn),
    recipeType: __expectString(output.recipeType),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1Recipes
 */
const de_Recipes = (output: any, context: __SerdeContext): RecipeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecipeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecipeSummary
 */
const de_RecipeSummary = (output: any, context: __SerdeContext): RecipeSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    domain: __expectString(output.domain),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    recipeArn: __expectString(output.recipeArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1Recommender
 */
const de_Recommender = (output: any, context: __SerdeContext): Recommender => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    latestRecommenderUpdate:
      output.latestRecommenderUpdate != null
        ? de_RecommenderUpdateSummary(output.latestRecommenderUpdate, context)
        : undefined,
    modelMetrics: output.modelMetrics != null ? de_Metrics(output.modelMetrics, context) : undefined,
    name: __expectString(output.name),
    recipeArn: __expectString(output.recipeArn),
    recommenderArn: __expectString(output.recommenderArn),
    recommenderConfig:
      output.recommenderConfig != null ? de_RecommenderConfig(output.recommenderConfig, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1RecommenderConfig
 */
const de_RecommenderConfig = (output: any, context: __SerdeContext): RecommenderConfig => {
  return {
    itemExplorationConfig:
      output.itemExplorationConfig != null ? de_HyperParameters(output.itemExplorationConfig, context) : undefined,
    minRecommendationRequestsPerSecond: __expectInt32(output.minRecommendationRequestsPerSecond),
  } as any;
};

/**
 * deserializeAws_json1_1Recommenders
 */
const de_Recommenders = (output: any, context: __SerdeContext): RecommenderSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommenderSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecommenderSummary
 */
const de_RecommenderSummary = (output: any, context: __SerdeContext): RecommenderSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    recipeArn: __expectString(output.recipeArn),
    recommenderArn: __expectString(output.recommenderArn),
    recommenderConfig:
      output.recommenderConfig != null ? de_RecommenderConfig(output.recommenderConfig, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1RecommenderUpdateSummary
 */
const de_RecommenderUpdateSummary = (output: any, context: __SerdeContext): RecommenderUpdateSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    recommenderConfig:
      output.recommenderConfig != null ? de_RecommenderConfig(output.recommenderConfig, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsException
 */
const de_ResourceAlreadyExistsException = (output: any, context: __SerdeContext): ResourceAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceConfig
 */
const de_ResourceConfig = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1S3DataConfig
 */
const de_S3DataConfig = (output: any, context: __SerdeContext): S3DataConfig => {
  return {
    kmsKeyArn: __expectString(output.kmsKeyArn),
    path: __expectString(output.path),
  } as any;
};

/**
 * deserializeAws_json1_1Schemas
 */
const de_Schemas = (output: any, context: __SerdeContext): DatasetSchemaSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetSchemaSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Solution
 */
const de_Solution = (output: any, context: __SerdeContext): Solution => {
  return {
    autoMLResult: output.autoMLResult != null ? de_AutoMLResult(output.autoMLResult, context) : undefined,
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    eventType: __expectString(output.eventType),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    latestSolutionVersion:
      output.latestSolutionVersion != null
        ? de_SolutionVersionSummary(output.latestSolutionVersion, context)
        : undefined,
    name: __expectString(output.name),
    performAutoML: __expectBoolean(output.performAutoML),
    performHPO: __expectBoolean(output.performHPO),
    recipeArn: __expectString(output.recipeArn),
    solutionArn: __expectString(output.solutionArn),
    solutionConfig: output.solutionConfig != null ? de_SolutionConfig(output.solutionConfig, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1SolutionConfig
 */
const de_SolutionConfig = (output: any, context: __SerdeContext): SolutionConfig => {
  return {
    algorithmHyperParameters:
      output.algorithmHyperParameters != null
        ? de_HyperParameters(output.algorithmHyperParameters, context)
        : undefined,
    autoMLConfig: output.autoMLConfig != null ? de_AutoMLConfig(output.autoMLConfig, context) : undefined,
    eventValueThreshold: __expectString(output.eventValueThreshold),
    featureTransformationParameters:
      output.featureTransformationParameters != null
        ? de_FeatureTransformationParameters(output.featureTransformationParameters, context)
        : undefined,
    hpoConfig: output.hpoConfig != null ? de_HPOConfig(output.hpoConfig, context) : undefined,
    optimizationObjective:
      output.optimizationObjective != null
        ? de_OptimizationObjective(output.optimizationObjective, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Solutions
 */
const de_Solutions = (output: any, context: __SerdeContext): SolutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SolutionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SolutionSummary
 */
const de_SolutionSummary = (output: any, context: __SerdeContext): SolutionSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    recipeArn: __expectString(output.recipeArn),
    solutionArn: __expectString(output.solutionArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1SolutionVersion
 */
const de_SolutionVersion = (output: any, context: __SerdeContext): SolutionVersion => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    eventType: __expectString(output.eventType),
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    performAutoML: __expectBoolean(output.performAutoML),
    performHPO: __expectBoolean(output.performHPO),
    recipeArn: __expectString(output.recipeArn),
    solutionArn: __expectString(output.solutionArn),
    solutionConfig: output.solutionConfig != null ? de_SolutionConfig(output.solutionConfig, context) : undefined,
    solutionVersionArn: __expectString(output.solutionVersionArn),
    status: __expectString(output.status),
    trainingHours: __limitedParseDouble(output.trainingHours),
    trainingMode: __expectString(output.trainingMode),
    tunedHPOParams: output.tunedHPOParams != null ? de_TunedHPOParams(output.tunedHPOParams, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SolutionVersions
 */
const de_SolutionVersions = (output: any, context: __SerdeContext): SolutionVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SolutionVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SolutionVersionSummary
 */
const de_SolutionVersionSummary = (output: any, context: __SerdeContext): SolutionVersionSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    solutionVersionArn: __expectString(output.solutionVersionArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1StartRecommenderResponse
 */
const de_StartRecommenderResponse = (output: any, context: __SerdeContext): StartRecommenderResponse => {
  return {
    recommenderArn: __expectString(output.recommenderArn),
  } as any;
};

/**
 * deserializeAws_json1_1StopRecommenderResponse
 */
const de_StopRecommenderResponse = (output: any, context: __SerdeContext): StopRecommenderResponse => {
  return {
    recommenderArn: __expectString(output.recommenderArn),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    tagKey: __expectString(output.tagKey),
    tagValue: __expectString(output.tagValue),
  } as any;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TooManyTagKeysException
 */
const de_TooManyTagKeysException = (output: any, context: __SerdeContext): TooManyTagKeysException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TunedHPOParams
 */
const de_TunedHPOParams = (output: any, context: __SerdeContext): TunedHPOParams => {
  return {
    algorithmHyperParameters:
      output.algorithmHyperParameters != null
        ? de_HyperParameters(output.algorithmHyperParameters, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateCampaignResponse
 */
const de_UpdateCampaignResponse = (output: any, context: __SerdeContext): UpdateCampaignResponse => {
  return {
    campaignArn: __expectString(output.campaignArn),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateMetricAttributionResponse
 */
const de_UpdateMetricAttributionResponse = (output: any, context: __SerdeContext): UpdateMetricAttributionResponse => {
  return {
    metricAttributionArn: __expectString(output.metricAttributionArn),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateRecommenderResponse
 */
const de_UpdateRecommenderResponse = (output: any, context: __SerdeContext): UpdateRecommenderResponse => {
  return {
    recommenderArn: __expectString(output.recommenderArn),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AmazonPersonalize.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
