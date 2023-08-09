// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
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
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  BatchPrediction,
  CreateBatchPredictionInput,
  CreateDataSourceFromRDSInput,
  CreateDataSourceFromRedshiftInput,
  CreateDataSourceFromS3Input,
  CreateEvaluationInput,
  CreateMLModelInput,
  CreateRealtimeEndpointInput,
  CreateRealtimeEndpointOutput,
  DataSource,
  DeleteBatchPredictionInput,
  DeleteDataSourceInput,
  DeleteEvaluationInput,
  DeleteMLModelInput,
  DeleteRealtimeEndpointInput,
  DeleteRealtimeEndpointOutput,
  DeleteTagsInput,
  DescribeBatchPredictionsInput,
  DescribeBatchPredictionsOutput,
  DescribeDataSourcesInput,
  DescribeDataSourcesOutput,
  DescribeEvaluationsInput,
  DescribeEvaluationsOutput,
  DescribeMLModelsInput,
  DescribeMLModelsOutput,
  DescribeTagsInput,
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
  PredictInput,
  Prediction,
  PredictorNotMountedException,
  PredictOutput,
  RDSDatabase,
  RDSDatabaseCredentials,
  RDSDataSpec,
  RealtimeEndpointInfo,
  RedshiftDatabase,
  RedshiftDatabaseCredentials,
  RedshiftDataSpec,
  ResourceNotFoundException,
  S3DataSpec,
  Tag,
  TagLimitExceededException,
  UpdateBatchPredictionInput,
  UpdateDataSourceInput,
  UpdateEvaluationInput,
  UpdateMLModelInput,
} from "../models/models_0";

/**
 * serializeAws_json1_1AddTagsCommand
 */
export const se_AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBatchPredictionCommand
 */
export const se_CreateBatchPredictionCommand = async (
  input: CreateBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBatchPrediction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDataSourceFromRDSCommand
 */
export const se_CreateDataSourceFromRDSCommand = async (
  input: CreateDataSourceFromRDSCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataSourceFromRDS");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDataSourceFromRedshiftCommand
 */
export const se_CreateDataSourceFromRedshiftCommand = async (
  input: CreateDataSourceFromRedshiftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataSourceFromRedshift");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDataSourceFromS3Command
 */
export const se_CreateDataSourceFromS3Command = async (
  input: CreateDataSourceFromS3CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataSourceFromS3");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEvaluationCommand
 */
export const se_CreateEvaluationCommand = async (
  input: CreateEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEvaluation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMLModelCommand
 */
export const se_CreateMLModelCommand = async (
  input: CreateMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateMLModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRealtimeEndpointCommand
 */
export const se_CreateRealtimeEndpointCommand = async (
  input: CreateRealtimeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRealtimeEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBatchPredictionCommand
 */
export const se_DeleteBatchPredictionCommand = async (
  input: DeleteBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBatchPrediction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDataSourceCommand
 */
export const se_DeleteDataSourceCommand = async (
  input: DeleteDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDataSource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEvaluationCommand
 */
export const se_DeleteEvaluationCommand = async (
  input: DeleteEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEvaluation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMLModelCommand
 */
export const se_DeleteMLModelCommand = async (
  input: DeleteMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMLModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRealtimeEndpointCommand
 */
export const se_DeleteRealtimeEndpointCommand = async (
  input: DeleteRealtimeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRealtimeEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTagsCommand
 */
export const se_DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBatchPredictionsCommand
 */
export const se_DescribeBatchPredictionsCommand = async (
  input: DescribeBatchPredictionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBatchPredictions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDataSourcesCommand
 */
export const se_DescribeDataSourcesCommand = async (
  input: DescribeDataSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDataSources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEvaluationsCommand
 */
export const se_DescribeEvaluationsCommand = async (
  input: DescribeEvaluationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEvaluations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMLModelsCommand
 */
export const se_DescribeMLModelsCommand = async (
  input: DescribeMLModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMLModels");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTagsCommand
 */
export const se_DescribeTagsCommand = async (
  input: DescribeTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetBatchPredictionCommand
 */
export const se_GetBatchPredictionCommand = async (
  input: GetBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetBatchPrediction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDataSourceCommand
 */
export const se_GetDataSourceCommand = async (
  input: GetDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDataSource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetEvaluationCommand
 */
export const se_GetEvaluationCommand = async (
  input: GetEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEvaluation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMLModelCommand
 */
export const se_GetMLModelCommand = async (
  input: GetMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMLModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PredictCommand
 */
export const se_PredictCommand = async (
  input: PredictCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("Predict");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateBatchPredictionCommand
 */
export const se_UpdateBatchPredictionCommand = async (
  input: UpdateBatchPredictionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateBatchPrediction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDataSourceCommand
 */
export const se_UpdateDataSourceCommand = async (
  input: UpdateDataSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDataSource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEvaluationCommand
 */
export const se_UpdateEvaluationCommand = async (
  input: UpdateEvaluationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEvaluation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMLModelCommand
 */
export const se_UpdateMLModelCommand = async (
  input: UpdateMLModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMLModel");
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
  contents = _json(data);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDataSourceFromRDSCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDataSourceFromRedshiftCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDataSourceFromS3CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateBatchPredictionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDataSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateEvaluationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateMLModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new TagLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AddTagsInput omitted.

// se_CreateBatchPredictionInput omitted.

// se_CreateDataSourceFromRDSInput omitted.

// se_CreateDataSourceFromRedshiftInput omitted.

// se_CreateDataSourceFromS3Input omitted.

// se_CreateEvaluationInput omitted.

// se_CreateMLModelInput omitted.

// se_CreateRealtimeEndpointInput omitted.

// se_DeleteBatchPredictionInput omitted.

// se_DeleteDataSourceInput omitted.

// se_DeleteEvaluationInput omitted.

// se_DeleteMLModelInput omitted.

// se_DeleteRealtimeEndpointInput omitted.

// se_DeleteTagsInput omitted.

// se_DescribeBatchPredictionsInput omitted.

// se_DescribeDataSourcesInput omitted.

// se_DescribeEvaluationsInput omitted.

// se_DescribeMLModelsInput omitted.

// se_DescribeTagsInput omitted.

// se_EDPSecurityGroupIds omitted.

// se_GetBatchPredictionInput omitted.

// se_GetDataSourceInput omitted.

// se_GetEvaluationInput omitted.

// se_GetMLModelInput omitted.

// se_PredictInput omitted.

// se_RDSDatabase omitted.

// se_RDSDatabaseCredentials omitted.

// se_RDSDataSpec omitted.

// se_Record omitted.

// se_RedshiftDatabase omitted.

// se_RedshiftDatabaseCredentials omitted.

// se_RedshiftDataSpec omitted.

// se_S3DataSpec omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TrainingParameters omitted.

// se_UpdateBatchPredictionInput omitted.

// se_UpdateDataSourceInput omitted.

// se_UpdateEvaluationInput omitted.

/**
 * serializeAws_json1_1UpdateMLModelInput
 */
const se_UpdateMLModelInput = (input: UpdateMLModelInput, context: __SerdeContext): any => {
  return take(input, {
    MLModelId: [],
    MLModelName: [],
    ScoreThreshold: __serializeFloat,
  });
};

// de_AddTagsOutput omitted.

/**
 * deserializeAws_json1_1BatchPrediction
 */
const de_BatchPrediction = (output: any, context: __SerdeContext): BatchPrediction => {
  return take(output, {
    BatchPredictionDataSourceId: __expectString,
    BatchPredictionId: __expectString,
    ComputeTime: __expectLong,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedByIamUser: __expectString,
    FinishedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataLocationS3: __expectString,
    InvalidRecordCount: __expectLong,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MLModelId: __expectString,
    Message: __expectString,
    Name: __expectString,
    OutputUri: __expectString,
    StartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    TotalRecordCount: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchPredictions
 */
const de_BatchPredictions = (output: any, context: __SerdeContext): BatchPrediction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BatchPrediction(entry, context);
    });
  return retVal;
};

// de_CreateBatchPredictionOutput omitted.

// de_CreateDataSourceFromRDSOutput omitted.

// de_CreateDataSourceFromRedshiftOutput omitted.

// de_CreateDataSourceFromS3Output omitted.

// de_CreateEvaluationOutput omitted.

// de_CreateMLModelOutput omitted.

/**
 * deserializeAws_json1_1CreateRealtimeEndpointOutput
 */
const de_CreateRealtimeEndpointOutput = (output: any, context: __SerdeContext): CreateRealtimeEndpointOutput => {
  return take(output, {
    MLModelId: __expectString,
    RealtimeEndpointInfo: (_: any) => de_RealtimeEndpointInfo(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DataSource
 */
const de_DataSource = (output: any, context: __SerdeContext): DataSource => {
  return take(output, {
    ComputeStatistics: __expectBoolean,
    ComputeTime: __expectLong,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedByIamUser: __expectString,
    DataLocationS3: __expectString,
    DataRearrangement: __expectString,
    DataSizeInBytes: __expectLong,
    DataSourceId: __expectString,
    FinishedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Name: __expectString,
    NumberOfFiles: __expectLong,
    RDSMetadata: _json,
    RedshiftMetadata: _json,
    RoleARN: __expectString,
    StartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DataSources
 */
const de_DataSources = (output: any, context: __SerdeContext): DataSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataSource(entry, context);
    });
  return retVal;
};

// de_DeleteBatchPredictionOutput omitted.

// de_DeleteDataSourceOutput omitted.

// de_DeleteEvaluationOutput omitted.

// de_DeleteMLModelOutput omitted.

/**
 * deserializeAws_json1_1DeleteRealtimeEndpointOutput
 */
const de_DeleteRealtimeEndpointOutput = (output: any, context: __SerdeContext): DeleteRealtimeEndpointOutput => {
  return take(output, {
    MLModelId: __expectString,
    RealtimeEndpointInfo: (_: any) => de_RealtimeEndpointInfo(_, context),
  }) as any;
};

// de_DeleteTagsOutput omitted.

/**
 * deserializeAws_json1_1DescribeBatchPredictionsOutput
 */
const de_DescribeBatchPredictionsOutput = (output: any, context: __SerdeContext): DescribeBatchPredictionsOutput => {
  return take(output, {
    NextToken: __expectString,
    Results: (_: any) => de_BatchPredictions(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDataSourcesOutput
 */
const de_DescribeDataSourcesOutput = (output: any, context: __SerdeContext): DescribeDataSourcesOutput => {
  return take(output, {
    NextToken: __expectString,
    Results: (_: any) => de_DataSources(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEvaluationsOutput
 */
const de_DescribeEvaluationsOutput = (output: any, context: __SerdeContext): DescribeEvaluationsOutput => {
  return take(output, {
    NextToken: __expectString,
    Results: (_: any) => de_Evaluations(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeMLModelsOutput
 */
const de_DescribeMLModelsOutput = (output: any, context: __SerdeContext): DescribeMLModelsOutput => {
  return take(output, {
    NextToken: __expectString,
    Results: (_: any) => de_MLModels(_, context),
  }) as any;
};

// de_DescribeTagsOutput omitted.

// de_DetailsMap omitted.

/**
 * deserializeAws_json1_1Evaluation
 */
const de_Evaluation = (output: any, context: __SerdeContext): Evaluation => {
  return take(output, {
    ComputeTime: __expectLong,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedByIamUser: __expectString,
    EvaluationDataSourceId: __expectString,
    EvaluationId: __expectString,
    FinishedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataLocationS3: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MLModelId: __expectString,
    Message: __expectString,
    Name: __expectString,
    PerformanceMetrics: _json,
    StartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Evaluations
 */
const de_Evaluations = (output: any, context: __SerdeContext): Evaluation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Evaluation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetBatchPredictionOutput
 */
const de_GetBatchPredictionOutput = (output: any, context: __SerdeContext): GetBatchPredictionOutput => {
  return take(output, {
    BatchPredictionDataSourceId: __expectString,
    BatchPredictionId: __expectString,
    ComputeTime: __expectLong,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedByIamUser: __expectString,
    FinishedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataLocationS3: __expectString,
    InvalidRecordCount: __expectLong,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogUri: __expectString,
    MLModelId: __expectString,
    Message: __expectString,
    Name: __expectString,
    OutputUri: __expectString,
    StartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    TotalRecordCount: __expectLong,
  }) as any;
};

/**
 * deserializeAws_json1_1GetDataSourceOutput
 */
const de_GetDataSourceOutput = (output: any, context: __SerdeContext): GetDataSourceOutput => {
  return take(output, {
    ComputeStatistics: __expectBoolean,
    ComputeTime: __expectLong,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedByIamUser: __expectString,
    DataLocationS3: __expectString,
    DataRearrangement: __expectString,
    DataSizeInBytes: __expectLong,
    DataSourceId: __expectString,
    DataSourceSchema: __expectString,
    FinishedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogUri: __expectString,
    Message: __expectString,
    Name: __expectString,
    NumberOfFiles: __expectLong,
    RDSMetadata: _json,
    RedshiftMetadata: _json,
    RoleARN: __expectString,
    StartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetEvaluationOutput
 */
const de_GetEvaluationOutput = (output: any, context: __SerdeContext): GetEvaluationOutput => {
  return take(output, {
    ComputeTime: __expectLong,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedByIamUser: __expectString,
    EvaluationDataSourceId: __expectString,
    EvaluationId: __expectString,
    FinishedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataLocationS3: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogUri: __expectString,
    MLModelId: __expectString,
    Message: __expectString,
    Name: __expectString,
    PerformanceMetrics: _json,
    StartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetMLModelOutput
 */
const de_GetMLModelOutput = (output: any, context: __SerdeContext): GetMLModelOutput => {
  return take(output, {
    ComputeTime: __expectLong,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedByIamUser: __expectString,
    EndpointInfo: (_: any) => de_RealtimeEndpointInfo(_, context),
    FinishedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataLocationS3: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogUri: __expectString,
    MLModelId: __expectString,
    MLModelType: __expectString,
    Message: __expectString,
    Name: __expectString,
    Recipe: __expectString,
    Schema: __expectString,
    ScoreThreshold: __limitedParseFloat32,
    ScoreThresholdLastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SizeInBytes: __expectLong,
    StartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    TrainingDataSourceId: __expectString,
    TrainingParameters: _json,
  }) as any;
};

// de_IdempotentParameterMismatchException omitted.

// de_InternalServerException omitted.

// de_InvalidInputException omitted.

// de_InvalidTagException omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1MLModel
 */
const de_MLModel = (output: any, context: __SerdeContext): MLModel => {
  return take(output, {
    Algorithm: __expectString,
    ComputeTime: __expectLong,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedByIamUser: __expectString,
    EndpointInfo: (_: any) => de_RealtimeEndpointInfo(_, context),
    FinishedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputDataLocationS3: __expectString,
    LastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MLModelId: __expectString,
    MLModelType: __expectString,
    Message: __expectString,
    Name: __expectString,
    ScoreThreshold: __limitedParseFloat32,
    ScoreThresholdLastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SizeInBytes: __expectLong,
    StartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    TrainingDataSourceId: __expectString,
    TrainingParameters: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1MLModels
 */
const de_MLModels = (output: any, context: __SerdeContext): MLModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MLModel(entry, context);
    });
  return retVal;
};

// de_PerformanceMetrics omitted.

// de_PerformanceMetricsProperties omitted.

/**
 * deserializeAws_json1_1Prediction
 */
const de_Prediction = (output: any, context: __SerdeContext): Prediction => {
  return take(output, {
    details: _json,
    predictedLabel: __expectString,
    predictedScores: (_: any) => de_ScoreValuePerLabelMap(_, context),
    predictedValue: __limitedParseFloat32,
  }) as any;
};

// de_PredictorNotMountedException omitted.

/**
 * deserializeAws_json1_1PredictOutput
 */
const de_PredictOutput = (output: any, context: __SerdeContext): PredictOutput => {
  return take(output, {
    Prediction: (_: any) => de_Prediction(_, context),
  }) as any;
};

// de_RDSDatabase omitted.

// de_RDSMetadata omitted.

/**
 * deserializeAws_json1_1RealtimeEndpointInfo
 */
const de_RealtimeEndpointInfo = (output: any, context: __SerdeContext): RealtimeEndpointInfo => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointStatus: __expectString,
    EndpointUrl: __expectString,
    PeakRequestsPerSecond: __expectInt32,
  }) as any;
};

// de_RedshiftDatabase omitted.

// de_RedshiftMetadata omitted.

// de_ResourceNotFoundException omitted.

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

// de_Tag omitted.

// de_TagLimitExceededException omitted.

// de_TagList omitted.

// de_TrainingParameters omitted.

// de_UpdateBatchPredictionOutput omitted.

// de_UpdateDataSourceOutput omitted.

// de_UpdateEvaluationOutput omitted.

// de_UpdateMLModelOutput omitted.

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
    "x-amz-target": `AmazonML_20141212.${operation}`,
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
