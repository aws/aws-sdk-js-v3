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

export async function serializeAws_json1_1CreateBatchInferenceJobCommand(
  input: CreateBatchInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.CreateBatchInferenceJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateBatchInferenceJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateCampaignCommand(
  input: CreateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.CreateCampaign";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateCampaignRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateDatasetCommand(
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.CreateDataset";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDatasetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateDatasetGroupCommand(
  input: CreateDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.CreateDatasetGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDatasetGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateDatasetImportJobCommand(
  input: CreateDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.CreateDatasetImportJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDatasetImportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateEventTrackerCommand(
  input: CreateEventTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.CreateEventTracker";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateEventTrackerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateSchemaCommand(
  input: CreateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.CreateSchema";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSchemaRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateSolutionCommand(
  input: CreateSolutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.CreateSolution";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSolutionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateSolutionVersionCommand(
  input: CreateSolutionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.CreateSolutionVersion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSolutionVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteCampaignCommand(
  input: DeleteCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DeleteCampaign";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteCampaignRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteDatasetCommand(
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DeleteDataset";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDatasetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteDatasetGroupCommand(
  input: DeleteDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DeleteDatasetGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDatasetGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteEventTrackerCommand(
  input: DeleteEventTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DeleteEventTracker";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteEventTrackerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteSchemaCommand(
  input: DeleteSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DeleteSchema";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSchemaRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteSolutionCommand(
  input: DeleteSolutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DeleteSolution";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSolutionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeAlgorithmCommand(
  input: DescribeAlgorithmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DescribeAlgorithm";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAlgorithmRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeBatchInferenceJobCommand(
  input: DescribeBatchInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DescribeBatchInferenceJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeBatchInferenceJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeCampaignCommand(
  input: DescribeCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DescribeCampaign";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeCampaignRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeDatasetCommand(
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DescribeDataset";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDatasetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeDatasetGroupCommand(
  input: DescribeDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DescribeDatasetGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDatasetGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeDatasetImportJobCommand(
  input: DescribeDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DescribeDatasetImportJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDatasetImportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeEventTrackerCommand(
  input: DescribeEventTrackerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DescribeEventTracker";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventTrackerRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeFeatureTransformationCommand(
  input: DescribeFeatureTransformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DescribeFeatureTransformation";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeFeatureTransformationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeRecipeCommand(
  input: DescribeRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DescribeRecipe";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeRecipeRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeSchemaCommand(
  input: DescribeSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DescribeSchema";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSchemaRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeSolutionCommand(
  input: DescribeSolutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DescribeSolution";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSolutionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeSolutionVersionCommand(
  input: DescribeSolutionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.DescribeSolutionVersion";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSolutionVersionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetSolutionMetricsCommand(
  input: GetSolutionMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.GetSolutionMetrics";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSolutionMetricsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListBatchInferenceJobsCommand(
  input: ListBatchInferenceJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.ListBatchInferenceJobs";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListBatchInferenceJobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListCampaignsCommand(
  input: ListCampaignsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.ListCampaigns";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListCampaignsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDatasetGroupsCommand(
  input: ListDatasetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.ListDatasetGroups";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDatasetGroupsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDatasetImportJobsCommand(
  input: ListDatasetImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.ListDatasetImportJobs";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDatasetImportJobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDatasetsCommand(
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.ListDatasets";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDatasetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListEventTrackersCommand(
  input: ListEventTrackersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.ListEventTrackers";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListEventTrackersRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListRecipesCommand(
  input: ListRecipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.ListRecipes";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRecipesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListSchemasCommand(
  input: ListSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.ListSchemas";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSchemasRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListSolutionVersionsCommand(
  input: ListSolutionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.ListSolutionVersions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListSolutionVersionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListSolutionsCommand(
  input: ListSolutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.ListSolutions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListSolutionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateCampaignCommand(
  input: UpdateCampaignCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonPersonalize.UpdateCampaign";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateCampaignRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CreateBatchInferenceJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchInferenceJobCommandOutput> {
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
}

async function deserializeAws_json1_1CreateBatchInferenceJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchInferenceJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateCampaignCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> {
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
}

async function deserializeAws_json1_1CreateCampaignCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCampaignCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateDatasetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> {
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
}

async function deserializeAws_json1_1CreateDatasetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateDatasetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetGroupCommandOutput> {
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
}

async function deserializeAws_json1_1CreateDatasetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateDatasetImportJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetImportJobCommandOutput> {
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
}

async function deserializeAws_json1_1CreateDatasetImportJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetImportJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateEventTrackerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventTrackerCommandOutput> {
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
}

async function deserializeAws_json1_1CreateEventTrackerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventTrackerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateSchemaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> {
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
}

async function deserializeAws_json1_1CreateSchemaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateSolutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolutionCommandOutput> {
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
}

async function deserializeAws_json1_1CreateSolutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolutionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.personalize.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.services.personalize.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateSolutionVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolutionVersionCommandOutput> {
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
}

async function deserializeAws_json1_1CreateSolutionVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSolutionVersionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteCampaignCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteCampaignCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCampaignCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteCampaignCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCampaignCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteDatasetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDatasetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDatasetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteDatasetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetGroupCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteDatasetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteEventTrackerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventTrackerCommandOutput> {
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
}

async function deserializeAws_json1_1DeleteEventTrackerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventTrackerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteSchemaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSchemaCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSchemaCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteSchemaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteSolutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolutionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSolutionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSolutionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteSolutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSolutionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeAlgorithmCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlgorithmCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeAlgorithmCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlgorithmCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeBatchInferenceJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchInferenceJobCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeBatchInferenceJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchInferenceJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeCampaignCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCampaignCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeCampaignCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCampaignCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeDatasetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeDatasetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeDatasetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetGroupCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeDatasetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetGroupCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeDatasetImportJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetImportJobCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeDatasetImportJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetImportJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeEventTrackerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTrackerCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeEventTrackerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventTrackerCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeFeatureTransformationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeatureTransformationCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeFeatureTransformationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeatureTransformationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeRecipeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecipeCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeRecipeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecipeCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeSchemaCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchemaCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeSchemaCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchemaCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeSolutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSolutionCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeSolutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSolutionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeSolutionVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSolutionVersionCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeSolutionVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSolutionVersionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetSolutionMetricsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolutionMetricsCommandOutput> {
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
}

async function deserializeAws_json1_1GetSolutionMetricsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSolutionMetricsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListBatchInferenceJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchInferenceJobsCommandOutput> {
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
}

async function deserializeAws_json1_1ListBatchInferenceJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBatchInferenceJobsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListCampaignsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCampaignsCommandOutput> {
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
}

async function deserializeAws_json1_1ListCampaignsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCampaignsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListDatasetGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetGroupsCommandOutput> {
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
}

async function deserializeAws_json1_1ListDatasetGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetGroupsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListDatasetImportJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetImportJobsCommandOutput> {
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
}

async function deserializeAws_json1_1ListDatasetImportJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetImportJobsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListDatasetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> {
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
}

async function deserializeAws_json1_1ListDatasetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListEventTrackersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventTrackersCommandOutput> {
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
}

async function deserializeAws_json1_1ListEventTrackersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventTrackersCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListRecipesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecipesCommandOutput> {
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
}

async function deserializeAws_json1_1ListRecipesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecipesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListSchemasCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> {
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
}

async function deserializeAws_json1_1ListSchemasCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListSolutionVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolutionVersionsCommandOutput> {
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
}

async function deserializeAws_json1_1ListSolutionVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolutionVersionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListSolutionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolutionsCommandOutput> {
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
}

async function deserializeAws_json1_1ListSolutionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSolutionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.services.personalize.exceptions#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateCampaignCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> {
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
}

async function deserializeAws_json1_1UpdateCampaignCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCampaignCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.services.personalize.exceptions#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.services.personalize.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.personalize.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

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
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1AutoMLConfig = (
  input: AutoMLConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.metricName !== undefined) {
    bodyParams["metricName"] = input.metricName;
  }
  if (input.recipeList !== undefined) {
    bodyParams["recipeList"] = serializeAws_json1_1ArnList(
      input.recipeList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BatchInferenceJobInput = (
  input: BatchInferenceJobInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.s3DataSource !== undefined) {
    bodyParams["s3DataSource"] = serializeAws_json1_1S3DataConfig(
      input.s3DataSource,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1BatchInferenceJobOutput = (
  input: BatchInferenceJobOutput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.s3DataDestination !== undefined) {
    bodyParams["s3DataDestination"] = serializeAws_json1_1S3DataConfig(
      input.s3DataDestination,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CategoricalHyperParameterRange = (
  input: CategoricalHyperParameterRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.values !== undefined) {
    bodyParams["values"] = serializeAws_json1_1CategoricalValues(
      input.values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CategoricalHyperParameterRanges = (
  input: Array<CategoricalHyperParameterRange>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_json1_1CategoricalHyperParameterRange(entry, context)
    );
  }
  return contents;
};

const serializeAws_json1_1CategoricalValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ContinuousHyperParameterRange = (
  input: ContinuousHyperParameterRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxValue !== undefined) {
    bodyParams["maxValue"] = input.maxValue;
  }
  if (input.minValue !== undefined) {
    bodyParams["minValue"] = input.minValue;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1ContinuousHyperParameterRanges = (
  input: Array<ContinuousHyperParameterRange>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_json1_1ContinuousHyperParameterRange(entry, context)
    );
  }
  return contents;
};

const serializeAws_json1_1CreateBatchInferenceJobRequest = (
  input: CreateBatchInferenceJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.jobInput !== undefined) {
    bodyParams["jobInput"] = serializeAws_json1_1BatchInferenceJobInput(
      input.jobInput,
      context
    );
  }
  if (input.jobName !== undefined) {
    bodyParams["jobName"] = input.jobName;
  }
  if (input.jobOutput !== undefined) {
    bodyParams["jobOutput"] = serializeAws_json1_1BatchInferenceJobOutput(
      input.jobOutput,
      context
    );
  }
  if (input.numResults !== undefined) {
    bodyParams["numResults"] = input.numResults;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  if (input.solutionVersionArn !== undefined) {
    bodyParams["solutionVersionArn"] = input.solutionVersionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateCampaignRequest = (
  input: CreateCampaignRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.minProvisionedTPS !== undefined) {
    bodyParams["minProvisionedTPS"] = input.minProvisionedTPS;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.solutionVersionArn !== undefined) {
    bodyParams["solutionVersionArn"] = input.solutionVersionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDatasetGroupRequest = (
  input: CreateDatasetGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.kmsKeyArn !== undefined) {
    bodyParams["kmsKeyArn"] = input.kmsKeyArn;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDatasetImportJobRequest = (
  input: CreateDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.dataSource !== undefined) {
    bodyParams["dataSource"] = serializeAws_json1_1DataSource(
      input.dataSource,
      context
    );
  }
  if (input.datasetArn !== undefined) {
    bodyParams["datasetArn"] = input.datasetArn;
  }
  if (input.jobName !== undefined) {
    bodyParams["jobName"] = input.jobName;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDatasetRequest = (
  input: CreateDatasetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.datasetGroupArn !== undefined) {
    bodyParams["datasetGroupArn"] = input.datasetGroupArn;
  }
  if (input.datasetType !== undefined) {
    bodyParams["datasetType"] = input.datasetType;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.schemaArn !== undefined) {
    bodyParams["schemaArn"] = input.schemaArn;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateEventTrackerRequest = (
  input: CreateEventTrackerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.datasetGroupArn !== undefined) {
    bodyParams["datasetGroupArn"] = input.datasetGroupArn;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateSchemaRequest = (
  input: CreateSchemaRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.schema !== undefined) {
    bodyParams["schema"] = input.schema;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateSolutionRequest = (
  input: CreateSolutionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.datasetGroupArn !== undefined) {
    bodyParams["datasetGroupArn"] = input.datasetGroupArn;
  }
  if (input.eventType !== undefined) {
    bodyParams["eventType"] = input.eventType;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.performAutoML !== undefined) {
    bodyParams["performAutoML"] = input.performAutoML;
  }
  if (input.performHPO !== undefined) {
    bodyParams["performHPO"] = input.performHPO;
  }
  if (input.recipeArn !== undefined) {
    bodyParams["recipeArn"] = input.recipeArn;
  }
  if (input.solutionConfig !== undefined) {
    bodyParams["solutionConfig"] = serializeAws_json1_1SolutionConfig(
      input.solutionConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateSolutionVersionRequest = (
  input: CreateSolutionVersionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.solutionArn !== undefined) {
    bodyParams["solutionArn"] = input.solutionArn;
  }
  if (input.trainingMode !== undefined) {
    bodyParams["trainingMode"] = input.trainingMode;
  }
  return bodyParams;
};

const serializeAws_json1_1DataSource = (
  input: DataSource,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.dataLocation !== undefined) {
    bodyParams["dataLocation"] = input.dataLocation;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteCampaignRequest = (
  input: DeleteCampaignRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.campaignArn !== undefined) {
    bodyParams["campaignArn"] = input.campaignArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDatasetGroupRequest = (
  input: DeleteDatasetGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.datasetGroupArn !== undefined) {
    bodyParams["datasetGroupArn"] = input.datasetGroupArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDatasetRequest = (
  input: DeleteDatasetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.datasetArn !== undefined) {
    bodyParams["datasetArn"] = input.datasetArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteEventTrackerRequest = (
  input: DeleteEventTrackerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.eventTrackerArn !== undefined) {
    bodyParams["eventTrackerArn"] = input.eventTrackerArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteSchemaRequest = (
  input: DeleteSchemaRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.schemaArn !== undefined) {
    bodyParams["schemaArn"] = input.schemaArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteSolutionRequest = (
  input: DeleteSolutionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.solutionArn !== undefined) {
    bodyParams["solutionArn"] = input.solutionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeAlgorithmRequest = (
  input: DescribeAlgorithmRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.algorithmArn !== undefined) {
    bodyParams["algorithmArn"] = input.algorithmArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeBatchInferenceJobRequest = (
  input: DescribeBatchInferenceJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.batchInferenceJobArn !== undefined) {
    bodyParams["batchInferenceJobArn"] = input.batchInferenceJobArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeCampaignRequest = (
  input: DescribeCampaignRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.campaignArn !== undefined) {
    bodyParams["campaignArn"] = input.campaignArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDatasetGroupRequest = (
  input: DescribeDatasetGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.datasetGroupArn !== undefined) {
    bodyParams["datasetGroupArn"] = input.datasetGroupArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDatasetImportJobRequest = (
  input: DescribeDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.datasetImportJobArn !== undefined) {
    bodyParams["datasetImportJobArn"] = input.datasetImportJobArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDatasetRequest = (
  input: DescribeDatasetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.datasetArn !== undefined) {
    bodyParams["datasetArn"] = input.datasetArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeEventTrackerRequest = (
  input: DescribeEventTrackerRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.eventTrackerArn !== undefined) {
    bodyParams["eventTrackerArn"] = input.eventTrackerArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeFeatureTransformationRequest = (
  input: DescribeFeatureTransformationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.featureTransformationArn !== undefined) {
    bodyParams["featureTransformationArn"] = input.featureTransformationArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeRecipeRequest = (
  input: DescribeRecipeRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.recipeArn !== undefined) {
    bodyParams["recipeArn"] = input.recipeArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeSchemaRequest = (
  input: DescribeSchemaRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.schemaArn !== undefined) {
    bodyParams["schemaArn"] = input.schemaArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeSolutionRequest = (
  input: DescribeSolutionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.solutionArn !== undefined) {
    bodyParams["solutionArn"] = input.solutionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeSolutionVersionRequest = (
  input: DescribeSolutionVersionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.solutionVersionArn !== undefined) {
    bodyParams["solutionVersionArn"] = input.solutionVersionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1FeatureTransformationParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1GetSolutionMetricsRequest = (
  input: GetSolutionMetricsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.solutionVersionArn !== undefined) {
    bodyParams["solutionVersionArn"] = input.solutionVersionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1HPOConfig = (
  input: HPOConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.algorithmHyperParameterRanges !== undefined) {
    bodyParams[
      "algorithmHyperParameterRanges"
    ] = serializeAws_json1_1HyperParameterRanges(
      input.algorithmHyperParameterRanges,
      context
    );
  }
  if (input.hpoObjective !== undefined) {
    bodyParams["hpoObjective"] = serializeAws_json1_1HPOObjective(
      input.hpoObjective,
      context
    );
  }
  if (input.hpoResourceConfig !== undefined) {
    bodyParams["hpoResourceConfig"] = serializeAws_json1_1HPOResourceConfig(
      input.hpoResourceConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1HPOObjective = (
  input: HPOObjective,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.metricName !== undefined) {
    bodyParams["metricName"] = input.metricName;
  }
  if (input.metricRegex !== undefined) {
    bodyParams["metricRegex"] = input.metricRegex;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1HPOResourceConfig = (
  input: HPOResourceConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxNumberOfTrainingJobs !== undefined) {
    bodyParams["maxNumberOfTrainingJobs"] = input.maxNumberOfTrainingJobs;
  }
  if (input.maxParallelTrainingJobs !== undefined) {
    bodyParams["maxParallelTrainingJobs"] = input.maxParallelTrainingJobs;
  }
  return bodyParams;
};

const serializeAws_json1_1HyperParameterRanges = (
  input: HyperParameterRanges,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.categoricalHyperParameterRanges !== undefined) {
    bodyParams[
      "categoricalHyperParameterRanges"
    ] = serializeAws_json1_1CategoricalHyperParameterRanges(
      input.categoricalHyperParameterRanges,
      context
    );
  }
  if (input.continuousHyperParameterRanges !== undefined) {
    bodyParams[
      "continuousHyperParameterRanges"
    ] = serializeAws_json1_1ContinuousHyperParameterRanges(
      input.continuousHyperParameterRanges,
      context
    );
  }
  if (input.integerHyperParameterRanges !== undefined) {
    bodyParams[
      "integerHyperParameterRanges"
    ] = serializeAws_json1_1IntegerHyperParameterRanges(
      input.integerHyperParameterRanges,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1HyperParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1IntegerHyperParameterRange = (
  input: IntegerHyperParameterRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxValue !== undefined) {
    bodyParams["maxValue"] = input.maxValue;
  }
  if (input.minValue !== undefined) {
    bodyParams["minValue"] = input.minValue;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1IntegerHyperParameterRanges = (
  input: Array<IntegerHyperParameterRange>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_json1_1IntegerHyperParameterRange(entry, context)
    );
  }
  return contents;
};

const serializeAws_json1_1ListBatchInferenceJobsRequest = (
  input: ListBatchInferenceJobsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.solutionVersionArn !== undefined) {
    bodyParams["solutionVersionArn"] = input.solutionVersionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListCampaignsRequest = (
  input: ListCampaignsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.solutionArn !== undefined) {
    bodyParams["solutionArn"] = input.solutionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDatasetGroupsRequest = (
  input: ListDatasetGroupsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDatasetImportJobsRequest = (
  input: ListDatasetImportJobsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.datasetArn !== undefined) {
    bodyParams["datasetArn"] = input.datasetArn;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDatasetsRequest = (
  input: ListDatasetsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.datasetGroupArn !== undefined) {
    bodyParams["datasetGroupArn"] = input.datasetGroupArn;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListEventTrackersRequest = (
  input: ListEventTrackersRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.datasetGroupArn !== undefined) {
    bodyParams["datasetGroupArn"] = input.datasetGroupArn;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListRecipesRequest = (
  input: ListRecipesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.recipeProvider !== undefined) {
    bodyParams["recipeProvider"] = input.recipeProvider;
  }
  return bodyParams;
};

const serializeAws_json1_1ListSchemasRequest = (
  input: ListSchemasRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListSolutionVersionsRequest = (
  input: ListSolutionVersionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.solutionArn !== undefined) {
    bodyParams["solutionArn"] = input.solutionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListSolutionsRequest = (
  input: ListSolutionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.datasetGroupArn !== undefined) {
    bodyParams["datasetGroupArn"] = input.datasetGroupArn;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1S3DataConfig = (
  input: S3DataConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.kmsKeyArn !== undefined) {
    bodyParams["kmsKeyArn"] = input.kmsKeyArn;
  }
  if (input.path !== undefined) {
    bodyParams["path"] = input.path;
  }
  return bodyParams;
};

const serializeAws_json1_1SolutionConfig = (
  input: SolutionConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.algorithmHyperParameters !== undefined) {
    bodyParams[
      "algorithmHyperParameters"
    ] = serializeAws_json1_1HyperParameters(
      input.algorithmHyperParameters,
      context
    );
  }
  if (input.autoMLConfig !== undefined) {
    bodyParams["autoMLConfig"] = serializeAws_json1_1AutoMLConfig(
      input.autoMLConfig,
      context
    );
  }
  if (input.eventValueThreshold !== undefined) {
    bodyParams["eventValueThreshold"] = input.eventValueThreshold;
  }
  if (input.featureTransformationParameters !== undefined) {
    bodyParams[
      "featureTransformationParameters"
    ] = serializeAws_json1_1FeatureTransformationParameters(
      input.featureTransformationParameters,
      context
    );
  }
  if (input.hpoConfig !== undefined) {
    bodyParams["hpoConfig"] = serializeAws_json1_1HPOConfig(
      input.hpoConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateCampaignRequest = (
  input: UpdateCampaignRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.campaignArn !== undefined) {
    bodyParams["campaignArn"] = input.campaignArn;
  }
  if (input.minProvisionedTPS !== undefined) {
    bodyParams["minProvisionedTPS"] = input.minProvisionedTPS;
  }
  if (input.solutionVersionArn !== undefined) {
    bodyParams["solutionVersionArn"] = input.solutionVersionArn;
  }
  return bodyParams;
};

const deserializeAws_json1_1Algorithm = (
  output: any,
  context: __SerdeContext
): Algorithm => {
  let contents: any = {
    __type: "Algorithm",
    algorithmArn: undefined,
    algorithmImage: undefined,
    creationDateTime: undefined,
    defaultHyperParameterRanges: undefined,
    defaultHyperParameters: undefined,
    defaultResourceConfig: undefined,
    lastUpdatedDateTime: undefined,
    name: undefined,
    roleArn: undefined,
    trainingInputMode: undefined
  };
  if (output.algorithmArn !== undefined && output.algorithmArn !== null) {
    contents.algorithmArn = output.algorithmArn;
  }
  if (output.algorithmImage !== undefined && output.algorithmImage !== null) {
    contents.algorithmImage = deserializeAws_json1_1AlgorithmImage(
      output.algorithmImage,
      context
    );
  }
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (
    output.defaultHyperParameterRanges !== undefined &&
    output.defaultHyperParameterRanges !== null
  ) {
    contents.defaultHyperParameterRanges = deserializeAws_json1_1DefaultHyperParameterRanges(
      output.defaultHyperParameterRanges,
      context
    );
  }
  if (
    output.defaultHyperParameters !== undefined &&
    output.defaultHyperParameters !== null
  ) {
    contents.defaultHyperParameters = deserializeAws_json1_1HyperParameters(
      output.defaultHyperParameters,
      context
    );
  }
  if (
    output.defaultResourceConfig !== undefined &&
    output.defaultResourceConfig !== null
  ) {
    contents.defaultResourceConfig = deserializeAws_json1_1ResourceConfig(
      output.defaultResourceConfig,
      context
    );
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  if (
    output.trainingInputMode !== undefined &&
    output.trainingInputMode !== null
  ) {
    contents.trainingInputMode = output.trainingInputMode;
  }
  return contents;
};

const deserializeAws_json1_1AlgorithmImage = (
  output: any,
  context: __SerdeContext
): AlgorithmImage => {
  let contents: any = {
    __type: "AlgorithmImage",
    dockerURI: undefined,
    name: undefined
  };
  if (output.dockerURI !== undefined && output.dockerURI !== null) {
    contents.dockerURI = output.dockerURI;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1ArnList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1AutoMLConfig = (
  output: any,
  context: __SerdeContext
): AutoMLConfig => {
  let contents: any = {
    __type: "AutoMLConfig",
    metricName: undefined,
    recipeList: undefined
  };
  if (output.metricName !== undefined && output.metricName !== null) {
    contents.metricName = output.metricName;
  }
  if (output.recipeList !== undefined && output.recipeList !== null) {
    contents.recipeList = deserializeAws_json1_1ArnList(
      output.recipeList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AutoMLResult = (
  output: any,
  context: __SerdeContext
): AutoMLResult => {
  let contents: any = {
    __type: "AutoMLResult",
    bestRecipeArn: undefined
  };
  if (output.bestRecipeArn !== undefined && output.bestRecipeArn !== null) {
    contents.bestRecipeArn = output.bestRecipeArn;
  }
  return contents;
};

const deserializeAws_json1_1BatchInferenceJob = (
  output: any,
  context: __SerdeContext
): BatchInferenceJob => {
  let contents: any = {
    __type: "BatchInferenceJob",
    batchInferenceJobArn: undefined,
    creationDateTime: undefined,
    failureReason: undefined,
    jobInput: undefined,
    jobName: undefined,
    jobOutput: undefined,
    lastUpdatedDateTime: undefined,
    numResults: undefined,
    roleArn: undefined,
    solutionVersionArn: undefined,
    status: undefined
  };
  if (
    output.batchInferenceJobArn !== undefined &&
    output.batchInferenceJobArn !== null
  ) {
    contents.batchInferenceJobArn = output.batchInferenceJobArn;
  }
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (output.jobInput !== undefined && output.jobInput !== null) {
    contents.jobInput = deserializeAws_json1_1BatchInferenceJobInput(
      output.jobInput,
      context
    );
  }
  if (output.jobName !== undefined && output.jobName !== null) {
    contents.jobName = output.jobName;
  }
  if (output.jobOutput !== undefined && output.jobOutput !== null) {
    contents.jobOutput = deserializeAws_json1_1BatchInferenceJobOutput(
      output.jobOutput,
      context
    );
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.numResults !== undefined && output.numResults !== null) {
    contents.numResults = output.numResults;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  if (
    output.solutionVersionArn !== undefined &&
    output.solutionVersionArn !== null
  ) {
    contents.solutionVersionArn = output.solutionVersionArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1BatchInferenceJobInput = (
  output: any,
  context: __SerdeContext
): BatchInferenceJobInput => {
  let contents: any = {
    __type: "BatchInferenceJobInput",
    s3DataSource: undefined
  };
  if (output.s3DataSource !== undefined && output.s3DataSource !== null) {
    contents.s3DataSource = deserializeAws_json1_1S3DataConfig(
      output.s3DataSource,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchInferenceJobOutput = (
  output: any,
  context: __SerdeContext
): BatchInferenceJobOutput => {
  let contents: any = {
    __type: "BatchInferenceJobOutput",
    s3DataDestination: undefined
  };
  if (
    output.s3DataDestination !== undefined &&
    output.s3DataDestination !== null
  ) {
    contents.s3DataDestination = deserializeAws_json1_1S3DataConfig(
      output.s3DataDestination,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1BatchInferenceJobSummary = (
  output: any,
  context: __SerdeContext
): BatchInferenceJobSummary => {
  let contents: any = {
    __type: "BatchInferenceJobSummary",
    batchInferenceJobArn: undefined,
    creationDateTime: undefined,
    failureReason: undefined,
    jobName: undefined,
    lastUpdatedDateTime: undefined,
    status: undefined
  };
  if (
    output.batchInferenceJobArn !== undefined &&
    output.batchInferenceJobArn !== null
  ) {
    contents.batchInferenceJobArn = output.batchInferenceJobArn;
  }
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (output.jobName !== undefined && output.jobName !== null) {
    contents.jobName = output.jobName;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1BatchInferenceJobs = (
  output: any,
  context: __SerdeContext
): Array<BatchInferenceJobSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1BatchInferenceJobSummary(entry, context)
  );
};

const deserializeAws_json1_1Campaign = (
  output: any,
  context: __SerdeContext
): Campaign => {
  let contents: any = {
    __type: "Campaign",
    campaignArn: undefined,
    creationDateTime: undefined,
    failureReason: undefined,
    lastUpdatedDateTime: undefined,
    latestCampaignUpdate: undefined,
    minProvisionedTPS: undefined,
    name: undefined,
    solutionVersionArn: undefined,
    status: undefined
  };
  if (output.campaignArn !== undefined && output.campaignArn !== null) {
    contents.campaignArn = output.campaignArn;
  }
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (
    output.latestCampaignUpdate !== undefined &&
    output.latestCampaignUpdate !== null
  ) {
    contents.latestCampaignUpdate = deserializeAws_json1_1CampaignUpdateSummary(
      output.latestCampaignUpdate,
      context
    );
  }
  if (
    output.minProvisionedTPS !== undefined &&
    output.minProvisionedTPS !== null
  ) {
    contents.minProvisionedTPS = output.minProvisionedTPS;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.solutionVersionArn !== undefined &&
    output.solutionVersionArn !== null
  ) {
    contents.solutionVersionArn = output.solutionVersionArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1CampaignSummary = (
  output: any,
  context: __SerdeContext
): CampaignSummary => {
  let contents: any = {
    __type: "CampaignSummary",
    campaignArn: undefined,
    creationDateTime: undefined,
    failureReason: undefined,
    lastUpdatedDateTime: undefined,
    name: undefined,
    status: undefined
  };
  if (output.campaignArn !== undefined && output.campaignArn !== null) {
    contents.campaignArn = output.campaignArn;
  }
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1CampaignUpdateSummary = (
  output: any,
  context: __SerdeContext
): CampaignUpdateSummary => {
  let contents: any = {
    __type: "CampaignUpdateSummary",
    creationDateTime: undefined,
    failureReason: undefined,
    lastUpdatedDateTime: undefined,
    minProvisionedTPS: undefined,
    solutionVersionArn: undefined,
    status: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (
    output.minProvisionedTPS !== undefined &&
    output.minProvisionedTPS !== null
  ) {
    contents.minProvisionedTPS = output.minProvisionedTPS;
  }
  if (
    output.solutionVersionArn !== undefined &&
    output.solutionVersionArn !== null
  ) {
    contents.solutionVersionArn = output.solutionVersionArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1Campaigns = (
  output: any,
  context: __SerdeContext
): Array<CampaignSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CampaignSummary(entry, context)
  );
};

const deserializeAws_json1_1CategoricalHyperParameterRange = (
  output: any,
  context: __SerdeContext
): CategoricalHyperParameterRange => {
  let contents: any = {
    __type: "CategoricalHyperParameterRange",
    name: undefined,
    values: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.values !== undefined && output.values !== null) {
    contents.values = deserializeAws_json1_1CategoricalValues(
      output.values,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CategoricalHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): Array<CategoricalHyperParameterRange> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CategoricalHyperParameterRange(entry, context)
  );
};

const deserializeAws_json1_1CategoricalValues = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ContinuousHyperParameterRange = (
  output: any,
  context: __SerdeContext
): ContinuousHyperParameterRange => {
  let contents: any = {
    __type: "ContinuousHyperParameterRange",
    maxValue: undefined,
    minValue: undefined,
    name: undefined
  };
  if (output.maxValue !== undefined && output.maxValue !== null) {
    contents.maxValue = output.maxValue;
  }
  if (output.minValue !== undefined && output.minValue !== null) {
    contents.minValue = output.minValue;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1ContinuousHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): Array<ContinuousHyperParameterRange> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ContinuousHyperParameterRange(entry, context)
  );
};

const deserializeAws_json1_1CreateBatchInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): CreateBatchInferenceJobResponse => {
  let contents: any = {
    __type: "CreateBatchInferenceJobResponse",
    batchInferenceJobArn: undefined
  };
  if (
    output.batchInferenceJobArn !== undefined &&
    output.batchInferenceJobArn !== null
  ) {
    contents.batchInferenceJobArn = output.batchInferenceJobArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateCampaignResponse = (
  output: any,
  context: __SerdeContext
): CreateCampaignResponse => {
  let contents: any = {
    __type: "CreateCampaignResponse",
    campaignArn: undefined
  };
  if (output.campaignArn !== undefined && output.campaignArn !== null) {
    contents.campaignArn = output.campaignArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateDatasetGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateDatasetGroupResponse => {
  let contents: any = {
    __type: "CreateDatasetGroupResponse",
    datasetGroupArn: undefined
  };
  if (output.datasetGroupArn !== undefined && output.datasetGroupArn !== null) {
    contents.datasetGroupArn = output.datasetGroupArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): CreateDatasetImportJobResponse => {
  let contents: any = {
    __type: "CreateDatasetImportJobResponse",
    datasetImportJobArn: undefined
  };
  if (
    output.datasetImportJobArn !== undefined &&
    output.datasetImportJobArn !== null
  ) {
    contents.datasetImportJobArn = output.datasetImportJobArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateDatasetResponse = (
  output: any,
  context: __SerdeContext
): CreateDatasetResponse => {
  let contents: any = {
    __type: "CreateDatasetResponse",
    datasetArn: undefined
  };
  if (output.datasetArn !== undefined && output.datasetArn !== null) {
    contents.datasetArn = output.datasetArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateEventTrackerResponse = (
  output: any,
  context: __SerdeContext
): CreateEventTrackerResponse => {
  let contents: any = {
    __type: "CreateEventTrackerResponse",
    eventTrackerArn: undefined,
    trackingId: undefined
  };
  if (output.eventTrackerArn !== undefined && output.eventTrackerArn !== null) {
    contents.eventTrackerArn = output.eventTrackerArn;
  }
  if (output.trackingId !== undefined && output.trackingId !== null) {
    contents.trackingId = output.trackingId;
  }
  return contents;
};

const deserializeAws_json1_1CreateSchemaResponse = (
  output: any,
  context: __SerdeContext
): CreateSchemaResponse => {
  let contents: any = {
    __type: "CreateSchemaResponse",
    schemaArn: undefined
  };
  if (output.schemaArn !== undefined && output.schemaArn !== null) {
    contents.schemaArn = output.schemaArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateSolutionResponse = (
  output: any,
  context: __SerdeContext
): CreateSolutionResponse => {
  let contents: any = {
    __type: "CreateSolutionResponse",
    solutionArn: undefined
  };
  if (output.solutionArn !== undefined && output.solutionArn !== null) {
    contents.solutionArn = output.solutionArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateSolutionVersionResponse = (
  output: any,
  context: __SerdeContext
): CreateSolutionVersionResponse => {
  let contents: any = {
    __type: "CreateSolutionVersionResponse",
    solutionVersionArn: undefined
  };
  if (
    output.solutionVersionArn !== undefined &&
    output.solutionVersionArn !== null
  ) {
    contents.solutionVersionArn = output.solutionVersionArn;
  }
  return contents;
};

const deserializeAws_json1_1DataSource = (
  output: any,
  context: __SerdeContext
): DataSource => {
  let contents: any = {
    __type: "DataSource",
    dataLocation: undefined
  };
  if (output.dataLocation !== undefined && output.dataLocation !== null) {
    contents.dataLocation = output.dataLocation;
  }
  return contents;
};

const deserializeAws_json1_1Dataset = (
  output: any,
  context: __SerdeContext
): Dataset => {
  let contents: any = {
    __type: "Dataset",
    creationDateTime: undefined,
    datasetArn: undefined,
    datasetGroupArn: undefined,
    datasetType: undefined,
    lastUpdatedDateTime: undefined,
    name: undefined,
    schemaArn: undefined,
    status: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.datasetArn !== undefined && output.datasetArn !== null) {
    contents.datasetArn = output.datasetArn;
  }
  if (output.datasetGroupArn !== undefined && output.datasetGroupArn !== null) {
    contents.datasetGroupArn = output.datasetGroupArn;
  }
  if (output.datasetType !== undefined && output.datasetType !== null) {
    contents.datasetType = output.datasetType;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.schemaArn !== undefined && output.schemaArn !== null) {
    contents.schemaArn = output.schemaArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1DatasetGroup = (
  output: any,
  context: __SerdeContext
): DatasetGroup => {
  let contents: any = {
    __type: "DatasetGroup",
    creationDateTime: undefined,
    datasetGroupArn: undefined,
    failureReason: undefined,
    kmsKeyArn: undefined,
    lastUpdatedDateTime: undefined,
    name: undefined,
    roleArn: undefined,
    status: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.datasetGroupArn !== undefined && output.datasetGroupArn !== null) {
    contents.datasetGroupArn = output.datasetGroupArn;
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (output.kmsKeyArn !== undefined && output.kmsKeyArn !== null) {
    contents.kmsKeyArn = output.kmsKeyArn;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1DatasetGroupSummary = (
  output: any,
  context: __SerdeContext
): DatasetGroupSummary => {
  let contents: any = {
    __type: "DatasetGroupSummary",
    creationDateTime: undefined,
    datasetGroupArn: undefined,
    failureReason: undefined,
    lastUpdatedDateTime: undefined,
    name: undefined,
    status: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.datasetGroupArn !== undefined && output.datasetGroupArn !== null) {
    contents.datasetGroupArn = output.datasetGroupArn;
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1DatasetGroups = (
  output: any,
  context: __SerdeContext
): Array<DatasetGroupSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DatasetGroupSummary(entry, context)
  );
};

const deserializeAws_json1_1DatasetImportJob = (
  output: any,
  context: __SerdeContext
): DatasetImportJob => {
  let contents: any = {
    __type: "DatasetImportJob",
    creationDateTime: undefined,
    dataSource: undefined,
    datasetArn: undefined,
    datasetImportJobArn: undefined,
    failureReason: undefined,
    jobName: undefined,
    lastUpdatedDateTime: undefined,
    roleArn: undefined,
    status: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.dataSource !== undefined && output.dataSource !== null) {
    contents.dataSource = deserializeAws_json1_1DataSource(
      output.dataSource,
      context
    );
  }
  if (output.datasetArn !== undefined && output.datasetArn !== null) {
    contents.datasetArn = output.datasetArn;
  }
  if (
    output.datasetImportJobArn !== undefined &&
    output.datasetImportJobArn !== null
  ) {
    contents.datasetImportJobArn = output.datasetImportJobArn;
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (output.jobName !== undefined && output.jobName !== null) {
    contents.jobName = output.jobName;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1DatasetImportJobSummary = (
  output: any,
  context: __SerdeContext
): DatasetImportJobSummary => {
  let contents: any = {
    __type: "DatasetImportJobSummary",
    creationDateTime: undefined,
    datasetImportJobArn: undefined,
    failureReason: undefined,
    jobName: undefined,
    lastUpdatedDateTime: undefined,
    status: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (
    output.datasetImportJobArn !== undefined &&
    output.datasetImportJobArn !== null
  ) {
    contents.datasetImportJobArn = output.datasetImportJobArn;
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (output.jobName !== undefined && output.jobName !== null) {
    contents.jobName = output.jobName;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1DatasetImportJobs = (
  output: any,
  context: __SerdeContext
): Array<DatasetImportJobSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DatasetImportJobSummary(entry, context)
  );
};

const deserializeAws_json1_1DatasetSchema = (
  output: any,
  context: __SerdeContext
): DatasetSchema => {
  let contents: any = {
    __type: "DatasetSchema",
    creationDateTime: undefined,
    lastUpdatedDateTime: undefined,
    name: undefined,
    schema: undefined,
    schemaArn: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.schema !== undefined && output.schema !== null) {
    contents.schema = output.schema;
  }
  if (output.schemaArn !== undefined && output.schemaArn !== null) {
    contents.schemaArn = output.schemaArn;
  }
  return contents;
};

const deserializeAws_json1_1DatasetSchemaSummary = (
  output: any,
  context: __SerdeContext
): DatasetSchemaSummary => {
  let contents: any = {
    __type: "DatasetSchemaSummary",
    creationDateTime: undefined,
    lastUpdatedDateTime: undefined,
    name: undefined,
    schemaArn: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.schemaArn !== undefined && output.schemaArn !== null) {
    contents.schemaArn = output.schemaArn;
  }
  return contents;
};

const deserializeAws_json1_1DatasetSummary = (
  output: any,
  context: __SerdeContext
): DatasetSummary => {
  let contents: any = {
    __type: "DatasetSummary",
    creationDateTime: undefined,
    datasetArn: undefined,
    datasetType: undefined,
    lastUpdatedDateTime: undefined,
    name: undefined,
    status: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.datasetArn !== undefined && output.datasetArn !== null) {
    contents.datasetArn = output.datasetArn;
  }
  if (output.datasetType !== undefined && output.datasetType !== null) {
    contents.datasetType = output.datasetType;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1Datasets = (
  output: any,
  context: __SerdeContext
): Array<DatasetSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DatasetSummary(entry, context)
  );
};

const deserializeAws_json1_1DefaultCategoricalHyperParameterRange = (
  output: any,
  context: __SerdeContext
): DefaultCategoricalHyperParameterRange => {
  let contents: any = {
    __type: "DefaultCategoricalHyperParameterRange",
    isTunable: undefined,
    name: undefined,
    values: undefined
  };
  if (output.isTunable !== undefined && output.isTunable !== null) {
    contents.isTunable = output.isTunable;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.values !== undefined && output.values !== null) {
    contents.values = deserializeAws_json1_1CategoricalValues(
      output.values,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DefaultCategoricalHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): Array<DefaultCategoricalHyperParameterRange> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DefaultCategoricalHyperParameterRange(entry, context)
  );
};

const deserializeAws_json1_1DefaultContinuousHyperParameterRange = (
  output: any,
  context: __SerdeContext
): DefaultContinuousHyperParameterRange => {
  let contents: any = {
    __type: "DefaultContinuousHyperParameterRange",
    isTunable: undefined,
    maxValue: undefined,
    minValue: undefined,
    name: undefined
  };
  if (output.isTunable !== undefined && output.isTunable !== null) {
    contents.isTunable = output.isTunable;
  }
  if (output.maxValue !== undefined && output.maxValue !== null) {
    contents.maxValue = output.maxValue;
  }
  if (output.minValue !== undefined && output.minValue !== null) {
    contents.minValue = output.minValue;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1DefaultContinuousHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): Array<DefaultContinuousHyperParameterRange> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DefaultContinuousHyperParameterRange(entry, context)
  );
};

const deserializeAws_json1_1DefaultHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): DefaultHyperParameterRanges => {
  let contents: any = {
    __type: "DefaultHyperParameterRanges",
    categoricalHyperParameterRanges: undefined,
    continuousHyperParameterRanges: undefined,
    integerHyperParameterRanges: undefined
  };
  if (
    output.categoricalHyperParameterRanges !== undefined &&
    output.categoricalHyperParameterRanges !== null
  ) {
    contents.categoricalHyperParameterRanges = deserializeAws_json1_1DefaultCategoricalHyperParameterRanges(
      output.categoricalHyperParameterRanges,
      context
    );
  }
  if (
    output.continuousHyperParameterRanges !== undefined &&
    output.continuousHyperParameterRanges !== null
  ) {
    contents.continuousHyperParameterRanges = deserializeAws_json1_1DefaultContinuousHyperParameterRanges(
      output.continuousHyperParameterRanges,
      context
    );
  }
  if (
    output.integerHyperParameterRanges !== undefined &&
    output.integerHyperParameterRanges !== null
  ) {
    contents.integerHyperParameterRanges = deserializeAws_json1_1DefaultIntegerHyperParameterRanges(
      output.integerHyperParameterRanges,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DefaultIntegerHyperParameterRange = (
  output: any,
  context: __SerdeContext
): DefaultIntegerHyperParameterRange => {
  let contents: any = {
    __type: "DefaultIntegerHyperParameterRange",
    isTunable: undefined,
    maxValue: undefined,
    minValue: undefined,
    name: undefined
  };
  if (output.isTunable !== undefined && output.isTunable !== null) {
    contents.isTunable = output.isTunable;
  }
  if (output.maxValue !== undefined && output.maxValue !== null) {
    contents.maxValue = output.maxValue;
  }
  if (output.minValue !== undefined && output.minValue !== null) {
    contents.minValue = output.minValue;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1DefaultIntegerHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): Array<DefaultIntegerHyperParameterRange> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DefaultIntegerHyperParameterRange(entry, context)
  );
};

const deserializeAws_json1_1DescribeAlgorithmResponse = (
  output: any,
  context: __SerdeContext
): DescribeAlgorithmResponse => {
  let contents: any = {
    __type: "DescribeAlgorithmResponse",
    algorithm: undefined
  };
  if (output.algorithm !== undefined && output.algorithm !== null) {
    contents.algorithm = deserializeAws_json1_1Algorithm(
      output.algorithm,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeBatchInferenceJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeBatchInferenceJobResponse => {
  let contents: any = {
    __type: "DescribeBatchInferenceJobResponse",
    batchInferenceJob: undefined
  };
  if (
    output.batchInferenceJob !== undefined &&
    output.batchInferenceJob !== null
  ) {
    contents.batchInferenceJob = deserializeAws_json1_1BatchInferenceJob(
      output.batchInferenceJob,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeCampaignResponse = (
  output: any,
  context: __SerdeContext
): DescribeCampaignResponse => {
  let contents: any = {
    __type: "DescribeCampaignResponse",
    campaign: undefined
  };
  if (output.campaign !== undefined && output.campaign !== null) {
    contents.campaign = deserializeAws_json1_1Campaign(
      output.campaign,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeDatasetGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetGroupResponse => {
  let contents: any = {
    __type: "DescribeDatasetGroupResponse",
    datasetGroup: undefined
  };
  if (output.datasetGroup !== undefined && output.datasetGroup !== null) {
    contents.datasetGroup = deserializeAws_json1_1DatasetGroup(
      output.datasetGroup,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetImportJobResponse => {
  let contents: any = {
    __type: "DescribeDatasetImportJobResponse",
    datasetImportJob: undefined
  };
  if (
    output.datasetImportJob !== undefined &&
    output.datasetImportJob !== null
  ) {
    contents.datasetImportJob = deserializeAws_json1_1DatasetImportJob(
      output.datasetImportJob,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeDatasetResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetResponse => {
  let contents: any = {
    __type: "DescribeDatasetResponse",
    dataset: undefined
  };
  if (output.dataset !== undefined && output.dataset !== null) {
    contents.dataset = deserializeAws_json1_1Dataset(output.dataset, context);
  }
  return contents;
};

const deserializeAws_json1_1DescribeEventTrackerResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventTrackerResponse => {
  let contents: any = {
    __type: "DescribeEventTrackerResponse",
    eventTracker: undefined
  };
  if (output.eventTracker !== undefined && output.eventTracker !== null) {
    contents.eventTracker = deserializeAws_json1_1EventTracker(
      output.eventTracker,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeFeatureTransformationResponse = (
  output: any,
  context: __SerdeContext
): DescribeFeatureTransformationResponse => {
  let contents: any = {
    __type: "DescribeFeatureTransformationResponse",
    featureTransformation: undefined
  };
  if (
    output.featureTransformation !== undefined &&
    output.featureTransformation !== null
  ) {
    contents.featureTransformation = deserializeAws_json1_1FeatureTransformation(
      output.featureTransformation,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeRecipeResponse = (
  output: any,
  context: __SerdeContext
): DescribeRecipeResponse => {
  let contents: any = {
    __type: "DescribeRecipeResponse",
    recipe: undefined
  };
  if (output.recipe !== undefined && output.recipe !== null) {
    contents.recipe = deserializeAws_json1_1Recipe(output.recipe, context);
  }
  return contents;
};

const deserializeAws_json1_1DescribeSchemaResponse = (
  output: any,
  context: __SerdeContext
): DescribeSchemaResponse => {
  let contents: any = {
    __type: "DescribeSchemaResponse",
    schema: undefined
  };
  if (output.schema !== undefined && output.schema !== null) {
    contents.schema = deserializeAws_json1_1DatasetSchema(
      output.schema,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeSolutionResponse = (
  output: any,
  context: __SerdeContext
): DescribeSolutionResponse => {
  let contents: any = {
    __type: "DescribeSolutionResponse",
    solution: undefined
  };
  if (output.solution !== undefined && output.solution !== null) {
    contents.solution = deserializeAws_json1_1Solution(
      output.solution,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeSolutionVersionResponse = (
  output: any,
  context: __SerdeContext
): DescribeSolutionVersionResponse => {
  let contents: any = {
    __type: "DescribeSolutionVersionResponse",
    solutionVersion: undefined
  };
  if (output.solutionVersion !== undefined && output.solutionVersion !== null) {
    contents.solutionVersion = deserializeAws_json1_1SolutionVersion(
      output.solutionVersion,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EventTracker = (
  output: any,
  context: __SerdeContext
): EventTracker => {
  let contents: any = {
    __type: "EventTracker",
    accountId: undefined,
    creationDateTime: undefined,
    datasetGroupArn: undefined,
    eventTrackerArn: undefined,
    lastUpdatedDateTime: undefined,
    name: undefined,
    status: undefined,
    trackingId: undefined
  };
  if (output.accountId !== undefined && output.accountId !== null) {
    contents.accountId = output.accountId;
  }
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.datasetGroupArn !== undefined && output.datasetGroupArn !== null) {
    contents.datasetGroupArn = output.datasetGroupArn;
  }
  if (output.eventTrackerArn !== undefined && output.eventTrackerArn !== null) {
    contents.eventTrackerArn = output.eventTrackerArn;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.trackingId !== undefined && output.trackingId !== null) {
    contents.trackingId = output.trackingId;
  }
  return contents;
};

const deserializeAws_json1_1EventTrackerSummary = (
  output: any,
  context: __SerdeContext
): EventTrackerSummary => {
  let contents: any = {
    __type: "EventTrackerSummary",
    creationDateTime: undefined,
    eventTrackerArn: undefined,
    lastUpdatedDateTime: undefined,
    name: undefined,
    status: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.eventTrackerArn !== undefined && output.eventTrackerArn !== null) {
    contents.eventTrackerArn = output.eventTrackerArn;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1EventTrackers = (
  output: any,
  context: __SerdeContext
): Array<EventTrackerSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventTrackerSummary(entry, context)
  );
};

const deserializeAws_json1_1FeatureTransformation = (
  output: any,
  context: __SerdeContext
): FeatureTransformation => {
  let contents: any = {
    __type: "FeatureTransformation",
    creationDateTime: undefined,
    defaultParameters: undefined,
    featureTransformationArn: undefined,
    lastUpdatedDateTime: undefined,
    name: undefined,
    status: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (
    output.defaultParameters !== undefined &&
    output.defaultParameters !== null
  ) {
    contents.defaultParameters = deserializeAws_json1_1FeaturizationParameters(
      output.defaultParameters,
      context
    );
  }
  if (
    output.featureTransformationArn !== undefined &&
    output.featureTransformationArn !== null
  ) {
    contents.featureTransformationArn = output.featureTransformationArn;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1FeatureTransformationParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1FeaturizationParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1GetSolutionMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetSolutionMetricsResponse => {
  let contents: any = {
    __type: "GetSolutionMetricsResponse",
    metrics: undefined,
    solutionVersionArn: undefined
  };
  if (output.metrics !== undefined && output.metrics !== null) {
    contents.metrics = deserializeAws_json1_1Metrics(output.metrics, context);
  }
  if (
    output.solutionVersionArn !== undefined &&
    output.solutionVersionArn !== null
  ) {
    contents.solutionVersionArn = output.solutionVersionArn;
  }
  return contents;
};

const deserializeAws_json1_1HPOConfig = (
  output: any,
  context: __SerdeContext
): HPOConfig => {
  let contents: any = {
    __type: "HPOConfig",
    algorithmHyperParameterRanges: undefined,
    hpoObjective: undefined,
    hpoResourceConfig: undefined
  };
  if (
    output.algorithmHyperParameterRanges !== undefined &&
    output.algorithmHyperParameterRanges !== null
  ) {
    contents.algorithmHyperParameterRanges = deserializeAws_json1_1HyperParameterRanges(
      output.algorithmHyperParameterRanges,
      context
    );
  }
  if (output.hpoObjective !== undefined && output.hpoObjective !== null) {
    contents.hpoObjective = deserializeAws_json1_1HPOObjective(
      output.hpoObjective,
      context
    );
  }
  if (
    output.hpoResourceConfig !== undefined &&
    output.hpoResourceConfig !== null
  ) {
    contents.hpoResourceConfig = deserializeAws_json1_1HPOResourceConfig(
      output.hpoResourceConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1HPOObjective = (
  output: any,
  context: __SerdeContext
): HPOObjective => {
  let contents: any = {
    __type: "HPOObjective",
    metricName: undefined,
    metricRegex: undefined,
    type: undefined
  };
  if (output.metricName !== undefined && output.metricName !== null) {
    contents.metricName = output.metricName;
  }
  if (output.metricRegex !== undefined && output.metricRegex !== null) {
    contents.metricRegex = output.metricRegex;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1HPOResourceConfig = (
  output: any,
  context: __SerdeContext
): HPOResourceConfig => {
  let contents: any = {
    __type: "HPOResourceConfig",
    maxNumberOfTrainingJobs: undefined,
    maxParallelTrainingJobs: undefined
  };
  if (
    output.maxNumberOfTrainingJobs !== undefined &&
    output.maxNumberOfTrainingJobs !== null
  ) {
    contents.maxNumberOfTrainingJobs = output.maxNumberOfTrainingJobs;
  }
  if (
    output.maxParallelTrainingJobs !== undefined &&
    output.maxParallelTrainingJobs !== null
  ) {
    contents.maxParallelTrainingJobs = output.maxParallelTrainingJobs;
  }
  return contents;
};

const deserializeAws_json1_1HyperParameterRanges = (
  output: any,
  context: __SerdeContext
): HyperParameterRanges => {
  let contents: any = {
    __type: "HyperParameterRanges",
    categoricalHyperParameterRanges: undefined,
    continuousHyperParameterRanges: undefined,
    integerHyperParameterRanges: undefined
  };
  if (
    output.categoricalHyperParameterRanges !== undefined &&
    output.categoricalHyperParameterRanges !== null
  ) {
    contents.categoricalHyperParameterRanges = deserializeAws_json1_1CategoricalHyperParameterRanges(
      output.categoricalHyperParameterRanges,
      context
    );
  }
  if (
    output.continuousHyperParameterRanges !== undefined &&
    output.continuousHyperParameterRanges !== null
  ) {
    contents.continuousHyperParameterRanges = deserializeAws_json1_1ContinuousHyperParameterRanges(
      output.continuousHyperParameterRanges,
      context
    );
  }
  if (
    output.integerHyperParameterRanges !== undefined &&
    output.integerHyperParameterRanges !== null
  ) {
    contents.integerHyperParameterRanges = deserializeAws_json1_1IntegerHyperParameterRanges(
      output.integerHyperParameterRanges,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1HyperParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1IntegerHyperParameterRange = (
  output: any,
  context: __SerdeContext
): IntegerHyperParameterRange => {
  let contents: any = {
    __type: "IntegerHyperParameterRange",
    maxValue: undefined,
    minValue: undefined,
    name: undefined
  };
  if (output.maxValue !== undefined && output.maxValue !== null) {
    contents.maxValue = output.maxValue;
  }
  if (output.minValue !== undefined && output.minValue !== null) {
    contents.minValue = output.minValue;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1IntegerHyperParameterRanges = (
  output: any,
  context: __SerdeContext
): Array<IntegerHyperParameterRange> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IntegerHyperParameterRange(entry, context)
  );
};

const deserializeAws_json1_1ListBatchInferenceJobsResponse = (
  output: any,
  context: __SerdeContext
): ListBatchInferenceJobsResponse => {
  let contents: any = {
    __type: "ListBatchInferenceJobsResponse",
    batchInferenceJobs: undefined,
    nextToken: undefined
  };
  if (
    output.batchInferenceJobs !== undefined &&
    output.batchInferenceJobs !== null
  ) {
    contents.batchInferenceJobs = deserializeAws_json1_1BatchInferenceJobs(
      output.batchInferenceJobs,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListCampaignsResponse = (
  output: any,
  context: __SerdeContext
): ListCampaignsResponse => {
  let contents: any = {
    __type: "ListCampaignsResponse",
    campaigns: undefined,
    nextToken: undefined
  };
  if (output.campaigns !== undefined && output.campaigns !== null) {
    contents.campaigns = deserializeAws_json1_1Campaigns(
      output.campaigns,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListDatasetGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetGroupsResponse => {
  let contents: any = {
    __type: "ListDatasetGroupsResponse",
    datasetGroups: undefined,
    nextToken: undefined
  };
  if (output.datasetGroups !== undefined && output.datasetGroups !== null) {
    contents.datasetGroups = deserializeAws_json1_1DatasetGroups(
      output.datasetGroups,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListDatasetImportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetImportJobsResponse => {
  let contents: any = {
    __type: "ListDatasetImportJobsResponse",
    datasetImportJobs: undefined,
    nextToken: undefined
  };
  if (
    output.datasetImportJobs !== undefined &&
    output.datasetImportJobs !== null
  ) {
    contents.datasetImportJobs = deserializeAws_json1_1DatasetImportJobs(
      output.datasetImportJobs,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListDatasetsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetsResponse => {
  let contents: any = {
    __type: "ListDatasetsResponse",
    datasets: undefined,
    nextToken: undefined
  };
  if (output.datasets !== undefined && output.datasets !== null) {
    contents.datasets = deserializeAws_json1_1Datasets(
      output.datasets,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListEventTrackersResponse = (
  output: any,
  context: __SerdeContext
): ListEventTrackersResponse => {
  let contents: any = {
    __type: "ListEventTrackersResponse",
    eventTrackers: undefined,
    nextToken: undefined
  };
  if (output.eventTrackers !== undefined && output.eventTrackers !== null) {
    contents.eventTrackers = deserializeAws_json1_1EventTrackers(
      output.eventTrackers,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListRecipesResponse = (
  output: any,
  context: __SerdeContext
): ListRecipesResponse => {
  let contents: any = {
    __type: "ListRecipesResponse",
    nextToken: undefined,
    recipes: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.recipes !== undefined && output.recipes !== null) {
    contents.recipes = deserializeAws_json1_1Recipes(output.recipes, context);
  }
  return contents;
};

const deserializeAws_json1_1ListSchemasResponse = (
  output: any,
  context: __SerdeContext
): ListSchemasResponse => {
  let contents: any = {
    __type: "ListSchemasResponse",
    nextToken: undefined,
    schemas: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.schemas !== undefined && output.schemas !== null) {
    contents.schemas = deserializeAws_json1_1Schemas(output.schemas, context);
  }
  return contents;
};

const deserializeAws_json1_1ListSolutionVersionsResponse = (
  output: any,
  context: __SerdeContext
): ListSolutionVersionsResponse => {
  let contents: any = {
    __type: "ListSolutionVersionsResponse",
    nextToken: undefined,
    solutionVersions: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (
    output.solutionVersions !== undefined &&
    output.solutionVersions !== null
  ) {
    contents.solutionVersions = deserializeAws_json1_1SolutionVersions(
      output.solutionVersions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListSolutionsResponse = (
  output: any,
  context: __SerdeContext
): ListSolutionsResponse => {
  let contents: any = {
    __type: "ListSolutionsResponse",
    nextToken: undefined,
    solutions: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.solutions !== undefined && output.solutions !== null) {
    contents.solutions = deserializeAws_json1_1Solutions(
      output.solutions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Metrics = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1Recipe = (
  output: any,
  context: __SerdeContext
): Recipe => {
  let contents: any = {
    __type: "Recipe",
    algorithmArn: undefined,
    creationDateTime: undefined,
    description: undefined,
    featureTransformationArn: undefined,
    lastUpdatedDateTime: undefined,
    name: undefined,
    recipeArn: undefined,
    recipeType: undefined,
    status: undefined
  };
  if (output.algorithmArn !== undefined && output.algorithmArn !== null) {
    contents.algorithmArn = output.algorithmArn;
  }
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (
    output.featureTransformationArn !== undefined &&
    output.featureTransformationArn !== null
  ) {
    contents.featureTransformationArn = output.featureTransformationArn;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.recipeArn !== undefined && output.recipeArn !== null) {
    contents.recipeArn = output.recipeArn;
  }
  if (output.recipeType !== undefined && output.recipeType !== null) {
    contents.recipeType = output.recipeType;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1RecipeSummary = (
  output: any,
  context: __SerdeContext
): RecipeSummary => {
  let contents: any = {
    __type: "RecipeSummary",
    creationDateTime: undefined,
    lastUpdatedDateTime: undefined,
    name: undefined,
    recipeArn: undefined,
    status: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.recipeArn !== undefined && output.recipeArn !== null) {
    contents.recipeArn = output.recipeArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1Recipes = (
  output: any,
  context: __SerdeContext
): Array<RecipeSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RecipeSummary(entry, context)
  );
};

const deserializeAws_json1_1ResourceConfig = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1S3DataConfig = (
  output: any,
  context: __SerdeContext
): S3DataConfig => {
  let contents: any = {
    __type: "S3DataConfig",
    kmsKeyArn: undefined,
    path: undefined
  };
  if (output.kmsKeyArn !== undefined && output.kmsKeyArn !== null) {
    contents.kmsKeyArn = output.kmsKeyArn;
  }
  if (output.path !== undefined && output.path !== null) {
    contents.path = output.path;
  }
  return contents;
};

const deserializeAws_json1_1Schemas = (
  output: any,
  context: __SerdeContext
): Array<DatasetSchemaSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DatasetSchemaSummary(entry, context)
  );
};

const deserializeAws_json1_1Solution = (
  output: any,
  context: __SerdeContext
): Solution => {
  let contents: any = {
    __type: "Solution",
    autoMLResult: undefined,
    creationDateTime: undefined,
    datasetGroupArn: undefined,
    eventType: undefined,
    lastUpdatedDateTime: undefined,
    latestSolutionVersion: undefined,
    name: undefined,
    performAutoML: undefined,
    performHPO: undefined,
    recipeArn: undefined,
    solutionArn: undefined,
    solutionConfig: undefined,
    status: undefined
  };
  if (output.autoMLResult !== undefined && output.autoMLResult !== null) {
    contents.autoMLResult = deserializeAws_json1_1AutoMLResult(
      output.autoMLResult,
      context
    );
  }
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.datasetGroupArn !== undefined && output.datasetGroupArn !== null) {
    contents.datasetGroupArn = output.datasetGroupArn;
  }
  if (output.eventType !== undefined && output.eventType !== null) {
    contents.eventType = output.eventType;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (
    output.latestSolutionVersion !== undefined &&
    output.latestSolutionVersion !== null
  ) {
    contents.latestSolutionVersion = deserializeAws_json1_1SolutionVersionSummary(
      output.latestSolutionVersion,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.performAutoML !== undefined && output.performAutoML !== null) {
    contents.performAutoML = output.performAutoML;
  }
  if (output.performHPO !== undefined && output.performHPO !== null) {
    contents.performHPO = output.performHPO;
  }
  if (output.recipeArn !== undefined && output.recipeArn !== null) {
    contents.recipeArn = output.recipeArn;
  }
  if (output.solutionArn !== undefined && output.solutionArn !== null) {
    contents.solutionArn = output.solutionArn;
  }
  if (output.solutionConfig !== undefined && output.solutionConfig !== null) {
    contents.solutionConfig = deserializeAws_json1_1SolutionConfig(
      output.solutionConfig,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1SolutionConfig = (
  output: any,
  context: __SerdeContext
): SolutionConfig => {
  let contents: any = {
    __type: "SolutionConfig",
    algorithmHyperParameters: undefined,
    autoMLConfig: undefined,
    eventValueThreshold: undefined,
    featureTransformationParameters: undefined,
    hpoConfig: undefined
  };
  if (
    output.algorithmHyperParameters !== undefined &&
    output.algorithmHyperParameters !== null
  ) {
    contents.algorithmHyperParameters = deserializeAws_json1_1HyperParameters(
      output.algorithmHyperParameters,
      context
    );
  }
  if (output.autoMLConfig !== undefined && output.autoMLConfig !== null) {
    contents.autoMLConfig = deserializeAws_json1_1AutoMLConfig(
      output.autoMLConfig,
      context
    );
  }
  if (
    output.eventValueThreshold !== undefined &&
    output.eventValueThreshold !== null
  ) {
    contents.eventValueThreshold = output.eventValueThreshold;
  }
  if (
    output.featureTransformationParameters !== undefined &&
    output.featureTransformationParameters !== null
  ) {
    contents.featureTransformationParameters = deserializeAws_json1_1FeatureTransformationParameters(
      output.featureTransformationParameters,
      context
    );
  }
  if (output.hpoConfig !== undefined && output.hpoConfig !== null) {
    contents.hpoConfig = deserializeAws_json1_1HPOConfig(
      output.hpoConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SolutionSummary = (
  output: any,
  context: __SerdeContext
): SolutionSummary => {
  let contents: any = {
    __type: "SolutionSummary",
    creationDateTime: undefined,
    lastUpdatedDateTime: undefined,
    name: undefined,
    solutionArn: undefined,
    status: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.solutionArn !== undefined && output.solutionArn !== null) {
    contents.solutionArn = output.solutionArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1SolutionVersion = (
  output: any,
  context: __SerdeContext
): SolutionVersion => {
  let contents: any = {
    __type: "SolutionVersion",
    creationDateTime: undefined,
    datasetGroupArn: undefined,
    eventType: undefined,
    failureReason: undefined,
    lastUpdatedDateTime: undefined,
    performAutoML: undefined,
    performHPO: undefined,
    recipeArn: undefined,
    solutionArn: undefined,
    solutionConfig: undefined,
    solutionVersionArn: undefined,
    status: undefined,
    trainingHours: undefined,
    trainingMode: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.datasetGroupArn !== undefined && output.datasetGroupArn !== null) {
    contents.datasetGroupArn = output.datasetGroupArn;
  }
  if (output.eventType !== undefined && output.eventType !== null) {
    contents.eventType = output.eventType;
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (output.performAutoML !== undefined && output.performAutoML !== null) {
    contents.performAutoML = output.performAutoML;
  }
  if (output.performHPO !== undefined && output.performHPO !== null) {
    contents.performHPO = output.performHPO;
  }
  if (output.recipeArn !== undefined && output.recipeArn !== null) {
    contents.recipeArn = output.recipeArn;
  }
  if (output.solutionArn !== undefined && output.solutionArn !== null) {
    contents.solutionArn = output.solutionArn;
  }
  if (output.solutionConfig !== undefined && output.solutionConfig !== null) {
    contents.solutionConfig = deserializeAws_json1_1SolutionConfig(
      output.solutionConfig,
      context
    );
  }
  if (
    output.solutionVersionArn !== undefined &&
    output.solutionVersionArn !== null
  ) {
    contents.solutionVersionArn = output.solutionVersionArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.trainingHours !== undefined && output.trainingHours !== null) {
    contents.trainingHours = output.trainingHours;
  }
  if (output.trainingMode !== undefined && output.trainingMode !== null) {
    contents.trainingMode = output.trainingMode;
  }
  return contents;
};

const deserializeAws_json1_1SolutionVersionSummary = (
  output: any,
  context: __SerdeContext
): SolutionVersionSummary => {
  let contents: any = {
    __type: "SolutionVersionSummary",
    creationDateTime: undefined,
    failureReason: undefined,
    lastUpdatedDateTime: undefined,
    solutionVersionArn: undefined,
    status: undefined
  };
  if (
    output.creationDateTime !== undefined &&
    output.creationDateTime !== null
  ) {
    contents.creationDateTime = new Date(
      Math.round(output.creationDateTime * 1000)
    );
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (
    output.lastUpdatedDateTime !== undefined &&
    output.lastUpdatedDateTime !== null
  ) {
    contents.lastUpdatedDateTime = new Date(
      Math.round(output.lastUpdatedDateTime * 1000)
    );
  }
  if (
    output.solutionVersionArn !== undefined &&
    output.solutionVersionArn !== null
  ) {
    contents.solutionVersionArn = output.solutionVersionArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1SolutionVersions = (
  output: any,
  context: __SerdeContext
): Array<SolutionVersionSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SolutionVersionSummary(entry, context)
  );
};

const deserializeAws_json1_1Solutions = (
  output: any,
  context: __SerdeContext
): Array<SolutionSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SolutionSummary(entry, context)
  );
};

const deserializeAws_json1_1UpdateCampaignResponse = (
  output: any,
  context: __SerdeContext
): UpdateCampaignResponse => {
  let contents: any = {
    __type: "UpdateCampaignResponse",
    campaignArn: undefined
  };
  if (output.campaignArn !== undefined && output.campaignArn !== null) {
    contents.campaignArn = output.campaignArn;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  let contents: any = {
    __type: "ResourceAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
