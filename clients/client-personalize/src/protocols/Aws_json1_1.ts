// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "../commands/UpdateDatasetCommand";
import {
  UpdateMetricAttributionCommandInput,
  UpdateMetricAttributionCommandOutput,
} from "../commands/UpdateMetricAttributionCommand";
import { UpdateRecommenderCommandInput, UpdateRecommenderCommandOutput } from "../commands/UpdateRecommenderCommand";
import {
  Algorithm,
  AutoMLConfig,
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
  CreateBatchSegmentJobRequest,
  CreateCampaignRequest,
  CreateDatasetExportJobRequest,
  CreateDatasetGroupRequest,
  CreateDatasetImportJobRequest,
  CreateDatasetRequest,
  CreateEventTrackerRequest,
  CreateFilterRequest,
  CreateMetricAttributionRequest,
  CreateRecommenderRequest,
  CreateSchemaRequest,
  CreateSolutionRequest,
  CreateSolutionVersionRequest,
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
  DatasetUpdateSummary,
  DataSource,
  DefaultContinuousHyperParameterRange,
  DefaultHyperParameterRanges,
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
  StopRecommenderRequest,
  StopSolutionVersionCreationRequest,
  Tag,
  TagResourceRequest,
  TooManyTagKeysException,
  TooManyTagsException,
  TrainingDataConfig,
  UntagResourceRequest,
  UpdateCampaignRequest,
  UpdateDatasetRequest,
  UpdateMetricAttributionRequest,
  UpdateRecommenderRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDatasetCommand
 */
export const se_UpdateDatasetCommand = async (
  input: UpdateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDataset");
  let body: any;
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: CreateBatchInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateBatchSegmentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDatasetExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateEventTrackerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateMetricAttributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateSolutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateSolutionVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListMetricAttributionMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDatasetCommand
 */
export const de_UpdateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDatasetCommandError
 */
const de_UpdateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateMetricAttributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_ArnList omitted.

// se_AutoMLConfig omitted.

// se_BatchInferenceJobConfig omitted.

// se_BatchInferenceJobInput omitted.

// se_BatchInferenceJobOutput omitted.

// se_BatchSegmentJobInput omitted.

// se_BatchSegmentJobOutput omitted.

// se_CampaignConfig omitted.

// se_CategoricalHyperParameterRange omitted.

// se_CategoricalHyperParameterRanges omitted.

// se_CategoricalValues omitted.

// se_ColumnNamesList omitted.

/**
 * serializeAws_json1_1ContinuousHyperParameterRange
 */
const se_ContinuousHyperParameterRange = (input: ContinuousHyperParameterRange, context: __SerdeContext): any => {
  return take(input, {
    maxValue: __serializeFloat,
    minValue: __serializeFloat,
    name: [],
  });
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

// se_CreateBatchInferenceJobRequest omitted.

// se_CreateBatchSegmentJobRequest omitted.

// se_CreateCampaignRequest omitted.

// se_CreateDatasetExportJobRequest omitted.

// se_CreateDatasetGroupRequest omitted.

// se_CreateDatasetImportJobRequest omitted.

// se_CreateDatasetRequest omitted.

// se_CreateEventTrackerRequest omitted.

// se_CreateFilterRequest omitted.

// se_CreateMetricAttributionRequest omitted.

// se_CreateRecommenderRequest omitted.

// se_CreateSchemaRequest omitted.

/**
 * serializeAws_json1_1CreateSolutionRequest
 */
const se_CreateSolutionRequest = (input: CreateSolutionRequest, context: __SerdeContext): any => {
  return take(input, {
    datasetGroupArn: [],
    eventType: [],
    name: [],
    performAutoML: [],
    performHPO: [],
    recipeArn: [],
    solutionConfig: (_) => se_SolutionConfig(_, context),
    tags: _json,
  });
};

// se_CreateSolutionVersionRequest omitted.

// se_DatasetExportJobOutput omitted.

// se_DataSource omitted.

// se_DeleteCampaignRequest omitted.

// se_DeleteDatasetGroupRequest omitted.

// se_DeleteDatasetRequest omitted.

// se_DeleteEventTrackerRequest omitted.

// se_DeleteFilterRequest omitted.

// se_DeleteMetricAttributionRequest omitted.

// se_DeleteRecommenderRequest omitted.

// se_DeleteSchemaRequest omitted.

// se_DeleteSolutionRequest omitted.

// se_DescribeAlgorithmRequest omitted.

// se_DescribeBatchInferenceJobRequest omitted.

// se_DescribeBatchSegmentJobRequest omitted.

// se_DescribeCampaignRequest omitted.

// se_DescribeDatasetExportJobRequest omitted.

// se_DescribeDatasetGroupRequest omitted.

// se_DescribeDatasetImportJobRequest omitted.

// se_DescribeDatasetRequest omitted.

// se_DescribeEventTrackerRequest omitted.

// se_DescribeFeatureTransformationRequest omitted.

// se_DescribeFilterRequest omitted.

// se_DescribeMetricAttributionRequest omitted.

// se_DescribeRecipeRequest omitted.

// se_DescribeRecommenderRequest omitted.

// se_DescribeSchemaRequest omitted.

// se_DescribeSolutionRequest omitted.

// se_DescribeSolutionVersionRequest omitted.

// se_ExcludedDatasetColumns omitted.

// se_FeatureTransformationParameters omitted.

// se_GetSolutionMetricsRequest omitted.

/**
 * serializeAws_json1_1HPOConfig
 */
const se_HPOConfig = (input: HPOConfig, context: __SerdeContext): any => {
  return take(input, {
    algorithmHyperParameterRanges: (_) => se_HyperParameterRanges(_, context),
    hpoObjective: _json,
    hpoResourceConfig: _json,
  });
};

// se_HPOObjective omitted.

// se_HPOResourceConfig omitted.

/**
 * serializeAws_json1_1HyperParameterRanges
 */
const se_HyperParameterRanges = (input: HyperParameterRanges, context: __SerdeContext): any => {
  return take(input, {
    categoricalHyperParameterRanges: _json,
    continuousHyperParameterRanges: (_) => se_ContinuousHyperParameterRanges(_, context),
    integerHyperParameterRanges: _json,
  });
};

// se_HyperParameters omitted.

// se_IntegerHyperParameterRange omitted.

// se_IntegerHyperParameterRanges omitted.

// se_ListBatchInferenceJobsRequest omitted.

// se_ListBatchSegmentJobsRequest omitted.

// se_ListCampaignsRequest omitted.

// se_ListDatasetExportJobsRequest omitted.

// se_ListDatasetGroupsRequest omitted.

// se_ListDatasetImportJobsRequest omitted.

// se_ListDatasetsRequest omitted.

// se_ListEventTrackersRequest omitted.

// se_ListFiltersRequest omitted.

// se_ListMetricAttributionMetricsRequest omitted.

// se_ListMetricAttributionsRequest omitted.

// se_ListRecipesRequest omitted.

// se_ListRecommendersRequest omitted.

// se_ListSchemasRequest omitted.

// se_ListSolutionsRequest omitted.

// se_ListSolutionVersionsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_MetricAttribute omitted.

// se_MetricAttributes omitted.

// se_MetricAttributesNamesList omitted.

// se_MetricAttributionOutput omitted.

// se_OptimizationObjective omitted.

// se_RecommenderConfig omitted.

// se_S3DataConfig omitted.

/**
 * serializeAws_json1_1SolutionConfig
 */
const se_SolutionConfig = (input: SolutionConfig, context: __SerdeContext): any => {
  return take(input, {
    algorithmHyperParameters: _json,
    autoMLConfig: _json,
    eventValueThreshold: [],
    featureTransformationParameters: _json,
    hpoConfig: (_) => se_HPOConfig(_, context),
    optimizationObjective: _json,
    trainingDataConfig: _json,
  });
};

// se_StartRecommenderRequest omitted.

// se_StopRecommenderRequest omitted.

// se_StopSolutionVersionCreationRequest omitted.

// se_Tag omitted.

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_TrainingDataConfig omitted.

// se_UntagResourceRequest omitted.

// se_UpdateCampaignRequest omitted.

// se_UpdateDatasetRequest omitted.

// se_UpdateMetricAttributionRequest omitted.

// se_UpdateRecommenderRequest omitted.

/**
 * deserializeAws_json1_1Algorithm
 */
const de_Algorithm = (output: any, context: __SerdeContext): Algorithm => {
  return take(output, {
    algorithmArn: __expectString,
    algorithmImage: _json,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultHyperParameterRanges: (_: any) => de_DefaultHyperParameterRanges(_, context),
    defaultHyperParameters: _json,
    defaultResourceConfig: _json,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    roleArn: __expectString,
    trainingInputMode: __expectString,
  }) as any;
};

// de_AlgorithmImage omitted.

// de_ArnList omitted.

// de_AutoMLConfig omitted.

// de_AutoMLResult omitted.

/**
 * deserializeAws_json1_1BatchInferenceJob
 */
const de_BatchInferenceJob = (output: any, context: __SerdeContext): BatchInferenceJob => {
  return take(output, {
    batchInferenceJobArn: __expectString,
    batchInferenceJobConfig: _json,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureReason: __expectString,
    filterArn: __expectString,
    jobInput: _json,
    jobName: __expectString,
    jobOutput: _json,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    numResults: __expectInt32,
    roleArn: __expectString,
    solutionVersionArn: __expectString,
    status: __expectString,
  }) as any;
};

// de_BatchInferenceJobConfig omitted.

// de_BatchInferenceJobInput omitted.

// de_BatchInferenceJobOutput omitted.

/**
 * deserializeAws_json1_1BatchInferenceJobs
 */
const de_BatchInferenceJobs = (output: any, context: __SerdeContext): BatchInferenceJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchInferenceJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchInferenceJobSummary
 */
const de_BatchInferenceJobSummary = (output: any, context: __SerdeContext): BatchInferenceJobSummary => {
  return take(output, {
    batchInferenceJobArn: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureReason: __expectString,
    jobName: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    solutionVersionArn: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchSegmentJob
 */
const de_BatchSegmentJob = (output: any, context: __SerdeContext): BatchSegmentJob => {
  return take(output, {
    batchSegmentJobArn: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureReason: __expectString,
    filterArn: __expectString,
    jobInput: _json,
    jobName: __expectString,
    jobOutput: _json,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    numResults: __expectInt32,
    roleArn: __expectString,
    solutionVersionArn: __expectString,
    status: __expectString,
  }) as any;
};

// de_BatchSegmentJobInput omitted.

// de_BatchSegmentJobOutput omitted.

/**
 * deserializeAws_json1_1BatchSegmentJobs
 */
const de_BatchSegmentJobs = (output: any, context: __SerdeContext): BatchSegmentJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchSegmentJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BatchSegmentJobSummary
 */
const de_BatchSegmentJobSummary = (output: any, context: __SerdeContext): BatchSegmentJobSummary => {
  return take(output, {
    batchSegmentJobArn: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureReason: __expectString,
    jobName: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    solutionVersionArn: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Campaign
 */
const de_Campaign = (output: any, context: __SerdeContext): Campaign => {
  return take(output, {
    campaignArn: __expectString,
    campaignConfig: _json,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureReason: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    latestCampaignUpdate: (_: any) => de_CampaignUpdateSummary(_, context),
    minProvisionedTPS: __expectInt32,
    name: __expectString,
    solutionVersionArn: __expectString,
    status: __expectString,
  }) as any;
};

// de_CampaignConfig omitted.

/**
 * deserializeAws_json1_1Campaigns
 */
const de_Campaigns = (output: any, context: __SerdeContext): CampaignSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CampaignSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CampaignSummary
 */
const de_CampaignSummary = (output: any, context: __SerdeContext): CampaignSummary => {
  return take(output, {
    campaignArn: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureReason: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CampaignUpdateSummary
 */
const de_CampaignUpdateSummary = (output: any, context: __SerdeContext): CampaignUpdateSummary => {
  return take(output, {
    campaignConfig: _json,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureReason: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    minProvisionedTPS: __expectInt32,
    solutionVersionArn: __expectString,
    status: __expectString,
  }) as any;
};

// de_CategoricalHyperParameterRange omitted.

// de_CategoricalHyperParameterRanges omitted.

// de_CategoricalValues omitted.

// de_ColumnNamesList omitted.

/**
 * deserializeAws_json1_1ContinuousHyperParameterRange
 */
const de_ContinuousHyperParameterRange = (output: any, context: __SerdeContext): ContinuousHyperParameterRange => {
  return take(output, {
    maxValue: __limitedParseDouble,
    minValue: __limitedParseDouble,
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ContinuousHyperParameterRanges
 */
const de_ContinuousHyperParameterRanges = (output: any, context: __SerdeContext): ContinuousHyperParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContinuousHyperParameterRange(entry, context);
    });
  return retVal;
};

// de_CreateBatchInferenceJobResponse omitted.

// de_CreateBatchSegmentJobResponse omitted.

// de_CreateCampaignResponse omitted.

// de_CreateDatasetExportJobResponse omitted.

// de_CreateDatasetGroupResponse omitted.

// de_CreateDatasetImportJobResponse omitted.

// de_CreateDatasetResponse omitted.

// de_CreateEventTrackerResponse omitted.

// de_CreateFilterResponse omitted.

// de_CreateMetricAttributionResponse omitted.

// de_CreateRecommenderResponse omitted.

// de_CreateSchemaResponse omitted.

// de_CreateSolutionResponse omitted.

// de_CreateSolutionVersionResponse omitted.

/**
 * deserializeAws_json1_1Dataset
 */
const de_Dataset = (output: any, context: __SerdeContext): Dataset => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetArn: __expectString,
    datasetGroupArn: __expectString,
    datasetType: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    latestDatasetUpdate: (_: any) => de_DatasetUpdateSummary(_, context),
    name: __expectString,
    schemaArn: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DatasetExportJob
 */
const de_DatasetExportJob = (output: any, context: __SerdeContext): DatasetExportJob => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetArn: __expectString,
    datasetExportJobArn: __expectString,
    failureReason: __expectString,
    ingestionMode: __expectString,
    jobName: __expectString,
    jobOutput: _json,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    roleArn: __expectString,
    status: __expectString,
  }) as any;
};

// de_DatasetExportJobOutput omitted.

/**
 * deserializeAws_json1_1DatasetExportJobs
 */
const de_DatasetExportJobs = (output: any, context: __SerdeContext): DatasetExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatasetExportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetExportJobSummary
 */
const de_DatasetExportJobSummary = (output: any, context: __SerdeContext): DatasetExportJobSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetExportJobArn: __expectString,
    failureReason: __expectString,
    jobName: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DatasetGroup
 */
const de_DatasetGroup = (output: any, context: __SerdeContext): DatasetGroup => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetGroupArn: __expectString,
    domain: __expectString,
    failureReason: __expectString,
    kmsKeyArn: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    roleArn: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DatasetGroups
 */
const de_DatasetGroups = (output: any, context: __SerdeContext): DatasetGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatasetGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetGroupSummary
 */
const de_DatasetGroupSummary = (output: any, context: __SerdeContext): DatasetGroupSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetGroupArn: __expectString,
    domain: __expectString,
    failureReason: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DatasetImportJob
 */
const de_DatasetImportJob = (output: any, context: __SerdeContext): DatasetImportJob => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataSource: _json,
    datasetArn: __expectString,
    datasetImportJobArn: __expectString,
    failureReason: __expectString,
    importMode: __expectString,
    jobName: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    publishAttributionMetricsToS3: __expectBoolean,
    roleArn: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DatasetImportJobs
 */
const de_DatasetImportJobs = (output: any, context: __SerdeContext): DatasetImportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatasetImportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetImportJobSummary
 */
const de_DatasetImportJobSummary = (output: any, context: __SerdeContext): DatasetImportJobSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetImportJobArn: __expectString,
    failureReason: __expectString,
    importMode: __expectString,
    jobName: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Datasets
 */
const de_Datasets = (output: any, context: __SerdeContext): DatasetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatasetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetSchema
 */
const de_DatasetSchema = (output: any, context: __SerdeContext): DatasetSchema => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    domain: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    schema: __expectString,
    schemaArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DatasetSchemaSummary
 */
const de_DatasetSchemaSummary = (output: any, context: __SerdeContext): DatasetSchemaSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    domain: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    schemaArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DatasetSummary
 */
const de_DatasetSummary = (output: any, context: __SerdeContext): DatasetSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetArn: __expectString,
    datasetType: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DatasetUpdateSummary
 */
const de_DatasetUpdateSummary = (output: any, context: __SerdeContext): DatasetUpdateSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureReason: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    schemaArn: __expectString,
    status: __expectString,
  }) as any;
};

// de_DataSource omitted.

// de_DefaultCategoricalHyperParameterRange omitted.

// de_DefaultCategoricalHyperParameterRanges omitted.

/**
 * deserializeAws_json1_1DefaultContinuousHyperParameterRange
 */
const de_DefaultContinuousHyperParameterRange = (
  output: any,
  context: __SerdeContext
): DefaultContinuousHyperParameterRange => {
  return take(output, {
    isTunable: __expectBoolean,
    maxValue: __limitedParseDouble,
    minValue: __limitedParseDouble,
    name: __expectString,
  }) as any;
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
      return de_DefaultContinuousHyperParameterRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DefaultHyperParameterRanges
 */
const de_DefaultHyperParameterRanges = (output: any, context: __SerdeContext): DefaultHyperParameterRanges => {
  return take(output, {
    categoricalHyperParameterRanges: _json,
    continuousHyperParameterRanges: (_: any) => de_DefaultContinuousHyperParameterRanges(_, context),
    integerHyperParameterRanges: _json,
  }) as any;
};

// de_DefaultIntegerHyperParameterRange omitted.

// de_DefaultIntegerHyperParameterRanges omitted.

/**
 * deserializeAws_json1_1DescribeAlgorithmResponse
 */
const de_DescribeAlgorithmResponse = (output: any, context: __SerdeContext): DescribeAlgorithmResponse => {
  return take(output, {
    algorithm: (_: any) => de_Algorithm(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeBatchInferenceJobResponse
 */
const de_DescribeBatchInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeBatchInferenceJobResponse => {
  return take(output, {
    batchInferenceJob: (_: any) => de_BatchInferenceJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeBatchSegmentJobResponse
 */
const de_DescribeBatchSegmentJobResponse = (output: any, context: __SerdeContext): DescribeBatchSegmentJobResponse => {
  return take(output, {
    batchSegmentJob: (_: any) => de_BatchSegmentJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeCampaignResponse
 */
const de_DescribeCampaignResponse = (output: any, context: __SerdeContext): DescribeCampaignResponse => {
  return take(output, {
    campaign: (_: any) => de_Campaign(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetExportJobResponse
 */
const de_DescribeDatasetExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetExportJobResponse => {
  return take(output, {
    datasetExportJob: (_: any) => de_DatasetExportJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetGroupResponse
 */
const de_DescribeDatasetGroupResponse = (output: any, context: __SerdeContext): DescribeDatasetGroupResponse => {
  return take(output, {
    datasetGroup: (_: any) => de_DatasetGroup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetImportJobResponse
 */
const de_DescribeDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetImportJobResponse => {
  return take(output, {
    datasetImportJob: (_: any) => de_DatasetImportJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetResponse
 */
const de_DescribeDatasetResponse = (output: any, context: __SerdeContext): DescribeDatasetResponse => {
  return take(output, {
    dataset: (_: any) => de_Dataset(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEventTrackerResponse
 */
const de_DescribeEventTrackerResponse = (output: any, context: __SerdeContext): DescribeEventTrackerResponse => {
  return take(output, {
    eventTracker: (_: any) => de_EventTracker(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeFeatureTransformationResponse
 */
const de_DescribeFeatureTransformationResponse = (
  output: any,
  context: __SerdeContext
): DescribeFeatureTransformationResponse => {
  return take(output, {
    featureTransformation: (_: any) => de_FeatureTransformation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeFilterResponse
 */
const de_DescribeFilterResponse = (output: any, context: __SerdeContext): DescribeFilterResponse => {
  return take(output, {
    filter: (_: any) => de_Filter(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeMetricAttributionResponse
 */
const de_DescribeMetricAttributionResponse = (
  output: any,
  context: __SerdeContext
): DescribeMetricAttributionResponse => {
  return take(output, {
    metricAttribution: (_: any) => de_MetricAttribution(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeRecipeResponse
 */
const de_DescribeRecipeResponse = (output: any, context: __SerdeContext): DescribeRecipeResponse => {
  return take(output, {
    recipe: (_: any) => de_Recipe(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeRecommenderResponse
 */
const de_DescribeRecommenderResponse = (output: any, context: __SerdeContext): DescribeRecommenderResponse => {
  return take(output, {
    recommender: (_: any) => de_Recommender(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeSchemaResponse
 */
const de_DescribeSchemaResponse = (output: any, context: __SerdeContext): DescribeSchemaResponse => {
  return take(output, {
    schema: (_: any) => de_DatasetSchema(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeSolutionResponse
 */
const de_DescribeSolutionResponse = (output: any, context: __SerdeContext): DescribeSolutionResponse => {
  return take(output, {
    solution: (_: any) => de_Solution(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeSolutionVersionResponse
 */
const de_DescribeSolutionVersionResponse = (output: any, context: __SerdeContext): DescribeSolutionVersionResponse => {
  return take(output, {
    solutionVersion: (_: any) => de_SolutionVersion(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1EventTracker
 */
const de_EventTracker = (output: any, context: __SerdeContext): EventTracker => {
  return take(output, {
    accountId: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetGroupArn: __expectString,
    eventTrackerArn: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
    trackingId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EventTrackers
 */
const de_EventTrackers = (output: any, context: __SerdeContext): EventTrackerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EventTrackerSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventTrackerSummary
 */
const de_EventTrackerSummary = (output: any, context: __SerdeContext): EventTrackerSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    eventTrackerArn: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_ExcludedDatasetColumns omitted.

/**
 * deserializeAws_json1_1FeatureTransformation
 */
const de_FeatureTransformation = (output: any, context: __SerdeContext): FeatureTransformation => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultParameters: _json,
    featureTransformationArn: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_FeatureTransformationParameters omitted.

// de_FeaturizationParameters omitted.

/**
 * deserializeAws_json1_1Filter
 */
const de_Filter = (output: any, context: __SerdeContext): Filter => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetGroupArn: __expectString,
    failureReason: __expectString,
    filterArn: __expectString,
    filterExpression: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Filters
 */
const de_Filters = (output: any, context: __SerdeContext): FilterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FilterSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FilterSummary
 */
const de_FilterSummary = (output: any, context: __SerdeContext): FilterSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetGroupArn: __expectString,
    failureReason: __expectString,
    filterArn: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetSolutionMetricsResponse
 */
const de_GetSolutionMetricsResponse = (output: any, context: __SerdeContext): GetSolutionMetricsResponse => {
  return take(output, {
    metrics: (_: any) => de_Metrics(_, context),
    solutionVersionArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HPOConfig
 */
const de_HPOConfig = (output: any, context: __SerdeContext): HPOConfig => {
  return take(output, {
    algorithmHyperParameterRanges: (_: any) => de_HyperParameterRanges(_, context),
    hpoObjective: _json,
    hpoResourceConfig: _json,
  }) as any;
};

// de_HPOObjective omitted.

// de_HPOResourceConfig omitted.

/**
 * deserializeAws_json1_1HyperParameterRanges
 */
const de_HyperParameterRanges = (output: any, context: __SerdeContext): HyperParameterRanges => {
  return take(output, {
    categoricalHyperParameterRanges: _json,
    continuousHyperParameterRanges: (_: any) => de_ContinuousHyperParameterRanges(_, context),
    integerHyperParameterRanges: _json,
  }) as any;
};

// de_HyperParameters omitted.

// de_IntegerHyperParameterRange omitted.

// de_IntegerHyperParameterRanges omitted.

// de_InvalidInputException omitted.

// de_InvalidNextTokenException omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListBatchInferenceJobsResponse
 */
const de_ListBatchInferenceJobsResponse = (output: any, context: __SerdeContext): ListBatchInferenceJobsResponse => {
  return take(output, {
    batchInferenceJobs: (_: any) => de_BatchInferenceJobs(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListBatchSegmentJobsResponse
 */
const de_ListBatchSegmentJobsResponse = (output: any, context: __SerdeContext): ListBatchSegmentJobsResponse => {
  return take(output, {
    batchSegmentJobs: (_: any) => de_BatchSegmentJobs(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListCampaignsResponse
 */
const de_ListCampaignsResponse = (output: any, context: __SerdeContext): ListCampaignsResponse => {
  return take(output, {
    campaigns: (_: any) => de_Campaigns(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDatasetExportJobsResponse
 */
const de_ListDatasetExportJobsResponse = (output: any, context: __SerdeContext): ListDatasetExportJobsResponse => {
  return take(output, {
    datasetExportJobs: (_: any) => de_DatasetExportJobs(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDatasetGroupsResponse
 */
const de_ListDatasetGroupsResponse = (output: any, context: __SerdeContext): ListDatasetGroupsResponse => {
  return take(output, {
    datasetGroups: (_: any) => de_DatasetGroups(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDatasetImportJobsResponse
 */
const de_ListDatasetImportJobsResponse = (output: any, context: __SerdeContext): ListDatasetImportJobsResponse => {
  return take(output, {
    datasetImportJobs: (_: any) => de_DatasetImportJobs(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDatasetsResponse
 */
const de_ListDatasetsResponse = (output: any, context: __SerdeContext): ListDatasetsResponse => {
  return take(output, {
    datasets: (_: any) => de_Datasets(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEventTrackersResponse
 */
const de_ListEventTrackersResponse = (output: any, context: __SerdeContext): ListEventTrackersResponse => {
  return take(output, {
    eventTrackers: (_: any) => de_EventTrackers(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListFiltersResponse
 */
const de_ListFiltersResponse = (output: any, context: __SerdeContext): ListFiltersResponse => {
  return take(output, {
    Filters: (_: any) => de_Filters(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_ListMetricAttributionMetricsResponse omitted.

/**
 * deserializeAws_json1_1ListMetricAttributionsResponse
 */
const de_ListMetricAttributionsResponse = (output: any, context: __SerdeContext): ListMetricAttributionsResponse => {
  return take(output, {
    metricAttributions: (_: any) => de_MetricAttributions(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListRecipesResponse
 */
const de_ListRecipesResponse = (output: any, context: __SerdeContext): ListRecipesResponse => {
  return take(output, {
    nextToken: __expectString,
    recipes: (_: any) => de_Recipes(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListRecommendersResponse
 */
const de_ListRecommendersResponse = (output: any, context: __SerdeContext): ListRecommendersResponse => {
  return take(output, {
    nextToken: __expectString,
    recommenders: (_: any) => de_Recommenders(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListSchemasResponse
 */
const de_ListSchemasResponse = (output: any, context: __SerdeContext): ListSchemasResponse => {
  return take(output, {
    nextToken: __expectString,
    schemas: (_: any) => de_Schemas(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListSolutionsResponse
 */
const de_ListSolutionsResponse = (output: any, context: __SerdeContext): ListSolutionsResponse => {
  return take(output, {
    nextToken: __expectString,
    solutions: (_: any) => de_Solutions(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListSolutionVersionsResponse
 */
const de_ListSolutionVersionsResponse = (output: any, context: __SerdeContext): ListSolutionVersionsResponse => {
  return take(output, {
    nextToken: __expectString,
    solutionVersions: (_: any) => de_SolutionVersions(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

// de_MetricAttribute omitted.

// de_MetricAttributes omitted.

/**
 * deserializeAws_json1_1MetricAttribution
 */
const de_MetricAttribution = (output: any, context: __SerdeContext): MetricAttribution => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetGroupArn: __expectString,
    failureReason: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    metricAttributionArn: __expectString,
    metricsOutputConfig: _json,
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_MetricAttributionOutput omitted.

/**
 * deserializeAws_json1_1MetricAttributions
 */
const de_MetricAttributions = (output: any, context: __SerdeContext): MetricAttributionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricAttributionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricAttributionSummary
 */
const de_MetricAttributionSummary = (output: any, context: __SerdeContext): MetricAttributionSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureReason: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    metricAttributionArn: __expectString,
    name: __expectString,
    status: __expectString,
  }) as any;
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

// de_OptimizationObjective omitted.

/**
 * deserializeAws_json1_1Recipe
 */
const de_Recipe = (output: any, context: __SerdeContext): Recipe => {
  return take(output, {
    algorithmArn: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    featureTransformationArn: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    recipeArn: __expectString,
    recipeType: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Recipes
 */
const de_Recipes = (output: any, context: __SerdeContext): RecipeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecipeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecipeSummary
 */
const de_RecipeSummary = (output: any, context: __SerdeContext): RecipeSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    domain: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    recipeArn: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Recommender
 */
const de_Recommender = (output: any, context: __SerdeContext): Recommender => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetGroupArn: __expectString,
    failureReason: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    latestRecommenderUpdate: (_: any) => de_RecommenderUpdateSummary(_, context),
    modelMetrics: (_: any) => de_Metrics(_, context),
    name: __expectString,
    recipeArn: __expectString,
    recommenderArn: __expectString,
    recommenderConfig: _json,
    status: __expectString,
  }) as any;
};

// de_RecommenderConfig omitted.

/**
 * deserializeAws_json1_1Recommenders
 */
const de_Recommenders = (output: any, context: __SerdeContext): RecommenderSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecommenderSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecommenderSummary
 */
const de_RecommenderSummary = (output: any, context: __SerdeContext): RecommenderSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetGroupArn: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    recipeArn: __expectString,
    recommenderArn: __expectString,
    recommenderConfig: _json,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RecommenderUpdateSummary
 */
const de_RecommenderUpdateSummary = (output: any, context: __SerdeContext): RecommenderUpdateSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureReason: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    recommenderConfig: _json,
    status: __expectString,
  }) as any;
};

// de_ResourceAlreadyExistsException omitted.

// de_ResourceConfig omitted.

// de_ResourceInUseException omitted.

// de_ResourceNotFoundException omitted.

// de_S3DataConfig omitted.

/**
 * deserializeAws_json1_1Schemas
 */
const de_Schemas = (output: any, context: __SerdeContext): DatasetSchemaSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatasetSchemaSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Solution
 */
const de_Solution = (output: any, context: __SerdeContext): Solution => {
  return take(output, {
    autoMLResult: _json,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetGroupArn: __expectString,
    eventType: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    latestSolutionVersion: (_: any) => de_SolutionVersionSummary(_, context),
    name: __expectString,
    performAutoML: __expectBoolean,
    performHPO: __expectBoolean,
    recipeArn: __expectString,
    solutionArn: __expectString,
    solutionConfig: (_: any) => de_SolutionConfig(_, context),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SolutionConfig
 */
const de_SolutionConfig = (output: any, context: __SerdeContext): SolutionConfig => {
  return take(output, {
    algorithmHyperParameters: _json,
    autoMLConfig: _json,
    eventValueThreshold: __expectString,
    featureTransformationParameters: _json,
    hpoConfig: (_: any) => de_HPOConfig(_, context),
    optimizationObjective: _json,
    trainingDataConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1Solutions
 */
const de_Solutions = (output: any, context: __SerdeContext): SolutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SolutionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SolutionSummary
 */
const de_SolutionSummary = (output: any, context: __SerdeContext): SolutionSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    recipeArn: __expectString,
    solutionArn: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SolutionVersion
 */
const de_SolutionVersion = (output: any, context: __SerdeContext): SolutionVersion => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    datasetGroupArn: __expectString,
    eventType: __expectString,
    failureReason: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    performAutoML: __expectBoolean,
    performHPO: __expectBoolean,
    recipeArn: __expectString,
    solutionArn: __expectString,
    solutionConfig: (_: any) => de_SolutionConfig(_, context),
    solutionVersionArn: __expectString,
    status: __expectString,
    trainingHours: __limitedParseDouble,
    trainingMode: __expectString,
    tunedHPOParams: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1SolutionVersions
 */
const de_SolutionVersions = (output: any, context: __SerdeContext): SolutionVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SolutionVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SolutionVersionSummary
 */
const de_SolutionVersionSummary = (output: any, context: __SerdeContext): SolutionVersionSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureReason: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    solutionVersionArn: __expectString,
    status: __expectString,
  }) as any;
};

// de_StartRecommenderResponse omitted.

// de_StopRecommenderResponse omitted.

// de_Tag omitted.

// de_TagResourceResponse omitted.

// de_Tags omitted.

// de_TooManyTagKeysException omitted.

// de_TooManyTagsException omitted.

// de_TrainingDataConfig omitted.

// de_TunedHPOParams omitted.

// de_UntagResourceResponse omitted.

// de_UpdateCampaignResponse omitted.

// de_UpdateDatasetResponse omitted.

// de_UpdateMetricAttributionResponse omitted.

// de_UpdateRecommenderResponse omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
