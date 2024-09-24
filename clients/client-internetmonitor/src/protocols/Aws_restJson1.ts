// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateMonitorCommandInput, CreateMonitorCommandOutput } from "../commands/CreateMonitorCommand";
import { DeleteMonitorCommandInput, DeleteMonitorCommandOutput } from "../commands/DeleteMonitorCommand";
import { GetHealthEventCommandInput, GetHealthEventCommandOutput } from "../commands/GetHealthEventCommand";
import { GetInternetEventCommandInput, GetInternetEventCommandOutput } from "../commands/GetInternetEventCommand";
import { GetMonitorCommandInput, GetMonitorCommandOutput } from "../commands/GetMonitorCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "../commands/GetQueryResultsCommand";
import { GetQueryStatusCommandInput, GetQueryStatusCommandOutput } from "../commands/GetQueryStatusCommand";
import { ListHealthEventsCommandInput, ListHealthEventsCommandOutput } from "../commands/ListHealthEventsCommand";
import { ListInternetEventsCommandInput, ListInternetEventsCommandOutput } from "../commands/ListInternetEventsCommand";
import { ListMonitorsCommandInput, ListMonitorsCommandOutput } from "../commands/ListMonitorsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartQueryCommandInput, StartQueryCommandOutput } from "../commands/StartQueryCommand";
import { StopQueryCommandInput, StopQueryCommandOutput } from "../commands/StopQueryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateMonitorCommandInput, UpdateMonitorCommandOutput } from "../commands/UpdateMonitorCommand";
import { InternetMonitorServiceException as __BaseException } from "../models/InternetMonitorServiceException";
import {
  AccessDeniedException,
  AvailabilityMeasurement,
  BadRequestException,
  ClientLocation,
  ConflictException,
  FilterParameter,
  HealthEvent,
  HealthEventsConfig,
  ImpactedLocation,
  InternalServerErrorException,
  InternalServerException,
  InternetEventSummary,
  InternetHealth,
  InternetMeasurementsLogDelivery,
  LimitExceededException,
  LocalHealthEventsConfig,
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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v20210603/Monitors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      HealthEventsConfig: (_) => se_HealthEventsConfig(_, context),
      InternetMeasurementsLogDelivery: (_) => _json(_),
      MaxCityNetworksToMonitor: [],
      MonitorName: [],
      Resources: (_) => _json(_),
      Tags: (_) => _json(_),
      TrafficPercentageToMonitor: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMonitorCommand
 */
export const se_DeleteMonitorCommand = async (
  input: DeleteMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v20210603/Monitors/{MonitorName}");
  b.p("MonitorName", () => input.MonitorName!, "{MonitorName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetHealthEventCommand
 */
export const se_GetHealthEventCommand = async (
  input: GetHealthEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v20210603/Monitors/{MonitorName}/HealthEvents/{EventId}");
  b.p("MonitorName", () => input.MonitorName!, "{MonitorName}", false);
  b.p("EventId", () => input.EventId!, "{EventId}", false);
  const query: any = map({
    [_LAI]: [, input[_LAI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInternetEventCommand
 */
export const se_GetInternetEventCommand = async (
  input: GetInternetEventCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v20210603/InternetEvents/{EventId}");
  b.p("EventId", () => input.EventId!, "{EventId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMonitorCommand
 */
export const se_GetMonitorCommand = async (
  input: GetMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v20210603/Monitors/{MonitorName}");
  b.p("MonitorName", () => input.MonitorName!, "{MonitorName}", false);
  const query: any = map({
    [_LAI]: [, input[_LAI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQueryResultsCommand
 */
export const se_GetQueryResultsCommand = async (
  input: GetQueryResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v20210603/Monitors/{MonitorName}/Queries/{QueryId}/Results");
  b.p("MonitorName", () => input.MonitorName!, "{MonitorName}", false);
  b.p("QueryId", () => input.QueryId!, "{QueryId}", false);
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQueryStatusCommand
 */
export const se_GetQueryStatusCommand = async (
  input: GetQueryStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v20210603/Monitors/{MonitorName}/Queries/{QueryId}/Status");
  b.p("MonitorName", () => input.MonitorName!, "{MonitorName}", false);
  b.p("QueryId", () => input.QueryId!, "{QueryId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListHealthEventsCommand
 */
export const se_ListHealthEventsCommand = async (
  input: ListHealthEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v20210603/Monitors/{MonitorName}/HealthEvents");
  b.p("MonitorName", () => input.MonitorName!, "{MonitorName}", false);
  const query: any = map({
    [_ST]: [() => input.StartTime !== void 0, () => __serializeDateTime(input[_ST]!).toString()],
    [_ET]: [() => input.EndTime !== void 0, () => __serializeDateTime(input[_ET]!).toString()],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_ES]: [, input[_ES]!],
    [_LAI]: [, input[_LAI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInternetEventsCommand
 */
export const se_ListInternetEventsCommand = async (
  input: ListInternetEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v20210603/InternetEvents");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_IEMR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_ST]: [() => input.StartTime !== void 0, () => __serializeDateTime(input[_ST]!).toString()],
    [_ET]: [() => input.EndTime !== void 0, () => __serializeDateTime(input[_ET]!).toString()],
    [_ES]: [, input[_ES]!],
    [_ETv]: [, input[_ETv]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMonitorsCommand
 */
export const se_ListMonitorsCommand = async (
  input: ListMonitorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v20210603/Monitors");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_MS]: [, input[_MS]!],
    [_ILA]: [() => input.IncludeLinkedAccounts !== void 0, () => input[_ILA]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartQueryCommand
 */
export const se_StartQueryCommand = async (
  input: StartQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v20210603/Monitors/{MonitorName}/Queries");
  b.p("MonitorName", () => input.MonitorName!, "{MonitorName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => __serializeDateTime(_),
      FilterParameters: (_) => _json(_),
      LinkedAccountId: [],
      QueryType: [],
      StartTime: (_) => __serializeDateTime(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopQueryCommand
 */
export const se_StopQueryCommand = async (
  input: StopQueryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v20210603/Monitors/{MonitorName}/Queries/{QueryId}");
  b.p("MonitorName", () => input.MonitorName!, "{MonitorName}", false);
  b.p("QueryId", () => input.QueryId!, "{QueryId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMonitorCommand
 */
export const se_UpdateMonitorCommand = async (
  input: UpdateMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v20210603/Monitors/{MonitorName}");
  b.p("MonitorName", () => input.MonitorName!, "{MonitorName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      HealthEventsConfig: (_) => se_HealthEventsConfig(_, context),
      InternetMeasurementsLogDelivery: (_) => _json(_),
      MaxCityNetworksToMonitor: [],
      ResourcesToAdd: (_) => _json(_),
      ResourcesToRemove: (_) => _json(_),
      Status: [],
      TrafficPercentageToMonitor: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateMonitorCommand
 */
export const de_CreateMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMonitorCommand
 */
export const de_DeleteMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetHealthEventCommand
 */
export const de_GetHealthEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetHealthEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    EndedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    EventArn: __expectString,
    EventId: __expectString,
    HealthScoreThreshold: __limitedParseDouble,
    ImpactType: __expectString,
    ImpactedLocations: (_) => de_ImpactedLocationsList(_, context),
    LastUpdatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    PercentOfTotalTrafficImpacted: __limitedParseDouble,
    StartedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetInternetEventCommand
 */
export const de_GetInternetEventCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInternetEventCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ClientLocation: (_) => de_ClientLocation(_, context),
    EndedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    EventArn: __expectString,
    EventId: __expectString,
    EventStatus: __expectString,
    EventType: __expectString,
    StartedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMonitorCommand
 */
export const de_GetMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    HealthEventsConfig: (_) => de_HealthEventsConfig(_, context),
    InternetMeasurementsLogDelivery: _json,
    MaxCityNetworksToMonitor: __expectInt32,
    ModifiedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    MonitorArn: __expectString,
    MonitorName: __expectString,
    ProcessingStatus: __expectString,
    ProcessingStatusInfo: __expectString,
    Resources: _json,
    Status: __expectString,
    Tags: _json,
    TrafficPercentageToMonitor: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQueryResultsCommand
 */
export const de_GetQueryResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Data: _json,
    Fields: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQueryStatusCommand
 */
export const de_GetQueryStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListHealthEventsCommand
 */
export const de_ListHealthEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHealthEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    HealthEvents: (_) => de_HealthEventList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInternetEventsCommand
 */
export const de_ListInternetEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInternetEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InternetEvents: (_) => de_InternetEventsList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMonitorsCommand
 */
export const de_ListMonitorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Monitors: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartQueryCommand
 */
export const de_StartQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    QueryId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopQueryCommand
 */
export const de_StopQueryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMonitorCommand
 */
export const de_UpdateMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MonitorArn: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.internetmonitor#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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

// se_FilterList omitted.

// se_FilterParameter omitted.

// se_FilterParameters omitted.

/**
 * serializeAws_restJson1HealthEventsConfig
 */
const se_HealthEventsConfig = (input: HealthEventsConfig, context: __SerdeContext): any => {
  return take(input, {
    AvailabilityLocalHealthEventsConfig: (_) => se_LocalHealthEventsConfig(_, context),
    AvailabilityScoreThreshold: __serializeFloat,
    PerformanceLocalHealthEventsConfig: (_) => se_LocalHealthEventsConfig(_, context),
    PerformanceScoreThreshold: __serializeFloat,
  });
};

// se_InternetMeasurementsLogDelivery omitted.

/**
 * serializeAws_restJson1LocalHealthEventsConfig
 */
const se_LocalHealthEventsConfig = (input: LocalHealthEventsConfig, context: __SerdeContext): any => {
  return take(input, {
    HealthScoreThreshold: __serializeFloat,
    MinTrafficImpact: __serializeFloat,
    Status: [],
  });
};

// se_S3Config omitted.

// se_SetOfARNs omitted.

// se_TagMap omitted.

/**
 * deserializeAws_restJson1AvailabilityMeasurement
 */
const de_AvailabilityMeasurement = (output: any, context: __SerdeContext): AvailabilityMeasurement => {
  return take(output, {
    ExperienceScore: __limitedParseDouble,
    PercentOfClientLocationImpacted: __limitedParseDouble,
    PercentOfTotalTrafficImpacted: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ClientLocation
 */
const de_ClientLocation = (output: any, context: __SerdeContext): ClientLocation => {
  return take(output, {
    ASName: __expectString,
    ASNumber: __expectLong,
    City: __expectString,
    Country: __expectString,
    Latitude: __limitedParseDouble,
    Longitude: __limitedParseDouble,
    Metro: __expectString,
    Subdivision: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1HealthEvent
 */
const de_HealthEvent = (output: any, context: __SerdeContext): HealthEvent => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    EndedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    EventArn: __expectString,
    EventId: __expectString,
    HealthScoreThreshold: __limitedParseDouble,
    ImpactType: __expectString,
    ImpactedLocations: (_: any) => de_ImpactedLocationsList(_, context),
    LastUpdatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    PercentOfTotalTrafficImpacted: __limitedParseDouble,
    StartedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1HealthEventList
 */
const de_HealthEventList = (output: any, context: __SerdeContext): HealthEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HealthEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HealthEventsConfig
 */
const de_HealthEventsConfig = (output: any, context: __SerdeContext): HealthEventsConfig => {
  return take(output, {
    AvailabilityLocalHealthEventsConfig: (_: any) => de_LocalHealthEventsConfig(_, context),
    AvailabilityScoreThreshold: __limitedParseDouble,
    PerformanceLocalHealthEventsConfig: (_: any) => de_LocalHealthEventsConfig(_, context),
    PerformanceScoreThreshold: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ImpactedLocation
 */
const de_ImpactedLocation = (output: any, context: __SerdeContext): ImpactedLocation => {
  return take(output, {
    ASName: __expectString,
    ASNumber: __expectLong,
    CausedBy: _json,
    City: __expectString,
    Country: __expectString,
    CountryCode: __expectString,
    InternetHealth: (_: any) => de_InternetHealth(_, context),
    Ipv4Prefixes: _json,
    Latitude: __limitedParseDouble,
    Longitude: __limitedParseDouble,
    Metro: __expectString,
    ServiceLocation: __expectString,
    Status: __expectString,
    Subdivision: __expectString,
    SubdivisionCode: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ImpactedLocationsList
 */
const de_ImpactedLocationsList = (output: any, context: __SerdeContext): ImpactedLocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImpactedLocation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InternetEventsList
 */
const de_InternetEventsList = (output: any, context: __SerdeContext): InternetEventSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InternetEventSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InternetEventSummary
 */
const de_InternetEventSummary = (output: any, context: __SerdeContext): InternetEventSummary => {
  return take(output, {
    ClientLocation: (_: any) => de_ClientLocation(_, context),
    EndedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    EventArn: __expectString,
    EventId: __expectString,
    EventStatus: __expectString,
    EventType: __expectString,
    StartedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1InternetHealth
 */
const de_InternetHealth = (output: any, context: __SerdeContext): InternetHealth => {
  return take(output, {
    Availability: (_: any) => de_AvailabilityMeasurement(_, context),
    Performance: (_: any) => de_PerformanceMeasurement(_, context),
  }) as any;
};

// de_InternetMeasurementsLogDelivery omitted.

// de_Ipv4PrefixList omitted.

/**
 * deserializeAws_restJson1LocalHealthEventsConfig
 */
const de_LocalHealthEventsConfig = (output: any, context: __SerdeContext): LocalHealthEventsConfig => {
  return take(output, {
    HealthScoreThreshold: __limitedParseDouble,
    MinTrafficImpact: __limitedParseDouble,
    Status: __expectString,
  }) as any;
};

// de_Monitor omitted.

// de_MonitorList omitted.

// de_Network omitted.

// de_NetworkImpairment omitted.

// de_NetworkList omitted.

/**
 * deserializeAws_restJson1PerformanceMeasurement
 */
const de_PerformanceMeasurement = (output: any, context: __SerdeContext): PerformanceMeasurement => {
  return take(output, {
    ExperienceScore: __limitedParseDouble,
    PercentOfClientLocationImpacted: __limitedParseDouble,
    PercentOfTotalTrafficImpacted: __limitedParseDouble,
    RoundTripTime: (_: any) => de_RoundTripTime(_, context),
  }) as any;
};

// de_QueryData omitted.

// de_QueryField omitted.

// de_QueryFields omitted.

// de_QueryRow omitted.

/**
 * deserializeAws_restJson1RoundTripTime
 */
const de_RoundTripTime = (output: any, context: __SerdeContext): RoundTripTime => {
  return take(output, {
    P50: __limitedParseDouble,
    P90: __limitedParseDouble,
    P95: __limitedParseDouble,
  }) as any;
};

// de_S3Config omitted.

// de_SetOfARNs omitted.

// de_TagMap omitted.

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

const _ES = "EventStatus";
const _ET = "EndTime";
const _ETv = "EventType";
const _IEMR = "InternetEventMaxResults";
const _ILA = "IncludeLinkedAccounts";
const _LAI = "LinkedAccountId";
const _MR = "MaxResults";
const _MS = "MonitorStatus";
const _NT = "NextToken";
const _ST = "StartTime";
const _TK = "TagKeys";
const _tK = "tagKeys";
