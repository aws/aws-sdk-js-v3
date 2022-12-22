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

export const serializeAws_json1_1CreateBatchInferenceJobCommand = async (
  input: CreateBatchInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.CreateBatchInferenceJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBatchInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBatchSegmentJobCommand = async (
  input: CreateBatchSegmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.CreateBatchSegmentJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBatchSegmentJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCampaignCommand = async (
  input: CreateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.CreateCampaign",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.CreateDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDatasetExportJobCommand = async (
  input: CreateDatasetExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.CreateDatasetExportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDatasetExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDatasetGroupCommand = async (
  input: CreateDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.CreateDatasetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDatasetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDatasetImportJobCommand = async (
  input: CreateDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.CreateDatasetImportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDatasetImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEventTrackerCommand = async (
  input: CreateEventTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.CreateEventTracker",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateEventTrackerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateFilterCommand = async (
  input: CreateFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.CreateFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateMetricAttributionCommand = async (
  input: CreateMetricAttributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.CreateMetricAttribution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateMetricAttributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRecommenderCommand = async (
  input: CreateRecommenderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.CreateRecommender",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRecommenderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSchemaCommand = async (
  input: CreateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.CreateSchema",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSchemaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSolutionCommand = async (
  input: CreateSolutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.CreateSolution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSolutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSolutionVersionCommand = async (
  input: CreateSolutionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.CreateSolutionVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSolutionVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCampaignCommand = async (
  input: DeleteCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DeleteCampaign",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DeleteDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDatasetGroupCommand = async (
  input: DeleteDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DeleteDatasetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDatasetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEventTrackerCommand = async (
  input: DeleteEventTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DeleteEventTracker",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEventTrackerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFilterCommand = async (
  input: DeleteFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DeleteFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMetricAttributionCommand = async (
  input: DeleteMetricAttributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DeleteMetricAttribution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMetricAttributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRecommenderCommand = async (
  input: DeleteRecommenderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DeleteRecommender",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRecommenderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSchemaCommand = async (
  input: DeleteSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DeleteSchema",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSchemaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSolutionCommand = async (
  input: DeleteSolutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DeleteSolution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSolutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAlgorithmCommand = async (
  input: DescribeAlgorithmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeAlgorithm",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAlgorithmRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBatchInferenceJobCommand = async (
  input: DescribeBatchInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeBatchInferenceJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBatchInferenceJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBatchSegmentJobCommand = async (
  input: DescribeBatchSegmentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeBatchSegmentJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBatchSegmentJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCampaignCommand = async (
  input: DescribeCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeCampaign",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDatasetExportJobCommand = async (
  input: DescribeDatasetExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeDatasetExportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDatasetExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDatasetGroupCommand = async (
  input: DescribeDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeDatasetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDatasetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDatasetImportJobCommand = async (
  input: DescribeDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeDatasetImportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDatasetImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventTrackerCommand = async (
  input: DescribeEventTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeEventTracker",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEventTrackerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFeatureTransformationCommand = async (
  input: DescribeFeatureTransformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeFeatureTransformation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFeatureTransformationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFilterCommand = async (
  input: DescribeFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeFilter",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFilterRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMetricAttributionCommand = async (
  input: DescribeMetricAttributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeMetricAttribution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMetricAttributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRecipeCommand = async (
  input: DescribeRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeRecipe",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRecipeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRecommenderCommand = async (
  input: DescribeRecommenderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeRecommender",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeRecommenderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSchemaCommand = async (
  input: DescribeSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeSchema",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSchemaRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSolutionCommand = async (
  input: DescribeSolutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeSolution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSolutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSolutionVersionCommand = async (
  input: DescribeSolutionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.DescribeSolutionVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSolutionVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSolutionMetricsCommand = async (
  input: GetSolutionMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.GetSolutionMetrics",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSolutionMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBatchInferenceJobsCommand = async (
  input: ListBatchInferenceJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListBatchInferenceJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListBatchInferenceJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBatchSegmentJobsCommand = async (
  input: ListBatchSegmentJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListBatchSegmentJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListBatchSegmentJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCampaignsCommand = async (
  input: ListCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListCampaigns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListCampaignsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatasetExportJobsCommand = async (
  input: ListDatasetExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListDatasetExportJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDatasetExportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatasetGroupsCommand = async (
  input: ListDatasetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListDatasetGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDatasetGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatasetImportJobsCommand = async (
  input: ListDatasetImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListDatasetImportJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDatasetImportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListDatasets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDatasetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEventTrackersCommand = async (
  input: ListEventTrackersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListEventTrackers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListEventTrackersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListFiltersCommand = async (
  input: ListFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListFilters",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListFiltersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMetricAttributionMetricsCommand = async (
  input: ListMetricAttributionMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListMetricAttributionMetrics",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMetricAttributionMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMetricAttributionsCommand = async (
  input: ListMetricAttributionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListMetricAttributions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMetricAttributionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRecipesCommand = async (
  input: ListRecipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListRecipes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRecipesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRecommendersCommand = async (
  input: ListRecommendersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListRecommenders",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRecommendersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSchemasCommand = async (
  input: ListSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListSchemas",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSchemasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSolutionsCommand = async (
  input: ListSolutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListSolutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSolutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSolutionVersionsCommand = async (
  input: ListSolutionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListSolutionVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSolutionVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartRecommenderCommand = async (
  input: StartRecommenderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.StartRecommender",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartRecommenderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopRecommenderCommand = async (
  input: StopRecommenderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.StopRecommender",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopRecommenderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopSolutionVersionCreationCommand = async (
  input: StopSolutionVersionCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.StopSolutionVersionCreation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopSolutionVersionCreationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCampaignCommand = async (
  input: UpdateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.UpdateCampaign",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateCampaignRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMetricAttributionCommand = async (
  input: UpdateMetricAttributionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.UpdateMetricAttribution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMetricAttributionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateRecommenderCommand = async (
  input: UpdateRecommenderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonPersonalize.UpdateRecommender",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateRecommenderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateBatchInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBatchInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBatchInferenceJobResponse(data, context);
  const response: CreateBatchInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBatchInferenceJobCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateBatchSegmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchSegmentJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBatchSegmentJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBatchSegmentJobResponse(data, context);
  const response: CreateBatchSegmentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBatchSegmentJobCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCampaignResponse(data, context);
  const response: CreateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCampaignCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDatasetResponse(data, context);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDatasetCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDatasetExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDatasetExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDatasetExportJobResponse(data, context);
  const response: CreateDatasetExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDatasetExportJobCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDatasetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDatasetGroupResponse(data, context);
  const response: CreateDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDatasetGroupCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDatasetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDatasetImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDatasetImportJobResponse(data, context);
  const response: CreateDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDatasetImportJobCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateEventTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventTrackerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateEventTrackerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEventTrackerResponse(data, context);
  const response: CreateEventTrackerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEventTrackerCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFilterResponse(data, context);
  const response: CreateFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateFilterCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateMetricAttributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMetricAttributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateMetricAttributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMetricAttributionResponse(data, context);
  const response: CreateMetricAttributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateMetricAttributionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateRecommenderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecommenderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRecommenderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRecommenderResponse(data, context);
  const response: CreateRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRecommenderCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSchemaResponse(data, context);
  const response: CreateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSchemaCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateSolutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSolutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSolutionResponse(data, context);
  const response: CreateSolutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSolutionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateSolutionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolutionVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSolutionVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSolutionVersionResponse(data, context);
  const response: CreateSolutionVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSolutionVersionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteCampaignCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCampaignCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDatasetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDatasetCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDatasetGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDatasetGroupCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteEventTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventTrackerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEventTrackerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEventTrackerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEventTrackerCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFilterCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFilterCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteMetricAttributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricAttributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMetricAttributionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMetricAttributionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMetricAttributionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteRecommenderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecommenderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRecommenderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRecommenderCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSchemaCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSchemaCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteSolutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSolutionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSolutionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSolutionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeAlgorithmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlgorithmCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAlgorithmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAlgorithmResponse(data, context);
  const response: DescribeAlgorithmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAlgorithmCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeBatchInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchInferenceJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBatchInferenceJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBatchInferenceJobResponse(data, context);
  const response: DescribeBatchInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBatchInferenceJobCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeBatchSegmentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchSegmentJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBatchSegmentJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBatchSegmentJobResponse(data, context);
  const response: DescribeBatchSegmentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBatchSegmentJobCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCampaignResponse(data, context);
  const response: DescribeCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCampaignCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDatasetResponse(data, context);
  const response: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDatasetCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDatasetExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDatasetExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDatasetExportJobResponse(data, context);
  const response: DescribeDatasetExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDatasetExportJobCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDatasetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDatasetGroupResponse(data, context);
  const response: DescribeDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDatasetGroupCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDatasetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDatasetImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDatasetImportJobResponse(data, context);
  const response: DescribeDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDatasetImportJobCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEventTrackerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTrackerCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEventTrackerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventTrackerResponse(data, context);
  const response: DescribeEventTrackerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventTrackerCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFeatureTransformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeatureTransformationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFeatureTransformationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFeatureTransformationResponse(data, context);
  const response: DescribeFeatureTransformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFeatureTransformationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFilterCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFilterResponse(data, context);
  const response: DescribeFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFilterCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMetricAttributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricAttributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMetricAttributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMetricAttributionResponse(data, context);
  const response: DescribeMetricAttributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMetricAttributionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecipeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRecipeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRecipeResponse(data, context);
  const response: DescribeRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRecipeCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeRecommenderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecommenderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeRecommenderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRecommenderResponse(data, context);
  const response: DescribeRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRecommenderCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSchemaResponse(data, context);
  const response: DescribeSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSchemaCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeSolutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSolutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSolutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSolutionResponse(data, context);
  const response: DescribeSolutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSolutionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeSolutionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSolutionVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSolutionVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSolutionVersionResponse(data, context);
  const response: DescribeSolutionVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSolutionVersionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetSolutionMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolutionMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSolutionMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSolutionMetricsResponse(data, context);
  const response: GetSolutionMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSolutionMetricsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListBatchInferenceJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchInferenceJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBatchInferenceJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBatchInferenceJobsResponse(data, context);
  const response: ListBatchInferenceJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBatchInferenceJobsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListBatchSegmentJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchSegmentJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListBatchSegmentJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBatchSegmentJobsResponse(data, context);
  const response: ListBatchSegmentJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBatchSegmentJobsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListCampaignsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCampaignsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListCampaignsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCampaignsResponse(data, context);
  const response: ListCampaignsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCampaignsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDatasetExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetExportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDatasetExportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDatasetExportJobsResponse(data, context);
  const response: ListDatasetExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDatasetExportJobsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDatasetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDatasetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDatasetGroupsResponse(data, context);
  const response: ListDatasetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDatasetGroupsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDatasetImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetImportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDatasetImportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDatasetImportJobsResponse(data, context);
  const response: ListDatasetImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDatasetImportJobsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDatasetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDatasetsResponse(data, context);
  const response: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDatasetsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListEventTrackersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventTrackersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListEventTrackersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventTrackersResponse(data, context);
  const response: ListEventTrackersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEventTrackersCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFiltersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListFiltersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListFiltersResponse(data, context);
  const response: ListFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListFiltersCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListMetricAttributionMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricAttributionMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMetricAttributionMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMetricAttributionMetricsResponse(data, context);
  const response: ListMetricAttributionMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMetricAttributionMetricsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListMetricAttributionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricAttributionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMetricAttributionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMetricAttributionsResponse(data, context);
  const response: ListMetricAttributionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMetricAttributionsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListRecipesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecipesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRecipesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRecipesResponse(data, context);
  const response: ListRecipesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRecipesCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListRecommendersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRecommendersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRecommendersResponse(data, context);
  const response: ListRecommendersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRecommendersCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSchemasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSchemasResponse(data, context);
  const response: ListSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSchemasCommandError = async (
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
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListSolutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSolutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSolutionsResponse(data, context);
  const response: ListSolutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSolutionsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListSolutionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolutionVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSolutionVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSolutionVersionsResponse(data, context);
  const response: ListSolutionVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSolutionVersionsCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartRecommenderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRecommenderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartRecommenderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartRecommenderResponse(data, context);
  const response: StartRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartRecommenderCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopRecommenderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRecommenderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopRecommenderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopRecommenderResponse(data, context);
  const response: StopRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopRecommenderCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopSolutionVersionCreationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopSolutionVersionCreationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopSolutionVersionCreationCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopSolutionVersionCreationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopSolutionVersionCreationCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.personalize#TooManyTagsException":
      throw await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TooManyTagKeysException":
    case "com.amazonaws.personalize#TooManyTagKeysException":
      throw await deserializeAws_json1_1TooManyTagKeysExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateCampaignCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCampaignResponse(data, context);
  const response: UpdateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCampaignCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateMetricAttributionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMetricAttributionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateMetricAttributionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMetricAttributionResponse(data, context);
  const response: UpdateMetricAttributionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMetricAttributionCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateRecommenderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecommenderCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateRecommenderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateRecommenderResponse(data, context);
  const response: UpdateRecommenderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateRecommenderCommandError = async (
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
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagKeysExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagKeysException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagKeysException(body, context);
  const exception = new TooManyTagKeysException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AutoMLConfig = (input: AutoMLConfig, context: __SerdeContext): any => {
  return {
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.recipeList != null && { recipeList: serializeAws_json1_1ArnList(input.recipeList, context) }),
  };
};

const serializeAws_json1_1BatchInferenceJobConfig = (input: BatchInferenceJobConfig, context: __SerdeContext): any => {
  return {
    ...(input.itemExplorationConfig != null && {
      itemExplorationConfig: serializeAws_json1_1HyperParameters(input.itemExplorationConfig, context),
    }),
  };
};

const serializeAws_json1_1BatchInferenceJobInput = (input: BatchInferenceJobInput, context: __SerdeContext): any => {
  return {
    ...(input.s3DataSource != null && { s3DataSource: serializeAws_json1_1S3DataConfig(input.s3DataSource, context) }),
  };
};

const serializeAws_json1_1BatchInferenceJobOutput = (input: BatchInferenceJobOutput, context: __SerdeContext): any => {
  return {
    ...(input.s3DataDestination != null && {
      s3DataDestination: serializeAws_json1_1S3DataConfig(input.s3DataDestination, context),
    }),
  };
};

const serializeAws_json1_1BatchSegmentJobInput = (input: BatchSegmentJobInput, context: __SerdeContext): any => {
  return {
    ...(input.s3DataSource != null && { s3DataSource: serializeAws_json1_1S3DataConfig(input.s3DataSource, context) }),
  };
};

const serializeAws_json1_1BatchSegmentJobOutput = (input: BatchSegmentJobOutput, context: __SerdeContext): any => {
  return {
    ...(input.s3DataDestination != null && {
      s3DataDestination: serializeAws_json1_1S3DataConfig(input.s3DataDestination, context),
    }),
  };
};

const serializeAws_json1_1CampaignConfig = (input: CampaignConfig, context: __SerdeContext): any => {
  return {
    ...(input.itemExplorationConfig != null && {
      itemExplorationConfig: serializeAws_json1_1HyperParameters(input.itemExplorationConfig, context),
    }),
  };
};

const serializeAws_json1_1CategoricalHyperParameterRange = (
  input: CategoricalHyperParameterRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: serializeAws_json1_1CategoricalValues(input.values, context) }),
  };
};

const serializeAws_json1_1CategoricalHyperParameterRanges = (
  input: CategoricalHyperParameterRange[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1CategoricalHyperParameterRange(entry, context);
    });
};

const serializeAws_json1_1CategoricalValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ContinuousHyperParameterRange = (
  input: ContinuousHyperParameterRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxValue != null && { maxValue: __serializeFloat(input.maxValue) }),
    ...(input.minValue != null && { minValue: __serializeFloat(input.minValue) }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1ContinuousHyperParameterRanges = (
  input: ContinuousHyperParameterRange[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ContinuousHyperParameterRange(entry, context);
    });
};

const serializeAws_json1_1CreateBatchInferenceJobRequest = (
  input: CreateBatchInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.batchInferenceJobConfig != null && {
      batchInferenceJobConfig: serializeAws_json1_1BatchInferenceJobConfig(input.batchInferenceJobConfig, context),
    }),
    ...(input.filterArn != null && { filterArn: input.filterArn }),
    ...(input.jobInput != null && { jobInput: serializeAws_json1_1BatchInferenceJobInput(input.jobInput, context) }),
    ...(input.jobName != null && { jobName: input.jobName }),
    ...(input.jobOutput != null && {
      jobOutput: serializeAws_json1_1BatchInferenceJobOutput(input.jobOutput, context),
    }),
    ...(input.numResults != null && { numResults: input.numResults }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateBatchSegmentJobRequest = (
  input: CreateBatchSegmentJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.filterArn != null && { filterArn: input.filterArn }),
    ...(input.jobInput != null && { jobInput: serializeAws_json1_1BatchSegmentJobInput(input.jobInput, context) }),
    ...(input.jobName != null && { jobName: input.jobName }),
    ...(input.jobOutput != null && { jobOutput: serializeAws_json1_1BatchSegmentJobOutput(input.jobOutput, context) }),
    ...(input.numResults != null && { numResults: input.numResults }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateCampaignRequest = (input: CreateCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.campaignConfig != null && {
      campaignConfig: serializeAws_json1_1CampaignConfig(input.campaignConfig, context),
    }),
    ...(input.minProvisionedTPS != null && { minProvisionedTPS: input.minProvisionedTPS }),
    ...(input.name != null && { name: input.name }),
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateDatasetExportJobRequest = (
  input: CreateDatasetExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetArn != null && { datasetArn: input.datasetArn }),
    ...(input.ingestionMode != null && { ingestionMode: input.ingestionMode }),
    ...(input.jobName != null && { jobName: input.jobName }),
    ...(input.jobOutput != null && { jobOutput: serializeAws_json1_1DatasetExportJobOutput(input.jobOutput, context) }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateDatasetGroupRequest = (
  input: CreateDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateDatasetImportJobRequest = (
  input: CreateDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.dataSource != null && { dataSource: serializeAws_json1_1DataSource(input.dataSource, context) }),
    ...(input.datasetArn != null && { datasetArn: input.datasetArn }),
    ...(input.importMode != null && { importMode: input.importMode }),
    ...(input.jobName != null && { jobName: input.jobName }),
    ...(input.publishAttributionMetricsToS3 != null && {
      publishAttributionMetricsToS3: input.publishAttributionMetricsToS3,
    }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateDatasetRequest = (input: CreateDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.datasetType != null && { datasetType: input.datasetType }),
    ...(input.name != null && { name: input.name }),
    ...(input.schemaArn != null && { schemaArn: input.schemaArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateEventTrackerRequest = (
  input: CreateEventTrackerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateFilterRequest = (input: CreateFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.filterExpression != null && { filterExpression: input.filterExpression }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateMetricAttributionRequest = (
  input: CreateMetricAttributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.metrics != null && { metrics: serializeAws_json1_1MetricAttributes(input.metrics, context) }),
    ...(input.metricsOutputConfig != null && {
      metricsOutputConfig: serializeAws_json1_1MetricAttributionOutput(input.metricsOutputConfig, context),
    }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1CreateRecommenderRequest = (
  input: CreateRecommenderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.recipeArn != null && { recipeArn: input.recipeArn }),
    ...(input.recommenderConfig != null && {
      recommenderConfig: serializeAws_json1_1RecommenderConfig(input.recommenderConfig, context),
    }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateSchemaRequest = (input: CreateSchemaRequest, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.name != null && { name: input.name }),
    ...(input.schema != null && { schema: input.schema }),
  };
};

const serializeAws_json1_1CreateSolutionRequest = (input: CreateSolutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.eventType != null && { eventType: input.eventType }),
    ...(input.name != null && { name: input.name }),
    ...(input.performAutoML != null && { performAutoML: input.performAutoML }),
    ...(input.performHPO != null && { performHPO: input.performHPO }),
    ...(input.recipeArn != null && { recipeArn: input.recipeArn }),
    ...(input.solutionConfig != null && {
      solutionConfig: serializeAws_json1_1SolutionConfig(input.solutionConfig, context),
    }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateSolutionVersionRequest = (
  input: CreateSolutionVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.solutionArn != null && { solutionArn: input.solutionArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
    ...(input.trainingMode != null && { trainingMode: input.trainingMode }),
  };
};

const serializeAws_json1_1DatasetExportJobOutput = (input: DatasetExportJobOutput, context: __SerdeContext): any => {
  return {
    ...(input.s3DataDestination != null && {
      s3DataDestination: serializeAws_json1_1S3DataConfig(input.s3DataDestination, context),
    }),
  };
};

const serializeAws_json1_1DataSource = (input: DataSource, context: __SerdeContext): any => {
  return {
    ...(input.dataLocation != null && { dataLocation: input.dataLocation }),
  };
};

const serializeAws_json1_1DeleteCampaignRequest = (input: DeleteCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.campaignArn != null && { campaignArn: input.campaignArn }),
  };
};

const serializeAws_json1_1DeleteDatasetGroupRequest = (
  input: DeleteDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
  };
};

const serializeAws_json1_1DeleteDatasetRequest = (input: DeleteDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetArn != null && { datasetArn: input.datasetArn }),
  };
};

const serializeAws_json1_1DeleteEventTrackerRequest = (
  input: DeleteEventTrackerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventTrackerArn != null && { eventTrackerArn: input.eventTrackerArn }),
  };
};

const serializeAws_json1_1DeleteFilterRequest = (input: DeleteFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.filterArn != null && { filterArn: input.filterArn }),
  };
};

const serializeAws_json1_1DeleteMetricAttributionRequest = (
  input: DeleteMetricAttributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.metricAttributionArn != null && { metricAttributionArn: input.metricAttributionArn }),
  };
};

const serializeAws_json1_1DeleteRecommenderRequest = (
  input: DeleteRecommenderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.recommenderArn != null && { recommenderArn: input.recommenderArn }),
  };
};

const serializeAws_json1_1DeleteSchemaRequest = (input: DeleteSchemaRequest, context: __SerdeContext): any => {
  return {
    ...(input.schemaArn != null && { schemaArn: input.schemaArn }),
  };
};

const serializeAws_json1_1DeleteSolutionRequest = (input: DeleteSolutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.solutionArn != null && { solutionArn: input.solutionArn }),
  };
};

const serializeAws_json1_1DescribeAlgorithmRequest = (
  input: DescribeAlgorithmRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.algorithmArn != null && { algorithmArn: input.algorithmArn }),
  };
};

const serializeAws_json1_1DescribeBatchInferenceJobRequest = (
  input: DescribeBatchInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.batchInferenceJobArn != null && { batchInferenceJobArn: input.batchInferenceJobArn }),
  };
};

const serializeAws_json1_1DescribeBatchSegmentJobRequest = (
  input: DescribeBatchSegmentJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.batchSegmentJobArn != null && { batchSegmentJobArn: input.batchSegmentJobArn }),
  };
};

const serializeAws_json1_1DescribeCampaignRequest = (input: DescribeCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.campaignArn != null && { campaignArn: input.campaignArn }),
  };
};

const serializeAws_json1_1DescribeDatasetExportJobRequest = (
  input: DescribeDatasetExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetExportJobArn != null && { datasetExportJobArn: input.datasetExportJobArn }),
  };
};

const serializeAws_json1_1DescribeDatasetGroupRequest = (
  input: DescribeDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
  };
};

const serializeAws_json1_1DescribeDatasetImportJobRequest = (
  input: DescribeDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetImportJobArn != null && { datasetImportJobArn: input.datasetImportJobArn }),
  };
};

const serializeAws_json1_1DescribeDatasetRequest = (input: DescribeDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetArn != null && { datasetArn: input.datasetArn }),
  };
};

const serializeAws_json1_1DescribeEventTrackerRequest = (
  input: DescribeEventTrackerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventTrackerArn != null && { eventTrackerArn: input.eventTrackerArn }),
  };
};

const serializeAws_json1_1DescribeFeatureTransformationRequest = (
  input: DescribeFeatureTransformationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.featureTransformationArn != null && { featureTransformationArn: input.featureTransformationArn }),
  };
};

const serializeAws_json1_1DescribeFilterRequest = (input: DescribeFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.filterArn != null && { filterArn: input.filterArn }),
  };
};

const serializeAws_json1_1DescribeMetricAttributionRequest = (
  input: DescribeMetricAttributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.metricAttributionArn != null && { metricAttributionArn: input.metricAttributionArn }),
  };
};

const serializeAws_json1_1DescribeRecipeRequest = (input: DescribeRecipeRequest, context: __SerdeContext): any => {
  return {
    ...(input.recipeArn != null && { recipeArn: input.recipeArn }),
  };
};

const serializeAws_json1_1DescribeRecommenderRequest = (
  input: DescribeRecommenderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.recommenderArn != null && { recommenderArn: input.recommenderArn }),
  };
};

const serializeAws_json1_1DescribeSchemaRequest = (input: DescribeSchemaRequest, context: __SerdeContext): any => {
  return {
    ...(input.schemaArn != null && { schemaArn: input.schemaArn }),
  };
};

const serializeAws_json1_1DescribeSolutionRequest = (input: DescribeSolutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.solutionArn != null && { solutionArn: input.solutionArn }),
  };
};

const serializeAws_json1_1DescribeSolutionVersionRequest = (
  input: DescribeSolutionVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

const serializeAws_json1_1FeatureTransformationParameters = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1GetSolutionMetricsRequest = (
  input: GetSolutionMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

const serializeAws_json1_1HPOConfig = (input: HPOConfig, context: __SerdeContext): any => {
  return {
    ...(input.algorithmHyperParameterRanges != null && {
      algorithmHyperParameterRanges: serializeAws_json1_1HyperParameterRanges(
        input.algorithmHyperParameterRanges,
        context
      ),
    }),
    ...(input.hpoObjective != null && { hpoObjective: serializeAws_json1_1HPOObjective(input.hpoObjective, context) }),
    ...(input.hpoResourceConfig != null && {
      hpoResourceConfig: serializeAws_json1_1HPOResourceConfig(input.hpoResourceConfig, context),
    }),
  };
};

const serializeAws_json1_1HPOObjective = (input: HPOObjective, context: __SerdeContext): any => {
  return {
    ...(input.metricName != null && { metricName: input.metricName }),
    ...(input.metricRegex != null && { metricRegex: input.metricRegex }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_json1_1HPOResourceConfig = (input: HPOResourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.maxNumberOfTrainingJobs != null && { maxNumberOfTrainingJobs: input.maxNumberOfTrainingJobs }),
    ...(input.maxParallelTrainingJobs != null && { maxParallelTrainingJobs: input.maxParallelTrainingJobs }),
  };
};

const serializeAws_json1_1HyperParameterRanges = (input: HyperParameterRanges, context: __SerdeContext): any => {
  return {
    ...(input.categoricalHyperParameterRanges != null && {
      categoricalHyperParameterRanges: serializeAws_json1_1CategoricalHyperParameterRanges(
        input.categoricalHyperParameterRanges,
        context
      ),
    }),
    ...(input.continuousHyperParameterRanges != null && {
      continuousHyperParameterRanges: serializeAws_json1_1ContinuousHyperParameterRanges(
        input.continuousHyperParameterRanges,
        context
      ),
    }),
    ...(input.integerHyperParameterRanges != null && {
      integerHyperParameterRanges: serializeAws_json1_1IntegerHyperParameterRanges(
        input.integerHyperParameterRanges,
        context
      ),
    }),
  };
};

const serializeAws_json1_1HyperParameters = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1IntegerHyperParameterRange = (
  input: IntegerHyperParameterRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxValue != null && { maxValue: input.maxValue }),
    ...(input.minValue != null && { minValue: input.minValue }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1IntegerHyperParameterRanges = (
  input: IntegerHyperParameterRange[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1IntegerHyperParameterRange(entry, context);
    });
};

const serializeAws_json1_1ListBatchInferenceJobsRequest = (
  input: ListBatchInferenceJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

const serializeAws_json1_1ListBatchSegmentJobsRequest = (
  input: ListBatchSegmentJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

const serializeAws_json1_1ListCampaignsRequest = (input: ListCampaignsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.solutionArn != null && { solutionArn: input.solutionArn }),
  };
};

const serializeAws_json1_1ListDatasetExportJobsRequest = (
  input: ListDatasetExportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetArn != null && { datasetArn: input.datasetArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListDatasetGroupsRequest = (
  input: ListDatasetGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListDatasetImportJobsRequest = (
  input: ListDatasetImportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetArn != null && { datasetArn: input.datasetArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListDatasetsRequest = (input: ListDatasetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListEventTrackersRequest = (
  input: ListEventTrackersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListFiltersRequest = (input: ListFiltersRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListMetricAttributionMetricsRequest = (
  input: ListMetricAttributionMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.metricAttributionArn != null && { metricAttributionArn: input.metricAttributionArn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListMetricAttributionsRequest = (
  input: ListMetricAttributionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListRecipesRequest = (input: ListRecipesRequest, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.recipeProvider != null && { recipeProvider: input.recipeProvider }),
  };
};

const serializeAws_json1_1ListRecommendersRequest = (input: ListRecommendersRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListSchemasRequest = (input: ListSchemasRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListSolutionsRequest = (input: ListSolutionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn != null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListSolutionVersionsRequest = (
  input: ListSolutionVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.solutionArn != null && { solutionArn: input.solutionArn }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_1MetricAttribute = (input: MetricAttribute, context: __SerdeContext): any => {
  return {
    ...(input.eventType != null && { eventType: input.eventType }),
    ...(input.expression != null && { expression: input.expression }),
    ...(input.metricName != null && { metricName: input.metricName }),
  };
};

const serializeAws_json1_1MetricAttributes = (input: MetricAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1MetricAttribute(entry, context);
    });
};

const serializeAws_json1_1MetricAttributesNamesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1MetricAttributionOutput = (input: MetricAttributionOutput, context: __SerdeContext): any => {
  return {
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.s3DataDestination != null && {
      s3DataDestination: serializeAws_json1_1S3DataConfig(input.s3DataDestination, context),
    }),
  };
};

const serializeAws_json1_1OptimizationObjective = (input: OptimizationObjective, context: __SerdeContext): any => {
  return {
    ...(input.itemAttribute != null && { itemAttribute: input.itemAttribute }),
    ...(input.objectiveSensitivity != null && { objectiveSensitivity: input.objectiveSensitivity }),
  };
};

const serializeAws_json1_1RecommenderConfig = (input: RecommenderConfig, context: __SerdeContext): any => {
  return {
    ...(input.itemExplorationConfig != null && {
      itemExplorationConfig: serializeAws_json1_1HyperParameters(input.itemExplorationConfig, context),
    }),
    ...(input.minRecommendationRequestsPerSecond != null && {
      minRecommendationRequestsPerSecond: input.minRecommendationRequestsPerSecond,
    }),
  };
};

const serializeAws_json1_1S3DataConfig = (input: S3DataConfig, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.path != null && { path: input.path }),
  };
};

const serializeAws_json1_1SolutionConfig = (input: SolutionConfig, context: __SerdeContext): any => {
  return {
    ...(input.algorithmHyperParameters != null && {
      algorithmHyperParameters: serializeAws_json1_1HyperParameters(input.algorithmHyperParameters, context),
    }),
    ...(input.autoMLConfig != null && { autoMLConfig: serializeAws_json1_1AutoMLConfig(input.autoMLConfig, context) }),
    ...(input.eventValueThreshold != null && { eventValueThreshold: input.eventValueThreshold }),
    ...(input.featureTransformationParameters != null && {
      featureTransformationParameters: serializeAws_json1_1FeatureTransformationParameters(
        input.featureTransformationParameters,
        context
      ),
    }),
    ...(input.hpoConfig != null && { hpoConfig: serializeAws_json1_1HPOConfig(input.hpoConfig, context) }),
    ...(input.optimizationObjective != null && {
      optimizationObjective: serializeAws_json1_1OptimizationObjective(input.optimizationObjective, context),
    }),
  };
};

const serializeAws_json1_1StartRecommenderRequest = (input: StartRecommenderRequest, context: __SerdeContext): any => {
  return {
    ...(input.recommenderArn != null && { recommenderArn: input.recommenderArn }),
  };
};

const serializeAws_json1_1StopRecommenderRequest = (input: StopRecommenderRequest, context: __SerdeContext): any => {
  return {
    ...(input.recommenderArn != null && { recommenderArn: input.recommenderArn }),
  };
};

const serializeAws_json1_1StopSolutionVersionCreationRequest = (
  input: StopSolutionVersionCreationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.tagKey != null && { tagKey: input.tagKey }),
    ...(input.tagValue != null && { tagValue: input.tagValue }),
  };
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: serializeAws_json1_1TagKeys(input.tagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateCampaignRequest = (input: UpdateCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.campaignArn != null && { campaignArn: input.campaignArn }),
    ...(input.campaignConfig != null && {
      campaignConfig: serializeAws_json1_1CampaignConfig(input.campaignConfig, context),
    }),
    ...(input.minProvisionedTPS != null && { minProvisionedTPS: input.minProvisionedTPS }),
    ...(input.solutionVersionArn != null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

const serializeAws_json1_1UpdateMetricAttributionRequest = (
  input: UpdateMetricAttributionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.addMetrics != null && { addMetrics: serializeAws_json1_1MetricAttributes(input.addMetrics, context) }),
    ...(input.metricAttributionArn != null && { metricAttributionArn: input.metricAttributionArn }),
    ...(input.metricsOutputConfig != null && {
      metricsOutputConfig: serializeAws_json1_1MetricAttributionOutput(input.metricsOutputConfig, context),
    }),
    ...(input.removeMetrics != null && {
      removeMetrics: serializeAws_json1_1MetricAttributesNamesList(input.removeMetrics, context),
    }),
  };
};

const serializeAws_json1_1UpdateRecommenderRequest = (
  input: UpdateRecommenderRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.recommenderArn != null && { recommenderArn: input.recommenderArn }),
    ...(input.recommenderConfig != null && {
      recommenderConfig: serializeAws_json1_1RecommenderConfig(input.recommenderConfig, context),
    }),
  };
};

const deserializeAws_json1_1Algorithm = (output: any, context: __SerdeContext): Algorithm => {
  return {
    algorithmArn: __expectString(output.algorithmArn),
    algorithmImage:
      output.algorithmImage != null ? deserializeAws_json1_1AlgorithmImage(output.algorithmImage, context) : undefined,
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    defaultHyperParameterRanges:
      output.defaultHyperParameterRanges != null
        ? deserializeAws_json1_1DefaultHyperParameterRanges(output.defaultHyperParameterRanges, context)
        : undefined,
    defaultHyperParameters:
      output.defaultHyperParameters != null
        ? deserializeAws_json1_1HyperParameters(output.defaultHyperParameters, context)
        : undefined,
    defaultResourceConfig:
      output.defaultResourceConfig != null
        ? deserializeAws_json1_1ResourceConfig(output.defaultResourceConfig, context)
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    roleArn: __expectString(output.roleArn),
    trainingInputMode: __expectString(output.trainingInputMode),
  } as any;
};

const deserializeAws_json1_1AlgorithmImage = (output: any, context: __SerdeContext): AlgorithmImage => {
  return {
    dockerURI: __expectString(output.dockerURI),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1ArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1AutoMLConfig = (output: any, context: __SerdeContext): AutoMLConfig => {
  return {
    metricName: __expectString(output.metricName),
    recipeList: output.recipeList != null ? deserializeAws_json1_1ArnList(output.recipeList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AutoMLResult = (output: any, context: __SerdeContext): AutoMLResult => {
  return {
    bestRecipeArn: __expectString(output.bestRecipeArn),
  } as any;
};

const deserializeAws_json1_1BatchInferenceJob = (output: any, context: __SerdeContext): BatchInferenceJob => {
  return {
    batchInferenceJobArn: __expectString(output.batchInferenceJobArn),
    batchInferenceJobConfig:
      output.batchInferenceJobConfig != null
        ? deserializeAws_json1_1BatchInferenceJobConfig(output.batchInferenceJobConfig, context)
        : undefined,
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    failureReason: __expectString(output.failureReason),
    filterArn: __expectString(output.filterArn),
    jobInput:
      output.jobInput != null ? deserializeAws_json1_1BatchInferenceJobInput(output.jobInput, context) : undefined,
    jobName: __expectString(output.jobName),
    jobOutput:
      output.jobOutput != null ? deserializeAws_json1_1BatchInferenceJobOutput(output.jobOutput, context) : undefined,
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

const deserializeAws_json1_1BatchInferenceJobConfig = (
  output: any,
  context: __SerdeContext
): BatchInferenceJobConfig => {
  return {
    itemExplorationConfig:
      output.itemExplorationConfig != null
        ? deserializeAws_json1_1HyperParameters(output.itemExplorationConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchInferenceJobInput = (output: any, context: __SerdeContext): BatchInferenceJobInput => {
  return {
    s3DataSource:
      output.s3DataSource != null ? deserializeAws_json1_1S3DataConfig(output.s3DataSource, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchInferenceJobOutput = (
  output: any,
  context: __SerdeContext
): BatchInferenceJobOutput => {
  return {
    s3DataDestination:
      output.s3DataDestination != null
        ? deserializeAws_json1_1S3DataConfig(output.s3DataDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchInferenceJobs = (output: any, context: __SerdeContext): BatchInferenceJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchInferenceJobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchInferenceJobSummary = (
  output: any,
  context: __SerdeContext
): BatchInferenceJobSummary => {
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

const deserializeAws_json1_1BatchSegmentJob = (output: any, context: __SerdeContext): BatchSegmentJob => {
  return {
    batchSegmentJobArn: __expectString(output.batchSegmentJobArn),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    failureReason: __expectString(output.failureReason),
    filterArn: __expectString(output.filterArn),
    jobInput:
      output.jobInput != null ? deserializeAws_json1_1BatchSegmentJobInput(output.jobInput, context) : undefined,
    jobName: __expectString(output.jobName),
    jobOutput:
      output.jobOutput != null ? deserializeAws_json1_1BatchSegmentJobOutput(output.jobOutput, context) : undefined,
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

const deserializeAws_json1_1BatchSegmentJobInput = (output: any, context: __SerdeContext): BatchSegmentJobInput => {
  return {
    s3DataSource:
      output.s3DataSource != null ? deserializeAws_json1_1S3DataConfig(output.s3DataSource, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BatchSegmentJobOutput = (output: any, context: __SerdeContext): BatchSegmentJobOutput => {
  return {
    s3DataDestination:
      output.s3DataDestination != null
        ? deserializeAws_json1_1S3DataConfig(output.s3DataDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchSegmentJobs = (output: any, context: __SerdeContext): BatchSegmentJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchSegmentJobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BatchSegmentJobSummary = (output: any, context: __SerdeContext): BatchSegmentJobSummary => {
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

const deserializeAws_json1_1Campaign = (output: any, context: __SerdeContext): Campaign => {
  return {
    campaignArn: __expectString(output.campaignArn),
    campaignConfig:
      output.campaignConfig != null ? deserializeAws_json1_1CampaignConfig(output.campaignConfig, context) : undefined,
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
      output.latestCampaignUpdate != null
        ? deserializeAws_json1_1CampaignUpdateSummary(output.latestCampaignUpdate, context)
        : undefined,
    minProvisionedTPS: __expectInt32(output.minProvisionedTPS),
    name: __expectString(output.name),
    solutionVersionArn: __expectString(output.solutionVersionArn),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1CampaignConfig = (output: any, context: __SerdeContext): CampaignConfig => {
  return {
    itemExplorationConfig:
      output.itemExplorationConfig != null
        ? deserializeAws_json1_1HyperParameters(output.itemExplorationConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Campaigns = (output: any, context: __SerdeContext): CampaignSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CampaignSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CampaignSummary = (output: any, context: __SerdeContext): CampaignSummary => {
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

const deserializeAws_json1_1CampaignUpdateSummary = (output: any, context: __SerdeContext): CampaignUpdateSummary => {
  return {
    campaignConfig:
      output.campaignConfig != null ? deserializeAws_json1_1CampaignConfig(output.campaignConfig, context) : undefined,
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

const deserializeAws_json1_1CategoricalHyperParameterRange = (
  output: any,
  context: __SerdeContext
): CategoricalHyperParameterRange => {
  return {
    name: __expectString(output.name),
    values: output.values != null ? deserializeAws_json1_1CategoricalValues(output.values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CategoricalHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): CategoricalHyperParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CategoricalHyperParameterRange(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CategoricalValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ContinuousHyperParameterRange = (
  output: any,
  context: __SerdeContext
): ContinuousHyperParameterRange => {
  return {
    maxValue: __limitedParseDouble(output.maxValue),
    minValue: __limitedParseDouble(output.minValue),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1ContinuousHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): ContinuousHyperParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContinuousHyperParameterRange(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateBatchInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): CreateBatchInferenceJobResponse => {
  return {
    batchInferenceJobArn: __expectString(output.batchInferenceJobArn),
  } as any;
};

const deserializeAws_json1_1CreateBatchSegmentJobResponse = (
  output: any,
  context: __SerdeContext
): CreateBatchSegmentJobResponse => {
  return {
    batchSegmentJobArn: __expectString(output.batchSegmentJobArn),
  } as any;
};

const deserializeAws_json1_1CreateCampaignResponse = (output: any, context: __SerdeContext): CreateCampaignResponse => {
  return {
    campaignArn: __expectString(output.campaignArn),
  } as any;
};

const deserializeAws_json1_1CreateDatasetExportJobResponse = (
  output: any,
  context: __SerdeContext
): CreateDatasetExportJobResponse => {
  return {
    datasetExportJobArn: __expectString(output.datasetExportJobArn),
  } as any;
};

const deserializeAws_json1_1CreateDatasetGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateDatasetGroupResponse => {
  return {
    datasetGroupArn: __expectString(output.datasetGroupArn),
    domain: __expectString(output.domain),
  } as any;
};

const deserializeAws_json1_1CreateDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): CreateDatasetImportJobResponse => {
  return {
    datasetImportJobArn: __expectString(output.datasetImportJobArn),
  } as any;
};

const deserializeAws_json1_1CreateDatasetResponse = (output: any, context: __SerdeContext): CreateDatasetResponse => {
  return {
    datasetArn: __expectString(output.datasetArn),
  } as any;
};

const deserializeAws_json1_1CreateEventTrackerResponse = (
  output: any,
  context: __SerdeContext
): CreateEventTrackerResponse => {
  return {
    eventTrackerArn: __expectString(output.eventTrackerArn),
    trackingId: __expectString(output.trackingId),
  } as any;
};

const deserializeAws_json1_1CreateFilterResponse = (output: any, context: __SerdeContext): CreateFilterResponse => {
  return {
    filterArn: __expectString(output.filterArn),
  } as any;
};

const deserializeAws_json1_1CreateMetricAttributionResponse = (
  output: any,
  context: __SerdeContext
): CreateMetricAttributionResponse => {
  return {
    metricAttributionArn: __expectString(output.metricAttributionArn),
  } as any;
};

const deserializeAws_json1_1CreateRecommenderResponse = (
  output: any,
  context: __SerdeContext
): CreateRecommenderResponse => {
  return {
    recommenderArn: __expectString(output.recommenderArn),
  } as any;
};

const deserializeAws_json1_1CreateSchemaResponse = (output: any, context: __SerdeContext): CreateSchemaResponse => {
  return {
    schemaArn: __expectString(output.schemaArn),
  } as any;
};

const deserializeAws_json1_1CreateSolutionResponse = (output: any, context: __SerdeContext): CreateSolutionResponse => {
  return {
    solutionArn: __expectString(output.solutionArn),
  } as any;
};

const deserializeAws_json1_1CreateSolutionVersionResponse = (
  output: any,
  context: __SerdeContext
): CreateSolutionVersionResponse => {
  return {
    solutionVersionArn: __expectString(output.solutionVersionArn),
  } as any;
};

const deserializeAws_json1_1Dataset = (output: any, context: __SerdeContext): Dataset => {
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

const deserializeAws_json1_1DatasetExportJob = (output: any, context: __SerdeContext): DatasetExportJob => {
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
    jobOutput:
      output.jobOutput != null ? deserializeAws_json1_1DatasetExportJobOutput(output.jobOutput, context) : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1DatasetExportJobOutput = (output: any, context: __SerdeContext): DatasetExportJobOutput => {
  return {
    s3DataDestination:
      output.s3DataDestination != null
        ? deserializeAws_json1_1S3DataConfig(output.s3DataDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DatasetExportJobs = (output: any, context: __SerdeContext): DatasetExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetExportJobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DatasetExportJobSummary = (
  output: any,
  context: __SerdeContext
): DatasetExportJobSummary => {
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

const deserializeAws_json1_1DatasetGroup = (output: any, context: __SerdeContext): DatasetGroup => {
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

const deserializeAws_json1_1DatasetGroups = (output: any, context: __SerdeContext): DatasetGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetGroupSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DatasetGroupSummary = (output: any, context: __SerdeContext): DatasetGroupSummary => {
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

const deserializeAws_json1_1DatasetImportJob = (output: any, context: __SerdeContext): DatasetImportJob => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    dataSource: output.dataSource != null ? deserializeAws_json1_1DataSource(output.dataSource, context) : undefined,
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

const deserializeAws_json1_1DatasetImportJobs = (output: any, context: __SerdeContext): DatasetImportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetImportJobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DatasetImportJobSummary = (
  output: any,
  context: __SerdeContext
): DatasetImportJobSummary => {
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

const deserializeAws_json1_1Datasets = (output: any, context: __SerdeContext): DatasetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DatasetSchema = (output: any, context: __SerdeContext): DatasetSchema => {
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

const deserializeAws_json1_1DatasetSchemaSummary = (output: any, context: __SerdeContext): DatasetSchemaSummary => {
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

const deserializeAws_json1_1DatasetSummary = (output: any, context: __SerdeContext): DatasetSummary => {
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

const deserializeAws_json1_1DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    dataLocation: __expectString(output.dataLocation),
  } as any;
};

const deserializeAws_json1_1DefaultCategoricalHyperParameterRange = (
  output: any,
  context: __SerdeContext
): DefaultCategoricalHyperParameterRange => {
  return {
    isTunable: __expectBoolean(output.isTunable),
    name: __expectString(output.name),
    values: output.values != null ? deserializeAws_json1_1CategoricalValues(output.values, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DefaultCategoricalHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultCategoricalHyperParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DefaultCategoricalHyperParameterRange(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DefaultContinuousHyperParameterRange = (
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

const deserializeAws_json1_1DefaultContinuousHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultContinuousHyperParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DefaultContinuousHyperParameterRange(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DefaultHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultHyperParameterRanges => {
  return {
    categoricalHyperParameterRanges:
      output.categoricalHyperParameterRanges != null
        ? deserializeAws_json1_1DefaultCategoricalHyperParameterRanges(output.categoricalHyperParameterRanges, context)
        : undefined,
    continuousHyperParameterRanges:
      output.continuousHyperParameterRanges != null
        ? deserializeAws_json1_1DefaultContinuousHyperParameterRanges(output.continuousHyperParameterRanges, context)
        : undefined,
    integerHyperParameterRanges:
      output.integerHyperParameterRanges != null
        ? deserializeAws_json1_1DefaultIntegerHyperParameterRanges(output.integerHyperParameterRanges, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DefaultIntegerHyperParameterRange = (
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

const deserializeAws_json1_1DefaultIntegerHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultIntegerHyperParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DefaultIntegerHyperParameterRange(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DescribeAlgorithmResponse = (
  output: any,
  context: __SerdeContext
): DescribeAlgorithmResponse => {
  return {
    algorithm: output.algorithm != null ? deserializeAws_json1_1Algorithm(output.algorithm, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeBatchInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeBatchInferenceJobResponse => {
  return {
    batchInferenceJob:
      output.batchInferenceJob != null
        ? deserializeAws_json1_1BatchInferenceJob(output.batchInferenceJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeBatchSegmentJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeBatchSegmentJobResponse => {
  return {
    batchSegmentJob:
      output.batchSegmentJob != null
        ? deserializeAws_json1_1BatchSegmentJob(output.batchSegmentJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCampaignResponse = (
  output: any,
  context: __SerdeContext
): DescribeCampaignResponse => {
  return {
    campaign: output.campaign != null ? deserializeAws_json1_1Campaign(output.campaign, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDatasetExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetExportJobResponse => {
  return {
    datasetExportJob:
      output.datasetExportJob != null
        ? deserializeAws_json1_1DatasetExportJob(output.datasetExportJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDatasetGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetGroupResponse => {
  return {
    datasetGroup:
      output.datasetGroup != null ? deserializeAws_json1_1DatasetGroup(output.datasetGroup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetImportJobResponse => {
  return {
    datasetImportJob:
      output.datasetImportJob != null
        ? deserializeAws_json1_1DatasetImportJob(output.datasetImportJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDatasetResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetResponse => {
  return {
    dataset: output.dataset != null ? deserializeAws_json1_1Dataset(output.dataset, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEventTrackerResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventTrackerResponse => {
  return {
    eventTracker:
      output.eventTracker != null ? deserializeAws_json1_1EventTracker(output.eventTracker, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeFeatureTransformationResponse = (
  output: any,
  context: __SerdeContext
): DescribeFeatureTransformationResponse => {
  return {
    featureTransformation:
      output.featureTransformation != null
        ? deserializeAws_json1_1FeatureTransformation(output.featureTransformation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeFilterResponse = (output: any, context: __SerdeContext): DescribeFilterResponse => {
  return {
    filter: output.filter != null ? deserializeAws_json1_1Filter(output.filter, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeMetricAttributionResponse = (
  output: any,
  context: __SerdeContext
): DescribeMetricAttributionResponse => {
  return {
    metricAttribution:
      output.metricAttribution != null
        ? deserializeAws_json1_1MetricAttribution(output.metricAttribution, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRecipeResponse = (output: any, context: __SerdeContext): DescribeRecipeResponse => {
  return {
    recipe: output.recipe != null ? deserializeAws_json1_1Recipe(output.recipe, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRecommenderResponse = (
  output: any,
  context: __SerdeContext
): DescribeRecommenderResponse => {
  return {
    recommender:
      output.recommender != null ? deserializeAws_json1_1Recommender(output.recommender, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSchemaResponse = (output: any, context: __SerdeContext): DescribeSchemaResponse => {
  return {
    schema: output.schema != null ? deserializeAws_json1_1DatasetSchema(output.schema, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSolutionResponse = (
  output: any,
  context: __SerdeContext
): DescribeSolutionResponse => {
  return {
    solution: output.solution != null ? deserializeAws_json1_1Solution(output.solution, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSolutionVersionResponse = (
  output: any,
  context: __SerdeContext
): DescribeSolutionVersionResponse => {
  return {
    solutionVersion:
      output.solutionVersion != null
        ? deserializeAws_json1_1SolutionVersion(output.solutionVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EventTracker = (output: any, context: __SerdeContext): EventTracker => {
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

const deserializeAws_json1_1EventTrackers = (output: any, context: __SerdeContext): EventTrackerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventTrackerSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EventTrackerSummary = (output: any, context: __SerdeContext): EventTrackerSummary => {
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

const deserializeAws_json1_1FeatureTransformation = (output: any, context: __SerdeContext): FeatureTransformation => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    defaultParameters:
      output.defaultParameters != null
        ? deserializeAws_json1_1FeaturizationParameters(output.defaultParameters, context)
        : undefined,
    featureTransformationArn: __expectString(output.featureTransformationArn),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1FeatureTransformationParameters = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1FeaturizationParameters = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1Filter = (output: any, context: __SerdeContext): Filter => {
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

const deserializeAws_json1_1Filters = (output: any, context: __SerdeContext): FilterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FilterSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FilterSummary = (output: any, context: __SerdeContext): FilterSummary => {
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

const deserializeAws_json1_1GetSolutionMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetSolutionMetricsResponse => {
  return {
    metrics: output.metrics != null ? deserializeAws_json1_1Metrics(output.metrics, context) : undefined,
    solutionVersionArn: __expectString(output.solutionVersionArn),
  } as any;
};

const deserializeAws_json1_1HPOConfig = (output: any, context: __SerdeContext): HPOConfig => {
  return {
    algorithmHyperParameterRanges:
      output.algorithmHyperParameterRanges != null
        ? deserializeAws_json1_1HyperParameterRanges(output.algorithmHyperParameterRanges, context)
        : undefined,
    hpoObjective:
      output.hpoObjective != null ? deserializeAws_json1_1HPOObjective(output.hpoObjective, context) : undefined,
    hpoResourceConfig:
      output.hpoResourceConfig != null
        ? deserializeAws_json1_1HPOResourceConfig(output.hpoResourceConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HPOObjective = (output: any, context: __SerdeContext): HPOObjective => {
  return {
    metricName: __expectString(output.metricName),
    metricRegex: __expectString(output.metricRegex),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1HPOResourceConfig = (output: any, context: __SerdeContext): HPOResourceConfig => {
  return {
    maxNumberOfTrainingJobs: __expectString(output.maxNumberOfTrainingJobs),
    maxParallelTrainingJobs: __expectString(output.maxParallelTrainingJobs),
  } as any;
};

const deserializeAws_json1_1HyperParameterRanges = (output: any, context: __SerdeContext): HyperParameterRanges => {
  return {
    categoricalHyperParameterRanges:
      output.categoricalHyperParameterRanges != null
        ? deserializeAws_json1_1CategoricalHyperParameterRanges(output.categoricalHyperParameterRanges, context)
        : undefined,
    continuousHyperParameterRanges:
      output.continuousHyperParameterRanges != null
        ? deserializeAws_json1_1ContinuousHyperParameterRanges(output.continuousHyperParameterRanges, context)
        : undefined,
    integerHyperParameterRanges:
      output.integerHyperParameterRanges != null
        ? deserializeAws_json1_1IntegerHyperParameterRanges(output.integerHyperParameterRanges, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HyperParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1IntegerHyperParameterRange = (
  output: any,
  context: __SerdeContext
): IntegerHyperParameterRange => {
  return {
    maxValue: __expectInt32(output.maxValue),
    minValue: __expectInt32(output.minValue),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1IntegerHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): IntegerHyperParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IntegerHyperParameterRange(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListBatchInferenceJobsResponse = (
  output: any,
  context: __SerdeContext
): ListBatchInferenceJobsResponse => {
  return {
    batchInferenceJobs:
      output.batchInferenceJobs != null
        ? deserializeAws_json1_1BatchInferenceJobs(output.batchInferenceJobs, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListBatchSegmentJobsResponse = (
  output: any,
  context: __SerdeContext
): ListBatchSegmentJobsResponse => {
  return {
    batchSegmentJobs:
      output.batchSegmentJobs != null
        ? deserializeAws_json1_1BatchSegmentJobs(output.batchSegmentJobs, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListCampaignsResponse = (output: any, context: __SerdeContext): ListCampaignsResponse => {
  return {
    campaigns: output.campaigns != null ? deserializeAws_json1_1Campaigns(output.campaigns, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDatasetExportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetExportJobsResponse => {
  return {
    datasetExportJobs:
      output.datasetExportJobs != null
        ? deserializeAws_json1_1DatasetExportJobs(output.datasetExportJobs, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDatasetGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetGroupsResponse => {
  return {
    datasetGroups:
      output.datasetGroups != null ? deserializeAws_json1_1DatasetGroups(output.datasetGroups, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDatasetImportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetImportJobsResponse => {
  return {
    datasetImportJobs:
      output.datasetImportJobs != null
        ? deserializeAws_json1_1DatasetImportJobs(output.datasetImportJobs, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDatasetsResponse = (output: any, context: __SerdeContext): ListDatasetsResponse => {
  return {
    datasets: output.datasets != null ? deserializeAws_json1_1Datasets(output.datasets, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListEventTrackersResponse = (
  output: any,
  context: __SerdeContext
): ListEventTrackersResponse => {
  return {
    eventTrackers:
      output.eventTrackers != null ? deserializeAws_json1_1EventTrackers(output.eventTrackers, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListFiltersResponse = (output: any, context: __SerdeContext): ListFiltersResponse => {
  return {
    Filters: output.Filters != null ? deserializeAws_json1_1Filters(output.Filters, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListMetricAttributionMetricsResponse = (
  output: any,
  context: __SerdeContext
): ListMetricAttributionMetricsResponse => {
  return {
    metrics: output.metrics != null ? deserializeAws_json1_1MetricAttributes(output.metrics, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListMetricAttributionsResponse = (
  output: any,
  context: __SerdeContext
): ListMetricAttributionsResponse => {
  return {
    metricAttributions:
      output.metricAttributions != null
        ? deserializeAws_json1_1MetricAttributions(output.metricAttributions, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListRecipesResponse = (output: any, context: __SerdeContext): ListRecipesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    recipes: output.recipes != null ? deserializeAws_json1_1Recipes(output.recipes, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListRecommendersResponse = (
  output: any,
  context: __SerdeContext
): ListRecommendersResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    recommenders:
      output.recommenders != null ? deserializeAws_json1_1Recommenders(output.recommenders, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListSchemasResponse = (output: any, context: __SerdeContext): ListSchemasResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    schemas: output.schemas != null ? deserializeAws_json1_1Schemas(output.schemas, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListSolutionsResponse = (output: any, context: __SerdeContext): ListSolutionsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    solutions: output.solutions != null ? deserializeAws_json1_1Solutions(output.solutions, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListSolutionVersionsResponse = (
  output: any,
  context: __SerdeContext
): ListSolutionVersionsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    solutionVersions:
      output.solutionVersions != null
        ? deserializeAws_json1_1SolutionVersions(output.solutionVersions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    tags: output.tags != null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MetricAttribute = (output: any, context: __SerdeContext): MetricAttribute => {
  return {
    eventType: __expectString(output.eventType),
    expression: __expectString(output.expression),
    metricName: __expectString(output.metricName),
  } as any;
};

const deserializeAws_json1_1MetricAttributes = (output: any, context: __SerdeContext): MetricAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MetricAttribution = (output: any, context: __SerdeContext): MetricAttribution => {
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
      output.metricsOutputConfig != null
        ? deserializeAws_json1_1MetricAttributionOutput(output.metricsOutputConfig, context)
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1MetricAttributionOutput = (
  output: any,
  context: __SerdeContext
): MetricAttributionOutput => {
  return {
    roleArn: __expectString(output.roleArn),
    s3DataDestination:
      output.s3DataDestination != null
        ? deserializeAws_json1_1S3DataConfig(output.s3DataDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MetricAttributions = (output: any, context: __SerdeContext): MetricAttributionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricAttributionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MetricAttributionSummary = (
  output: any,
  context: __SerdeContext
): MetricAttributionSummary => {
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

const deserializeAws_json1_1Metrics = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseDouble(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1OptimizationObjective = (output: any, context: __SerdeContext): OptimizationObjective => {
  return {
    itemAttribute: __expectString(output.itemAttribute),
    objectiveSensitivity: __expectString(output.objectiveSensitivity),
  } as any;
};

const deserializeAws_json1_1Recipe = (output: any, context: __SerdeContext): Recipe => {
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

const deserializeAws_json1_1Recipes = (output: any, context: __SerdeContext): RecipeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RecipeSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RecipeSummary = (output: any, context: __SerdeContext): RecipeSummary => {
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

const deserializeAws_json1_1Recommender = (output: any, context: __SerdeContext): Recommender => {
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
        ? deserializeAws_json1_1RecommenderUpdateSummary(output.latestRecommenderUpdate, context)
        : undefined,
    modelMetrics: output.modelMetrics != null ? deserializeAws_json1_1Metrics(output.modelMetrics, context) : undefined,
    name: __expectString(output.name),
    recipeArn: __expectString(output.recipeArn),
    recommenderArn: __expectString(output.recommenderArn),
    recommenderConfig:
      output.recommenderConfig != null
        ? deserializeAws_json1_1RecommenderConfig(output.recommenderConfig, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1RecommenderConfig = (output: any, context: __SerdeContext): RecommenderConfig => {
  return {
    itemExplorationConfig:
      output.itemExplorationConfig != null
        ? deserializeAws_json1_1HyperParameters(output.itemExplorationConfig, context)
        : undefined,
    minRecommendationRequestsPerSecond: __expectInt32(output.minRecommendationRequestsPerSecond),
  } as any;
};

const deserializeAws_json1_1Recommenders = (output: any, context: __SerdeContext): RecommenderSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RecommenderSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1RecommenderSummary = (output: any, context: __SerdeContext): RecommenderSummary => {
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
      output.recommenderConfig != null
        ? deserializeAws_json1_1RecommenderConfig(output.recommenderConfig, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1RecommenderUpdateSummary = (
  output: any,
  context: __SerdeContext
): RecommenderUpdateSummary => {
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
      output.recommenderConfig != null
        ? deserializeAws_json1_1RecommenderConfig(output.recommenderConfig, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceConfig = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1S3DataConfig = (output: any, context: __SerdeContext): S3DataConfig => {
  return {
    kmsKeyArn: __expectString(output.kmsKeyArn),
    path: __expectString(output.path),
  } as any;
};

const deserializeAws_json1_1Schemas = (output: any, context: __SerdeContext): DatasetSchemaSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetSchemaSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Solution = (output: any, context: __SerdeContext): Solution => {
  return {
    autoMLResult:
      output.autoMLResult != null ? deserializeAws_json1_1AutoMLResult(output.autoMLResult, context) : undefined,
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
        ? deserializeAws_json1_1SolutionVersionSummary(output.latestSolutionVersion, context)
        : undefined,
    name: __expectString(output.name),
    performAutoML: __expectBoolean(output.performAutoML),
    performHPO: __expectBoolean(output.performHPO),
    recipeArn: __expectString(output.recipeArn),
    solutionArn: __expectString(output.solutionArn),
    solutionConfig:
      output.solutionConfig != null ? deserializeAws_json1_1SolutionConfig(output.solutionConfig, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1SolutionConfig = (output: any, context: __SerdeContext): SolutionConfig => {
  return {
    algorithmHyperParameters:
      output.algorithmHyperParameters != null
        ? deserializeAws_json1_1HyperParameters(output.algorithmHyperParameters, context)
        : undefined,
    autoMLConfig:
      output.autoMLConfig != null ? deserializeAws_json1_1AutoMLConfig(output.autoMLConfig, context) : undefined,
    eventValueThreshold: __expectString(output.eventValueThreshold),
    featureTransformationParameters:
      output.featureTransformationParameters != null
        ? deserializeAws_json1_1FeatureTransformationParameters(output.featureTransformationParameters, context)
        : undefined,
    hpoConfig: output.hpoConfig != null ? deserializeAws_json1_1HPOConfig(output.hpoConfig, context) : undefined,
    optimizationObjective:
      output.optimizationObjective != null
        ? deserializeAws_json1_1OptimizationObjective(output.optimizationObjective, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Solutions = (output: any, context: __SerdeContext): SolutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SolutionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SolutionSummary = (output: any, context: __SerdeContext): SolutionSummary => {
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

const deserializeAws_json1_1SolutionVersion = (output: any, context: __SerdeContext): SolutionVersion => {
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
    solutionConfig:
      output.solutionConfig != null ? deserializeAws_json1_1SolutionConfig(output.solutionConfig, context) : undefined,
    solutionVersionArn: __expectString(output.solutionVersionArn),
    status: __expectString(output.status),
    trainingHours: __limitedParseDouble(output.trainingHours),
    trainingMode: __expectString(output.trainingMode),
    tunedHPOParams:
      output.tunedHPOParams != null ? deserializeAws_json1_1TunedHPOParams(output.tunedHPOParams, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SolutionVersions = (output: any, context: __SerdeContext): SolutionVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SolutionVersionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SolutionVersionSummary = (output: any, context: __SerdeContext): SolutionVersionSummary => {
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

const deserializeAws_json1_1StartRecommenderResponse = (
  output: any,
  context: __SerdeContext
): StartRecommenderResponse => {
  return {
    recommenderArn: __expectString(output.recommenderArn),
  } as any;
};

const deserializeAws_json1_1StopRecommenderResponse = (
  output: any,
  context: __SerdeContext
): StopRecommenderResponse => {
  return {
    recommenderArn: __expectString(output.recommenderArn),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    tagKey: __expectString(output.tagKey),
    tagValue: __expectString(output.tagValue),
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TooManyTagKeysException = (
  output: any,
  context: __SerdeContext
): TooManyTagKeysException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TunedHPOParams = (output: any, context: __SerdeContext): TunedHPOParams => {
  return {
    algorithmHyperParameters:
      output.algorithmHyperParameters != null
        ? deserializeAws_json1_1HyperParameters(output.algorithmHyperParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateCampaignResponse = (output: any, context: __SerdeContext): UpdateCampaignResponse => {
  return {
    campaignArn: __expectString(output.campaignArn),
  } as any;
};

const deserializeAws_json1_1UpdateMetricAttributionResponse = (
  output: any,
  context: __SerdeContext
): UpdateMetricAttributionResponse => {
  return {
    metricAttributionArn: __expectString(output.metricAttributionArn),
  } as any;
};

const deserializeAws_json1_1UpdateRecommenderResponse = (
  output: any,
  context: __SerdeContext
): UpdateRecommenderResponse => {
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
