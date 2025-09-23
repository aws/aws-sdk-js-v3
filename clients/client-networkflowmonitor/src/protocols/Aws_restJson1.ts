// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
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
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateMonitorCommandInput, CreateMonitorCommandOutput } from "../commands/CreateMonitorCommand";
import { CreateScopeCommandInput, CreateScopeCommandOutput } from "../commands/CreateScopeCommand";
import { DeleteMonitorCommandInput, DeleteMonitorCommandOutput } from "../commands/DeleteMonitorCommand";
import { DeleteScopeCommandInput, DeleteScopeCommandOutput } from "../commands/DeleteScopeCommand";
import { GetMonitorCommandInput, GetMonitorCommandOutput } from "../commands/GetMonitorCommand";
import {
  GetQueryResultsMonitorTopContributorsCommandInput,
  GetQueryResultsMonitorTopContributorsCommandOutput,
} from "../commands/GetQueryResultsMonitorTopContributorsCommand";
import {
  GetQueryResultsWorkloadInsightsTopContributorsCommandInput,
  GetQueryResultsWorkloadInsightsTopContributorsCommandOutput,
} from "../commands/GetQueryResultsWorkloadInsightsTopContributorsCommand";
import {
  GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput,
  GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput,
} from "../commands/GetQueryResultsWorkloadInsightsTopContributorsDataCommand";
import {
  GetQueryStatusMonitorTopContributorsCommandInput,
  GetQueryStatusMonitorTopContributorsCommandOutput,
} from "../commands/GetQueryStatusMonitorTopContributorsCommand";
import {
  GetQueryStatusWorkloadInsightsTopContributorsCommandInput,
  GetQueryStatusWorkloadInsightsTopContributorsCommandOutput,
} from "../commands/GetQueryStatusWorkloadInsightsTopContributorsCommand";
import {
  GetQueryStatusWorkloadInsightsTopContributorsDataCommandInput,
  GetQueryStatusWorkloadInsightsTopContributorsDataCommandOutput,
} from "../commands/GetQueryStatusWorkloadInsightsTopContributorsDataCommand";
import { GetScopeCommandInput, GetScopeCommandOutput } from "../commands/GetScopeCommand";
import { ListMonitorsCommandInput, ListMonitorsCommandOutput } from "../commands/ListMonitorsCommand";
import { ListScopesCommandInput, ListScopesCommandOutput } from "../commands/ListScopesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StartQueryMonitorTopContributorsCommandInput,
  StartQueryMonitorTopContributorsCommandOutput,
} from "../commands/StartQueryMonitorTopContributorsCommand";
import {
  StartQueryWorkloadInsightsTopContributorsCommandInput,
  StartQueryWorkloadInsightsTopContributorsCommandOutput,
} from "../commands/StartQueryWorkloadInsightsTopContributorsCommand";
import {
  StartQueryWorkloadInsightsTopContributorsDataCommandInput,
  StartQueryWorkloadInsightsTopContributorsDataCommandOutput,
} from "../commands/StartQueryWorkloadInsightsTopContributorsDataCommand";
import {
  StopQueryMonitorTopContributorsCommandInput,
  StopQueryMonitorTopContributorsCommandOutput,
} from "../commands/StopQueryMonitorTopContributorsCommand";
import {
  StopQueryWorkloadInsightsTopContributorsCommandInput,
  StopQueryWorkloadInsightsTopContributorsCommandOutput,
} from "../commands/StopQueryWorkloadInsightsTopContributorsCommand";
import {
  StopQueryWorkloadInsightsTopContributorsDataCommandInput,
  StopQueryWorkloadInsightsTopContributorsDataCommandOutput,
} from "../commands/StopQueryWorkloadInsightsTopContributorsDataCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateMonitorCommandInput, UpdateMonitorCommandOutput } from "../commands/UpdateMonitorCommand";
import { UpdateScopeCommandInput, UpdateScopeCommandOutput } from "../commands/UpdateScopeCommand";
import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  MonitorLocalResource,
  MonitorRemoteResource,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  TargetId,
  TargetIdentifier,
  TargetResource,
  ThrottlingException,
  ValidationException,
  WorkloadInsightsTopContributorsDataPoint,
} from "../models/models_0";
import { NetworkFlowMonitorServiceException as __BaseException } from "../models/NetworkFlowMonitorServiceException";

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
  b.bp("/monitors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      localResources: (_) => _json(_),
      monitorName: [],
      remoteResources: (_) => _json(_),
      scopeArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateScopeCommand
 */
export const se_CreateScopeCommand = async (
  input: CreateScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/scopes");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      tags: (_) => _json(_),
      targets: (_) => _json(_),
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
  b.bp("/monitors/{monitorName}");
  b.p("monitorName", () => input.monitorName!, "{monitorName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteScopeCommand
 */
export const se_DeleteScopeCommand = async (
  input: DeleteScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/scopes/{scopeId}");
  b.p("scopeId", () => input.scopeId!, "{scopeId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
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
  b.bp("/monitors/{monitorName}");
  b.p("monitorName", () => input.monitorName!, "{monitorName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQueryResultsMonitorTopContributorsCommand
 */
export const se_GetQueryResultsMonitorTopContributorsCommand = async (
  input: GetQueryResultsMonitorTopContributorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/monitors/{monitorName}/topContributorsQueries/{queryId}/results");
  b.p("monitorName", () => input.monitorName!, "{monitorName}", false);
  b.p("queryId", () => input.queryId!, "{queryId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQueryResultsWorkloadInsightsTopContributorsCommand
 */
export const se_GetQueryResultsWorkloadInsightsTopContributorsCommand = async (
  input: GetQueryResultsWorkloadInsightsTopContributorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloadInsights/{scopeId}/topContributorsQueries/{queryId}/results");
  b.p("scopeId", () => input.scopeId!, "{scopeId}", false);
  b.p("queryId", () => input.queryId!, "{queryId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQueryResultsWorkloadInsightsTopContributorsDataCommand
 */
export const se_GetQueryResultsWorkloadInsightsTopContributorsDataCommand = async (
  input: GetQueryResultsWorkloadInsightsTopContributorsDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloadInsights/{scopeId}/topContributorsDataQueries/{queryId}/results");
  b.p("scopeId", () => input.scopeId!, "{scopeId}", false);
  b.p("queryId", () => input.queryId!, "{queryId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQueryStatusMonitorTopContributorsCommand
 */
export const se_GetQueryStatusMonitorTopContributorsCommand = async (
  input: GetQueryStatusMonitorTopContributorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/monitors/{monitorName}/topContributorsQueries/{queryId}/status");
  b.p("monitorName", () => input.monitorName!, "{monitorName}", false);
  b.p("queryId", () => input.queryId!, "{queryId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQueryStatusWorkloadInsightsTopContributorsCommand
 */
export const se_GetQueryStatusWorkloadInsightsTopContributorsCommand = async (
  input: GetQueryStatusWorkloadInsightsTopContributorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloadInsights/{scopeId}/topContributorsQueries/{queryId}/status");
  b.p("scopeId", () => input.scopeId!, "{scopeId}", false);
  b.p("queryId", () => input.queryId!, "{queryId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetQueryStatusWorkloadInsightsTopContributorsDataCommand
 */
export const se_GetQueryStatusWorkloadInsightsTopContributorsDataCommand = async (
  input: GetQueryStatusWorkloadInsightsTopContributorsDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloadInsights/{scopeId}/topContributorsDataQueries/{queryId}/status");
  b.p("scopeId", () => input.scopeId!, "{scopeId}", false);
  b.p("queryId", () => input.queryId!, "{queryId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetScopeCommand
 */
export const se_GetScopeCommand = async (
  input: GetScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/scopes/{scopeId}");
  b.p("scopeId", () => input.scopeId!, "{scopeId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
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
  b.bp("/monitors");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_mS]: [, input[_mS]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListScopesCommand
 */
export const se_ListScopesCommand = async (
  input: ListScopesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/scopes");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartQueryMonitorTopContributorsCommand
 */
export const se_StartQueryMonitorTopContributorsCommand = async (
  input: StartQueryMonitorTopContributorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/monitors/{monitorName}/topContributorsQueries");
  b.p("monitorName", () => input.monitorName!, "{monitorName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      destinationCategory: [],
      endTime: (_) => __serializeDateTime(_),
      limit: [],
      metricName: [],
      startTime: (_) => __serializeDateTime(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartQueryWorkloadInsightsTopContributorsCommand
 */
export const se_StartQueryWorkloadInsightsTopContributorsCommand = async (
  input: StartQueryWorkloadInsightsTopContributorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloadInsights/{scopeId}/topContributorsQueries");
  b.p("scopeId", () => input.scopeId!, "{scopeId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      destinationCategory: [],
      endTime: (_) => __serializeDateTime(_),
      limit: [],
      metricName: [],
      startTime: (_) => __serializeDateTime(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartQueryWorkloadInsightsTopContributorsDataCommand
 */
export const se_StartQueryWorkloadInsightsTopContributorsDataCommand = async (
  input: StartQueryWorkloadInsightsTopContributorsDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/workloadInsights/{scopeId}/topContributorsDataQueries");
  b.p("scopeId", () => input.scopeId!, "{scopeId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      destinationCategory: [],
      endTime: (_) => __serializeDateTime(_),
      metricName: [],
      startTime: (_) => __serializeDateTime(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopQueryMonitorTopContributorsCommand
 */
export const se_StopQueryMonitorTopContributorsCommand = async (
  input: StopQueryMonitorTopContributorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/monitors/{monitorName}/topContributorsQueries/{queryId}");
  b.p("monitorName", () => input.monitorName!, "{monitorName}", false);
  b.p("queryId", () => input.queryId!, "{queryId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopQueryWorkloadInsightsTopContributorsCommand
 */
export const se_StopQueryWorkloadInsightsTopContributorsCommand = async (
  input: StopQueryWorkloadInsightsTopContributorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloadInsights/{scopeId}/topContributorsQueries/{queryId}");
  b.p("scopeId", () => input.scopeId!, "{scopeId}", false);
  b.p("queryId", () => input.queryId!, "{queryId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopQueryWorkloadInsightsTopContributorsDataCommand
 */
export const se_StopQueryWorkloadInsightsTopContributorsDataCommand = async (
  input: StopQueryWorkloadInsightsTopContributorsDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/workloadInsights/{scopeId}/topContributorsDataQueries/{queryId}");
  b.p("scopeId", () => input.scopeId!, "{scopeId}", false);
  b.p("queryId", () => input.queryId!, "{queryId}", false);
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
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
  b.bp("/monitors/{monitorName}");
  b.p("monitorName", () => input.monitorName!, "{monitorName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      localResourcesToAdd: (_) => _json(_),
      localResourcesToRemove: (_) => _json(_),
      remoteResourcesToAdd: (_) => _json(_),
      remoteResourcesToRemove: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateScopeCommand
 */
export const se_UpdateScopeCommand = async (
  input: UpdateScopeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/scopes/{scopeId}");
  b.p("scopeId", () => input.scopeId!, "{scopeId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourcesToAdd: (_) => _json(_),
      resourcesToDelete: (_) => _json(_),
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
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localResources: _json,
    modifiedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    monitorArn: __expectString,
    monitorName: __expectString,
    monitorStatus: __expectString,
    remoteResources: _json,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateScopeCommand
 */
export const de_CreateScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateScopeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    scopeArn: __expectString,
    scopeId: __expectString,
    status: __expectString,
    tags: _json,
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
 * deserializeAws_restJson1DeleteScopeCommand
 */
export const de_DeleteScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteScopeCommandOutput> => {
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
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localResources: _json,
    modifiedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    monitorArn: __expectString,
    monitorName: __expectString,
    monitorStatus: __expectString,
    remoteResources: _json,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQueryResultsMonitorTopContributorsCommand
 */
export const de_GetQueryResultsMonitorTopContributorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsMonitorTopContributorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    topContributors: _json,
    unit: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQueryResultsWorkloadInsightsTopContributorsCommand
 */
export const de_GetQueryResultsWorkloadInsightsTopContributorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsWorkloadInsightsTopContributorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    topContributors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQueryResultsWorkloadInsightsTopContributorsDataCommand
 */
export const de_GetQueryResultsWorkloadInsightsTopContributorsDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryResultsWorkloadInsightsTopContributorsDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    datapoints: (_) => de_WorkloadInsightsTopContributorsDataPoints(_, context),
    nextToken: __expectString,
    unit: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQueryStatusMonitorTopContributorsCommand
 */
export const de_GetQueryStatusMonitorTopContributorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryStatusMonitorTopContributorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQueryStatusWorkloadInsightsTopContributorsCommand
 */
export const de_GetQueryStatusWorkloadInsightsTopContributorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryStatusWorkloadInsightsTopContributorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetQueryStatusWorkloadInsightsTopContributorsDataCommand
 */
export const de_GetQueryStatusWorkloadInsightsTopContributorsDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryStatusWorkloadInsightsTopContributorsDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetScopeCommand
 */
export const de_GetScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetScopeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    scopeArn: __expectString,
    scopeId: __expectString,
    status: __expectString,
    tags: _json,
    targets: _json,
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
    monitors: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListScopesCommand
 */
export const de_ListScopesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScopesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    scopes: _json,
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
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartQueryMonitorTopContributorsCommand
 */
export const de_StartQueryMonitorTopContributorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryMonitorTopContributorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    queryId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartQueryWorkloadInsightsTopContributorsCommand
 */
export const de_StartQueryWorkloadInsightsTopContributorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryWorkloadInsightsTopContributorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    queryId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartQueryWorkloadInsightsTopContributorsDataCommand
 */
export const de_StartQueryWorkloadInsightsTopContributorsDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryWorkloadInsightsTopContributorsDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    queryId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopQueryMonitorTopContributorsCommand
 */
export const de_StopQueryMonitorTopContributorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryMonitorTopContributorsCommandOutput> => {
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
 * deserializeAws_restJson1StopQueryWorkloadInsightsTopContributorsCommand
 */
export const de_StopQueryWorkloadInsightsTopContributorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryWorkloadInsightsTopContributorsCommandOutput> => {
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
 * deserializeAws_restJson1StopQueryWorkloadInsightsTopContributorsDataCommand
 */
export const de_StopQueryWorkloadInsightsTopContributorsDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopQueryWorkloadInsightsTopContributorsDataCommandOutput> => {
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
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localResources: _json,
    modifiedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    monitorArn: __expectString,
    monitorName: __expectString,
    monitorStatus: __expectString,
    remoteResources: _json,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateScopeCommand
 */
export const de_UpdateScopeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateScopeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    scopeArn: __expectString,
    scopeId: __expectString,
    status: __expectString,
    tags: _json,
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
    case "com.amazonaws.networkflowmonitor#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.networkflowmonitor#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.networkflowmonitor#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkflowmonitor#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.networkflowmonitor#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.networkflowmonitor#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.networkflowmonitor#ResourceNotFoundException":
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

// se_MonitorLocalResource omitted.

// se_MonitorLocalResources omitted.

// se_MonitorRemoteResource omitted.

// se_MonitorRemoteResources omitted.

// se_TagMap omitted.

// se_TargetId omitted.

// se_TargetIdentifier omitted.

// se_TargetResource omitted.

// se_TargetResourceList omitted.

// de_KubernetesMetadata omitted.

// de_MonitorList omitted.

// de_MonitorLocalResource omitted.

// de_MonitorLocalResources omitted.

// de_MonitorRemoteResource omitted.

// de_MonitorRemoteResources omitted.

// de_MonitorSummary omitted.

// de_MonitorTopContributorsRow omitted.

// de_MonitorTopContributorsRowList omitted.

// de_ScopeSummary omitted.

// de_ScopeSummaryList omitted.

// de_TagMap omitted.

// de_TargetId omitted.

// de_TargetIdentifier omitted.

// de_TargetResource omitted.

// de_TargetResourceList omitted.

// de_TraversedComponent omitted.

// de_TraversedConstructsList omitted.

/**
 * deserializeAws_restJson1WorkloadInsightsTopContributorsDataPoint
 */
const de_WorkloadInsightsTopContributorsDataPoint = (
  output: any,
  context: __SerdeContext
): WorkloadInsightsTopContributorsDataPoint => {
  return take(output, {
    label: __expectString,
    timestamps: (_: any) => de_WorkloadInsightsTopContributorsTimestampsList(_, context),
    values: (_: any) => de_WorkloadInsightsTopContributorsValuesList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1WorkloadInsightsTopContributorsDataPoints
 */
const de_WorkloadInsightsTopContributorsDataPoints = (
  output: any,
  context: __SerdeContext
): WorkloadInsightsTopContributorsDataPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkloadInsightsTopContributorsDataPoint(entry, context);
    });
  return retVal;
};

// de_WorkloadInsightsTopContributorsRow omitted.

// de_WorkloadInsightsTopContributorsRowList omitted.

/**
 * deserializeAws_restJson1WorkloadInsightsTopContributorsTimestampsList
 */
const de_WorkloadInsightsTopContributorsTimestampsList = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseRfc3339DateTimeWithOffset(entry));
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkloadInsightsTopContributorsValuesList
 */
const de_WorkloadInsightsTopContributorsValuesList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
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

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _mR = "maxResults";
const _mS = "monitorStatus";
const _nT = "nextToken";
const _tK = "tagKeys";
