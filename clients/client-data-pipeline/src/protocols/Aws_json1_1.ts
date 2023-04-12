// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectString as __expectString,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ActivatePipelineCommandInput, ActivatePipelineCommandOutput } from "../commands/ActivatePipelineCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "../commands/CreatePipelineCommand";
import { DeactivatePipelineCommandInput, DeactivatePipelineCommandOutput } from "../commands/DeactivatePipelineCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "../commands/DeletePipelineCommand";
import { DescribeObjectsCommandInput, DescribeObjectsCommandOutput } from "../commands/DescribeObjectsCommand";
import { DescribePipelinesCommandInput, DescribePipelinesCommandOutput } from "../commands/DescribePipelinesCommand";
import { EvaluateExpressionCommandInput, EvaluateExpressionCommandOutput } from "../commands/EvaluateExpressionCommand";
import {
  GetPipelineDefinitionCommandInput,
  GetPipelineDefinitionCommandOutput,
} from "../commands/GetPipelineDefinitionCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "../commands/ListPipelinesCommand";
import { PollForTaskCommandInput, PollForTaskCommandOutput } from "../commands/PollForTaskCommand";
import {
  PutPipelineDefinitionCommandInput,
  PutPipelineDefinitionCommandOutput,
} from "../commands/PutPipelineDefinitionCommand";
import { QueryObjectsCommandInput, QueryObjectsCommandOutput } from "../commands/QueryObjectsCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "../commands/RemoveTagsCommand";
import { ReportTaskProgressCommandInput, ReportTaskProgressCommandOutput } from "../commands/ReportTaskProgressCommand";
import {
  ReportTaskRunnerHeartbeatCommandInput,
  ReportTaskRunnerHeartbeatCommandOutput,
} from "../commands/ReportTaskRunnerHeartbeatCommand";
import { SetStatusCommandInput, SetStatusCommandOutput } from "../commands/SetStatusCommand";
import { SetTaskStatusCommandInput, SetTaskStatusCommandOutput } from "../commands/SetTaskStatusCommand";
import {
  ValidatePipelineDefinitionCommandInput,
  ValidatePipelineDefinitionCommandOutput,
} from "../commands/ValidatePipelineDefinitionCommand";
import { DataPipelineServiceException as __BaseException } from "../models/DataPipelineServiceException";
import {
  ActivatePipelineInput,
  ActivatePipelineOutput,
  AddTagsInput,
  AddTagsOutput,
  CreatePipelineInput,
  CreatePipelineOutput,
  DeactivatePipelineInput,
  DeactivatePipelineOutput,
  DeletePipelineInput,
  DescribeObjectsInput,
  DescribeObjectsOutput,
  DescribePipelinesInput,
  DescribePipelinesOutput,
  EvaluateExpressionInput,
  EvaluateExpressionOutput,
  Field,
  GetPipelineDefinitionInput,
  GetPipelineDefinitionOutput,
  InstanceIdentity,
  InternalServiceError,
  InvalidRequestException,
  ListPipelinesInput,
  ListPipelinesOutput,
  Operator,
  ParameterAttribute,
  ParameterObject,
  ParameterValue,
  PipelineDeletedException,
  PipelineDescription,
  PipelineIdName,
  PipelineNotFoundException,
  PipelineObject,
  PollForTaskInput,
  PollForTaskOutput,
  PutPipelineDefinitionInput,
  PutPipelineDefinitionOutput,
  Query,
  QueryObjectsInput,
  QueryObjectsOutput,
  RemoveTagsInput,
  RemoveTagsOutput,
  ReportTaskProgressInput,
  ReportTaskProgressOutput,
  ReportTaskRunnerHeartbeatInput,
  ReportTaskRunnerHeartbeatOutput,
  Selector,
  SetStatusInput,
  SetTaskStatusInput,
  SetTaskStatusOutput,
  Tag,
  TaskNotFoundException,
  TaskObject,
  ValidatePipelineDefinitionInput,
  ValidatePipelineDefinitionOutput,
  ValidationError,
  ValidationWarning,
} from "../models/models_0";

/**
 * serializeAws_json1_1ActivatePipelineCommand
 */
export const se_ActivatePipelineCommand = async (
  input: ActivatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ActivatePipeline");
  let body: any;
  body = JSON.stringify(se_ActivatePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddTagsCommand
 */
export const se_AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddTags");
  let body: any;
  body = JSON.stringify(se_AddTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePipelineCommand
 */
export const se_CreatePipelineCommand = async (
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePipeline");
  let body: any;
  body = JSON.stringify(se_CreatePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeactivatePipelineCommand
 */
export const se_DeactivatePipelineCommand = async (
  input: DeactivatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeactivatePipeline");
  let body: any;
  body = JSON.stringify(se_DeactivatePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePipelineCommand
 */
export const se_DeletePipelineCommand = async (
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePipeline");
  let body: any;
  body = JSON.stringify(se_DeletePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeObjectsCommand
 */
export const se_DescribeObjectsCommand = async (
  input: DescribeObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeObjects");
  let body: any;
  body = JSON.stringify(se_DescribeObjectsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePipelinesCommand
 */
export const se_DescribePipelinesCommand = async (
  input: DescribePipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePipelines");
  let body: any;
  body = JSON.stringify(se_DescribePipelinesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EvaluateExpressionCommand
 */
export const se_EvaluateExpressionCommand = async (
  input: EvaluateExpressionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EvaluateExpression");
  let body: any;
  body = JSON.stringify(se_EvaluateExpressionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPipelineDefinitionCommand
 */
export const se_GetPipelineDefinitionCommand = async (
  input: GetPipelineDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPipelineDefinition");
  let body: any;
  body = JSON.stringify(se_GetPipelineDefinitionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPipelinesCommand
 */
export const se_ListPipelinesCommand = async (
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPipelines");
  let body: any;
  body = JSON.stringify(se_ListPipelinesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PollForTaskCommand
 */
export const se_PollForTaskCommand = async (
  input: PollForTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PollForTask");
  let body: any;
  body = JSON.stringify(se_PollForTaskInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutPipelineDefinitionCommand
 */
export const se_PutPipelineDefinitionCommand = async (
  input: PutPipelineDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutPipelineDefinition");
  let body: any;
  body = JSON.stringify(se_PutPipelineDefinitionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1QueryObjectsCommand
 */
export const se_QueryObjectsCommand = async (
  input: QueryObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("QueryObjects");
  let body: any;
  body = JSON.stringify(se_QueryObjectsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RemoveTagsCommand
 */
export const se_RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RemoveTags");
  let body: any;
  body = JSON.stringify(se_RemoveTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ReportTaskProgressCommand
 */
export const se_ReportTaskProgressCommand = async (
  input: ReportTaskProgressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ReportTaskProgress");
  let body: any;
  body = JSON.stringify(se_ReportTaskProgressInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ReportTaskRunnerHeartbeatCommand
 */
export const se_ReportTaskRunnerHeartbeatCommand = async (
  input: ReportTaskRunnerHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ReportTaskRunnerHeartbeat");
  let body: any;
  body = JSON.stringify(se_ReportTaskRunnerHeartbeatInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetStatusCommand
 */
export const se_SetStatusCommand = async (
  input: SetStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetStatus");
  let body: any;
  body = JSON.stringify(se_SetStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetTaskStatusCommand
 */
export const se_SetTaskStatusCommand = async (
  input: SetTaskStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetTaskStatus");
  let body: any;
  body = JSON.stringify(se_SetTaskStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ValidatePipelineDefinitionCommand
 */
export const se_ValidatePipelineDefinitionCommand = async (
  input: ValidatePipelineDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ValidatePipelineDefinition");
  let body: any;
  body = JSON.stringify(se_ValidatePipelineDefinitionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1ActivatePipelineCommand
 */
export const de_ActivatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivatePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ActivatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ActivatePipelineOutput(data, context);
  const response: ActivatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ActivatePipelineCommandError
 */
const de_ActivatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await de_PipelineDeletedExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
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
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await de_PipelineDeletedExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreatePipelineCommand
 */
export const de_CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePipelineOutput(data, context);
  const response: CreatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePipelineCommandError
 */
const de_CreatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeactivatePipelineCommand
 */
export const de_DeactivatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivatePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeactivatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeactivatePipelineOutput(data, context);
  const response: DeactivatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeactivatePipelineCommandError
 */
const de_DeactivatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await de_PipelineDeletedExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeletePipelineCommand
 */
export const de_DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePipelineCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePipelineCommandError
 */
const de_DeletePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribeObjectsCommand
 */
export const de_DescribeObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeObjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeObjectsOutput(data, context);
  const response: DescribeObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeObjectsCommandError
 */
const de_DescribeObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await de_PipelineDeletedExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DescribePipelinesCommand
 */
export const de_DescribePipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePipelinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePipelinesOutput(data, context);
  const response: DescribePipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePipelinesCommandError
 */
const de_DescribePipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await de_PipelineDeletedExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1EvaluateExpressionCommand
 */
export const de_EvaluateExpressionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateExpressionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EvaluateExpressionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_EvaluateExpressionOutput(data, context);
  const response: EvaluateExpressionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1EvaluateExpressionCommandError
 */
const de_EvaluateExpressionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateExpressionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await de_PipelineDeletedExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "TaskNotFoundException":
    case "com.amazonaws.datapipeline#TaskNotFoundException":
      throw await de_TaskNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetPipelineDefinitionCommand
 */
export const de_GetPipelineDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPipelineDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPipelineDefinitionOutput(data, context);
  const response: GetPipelineDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetPipelineDefinitionCommandError
 */
const de_GetPipelineDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await de_PipelineDeletedExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListPipelinesCommand
 */
export const de_ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPipelinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPipelinesOutput(data, context);
  const response: ListPipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPipelinesCommandError
 */
const de_ListPipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PollForTaskCommand
 */
export const de_PollForTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PollForTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PollForTaskOutput(data, context);
  const response: PollForTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PollForTaskCommandError
 */
const de_PollForTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "TaskNotFoundException":
    case "com.amazonaws.datapipeline#TaskNotFoundException":
      throw await de_TaskNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutPipelineDefinitionCommand
 */
export const de_PutPipelineDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPipelineDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutPipelineDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutPipelineDefinitionOutput(data, context);
  const response: PutPipelineDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutPipelineDefinitionCommandError
 */
const de_PutPipelineDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPipelineDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await de_PipelineDeletedExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1QueryObjectsCommand
 */
export const de_QueryObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryObjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_QueryObjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_QueryObjectsOutput(data, context);
  const response: QueryObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1QueryObjectsCommandError
 */
const de_QueryObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await de_PipelineDeletedExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RemoveTagsCommand
 */
export const de_RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RemoveTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RemoveTagsOutput(data, context);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RemoveTagsCommandError
 */
const de_RemoveTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await de_PipelineDeletedExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ReportTaskProgressCommand
 */
export const de_ReportTaskProgressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReportTaskProgressCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ReportTaskProgressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReportTaskProgressOutput(data, context);
  const response: ReportTaskProgressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ReportTaskProgressCommandError
 */
const de_ReportTaskProgressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReportTaskProgressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await de_PipelineDeletedExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "TaskNotFoundException":
    case "com.amazonaws.datapipeline#TaskNotFoundException":
      throw await de_TaskNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand
 */
export const de_ReportTaskRunnerHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReportTaskRunnerHeartbeatCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ReportTaskRunnerHeartbeatCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReportTaskRunnerHeartbeatOutput(data, context);
  const response: ReportTaskRunnerHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ReportTaskRunnerHeartbeatCommandError
 */
const de_ReportTaskRunnerHeartbeatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReportTaskRunnerHeartbeatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SetStatusCommand
 */
export const de_SetStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetStatusCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetStatusCommandError
 */
const de_SetStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await de_PipelineDeletedExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1SetTaskStatusCommand
 */
export const de_SetTaskStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTaskStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetTaskStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetTaskStatusOutput(data, context);
  const response: SetTaskStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetTaskStatusCommandError
 */
const de_SetTaskStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTaskStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await de_PipelineDeletedExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
    case "TaskNotFoundException":
    case "com.amazonaws.datapipeline#TaskNotFoundException":
      throw await de_TaskNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ValidatePipelineDefinitionCommand
 */
export const de_ValidatePipelineDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidatePipelineDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ValidatePipelineDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ValidatePipelineDefinitionOutput(data, context);
  const response: ValidatePipelineDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ValidatePipelineDefinitionCommandError
 */
const de_ValidatePipelineDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidatePipelineDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await de_InternalServiceErrorRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await de_PipelineDeletedExceptionRes(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await de_PipelineNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InternalServiceErrorRes
 */
const de_InternalServiceErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServiceError(body, context);
  const exception = new InternalServiceError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PipelineDeletedExceptionRes
 */
const de_PipelineDeletedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineDeletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PipelineDeletedException(body, context);
  const exception = new PipelineDeletedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PipelineNotFoundExceptionRes
 */
const de_PipelineNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_PipelineNotFoundException(body, context);
  const exception = new PipelineNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TaskNotFoundExceptionRes
 */
const de_TaskNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TaskNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TaskNotFoundException(body, context);
  const exception = new TaskNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1ActivatePipelineInput
 */
const se_ActivatePipelineInput = (input: ActivatePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.parameterValues != null && { parameterValues: se_ParameterValueList(input.parameterValues, context) }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.startTimestamp != null && { startTimestamp: Math.round(input.startTimestamp.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_1AddTagsInput
 */
const se_AddTagsInput = (input: AddTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreatePipelineInput
 */
const se_CreatePipelineInput = (input: CreatePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_tagList(input.tags, context) }),
    ...(input.uniqueId != null && { uniqueId: input.uniqueId }),
  };
};

/**
 * serializeAws_json1_1DeactivatePipelineInput
 */
const se_DeactivatePipelineInput = (input: DeactivatePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.cancelActive != null && { cancelActive: input.cancelActive }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
  };
};

/**
 * serializeAws_json1_1DeletePipelineInput
 */
const se_DeletePipelineInput = (input: DeletePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
  };
};

/**
 * serializeAws_json1_1DescribeObjectsInput
 */
const se_DescribeObjectsInput = (input: DescribeObjectsInput, context: __SerdeContext): any => {
  return {
    ...(input.evaluateExpressions != null && { evaluateExpressions: input.evaluateExpressions }),
    ...(input.marker != null && { marker: input.marker }),
    ...(input.objectIds != null && { objectIds: se_idList(input.objectIds, context) }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
  };
};

/**
 * serializeAws_json1_1DescribePipelinesInput
 */
const se_DescribePipelinesInput = (input: DescribePipelinesInput, context: __SerdeContext): any => {
  return {
    ...(input.pipelineIds != null && { pipelineIds: se_idList(input.pipelineIds, context) }),
  };
};

/**
 * serializeAws_json1_1EvaluateExpressionInput
 */
const se_EvaluateExpressionInput = (input: EvaluateExpressionInput, context: __SerdeContext): any => {
  return {
    ...(input.expression != null && { expression: input.expression }),
    ...(input.objectId != null && { objectId: input.objectId }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
  };
};

/**
 * serializeAws_json1_1Field
 */
const se_Field = (input: Field, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.refValue != null && { refValue: input.refValue }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
  };
};

/**
 * serializeAws_json1_1fieldList
 */
const se_fieldList = (input: Field[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Field(entry, context);
    });
};

/**
 * serializeAws_json1_1GetPipelineDefinitionInput
 */
const se_GetPipelineDefinitionInput = (input: GetPipelineDefinitionInput, context: __SerdeContext): any => {
  return {
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_json1_1idList
 */
const se_idList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1InstanceIdentity
 */
const se_InstanceIdentity = (input: InstanceIdentity, context: __SerdeContext): any => {
  return {
    ...(input.document != null && { document: input.document }),
    ...(input.signature != null && { signature: input.signature }),
  };
};

/**
 * serializeAws_json1_1ListPipelinesInput
 */
const se_ListPipelinesInput = (input: ListPipelinesInput, context: __SerdeContext): any => {
  return {
    ...(input.marker != null && { marker: input.marker }),
  };
};

/**
 * serializeAws_json1_1Operator
 */
const se_Operator = (input: Operator, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.values != null && { values: se_stringList(input.values, context) }),
  };
};

/**
 * serializeAws_json1_1ParameterAttribute
 */
const se_ParameterAttribute = (input: ParameterAttribute, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
  };
};

/**
 * serializeAws_json1_1ParameterAttributeList
 */
const se_ParameterAttributeList = (input: ParameterAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ParameterAttribute(entry, context);
    });
};

/**
 * serializeAws_json1_1ParameterObject
 */
const se_ParameterObject = (input: ParameterObject, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && { attributes: se_ParameterAttributeList(input.attributes, context) }),
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_1ParameterObjectList
 */
const se_ParameterObjectList = (input: ParameterObject[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ParameterObject(entry, context);
    });
};

/**
 * serializeAws_json1_1ParameterValue
 */
const se_ParameterValue = (input: ParameterValue, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
  };
};

/**
 * serializeAws_json1_1ParameterValueList
 */
const se_ParameterValueList = (input: ParameterValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ParameterValue(entry, context);
    });
};

/**
 * serializeAws_json1_1PipelineObject
 */
const se_PipelineObject = (input: PipelineObject, context: __SerdeContext): any => {
  return {
    ...(input.fields != null && { fields: se_fieldList(input.fields, context) }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1PipelineObjectList
 */
const se_PipelineObjectList = (input: PipelineObject[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PipelineObject(entry, context);
    });
};

/**
 * serializeAws_json1_1PollForTaskInput
 */
const se_PollForTaskInput = (input: PollForTaskInput, context: __SerdeContext): any => {
  return {
    ...(input.hostname != null && { hostname: input.hostname }),
    ...(input.instanceIdentity != null && { instanceIdentity: se_InstanceIdentity(input.instanceIdentity, context) }),
    ...(input.workerGroup != null && { workerGroup: input.workerGroup }),
  };
};

/**
 * serializeAws_json1_1PutPipelineDefinitionInput
 */
const se_PutPipelineDefinitionInput = (input: PutPipelineDefinitionInput, context: __SerdeContext): any => {
  return {
    ...(input.parameterObjects != null && {
      parameterObjects: se_ParameterObjectList(input.parameterObjects, context),
    }),
    ...(input.parameterValues != null && { parameterValues: se_ParameterValueList(input.parameterValues, context) }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.pipelineObjects != null && { pipelineObjects: se_PipelineObjectList(input.pipelineObjects, context) }),
  };
};

/**
 * serializeAws_json1_1Query
 */
const se_Query = (input: Query, context: __SerdeContext): any => {
  return {
    ...(input.selectors != null && { selectors: se_SelectorList(input.selectors, context) }),
  };
};

/**
 * serializeAws_json1_1QueryObjectsInput
 */
const se_QueryObjectsInput = (input: QueryObjectsInput, context: __SerdeContext): any => {
  return {
    ...(input.limit != null && { limit: input.limit }),
    ...(input.marker != null && { marker: input.marker }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.query != null && { query: se_Query(input.query, context) }),
    ...(input.sphere != null && { sphere: input.sphere }),
  };
};

/**
 * serializeAws_json1_1RemoveTagsInput
 */
const se_RemoveTagsInput = (input: RemoveTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.tagKeys != null && { tagKeys: se_stringList(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1ReportTaskProgressInput
 */
const se_ReportTaskProgressInput = (input: ReportTaskProgressInput, context: __SerdeContext): any => {
  return {
    ...(input.fields != null && { fields: se_fieldList(input.fields, context) }),
    ...(input.taskId != null && { taskId: input.taskId }),
  };
};

/**
 * serializeAws_json1_1ReportTaskRunnerHeartbeatInput
 */
const se_ReportTaskRunnerHeartbeatInput = (input: ReportTaskRunnerHeartbeatInput, context: __SerdeContext): any => {
  return {
    ...(input.hostname != null && { hostname: input.hostname }),
    ...(input.taskrunnerId != null && { taskrunnerId: input.taskrunnerId }),
    ...(input.workerGroup != null && { workerGroup: input.workerGroup }),
  };
};

/**
 * serializeAws_json1_1Selector
 */
const se_Selector = (input: Selector, context: __SerdeContext): any => {
  return {
    ...(input.fieldName != null && { fieldName: input.fieldName }),
    ...(input.operator != null && { operator: se_Operator(input.operator, context) }),
  };
};

/**
 * serializeAws_json1_1SelectorList
 */
const se_SelectorList = (input: Selector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Selector(entry, context);
    });
};

/**
 * serializeAws_json1_1SetStatusInput
 */
const se_SetStatusInput = (input: SetStatusInput, context: __SerdeContext): any => {
  return {
    ...(input.objectIds != null && { objectIds: se_idList(input.objectIds, context) }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1SetTaskStatusInput
 */
const se_SetTaskStatusInput = (input: SetTaskStatusInput, context: __SerdeContext): any => {
  return {
    ...(input.errorId != null && { errorId: input.errorId }),
    ...(input.errorMessage != null && { errorMessage: input.errorMessage }),
    ...(input.errorStackTrace != null && { errorStackTrace: input.errorStackTrace }),
    ...(input.taskId != null && { taskId: input.taskId }),
    ...(input.taskStatus != null && { taskStatus: input.taskStatus }),
  };
};

/**
 * serializeAws_json1_1stringList
 */
const se_stringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1tagList
 */
const se_tagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1ValidatePipelineDefinitionInput
 */
const se_ValidatePipelineDefinitionInput = (input: ValidatePipelineDefinitionInput, context: __SerdeContext): any => {
  return {
    ...(input.parameterObjects != null && {
      parameterObjects: se_ParameterObjectList(input.parameterObjects, context),
    }),
    ...(input.parameterValues != null && { parameterValues: se_ParameterValueList(input.parameterValues, context) }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.pipelineObjects != null && { pipelineObjects: se_PipelineObjectList(input.pipelineObjects, context) }),
  };
};

/**
 * deserializeAws_json1_1ActivatePipelineOutput
 */
const de_ActivatePipelineOutput = (output: any, context: __SerdeContext): ActivatePipelineOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AddTagsOutput
 */
const de_AddTagsOutput = (output: any, context: __SerdeContext): AddTagsOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreatePipelineOutput
 */
const de_CreatePipelineOutput = (output: any, context: __SerdeContext): CreatePipelineOutput => {
  return {
    pipelineId: __expectString(output.pipelineId),
  } as any;
};

/**
 * deserializeAws_json1_1DeactivatePipelineOutput
 */
const de_DeactivatePipelineOutput = (output: any, context: __SerdeContext): DeactivatePipelineOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeObjectsOutput
 */
const de_DescribeObjectsOutput = (output: any, context: __SerdeContext): DescribeObjectsOutput => {
  return {
    hasMoreResults: __expectBoolean(output.hasMoreResults),
    marker: __expectString(output.marker),
    pipelineObjects:
      output.pipelineObjects != null ? de_PipelineObjectList(output.pipelineObjects, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribePipelinesOutput
 */
const de_DescribePipelinesOutput = (output: any, context: __SerdeContext): DescribePipelinesOutput => {
  return {
    pipelineDescriptionList:
      output.pipelineDescriptionList != null
        ? de_PipelineDescriptionList(output.pipelineDescriptionList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1EvaluateExpressionOutput
 */
const de_EvaluateExpressionOutput = (output: any, context: __SerdeContext): EvaluateExpressionOutput => {
  return {
    evaluatedExpression: __expectString(output.evaluatedExpression),
  } as any;
};

/**
 * deserializeAws_json1_1Field
 */
const de_Field = (output: any, context: __SerdeContext): Field => {
  return {
    key: __expectString(output.key),
    refValue: __expectString(output.refValue),
    stringValue: __expectString(output.stringValue),
  } as any;
};

/**
 * deserializeAws_json1_1fieldList
 */
const de_fieldList = (output: any, context: __SerdeContext): Field[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Field(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetPipelineDefinitionOutput
 */
const de_GetPipelineDefinitionOutput = (output: any, context: __SerdeContext): GetPipelineDefinitionOutput => {
  return {
    parameterObjects:
      output.parameterObjects != null ? de_ParameterObjectList(output.parameterObjects, context) : undefined,
    parameterValues:
      output.parameterValues != null ? de_ParameterValueList(output.parameterValues, context) : undefined,
    pipelineObjects:
      output.pipelineObjects != null ? de_PipelineObjectList(output.pipelineObjects, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1idList
 */
const de_idList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1InternalServiceError
 */
const de_InternalServiceError = (output: any, context: __SerdeContext): InternalServiceError => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListPipelinesOutput
 */
const de_ListPipelinesOutput = (output: any, context: __SerdeContext): ListPipelinesOutput => {
  return {
    hasMoreResults: __expectBoolean(output.hasMoreResults),
    marker: __expectString(output.marker),
    pipelineIdList: output.pipelineIdList != null ? de_pipelineList(output.pipelineIdList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ParameterAttribute
 */
const de_ParameterAttribute = (output: any, context: __SerdeContext): ParameterAttribute => {
  return {
    key: __expectString(output.key),
    stringValue: __expectString(output.stringValue),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterAttributeList
 */
const de_ParameterAttributeList = (output: any, context: __SerdeContext): ParameterAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ParameterAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ParameterObject
 */
const de_ParameterObject = (output: any, context: __SerdeContext): ParameterObject => {
  return {
    attributes: output.attributes != null ? de_ParameterAttributeList(output.attributes, context) : undefined,
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterObjectList
 */
const de_ParameterObjectList = (output: any, context: __SerdeContext): ParameterObject[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ParameterObject(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ParameterValue
 */
const de_ParameterValue = (output: any, context: __SerdeContext): ParameterValue => {
  return {
    id: __expectString(output.id),
    stringValue: __expectString(output.stringValue),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterValueList
 */
const de_ParameterValueList = (output: any, context: __SerdeContext): ParameterValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ParameterValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PipelineDeletedException
 */
const de_PipelineDeletedException = (output: any, context: __SerdeContext): PipelineDeletedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PipelineDescription
 */
const de_PipelineDescription = (output: any, context: __SerdeContext): PipelineDescription => {
  return {
    description: __expectString(output.description),
    fields: output.fields != null ? de_fieldList(output.fields, context) : undefined,
    name: __expectString(output.name),
    pipelineId: __expectString(output.pipelineId),
    tags: output.tags != null ? de_tagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PipelineDescriptionList
 */
const de_PipelineDescriptionList = (output: any, context: __SerdeContext): PipelineDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PipelineDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PipelineIdName
 */
const de_PipelineIdName = (output: any, context: __SerdeContext): PipelineIdName => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1pipelineList
 */
const de_pipelineList = (output: any, context: __SerdeContext): PipelineIdName[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PipelineIdName(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PipelineNotFoundException
 */
const de_PipelineNotFoundException = (output: any, context: __SerdeContext): PipelineNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PipelineObject
 */
const de_PipelineObject = (output: any, context: __SerdeContext): PipelineObject => {
  return {
    fields: output.fields != null ? de_fieldList(output.fields, context) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1PipelineObjectList
 */
const de_PipelineObjectList = (output: any, context: __SerdeContext): PipelineObject[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PipelineObject(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PipelineObjectMap
 */
const de_PipelineObjectMap = (output: any, context: __SerdeContext): Record<string, PipelineObject> => {
  return Object.entries(output).reduce((acc: Record<string, PipelineObject>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_PipelineObject(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1PollForTaskOutput
 */
const de_PollForTaskOutput = (output: any, context: __SerdeContext): PollForTaskOutput => {
  return {
    taskObject: output.taskObject != null ? de_TaskObject(output.taskObject, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PutPipelineDefinitionOutput
 */
const de_PutPipelineDefinitionOutput = (output: any, context: __SerdeContext): PutPipelineDefinitionOutput => {
  return {
    errored: __expectBoolean(output.errored),
    validationErrors:
      output.validationErrors != null ? de_ValidationErrors(output.validationErrors, context) : undefined,
    validationWarnings:
      output.validationWarnings != null ? de_ValidationWarnings(output.validationWarnings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1QueryObjectsOutput
 */
const de_QueryObjectsOutput = (output: any, context: __SerdeContext): QueryObjectsOutput => {
  return {
    hasMoreResults: __expectBoolean(output.hasMoreResults),
    ids: output.ids != null ? de_idList(output.ids, context) : undefined,
    marker: __expectString(output.marker),
  } as any;
};

/**
 * deserializeAws_json1_1RemoveTagsOutput
 */
const de_RemoveTagsOutput = (output: any, context: __SerdeContext): RemoveTagsOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ReportTaskProgressOutput
 */
const de_ReportTaskProgressOutput = (output: any, context: __SerdeContext): ReportTaskProgressOutput => {
  return {
    canceled: __expectBoolean(output.canceled),
  } as any;
};

/**
 * deserializeAws_json1_1ReportTaskRunnerHeartbeatOutput
 */
const de_ReportTaskRunnerHeartbeatOutput = (output: any, context: __SerdeContext): ReportTaskRunnerHeartbeatOutput => {
  return {
    terminate: __expectBoolean(output.terminate),
  } as any;
};

/**
 * deserializeAws_json1_1SetTaskStatusOutput
 */
const de_SetTaskStatusOutput = (output: any, context: __SerdeContext): SetTaskStatusOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1tagList
 */
const de_tagList = (output: any, context: __SerdeContext): Tag[] => {
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
 * deserializeAws_json1_1TaskNotFoundException
 */
const de_TaskNotFoundException = (output: any, context: __SerdeContext): TaskNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TaskObject
 */
const de_TaskObject = (output: any, context: __SerdeContext): TaskObject => {
  return {
    attemptId: __expectString(output.attemptId),
    objects: output.objects != null ? de_PipelineObjectMap(output.objects, context) : undefined,
    pipelineId: __expectString(output.pipelineId),
    taskId: __expectString(output.taskId),
  } as any;
};

/**
 * deserializeAws_json1_1ValidatePipelineDefinitionOutput
 */
const de_ValidatePipelineDefinitionOutput = (
  output: any,
  context: __SerdeContext
): ValidatePipelineDefinitionOutput => {
  return {
    errored: __expectBoolean(output.errored),
    validationErrors:
      output.validationErrors != null ? de_ValidationErrors(output.validationErrors, context) : undefined,
    validationWarnings:
      output.validationWarnings != null ? de_ValidationWarnings(output.validationWarnings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ValidationError
 */
const de_ValidationError = (output: any, context: __SerdeContext): ValidationError => {
  return {
    errors: output.errors != null ? de_validationMessages(output.errors, context) : undefined,
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_json1_1ValidationErrors
 */
const de_ValidationErrors = (output: any, context: __SerdeContext): ValidationError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1validationMessages
 */
const de_validationMessages = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_1ValidationWarning
 */
const de_ValidationWarning = (output: any, context: __SerdeContext): ValidationWarning => {
  return {
    id: __expectString(output.id),
    warnings: output.warnings != null ? de_validationMessages(output.warnings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ValidationWarnings
 */
const de_ValidationWarnings = (output: any, context: __SerdeContext): ValidationWarning[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationWarning(entry, context);
    });
  return retVal;
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `DataPipeline.${operation}`,
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
