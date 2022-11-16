// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseFloat32 as __limitedParseFloat32,
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

import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import {
  CreateBatchPredictionCommandInput,
  CreateBatchPredictionCommandOutput,
} from "../commands/CreateBatchPredictionCommand";
import {
  CreateDataSourceFromRDSCommandInput,
  CreateDataSourceFromRDSCommandOutput,
} from "../commands/CreateDataSourceFromRDSCommand";
import {
  CreateDataSourceFromRedshiftCommandInput,
  CreateDataSourceFromRedshiftCommandOutput,
} from "../commands/CreateDataSourceFromRedshiftCommand";
import {
  CreateDataSourceFromS3CommandInput,
  CreateDataSourceFromS3CommandOutput,
} from "../commands/CreateDataSourceFromS3Command";
import { CreateEvaluationCommandInput, CreateEvaluationCommandOutput } from "../commands/CreateEvaluationCommand";
import { CreateMLModelCommandInput, CreateMLModelCommandOutput } from "../commands/CreateMLModelCommand";
import {
  CreateRealtimeEndpointCommandInput,
  CreateRealtimeEndpointCommandOutput,
} from "../commands/CreateRealtimeEndpointCommand";
import {
  DeleteBatchPredictionCommandInput,
  DeleteBatchPredictionCommandOutput,
} from "../commands/DeleteBatchPredictionCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "../commands/DeleteDataSourceCommand";
import { DeleteEvaluationCommandInput, DeleteEvaluationCommandOutput } from "../commands/DeleteEvaluationCommand";
import { DeleteMLModelCommandInput, DeleteMLModelCommandOutput } from "../commands/DeleteMLModelCommand";
import {
  DeleteRealtimeEndpointCommandInput,
  DeleteRealtimeEndpointCommandOutput,
} from "../commands/DeleteRealtimeEndpointCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "../commands/DeleteTagsCommand";
import {
  DescribeBatchPredictionsCommandInput,
  DescribeBatchPredictionsCommandOutput,
} from "../commands/DescribeBatchPredictionsCommand";
import {
  DescribeDataSourcesCommandInput,
  DescribeDataSourcesCommandOutput,
} from "../commands/DescribeDataSourcesCommand";
import {
  DescribeEvaluationsCommandInput,
  DescribeEvaluationsCommandOutput,
} from "../commands/DescribeEvaluationsCommand";
import { DescribeMLModelsCommandInput, DescribeMLModelsCommandOutput } from "../commands/DescribeMLModelsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "../commands/DescribeTagsCommand";
import { GetBatchPredictionCommandInput, GetBatchPredictionCommandOutput } from "../commands/GetBatchPredictionCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "../commands/GetDataSourceCommand";
import { GetEvaluationCommandInput, GetEvaluationCommandOutput } from "../commands/GetEvaluationCommand";
import { GetMLModelCommandInput, GetMLModelCommandOutput } from "../commands/GetMLModelCommand";
import { PredictCommandInput, PredictCommandOutput } from "../commands/PredictCommand";
import {
  UpdateBatchPredictionCommandInput,
  UpdateBatchPredictionCommandOutput,
} from "../commands/UpdateBatchPredictionCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "../commands/UpdateDataSourceCommand";
import { UpdateEvaluationCommandInput, UpdateEvaluationCommandOutput } from "../commands/UpdateEvaluationCommand";
import { UpdateMLModelCommandInput, UpdateMLModelCommandOutput } from "../commands/UpdateMLModelCommand";
import { MachineLearningServiceException as __BaseException } from "../models/MachineLearningServiceException";
import {
  AddTagsInput,
  AddTagsOutput,
  BatchPrediction,
  CreateBatchPredictionInput,
  CreateBatchPredictionOutput,
  CreateDataSourceFromRDSInput,
  CreateDataSourceFromRDSOutput,
  CreateDataSourceFromRedshiftInput,
  CreateDataSourceFromRedshiftOutput,
  CreateDataSourceFromS3Input,
  CreateDataSourceFromS3Output,
  CreateEvaluationInput,
  CreateEvaluationOutput,
  CreateMLModelInput,
  CreateMLModelOutput,
  CreateRealtimeEndpointInput,
  CreateRealtimeEndpointOutput,
  DataSource,
  DeleteBatchPredictionInput,
  DeleteBatchPredictionOutput,
  DeleteDataSourceInput,
  DeleteDataSourceOutput,
  DeleteEvaluationInput,
  DeleteEvaluationOutput,
  DeleteMLModelInput,
  DeleteMLModelOutput,
  DeleteRealtimeEndpointInput,
  DeleteRealtimeEndpointOutput,
  DeleteTagsInput,
  DeleteTagsOutput,
  DescribeBatchPredictionsInput,
  DescribeBatchPredictionsOutput,
  DescribeDataSourcesInput,
  DescribeDataSourcesOutput,
  DescribeEvaluationsInput,
  DescribeEvaluationsOutput,
  DescribeMLModelsInput,
  DescribeMLModelsOutput,
  DescribeTagsInput,
  DescribeTagsOutput,
  DetailsAttributes,
  Evaluation,
  GetBatchPredictionInput,
  GetBatchPredictionOutput,
  GetDataSourceInput,
  GetDataSourceOutput,
  GetEvaluationInput,
  GetEvaluationOutput,
  GetMLModelInput,
  GetMLModelOutput,
  IdempotentParameterMismatchException,
  InternalServerException,
  InvalidInputException,
  InvalidTagException,
  LimitExceededException,
  MLModel,
  PerformanceMetrics,
  PredictInput,
  Prediction,
  PredictorNotMountedException,
  PredictOutput,
  RDSDatabase,
  RDSDatabaseCredentials,
  RDSDataSpec,
  RDSMetadata,
  RealtimeEndpointInfo,
  RedshiftDatabase,
  RedshiftDatabaseCredentials,
  RedshiftDataSpec,
  RedshiftMetadata,
  ResourceNotFoundException,
  S3DataSpec,
  Tag,
  TagLimitExceededException,
  UpdateBatchPredictionInput,
  UpdateBatchPredictionOutput,
  UpdateDataSourceInput,
  UpdateDataSourceOutput,
  UpdateEvaluationInput,
  UpdateEvaluationOutput,
  UpdateMLModelInput,
  UpdateMLModelOutput,
} from "../models/models_0";

export const serializeAws_json1_1AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.AddTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBatchPredictionCommand = async (
  input: CreateBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.CreateBatchPrediction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBatchPredictionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDataSourceFromRDSCommand = async (
  input: CreateDataSourceFromRDSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.CreateDataSourceFromRDS",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDataSourceFromRDSInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDataSourceFromRedshiftCommand = async (
  input: CreateDataSourceFromRedshiftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.CreateDataSourceFromRedshift",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDataSourceFromRedshiftInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDataSourceFromS3Command = async (
  input: CreateDataSourceFromS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.CreateDataSourceFromS3",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDataSourceFromS3Input(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEvaluationCommand = async (
  input: CreateEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.CreateEvaluation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateEvaluationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateMLModelCommand = async (
  input: CreateMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.CreateMLModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateMLModelInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRealtimeEndpointCommand = async (
  input: CreateRealtimeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.CreateRealtimeEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRealtimeEndpointInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBatchPredictionCommand = async (
  input: DeleteBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DeleteBatchPrediction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBatchPredictionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DeleteDataSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDataSourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEvaluationCommand = async (
  input: DeleteEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DeleteEvaluation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteEvaluationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMLModelCommand = async (
  input: DeleteMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DeleteMLModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMLModelInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRealtimeEndpointCommand = async (
  input: DeleteRealtimeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DeleteRealtimeEndpoint",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRealtimeEndpointInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DeleteTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBatchPredictionsCommand = async (
  input: DescribeBatchPredictionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DescribeBatchPredictions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBatchPredictionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDataSourcesCommand = async (
  input: DescribeDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DescribeDataSources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDataSourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEvaluationsCommand = async (
  input: DescribeEvaluationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DescribeEvaluations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeEvaluationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMLModelsCommand = async (
  input: DescribeMLModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DescribeMLModels",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMLModelsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DescribeTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetBatchPredictionCommand = async (
  input: GetBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.GetBatchPrediction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetBatchPredictionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDataSourceCommand = async (
  input: GetDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.GetDataSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDataSourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetEvaluationCommand = async (
  input: GetEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.GetEvaluation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetEvaluationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetMLModelCommand = async (
  input: GetMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.GetMLModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetMLModelInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PredictCommand = async (
  input: PredictCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.Predict",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PredictInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateBatchPredictionCommand = async (
  input: UpdateBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.UpdateBatchPrediction",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateBatchPredictionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.UpdateDataSource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDataSourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEvaluationCommand = async (
  input: UpdateEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.UpdateEvaluation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateEvaluationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateMLModelCommand = async (
  input: UpdateMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.UpdateMLModel",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateMLModelInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsOutput(data, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.machinelearning#InvalidTagException":
      throw await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "TagLimitExceededException":
    case "com.amazonaws.machinelearning#TagLimitExceededException":
      throw await deserializeAws_json1_1TagLimitExceededExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateBatchPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchPredictionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBatchPredictionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBatchPredictionOutput(data, context);
  const response: CreateBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBatchPredictionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchPredictionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDataSourceFromRDSCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromRDSCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDataSourceFromRDSCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataSourceFromRDSOutput(data, context);
  const response: CreateDataSourceFromRDSCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDataSourceFromRDSCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromRDSCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDataSourceFromRedshiftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromRedshiftCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDataSourceFromRedshiftCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataSourceFromRedshiftOutput(data, context);
  const response: CreateDataSourceFromRedshiftCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDataSourceFromRedshiftCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromRedshiftCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDataSourceFromS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDataSourceFromS3CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataSourceFromS3Output(data, context);
  const response: CreateDataSourceFromS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDataSourceFromS3CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromS3CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEvaluationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEvaluationOutput(data, context);
  const response: CreateEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEvaluationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEvaluationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateMLModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMLModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMLModelOutput(data, context);
  const response: CreateMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateMLModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMLModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.machinelearning#IdempotentParameterMismatchException":
      throw await deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateRealtimeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRealtimeEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRealtimeEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRealtimeEndpointOutput(data, context);
  const response: CreateRealtimeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRealtimeEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRealtimeEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeleteBatchPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchPredictionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBatchPredictionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBatchPredictionOutput(data, context);
  const response: DeleteBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBatchPredictionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchPredictionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDataSourceOutput(data, context);
  const response: DeleteDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeleteEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEvaluationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteEvaluationOutput(data, context);
  const response: DeleteEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEvaluationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEvaluationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeleteMLModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteMLModelOutput(data, context);
  const response: DeleteMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMLModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeleteRealtimeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRealtimeEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRealtimeEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRealtimeEndpointOutput(data, context);
  const response: DeleteRealtimeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRealtimeEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRealtimeEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTagsOutput(data, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.machinelearning#InvalidTagException":
      throw await deserializeAws_json1_1InvalidTagExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribeBatchPredictionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchPredictionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBatchPredictionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBatchPredictionsOutput(data, context);
  const response: DescribeBatchPredictionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBatchPredictionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchPredictionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDataSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDataSourcesOutput(data, context);
  const response: DescribeDataSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDataSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeEvaluationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEvaluationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeEvaluationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEvaluationsOutput(data, context);
  const response: DescribeEvaluationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEvaluationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEvaluationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeMLModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMLModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMLModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMLModelsOutput(data, context);
  const response: DescribeMLModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMLModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMLModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTagsOutput(data, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetBatchPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchPredictionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetBatchPredictionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetBatchPredictionOutput(data, context);
  const response: GetBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetBatchPredictionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchPredictionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDataSourceOutput(data, context);
  const response: GetDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvaluationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEvaluationOutput(data, context);
  const response: GetEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetEvaluationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvaluationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetMLModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetMLModelOutput(data, context);
  const response: GetMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetMLModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1PredictCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PredictCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PredictCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PredictOutput(data, context);
  const response: PredictCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PredictCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PredictCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.machinelearning#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "PredictorNotMountedException":
    case "com.amazonaws.machinelearning#PredictorNotMountedException":
      throw await deserializeAws_json1_1PredictorNotMountedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1UpdateBatchPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBatchPredictionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateBatchPredictionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateBatchPredictionOutput(data, context);
  const response: UpdateBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateBatchPredictionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBatchPredictionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDataSourceOutput(data, context);
  const response: UpdateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDataSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1UpdateEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEvaluationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEvaluationOutput(data, context);
  const response: UpdateEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateEvaluationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEvaluationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

export const deserializeAws_json1_1UpdateMLModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMLModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateMLModelOutput(data, context);
  const response: UpdateMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateMLModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMLModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await deserializeAws_json1_1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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

const deserializeAws_json1_1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotentParameterMismatchException(body, context);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
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

const deserializeAws_json1_1InvalidTagExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagException(body, context);
  const exception = new InvalidTagException({
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

const deserializeAws_json1_1PredictorNotMountedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PredictorNotMountedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PredictorNotMountedException(body, context);
  const exception = new PredictorNotMountedException({
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

const deserializeAws_json1_1TagLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagLimitExceededException(body, context);
  const exception = new TagLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AddTagsInput = (input: AddTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateBatchPredictionInput = (
  input: CreateBatchPredictionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchPredictionDataSourceId != null && {
      BatchPredictionDataSourceId: input.BatchPredictionDataSourceId,
    }),
    ...(input.BatchPredictionId != null && { BatchPredictionId: input.BatchPredictionId }),
    ...(input.BatchPredictionName != null && { BatchPredictionName: input.BatchPredictionName }),
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
    ...(input.OutputUri != null && { OutputUri: input.OutputUri }),
  };
};

const serializeAws_json1_1CreateDataSourceFromRDSInput = (
  input: CreateDataSourceFromRDSInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComputeStatistics != null && { ComputeStatistics: input.ComputeStatistics }),
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.DataSourceName != null && { DataSourceName: input.DataSourceName }),
    ...(input.RDSData != null && { RDSData: serializeAws_json1_1RDSDataSpec(input.RDSData, context) }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1CreateDataSourceFromRedshiftInput = (
  input: CreateDataSourceFromRedshiftInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComputeStatistics != null && { ComputeStatistics: input.ComputeStatistics }),
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.DataSourceName != null && { DataSourceName: input.DataSourceName }),
    ...(input.DataSpec != null && { DataSpec: serializeAws_json1_1RedshiftDataSpec(input.DataSpec, context) }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

const serializeAws_json1_1CreateDataSourceFromS3Input = (
  input: CreateDataSourceFromS3Input,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComputeStatistics != null && { ComputeStatistics: input.ComputeStatistics }),
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.DataSourceName != null && { DataSourceName: input.DataSourceName }),
    ...(input.DataSpec != null && { DataSpec: serializeAws_json1_1S3DataSpec(input.DataSpec, context) }),
  };
};

const serializeAws_json1_1CreateEvaluationInput = (input: CreateEvaluationInput, context: __SerdeContext): any => {
  return {
    ...(input.EvaluationDataSourceId != null && { EvaluationDataSourceId: input.EvaluationDataSourceId }),
    ...(input.EvaluationId != null && { EvaluationId: input.EvaluationId }),
    ...(input.EvaluationName != null && { EvaluationName: input.EvaluationName }),
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
  };
};

const serializeAws_json1_1CreateMLModelInput = (input: CreateMLModelInput, context: __SerdeContext): any => {
  return {
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
    ...(input.MLModelName != null && { MLModelName: input.MLModelName }),
    ...(input.MLModelType != null && { MLModelType: input.MLModelType }),
    ...(input.Parameters != null && { Parameters: serializeAws_json1_1TrainingParameters(input.Parameters, context) }),
    ...(input.Recipe != null && { Recipe: input.Recipe }),
    ...(input.RecipeUri != null && { RecipeUri: input.RecipeUri }),
    ...(input.TrainingDataSourceId != null && { TrainingDataSourceId: input.TrainingDataSourceId }),
  };
};

const serializeAws_json1_1CreateRealtimeEndpointInput = (
  input: CreateRealtimeEndpointInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
  };
};

const serializeAws_json1_1DeleteBatchPredictionInput = (
  input: DeleteBatchPredictionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchPredictionId != null && { BatchPredictionId: input.BatchPredictionId }),
  };
};

const serializeAws_json1_1DeleteDataSourceInput = (input: DeleteDataSourceInput, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
  };
};

const serializeAws_json1_1DeleteEvaluationInput = (input: DeleteEvaluationInput, context: __SerdeContext): any => {
  return {
    ...(input.EvaluationId != null && { EvaluationId: input.EvaluationId }),
  };
};

const serializeAws_json1_1DeleteMLModelInput = (input: DeleteMLModelInput, context: __SerdeContext): any => {
  return {
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
  };
};

const serializeAws_json1_1DeleteRealtimeEndpointInput = (
  input: DeleteRealtimeEndpointInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
  };
};

const serializeAws_json1_1DeleteTagsInput = (input: DeleteTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1DescribeBatchPredictionsInput = (
  input: DescribeBatchPredictionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EQ != null && { EQ: input.EQ }),
    ...(input.FilterVariable != null && { FilterVariable: input.FilterVariable }),
    ...(input.GE != null && { GE: input.GE }),
    ...(input.GT != null && { GT: input.GT }),
    ...(input.LE != null && { LE: input.LE }),
    ...(input.LT != null && { LT: input.LT }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NE != null && { NE: input.NE }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1DescribeDataSourcesInput = (
  input: DescribeDataSourcesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EQ != null && { EQ: input.EQ }),
    ...(input.FilterVariable != null && { FilterVariable: input.FilterVariable }),
    ...(input.GE != null && { GE: input.GE }),
    ...(input.GT != null && { GT: input.GT }),
    ...(input.LE != null && { LE: input.LE }),
    ...(input.LT != null && { LT: input.LT }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NE != null && { NE: input.NE }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1DescribeEvaluationsInput = (
  input: DescribeEvaluationsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EQ != null && { EQ: input.EQ }),
    ...(input.FilterVariable != null && { FilterVariable: input.FilterVariable }),
    ...(input.GE != null && { GE: input.GE }),
    ...(input.GT != null && { GT: input.GT }),
    ...(input.LE != null && { LE: input.LE }),
    ...(input.LT != null && { LT: input.LT }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NE != null && { NE: input.NE }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1DescribeMLModelsInput = (input: DescribeMLModelsInput, context: __SerdeContext): any => {
  return {
    ...(input.EQ != null && { EQ: input.EQ }),
    ...(input.FilterVariable != null && { FilterVariable: input.FilterVariable }),
    ...(input.GE != null && { GE: input.GE }),
    ...(input.GT != null && { GT: input.GT }),
    ...(input.LE != null && { LE: input.LE }),
    ...(input.LT != null && { LT: input.LT }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NE != null && { NE: input.NE }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_json1_1DescribeTagsInput = (input: DescribeTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_json1_1EDPSecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1GetBatchPredictionInput = (input: GetBatchPredictionInput, context: __SerdeContext): any => {
  return {
    ...(input.BatchPredictionId != null && { BatchPredictionId: input.BatchPredictionId }),
  };
};

const serializeAws_json1_1GetDataSourceInput = (input: GetDataSourceInput, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.Verbose != null && { Verbose: input.Verbose }),
  };
};

const serializeAws_json1_1GetEvaluationInput = (input: GetEvaluationInput, context: __SerdeContext): any => {
  return {
    ...(input.EvaluationId != null && { EvaluationId: input.EvaluationId }),
  };
};

const serializeAws_json1_1GetMLModelInput = (input: GetMLModelInput, context: __SerdeContext): any => {
  return {
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
    ...(input.Verbose != null && { Verbose: input.Verbose }),
  };
};

const serializeAws_json1_1PredictInput = (input: PredictInput, context: __SerdeContext): any => {
  return {
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
    ...(input.PredictEndpoint != null && { PredictEndpoint: input.PredictEndpoint }),
    ...(input.Record != null && { Record: serializeAws_json1_1Record(input.Record, context) }),
  };
};

const serializeAws_json1_1RDSDatabase = (input: RDSDatabase, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.InstanceIdentifier != null && { InstanceIdentifier: input.InstanceIdentifier }),
  };
};

const serializeAws_json1_1RDSDatabaseCredentials = (input: RDSDatabaseCredentials, context: __SerdeContext): any => {
  return {
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

const serializeAws_json1_1RDSDataSpec = (input: RDSDataSpec, context: __SerdeContext): any => {
  return {
    ...(input.DataRearrangement != null && { DataRearrangement: input.DataRearrangement }),
    ...(input.DataSchema != null && { DataSchema: input.DataSchema }),
    ...(input.DataSchemaUri != null && { DataSchemaUri: input.DataSchemaUri }),
    ...(input.DatabaseCredentials != null && {
      DatabaseCredentials: serializeAws_json1_1RDSDatabaseCredentials(input.DatabaseCredentials, context),
    }),
    ...(input.DatabaseInformation != null && {
      DatabaseInformation: serializeAws_json1_1RDSDatabase(input.DatabaseInformation, context),
    }),
    ...(input.ResourceRole != null && { ResourceRole: input.ResourceRole }),
    ...(input.S3StagingLocation != null && { S3StagingLocation: input.S3StagingLocation }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_json1_1EDPSecurityGroupIds(input.SecurityGroupIds, context),
    }),
    ...(input.SelectSqlQuery != null && { SelectSqlQuery: input.SelectSqlQuery }),
    ...(input.ServiceRole != null && { ServiceRole: input.ServiceRole }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
  };
};

const serializeAws_json1_1Record = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1RedshiftDatabase = (input: RedshiftDatabase, context: __SerdeContext): any => {
  return {
    ...(input.ClusterIdentifier != null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
  };
};

const serializeAws_json1_1RedshiftDatabaseCredentials = (
  input: RedshiftDatabaseCredentials,
  context: __SerdeContext
): any => {
  return {
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

const serializeAws_json1_1RedshiftDataSpec = (input: RedshiftDataSpec, context: __SerdeContext): any => {
  return {
    ...(input.DataRearrangement != null && { DataRearrangement: input.DataRearrangement }),
    ...(input.DataSchema != null && { DataSchema: input.DataSchema }),
    ...(input.DataSchemaUri != null && { DataSchemaUri: input.DataSchemaUri }),
    ...(input.DatabaseCredentials != null && {
      DatabaseCredentials: serializeAws_json1_1RedshiftDatabaseCredentials(input.DatabaseCredentials, context),
    }),
    ...(input.DatabaseInformation != null && {
      DatabaseInformation: serializeAws_json1_1RedshiftDatabase(input.DatabaseInformation, context),
    }),
    ...(input.S3StagingLocation != null && { S3StagingLocation: input.S3StagingLocation }),
    ...(input.SelectSqlQuery != null && { SelectSqlQuery: input.SelectSqlQuery }),
  };
};

const serializeAws_json1_1S3DataSpec = (input: S3DataSpec, context: __SerdeContext): any => {
  return {
    ...(input.DataLocationS3 != null && { DataLocationS3: input.DataLocationS3 }),
    ...(input.DataRearrangement != null && { DataRearrangement: input.DataRearrangement }),
    ...(input.DataSchema != null && { DataSchema: input.DataSchema }),
    ...(input.DataSchemaLocationS3 != null && { DataSchemaLocationS3: input.DataSchemaLocationS3 }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TrainingParameters = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_json1_1UpdateBatchPredictionInput = (
  input: UpdateBatchPredictionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchPredictionId != null && { BatchPredictionId: input.BatchPredictionId }),
    ...(input.BatchPredictionName != null && { BatchPredictionName: input.BatchPredictionName }),
  };
};

const serializeAws_json1_1UpdateDataSourceInput = (input: UpdateDataSourceInput, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.DataSourceName != null && { DataSourceName: input.DataSourceName }),
  };
};

const serializeAws_json1_1UpdateEvaluationInput = (input: UpdateEvaluationInput, context: __SerdeContext): any => {
  return {
    ...(input.EvaluationId != null && { EvaluationId: input.EvaluationId }),
    ...(input.EvaluationName != null && { EvaluationName: input.EvaluationName }),
  };
};

const serializeAws_json1_1UpdateMLModelInput = (input: UpdateMLModelInput, context: __SerdeContext): any => {
  return {
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
    ...(input.MLModelName != null && { MLModelName: input.MLModelName }),
    ...(input.ScoreThreshold != null && { ScoreThreshold: __serializeFloat(input.ScoreThreshold) }),
  };
};

const deserializeAws_json1_1AddTagsOutput = (output: any, context: __SerdeContext): AddTagsOutput => {
  return {
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1BatchPrediction = (output: any, context: __SerdeContext): BatchPrediction => {
  return {
    BatchPredictionDataSourceId: __expectString(output.BatchPredictionDataSourceId),
    BatchPredictionId: __expectString(output.BatchPredictionId),
    ComputeTime: __expectLong(output.ComputeTime),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CreatedByIamUser: __expectString(output.CreatedByIamUser),
    FinishedAt:
      output.FinishedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FinishedAt))) : undefined,
    InputDataLocationS3: __expectString(output.InputDataLocationS3),
    InvalidRecordCount: __expectLong(output.InvalidRecordCount),
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    MLModelId: __expectString(output.MLModelId),
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
    OutputUri: __expectString(output.OutputUri),
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedAt))) : undefined,
    Status: __expectString(output.Status),
    TotalRecordCount: __expectLong(output.TotalRecordCount),
  } as any;
};

const deserializeAws_json1_1BatchPredictions = (output: any, context: __SerdeContext): BatchPrediction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BatchPrediction(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateBatchPredictionOutput = (
  output: any,
  context: __SerdeContext
): CreateBatchPredictionOutput => {
  return {
    BatchPredictionId: __expectString(output.BatchPredictionId),
  } as any;
};

const deserializeAws_json1_1CreateDataSourceFromRDSOutput = (
  output: any,
  context: __SerdeContext
): CreateDataSourceFromRDSOutput => {
  return {
    DataSourceId: __expectString(output.DataSourceId),
  } as any;
};

const deserializeAws_json1_1CreateDataSourceFromRedshiftOutput = (
  output: any,
  context: __SerdeContext
): CreateDataSourceFromRedshiftOutput => {
  return {
    DataSourceId: __expectString(output.DataSourceId),
  } as any;
};

const deserializeAws_json1_1CreateDataSourceFromS3Output = (
  output: any,
  context: __SerdeContext
): CreateDataSourceFromS3Output => {
  return {
    DataSourceId: __expectString(output.DataSourceId),
  } as any;
};

const deserializeAws_json1_1CreateEvaluationOutput = (output: any, context: __SerdeContext): CreateEvaluationOutput => {
  return {
    EvaluationId: __expectString(output.EvaluationId),
  } as any;
};

const deserializeAws_json1_1CreateMLModelOutput = (output: any, context: __SerdeContext): CreateMLModelOutput => {
  return {
    MLModelId: __expectString(output.MLModelId),
  } as any;
};

const deserializeAws_json1_1CreateRealtimeEndpointOutput = (
  output: any,
  context: __SerdeContext
): CreateRealtimeEndpointOutput => {
  return {
    MLModelId: __expectString(output.MLModelId),
    RealtimeEndpointInfo:
      output.RealtimeEndpointInfo != null
        ? deserializeAws_json1_1RealtimeEndpointInfo(output.RealtimeEndpointInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    ComputeStatistics: __expectBoolean(output.ComputeStatistics),
    ComputeTime: __expectLong(output.ComputeTime),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CreatedByIamUser: __expectString(output.CreatedByIamUser),
    DataLocationS3: __expectString(output.DataLocationS3),
    DataRearrangement: __expectString(output.DataRearrangement),
    DataSizeInBytes: __expectLong(output.DataSizeInBytes),
    DataSourceId: __expectString(output.DataSourceId),
    FinishedAt:
      output.FinishedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FinishedAt))) : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
    NumberOfFiles: __expectLong(output.NumberOfFiles),
    RDSMetadata:
      output.RDSMetadata != null ? deserializeAws_json1_1RDSMetadata(output.RDSMetadata, context) : undefined,
    RedshiftMetadata:
      output.RedshiftMetadata != null
        ? deserializeAws_json1_1RedshiftMetadata(output.RedshiftMetadata, context)
        : undefined,
    RoleARN: __expectString(output.RoleARN),
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedAt))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DataSources = (output: any, context: __SerdeContext): DataSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataSource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DeleteBatchPredictionOutput = (
  output: any,
  context: __SerdeContext
): DeleteBatchPredictionOutput => {
  return {
    BatchPredictionId: __expectString(output.BatchPredictionId),
  } as any;
};

const deserializeAws_json1_1DeleteDataSourceOutput = (output: any, context: __SerdeContext): DeleteDataSourceOutput => {
  return {
    DataSourceId: __expectString(output.DataSourceId),
  } as any;
};

const deserializeAws_json1_1DeleteEvaluationOutput = (output: any, context: __SerdeContext): DeleteEvaluationOutput => {
  return {
    EvaluationId: __expectString(output.EvaluationId),
  } as any;
};

const deserializeAws_json1_1DeleteMLModelOutput = (output: any, context: __SerdeContext): DeleteMLModelOutput => {
  return {
    MLModelId: __expectString(output.MLModelId),
  } as any;
};

const deserializeAws_json1_1DeleteRealtimeEndpointOutput = (
  output: any,
  context: __SerdeContext
): DeleteRealtimeEndpointOutput => {
  return {
    MLModelId: __expectString(output.MLModelId),
    RealtimeEndpointInfo:
      output.RealtimeEndpointInfo != null
        ? deserializeAws_json1_1RealtimeEndpointInfo(output.RealtimeEndpointInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteTagsOutput = (output: any, context: __SerdeContext): DeleteTagsOutput => {
  return {
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_json1_1DescribeBatchPredictionsOutput = (
  output: any,
  context: __SerdeContext
): DescribeBatchPredictionsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Results: output.Results != null ? deserializeAws_json1_1BatchPredictions(output.Results, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDataSourcesOutput = (
  output: any,
  context: __SerdeContext
): DescribeDataSourcesOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Results: output.Results != null ? deserializeAws_json1_1DataSources(output.Results, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeEvaluationsOutput = (
  output: any,
  context: __SerdeContext
): DescribeEvaluationsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Results: output.Results != null ? deserializeAws_json1_1Evaluations(output.Results, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeMLModelsOutput = (output: any, context: __SerdeContext): DescribeMLModelsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Results: output.Results != null ? deserializeAws_json1_1MLModels(output.Results, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeTagsOutput = (output: any, context: __SerdeContext): DescribeTagsOutput => {
  return {
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    Tags: output.Tags != null ? deserializeAws_json1_1TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DetailsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [DetailsAttributes | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

const deserializeAws_json1_1Evaluation = (output: any, context: __SerdeContext): Evaluation => {
  return {
    ComputeTime: __expectLong(output.ComputeTime),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CreatedByIamUser: __expectString(output.CreatedByIamUser),
    EvaluationDataSourceId: __expectString(output.EvaluationDataSourceId),
    EvaluationId: __expectString(output.EvaluationId),
    FinishedAt:
      output.FinishedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FinishedAt))) : undefined,
    InputDataLocationS3: __expectString(output.InputDataLocationS3),
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    MLModelId: __expectString(output.MLModelId),
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
    PerformanceMetrics:
      output.PerformanceMetrics != null
        ? deserializeAws_json1_1PerformanceMetrics(output.PerformanceMetrics, context)
        : undefined,
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedAt))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1Evaluations = (output: any, context: __SerdeContext): Evaluation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Evaluation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetBatchPredictionOutput = (
  output: any,
  context: __SerdeContext
): GetBatchPredictionOutput => {
  return {
    BatchPredictionDataSourceId: __expectString(output.BatchPredictionDataSourceId),
    BatchPredictionId: __expectString(output.BatchPredictionId),
    ComputeTime: __expectLong(output.ComputeTime),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CreatedByIamUser: __expectString(output.CreatedByIamUser),
    FinishedAt:
      output.FinishedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FinishedAt))) : undefined,
    InputDataLocationS3: __expectString(output.InputDataLocationS3),
    InvalidRecordCount: __expectLong(output.InvalidRecordCount),
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    LogUri: __expectString(output.LogUri),
    MLModelId: __expectString(output.MLModelId),
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
    OutputUri: __expectString(output.OutputUri),
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedAt))) : undefined,
    Status: __expectString(output.Status),
    TotalRecordCount: __expectLong(output.TotalRecordCount),
  } as any;
};

const deserializeAws_json1_1GetDataSourceOutput = (output: any, context: __SerdeContext): GetDataSourceOutput => {
  return {
    ComputeStatistics: __expectBoolean(output.ComputeStatistics),
    ComputeTime: __expectLong(output.ComputeTime),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CreatedByIamUser: __expectString(output.CreatedByIamUser),
    DataLocationS3: __expectString(output.DataLocationS3),
    DataRearrangement: __expectString(output.DataRearrangement),
    DataSizeInBytes: __expectLong(output.DataSizeInBytes),
    DataSourceId: __expectString(output.DataSourceId),
    DataSourceSchema: __expectString(output.DataSourceSchema),
    FinishedAt:
      output.FinishedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FinishedAt))) : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    LogUri: __expectString(output.LogUri),
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
    NumberOfFiles: __expectLong(output.NumberOfFiles),
    RDSMetadata:
      output.RDSMetadata != null ? deserializeAws_json1_1RDSMetadata(output.RDSMetadata, context) : undefined,
    RedshiftMetadata:
      output.RedshiftMetadata != null
        ? deserializeAws_json1_1RedshiftMetadata(output.RedshiftMetadata, context)
        : undefined,
    RoleARN: __expectString(output.RoleARN),
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedAt))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1GetEvaluationOutput = (output: any, context: __SerdeContext): GetEvaluationOutput => {
  return {
    ComputeTime: __expectLong(output.ComputeTime),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CreatedByIamUser: __expectString(output.CreatedByIamUser),
    EvaluationDataSourceId: __expectString(output.EvaluationDataSourceId),
    EvaluationId: __expectString(output.EvaluationId),
    FinishedAt:
      output.FinishedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FinishedAt))) : undefined,
    InputDataLocationS3: __expectString(output.InputDataLocationS3),
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    LogUri: __expectString(output.LogUri),
    MLModelId: __expectString(output.MLModelId),
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
    PerformanceMetrics:
      output.PerformanceMetrics != null
        ? deserializeAws_json1_1PerformanceMetrics(output.PerformanceMetrics, context)
        : undefined,
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedAt))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1GetMLModelOutput = (output: any, context: __SerdeContext): GetMLModelOutput => {
  return {
    ComputeTime: __expectLong(output.ComputeTime),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CreatedByIamUser: __expectString(output.CreatedByIamUser),
    EndpointInfo:
      output.EndpointInfo != null
        ? deserializeAws_json1_1RealtimeEndpointInfo(output.EndpointInfo, context)
        : undefined,
    FinishedAt:
      output.FinishedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FinishedAt))) : undefined,
    InputDataLocationS3: __expectString(output.InputDataLocationS3),
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    LogUri: __expectString(output.LogUri),
    MLModelId: __expectString(output.MLModelId),
    MLModelType: __expectString(output.MLModelType),
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
    Recipe: __expectString(output.Recipe),
    Schema: __expectString(output.Schema),
    ScoreThreshold: __limitedParseFloat32(output.ScoreThreshold),
    ScoreThresholdLastUpdatedAt:
      output.ScoreThresholdLastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ScoreThresholdLastUpdatedAt)))
        : undefined,
    SizeInBytes: __expectLong(output.SizeInBytes),
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedAt))) : undefined,
    Status: __expectString(output.Status),
    TrainingDataSourceId: __expectString(output.TrainingDataSourceId),
    TrainingParameters:
      output.TrainingParameters != null
        ? deserializeAws_json1_1TrainingParameters(output.TrainingParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidTagException = (output: any, context: __SerdeContext): InvalidTagException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1MLModel = (output: any, context: __SerdeContext): MLModel => {
  return {
    Algorithm: __expectString(output.Algorithm),
    ComputeTime: __expectLong(output.ComputeTime),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CreatedByIamUser: __expectString(output.CreatedByIamUser),
    EndpointInfo:
      output.EndpointInfo != null
        ? deserializeAws_json1_1RealtimeEndpointInfo(output.EndpointInfo, context)
        : undefined,
    FinishedAt:
      output.FinishedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FinishedAt))) : undefined,
    InputDataLocationS3: __expectString(output.InputDataLocationS3),
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedAt)))
        : undefined,
    MLModelId: __expectString(output.MLModelId),
    MLModelType: __expectString(output.MLModelType),
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
    ScoreThreshold: __limitedParseFloat32(output.ScoreThreshold),
    ScoreThresholdLastUpdatedAt:
      output.ScoreThresholdLastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ScoreThresholdLastUpdatedAt)))
        : undefined,
    SizeInBytes: __expectLong(output.SizeInBytes),
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedAt))) : undefined,
    Status: __expectString(output.Status),
    TrainingDataSourceId: __expectString(output.TrainingDataSourceId),
    TrainingParameters:
      output.TrainingParameters != null
        ? deserializeAws_json1_1TrainingParameters(output.TrainingParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MLModels = (output: any, context: __SerdeContext): MLModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MLModel(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PerformanceMetrics = (output: any, context: __SerdeContext): PerformanceMetrics => {
  return {
    Properties:
      output.Properties != null
        ? deserializeAws_json1_1PerformanceMetricsProperties(output.Properties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PerformanceMetricsProperties = (
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

const deserializeAws_json1_1Prediction = (output: any, context: __SerdeContext): Prediction => {
  return {
    details: output.details != null ? deserializeAws_json1_1DetailsMap(output.details, context) : undefined,
    predictedLabel: __expectString(output.predictedLabel),
    predictedScores:
      output.predictedScores != null
        ? deserializeAws_json1_1ScoreValuePerLabelMap(output.predictedScores, context)
        : undefined,
    predictedValue: __limitedParseFloat32(output.predictedValue),
  } as any;
};

const deserializeAws_json1_1PredictorNotMountedException = (
  output: any,
  context: __SerdeContext
): PredictorNotMountedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PredictOutput = (output: any, context: __SerdeContext): PredictOutput => {
  return {
    Prediction: output.Prediction != null ? deserializeAws_json1_1Prediction(output.Prediction, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RDSDatabase = (output: any, context: __SerdeContext): RDSDatabase => {
  return {
    DatabaseName: __expectString(output.DatabaseName),
    InstanceIdentifier: __expectString(output.InstanceIdentifier),
  } as any;
};

const deserializeAws_json1_1RDSMetadata = (output: any, context: __SerdeContext): RDSMetadata => {
  return {
    DataPipelineId: __expectString(output.DataPipelineId),
    Database: output.Database != null ? deserializeAws_json1_1RDSDatabase(output.Database, context) : undefined,
    DatabaseUserName: __expectString(output.DatabaseUserName),
    ResourceRole: __expectString(output.ResourceRole),
    SelectSqlQuery: __expectString(output.SelectSqlQuery),
    ServiceRole: __expectString(output.ServiceRole),
  } as any;
};

const deserializeAws_json1_1RealtimeEndpointInfo = (output: any, context: __SerdeContext): RealtimeEndpointInfo => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    EndpointStatus: __expectString(output.EndpointStatus),
    EndpointUrl: __expectString(output.EndpointUrl),
    PeakRequestsPerSecond: __expectInt32(output.PeakRequestsPerSecond),
  } as any;
};

const deserializeAws_json1_1RedshiftDatabase = (output: any, context: __SerdeContext): RedshiftDatabase => {
  return {
    ClusterIdentifier: __expectString(output.ClusterIdentifier),
    DatabaseName: __expectString(output.DatabaseName),
  } as any;
};

const deserializeAws_json1_1RedshiftMetadata = (output: any, context: __SerdeContext): RedshiftMetadata => {
  return {
    DatabaseUserName: __expectString(output.DatabaseUserName),
    RedshiftDatabase:
      output.RedshiftDatabase != null
        ? deserializeAws_json1_1RedshiftDatabase(output.RedshiftDatabase, context)
        : undefined,
    SelectSqlQuery: __expectString(output.SelectSqlQuery),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ScoreValuePerLabelMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseFloat32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
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

const deserializeAws_json1_1TrainingParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_json1_1UpdateBatchPredictionOutput = (
  output: any,
  context: __SerdeContext
): UpdateBatchPredictionOutput => {
  return {
    BatchPredictionId: __expectString(output.BatchPredictionId),
  } as any;
};

const deserializeAws_json1_1UpdateDataSourceOutput = (output: any, context: __SerdeContext): UpdateDataSourceOutput => {
  return {
    DataSourceId: __expectString(output.DataSourceId),
  } as any;
};

const deserializeAws_json1_1UpdateEvaluationOutput = (output: any, context: __SerdeContext): UpdateEvaluationOutput => {
  return {
    EvaluationId: __expectString(output.EvaluationId),
  } as any;
};

const deserializeAws_json1_1UpdateMLModelOutput = (output: any, context: __SerdeContext): UpdateMLModelOutput => {
  return {
    MLModelId: __expectString(output.MLModelId),
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
