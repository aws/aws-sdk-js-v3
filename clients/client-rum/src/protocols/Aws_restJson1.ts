// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  BatchCreateRumMetricDefinitionsCommandInput,
  BatchCreateRumMetricDefinitionsCommandOutput,
} from "../commands/BatchCreateRumMetricDefinitionsCommand";
import {
  BatchDeleteRumMetricDefinitionsCommandInput,
  BatchDeleteRumMetricDefinitionsCommandOutput,
} from "../commands/BatchDeleteRumMetricDefinitionsCommand";
import {
  BatchGetRumMetricDefinitionsCommandInput,
  BatchGetRumMetricDefinitionsCommandOutput,
} from "../commands/BatchGetRumMetricDefinitionsCommand";
import { CreateAppMonitorCommandInput, CreateAppMonitorCommandOutput } from "../commands/CreateAppMonitorCommand";
import { DeleteAppMonitorCommandInput, DeleteAppMonitorCommandOutput } from "../commands/DeleteAppMonitorCommand";
import {
  DeleteRumMetricsDestinationCommandInput,
  DeleteRumMetricsDestinationCommandOutput,
} from "../commands/DeleteRumMetricsDestinationCommand";
import { GetAppMonitorCommandInput, GetAppMonitorCommandOutput } from "../commands/GetAppMonitorCommand";
import { GetAppMonitorDataCommandInput, GetAppMonitorDataCommandOutput } from "../commands/GetAppMonitorDataCommand";
import { ListAppMonitorsCommandInput, ListAppMonitorsCommandOutput } from "../commands/ListAppMonitorsCommand";
import {
  ListRumMetricsDestinationsCommandInput,
  ListRumMetricsDestinationsCommandOutput,
} from "../commands/ListRumMetricsDestinationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutRumEventsCommandInput, PutRumEventsCommandOutput } from "../commands/PutRumEventsCommand";
import {
  PutRumMetricsDestinationCommandInput,
  PutRumMetricsDestinationCommandOutput,
} from "../commands/PutRumMetricsDestinationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAppMonitorCommandInput, UpdateAppMonitorCommandOutput } from "../commands/UpdateAppMonitorCommand";
import {
  UpdateRumMetricDefinitionCommandInput,
  UpdateRumMetricDefinitionCommandOutput,
} from "../commands/UpdateRumMetricDefinitionCommand";
import {
  AccessDeniedException,
  AppMonitor,
  AppMonitorConfiguration,
  AppMonitorDetails,
  AppMonitorSummary,
  BatchCreateRumMetricDefinitionsError,
  BatchDeleteRumMetricDefinitionsError,
  ConflictException,
  CustomEvents,
  CwLog,
  DataStorage,
  InternalServerException,
  MetricDefinition,
  MetricDefinitionRequest,
  MetricDestinationSummary,
  QueryFilter,
  ResourceNotFoundException,
  RumEvent,
  ServiceQuotaExceededException,
  Telemetry,
  ThrottlingException,
  TimeRange,
  UserDetails,
  ValidationException,
} from "../models/models_0";
import { RUMServiceException as __BaseException } from "../models/RUMServiceException";

/**
 * serializeAws_restJson1BatchCreateRumMetricDefinitionsCommand
 */
export const se_BatchCreateRumMetricDefinitionsCommand = async (
  input: BatchCreateRumMetricDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rummetrics/{AppMonitorName}/metrics";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppMonitorName",
    () => input.AppMonitorName!,
    "{AppMonitorName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Destination != null && { Destination: input.Destination }),
    ...(input.DestinationArn != null && { DestinationArn: input.DestinationArn }),
    ...(input.MetricDefinitions != null && {
      MetricDefinitions: se_MetricDefinitionsRequest(input.MetricDefinitions, context),
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

/**
 * serializeAws_restJson1BatchDeleteRumMetricDefinitionsCommand
 */
export const se_BatchDeleteRumMetricDefinitionsCommand = async (
  input: BatchDeleteRumMetricDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rummetrics/{AppMonitorName}/metrics";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppMonitorName",
    () => input.AppMonitorName!,
    "{AppMonitorName}",
    false
  );
  const query: any = map({
    destination: [, __expectNonNull(input.Destination!, `Destination`)],
    destinationArn: [, input.DestinationArn!],
    metricDefinitionIds: [
      __expectNonNull(input.MetricDefinitionIds, `MetricDefinitionIds`) != null,
      () => (input.MetricDefinitionIds! || []).map((_entry) => _entry as any),
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
 * serializeAws_restJson1BatchGetRumMetricDefinitionsCommand
 */
export const se_BatchGetRumMetricDefinitionsCommand = async (
  input: BatchGetRumMetricDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rummetrics/{AppMonitorName}/metrics";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppMonitorName",
    () => input.AppMonitorName!,
    "{AppMonitorName}",
    false
  );
  const query: any = map({
    destination: [, __expectNonNull(input.Destination!, `Destination`)],
    destinationArn: [, input.DestinationArn!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1CreateAppMonitorCommand
 */
export const se_CreateAppMonitorCommand = async (
  input: CreateAppMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appmonitor";
  let body: any;
  body = JSON.stringify({
    ...(input.AppMonitorConfiguration != null && {
      AppMonitorConfiguration: se_AppMonitorConfiguration(input.AppMonitorConfiguration, context),
    }),
    ...(input.CustomEvents != null && { CustomEvents: se_CustomEvents(input.CustomEvents, context) }),
    ...(input.CwLogEnabled != null && { CwLogEnabled: input.CwLogEnabled }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.Name != null && { Name: input.Name }),
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
 * serializeAws_restJson1DeleteAppMonitorCommand
 */
export const se_DeleteAppMonitorCommand = async (
  input: DeleteAppMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appmonitor/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
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
 * serializeAws_restJson1DeleteRumMetricsDestinationCommand
 */
export const se_DeleteRumMetricsDestinationCommand = async (
  input: DeleteRumMetricsDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/rummetrics/{AppMonitorName}/metricsdestination";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppMonitorName",
    () => input.AppMonitorName!,
    "{AppMonitorName}",
    false
  );
  const query: any = map({
    destination: [, __expectNonNull(input.Destination!, `Destination`)],
    destinationArn: [, input.DestinationArn!],
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
 * serializeAws_restJson1GetAppMonitorCommand
 */
export const se_GetAppMonitorCommand = async (
  input: GetAppMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appmonitor/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
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
 * serializeAws_restJson1GetAppMonitorDataCommand
 */
export const se_GetAppMonitorDataCommand = async (
  input: GetAppMonitorDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appmonitor/{Name}/data";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: se_QueryFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TimeRange != null && { TimeRange: se_TimeRange(input.TimeRange, context) }),
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
 * serializeAws_restJson1ListAppMonitorsCommand
 */
export const se_ListAppMonitorsCommand = async (
  input: ListAppMonitorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appmonitors";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListRumMetricsDestinationsCommand
 */
export const se_ListRumMetricsDestinationsCommand = async (
  input: ListRumMetricsDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/rummetrics/{AppMonitorName}/metricsdestination";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppMonitorName",
    () => input.AppMonitorName!,
    "{AppMonitorName}",
    false
  );
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1PutRumEventsCommand
 */
export const se_PutRumEventsCommand = async (
  input: PutRumEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appmonitors/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AppMonitorDetails != null && {
      AppMonitorDetails: se_AppMonitorDetails(input.AppMonitorDetails, context),
    }),
    ...(input.BatchId != null && { BatchId: input.BatchId }),
    ...(input.RumEvents != null && { RumEvents: se_RumEventList(input.RumEvents, context) }),
    ...(input.UserDetails != null && { UserDetails: se_UserDetails(input.UserDetails, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "dataplane." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutRumMetricsDestinationCommand
 */
export const se_PutRumMetricsDestinationCommand = async (
  input: PutRumMetricsDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/rummetrics/{AppMonitorName}/metricsdestination";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppMonitorName",
    () => input.AppMonitorName!,
    "{AppMonitorName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Destination != null && { Destination: input.Destination }),
    ...(input.DestinationArn != null && { DestinationArn: input.DestinationArn }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
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
 * serializeAws_restJson1UpdateAppMonitorCommand
 */
export const se_UpdateAppMonitorCommand = async (
  input: UpdateAppMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/appmonitor/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.AppMonitorConfiguration != null && {
      AppMonitorConfiguration: se_AppMonitorConfiguration(input.AppMonitorConfiguration, context),
    }),
    ...(input.CustomEvents != null && { CustomEvents: se_CustomEvents(input.CustomEvents, context) }),
    ...(input.CwLogEnabled != null && { CwLogEnabled: input.CwLogEnabled }),
    ...(input.Domain != null && { Domain: input.Domain }),
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
 * serializeAws_restJson1UpdateRumMetricDefinitionCommand
 */
export const se_UpdateRumMetricDefinitionCommand = async (
  input: UpdateRumMetricDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rummetrics/{AppMonitorName}/metrics";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "AppMonitorName",
    () => input.AppMonitorName!,
    "{AppMonitorName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Destination != null && { Destination: input.Destination }),
    ...(input.DestinationArn != null && { DestinationArn: input.DestinationArn }),
    ...(input.MetricDefinition != null && {
      MetricDefinition: se_MetricDefinitionRequest(input.MetricDefinition, context),
    }),
    ...(input.MetricDefinitionId != null && { MetricDefinitionId: input.MetricDefinitionId }),
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
 * deserializeAws_restJson1BatchCreateRumMetricDefinitionsCommand
 */
export const de_BatchCreateRumMetricDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateRumMetricDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchCreateRumMetricDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Errors != null) {
    contents.Errors = de_BatchCreateRumMetricDefinitionsErrors(data.Errors, context);
  }
  if (data.MetricDefinitions != null) {
    contents.MetricDefinitions = de_MetricDefinitions(data.MetricDefinitions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchCreateRumMetricDefinitionsCommandError
 */
const de_BatchCreateRumMetricDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateRumMetricDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rum#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rum#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
 * deserializeAws_restJson1BatchDeleteRumMetricDefinitionsCommand
 */
export const de_BatchDeleteRumMetricDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteRumMetricDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDeleteRumMetricDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Errors != null) {
    contents.Errors = de_BatchDeleteRumMetricDefinitionsErrors(data.Errors, context);
  }
  if (data.MetricDefinitionIds != null) {
    contents.MetricDefinitionIds = de_MetricDefinitionIds(data.MetricDefinitionIds, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteRumMetricDefinitionsCommandError
 */
const de_BatchDeleteRumMetricDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteRumMetricDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rum#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
 * deserializeAws_restJson1BatchGetRumMetricDefinitionsCommand
 */
export const de_BatchGetRumMetricDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetRumMetricDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetRumMetricDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MetricDefinitions != null) {
    contents.MetricDefinitions = de_MetricDefinitions(data.MetricDefinitions, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetRumMetricDefinitionsCommandError
 */
const de_BatchGetRumMetricDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetRumMetricDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
 * deserializeAws_restJson1CreateAppMonitorCommand
 */
export const de_CreateAppMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAppMonitorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAppMonitorCommandError
 */
const de_CreateAppMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rum#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rum#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
 * deserializeAws_restJson1DeleteAppMonitorCommand
 */
export const de_DeleteAppMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAppMonitorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAppMonitorCommandError
 */
const de_DeleteAppMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rum#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
 * deserializeAws_restJson1DeleteRumMetricsDestinationCommand
 */
export const de_DeleteRumMetricsDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRumMetricsDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteRumMetricsDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRumMetricsDestinationCommandError
 */
const de_DeleteRumMetricsDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRumMetricsDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rum#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
 * deserializeAws_restJson1GetAppMonitorCommand
 */
export const de_GetAppMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAppMonitorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppMonitor != null) {
    contents.AppMonitor = de_AppMonitor(data.AppMonitor, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAppMonitorCommandError
 */
const de_GetAppMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
 * deserializeAws_restJson1GetAppMonitorDataCommand
 */
export const de_GetAppMonitorDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppMonitorDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAppMonitorDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Events != null) {
    contents.Events = de_EventDataList(data.Events, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAppMonitorDataCommandError
 */
const de_GetAppMonitorDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppMonitorDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
 * deserializeAws_restJson1ListAppMonitorsCommand
 */
export const de_ListAppMonitorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppMonitorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAppMonitorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AppMonitorSummaries != null) {
    contents.AppMonitorSummaries = de_AppMonitorSummaryList(data.AppMonitorSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAppMonitorsCommandError
 */
const de_ListAppMonitorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppMonitorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
 * deserializeAws_restJson1ListRumMetricsDestinationsCommand
 */
export const de_ListRumMetricsDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRumMetricsDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRumMetricsDestinationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Destinations != null) {
    contents.Destinations = de_MetricDestinationSummaryList(data.Destinations, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRumMetricsDestinationsCommandError
 */
const de_ListRumMetricsDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRumMetricsDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
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
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
 * deserializeAws_restJson1PutRumEventsCommand
 */
export const de_PutRumEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRumEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutRumEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutRumEventsCommandError
 */
const de_PutRumEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRumEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
 * deserializeAws_restJson1PutRumMetricsDestinationCommand
 */
export const de_PutRumMetricsDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRumMetricsDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutRumMetricsDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutRumMetricsDestinationCommandError
 */
const de_PutRumMetricsDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRumMetricsDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rum#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
 * deserializeAws_restJson1UpdateAppMonitorCommand
 */
export const de_UpdateAppMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAppMonitorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAppMonitorCommandError
 */
const de_UpdateAppMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rum#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
 * deserializeAws_restJson1UpdateRumMetricDefinitionCommand
 */
export const de_UpdateRumMetricDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRumMetricDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRumMetricDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRumMetricDefinitionCommandError
 */
const de_UpdateRumMetricDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRumMetricDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rum#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.rum#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.rum#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rum#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.rum#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.rum#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rum#ValidationException":
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceName != null) {
    contents.resourceName = __expectString(data.resourceName);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ConflictException({
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
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
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
  if (data.resourceName != null) {
    contents.resourceName = __expectString(data.resourceName);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
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
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ThrottlingException({
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
 * serializeAws_restJson1AppMonitorConfiguration
 */
const se_AppMonitorConfiguration = (input: AppMonitorConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowCookies != null && { AllowCookies: input.AllowCookies }),
    ...(input.EnableXRay != null && { EnableXRay: input.EnableXRay }),
    ...(input.ExcludedPages != null && { ExcludedPages: se_Pages(input.ExcludedPages, context) }),
    ...(input.FavoritePages != null && { FavoritePages: se_FavoritePages(input.FavoritePages, context) }),
    ...(input.GuestRoleArn != null && { GuestRoleArn: input.GuestRoleArn }),
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.IncludedPages != null && { IncludedPages: se_Pages(input.IncludedPages, context) }),
    ...(input.SessionSampleRate != null && { SessionSampleRate: __serializeFloat(input.SessionSampleRate) }),
    ...(input.Telemetries != null && { Telemetries: se_Telemetries(input.Telemetries, context) }),
  };
};

/**
 * serializeAws_restJson1AppMonitorDetails
 */
const se_AppMonitorDetails = (input: AppMonitorDetails, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_restJson1CustomEvents
 */
const se_CustomEvents = (input: CustomEvents, context: __SerdeContext): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_restJson1DimensionKeysMap
 */
const se_DimensionKeysMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1FavoritePages
 */
const se_FavoritePages = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1MetricDefinitionRequest
 */
const se_MetricDefinitionRequest = (input: MetricDefinitionRequest, context: __SerdeContext): any => {
  return {
    ...(input.DimensionKeys != null && { DimensionKeys: se_DimensionKeysMap(input.DimensionKeys, context) }),
    ...(input.EventPattern != null && { EventPattern: input.EventPattern }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.UnitLabel != null && { UnitLabel: input.UnitLabel }),
    ...(input.ValueKey != null && { ValueKey: input.ValueKey }),
  };
};

/**
 * serializeAws_restJson1MetricDefinitionsRequest
 */
const se_MetricDefinitionsRequest = (input: MetricDefinitionRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MetricDefinitionRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1Pages
 */
const se_Pages = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1QueryFilter
 */
const se_QueryFilter = (input: QueryFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_QueryFilterValueList(input.Values, context) }),
  };
};

/**
 * serializeAws_restJson1QueryFilters
 */
const se_QueryFilters = (input: QueryFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_QueryFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1QueryFilterValueList
 */
const se_QueryFilterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1RumEvent
 */
const se_RumEvent = (input: RumEvent, context: __SerdeContext): any => {
  return {
    ...(input.details != null && { details: __LazyJsonString.fromObject(input.details) }),
    ...(input.id != null && { id: input.id }),
    ...(input.metadata != null && { metadata: __LazyJsonString.fromObject(input.metadata) }),
    ...(input.timestamp != null && { timestamp: Math.round(input.timestamp.getTime() / 1000) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1RumEventList
 */
const se_RumEventList = (input: RumEvent[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RumEvent(entry, context);
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
 * serializeAws_restJson1Telemetries
 */
const se_Telemetries = (input: (Telemetry | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TimeRange
 */
const se_TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return {
    ...(input.After != null && { After: input.After }),
    ...(input.Before != null && { Before: input.Before }),
  };
};

/**
 * serializeAws_restJson1UserDetails
 */
const se_UserDetails = (input: UserDetails, context: __SerdeContext): any => {
  return {
    ...(input.sessionId != null && { sessionId: input.sessionId }),
    ...(input.userId != null && { userId: input.userId }),
  };
};

/**
 * deserializeAws_restJson1AppMonitor
 */
const de_AppMonitor = (output: any, context: __SerdeContext): AppMonitor => {
  return {
    AppMonitorConfiguration:
      output.AppMonitorConfiguration != null
        ? de_AppMonitorConfiguration(output.AppMonitorConfiguration, context)
        : undefined,
    Created: __expectString(output.Created),
    CustomEvents: output.CustomEvents != null ? de_CustomEvents(output.CustomEvents, context) : undefined,
    DataStorage: output.DataStorage != null ? de_DataStorage(output.DataStorage, context) : undefined,
    Domain: __expectString(output.Domain),
    Id: __expectString(output.Id),
    LastModified: __expectString(output.LastModified),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AppMonitorConfiguration
 */
const de_AppMonitorConfiguration = (output: any, context: __SerdeContext): AppMonitorConfiguration => {
  return {
    AllowCookies: __expectBoolean(output.AllowCookies),
    EnableXRay: __expectBoolean(output.EnableXRay),
    ExcludedPages: output.ExcludedPages != null ? de_Pages(output.ExcludedPages, context) : undefined,
    FavoritePages: output.FavoritePages != null ? de_FavoritePages(output.FavoritePages, context) : undefined,
    GuestRoleArn: __expectString(output.GuestRoleArn),
    IdentityPoolId: __expectString(output.IdentityPoolId),
    IncludedPages: output.IncludedPages != null ? de_Pages(output.IncludedPages, context) : undefined,
    SessionSampleRate: __limitedParseDouble(output.SessionSampleRate),
    Telemetries: output.Telemetries != null ? de_Telemetries(output.Telemetries, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AppMonitorSummary
 */
const de_AppMonitorSummary = (output: any, context: __SerdeContext): AppMonitorSummary => {
  return {
    Created: __expectString(output.Created),
    Id: __expectString(output.Id),
    LastModified: __expectString(output.LastModified),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_restJson1AppMonitorSummaryList
 */
const de_AppMonitorSummaryList = (output: any, context: __SerdeContext): AppMonitorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppMonitorSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchCreateRumMetricDefinitionsError
 */
const de_BatchCreateRumMetricDefinitionsError = (
  output: any,
  context: __SerdeContext
): BatchCreateRumMetricDefinitionsError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    MetricDefinition:
      output.MetricDefinition != null ? de_MetricDefinitionRequest(output.MetricDefinition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchCreateRumMetricDefinitionsErrors
 */
const de_BatchCreateRumMetricDefinitionsErrors = (
  output: any,
  context: __SerdeContext
): BatchCreateRumMetricDefinitionsError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchCreateRumMetricDefinitionsError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchDeleteRumMetricDefinitionsError
 */
const de_BatchDeleteRumMetricDefinitionsError = (
  output: any,
  context: __SerdeContext
): BatchDeleteRumMetricDefinitionsError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    MetricDefinitionId: __expectString(output.MetricDefinitionId),
  } as any;
};

/**
 * deserializeAws_restJson1BatchDeleteRumMetricDefinitionsErrors
 */
const de_BatchDeleteRumMetricDefinitionsErrors = (
  output: any,
  context: __SerdeContext
): BatchDeleteRumMetricDefinitionsError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchDeleteRumMetricDefinitionsError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CustomEvents
 */
const de_CustomEvents = (output: any, context: __SerdeContext): CustomEvents => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1CwLog
 */
const de_CwLog = (output: any, context: __SerdeContext): CwLog => {
  return {
    CwLogEnabled: __expectBoolean(output.CwLogEnabled),
    CwLogGroup: __expectString(output.CwLogGroup),
  } as any;
};

/**
 * deserializeAws_restJson1DataStorage
 */
const de_DataStorage = (output: any, context: __SerdeContext): DataStorage => {
  return {
    CwLog: output.CwLog != null ? de_CwLog(output.CwLog, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DimensionKeysMap
 */
const de_DimensionKeysMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1EventDataList
 */
const de_EventDataList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1FavoritePages
 */
const de_FavoritePages = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1MetricDefinition
 */
const de_MetricDefinition = (output: any, context: __SerdeContext): MetricDefinition => {
  return {
    DimensionKeys: output.DimensionKeys != null ? de_DimensionKeysMap(output.DimensionKeys, context) : undefined,
    EventPattern: __expectString(output.EventPattern),
    MetricDefinitionId: __expectString(output.MetricDefinitionId),
    Name: __expectString(output.Name),
    Namespace: __expectString(output.Namespace),
    UnitLabel: __expectString(output.UnitLabel),
    ValueKey: __expectString(output.ValueKey),
  } as any;
};

/**
 * deserializeAws_restJson1MetricDefinitionIds
 */
const de_MetricDefinitionIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1MetricDefinitionRequest
 */
const de_MetricDefinitionRequest = (output: any, context: __SerdeContext): MetricDefinitionRequest => {
  return {
    DimensionKeys: output.DimensionKeys != null ? de_DimensionKeysMap(output.DimensionKeys, context) : undefined,
    EventPattern: __expectString(output.EventPattern),
    Name: __expectString(output.Name),
    Namespace: __expectString(output.Namespace),
    UnitLabel: __expectString(output.UnitLabel),
    ValueKey: __expectString(output.ValueKey),
  } as any;
};

/**
 * deserializeAws_restJson1MetricDefinitions
 */
const de_MetricDefinitions = (output: any, context: __SerdeContext): MetricDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricDestinationSummary
 */
const de_MetricDestinationSummary = (output: any, context: __SerdeContext): MetricDestinationSummary => {
  return {
    Destination: __expectString(output.Destination),
    DestinationArn: __expectString(output.DestinationArn),
    IamRoleArn: __expectString(output.IamRoleArn),
  } as any;
};

/**
 * deserializeAws_restJson1MetricDestinationSummaryList
 */
const de_MetricDestinationSummaryList = (output: any, context: __SerdeContext): MetricDestinationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricDestinationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Pages
 */
const de_Pages = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Telemetries
 */
const de_Telemetries = (output: any, context: __SerdeContext): (Telemetry | string)[] => {
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
