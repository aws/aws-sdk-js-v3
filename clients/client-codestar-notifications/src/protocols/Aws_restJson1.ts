// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
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
  CreateNotificationRuleCommandInput,
  CreateNotificationRuleCommandOutput,
} from "../commands/CreateNotificationRuleCommand";
import {
  DeleteNotificationRuleCommandInput,
  DeleteNotificationRuleCommandOutput,
} from "../commands/DeleteNotificationRuleCommand";
import { DeleteTargetCommandInput, DeleteTargetCommandOutput } from "../commands/DeleteTargetCommand";
import {
  DescribeNotificationRuleCommandInput,
  DescribeNotificationRuleCommandOutput,
} from "../commands/DescribeNotificationRuleCommand";
import { ListEventTypesCommandInput, ListEventTypesCommandOutput } from "../commands/ListEventTypesCommand";
import {
  ListNotificationRulesCommandInput,
  ListNotificationRulesCommandOutput,
} from "../commands/ListNotificationRulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTargetsCommandInput, ListTargetsCommandOutput } from "../commands/ListTargetsCommand";
import { SubscribeCommandInput, SubscribeCommandOutput } from "../commands/SubscribeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UnsubscribeCommandInput, UnsubscribeCommandOutput } from "../commands/UnsubscribeCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateNotificationRuleCommandInput,
  UpdateNotificationRuleCommandOutput,
} from "../commands/UpdateNotificationRuleCommand";
import { CodestarNotificationsServiceException as __BaseException } from "../models/CodestarNotificationsServiceException";
import {
  AccessDeniedException,
  ConcurrentModificationException,
  ConfigurationException,
  EventTypeSummary,
  InvalidNextTokenException,
  LimitExceededException,
  ListEventTypesFilter,
  ListNotificationRulesFilter,
  ListTargetsFilter,
  NotificationRuleSummary,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  Target,
  TargetSummary,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateNotificationRuleCommand
 */
export const se_CreateNotificationRuleCommand = async (
  input: CreateNotificationRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createNotificationRule";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DetailType != null && { DetailType: input.DetailType }),
    ...(input.EventTypeIds != null && { EventTypeIds: se_EventTypeIds(input.EventTypeIds, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Resource != null && { Resource: input.Resource }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.Targets != null && { Targets: se_Targets(input.Targets, context) }),
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
 * serializeAws_restJson1DeleteNotificationRuleCommand
 */
export const se_DeleteNotificationRuleCommand = async (
  input: DeleteNotificationRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteNotificationRule";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn != null && { Arn: input.Arn }),
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
 * serializeAws_restJson1DeleteTargetCommand
 */
export const se_DeleteTargetCommand = async (
  input: DeleteTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteTarget";
  let body: any;
  body = JSON.stringify({
    ...(input.ForceUnsubscribeAll != null && { ForceUnsubscribeAll: input.ForceUnsubscribeAll }),
    ...(input.TargetAddress != null && { TargetAddress: input.TargetAddress }),
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
 * serializeAws_restJson1DescribeNotificationRuleCommand
 */
export const se_DescribeNotificationRuleCommand = async (
  input: DescribeNotificationRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeNotificationRule";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn != null && { Arn: input.Arn }),
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
 * serializeAws_restJson1ListEventTypesCommand
 */
export const se_ListEventTypesCommand = async (
  input: ListEventTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listEventTypes";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: se_ListEventTypesFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1ListNotificationRulesCommand
 */
export const se_ListNotificationRulesCommand = async (
  input: ListNotificationRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listNotificationRules";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: se_ListNotificationRulesFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listTagsForResource";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn != null && { Arn: input.Arn }),
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
 * serializeAws_restJson1ListTargetsCommand
 */
export const se_ListTargetsCommand = async (
  input: ListTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listTargets";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: se_ListTargetsFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
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
 * serializeAws_restJson1SubscribeCommand
 */
export const se_SubscribeCommand = async (
  input: SubscribeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/subscribe";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.ClientRequestToken != null && { ClientRequestToken: input.ClientRequestToken }),
    ...(input.Target != null && { Target: se_Target(input.Target, context) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
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
 * serializeAws_restJson1UnsubscribeCommand
 */
export const se_UnsubscribeCommand = async (
  input: UnsubscribeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/unsubscribe";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.TargetAddress != null && { TargetAddress: input.TargetAddress }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/untagResource/{Arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
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
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateNotificationRuleCommand
 */
export const se_UpdateNotificationRuleCommand = async (
  input: UpdateNotificationRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateNotificationRule";
  let body: any;
  body = JSON.stringify({
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.DetailType != null && { DetailType: input.DetailType }),
    ...(input.EventTypeIds != null && { EventTypeIds: se_EventTypeIds(input.EventTypeIds, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Targets != null && { Targets: se_Targets(input.Targets, context) }),
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
 * deserializeAws_restJson1CreateNotificationRuleCommand
 */
export const de_CreateNotificationRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateNotificationRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateNotificationRuleCommandError
 */
const de_CreateNotificationRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codestarnotifications#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.codestarnotifications#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ConfigurationException":
    case "com.amazonaws.codestarnotifications#ConfigurationException":
      throw await de_ConfigurationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codestarnotifications#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codestarnotifications#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
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
 * deserializeAws_restJson1DeleteNotificationRuleCommand
 */
export const de_DeleteNotificationRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteNotificationRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteNotificationRuleCommandError
 */
const de_DeleteNotificationRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestarnotifications#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codestarnotifications#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
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
 * deserializeAws_restJson1DeleteTargetCommand
 */
export const de_DeleteTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteTargetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTargetCommandError
 */
const de_DeleteTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
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
 * deserializeAws_restJson1DescribeNotificationRuleCommand
 */
export const de_DescribeNotificationRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeNotificationRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedBy != null) {
    contents.CreatedBy = __expectString(data.CreatedBy);
  }
  if (data.CreatedTimestamp != null) {
    contents.CreatedTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedTimestamp)));
  }
  if (data.DetailType != null) {
    contents.DetailType = __expectString(data.DetailType);
  }
  if (data.EventTypes != null) {
    contents.EventTypes = de_EventTypeBatch(data.EventTypes, context);
  }
  if (data.LastModifiedTimestamp != null) {
    contents.LastModifiedTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModifiedTimestamp)));
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Resource != null) {
    contents.Resource = __expectString(data.Resource);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.Tags != null) {
    contents.Tags = de_Tags(data.Tags, context);
  }
  if (data.Targets != null) {
    contents.Targets = de_TargetsBatch(data.Targets, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeNotificationRuleCommandError
 */
const de_DescribeNotificationRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarnotifications#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
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
 * deserializeAws_restJson1ListEventTypesCommand
 */
export const de_ListEventTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEventTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventTypes != null) {
    contents.EventTypes = de_EventTypeBatch(data.EventTypes, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListEventTypesCommandError
 */
const de_ListEventTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestarnotifications#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
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
 * deserializeAws_restJson1ListNotificationRulesCommand
 */
export const de_ListNotificationRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListNotificationRulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.NotificationRules != null) {
    contents.NotificationRules = de_NotificationRuleBatch(data.NotificationRules, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListNotificationRulesCommandError
 */
const de_ListNotificationRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestarnotifications#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
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
  if (data.Tags != null) {
    contents.Tags = de_Tags(data.Tags, context);
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
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarnotifications#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
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
 * deserializeAws_restJson1ListTargetsCommand
 */
export const de_ListTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTargetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Targets != null) {
    contents.Targets = de_TargetsBatch(data.Targets, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTargetsCommandError
 */
const de_ListTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestarnotifications#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
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
 * deserializeAws_restJson1SubscribeCommand
 */
export const de_SubscribeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SubscribeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SubscribeCommandError
 */
const de_SubscribeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationException":
    case "com.amazonaws.codestarnotifications#ConfigurationException":
      throw await de_ConfigurationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarnotifications#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = de_Tags(data.Tags, context);
  }
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
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestarnotifications#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codestarnotifications#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarnotifications#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
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
 * deserializeAws_restJson1UnsubscribeCommand
 */
export const de_UnsubscribeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UnsubscribeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UnsubscribeCommandError
 */
const de_UnsubscribeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
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
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestarnotifications#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.codestarnotifications#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarnotifications#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
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
 * deserializeAws_restJson1UpdateNotificationRuleCommand
 */
export const de_UpdateNotificationRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateNotificationRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNotificationRuleCommandError
 */
const de_UpdateNotificationRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConfigurationException":
    case "com.amazonaws.codestarnotifications#ConfigurationException":
      throw await de_ConfigurationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarnotifications#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
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
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConfigurationExceptionRes
 */
const de_ConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConfigurationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceAlreadyExistsException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotFoundException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1EventTypeIds
 */
const se_EventTypeIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ListEventTypesFilter
 */
const se_ListEventTypesFilter = (input: ListEventTypesFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1ListEventTypesFilters
 */
const se_ListEventTypesFilters = (input: ListEventTypesFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ListEventTypesFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1ListNotificationRulesFilter
 */
const se_ListNotificationRulesFilter = (input: ListNotificationRulesFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1ListNotificationRulesFilters
 */
const se_ListNotificationRulesFilters = (input: ListNotificationRulesFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ListNotificationRulesFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1ListTargetsFilter
 */
const se_ListTargetsFilter = (input: ListTargetsFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1ListTargetsFilters
 */
const se_ListTargetsFilters = (input: ListTargetsFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ListTargetsFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Target
 */
const se_Target = (input: Target, context: __SerdeContext): any => {
  return {
    ...(input.TargetAddress != null && { TargetAddress: input.TargetAddress }),
    ...(input.TargetType != null && { TargetType: input.TargetType }),
  };
};

/**
 * serializeAws_restJson1Targets
 */
const se_Targets = (input: Target[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Target(entry, context);
    });
};

/**
 * deserializeAws_restJson1EventTypeBatch
 */
const de_EventTypeBatch = (output: any, context: __SerdeContext): EventTypeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventTypeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EventTypeSummary
 */
const de_EventTypeSummary = (output: any, context: __SerdeContext): EventTypeSummary => {
  return {
    EventTypeId: __expectString(output.EventTypeId),
    EventTypeName: __expectString(output.EventTypeName),
    ResourceType: __expectString(output.ResourceType),
    ServiceName: __expectString(output.ServiceName),
  } as any;
};

/**
 * deserializeAws_restJson1NotificationRuleBatch
 */
const de_NotificationRuleBatch = (output: any, context: __SerdeContext): NotificationRuleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NotificationRuleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NotificationRuleSummary
 */
const de_NotificationRuleSummary = (output: any, context: __SerdeContext): NotificationRuleSummary => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TargetsBatch
 */
const de_TargetsBatch = (output: any, context: __SerdeContext): TargetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TargetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TargetSummary
 */
const de_TargetSummary = (output: any, context: __SerdeContext): TargetSummary => {
  return {
    TargetAddress: __expectString(output.TargetAddress),
    TargetStatus: __expectString(output.TargetStatus),
    TargetType: __expectString(output.TargetType),
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
