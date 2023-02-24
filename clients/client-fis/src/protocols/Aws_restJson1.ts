// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CreateExperimentTemplateCommandInput,
  CreateExperimentTemplateCommandOutput,
} from "../commands/CreateExperimentTemplateCommand";
import {
  DeleteExperimentTemplateCommandInput,
  DeleteExperimentTemplateCommandOutput,
} from "../commands/DeleteExperimentTemplateCommand";
import { GetActionCommandInput, GetActionCommandOutput } from "../commands/GetActionCommand";
import { GetExperimentCommandInput, GetExperimentCommandOutput } from "../commands/GetExperimentCommand";
import {
  GetExperimentTemplateCommandInput,
  GetExperimentTemplateCommandOutput,
} from "../commands/GetExperimentTemplateCommand";
import {
  GetTargetResourceTypeCommandInput,
  GetTargetResourceTypeCommandOutput,
} from "../commands/GetTargetResourceTypeCommand";
import { ListActionsCommandInput, ListActionsCommandOutput } from "../commands/ListActionsCommand";
import { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "../commands/ListExperimentsCommand";
import {
  ListExperimentTemplatesCommandInput,
  ListExperimentTemplatesCommandOutput,
} from "../commands/ListExperimentTemplatesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTargetResourceTypesCommandInput,
  ListTargetResourceTypesCommandOutput,
} from "../commands/ListTargetResourceTypesCommand";
import { StartExperimentCommandInput, StartExperimentCommandOutput } from "../commands/StartExperimentCommand";
import { StopExperimentCommandInput, StopExperimentCommandOutput } from "../commands/StopExperimentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateExperimentTemplateCommandInput,
  UpdateExperimentTemplateCommandOutput,
} from "../commands/UpdateExperimentTemplateCommand";
import { FisServiceException as __BaseException } from "../models/FisServiceException";
import {
  Action,
  ActionParameter,
  ActionSummary,
  ActionTarget,
  ConflictException,
  CreateExperimentTemplateActionInput,
  CreateExperimentTemplateLogConfigurationInput,
  CreateExperimentTemplateStopConditionInput,
  CreateExperimentTemplateTargetInput,
  Experiment,
  ExperimentAction,
  ExperimentActionState,
  ExperimentCloudWatchLogsLogConfiguration,
  ExperimentLogConfiguration,
  ExperimentS3LogConfiguration,
  ExperimentState,
  ExperimentStopCondition,
  ExperimentSummary,
  ExperimentTarget,
  ExperimentTargetFilter,
  ExperimentTemplate,
  ExperimentTemplateAction,
  ExperimentTemplateCloudWatchLogsLogConfiguration,
  ExperimentTemplateCloudWatchLogsLogConfigurationInput,
  ExperimentTemplateLogConfiguration,
  ExperimentTemplateS3LogConfiguration,
  ExperimentTemplateS3LogConfigurationInput,
  ExperimentTemplateStopCondition,
  ExperimentTemplateSummary,
  ExperimentTemplateTarget,
  ExperimentTemplateTargetFilter,
  ExperimentTemplateTargetInputFilter,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  TargetResourceType,
  TargetResourceTypeParameter,
  TargetResourceTypeSummary,
  UpdateExperimentTemplateActionInputItem,
  UpdateExperimentTemplateLogConfigurationInput,
  UpdateExperimentTemplateStopConditionInput,
  UpdateExperimentTemplateTargetInput,
  ValidationException,
} from "../models/models_0";

export const serializeAws_restJson1CreateExperimentTemplateCommand = async (
  input: CreateExperimentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/experimentTemplates";
  let body: any;
  body = JSON.stringify({
    ...(input.actions != null && {
      actions: serializeAws_restJson1CreateExperimentTemplateActionInputMap(input.actions, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.logConfiguration != null && {
      logConfiguration: serializeAws_restJson1CreateExperimentTemplateLogConfigurationInput(
        input.logConfiguration,
        context
      ),
    }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.stopConditions != null && {
      stopConditions: serializeAws_restJson1CreateExperimentTemplateStopConditionInputList(
        input.stopConditions,
        context
      ),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.targets != null && {
      targets: serializeAws_restJson1CreateExperimentTemplateTargetInputMap(input.targets, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteExperimentTemplateCommand = async (
  input: DeleteExperimentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/experimentTemplates/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetActionCommand = async (
  input: GetActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/actions/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetExperimentCommand = async (
  input: GetExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/experiments/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetExperimentTemplateCommand = async (
  input: GetExperimentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/experimentTemplates/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetTargetResourceTypeCommand = async (
  input: GetTargetResourceTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/targetResourceTypes/{resourceType}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "resourceType",
    () => input.resourceType!,
    "{resourceType}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListActionsCommand = async (
  input: ListActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/actions";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListExperimentsCommand = async (
  input: ListExperimentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/experiments";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListExperimentTemplatesCommand = async (
  input: ListExperimentTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/experimentTemplates";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListTargetResourceTypesCommand = async (
  input: ListTargetResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/targetResourceTypes";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1StartExperimentCommand = async (
  input: StartExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/experiments";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.experimentTemplateId != null && { experimentTemplateId: input.experimentTemplateId }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StopExperimentCommand = async (
  input: StopExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/experiments/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [() => input.tagKeys !== void 0, () => (input.tagKeys! || []).map((_entry) => _entry as any)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateExperimentTemplateCommand = async (
  input: UpdateExperimentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/experimentTemplates/{id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "id", () => input.id!, "{id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.actions != null && {
      actions: serializeAws_restJson1UpdateExperimentTemplateActionInputMap(input.actions, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.logConfiguration != null && {
      logConfiguration: serializeAws_restJson1UpdateExperimentTemplateLogConfigurationInput(
        input.logConfiguration,
        context
      ),
    }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.stopConditions != null && {
      stopConditions: serializeAws_restJson1UpdateExperimentTemplateStopConditionInputList(
        input.stopConditions,
        context
      ),
    }),
    ...(input.targets != null && {
      targets: serializeAws_restJson1UpdateExperimentTemplateTargetInputMap(input.targets, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CreateExperimentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperimentTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateExperimentTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experimentTemplate != null) {
    contents.experimentTemplate = deserializeAws_restJson1ExperimentTemplate(data.experimentTemplate, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateExperimentTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperimentTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.fis#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fis#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.fis#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteExperimentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperimentTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteExperimentTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experimentTemplate != null) {
    contents.experimentTemplate = deserializeAws_restJson1ExperimentTemplate(data.experimentTemplate, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteExperimentTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperimentTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.fis#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.action != null) {
    contents.action = deserializeAws_restJson1Action(data.action, context);
  }
  return contents;
};

const deserializeAws_restJson1GetActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.fis#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiment != null) {
    contents.experiment = deserializeAws_restJson1Experiment(data.experiment, context);
  }
  return contents;
};

const deserializeAws_restJson1GetExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.fis#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetExperimentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExperimentTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experimentTemplate != null) {
    contents.experimentTemplate = deserializeAws_restJson1ExperimentTemplate(data.experimentTemplate, context);
  }
  return contents;
};

const deserializeAws_restJson1GetExperimentTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.fis#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTargetResourceTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTargetResourceTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTargetResourceTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.targetResourceType != null) {
    contents.targetResourceType = deserializeAws_restJson1TargetResourceType(data.targetResourceType, context);
  }
  return contents;
};

const deserializeAws_restJson1GetTargetResourceTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTargetResourceTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.fis#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListActionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.actions != null) {
    contents.actions = deserializeAws_restJson1ActionSummaryList(data.actions, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListExperimentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListExperimentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiments != null) {
    contents.experiments = deserializeAws_restJson1ExperimentSummaryList(data.experiments, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListExperimentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListExperimentTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListExperimentTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experimentTemplates != null) {
    contents.experimentTemplates = deserializeAws_restJson1ExperimentTemplateSummaryList(
      data.experimentTemplates,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListExperimentTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1ListTargetResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTargetResourceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.targetResourceTypes != null) {
    contents.targetResourceTypes = deserializeAws_restJson1TargetResourceTypeSummaryList(
      data.targetResourceTypes,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListTargetResourceTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetResourceTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiment != null) {
    contents.experiment = deserializeAws_restJson1Experiment(data.experiment, context);
  }
  return contents;
};

const deserializeAws_restJson1StartExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.fis#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fis#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.fis#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StopExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiment != null) {
    contents.experiment = deserializeAws_restJson1Experiment(data.experiment, context);
  }
  return contents;
};

const deserializeAws_restJson1StopExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.fis#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  throwDefaultError({
    output,
    parsedBody,
    exceptionCtor: __BaseException,
    errorCode,
  });
};

export const deserializeAws_restJson1UpdateExperimentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperimentTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateExperimentTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experimentTemplate != null) {
    contents.experimentTemplate = deserializeAws_restJson1ExperimentTemplate(data.experimentTemplate, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateExperimentTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperimentTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.fis#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.fis#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

const map = __map;
const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1CreateExperimentTemplateActionInput = (
  input: CreateExperimentTemplateActionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionId != null && { actionId: input.actionId }),
    ...(input.description != null && { description: input.description }),
    ...(input.parameters != null && {
      parameters: serializeAws_restJson1ExperimentTemplateActionParameterMap(input.parameters, context),
    }),
    ...(input.startAfter != null && {
      startAfter: serializeAws_restJson1ExperimentTemplateActionStartAfterList(input.startAfter, context),
    }),
    ...(input.targets != null && {
      targets: serializeAws_restJson1ExperimentTemplateActionTargetMap(input.targets, context),
    }),
  };
};

const serializeAws_restJson1CreateExperimentTemplateActionInputMap = (
  input: Record<string, CreateExperimentTemplateActionInput>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1CreateExperimentTemplateActionInput(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1CreateExperimentTemplateLogConfigurationInput = (
  input: CreateExperimentTemplateLogConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.cloudWatchLogsConfiguration != null && {
      cloudWatchLogsConfiguration: serializeAws_restJson1ExperimentTemplateCloudWatchLogsLogConfigurationInput(
        input.cloudWatchLogsConfiguration,
        context
      ),
    }),
    ...(input.logSchemaVersion != null && { logSchemaVersion: input.logSchemaVersion }),
    ...(input.s3Configuration != null && {
      s3Configuration: serializeAws_restJson1ExperimentTemplateS3LogConfigurationInput(input.s3Configuration, context),
    }),
  };
};

const serializeAws_restJson1CreateExperimentTemplateStopConditionInput = (
  input: CreateExperimentTemplateStopConditionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.source != null && { source: input.source }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1CreateExperimentTemplateStopConditionInputList = (
  input: CreateExperimentTemplateStopConditionInput[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CreateExperimentTemplateStopConditionInput(entry, context);
    });
};

const serializeAws_restJson1CreateExperimentTemplateTargetInput = (
  input: CreateExperimentTemplateTargetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters != null && {
      filters: serializeAws_restJson1ExperimentTemplateTargetFilterInputList(input.filters, context),
    }),
    ...(input.parameters != null && {
      parameters: serializeAws_restJson1ExperimentTemplateTargetParameterMap(input.parameters, context),
    }),
    ...(input.resourceArns != null && {
      resourceArns: serializeAws_restJson1ResourceArnList(input.resourceArns, context),
    }),
    ...(input.resourceTags != null && { resourceTags: serializeAws_restJson1TagMap(input.resourceTags, context) }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
    ...(input.selectionMode != null && { selectionMode: input.selectionMode }),
  };
};

const serializeAws_restJson1CreateExperimentTemplateTargetInputMap = (
  input: Record<string, CreateExperimentTemplateTargetInput>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1CreateExperimentTemplateTargetInput(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1ExperimentTemplateActionParameterMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1ExperimentTemplateActionStartAfterList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ExperimentTemplateActionTargetMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1ExperimentTemplateCloudWatchLogsLogConfigurationInput = (
  input: ExperimentTemplateCloudWatchLogsLogConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupArn != null && { logGroupArn: input.logGroupArn }),
  };
};

const serializeAws_restJson1ExperimentTemplateS3LogConfigurationInput = (
  input: ExperimentTemplateS3LogConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

const serializeAws_restJson1ExperimentTemplateTargetFilterInputList = (
  input: ExperimentTemplateTargetInputFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ExperimentTemplateTargetInputFilter(entry, context);
    });
};

const serializeAws_restJson1ExperimentTemplateTargetFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ExperimentTemplateTargetInputFilter = (
  input: ExperimentTemplateTargetInputFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.path != null && { path: input.path }),
    ...(input.values != null && {
      values: serializeAws_restJson1ExperimentTemplateTargetFilterValues(input.values, context),
    }),
  };
};

const serializeAws_restJson1ExperimentTemplateTargetParameterMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1ResourceArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1UpdateExperimentTemplateActionInputItem = (
  input: UpdateExperimentTemplateActionInputItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionId != null && { actionId: input.actionId }),
    ...(input.description != null && { description: input.description }),
    ...(input.parameters != null && {
      parameters: serializeAws_restJson1ExperimentTemplateActionParameterMap(input.parameters, context),
    }),
    ...(input.startAfter != null && {
      startAfter: serializeAws_restJson1ExperimentTemplateActionStartAfterList(input.startAfter, context),
    }),
    ...(input.targets != null && {
      targets: serializeAws_restJson1ExperimentTemplateActionTargetMap(input.targets, context),
    }),
  };
};

const serializeAws_restJson1UpdateExperimentTemplateActionInputMap = (
  input: Record<string, UpdateExperimentTemplateActionInputItem>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1UpdateExperimentTemplateActionInputItem(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1UpdateExperimentTemplateLogConfigurationInput = (
  input: UpdateExperimentTemplateLogConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.cloudWatchLogsConfiguration != null && {
      cloudWatchLogsConfiguration: serializeAws_restJson1ExperimentTemplateCloudWatchLogsLogConfigurationInput(
        input.cloudWatchLogsConfiguration,
        context
      ),
    }),
    ...(input.logSchemaVersion != null && { logSchemaVersion: input.logSchemaVersion }),
    ...(input.s3Configuration != null && {
      s3Configuration: serializeAws_restJson1ExperimentTemplateS3LogConfigurationInput(input.s3Configuration, context),
    }),
  };
};

const serializeAws_restJson1UpdateExperimentTemplateStopConditionInput = (
  input: UpdateExperimentTemplateStopConditionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.source != null && { source: input.source }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1UpdateExperimentTemplateStopConditionInputList = (
  input: UpdateExperimentTemplateStopConditionInput[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1UpdateExperimentTemplateStopConditionInput(entry, context);
    });
};

const serializeAws_restJson1UpdateExperimentTemplateTargetInput = (
  input: UpdateExperimentTemplateTargetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters != null && {
      filters: serializeAws_restJson1ExperimentTemplateTargetFilterInputList(input.filters, context),
    }),
    ...(input.parameters != null && {
      parameters: serializeAws_restJson1ExperimentTemplateTargetParameterMap(input.parameters, context),
    }),
    ...(input.resourceArns != null && {
      resourceArns: serializeAws_restJson1ResourceArnList(input.resourceArns, context),
    }),
    ...(input.resourceTags != null && { resourceTags: serializeAws_restJson1TagMap(input.resourceTags, context) }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
    ...(input.selectionMode != null && { selectionMode: input.selectionMode }),
  };
};

const serializeAws_restJson1UpdateExperimentTemplateTargetInputMap = (
  input: Record<string, UpdateExperimentTemplateTargetInput>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1UpdateExperimentTemplateTargetInput(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1Action = (output: any, context: __SerdeContext): Action => {
  return {
    description: __expectString(output.description),
    id: __expectString(output.id),
    parameters:
      output.parameters != null ? deserializeAws_restJson1ActionParameterMap(output.parameters, context) : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    targets: output.targets != null ? deserializeAws_restJson1ActionTargetMap(output.targets, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ActionParameter = (output: any, context: __SerdeContext): ActionParameter => {
  return {
    description: __expectString(output.description),
    required: __expectBoolean(output.required),
  } as any;
};

const deserializeAws_restJson1ActionParameterMap = (
  output: any,
  context: __SerdeContext
): Record<string, ActionParameter> => {
  return Object.entries(output).reduce((acc: Record<string, ActionParameter>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ActionParameter(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1ActionSummary = (output: any, context: __SerdeContext): ActionSummary => {
  return {
    description: __expectString(output.description),
    id: __expectString(output.id),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    targets: output.targets != null ? deserializeAws_restJson1ActionTargetMap(output.targets, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ActionSummaryList = (output: any, context: __SerdeContext): ActionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ActionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ActionTarget = (output: any, context: __SerdeContext): ActionTarget => {
  return {
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_restJson1ActionTargetMap = (
  output: any,
  context: __SerdeContext
): Record<string, ActionTarget> => {
  return Object.entries(output).reduce((acc: Record<string, ActionTarget>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ActionTarget(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1Experiment = (output: any, context: __SerdeContext): Experiment => {
  return {
    actions: output.actions != null ? deserializeAws_restJson1ExperimentActionMap(output.actions, context) : undefined,
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    experimentTemplateId: __expectString(output.experimentTemplateId),
    id: __expectString(output.id),
    logConfiguration:
      output.logConfiguration != null
        ? deserializeAws_restJson1ExperimentLogConfiguration(output.logConfiguration, context)
        : undefined,
    roleArn: __expectString(output.roleArn),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    state: output.state != null ? deserializeAws_restJson1ExperimentState(output.state, context) : undefined,
    stopConditions:
      output.stopConditions != null
        ? deserializeAws_restJson1ExperimentStopConditionList(output.stopConditions, context)
        : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    targets: output.targets != null ? deserializeAws_restJson1ExperimentTargetMap(output.targets, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ExperimentAction = (output: any, context: __SerdeContext): ExperimentAction => {
  return {
    actionId: __expectString(output.actionId),
    description: __expectString(output.description),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    parameters:
      output.parameters != null
        ? deserializeAws_restJson1ExperimentActionParameterMap(output.parameters, context)
        : undefined,
    startAfter:
      output.startAfter != null
        ? deserializeAws_restJson1ExperimentActionStartAfterList(output.startAfter, context)
        : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    state: output.state != null ? deserializeAws_restJson1ExperimentActionState(output.state, context) : undefined,
    targets:
      output.targets != null ? deserializeAws_restJson1ExperimentActionTargetMap(output.targets, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ExperimentActionMap = (
  output: any,
  context: __SerdeContext
): Record<string, ExperimentAction> => {
  return Object.entries(output).reduce((acc: Record<string, ExperimentAction>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ExperimentAction(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1ExperimentActionParameterMap = (
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

const deserializeAws_restJson1ExperimentActionStartAfterList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ExperimentActionState = (output: any, context: __SerdeContext): ExperimentActionState => {
  return {
    reason: __expectString(output.reason),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ExperimentActionTargetMap = (
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

const deserializeAws_restJson1ExperimentCloudWatchLogsLogConfiguration = (
  output: any,
  context: __SerdeContext
): ExperimentCloudWatchLogsLogConfiguration => {
  return {
    logGroupArn: __expectString(output.logGroupArn),
  } as any;
};

const deserializeAws_restJson1ExperimentLogConfiguration = (
  output: any,
  context: __SerdeContext
): ExperimentLogConfiguration => {
  return {
    cloudWatchLogsConfiguration:
      output.cloudWatchLogsConfiguration != null
        ? deserializeAws_restJson1ExperimentCloudWatchLogsLogConfiguration(output.cloudWatchLogsConfiguration, context)
        : undefined,
    logSchemaVersion: __expectInt32(output.logSchemaVersion),
    s3Configuration:
      output.s3Configuration != null
        ? deserializeAws_restJson1ExperimentS3LogConfiguration(output.s3Configuration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExperimentS3LogConfiguration = (
  output: any,
  context: __SerdeContext
): ExperimentS3LogConfiguration => {
  return {
    bucketName: __expectString(output.bucketName),
    prefix: __expectString(output.prefix),
  } as any;
};

const deserializeAws_restJson1ExperimentState = (output: any, context: __SerdeContext): ExperimentState => {
  return {
    reason: __expectString(output.reason),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1ExperimentStopCondition = (
  output: any,
  context: __SerdeContext
): ExperimentStopCondition => {
  return {
    source: __expectString(output.source),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1ExperimentStopConditionList = (
  output: any,
  context: __SerdeContext
): ExperimentStopCondition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExperimentStopCondition(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExperimentSummary = (output: any, context: __SerdeContext): ExperimentSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    experimentTemplateId: __expectString(output.experimentTemplateId),
    id: __expectString(output.id),
    state: output.state != null ? deserializeAws_restJson1ExperimentState(output.state, context) : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ExperimentSummaryList = (output: any, context: __SerdeContext): ExperimentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExperimentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExperimentTarget = (output: any, context: __SerdeContext): ExperimentTarget => {
  return {
    filters:
      output.filters != null ? deserializeAws_restJson1ExperimentTargetFilterList(output.filters, context) : undefined,
    parameters:
      output.parameters != null
        ? deserializeAws_restJson1ExperimentTargetParameterMap(output.parameters, context)
        : undefined,
    resourceArns:
      output.resourceArns != null ? deserializeAws_restJson1ResourceArnList(output.resourceArns, context) : undefined,
    resourceTags:
      output.resourceTags != null ? deserializeAws_restJson1TagMap(output.resourceTags, context) : undefined,
    resourceType: __expectString(output.resourceType),
    selectionMode: __expectString(output.selectionMode),
  } as any;
};

const deserializeAws_restJson1ExperimentTargetFilter = (
  output: any,
  context: __SerdeContext
): ExperimentTargetFilter => {
  return {
    path: __expectString(output.path),
    values:
      output.values != null ? deserializeAws_restJson1ExperimentTargetFilterValues(output.values, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ExperimentTargetFilterList = (
  output: any,
  context: __SerdeContext
): ExperimentTargetFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExperimentTargetFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExperimentTargetFilterValues = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ExperimentTargetMap = (
  output: any,
  context: __SerdeContext
): Record<string, ExperimentTarget> => {
  return Object.entries(output).reduce((acc: Record<string, ExperimentTarget>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ExperimentTarget(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1ExperimentTargetParameterMap = (
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

const deserializeAws_restJson1ExperimentTemplate = (output: any, context: __SerdeContext): ExperimentTemplate => {
  return {
    actions:
      output.actions != null ? deserializeAws_restJson1ExperimentTemplateActionMap(output.actions, context) : undefined,
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    logConfiguration:
      output.logConfiguration != null
        ? deserializeAws_restJson1ExperimentTemplateLogConfiguration(output.logConfiguration, context)
        : undefined,
    roleArn: __expectString(output.roleArn),
    stopConditions:
      output.stopConditions != null
        ? deserializeAws_restJson1ExperimentTemplateStopConditionList(output.stopConditions, context)
        : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    targets:
      output.targets != null ? deserializeAws_restJson1ExperimentTemplateTargetMap(output.targets, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ExperimentTemplateAction = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateAction => {
  return {
    actionId: __expectString(output.actionId),
    description: __expectString(output.description),
    parameters:
      output.parameters != null
        ? deserializeAws_restJson1ExperimentTemplateActionParameterMap(output.parameters, context)
        : undefined,
    startAfter:
      output.startAfter != null
        ? deserializeAws_restJson1ExperimentTemplateActionStartAfterList(output.startAfter, context)
        : undefined,
    targets:
      output.targets != null
        ? deserializeAws_restJson1ExperimentTemplateActionTargetMap(output.targets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExperimentTemplateActionMap = (
  output: any,
  context: __SerdeContext
): Record<string, ExperimentTemplateAction> => {
  return Object.entries(output).reduce((acc: Record<string, ExperimentTemplateAction>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ExperimentTemplateAction(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1ExperimentTemplateActionParameterMap = (
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

const deserializeAws_restJson1ExperimentTemplateActionStartAfterList = (
  output: any,
  context: __SerdeContext
): string[] => {
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

const deserializeAws_restJson1ExperimentTemplateActionTargetMap = (
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

const deserializeAws_restJson1ExperimentTemplateCloudWatchLogsLogConfiguration = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateCloudWatchLogsLogConfiguration => {
  return {
    logGroupArn: __expectString(output.logGroupArn),
  } as any;
};

const deserializeAws_restJson1ExperimentTemplateLogConfiguration = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateLogConfiguration => {
  return {
    cloudWatchLogsConfiguration:
      output.cloudWatchLogsConfiguration != null
        ? deserializeAws_restJson1ExperimentTemplateCloudWatchLogsLogConfiguration(
            output.cloudWatchLogsConfiguration,
            context
          )
        : undefined,
    logSchemaVersion: __expectInt32(output.logSchemaVersion),
    s3Configuration:
      output.s3Configuration != null
        ? deserializeAws_restJson1ExperimentTemplateS3LogConfiguration(output.s3Configuration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExperimentTemplateS3LogConfiguration = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateS3LogConfiguration => {
  return {
    bucketName: __expectString(output.bucketName),
    prefix: __expectString(output.prefix),
  } as any;
};

const deserializeAws_restJson1ExperimentTemplateStopCondition = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateStopCondition => {
  return {
    source: __expectString(output.source),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1ExperimentTemplateStopConditionList = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateStopCondition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExperimentTemplateStopCondition(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExperimentTemplateSummary = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ExperimentTemplateSummaryList = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExperimentTemplateSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExperimentTemplateTarget = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateTarget => {
  return {
    filters:
      output.filters != null
        ? deserializeAws_restJson1ExperimentTemplateTargetFilterList(output.filters, context)
        : undefined,
    parameters:
      output.parameters != null
        ? deserializeAws_restJson1ExperimentTemplateTargetParameterMap(output.parameters, context)
        : undefined,
    resourceArns:
      output.resourceArns != null ? deserializeAws_restJson1ResourceArnList(output.resourceArns, context) : undefined,
    resourceTags:
      output.resourceTags != null ? deserializeAws_restJson1TagMap(output.resourceTags, context) : undefined,
    resourceType: __expectString(output.resourceType),
    selectionMode: __expectString(output.selectionMode),
  } as any;
};

const deserializeAws_restJson1ExperimentTemplateTargetFilter = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateTargetFilter => {
  return {
    path: __expectString(output.path),
    values:
      output.values != null
        ? deserializeAws_restJson1ExperimentTemplateTargetFilterValues(output.values, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExperimentTemplateTargetFilterList = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateTargetFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExperimentTemplateTargetFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExperimentTemplateTargetFilterValues = (
  output: any,
  context: __SerdeContext
): string[] => {
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

const deserializeAws_restJson1ExperimentTemplateTargetMap = (
  output: any,
  context: __SerdeContext
): Record<string, ExperimentTemplateTarget> => {
  return Object.entries(output).reduce((acc: Record<string, ExperimentTemplateTarget>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ExperimentTemplateTarget(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1ExperimentTemplateTargetParameterMap = (
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

const deserializeAws_restJson1ResourceArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TargetResourceType = (output: any, context: __SerdeContext): TargetResourceType => {
  return {
    description: __expectString(output.description),
    parameters:
      output.parameters != null
        ? deserializeAws_restJson1TargetResourceTypeParameterMap(output.parameters, context)
        : undefined,
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_restJson1TargetResourceTypeParameter = (
  output: any,
  context: __SerdeContext
): TargetResourceTypeParameter => {
  return {
    description: __expectString(output.description),
    required: __expectBoolean(output.required),
  } as any;
};

const deserializeAws_restJson1TargetResourceTypeParameterMap = (
  output: any,
  context: __SerdeContext
): Record<string, TargetResourceTypeParameter> => {
  return Object.entries(output).reduce(
    (acc: Record<string, TargetResourceTypeParameter>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1TargetResourceTypeParameter(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1TargetResourceTypeSummary = (
  output: any,
  context: __SerdeContext
): TargetResourceTypeSummary => {
  return {
    description: __expectString(output.description),
    resourceType: __expectString(output.resourceType),
  } as any;
};

const deserializeAws_restJson1TargetResourceTypeSummaryList = (
  output: any,
  context: __SerdeContext
): TargetResourceTypeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TargetResourceTypeSummary(entry, context);
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
