// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  isSerializableHeaderValue,
  limitedParseDouble as __limitedParseDouble,
  map,
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
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AddNotificationChannelsCommandInput,
  AddNotificationChannelsCommandOutput,
} from "../commands/AddNotificationChannelsCommand";
import {
  BatchGetFrameMetricDataCommandInput,
  BatchGetFrameMetricDataCommandOutput,
} from "../commands/BatchGetFrameMetricDataCommand";
import { ConfigureAgentCommandInput, ConfigureAgentCommandOutput } from "../commands/ConfigureAgentCommand";
import {
  CreateProfilingGroupCommandInput,
  CreateProfilingGroupCommandOutput,
} from "../commands/CreateProfilingGroupCommand";
import {
  DeleteProfilingGroupCommandInput,
  DeleteProfilingGroupCommandOutput,
} from "../commands/DeleteProfilingGroupCommand";
import {
  DescribeProfilingGroupCommandInput,
  DescribeProfilingGroupCommandOutput,
} from "../commands/DescribeProfilingGroupCommand";
import {
  GetFindingsReportAccountSummaryCommandInput,
  GetFindingsReportAccountSummaryCommandOutput,
} from "../commands/GetFindingsReportAccountSummaryCommand";
import {
  GetNotificationConfigurationCommandInput,
  GetNotificationConfigurationCommandOutput,
} from "../commands/GetNotificationConfigurationCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "../commands/GetPolicyCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "../commands/GetProfileCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "../commands/GetRecommendationsCommand";
import {
  ListFindingsReportsCommandInput,
  ListFindingsReportsCommandOutput,
} from "../commands/ListFindingsReportsCommand";
import { ListProfileTimesCommandInput, ListProfileTimesCommandOutput } from "../commands/ListProfileTimesCommand";
import {
  ListProfilingGroupsCommandInput,
  ListProfilingGroupsCommandOutput,
} from "../commands/ListProfilingGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PostAgentProfileCommandInput, PostAgentProfileCommandOutput } from "../commands/PostAgentProfileCommand";
import { PutPermissionCommandInput, PutPermissionCommandOutput } from "../commands/PutPermissionCommand";
import {
  RemoveNotificationChannelCommandInput,
  RemoveNotificationChannelCommandOutput,
} from "../commands/RemoveNotificationChannelCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "../commands/RemovePermissionCommand";
import { SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput } from "../commands/SubmitFeedbackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateProfilingGroupCommandInput,
  UpdateProfilingGroupCommandOutput,
} from "../commands/UpdateProfilingGroupCommand";
import { CodeGuruProfilerServiceException as __BaseException } from "../models/CodeGuruProfilerServiceException";
import {
  AgentOrchestrationConfig,
  AggregatedProfileTime,
  Anomaly,
  AnomalyInstance,
  Channel,
  ConflictException,
  EventPublisher,
  FindingsReportSummary,
  FrameMetric,
  FrameMetricDatum,
  InternalServerException,
  Match,
  MetadataField,
  Pattern,
  ProfileTime,
  ProfilingGroupDescription,
  ProfilingStatus,
  Recommendation,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  TimestampStructure,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AddNotificationChannelsCommand
 */
export const se_AddNotificationChannelsCommand = async (
  input: AddNotificationChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profilingGroups/{profilingGroupName}/notificationConfiguration");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      channels: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetFrameMetricDataCommand
 */
export const se_BatchGetFrameMetricDataCommand = async (
  input: BatchGetFrameMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profilingGroups/{profilingGroupName}/frames/-/metrics");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  const query: any = map({
    [_sT]: [() => input.startTime !== void 0, () => __serializeDateTime(input[_sT]!).toString()],
    [_eT]: [() => input.endTime !== void 0, () => __serializeDateTime(input[_eT]!).toString()],
    [_p]: [, input[_p]!],
    [_tR]: [, input[_tR]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      frameMetrics: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ConfigureAgentCommand
 */
export const se_ConfigureAgentCommand = async (
  input: ConfigureAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profilingGroups/{profilingGroupName}/configureAgent");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      fleetInstanceId: [],
      metadata: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProfilingGroupCommand
 */
export const se_CreateProfilingGroupCommand = async (
  input: CreateProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profilingGroups");
  const query: any = map({
    [_cT]: [, __expectNonNull(input[_cT]!, `clientToken`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      agentOrchestrationConfig: (_) => _json(_),
      computePlatform: [],
      profilingGroupName: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProfilingGroupCommand
 */
export const se_DeleteProfilingGroupCommand = async (
  input: DeleteProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profilingGroups/{profilingGroupName}");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeProfilingGroupCommand
 */
export const se_DescribeProfilingGroupCommand = async (
  input: DescribeProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profilingGroups/{profilingGroupName}");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFindingsReportAccountSummaryCommand
 */
export const se_GetFindingsReportAccountSummaryCommand = async (
  input: GetFindingsReportAccountSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/internal/findingsReports");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_dRO]: [() => input.dailyReportsOnly !== void 0, () => input[_dRO]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNotificationConfigurationCommand
 */
export const se_GetNotificationConfigurationCommand = async (
  input: GetNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profilingGroups/{profilingGroupName}/notificationConfiguration");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPolicyCommand
 */
export const se_GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profilingGroups/{profilingGroupName}/policy");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProfileCommand
 */
export const se_GetProfileCommand = async (
  input: GetProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_a]: input[_a]!,
  });
  b.bp("/profilingGroups/{profilingGroupName}/profile");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  const query: any = map({
    [_sT]: [() => input.startTime !== void 0, () => __serializeDateTime(input[_sT]!).toString()],
    [_p]: [, input[_p]!],
    [_eT]: [() => input.endTime !== void 0, () => __serializeDateTime(input[_eT]!).toString()],
    [_mD]: [() => input.maxDepth !== void 0, () => input[_mD]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRecommendationsCommand
 */
export const se_GetRecommendationsCommand = async (
  input: GetRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/internal/profilingGroups/{profilingGroupName}/recommendations");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  const query: any = map({
    [_sT]: [__expectNonNull(input.startTime, `startTime`) != null, () => __serializeDateTime(input[_sT]!).toString()],
    [_eT]: [__expectNonNull(input.endTime, `endTime`) != null, () => __serializeDateTime(input[_eT]!).toString()],
    [_l]: [, input[_l]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFindingsReportsCommand
 */
export const se_ListFindingsReportsCommand = async (
  input: ListFindingsReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/internal/profilingGroups/{profilingGroupName}/findingsReports");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  const query: any = map({
    [_sT]: [__expectNonNull(input.startTime, `startTime`) != null, () => __serializeDateTime(input[_sT]!).toString()],
    [_eT]: [__expectNonNull(input.endTime, `endTime`) != null, () => __serializeDateTime(input[_eT]!).toString()],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_dRO]: [() => input.dailyReportsOnly !== void 0, () => input[_dRO]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProfileTimesCommand
 */
export const se_ListProfileTimesCommand = async (
  input: ListProfileTimesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profilingGroups/{profilingGroupName}/profileTimes");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  const query: any = map({
    [_sT]: [__expectNonNull(input.startTime, `startTime`) != null, () => __serializeDateTime(input[_sT]!).toString()],
    [_eT]: [__expectNonNull(input.endTime, `endTime`) != null, () => __serializeDateTime(input[_eT]!).toString()],
    [_p]: [, __expectNonNull(input[_p]!, `period`)],
    [_oB]: [, input[_oB]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProfilingGroupsCommand
 */
export const se_ListProfilingGroupsCommand = async (
  input: ListProfilingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profilingGroups");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_iD]: [() => input.includeDescription !== void 0, () => input[_iD]!.toString()],
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
 * serializeAws_restJson1PostAgentProfileCommand
 */
export const se_PostAgentProfileCommand = async (
  input: PostAgentProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = map({}, isSerializableHeaderValue, {
    [_ct]: input[_cTo] || "application/octet-stream",
  });
  b.bp("/profilingGroups/{profilingGroupName}/agentProfile");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  const query: any = map({
    [_pT]: [, input[_pT] ?? generateIdempotencyToken()],
  });
  let body: any;
  if (input.agentProfile !== undefined) {
    body = input.agentProfile;
  }
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutPermissionCommand
 */
export const se_PutPermissionCommand = async (
  input: PutPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profilingGroups/{profilingGroupName}/policy/{actionGroup}");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  b.p("actionGroup", () => input.actionGroup!, "{actionGroup}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      principals: (_) => _json(_),
      revisionId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemoveNotificationChannelCommand
 */
export const se_RemoveNotificationChannelCommand = async (
  input: RemoveNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profilingGroups/{profilingGroupName}/notificationConfiguration/{channelId}");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  b.p("channelId", () => input.channelId!, "{channelId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RemovePermissionCommand
 */
export const se_RemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profilingGroups/{profilingGroupName}/policy/{actionGroup}");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  b.p("actionGroup", () => input.actionGroup!, "{actionGroup}", false);
  const query: any = map({
    [_rI]: [, __expectNonNull(input[_rI]!, `revisionId`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SubmitFeedbackCommand
 */
export const se_SubmitFeedbackCommand = async (
  input: SubmitFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/internal/profilingGroups/{profilingGroupName}/anomalies/{anomalyInstanceId}/feedback");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  b.p("anomalyInstanceId", () => input.anomalyInstanceId!, "{anomalyInstanceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      comment: [],
      type: [],
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
 * serializeAws_restJson1UpdateProfilingGroupCommand
 */
export const se_UpdateProfilingGroupCommand = async (
  input: UpdateProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profilingGroups/{profilingGroupName}");
  b.p("profilingGroupName", () => input.profilingGroupName!, "{profilingGroupName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      agentOrchestrationConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AddNotificationChannelsCommand
 */
export const de_AddNotificationChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddNotificationChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    notificationConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetFrameMetricDataCommand
 */
export const de_BatchGetFrameMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFrameMetricDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    endTimes: (_) => de_ListOfTimestamps(_, context),
    frameMetricData: (_) => de_FrameMetricData(_, context),
    resolution: __expectString,
    startTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    unprocessedEndTimes: (_) => de_UnprocessedEndTimeMap(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ConfigureAgentCommand
 */
export const de_ConfigureAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureAgentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.configuration = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProfilingGroupCommand
 */
export const de_CreateProfilingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfilingGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.profilingGroup = de_ProfilingGroupDescription(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProfilingGroupCommand
 */
export const de_DeleteProfilingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfilingGroupCommandOutput> => {
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
 * deserializeAws_restJson1DescribeProfilingGroupCommand
 */
export const de_DescribeProfilingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProfilingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.profilingGroup = de_ProfilingGroupDescription(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingsReportAccountSummaryCommand
 */
export const de_GetFindingsReportAccountSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsReportAccountSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    reportSummaries: (_) => de_FindingsReportSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNotificationConfigurationCommand
 */
export const de_GetNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    notificationConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPolicyCommand
 */
export const de_GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: __expectString,
    revisionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProfileCommand
 */
export const de_GetProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    [_cTo]: [, output.headers[_ct]],
    [_cE]: [, output.headers[_ce]],
  });
  const data: any = await collectBody(output.body, context);
  contents.profile = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetRecommendationsCommand
 */
export const de_GetRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    anomalies: (_) => de_Anomalies(_, context),
    profileEndTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    profileStartTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    profilingGroupName: __expectString,
    recommendations: (_) => de_Recommendations(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFindingsReportsCommand
 */
export const de_ListFindingsReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    findingsReportSummaries: (_) => de_FindingsReportSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProfileTimesCommand
 */
export const de_ListProfileTimesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileTimesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    profileTimes: (_) => de_ProfileTimes(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProfilingGroupsCommand
 */
export const de_ListProfilingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilingGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    profilingGroupNames: _json,
    profilingGroups: (_) => de_ProfilingGroupDescriptions(_, context),
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
 * deserializeAws_restJson1PostAgentProfileCommand
 */
export const de_PostAgentProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostAgentProfileCommandOutput> => {
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
 * deserializeAws_restJson1PutPermissionCommand
 */
export const de_PutPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: __expectString,
    revisionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveNotificationChannelCommand
 */
export const de_RemoveNotificationChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveNotificationChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    notificationConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RemovePermissionCommand
 */
export const de_RemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: __expectString,
    revisionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SubmitFeedbackCommand
 */
export const de_SubmitFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitFeedbackCommandOutput> => {
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
 * deserializeAws_restJson1UpdateProfilingGroupCommand
 */
export const de_UpdateProfilingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfilingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.profilingGroup = de_ProfilingGroupDescription(data, context);
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
    case "ConflictException":
    case "com.amazonaws.codeguruprofiler#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeguruprofiler#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

// se_AgentOrchestrationConfig omitted.

// se_Channel omitted.

// se_Channels omitted.

// se_EventPublishers omitted.

// se_FrameMetric omitted.

// se_FrameMetrics omitted.

// se_Metadata omitted.

// se_Principals omitted.

// se_TagsMap omitted.

// se_ThreadStates omitted.

// de_AgentConfiguration omitted.

// de_AgentOrchestrationConfig omitted.

// de_AgentParameters omitted.

/**
 * deserializeAws_restJson1AggregatedProfileTime
 */
const de_AggregatedProfileTime = (output: any, context: __SerdeContext): AggregatedProfileTime => {
  return take(output, {
    period: __expectString,
    start: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1Anomalies
 */
const de_Anomalies = (output: any, context: __SerdeContext): Anomaly[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Anomaly(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Anomaly
 */
const de_Anomaly = (output: any, context: __SerdeContext): Anomaly => {
  return take(output, {
    instances: (_: any) => de_AnomalyInstances(_, context),
    metric: _json,
    reason: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AnomalyInstance
 */
const de_AnomalyInstance = (output: any, context: __SerdeContext): AnomalyInstance => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    id: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    userFeedback: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1AnomalyInstances
 */
const de_AnomalyInstances = (output: any, context: __SerdeContext): AnomalyInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnomalyInstance(entry, context);
    });
  return retVal;
};

// de_Channel omitted.

// de_Channels omitted.

// de_EventPublishers omitted.

/**
 * deserializeAws_restJson1FindingsReportSummaries
 */
const de_FindingsReportSummaries = (output: any, context: __SerdeContext): FindingsReportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FindingsReportSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FindingsReportSummary
 */
const de_FindingsReportSummary = (output: any, context: __SerdeContext): FindingsReportSummary => {
  return take(output, {
    id: __expectString,
    profileEndTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    profileStartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    profilingGroupName: __expectString,
    totalNumberOfFindings: __expectInt32,
  }) as any;
};

// de_FrameMetric omitted.

/**
 * deserializeAws_restJson1FrameMetricData
 */
const de_FrameMetricData = (output: any, context: __SerdeContext): FrameMetricDatum[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FrameMetricDatum(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FrameMetricDatum
 */
const de_FrameMetricDatum = (output: any, context: __SerdeContext): FrameMetricDatum => {
  return take(output, {
    frameMetric: _json,
    values: (_: any) => de_FrameMetricValues(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FrameMetricValues
 */
const de_FrameMetricValues = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ListOfTimestamps
 */
const de_ListOfTimestamps = (output: any, context: __SerdeContext): TimestampStructure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TimestampStructure(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Match
 */
const de_Match = (output: any, context: __SerdeContext): Match => {
  return take(output, {
    frameAddress: __expectString,
    targetFramesIndex: __expectInt32,
    thresholdBreachValue: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1Matches
 */
const de_Matches = (output: any, context: __SerdeContext): Match[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Match(entry, context);
    });
  return retVal;
};

// de_Metric omitted.

// de_NotificationConfiguration omitted.

/**
 * deserializeAws_restJson1Pattern
 */
const de_Pattern = (output: any, context: __SerdeContext): Pattern => {
  return take(output, {
    countersToAggregate: _json,
    description: __expectString,
    id: __expectString,
    name: __expectString,
    resolutionSteps: __expectString,
    targetFrames: _json,
    thresholdPercent: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1ProfileTime
 */
const de_ProfileTime = (output: any, context: __SerdeContext): ProfileTime => {
  return take(output, {
    start: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ProfileTimes
 */
const de_ProfileTimes = (output: any, context: __SerdeContext): ProfileTime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProfileTime(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProfilingGroupDescription
 */
const de_ProfilingGroupDescription = (output: any, context: __SerdeContext): ProfilingGroupDescription => {
  return take(output, {
    agentOrchestrationConfig: _json,
    arn: __expectString,
    computePlatform: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    profilingStatus: (_: any) => de_ProfilingStatus(_, context),
    tags: _json,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ProfilingGroupDescriptions
 */
const de_ProfilingGroupDescriptions = (output: any, context: __SerdeContext): ProfilingGroupDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProfilingGroupDescription(entry, context);
    });
  return retVal;
};

// de_ProfilingGroupNames omitted.

/**
 * deserializeAws_restJson1ProfilingStatus
 */
const de_ProfilingStatus = (output: any, context: __SerdeContext): ProfilingStatus => {
  return take(output, {
    latestAgentOrchestratedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    latestAgentProfileReportedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    latestAggregatedProfile: (_: any) => de_AggregatedProfileTime(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1Recommendation
 */
const de_Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return take(output, {
    allMatchesCount: __expectInt32,
    allMatchesSum: __limitedParseDouble,
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    pattern: (_: any) => de_Pattern(_, context),
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    topMatches: (_: any) => de_Matches(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1Recommendations
 */
const de_Recommendations = (output: any, context: __SerdeContext): Recommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Recommendation(entry, context);
    });
  return retVal;
};

// de_Strings omitted.

// de_TagsMap omitted.

// de_TargetFrame omitted.

// de_TargetFrames omitted.

// de_ThreadStates omitted.

/**
 * deserializeAws_restJson1TimestampStructure
 */
const de_TimestampStructure = (output: any, context: __SerdeContext): TimestampStructure => {
  return take(output, {
    value: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1UnprocessedEndTimeMap
 */
const de_UnprocessedEndTimeMap = (output: any, context: __SerdeContext): Record<string, TimestampStructure[]> => {
  return Object.entries(output).reduce((acc: Record<string, TimestampStructure[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_ListOfTimestamps(value, context);
    return acc;
  }, {} as Record<string, TimestampStructure[]>);
};

// de_UserFeedback omitted.

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

const _a = "accept";
const _cE = "contentEncoding";
const _cT = "clientToken";
const _cTo = "contentType";
const _ce = "content-encoding";
const _ct = "content-type";
const _dRO = "dailyReportsOnly";
const _eT = "endTime";
const _iD = "includeDescription";
const _l = "locale";
const _mD = "maxDepth";
const _mR = "maxResults";
const _nT = "nextToken";
const _oB = "orderBy";
const _p = "period";
const _pT = "profileToken";
const _rI = "revisionId";
const _sT = "startTime";
const _tK = "tagKeys";
const _tR = "targetResolution";
