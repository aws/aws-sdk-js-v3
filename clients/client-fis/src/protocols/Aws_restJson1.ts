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

/**
 * serializeAws_restJson1CreateExperimentTemplateCommand
 */
export const se_CreateExperimentTemplateCommand = async (
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
    ...(input.actions != null && { actions: se_CreateExperimentTemplateActionInputMap(input.actions, context) }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.logConfiguration != null && {
      logConfiguration: se_CreateExperimentTemplateLogConfigurationInput(input.logConfiguration, context),
    }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.stopConditions != null && {
      stopConditions: se_CreateExperimentTemplateStopConditionInputList(input.stopConditions, context),
    }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.targets != null && { targets: se_CreateExperimentTemplateTargetInputMap(input.targets, context) }),
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

/**
 * serializeAws_restJson1DeleteExperimentTemplateCommand
 */
export const se_DeleteExperimentTemplateCommand = async (
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

/**
 * serializeAws_restJson1GetActionCommand
 */
export const se_GetActionCommand = async (
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

/**
 * serializeAws_restJson1GetExperimentCommand
 */
export const se_GetExperimentCommand = async (
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

/**
 * serializeAws_restJson1GetExperimentTemplateCommand
 */
export const se_GetExperimentTemplateCommand = async (
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

/**
 * serializeAws_restJson1GetTargetResourceTypeCommand
 */
export const se_GetTargetResourceTypeCommand = async (
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

/**
 * serializeAws_restJson1ListActionsCommand
 */
export const se_ListActionsCommand = async (
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

/**
 * serializeAws_restJson1ListExperimentsCommand
 */
export const se_ListExperimentsCommand = async (
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

/**
 * serializeAws_restJson1ListExperimentTemplatesCommand
 */
export const se_ListExperimentTemplatesCommand = async (
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

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
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

/**
 * serializeAws_restJson1ListTargetResourceTypesCommand
 */
export const se_ListTargetResourceTypesCommand = async (
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

/**
 * serializeAws_restJson1StartExperimentCommand
 */
export const se_StartExperimentCommand = async (
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
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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

/**
 * serializeAws_restJson1StopExperimentCommand
 */
export const se_StopExperimentCommand = async (
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

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
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
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
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

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
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

/**
 * serializeAws_restJson1UpdateExperimentTemplateCommand
 */
export const se_UpdateExperimentTemplateCommand = async (
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
    ...(input.actions != null && { actions: se_UpdateExperimentTemplateActionInputMap(input.actions, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.logConfiguration != null && {
      logConfiguration: se_UpdateExperimentTemplateLogConfigurationInput(input.logConfiguration, context),
    }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.stopConditions != null && {
      stopConditions: se_UpdateExperimentTemplateStopConditionInputList(input.stopConditions, context),
    }),
    ...(input.targets != null && { targets: se_UpdateExperimentTemplateTargetInputMap(input.targets, context) }),
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

/**
 * deserializeAws_restJson1CreateExperimentTemplateCommand
 */
export const de_CreateExperimentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperimentTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateExperimentTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experimentTemplate != null) {
    contents.experimentTemplate = de_ExperimentTemplate(data.experimentTemplate, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateExperimentTemplateCommandError
 */
const de_CreateExperimentTemplateCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fis#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.fis#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteExperimentTemplateCommand
 */
export const de_DeleteExperimentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperimentTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteExperimentTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experimentTemplate != null) {
    contents.experimentTemplate = de_ExperimentTemplate(data.experimentTemplate, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteExperimentTemplateCommandError
 */
const de_DeleteExperimentTemplateCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetActionCommand
 */
export const de_GetActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetActionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.action != null) {
    contents.action = de_Action(data.action, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetActionCommandError
 */
const de_GetActionCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetExperimentCommand
 */
export const de_GetExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiment != null) {
    contents.experiment = de_Experiment(data.experiment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetExperimentCommandError
 */
const de_GetExperimentCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetExperimentTemplateCommand
 */
export const de_GetExperimentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetExperimentTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experimentTemplate != null) {
    contents.experimentTemplate = de_ExperimentTemplate(data.experimentTemplate, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetExperimentTemplateCommandError
 */
const de_GetExperimentTemplateCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetTargetResourceTypeCommand
 */
export const de_GetTargetResourceTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTargetResourceTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTargetResourceTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.targetResourceType != null) {
    contents.targetResourceType = de_TargetResourceType(data.targetResourceType, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTargetResourceTypeCommandError
 */
const de_GetTargetResourceTypeCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListActionsCommand
 */
export const de_ListActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListActionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.actions != null) {
    contents.actions = de_ActionSummaryList(data.actions, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListActionsCommandError
 */
const de_ListActionsCommandError = async (
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
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListExperimentsCommand
 */
export const de_ListExperimentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListExperimentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiments != null) {
    contents.experiments = de_ExperimentSummaryList(data.experiments, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListExperimentsCommandError
 */
const de_ListExperimentsCommandError = async (
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
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListExperimentTemplatesCommand
 */
export const de_ListExperimentTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListExperimentTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experimentTemplates != null) {
    contents.experimentTemplates = de_ExperimentTemplateSummaryList(data.experimentTemplates, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListExperimentTemplatesCommandError
 */
const de_ListExperimentTemplatesCommandError = async (
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
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
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

/**
 * deserializeAws_restJson1ListTargetResourceTypesCommand
 */
export const de_ListTargetResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTargetResourceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.targetResourceTypes != null) {
    contents.targetResourceTypes = de_TargetResourceTypeSummaryList(data.targetResourceTypes, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTargetResourceTypesCommandError
 */
const de_ListTargetResourceTypesCommandError = async (
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
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartExperimentCommand
 */
export const de_StartExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiment != null) {
    contents.experiment = de_Experiment(data.experiment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartExperimentCommandError
 */
const de_StartExperimentCommandError = async (
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
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.fis#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.fis#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StopExperimentCommand
 */
export const de_StopExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiment != null) {
    contents.experiment = de_Experiment(data.experiment, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StopExperimentCommandError
 */
const de_StopExperimentCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
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

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
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

/**
 * deserializeAws_restJson1UpdateExperimentTemplateCommand
 */
export const de_UpdateExperimentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperimentTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateExperimentTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experimentTemplate != null) {
    contents.experimentTemplate = de_ExperimentTemplate(data.experimentTemplate, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateExperimentTemplateCommandError
 */
const de_UpdateExperimentTemplateCommandError = async (
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
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.fis#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.fis#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
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

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
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

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
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

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
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

/**
 * serializeAws_restJson1CreateExperimentTemplateActionInput
 */
const se_CreateExperimentTemplateActionInput = (
  input: CreateExperimentTemplateActionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionId != null && { actionId: input.actionId }),
    ...(input.description != null && { description: input.description }),
    ...(input.parameters != null && { parameters: se_ExperimentTemplateActionParameterMap(input.parameters, context) }),
    ...(input.startAfter != null && {
      startAfter: se_ExperimentTemplateActionStartAfterList(input.startAfter, context),
    }),
    ...(input.targets != null && { targets: se_ExperimentTemplateActionTargetMap(input.targets, context) }),
  };
};

/**
 * serializeAws_restJson1CreateExperimentTemplateActionInputMap
 */
const se_CreateExperimentTemplateActionInputMap = (
  input: Record<string, CreateExperimentTemplateActionInput>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_CreateExperimentTemplateActionInput(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1CreateExperimentTemplateLogConfigurationInput
 */
const se_CreateExperimentTemplateLogConfigurationInput = (
  input: CreateExperimentTemplateLogConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.cloudWatchLogsConfiguration != null && {
      cloudWatchLogsConfiguration: se_ExperimentTemplateCloudWatchLogsLogConfigurationInput(
        input.cloudWatchLogsConfiguration,
        context
      ),
    }),
    ...(input.logSchemaVersion != null && { logSchemaVersion: input.logSchemaVersion }),
    ...(input.s3Configuration != null && {
      s3Configuration: se_ExperimentTemplateS3LogConfigurationInput(input.s3Configuration, context),
    }),
  };
};

/**
 * serializeAws_restJson1CreateExperimentTemplateStopConditionInput
 */
const se_CreateExperimentTemplateStopConditionInput = (
  input: CreateExperimentTemplateStopConditionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.source != null && { source: input.source }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1CreateExperimentTemplateStopConditionInputList
 */
const se_CreateExperimentTemplateStopConditionInputList = (
  input: CreateExperimentTemplateStopConditionInput[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CreateExperimentTemplateStopConditionInput(entry, context);
    });
};

/**
 * serializeAws_restJson1CreateExperimentTemplateTargetInput
 */
const se_CreateExperimentTemplateTargetInput = (
  input: CreateExperimentTemplateTargetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters != null && { filters: se_ExperimentTemplateTargetFilterInputList(input.filters, context) }),
    ...(input.parameters != null && { parameters: se_ExperimentTemplateTargetParameterMap(input.parameters, context) }),
    ...(input.resourceArns != null && { resourceArns: se_ResourceArnList(input.resourceArns, context) }),
    ...(input.resourceTags != null && { resourceTags: se_TagMap(input.resourceTags, context) }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
    ...(input.selectionMode != null && { selectionMode: input.selectionMode }),
  };
};

/**
 * serializeAws_restJson1CreateExperimentTemplateTargetInputMap
 */
const se_CreateExperimentTemplateTargetInputMap = (
  input: Record<string, CreateExperimentTemplateTargetInput>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_CreateExperimentTemplateTargetInput(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ExperimentTemplateActionParameterMap
 */
const se_ExperimentTemplateActionParameterMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ExperimentTemplateActionStartAfterList
 */
const se_ExperimentTemplateActionStartAfterList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ExperimentTemplateActionTargetMap
 */
const se_ExperimentTemplateActionTargetMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ExperimentTemplateCloudWatchLogsLogConfigurationInput
 */
const se_ExperimentTemplateCloudWatchLogsLogConfigurationInput = (
  input: ExperimentTemplateCloudWatchLogsLogConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroupArn != null && { logGroupArn: input.logGroupArn }),
  };
};

/**
 * serializeAws_restJson1ExperimentTemplateS3LogConfigurationInput
 */
const se_ExperimentTemplateS3LogConfigurationInput = (
  input: ExperimentTemplateS3LogConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucketName != null && { bucketName: input.bucketName }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

/**
 * serializeAws_restJson1ExperimentTemplateTargetFilterInputList
 */
const se_ExperimentTemplateTargetFilterInputList = (
  input: ExperimentTemplateTargetInputFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ExperimentTemplateTargetInputFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1ExperimentTemplateTargetFilterValues
 */
const se_ExperimentTemplateTargetFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ExperimentTemplateTargetInputFilter
 */
const se_ExperimentTemplateTargetInputFilter = (
  input: ExperimentTemplateTargetInputFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.path != null && { path: input.path }),
    ...(input.values != null && { values: se_ExperimentTemplateTargetFilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1ExperimentTemplateTargetParameterMap
 */
const se_ExperimentTemplateTargetParameterMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ResourceArnList
 */
const se_ResourceArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1UpdateExperimentTemplateActionInputItem
 */
const se_UpdateExperimentTemplateActionInputItem = (
  input: UpdateExperimentTemplateActionInputItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.actionId != null && { actionId: input.actionId }),
    ...(input.description != null && { description: input.description }),
    ...(input.parameters != null && { parameters: se_ExperimentTemplateActionParameterMap(input.parameters, context) }),
    ...(input.startAfter != null && {
      startAfter: se_ExperimentTemplateActionStartAfterList(input.startAfter, context),
    }),
    ...(input.targets != null && { targets: se_ExperimentTemplateActionTargetMap(input.targets, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateExperimentTemplateActionInputMap
 */
const se_UpdateExperimentTemplateActionInputMap = (
  input: Record<string, UpdateExperimentTemplateActionInputItem>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_UpdateExperimentTemplateActionInputItem(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1UpdateExperimentTemplateLogConfigurationInput
 */
const se_UpdateExperimentTemplateLogConfigurationInput = (
  input: UpdateExperimentTemplateLogConfigurationInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.cloudWatchLogsConfiguration != null && {
      cloudWatchLogsConfiguration: se_ExperimentTemplateCloudWatchLogsLogConfigurationInput(
        input.cloudWatchLogsConfiguration,
        context
      ),
    }),
    ...(input.logSchemaVersion != null && { logSchemaVersion: input.logSchemaVersion }),
    ...(input.s3Configuration != null && {
      s3Configuration: se_ExperimentTemplateS3LogConfigurationInput(input.s3Configuration, context),
    }),
  };
};

/**
 * serializeAws_restJson1UpdateExperimentTemplateStopConditionInput
 */
const se_UpdateExperimentTemplateStopConditionInput = (
  input: UpdateExperimentTemplateStopConditionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.source != null && { source: input.source }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1UpdateExperimentTemplateStopConditionInputList
 */
const se_UpdateExperimentTemplateStopConditionInputList = (
  input: UpdateExperimentTemplateStopConditionInput[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UpdateExperimentTemplateStopConditionInput(entry, context);
    });
};

/**
 * serializeAws_restJson1UpdateExperimentTemplateTargetInput
 */
const se_UpdateExperimentTemplateTargetInput = (
  input: UpdateExperimentTemplateTargetInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters != null && { filters: se_ExperimentTemplateTargetFilterInputList(input.filters, context) }),
    ...(input.parameters != null && { parameters: se_ExperimentTemplateTargetParameterMap(input.parameters, context) }),
    ...(input.resourceArns != null && { resourceArns: se_ResourceArnList(input.resourceArns, context) }),
    ...(input.resourceTags != null && { resourceTags: se_TagMap(input.resourceTags, context) }),
    ...(input.resourceType != null && { resourceType: input.resourceType }),
    ...(input.selectionMode != null && { selectionMode: input.selectionMode }),
  };
};

/**
 * serializeAws_restJson1UpdateExperimentTemplateTargetInputMap
 */
const se_UpdateExperimentTemplateTargetInputMap = (
  input: Record<string, UpdateExperimentTemplateTargetInput>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_UpdateExperimentTemplateTargetInput(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Action
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  return {
    description: __expectString(output.description),
    id: __expectString(output.id),
    parameters: output.parameters != null ? de_ActionParameterMap(output.parameters, context) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    targets: output.targets != null ? de_ActionTargetMap(output.targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ActionParameter
 */
const de_ActionParameter = (output: any, context: __SerdeContext): ActionParameter => {
  return {
    description: __expectString(output.description),
    required: __expectBoolean(output.required),
  } as any;
};

/**
 * deserializeAws_restJson1ActionParameterMap
 */
const de_ActionParameterMap = (output: any, context: __SerdeContext): Record<string, ActionParameter> => {
  return Object.entries(output).reduce((acc: Record<string, ActionParameter>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ActionParameter(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ActionSummary
 */
const de_ActionSummary = (output: any, context: __SerdeContext): ActionSummary => {
  return {
    description: __expectString(output.description),
    id: __expectString(output.id),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    targets: output.targets != null ? de_ActionTargetMap(output.targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ActionSummaryList
 */
const de_ActionSummaryList = (output: any, context: __SerdeContext): ActionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ActionTarget
 */
const de_ActionTarget = (output: any, context: __SerdeContext): ActionTarget => {
  return {
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_restJson1ActionTargetMap
 */
const de_ActionTargetMap = (output: any, context: __SerdeContext): Record<string, ActionTarget> => {
  return Object.entries(output).reduce((acc: Record<string, ActionTarget>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ActionTarget(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Experiment
 */
const de_Experiment = (output: any, context: __SerdeContext): Experiment => {
  return {
    actions: output.actions != null ? de_ExperimentActionMap(output.actions, context) : undefined,
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    experimentTemplateId: __expectString(output.experimentTemplateId),
    id: __expectString(output.id),
    logConfiguration:
      output.logConfiguration != null ? de_ExperimentLogConfiguration(output.logConfiguration, context) : undefined,
    roleArn: __expectString(output.roleArn),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    state: output.state != null ? de_ExperimentState(output.state, context) : undefined,
    stopConditions:
      output.stopConditions != null ? de_ExperimentStopConditionList(output.stopConditions, context) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    targets: output.targets != null ? de_ExperimentTargetMap(output.targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentAction
 */
const de_ExperimentAction = (output: any, context: __SerdeContext): ExperimentAction => {
  return {
    actionId: __expectString(output.actionId),
    description: __expectString(output.description),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    parameters: output.parameters != null ? de_ExperimentActionParameterMap(output.parameters, context) : undefined,
    startAfter: output.startAfter != null ? de_ExperimentActionStartAfterList(output.startAfter, context) : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    state: output.state != null ? de_ExperimentActionState(output.state, context) : undefined,
    targets: output.targets != null ? de_ExperimentActionTargetMap(output.targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentActionMap
 */
const de_ExperimentActionMap = (output: any, context: __SerdeContext): Record<string, ExperimentAction> => {
  return Object.entries(output).reduce((acc: Record<string, ExperimentAction>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ExperimentAction(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ExperimentActionParameterMap
 */
const de_ExperimentActionParameterMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ExperimentActionStartAfterList
 */
const de_ExperimentActionStartAfterList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ExperimentActionState
 */
const de_ExperimentActionState = (output: any, context: __SerdeContext): ExperimentActionState => {
  return {
    reason: __expectString(output.reason),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentActionTargetMap
 */
const de_ExperimentActionTargetMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ExperimentCloudWatchLogsLogConfiguration
 */
const de_ExperimentCloudWatchLogsLogConfiguration = (
  output: any,
  context: __SerdeContext
): ExperimentCloudWatchLogsLogConfiguration => {
  return {
    logGroupArn: __expectString(output.logGroupArn),
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentLogConfiguration
 */
const de_ExperimentLogConfiguration = (output: any, context: __SerdeContext): ExperimentLogConfiguration => {
  return {
    cloudWatchLogsConfiguration:
      output.cloudWatchLogsConfiguration != null
        ? de_ExperimentCloudWatchLogsLogConfiguration(output.cloudWatchLogsConfiguration, context)
        : undefined,
    logSchemaVersion: __expectInt32(output.logSchemaVersion),
    s3Configuration:
      output.s3Configuration != null ? de_ExperimentS3LogConfiguration(output.s3Configuration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentS3LogConfiguration
 */
const de_ExperimentS3LogConfiguration = (output: any, context: __SerdeContext): ExperimentS3LogConfiguration => {
  return {
    bucketName: __expectString(output.bucketName),
    prefix: __expectString(output.prefix),
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentState
 */
const de_ExperimentState = (output: any, context: __SerdeContext): ExperimentState => {
  return {
    reason: __expectString(output.reason),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentStopCondition
 */
const de_ExperimentStopCondition = (output: any, context: __SerdeContext): ExperimentStopCondition => {
  return {
    source: __expectString(output.source),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentStopConditionList
 */
const de_ExperimentStopConditionList = (output: any, context: __SerdeContext): ExperimentStopCondition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExperimentStopCondition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExperimentSummary
 */
const de_ExperimentSummary = (output: any, context: __SerdeContext): ExperimentSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    experimentTemplateId: __expectString(output.experimentTemplateId),
    id: __expectString(output.id),
    state: output.state != null ? de_ExperimentState(output.state, context) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentSummaryList
 */
const de_ExperimentSummaryList = (output: any, context: __SerdeContext): ExperimentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExperimentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExperimentTarget
 */
const de_ExperimentTarget = (output: any, context: __SerdeContext): ExperimentTarget => {
  return {
    filters: output.filters != null ? de_ExperimentTargetFilterList(output.filters, context) : undefined,
    parameters: output.parameters != null ? de_ExperimentTargetParameterMap(output.parameters, context) : undefined,
    resourceArns: output.resourceArns != null ? de_ResourceArnList(output.resourceArns, context) : undefined,
    resourceTags: output.resourceTags != null ? de_TagMap(output.resourceTags, context) : undefined,
    resourceType: __expectString(output.resourceType),
    selectionMode: __expectString(output.selectionMode),
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentTargetFilter
 */
const de_ExperimentTargetFilter = (output: any, context: __SerdeContext): ExperimentTargetFilter => {
  return {
    path: __expectString(output.path),
    values: output.values != null ? de_ExperimentTargetFilterValues(output.values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentTargetFilterList
 */
const de_ExperimentTargetFilterList = (output: any, context: __SerdeContext): ExperimentTargetFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExperimentTargetFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExperimentTargetFilterValues
 */
const de_ExperimentTargetFilterValues = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ExperimentTargetMap
 */
const de_ExperimentTargetMap = (output: any, context: __SerdeContext): Record<string, ExperimentTarget> => {
  return Object.entries(output).reduce((acc: Record<string, ExperimentTarget>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ExperimentTarget(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ExperimentTargetParameterMap
 */
const de_ExperimentTargetParameterMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ExperimentTemplate
 */
const de_ExperimentTemplate = (output: any, context: __SerdeContext): ExperimentTemplate => {
  return {
    actions: output.actions != null ? de_ExperimentTemplateActionMap(output.actions, context) : undefined,
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
        ? de_ExperimentTemplateLogConfiguration(output.logConfiguration, context)
        : undefined,
    roleArn: __expectString(output.roleArn),
    stopConditions:
      output.stopConditions != null
        ? de_ExperimentTemplateStopConditionList(output.stopConditions, context)
        : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    targets: output.targets != null ? de_ExperimentTemplateTargetMap(output.targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentTemplateAction
 */
const de_ExperimentTemplateAction = (output: any, context: __SerdeContext): ExperimentTemplateAction => {
  return {
    actionId: __expectString(output.actionId),
    description: __expectString(output.description),
    parameters:
      output.parameters != null ? de_ExperimentTemplateActionParameterMap(output.parameters, context) : undefined,
    startAfter:
      output.startAfter != null ? de_ExperimentTemplateActionStartAfterList(output.startAfter, context) : undefined,
    targets: output.targets != null ? de_ExperimentTemplateActionTargetMap(output.targets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentTemplateActionMap
 */
const de_ExperimentTemplateActionMap = (
  output: any,
  context: __SerdeContext
): Record<string, ExperimentTemplateAction> => {
  return Object.entries(output).reduce((acc: Record<string, ExperimentTemplateAction>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ExperimentTemplateAction(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ExperimentTemplateActionParameterMap
 */
const de_ExperimentTemplateActionParameterMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ExperimentTemplateActionStartAfterList
 */
const de_ExperimentTemplateActionStartAfterList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ExperimentTemplateActionTargetMap
 */
const de_ExperimentTemplateActionTargetMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ExperimentTemplateCloudWatchLogsLogConfiguration
 */
const de_ExperimentTemplateCloudWatchLogsLogConfiguration = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateCloudWatchLogsLogConfiguration => {
  return {
    logGroupArn: __expectString(output.logGroupArn),
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentTemplateLogConfiguration
 */
const de_ExperimentTemplateLogConfiguration = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateLogConfiguration => {
  return {
    cloudWatchLogsConfiguration:
      output.cloudWatchLogsConfiguration != null
        ? de_ExperimentTemplateCloudWatchLogsLogConfiguration(output.cloudWatchLogsConfiguration, context)
        : undefined,
    logSchemaVersion: __expectInt32(output.logSchemaVersion),
    s3Configuration:
      output.s3Configuration != null
        ? de_ExperimentTemplateS3LogConfiguration(output.s3Configuration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentTemplateS3LogConfiguration
 */
const de_ExperimentTemplateS3LogConfiguration = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateS3LogConfiguration => {
  return {
    bucketName: __expectString(output.bucketName),
    prefix: __expectString(output.prefix),
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentTemplateStopCondition
 */
const de_ExperimentTemplateStopCondition = (output: any, context: __SerdeContext): ExperimentTemplateStopCondition => {
  return {
    source: __expectString(output.source),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentTemplateStopConditionList
 */
const de_ExperimentTemplateStopConditionList = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateStopCondition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExperimentTemplateStopCondition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExperimentTemplateSummary
 */
const de_ExperimentTemplateSummary = (output: any, context: __SerdeContext): ExperimentTemplateSummary => {
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
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentTemplateSummaryList
 */
const de_ExperimentTemplateSummaryList = (output: any, context: __SerdeContext): ExperimentTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExperimentTemplateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExperimentTemplateTarget
 */
const de_ExperimentTemplateTarget = (output: any, context: __SerdeContext): ExperimentTemplateTarget => {
  return {
    filters: output.filters != null ? de_ExperimentTemplateTargetFilterList(output.filters, context) : undefined,
    parameters:
      output.parameters != null ? de_ExperimentTemplateTargetParameterMap(output.parameters, context) : undefined,
    resourceArns: output.resourceArns != null ? de_ResourceArnList(output.resourceArns, context) : undefined,
    resourceTags: output.resourceTags != null ? de_TagMap(output.resourceTags, context) : undefined,
    resourceType: __expectString(output.resourceType),
    selectionMode: __expectString(output.selectionMode),
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentTemplateTargetFilter
 */
const de_ExperimentTemplateTargetFilter = (output: any, context: __SerdeContext): ExperimentTemplateTargetFilter => {
  return {
    path: __expectString(output.path),
    values: output.values != null ? de_ExperimentTemplateTargetFilterValues(output.values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExperimentTemplateTargetFilterList
 */
const de_ExperimentTemplateTargetFilterList = (
  output: any,
  context: __SerdeContext
): ExperimentTemplateTargetFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExperimentTemplateTargetFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExperimentTemplateTargetFilterValues
 */
const de_ExperimentTemplateTargetFilterValues = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ExperimentTemplateTargetMap
 */
const de_ExperimentTemplateTargetMap = (
  output: any,
  context: __SerdeContext
): Record<string, ExperimentTemplateTarget> => {
  return Object.entries(output).reduce((acc: Record<string, ExperimentTemplateTarget>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ExperimentTemplateTarget(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ExperimentTemplateTargetParameterMap
 */
const de_ExperimentTemplateTargetParameterMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ResourceArnList
 */
const de_ResourceArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TargetResourceType
 */
const de_TargetResourceType = (output: any, context: __SerdeContext): TargetResourceType => {
  return {
    description: __expectString(output.description),
    parameters: output.parameters != null ? de_TargetResourceTypeParameterMap(output.parameters, context) : undefined,
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_restJson1TargetResourceTypeParameter
 */
const de_TargetResourceTypeParameter = (output: any, context: __SerdeContext): TargetResourceTypeParameter => {
  return {
    description: __expectString(output.description),
    required: __expectBoolean(output.required),
  } as any;
};

/**
 * deserializeAws_restJson1TargetResourceTypeParameterMap
 */
const de_TargetResourceTypeParameterMap = (
  output: any,
  context: __SerdeContext
): Record<string, TargetResourceTypeParameter> => {
  return Object.entries(output).reduce(
    (acc: Record<string, TargetResourceTypeParameter>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_TargetResourceTypeParameter(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1TargetResourceTypeSummary
 */
const de_TargetResourceTypeSummary = (output: any, context: __SerdeContext): TargetResourceTypeSummary => {
  return {
    description: __expectString(output.description),
    resourceType: __expectString(output.resourceType),
  } as any;
};

/**
 * deserializeAws_restJson1TargetResourceTypeSummaryList
 */
const de_TargetResourceTypeSummaryList = (output: any, context: __SerdeContext): TargetResourceTypeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TargetResourceTypeSummary(entry, context);
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
