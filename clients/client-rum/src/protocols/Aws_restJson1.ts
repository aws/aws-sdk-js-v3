// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
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
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import {
  DeleteRumMetricsDestinationCommandInput,
  DeleteRumMetricsDestinationCommandOutput,
} from "../commands/DeleteRumMetricsDestinationCommand";
import { GetAppMonitorCommandInput, GetAppMonitorCommandOutput } from "../commands/GetAppMonitorCommand";
import { GetAppMonitorDataCommandInput, GetAppMonitorDataCommandOutput } from "../commands/GetAppMonitorDataCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "../commands/GetResourcePolicyCommand";
import { ListAppMonitorsCommandInput, ListAppMonitorsCommandOutput } from "../commands/ListAppMonitorsCommand";
import {
  ListRumMetricsDestinationsCommandInput,
  ListRumMetricsDestinationsCommandOutput,
} from "../commands/ListRumMetricsDestinationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
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
  InvalidPolicyRevisionIdException,
  MalformedPolicyDocumentException,
  MetricDefinitionRequest,
  PolicyNotFoundException,
  PolicySizeLimitExceededException,
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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/rummetrics/{AppMonitorName}/metrics");
  b.p("AppMonitorName", () => input.AppMonitorName!, "{AppMonitorName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Destination: [],
      DestinationArn: [],
      MetricDefinitions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDeleteRumMetricDefinitionsCommand
 */
export const se_BatchDeleteRumMetricDefinitionsCommand = async (
  input: BatchDeleteRumMetricDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/rummetrics/{AppMonitorName}/metrics");
  b.p("AppMonitorName", () => input.AppMonitorName!, "{AppMonitorName}", false);
  const query: any = map({
    [_d]: [, __expectNonNull(input[_D]!, `Destination`)],
    [_dA]: [, input[_DA]!],
    [_mDI]: [__expectNonNull(input.MetricDefinitionIds, `MetricDefinitionIds`) != null, () => input[_MDI]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetRumMetricDefinitionsCommand
 */
export const se_BatchGetRumMetricDefinitionsCommand = async (
  input: BatchGetRumMetricDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/rummetrics/{AppMonitorName}/metrics");
  b.p("AppMonitorName", () => input.AppMonitorName!, "{AppMonitorName}", false);
  const query: any = map({
    [_d]: [, __expectNonNull(input[_D]!, `Destination`)],
    [_dA]: [, input[_DA]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAppMonitorCommand
 */
export const se_CreateAppMonitorCommand = async (
  input: CreateAppMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/appmonitor");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAppMonitorCommand
 */
export const se_DeleteAppMonitorCommand = async (
  input: DeleteAppMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appmonitor/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appmonitor/{Name}/policy");
  b.p("Name", () => input.Name!, "{Name}", false);
  const query: any = map({
    [_pRI]: [, input[_PRI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRumMetricsDestinationCommand
 */
export const se_DeleteRumMetricsDestinationCommand = async (
  input: DeleteRumMetricsDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/rummetrics/{AppMonitorName}/metricsdestination");
  b.p("AppMonitorName", () => input.AppMonitorName!, "{AppMonitorName}", false);
  const query: any = map({
    [_d]: [, __expectNonNull(input[_D]!, `Destination`)],
    [_dA]: [, input[_DA]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAppMonitorCommand
 */
export const se_GetAppMonitorCommand = async (
  input: GetAppMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appmonitor/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAppMonitorDataCommand
 */
export const se_GetAppMonitorDataCommand = async (
  input: GetAppMonitorDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/appmonitor/{Name}/data");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Filters: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
      TimeRange: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appmonitor/{Name}/policy");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAppMonitorsCommand
 */
export const se_ListAppMonitorsCommand = async (
  input: ListAppMonitorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/appmonitors");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRumMetricsDestinationsCommand
 */
export const se_ListRumMetricsDestinationsCommand = async (
  input: ListRumMetricsDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/rummetrics/{AppMonitorName}/metricsdestination");
  b.p("AppMonitorName", () => input.AppMonitorName!, "{AppMonitorName}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
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
 * serializeAws_restJson1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/appmonitor/{Name}/policy");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      PolicyDocument: [],
      PolicyRevisionId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutRumEventsCommand
 */
export const se_PutRumEventsCommand = async (
  input: PutRumEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/appmonitors/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Alias: [],
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
  b.hn(resolvedHostname);
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutRumMetricsDestinationCommand
 */
export const se_PutRumMetricsDestinationCommand = async (
  input: PutRumMetricsDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/rummetrics/{AppMonitorName}/metricsdestination");
  b.p("AppMonitorName", () => input.AppMonitorName!, "{AppMonitorName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Destination: [],
      DestinationArn: [],
      IamRoleArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
 * serializeAws_restJson1UpdateAppMonitorCommand
 */
export const se_UpdateAppMonitorCommand = async (
  input: UpdateAppMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/appmonitor/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AppMonitorConfiguration: (_) => se_AppMonitorConfiguration(_, context),
      CustomEvents: (_) => _json(_),
      CwLogEnabled: [],
      Domain: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRumMetricDefinitionCommand
 */
export const se_UpdateRumMetricDefinitionCommand = async (
  input: UpdateRumMetricDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/rummetrics/{AppMonitorName}/metrics");
  b.p("AppMonitorName", () => input.AppMonitorName!, "{AppMonitorName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Destination: [],
      DestinationArn: [],
      MetricDefinition: (_) => _json(_),
      MetricDefinitionId: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchCreateRumMetricDefinitionsCommand
 */
export const de_BatchCreateRumMetricDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateRumMetricDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1BatchDeleteRumMetricDefinitionsCommand
 */
export const de_BatchDeleteRumMetricDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteRumMetricDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1BatchGetRumMetricDefinitionsCommand
 */
export const de_BatchGetRumMetricDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetRumMetricDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateAppMonitorCommand
 */
export const de_CreateAppMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DeleteAppMonitorCommand
 */
export const de_DeleteAppMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppMonitorCommandOutput> => {
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
 * deserializeAws_restJson1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PolicyRevisionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRumMetricsDestinationCommand
 */
export const de_DeleteRumMetricsDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRumMetricsDestinationCommandOutput> => {
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
 * deserializeAws_restJson1GetAppMonitorCommand
 */
export const de_GetAppMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppMonitorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetAppMonitorDataCommand
 */
export const de_GetAppMonitorDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppMonitorDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PolicyDocument: __expectString,
    PolicyRevisionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAppMonitorsCommand
 */
export const de_ListAppMonitorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppMonitorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListRumMetricsDestinationsCommand
 */
export const de_ListRumMetricsDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRumMetricsDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    ResourceArn: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PolicyDocument: __expectString,
    PolicyRevisionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutRumEventsCommand
 */
export const de_PutRumEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRumEventsCommandOutput> => {
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
 * deserializeAws_restJson1PutRumMetricsDestinationCommand
 */
export const de_PutRumMetricsDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRumMetricsDestinationCommandOutput> => {
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UpdateAppMonitorCommand
 */
export const de_UpdateAppMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppMonitorCommandOutput> => {
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
 * deserializeAws_restJson1UpdateRumMetricDefinitionCommand
 */
export const de_UpdateRumMetricDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRumMetricDefinitionCommandOutput> => {
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
    case "InvalidPolicyRevisionIdException":
    case "com.amazonaws.rum#InvalidPolicyRevisionIdException":
      throw await de_InvalidPolicyRevisionIdExceptionRes(parsedOutput, context);
    case "PolicyNotFoundException":
    case "com.amazonaws.rum#PolicyNotFoundException":
      throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.rum#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PolicySizeLimitExceededException":
    case "com.amazonaws.rum#PolicySizeLimitExceededException":
      throw await de_PolicySizeLimitExceededExceptionRes(parsedOutput, context);
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
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
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
 * deserializeAws_restJson1InvalidPolicyRevisionIdExceptionRes
 */
const de_InvalidPolicyRevisionIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyRevisionIdException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidPolicyRevisionIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MalformedPolicyDocumentExceptionRes
 */
const de_MalformedPolicyDocumentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MalformedPolicyDocumentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PolicyNotFoundExceptionRes
 */
const de_PolicyNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new PolicyNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PolicySizeLimitExceededExceptionRes
 */
const de_PolicySizeLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicySizeLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new PolicySizeLimitExceededException({
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
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
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
    details: __LazyJsonString.from,
    id: [],
    metadata: __LazyJsonString.from,
    timestamp: (_) => _.getTime() / 1_000,
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

const _D = "Destination";
const _DA = "DestinationArn";
const _MDI = "MetricDefinitionIds";
const _MR = "MaxResults";
const _NT = "NextToken";
const _PRI = "PolicyRevisionId";
const _TK = "TagKeys";
const _d = "destination";
const _dA = "destinationArn";
const _mDI = "metricDefinitionIds";
const _mR = "maxResults";
const _nT = "nextToken";
const _pRI = "policyRevisionId";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _tK = "tagKeys";
