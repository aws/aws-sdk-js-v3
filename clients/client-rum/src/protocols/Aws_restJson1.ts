// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
  limitedParseDouble as __limitedParseDouble,
  map,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  ConflictException,
  CustomEvents,
  InternalServerException,
  MetricDefinitionRequest,
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
  body = JSON.stringify(
    take(input, {
      Destination: [],
      DestinationArn: [],
      MetricDefinitions: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      AppMonitorConfiguration: (_) => se_AppMonitorConfiguration(_, context),
      CustomEvents: (_) => _json(_),
      CwLogEnabled: [],
      Domain: [],
      Name: [],
      Tags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      TimeRange: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      AppMonitorDetails: (_) => _json(_),
      BatchId: [],
      RumEvents: (_) => se_RumEventList(_, context),
      UserDetails: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      Destination: [],
      DestinationArn: [],
      IamRoleArn: [],
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
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      AppMonitorConfiguration: (_) => se_AppMonitorConfiguration(_, context),
      CustomEvents: (_) => _json(_),
      CwLogEnabled: [],
      Domain: [],
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
  body = JSON.stringify(
    take(input, {
      Destination: [],
      DestinationArn: [],
      MetricDefinition: (_) => _json(_),
      MetricDefinitionId: [],
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
  const doc = take(data, {
    Errors: _json,
    MetricDefinitions: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Errors: _json,
    MetricDefinitionIds: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    MetricDefinitions: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Id: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppMonitor: (_) => de_AppMonitor(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Events: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AppMonitorSummaries: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Destinations: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
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
    ResourceArn: __expectString,
    Tags: _json,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    resourceName: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    resourceName: __expectString,
    resourceType: __expectString,
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
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
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

/**
 * serializeAws_restJson1AppMonitorConfiguration
 */
const se_AppMonitorConfiguration = (input: AppMonitorConfiguration, context: __SerdeContext): any => {
  return take(input, {
    AllowCookies: [],
    EnableXRay: [],
    ExcludedPages: _json,
    FavoritePages: _json,
    GuestRoleArn: [],
    IdentityPoolId: [],
    IncludedPages: _json,
    SessionSampleRate: __serializeFloat,
    Telemetries: _json,
  });
};

// se_AppMonitorDetails omitted.

// se_CustomEvents omitted.

// se_DimensionKeysMap omitted.

// se_FavoritePages omitted.

// se_MetricDefinitionRequest omitted.

// se_MetricDefinitionsRequest omitted.

// se_Pages omitted.

// se_QueryFilter omitted.

// se_QueryFilters omitted.

// se_QueryFilterValueList omitted.

/**
 * serializeAws_restJson1RumEvent
 */
const se_RumEvent = (input: RumEvent, context: __SerdeContext): any => {
  return take(input, {
    details: __LazyJsonString.fromObject,
    id: [],
    metadata: __LazyJsonString.fromObject,
    timestamp: (_) => Math.round(_.getTime() / 1000),
    type: [],
  });
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

// se_TagMap omitted.

// se_Telemetries omitted.

// se_TimeRange omitted.

// se_UserDetails omitted.

/**
 * deserializeAws_restJson1AppMonitor
 */
const de_AppMonitor = (output: any, context: __SerdeContext): AppMonitor => {
  return take(output, {
    AppMonitorConfiguration: (_: any) => de_AppMonitorConfiguration(_, context),
    Created: __expectString,
    CustomEvents: _json,
    DataStorage: _json,
    Domain: __expectString,
    Id: __expectString,
    LastModified: __expectString,
    Name: __expectString,
    State: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AppMonitorConfiguration
 */
const de_AppMonitorConfiguration = (output: any, context: __SerdeContext): AppMonitorConfiguration => {
  return take(output, {
    AllowCookies: __expectBoolean,
    EnableXRay: __expectBoolean,
    ExcludedPages: _json,
    FavoritePages: _json,
    GuestRoleArn: __expectString,
    IdentityPoolId: __expectString,
    IncludedPages: _json,
    SessionSampleRate: __limitedParseDouble,
    Telemetries: _json,
  }) as any;
};

// de_AppMonitorSummary omitted.

// de_AppMonitorSummaryList omitted.

// de_BatchCreateRumMetricDefinitionsError omitted.

// de_BatchCreateRumMetricDefinitionsErrors omitted.

// de_BatchDeleteRumMetricDefinitionsError omitted.

// de_BatchDeleteRumMetricDefinitionsErrors omitted.

// de_CustomEvents omitted.

// de_CwLog omitted.

// de_DataStorage omitted.

// de_DimensionKeysMap omitted.

// de_EventDataList omitted.

// de_FavoritePages omitted.

// de_MetricDefinition omitted.

// de_MetricDefinitionIds omitted.

// de_MetricDefinitionRequest omitted.

// de_MetricDefinitions omitted.

// de_MetricDestinationSummary omitted.

// de_MetricDestinationSummaryList omitted.

// de_Pages omitted.

// de_TagMap omitted.

// de_Telemetries omitted.

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
