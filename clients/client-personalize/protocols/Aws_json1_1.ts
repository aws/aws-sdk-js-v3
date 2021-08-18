import {
  CreateBatchInferenceJobCommandInput,
  CreateBatchInferenceJobCommandOutput,
} from "../commands/CreateBatchInferenceJobCommand";
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
import { DeleteSchemaCommandInput, DeleteSchemaCommandOutput } from "../commands/DeleteSchemaCommand";
import { DeleteSolutionCommandInput, DeleteSolutionCommandOutput } from "../commands/DeleteSolutionCommand";
import { DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput } from "../commands/DescribeAlgorithmCommand";
import {
  DescribeBatchInferenceJobCommandInput,
  DescribeBatchInferenceJobCommandOutput,
} from "../commands/DescribeBatchInferenceJobCommand";
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
import { DescribeRecipeCommandInput, DescribeRecipeCommandOutput } from "../commands/DescribeRecipeCommand";
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
import { ListRecipesCommandInput, ListRecipesCommandOutput } from "../commands/ListRecipesCommand";
import { ListSchemasCommandInput, ListSchemasCommandOutput } from "../commands/ListSchemasCommand";
import {
  ListSolutionVersionsCommandInput,
  ListSolutionVersionsCommandOutput,
} from "../commands/ListSolutionVersionsCommand";
import { ListSolutionsCommandInput, ListSolutionsCommandOutput } from "../commands/ListSolutionsCommand";
import {
  StopSolutionVersionCreationCommandInput,
  StopSolutionVersionCreationCommandOutput,
} from "../commands/StopSolutionVersionCreationCommand";
import { UpdateCampaignCommandInput, UpdateCampaignCommandOutput } from "../commands/UpdateCampaignCommand";
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
  Campaign,
  CampaignConfig,
  CampaignSummary,
  CampaignUpdateSummary,
  CategoricalHyperParameterRange,
  ContinuousHyperParameterRange,
  CreateBatchInferenceJobRequest,
  CreateBatchInferenceJobResponse,
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
  CreateSchemaRequest,
  CreateSchemaResponse,
  CreateSolutionRequest,
  CreateSolutionResponse,
  CreateSolutionVersionRequest,
  CreateSolutionVersionResponse,
  DataSource,
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
  DefaultCategoricalHyperParameterRange,
  DefaultContinuousHyperParameterRange,
  DefaultHyperParameterRanges,
  DefaultIntegerHyperParameterRange,
  DeleteCampaignRequest,
  DeleteDatasetGroupRequest,
  DeleteDatasetRequest,
  DeleteEventTrackerRequest,
  DeleteFilterRequest,
  DeleteSchemaRequest,
  DeleteSolutionRequest,
  DescribeAlgorithmRequest,
  DescribeAlgorithmResponse,
  DescribeBatchInferenceJobRequest,
  DescribeBatchInferenceJobResponse,
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
  DescribeRecipeRequest,
  DescribeRecipeResponse,
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
  ListRecipesRequest,
  ListRecipesResponse,
  ListSchemasRequest,
  ListSchemasResponse,
  ListSolutionVersionsRequest,
  ListSolutionVersionsResponse,
  ListSolutionsRequest,
  ListSolutionsResponse,
  OptimizationObjective,
  Recipe,
  RecipeSummary,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  S3DataConfig,
  Solution,
  SolutionConfig,
  SolutionSummary,
  SolutionVersion,
  SolutionVersionSummary,
  StopSolutionVersionCreationRequest,
  TunedHPOParams,
  UpdateCampaignRequest,
  UpdateCampaignResponse,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
  limitedParseFloat as __limitedParseFloat,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
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
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AutoMLConfig = (input: AutoMLConfig, context: __SerdeContext): any => {
  return {
    ...(input.metricName !== undefined && input.metricName !== null && { metricName: input.metricName }),
    ...(input.recipeList !== undefined &&
      input.recipeList !== null && { recipeList: serializeAws_json1_1ArnList(input.recipeList, context) }),
  };
};

const serializeAws_json1_1BatchInferenceJobConfig = (input: BatchInferenceJobConfig, context: __SerdeContext): any => {
  return {
    ...(input.itemExplorationConfig !== undefined &&
      input.itemExplorationConfig !== null && {
        itemExplorationConfig: serializeAws_json1_1HyperParameters(input.itemExplorationConfig, context),
      }),
  };
};

const serializeAws_json1_1BatchInferenceJobInput = (input: BatchInferenceJobInput, context: __SerdeContext): any => {
  return {
    ...(input.s3DataSource !== undefined &&
      input.s3DataSource !== null && { s3DataSource: serializeAws_json1_1S3DataConfig(input.s3DataSource, context) }),
  };
};

const serializeAws_json1_1BatchInferenceJobOutput = (input: BatchInferenceJobOutput, context: __SerdeContext): any => {
  return {
    ...(input.s3DataDestination !== undefined &&
      input.s3DataDestination !== null && {
        s3DataDestination: serializeAws_json1_1S3DataConfig(input.s3DataDestination, context),
      }),
  };
};

const serializeAws_json1_1CampaignConfig = (input: CampaignConfig, context: __SerdeContext): any => {
  return {
    ...(input.itemExplorationConfig !== undefined &&
      input.itemExplorationConfig !== null && {
        itemExplorationConfig: serializeAws_json1_1HyperParameters(input.itemExplorationConfig, context),
      }),
  };
};

const serializeAws_json1_1CategoricalHyperParameterRange = (
  input: CategoricalHyperParameterRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_1CategoricalValues(input.values, context) }),
  };
};

const serializeAws_json1_1CategoricalHyperParameterRanges = (
  input: CategoricalHyperParameterRange[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CategoricalHyperParameterRange(entry, context);
    });
};

const serializeAws_json1_1CategoricalValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ContinuousHyperParameterRange = (
  input: ContinuousHyperParameterRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxValue !== undefined && input.maxValue !== null && { maxValue: __serializeFloat(input.maxValue) }),
    ...(input.minValue !== undefined && input.minValue !== null && { minValue: __serializeFloat(input.minValue) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1ContinuousHyperParameterRanges = (
  input: ContinuousHyperParameterRange[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ContinuousHyperParameterRange(entry, context);
    });
};

const serializeAws_json1_1CreateBatchInferenceJobRequest = (
  input: CreateBatchInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.batchInferenceJobConfig !== undefined &&
      input.batchInferenceJobConfig !== null && {
        batchInferenceJobConfig: serializeAws_json1_1BatchInferenceJobConfig(input.batchInferenceJobConfig, context),
      }),
    ...(input.filterArn !== undefined && input.filterArn !== null && { filterArn: input.filterArn }),
    ...(input.jobInput !== undefined &&
      input.jobInput !== null && { jobInput: serializeAws_json1_1BatchInferenceJobInput(input.jobInput, context) }),
    ...(input.jobName !== undefined && input.jobName !== null && { jobName: input.jobName }),
    ...(input.jobOutput !== undefined &&
      input.jobOutput !== null && { jobOutput: serializeAws_json1_1BatchInferenceJobOutput(input.jobOutput, context) }),
    ...(input.numResults !== undefined && input.numResults !== null && { numResults: input.numResults }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.solutionVersionArn !== undefined &&
      input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

const serializeAws_json1_1CreateCampaignRequest = (input: CreateCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.campaignConfig !== undefined &&
      input.campaignConfig !== null && {
        campaignConfig: serializeAws_json1_1CampaignConfig(input.campaignConfig, context),
      }),
    ...(input.minProvisionedTPS !== undefined &&
      input.minProvisionedTPS !== null && { minProvisionedTPS: input.minProvisionedTPS }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.solutionVersionArn !== undefined &&
      input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

const serializeAws_json1_1CreateDatasetExportJobRequest = (
  input: CreateDatasetExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }),
    ...(input.ingestionMode !== undefined && input.ingestionMode !== null && { ingestionMode: input.ingestionMode }),
    ...(input.jobName !== undefined && input.jobName !== null && { jobName: input.jobName }),
    ...(input.jobOutput !== undefined &&
      input.jobOutput !== null && { jobOutput: serializeAws_json1_1DatasetExportJobOutput(input.jobOutput, context) }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
  };
};

const serializeAws_json1_1CreateDatasetGroupRequest = (
  input: CreateDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.kmsKeyArn !== undefined && input.kmsKeyArn !== null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
  };
};

const serializeAws_json1_1CreateDatasetImportJobRequest = (
  input: CreateDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.dataSource !== undefined &&
      input.dataSource !== null && { dataSource: serializeAws_json1_1DataSource(input.dataSource, context) }),
    ...(input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }),
    ...(input.jobName !== undefined && input.jobName !== null && { jobName: input.jobName }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
  };
};

const serializeAws_json1_1CreateDatasetRequest = (input: CreateDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn !== undefined &&
      input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.datasetType !== undefined && input.datasetType !== null && { datasetType: input.datasetType }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.schemaArn !== undefined && input.schemaArn !== null && { schemaArn: input.schemaArn }),
  };
};

const serializeAws_json1_1CreateEventTrackerRequest = (
  input: CreateEventTrackerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn !== undefined &&
      input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1CreateFilterRequest = (input: CreateFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn !== undefined &&
      input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.filterExpression !== undefined &&
      input.filterExpression !== null && { filterExpression: input.filterExpression }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1CreateSchemaRequest = (input: CreateSchemaRequest, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.schema !== undefined && input.schema !== null && { schema: input.schema }),
  };
};

const serializeAws_json1_1CreateSolutionRequest = (input: CreateSolutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn !== undefined &&
      input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.eventType !== undefined && input.eventType !== null && { eventType: input.eventType }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.performAutoML !== undefined && input.performAutoML !== null && { performAutoML: input.performAutoML }),
    ...(input.performHPO !== undefined && input.performHPO !== null && { performHPO: input.performHPO }),
    ...(input.recipeArn !== undefined && input.recipeArn !== null && { recipeArn: input.recipeArn }),
    ...(input.solutionConfig !== undefined &&
      input.solutionConfig !== null && {
        solutionConfig: serializeAws_json1_1SolutionConfig(input.solutionConfig, context),
      }),
  };
};

const serializeAws_json1_1CreateSolutionVersionRequest = (
  input: CreateSolutionVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn }),
    ...(input.trainingMode !== undefined && input.trainingMode !== null && { trainingMode: input.trainingMode }),
  };
};

const serializeAws_json1_1DatasetExportJobOutput = (input: DatasetExportJobOutput, context: __SerdeContext): any => {
  return {
    ...(input.s3DataDestination !== undefined &&
      input.s3DataDestination !== null && {
        s3DataDestination: serializeAws_json1_1S3DataConfig(input.s3DataDestination, context),
      }),
  };
};

const serializeAws_json1_1DataSource = (input: DataSource, context: __SerdeContext): any => {
  return {
    ...(input.dataLocation !== undefined && input.dataLocation !== null && { dataLocation: input.dataLocation }),
  };
};

const serializeAws_json1_1DeleteCampaignRequest = (input: DeleteCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.campaignArn !== undefined && input.campaignArn !== null && { campaignArn: input.campaignArn }),
  };
};

const serializeAws_json1_1DeleteDatasetGroupRequest = (
  input: DeleteDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn !== undefined &&
      input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
  };
};

const serializeAws_json1_1DeleteDatasetRequest = (input: DeleteDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }),
  };
};

const serializeAws_json1_1DeleteEventTrackerRequest = (
  input: DeleteEventTrackerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventTrackerArn !== undefined &&
      input.eventTrackerArn !== null && { eventTrackerArn: input.eventTrackerArn }),
  };
};

const serializeAws_json1_1DeleteFilterRequest = (input: DeleteFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.filterArn !== undefined && input.filterArn !== null && { filterArn: input.filterArn }),
  };
};

const serializeAws_json1_1DeleteSchemaRequest = (input: DeleteSchemaRequest, context: __SerdeContext): any => {
  return {
    ...(input.schemaArn !== undefined && input.schemaArn !== null && { schemaArn: input.schemaArn }),
  };
};

const serializeAws_json1_1DeleteSolutionRequest = (input: DeleteSolutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn }),
  };
};

const serializeAws_json1_1DescribeAlgorithmRequest = (
  input: DescribeAlgorithmRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.algorithmArn !== undefined && input.algorithmArn !== null && { algorithmArn: input.algorithmArn }),
  };
};

const serializeAws_json1_1DescribeBatchInferenceJobRequest = (
  input: DescribeBatchInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.batchInferenceJobArn !== undefined &&
      input.batchInferenceJobArn !== null && { batchInferenceJobArn: input.batchInferenceJobArn }),
  };
};

const serializeAws_json1_1DescribeCampaignRequest = (input: DescribeCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.campaignArn !== undefined && input.campaignArn !== null && { campaignArn: input.campaignArn }),
  };
};

const serializeAws_json1_1DescribeDatasetExportJobRequest = (
  input: DescribeDatasetExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetExportJobArn !== undefined &&
      input.datasetExportJobArn !== null && { datasetExportJobArn: input.datasetExportJobArn }),
  };
};

const serializeAws_json1_1DescribeDatasetGroupRequest = (
  input: DescribeDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn !== undefined &&
      input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
  };
};

const serializeAws_json1_1DescribeDatasetImportJobRequest = (
  input: DescribeDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetImportJobArn !== undefined &&
      input.datasetImportJobArn !== null && { datasetImportJobArn: input.datasetImportJobArn }),
  };
};

const serializeAws_json1_1DescribeDatasetRequest = (input: DescribeDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }),
  };
};

const serializeAws_json1_1DescribeEventTrackerRequest = (
  input: DescribeEventTrackerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventTrackerArn !== undefined &&
      input.eventTrackerArn !== null && { eventTrackerArn: input.eventTrackerArn }),
  };
};

const serializeAws_json1_1DescribeFeatureTransformationRequest = (
  input: DescribeFeatureTransformationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.featureTransformationArn !== undefined &&
      input.featureTransformationArn !== null && { featureTransformationArn: input.featureTransformationArn }),
  };
};

const serializeAws_json1_1DescribeFilterRequest = (input: DescribeFilterRequest, context: __SerdeContext): any => {
  return {
    ...(input.filterArn !== undefined && input.filterArn !== null && { filterArn: input.filterArn }),
  };
};

const serializeAws_json1_1DescribeRecipeRequest = (input: DescribeRecipeRequest, context: __SerdeContext): any => {
  return {
    ...(input.recipeArn !== undefined && input.recipeArn !== null && { recipeArn: input.recipeArn }),
  };
};

const serializeAws_json1_1DescribeSchemaRequest = (input: DescribeSchemaRequest, context: __SerdeContext): any => {
  return {
    ...(input.schemaArn !== undefined && input.schemaArn !== null && { schemaArn: input.schemaArn }),
  };
};

const serializeAws_json1_1DescribeSolutionRequest = (input: DescribeSolutionRequest, context: __SerdeContext): any => {
  return {
    ...(input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn }),
  };
};

const serializeAws_json1_1DescribeSolutionVersionRequest = (
  input: DescribeSolutionVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.solutionVersionArn !== undefined &&
      input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

const serializeAws_json1_1FeatureTransformationParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1GetSolutionMetricsRequest = (
  input: GetSolutionMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.solutionVersionArn !== undefined &&
      input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

const serializeAws_json1_1HPOConfig = (input: HPOConfig, context: __SerdeContext): any => {
  return {
    ...(input.algorithmHyperParameterRanges !== undefined &&
      input.algorithmHyperParameterRanges !== null && {
        algorithmHyperParameterRanges: serializeAws_json1_1HyperParameterRanges(
          input.algorithmHyperParameterRanges,
          context
        ),
      }),
    ...(input.hpoObjective !== undefined &&
      input.hpoObjective !== null && { hpoObjective: serializeAws_json1_1HPOObjective(input.hpoObjective, context) }),
    ...(input.hpoResourceConfig !== undefined &&
      input.hpoResourceConfig !== null && {
        hpoResourceConfig: serializeAws_json1_1HPOResourceConfig(input.hpoResourceConfig, context),
      }),
  };
};

const serializeAws_json1_1HPOObjective = (input: HPOObjective, context: __SerdeContext): any => {
  return {
    ...(input.metricName !== undefined && input.metricName !== null && { metricName: input.metricName }),
    ...(input.metricRegex !== undefined && input.metricRegex !== null && { metricRegex: input.metricRegex }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1HPOResourceConfig = (input: HPOResourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.maxNumberOfTrainingJobs !== undefined &&
      input.maxNumberOfTrainingJobs !== null && { maxNumberOfTrainingJobs: input.maxNumberOfTrainingJobs }),
    ...(input.maxParallelTrainingJobs !== undefined &&
      input.maxParallelTrainingJobs !== null && { maxParallelTrainingJobs: input.maxParallelTrainingJobs }),
  };
};

const serializeAws_json1_1HyperParameterRanges = (input: HyperParameterRanges, context: __SerdeContext): any => {
  return {
    ...(input.categoricalHyperParameterRanges !== undefined &&
      input.categoricalHyperParameterRanges !== null && {
        categoricalHyperParameterRanges: serializeAws_json1_1CategoricalHyperParameterRanges(
          input.categoricalHyperParameterRanges,
          context
        ),
      }),
    ...(input.continuousHyperParameterRanges !== undefined &&
      input.continuousHyperParameterRanges !== null && {
        continuousHyperParameterRanges: serializeAws_json1_1ContinuousHyperParameterRanges(
          input.continuousHyperParameterRanges,
          context
        ),
      }),
    ...(input.integerHyperParameterRanges !== undefined &&
      input.integerHyperParameterRanges !== null && {
        integerHyperParameterRanges: serializeAws_json1_1IntegerHyperParameterRanges(
          input.integerHyperParameterRanges,
          context
        ),
      }),
  };
};

const serializeAws_json1_1HyperParameters = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1IntegerHyperParameterRange = (
  input: IntegerHyperParameterRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxValue !== undefined && input.maxValue !== null && { maxValue: input.maxValue }),
    ...(input.minValue !== undefined && input.minValue !== null && { minValue: input.minValue }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1IntegerHyperParameterRanges = (
  input: IntegerHyperParameterRange[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1IntegerHyperParameterRange(entry, context);
    });
};

const serializeAws_json1_1ListBatchInferenceJobsRequest = (
  input: ListBatchInferenceJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.solutionVersionArn !== undefined &&
      input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

const serializeAws_json1_1ListCampaignsRequest = (input: ListCampaignsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn }),
  };
};

const serializeAws_json1_1ListDatasetExportJobsRequest = (
  input: ListDatasetExportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListDatasetGroupsRequest = (
  input: ListDatasetGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListDatasetImportJobsRequest = (
  input: ListDatasetImportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetArn !== undefined && input.datasetArn !== null && { datasetArn: input.datasetArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListDatasetsRequest = (input: ListDatasetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn !== undefined &&
      input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListEventTrackersRequest = (
  input: ListEventTrackersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn !== undefined &&
      input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListFiltersRequest = (input: ListFiltersRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn !== undefined &&
      input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListRecipesRequest = (input: ListRecipesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.recipeProvider !== undefined &&
      input.recipeProvider !== null && { recipeProvider: input.recipeProvider }),
  };
};

const serializeAws_json1_1ListSchemasRequest = (input: ListSchemasRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListSolutionsRequest = (input: ListSolutionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.datasetGroupArn !== undefined &&
      input.datasetGroupArn !== null && { datasetGroupArn: input.datasetGroupArn }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListSolutionVersionsRequest = (
  input: ListSolutionVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.solutionArn !== undefined && input.solutionArn !== null && { solutionArn: input.solutionArn }),
  };
};

const serializeAws_json1_1OptimizationObjective = (input: OptimizationObjective, context: __SerdeContext): any => {
  return {
    ...(input.itemAttribute !== undefined && input.itemAttribute !== null && { itemAttribute: input.itemAttribute }),
    ...(input.objectiveSensitivity !== undefined &&
      input.objectiveSensitivity !== null && { objectiveSensitivity: input.objectiveSensitivity }),
  };
};

const serializeAws_json1_1S3DataConfig = (input: S3DataConfig, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyArn !== undefined && input.kmsKeyArn !== null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.path !== undefined && input.path !== null && { path: input.path }),
  };
};

const serializeAws_json1_1SolutionConfig = (input: SolutionConfig, context: __SerdeContext): any => {
  return {
    ...(input.algorithmHyperParameters !== undefined &&
      input.algorithmHyperParameters !== null && {
        algorithmHyperParameters: serializeAws_json1_1HyperParameters(input.algorithmHyperParameters, context),
      }),
    ...(input.autoMLConfig !== undefined &&
      input.autoMLConfig !== null && { autoMLConfig: serializeAws_json1_1AutoMLConfig(input.autoMLConfig, context) }),
    ...(input.eventValueThreshold !== undefined &&
      input.eventValueThreshold !== null && { eventValueThreshold: input.eventValueThreshold }),
    ...(input.featureTransformationParameters !== undefined &&
      input.featureTransformationParameters !== null && {
        featureTransformationParameters: serializeAws_json1_1FeatureTransformationParameters(
          input.featureTransformationParameters,
          context
        ),
      }),
    ...(input.hpoConfig !== undefined &&
      input.hpoConfig !== null && { hpoConfig: serializeAws_json1_1HPOConfig(input.hpoConfig, context) }),
    ...(input.optimizationObjective !== undefined &&
      input.optimizationObjective !== null && {
        optimizationObjective: serializeAws_json1_1OptimizationObjective(input.optimizationObjective, context),
      }),
  };
};

const serializeAws_json1_1StopSolutionVersionCreationRequest = (
  input: StopSolutionVersionCreationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.solutionVersionArn !== undefined &&
      input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

const serializeAws_json1_1UpdateCampaignRequest = (input: UpdateCampaignRequest, context: __SerdeContext): any => {
  return {
    ...(input.campaignArn !== undefined && input.campaignArn !== null && { campaignArn: input.campaignArn }),
    ...(input.campaignConfig !== undefined &&
      input.campaignConfig !== null && {
        campaignConfig: serializeAws_json1_1CampaignConfig(input.campaignConfig, context),
      }),
    ...(input.minProvisionedTPS !== undefined &&
      input.minProvisionedTPS !== null && { minProvisionedTPS: input.minProvisionedTPS }),
    ...(input.solutionVersionArn !== undefined &&
      input.solutionVersionArn !== null && { solutionVersionArn: input.solutionVersionArn }),
  };
};

const deserializeAws_json1_1Algorithm = (output: any, context: __SerdeContext): Algorithm => {
  return {
    algorithmArn: __expectString(output.algorithmArn),
    algorithmImage:
      output.algorithmImage !== undefined && output.algorithmImage !== null
        ? deserializeAws_json1_1AlgorithmImage(output.algorithmImage, context)
        : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    defaultHyperParameterRanges:
      output.defaultHyperParameterRanges !== undefined && output.defaultHyperParameterRanges !== null
        ? deserializeAws_json1_1DefaultHyperParameterRanges(output.defaultHyperParameterRanges, context)
        : undefined,
    defaultHyperParameters:
      output.defaultHyperParameters !== undefined && output.defaultHyperParameters !== null
        ? deserializeAws_json1_1HyperParameters(output.defaultHyperParameters, context)
        : undefined,
    defaultResourceConfig:
      output.defaultResourceConfig !== undefined && output.defaultResourceConfig !== null
        ? deserializeAws_json1_1ResourceConfig(output.defaultResourceConfig, context)
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1AutoMLConfig = (output: any, context: __SerdeContext): AutoMLConfig => {
  return {
    metricName: __expectString(output.metricName),
    recipeList:
      output.recipeList !== undefined && output.recipeList !== null
        ? deserializeAws_json1_1ArnList(output.recipeList, context)
        : undefined,
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
      output.batchInferenceJobConfig !== undefined && output.batchInferenceJobConfig !== null
        ? deserializeAws_json1_1BatchInferenceJobConfig(output.batchInferenceJobConfig, context)
        : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    failureReason: __expectString(output.failureReason),
    filterArn: __expectString(output.filterArn),
    jobInput:
      output.jobInput !== undefined && output.jobInput !== null
        ? deserializeAws_json1_1BatchInferenceJobInput(output.jobInput, context)
        : undefined,
    jobName: __expectString(output.jobName),
    jobOutput:
      output.jobOutput !== undefined && output.jobOutput !== null
        ? deserializeAws_json1_1BatchInferenceJobOutput(output.jobOutput, context)
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    numResults: __expectInt(output.numResults),
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
      output.itemExplorationConfig !== undefined && output.itemExplorationConfig !== null
        ? deserializeAws_json1_1HyperParameters(output.itemExplorationConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchInferenceJobInput = (output: any, context: __SerdeContext): BatchInferenceJobInput => {
  return {
    s3DataSource:
      output.s3DataSource !== undefined && output.s3DataSource !== null
        ? deserializeAws_json1_1S3DataConfig(output.s3DataSource, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchInferenceJobOutput = (
  output: any,
  context: __SerdeContext
): BatchInferenceJobOutput => {
  return {
    s3DataDestination:
      output.s3DataDestination !== undefined && output.s3DataDestination !== null
        ? deserializeAws_json1_1S3DataConfig(output.s3DataDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BatchInferenceJobs = (output: any, context: __SerdeContext): BatchInferenceJobSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchInferenceJobSummary(entry, context);
    });
};

const deserializeAws_json1_1BatchInferenceJobSummary = (
  output: any,
  context: __SerdeContext
): BatchInferenceJobSummary => {
  return {
    batchInferenceJobArn: __expectString(output.batchInferenceJobArn),
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    failureReason: __expectString(output.failureReason),
    jobName: __expectString(output.jobName),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    solutionVersionArn: __expectString(output.solutionVersionArn),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1Campaign = (output: any, context: __SerdeContext): Campaign => {
  return {
    campaignArn: __expectString(output.campaignArn),
    campaignConfig:
      output.campaignConfig !== undefined && output.campaignConfig !== null
        ? deserializeAws_json1_1CampaignConfig(output.campaignConfig, context)
        : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    latestCampaignUpdate:
      output.latestCampaignUpdate !== undefined && output.latestCampaignUpdate !== null
        ? deserializeAws_json1_1CampaignUpdateSummary(output.latestCampaignUpdate, context)
        : undefined,
    minProvisionedTPS: __expectInt(output.minProvisionedTPS),
    name: __expectString(output.name),
    solutionVersionArn: __expectString(output.solutionVersionArn),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1CampaignConfig = (output: any, context: __SerdeContext): CampaignConfig => {
  return {
    itemExplorationConfig:
      output.itemExplorationConfig !== undefined && output.itemExplorationConfig !== null
        ? deserializeAws_json1_1HyperParameters(output.itemExplorationConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Campaigns = (output: any, context: __SerdeContext): CampaignSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CampaignSummary(entry, context);
    });
};

const deserializeAws_json1_1CampaignSummary = (output: any, context: __SerdeContext): CampaignSummary => {
  return {
    campaignArn: __expectString(output.campaignArn),
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1CampaignUpdateSummary = (output: any, context: __SerdeContext): CampaignUpdateSummary => {
  return {
    campaignConfig:
      output.campaignConfig !== undefined && output.campaignConfig !== null
        ? deserializeAws_json1_1CampaignConfig(output.campaignConfig, context)
        : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    minProvisionedTPS: __expectInt(output.minProvisionedTPS),
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
    values:
      output.values !== undefined && output.values !== null
        ? deserializeAws_json1_1CategoricalValues(output.values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CategoricalHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): CategoricalHyperParameterRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CategoricalHyperParameterRange(entry, context);
    });
};

const deserializeAws_json1_1CategoricalValues = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ContinuousHyperParameterRange = (
  output: any,
  context: __SerdeContext
): ContinuousHyperParameterRange => {
  return {
    maxValue: __limitedParseFloat(output.maxValue),
    minValue: __limitedParseFloat(output.minValue),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1ContinuousHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): ContinuousHyperParameterRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContinuousHyperParameterRange(entry, context);
    });
};

const deserializeAws_json1_1CreateBatchInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): CreateBatchInferenceJobResponse => {
  return {
    batchInferenceJobArn: __expectString(output.batchInferenceJobArn),
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
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetArn: __expectString(output.datasetArn),
    datasetGroupArn: __expectString(output.datasetGroupArn),
    datasetType: __expectString(output.datasetType),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name: __expectString(output.name),
    schemaArn: __expectString(output.schemaArn),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1DatasetExportJob = (output: any, context: __SerdeContext): DatasetExportJob => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetArn: __expectString(output.datasetArn),
    datasetExportJobArn: __expectString(output.datasetExportJobArn),
    failureReason: __expectString(output.failureReason),
    ingestionMode: __expectString(output.ingestionMode),
    jobName: __expectString(output.jobName),
    jobOutput:
      output.jobOutput !== undefined && output.jobOutput !== null
        ? deserializeAws_json1_1DatasetExportJobOutput(output.jobOutput, context)
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1DatasetExportJobOutput = (output: any, context: __SerdeContext): DatasetExportJobOutput => {
  return {
    s3DataDestination:
      output.s3DataDestination !== undefined && output.s3DataDestination !== null
        ? deserializeAws_json1_1S3DataConfig(output.s3DataDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DatasetExportJobs = (output: any, context: __SerdeContext): DatasetExportJobSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetExportJobSummary(entry, context);
    });
};

const deserializeAws_json1_1DatasetExportJobSummary = (
  output: any,
  context: __SerdeContext
): DatasetExportJobSummary => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetExportJobArn: __expectString(output.datasetExportJobArn),
    failureReason: __expectString(output.failureReason),
    jobName: __expectString(output.jobName),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1DatasetGroup = (output: any, context: __SerdeContext): DatasetGroup => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    failureReason: __expectString(output.failureReason),
    kmsKeyArn: __expectString(output.kmsKeyArn),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name: __expectString(output.name),
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1DatasetGroups = (output: any, context: __SerdeContext): DatasetGroupSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetGroupSummary(entry, context);
    });
};

const deserializeAws_json1_1DatasetGroupSummary = (output: any, context: __SerdeContext): DatasetGroupSummary => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1DatasetImportJob = (output: any, context: __SerdeContext): DatasetImportJob => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    dataSource:
      output.dataSource !== undefined && output.dataSource !== null
        ? deserializeAws_json1_1DataSource(output.dataSource, context)
        : undefined,
    datasetArn: __expectString(output.datasetArn),
    datasetImportJobArn: __expectString(output.datasetImportJobArn),
    failureReason: __expectString(output.failureReason),
    jobName: __expectString(output.jobName),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1DatasetImportJobs = (output: any, context: __SerdeContext): DatasetImportJobSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetImportJobSummary(entry, context);
    });
};

const deserializeAws_json1_1DatasetImportJobSummary = (
  output: any,
  context: __SerdeContext
): DatasetImportJobSummary => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetImportJobArn: __expectString(output.datasetImportJobArn),
    failureReason: __expectString(output.failureReason),
    jobName: __expectString(output.jobName),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1Datasets = (output: any, context: __SerdeContext): DatasetSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetSummary(entry, context);
    });
};

const deserializeAws_json1_1DatasetSchema = (output: any, context: __SerdeContext): DatasetSchema => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name: __expectString(output.name),
    schema: __expectString(output.schema),
    schemaArn: __expectString(output.schemaArn),
  } as any;
};

const deserializeAws_json1_1DatasetSchemaSummary = (output: any, context: __SerdeContext): DatasetSchemaSummary => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name: __expectString(output.name),
    schemaArn: __expectString(output.schemaArn),
  } as any;
};

const deserializeAws_json1_1DatasetSummary = (output: any, context: __SerdeContext): DatasetSummary => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetArn: __expectString(output.datasetArn),
    datasetType: __expectString(output.datasetType),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
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
    values:
      output.values !== undefined && output.values !== null
        ? deserializeAws_json1_1CategoricalValues(output.values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DefaultCategoricalHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultCategoricalHyperParameterRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DefaultCategoricalHyperParameterRange(entry, context);
    });
};

const deserializeAws_json1_1DefaultContinuousHyperParameterRange = (
  output: any,
  context: __SerdeContext
): DefaultContinuousHyperParameterRange => {
  return {
    isTunable: __expectBoolean(output.isTunable),
    maxValue: __limitedParseFloat(output.maxValue),
    minValue: __limitedParseFloat(output.minValue),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1DefaultContinuousHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultContinuousHyperParameterRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DefaultContinuousHyperParameterRange(entry, context);
    });
};

const deserializeAws_json1_1DefaultHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultHyperParameterRanges => {
  return {
    categoricalHyperParameterRanges:
      output.categoricalHyperParameterRanges !== undefined && output.categoricalHyperParameterRanges !== null
        ? deserializeAws_json1_1DefaultCategoricalHyperParameterRanges(output.categoricalHyperParameterRanges, context)
        : undefined,
    continuousHyperParameterRanges:
      output.continuousHyperParameterRanges !== undefined && output.continuousHyperParameterRanges !== null
        ? deserializeAws_json1_1DefaultContinuousHyperParameterRanges(output.continuousHyperParameterRanges, context)
        : undefined,
    integerHyperParameterRanges:
      output.integerHyperParameterRanges !== undefined && output.integerHyperParameterRanges !== null
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
    maxValue: __expectInt(output.maxValue),
    minValue: __expectInt(output.minValue),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1DefaultIntegerHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultIntegerHyperParameterRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DefaultIntegerHyperParameterRange(entry, context);
    });
};

const deserializeAws_json1_1DescribeAlgorithmResponse = (
  output: any,
  context: __SerdeContext
): DescribeAlgorithmResponse => {
  return {
    algorithm:
      output.algorithm !== undefined && output.algorithm !== null
        ? deserializeAws_json1_1Algorithm(output.algorithm, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeBatchInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeBatchInferenceJobResponse => {
  return {
    batchInferenceJob:
      output.batchInferenceJob !== undefined && output.batchInferenceJob !== null
        ? deserializeAws_json1_1BatchInferenceJob(output.batchInferenceJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeCampaignResponse = (
  output: any,
  context: __SerdeContext
): DescribeCampaignResponse => {
  return {
    campaign:
      output.campaign !== undefined && output.campaign !== null
        ? deserializeAws_json1_1Campaign(output.campaign, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDatasetExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetExportJobResponse => {
  return {
    datasetExportJob:
      output.datasetExportJob !== undefined && output.datasetExportJob !== null
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
      output.datasetGroup !== undefined && output.datasetGroup !== null
        ? deserializeAws_json1_1DatasetGroup(output.datasetGroup, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetImportJobResponse => {
  return {
    datasetImportJob:
      output.datasetImportJob !== undefined && output.datasetImportJob !== null
        ? deserializeAws_json1_1DatasetImportJob(output.datasetImportJob, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDatasetResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetResponse => {
  return {
    dataset:
      output.dataset !== undefined && output.dataset !== null
        ? deserializeAws_json1_1Dataset(output.dataset, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEventTrackerResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventTrackerResponse => {
  return {
    eventTracker:
      output.eventTracker !== undefined && output.eventTracker !== null
        ? deserializeAws_json1_1EventTracker(output.eventTracker, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeFeatureTransformationResponse = (
  output: any,
  context: __SerdeContext
): DescribeFeatureTransformationResponse => {
  return {
    featureTransformation:
      output.featureTransformation !== undefined && output.featureTransformation !== null
        ? deserializeAws_json1_1FeatureTransformation(output.featureTransformation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeFilterResponse = (output: any, context: __SerdeContext): DescribeFilterResponse => {
  return {
    filter:
      output.filter !== undefined && output.filter !== null
        ? deserializeAws_json1_1Filter(output.filter, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeRecipeResponse = (output: any, context: __SerdeContext): DescribeRecipeResponse => {
  return {
    recipe:
      output.recipe !== undefined && output.recipe !== null
        ? deserializeAws_json1_1Recipe(output.recipe, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSchemaResponse = (output: any, context: __SerdeContext): DescribeSchemaResponse => {
  return {
    schema:
      output.schema !== undefined && output.schema !== null
        ? deserializeAws_json1_1DatasetSchema(output.schema, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSolutionResponse = (
  output: any,
  context: __SerdeContext
): DescribeSolutionResponse => {
  return {
    solution:
      output.solution !== undefined && output.solution !== null
        ? deserializeAws_json1_1Solution(output.solution, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeSolutionVersionResponse = (
  output: any,
  context: __SerdeContext
): DescribeSolutionVersionResponse => {
  return {
    solutionVersion:
      output.solutionVersion !== undefined && output.solutionVersion !== null
        ? deserializeAws_json1_1SolutionVersion(output.solutionVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EventTracker = (output: any, context: __SerdeContext): EventTracker => {
  return {
    accountId: __expectString(output.accountId),
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    eventTrackerArn: __expectString(output.eventTrackerArn),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
    trackingId: __expectString(output.trackingId),
  } as any;
};

const deserializeAws_json1_1EventTrackers = (output: any, context: __SerdeContext): EventTrackerSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EventTrackerSummary(entry, context);
    });
};

const deserializeAws_json1_1EventTrackerSummary = (output: any, context: __SerdeContext): EventTrackerSummary => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    eventTrackerArn: __expectString(output.eventTrackerArn),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1FeatureTransformation = (output: any, context: __SerdeContext): FeatureTransformation => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    defaultParameters:
      output.defaultParameters !== undefined && output.defaultParameters !== null
        ? deserializeAws_json1_1FeaturizationParameters(output.defaultParameters, context)
        : undefined,
    featureTransformationArn: __expectString(output.featureTransformationArn),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1FeatureTransformationParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1FeaturizationParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1Filter = (output: any, context: __SerdeContext): Filter => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    failureReason: __expectString(output.failureReason),
    filterArn: __expectString(output.filterArn),
    filterExpression: __expectString(output.filterExpression),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1Filters = (output: any, context: __SerdeContext): FilterSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FilterSummary(entry, context);
    });
};

const deserializeAws_json1_1FilterSummary = (output: any, context: __SerdeContext): FilterSummary => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    failureReason: __expectString(output.failureReason),
    filterArn: __expectString(output.filterArn),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
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
    metrics:
      output.metrics !== undefined && output.metrics !== null
        ? deserializeAws_json1_1Metrics(output.metrics, context)
        : undefined,
    solutionVersionArn: __expectString(output.solutionVersionArn),
  } as any;
};

const deserializeAws_json1_1HPOConfig = (output: any, context: __SerdeContext): HPOConfig => {
  return {
    algorithmHyperParameterRanges:
      output.algorithmHyperParameterRanges !== undefined && output.algorithmHyperParameterRanges !== null
        ? deserializeAws_json1_1HyperParameterRanges(output.algorithmHyperParameterRanges, context)
        : undefined,
    hpoObjective:
      output.hpoObjective !== undefined && output.hpoObjective !== null
        ? deserializeAws_json1_1HPOObjective(output.hpoObjective, context)
        : undefined,
    hpoResourceConfig:
      output.hpoResourceConfig !== undefined && output.hpoResourceConfig !== null
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
      output.categoricalHyperParameterRanges !== undefined && output.categoricalHyperParameterRanges !== null
        ? deserializeAws_json1_1CategoricalHyperParameterRanges(output.categoricalHyperParameterRanges, context)
        : undefined,
    continuousHyperParameterRanges:
      output.continuousHyperParameterRanges !== undefined && output.continuousHyperParameterRanges !== null
        ? deserializeAws_json1_1ContinuousHyperParameterRanges(output.continuousHyperParameterRanges, context)
        : undefined,
    integerHyperParameterRanges:
      output.integerHyperParameterRanges !== undefined && output.integerHyperParameterRanges !== null
        ? deserializeAws_json1_1IntegerHyperParameterRanges(output.integerHyperParameterRanges, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HyperParameters = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1IntegerHyperParameterRange = (
  output: any,
  context: __SerdeContext
): IntegerHyperParameterRange => {
  return {
    maxValue: __expectInt(output.maxValue),
    minValue: __expectInt(output.minValue),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1IntegerHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): IntegerHyperParameterRange[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IntegerHyperParameterRange(entry, context);
    });
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
      output.batchInferenceJobs !== undefined && output.batchInferenceJobs !== null
        ? deserializeAws_json1_1BatchInferenceJobs(output.batchInferenceJobs, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListCampaignsResponse = (output: any, context: __SerdeContext): ListCampaignsResponse => {
  return {
    campaigns:
      output.campaigns !== undefined && output.campaigns !== null
        ? deserializeAws_json1_1Campaigns(output.campaigns, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDatasetExportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetExportJobsResponse => {
  return {
    datasetExportJobs:
      output.datasetExportJobs !== undefined && output.datasetExportJobs !== null
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
      output.datasetGroups !== undefined && output.datasetGroups !== null
        ? deserializeAws_json1_1DatasetGroups(output.datasetGroups, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDatasetImportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetImportJobsResponse => {
  return {
    datasetImportJobs:
      output.datasetImportJobs !== undefined && output.datasetImportJobs !== null
        ? deserializeAws_json1_1DatasetImportJobs(output.datasetImportJobs, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDatasetsResponse = (output: any, context: __SerdeContext): ListDatasetsResponse => {
  return {
    datasets:
      output.datasets !== undefined && output.datasets !== null
        ? deserializeAws_json1_1Datasets(output.datasets, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListEventTrackersResponse = (
  output: any,
  context: __SerdeContext
): ListEventTrackersResponse => {
  return {
    eventTrackers:
      output.eventTrackers !== undefined && output.eventTrackers !== null
        ? deserializeAws_json1_1EventTrackers(output.eventTrackers, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListFiltersResponse = (output: any, context: __SerdeContext): ListFiltersResponse => {
  return {
    Filters:
      output.Filters !== undefined && output.Filters !== null
        ? deserializeAws_json1_1Filters(output.Filters, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListRecipesResponse = (output: any, context: __SerdeContext): ListRecipesResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    recipes:
      output.recipes !== undefined && output.recipes !== null
        ? deserializeAws_json1_1Recipes(output.recipes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSchemasResponse = (output: any, context: __SerdeContext): ListSchemasResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    schemas:
      output.schemas !== undefined && output.schemas !== null
        ? deserializeAws_json1_1Schemas(output.schemas, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSolutionsResponse = (output: any, context: __SerdeContext): ListSolutionsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    solutions:
      output.solutions !== undefined && output.solutions !== null
        ? deserializeAws_json1_1Solutions(output.solutions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSolutionVersionsResponse = (
  output: any,
  context: __SerdeContext
): ListSolutionVersionsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    solutionVersions:
      output.solutionVersions !== undefined && output.solutionVersions !== null
        ? deserializeAws_json1_1SolutionVersions(output.solutionVersions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Metrics = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __limitedParseFloat(value) as any,
    };
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
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    description: __expectString(output.description),
    featureTransformationArn: __expectString(output.featureTransformationArn),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name: __expectString(output.name),
    recipeArn: __expectString(output.recipeArn),
    recipeType: __expectString(output.recipeType),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1Recipes = (output: any, context: __SerdeContext): RecipeSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RecipeSummary(entry, context);
    });
};

const deserializeAws_json1_1RecipeSummary = (output: any, context: __SerdeContext): RecipeSummary => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name: __expectString(output.name),
    recipeArn: __expectString(output.recipeArn),
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

const deserializeAws_json1_1ResourceConfig = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetSchemaSummary(entry, context);
    });
};

const deserializeAws_json1_1Solution = (output: any, context: __SerdeContext): Solution => {
  return {
    autoMLResult:
      output.autoMLResult !== undefined && output.autoMLResult !== null
        ? deserializeAws_json1_1AutoMLResult(output.autoMLResult, context)
        : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    eventType: __expectString(output.eventType),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    latestSolutionVersion:
      output.latestSolutionVersion !== undefined && output.latestSolutionVersion !== null
        ? deserializeAws_json1_1SolutionVersionSummary(output.latestSolutionVersion, context)
        : undefined,
    name: __expectString(output.name),
    performAutoML: __expectBoolean(output.performAutoML),
    performHPO: __expectBoolean(output.performHPO),
    recipeArn: __expectString(output.recipeArn),
    solutionArn: __expectString(output.solutionArn),
    solutionConfig:
      output.solutionConfig !== undefined && output.solutionConfig !== null
        ? deserializeAws_json1_1SolutionConfig(output.solutionConfig, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1SolutionConfig = (output: any, context: __SerdeContext): SolutionConfig => {
  return {
    algorithmHyperParameters:
      output.algorithmHyperParameters !== undefined && output.algorithmHyperParameters !== null
        ? deserializeAws_json1_1HyperParameters(output.algorithmHyperParameters, context)
        : undefined,
    autoMLConfig:
      output.autoMLConfig !== undefined && output.autoMLConfig !== null
        ? deserializeAws_json1_1AutoMLConfig(output.autoMLConfig, context)
        : undefined,
    eventValueThreshold: __expectString(output.eventValueThreshold),
    featureTransformationParameters:
      output.featureTransformationParameters !== undefined && output.featureTransformationParameters !== null
        ? deserializeAws_json1_1FeatureTransformationParameters(output.featureTransformationParameters, context)
        : undefined,
    hpoConfig:
      output.hpoConfig !== undefined && output.hpoConfig !== null
        ? deserializeAws_json1_1HPOConfig(output.hpoConfig, context)
        : undefined,
    optimizationObjective:
      output.optimizationObjective !== undefined && output.optimizationObjective !== null
        ? deserializeAws_json1_1OptimizationObjective(output.optimizationObjective, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Solutions = (output: any, context: __SerdeContext): SolutionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SolutionSummary(entry, context);
    });
};

const deserializeAws_json1_1SolutionSummary = (output: any, context: __SerdeContext): SolutionSummary => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name: __expectString(output.name),
    solutionArn: __expectString(output.solutionArn),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1SolutionVersion = (output: any, context: __SerdeContext): SolutionVersion => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetGroupArn: __expectString(output.datasetGroupArn),
    eventType: __expectString(output.eventType),
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    performAutoML: __expectBoolean(output.performAutoML),
    performHPO: __expectBoolean(output.performHPO),
    recipeArn: __expectString(output.recipeArn),
    solutionArn: __expectString(output.solutionArn),
    solutionConfig:
      output.solutionConfig !== undefined && output.solutionConfig !== null
        ? deserializeAws_json1_1SolutionConfig(output.solutionConfig, context)
        : undefined,
    solutionVersionArn: __expectString(output.solutionVersionArn),
    status: __expectString(output.status),
    trainingHours: __limitedParseFloat(output.trainingHours),
    trainingMode: __expectString(output.trainingMode),
    tunedHPOParams:
      output.tunedHPOParams !== undefined && output.tunedHPOParams !== null
        ? deserializeAws_json1_1TunedHPOParams(output.tunedHPOParams, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SolutionVersions = (output: any, context: __SerdeContext): SolutionVersionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SolutionVersionSummary(entry, context);
    });
};

const deserializeAws_json1_1SolutionVersionSummary = (output: any, context: __SerdeContext): SolutionVersionSummary => {
  return {
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    failureReason: __expectString(output.failureReason),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    solutionVersionArn: __expectString(output.solutionVersionArn),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1TunedHPOParams = (output: any, context: __SerdeContext): TunedHPOParams => {
  return {
    algorithmHyperParameters:
      output.algorithmHyperParameters !== undefined && output.algorithmHyperParameters !== null
        ? deserializeAws_json1_1HyperParameters(output.algorithmHyperParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateCampaignResponse = (output: any, context: __SerdeContext): UpdateCampaignResponse => {
  return {
    campaignArn: __expectString(output.campaignArn),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
