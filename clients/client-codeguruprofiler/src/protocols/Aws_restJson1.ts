// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
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
  AgentConfiguration,
  AgentOrchestrationConfig,
  AgentParameterField,
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
  Metric,
  NotificationConfiguration,
  Pattern,
  ProfileTime,
  ProfilingGroupDescription,
  ProfilingStatus,
  Recommendation,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  TimestampStructure,
  UserFeedback,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AddNotificationChannelsCommand
 */
export const se_AddNotificationChannelsCommand = async (
  input: AddNotificationChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/profilingGroups/{profilingGroupName}/notificationConfiguration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.channels != null && { channels: se_Channels(input.channels, context) }),
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
 * serializeAws_restJson1BatchGetFrameMetricDataCommand
 */
export const se_BatchGetFrameMetricDataCommand = async (
  input: BatchGetFrameMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/profilingGroups/{profilingGroupName}/frames/-/metrics";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
    false
  );
  const query: any = map({
    startTime: [
      () => input.startTime !== void 0,
      () => (input.startTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
    endTime: [() => input.endTime !== void 0, () => (input.endTime!.toISOString().split(".")[0] + "Z").toString()],
    period: [, input.period!],
    targetResolution: [, input.targetResolution!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.frameMetrics != null && { frameMetrics: se_FrameMetrics(input.frameMetrics, context) }),
  });
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
 * serializeAws_restJson1ConfigureAgentCommand
 */
export const se_ConfigureAgentCommand = async (
  input: ConfigureAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/profilingGroups/{profilingGroupName}/configureAgent";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.fleetInstanceId != null && { fleetInstanceId: input.fleetInstanceId }),
    ...(input.metadata != null && { metadata: se_Metadata(input.metadata, context) }),
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
 * serializeAws_restJson1CreateProfilingGroupCommand
 */
export const se_CreateProfilingGroupCommand = async (
  input: CreateProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profilingGroups";
  const query: any = map({
    clientToken: [, __expectNonNull(input.clientToken!, `clientToken`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.agentOrchestrationConfig != null && {
      agentOrchestrationConfig: se_AgentOrchestrationConfig(input.agentOrchestrationConfig, context),
    }),
    ...(input.computePlatform != null && { computePlatform: input.computePlatform }),
    ...(input.profilingGroupName != null && { profilingGroupName: input.profilingGroupName }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
  });
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
 * serializeAws_restJson1DeleteProfilingGroupCommand
 */
export const se_DeleteProfilingGroupCommand = async (
  input: DeleteProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profilingGroups/{profilingGroupName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
    false
  );
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
 * serializeAws_restJson1DescribeProfilingGroupCommand
 */
export const se_DescribeProfilingGroupCommand = async (
  input: DescribeProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profilingGroups/{profilingGroupName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
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
 * serializeAws_restJson1GetFindingsReportAccountSummaryCommand
 */
export const se_GetFindingsReportAccountSummaryCommand = async (
  input: GetFindingsReportAccountSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/internal/findingsReports";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    dailyReportsOnly: [() => input.dailyReportsOnly !== void 0, () => input.dailyReportsOnly!.toString()],
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
 * serializeAws_restJson1GetNotificationConfigurationCommand
 */
export const se_GetNotificationConfigurationCommand = async (
  input: GetNotificationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/profilingGroups/{profilingGroupName}/notificationConfiguration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
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
 * serializeAws_restJson1GetPolicyCommand
 */
export const se_GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/profilingGroups/{profilingGroupName}/policy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
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
 * serializeAws_restJson1GetProfileCommand
 */
export const se_GetProfileCommand = async (
  input: GetProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    accept: input.accept!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/profilingGroups/{profilingGroupName}/profile";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
    false
  );
  const query: any = map({
    startTime: [
      () => input.startTime !== void 0,
      () => (input.startTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
    period: [, input.period!],
    endTime: [() => input.endTime !== void 0, () => (input.endTime!.toISOString().split(".")[0] + "Z").toString()],
    maxDepth: [() => input.maxDepth !== void 0, () => input.maxDepth!.toString()],
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
 * serializeAws_restJson1GetRecommendationsCommand
 */
export const se_GetRecommendationsCommand = async (
  input: GetRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/internal/profilingGroups/{profilingGroupName}/recommendations";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
    false
  );
  const query: any = map({
    startTime: [
      __expectNonNull(input.startTime, `startTime`) != null,
      () => (input.startTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
    endTime: [
      __expectNonNull(input.endTime, `endTime`) != null,
      () => (input.endTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
    locale: [, input.locale!],
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
 * serializeAws_restJson1ListFindingsReportsCommand
 */
export const se_ListFindingsReportsCommand = async (
  input: ListFindingsReportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/internal/profilingGroups/{profilingGroupName}/findingsReports";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
    false
  );
  const query: any = map({
    startTime: [
      __expectNonNull(input.startTime, `startTime`) != null,
      () => (input.startTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
    endTime: [
      __expectNonNull(input.endTime, `endTime`) != null,
      () => (input.endTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    dailyReportsOnly: [() => input.dailyReportsOnly !== void 0, () => input.dailyReportsOnly!.toString()],
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
 * serializeAws_restJson1ListProfileTimesCommand
 */
export const se_ListProfileTimesCommand = async (
  input: ListProfileTimesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/profilingGroups/{profilingGroupName}/profileTimes";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
    false
  );
  const query: any = map({
    startTime: [
      __expectNonNull(input.startTime, `startTime`) != null,
      () => (input.startTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
    endTime: [
      __expectNonNull(input.endTime, `endTime`) != null,
      () => (input.endTime!.toISOString().split(".")[0] + "Z").toString(),
    ],
    period: [, __expectNonNull(input.period!, `period`)],
    orderBy: [, input.orderBy!],
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
 * serializeAws_restJson1ListProfilingGroupsCommand
 */
export const se_ListProfilingGroupsCommand = async (
  input: ListProfilingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profilingGroups";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    includeDescription: [() => input.includeDescription !== void 0, () => input.includeDescription!.toString()],
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
 * serializeAws_restJson1PostAgentProfileCommand
 */
export const se_PostAgentProfileCommand = async (
  input: PostAgentProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": input.contentType! || "application/octet-stream",
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/profilingGroups/{profilingGroupName}/agentProfile";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
    false
  );
  const query: any = map({
    profileToken: [, input.profileToken ?? generateIdempotencyToken()],
  });
  let body: any;
  if (input.agentProfile !== undefined) {
    body = input.agentProfile;
  }
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
 * serializeAws_restJson1PutPermissionCommand
 */
export const se_PutPermissionCommand = async (
  input: PutPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/profilingGroups/{profilingGroupName}/policy/{actionGroup}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "actionGroup", () => input.actionGroup!, "{actionGroup}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.principals != null && { principals: se_Principals(input.principals, context) }),
    ...(input.revisionId != null && { revisionId: input.revisionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RemoveNotificationChannelCommand
 */
export const se_RemoveNotificationChannelCommand = async (
  input: RemoveNotificationChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/profilingGroups/{profilingGroupName}/notificationConfiguration/{channelId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "channelId", () => input.channelId!, "{channelId}", false);
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
 * serializeAws_restJson1RemovePermissionCommand
 */
export const se_RemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/profilingGroups/{profilingGroupName}/policy/{actionGroup}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "actionGroup", () => input.actionGroup!, "{actionGroup}", false);
  const query: any = map({
    revisionId: [, __expectNonNull(input.revisionId!, `revisionId`)],
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
 * serializeAws_restJson1SubmitFeedbackCommand
 */
export const se_SubmitFeedbackCommand = async (
  input: SubmitFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/internal/profilingGroups/{profilingGroupName}/anomalies/{anomalyInstanceId}/feedback";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "anomalyInstanceId",
    () => input.anomalyInstanceId!,
    "{anomalyInstanceId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.comment != null && { comment: input.comment }),
    ...(input.type != null && { type: input.type }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
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
 * serializeAws_restJson1UpdateProfilingGroupCommand
 */
export const se_UpdateProfilingGroupCommand = async (
  input: UpdateProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profilingGroups/{profilingGroupName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "profilingGroupName",
    () => input.profilingGroupName!,
    "{profilingGroupName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.agentOrchestrationConfig != null && {
      agentOrchestrationConfig: se_AgentOrchestrationConfig(input.agentOrchestrationConfig, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AddNotificationChannelsCommand
 */
export const de_AddNotificationChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddNotificationChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AddNotificationChannelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.notificationConfiguration != null) {
    contents.notificationConfiguration = de_NotificationConfiguration(data.notificationConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddNotificationChannelsCommandError
 */
const de_AddNotificationChannelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddNotificationChannelsCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchGetFrameMetricDataCommand
 */
export const de_BatchGetFrameMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFrameMetricDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetFrameMetricDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endTime != null) {
    contents.endTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.endTime));
  }
  if (data.endTimes != null) {
    contents.endTimes = de_ListOfTimestamps(data.endTimes, context);
  }
  if (data.frameMetricData != null) {
    contents.frameMetricData = de_FrameMetricData(data.frameMetricData, context);
  }
  if (data.resolution != null) {
    contents.resolution = __expectString(data.resolution);
  }
  if (data.startTime != null) {
    contents.startTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.startTime));
  }
  if (data.unprocessedEndTimes != null) {
    contents.unprocessedEndTimes = de_UnprocessedEndTimeMap(data.unprocessedEndTimes, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetFrameMetricDataCommandError
 */
const de_BatchGetFrameMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFrameMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1ConfigureAgentCommand
 */
export const de_ConfigureAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureAgentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ConfigureAgentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.configuration = de_AgentConfiguration(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1ConfigureAgentCommandError
 */
const de_ConfigureAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureAgentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1CreateProfilingGroupCommand
 */
export const de_CreateProfilingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfilingGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateProfilingGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.profilingGroup = de_ProfilingGroupDescription(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProfilingGroupCommandError
 */
const de_CreateProfilingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfilingGroupCommandOutput> => {
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteProfilingGroupCommand
 */
export const de_DeleteProfilingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfilingGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteProfilingGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProfilingGroupCommandError
 */
const de_DeleteProfilingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfilingGroupCommandOutput> => {
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
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1DescribeProfilingGroupCommand
 */
export const de_DescribeProfilingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProfilingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeProfilingGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.profilingGroup = de_ProfilingGroupDescription(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeProfilingGroupCommandError
 */
const de_DescribeProfilingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProfilingGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1GetFindingsReportAccountSummaryCommand
 */
export const de_GetFindingsReportAccountSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsReportAccountSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFindingsReportAccountSummaryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.reportSummaries != null) {
    contents.reportSummaries = de_FindingsReportSummaries(data.reportSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFindingsReportAccountSummaryCommandError
 */
const de_GetFindingsReportAccountSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsReportAccountSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1GetNotificationConfigurationCommand
 */
export const de_GetNotificationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotificationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetNotificationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.notificationConfiguration != null) {
    contents.notificationConfiguration = de_NotificationConfiguration(data.notificationConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetNotificationConfigurationCommandError
 */
const de_GetNotificationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNotificationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1GetPolicyCommand
 */
export const de_GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy != null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPolicyCommandError
 */
const de_GetPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetProfileCommand
 */
export const de_GetProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    contentType: [, output.headers["content-type"]],
    contentEncoding: [, output.headers["content-encoding"]],
  });
  const data: any = await collectBody(output.body, context);
  contents.profile = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetProfileCommandError
 */
const de_GetProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1GetRecommendationsCommand
 */
export const de_GetRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.anomalies != null) {
    contents.anomalies = de_Anomalies(data.anomalies, context);
  }
  if (data.profileEndTime != null) {
    contents.profileEndTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.profileEndTime));
  }
  if (data.profileStartTime != null) {
    contents.profileStartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.profileStartTime));
  }
  if (data.profilingGroupName != null) {
    contents.profilingGroupName = __expectString(data.profilingGroupName);
  }
  if (data.recommendations != null) {
    contents.recommendations = de_Recommendations(data.recommendations, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetRecommendationsCommandError
 */
const de_GetRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1ListFindingsReportsCommand
 */
export const de_ListFindingsReportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsReportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFindingsReportsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findingsReportSummaries != null) {
    contents.findingsReportSummaries = de_FindingsReportSummaries(data.findingsReportSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFindingsReportsCommandError
 */
const de_ListFindingsReportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingsReportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1ListProfileTimesCommand
 */
export const de_ListProfileTimesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileTimesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProfileTimesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.profileTimes != null) {
    contents.profileTimes = de_ProfileTimes(data.profileTimes, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListProfileTimesCommandError
 */
const de_ListProfileTimesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileTimesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1ListProfilingGroupsCommand
 */
export const de_ListProfilingGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilingGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProfilingGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.profilingGroupNames != null) {
    contents.profilingGroupNames = de_ProfilingGroupNames(data.profilingGroupNames, context);
  }
  if (data.profilingGroups != null) {
    contents.profilingGroups = de_ProfilingGroupDescriptions(data.profilingGroups, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListProfilingGroupsCommandError
 */
const de_ListProfilingGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilingGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
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
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1PostAgentProfileCommand
 */
export const de_PostAgentProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostAgentProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_PostAgentProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PostAgentProfileCommandError
 */
const de_PostAgentProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostAgentProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1PutPermissionCommand
 */
export const de_PutPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutPermissionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy != null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutPermissionCommandError
 */
const de_PutPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionCommandOutput> => {
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
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1RemoveNotificationChannelCommand
 */
export const de_RemoveNotificationChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveNotificationChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RemoveNotificationChannelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.notificationConfiguration != null) {
    contents.notificationConfiguration = de_NotificationConfiguration(data.notificationConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RemoveNotificationChannelCommandError
 */
const de_RemoveNotificationChannelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveNotificationChannelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1RemovePermissionCommand
 */
export const de_RemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RemovePermissionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy != null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RemovePermissionCommandError
 */
const de_RemovePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
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
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1SubmitFeedbackCommand
 */
export const de_SubmitFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitFeedbackCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_SubmitFeedbackCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SubmitFeedbackCommandError
 */
const de_SubmitFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubmitFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.codeguruprofiler#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeguruprofiler#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * deserializeAws_restJson1UpdateProfilingGroupCommand
 */
export const de_UpdateProfilingGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfilingGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateProfilingGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.profilingGroup = de_ProfilingGroupDescription(data, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProfilingGroupCommandError
 */
const de_UpdateProfilingGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfilingGroupCommandOutput> => {
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
    case "ThrottlingException":
    case "com.amazonaws.codeguruprofiler#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeguruprofiler#ValidationException":
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
 * serializeAws_restJson1AgentOrchestrationConfig
 */
const se_AgentOrchestrationConfig = (input: AgentOrchestrationConfig, context: __SerdeContext): any => {
  return {
    ...(input.profilingEnabled != null && { profilingEnabled: input.profilingEnabled }),
  };
};

/**
 * serializeAws_restJson1Channel
 */
const se_Channel = (input: Channel, context: __SerdeContext): any => {
  return {
    ...(input.eventPublishers != null && { eventPublishers: se_EventPublishers(input.eventPublishers, context) }),
    ...(input.id != null && { id: input.id }),
    ...(input.uri != null && { uri: input.uri }),
  };
};

/**
 * serializeAws_restJson1Channels
 */
const se_Channels = (input: Channel[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Channel(entry, context);
    });
};

/**
 * serializeAws_restJson1EventPublishers
 */
const se_EventPublishers = (input: (EventPublisher | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FrameMetric
 */
const se_FrameMetric = (input: FrameMetric, context: __SerdeContext): any => {
  return {
    ...(input.frameName != null && { frameName: input.frameName }),
    ...(input.threadStates != null && { threadStates: se_ThreadStates(input.threadStates, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1FrameMetrics
 */
const se_FrameMetrics = (input: FrameMetric[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FrameMetric(entry, context);
    });
};

/**
 * serializeAws_restJson1Metadata
 */
const se_Metadata = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [MetadataField | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Principals
 */
const se_Principals = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagsMap
 */
const se_TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ThreadStates
 */
const se_ThreadStates = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1AgentConfiguration
 */
const de_AgentConfiguration = (output: any, context: __SerdeContext): AgentConfiguration => {
  return {
    agentParameters: output.agentParameters != null ? de_AgentParameters(output.agentParameters, context) : undefined,
    periodInSeconds: __expectInt32(output.periodInSeconds),
    shouldProfile: __expectBoolean(output.shouldProfile),
  } as any;
};

/**
 * deserializeAws_restJson1AgentOrchestrationConfig
 */
const de_AgentOrchestrationConfig = (output: any, context: __SerdeContext): AgentOrchestrationConfig => {
  return {
    profilingEnabled: __expectBoolean(output.profilingEnabled),
  } as any;
};

/**
 * deserializeAws_restJson1AgentParameters
 */
const de_AgentParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [AgentParameterField | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1AggregatedProfileTime
 */
const de_AggregatedProfileTime = (output: any, context: __SerdeContext): AggregatedProfileTime => {
  return {
    period: __expectString(output.period),
    start: output.start != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.start)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Anomalies
 */
const de_Anomalies = (output: any, context: __SerdeContext): Anomaly[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Anomaly(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Anomaly
 */
const de_Anomaly = (output: any, context: __SerdeContext): Anomaly => {
  return {
    instances: output.instances != null ? de_AnomalyInstances(output.instances, context) : undefined,
    metric: output.metric != null ? de_Metric(output.metric, context) : undefined,
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_restJson1AnomalyInstance
 */
const de_AnomalyInstance = (output: any, context: __SerdeContext): AnomalyInstance => {
  return {
    endTime: output.endTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.endTime)) : undefined,
    id: __expectString(output.id),
    startTime:
      output.startTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.startTime)) : undefined,
    userFeedback: output.userFeedback != null ? de_UserFeedback(output.userFeedback, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AnomalyInstances
 */
const de_AnomalyInstances = (output: any, context: __SerdeContext): AnomalyInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnomalyInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Channel
 */
const de_Channel = (output: any, context: __SerdeContext): Channel => {
  return {
    eventPublishers: output.eventPublishers != null ? de_EventPublishers(output.eventPublishers, context) : undefined,
    id: __expectString(output.id),
    uri: __expectString(output.uri),
  } as any;
};

/**
 * deserializeAws_restJson1Channels
 */
const de_Channels = (output: any, context: __SerdeContext): Channel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Channel(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EventPublishers
 */
const de_EventPublishers = (output: any, context: __SerdeContext): (EventPublisher | string)[] => {
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
 * deserializeAws_restJson1FindingsReportSummaries
 */
const de_FindingsReportSummaries = (output: any, context: __SerdeContext): FindingsReportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FindingsReportSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FindingsReportSummary
 */
const de_FindingsReportSummary = (output: any, context: __SerdeContext): FindingsReportSummary => {
  return {
    id: __expectString(output.id),
    profileEndTime:
      output.profileEndTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.profileEndTime))
        : undefined,
    profileStartTime:
      output.profileStartTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.profileStartTime))
        : undefined,
    profilingGroupName: __expectString(output.profilingGroupName),
    totalNumberOfFindings: __expectInt32(output.totalNumberOfFindings),
  } as any;
};

/**
 * deserializeAws_restJson1FrameMetric
 */
const de_FrameMetric = (output: any, context: __SerdeContext): FrameMetric => {
  return {
    frameName: __expectString(output.frameName),
    threadStates: output.threadStates != null ? de_ThreadStates(output.threadStates, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1FrameMetricData
 */
const de_FrameMetricData = (output: any, context: __SerdeContext): FrameMetricDatum[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FrameMetricDatum(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FrameMetricDatum
 */
const de_FrameMetricDatum = (output: any, context: __SerdeContext): FrameMetricDatum => {
  return {
    frameMetric: output.frameMetric != null ? de_FrameMetric(output.frameMetric, context) : undefined,
    values: output.values != null ? de_FrameMetricValues(output.values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FrameMetricValues
 */
const de_FrameMetricValues = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_TimestampStructure(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Match
 */
const de_Match = (output: any, context: __SerdeContext): Match => {
  return {
    frameAddress: __expectString(output.frameAddress),
    targetFramesIndex: __expectInt32(output.targetFramesIndex),
    thresholdBreachValue: __limitedParseDouble(output.thresholdBreachValue),
  } as any;
};

/**
 * deserializeAws_restJson1Matches
 */
const de_Matches = (output: any, context: __SerdeContext): Match[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Match(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Metric
 */
const de_Metric = (output: any, context: __SerdeContext): Metric => {
  return {
    frameName: __expectString(output.frameName),
    threadStates: output.threadStates != null ? de_Strings(output.threadStates, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1NotificationConfiguration
 */
const de_NotificationConfiguration = (output: any, context: __SerdeContext): NotificationConfiguration => {
  return {
    channels: output.channels != null ? de_Channels(output.channels, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Pattern
 */
const de_Pattern = (output: any, context: __SerdeContext): Pattern => {
  return {
    countersToAggregate:
      output.countersToAggregate != null ? de_Strings(output.countersToAggregate, context) : undefined,
    description: __expectString(output.description),
    id: __expectString(output.id),
    name: __expectString(output.name),
    resolutionSteps: __expectString(output.resolutionSteps),
    targetFrames: output.targetFrames != null ? de_TargetFrames(output.targetFrames, context) : undefined,
    thresholdPercent: __limitedParseDouble(output.thresholdPercent),
  } as any;
};

/**
 * deserializeAws_restJson1ProfileTime
 */
const de_ProfileTime = (output: any, context: __SerdeContext): ProfileTime => {
  return {
    start: output.start != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.start)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ProfileTimes
 */
const de_ProfileTimes = (output: any, context: __SerdeContext): ProfileTime[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProfileTime(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProfilingGroupDescription
 */
const de_ProfilingGroupDescription = (output: any, context: __SerdeContext): ProfilingGroupDescription => {
  return {
    agentOrchestrationConfig:
      output.agentOrchestrationConfig != null
        ? de_AgentOrchestrationConfig(output.agentOrchestrationConfig, context)
        : undefined,
    arn: __expectString(output.arn),
    computePlatform: __expectString(output.computePlatform),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    name: __expectString(output.name),
    profilingStatus: output.profilingStatus != null ? de_ProfilingStatus(output.profilingStatus, context) : undefined,
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ProfilingGroupDescriptions
 */
const de_ProfilingGroupDescriptions = (output: any, context: __SerdeContext): ProfilingGroupDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProfilingGroupDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProfilingGroupNames
 */
const de_ProfilingGroupNames = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ProfilingStatus
 */
const de_ProfilingStatus = (output: any, context: __SerdeContext): ProfilingStatus => {
  return {
    latestAgentOrchestratedAt:
      output.latestAgentOrchestratedAt != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.latestAgentOrchestratedAt))
        : undefined,
    latestAgentProfileReportedAt:
      output.latestAgentProfileReportedAt != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.latestAgentProfileReportedAt))
        : undefined,
    latestAggregatedProfile:
      output.latestAggregatedProfile != null
        ? de_AggregatedProfileTime(output.latestAggregatedProfile, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Recommendation
 */
const de_Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    allMatchesCount: __expectInt32(output.allMatchesCount),
    allMatchesSum: __limitedParseDouble(output.allMatchesSum),
    endTime: output.endTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.endTime)) : undefined,
    pattern: output.pattern != null ? de_Pattern(output.pattern, context) : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.startTime)) : undefined,
    topMatches: output.topMatches != null ? de_Matches(output.topMatches, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Recommendations
 */
const de_Recommendations = (output: any, context: __SerdeContext): Recommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Recommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Strings
 */
const de_Strings = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1TagsMap
 */
const de_TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TargetFrame
 */
const de_TargetFrame = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1TargetFrames
 */
const de_TargetFrames = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TargetFrame(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ThreadStates
 */
const de_ThreadStates = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1TimestampStructure
 */
const de_TimestampStructure = (output: any, context: __SerdeContext): TimestampStructure => {
  return {
    value: output.value != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.value)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1UnprocessedEndTimeMap
 */
const de_UnprocessedEndTimeMap = (output: any, context: __SerdeContext): Record<string, TimestampStructure[]> => {
  return Object.entries(output).reduce((acc: Record<string, TimestampStructure[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ListOfTimestamps(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1UserFeedback
 */
const de_UserFeedback = (output: any, context: __SerdeContext): UserFeedback => {
  return {
    type: __expectString(output.type),
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
