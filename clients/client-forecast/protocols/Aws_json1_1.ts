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
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateDatasetCommand(
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.CreateDataset";
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
  headers["X-Amz-Target"] = "AmazonForecast.CreateDatasetGroup";
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
  headers["X-Amz-Target"] = "AmazonForecast.CreateDatasetImportJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDatasetImportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateForecastCommand(
  input: CreateForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.CreateForecast";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateForecastRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateForecastExportJobCommand(
  input: CreateForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.CreateForecastExportJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateForecastExportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreatePredictorCommand(
  input: CreatePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.CreatePredictor";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreatePredictorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteDatasetCommand(
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DeleteDataset";
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
  headers["X-Amz-Target"] = "AmazonForecast.DeleteDatasetGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDatasetGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteDatasetImportJobCommand(
  input: DeleteDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DeleteDatasetImportJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDatasetImportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteForecastCommand(
  input: DeleteForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DeleteForecast";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteForecastRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteForecastExportJobCommand(
  input: DeleteForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DeleteForecastExportJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteForecastExportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeletePredictorCommand(
  input: DeletePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DeletePredictor";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeletePredictorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeDatasetCommand(
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DescribeDataset";
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
  headers["X-Amz-Target"] = "AmazonForecast.DescribeDatasetGroup";
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
  headers["X-Amz-Target"] = "AmazonForecast.DescribeDatasetImportJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDatasetImportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeForecastCommand(
  input: DescribeForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DescribeForecast";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeForecastRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeForecastExportJobCommand(
  input: DescribeForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DescribeForecastExportJob";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeForecastExportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribePredictorCommand(
  input: DescribePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.DescribePredictor";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribePredictorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetAccuracyMetricsCommand(
  input: GetAccuracyMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.GetAccuracyMetrics";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetAccuracyMetricsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDatasetGroupsCommand(
  input: ListDatasetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.ListDatasetGroups";
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
  headers["X-Amz-Target"] = "AmazonForecast.ListDatasetImportJobs";
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
  headers["X-Amz-Target"] = "AmazonForecast.ListDatasets";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDatasetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListForecastExportJobsCommand(
  input: ListForecastExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.ListForecastExportJobs";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListForecastExportJobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListForecastsCommand(
  input: ListForecastsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.ListForecasts";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListForecastsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListPredictorsCommand(
  input: ListPredictorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.ListPredictors";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListPredictorsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateDatasetGroupCommand(
  input: UpdateDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AmazonForecast.UpdateDatasetGroup";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDatasetGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.seer.service#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.seer.service#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.seer.service#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export async function deserializeAws_json1_1CreateForecastCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateForecastResponse(data, context);
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.seer.service#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    data,
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.seer.service#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export async function deserializeAws_json1_1CreatePredictorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePredictorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreatePredictorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePredictorResponse(data, context);
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.seer.service#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
  await collectBody(output.body, context);
  const response: DeleteDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDatasetImportJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetImportJobCommandOutput> {
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export async function deserializeAws_json1_1DeleteForecastCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteForecastCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteForecastCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteForecastCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastCommandOutput> {
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
  await collectBody(output.body, context);
  const response: DeleteForecastExportJobCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteForecastExportJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastExportJobCommandOutput> {
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export async function deserializeAws_json1_1DeletePredictorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredictorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePredictorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePredictorCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeletePredictorCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredictorCommandOutput> {
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export async function deserializeAws_json1_1DescribeForecastCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeForecastResponse(data, context);
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    data,
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export async function deserializeAws_json1_1DescribePredictorCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePredictorCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribePredictorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePredictorResponse(data, context);
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
  contents = deserializeAws_json1_1GetAccuracyMetricsResponse(data, context);
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    case "com.amazonaws.seer.service#InvalidNextTokenException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.seer.service#InvalidNextTokenException":
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
    case "InvalidNextTokenException":
    case "com.amazonaws.seer.service#InvalidNextTokenException":
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
    data,
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.seer.service#InvalidNextTokenException":
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

export async function deserializeAws_json1_1ListForecastsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListForecastsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListForecastsResponse(data, context);
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.seer.service#InvalidNextTokenException":
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

export async function deserializeAws_json1_1ListPredictorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPredictorsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPredictorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPredictorsResponse(data, context);
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.seer.service#InvalidNextTokenException":
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
  contents = deserializeAws_json1_1UpdateDatasetGroupResponse(data, context);
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
    case "com.amazonaws.seer.service#InvalidInputException":
      response = {
        ...(await deserializeAws_json1_1InvalidInputExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.seer.service#ResourceInUseException":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

const serializeAws_json1_1CategoricalParameterRange = (
  input: CategoricalParameterRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_json1_1CategoricalParameterRange(entry, context)
    );
  }
  return contents;
};

const serializeAws_json1_1ContinuousParameterRange = (
  input: ContinuousParameterRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ContinuousParameterRange(entry, context));
  }
  return contents;
};

const serializeAws_json1_1CreateDatasetGroupRequest = (
  input: CreateDatasetGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
  if (input.DatasetGroupArn !== undefined) {
    bodyParams["DatasetGroupArn"] = input.DatasetGroupArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDatasetImportJobRequest = (
  input: DeleteDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DatasetImportJobArn !== undefined) {
    bodyParams["DatasetImportJobArn"] = input.DatasetImportJobArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDatasetRequest = (
  input: DeleteDatasetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DatasetArn !== undefined) {
    bodyParams["DatasetArn"] = input.DatasetArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteForecastExportJobRequest = (
  input: DeleteForecastExportJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ForecastExportJobArn !== undefined) {
    bodyParams["ForecastExportJobArn"] = input.ForecastExportJobArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteForecastRequest = (
  input: DeleteForecastRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ForecastArn !== undefined) {
    bodyParams["ForecastArn"] = input.ForecastArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeletePredictorRequest = (
  input: DeletePredictorRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PredictorArn !== undefined) {
    bodyParams["PredictorArn"] = input.PredictorArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDatasetGroupRequest = (
  input: DescribeDatasetGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DatasetGroupArn !== undefined) {
    bodyParams["DatasetGroupArn"] = input.DatasetGroupArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDatasetImportJobRequest = (
  input: DescribeDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DatasetImportJobArn !== undefined) {
    bodyParams["DatasetImportJobArn"] = input.DatasetImportJobArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDatasetRequest = (
  input: DescribeDatasetRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DatasetArn !== undefined) {
    bodyParams["DatasetArn"] = input.DatasetArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeForecastExportJobRequest = (
  input: DescribeForecastExportJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ForecastExportJobArn !== undefined) {
    bodyParams["ForecastExportJobArn"] = input.ForecastExportJobArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeForecastRequest = (
  input: DescribeForecastRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ForecastArn !== undefined) {
    bodyParams["ForecastArn"] = input.ForecastArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribePredictorRequest = (
  input: DescribePredictorRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PredictorArn !== undefined) {
    bodyParams["PredictorArn"] = input.PredictorArn;
  }
  return bodyParams;
};

const serializeAws_json1_1EncryptionConfig = (
  input: EncryptionConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1FeaturizationPipeline = (
  input: Array<FeaturizationMethod>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1FeaturizationMethod(entry, context));
  }
  return contents;
};

const serializeAws_json1_1Featurizations = (
  input: Array<Featurization>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Featurization(entry, context));
  }
  return contents;
};

const serializeAws_json1_1Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Filter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ForecastDimensions = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ForecastTypes = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1GetAccuracyMetricsRequest = (
  input: GetAccuracyMetricsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.PredictorArn !== undefined) {
    bodyParams["PredictorArn"] = input.PredictorArn;
  }
  return bodyParams;
};

const serializeAws_json1_1HyperParameterTuningJobConfig = (
  input: HyperParameterTuningJobConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1IntegerParameterRange(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ListDatasetGroupsRequest = (
  input: ListDatasetGroupsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1SchemaAttribute(entry, context));
  }
  return contents;
};

const serializeAws_json1_1SupplementaryFeature = (
  input: SupplementaryFeature,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1SupplementaryFeature(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TrainingParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1UpdateDatasetGroupRequest = (
  input: UpdateDatasetGroupRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
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
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Values !== undefined && output.Values !== null) {
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
  if (output.MaxValue !== undefined && output.MaxValue !== null) {
    contents.MaxValue = output.MaxValue;
  }
  if (output.MinValue !== undefined && output.MinValue !== null) {
    contents.MinValue = output.MinValue;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.ScalingType !== undefined && output.ScalingType !== null) {
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
  if (output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null) {
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
  if (
    output.DatasetImportJobArn !== undefined &&
    output.DatasetImportJobArn !== null
  ) {
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
  if (output.DatasetArn !== undefined && output.DatasetArn !== null) {
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
  if (
    output.ForecastExportJobArn !== undefined &&
    output.ForecastExportJobArn !== null
  ) {
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
  if (output.ForecastArn !== undefined && output.ForecastArn !== null) {
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
  if (output.PredictorArn !== undefined && output.PredictorArn !== null) {
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
  if (output.S3Config !== undefined && output.S3Config !== null) {
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
  if (output.S3Config !== undefined && output.S3Config !== null) {
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
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null) {
    contents.DatasetGroupArn = output.DatasetGroupArn;
  }
  if (
    output.DatasetGroupName !== undefined &&
    output.DatasetGroupName !== null
  ) {
    contents.DatasetGroupName = output.DatasetGroupName;
  }
  if (
    output.LastModificationTime !== undefined &&
    output.LastModificationTime !== null
  ) {
    contents.LastModificationTime = new Date(
      Math.round(output.LastModificationTime * 1000)
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
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.DataSource !== undefined && output.DataSource !== null) {
    contents.DataSource = deserializeAws_json1_1DataSource(
      output.DataSource,
      context
    );
  }
  if (
    output.DatasetImportJobArn !== undefined &&
    output.DatasetImportJobArn !== null
  ) {
    contents.DatasetImportJobArn = output.DatasetImportJobArn;
  }
  if (
    output.DatasetImportJobName !== undefined &&
    output.DatasetImportJobName !== null
  ) {
    contents.DatasetImportJobName = output.DatasetImportJobName;
  }
  if (
    output.LastModificationTime !== undefined &&
    output.LastModificationTime !== null
  ) {
    contents.LastModificationTime = new Date(
      Math.round(output.LastModificationTime * 1000)
    );
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.Status !== undefined && output.Status !== null) {
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
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.DatasetArn !== undefined && output.DatasetArn !== null) {
    contents.DatasetArn = output.DatasetArn;
  }
  if (output.DatasetName !== undefined && output.DatasetName !== null) {
    contents.DatasetName = output.DatasetName;
  }
  if (output.DatasetType !== undefined && output.DatasetType !== null) {
    contents.DatasetType = output.DatasetType;
  }
  if (output.Domain !== undefined && output.Domain !== null) {
    contents.Domain = output.Domain;
  }
  if (
    output.LastModificationTime !== undefined &&
    output.LastModificationTime !== null
  ) {
    contents.LastModificationTime = new Date(
      Math.round(output.LastModificationTime * 1000)
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
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.DatasetArns !== undefined && output.DatasetArns !== null) {
    contents.DatasetArns = deserializeAws_json1_1ArnList(
      output.DatasetArns,
      context
    );
  }
  if (output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null) {
    contents.DatasetGroupArn = output.DatasetGroupArn;
  }
  if (
    output.DatasetGroupName !== undefined &&
    output.DatasetGroupName !== null
  ) {
    contents.DatasetGroupName = output.DatasetGroupName;
  }
  if (output.Domain !== undefined && output.Domain !== null) {
    contents.Domain = output.Domain;
  }
  if (
    output.LastModificationTime !== undefined &&
    output.LastModificationTime !== null
  ) {
    contents.LastModificationTime = new Date(
      Math.round(output.LastModificationTime * 1000)
    );
  }
  if (output.Status !== undefined && output.Status !== null) {
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
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.DataSize !== undefined && output.DataSize !== null) {
    contents.DataSize = output.DataSize;
  }
  if (output.DataSource !== undefined && output.DataSource !== null) {
    contents.DataSource = deserializeAws_json1_1DataSource(
      output.DataSource,
      context
    );
  }
  if (output.DatasetArn !== undefined && output.DatasetArn !== null) {
    contents.DatasetArn = output.DatasetArn;
  }
  if (
    output.DatasetImportJobArn !== undefined &&
    output.DatasetImportJobArn !== null
  ) {
    contents.DatasetImportJobArn = output.DatasetImportJobArn;
  }
  if (
    output.DatasetImportJobName !== undefined &&
    output.DatasetImportJobName !== null
  ) {
    contents.DatasetImportJobName = output.DatasetImportJobName;
  }
  if (output.FieldStatistics !== undefined && output.FieldStatistics !== null) {
    contents.FieldStatistics = deserializeAws_json1_1FieldStatistics(
      output.FieldStatistics,
      context
    );
  }
  if (
    output.LastModificationTime !== undefined &&
    output.LastModificationTime !== null
  ) {
    contents.LastModificationTime = new Date(
      Math.round(output.LastModificationTime * 1000)
    );
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.TimestampFormat !== undefined && output.TimestampFormat !== null) {
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
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.DataFrequency !== undefined && output.DataFrequency !== null) {
    contents.DataFrequency = output.DataFrequency;
  }
  if (output.DatasetArn !== undefined && output.DatasetArn !== null) {
    contents.DatasetArn = output.DatasetArn;
  }
  if (output.DatasetName !== undefined && output.DatasetName !== null) {
    contents.DatasetName = output.DatasetName;
  }
  if (output.DatasetType !== undefined && output.DatasetType !== null) {
    contents.DatasetType = output.DatasetType;
  }
  if (output.Domain !== undefined && output.Domain !== null) {
    contents.Domain = output.Domain;
  }
  if (
    output.EncryptionConfig !== undefined &&
    output.EncryptionConfig !== null
  ) {
    contents.EncryptionConfig = deserializeAws_json1_1EncryptionConfig(
      output.EncryptionConfig,
      context
    );
  }
  if (
    output.LastModificationTime !== undefined &&
    output.LastModificationTime !== null
  ) {
    contents.LastModificationTime = new Date(
      Math.round(output.LastModificationTime * 1000)
    );
  }
  if (output.Schema !== undefined && output.Schema !== null) {
    contents.Schema = deserializeAws_json1_1Schema(output.Schema, context);
  }
  if (output.Status !== undefined && output.Status !== null) {
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
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.Destination !== undefined && output.Destination !== null) {
    contents.Destination = deserializeAws_json1_1DataDestination(
      output.Destination,
      context
    );
  }
  if (output.ForecastArn !== undefined && output.ForecastArn !== null) {
    contents.ForecastArn = output.ForecastArn;
  }
  if (
    output.ForecastExportJobArn !== undefined &&
    output.ForecastExportJobArn !== null
  ) {
    contents.ForecastExportJobArn = output.ForecastExportJobArn;
  }
  if (
    output.ForecastExportJobName !== undefined &&
    output.ForecastExportJobName !== null
  ) {
    contents.ForecastExportJobName = output.ForecastExportJobName;
  }
  if (
    output.LastModificationTime !== undefined &&
    output.LastModificationTime !== null
  ) {
    contents.LastModificationTime = new Date(
      Math.round(output.LastModificationTime * 1000)
    );
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.Status !== undefined && output.Status !== null) {
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
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null) {
    contents.DatasetGroupArn = output.DatasetGroupArn;
  }
  if (output.ForecastArn !== undefined && output.ForecastArn !== null) {
    contents.ForecastArn = output.ForecastArn;
  }
  if (output.ForecastName !== undefined && output.ForecastName !== null) {
    contents.ForecastName = output.ForecastName;
  }
  if (output.ForecastTypes !== undefined && output.ForecastTypes !== null) {
    contents.ForecastTypes = deserializeAws_json1_1ForecastTypes(
      output.ForecastTypes,
      context
    );
  }
  if (
    output.LastModificationTime !== undefined &&
    output.LastModificationTime !== null
  ) {
    contents.LastModificationTime = new Date(
      Math.round(output.LastModificationTime * 1000)
    );
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.PredictorArn !== undefined && output.PredictorArn !== null) {
    contents.PredictorArn = output.PredictorArn;
  }
  if (output.Status !== undefined && output.Status !== null) {
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
  if (output.AlgorithmArn !== undefined && output.AlgorithmArn !== null) {
    contents.AlgorithmArn = output.AlgorithmArn;
  }
  if (
    output.AutoMLAlgorithmArns !== undefined &&
    output.AutoMLAlgorithmArns !== null
  ) {
    contents.AutoMLAlgorithmArns = deserializeAws_json1_1ArnList(
      output.AutoMLAlgorithmArns,
      context
    );
  }
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (
    output.DatasetImportJobArns !== undefined &&
    output.DatasetImportJobArns !== null
  ) {
    contents.DatasetImportJobArns = deserializeAws_json1_1ArnList(
      output.DatasetImportJobArns,
      context
    );
  }
  if (
    output.EncryptionConfig !== undefined &&
    output.EncryptionConfig !== null
  ) {
    contents.EncryptionConfig = deserializeAws_json1_1EncryptionConfig(
      output.EncryptionConfig,
      context
    );
  }
  if (
    output.EvaluationParameters !== undefined &&
    output.EvaluationParameters !== null
  ) {
    contents.EvaluationParameters = deserializeAws_json1_1EvaluationParameters(
      output.EvaluationParameters,
      context
    );
  }
  if (
    output.FeaturizationConfig !== undefined &&
    output.FeaturizationConfig !== null
  ) {
    contents.FeaturizationConfig = deserializeAws_json1_1FeaturizationConfig(
      output.FeaturizationConfig,
      context
    );
  }
  if (output.ForecastHorizon !== undefined && output.ForecastHorizon !== null) {
    contents.ForecastHorizon = output.ForecastHorizon;
  }
  if (output.HPOConfig !== undefined && output.HPOConfig !== null) {
    contents.HPOConfig = deserializeAws_json1_1HyperParameterTuningJobConfig(
      output.HPOConfig,
      context
    );
  }
  if (output.InputDataConfig !== undefined && output.InputDataConfig !== null) {
    contents.InputDataConfig = deserializeAws_json1_1InputDataConfig(
      output.InputDataConfig,
      context
    );
  }
  if (
    output.LastModificationTime !== undefined &&
    output.LastModificationTime !== null
  ) {
    contents.LastModificationTime = new Date(
      Math.round(output.LastModificationTime * 1000)
    );
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.PerformAutoML !== undefined && output.PerformAutoML !== null) {
    contents.PerformAutoML = output.PerformAutoML;
  }
  if (output.PerformHPO !== undefined && output.PerformHPO !== null) {
    contents.PerformHPO = output.PerformHPO;
  }
  if (output.PredictorArn !== undefined && output.PredictorArn !== null) {
    contents.PredictorArn = output.PredictorArn;
  }
  if (
    output.PredictorExecutionDetails !== undefined &&
    output.PredictorExecutionDetails !== null
  ) {
    contents.PredictorExecutionDetails = deserializeAws_json1_1PredictorExecutionDetails(
      output.PredictorExecutionDetails,
      context
    );
  }
  if (output.PredictorName !== undefined && output.PredictorName !== null) {
    contents.PredictorName = output.PredictorName;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (
    output.TrainingParameters !== undefined &&
    output.TrainingParameters !== null
  ) {
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
  if (output.KMSKeyArn !== undefined && output.KMSKeyArn !== null) {
    contents.KMSKeyArn = output.KMSKeyArn;
  }
  if (output.RoleArn !== undefined && output.RoleArn !== null) {
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
  if (
    output.BackTestWindowOffset !== undefined &&
    output.BackTestWindowOffset !== null
  ) {
    contents.BackTestWindowOffset = output.BackTestWindowOffset;
  }
  if (
    output.NumberOfBacktestWindows !== undefined &&
    output.NumberOfBacktestWindows !== null
  ) {
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
  if (output.AlgorithmArn !== undefined && output.AlgorithmArn !== null) {
    contents.AlgorithmArn = output.AlgorithmArn;
  }
  if (output.TestWindows !== undefined && output.TestWindows !== null) {
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
  if (output.AttributeName !== undefined && output.AttributeName !== null) {
    contents.AttributeName = output.AttributeName;
  }
  if (
    output.FeaturizationPipeline !== undefined &&
    output.FeaturizationPipeline !== null
  ) {
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
  if (output.Featurizations !== undefined && output.Featurizations !== null) {
    contents.Featurizations = deserializeAws_json1_1Featurizations(
      output.Featurizations,
      context
    );
  }
  if (
    output.ForecastDimensions !== undefined &&
    output.ForecastDimensions !== null
  ) {
    contents.ForecastDimensions = deserializeAws_json1_1ForecastDimensions(
      output.ForecastDimensions,
      context
    );
  }
  if (
    output.ForecastFrequency !== undefined &&
    output.ForecastFrequency !== null
  ) {
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
  if (
    output.FeaturizationMethodName !== undefined &&
    output.FeaturizationMethodName !== null
  ) {
    contents.FeaturizationMethodName = output.FeaturizationMethodName;
  }
  if (
    output.FeaturizationMethodParameters !== undefined &&
    output.FeaturizationMethodParameters !== null
  ) {
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
  const mapParams: any = {};
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
  const mapParams: any = {};
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
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.Destination !== undefined && output.Destination !== null) {
    contents.Destination = deserializeAws_json1_1DataDestination(
      output.Destination,
      context
    );
  }
  if (
    output.ForecastExportJobArn !== undefined &&
    output.ForecastExportJobArn !== null
  ) {
    contents.ForecastExportJobArn = output.ForecastExportJobArn;
  }
  if (
    output.ForecastExportJobName !== undefined &&
    output.ForecastExportJobName !== null
  ) {
    contents.ForecastExportJobName = output.ForecastExportJobName;
  }
  if (
    output.LastModificationTime !== undefined &&
    output.LastModificationTime !== null
  ) {
    contents.LastModificationTime = new Date(
      Math.round(output.LastModificationTime * 1000)
    );
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.Status !== undefined && output.Status !== null) {
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
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null) {
    contents.DatasetGroupArn = output.DatasetGroupArn;
  }
  if (output.ForecastArn !== undefined && output.ForecastArn !== null) {
    contents.ForecastArn = output.ForecastArn;
  }
  if (output.ForecastName !== undefined && output.ForecastName !== null) {
    contents.ForecastName = output.ForecastName;
  }
  if (
    output.LastModificationTime !== undefined &&
    output.LastModificationTime !== null
  ) {
    contents.LastModificationTime = new Date(
      Math.round(output.LastModificationTime * 1000)
    );
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.PredictorArn !== undefined && output.PredictorArn !== null) {
    contents.PredictorArn = output.PredictorArn;
  }
  if (output.Status !== undefined && output.Status !== null) {
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
  if (
    output.PredictorEvaluationResults !== undefined &&
    output.PredictorEvaluationResults !== null
  ) {
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
  if (output.ParameterRanges !== undefined && output.ParameterRanges !== null) {
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
  if (output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null) {
    contents.DatasetGroupArn = output.DatasetGroupArn;
  }
  if (
    output.SupplementaryFeatures !== undefined &&
    output.SupplementaryFeatures !== null
  ) {
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
  if (output.MaxValue !== undefined && output.MaxValue !== null) {
    contents.MaxValue = output.MaxValue;
  }
  if (output.MinValue !== undefined && output.MinValue !== null) {
    contents.MinValue = output.MinValue;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.ScalingType !== undefined && output.ScalingType !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.DatasetGroups !== undefined && output.DatasetGroups !== null) {
    contents.DatasetGroups = deserializeAws_json1_1DatasetGroups(
      output.DatasetGroups,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
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
  if (
    output.DatasetImportJobs !== undefined &&
    output.DatasetImportJobs !== null
  ) {
    contents.DatasetImportJobs = deserializeAws_json1_1DatasetImportJobs(
      output.DatasetImportJobs,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
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
  if (output.Datasets !== undefined && output.Datasets !== null) {
    contents.Datasets = deserializeAws_json1_1Datasets(
      output.Datasets,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
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
  if (
    output.ForecastExportJobs !== undefined &&
    output.ForecastExportJobs !== null
  ) {
    contents.ForecastExportJobs = deserializeAws_json1_1ForecastExportJobs(
      output.ForecastExportJobs,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
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
  if (output.Forecasts !== undefined && output.Forecasts !== null) {
    contents.Forecasts = deserializeAws_json1_1Forecasts(
      output.Forecasts,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
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
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Predictors !== undefined && output.Predictors !== null) {
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
  if (output.RMSE !== undefined && output.RMSE !== null) {
    contents.RMSE = output.RMSE;
  }
  if (
    output.WeightedQuantileLosses !== undefined &&
    output.WeightedQuantileLosses !== null
  ) {
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
  if (
    output.CategoricalParameterRanges !== undefined &&
    output.CategoricalParameterRanges !== null
  ) {
    contents.CategoricalParameterRanges = deserializeAws_json1_1CategoricalParameterRanges(
      output.CategoricalParameterRanges,
      context
    );
  }
  if (
    output.ContinuousParameterRanges !== undefined &&
    output.ContinuousParameterRanges !== null
  ) {
    contents.ContinuousParameterRanges = deserializeAws_json1_1ContinuousParameterRanges(
      output.ContinuousParameterRanges,
      context
    );
  }
  if (
    output.IntegerParameterRanges !== undefined &&
    output.IntegerParameterRanges !== null
  ) {
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
  if (output.AlgorithmArn !== undefined && output.AlgorithmArn !== null) {
    contents.AlgorithmArn = output.AlgorithmArn;
  }
  if (output.TestWindows !== undefined && output.TestWindows !== null) {
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
  if (
    output.PredictorExecutions !== undefined &&
    output.PredictorExecutions !== null
  ) {
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
  if (output.CreationTime !== undefined && output.CreationTime !== null) {
    contents.CreationTime = new Date(Math.round(output.CreationTime * 1000));
  }
  if (output.DatasetGroupArn !== undefined && output.DatasetGroupArn !== null) {
    contents.DatasetGroupArn = output.DatasetGroupArn;
  }
  if (
    output.LastModificationTime !== undefined &&
    output.LastModificationTime !== null
  ) {
    contents.LastModificationTime = new Date(
      Math.round(output.LastModificationTime * 1000)
    );
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.PredictorArn !== undefined && output.PredictorArn !== null) {
    contents.PredictorArn = output.PredictorArn;
  }
  if (output.PredictorName !== undefined && output.PredictorName !== null) {
    contents.PredictorName = output.PredictorName;
  }
  if (output.Status !== undefined && output.Status !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.KMSKeyArn !== undefined && output.KMSKeyArn !== null) {
    contents.KMSKeyArn = output.KMSKeyArn;
  }
  if (output.Path !== undefined && output.Path !== null) {
    contents.Path = output.Path;
  }
  if (output.RoleArn !== undefined && output.RoleArn !== null) {
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
  if (output.Attributes !== undefined && output.Attributes !== null) {
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
  if (output.AttributeName !== undefined && output.AttributeName !== null) {
    contents.AttributeName = output.AttributeName;
  }
  if (output.AttributeType !== undefined && output.AttributeType !== null) {
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
  if (output.Avg !== undefined && output.Avg !== null) {
    contents.Avg = output.Avg;
  }
  if (output.Count !== undefined && output.Count !== null) {
    contents.Count = output.Count;
  }
  if (output.CountDistinct !== undefined && output.CountDistinct !== null) {
    contents.CountDistinct = output.CountDistinct;
  }
  if (output.CountNan !== undefined && output.CountNan !== null) {
    contents.CountNan = output.CountNan;
  }
  if (output.CountNull !== undefined && output.CountNull !== null) {
    contents.CountNull = output.CountNull;
  }
  if (output.Max !== undefined && output.Max !== null) {
    contents.Max = output.Max;
  }
  if (output.Min !== undefined && output.Min !== null) {
    contents.Min = output.Min;
  }
  if (output.Stddev !== undefined && output.Stddev !== null) {
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
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Value !== undefined && output.Value !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.TestWindowEnd !== undefined && output.TestWindowEnd !== null) {
    contents.TestWindowEnd = new Date(Math.round(output.TestWindowEnd * 1000));
  }
  if (output.TestWindowStart !== undefined && output.TestWindowStart !== null) {
    contents.TestWindowStart = new Date(
      Math.round(output.TestWindowStart * 1000)
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
  const mapParams: any = {};
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
  if (output.LossValue !== undefined && output.LossValue !== null) {
    contents.LossValue = output.LossValue;
  }
  if (output.Quantile !== undefined && output.Quantile !== null) {
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
  if (output.EvaluationType !== undefined && output.EvaluationType !== null) {
    contents.EvaluationType = output.EvaluationType;
  }
  if (output.ItemCount !== undefined && output.ItemCount !== null) {
    contents.ItemCount = output.ItemCount;
  }
  if (output.Metrics !== undefined && output.Metrics !== null) {
    contents.Metrics = deserializeAws_json1_1Metrics(output.Metrics, context);
  }
  if (output.TestWindowEnd !== undefined && output.TestWindowEnd !== null) {
    contents.TestWindowEnd = new Date(Math.round(output.TestWindowEnd * 1000));
  }
  if (output.TestWindowStart !== undefined && output.TestWindowStart !== null) {
    contents.TestWindowStart = new Date(
      Math.round(output.TestWindowStart * 1000)
    );
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
