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

export const serializeAws_json1_1ActivatePipelineCommand = async (
  input: ActivatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.ActivatePipeline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ActivatePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.AddTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePipelineCommand = async (
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.CreatePipeline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeactivatePipelineCommand = async (
  input: DeactivatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.DeactivatePipeline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeactivatePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePipelineCommand = async (
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.DeletePipeline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeObjectsCommand = async (
  input: DescribeObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.DescribeObjects",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeObjectsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePipelinesCommand = async (
  input: DescribePipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.DescribePipelines",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePipelinesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EvaluateExpressionCommand = async (
  input: EvaluateExpressionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.EvaluateExpression",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EvaluateExpressionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPipelineDefinitionCommand = async (
  input: GetPipelineDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.GetPipelineDefinition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetPipelineDefinitionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPipelinesCommand = async (
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.ListPipelines",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPipelinesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PollForTaskCommand = async (
  input: PollForTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.PollForTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PollForTaskInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutPipelineDefinitionCommand = async (
  input: PutPipelineDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.PutPipelineDefinition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutPipelineDefinitionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1QueryObjectsCommand = async (
  input: QueryObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.QueryObjects",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1QueryObjectsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.RemoveTags",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ReportTaskProgressCommand = async (
  input: ReportTaskProgressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.ReportTaskProgress",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ReportTaskProgressInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ReportTaskRunnerHeartbeatCommand = async (
  input: ReportTaskRunnerHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.ReportTaskRunnerHeartbeat",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ReportTaskRunnerHeartbeatInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetStatusCommand = async (
  input: SetStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.SetStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetTaskStatusCommand = async (
  input: SetTaskStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.SetTaskStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetTaskStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ValidatePipelineDefinitionCommand = async (
  input: ValidatePipelineDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DataPipeline.ValidatePipelineDefinition",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ValidatePipelineDefinitionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1ActivatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivatePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ActivatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ActivatePipelineOutput(data, context);
  const response: ActivatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ActivatePipelineCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
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
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePipelineOutput(data, context);
  const response: CreatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePipelineCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeactivatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivatePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeactivatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeactivatePipelineOutput(data, context);
  const response: DeactivatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeactivatePipelineCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePipelineCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePipelineCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeObjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeObjectsOutput(data, context);
  const response: DescribeObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeObjectsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribePipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePipelinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePipelinesOutput(data, context);
  const response: DescribePipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePipelinesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1EvaluateExpressionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateExpressionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1EvaluateExpressionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EvaluateExpressionOutput(data, context);
  const response: EvaluateExpressionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EvaluateExpressionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "TaskNotFoundException":
    case "com.amazonaws.datapipeline#TaskNotFoundException":
      throw await deserializeAws_json1_1TaskNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetPipelineDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetPipelineDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPipelineDefinitionOutput(data, context);
  const response: GetPipelineDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPipelineDefinitionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPipelinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPipelinesOutput(data, context);
  const response: ListPipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPipelinesCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PollForTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PollForTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PollForTaskOutput(data, context);
  const response: PollForTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PollForTaskCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "TaskNotFoundException":
    case "com.amazonaws.datapipeline#TaskNotFoundException":
      throw await deserializeAws_json1_1TaskNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutPipelineDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPipelineDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutPipelineDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutPipelineDefinitionOutput(data, context);
  const response: PutPipelineDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutPipelineDefinitionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1QueryObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryObjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1QueryObjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1QueryObjectsOutput(data, context);
  const response: QueryObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1QueryObjectsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RemoveTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTagsOutput(data, context);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ReportTaskProgressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReportTaskProgressCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ReportTaskProgressCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ReportTaskProgressOutput(data, context);
  const response: ReportTaskProgressCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ReportTaskProgressCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "TaskNotFoundException":
    case "com.amazonaws.datapipeline#TaskNotFoundException":
      throw await deserializeAws_json1_1TaskNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReportTaskRunnerHeartbeatCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ReportTaskRunnerHeartbeatCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ReportTaskRunnerHeartbeatOutput(data, context);
  const response: ReportTaskRunnerHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ReportTaskRunnerHeartbeatCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SetStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SetStatusCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetStatusCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1SetTaskStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTaskStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1SetTaskStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SetTaskStatusOutput(data, context);
  const response: SetTaskStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetTaskStatusCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
    case "TaskNotFoundException":
    case "com.amazonaws.datapipeline#TaskNotFoundException":
      throw await deserializeAws_json1_1TaskNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ValidatePipelineDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidatePipelineDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ValidatePipelineDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ValidatePipelineDefinitionOutput(data, context);
  const response: ValidatePipelineDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ValidatePipelineDefinitionCommandError = async (
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
      throw await deserializeAws_json1_1InternalServiceErrorResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      throw await deserializeAws_json1_1InvalidRequestExceptionResponse(parsedOutput, context);
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      throw await deserializeAws_json1_1PipelineDeletedExceptionResponse(parsedOutput, context);
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      throw await deserializeAws_json1_1PipelineNotFoundExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1InternalServiceErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceError(body, context);
  const exception = new InternalServiceError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PipelineDeletedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineDeletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PipelineDeletedException(body, context);
  const exception = new PipelineDeletedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1PipelineNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PipelineNotFoundException(body, context);
  const exception = new PipelineNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TaskNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TaskNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TaskNotFoundException(body, context);
  const exception = new TaskNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1ActivatePipelineInput = (input: ActivatePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.parameterValues != null && {
      parameterValues: serializeAws_json1_1ParameterValueList(input.parameterValues, context),
    }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.startTimestamp != null && { startTimestamp: Math.round(input.startTimestamp.getTime() / 1000) }),
  };
};

const serializeAws_json1_1AddTagsInput = (input: AddTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
  };
};

const serializeAws_json1_1CreatePipelineInput = (input: CreatePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_json1_1tagList(input.tags, context) }),
    ...(input.uniqueId != null && { uniqueId: input.uniqueId }),
  };
};

const serializeAws_json1_1DeactivatePipelineInput = (input: DeactivatePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.cancelActive != null && { cancelActive: input.cancelActive }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
  };
};

const serializeAws_json1_1DeletePipelineInput = (input: DeletePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
  };
};

const serializeAws_json1_1DescribeObjectsInput = (input: DescribeObjectsInput, context: __SerdeContext): any => {
  return {
    ...(input.evaluateExpressions != null && { evaluateExpressions: input.evaluateExpressions }),
    ...(input.marker != null && { marker: input.marker }),
    ...(input.objectIds != null && { objectIds: serializeAws_json1_1idList(input.objectIds, context) }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
  };
};

const serializeAws_json1_1DescribePipelinesInput = (input: DescribePipelinesInput, context: __SerdeContext): any => {
  return {
    ...(input.pipelineIds != null && { pipelineIds: serializeAws_json1_1idList(input.pipelineIds, context) }),
  };
};

const serializeAws_json1_1EvaluateExpressionInput = (input: EvaluateExpressionInput, context: __SerdeContext): any => {
  return {
    ...(input.expression != null && { expression: input.expression }),
    ...(input.objectId != null && { objectId: input.objectId }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
  };
};

const serializeAws_json1_1Field = (input: Field, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.refValue != null && { refValue: input.refValue }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
  };
};

const serializeAws_json1_1fieldList = (input: Field[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Field(entry, context);
    });
};

const serializeAws_json1_1GetPipelineDefinitionInput = (
  input: GetPipelineDefinitionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_json1_1idList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1InstanceIdentity = (input: InstanceIdentity, context: __SerdeContext): any => {
  return {
    ...(input.document != null && { document: input.document }),
    ...(input.signature != null && { signature: input.signature }),
  };
};

const serializeAws_json1_1ListPipelinesInput = (input: ListPipelinesInput, context: __SerdeContext): any => {
  return {
    ...(input.marker != null && { marker: input.marker }),
  };
};

const serializeAws_json1_1Operator = (input: Operator, context: __SerdeContext): any => {
  return {
    ...(input.type != null && { type: input.type }),
    ...(input.values != null && { values: serializeAws_json1_1stringList(input.values, context) }),
  };
};

const serializeAws_json1_1ParameterAttribute = (input: ParameterAttribute, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
  };
};

const serializeAws_json1_1ParameterAttributeList = (input: ParameterAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ParameterAttribute(entry, context);
    });
};

const serializeAws_json1_1ParameterObject = (input: ParameterObject, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && {
      attributes: serializeAws_json1_1ParameterAttributeList(input.attributes, context),
    }),
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_json1_1ParameterObjectList = (input: ParameterObject[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ParameterObject(entry, context);
    });
};

const serializeAws_json1_1ParameterValue = (input: ParameterValue, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
  };
};

const serializeAws_json1_1ParameterValueList = (input: ParameterValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ParameterValue(entry, context);
    });
};

const serializeAws_json1_1PipelineObject = (input: PipelineObject, context: __SerdeContext): any => {
  return {
    ...(input.fields != null && { fields: serializeAws_json1_1fieldList(input.fields, context) }),
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_1PipelineObjectList = (input: PipelineObject[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1PipelineObject(entry, context);
    });
};

const serializeAws_json1_1PollForTaskInput = (input: PollForTaskInput, context: __SerdeContext): any => {
  return {
    ...(input.hostname != null && { hostname: input.hostname }),
    ...(input.instanceIdentity != null && {
      instanceIdentity: serializeAws_json1_1InstanceIdentity(input.instanceIdentity, context),
    }),
    ...(input.workerGroup != null && { workerGroup: input.workerGroup }),
  };
};

const serializeAws_json1_1PutPipelineDefinitionInput = (
  input: PutPipelineDefinitionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.parameterObjects != null && {
      parameterObjects: serializeAws_json1_1ParameterObjectList(input.parameterObjects, context),
    }),
    ...(input.parameterValues != null && {
      parameterValues: serializeAws_json1_1ParameterValueList(input.parameterValues, context),
    }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.pipelineObjects != null && {
      pipelineObjects: serializeAws_json1_1PipelineObjectList(input.pipelineObjects, context),
    }),
  };
};

const serializeAws_json1_1Query = (input: Query, context: __SerdeContext): any => {
  return {
    ...(input.selectors != null && { selectors: serializeAws_json1_1SelectorList(input.selectors, context) }),
  };
};

const serializeAws_json1_1QueryObjectsInput = (input: QueryObjectsInput, context: __SerdeContext): any => {
  return {
    ...(input.limit != null && { limit: input.limit }),
    ...(input.marker != null && { marker: input.marker }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.query != null && { query: serializeAws_json1_1Query(input.query, context) }),
    ...(input.sphere != null && { sphere: input.sphere }),
  };
};

const serializeAws_json1_1RemoveTagsInput = (input: RemoveTagsInput, context: __SerdeContext): any => {
  return {
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.tagKeys != null && { tagKeys: serializeAws_json1_1stringList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_1ReportTaskProgressInput = (input: ReportTaskProgressInput, context: __SerdeContext): any => {
  return {
    ...(input.fields != null && { fields: serializeAws_json1_1fieldList(input.fields, context) }),
    ...(input.taskId != null && { taskId: input.taskId }),
  };
};

const serializeAws_json1_1ReportTaskRunnerHeartbeatInput = (
  input: ReportTaskRunnerHeartbeatInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.hostname != null && { hostname: input.hostname }),
    ...(input.taskrunnerId != null && { taskrunnerId: input.taskrunnerId }),
    ...(input.workerGroup != null && { workerGroup: input.workerGroup }),
  };
};

const serializeAws_json1_1Selector = (input: Selector, context: __SerdeContext): any => {
  return {
    ...(input.fieldName != null && { fieldName: input.fieldName }),
    ...(input.operator != null && { operator: serializeAws_json1_1Operator(input.operator, context) }),
  };
};

const serializeAws_json1_1SelectorList = (input: Selector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Selector(entry, context);
    });
};

const serializeAws_json1_1SetStatusInput = (input: SetStatusInput, context: __SerdeContext): any => {
  return {
    ...(input.objectIds != null && { objectIds: serializeAws_json1_1idList(input.objectIds, context) }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_json1_1SetTaskStatusInput = (input: SetTaskStatusInput, context: __SerdeContext): any => {
  return {
    ...(input.errorId != null && { errorId: input.errorId }),
    ...(input.errorMessage != null && { errorMessage: input.errorMessage }),
    ...(input.errorStackTrace != null && { errorStackTrace: input.errorStackTrace }),
    ...(input.taskId != null && { taskId: input.taskId }),
    ...(input.taskStatus != null && { taskStatus: input.taskStatus }),
  };
};

const serializeAws_json1_1stringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1tagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1ValidatePipelineDefinitionInput = (
  input: ValidatePipelineDefinitionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.parameterObjects != null && {
      parameterObjects: serializeAws_json1_1ParameterObjectList(input.parameterObjects, context),
    }),
    ...(input.parameterValues != null && {
      parameterValues: serializeAws_json1_1ParameterValueList(input.parameterValues, context),
    }),
    ...(input.pipelineId != null && { pipelineId: input.pipelineId }),
    ...(input.pipelineObjects != null && {
      pipelineObjects: serializeAws_json1_1PipelineObjectList(input.pipelineObjects, context),
    }),
  };
};

const deserializeAws_json1_1ActivatePipelineOutput = (output: any, context: __SerdeContext): ActivatePipelineOutput => {
  return {} as any;
};

const deserializeAws_json1_1AddTagsOutput = (output: any, context: __SerdeContext): AddTagsOutput => {
  return {} as any;
};

const deserializeAws_json1_1CreatePipelineOutput = (output: any, context: __SerdeContext): CreatePipelineOutput => {
  return {
    pipelineId: __expectString(output.pipelineId),
  } as any;
};

const deserializeAws_json1_1DeactivatePipelineOutput = (
  output: any,
  context: __SerdeContext
): DeactivatePipelineOutput => {
  return {} as any;
};

const deserializeAws_json1_1DescribeObjectsOutput = (output: any, context: __SerdeContext): DescribeObjectsOutput => {
  return {
    hasMoreResults: __expectBoolean(output.hasMoreResults),
    marker: __expectString(output.marker),
    pipelineObjects:
      output.pipelineObjects != null
        ? deserializeAws_json1_1PipelineObjectList(output.pipelineObjects, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribePipelinesOutput = (
  output: any,
  context: __SerdeContext
): DescribePipelinesOutput => {
  return {
    pipelineDescriptionList:
      output.pipelineDescriptionList != null
        ? deserializeAws_json1_1PipelineDescriptionList(output.pipelineDescriptionList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EvaluateExpressionOutput = (
  output: any,
  context: __SerdeContext
): EvaluateExpressionOutput => {
  return {
    evaluatedExpression: __expectString(output.evaluatedExpression),
  } as any;
};

const deserializeAws_json1_1Field = (output: any, context: __SerdeContext): Field => {
  return {
    key: __expectString(output.key),
    refValue: __expectString(output.refValue),
    stringValue: __expectString(output.stringValue),
  } as any;
};

const deserializeAws_json1_1fieldList = (output: any, context: __SerdeContext): Field[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Field(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1GetPipelineDefinitionOutput = (
  output: any,
  context: __SerdeContext
): GetPipelineDefinitionOutput => {
  return {
    parameterObjects:
      output.parameterObjects != null
        ? deserializeAws_json1_1ParameterObjectList(output.parameterObjects, context)
        : undefined,
    parameterValues:
      output.parameterValues != null
        ? deserializeAws_json1_1ParameterValueList(output.parameterValues, context)
        : undefined,
    pipelineObjects:
      output.pipelineObjects != null
        ? deserializeAws_json1_1PipelineObjectList(output.pipelineObjects, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1idList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1InternalServiceError = (output: any, context: __SerdeContext): InternalServiceError => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListPipelinesOutput = (output: any, context: __SerdeContext): ListPipelinesOutput => {
  return {
    hasMoreResults: __expectBoolean(output.hasMoreResults),
    marker: __expectString(output.marker),
    pipelineIdList:
      output.pipelineIdList != null ? deserializeAws_json1_1pipelineList(output.pipelineIdList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ParameterAttribute = (output: any, context: __SerdeContext): ParameterAttribute => {
  return {
    key: __expectString(output.key),
    stringValue: __expectString(output.stringValue),
  } as any;
};

const deserializeAws_json1_1ParameterAttributeList = (output: any, context: __SerdeContext): ParameterAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ParameterAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ParameterObject = (output: any, context: __SerdeContext): ParameterObject => {
  return {
    attributes:
      output.attributes != null ? deserializeAws_json1_1ParameterAttributeList(output.attributes, context) : undefined,
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_json1_1ParameterObjectList = (output: any, context: __SerdeContext): ParameterObject[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ParameterObject(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ParameterValue = (output: any, context: __SerdeContext): ParameterValue => {
  return {
    id: __expectString(output.id),
    stringValue: __expectString(output.stringValue),
  } as any;
};

const deserializeAws_json1_1ParameterValueList = (output: any, context: __SerdeContext): ParameterValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ParameterValue(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PipelineDeletedException = (
  output: any,
  context: __SerdeContext
): PipelineDeletedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PipelineDescription = (output: any, context: __SerdeContext): PipelineDescription => {
  return {
    description: __expectString(output.description),
    fields: output.fields != null ? deserializeAws_json1_1fieldList(output.fields, context) : undefined,
    name: __expectString(output.name),
    pipelineId: __expectString(output.pipelineId),
    tags: output.tags != null ? deserializeAws_json1_1tagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PipelineDescriptionList = (output: any, context: __SerdeContext): PipelineDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PipelineDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PipelineIdName = (output: any, context: __SerdeContext): PipelineIdName => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1pipelineList = (output: any, context: __SerdeContext): PipelineIdName[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PipelineIdName(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PipelineNotFoundException = (
  output: any,
  context: __SerdeContext
): PipelineNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PipelineObject = (output: any, context: __SerdeContext): PipelineObject => {
  return {
    fields: output.fields != null ? deserializeAws_json1_1fieldList(output.fields, context) : undefined,
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1PipelineObjectList = (output: any, context: __SerdeContext): PipelineObject[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PipelineObject(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PipelineObjectMap = (
  output: any,
  context: __SerdeContext
): Record<string, PipelineObject> => {
  return Object.entries(output).reduce((acc: Record<string, PipelineObject>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_json1_1PipelineObject(value, context);
    return acc;
  }, {});
};

const deserializeAws_json1_1PollForTaskOutput = (output: any, context: __SerdeContext): PollForTaskOutput => {
  return {
    taskObject: output.taskObject != null ? deserializeAws_json1_1TaskObject(output.taskObject, context) : undefined,
  } as any;
};

const deserializeAws_json1_1PutPipelineDefinitionOutput = (
  output: any,
  context: __SerdeContext
): PutPipelineDefinitionOutput => {
  return {
    errored: __expectBoolean(output.errored),
    validationErrors:
      output.validationErrors != null
        ? deserializeAws_json1_1ValidationErrors(output.validationErrors, context)
        : undefined,
    validationWarnings:
      output.validationWarnings != null
        ? deserializeAws_json1_1ValidationWarnings(output.validationWarnings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1QueryObjectsOutput = (output: any, context: __SerdeContext): QueryObjectsOutput => {
  return {
    hasMoreResults: __expectBoolean(output.hasMoreResults),
    ids: output.ids != null ? deserializeAws_json1_1idList(output.ids, context) : undefined,
    marker: __expectString(output.marker),
  } as any;
};

const deserializeAws_json1_1RemoveTagsOutput = (output: any, context: __SerdeContext): RemoveTagsOutput => {
  return {} as any;
};

const deserializeAws_json1_1ReportTaskProgressOutput = (
  output: any,
  context: __SerdeContext
): ReportTaskProgressOutput => {
  return {
    canceled: __expectBoolean(output.canceled),
  } as any;
};

const deserializeAws_json1_1ReportTaskRunnerHeartbeatOutput = (
  output: any,
  context: __SerdeContext
): ReportTaskRunnerHeartbeatOutput => {
  return {
    terminate: __expectBoolean(output.terminate),
  } as any;
};

const deserializeAws_json1_1SetTaskStatusOutput = (output: any, context: __SerdeContext): SetTaskStatusOutput => {
  return {} as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1tagList = (output: any, context: __SerdeContext): Tag[] => {
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

const deserializeAws_json1_1TaskNotFoundException = (output: any, context: __SerdeContext): TaskNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1TaskObject = (output: any, context: __SerdeContext): TaskObject => {
  return {
    attemptId: __expectString(output.attemptId),
    objects: output.objects != null ? deserializeAws_json1_1PipelineObjectMap(output.objects, context) : undefined,
    pipelineId: __expectString(output.pipelineId),
    taskId: __expectString(output.taskId),
  } as any;
};

const deserializeAws_json1_1ValidatePipelineDefinitionOutput = (
  output: any,
  context: __SerdeContext
): ValidatePipelineDefinitionOutput => {
  return {
    errored: __expectBoolean(output.errored),
    validationErrors:
      output.validationErrors != null
        ? deserializeAws_json1_1ValidationErrors(output.validationErrors, context)
        : undefined,
    validationWarnings:
      output.validationWarnings != null
        ? deserializeAws_json1_1ValidationWarnings(output.validationWarnings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ValidationError = (output: any, context: __SerdeContext): ValidationError => {
  return {
    errors: output.errors != null ? deserializeAws_json1_1validationMessages(output.errors, context) : undefined,
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_json1_1ValidationErrors = (output: any, context: __SerdeContext): ValidationError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ValidationError(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1validationMessages = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ValidationWarning = (output: any, context: __SerdeContext): ValidationWarning => {
  return {
    id: __expectString(output.id),
    warnings: output.warnings != null ? deserializeAws_json1_1validationMessages(output.warnings, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ValidationWarnings = (output: any, context: __SerdeContext): ValidationWarning[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ValidationWarning(entry, context);
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
