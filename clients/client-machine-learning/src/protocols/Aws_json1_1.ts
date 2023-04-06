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

/**
 * serializeAws_json1_1AddTagsCommand
 */
export const se_AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.AddTags",
  };
  let body: any;
  body = JSON.stringify(se_AddTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBatchPredictionCommand
 */
export const se_CreateBatchPredictionCommand = async (
  input: CreateBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.CreateBatchPrediction",
  };
  let body: any;
  body = JSON.stringify(se_CreateBatchPredictionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDataSourceFromRDSCommand
 */
export const se_CreateDataSourceFromRDSCommand = async (
  input: CreateDataSourceFromRDSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.CreateDataSourceFromRDS",
  };
  let body: any;
  body = JSON.stringify(se_CreateDataSourceFromRDSInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDataSourceFromRedshiftCommand
 */
export const se_CreateDataSourceFromRedshiftCommand = async (
  input: CreateDataSourceFromRedshiftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.CreateDataSourceFromRedshift",
  };
  let body: any;
  body = JSON.stringify(se_CreateDataSourceFromRedshiftInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDataSourceFromS3Command
 */
export const se_CreateDataSourceFromS3Command = async (
  input: CreateDataSourceFromS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.CreateDataSourceFromS3",
  };
  let body: any;
  body = JSON.stringify(se_CreateDataSourceFromS3Input(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEvaluationCommand
 */
export const se_CreateEvaluationCommand = async (
  input: CreateEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.CreateEvaluation",
  };
  let body: any;
  body = JSON.stringify(se_CreateEvaluationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMLModelCommand
 */
export const se_CreateMLModelCommand = async (
  input: CreateMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.CreateMLModel",
  };
  let body: any;
  body = JSON.stringify(se_CreateMLModelInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRealtimeEndpointCommand
 */
export const se_CreateRealtimeEndpointCommand = async (
  input: CreateRealtimeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.CreateRealtimeEndpoint",
  };
  let body: any;
  body = JSON.stringify(se_CreateRealtimeEndpointInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBatchPredictionCommand
 */
export const se_DeleteBatchPredictionCommand = async (
  input: DeleteBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DeleteBatchPrediction",
  };
  let body: any;
  body = JSON.stringify(se_DeleteBatchPredictionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDataSourceCommand
 */
export const se_DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DeleteDataSource",
  };
  let body: any;
  body = JSON.stringify(se_DeleteDataSourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEvaluationCommand
 */
export const se_DeleteEvaluationCommand = async (
  input: DeleteEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DeleteEvaluation",
  };
  let body: any;
  body = JSON.stringify(se_DeleteEvaluationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMLModelCommand
 */
export const se_DeleteMLModelCommand = async (
  input: DeleteMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DeleteMLModel",
  };
  let body: any;
  body = JSON.stringify(se_DeleteMLModelInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRealtimeEndpointCommand
 */
export const se_DeleteRealtimeEndpointCommand = async (
  input: DeleteRealtimeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DeleteRealtimeEndpoint",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRealtimeEndpointInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTagsCommand
 */
export const se_DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DeleteTags",
  };
  let body: any;
  body = JSON.stringify(se_DeleteTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBatchPredictionsCommand
 */
export const se_DescribeBatchPredictionsCommand = async (
  input: DescribeBatchPredictionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DescribeBatchPredictions",
  };
  let body: any;
  body = JSON.stringify(se_DescribeBatchPredictionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDataSourcesCommand
 */
export const se_DescribeDataSourcesCommand = async (
  input: DescribeDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DescribeDataSources",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDataSourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEvaluationsCommand
 */
export const se_DescribeEvaluationsCommand = async (
  input: DescribeEvaluationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DescribeEvaluations",
  };
  let body: any;
  body = JSON.stringify(se_DescribeEvaluationsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMLModelsCommand
 */
export const se_DescribeMLModelsCommand = async (
  input: DescribeMLModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DescribeMLModels",
  };
  let body: any;
  body = JSON.stringify(se_DescribeMLModelsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTagsCommand
 */
export const se_DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.DescribeTags",
  };
  let body: any;
  body = JSON.stringify(se_DescribeTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBatchPredictionCommand
 */
export const se_GetBatchPredictionCommand = async (
  input: GetBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.GetBatchPrediction",
  };
  let body: any;
  body = JSON.stringify(se_GetBatchPredictionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDataSourceCommand
 */
export const se_GetDataSourceCommand = async (
  input: GetDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.GetDataSource",
  };
  let body: any;
  body = JSON.stringify(se_GetDataSourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEvaluationCommand
 */
export const se_GetEvaluationCommand = async (
  input: GetEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.GetEvaluation",
  };
  let body: any;
  body = JSON.stringify(se_GetEvaluationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMLModelCommand
 */
export const se_GetMLModelCommand = async (
  input: GetMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.GetMLModel",
  };
  let body: any;
  body = JSON.stringify(se_GetMLModelInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PredictCommand
 */
export const se_PredictCommand = async (
  input: PredictCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.Predict",
  };
  let body: any;
  body = JSON.stringify(se_PredictInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateBatchPredictionCommand
 */
export const se_UpdateBatchPredictionCommand = async (
  input: UpdateBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.UpdateBatchPrediction",
  };
  let body: any;
  body = JSON.stringify(se_UpdateBatchPredictionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDataSourceCommand
 */
export const se_UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.UpdateDataSource",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDataSourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEvaluationCommand
 */
export const se_UpdateEvaluationCommand = async (
  input: UpdateEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.UpdateEvaluation",
  };
  let body: any;
  body = JSON.stringify(se_UpdateEvaluationInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMLModelCommand
 */
export const se_UpdateMLModelCommand = async (
  input: UpdateMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonML_20141212.UpdateMLModel",
  };
  let body: any;
  body = JSON.stringify(se_UpdateMLModelInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddTagsCommand
 */
export const de_AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddTagsOutput(data, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddTagsCommandError
 */
const de_AddTagsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.machinelearning#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TagLimitExceededException":
    case "com.amazonaws.machinelearning#TagLimitExceededException":
      throw await de_TagLimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateBatchPredictionCommand
 */
export const de_CreateBatchPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBatchPredictionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBatchPredictionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBatchPredictionOutput(data, context);
  const response: CreateBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateBatchPredictionCommandError
 */
const de_CreateBatchPredictionCommandError = async (
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
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateDataSourceFromRDSCommand
 */
export const de_CreateDataSourceFromRDSCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromRDSCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDataSourceFromRDSCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDataSourceFromRDSOutput(data, context);
  const response: CreateDataSourceFromRDSCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDataSourceFromRDSCommandError
 */
const de_CreateDataSourceFromRDSCommandError = async (
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
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateDataSourceFromRedshiftCommand
 */
export const de_CreateDataSourceFromRedshiftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromRedshiftCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDataSourceFromRedshiftCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDataSourceFromRedshiftOutput(data, context);
  const response: CreateDataSourceFromRedshiftCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDataSourceFromRedshiftCommandError
 */
const de_CreateDataSourceFromRedshiftCommandError = async (
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
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateDataSourceFromS3Command
 */
export const de_CreateDataSourceFromS3Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataSourceFromS3CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDataSourceFromS3CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDataSourceFromS3Output(data, context);
  const response: CreateDataSourceFromS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDataSourceFromS3CommandError
 */
const de_CreateDataSourceFromS3CommandError = async (
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
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateEvaluationCommand
 */
export const de_CreateEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEvaluationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEvaluationOutput(data, context);
  const response: CreateEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateEvaluationCommandError
 */
const de_CreateEvaluationCommandError = async (
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
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateMLModelCommand
 */
export const de_CreateMLModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMLModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateMLModelOutput(data, context);
  const response: CreateMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateMLModelCommandError
 */
const de_CreateMLModelCommandError = async (
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
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.machinelearning#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateRealtimeEndpointCommand
 */
export const de_CreateRealtimeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRealtimeEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRealtimeEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRealtimeEndpointOutput(data, context);
  const response: CreateRealtimeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateRealtimeEndpointCommandError
 */
const de_CreateRealtimeEndpointCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteBatchPredictionCommand
 */
export const de_DeleteBatchPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBatchPredictionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBatchPredictionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteBatchPredictionOutput(data, context);
  const response: DeleteBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteBatchPredictionCommandError
 */
const de_DeleteBatchPredictionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteDataSourceCommand
 */
export const de_DeleteDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDataSourceOutput(data, context);
  const response: DeleteDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDataSourceCommandError
 */
const de_DeleteDataSourceCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteEvaluationCommand
 */
export const de_DeleteEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEvaluationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEvaluationOutput(data, context);
  const response: DeleteEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteEvaluationCommandError
 */
const de_DeleteEvaluationCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteMLModelCommand
 */
export const de_DeleteMLModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteMLModelOutput(data, context);
  const response: DeleteMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteMLModelCommandError
 */
const de_DeleteMLModelCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteRealtimeEndpointCommand
 */
export const de_DeleteRealtimeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRealtimeEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRealtimeEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteRealtimeEndpointOutput(data, context);
  const response: DeleteRealtimeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteRealtimeEndpointCommandError
 */
const de_DeleteRealtimeEndpointCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1DeleteTagsCommand
 */
export const de_DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteTagsOutput(data, context);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteTagsCommandError
 */
const de_DeleteTagsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidTagException":
    case "com.amazonaws.machinelearning#InvalidTagException":
      throw await de_InvalidTagExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1DescribeBatchPredictionsCommand
 */
export const de_DescribeBatchPredictionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBatchPredictionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBatchPredictionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBatchPredictionsOutput(data, context);
  const response: DescribeBatchPredictionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeBatchPredictionsCommandError
 */
const de_DescribeBatchPredictionsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeDataSourcesCommand
 */
export const de_DescribeDataSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataSourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDataSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDataSourcesOutput(data, context);
  const response: DescribeDataSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDataSourcesCommandError
 */
const de_DescribeDataSourcesCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeEvaluationsCommand
 */
export const de_DescribeEvaluationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEvaluationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEvaluationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEvaluationsOutput(data, context);
  const response: DescribeEvaluationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeEvaluationsCommandError
 */
const de_DescribeEvaluationsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeMLModelsCommand
 */
export const de_DescribeMLModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMLModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMLModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMLModelsOutput(data, context);
  const response: DescribeMLModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMLModelsCommandError
 */
const de_DescribeMLModelsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeTagsCommand
 */
export const de_DescribeTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTagsOutput(data, context);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeTagsCommandError
 */
const de_DescribeTagsCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetBatchPredictionCommand
 */
export const de_GetBatchPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBatchPredictionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetBatchPredictionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetBatchPredictionOutput(data, context);
  const response: GetBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetBatchPredictionCommandError
 */
const de_GetBatchPredictionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetDataSourceCommand
 */
export const de_GetDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDataSourceOutput(data, context);
  const response: GetDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDataSourceCommandError
 */
const de_GetDataSourceCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetEvaluationCommand
 */
export const de_GetEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvaluationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEvaluationOutput(data, context);
  const response: GetEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetEvaluationCommandError
 */
const de_GetEvaluationCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1GetMLModelCommand
 */
export const de_GetMLModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMLModelOutput(data, context);
  const response: GetMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetMLModelCommandError
 */
const de_GetMLModelCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1PredictCommand
 */
export const de_PredictCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PredictCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PredictCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PredictOutput(data, context);
  const response: PredictCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PredictCommandError
 */
const de_PredictCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.machinelearning#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "PredictorNotMountedException":
    case "com.amazonaws.machinelearning#PredictorNotMountedException":
      throw await de_PredictorNotMountedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1UpdateBatchPredictionCommand
 */
export const de_UpdateBatchPredictionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBatchPredictionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateBatchPredictionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateBatchPredictionOutput(data, context);
  const response: UpdateBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateBatchPredictionCommandError
 */
const de_UpdateBatchPredictionCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1UpdateDataSourceCommand
 */
export const de_UpdateDataSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataSourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDataSourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDataSourceOutput(data, context);
  const response: UpdateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDataSourceCommandError
 */
const de_UpdateDataSourceCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1UpdateEvaluationCommand
 */
export const de_UpdateEvaluationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEvaluationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEvaluationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEvaluationOutput(data, context);
  const response: UpdateEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateEvaluationCommandError
 */
const de_UpdateEvaluationCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1UpdateMLModelCommand
 */
export const de_UpdateMLModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMLModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMLModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateMLModelOutput(data, context);
  const response: UpdateMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateMLModelCommandError
 */
const de_UpdateMLModelCommandError = async (
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
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.machinelearning#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.machinelearning#ResourceNotFoundException":
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
 * deserializeAws_json1_1IdempotentParameterMismatchExceptionRes
 */
const de_IdempotentParameterMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_IdempotentParameterMismatchException(body, context);
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServerException(body, context);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
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
 * deserializeAws_json1_1InvalidTagExceptionRes
 */
const de_InvalidTagExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidTagException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidTagException(body, context);
  const exception = new InvalidTagException({
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
 * deserializeAws_json1_1PredictorNotMountedExceptionRes
 */
const de_PredictorNotMountedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PredictorNotMountedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PredictorNotMountedException(body, context);
  const exception = new PredictorNotMountedException({
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
 * deserializeAws_json1_1TagLimitExceededExceptionRes
 */
const de_TagLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TagLimitExceededException(body, context);
  const exception = new TagLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AddTagsInput
 */
const se_AddTagsInput = (input: AddTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateBatchPredictionInput
 */
const se_CreateBatchPredictionInput = (input: CreateBatchPredictionInput, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1CreateDataSourceFromRDSInput
 */
const se_CreateDataSourceFromRDSInput = (input: CreateDataSourceFromRDSInput, context: __SerdeContext): any => {
  return {
    ...(input.ComputeStatistics != null && { ComputeStatistics: input.ComputeStatistics }),
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.DataSourceName != null && { DataSourceName: input.DataSourceName }),
    ...(input.RDSData != null && { RDSData: se_RDSDataSpec(input.RDSData, context) }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

/**
 * serializeAws_json1_1CreateDataSourceFromRedshiftInput
 */
const se_CreateDataSourceFromRedshiftInput = (
  input: CreateDataSourceFromRedshiftInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComputeStatistics != null && { ComputeStatistics: input.ComputeStatistics }),
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.DataSourceName != null && { DataSourceName: input.DataSourceName }),
    ...(input.DataSpec != null && { DataSpec: se_RedshiftDataSpec(input.DataSpec, context) }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
  };
};

/**
 * serializeAws_json1_1CreateDataSourceFromS3Input
 */
const se_CreateDataSourceFromS3Input = (input: CreateDataSourceFromS3Input, context: __SerdeContext): any => {
  return {
    ...(input.ComputeStatistics != null && { ComputeStatistics: input.ComputeStatistics }),
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.DataSourceName != null && { DataSourceName: input.DataSourceName }),
    ...(input.DataSpec != null && { DataSpec: se_S3DataSpec(input.DataSpec, context) }),
  };
};

/**
 * serializeAws_json1_1CreateEvaluationInput
 */
const se_CreateEvaluationInput = (input: CreateEvaluationInput, context: __SerdeContext): any => {
  return {
    ...(input.EvaluationDataSourceId != null && { EvaluationDataSourceId: input.EvaluationDataSourceId }),
    ...(input.EvaluationId != null && { EvaluationId: input.EvaluationId }),
    ...(input.EvaluationName != null && { EvaluationName: input.EvaluationName }),
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
  };
};

/**
 * serializeAws_json1_1CreateMLModelInput
 */
const se_CreateMLModelInput = (input: CreateMLModelInput, context: __SerdeContext): any => {
  return {
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
    ...(input.MLModelName != null && { MLModelName: input.MLModelName }),
    ...(input.MLModelType != null && { MLModelType: input.MLModelType }),
    ...(input.Parameters != null && { Parameters: se_TrainingParameters(input.Parameters, context) }),
    ...(input.Recipe != null && { Recipe: input.Recipe }),
    ...(input.RecipeUri != null && { RecipeUri: input.RecipeUri }),
    ...(input.TrainingDataSourceId != null && { TrainingDataSourceId: input.TrainingDataSourceId }),
  };
};

/**
 * serializeAws_json1_1CreateRealtimeEndpointInput
 */
const se_CreateRealtimeEndpointInput = (input: CreateRealtimeEndpointInput, context: __SerdeContext): any => {
  return {
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
  };
};

/**
 * serializeAws_json1_1DeleteBatchPredictionInput
 */
const se_DeleteBatchPredictionInput = (input: DeleteBatchPredictionInput, context: __SerdeContext): any => {
  return {
    ...(input.BatchPredictionId != null && { BatchPredictionId: input.BatchPredictionId }),
  };
};

/**
 * serializeAws_json1_1DeleteDataSourceInput
 */
const se_DeleteDataSourceInput = (input: DeleteDataSourceInput, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
  };
};

/**
 * serializeAws_json1_1DeleteEvaluationInput
 */
const se_DeleteEvaluationInput = (input: DeleteEvaluationInput, context: __SerdeContext): any => {
  return {
    ...(input.EvaluationId != null && { EvaluationId: input.EvaluationId }),
  };
};

/**
 * serializeAws_json1_1DeleteMLModelInput
 */
const se_DeleteMLModelInput = (input: DeleteMLModelInput, context: __SerdeContext): any => {
  return {
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
  };
};

/**
 * serializeAws_json1_1DeleteRealtimeEndpointInput
 */
const se_DeleteRealtimeEndpointInput = (input: DeleteRealtimeEndpointInput, context: __SerdeContext): any => {
  return {
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
  };
};

/**
 * serializeAws_json1_1DeleteTagsInput
 */
const se_DeleteTagsInput = (input: DeleteTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeBatchPredictionsInput
 */
const se_DescribeBatchPredictionsInput = (input: DescribeBatchPredictionsInput, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1DescribeDataSourcesInput
 */
const se_DescribeDataSourcesInput = (input: DescribeDataSourcesInput, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1DescribeEvaluationsInput
 */
const se_DescribeEvaluationsInput = (input: DescribeEvaluationsInput, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1DescribeMLModelsInput
 */
const se_DescribeMLModelsInput = (input: DescribeMLModelsInput, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1DescribeTagsInput
 */
const se_DescribeTagsInput = (input: DescribeTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_json1_1EDPSecurityGroupIds
 */
const se_EDPSecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetBatchPredictionInput
 */
const se_GetBatchPredictionInput = (input: GetBatchPredictionInput, context: __SerdeContext): any => {
  return {
    ...(input.BatchPredictionId != null && { BatchPredictionId: input.BatchPredictionId }),
  };
};

/**
 * serializeAws_json1_1GetDataSourceInput
 */
const se_GetDataSourceInput = (input: GetDataSourceInput, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.Verbose != null && { Verbose: input.Verbose }),
  };
};

/**
 * serializeAws_json1_1GetEvaluationInput
 */
const se_GetEvaluationInput = (input: GetEvaluationInput, context: __SerdeContext): any => {
  return {
    ...(input.EvaluationId != null && { EvaluationId: input.EvaluationId }),
  };
};

/**
 * serializeAws_json1_1GetMLModelInput
 */
const se_GetMLModelInput = (input: GetMLModelInput, context: __SerdeContext): any => {
  return {
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
    ...(input.Verbose != null && { Verbose: input.Verbose }),
  };
};

/**
 * serializeAws_json1_1PredictInput
 */
const se_PredictInput = (input: PredictInput, context: __SerdeContext): any => {
  return {
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
    ...(input.PredictEndpoint != null && { PredictEndpoint: input.PredictEndpoint }),
    ...(input.Record != null && { Record: se_Record(input.Record, context) }),
  };
};

/**
 * serializeAws_json1_1RDSDatabase
 */
const se_RDSDatabase = (input: RDSDatabase, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.InstanceIdentifier != null && { InstanceIdentifier: input.InstanceIdentifier }),
  };
};

/**
 * serializeAws_json1_1RDSDatabaseCredentials
 */
const se_RDSDatabaseCredentials = (input: RDSDatabaseCredentials, context: __SerdeContext): any => {
  return {
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1RDSDataSpec
 */
const se_RDSDataSpec = (input: RDSDataSpec, context: __SerdeContext): any => {
  return {
    ...(input.DataRearrangement != null && { DataRearrangement: input.DataRearrangement }),
    ...(input.DataSchema != null && { DataSchema: input.DataSchema }),
    ...(input.DataSchemaUri != null && { DataSchemaUri: input.DataSchemaUri }),
    ...(input.DatabaseCredentials != null && {
      DatabaseCredentials: se_RDSDatabaseCredentials(input.DatabaseCredentials, context),
    }),
    ...(input.DatabaseInformation != null && {
      DatabaseInformation: se_RDSDatabase(input.DatabaseInformation, context),
    }),
    ...(input.ResourceRole != null && { ResourceRole: input.ResourceRole }),
    ...(input.S3StagingLocation != null && { S3StagingLocation: input.S3StagingLocation }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: se_EDPSecurityGroupIds(input.SecurityGroupIds, context),
    }),
    ...(input.SelectSqlQuery != null && { SelectSqlQuery: input.SelectSqlQuery }),
    ...(input.ServiceRole != null && { ServiceRole: input.ServiceRole }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
  };
};

/**
 * serializeAws_json1_1Record
 */
const se_Record = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1RedshiftDatabase
 */
const se_RedshiftDatabase = (input: RedshiftDatabase, context: __SerdeContext): any => {
  return {
    ...(input.ClusterIdentifier != null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
  };
};

/**
 * serializeAws_json1_1RedshiftDatabaseCredentials
 */
const se_RedshiftDatabaseCredentials = (input: RedshiftDatabaseCredentials, context: __SerdeContext): any => {
  return {
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1RedshiftDataSpec
 */
const se_RedshiftDataSpec = (input: RedshiftDataSpec, context: __SerdeContext): any => {
  return {
    ...(input.DataRearrangement != null && { DataRearrangement: input.DataRearrangement }),
    ...(input.DataSchema != null && { DataSchema: input.DataSchema }),
    ...(input.DataSchemaUri != null && { DataSchemaUri: input.DataSchemaUri }),
    ...(input.DatabaseCredentials != null && {
      DatabaseCredentials: se_RedshiftDatabaseCredentials(input.DatabaseCredentials, context),
    }),
    ...(input.DatabaseInformation != null && {
      DatabaseInformation: se_RedshiftDatabase(input.DatabaseInformation, context),
    }),
    ...(input.S3StagingLocation != null && { S3StagingLocation: input.S3StagingLocation }),
    ...(input.SelectSqlQuery != null && { SelectSqlQuery: input.SelectSqlQuery }),
  };
};

/**
 * serializeAws_json1_1S3DataSpec
 */
const se_S3DataSpec = (input: S3DataSpec, context: __SerdeContext): any => {
  return {
    ...(input.DataLocationS3 != null && { DataLocationS3: input.DataLocationS3 }),
    ...(input.DataRearrangement != null && { DataRearrangement: input.DataRearrangement }),
    ...(input.DataSchema != null && { DataSchema: input.DataSchema }),
    ...(input.DataSchemaLocationS3 != null && { DataSchemaLocationS3: input.DataSchemaLocationS3 }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TrainingParameters
 */
const se_TrainingParameters = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1UpdateBatchPredictionInput
 */
const se_UpdateBatchPredictionInput = (input: UpdateBatchPredictionInput, context: __SerdeContext): any => {
  return {
    ...(input.BatchPredictionId != null && { BatchPredictionId: input.BatchPredictionId }),
    ...(input.BatchPredictionName != null && { BatchPredictionName: input.BatchPredictionName }),
  };
};

/**
 * serializeAws_json1_1UpdateDataSourceInput
 */
const se_UpdateDataSourceInput = (input: UpdateDataSourceInput, context: __SerdeContext): any => {
  return {
    ...(input.DataSourceId != null && { DataSourceId: input.DataSourceId }),
    ...(input.DataSourceName != null && { DataSourceName: input.DataSourceName }),
  };
};

/**
 * serializeAws_json1_1UpdateEvaluationInput
 */
const se_UpdateEvaluationInput = (input: UpdateEvaluationInput, context: __SerdeContext): any => {
  return {
    ...(input.EvaluationId != null && { EvaluationId: input.EvaluationId }),
    ...(input.EvaluationName != null && { EvaluationName: input.EvaluationName }),
  };
};

/**
 * serializeAws_json1_1UpdateMLModelInput
 */
const se_UpdateMLModelInput = (input: UpdateMLModelInput, context: __SerdeContext): any => {
  return {
    ...(input.MLModelId != null && { MLModelId: input.MLModelId }),
    ...(input.MLModelName != null && { MLModelName: input.MLModelName }),
    ...(input.ScoreThreshold != null && { ScoreThreshold: __serializeFloat(input.ScoreThreshold) }),
  };
};

/**
 * deserializeAws_json1_1AddTagsOutput
 */
const de_AddTagsOutput = (output: any, context: __SerdeContext): AddTagsOutput => {
  return {
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1BatchPrediction
 */
const de_BatchPrediction = (output: any, context: __SerdeContext): BatchPrediction => {
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

/**
 * deserializeAws_json1_1BatchPredictions
 */
const de_BatchPredictions = (output: any, context: __SerdeContext): BatchPrediction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchPrediction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateBatchPredictionOutput
 */
const de_CreateBatchPredictionOutput = (output: any, context: __SerdeContext): CreateBatchPredictionOutput => {
  return {
    BatchPredictionId: __expectString(output.BatchPredictionId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDataSourceFromRDSOutput
 */
const de_CreateDataSourceFromRDSOutput = (output: any, context: __SerdeContext): CreateDataSourceFromRDSOutput => {
  return {
    DataSourceId: __expectString(output.DataSourceId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDataSourceFromRedshiftOutput
 */
const de_CreateDataSourceFromRedshiftOutput = (
  output: any,
  context: __SerdeContext
): CreateDataSourceFromRedshiftOutput => {
  return {
    DataSourceId: __expectString(output.DataSourceId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDataSourceFromS3Output
 */
const de_CreateDataSourceFromS3Output = (output: any, context: __SerdeContext): CreateDataSourceFromS3Output => {
  return {
    DataSourceId: __expectString(output.DataSourceId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateEvaluationOutput
 */
const de_CreateEvaluationOutput = (output: any, context: __SerdeContext): CreateEvaluationOutput => {
  return {
    EvaluationId: __expectString(output.EvaluationId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateMLModelOutput
 */
const de_CreateMLModelOutput = (output: any, context: __SerdeContext): CreateMLModelOutput => {
  return {
    MLModelId: __expectString(output.MLModelId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateRealtimeEndpointOutput
 */
const de_CreateRealtimeEndpointOutput = (output: any, context: __SerdeContext): CreateRealtimeEndpointOutput => {
  return {
    MLModelId: __expectString(output.MLModelId),
    RealtimeEndpointInfo:
      output.RealtimeEndpointInfo != null ? de_RealtimeEndpointInfo(output.RealtimeEndpointInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DataSource
 */
const de_DataSource = (output: any, context: __SerdeContext): DataSource => {
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
    RDSMetadata: output.RDSMetadata != null ? de_RDSMetadata(output.RDSMetadata, context) : undefined,
    RedshiftMetadata:
      output.RedshiftMetadata != null ? de_RedshiftMetadata(output.RedshiftMetadata, context) : undefined,
    RoleARN: __expectString(output.RoleARN),
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedAt))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DataSources
 */
const de_DataSources = (output: any, context: __SerdeContext): DataSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeleteBatchPredictionOutput
 */
const de_DeleteBatchPredictionOutput = (output: any, context: __SerdeContext): DeleteBatchPredictionOutput => {
  return {
    BatchPredictionId: __expectString(output.BatchPredictionId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteDataSourceOutput
 */
const de_DeleteDataSourceOutput = (output: any, context: __SerdeContext): DeleteDataSourceOutput => {
  return {
    DataSourceId: __expectString(output.DataSourceId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteEvaluationOutput
 */
const de_DeleteEvaluationOutput = (output: any, context: __SerdeContext): DeleteEvaluationOutput => {
  return {
    EvaluationId: __expectString(output.EvaluationId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteMLModelOutput
 */
const de_DeleteMLModelOutput = (output: any, context: __SerdeContext): DeleteMLModelOutput => {
  return {
    MLModelId: __expectString(output.MLModelId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteRealtimeEndpointOutput
 */
const de_DeleteRealtimeEndpointOutput = (output: any, context: __SerdeContext): DeleteRealtimeEndpointOutput => {
  return {
    MLModelId: __expectString(output.MLModelId),
    RealtimeEndpointInfo:
      output.RealtimeEndpointInfo != null ? de_RealtimeEndpointInfo(output.RealtimeEndpointInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteTagsOutput
 */
const de_DeleteTagsOutput = (output: any, context: __SerdeContext): DeleteTagsOutput => {
  return {
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBatchPredictionsOutput
 */
const de_DescribeBatchPredictionsOutput = (output: any, context: __SerdeContext): DescribeBatchPredictionsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Results: output.Results != null ? de_BatchPredictions(output.Results, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDataSourcesOutput
 */
const de_DescribeDataSourcesOutput = (output: any, context: __SerdeContext): DescribeDataSourcesOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Results: output.Results != null ? de_DataSources(output.Results, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeEvaluationsOutput
 */
const de_DescribeEvaluationsOutput = (output: any, context: __SerdeContext): DescribeEvaluationsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Results: output.Results != null ? de_Evaluations(output.Results, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMLModelsOutput
 */
const de_DescribeMLModelsOutput = (output: any, context: __SerdeContext): DescribeMLModelsOutput => {
  return {
    NextToken: __expectString(output.NextToken),
    Results: output.Results != null ? de_MLModels(output.Results, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeTagsOutput
 */
const de_DescribeTagsOutput = (output: any, context: __SerdeContext): DescribeTagsOutput => {
  return {
    ResourceId: __expectString(output.ResourceId),
    ResourceType: __expectString(output.ResourceType),
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DetailsMap
 */
const de_DetailsMap = (output: any, context: __SerdeContext): Record<string, string> => {
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

/**
 * deserializeAws_json1_1Evaluation
 */
const de_Evaluation = (output: any, context: __SerdeContext): Evaluation => {
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
      output.PerformanceMetrics != null ? de_PerformanceMetrics(output.PerformanceMetrics, context) : undefined,
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedAt))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1Evaluations
 */
const de_Evaluations = (output: any, context: __SerdeContext): Evaluation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Evaluation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetBatchPredictionOutput
 */
const de_GetBatchPredictionOutput = (output: any, context: __SerdeContext): GetBatchPredictionOutput => {
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

/**
 * deserializeAws_json1_1GetDataSourceOutput
 */
const de_GetDataSourceOutput = (output: any, context: __SerdeContext): GetDataSourceOutput => {
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
    RDSMetadata: output.RDSMetadata != null ? de_RDSMetadata(output.RDSMetadata, context) : undefined,
    RedshiftMetadata:
      output.RedshiftMetadata != null ? de_RedshiftMetadata(output.RedshiftMetadata, context) : undefined,
    RoleARN: __expectString(output.RoleARN),
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedAt))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1GetEvaluationOutput
 */
const de_GetEvaluationOutput = (output: any, context: __SerdeContext): GetEvaluationOutput => {
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
      output.PerformanceMetrics != null ? de_PerformanceMetrics(output.PerformanceMetrics, context) : undefined,
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedAt))) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1GetMLModelOutput
 */
const de_GetMLModelOutput = (output: any, context: __SerdeContext): GetMLModelOutput => {
  return {
    ComputeTime: __expectLong(output.ComputeTime),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CreatedByIamUser: __expectString(output.CreatedByIamUser),
    EndpointInfo: output.EndpointInfo != null ? de_RealtimeEndpointInfo(output.EndpointInfo, context) : undefined,
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
      output.TrainingParameters != null ? de_TrainingParameters(output.TrainingParameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IdempotentParameterMismatchException
 */
const de_IdempotentParameterMismatchException = (
  output: any,
  context: __SerdeContext
): IdempotentParameterMismatchException => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidInputException
 */
const de_InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidTagException
 */
const de_InvalidTagException = (output: any, context: __SerdeContext): InvalidTagException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MLModel
 */
const de_MLModel = (output: any, context: __SerdeContext): MLModel => {
  return {
    Algorithm: __expectString(output.Algorithm),
    ComputeTime: __expectLong(output.ComputeTime),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    CreatedByIamUser: __expectString(output.CreatedByIamUser),
    EndpointInfo: output.EndpointInfo != null ? de_RealtimeEndpointInfo(output.EndpointInfo, context) : undefined,
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
      output.TrainingParameters != null ? de_TrainingParameters(output.TrainingParameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MLModels
 */
const de_MLModels = (output: any, context: __SerdeContext): MLModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MLModel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PerformanceMetrics
 */
const de_PerformanceMetrics = (output: any, context: __SerdeContext): PerformanceMetrics => {
  return {
    Properties: output.Properties != null ? de_PerformanceMetricsProperties(output.Properties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PerformanceMetricsProperties
 */
const de_PerformanceMetricsProperties = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1Prediction
 */
const de_Prediction = (output: any, context: __SerdeContext): Prediction => {
  return {
    details: output.details != null ? de_DetailsMap(output.details, context) : undefined,
    predictedLabel: __expectString(output.predictedLabel),
    predictedScores:
      output.predictedScores != null ? de_ScoreValuePerLabelMap(output.predictedScores, context) : undefined,
    predictedValue: __limitedParseFloat32(output.predictedValue),
  } as any;
};

/**
 * deserializeAws_json1_1PredictorNotMountedException
 */
const de_PredictorNotMountedException = (output: any, context: __SerdeContext): PredictorNotMountedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PredictOutput
 */
const de_PredictOutput = (output: any, context: __SerdeContext): PredictOutput => {
  return {
    Prediction: output.Prediction != null ? de_Prediction(output.Prediction, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RDSDatabase
 */
const de_RDSDatabase = (output: any, context: __SerdeContext): RDSDatabase => {
  return {
    DatabaseName: __expectString(output.DatabaseName),
    InstanceIdentifier: __expectString(output.InstanceIdentifier),
  } as any;
};

/**
 * deserializeAws_json1_1RDSMetadata
 */
const de_RDSMetadata = (output: any, context: __SerdeContext): RDSMetadata => {
  return {
    DataPipelineId: __expectString(output.DataPipelineId),
    Database: output.Database != null ? de_RDSDatabase(output.Database, context) : undefined,
    DatabaseUserName: __expectString(output.DatabaseUserName),
    ResourceRole: __expectString(output.ResourceRole),
    SelectSqlQuery: __expectString(output.SelectSqlQuery),
    ServiceRole: __expectString(output.ServiceRole),
  } as any;
};

/**
 * deserializeAws_json1_1RealtimeEndpointInfo
 */
const de_RealtimeEndpointInfo = (output: any, context: __SerdeContext): RealtimeEndpointInfo => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    EndpointStatus: __expectString(output.EndpointStatus),
    EndpointUrl: __expectString(output.EndpointUrl),
    PeakRequestsPerSecond: __expectInt32(output.PeakRequestsPerSecond),
  } as any;
};

/**
 * deserializeAws_json1_1RedshiftDatabase
 */
const de_RedshiftDatabase = (output: any, context: __SerdeContext): RedshiftDatabase => {
  return {
    ClusterIdentifier: __expectString(output.ClusterIdentifier),
    DatabaseName: __expectString(output.DatabaseName),
  } as any;
};

/**
 * deserializeAws_json1_1RedshiftMetadata
 */
const de_RedshiftMetadata = (output: any, context: __SerdeContext): RedshiftMetadata => {
  return {
    DatabaseUserName: __expectString(output.DatabaseUserName),
    RedshiftDatabase:
      output.RedshiftDatabase != null ? de_RedshiftDatabase(output.RedshiftDatabase, context) : undefined,
    SelectSqlQuery: __expectString(output.SelectSqlQuery),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    code: __expectInt32(output.code),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ScoreValuePerLabelMap
 */
const de_ScoreValuePerLabelMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseFloat32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagLimitExceededException
 */
const de_TagLimitExceededException = (output: any, context: __SerdeContext): TagLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
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
 * deserializeAws_json1_1TrainingParameters
 */
const de_TrainingParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1UpdateBatchPredictionOutput
 */
const de_UpdateBatchPredictionOutput = (output: any, context: __SerdeContext): UpdateBatchPredictionOutput => {
  return {
    BatchPredictionId: __expectString(output.BatchPredictionId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateDataSourceOutput
 */
const de_UpdateDataSourceOutput = (output: any, context: __SerdeContext): UpdateDataSourceOutput => {
  return {
    DataSourceId: __expectString(output.DataSourceId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateEvaluationOutput
 */
const de_UpdateEvaluationOutput = (output: any, context: __SerdeContext): UpdateEvaluationOutput => {
  return {
    EvaluationId: __expectString(output.EvaluationId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateMLModelOutput
 */
const de_UpdateMLModelOutput = (output: any, context: __SerdeContext): UpdateMLModelOutput => {
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
