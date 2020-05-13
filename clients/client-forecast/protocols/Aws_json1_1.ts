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

export const serializeAws_json1_1CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.CreateDataset"
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
    "X-Amz-Target": "AmazonForecast.CreateDatasetGroup"
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
    "X-Amz-Target": "AmazonForecast.CreateDatasetImportJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDatasetImportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateForecastCommand = async (
  input: CreateForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.CreateForecast"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateForecastRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateForecastExportJobCommand = async (
  input: CreateForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.CreateForecastExportJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateForecastExportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePredictorCommand = async (
  input: CreatePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.CreatePredictor"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreatePredictorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.DeleteDataset"
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
    "X-Amz-Target": "AmazonForecast.DeleteDatasetGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDatasetGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDatasetImportJobCommand = async (
  input: DeleteDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.DeleteDatasetImportJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDatasetImportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteForecastCommand = async (
  input: DeleteForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.DeleteForecast"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteForecastRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteForecastExportJobCommand = async (
  input: DeleteForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.DeleteForecastExportJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteForecastExportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePredictorCommand = async (
  input: DeletePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.DeletePredictor"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeletePredictorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.DescribeDataset"
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
    "X-Amz-Target": "AmazonForecast.DescribeDatasetGroup"
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
    "X-Amz-Target": "AmazonForecast.DescribeDatasetImportJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDatasetImportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeForecastCommand = async (
  input: DescribeForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.DescribeForecast"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeForecastRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeForecastExportJobCommand = async (
  input: DescribeForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.DescribeForecastExportJob"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeForecastExportJobRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePredictorCommand = async (
  input: DescribePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.DescribePredictor"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribePredictorRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAccuracyMetricsCommand = async (
  input: GetAccuracyMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.GetAccuracyMetrics"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetAccuracyMetricsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatasetGroupsCommand = async (
  input: ListDatasetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.ListDatasetGroups"
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
    "X-Amz-Target": "AmazonForecast.ListDatasetImportJobs"
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
    "X-Amz-Target": "AmazonForecast.ListDatasets"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDatasetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListForecastExportJobsCommand = async (
  input: ListForecastExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.ListForecastExportJobs"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListForecastExportJobsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListForecastsCommand = async (
  input: ListForecastsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.ListForecasts"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListForecastsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPredictorsCommand = async (
  input: ListPredictorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.ListPredictors"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListPredictorsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDatasetGroupCommand = async (
  input: UpdateDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AmazonForecast.UpdateDatasetGroup"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDatasetGroupRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#LimitExceededException":
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
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#LimitExceededException":
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
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
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
    case "com.amazonaws.seer.service#ResourceInUseException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#LimitExceededException":
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
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
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
    case "com.amazonaws.seer.service#ResourceInUseException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export const deserializeAws_json1_1CreateForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastCommandOutput> => {
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
};

const deserializeAws_json1_1CreateForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#LimitExceededException":
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
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
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
    case "com.amazonaws.seer.service#ResourceInUseException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export const deserializeAws_json1_1CreateForecastExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastExportJobCommandOutput> => {
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
};

const deserializeAws_json1_1CreateForecastExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastExportJobCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#LimitExceededException":
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
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
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
    case "com.amazonaws.seer.service#ResourceInUseException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export const deserializeAws_json1_1CreatePredictorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePredictorCommandOutput> => {
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
};

const deserializeAws_json1_1CreatePredictorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePredictorCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#LimitExceededException":
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
    case "com.amazonaws.seer.service#ResourceAlreadyExistsException":
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
    case "com.amazonaws.seer.service#ResourceInUseException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#ResourceInUseException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#ResourceInUseException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeleteDatasetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetImportJobCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteDatasetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetImportJobCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#ResourceInUseException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeleteForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteForecastCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteForecastCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#ResourceInUseException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeleteForecastExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastExportJobCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteForecastExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastExportJobCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#ResourceInUseException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeletePredictorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredictorCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePredictorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePredictorCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePredictorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredictorCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#ResourceInUseException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribeForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribeForecastExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastExportJobCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeForecastExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastExportJobCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribePredictorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePredictorCommandOutput> => {
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
};

const deserializeAws_json1_1DescribePredictorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePredictorCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetAccuracyMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccuracyMetricsCommandOutput> => {
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
};

const deserializeAws_json1_1GetAccuracyMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccuracyMetricsCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#ResourceInUseException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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
    case "com.amazonaws.seer.service#InvalidNextTokenException":
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#InvalidNextTokenException":
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
    case "InvalidNextTokenException":
    case "com.amazonaws.seer.service#InvalidNextTokenException":
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

export const deserializeAws_json1_1ListForecastExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastExportJobsCommandOutput> => {
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
};

const deserializeAws_json1_1ListForecastExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastExportJobsCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#InvalidNextTokenException":
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

export const deserializeAws_json1_1ListForecastsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastsCommandOutput> => {
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
};

const deserializeAws_json1_1ListForecastsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastsCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#InvalidNextTokenException":
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

export const deserializeAws_json1_1ListPredictorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPredictorsCommandOutput> => {
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
};

const deserializeAws_json1_1ListPredictorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPredictorsCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#InvalidNextTokenException":
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

export const deserializeAws_json1_1UpdateDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetGroupCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetGroupCommandOutput> => {
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
    case "com.amazonaws.seer.service#InvalidInputException":
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
    case "com.amazonaws.seer.service#ResourceInUseException":
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
    case "com.amazonaws.seer.service#ResourceNotFoundException":
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

const serializeAws_json1_1CategoricalParameterRange = (
  input: CategoricalParameterRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Values !== undefined && {
      Values: serializeAws_json1_1Values(input.Values, context)
    })
  };
};

const serializeAws_json1_1CategoricalParameterRanges = (
  input: CategoricalParameterRange[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1CategoricalParameterRange(entry, context)
  );
};

const serializeAws_json1_1ContinuousParameterRange = (
  input: ContinuousParameterRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxValue !== undefined && { MaxValue: input.MaxValue }),
    ...(input.MinValue !== undefined && { MinValue: input.MinValue }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ScalingType !== undefined && { ScalingType: input.ScalingType })
  };
};

const serializeAws_json1_1ContinuousParameterRanges = (
  input: ContinuousParameterRange[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ContinuousParameterRange(entry, context)
  );
};

const serializeAws_json1_1CreateDatasetGroupRequest = (
  input: CreateDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetArns !== undefined && {
      DatasetArns: serializeAws_json1_1ArnList(input.DatasetArns, context)
    }),
    ...(input.DatasetGroupName !== undefined && {
      DatasetGroupName: input.DatasetGroupName
    }),
    ...(input.Domain !== undefined && { Domain: input.Domain })
  };
};

const serializeAws_json1_1CreateDatasetImportJobRequest = (
  input: CreateDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSource !== undefined && {
      DataSource: serializeAws_json1_1DataSource(input.DataSource, context)
    }),
    ...(input.DatasetArn !== undefined && { DatasetArn: input.DatasetArn }),
    ...(input.DatasetImportJobName !== undefined && {
      DatasetImportJobName: input.DatasetImportJobName
    }),
    ...(input.TimestampFormat !== undefined && {
      TimestampFormat: input.TimestampFormat
    })
  };
};

const serializeAws_json1_1CreateDatasetRequest = (
  input: CreateDatasetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataFrequency !== undefined && {
      DataFrequency: input.DataFrequency
    }),
    ...(input.DatasetName !== undefined && { DatasetName: input.DatasetName }),
    ...(input.DatasetType !== undefined && { DatasetType: input.DatasetType }),
    ...(input.Domain !== undefined && { Domain: input.Domain }),
    ...(input.EncryptionConfig !== undefined && {
      EncryptionConfig: serializeAws_json1_1EncryptionConfig(
        input.EncryptionConfig,
        context
      )
    }),
    ...(input.Schema !== undefined && {
      Schema: serializeAws_json1_1Schema(input.Schema, context)
    })
  };
};

const serializeAws_json1_1CreateForecastExportJobRequest = (
  input: CreateForecastExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination !== undefined && {
      Destination: serializeAws_json1_1DataDestination(
        input.Destination,
        context
      )
    }),
    ...(input.ForecastArn !== undefined && { ForecastArn: input.ForecastArn }),
    ...(input.ForecastExportJobName !== undefined && {
      ForecastExportJobName: input.ForecastExportJobName
    })
  };
};

const serializeAws_json1_1CreateForecastRequest = (
  input: CreateForecastRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForecastName !== undefined && {
      ForecastName: input.ForecastName
    }),
    ...(input.ForecastTypes !== undefined && {
      ForecastTypes: serializeAws_json1_1ForecastTypes(
        input.ForecastTypes,
        context
      )
    }),
    ...(input.PredictorArn !== undefined && {
      PredictorArn: input.PredictorArn
    })
  };
};

const serializeAws_json1_1CreatePredictorRequest = (
  input: CreatePredictorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AlgorithmArn !== undefined && {
      AlgorithmArn: input.AlgorithmArn
    }),
    ...(input.EncryptionConfig !== undefined && {
      EncryptionConfig: serializeAws_json1_1EncryptionConfig(
        input.EncryptionConfig,
        context
      )
    }),
    ...(input.EvaluationParameters !== undefined && {
      EvaluationParameters: serializeAws_json1_1EvaluationParameters(
        input.EvaluationParameters,
        context
      )
    }),
    ...(input.FeaturizationConfig !== undefined && {
      FeaturizationConfig: serializeAws_json1_1FeaturizationConfig(
        input.FeaturizationConfig,
        context
      )
    }),
    ...(input.ForecastHorizon !== undefined && {
      ForecastHorizon: input.ForecastHorizon
    }),
    ...(input.HPOConfig !== undefined && {
      HPOConfig: serializeAws_json1_1HyperParameterTuningJobConfig(
        input.HPOConfig,
        context
      )
    }),
    ...(input.InputDataConfig !== undefined && {
      InputDataConfig: serializeAws_json1_1InputDataConfig(
        input.InputDataConfig,
        context
      )
    }),
    ...(input.PerformAutoML !== undefined && {
      PerformAutoML: input.PerformAutoML
    }),
    ...(input.PerformHPO !== undefined && { PerformHPO: input.PerformHPO }),
    ...(input.PredictorName !== undefined && {
      PredictorName: input.PredictorName
    }),
    ...(input.TrainingParameters !== undefined && {
      TrainingParameters: serializeAws_json1_1TrainingParameters(
        input.TrainingParameters,
        context
      )
    })
  };
};

const serializeAws_json1_1DataDestination = (
  input: DataDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Config !== undefined && {
      S3Config: serializeAws_json1_1S3Config(input.S3Config, context)
    })
  };
};

const serializeAws_json1_1DataSource = (
  input: DataSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Config !== undefined && {
      S3Config: serializeAws_json1_1S3Config(input.S3Config, context)
    })
  };
};

const serializeAws_json1_1DeleteDatasetGroupRequest = (
  input: DeleteDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetGroupArn !== undefined && {
      DatasetGroupArn: input.DatasetGroupArn
    })
  };
};

const serializeAws_json1_1DeleteDatasetImportJobRequest = (
  input: DeleteDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetImportJobArn !== undefined && {
      DatasetImportJobArn: input.DatasetImportJobArn
    })
  };
};

const serializeAws_json1_1DeleteDatasetRequest = (
  input: DeleteDatasetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetArn !== undefined && { DatasetArn: input.DatasetArn })
  };
};

const serializeAws_json1_1DeleteForecastExportJobRequest = (
  input: DeleteForecastExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForecastExportJobArn !== undefined && {
      ForecastExportJobArn: input.ForecastExportJobArn
    })
  };
};

const serializeAws_json1_1DeleteForecastRequest = (
  input: DeleteForecastRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForecastArn !== undefined && { ForecastArn: input.ForecastArn })
  };
};

const serializeAws_json1_1DeletePredictorRequest = (
  input: DeletePredictorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredictorArn !== undefined && {
      PredictorArn: input.PredictorArn
    })
  };
};

const serializeAws_json1_1DescribeDatasetGroupRequest = (
  input: DescribeDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetGroupArn !== undefined && {
      DatasetGroupArn: input.DatasetGroupArn
    })
  };
};

const serializeAws_json1_1DescribeDatasetImportJobRequest = (
  input: DescribeDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetImportJobArn !== undefined && {
      DatasetImportJobArn: input.DatasetImportJobArn
    })
  };
};

const serializeAws_json1_1DescribeDatasetRequest = (
  input: DescribeDatasetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetArn !== undefined && { DatasetArn: input.DatasetArn })
  };
};

const serializeAws_json1_1DescribeForecastExportJobRequest = (
  input: DescribeForecastExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForecastExportJobArn !== undefined && {
      ForecastExportJobArn: input.ForecastExportJobArn
    })
  };
};

const serializeAws_json1_1DescribeForecastRequest = (
  input: DescribeForecastRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForecastArn !== undefined && { ForecastArn: input.ForecastArn })
  };
};

const serializeAws_json1_1DescribePredictorRequest = (
  input: DescribePredictorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredictorArn !== undefined && {
      PredictorArn: input.PredictorArn
    })
  };
};

const serializeAws_json1_1EncryptionConfig = (
  input: EncryptionConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.KMSKeyArn !== undefined && { KMSKeyArn: input.KMSKeyArn }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn })
  };
};

const serializeAws_json1_1EvaluationParameters = (
  input: EvaluationParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackTestWindowOffset !== undefined && {
      BackTestWindowOffset: input.BackTestWindowOffset
    }),
    ...(input.NumberOfBacktestWindows !== undefined && {
      NumberOfBacktestWindows: input.NumberOfBacktestWindows
    })
  };
};

const serializeAws_json1_1Featurization = (
  input: Featurization,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName !== undefined && {
      AttributeName: input.AttributeName
    }),
    ...(input.FeaturizationPipeline !== undefined && {
      FeaturizationPipeline: serializeAws_json1_1FeaturizationPipeline(
        input.FeaturizationPipeline,
        context
      )
    })
  };
};

const serializeAws_json1_1FeaturizationConfig = (
  input: FeaturizationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Featurizations !== undefined && {
      Featurizations: serializeAws_json1_1Featurizations(
        input.Featurizations,
        context
      )
    }),
    ...(input.ForecastDimensions !== undefined && {
      ForecastDimensions: serializeAws_json1_1ForecastDimensions(
        input.ForecastDimensions,
        context
      )
    }),
    ...(input.ForecastFrequency !== undefined && {
      ForecastFrequency: input.ForecastFrequency
    })
  };
};

const serializeAws_json1_1FeaturizationMethod = (
  input: FeaturizationMethod,
  context: __SerdeContext
): any => {
  return {
    ...(input.FeaturizationMethodName !== undefined && {
      FeaturizationMethodName: input.FeaturizationMethodName
    }),
    ...(input.FeaturizationMethodParameters !== undefined && {
      FeaturizationMethodParameters: serializeAws_json1_1FeaturizationMethodParameters(
        input.FeaturizationMethodParameters,
        context
      )
    })
  };
};

const serializeAws_json1_1FeaturizationMethodParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
};

const serializeAws_json1_1FeaturizationPipeline = (
  input: FeaturizationMethod[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1FeaturizationMethod(entry, context)
  );
};

const serializeAws_json1_1Featurizations = (
  input: Featurization[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Featurization(entry, context));
};

const serializeAws_json1_1Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Condition !== undefined && { Condition: input.Condition }),
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1Filters = (
  input: Filter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Filter(entry, context));
};

const serializeAws_json1_1ForecastDimensions = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1ForecastTypes = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1GetAccuracyMetricsRequest = (
  input: GetAccuracyMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredictorArn !== undefined && {
      PredictorArn: input.PredictorArn
    })
  };
};

const serializeAws_json1_1HyperParameterTuningJobConfig = (
  input: HyperParameterTuningJobConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterRanges !== undefined && {
      ParameterRanges: serializeAws_json1_1ParameterRanges(
        input.ParameterRanges,
        context
      )
    })
  };
};

const serializeAws_json1_1InputDataConfig = (
  input: InputDataConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetGroupArn !== undefined && {
      DatasetGroupArn: input.DatasetGroupArn
    }),
    ...(input.SupplementaryFeatures !== undefined && {
      SupplementaryFeatures: serializeAws_json1_1SupplementaryFeatures(
        input.SupplementaryFeatures,
        context
      )
    })
  };
};

const serializeAws_json1_1IntegerParameterRange = (
  input: IntegerParameterRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxValue !== undefined && { MaxValue: input.MaxValue }),
    ...(input.MinValue !== undefined && { MinValue: input.MinValue }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ScalingType !== undefined && { ScalingType: input.ScalingType })
  };
};

const serializeAws_json1_1IntegerParameterRanges = (
  input: IntegerParameterRange[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1IntegerParameterRange(entry, context)
  );
};

const serializeAws_json1_1ListDatasetGroupsRequest = (
  input: ListDatasetGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListDatasetImportJobsRequest = (
  input: ListDatasetImportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && {
      Filters: serializeAws_json1_1Filters(input.Filters, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListDatasetsRequest = (
  input: ListDatasetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListForecastExportJobsRequest = (
  input: ListForecastExportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && {
      Filters: serializeAws_json1_1Filters(input.Filters, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListForecastsRequest = (
  input: ListForecastsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && {
      Filters: serializeAws_json1_1Filters(input.Filters, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListPredictorsRequest = (
  input: ListPredictorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined && {
      Filters: serializeAws_json1_1Filters(input.Filters, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ParameterRanges = (
  input: ParameterRanges,
  context: __SerdeContext
): any => {
  return {
    ...(input.CategoricalParameterRanges !== undefined && {
      CategoricalParameterRanges: serializeAws_json1_1CategoricalParameterRanges(
        input.CategoricalParameterRanges,
        context
      )
    }),
    ...(input.ContinuousParameterRanges !== undefined && {
      ContinuousParameterRanges: serializeAws_json1_1ContinuousParameterRanges(
        input.ContinuousParameterRanges,
        context
      )
    }),
    ...(input.IntegerParameterRanges !== undefined && {
      IntegerParameterRanges: serializeAws_json1_1IntegerParameterRanges(
        input.IntegerParameterRanges,
        context
      )
    })
  };
};

const serializeAws_json1_1S3Config = (
  input: S3Config,
  context: __SerdeContext
): any => {
  return {
    ...(input.KMSKeyArn !== undefined && { KMSKeyArn: input.KMSKeyArn }),
    ...(input.Path !== undefined && { Path: input.Path }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn })
  };
};

const serializeAws_json1_1Schema = (
  input: Schema,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_json1_1SchemaAttributes(
        input.Attributes,
        context
      )
    })
  };
};

const serializeAws_json1_1SchemaAttribute = (
  input: SchemaAttribute,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName !== undefined && {
      AttributeName: input.AttributeName
    }),
    ...(input.AttributeType !== undefined && {
      AttributeType: input.AttributeType
    })
  };
};

const serializeAws_json1_1SchemaAttributes = (
  input: SchemaAttribute[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1SchemaAttribute(entry, context)
  );
};

const serializeAws_json1_1SupplementaryFeature = (
  input: SupplementaryFeature,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1SupplementaryFeatures = (
  input: SupplementaryFeature[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1SupplementaryFeature(entry, context)
  );
};

const serializeAws_json1_1TrainingParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
};

const serializeAws_json1_1UpdateDatasetGroupRequest = (
  input: UpdateDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetArns !== undefined && {
      DatasetArns: serializeAws_json1_1ArnList(input.DatasetArns, context)
    }),
    ...(input.DatasetGroupArn !== undefined && {
      DatasetGroupArn: input.DatasetGroupArn
    })
  };
};

const serializeAws_json1_1Values = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const deserializeAws_json1_1ArnList = (
  output: any,
  context: __SerdeContext
): string[] => {
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
): CategoricalParameterRange[] => {
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
): ContinuousParameterRange[] => {
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
): DatasetGroupSummary[] => {
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
): DatasetImportJobSummary[] => {
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
): DatasetSummary[] => {
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
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeAws_json1_1FeaturizationPipeline = (
  output: any,
  context: __SerdeContext
): FeaturizationMethod[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1FeaturizationMethod(entry, context)
  );
};

const deserializeAws_json1_1Featurizations = (
  output: any,
  context: __SerdeContext
): Featurization[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Featurization(entry, context)
  );
};

const deserializeAws_json1_1FieldStatistics = (
  output: any,
  context: __SerdeContext
): { [key: string]: Statistics } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = deserializeAws_json1_1Statistics(output[key], context);
    return acc;
  }, {});
};

const deserializeAws_json1_1ForecastDimensions = (
  output: any,
  context: __SerdeContext
): string[] => {
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
): ForecastExportJobSummary[] => {
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
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Forecasts = (
  output: any,
  context: __SerdeContext
): ForecastSummary[] => {
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
): IntegerParameterRange[] => {
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
): EvaluationResult[] => {
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
): PredictorExecution[] => {
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
): PredictorSummary[] => {
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
): SchemaAttribute[] => {
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
): SupplementaryFeature[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SupplementaryFeature(entry, context)
  );
};

const deserializeAws_json1_1TestWindowDetails = (
  output: any,
  context: __SerdeContext
): TestWindowSummary[] => {
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
): WindowSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1WindowSummary(entry, context)
  );
};

const deserializeAws_json1_1TrainingParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
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
): string[] => {
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
): WeightedQuantileLoss[] => {
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
