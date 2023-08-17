// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  ConflictException,
  CreateExperimentTemplateActionInput,
  CreateExperimentTemplateLogConfigurationInput,
  CreateExperimentTemplateStopConditionInput,
  CreateExperimentTemplateTargetInput,
  Experiment,
  ExperimentAction,
  ExperimentSummary,
  ExperimentTemplate,
  ExperimentTemplateCloudWatchLogsLogConfigurationInput,
  ExperimentTemplateS3LogConfigurationInput,
  ExperimentTemplateSummary,
  ExperimentTemplateTargetInputFilter,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
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
  body = JSON.stringify(
    take(input, {
      actions: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      logConfiguration: (_) => _json(_),
      roleArn: [],
      stopConditions: (_) => _json(_),
      tags: (_) => _json(_),
      targets: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      experimentTemplateId: [],
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      actions: (_) => _json(_),
      description: [],
      logConfiguration: (_) => _json(_),
      roleArn: [],
      stopConditions: (_) => _json(_),
      targets: (_) => _json(_),
    })
  );
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
  const doc = take(data, {
    experimentTemplate: (_) => de_ExperimentTemplate(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    experimentTemplate: (_) => de_ExperimentTemplate(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    action: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    experiment: (_) => de_Experiment(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    experimentTemplate: (_) => de_ExperimentTemplate(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    targetResourceType: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    actions: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    experiments: (_) => de_ExperimentSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    experimentTemplates: (_) => de_ExperimentTemplateSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
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
  return throwDefaultError({
    output,
    parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    targetResourceTypes: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    experiment: (_) => de_Experiment(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    experiment: (_) => de_Experiment(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return throwDefaultError({
    output,
    parsedBody,
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
  return throwDefaultError({
    output,
    parsedBody,
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
  const doc = take(data, {
    experimentTemplate: (_) => de_ExperimentTemplate(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_CreateExperimentTemplateActionInput omitted.

// se_CreateExperimentTemplateActionInputMap omitted.

// se_CreateExperimentTemplateLogConfigurationInput omitted.

// se_CreateExperimentTemplateStopConditionInput omitted.

// se_CreateExperimentTemplateStopConditionInputList omitted.

// se_CreateExperimentTemplateTargetInput omitted.

// se_CreateExperimentTemplateTargetInputMap omitted.

// se_ExperimentTemplateActionParameterMap omitted.

// se_ExperimentTemplateActionStartAfterList omitted.

// se_ExperimentTemplateActionTargetMap omitted.

// se_ExperimentTemplateCloudWatchLogsLogConfigurationInput omitted.

// se_ExperimentTemplateS3LogConfigurationInput omitted.

// se_ExperimentTemplateTargetFilterInputList omitted.

// se_ExperimentTemplateTargetFilterValues omitted.

// se_ExperimentTemplateTargetInputFilter omitted.

// se_ExperimentTemplateTargetParameterMap omitted.

// se_ResourceArnList omitted.

// se_TagMap omitted.

// se_UpdateExperimentTemplateActionInputItem omitted.

// se_UpdateExperimentTemplateActionInputMap omitted.

// se_UpdateExperimentTemplateLogConfigurationInput omitted.

// se_UpdateExperimentTemplateStopConditionInput omitted.

// se_UpdateExperimentTemplateStopConditionInputList omitted.

// se_UpdateExperimentTemplateTargetInput omitted.

// se_UpdateExperimentTemplateTargetInputMap omitted.

// de_Action omitted.

// de_ActionParameter omitted.

// de_ActionParameterMap omitted.

// de_ActionSummary omitted.

// de_ActionSummaryList omitted.

// de_ActionTarget omitted.

// de_ActionTargetMap omitted.

/**
 * deserializeAws_restJson1Experiment
 */
const de_Experiment = (output: any, context: __SerdeContext): Experiment => {
  return take(output, {
    actions: (_: any) => de_ExperimentActionMap(_, context),
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    experimentTemplateId: __expectString,
    id: __expectString,
    logConfiguration: _json,
    roleArn: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    state: _json,
    stopConditions: _json,
    tags: _json,
    targets: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ExperimentAction
 */
const de_ExperimentAction = (output: any, context: __SerdeContext): ExperimentAction => {
  return take(output, {
    actionId: __expectString,
    description: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    parameters: _json,
    startAfter: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    state: _json,
    targets: _json,
  }) as any;
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

// de_ExperimentActionParameterMap omitted.

// de_ExperimentActionStartAfterList omitted.

// de_ExperimentActionState omitted.

// de_ExperimentActionTargetMap omitted.

// de_ExperimentCloudWatchLogsLogConfiguration omitted.

// de_ExperimentLogConfiguration omitted.

// de_ExperimentS3LogConfiguration omitted.

// de_ExperimentState omitted.

// de_ExperimentStopCondition omitted.

// de_ExperimentStopConditionList omitted.

/**
 * deserializeAws_restJson1ExperimentSummary
 */
const de_ExperimentSummary = (output: any, context: __SerdeContext): ExperimentSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    experimentTemplateId: __expectString,
    id: __expectString,
    state: _json,
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ExperimentSummaryList
 */
const de_ExperimentSummaryList = (output: any, context: __SerdeContext): ExperimentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExperimentSummary(entry, context);
    });
  return retVal;
};

// de_ExperimentTarget omitted.

// de_ExperimentTargetFilter omitted.

// de_ExperimentTargetFilterList omitted.

// de_ExperimentTargetFilterValues omitted.

// de_ExperimentTargetMap omitted.

// de_ExperimentTargetParameterMap omitted.

/**
 * deserializeAws_restJson1ExperimentTemplate
 */
const de_ExperimentTemplate = (output: any, context: __SerdeContext): ExperimentTemplate => {
  return take(output, {
    actions: _json,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    logConfiguration: _json,
    roleArn: __expectString,
    stopConditions: _json,
    tags: _json,
    targets: _json,
  }) as any;
};

// de_ExperimentTemplateAction omitted.

// de_ExperimentTemplateActionMap omitted.

// de_ExperimentTemplateActionParameterMap omitted.

// de_ExperimentTemplateActionStartAfterList omitted.

// de_ExperimentTemplateActionTargetMap omitted.

// de_ExperimentTemplateCloudWatchLogsLogConfiguration omitted.

// de_ExperimentTemplateLogConfiguration omitted.

// de_ExperimentTemplateS3LogConfiguration omitted.

// de_ExperimentTemplateStopCondition omitted.

// de_ExperimentTemplateStopConditionList omitted.

/**
 * deserializeAws_restJson1ExperimentTemplateSummary
 */
const de_ExperimentTemplateSummary = (output: any, context: __SerdeContext): ExperimentTemplateSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    id: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ExperimentTemplateSummaryList
 */
const de_ExperimentTemplateSummaryList = (output: any, context: __SerdeContext): ExperimentTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExperimentTemplateSummary(entry, context);
    });
  return retVal;
};

// de_ExperimentTemplateTarget omitted.

// de_ExperimentTemplateTargetFilter omitted.

// de_ExperimentTemplateTargetFilterList omitted.

// de_ExperimentTemplateTargetFilterValues omitted.

// de_ExperimentTemplateTargetMap omitted.

// de_ExperimentTemplateTargetParameterMap omitted.

// de_ResourceArnList omitted.

// de_TagMap omitted.

// de_TargetResourceType omitted.

// de_TargetResourceTypeParameter omitted.

// de_TargetResourceTypeParameterMap omitted.

// de_TargetResourceTypeSummary omitted.

// de_TargetResourceTypeSummaryList omitted.

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
