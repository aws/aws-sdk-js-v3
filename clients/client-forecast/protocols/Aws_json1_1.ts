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
  CreateForecastCommandInput,
  CreateForecastCommandOutput
} from "../commands/CreateForecastCommand";
import {
  CreateForecastExportJobCommandInput,
  CreateForecastExportJobCommandOutput
} from "../commands/CreateForecastExportJobCommand";
import {
  CreatePredictorCommandInput,
  CreatePredictorCommandOutput
} from "../commands/CreatePredictorCommand";
import {
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput
} from "../commands/DeleteDatasetCommand";
import {
  DeleteDatasetGroupCommandInput,
  DeleteDatasetGroupCommandOutput
} from "../commands/DeleteDatasetGroupCommand";
import {
  DeleteDatasetImportJobCommandInput,
  DeleteDatasetImportJobCommandOutput
} from "../commands/DeleteDatasetImportJobCommand";
import {
  DeleteForecastCommandInput,
  DeleteForecastCommandOutput
} from "../commands/DeleteForecastCommand";
import {
  DeleteForecastExportJobCommandInput,
  DeleteForecastExportJobCommandOutput
} from "../commands/DeleteForecastExportJobCommand";
import {
  DeletePredictorCommandInput,
  DeletePredictorCommandOutput
} from "../commands/DeletePredictorCommand";
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
  DescribeForecastCommandInput,
  DescribeForecastCommandOutput
} from "../commands/DescribeForecastCommand";
import {
  DescribeForecastExportJobCommandInput,
  DescribeForecastExportJobCommandOutput
} from "../commands/DescribeForecastExportJobCommand";
import {
  DescribePredictorCommandInput,
  DescribePredictorCommandOutput
} from "../commands/DescribePredictorCommand";
import {
  GetAccuracyMetricsCommandInput,
  GetAccuracyMetricsCommandOutput
} from "../commands/GetAccuracyMetricsCommand";
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
  ListForecastExportJobsCommandInput,
  ListForecastExportJobsCommandOutput
} from "../commands/ListForecastExportJobsCommand";
import {
  ListForecastsCommandInput,
  ListForecastsCommandOutput
} from "../commands/ListForecastsCommand";
import {
  ListPredictorsCommandInput,
  ListPredictorsCommandOutput
} from "../commands/ListPredictorsCommand";
import {
  UpdateDatasetGroupCommandInput,
  UpdateDatasetGroupCommandOutput
} from "../commands/UpdateDatasetGroupCommand";
import {
  CategoricalParameterRange,
  ContinuousParameterRange,
  CreateDatasetGroupRequest,
  CreateDatasetGroupResponse,
  CreateDatasetImportJobRequest,
  CreateDatasetImportJobResponse,
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateForecastExportJobRequest,
  CreateForecastExportJobResponse,
  CreateForecastRequest,
  CreateForecastResponse,
  CreatePredictorRequest,
  CreatePredictorResponse,
  DataDestination,
  DataSource,
  DatasetGroupSummary,
  DatasetImportJobSummary,
  DatasetSummary,
  DeleteDatasetGroupRequest,
  DeleteDatasetImportJobRequest,
  DeleteDatasetRequest,
  DeleteForecastExportJobRequest,
  DeleteForecastRequest,
  DeletePredictorRequest,
  DescribeDatasetGroupRequest,
  DescribeDatasetGroupResponse,
  DescribeDatasetImportJobRequest,
  DescribeDatasetImportJobResponse,
  DescribeDatasetRequest,
  DescribeDatasetResponse,
  DescribeForecastExportJobRequest,
  DescribeForecastExportJobResponse,
  DescribeForecastRequest,
  DescribeForecastResponse,
  DescribePredictorRequest,
  DescribePredictorResponse,
  EncryptionConfig,
  EvaluationParameters,
  EvaluationResult,
  Featurization,
  FeaturizationConfig,
  FeaturizationMethod,
  Filter,
  ForecastExportJobSummary,
  ForecastSummary,
  GetAccuracyMetricsRequest,
  GetAccuracyMetricsResponse,
  HyperParameterTuningJobConfig,
  InputDataConfig,
  IntegerParameterRange,
  InvalidInputException,
  InvalidNextTokenException,
  LimitExceededException,
  ListDatasetGroupsRequest,
  ListDatasetGroupsResponse,
  ListDatasetImportJobsRequest,
  ListDatasetImportJobsResponse,
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListForecastExportJobsRequest,
  ListForecastExportJobsResponse,
  ListForecastsRequest,
  ListForecastsResponse,
  ListPredictorsRequest,
  ListPredictorsResponse,
  Metrics,
  ParameterRanges,
  PredictorExecution,
  PredictorExecutionDetails,
  PredictorSummary,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  S3Config,
  Schema,
  SchemaAttribute,
  Statistics,
  SupplementaryFeature,
  TestWindowSummary,
  UpdateDatasetGroupRequest,
  UpdateDatasetGroupResponse,
  WeightedQuantileLoss,
  WindowSummary
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateDatasetCommand(
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.CreateDataset";
  let body: any = {};
  const wrappedBody: any = {
    CreateDatasetRequest: serializeAws_json1_1CreateDatasetRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDataset",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateDatasetGroupCommand(
  input: CreateDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.CreateDatasetGroup";
  let body: any = {};
  const wrappedBody: any = {
    CreateDatasetGroupRequest: serializeAws_json1_1CreateDatasetGroupRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDatasetGroup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateDatasetImportJobCommand(
  input: CreateDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.CreateDatasetImportJob";
  let body: any = {};
  const wrappedBody: any = {
    CreateDatasetImportJobRequest: serializeAws_json1_1CreateDatasetImportJobRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateDatasetImportJob",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateForecastCommand(
  input: CreateForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.CreateForecast";
  let body: any = {};
  const wrappedBody: any = {
    CreateForecastRequest: serializeAws_json1_1CreateForecastRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateForecast",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateForecastExportJobCommand(
  input: CreateForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.CreateForecastExportJob";
  let body: any = {};
  const wrappedBody: any = {
    CreateForecastExportJobRequest: serializeAws_json1_1CreateForecastExportJobRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateForecastExportJob",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreatePredictorCommand(
  input: CreatePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.CreatePredictor";
  let body: any = {};
  const wrappedBody: any = {
    CreatePredictorRequest: serializeAws_json1_1CreatePredictorRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreatePredictor",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteDatasetCommand(
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DeleteDataset";
  let body: any = {};
  const wrappedBody: any = {
    DeleteDatasetRequest: serializeAws_json1_1DeleteDatasetRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteDataset",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteDatasetGroupCommand(
  input: DeleteDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DeleteDatasetGroup";
  let body: any = {};
  const wrappedBody: any = {
    DeleteDatasetGroupRequest: serializeAws_json1_1DeleteDatasetGroupRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteDatasetGroup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteDatasetImportJobCommand(
  input: DeleteDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DeleteDatasetImportJob";
  let body: any = {};
  const wrappedBody: any = {
    DeleteDatasetImportJobRequest: serializeAws_json1_1DeleteDatasetImportJobRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteDatasetImportJob",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteForecastCommand(
  input: DeleteForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DeleteForecast";
  let body: any = {};
  const wrappedBody: any = {
    DeleteForecastRequest: serializeAws_json1_1DeleteForecastRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteForecast",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteForecastExportJobCommand(
  input: DeleteForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DeleteForecastExportJob";
  let body: any = {};
  const wrappedBody: any = {
    DeleteForecastExportJobRequest: serializeAws_json1_1DeleteForecastExportJobRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteForecastExportJob",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeletePredictorCommand(
  input: DeletePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DeletePredictor";
  let body: any = {};
  const wrappedBody: any = {
    DeletePredictorRequest: serializeAws_json1_1DeletePredictorRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeletePredictor",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeDatasetCommand(
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DescribeDataset";
  let body: any = {};
  const wrappedBody: any = {
    DescribeDatasetRequest: serializeAws_json1_1DescribeDatasetRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeDataset",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeDatasetGroupCommand(
  input: DescribeDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DescribeDatasetGroup";
  let body: any = {};
  const wrappedBody: any = {
    DescribeDatasetGroupRequest: serializeAws_json1_1DescribeDatasetGroupRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeDatasetGroup",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeDatasetImportJobCommand(
  input: DescribeDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DescribeDatasetImportJob";
  let body: any = {};
  const wrappedBody: any = {
    DescribeDatasetImportJobRequest: serializeAws_json1_1DescribeDatasetImportJobRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeDatasetImportJob",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeForecastCommand(
  input: DescribeForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DescribeForecast";
  let body: any = {};
  const wrappedBody: any = {
    DescribeForecastRequest: serializeAws_json1_1DescribeForecastRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeForecast",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeForecastExportJobCommand(
  input: DescribeForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DescribeForecastExportJob";
  let body: any = {};
  const wrappedBody: any = {
    DescribeForecastExportJobRequest: serializeAws_json1_1DescribeForecastExportJobRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeForecastExportJob",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribePredictorCommand(
  input: DescribePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DescribePredictor";
  let body: any = {};
  const wrappedBody: any = {
    DescribePredictorRequest: serializeAws_json1_1DescribePredictorRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribePredictor",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetAccuracyMetricsCommand(
  input: GetAccuracyMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.GetAccuracyMetrics";
  let body: any = {};
  const wrappedBody: any = {
    GetAccuracyMetricsRequest: serializeAws_json1_1GetAccuracyMetricsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetAccuracyMetrics",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListDatasetGroupsCommand(
  input: ListDatasetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.ListDatasetGroups";
  let body: any = {};
  const wrappedBody: any = {
    ListDatasetGroupsRequest: serializeAws_json1_1ListDatasetGroupsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListDatasetGroups",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListDatasetImportJobsCommand(
  input: ListDatasetImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.ListDatasetImportJobs";
  let body: any = {};
  const wrappedBody: any = {
    ListDatasetImportJobsRequest: serializeAws_json1_1ListDatasetImportJobsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListDatasetImportJobs",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListDatasetsCommand(
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.ListDatasets";
  let body: any = {};
  const wrappedBody: any = {
    ListDatasetsRequest: serializeAws_json1_1ListDatasetsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListDatasets",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListForecastExportJobsCommand(
  input: ListForecastExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.ListForecastExportJobs";
  let body: any = {};
  const wrappedBody: any = {
    ListForecastExportJobsRequest: serializeAws_json1_1ListForecastExportJobsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListForecastExportJobs",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListForecastsCommand(
  input: ListForecastsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.ListForecasts";
  let body: any = {};
  const wrappedBody: any = {
    ListForecastsRequest: serializeAws_json1_1ListForecastsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListForecasts",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListPredictorsCommand(
  input: ListPredictorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.ListPredictors";
  let body: any = {};
  const wrappedBody: any = {
    ListPredictorsRequest: serializeAws_json1_1ListPredictorsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListPredictors",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateDatasetGroupCommand(
  input: UpdateDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.UpdateDatasetGroup";
  let body: any = {};
  const wrappedBody: any = {
    UpdateDatasetGroupRequest: serializeAws_json1_1UpdateDatasetGroupRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateDatasetGroup",
    headers: headers,
    body: body
  });
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
  contents = deserializeAws_json1_1CreateDatasetResponse(
    data.CreateDatasetResponse,
    context
  );
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.seer.service#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
      response = await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  contents = deserializeAws_json1_1CreateDatasetGroupResponse(
    data.CreateDatasetGroupResponse,
    context
  );
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.seer.service#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
      response = await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
    data.CreateDatasetImportJobResponse,
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.seer.service#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
      response = await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateForecastCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateForecastResponse(
    data.CreateForecastResponse,
    context
  );
  const response: CreateForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateForecastResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateForecastCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.seer.service#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
      response = await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateForecastExportJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastExportJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateForecastExportJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateForecastExportJobResponse(
    data.CreateForecastExportJobResponse,
    context
  );
  const response: CreateForecastExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateForecastExportJobResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateForecastExportJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastExportJobCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.seer.service#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
      response = await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreatePredictorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePredictorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreatePredictorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePredictorResponse(
    data.CreatePredictorResponse,
    context
  );
  const response: CreatePredictorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePredictorResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreatePredictorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePredictorCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazonaws.seer.service#LimitExceededException":
      response = await deserializeAws_json1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
      response = await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteDatasetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDatasetCommandError(output, context);
  }
  const response: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDatasetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  const response: DeleteDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDatasetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteDatasetImportJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetImportJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDatasetImportJobCommandError(
      output,
      context
    );
  }
  const response: DeleteDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDatasetImportJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetImportJobCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteForecastCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteForecastCommandError(output, context);
  }
  const response: DeleteForecastCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteForecastCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteForecastExportJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastExportJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteForecastExportJobCommandError(
      output,
      context
    );
  }
  const response: DeleteForecastExportJobCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteForecastExportJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastExportJobCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeletePredictorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredictorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePredictorCommandError(output, context);
  }
  const response: DeletePredictorCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeletePredictorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredictorCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  contents = deserializeAws_json1_1DescribeDatasetResponse(
    data.DescribeDatasetResponse,
    context
  );
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  contents = deserializeAws_json1_1DescribeDatasetGroupResponse(
    data.DescribeDatasetGroupResponse,
    context
  );
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
    data.DescribeDatasetImportJobResponse,
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeForecastCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeForecastResponse(
    data.DescribeForecastResponse,
    context
  );
  const response: DescribeForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeForecastResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeForecastCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeForecastExportJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastExportJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeForecastExportJobCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeForecastExportJobResponse(
    data.DescribeForecastExportJobResponse,
    context
  );
  const response: DescribeForecastExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeForecastExportJobResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeForecastExportJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastExportJobCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribePredictorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePredictorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribePredictorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePredictorResponse(
    data.DescribePredictorResponse,
    context
  );
  const response: DescribePredictorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribePredictorResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribePredictorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePredictorCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetAccuracyMetricsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccuracyMetricsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAccuracyMetricsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAccuracyMetricsResponse(
    data.GetAccuracyMetricsResponse,
    context
  );
  const response: GetAccuracyMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAccuracyMetricsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetAccuracyMetricsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccuracyMetricsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  contents = deserializeAws_json1_1ListDatasetGroupsResponse(
    data.ListDatasetGroupsResponse,
    context
  );
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.seer.service#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  contents = deserializeAws_json1_1ListDatasetImportJobsResponse(
    data.ListDatasetImportJobsResponse,
    context
  );
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.seer.service#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  contents = deserializeAws_json1_1ListDatasetsResponse(
    data.ListDatasetsResponse,
    context
  );
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.seer.service#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListForecastExportJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastExportJobsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListForecastExportJobsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListForecastExportJobsResponse(
    data.ListForecastExportJobsResponse,
    context
  );
  const response: ListForecastExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListForecastExportJobsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListForecastExportJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastExportJobsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.seer.service#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListForecastsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListForecastsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListForecastsResponse(
    data.ListForecastsResponse,
    context
  );
  const response: ListForecastsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListForecastsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListForecastsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.seer.service#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListPredictorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPredictorsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPredictorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPredictorsResponse(
    data.ListPredictorsResponse,
    context
  );
  const response: ListPredictorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPredictorsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListPredictorsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPredictorsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.seer.service#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateDatasetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetGroupCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDatasetGroupCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDatasetGroupResponse(
    data.UpdateDatasetGroupResponse,
    context
  );
  const response: UpdateDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDatasetGroupResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateDatasetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetGroupCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.seer.service#InvalidInputException":
      response = await deserializeAws_json1_1InvalidInputExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = await deserializeAws_json1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazonaws.seer.service#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const deserialized: any = deserializeAws_json1_1InvalidInputException(
    output.body,
    context
  );
  const contents: InvalidInputException = {
    __type: "InvalidInputException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    output.body,
    context
  );
  const contents: InvalidNextTokenException = {
    __type: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    output.body,
    context
  );
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(
    output.body,
    context
  );
  const contents: ResourceAlreadyExistsException = {
    __type: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(
    output.body,
    context
  );
  const contents: ResourceInUseException = {
    __type: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    output.body,
    context
  );
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1ArnList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1CategoricalParameterRange = (
  input: CategoricalParameterRange,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Values !== undefined) {
    bodyParams["Values"] = serializeAws_json1_1Values(input.Values, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CategoricalParameterRanges = (
  input: Array<CategoricalParameterRange>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1CategoricalParameterRange(entry, context)
  );
};

const serializeAws_json1_1ContinuousParameterRange = (
  input: ContinuousParameterRange,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxValue !== undefined) {
    bodyParams["MaxValue"] = input.MaxValue;
  }
  if (input.MinValue !== undefined) {
    bodyParams["MinValue"] = input.MinValue;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ScalingType !== undefined) {
    bodyParams["ScalingType"] = input.ScalingType;
  }
  return bodyParams;
};

const serializeAws_json1_1ContinuousParameterRanges = (
  input: Array<ContinuousParameterRange>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1ContinuousParameterRange(entry, context)
  );
};

const serializeAws_json1_1CreateDatasetGroupRequest = (
  input: CreateDatasetGroupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DatasetArns !== undefined) {
    bodyParams["DatasetArns"] = serializeAws_json1_1ArnList(
      input.DatasetArns,
      context
    );
  }
  if (input.DatasetGroupName !== undefined) {
    bodyParams["DatasetGroupName"] = input.DatasetGroupName;
  }
  if (input.Domain !== undefined) {
    bodyParams["Domain"] = input.Domain;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDatasetImportJobRequest = (
  input: CreateDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DataSource !== undefined) {
    bodyParams["DataSource"] = serializeAws_json1_1DataSource(
      input.DataSource,
      context
    );
  }
  if (input.DatasetArn !== undefined) {
    bodyParams["DatasetArn"] = input.DatasetArn;
  }
  if (input.DatasetImportJobName !== undefined) {
    bodyParams["DatasetImportJobName"] = input.DatasetImportJobName;
  }
  if (input.TimestampFormat !== undefined) {
    bodyParams["TimestampFormat"] = input.TimestampFormat;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateDatasetRequest = (
  input: CreateDatasetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DataFrequency !== undefined) {
    bodyParams["DataFrequency"] = input.DataFrequency;
  }
  if (input.DatasetName !== undefined) {
    bodyParams["DatasetName"] = input.DatasetName;
  }
  if (input.DatasetType !== undefined) {
    bodyParams["DatasetType"] = input.DatasetType;
  }
  if (input.Domain !== undefined) {
    bodyParams["Domain"] = input.Domain;
  }
  if (input.EncryptionConfig !== undefined) {
    bodyParams["EncryptionConfig"] = serializeAws_json1_1EncryptionConfig(
      input.EncryptionConfig,
      context
    );
  }
  if (input.Schema !== undefined) {
    bodyParams["Schema"] = serializeAws_json1_1Schema(input.Schema, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateForecastExportJobRequest = (
  input: CreateForecastExportJobRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Destination !== undefined) {
    bodyParams["Destination"] = serializeAws_json1_1DataDestination(
      input.Destination,
      context
    );
  }
  if (input.ForecastArn !== undefined) {
    bodyParams["ForecastArn"] = input.ForecastArn;
  }
  if (input.ForecastExportJobName !== undefined) {
    bodyParams["ForecastExportJobName"] = input.ForecastExportJobName;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateForecastRequest = (
  input: CreateForecastRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ForecastName !== undefined) {
    bodyParams["ForecastName"] = input.ForecastName;
  }
  if (input.ForecastTypes !== undefined) {
    bodyParams["ForecastTypes"] = serializeAws_json1_1ForecastTypes(
      input.ForecastTypes,
      context
    );
  }
  if (input.PredictorArn !== undefined) {
    bodyParams["PredictorArn"] = input.PredictorArn;
  }
  return bodyParams;
};

const serializeAws_json1_1CreatePredictorRequest = (
  input: CreatePredictorRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AlgorithmArn !== undefined) {
    bodyParams["AlgorithmArn"] = input.AlgorithmArn;
  }
  if (input.EncryptionConfig !== undefined) {
    bodyParams["EncryptionConfig"] = serializeAws_json1_1EncryptionConfig(
      input.EncryptionConfig,
      context
    );
  }
  if (input.EvaluationParameters !== undefined) {
    bodyParams[
      "EvaluationParameters"
    ] = serializeAws_json1_1EvaluationParameters(
      input.EvaluationParameters,
      context
    );
  }
  if (input.FeaturizationConfig !== undefined) {
    bodyParams["FeaturizationConfig"] = serializeAws_json1_1FeaturizationConfig(
      input.FeaturizationConfig,
      context
    );
  }
  if (input.ForecastHorizon !== undefined) {
    bodyParams["ForecastHorizon"] = input.ForecastHorizon;
  }
  if (input.HPOConfig !== undefined) {
    bodyParams["HPOConfig"] = serializeAws_json1_1HyperParameterTuningJobConfig(
      input.HPOConfig,
      context
    );
  }
  if (input.InputDataConfig !== undefined) {
    bodyParams["InputDataConfig"] = serializeAws_json1_1InputDataConfig(
      input.InputDataConfig,
      context
    );
  }
  if (input.PerformAutoML !== undefined) {
    bodyParams["PerformAutoML"] = input.PerformAutoML;
  }
  if (input.PerformHPO !== undefined) {
    bodyParams["PerformHPO"] = input.PerformHPO;
  }
  if (input.PredictorName !== undefined) {
    bodyParams["PredictorName"] = input.PredictorName;
  }
  if (input.TrainingParameters !== undefined) {
    bodyParams["TrainingParameters"] = serializeAws_json1_1TrainingParameters(
      input.TrainingParameters,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DataDestination = (
  input: DataDestination,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.S3Config !== undefined) {
    bodyParams["S3Config"] = serializeAws_json1_1S3Config(
      input.S3Config,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DataSource = (
  input: DataSource,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.S3Config !== undefined) {
    bodyParams["S3Config"] = serializeAws_json1_1S3Config(
      input.S3Config,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDatasetGroupRequest = (
  input: DeleteDatasetGroupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DatasetGroupArn !== undefined) {
    bodyParams["DatasetGroupArn"] = input.DatasetGroupArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDatasetImportJobRequest = (
  input: DeleteDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DatasetImportJobArn !== undefined) {
    bodyParams["DatasetImportJobArn"] = input.DatasetImportJobArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDatasetRequest = (
  input: DeleteDatasetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DatasetArn !== undefined) {
    bodyParams["DatasetArn"] = input.DatasetArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteForecastExportJobRequest = (
  input: DeleteForecastExportJobRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ForecastExportJobArn !== undefined) {
    bodyParams["ForecastExportJobArn"] = input.ForecastExportJobArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteForecastRequest = (
  input: DeleteForecastRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ForecastArn !== undefined) {
    bodyParams["ForecastArn"] = input.ForecastArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeletePredictorRequest = (
  input: DeletePredictorRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PredictorArn !== undefined) {
    bodyParams["PredictorArn"] = input.PredictorArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDatasetGroupRequest = (
  input: DescribeDatasetGroupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DatasetGroupArn !== undefined) {
    bodyParams["DatasetGroupArn"] = input.DatasetGroupArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDatasetImportJobRequest = (
  input: DescribeDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DatasetImportJobArn !== undefined) {
    bodyParams["DatasetImportJobArn"] = input.DatasetImportJobArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDatasetRequest = (
  input: DescribeDatasetRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DatasetArn !== undefined) {
    bodyParams["DatasetArn"] = input.DatasetArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeForecastExportJobRequest = (
  input: DescribeForecastExportJobRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ForecastExportJobArn !== undefined) {
    bodyParams["ForecastExportJobArn"] = input.ForecastExportJobArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeForecastRequest = (
  input: DescribeForecastRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ForecastArn !== undefined) {
    bodyParams["ForecastArn"] = input.ForecastArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribePredictorRequest = (
  input: DescribePredictorRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PredictorArn !== undefined) {
    bodyParams["PredictorArn"] = input.PredictorArn;
  }
  return bodyParams;
};

const serializeAws_json1_1EncryptionConfig = (
  input: EncryptionConfig,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KMSKeyArn !== undefined) {
    bodyParams["KMSKeyArn"] = input.KMSKeyArn;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  return bodyParams;
};

const serializeAws_json1_1EvaluationParameters = (
  input: EvaluationParameters,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BackTestWindowOffset !== undefined) {
    bodyParams["BackTestWindowOffset"] = input.BackTestWindowOffset;
  }
  if (input.NumberOfBacktestWindows !== undefined) {
    bodyParams["NumberOfBacktestWindows"] = input.NumberOfBacktestWindows;
  }
  return bodyParams;
};

const serializeAws_json1_1Featurization = (
  input: Featurization,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeName !== undefined) {
    bodyParams["AttributeName"] = input.AttributeName;
  }
  if (input.FeaturizationPipeline !== undefined) {
    bodyParams[
      "FeaturizationPipeline"
    ] = serializeAws_json1_1FeaturizationPipeline(
      input.FeaturizationPipeline,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1FeaturizationConfig = (
  input: FeaturizationConfig,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Featurizations !== undefined) {
    bodyParams["Featurizations"] = serializeAws_json1_1Featurizations(
      input.Featurizations,
      context
    );
  }
  if (input.ForecastDimensions !== undefined) {
    bodyParams["ForecastDimensions"] = serializeAws_json1_1ForecastDimensions(
      input.ForecastDimensions,
      context
    );
  }
  if (input.ForecastFrequency !== undefined) {
    bodyParams["ForecastFrequency"] = input.ForecastFrequency;
  }
  return bodyParams;
};

const serializeAws_json1_1FeaturizationMethod = (
  input: FeaturizationMethod,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.FeaturizationMethodName !== undefined) {
    bodyParams["FeaturizationMethodName"] = input.FeaturizationMethodName;
  }
  if (input.FeaturizationMethodParameters !== undefined) {
    bodyParams[
      "FeaturizationMethodParameters"
    ] = serializeAws_json1_1FeaturizationMethodParameters(
      input.FeaturizationMethodParameters,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1FeaturizationMethodParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1FeaturizationPipeline = (
  input: Array<FeaturizationMethod>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1FeaturizationMethod(entry, context)
  );
};

const serializeAws_json1_1Featurizations = (
  input: Array<Featurization>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1Featurization(entry, context)
  );
};

const serializeAws_json1_1Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Condition !== undefined) {
    bodyParams["Condition"] = input.Condition;
  }
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1Filters = (
  input: Array<Filter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Filter(entry, context));
};

const serializeAws_json1_1ForecastDimensions = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1ForecastTypes = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1GetAccuracyMetricsRequest = (
  input: GetAccuracyMetricsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.PredictorArn !== undefined) {
    bodyParams["PredictorArn"] = input.PredictorArn;
  }
  return bodyParams;
};

const serializeAws_json1_1HyperParameterTuningJobConfig = (
  input: HyperParameterTuningJobConfig,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ParameterRanges !== undefined) {
    bodyParams["ParameterRanges"] = serializeAws_json1_1ParameterRanges(
      input.ParameterRanges,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1InputDataConfig = (
  input: InputDataConfig,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DatasetGroupArn !== undefined) {
    bodyParams["DatasetGroupArn"] = input.DatasetGroupArn;
  }
  if (input.SupplementaryFeatures !== undefined) {
    bodyParams[
      "SupplementaryFeatures"
    ] = serializeAws_json1_1SupplementaryFeatures(
      input.SupplementaryFeatures,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1IntegerParameterRange = (
  input: IntegerParameterRange,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxValue !== undefined) {
    bodyParams["MaxValue"] = input.MaxValue;
  }
  if (input.MinValue !== undefined) {
    bodyParams["MinValue"] = input.MinValue;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ScalingType !== undefined) {
    bodyParams["ScalingType"] = input.ScalingType;
  }
  return bodyParams;
};

const serializeAws_json1_1IntegerParameterRanges = (
  input: Array<IntegerParameterRange>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1IntegerParameterRange(entry, context)
  );
};

const serializeAws_json1_1ListDatasetGroupsRequest = (
  input: ListDatasetGroupsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDatasetImportJobsRequest = (
  input: ListDatasetImportJobsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDatasetsRequest = (
  input: ListDatasetsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListForecastExportJobsRequest = (
  input: ListForecastExportJobsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListForecastsRequest = (
  input: ListForecastsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListPredictorsRequest = (
  input: ListPredictorsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams["Filters"] = serializeAws_json1_1Filters(input.Filters, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ParameterRanges = (
  input: ParameterRanges,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CategoricalParameterRanges !== undefined) {
    bodyParams[
      "CategoricalParameterRanges"
    ] = serializeAws_json1_1CategoricalParameterRanges(
      input.CategoricalParameterRanges,
      context
    );
  }
  if (input.ContinuousParameterRanges !== undefined) {
    bodyParams[
      "ContinuousParameterRanges"
    ] = serializeAws_json1_1ContinuousParameterRanges(
      input.ContinuousParameterRanges,
      context
    );
  }
  if (input.IntegerParameterRanges !== undefined) {
    bodyParams[
      "IntegerParameterRanges"
    ] = serializeAws_json1_1IntegerParameterRanges(
      input.IntegerParameterRanges,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1S3Config = (
  input: S3Config,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KMSKeyArn !== undefined) {
    bodyParams["KMSKeyArn"] = input.KMSKeyArn;
  }
  if (input.Path !== undefined) {
    bodyParams["Path"] = input.Path;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  return bodyParams;
};

const serializeAws_json1_1Schema = (
  input: Schema,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Attributes !== undefined) {
    bodyParams["Attributes"] = serializeAws_json1_1SchemaAttributes(
      input.Attributes,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SchemaAttribute = (
  input: SchemaAttribute,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeName !== undefined) {
    bodyParams["AttributeName"] = input.AttributeName;
  }
  if (input.AttributeType !== undefined) {
    bodyParams["AttributeType"] = input.AttributeType;
  }
  return bodyParams;
};

const serializeAws_json1_1SchemaAttributes = (
  input: Array<SchemaAttribute>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1SchemaAttribute(entry, context)
  );
};

const serializeAws_json1_1SupplementaryFeature = (
  input: SupplementaryFeature,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1SupplementaryFeatures = (
  input: Array<SupplementaryFeature>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1SupplementaryFeature(entry, context)
  );
};

const serializeAws_json1_1TrainingParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1UpdateDatasetGroupRequest = (
  input: UpdateDatasetGroupRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DatasetArns !== undefined) {
    bodyParams["DatasetArns"] = serializeAws_json1_1ArnList(
      input.DatasetArns,
      context
    );
  }
  if (input.DatasetGroupArn !== undefined) {
    bodyParams["DatasetGroupArn"] = input.DatasetGroupArn;
  }
  return bodyParams;
};

const serializeAws_json1_1Values = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const deserializeAws_json1_1ArnList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1CategoricalParameterRange = (
  output: any,
  context: __SerdeContext
): CategoricalParameterRange => {
  let contents: any = {
    __type: "CategoricalParameterRange",
    Name: undefined,
    Values: undefined
  };
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Values !== undefined) {
    contents.Values = deserializeAws_json1_1Values(output.Values, context);
  }
  return contents;
};

const deserializeAws_json1_1CategoricalParameterRanges = (
  output: any,
  context: __SerdeContext
): Array<CategoricalParameterRange> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1CategoricalParameterRange(entry, context)
  );
};

const deserializeAws_json1_1ContinuousParameterRange = (
  output: any,
  context: __SerdeContext
): ContinuousParameterRange => {
  let contents: any = {
    __type: "ContinuousParameterRange",
    MaxValue: undefined,
    MinValue: undefined,
    Name: undefined,
    ScalingType: undefined
  };
  if (output.MaxValue !== undefined) {
    contents.MaxValue = output.MaxValue;
  }
  if (output.MinValue !== undefined) {
    contents.MinValue = output.MinValue;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.ScalingType !== undefined) {
    contents.ScalingType = output.ScalingType;
  }
  return contents;
};

const deserializeAws_json1_1ContinuousParameterRanges = (
  output: any,
  context: __SerdeContext
): Array<ContinuousParameterRange> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ContinuousParameterRange(entry, context)
  );
};

const deserializeAws_json1_1CreateDatasetGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateDatasetGroupResponse => {
  let contents: any = {
    __type: "CreateDatasetGroupResponse",
    DatasetGroupArn: undefined
  };
  if (output.DatasetGroupArn !== undefined) {
    contents.DatasetGroupArn = output.DatasetGroupArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): CreateDatasetImportJobResponse => {
  let contents: any = {
    __type: "CreateDatasetImportJobResponse",
    DatasetImportJobArn: undefined
  };
  if (output.DatasetImportJobArn !== undefined) {
    contents.DatasetImportJobArn = output.DatasetImportJobArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateDatasetResponse = (
  output: any,
  context: __SerdeContext
): CreateDatasetResponse => {
  let contents: any = {
    __type: "CreateDatasetResponse",
    DatasetArn: undefined
  };
  if (output.DatasetArn !== undefined) {
    contents.DatasetArn = output.DatasetArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateForecastExportJobResponse = (
  output: any,
  context: __SerdeContext
): CreateForecastExportJobResponse => {
  let contents: any = {
    __type: "CreateForecastExportJobResponse",
    ForecastExportJobArn: undefined
  };
  if (output.ForecastExportJobArn !== undefined) {
    contents.ForecastExportJobArn = output.ForecastExportJobArn;
  }
  return contents;
};

const deserializeAws_json1_1CreateForecastResponse = (
  output: any,
  context: __SerdeContext
): CreateForecastResponse => {
  let contents: any = {
    __type: "CreateForecastResponse",
    ForecastArn: undefined
  };
  if (output.ForecastArn !== undefined) {
    contents.ForecastArn = output.ForecastArn;
  }
  return contents;
};

const deserializeAws_json1_1CreatePredictorResponse = (
  output: any,
  context: __SerdeContext
): CreatePredictorResponse => {
  let contents: any = {
    __type: "CreatePredictorResponse",
    PredictorArn: undefined
  };
  if (output.PredictorArn !== undefined) {
    contents.PredictorArn = output.PredictorArn;
  }
  return contents;
};

const deserializeAws_json1_1DataDestination = (
  output: any,
  context: __SerdeContext
): DataDestination => {
  let contents: any = {
    __type: "DataDestination",
    S3Config: undefined
  };
  if (output.S3Config !== undefined) {
    contents.S3Config = deserializeAws_json1_1S3Config(
      output.S3Config,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DataSource = (
  output: any,
  context: __SerdeContext
): DataSource => {
  let contents: any = {
    __type: "DataSource",
    S3Config: undefined
  };
  if (output.S3Config !== undefined) {
    contents.S3Config = deserializeAws_json1_1S3Config(
      output.S3Config,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DatasetGroupSummary = (
  output: any,
  context: __SerdeContext
): DatasetGroupSummary => {
  let contents: any = {
    __type: "DatasetGroupSummary",
    CreationTime: undefined,
    DatasetGroupArn: undefined,
    DatasetGroupName: undefined,
    LastModificationTime: undefined
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.DatasetGroupArn !== undefined) {
    contents.DatasetGroupArn = output.DatasetGroupArn;
  }
  if (output.DatasetGroupName !== undefined) {
    contents.DatasetGroupName = output.DatasetGroupName;
  }
  if (output.LastModificationTime !== undefined) {
    contents.LastModificationTime = new Date(
      output.LastModificationTime % 1 != 0
        ? Math.round(output.LastModificationTime * 1000)
        : output.LastModificationTime
    );
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

const deserializeAws_json1_1DatasetImportJobSummary = (
  output: any,
  context: __SerdeContext
): DatasetImportJobSummary => {
  let contents: any = {
    __type: "DatasetImportJobSummary",
    CreationTime: undefined,
    DataSource: undefined,
    DatasetImportJobArn: undefined,
    DatasetImportJobName: undefined,
    LastModificationTime: undefined,
    Message: undefined,
    Status: undefined
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.DataSource !== undefined) {
    contents.DataSource = deserializeAws_json1_1DataSource(
      output.DataSource,
      context
    );
  }
  if (output.DatasetImportJobArn !== undefined) {
    contents.DatasetImportJobArn = output.DatasetImportJobArn;
  }
  if (output.DatasetImportJobName !== undefined) {
    contents.DatasetImportJobName = output.DatasetImportJobName;
  }
  if (output.LastModificationTime !== undefined) {
    contents.LastModificationTime = new Date(
      output.LastModificationTime % 1 != 0
        ? Math.round(output.LastModificationTime * 1000)
        : output.LastModificationTime
    );
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
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

const deserializeAws_json1_1DatasetSummary = (
  output: any,
  context: __SerdeContext
): DatasetSummary => {
  let contents: any = {
    __type: "DatasetSummary",
    CreationTime: undefined,
    DatasetArn: undefined,
    DatasetName: undefined,
    DatasetType: undefined,
    Domain: undefined,
    LastModificationTime: undefined
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.DatasetArn !== undefined) {
    contents.DatasetArn = output.DatasetArn;
  }
  if (output.DatasetName !== undefined) {
    contents.DatasetName = output.DatasetName;
  }
  if (output.DatasetType !== undefined) {
    contents.DatasetType = output.DatasetType;
  }
  if (output.Domain !== undefined) {
    contents.Domain = output.Domain;
  }
  if (output.LastModificationTime !== undefined) {
    contents.LastModificationTime = new Date(
      output.LastModificationTime % 1 != 0
        ? Math.round(output.LastModificationTime * 1000)
        : output.LastModificationTime
    );
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

const deserializeAws_json1_1DescribeDatasetGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetGroupResponse => {
  let contents: any = {
    __type: "DescribeDatasetGroupResponse",
    CreationTime: undefined,
    DatasetArns: undefined,
    DatasetGroupArn: undefined,
    DatasetGroupName: undefined,
    Domain: undefined,
    LastModificationTime: undefined,
    Status: undefined
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.DatasetArns !== undefined) {
    contents.DatasetArns = deserializeAws_json1_1ArnList(
      output.DatasetArns,
      context
    );
  }
  if (output.DatasetGroupArn !== undefined) {
    contents.DatasetGroupArn = output.DatasetGroupArn;
  }
  if (output.DatasetGroupName !== undefined) {
    contents.DatasetGroupName = output.DatasetGroupName;
  }
  if (output.Domain !== undefined) {
    contents.Domain = output.Domain;
  }
  if (output.LastModificationTime !== undefined) {
    contents.LastModificationTime = new Date(
      output.LastModificationTime % 1 != 0
        ? Math.round(output.LastModificationTime * 1000)
        : output.LastModificationTime
    );
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1DescribeDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetImportJobResponse => {
  let contents: any = {
    __type: "DescribeDatasetImportJobResponse",
    CreationTime: undefined,
    DataSize: undefined,
    DataSource: undefined,
    DatasetArn: undefined,
    DatasetImportJobArn: undefined,
    DatasetImportJobName: undefined,
    FieldStatistics: undefined,
    LastModificationTime: undefined,
    Message: undefined,
    Status: undefined,
    TimestampFormat: undefined
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.DataSize !== undefined) {
    contents.DataSize = output.DataSize;
  }
  if (output.DataSource !== undefined) {
    contents.DataSource = deserializeAws_json1_1DataSource(
      output.DataSource,
      context
    );
  }
  if (output.DatasetArn !== undefined) {
    contents.DatasetArn = output.DatasetArn;
  }
  if (output.DatasetImportJobArn !== undefined) {
    contents.DatasetImportJobArn = output.DatasetImportJobArn;
  }
  if (output.DatasetImportJobName !== undefined) {
    contents.DatasetImportJobName = output.DatasetImportJobName;
  }
  if (output.FieldStatistics !== undefined) {
    contents.FieldStatistics = deserializeAws_json1_1FieldStatistics(
      output.FieldStatistics,
      context
    );
  }
  if (output.LastModificationTime !== undefined) {
    contents.LastModificationTime = new Date(
      output.LastModificationTime % 1 != 0
        ? Math.round(output.LastModificationTime * 1000)
        : output.LastModificationTime
    );
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.TimestampFormat !== undefined) {
    contents.TimestampFormat = output.TimestampFormat;
  }
  return contents;
};

const deserializeAws_json1_1DescribeDatasetResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetResponse => {
  let contents: any = {
    __type: "DescribeDatasetResponse",
    CreationTime: undefined,
    DataFrequency: undefined,
    DatasetArn: undefined,
    DatasetName: undefined,
    DatasetType: undefined,
    Domain: undefined,
    EncryptionConfig: undefined,
    LastModificationTime: undefined,
    Schema: undefined,
    Status: undefined
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.DataFrequency !== undefined) {
    contents.DataFrequency = output.DataFrequency;
  }
  if (output.DatasetArn !== undefined) {
    contents.DatasetArn = output.DatasetArn;
  }
  if (output.DatasetName !== undefined) {
    contents.DatasetName = output.DatasetName;
  }
  if (output.DatasetType !== undefined) {
    contents.DatasetType = output.DatasetType;
  }
  if (output.Domain !== undefined) {
    contents.Domain = output.Domain;
  }
  if (output.EncryptionConfig !== undefined) {
    contents.EncryptionConfig = deserializeAws_json1_1EncryptionConfig(
      output.EncryptionConfig,
      context
    );
  }
  if (output.LastModificationTime !== undefined) {
    contents.LastModificationTime = new Date(
      output.LastModificationTime % 1 != 0
        ? Math.round(output.LastModificationTime * 1000)
        : output.LastModificationTime
    );
  }
  if (output.Schema !== undefined) {
    contents.Schema = deserializeAws_json1_1Schema(output.Schema, context);
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1DescribeForecastExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeForecastExportJobResponse => {
  let contents: any = {
    __type: "DescribeForecastExportJobResponse",
    CreationTime: undefined,
    Destination: undefined,
    ForecastArn: undefined,
    ForecastExportJobArn: undefined,
    ForecastExportJobName: undefined,
    LastModificationTime: undefined,
    Message: undefined,
    Status: undefined
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.Destination !== undefined) {
    contents.Destination = deserializeAws_json1_1DataDestination(
      output.Destination,
      context
    );
  }
  if (output.ForecastArn !== undefined) {
    contents.ForecastArn = output.ForecastArn;
  }
  if (output.ForecastExportJobArn !== undefined) {
    contents.ForecastExportJobArn = output.ForecastExportJobArn;
  }
  if (output.ForecastExportJobName !== undefined) {
    contents.ForecastExportJobName = output.ForecastExportJobName;
  }
  if (output.LastModificationTime !== undefined) {
    contents.LastModificationTime = new Date(
      output.LastModificationTime % 1 != 0
        ? Math.round(output.LastModificationTime * 1000)
        : output.LastModificationTime
    );
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1DescribeForecastResponse = (
  output: any,
  context: __SerdeContext
): DescribeForecastResponse => {
  let contents: any = {
    __type: "DescribeForecastResponse",
    CreationTime: undefined,
    DatasetGroupArn: undefined,
    ForecastArn: undefined,
    ForecastName: undefined,
    ForecastTypes: undefined,
    LastModificationTime: undefined,
    Message: undefined,
    PredictorArn: undefined,
    Status: undefined
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.DatasetGroupArn !== undefined) {
    contents.DatasetGroupArn = output.DatasetGroupArn;
  }
  if (output.ForecastArn !== undefined) {
    contents.ForecastArn = output.ForecastArn;
  }
  if (output.ForecastName !== undefined) {
    contents.ForecastName = output.ForecastName;
  }
  if (output.ForecastTypes !== undefined) {
    contents.ForecastTypes = deserializeAws_json1_1ForecastTypes(
      output.ForecastTypes,
      context
    );
  }
  if (output.LastModificationTime !== undefined) {
    contents.LastModificationTime = new Date(
      output.LastModificationTime % 1 != 0
        ? Math.round(output.LastModificationTime * 1000)
        : output.LastModificationTime
    );
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.PredictorArn !== undefined) {
    contents.PredictorArn = output.PredictorArn;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1DescribePredictorResponse = (
  output: any,
  context: __SerdeContext
): DescribePredictorResponse => {
  let contents: any = {
    __type: "DescribePredictorResponse",
    AlgorithmArn: undefined,
    AutoMLAlgorithmArns: undefined,
    CreationTime: undefined,
    DatasetImportJobArns: undefined,
    EncryptionConfig: undefined,
    EvaluationParameters: undefined,
    FeaturizationConfig: undefined,
    ForecastHorizon: undefined,
    HPOConfig: undefined,
    InputDataConfig: undefined,
    LastModificationTime: undefined,
    Message: undefined,
    PerformAutoML: undefined,
    PerformHPO: undefined,
    PredictorArn: undefined,
    PredictorExecutionDetails: undefined,
    PredictorName: undefined,
    Status: undefined,
    TrainingParameters: undefined
  };
  if (output.AlgorithmArn !== undefined) {
    contents.AlgorithmArn = output.AlgorithmArn;
  }
  if (output.AutoMLAlgorithmArns !== undefined) {
    contents.AutoMLAlgorithmArns = deserializeAws_json1_1ArnList(
      output.AutoMLAlgorithmArns,
      context
    );
  }
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.DatasetImportJobArns !== undefined) {
    contents.DatasetImportJobArns = deserializeAws_json1_1ArnList(
      output.DatasetImportJobArns,
      context
    );
  }
  if (output.EncryptionConfig !== undefined) {
    contents.EncryptionConfig = deserializeAws_json1_1EncryptionConfig(
      output.EncryptionConfig,
      context
    );
  }
  if (output.EvaluationParameters !== undefined) {
    contents.EvaluationParameters = deserializeAws_json1_1EvaluationParameters(
      output.EvaluationParameters,
      context
    );
  }
  if (output.FeaturizationConfig !== undefined) {
    contents.FeaturizationConfig = deserializeAws_json1_1FeaturizationConfig(
      output.FeaturizationConfig,
      context
    );
  }
  if (output.ForecastHorizon !== undefined) {
    contents.ForecastHorizon = output.ForecastHorizon;
  }
  if (output.HPOConfig !== undefined) {
    contents.HPOConfig = deserializeAws_json1_1HyperParameterTuningJobConfig(
      output.HPOConfig,
      context
    );
  }
  if (output.InputDataConfig !== undefined) {
    contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(
      output.InputDataConfig,
      context
    );
  }
  if (output.LastModificationTime !== undefined) {
    contents.LastModificationTime = new Date(
      output.LastModificationTime % 1 != 0
        ? Math.round(output.LastModificationTime * 1000)
        : output.LastModificationTime
    );
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.PerformAutoML !== undefined) {
    contents.PerformAutoML = output.PerformAutoML;
  }
  if (output.PerformHPO !== undefined) {
    contents.PerformHPO = output.PerformHPO;
  }
  if (output.PredictorArn !== undefined) {
    contents.PredictorArn = output.PredictorArn;
  }
  if (output.PredictorExecutionDetails !== undefined) {
    contents.PredictorExecutionDetails = deserializeAws_json1_1PredictorExecutionDetails(
      output.PredictorExecutionDetails,
      context
    );
  }
  if (output.PredictorName !== undefined) {
    contents.PredictorName = output.PredictorName;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.TrainingParameters !== undefined) {
    contents.TrainingParameters = deserializeAws_json1_1TrainingParameters(
      output.TrainingParameters,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EncryptionConfig = (
  output: any,
  context: __SerdeContext
): EncryptionConfig => {
  let contents: any = {
    __type: "EncryptionConfig",
    KMSKeyArn: undefined,
    RoleArn: undefined
  };
  if (output.KMSKeyArn !== undefined) {
    contents.KMSKeyArn = output.KMSKeyArn;
  }
  if (output.RoleArn !== undefined) {
    contents.RoleArn = output.RoleArn;
  }
  return contents;
};

const deserializeAws_json1_1EvaluationParameters = (
  output: any,
  context: __SerdeContext
): EvaluationParameters => {
  let contents: any = {
    __type: "EvaluationParameters",
    BackTestWindowOffset: undefined,
    NumberOfBacktestWindows: undefined
  };
  if (output.BackTestWindowOffset !== undefined) {
    contents.BackTestWindowOffset = output.BackTestWindowOffset;
  }
  if (output.NumberOfBacktestWindows !== undefined) {
    contents.NumberOfBacktestWindows = output.NumberOfBacktestWindows;
  }
  return contents;
};

const deserializeAws_json1_1EvaluationResult = (
  output: any,
  context: __SerdeContext
): EvaluationResult => {
  let contents: any = {
    __type: "EvaluationResult",
    AlgorithmArn: undefined,
    TestWindows: undefined
  };
  if (output.AlgorithmArn !== undefined) {
    contents.AlgorithmArn = output.AlgorithmArn;
  }
  if (output.TestWindows !== undefined) {
    contents.TestWindows = deserializeAws_json1_1TestWindows(
      output.TestWindows,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Featurization = (
  output: any,
  context: __SerdeContext
): Featurization => {
  let contents: any = {
    __type: "Featurization",
    AttributeName: undefined,
    FeaturizationPipeline: undefined
  };
  if (output.AttributeName !== undefined) {
    contents.AttributeName = output.AttributeName;
  }
  if (output.FeaturizationPipeline !== undefined) {
    contents.FeaturizationPipeline = deserializeAws_json1_1FeaturizationPipeline(
      output.FeaturizationPipeline,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1FeaturizationConfig = (
  output: any,
  context: __SerdeContext
): FeaturizationConfig => {
  let contents: any = {
    __type: "FeaturizationConfig",
    Featurizations: undefined,
    ForecastDimensions: undefined,
    ForecastFrequency: undefined
  };
  if (output.Featurizations !== undefined) {
    contents.Featurizations = deserializeAws_json1_1Featurizations(
      output.Featurizations,
      context
    );
  }
  if (output.ForecastDimensions !== undefined) {
    contents.ForecastDimensions = deserializeAws_json1_1ForecastDimensions(
      output.ForecastDimensions,
      context
    );
  }
  if (output.ForecastFrequency !== undefined) {
    contents.ForecastFrequency = output.ForecastFrequency;
  }
  return contents;
};

const deserializeAws_json1_1FeaturizationMethod = (
  output: any,
  context: __SerdeContext
): FeaturizationMethod => {
  let contents: any = {
    __type: "FeaturizationMethod",
    FeaturizationMethodName: undefined,
    FeaturizationMethodParameters: undefined
  };
  if (output.FeaturizationMethodName !== undefined) {
    contents.FeaturizationMethodName = output.FeaturizationMethodName;
  }
  if (output.FeaturizationMethodParameters !== undefined) {
    contents.FeaturizationMethodParameters = deserializeAws_json1_1FeaturizationMethodParameters(
      output.FeaturizationMethodParameters,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1FeaturizationMethodParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1FeaturizationPipeline = (
  output: any,
  context: __SerdeContext
): Array<FeaturizationMethod> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FeaturizationMethod(entry, context)
  );
};

const deserializeAws_json1_1Featurizations = (
  output: any,
  context: __SerdeContext
): Array<Featurization> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Featurization(entry, context)
  );
};

const deserializeAws_json1_1FieldStatistics = (
  output: any,
  context: __SerdeContext
): { [key: string]: Statistics } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1Statistics(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_1ForecastDimensions = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ForecastExportJobSummary = (
  output: any,
  context: __SerdeContext
): ForecastExportJobSummary => {
  let contents: any = {
    __type: "ForecastExportJobSummary",
    CreationTime: undefined,
    Destination: undefined,
    ForecastExportJobArn: undefined,
    ForecastExportJobName: undefined,
    LastModificationTime: undefined,
    Message: undefined,
    Status: undefined
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.Destination !== undefined) {
    contents.Destination = deserializeAws_json1_1DataDestination(
      output.Destination,
      context
    );
  }
  if (output.ForecastExportJobArn !== undefined) {
    contents.ForecastExportJobArn = output.ForecastExportJobArn;
  }
  if (output.ForecastExportJobName !== undefined) {
    contents.ForecastExportJobName = output.ForecastExportJobName;
  }
  if (output.LastModificationTime !== undefined) {
    contents.LastModificationTime = new Date(
      output.LastModificationTime % 1 != 0
        ? Math.round(output.LastModificationTime * 1000)
        : output.LastModificationTime
    );
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1ForecastExportJobs = (
  output: any,
  context: __SerdeContext
): Array<ForecastExportJobSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ForecastExportJobSummary(entry, context)
  );
};

const deserializeAws_json1_1ForecastSummary = (
  output: any,
  context: __SerdeContext
): ForecastSummary => {
  let contents: any = {
    __type: "ForecastSummary",
    CreationTime: undefined,
    DatasetGroupArn: undefined,
    ForecastArn: undefined,
    ForecastName: undefined,
    LastModificationTime: undefined,
    Message: undefined,
    PredictorArn: undefined,
    Status: undefined
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.DatasetGroupArn !== undefined) {
    contents.DatasetGroupArn = output.DatasetGroupArn;
  }
  if (output.ForecastArn !== undefined) {
    contents.ForecastArn = output.ForecastArn;
  }
  if (output.ForecastName !== undefined) {
    contents.ForecastName = output.ForecastName;
  }
  if (output.LastModificationTime !== undefined) {
    contents.LastModificationTime = new Date(
      output.LastModificationTime % 1 != 0
        ? Math.round(output.LastModificationTime * 1000)
        : output.LastModificationTime
    );
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.PredictorArn !== undefined) {
    contents.PredictorArn = output.PredictorArn;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1ForecastTypes = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Forecasts = (
  output: any,
  context: __SerdeContext
): Array<ForecastSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ForecastSummary(entry, context)
  );
};

const deserializeAws_json1_1GetAccuracyMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetAccuracyMetricsResponse => {
  let contents: any = {
    __type: "GetAccuracyMetricsResponse",
    PredictorEvaluationResults: undefined
  };
  if (output.PredictorEvaluationResults !== undefined) {
    contents.PredictorEvaluationResults = deserializeAws_json1_1PredictorEvaluationResults(
      output.PredictorEvaluationResults,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1HyperParameterTuningJobConfig = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningJobConfig => {
  let contents: any = {
    __type: "HyperParameterTuningJobConfig",
    ParameterRanges: undefined
  };
  if (output.ParameterRanges !== undefined) {
    contents.ParameterRanges = deserializeAws_json1_1ParameterRanges(
      output.ParameterRanges,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InputDataConfig = (
  output: any,
  context: __SerdeContext
): InputDataConfig => {
  let contents: any = {
    __type: "InputDataConfig",
    DatasetGroupArn: undefined,
    SupplementaryFeatures: undefined
  };
  if (output.DatasetGroupArn !== undefined) {
    contents.DatasetGroupArn = output.DatasetGroupArn;
  }
  if (output.SupplementaryFeatures !== undefined) {
    contents.SupplementaryFeatures = deserializeAws_json1_1SupplementaryFeatures(
      output.SupplementaryFeatures,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1IntegerParameterRange = (
  output: any,
  context: __SerdeContext
): IntegerParameterRange => {
  let contents: any = {
    __type: "IntegerParameterRange",
    MaxValue: undefined,
    MinValue: undefined,
    Name: undefined,
    ScalingType: undefined
  };
  if (output.MaxValue !== undefined) {
    contents.MaxValue = output.MaxValue;
  }
  if (output.MinValue !== undefined) {
    contents.MinValue = output.MinValue;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.ScalingType !== undefined) {
    contents.ScalingType = output.ScalingType;
  }
  return contents;
};

const deserializeAws_json1_1IntegerParameterRanges = (
  output: any,
  context: __SerdeContext
): Array<IntegerParameterRange> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IntegerParameterRange(entry, context)
  );
};

const deserializeAws_json1_1InvalidInputException = (
  output: any,
  context: __SerdeContext
): InvalidInputException => {
  let contents: any = {
    __type: "InvalidInputException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListDatasetGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetGroupsResponse => {
  let contents: any = {
    __type: "ListDatasetGroupsResponse",
    DatasetGroups: undefined,
    NextToken: undefined
  };
  if (output.DatasetGroups !== undefined) {
    contents.DatasetGroups = deserializeAws_json1_1DatasetGroups(
      output.DatasetGroups,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListDatasetImportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetImportJobsResponse => {
  let contents: any = {
    __type: "ListDatasetImportJobsResponse",
    DatasetImportJobs: undefined,
    NextToken: undefined
  };
  if (output.DatasetImportJobs !== undefined) {
    contents.DatasetImportJobs = deserializeAws_json1_1DatasetImportJobs(
      output.DatasetImportJobs,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListDatasetsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetsResponse => {
  let contents: any = {
    __type: "ListDatasetsResponse",
    Datasets: undefined,
    NextToken: undefined
  };
  if (output.Datasets !== undefined) {
    contents.Datasets = deserializeAws_json1_1Datasets(
      output.Datasets,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListForecastExportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListForecastExportJobsResponse => {
  let contents: any = {
    __type: "ListForecastExportJobsResponse",
    ForecastExportJobs: undefined,
    NextToken: undefined
  };
  if (output.ForecastExportJobs !== undefined) {
    contents.ForecastExportJobs = deserializeAws_json1_1ForecastExportJobs(
      output.ForecastExportJobs,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListForecastsResponse = (
  output: any,
  context: __SerdeContext
): ListForecastsResponse => {
  let contents: any = {
    __type: "ListForecastsResponse",
    Forecasts: undefined,
    NextToken: undefined
  };
  if (output.Forecasts !== undefined) {
    contents.Forecasts = deserializeAws_json1_1Forecasts(
      output.Forecasts,
      context
    );
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListPredictorsResponse = (
  output: any,
  context: __SerdeContext
): ListPredictorsResponse => {
  let contents: any = {
    __type: "ListPredictorsResponse",
    NextToken: undefined,
    Predictors: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Predictors !== undefined) {
    contents.Predictors = deserializeAws_json1_1Predictors(
      output.Predictors,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Metrics = (
  output: any,
  context: __SerdeContext
): Metrics => {
  let contents: any = {
    __type: "Metrics",
    RMSE: undefined,
    WeightedQuantileLosses: undefined
  };
  if (output.RMSE !== undefined) {
    contents.RMSE = output.RMSE;
  }
  if (output.WeightedQuantileLosses !== undefined) {
    contents.WeightedQuantileLosses = deserializeAws_json1_1WeightedQuantileLosses(
      output.WeightedQuantileLosses,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ParameterRanges = (
  output: any,
  context: __SerdeContext
): ParameterRanges => {
  let contents: any = {
    __type: "ParameterRanges",
    CategoricalParameterRanges: undefined,
    ContinuousParameterRanges: undefined,
    IntegerParameterRanges: undefined
  };
  if (output.CategoricalParameterRanges !== undefined) {
    contents.CategoricalParameterRanges = deserializeAws_json1_1CategoricalParameterRanges(
      output.CategoricalParameterRanges,
      context
    );
  }
  if (output.ContinuousParameterRanges !== undefined) {
    contents.ContinuousParameterRanges = deserializeAws_json1_1ContinuousParameterRanges(
      output.ContinuousParameterRanges,
      context
    );
  }
  if (output.IntegerParameterRanges !== undefined) {
    contents.IntegerParameterRanges = deserializeAws_json1_1IntegerParameterRanges(
      output.IntegerParameterRanges,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PredictorEvaluationResults = (
  output: any,
  context: __SerdeContext
): Array<EvaluationResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EvaluationResult(entry, context)
  );
};

const deserializeAws_json1_1PredictorExecution = (
  output: any,
  context: __SerdeContext
): PredictorExecution => {
  let contents: any = {
    __type: "PredictorExecution",
    AlgorithmArn: undefined,
    TestWindows: undefined
  };
  if (output.AlgorithmArn !== undefined) {
    contents.AlgorithmArn = output.AlgorithmArn;
  }
  if (output.TestWindows !== undefined) {
    contents.TestWindows = deserializeAws_json1_1TestWindowDetails(
      output.TestWindows,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PredictorExecutionDetails = (
  output: any,
  context: __SerdeContext
): PredictorExecutionDetails => {
  let contents: any = {
    __type: "PredictorExecutionDetails",
    PredictorExecutions: undefined
  };
  if (output.PredictorExecutions !== undefined) {
    contents.PredictorExecutions = deserializeAws_json1_1PredictorExecutions(
      output.PredictorExecutions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PredictorExecutions = (
  output: any,
  context: __SerdeContext
): Array<PredictorExecution> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PredictorExecution(entry, context)
  );
};

const deserializeAws_json1_1PredictorSummary = (
  output: any,
  context: __SerdeContext
): PredictorSummary => {
  let contents: any = {
    __type: "PredictorSummary",
    CreationTime: undefined,
    DatasetGroupArn: undefined,
    LastModificationTime: undefined,
    Message: undefined,
    PredictorArn: undefined,
    PredictorName: undefined,
    Status: undefined
  };
  if (output.CreationTime !== undefined) {
    contents.CreationTime = new Date(
      output.CreationTime % 1 != 0
        ? Math.round(output.CreationTime * 1000)
        : output.CreationTime
    );
  }
  if (output.DatasetGroupArn !== undefined) {
    contents.DatasetGroupArn = output.DatasetGroupArn;
  }
  if (output.LastModificationTime !== undefined) {
    contents.LastModificationTime = new Date(
      output.LastModificationTime % 1 != 0
        ? Math.round(output.LastModificationTime * 1000)
        : output.LastModificationTime
    );
  }
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.PredictorArn !== undefined) {
    contents.PredictorArn = output.PredictorArn;
  }
  if (output.PredictorName !== undefined) {
    contents.PredictorName = output.PredictorName;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_json1_1Predictors = (
  output: any,
  context: __SerdeContext
): Array<PredictorSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PredictorSummary(entry, context)
  );
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  let contents: any = {
    __type: "ResourceAlreadyExistsException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceInUseException = (
  output: any,
  context: __SerdeContext
): ResourceInUseException => {
  let contents: any = {
    __type: "ResourceInUseException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1S3Config = (
  output: any,
  context: __SerdeContext
): S3Config => {
  let contents: any = {
    __type: "S3Config",
    KMSKeyArn: undefined,
    Path: undefined,
    RoleArn: undefined
  };
  if (output.KMSKeyArn !== undefined) {
    contents.KMSKeyArn = output.KMSKeyArn;
  }
  if (output.Path !== undefined) {
    contents.Path = output.Path;
  }
  if (output.RoleArn !== undefined) {
    contents.RoleArn = output.RoleArn;
  }
  return contents;
};

const deserializeAws_json1_1Schema = (
  output: any,
  context: __SerdeContext
): Schema => {
  let contents: any = {
    __type: "Schema",
    Attributes: undefined
  };
  if (output.Attributes !== undefined) {
    contents.Attributes = deserializeAws_json1_1SchemaAttributes(
      output.Attributes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1SchemaAttribute = (
  output: any,
  context: __SerdeContext
): SchemaAttribute => {
  let contents: any = {
    __type: "SchemaAttribute",
    AttributeName: undefined,
    AttributeType: undefined
  };
  if (output.AttributeName !== undefined) {
    contents.AttributeName = output.AttributeName;
  }
  if (output.AttributeType !== undefined) {
    contents.AttributeType = output.AttributeType;
  }
  return contents;
};

const deserializeAws_json1_1SchemaAttributes = (
  output: any,
  context: __SerdeContext
): Array<SchemaAttribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SchemaAttribute(entry, context)
  );
};

const deserializeAws_json1_1Statistics = (
  output: any,
  context: __SerdeContext
): Statistics => {
  let contents: any = {
    __type: "Statistics",
    Avg: undefined,
    Count: undefined,
    CountDistinct: undefined,
    CountNan: undefined,
    CountNull: undefined,
    Max: undefined,
    Min: undefined,
    Stddev: undefined
  };
  if (output.Avg !== undefined) {
    contents.Avg = output.Avg;
  }
  if (output.Count !== undefined) {
    contents.Count = output.Count;
  }
  if (output.CountDistinct !== undefined) {
    contents.CountDistinct = output.CountDistinct;
  }
  if (output.CountNan !== undefined) {
    contents.CountNan = output.CountNan;
  }
  if (output.CountNull !== undefined) {
    contents.CountNull = output.CountNull;
  }
  if (output.Max !== undefined) {
    contents.Max = output.Max;
  }
  if (output.Min !== undefined) {
    contents.Min = output.Min;
  }
  if (output.Stddev !== undefined) {
    contents.Stddev = output.Stddev;
  }
  return contents;
};

const deserializeAws_json1_1SupplementaryFeature = (
  output: any,
  context: __SerdeContext
): SupplementaryFeature => {
  let contents: any = {
    __type: "SupplementaryFeature",
    Name: undefined,
    Value: undefined
  };
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1SupplementaryFeatures = (
  output: any,
  context: __SerdeContext
): Array<SupplementaryFeature> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SupplementaryFeature(entry, context)
  );
};

const deserializeAws_json1_1TestWindowDetails = (
  output: any,
  context: __SerdeContext
): Array<TestWindowSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TestWindowSummary(entry, context)
  );
};

const deserializeAws_json1_1TestWindowSummary = (
  output: any,
  context: __SerdeContext
): TestWindowSummary => {
  let contents: any = {
    __type: "TestWindowSummary",
    Message: undefined,
    Status: undefined,
    TestWindowEnd: undefined,
    TestWindowStart: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  if (output.Status !== undefined) {
    contents.Status = output.Status;
  }
  if (output.TestWindowEnd !== undefined) {
    contents.TestWindowEnd = new Date(
      output.TestWindowEnd % 1 != 0
        ? Math.round(output.TestWindowEnd * 1000)
        : output.TestWindowEnd
    );
  }
  if (output.TestWindowStart !== undefined) {
    contents.TestWindowStart = new Date(
      output.TestWindowStart % 1 != 0
        ? Math.round(output.TestWindowStart * 1000)
        : output.TestWindowStart
    );
  }
  return contents;
};

const deserializeAws_json1_1TestWindows = (
  output: any,
  context: __SerdeContext
): Array<WindowSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WindowSummary(entry, context)
  );
};

const deserializeAws_json1_1TrainingParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1UpdateDatasetGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateDatasetGroupResponse => {
  let contents: any = {
    __type: "UpdateDatasetGroupResponse"
  };
  return contents;
};

const deserializeAws_json1_1Values = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1WeightedQuantileLoss = (
  output: any,
  context: __SerdeContext
): WeightedQuantileLoss => {
  let contents: any = {
    __type: "WeightedQuantileLoss",
    LossValue: undefined,
    Quantile: undefined
  };
  if (output.LossValue !== undefined) {
    contents.LossValue = output.LossValue;
  }
  if (output.Quantile !== undefined) {
    contents.Quantile = output.Quantile;
  }
  return contents;
};

const deserializeAws_json1_1WeightedQuantileLosses = (
  output: any,
  context: __SerdeContext
): Array<WeightedQuantileLoss> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WeightedQuantileLoss(entry, context)
  );
};

const deserializeAws_json1_1WindowSummary = (
  output: any,
  context: __SerdeContext
): WindowSummary => {
  let contents: any = {
    __type: "WindowSummary",
    EvaluationType: undefined,
    ItemCount: undefined,
    Metrics: undefined,
    TestWindowEnd: undefined,
    TestWindowStart: undefined
  };
  if (output.EvaluationType !== undefined) {
    contents.EvaluationType = output.EvaluationType;
  }
  if (output.ItemCount !== undefined) {
    contents.ItemCount = output.ItemCount;
  }
  if (output.Metrics !== undefined) {
    contents.Metrics = deserializeAws_json1_1Metrics(output.Metrics, context);
  }
  if (output.TestWindowEnd !== undefined) {
    contents.TestWindowEnd = new Date(
      output.TestWindowEnd % 1 != 0
        ? Math.round(output.TestWindowEnd * 1000)
        : output.TestWindowEnd
    );
  }
  if (output.TestWindowStart !== undefined) {
    contents.TestWindowStart = new Date(
      output.TestWindowStart % 1 != 0
        ? Math.round(output.TestWindowStart * 1000)
        : output.TestWindowStart
    );
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
