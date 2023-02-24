// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
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

import { CreateRuleCommandInput, CreateRuleCommandOutput } from "../commands/CreateRuleCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "../commands/DeleteRuleCommand";
import { GetRuleCommandInput, GetRuleCommandOutput } from "../commands/GetRuleCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { LockRuleCommandInput, LockRuleCommandOutput } from "../commands/LockRuleCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UnlockRuleCommandInput, UnlockRuleCommandOutput } from "../commands/UnlockRuleCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "../commands/UpdateRuleCommand";
import {
  ConflictException,
  InternalServerException,
  LockConfiguration,
  ResourceNotFoundException,
  ResourceTag,
  RetentionPeriod,
  RuleSummary,
  ServiceQuotaExceededException,
  Tag,
  UnlockDelay,
  ValidationException,
} from "../models/models_0";
import { RbinServiceException as __BaseException } from "../models/RbinServiceException";

export const serializeAws_restJson1CreateRuleCommand = async (
  input: CreateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rules";
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LockConfiguration != null && {
      LockConfiguration: serializeAws_restJson1LockConfiguration(input.LockConfiguration, context),
    }),
    ...(input.ResourceTags != null && {
      ResourceTags: serializeAws_restJson1ResourceTags(input.ResourceTags, context),
    }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.RetentionPeriod != null && {
      RetentionPeriod: serializeAws_restJson1RetentionPeriod(input.RetentionPeriod, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rules/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
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

export const serializeAws_restJson1GetRuleCommand = async (
  input: GetRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rules/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
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

export const serializeAws_restJson1ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-rules";
  let body: any;
  body = JSON.stringify({
    ...(input.LockState != null && { LockState: input.LockState }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceTags != null && {
      ResourceTags: serializeAws_restJson1ResourceTags(input.ResourceTags, context),
    }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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

export const serializeAws_restJson1LockRuleCommand = async (
  input: LockRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rules/{Identifier}/lock";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LockConfiguration != null && {
      LockConfiguration: serializeAws_restJson1LockConfiguration(input.LockConfiguration, context),
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1UnlockRuleCommand = async (
  input: UnlockRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rules/{Identifier}/unlock";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
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

export const serializeAws_restJson1UpdateRuleCommand = async (
  input: UpdateRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rules/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ResourceTags != null && {
      ResourceTags: serializeAws_restJson1ResourceTags(input.ResourceTags, context),
    }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.RetentionPeriod != null && {
      RetentionPeriod: serializeAws_restJson1RetentionPeriod(input.RetentionPeriod, context),
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

export const deserializeAws_restJson1CreateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Identifier != null) {
    contents.Identifier = __expectString(data.Identifier);
  }
  if (data.LockConfiguration != null) {
    contents.LockConfiguration = deserializeAws_restJson1LockConfiguration(data.LockConfiguration, context);
  }
  if (data.LockState != null) {
    contents.LockState = __expectString(data.LockState);
  }
  if (data.ResourceTags != null) {
    contents.ResourceTags = deserializeAws_restJson1ResourceTags(data.ResourceTags, context);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.RetentionPeriod != null) {
    contents.RetentionPeriod = deserializeAws_restJson1RetentionPeriod(data.RetentionPeriod, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.rbin#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rbin#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rbin#ValidationException":
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

export const deserializeAws_restJson1DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.rbin#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rbin#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rbin#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rbin#ValidationException":
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

export const deserializeAws_restJson1GetRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Identifier != null) {
    contents.Identifier = __expectString(data.Identifier);
  }
  if (data.LockConfiguration != null) {
    contents.LockConfiguration = deserializeAws_restJson1LockConfiguration(data.LockConfiguration, context);
  }
  if (data.LockEndTime != null) {
    contents.LockEndTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LockEndTime)));
  }
  if (data.LockState != null) {
    contents.LockState = __expectString(data.LockState);
  }
  if (data.ResourceTags != null) {
    contents.ResourceTags = deserializeAws_restJson1ResourceTags(data.ResourceTags, context);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.RetentionPeriod != null) {
    contents.RetentionPeriod = deserializeAws_restJson1RetentionPeriod(data.RetentionPeriod, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

const deserializeAws_restJson1GetRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.rbin#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rbin#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rbin#ValidationException":
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

export const deserializeAws_restJson1ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Rules != null) {
    contents.Rules = deserializeAws_restJson1RuleSummaryList(data.Rules, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.rbin#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rbin#ValidationException":
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
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
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
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.rbin#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rbin#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rbin#ValidationException":
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

export const deserializeAws_restJson1LockRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LockRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1LockRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Identifier != null) {
    contents.Identifier = __expectString(data.Identifier);
  }
  if (data.LockConfiguration != null) {
    contents.LockConfiguration = deserializeAws_restJson1LockConfiguration(data.LockConfiguration, context);
  }
  if (data.LockState != null) {
    contents.LockState = __expectString(data.LockState);
  }
  if (data.ResourceTags != null) {
    contents.ResourceTags = deserializeAws_restJson1ResourceTags(data.ResourceTags, context);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.RetentionPeriod != null) {
    contents.RetentionPeriod = deserializeAws_restJson1RetentionPeriod(data.RetentionPeriod, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

const deserializeAws_restJson1LockRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LockRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.rbin#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rbin#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rbin#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rbin#ValidationException":
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
  if (output.statusCode !== 201 && output.statusCode >= 300) {
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
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.rbin#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rbin#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rbin#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rbin#ValidationException":
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

export const deserializeAws_restJson1UnlockRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlockRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UnlockRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Identifier != null) {
    contents.Identifier = __expectString(data.Identifier);
  }
  if (data.LockConfiguration != null) {
    contents.LockConfiguration = deserializeAws_restJson1LockConfiguration(data.LockConfiguration, context);
  }
  if (data.LockEndTime != null) {
    contents.LockEndTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LockEndTime)));
  }
  if (data.LockState != null) {
    contents.LockState = __expectString(data.LockState);
  }
  if (data.ResourceTags != null) {
    contents.ResourceTags = deserializeAws_restJson1ResourceTags(data.ResourceTags, context);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.RetentionPeriod != null) {
    contents.RetentionPeriod = deserializeAws_restJson1RetentionPeriod(data.RetentionPeriod, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

const deserializeAws_restJson1UnlockRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlockRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.rbin#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rbin#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rbin#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rbin#ValidationException":
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.rbin#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rbin#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rbin#ValidationException":
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

export const deserializeAws_restJson1UpdateRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Identifier != null) {
    contents.Identifier = __expectString(data.Identifier);
  }
  if (data.LockEndTime != null) {
    contents.LockEndTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LockEndTime)));
  }
  if (data.LockState != null) {
    contents.LockState = __expectString(data.LockState);
  }
  if (data.ResourceTags != null) {
    contents.ResourceTags = deserializeAws_restJson1ResourceTags(data.ResourceTags, context);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.RetentionPeriod != null) {
    contents.RetentionPeriod = deserializeAws_restJson1RetentionPeriod(data.RetentionPeriod, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

const deserializeAws_restJson1UpdateRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.rbin#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rbin#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rbin#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rbin#ValidationException":
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason != null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason != null) {
    contents.Reason = __expectString(data.Reason);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason != null) {
    contents.Reason = __expectString(data.Reason);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason != null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1LockConfiguration = (input: LockConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.UnlockDelay != null && { UnlockDelay: serializeAws_restJson1UnlockDelay(input.UnlockDelay, context) }),
  };
};

const serializeAws_restJson1ResourceTag = (input: ResourceTag, context: __SerdeContext): any => {
  return {
    ...(input.ResourceTagKey != null && { ResourceTagKey: input.ResourceTagKey }),
    ...(input.ResourceTagValue != null && { ResourceTagValue: input.ResourceTagValue }),
  };
};

const serializeAws_restJson1ResourceTags = (input: ResourceTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ResourceTag(entry, context);
    });
};

const serializeAws_restJson1RetentionPeriod = (input: RetentionPeriod, context: __SerdeContext): any => {
  return {
    ...(input.RetentionPeriodUnit != null && { RetentionPeriodUnit: input.RetentionPeriodUnit }),
    ...(input.RetentionPeriodValue != null && { RetentionPeriodValue: input.RetentionPeriodValue }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1UnlockDelay = (input: UnlockDelay, context: __SerdeContext): any => {
  return {
    ...(input.UnlockDelayUnit != null && { UnlockDelayUnit: input.UnlockDelayUnit }),
    ...(input.UnlockDelayValue != null && { UnlockDelayValue: input.UnlockDelayValue }),
  };
};

const deserializeAws_restJson1LockConfiguration = (output: any, context: __SerdeContext): LockConfiguration => {
  return {
    UnlockDelay:
      output.UnlockDelay != null ? deserializeAws_restJson1UnlockDelay(output.UnlockDelay, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceTag = (output: any, context: __SerdeContext): ResourceTag => {
  return {
    ResourceTagKey: __expectString(output.ResourceTagKey),
    ResourceTagValue: __expectString(output.ResourceTagValue),
  } as any;
};

const deserializeAws_restJson1ResourceTags = (output: any, context: __SerdeContext): ResourceTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceTag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RetentionPeriod = (output: any, context: __SerdeContext): RetentionPeriod => {
  return {
    RetentionPeriodUnit: __expectString(output.RetentionPeriodUnit),
    RetentionPeriodValue: __expectInt32(output.RetentionPeriodValue),
  } as any;
};

const deserializeAws_restJson1RuleSummary = (output: any, context: __SerdeContext): RuleSummary => {
  return {
    Description: __expectString(output.Description),
    Identifier: __expectString(output.Identifier),
    LockState: __expectString(output.LockState),
    RetentionPeriod:
      output.RetentionPeriod != null
        ? deserializeAws_restJson1RetentionPeriod(output.RetentionPeriod, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RuleSummaryList = (output: any, context: __SerdeContext): RuleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuleSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UnlockDelay = (output: any, context: __SerdeContext): UnlockDelay => {
  return {
    UnlockDelayUnit: __expectString(output.UnlockDelayUnit),
    UnlockDelayValue: __expectInt32(output.UnlockDelayValue),
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
