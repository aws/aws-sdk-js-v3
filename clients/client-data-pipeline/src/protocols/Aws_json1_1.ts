// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  AddTagsInput,
  CreatePipelineInput,
  DeactivatePipelineInput,
  DeletePipelineInput,
  DescribeObjectsInput,
  DescribePipelinesInput,
  EvaluateExpressionInput,
  Field,
  GetPipelineDefinitionInput,
  InstanceIdentity,
  InternalServiceError,
  InvalidRequestException,
  ListPipelinesInput,
  Operator,
  ParameterAttribute,
  ParameterObject,
  ParameterValue,
  PipelineDeletedException,
  PipelineNotFoundException,
  PipelineObject,
  PollForTaskInput,
  PutPipelineDefinitionInput,
  Query,
  QueryObjectsInput,
  RemoveTagsInput,
  ReportTaskProgressInput,
  ReportTaskRunnerHeartbeatInput,
  Selector,
  SetStatusInput,
  SetTaskStatusInput,
  Tag,
  TaskNotFoundException,
  ValidatePipelineDefinitionInput,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: ActivatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeactivatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribeObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DescribePipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: EvaluateExpressionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetPipelineDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListPipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PollForTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutPipelineDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: QueryObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ReportTaskProgressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ReportTaskRunnerHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: SetTaskStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ValidatePipelineDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  return take(input, {
    parameterValues: _json,
    pipelineId: [],
    startTimestamp: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_AddTagsInput omitted.

// se_CreatePipelineInput omitted.

// se_DeactivatePipelineInput omitted.

// se_DeletePipelineInput omitted.

// se_DescribeObjectsInput omitted.

// se_DescribePipelinesInput omitted.

// se_EvaluateExpressionInput omitted.

// se_Field omitted.

// se_fieldList omitted.

// se_GetPipelineDefinitionInput omitted.

// se_idList omitted.

// se_InstanceIdentity omitted.

// se_ListPipelinesInput omitted.

// se_Operator omitted.

// se_ParameterAttribute omitted.

// se_ParameterAttributeList omitted.

// se_ParameterObject omitted.

// se_ParameterObjectList omitted.

// se_ParameterValue omitted.

// se_ParameterValueList omitted.

// se_PipelineObject omitted.

// se_PipelineObjectList omitted.

// se_PollForTaskInput omitted.

// se_PutPipelineDefinitionInput omitted.

// se_Query omitted.

// se_QueryObjectsInput omitted.

// se_RemoveTagsInput omitted.

// se_ReportTaskProgressInput omitted.

// se_ReportTaskRunnerHeartbeatInput omitted.

// se_Selector omitted.

// se_SelectorList omitted.

// se_SetStatusInput omitted.

// se_SetTaskStatusInput omitted.

// se_stringList omitted.

// se_Tag omitted.

// se_tagList omitted.

// se_ValidatePipelineDefinitionInput omitted.

// de_ActivatePipelineOutput omitted.

// de_AddTagsOutput omitted.

// de_CreatePipelineOutput omitted.

// de_DeactivatePipelineOutput omitted.

// de_DescribeObjectsOutput omitted.

// de_DescribePipelinesOutput omitted.

// de_EvaluateExpressionOutput omitted.

// de_Field omitted.

// de_fieldList omitted.

// de_GetPipelineDefinitionOutput omitted.

// de_idList omitted.

// de_InternalServiceError omitted.

// de_InvalidRequestException omitted.

// de_ListPipelinesOutput omitted.

// de_ParameterAttribute omitted.

// de_ParameterAttributeList omitted.

// de_ParameterObject omitted.

// de_ParameterObjectList omitted.

// de_ParameterValue omitted.

// de_ParameterValueList omitted.

// de_PipelineDeletedException omitted.

// de_PipelineDescription omitted.

// de_PipelineDescriptionList omitted.

// de_PipelineIdName omitted.

// de_pipelineList omitted.

// de_PipelineNotFoundException omitted.

// de_PipelineObject omitted.

// de_PipelineObjectList omitted.

// de_PipelineObjectMap omitted.

// de_PollForTaskOutput omitted.

// de_PutPipelineDefinitionOutput omitted.

// de_QueryObjectsOutput omitted.

// de_RemoveTagsOutput omitted.

// de_ReportTaskProgressOutput omitted.

// de_ReportTaskRunnerHeartbeatOutput omitted.

// de_SetTaskStatusOutput omitted.

// de_Tag omitted.

// de_tagList omitted.

// de_TaskNotFoundException omitted.

// de_TaskObject omitted.

// de_ValidatePipelineDefinitionOutput omitted.

// de_ValidationError omitted.

// de_ValidationErrors omitted.

// de_validationMessages omitted.

// de_ValidationWarning omitted.

// de_ValidationWarnings omitted.

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
