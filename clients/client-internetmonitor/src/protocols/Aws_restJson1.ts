// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateMonitorCommandInput, CreateMonitorCommandOutput } from "../commands/CreateMonitorCommand";
import { DeleteMonitorCommandInput, DeleteMonitorCommandOutput } from "../commands/DeleteMonitorCommand";
import { GetHealthEventCommandInput, GetHealthEventCommandOutput } from "../commands/GetHealthEventCommand";
import { GetMonitorCommandInput, GetMonitorCommandOutput } from "../commands/GetMonitorCommand";
import { ListHealthEventsCommandInput, ListHealthEventsCommandOutput } from "../commands/ListHealthEventsCommand";
import { ListMonitorsCommandInput, ListMonitorsCommandOutput } from "../commands/ListMonitorsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateMonitorCommandInput, UpdateMonitorCommandOutput } from "../commands/UpdateMonitorCommand";
import { InternetMonitorServiceException as __BaseException } from "../models/InternetMonitorServiceException";
import {
  AccessDeniedException,
  AvailabilityMeasurement,
  BadRequestException,
  ConflictException,
  HealthEvent,
  ImpactedLocation,
  InternalServerErrorException,
  InternalServerException,
  InternetHealth,
  InternetMeasurementsLogDelivery,
  LimitExceededException,
  Monitor,
  Network,
  NetworkImpairment,
  NotFoundException,
  PerformanceMeasurement,
  ResourceNotFoundException,
  RoundTripTime,
  S3Config,
  ThrottlingException,
  TooManyRequestsException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateMonitorCommand
 */
export const se_CreateMonitorCommand = async (
  input: CreateMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20210603/Monitors";
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.InternetMeasurementsLogDelivery != null && {
      InternetMeasurementsLogDelivery: se_InternetMeasurementsLogDelivery(
        input.InternetMeasurementsLogDelivery,
        context
      ),
    }),
    ...(input.MaxCityNetworksToMonitor != null && { MaxCityNetworksToMonitor: input.MaxCityNetworksToMonitor }),
    ...(input.MonitorName != null && { MonitorName: input.MonitorName }),
    ...(input.Resources != null && { Resources: se_SetOfARNs(input.Resources, context) }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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
 * serializeAws_restJson1DeleteMonitorCommand
 */
export const se_DeleteMonitorCommand = async (
  input: DeleteMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20210603/Monitors/{MonitorName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MonitorName", () => input.MonitorName!, "{MonitorName}", false);
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
 * serializeAws_restJson1GetHealthEventCommand
 */
export const se_GetHealthEventCommand = async (
  input: GetHealthEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20210603/Monitors/{MonitorName}/HealthEvents/{EventId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MonitorName", () => input.MonitorName!, "{MonitorName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "EventId", () => input.EventId!, "{EventId}", false);
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
 * serializeAws_restJson1GetMonitorCommand
 */
export const se_GetMonitorCommand = async (
  input: GetMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20210603/Monitors/{MonitorName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MonitorName", () => input.MonitorName!, "{MonitorName}", false);
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
 * serializeAws_restJson1ListHealthEventsCommand
 */
export const se_ListHealthEventsCommand = async (
  input: ListHealthEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v20210603/Monitors/{MonitorName}/HealthEvents";
  resolvedPath = __resolvedPath(resolvedPath, input, "MonitorName", () => input.MonitorName!, "{MonitorName}", false);
  const query: any = map({
    StartTime: [
      () => input.StartTime !== void 0,
      () => (input.StartTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
    EndTime: [() => input.EndTime !== void 0, () => (input.EndTime!.toISOString().split(".")[0] + "Z").toString()],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    EventStatus: [, input.EventStatus!],
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
 * serializeAws_restJson1ListMonitorsCommand
 */
export const se_ListMonitorsCommand = async (
  input: ListMonitorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20210603/Monitors";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    MonitorStatus: [, input.MonitorStatus!],
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
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

/**
 * serializeAws_restJson1UpdateMonitorCommand
 */
export const se_UpdateMonitorCommand = async (
  input: UpdateMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v20210603/Monitors/{MonitorName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "MonitorName", () => input.MonitorName!, "{MonitorName}", false);
  let body: any;
  body = JSON.stringify({
    ClientToken: input.ClientToken ?? generateIdempotencyToken(),
    ...(input.InternetMeasurementsLogDelivery != null && {
      InternetMeasurementsLogDelivery: se_InternetMeasurementsLogDelivery(
        input.InternetMeasurementsLogDelivery,
        context
      ),
    }),
    ...(input.MaxCityNetworksToMonitor != null && { MaxCityNetworksToMonitor: input.MaxCityNetworksToMonitor }),
    ...(input.ResourcesToAdd != null && { ResourcesToAdd: se_SetOfARNs(input.ResourcesToAdd, context) }),
    ...(input.ResourcesToRemove != null && { ResourcesToRemove: se_SetOfARNs(input.ResourcesToRemove, context) }),
    ...(input.Status != null && { Status: input.Status }),
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
 * deserializeAws_restJson1CreateMonitorCommand
 */
export const de_CreateMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMonitorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateMonitorCommandError
 */
const de_CreateMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.internetmonitor#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.internetmonitor#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.internetmonitor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.internetmonitor#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.internetmonitor#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.internetmonitor#ValidationException":
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
 * deserializeAws_restJson1DeleteMonitorCommand
 */
export const de_DeleteMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteMonitorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMonitorCommandError
 */
const de_DeleteMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.internetmonitor#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.internetmonitor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.internetmonitor#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.internetmonitor#ValidationException":
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
 * deserializeAws_restJson1GetHealthEventCommand
 */
export const de_GetHealthEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetHealthEventCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreatedAt));
  }
  if (data.EndedAt != null) {
    contents.EndedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.EndedAt));
  }
  if (data.EventArn != null) {
    contents.EventArn = __expectString(data.EventArn);
  }
  if (data.EventId != null) {
    contents.EventId = __expectString(data.EventId);
  }
  if (data.ImpactType != null) {
    contents.ImpactType = __expectString(data.ImpactType);
  }
  if (data.ImpactedLocations != null) {
    contents.ImpactedLocations = de_ImpactedLocationsList(data.ImpactedLocations, context);
  }
  if (data.LastUpdatedAt != null) {
    contents.LastUpdatedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.LastUpdatedAt));
  }
  if (data.PercentOfTotalTrafficImpacted != null) {
    contents.PercentOfTotalTrafficImpacted = __limitedParseDouble(data.PercentOfTotalTrafficImpacted);
  }
  if (data.StartedAt != null) {
    contents.StartedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.StartedAt));
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetHealthEventCommandError
 */
const de_GetHealthEventCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthEventCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.internetmonitor#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.internetmonitor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.internetmonitor#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.internetmonitor#ValidationException":
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
 * deserializeAws_restJson1GetMonitorCommand
 */
export const de_GetMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMonitorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreatedAt));
  }
  if (data.InternetMeasurementsLogDelivery != null) {
    contents.InternetMeasurementsLogDelivery = de_InternetMeasurementsLogDelivery(
      data.InternetMeasurementsLogDelivery,
      context
    );
  }
  if (data.MaxCityNetworksToMonitor != null) {
    contents.MaxCityNetworksToMonitor = __expectInt32(data.MaxCityNetworksToMonitor);
  }
  if (data.ModifiedAt != null) {
    contents.ModifiedAt = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.ModifiedAt));
  }
  if (data.MonitorArn != null) {
    contents.MonitorArn = __expectString(data.MonitorArn);
  }
  if (data.MonitorName != null) {
    contents.MonitorName = __expectString(data.MonitorName);
  }
  if (data.ProcessingStatus != null) {
    contents.ProcessingStatus = __expectString(data.ProcessingStatus);
  }
  if (data.ProcessingStatusInfo != null) {
    contents.ProcessingStatusInfo = __expectString(data.ProcessingStatusInfo);
  }
  if (data.Resources != null) {
    contents.Resources = de_SetOfARNs(data.Resources, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMonitorCommandError
 */
const de_GetMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.internetmonitor#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.internetmonitor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.internetmonitor#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.internetmonitor#ValidationException":
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
 * deserializeAws_restJson1ListHealthEventsCommand
 */
export const de_ListHealthEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHealthEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListHealthEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HealthEvents != null) {
    contents.HealthEvents = de_HealthEventList(data.HealthEvents, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListHealthEventsCommandError
 */
const de_ListHealthEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHealthEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.internetmonitor#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.internetmonitor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.internetmonitor#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.internetmonitor#ValidationException":
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
 * deserializeAws_restJson1ListMonitorsCommand
 */
export const de_ListMonitorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMonitorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Monitors != null) {
    contents.Monitors = de_MonitorList(data.Monitors, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMonitorsCommandError
 */
const de_ListMonitorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.internetmonitor#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.internetmonitor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.internetmonitor#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.internetmonitor#ValidationException":
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
    contents.Tags = de_TagMap(data.Tags, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.internetmonitor#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.internetmonitor#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.internetmonitor#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.internetmonitor#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.internetmonitor#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.internetmonitor#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.internetmonitor#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.internetmonitor#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.internetmonitor#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.internetmonitor#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "AccessDeniedException":
    case "com.amazonaws.internetmonitor#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "BadRequestException":
    case "com.amazonaws.internetmonitor#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.internetmonitor#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.internetmonitor#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.internetmonitor#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateMonitorCommand
 */
export const de_UpdateMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMonitorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MonitorArn != null) {
    contents.MonitorArn = __expectString(data.MonitorArn);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMonitorCommandError
 */
const de_UpdateMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.internetmonitor#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.internetmonitor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.internetmonitor#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.internetmonitor#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.internetmonitor#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.internetmonitor#ValidationException":
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

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
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new NotFoundException({
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
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
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
 * serializeAws_restJson1InternetMeasurementsLogDelivery
 */
const se_InternetMeasurementsLogDelivery = (input: InternetMeasurementsLogDelivery, context: __SerdeContext): any => {
  return {
    ...(input.S3Config != null && { S3Config: se_S3Config(input.S3Config, context) }),
  };
};

/**
 * serializeAws_restJson1S3Config
 */
const se_S3Config = (input: S3Config, context: __SerdeContext): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.BucketPrefix != null && { BucketPrefix: input.BucketPrefix }),
    ...(input.LogDeliveryStatus != null && { LogDeliveryStatus: input.LogDeliveryStatus }),
  };
};

/**
 * serializeAws_restJson1SetOfARNs
 */
const se_SetOfARNs = (input: string[], context: __SerdeContext): any => {
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
 * deserializeAws_restJson1AvailabilityMeasurement
 */
const de_AvailabilityMeasurement = (output: any, context: __SerdeContext): AvailabilityMeasurement => {
  return {
    ExperienceScore: __limitedParseDouble(output.ExperienceScore),
    PercentOfClientLocationImpacted: __limitedParseDouble(output.PercentOfClientLocationImpacted),
    PercentOfTotalTrafficImpacted: __limitedParseDouble(output.PercentOfTotalTrafficImpacted),
  } as any;
};

/**
 * deserializeAws_restJson1HealthEvent
 */
const de_HealthEvent = (output: any, context: __SerdeContext): HealthEvent => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreatedAt)) : undefined,
    EndedAt: output.EndedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.EndedAt)) : undefined,
    EventArn: __expectString(output.EventArn),
    EventId: __expectString(output.EventId),
    ImpactType: __expectString(output.ImpactType),
    ImpactedLocations:
      output.ImpactedLocations != null ? de_ImpactedLocationsList(output.ImpactedLocations, context) : undefined,
    LastUpdatedAt:
      output.LastUpdatedAt != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.LastUpdatedAt))
        : undefined,
    PercentOfTotalTrafficImpacted: __limitedParseDouble(output.PercentOfTotalTrafficImpacted),
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.StartedAt)) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1HealthEventList
 */
const de_HealthEventList = (output: any, context: __SerdeContext): HealthEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HealthEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImpactedLocation
 */
const de_ImpactedLocation = (output: any, context: __SerdeContext): ImpactedLocation => {
  return {
    ASName: __expectString(output.ASName),
    ASNumber: __expectLong(output.ASNumber),
    CausedBy: output.CausedBy != null ? de_NetworkImpairment(output.CausedBy, context) : undefined,
    City: __expectString(output.City),
    Country: __expectString(output.Country),
    CountryCode: __expectString(output.CountryCode),
    InternetHealth: output.InternetHealth != null ? de_InternetHealth(output.InternetHealth, context) : undefined,
    Latitude: __limitedParseDouble(output.Latitude),
    Longitude: __limitedParseDouble(output.Longitude),
    Metro: __expectString(output.Metro),
    ServiceLocation: __expectString(output.ServiceLocation),
    Status: __expectString(output.Status),
    Subdivision: __expectString(output.Subdivision),
    SubdivisionCode: __expectString(output.SubdivisionCode),
  } as any;
};

/**
 * deserializeAws_restJson1ImpactedLocationsList
 */
const de_ImpactedLocationsList = (output: any, context: __SerdeContext): ImpactedLocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImpactedLocation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InternetHealth
 */
const de_InternetHealth = (output: any, context: __SerdeContext): InternetHealth => {
  return {
    Availability: output.Availability != null ? de_AvailabilityMeasurement(output.Availability, context) : undefined,
    Performance: output.Performance != null ? de_PerformanceMeasurement(output.Performance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InternetMeasurementsLogDelivery
 */
const de_InternetMeasurementsLogDelivery = (output: any, context: __SerdeContext): InternetMeasurementsLogDelivery => {
  return {
    S3Config: output.S3Config != null ? de_S3Config(output.S3Config, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Monitor
 */
const de_Monitor = (output: any, context: __SerdeContext): Monitor => {
  return {
    MonitorArn: __expectString(output.MonitorArn),
    MonitorName: __expectString(output.MonitorName),
    ProcessingStatus: __expectString(output.ProcessingStatus),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1MonitorList
 */
const de_MonitorList = (output: any, context: __SerdeContext): Monitor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Monitor(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Network
 */
const de_Network = (output: any, context: __SerdeContext): Network => {
  return {
    ASName: __expectString(output.ASName),
    ASNumber: __expectLong(output.ASNumber),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkImpairment
 */
const de_NetworkImpairment = (output: any, context: __SerdeContext): NetworkImpairment => {
  return {
    AsPath: output.AsPath != null ? de_NetworkList(output.AsPath, context) : undefined,
    NetworkEventType: __expectString(output.NetworkEventType),
    Networks: output.Networks != null ? de_NetworkList(output.Networks, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NetworkList
 */
const de_NetworkList = (output: any, context: __SerdeContext): Network[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Network(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PerformanceMeasurement
 */
const de_PerformanceMeasurement = (output: any, context: __SerdeContext): PerformanceMeasurement => {
  return {
    ExperienceScore: __limitedParseDouble(output.ExperienceScore),
    PercentOfClientLocationImpacted: __limitedParseDouble(output.PercentOfClientLocationImpacted),
    PercentOfTotalTrafficImpacted: __limitedParseDouble(output.PercentOfTotalTrafficImpacted),
    RoundTripTime: output.RoundTripTime != null ? de_RoundTripTime(output.RoundTripTime, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RoundTripTime
 */
const de_RoundTripTime = (output: any, context: __SerdeContext): RoundTripTime => {
  return {
    P50: __limitedParseDouble(output.P50),
    P90: __limitedParseDouble(output.P90),
    P95: __limitedParseDouble(output.P95),
  } as any;
};

/**
 * deserializeAws_restJson1S3Config
 */
const de_S3Config = (output: any, context: __SerdeContext): S3Config => {
  return {
    BucketName: __expectString(output.BucketName),
    BucketPrefix: __expectString(output.BucketPrefix),
    LogDeliveryStatus: __expectString(output.LogDeliveryStatus),
  } as any;
};

/**
 * deserializeAws_restJson1SetOfARNs
 */
const de_SetOfARNs = (output: any, context: __SerdeContext): string[] => {
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
