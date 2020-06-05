import {
  CreateBatchInferenceJobCommandInput,
  CreateBatchInferenceJobCommandOutput
} from "../commands/CreateBatchInferenceJobCommand";
import {
  CreateCampaignCommandInput,
  CreateCampaignCommandOutput
} from "../commands/CreateCampaignCommand";
import {
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput
} from "../commands/CreateDatasetCommand";
import {
  CreateDatasetGroupCommandInput,
  CreateDatasetGroupCommandOutput
} from "../commands/CreateDatasetGroupCommand";
import {
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput
} from "../commands/CreateDatasetImportJobCommand";
import {
  CreateEventTrackerCommandInput,
  CreateEventTrackerCommandOutput
} from "../commands/CreateEventTrackerCommand";
import {
  CreateSchemaCommandInput,
  CreateSchemaCommandOutput
} from "../commands/CreateSchemaCommand";
import {
  CreateSolutionCommandInput,
  CreateSolutionCommandOutput
} from "../commands/CreateSolutionCommand";
import {
  CreateSolutionVersionCommandInput,
  CreateSolutionVersionCommandOutput
} from "../commands/CreateSolutionVersionCommand";
import {
  DeleteCampaignCommandInput,
  DeleteCampaignCommandOutput
} from "../commands/DeleteCampaignCommand";
import {
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput
} from "../commands/DeleteDatasetCommand";
import {
  DeleteDatasetGroupCommandInput,
  DeleteDatasetGroupCommandOutput
} from "../commands/DeleteDatasetGroupCommand";
import {
  DeleteEventTrackerCommandInput,
  DeleteEventTrackerCommandOutput
} from "../commands/DeleteEventTrackerCommand";
import {
  DeleteSchemaCommandInput,
  DeleteSchemaCommandOutput
} from "../commands/DeleteSchemaCommand";
import {
  DeleteSolutionCommandInput,
  DeleteSolutionCommandOutput
} from "../commands/DeleteSolutionCommand";
import {
  DescribeAlgorithmCommandInput,
  DescribeAlgorithmCommandOutput
} from "../commands/DescribeAlgorithmCommand";
import {
  DescribeBatchInferenceJobCommandInput,
  DescribeBatchInferenceJobCommandOutput
} from "../commands/DescribeBatchInferenceJobCommand";
import {
  DescribeCampaignCommandInput,
  DescribeCampaignCommandOutput
} from "../commands/DescribeCampaignCommand";
import {
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput
} from "../commands/DescribeDatasetCommand";
import {
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput
} from "../commands/DescribeDatasetGroupCommand";
import {
  DescribeDatasetImportJobCommandInput,
  DescribeDatasetImportJobCommandOutput
} from "../commands/DescribeDatasetImportJobCommand";
import {
  DescribeEventTrackerCommandInput,
  DescribeEventTrackerCommandOutput
} from "../commands/DescribeEventTrackerCommand";
import {
  DescribeFeatureTransformationCommandInput,
  DescribeFeatureTransformationCommandOutput
} from "../commands/DescribeFeatureTransformationCommand";
import {
  DescribeRecipeCommandInput,
  DescribeRecipeCommandOutput
} from "../commands/DescribeRecipeCommand";
import {
  DescribeSchemaCommandInput,
  DescribeSchemaCommandOutput
} from "../commands/DescribeSchemaCommand";
import {
  DescribeSolutionCommandInput,
  DescribeSolutionCommandOutput
} from "../commands/DescribeSolutionCommand";
import {
  DescribeSolutionVersionCommandInput,
  DescribeSolutionVersionCommandOutput
} from "../commands/DescribeSolutionVersionCommand";
import {
  GetSolutionMetricsCommandInput,
  GetSolutionMetricsCommandOutput
} from "../commands/GetSolutionMetricsCommand";
import {
  ListBatchInferenceJobsCommandInput,
  ListBatchInferenceJobsCommandOutput
} from "../commands/ListBatchInferenceJobsCommand";
import {
  ListCampaignsCommandInput,
  ListCampaignsCommandOutput
} from "../commands/ListCampaignsCommand";
import {
  ListDatasetGroupsCommandInput,
  ListDatasetGroupsCommandOutput
} from "../commands/ListDatasetGroupsCommand";
import {
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput
} from "../commands/ListDatasetImportJobsCommand";
import {
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput
} from "../commands/ListDatasetsCommand";
import {
  ListEventTrackersCommandInput,
  ListEventTrackersCommandOutput
} from "../commands/ListEventTrackersCommand";
import {
  ListRecipesCommandInput,
  ListRecipesCommandOutput
} from "../commands/ListRecipesCommand";
import {
  ListSchemasCommandInput,
  ListSchemasCommandOutput
} from "../commands/ListSchemasCommand";
import {
  ListSolutionVersionsCommandInput,
  ListSolutionVersionsCommandOutput
} from "../commands/ListSolutionVersionsCommand";
import {
  ListSolutionsCommandInput,
  ListSolutionsCommandOutput
} from "../commands/ListSolutionsCommand";
import {
  UpdateCampaignCommandInput,
  UpdateCampaignCommandOutput
} from "../commands/UpdateCampaignCommand";
import {
  Algorithm,
  AlgorithmImage,
  AutoMLConfig,
  AutoMLResult,
  BatchInferenceJob,
  BatchInferenceJobInput,
  BatchInferenceJobOutput,
  BatchInferenceJobSummary,
  Campaign,
  CampaignSummary,
  CampaignUpdateSummary,
  CategoricalHyperParameterRange,
  ContinuousHyperParameterRange,
  CreateBatchInferenceJobRequest,
  CreateBatchInferenceJobResponse,
  CreateCampaignRequest,
  CreateCampaignResponse,
  CreateDatasetGroupRequest,
  CreateDatasetGroupResponse,
  CreateDatasetImportJobRequest,
  CreateDatasetImportJobResponse,
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateEventTrackerRequest,
  CreateEventTrackerResponse,
  CreateSchemaRequest,
  CreateSchemaResponse,
  CreateSolutionRequest,
  CreateSolutionResponse,
  CreateSolutionVersionRequest,
  CreateSolutionVersionResponse,
  DataSource,
  Dataset,
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
  DeleteSchemaRequest,
  DeleteSolutionRequest,
  DescribeAlgorithmRequest,
  DescribeAlgorithmResponse,
  DescribeBatchInferenceJobRequest,
  DescribeBatchInferenceJobResponse,
  DescribeCampaignRequest,
  DescribeCampaignResponse,
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
  ListDatasetGroupsRequest,
  ListDatasetGroupsResponse,
  ListDatasetImportJobsRequest,
  ListDatasetImportJobsResponse,
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListEventTrackersRequest,
  ListEventTrackersResponse,
  ListRecipesRequest,
  ListRecipesResponse,
  ListSchemasRequest,
  ListSchemasResponse,
  ListSolutionVersionsRequest,
  ListSolutionVersionsResponse,
  ListSolutionsRequest,
  ListSolutionsResponse,
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
  UpdateCampaignRequest,
  UpdateCampaignResponse
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateBatchInferenceJobCommand = async (
  input: CreateBatchInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.CreateBatchInferenceJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateBatchInferenceJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateCampaignCommand = async (
  input: CreateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.CreateCampaign"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateCampaignRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.CreateDataset"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDatasetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDatasetGroupCommand = async (
  input: CreateDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.CreateDatasetGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDatasetGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDatasetImportJobCommand = async (
  input: CreateDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.CreateDatasetImportJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDatasetImportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEventTrackerCommand = async (
  input: CreateEventTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.CreateEventTracker"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateEventTrackerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSchemaCommand = async (
  input: CreateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.CreateSchema"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSchemaRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSolutionCommand = async (
  input: CreateSolutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.CreateSolution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSolutionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSolutionVersionCommand = async (
  input: CreateSolutionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.CreateSolutionVersion"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSolutionVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteCampaignCommand = async (
  input: DeleteCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DeleteCampaign"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteCampaignRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DeleteDataset"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDatasetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDatasetGroupCommand = async (
  input: DeleteDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DeleteDatasetGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDatasetGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEventTrackerCommand = async (
  input: DeleteEventTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DeleteEventTracker"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteEventTrackerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSchemaCommand = async (
  input: DeleteSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DeleteSchema"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSchemaRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSolutionCommand = async (
  input: DeleteSolutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DeleteSolution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSolutionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAlgorithmCommand = async (
  input: DescribeAlgorithmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DescribeAlgorithm"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAlgorithmRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBatchInferenceJobCommand = async (
  input: DescribeBatchInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DescribeBatchInferenceJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeBatchInferenceJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeCampaignCommand = async (
  input: DescribeCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DescribeCampaign"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCampaignRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DescribeDataset"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDatasetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDatasetGroupCommand = async (
  input: DescribeDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DescribeDatasetGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDatasetGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDatasetImportJobCommand = async (
  input: DescribeDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DescribeDatasetImportJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDatasetImportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventTrackerCommand = async (
  input: DescribeEventTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DescribeEventTracker"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventTrackerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFeatureTransformationCommand = async (
  input: DescribeFeatureTransformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DescribeFeatureTransformation"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeFeatureTransformationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRecipeCommand = async (
  input: DescribeRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DescribeRecipe"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeRecipeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSchemaCommand = async (
  input: DescribeSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DescribeSchema"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSchemaRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSolutionCommand = async (
  input: DescribeSolutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DescribeSolution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSolutionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSolutionVersionCommand = async (
  input: DescribeSolutionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.DescribeSolutionVersion"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSolutionVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSolutionMetricsCommand = async (
  input: GetSolutionMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.GetSolutionMetrics"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSolutionMetricsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListBatchInferenceJobsCommand = async (
  input: ListBatchInferenceJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.ListBatchInferenceJobs"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListBatchInferenceJobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListCampaignsCommand = async (
  input: ListCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.ListCampaigns"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListCampaignsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatasetGroupsCommand = async (
  input: ListDatasetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.ListDatasetGroups"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDatasetGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatasetImportJobsCommand = async (
  input: ListDatasetImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.ListDatasetImportJobs"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDatasetImportJobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.ListDatasets"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDatasetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEventTrackersCommand = async (
  input: ListEventTrackersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.ListEventTrackers"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListEventTrackersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRecipesCommand = async (
  input: ListRecipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.ListRecipes"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.ListSchemas"
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
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.ListSolutions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListSolutionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSolutionVersionsCommand = async (
  input: ListSolutionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.ListSolutionVersions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListSolutionVersionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateCampaignCommand = async (
  input: UpdateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonPersonalize.UpdateCampaign"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateCampaignRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateBatchInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchInferenceJobCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateBatchInferenceJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBatchInferenceJobResponse(
    data,
    context
  );
  const response: CreateBatchInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBatchInferenceJobResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBatchInferenceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchInferenceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateCampaignResponse(data, context);
  const response: CreateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateCampaignResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDatasetResponse(data, context);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDatasetResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDatasetGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDatasetGroupResponse(data, context);
  const response: CreateDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDatasetGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDatasetImportJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDatasetImportJobResponse(
    data,
    context
  );
  const response: CreateDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDatasetImportJobResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDatasetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateEventTrackerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEventTrackerResponse(data, context);
  const response: CreateEventTrackerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateEventTrackerResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEventTrackerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventTrackerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSchemaResponse(data, context);
  const response: CreateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSchemaResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateSolutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSolutionResponse(data, context);
  const response: CreateSolutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSolutionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSolutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.personalize#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.personalize#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateSolutionVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSolutionVersionResponse(data, context);
  const response: CreateSolutionVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSolutionVersionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSolutionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolutionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCampaignCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCampaignCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDatasetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDatasetGroupCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteEventTrackerCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeleteEventTrackerCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEventTrackerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventTrackerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSchemaCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSchemaCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSolutionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSolutionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSolutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAlgorithmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAlgorithmResponse(data, context);
  const response: DescribeAlgorithmCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAlgorithmResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAlgorithmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlgorithmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeBatchInferenceJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBatchInferenceJobResponse(
    data,
    context
  );
  const response: DescribeBatchInferenceJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBatchInferenceJobResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBatchInferenceJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchInferenceJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeCampaignResponse(data, context);
  const response: DescribeCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCampaignResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDatasetResponse(data, context);
  const response: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDatasetResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDatasetGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDatasetGroupResponse(data, context);
  const response: DescribeDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDatasetGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDatasetImportJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDatasetImportJobResponse(
    data,
    context
  );
  const response: DescribeDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDatasetImportJobResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDatasetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEventTrackerCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventTrackerResponse(data, context);
  const response: DescribeEventTrackerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEventTrackerResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventTrackerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTrackerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeFeatureTransformationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFeatureTransformationResponse(
    data,
    context
  );
  const response: DescribeFeatureTransformationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeFeatureTransformationResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFeatureTransformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeatureTransformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeRecipeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRecipeResponse(data, context);
  const response: DescribeRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRecipeResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSchemaResponse(data, context);
  const response: DescribeSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSchemaResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSolutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSolutionResponse(data, context);
  const response: DescribeSolutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSolutionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSolutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSolutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSolutionVersionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSolutionVersionResponse(
    data,
    context
  );
  const response: DescribeSolutionVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSolutionVersionResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSolutionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSolutionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSolutionMetricsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSolutionMetricsResponse(data, context);
  const response: GetSolutionMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSolutionMetricsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSolutionMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolutionMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListBatchInferenceJobsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListBatchInferenceJobsResponse(
    data,
    context
  );
  const response: ListBatchInferenceJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBatchInferenceJobsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListBatchInferenceJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchInferenceJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListCampaignsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListCampaignsResponse(data, context);
  const response: ListCampaignsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCampaignsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListCampaignsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCampaignsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDatasetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDatasetGroupsResponse(data, context);
  const response: ListDatasetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDatasetGroupsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDatasetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDatasetImportJobsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDatasetImportJobsResponse(data, context);
  const response: ListDatasetImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDatasetImportJobsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDatasetImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDatasetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDatasetsResponse(data, context);
  const response: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDatasetsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListEventTrackersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventTrackersResponse(data, context);
  const response: ListEventTrackersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEventTrackersResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEventTrackersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventTrackersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRecipesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRecipesResponse(data, context);
  const response: ListRecipesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRecipesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRecipesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecipesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListSchemasCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSchemasResponse(data, context);
  const response: ListSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSchemasResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSchemasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListSolutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSolutionsResponse(data, context);
  const response: ListSolutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSolutionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSolutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListSolutionVersionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSolutionVersionsResponse(data, context);
  const response: ListSolutionVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSolutionVersionsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSolutionVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolutionVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.personalize#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateCampaignCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateCampaignResponse(data, context);
  const response: UpdateCampaignCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateCampaignResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateCampaignCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.personalize#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.personalize#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.personalize#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    body,
    context
  );
  const contents: InvalidInputException = {
    name: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    body,
    context
  );
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(
    body,
    context
  );
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    body,
    context
  );
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1ArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1AutoMLConfig = (
  input: AutoMLConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.metricName !== undefined && { metricName: input.metricName }),
    ...(input.recipeList !== undefined && {
      recipeList: serializeAws_json1_1ArnList(input.recipeList, context)
    })
  };
};

const serializeAws_json1_1BatchInferenceJobInput = (
  input: BatchInferenceJobInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.s3DataSource !== undefined && {
      s3DataSource: serializeAws_json1_1S3DataConfig(
        input.s3DataSource,
        context
      )
    })
  };
};

const serializeAws_json1_1BatchInferenceJobOutput = (
  input: BatchInferenceJobOutput,
  context: __SerdeContext
): any => {
  return {
    ...(input.s3DataDestination !== undefined && {
      s3DataDestination: serializeAws_json1_1S3DataConfig(
        input.s3DataDestination,
        context
      )
    })
  };
};

const serializeAws_json1_1CategoricalHyperParameterRange = (
  input: CategoricalHyperParameterRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.values !== undefined && {
      values: serializeAws_json1_1CategoricalValues(input.values, context)
    })
  };
};

const serializeAws_json1_1CategoricalHyperParameterRanges = (
  input: CategoricalHyperParameterRange[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1CategoricalHyperParameterRange(entry, context)
  );
};

const serializeAws_json1_1CategoricalValues = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ContinuousHyperParameterRange = (
  input: ContinuousHyperParameterRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxValue !== undefined && { maxValue: input.maxValue }),
    ...(input.minValue !== undefined && { minValue: input.minValue }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1ContinuousHyperParameterRanges = (
  input: ContinuousHyperParameterRange[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ContinuousHyperParameterRange(entry, context)
  );
};

const serializeAws_json1_1CreateBatchInferenceJobRequest = (
  input: CreateBatchInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.jobInput !== undefined && {
      jobInput: serializeAws_json1_1BatchInferenceJobInput(
        input.jobInput,
        context
      )
    }),
    ...(input.jobName !== undefined && { jobName: input.jobName }),
    ...(input.jobOutput !== undefined && {
      jobOutput: serializeAws_json1_1BatchInferenceJobOutput(
        input.jobOutput,
        context
      )
    }),
    ...(input.numResults !== undefined && { numResults: input.numResults }),
    ...(input.roleArn !== undefined && { roleArn: input.roleArn }),
    ...(input.solutionVersionArn !== undefined && {
      solutionVersionArn: input.solutionVersionArn
    })
  };
};

const serializeAws_json1_1CreateCampaignRequest = (
  input: CreateCampaignRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.minProvisionedTPS !== undefined && {
      minProvisionedTPS: input.minProvisionedTPS
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.solutionVersionArn !== undefined && {
      solutionVersionArn: input.solutionVersionArn
    })
  };
};

const serializeAws_json1_1CreateDatasetGroupRequest = (
  input: CreateDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.kmsKeyArn !== undefined && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.roleArn !== undefined && { roleArn: input.roleArn })
  };
};

const serializeAws_json1_1CreateDatasetImportJobRequest = (
  input: CreateDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.dataSource !== undefined && {
      dataSource: serializeAws_json1_1DataSource(input.dataSource, context)
    }),
    ...(input.datasetArn !== undefined && { datasetArn: input.datasetArn }),
    ...(input.jobName !== undefined && { jobName: input.jobName }),
    ...(input.roleArn !== undefined && { roleArn: input.roleArn })
  };
};

const serializeAws_json1_1CreateDatasetRequest = (
  input: CreateDatasetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn !== undefined && {
      datasetGroupArn: input.datasetGroupArn
    }),
    ...(input.datasetType !== undefined && { datasetType: input.datasetType }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.schemaArn !== undefined && { schemaArn: input.schemaArn })
  };
};

const serializeAws_json1_1CreateEventTrackerRequest = (
  input: CreateEventTrackerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn !== undefined && {
      datasetGroupArn: input.datasetGroupArn
    }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1CreateSchemaRequest = (
  input: CreateSchemaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.schema !== undefined && { schema: input.schema })
  };
};

const serializeAws_json1_1CreateSolutionRequest = (
  input: CreateSolutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn !== undefined && {
      datasetGroupArn: input.datasetGroupArn
    }),
    ...(input.eventType !== undefined && { eventType: input.eventType }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.performAutoML !== undefined && {
      performAutoML: input.performAutoML
    }),
    ...(input.performHPO !== undefined && { performHPO: input.performHPO }),
    ...(input.recipeArn !== undefined && { recipeArn: input.recipeArn }),
    ...(input.solutionConfig !== undefined && {
      solutionConfig: serializeAws_json1_1SolutionConfig(
        input.solutionConfig,
        context
      )
    })
  };
};

const serializeAws_json1_1CreateSolutionVersionRequest = (
  input: CreateSolutionVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.solutionArn !== undefined && { solutionArn: input.solutionArn }),
    ...(input.trainingMode !== undefined && {
      trainingMode: input.trainingMode
    })
  };
};

const serializeAws_json1_1DataSource = (
  input: DataSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.dataLocation !== undefined && {
      dataLocation: input.dataLocation
    })
  };
};

const serializeAws_json1_1DeleteCampaignRequest = (
  input: DeleteCampaignRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.campaignArn !== undefined && { campaignArn: input.campaignArn })
  };
};

const serializeAws_json1_1DeleteDatasetGroupRequest = (
  input: DeleteDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn !== undefined && {
      datasetGroupArn: input.datasetGroupArn
    })
  };
};

const serializeAws_json1_1DeleteDatasetRequest = (
  input: DeleteDatasetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetArn !== undefined && { datasetArn: input.datasetArn })
  };
};

const serializeAws_json1_1DeleteEventTrackerRequest = (
  input: DeleteEventTrackerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventTrackerArn !== undefined && {
      eventTrackerArn: input.eventTrackerArn
    })
  };
};

const serializeAws_json1_1DeleteSchemaRequest = (
  input: DeleteSchemaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.schemaArn !== undefined && { schemaArn: input.schemaArn })
  };
};

const serializeAws_json1_1DeleteSolutionRequest = (
  input: DeleteSolutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.solutionArn !== undefined && { solutionArn: input.solutionArn })
  };
};

const serializeAws_json1_1DescribeAlgorithmRequest = (
  input: DescribeAlgorithmRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.algorithmArn !== undefined && {
      algorithmArn: input.algorithmArn
    })
  };
};

const serializeAws_json1_1DescribeBatchInferenceJobRequest = (
  input: DescribeBatchInferenceJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.batchInferenceJobArn !== undefined && {
      batchInferenceJobArn: input.batchInferenceJobArn
    })
  };
};

const serializeAws_json1_1DescribeCampaignRequest = (
  input: DescribeCampaignRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.campaignArn !== undefined && { campaignArn: input.campaignArn })
  };
};

const serializeAws_json1_1DescribeDatasetGroupRequest = (
  input: DescribeDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn !== undefined && {
      datasetGroupArn: input.datasetGroupArn
    })
  };
};

const serializeAws_json1_1DescribeDatasetImportJobRequest = (
  input: DescribeDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetImportJobArn !== undefined && {
      datasetImportJobArn: input.datasetImportJobArn
    })
  };
};

const serializeAws_json1_1DescribeDatasetRequest = (
  input: DescribeDatasetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetArn !== undefined && { datasetArn: input.datasetArn })
  };
};

const serializeAws_json1_1DescribeEventTrackerRequest = (
  input: DescribeEventTrackerRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.eventTrackerArn !== undefined && {
      eventTrackerArn: input.eventTrackerArn
    })
  };
};

const serializeAws_json1_1DescribeFeatureTransformationRequest = (
  input: DescribeFeatureTransformationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.featureTransformationArn !== undefined && {
      featureTransformationArn: input.featureTransformationArn
    })
  };
};

const serializeAws_json1_1DescribeRecipeRequest = (
  input: DescribeRecipeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.recipeArn !== undefined && { recipeArn: input.recipeArn })
  };
};

const serializeAws_json1_1DescribeSchemaRequest = (
  input: DescribeSchemaRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.schemaArn !== undefined && { schemaArn: input.schemaArn })
  };
};

const serializeAws_json1_1DescribeSolutionRequest = (
  input: DescribeSolutionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.solutionArn !== undefined && { solutionArn: input.solutionArn })
  };
};

const serializeAws_json1_1DescribeSolutionVersionRequest = (
  input: DescribeSolutionVersionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.solutionVersionArn !== undefined && {
      solutionVersionArn: input.solutionVersionArn
    })
  };
};

const serializeAws_json1_1FeatureTransformationParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1GetSolutionMetricsRequest = (
  input: GetSolutionMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.solutionVersionArn !== undefined && {
      solutionVersionArn: input.solutionVersionArn
    })
  };
};

const serializeAws_json1_1HPOConfig = (
  input: HPOConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.algorithmHyperParameterRanges !== undefined && {
      algorithmHyperParameterRanges: serializeAws_json1_1HyperParameterRanges(
        input.algorithmHyperParameterRanges,
        context
      )
    }),
    ...(input.hpoObjective !== undefined && {
      hpoObjective: serializeAws_json1_1HPOObjective(
        input.hpoObjective,
        context
      )
    }),
    ...(input.hpoResourceConfig !== undefined && {
      hpoResourceConfig: serializeAws_json1_1HPOResourceConfig(
        input.hpoResourceConfig,
        context
      )
    })
  };
};

const serializeAws_json1_1HPOObjective = (
  input: HPOObjective,
  context: __SerdeContext
): any => {
  return {
    ...(input.metricName !== undefined && { metricName: input.metricName }),
    ...(input.metricRegex !== undefined && { metricRegex: input.metricRegex }),
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_json1_1HPOResourceConfig = (
  input: HPOResourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxNumberOfTrainingJobs !== undefined && {
      maxNumberOfTrainingJobs: input.maxNumberOfTrainingJobs
    }),
    ...(input.maxParallelTrainingJobs !== undefined && {
      maxParallelTrainingJobs: input.maxParallelTrainingJobs
    })
  };
};

const serializeAws_json1_1HyperParameterRanges = (
  input: HyperParameterRanges,
  context: __SerdeContext
): any => {
  return {
    ...(input.categoricalHyperParameterRanges !== undefined && {
      categoricalHyperParameterRanges: serializeAws_json1_1CategoricalHyperParameterRanges(
        input.categoricalHyperParameterRanges,
        context
      )
    }),
    ...(input.continuousHyperParameterRanges !== undefined && {
      continuousHyperParameterRanges: serializeAws_json1_1ContinuousHyperParameterRanges(
        input.continuousHyperParameterRanges,
        context
      )
    }),
    ...(input.integerHyperParameterRanges !== undefined && {
      integerHyperParameterRanges: serializeAws_json1_1IntegerHyperParameterRanges(
        input.integerHyperParameterRanges,
        context
      )
    })
  };
};

const serializeAws_json1_1HyperParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1IntegerHyperParameterRange = (
  input: IntegerHyperParameterRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxValue !== undefined && { maxValue: input.maxValue }),
    ...(input.minValue !== undefined && { minValue: input.minValue }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1IntegerHyperParameterRanges = (
  input: IntegerHyperParameterRange[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1IntegerHyperParameterRange(entry, context)
  );
};

const serializeAws_json1_1ListBatchInferenceJobsRequest = (
  input: ListBatchInferenceJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.solutionVersionArn !== undefined && {
      solutionVersionArn: input.solutionVersionArn
    })
  };
};

const serializeAws_json1_1ListCampaignsRequest = (
  input: ListCampaignsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.solutionArn !== undefined && { solutionArn: input.solutionArn })
  };
};

const serializeAws_json1_1ListDatasetGroupsRequest = (
  input: ListDatasetGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListDatasetImportJobsRequest = (
  input: ListDatasetImportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetArn !== undefined && { datasetArn: input.datasetArn }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListDatasetsRequest = (
  input: ListDatasetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn !== undefined && {
      datasetGroupArn: input.datasetGroupArn
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListEventTrackersRequest = (
  input: ListEventTrackersRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn !== undefined && {
      datasetGroupArn: input.datasetGroupArn
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListRecipesRequest = (
  input: ListRecipesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.recipeProvider !== undefined && {
      recipeProvider: input.recipeProvider
    })
  };
};

const serializeAws_json1_1ListSchemasRequest = (
  input: ListSchemasRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListSolutionsRequest = (
  input: ListSolutionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.datasetGroupArn !== undefined && {
      datasetGroupArn: input.datasetGroupArn
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
};

const serializeAws_json1_1ListSolutionVersionsRequest = (
  input: ListSolutionVersionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.solutionArn !== undefined && { solutionArn: input.solutionArn })
  };
};

const serializeAws_json1_1S3DataConfig = (
  input: S3DataConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.kmsKeyArn !== undefined && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.path !== undefined && { path: input.path })
  };
};

const serializeAws_json1_1SolutionConfig = (
  input: SolutionConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.algorithmHyperParameters !== undefined && {
      algorithmHyperParameters: serializeAws_json1_1HyperParameters(
        input.algorithmHyperParameters,
        context
      )
    }),
    ...(input.autoMLConfig !== undefined && {
      autoMLConfig: serializeAws_json1_1AutoMLConfig(
        input.autoMLConfig,
        context
      )
    }),
    ...(input.eventValueThreshold !== undefined && {
      eventValueThreshold: input.eventValueThreshold
    }),
    ...(input.featureTransformationParameters !== undefined && {
      featureTransformationParameters: serializeAws_json1_1FeatureTransformationParameters(
        input.featureTransformationParameters,
        context
      )
    }),
    ...(input.hpoConfig !== undefined && {
      hpoConfig: serializeAws_json1_1HPOConfig(input.hpoConfig, context)
    })
  };
};

const serializeAws_json1_1UpdateCampaignRequest = (
  input: UpdateCampaignRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.campaignArn !== undefined && { campaignArn: input.campaignArn }),
    ...(input.minProvisionedTPS !== undefined && {
      minProvisionedTPS: input.minProvisionedTPS
    }),
    ...(input.solutionVersionArn !== undefined && {
      solutionVersionArn: input.solutionVersionArn
    })
  };
};

const deserializeAws_json1_1Algorithm = (
  output: any,
  context: __SerdeContext
): Algorithm => {
  return {
    __type: "Algorithm",
    algorithmArn:
      output.algorithmArn !== undefined && output.algorithmArn !== null
        ? output.algorithmArn
        : undefined,
    algorithmImage:
      output.algorithmImage !== undefined && output.algorithmImage !== null
        ? deserializeAws_json1_1AlgorithmImage(output.algorithmImage, context)
        : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    defaultHyperParameterRanges:
      output.defaultHyperParameterRanges !== undefined &&
      output.defaultHyperParameterRanges !== null
        ? deserializeAws_json1_1DefaultHyperParameterRanges(
            output.defaultHyperParameterRanges,
            context
          )
        : undefined,
    defaultHyperParameters:
      output.defaultHyperParameters !== undefined &&
      output.defaultHyperParameters !== null
        ? deserializeAws_json1_1HyperParameters(
            output.defaultHyperParameters,
            context
          )
        : undefined,
    defaultResourceConfig:
      output.defaultResourceConfig !== undefined &&
      output.defaultResourceConfig !== null
        ? deserializeAws_json1_1ResourceConfig(
            output.defaultResourceConfig,
            context
          )
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    trainingInputMode:
      output.trainingInputMode !== undefined &&
      output.trainingInputMode !== null
        ? output.trainingInputMode
        : undefined
  } as any;
};

const deserializeAws_json1_1AlgorithmImage = (
  output: any,
  context: __SerdeContext
): AlgorithmImage => {
  return {
    __type: "AlgorithmImage",
    dockerURI:
      output.dockerURI !== undefined && output.dockerURI !== null
        ? output.dockerURI
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1ArnList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AutoMLConfig = (
  output: any,
  context: __SerdeContext
): AutoMLConfig => {
  return {
    __type: "AutoMLConfig",
    metricName:
      output.metricName !== undefined && output.metricName !== null
        ? output.metricName
        : undefined,
    recipeList:
      output.recipeList !== undefined && output.recipeList !== null
        ? deserializeAws_json1_1ArnList(output.recipeList, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1AutoMLResult = (
  output: any,
  context: __SerdeContext
): AutoMLResult => {
  return {
    __type: "AutoMLResult",
    bestRecipeArn:
      output.bestRecipeArn !== undefined && output.bestRecipeArn !== null
        ? output.bestRecipeArn
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchInferenceJob = (
  output: any,
  context: __SerdeContext
): BatchInferenceJob => {
  return {
    __type: "BatchInferenceJob",
    batchInferenceJobArn:
      output.batchInferenceJobArn !== undefined &&
      output.batchInferenceJobArn !== null
        ? output.batchInferenceJobArn
        : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? output.failureReason
        : undefined,
    jobInput:
      output.jobInput !== undefined && output.jobInput !== null
        ? deserializeAws_json1_1BatchInferenceJobInput(output.jobInput, context)
        : undefined,
    jobName:
      output.jobName !== undefined && output.jobName !== null
        ? output.jobName
        : undefined,
    jobOutput:
      output.jobOutput !== undefined && output.jobOutput !== null
        ? deserializeAws_json1_1BatchInferenceJobOutput(
            output.jobOutput,
            context
          )
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    numResults:
      output.numResults !== undefined && output.numResults !== null
        ? output.numResults
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    solutionVersionArn:
      output.solutionVersionArn !== undefined &&
      output.solutionVersionArn !== null
        ? output.solutionVersionArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchInferenceJobInput = (
  output: any,
  context: __SerdeContext
): BatchInferenceJobInput => {
  return {
    __type: "BatchInferenceJobInput",
    s3DataSource:
      output.s3DataSource !== undefined && output.s3DataSource !== null
        ? deserializeAws_json1_1S3DataConfig(output.s3DataSource, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchInferenceJobOutput = (
  output: any,
  context: __SerdeContext
): BatchInferenceJobOutput => {
  return {
    __type: "BatchInferenceJobOutput",
    s3DataDestination:
      output.s3DataDestination !== undefined &&
      output.s3DataDestination !== null
        ? deserializeAws_json1_1S3DataConfig(output.s3DataDestination, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchInferenceJobs = (
  output: any,
  context: __SerdeContext
): BatchInferenceJobSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchInferenceJobSummary(entry, context)
  );
};

const deserializeAws_json1_1BatchInferenceJobSummary = (
  output: any,
  context: __SerdeContext
): BatchInferenceJobSummary => {
  return {
    __type: "BatchInferenceJobSummary",
    batchInferenceJobArn:
      output.batchInferenceJobArn !== undefined &&
      output.batchInferenceJobArn !== null
        ? output.batchInferenceJobArn
        : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? output.failureReason
        : undefined,
    jobName:
      output.jobName !== undefined && output.jobName !== null
        ? output.jobName
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1Campaign = (
  output: any,
  context: __SerdeContext
): Campaign => {
  return {
    __type: "Campaign",
    campaignArn:
      output.campaignArn !== undefined && output.campaignArn !== null
        ? output.campaignArn
        : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? output.failureReason
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    latestCampaignUpdate:
      output.latestCampaignUpdate !== undefined &&
      output.latestCampaignUpdate !== null
        ? deserializeAws_json1_1CampaignUpdateSummary(
            output.latestCampaignUpdate,
            context
          )
        : undefined,
    minProvisionedTPS:
      output.minProvisionedTPS !== undefined &&
      output.minProvisionedTPS !== null
        ? output.minProvisionedTPS
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    solutionVersionArn:
      output.solutionVersionArn !== undefined &&
      output.solutionVersionArn !== null
        ? output.solutionVersionArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1Campaigns = (
  output: any,
  context: __SerdeContext
): CampaignSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CampaignSummary(entry, context)
  );
};

const deserializeAws_json1_1CampaignSummary = (
  output: any,
  context: __SerdeContext
): CampaignSummary => {
  return {
    __type: "CampaignSummary",
    campaignArn:
      output.campaignArn !== undefined && output.campaignArn !== null
        ? output.campaignArn
        : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? output.failureReason
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1CampaignUpdateSummary = (
  output: any,
  context: __SerdeContext
): CampaignUpdateSummary => {
  return {
    __type: "CampaignUpdateSummary",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? output.failureReason
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    minProvisionedTPS:
      output.minProvisionedTPS !== undefined &&
      output.minProvisionedTPS !== null
        ? output.minProvisionedTPS
        : undefined,
    solutionVersionArn:
      output.solutionVersionArn !== undefined &&
      output.solutionVersionArn !== null
        ? output.solutionVersionArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1CategoricalHyperParameterRange = (
  output: any,
  context: __SerdeContext
): CategoricalHyperParameterRange => {
  return {
    __type: "CategoricalHyperParameterRange",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    values:
      output.values !== undefined && output.values !== null
        ? deserializeAws_json1_1CategoricalValues(output.values, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1CategoricalHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): CategoricalHyperParameterRange[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CategoricalHyperParameterRange(entry, context)
  );
};

const deserializeAws_json1_1CategoricalValues = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ContinuousHyperParameterRange = (
  output: any,
  context: __SerdeContext
): ContinuousHyperParameterRange => {
  return {
    __type: "ContinuousHyperParameterRange",
    maxValue:
      output.maxValue !== undefined && output.maxValue !== null
        ? output.maxValue
        : undefined,
    minValue:
      output.minValue !== undefined && output.minValue !== null
        ? output.minValue
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1ContinuousHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): ContinuousHyperParameterRange[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ContinuousHyperParameterRange(entry, context)
  );
};

const deserializeAws_json1_1CreateBatchInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): CreateBatchInferenceJobResponse => {
  return {
    __type: "CreateBatchInferenceJobResponse",
    batchInferenceJobArn:
      output.batchInferenceJobArn !== undefined &&
      output.batchInferenceJobArn !== null
        ? output.batchInferenceJobArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateCampaignResponse = (
  output: any,
  context: __SerdeContext
): CreateCampaignResponse => {
  return {
    __type: "CreateCampaignResponse",
    campaignArn:
      output.campaignArn !== undefined && output.campaignArn !== null
        ? output.campaignArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateDatasetGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateDatasetGroupResponse => {
  return {
    __type: "CreateDatasetGroupResponse",
    datasetGroupArn:
      output.datasetGroupArn !== undefined && output.datasetGroupArn !== null
        ? output.datasetGroupArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): CreateDatasetImportJobResponse => {
  return {
    __type: "CreateDatasetImportJobResponse",
    datasetImportJobArn:
      output.datasetImportJobArn !== undefined &&
      output.datasetImportJobArn !== null
        ? output.datasetImportJobArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateDatasetResponse = (
  output: any,
  context: __SerdeContext
): CreateDatasetResponse => {
  return {
    __type: "CreateDatasetResponse",
    datasetArn:
      output.datasetArn !== undefined && output.datasetArn !== null
        ? output.datasetArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateEventTrackerResponse = (
  output: any,
  context: __SerdeContext
): CreateEventTrackerResponse => {
  return {
    __type: "CreateEventTrackerResponse",
    eventTrackerArn:
      output.eventTrackerArn !== undefined && output.eventTrackerArn !== null
        ? output.eventTrackerArn
        : undefined,
    trackingId:
      output.trackingId !== undefined && output.trackingId !== null
        ? output.trackingId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateSchemaResponse = (
  output: any,
  context: __SerdeContext
): CreateSchemaResponse => {
  return {
    __type: "CreateSchemaResponse",
    schemaArn:
      output.schemaArn !== undefined && output.schemaArn !== null
        ? output.schemaArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateSolutionResponse = (
  output: any,
  context: __SerdeContext
): CreateSolutionResponse => {
  return {
    __type: "CreateSolutionResponse",
    solutionArn:
      output.solutionArn !== undefined && output.solutionArn !== null
        ? output.solutionArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateSolutionVersionResponse = (
  output: any,
  context: __SerdeContext
): CreateSolutionVersionResponse => {
  return {
    __type: "CreateSolutionVersionResponse",
    solutionVersionArn:
      output.solutionVersionArn !== undefined &&
      output.solutionVersionArn !== null
        ? output.solutionVersionArn
        : undefined
  } as any;
};

const deserializeAws_json1_1Dataset = (
  output: any,
  context: __SerdeContext
): Dataset => {
  return {
    __type: "Dataset",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetArn:
      output.datasetArn !== undefined && output.datasetArn !== null
        ? output.datasetArn
        : undefined,
    datasetGroupArn:
      output.datasetGroupArn !== undefined && output.datasetGroupArn !== null
        ? output.datasetGroupArn
        : undefined,
    datasetType:
      output.datasetType !== undefined && output.datasetType !== null
        ? output.datasetType
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    schemaArn:
      output.schemaArn !== undefined && output.schemaArn !== null
        ? output.schemaArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1DatasetGroup = (
  output: any,
  context: __SerdeContext
): DatasetGroup => {
  return {
    __type: "DatasetGroup",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetGroupArn:
      output.datasetGroupArn !== undefined && output.datasetGroupArn !== null
        ? output.datasetGroupArn
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? output.failureReason
        : undefined,
    kmsKeyArn:
      output.kmsKeyArn !== undefined && output.kmsKeyArn !== null
        ? output.kmsKeyArn
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1DatasetGroups = (
  output: any,
  context: __SerdeContext
): DatasetGroupSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DatasetGroupSummary(entry, context)
  );
};

const deserializeAws_json1_1DatasetGroupSummary = (
  output: any,
  context: __SerdeContext
): DatasetGroupSummary => {
  return {
    __type: "DatasetGroupSummary",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetGroupArn:
      output.datasetGroupArn !== undefined && output.datasetGroupArn !== null
        ? output.datasetGroupArn
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? output.failureReason
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1DatasetImportJob = (
  output: any,
  context: __SerdeContext
): DatasetImportJob => {
  return {
    __type: "DatasetImportJob",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    dataSource:
      output.dataSource !== undefined && output.dataSource !== null
        ? deserializeAws_json1_1DataSource(output.dataSource, context)
        : undefined,
    datasetArn:
      output.datasetArn !== undefined && output.datasetArn !== null
        ? output.datasetArn
        : undefined,
    datasetImportJobArn:
      output.datasetImportJobArn !== undefined &&
      output.datasetImportJobArn !== null
        ? output.datasetImportJobArn
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? output.failureReason
        : undefined,
    jobName:
      output.jobName !== undefined && output.jobName !== null
        ? output.jobName
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1DatasetImportJobs = (
  output: any,
  context: __SerdeContext
): DatasetImportJobSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DatasetImportJobSummary(entry, context)
  );
};

const deserializeAws_json1_1DatasetImportJobSummary = (
  output: any,
  context: __SerdeContext
): DatasetImportJobSummary => {
  return {
    __type: "DatasetImportJobSummary",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetImportJobArn:
      output.datasetImportJobArn !== undefined &&
      output.datasetImportJobArn !== null
        ? output.datasetImportJobArn
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? output.failureReason
        : undefined,
    jobName:
      output.jobName !== undefined && output.jobName !== null
        ? output.jobName
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1Datasets = (
  output: any,
  context: __SerdeContext
): DatasetSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DatasetSummary(entry, context)
  );
};

const deserializeAws_json1_1DatasetSchema = (
  output: any,
  context: __SerdeContext
): DatasetSchema => {
  return {
    __type: "DatasetSchema",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    schema:
      output.schema !== undefined && output.schema !== null
        ? output.schema
        : undefined,
    schemaArn:
      output.schemaArn !== undefined && output.schemaArn !== null
        ? output.schemaArn
        : undefined
  } as any;
};

const deserializeAws_json1_1DatasetSchemaSummary = (
  output: any,
  context: __SerdeContext
): DatasetSchemaSummary => {
  return {
    __type: "DatasetSchemaSummary",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    schemaArn:
      output.schemaArn !== undefined && output.schemaArn !== null
        ? output.schemaArn
        : undefined
  } as any;
};

const deserializeAws_json1_1DatasetSummary = (
  output: any,
  context: __SerdeContext
): DatasetSummary => {
  return {
    __type: "DatasetSummary",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetArn:
      output.datasetArn !== undefined && output.datasetArn !== null
        ? output.datasetArn
        : undefined,
    datasetType:
      output.datasetType !== undefined && output.datasetType !== null
        ? output.datasetType
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1DataSource = (
  output: any,
  context: __SerdeContext
): DataSource => {
  return {
    __type: "DataSource",
    dataLocation:
      output.dataLocation !== undefined && output.dataLocation !== null
        ? output.dataLocation
        : undefined
  } as any;
};

const deserializeAws_json1_1DefaultCategoricalHyperParameterRange = (
  output: any,
  context: __SerdeContext
): DefaultCategoricalHyperParameterRange => {
  return {
    __type: "DefaultCategoricalHyperParameterRange",
    isTunable:
      output.isTunable !== undefined && output.isTunable !== null
        ? output.isTunable
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    values:
      output.values !== undefined && output.values !== null
        ? deserializeAws_json1_1CategoricalValues(output.values, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DefaultCategoricalHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultCategoricalHyperParameterRange[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DefaultCategoricalHyperParameterRange(entry, context)
  );
};

const deserializeAws_json1_1DefaultContinuousHyperParameterRange = (
  output: any,
  context: __SerdeContext
): DefaultContinuousHyperParameterRange => {
  return {
    __type: "DefaultContinuousHyperParameterRange",
    isTunable:
      output.isTunable !== undefined && output.isTunable !== null
        ? output.isTunable
        : undefined,
    maxValue:
      output.maxValue !== undefined && output.maxValue !== null
        ? output.maxValue
        : undefined,
    minValue:
      output.minValue !== undefined && output.minValue !== null
        ? output.minValue
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1DefaultContinuousHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultContinuousHyperParameterRange[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DefaultContinuousHyperParameterRange(entry, context)
  );
};

const deserializeAws_json1_1DefaultHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultHyperParameterRanges => {
  return {
    __type: "DefaultHyperParameterRanges",
    categoricalHyperParameterRanges:
      output.categoricalHyperParameterRanges !== undefined &&
      output.categoricalHyperParameterRanges !== null
        ? deserializeAws_json1_1DefaultCategoricalHyperParameterRanges(
            output.categoricalHyperParameterRanges,
            context
          )
        : undefined,
    continuousHyperParameterRanges:
      output.continuousHyperParameterRanges !== undefined &&
      output.continuousHyperParameterRanges !== null
        ? deserializeAws_json1_1DefaultContinuousHyperParameterRanges(
            output.continuousHyperParameterRanges,
            context
          )
        : undefined,
    integerHyperParameterRanges:
      output.integerHyperParameterRanges !== undefined &&
      output.integerHyperParameterRanges !== null
        ? deserializeAws_json1_1DefaultIntegerHyperParameterRanges(
            output.integerHyperParameterRanges,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DefaultIntegerHyperParameterRange = (
  output: any,
  context: __SerdeContext
): DefaultIntegerHyperParameterRange => {
  return {
    __type: "DefaultIntegerHyperParameterRange",
    isTunable:
      output.isTunable !== undefined && output.isTunable !== null
        ? output.isTunable
        : undefined,
    maxValue:
      output.maxValue !== undefined && output.maxValue !== null
        ? output.maxValue
        : undefined,
    minValue:
      output.minValue !== undefined && output.minValue !== null
        ? output.minValue
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1DefaultIntegerHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultIntegerHyperParameterRange[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DefaultIntegerHyperParameterRange(entry, context)
  );
};

const deserializeAws_json1_1DescribeAlgorithmResponse = (
  output: any,
  context: __SerdeContext
): DescribeAlgorithmResponse => {
  return {
    __type: "DescribeAlgorithmResponse",
    algorithm:
      output.algorithm !== undefined && output.algorithm !== null
        ? deserializeAws_json1_1Algorithm(output.algorithm, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeBatchInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeBatchInferenceJobResponse => {
  return {
    __type: "DescribeBatchInferenceJobResponse",
    batchInferenceJob:
      output.batchInferenceJob !== undefined &&
      output.batchInferenceJob !== null
        ? deserializeAws_json1_1BatchInferenceJob(
            output.batchInferenceJob,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeCampaignResponse = (
  output: any,
  context: __SerdeContext
): DescribeCampaignResponse => {
  return {
    __type: "DescribeCampaignResponse",
    campaign:
      output.campaign !== undefined && output.campaign !== null
        ? deserializeAws_json1_1Campaign(output.campaign, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeDatasetGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetGroupResponse => {
  return {
    __type: "DescribeDatasetGroupResponse",
    datasetGroup:
      output.datasetGroup !== undefined && output.datasetGroup !== null
        ? deserializeAws_json1_1DatasetGroup(output.datasetGroup, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetImportJobResponse => {
  return {
    __type: "DescribeDatasetImportJobResponse",
    datasetImportJob:
      output.datasetImportJob !== undefined && output.datasetImportJob !== null
        ? deserializeAws_json1_1DatasetImportJob(
            output.datasetImportJob,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeDatasetResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetResponse => {
  return {
    __type: "DescribeDatasetResponse",
    dataset:
      output.dataset !== undefined && output.dataset !== null
        ? deserializeAws_json1_1Dataset(output.dataset, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEventTrackerResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventTrackerResponse => {
  return {
    __type: "DescribeEventTrackerResponse",
    eventTracker:
      output.eventTracker !== undefined && output.eventTracker !== null
        ? deserializeAws_json1_1EventTracker(output.eventTracker, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeFeatureTransformationResponse = (
  output: any,
  context: __SerdeContext
): DescribeFeatureTransformationResponse => {
  return {
    __type: "DescribeFeatureTransformationResponse",
    featureTransformation:
      output.featureTransformation !== undefined &&
      output.featureTransformation !== null
        ? deserializeAws_json1_1FeatureTransformation(
            output.featureTransformation,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeRecipeResponse = (
  output: any,
  context: __SerdeContext
): DescribeRecipeResponse => {
  return {
    __type: "DescribeRecipeResponse",
    recipe:
      output.recipe !== undefined && output.recipe !== null
        ? deserializeAws_json1_1Recipe(output.recipe, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeSchemaResponse = (
  output: any,
  context: __SerdeContext
): DescribeSchemaResponse => {
  return {
    __type: "DescribeSchemaResponse",
    schema:
      output.schema !== undefined && output.schema !== null
        ? deserializeAws_json1_1DatasetSchema(output.schema, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeSolutionResponse = (
  output: any,
  context: __SerdeContext
): DescribeSolutionResponse => {
  return {
    __type: "DescribeSolutionResponse",
    solution:
      output.solution !== undefined && output.solution !== null
        ? deserializeAws_json1_1Solution(output.solution, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeSolutionVersionResponse = (
  output: any,
  context: __SerdeContext
): DescribeSolutionVersionResponse => {
  return {
    __type: "DescribeSolutionVersionResponse",
    solutionVersion:
      output.solutionVersion !== undefined && output.solutionVersion !== null
        ? deserializeAws_json1_1SolutionVersion(output.solutionVersion, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1EventTracker = (
  output: any,
  context: __SerdeContext
): EventTracker => {
  return {
    __type: "EventTracker",
    accountId:
      output.accountId !== undefined && output.accountId !== null
        ? output.accountId
        : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetGroupArn:
      output.datasetGroupArn !== undefined && output.datasetGroupArn !== null
        ? output.datasetGroupArn
        : undefined,
    eventTrackerArn:
      output.eventTrackerArn !== undefined && output.eventTrackerArn !== null
        ? output.eventTrackerArn
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    trackingId:
      output.trackingId !== undefined && output.trackingId !== null
        ? output.trackingId
        : undefined
  } as any;
};

const deserializeAws_json1_1EventTrackers = (
  output: any,
  context: __SerdeContext
): EventTrackerSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventTrackerSummary(entry, context)
  );
};

const deserializeAws_json1_1EventTrackerSummary = (
  output: any,
  context: __SerdeContext
): EventTrackerSummary => {
  return {
    __type: "EventTrackerSummary",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    eventTrackerArn:
      output.eventTrackerArn !== undefined && output.eventTrackerArn !== null
        ? output.eventTrackerArn
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1FeatureTransformation = (
  output: any,
  context: __SerdeContext
): FeatureTransformation => {
  return {
    __type: "FeatureTransformation",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    defaultParameters:
      output.defaultParameters !== undefined &&
      output.defaultParameters !== null
        ? deserializeAws_json1_1FeaturizationParameters(
            output.defaultParameters,
            context
          )
        : undefined,
    featureTransformationArn:
      output.featureTransformationArn !== undefined &&
      output.featureTransformationArn !== null
        ? output.featureTransformationArn
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1FeatureTransformationParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1FeaturizationParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1GetSolutionMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetSolutionMetricsResponse => {
  return {
    __type: "GetSolutionMetricsResponse",
    metrics:
      output.metrics !== undefined && output.metrics !== null
        ? deserializeAws_json1_1Metrics(output.metrics, context)
        : undefined,
    solutionVersionArn:
      output.solutionVersionArn !== undefined &&
      output.solutionVersionArn !== null
        ? output.solutionVersionArn
        : undefined
  } as any;
};

const deserializeAws_json1_1HPOConfig = (
  output: any,
  context: __SerdeContext
): HPOConfig => {
  return {
    __type: "HPOConfig",
    algorithmHyperParameterRanges:
      output.algorithmHyperParameterRanges !== undefined &&
      output.algorithmHyperParameterRanges !== null
        ? deserializeAws_json1_1HyperParameterRanges(
            output.algorithmHyperParameterRanges,
            context
          )
        : undefined,
    hpoObjective:
      output.hpoObjective !== undefined && output.hpoObjective !== null
        ? deserializeAws_json1_1HPOObjective(output.hpoObjective, context)
        : undefined,
    hpoResourceConfig:
      output.hpoResourceConfig !== undefined &&
      output.hpoResourceConfig !== null
        ? deserializeAws_json1_1HPOResourceConfig(
            output.hpoResourceConfig,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1HPOObjective = (
  output: any,
  context: __SerdeContext
): HPOObjective => {
  return {
    __type: "HPOObjective",
    metricName:
      output.metricName !== undefined && output.metricName !== null
        ? output.metricName
        : undefined,
    metricRegex:
      output.metricRegex !== undefined && output.metricRegex !== null
        ? output.metricRegex
        : undefined,
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_json1_1HPOResourceConfig = (
  output: any,
  context: __SerdeContext
): HPOResourceConfig => {
  return {
    __type: "HPOResourceConfig",
    maxNumberOfTrainingJobs:
      output.maxNumberOfTrainingJobs !== undefined &&
      output.maxNumberOfTrainingJobs !== null
        ? output.maxNumberOfTrainingJobs
        : undefined,
    maxParallelTrainingJobs:
      output.maxParallelTrainingJobs !== undefined &&
      output.maxParallelTrainingJobs !== null
        ? output.maxParallelTrainingJobs
        : undefined
  } as any;
};

const deserializeAws_json1_1HyperParameterRanges = (
  output: any,
  context: __SerdeContext
): HyperParameterRanges => {
  return {
    __type: "HyperParameterRanges",
    categoricalHyperParameterRanges:
      output.categoricalHyperParameterRanges !== undefined &&
      output.categoricalHyperParameterRanges !== null
        ? deserializeAws_json1_1CategoricalHyperParameterRanges(
            output.categoricalHyperParameterRanges,
            context
          )
        : undefined,
    continuousHyperParameterRanges:
      output.continuousHyperParameterRanges !== undefined &&
      output.continuousHyperParameterRanges !== null
        ? deserializeAws_json1_1ContinuousHyperParameterRanges(
            output.continuousHyperParameterRanges,
            context
          )
        : undefined,
    integerHyperParameterRanges:
      output.integerHyperParameterRanges !== undefined &&
      output.integerHyperParameterRanges !== null
        ? deserializeAws_json1_1IntegerHyperParameterRanges(
            output.integerHyperParameterRanges,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1HyperParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1IntegerHyperParameterRange = (
  output: any,
  context: __SerdeContext
): IntegerHyperParameterRange => {
  return {
    __type: "IntegerHyperParameterRange",
    maxValue:
      output.maxValue !== undefined && output.maxValue !== null
        ? output.maxValue
        : undefined,
    minValue:
      output.minValue !== undefined && output.minValue !== null
        ? output.minValue
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1IntegerHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): IntegerHyperParameterRange[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IntegerHyperParameterRange(entry, context)
  );
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  return {
    __type: "InvalidInputException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    __type: "InvalidNextTokenException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListBatchInferenceJobsResponse = (
  output: any,
  context: __SerdeContext
): ListBatchInferenceJobsResponse => {
  return {
    __type: "ListBatchInferenceJobsResponse",
    batchInferenceJobs:
      output.batchInferenceJobs !== undefined &&
      output.batchInferenceJobs !== null
        ? deserializeAws_json1_1BatchInferenceJobs(
            output.batchInferenceJobs,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListCampaignsResponse = (
  output: any,
  context: __SerdeContext
): ListCampaignsResponse => {
  return {
    __type: "ListCampaignsResponse",
    campaigns:
      output.campaigns !== undefined && output.campaigns !== null
        ? deserializeAws_json1_1Campaigns(output.campaigns, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListDatasetGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetGroupsResponse => {
  return {
    __type: "ListDatasetGroupsResponse",
    datasetGroups:
      output.datasetGroups !== undefined && output.datasetGroups !== null
        ? deserializeAws_json1_1DatasetGroups(output.datasetGroups, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListDatasetImportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetImportJobsResponse => {
  return {
    __type: "ListDatasetImportJobsResponse",
    datasetImportJobs:
      output.datasetImportJobs !== undefined &&
      output.datasetImportJobs !== null
        ? deserializeAws_json1_1DatasetImportJobs(
            output.datasetImportJobs,
            context
          )
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListDatasetsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetsResponse => {
  return {
    __type: "ListDatasetsResponse",
    datasets:
      output.datasets !== undefined && output.datasets !== null
        ? deserializeAws_json1_1Datasets(output.datasets, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListEventTrackersResponse = (
  output: any,
  context: __SerdeContext
): ListEventTrackersResponse => {
  return {
    __type: "ListEventTrackersResponse",
    eventTrackers:
      output.eventTrackers !== undefined && output.eventTrackers !== null
        ? deserializeAws_json1_1EventTrackers(output.eventTrackers, context)
        : undefined,
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListRecipesResponse = (
  output: any,
  context: __SerdeContext
): ListRecipesResponse => {
  return {
    __type: "ListRecipesResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    recipes:
      output.recipes !== undefined && output.recipes !== null
        ? deserializeAws_json1_1Recipes(output.recipes, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListSchemasResponse = (
  output: any,
  context: __SerdeContext
): ListSchemasResponse => {
  return {
    __type: "ListSchemasResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    schemas:
      output.schemas !== undefined && output.schemas !== null
        ? deserializeAws_json1_1Schemas(output.schemas, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListSolutionsResponse = (
  output: any,
  context: __SerdeContext
): ListSolutionsResponse => {
  return {
    __type: "ListSolutionsResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    solutions:
      output.solutions !== undefined && output.solutions !== null
        ? deserializeAws_json1_1Solutions(output.solutions, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListSolutionVersionsResponse = (
  output: any,
  context: __SerdeContext
): ListSolutionVersionsResponse => {
  return {
    __type: "ListSolutionVersionsResponse",
    nextToken:
      output.nextToken !== undefined && output.nextToken !== null
        ? output.nextToken
        : undefined,
    solutionVersions:
      output.solutionVersions !== undefined && output.solutionVersions !== null
        ? deserializeAws_json1_1SolutionVersions(
            output.solutionVersions,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1Metrics = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: number }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1Recipe = (
  output: any,
  context: __SerdeContext
): Recipe => {
  return {
    __type: "Recipe",
    algorithmArn:
      output.algorithmArn !== undefined && output.algorithmArn !== null
        ? output.algorithmArn
        : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    featureTransformationArn:
      output.featureTransformationArn !== undefined &&
      output.featureTransformationArn !== null
        ? output.featureTransformationArn
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    recipeArn:
      output.recipeArn !== undefined && output.recipeArn !== null
        ? output.recipeArn
        : undefined,
    recipeType:
      output.recipeType !== undefined && output.recipeType !== null
        ? output.recipeType
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1Recipes = (
  output: any,
  context: __SerdeContext
): RecipeSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RecipeSummary(entry, context)
  );
};

const deserializeAws_json1_1RecipeSummary = (
  output: any,
  context: __SerdeContext
): RecipeSummary => {
  return {
    __type: "RecipeSummary",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    recipeArn:
      output.recipeArn !== undefined && output.recipeArn !== null
        ? output.recipeArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    __type: "ResourceAlreadyExistsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceConfig = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  return {
    __type: "ResourceInUseException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1S3DataConfig = (
  output: any,
  context: __SerdeContext
): S3DataConfig => {
  return {
    __type: "S3DataConfig",
    kmsKeyArn:
      output.kmsKeyArn !== undefined && output.kmsKeyArn !== null
        ? output.kmsKeyArn
        : undefined,
    path:
      output.path !== undefined && output.path !== null
        ? output.path
        : undefined
  } as any;
};

const deserializeAws_json1_1Schemas = (
  output: any,
  context: __SerdeContext
): DatasetSchemaSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DatasetSchemaSummary(entry, context)
  );
};

const deserializeAws_json1_1Solution = (
  output: any,
  context: __SerdeContext
): Solution => {
  return {
    __type: "Solution",
    autoMLResult:
      output.autoMLResult !== undefined && output.autoMLResult !== null
        ? deserializeAws_json1_1AutoMLResult(output.autoMLResult, context)
        : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetGroupArn:
      output.datasetGroupArn !== undefined && output.datasetGroupArn !== null
        ? output.datasetGroupArn
        : undefined,
    eventType:
      output.eventType !== undefined && output.eventType !== null
        ? output.eventType
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    latestSolutionVersion:
      output.latestSolutionVersion !== undefined &&
      output.latestSolutionVersion !== null
        ? deserializeAws_json1_1SolutionVersionSummary(
            output.latestSolutionVersion,
            context
          )
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    performAutoML:
      output.performAutoML !== undefined && output.performAutoML !== null
        ? output.performAutoML
        : undefined,
    performHPO:
      output.performHPO !== undefined && output.performHPO !== null
        ? output.performHPO
        : undefined,
    recipeArn:
      output.recipeArn !== undefined && output.recipeArn !== null
        ? output.recipeArn
        : undefined,
    solutionArn:
      output.solutionArn !== undefined && output.solutionArn !== null
        ? output.solutionArn
        : undefined,
    solutionConfig:
      output.solutionConfig !== undefined && output.solutionConfig !== null
        ? deserializeAws_json1_1SolutionConfig(output.solutionConfig, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1SolutionConfig = (
  output: any,
  context: __SerdeContext
): SolutionConfig => {
  return {
    __type: "SolutionConfig",
    algorithmHyperParameters:
      output.algorithmHyperParameters !== undefined &&
      output.algorithmHyperParameters !== null
        ? deserializeAws_json1_1HyperParameters(
            output.algorithmHyperParameters,
            context
          )
        : undefined,
    autoMLConfig:
      output.autoMLConfig !== undefined && output.autoMLConfig !== null
        ? deserializeAws_json1_1AutoMLConfig(output.autoMLConfig, context)
        : undefined,
    eventValueThreshold:
      output.eventValueThreshold !== undefined &&
      output.eventValueThreshold !== null
        ? output.eventValueThreshold
        : undefined,
    featureTransformationParameters:
      output.featureTransformationParameters !== undefined &&
      output.featureTransformationParameters !== null
        ? deserializeAws_json1_1FeatureTransformationParameters(
            output.featureTransformationParameters,
            context
          )
        : undefined,
    hpoConfig:
      output.hpoConfig !== undefined && output.hpoConfig !== null
        ? deserializeAws_json1_1HPOConfig(output.hpoConfig, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1Solutions = (
  output: any,
  context: __SerdeContext
): SolutionSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SolutionSummary(entry, context)
  );
};

const deserializeAws_json1_1SolutionSummary = (
  output: any,
  context: __SerdeContext
): SolutionSummary => {
  return {
    __type: "SolutionSummary",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    solutionArn:
      output.solutionArn !== undefined && output.solutionArn !== null
        ? output.solutionArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1SolutionVersion = (
  output: any,
  context: __SerdeContext
): SolutionVersion => {
  return {
    __type: "SolutionVersion",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    datasetGroupArn:
      output.datasetGroupArn !== undefined && output.datasetGroupArn !== null
        ? output.datasetGroupArn
        : undefined,
    eventType:
      output.eventType !== undefined && output.eventType !== null
        ? output.eventType
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? output.failureReason
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    performAutoML:
      output.performAutoML !== undefined && output.performAutoML !== null
        ? output.performAutoML
        : undefined,
    performHPO:
      output.performHPO !== undefined && output.performHPO !== null
        ? output.performHPO
        : undefined,
    recipeArn:
      output.recipeArn !== undefined && output.recipeArn !== null
        ? output.recipeArn
        : undefined,
    solutionArn:
      output.solutionArn !== undefined && output.solutionArn !== null
        ? output.solutionArn
        : undefined,
    solutionConfig:
      output.solutionConfig !== undefined && output.solutionConfig !== null
        ? deserializeAws_json1_1SolutionConfig(output.solutionConfig, context)
        : undefined,
    solutionVersionArn:
      output.solutionVersionArn !== undefined &&
      output.solutionVersionArn !== null
        ? output.solutionVersionArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    trainingHours:
      output.trainingHours !== undefined && output.trainingHours !== null
        ? output.trainingHours
        : undefined,
    trainingMode:
      output.trainingMode !== undefined && output.trainingMode !== null
        ? output.trainingMode
        : undefined
  } as any;
};

const deserializeAws_json1_1SolutionVersions = (
  output: any,
  context: __SerdeContext
): SolutionVersionSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SolutionVersionSummary(entry, context)
  );
};

const deserializeAws_json1_1SolutionVersionSummary = (
  output: any,
  context: __SerdeContext
): SolutionVersionSummary => {
  return {
    __type: "SolutionVersionSummary",
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? output.failureReason
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined &&
      output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    solutionVersionArn:
      output.solutionVersionArn !== undefined &&
      output.solutionVersionArn !== null
        ? output.solutionVersionArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_json1_1UpdateCampaignResponse = (
  output: any,
  context: __SerdeContext
): UpdateCampaignResponse => {
  return {
    __type: "UpdateCampaignResponse",
    campaignArn:
      output.campaignArn !== undefined && output.campaignArn !== null
        ? output.campaignArn
        : undefined
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

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
    headers
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
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
