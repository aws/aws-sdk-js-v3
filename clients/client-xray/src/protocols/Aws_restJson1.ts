// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { BatchGetTracesCommandInput, BatchGetTracesCommandOutput } from "../commands/BatchGetTracesCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "../commands/CreateGroupCommand";
import { CreateSamplingRuleCommandInput, CreateSamplingRuleCommandOutput } from "../commands/CreateSamplingRuleCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "../commands/DeleteGroupCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import { DeleteSamplingRuleCommandInput, DeleteSamplingRuleCommandOutput } from "../commands/DeleteSamplingRuleCommand";
import {
  GetEncryptionConfigCommandInput,
  GetEncryptionConfigCommandOutput,
} from "../commands/GetEncryptionConfigCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand";
import { GetGroupsCommandInput, GetGroupsCommandOutput } from "../commands/GetGroupsCommand";
import { GetInsightCommandInput, GetInsightCommandOutput } from "../commands/GetInsightCommand";
import { GetInsightEventsCommandInput, GetInsightEventsCommandOutput } from "../commands/GetInsightEventsCommand";
import {
  GetInsightImpactGraphCommandInput,
  GetInsightImpactGraphCommandOutput,
} from "../commands/GetInsightImpactGraphCommand";
import {
  GetInsightSummariesCommandInput,
  GetInsightSummariesCommandOutput,
} from "../commands/GetInsightSummariesCommand";
import { GetSamplingRulesCommandInput, GetSamplingRulesCommandOutput } from "../commands/GetSamplingRulesCommand";
import {
  GetSamplingStatisticSummariesCommandInput,
  GetSamplingStatisticSummariesCommandOutput,
} from "../commands/GetSamplingStatisticSummariesCommand";
import { GetSamplingTargetsCommandInput, GetSamplingTargetsCommandOutput } from "../commands/GetSamplingTargetsCommand";
import { GetServiceGraphCommandInput, GetServiceGraphCommandOutput } from "../commands/GetServiceGraphCommand";
import {
  GetTimeSeriesServiceStatisticsCommandInput,
  GetTimeSeriesServiceStatisticsCommandOutput,
} from "../commands/GetTimeSeriesServiceStatisticsCommand";
import { GetTraceGraphCommandInput, GetTraceGraphCommandOutput } from "../commands/GetTraceGraphCommand";
import { GetTraceSummariesCommandInput, GetTraceSummariesCommandOutput } from "../commands/GetTraceSummariesCommand";
import {
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput,
} from "../commands/ListResourcePoliciesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutEncryptionConfigCommandInput,
  PutEncryptionConfigCommandOutput,
} from "../commands/PutEncryptionConfigCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "../commands/PutResourcePolicyCommand";
import {
  PutTelemetryRecordsCommandInput,
  PutTelemetryRecordsCommandOutput,
} from "../commands/PutTelemetryRecordsCommand";
import { PutTraceSegmentsCommandInput, PutTraceSegmentsCommandOutput } from "../commands/PutTraceSegmentsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "../commands/UpdateGroupCommand";
import { UpdateSamplingRuleCommandInput, UpdateSamplingRuleCommandOutput } from "../commands/UpdateSamplingRuleCommand";
import {
  Alias,
  AnnotationValue,
  AnomalousService,
  AvailabilityZoneDetail,
  BackendConnectionErrors,
  Edge,
  EdgeStatistics,
  EncryptionConfig,
  ErrorRootCause,
  ErrorRootCauseEntity,
  ErrorRootCauseService,
  ErrorStatistics,
  FaultRootCause,
  FaultRootCauseEntity,
  FaultRootCauseService,
  FaultStatistics,
  ForecastStatistics,
  Group,
  GroupSummary,
  HistogramEntry,
  Http,
  Insight,
  InsightCategory,
  InsightEvent,
  InsightImpactGraphEdge,
  InsightImpactGraphService,
  InsightsConfiguration,
  InsightState,
  InsightSummary,
  InstanceIdDetail,
  InvalidPolicyRevisionIdException,
  InvalidRequestException,
  LockoutPreventionException,
  MalformedPolicyDocumentException,
  PolicyCountLimitExceededException,
  PolicySizeLimitExceededException,
  RequestImpactStatistics,
  ResourceARNDetail,
  ResourceNotFoundException,
  ResourcePolicy,
  ResponseTimeRootCause,
  ResponseTimeRootCauseEntity,
  ResponseTimeRootCauseService,
  RootCauseException,
  RuleLimitExceededException,
  SamplingRule,
  SamplingRuleRecord,
  SamplingRuleUpdate,
  SamplingStatisticsDocument,
  SamplingStatisticSummary,
  SamplingStrategy,
  SamplingTargetDocument,
  Segment,
  Service,
  ServiceId,
  ServiceStatistics,
  Tag,
  TelemetryRecord,
  ThrottledException,
  TimeSeriesServiceStatistics,
  TooManyTagsException,
  Trace,
  TraceSummary,
  TraceUser,
  UnprocessedStatistics,
  UnprocessedTraceSegment,
  ValueWithServiceIds,
} from "../models/models_0";
import { XRayServiceException as __BaseException } from "../models/XRayServiceException";

/**
 * serializeAws_restJson1BatchGetTracesCommand
 */
export const se_BatchGetTracesCommand = async (
  input: BatchGetTracesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/Traces";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TraceIds != null && { TraceIds: se_TraceIdList(input.TraceIds, context) }),
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
 * serializeAws_restJson1CreateGroupCommand
 */
export const se_CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.FilterExpression != null && { FilterExpression: input.FilterExpression }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.InsightsConfiguration != null && {
      InsightsConfiguration: se_InsightsConfiguration(input.InsightsConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1CreateSamplingRuleCommand
 */
export const se_CreateSamplingRuleCommand = async (
  input: CreateSamplingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateSamplingRule";
  let body: any;
  body = JSON.stringify({
    ...(input.SamplingRule != null && { SamplingRule: se_SamplingRule(input.SamplingRule, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
 * serializeAws_restJson1DeleteGroupCommand
 */
export const se_DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.GroupARN != null && { GroupARN: input.GroupARN }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
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
 * serializeAws_restJson1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteResourcePolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
    ...(input.PolicyRevisionId != null && { PolicyRevisionId: input.PolicyRevisionId }),
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
 * serializeAws_restJson1DeleteSamplingRuleCommand
 */
export const se_DeleteSamplingRuleCommand = async (
  input: DeleteSamplingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteSamplingRule";
  let body: any;
  body = JSON.stringify({
    ...(input.RuleARN != null && { RuleARN: input.RuleARN }),
    ...(input.RuleName != null && { RuleName: input.RuleName }),
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
 * serializeAws_restJson1GetEncryptionConfigCommand
 */
export const se_GetEncryptionConfigCommand = async (
  input: GetEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/EncryptionConfig";
  let body: any;
  body = "";
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
 * serializeAws_restJson1GetGroupCommand
 */
export const se_GetGroupCommand = async (
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.GroupARN != null && { GroupARN: input.GroupARN }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
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
 * serializeAws_restJson1GetGroupsCommand
 */
export const se_GetGroupsCommand = async (
  input: GetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/Groups";
  let body: any;
  body = JSON.stringify({
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
 * serializeAws_restJson1GetInsightCommand
 */
export const se_GetInsightCommand = async (
  input: GetInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/Insight";
  let body: any;
  body = JSON.stringify({
    ...(input.InsightId != null && { InsightId: input.InsightId }),
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
 * serializeAws_restJson1GetInsightEventsCommand
 */
export const se_GetInsightEventsCommand = async (
  input: GetInsightEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/InsightEvents";
  let body: any;
  body = JSON.stringify({
    ...(input.InsightId != null && { InsightId: input.InsightId }),
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
 * serializeAws_restJson1GetInsightImpactGraphCommand
 */
export const se_GetInsightImpactGraphCommand = async (
  input: GetInsightImpactGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/InsightImpactGraph";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.InsightId != null && { InsightId: input.InsightId }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
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
 * serializeAws_restJson1GetInsightSummariesCommand
 */
export const se_GetInsightSummariesCommand = async (
  input: GetInsightSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/InsightSummaries";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.GroupARN != null && { GroupARN: input.GroupARN }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    ...(input.States != null && { States: se_InsightStateList(input.States, context) }),
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
 * serializeAws_restJson1GetSamplingRulesCommand
 */
export const se_GetSamplingRulesCommand = async (
  input: GetSamplingRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetSamplingRules";
  let body: any;
  body = JSON.stringify({
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
 * serializeAws_restJson1GetSamplingStatisticSummariesCommand
 */
export const se_GetSamplingStatisticSummariesCommand = async (
  input: GetSamplingStatisticSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/SamplingStatisticSummaries";
  let body: any;
  body = JSON.stringify({
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
 * serializeAws_restJson1GetSamplingTargetsCommand
 */
export const se_GetSamplingTargetsCommand = async (
  input: GetSamplingTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/SamplingTargets";
  let body: any;
  body = JSON.stringify({
    ...(input.SamplingStatisticsDocuments != null && {
      SamplingStatisticsDocuments: se_SamplingStatisticsDocumentList(input.SamplingStatisticsDocuments, context),
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
 * serializeAws_restJson1GetServiceGraphCommand
 */
export const se_GetServiceGraphCommand = async (
  input: GetServiceGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ServiceGraph";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.GroupARN != null && { GroupARN: input.GroupARN }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
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
 * serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand
 */
export const se_GetTimeSeriesServiceStatisticsCommand = async (
  input: GetTimeSeriesServiceStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TimeSeriesServiceStatistics";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.EntitySelectorExpression != null && { EntitySelectorExpression: input.EntitySelectorExpression }),
    ...(input.ForecastStatistics != null && { ForecastStatistics: input.ForecastStatistics }),
    ...(input.GroupARN != null && { GroupARN: input.GroupARN }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Period != null && { Period: input.Period }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
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
 * serializeAws_restJson1GetTraceGraphCommand
 */
export const se_GetTraceGraphCommand = async (
  input: GetTraceGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TraceGraph";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TraceIds != null && { TraceIds: se_TraceIdList(input.TraceIds, context) }),
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
 * serializeAws_restJson1GetTraceSummariesCommand
 */
export const se_GetTraceSummariesCommand = async (
  input: GetTraceSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TraceSummaries";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime != null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.FilterExpression != null && { FilterExpression: input.FilterExpression }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Sampling != null && { Sampling: input.Sampling }),
    ...(input.SamplingStrategy != null && { SamplingStrategy: se_SamplingStrategy(input.SamplingStrategy, context) }),
    ...(input.StartTime != null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    ...(input.TimeRangeType != null && { TimeRangeType: input.TimeRangeType }),
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
 * serializeAws_restJson1ListResourcePoliciesCommand
 */
export const se_ListResourcePoliciesCommand = async (
  input: ListResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListResourcePolicies";
  let body: any;
  body = JSON.stringify({
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListTagsForResource";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
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
 * serializeAws_restJson1PutEncryptionConfigCommand
 */
export const se_PutEncryptionConfigCommand = async (
  input: PutEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutEncryptionConfig";
  let body: any;
  body = JSON.stringify({
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Type != null && { Type: input.Type }),
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
 * serializeAws_restJson1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutResourcePolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.BypassPolicyLockoutCheck != null && { BypassPolicyLockoutCheck: input.BypassPolicyLockoutCheck }),
    ...(input.PolicyDocument != null && { PolicyDocument: input.PolicyDocument }),
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
    ...(input.PolicyRevisionId != null && { PolicyRevisionId: input.PolicyRevisionId }),
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
 * serializeAws_restJson1PutTelemetryRecordsCommand
 */
export const se_PutTelemetryRecordsCommand = async (
  input: PutTelemetryRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TelemetryRecords";
  let body: any;
  body = JSON.stringify({
    ...(input.EC2InstanceId != null && { EC2InstanceId: input.EC2InstanceId }),
    ...(input.Hostname != null && { Hostname: input.Hostname }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TelemetryRecords != null && {
      TelemetryRecords: se_TelemetryRecordList(input.TelemetryRecords, context),
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
 * serializeAws_restJson1PutTraceSegmentsCommand
 */
export const se_PutTraceSegmentsCommand = async (
  input: PutTraceSegmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TraceSegments";
  let body: any;
  body = JSON.stringify({
    ...(input.TraceSegmentDocuments != null && {
      TraceSegmentDocuments: se_TraceSegmentDocumentList(input.TraceSegmentDocuments, context),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
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
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UntagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
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
 * serializeAws_restJson1UpdateGroupCommand
 */
export const se_UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.FilterExpression != null && { FilterExpression: input.FilterExpression }),
    ...(input.GroupARN != null && { GroupARN: input.GroupARN }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.InsightsConfiguration != null && {
      InsightsConfiguration: se_InsightsConfiguration(input.InsightsConfiguration, context),
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
 * serializeAws_restJson1UpdateSamplingRuleCommand
 */
export const se_UpdateSamplingRuleCommand = async (
  input: UpdateSamplingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateSamplingRule";
  let body: any;
  body = JSON.stringify({
    ...(input.SamplingRuleUpdate != null && {
      SamplingRuleUpdate: se_SamplingRuleUpdate(input.SamplingRuleUpdate, context),
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
 * deserializeAws_restJson1BatchGetTracesCommand
 */
export const de_BatchGetTracesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTracesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetTracesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Traces != null) {
    contents.Traces = de_TraceList(data.Traces, context);
  }
  if (data.UnprocessedTraceIds != null) {
    contents.UnprocessedTraceIds = de_UnprocessedTraceIdList(data.UnprocessedTraceIds, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetTracesCommandError
 */
const de_BatchGetTracesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTracesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateGroupCommand
 */
export const de_CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = de_Group(data.Group, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateGroupCommandError
 */
const de_CreateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateSamplingRuleCommand
 */
export const de_CreateSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSamplingRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SamplingRuleRecord != null) {
    contents.SamplingRuleRecord = de_SamplingRuleRecord(data.SamplingRuleRecord, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSamplingRuleCommandError
 */
const de_CreateSamplingRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSamplingRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "RuleLimitExceededException":
    case "com.amazonaws.xray#RuleLimitExceededException":
      throw await de_RuleLimitExceededExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteGroupCommand
 */
export const de_DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGroupCommandError
 */
const de_DeleteGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResourcePolicyCommandError
 */
const de_DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPolicyRevisionIdException":
    case "com.amazonaws.xray#InvalidPolicyRevisionIdException":
      throw await de_InvalidPolicyRevisionIdExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteSamplingRuleCommand
 */
export const de_DeleteSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSamplingRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SamplingRuleRecord != null) {
    contents.SamplingRuleRecord = de_SamplingRuleRecord(data.SamplingRuleRecord, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSamplingRuleCommandError
 */
const de_DeleteSamplingRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSamplingRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetEncryptionConfigCommand
 */
export const de_GetEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEncryptionConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EncryptionConfig != null) {
    contents.EncryptionConfig = de_EncryptionConfig(data.EncryptionConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEncryptionConfigCommandError
 */
const de_GetEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetGroupCommand
 */
export const de_GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = de_Group(data.Group, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupCommandError
 */
const de_GetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetGroupsCommand
 */
export const de_GetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Groups != null) {
    contents.Groups = de_GroupSummaryList(data.Groups, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetGroupsCommandError
 */
const de_GetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetInsightCommand
 */
export const de_GetInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetInsightCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Insight != null) {
    contents.Insight = de_Insight(data.Insight, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetInsightCommandError
 */
const de_GetInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetInsightEventsCommand
 */
export const de_GetInsightEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetInsightEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InsightEvents != null) {
    contents.InsightEvents = de_InsightEventList(data.InsightEvents, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetInsightEventsCommandError
 */
const de_GetInsightEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetInsightImpactGraphCommand
 */
export const de_GetInsightImpactGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightImpactGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetInsightImpactGraphCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EndTime != null) {
    contents.EndTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.EndTime)));
  }
  if (data.InsightId != null) {
    contents.InsightId = __expectString(data.InsightId);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ServiceGraphEndTime != null) {
    contents.ServiceGraphEndTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.ServiceGraphEndTime)));
  }
  if (data.ServiceGraphStartTime != null) {
    contents.ServiceGraphStartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.ServiceGraphStartTime)));
  }
  if (data.Services != null) {
    contents.Services = de_InsightImpactGraphServiceList(data.Services, context);
  }
  if (data.StartTime != null) {
    contents.StartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.StartTime)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetInsightImpactGraphCommandError
 */
const de_GetInsightImpactGraphCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightImpactGraphCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetInsightSummariesCommand
 */
export const de_GetInsightSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetInsightSummariesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InsightSummaries != null) {
    contents.InsightSummaries = de_InsightSummaryList(data.InsightSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetInsightSummariesCommandError
 */
const de_GetInsightSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSamplingRulesCommand
 */
export const de_GetSamplingRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSamplingRulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SamplingRuleRecords != null) {
    contents.SamplingRuleRecords = de_SamplingRuleRecordList(data.SamplingRuleRecords, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSamplingRulesCommandError
 */
const de_GetSamplingRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSamplingStatisticSummariesCommand
 */
export const de_GetSamplingStatisticSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingStatisticSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSamplingStatisticSummariesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SamplingStatisticSummaries != null) {
    contents.SamplingStatisticSummaries = de_SamplingStatisticSummaryList(data.SamplingStatisticSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSamplingStatisticSummariesCommandError
 */
const de_GetSamplingStatisticSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingStatisticSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSamplingTargetsCommand
 */
export const de_GetSamplingTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSamplingTargetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LastRuleModification != null) {
    contents.LastRuleModification = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastRuleModification)));
  }
  if (data.SamplingTargetDocuments != null) {
    contents.SamplingTargetDocuments = de_SamplingTargetDocumentList(data.SamplingTargetDocuments, context);
  }
  if (data.UnprocessedStatistics != null) {
    contents.UnprocessedStatistics = de_UnprocessedStatisticsList(data.UnprocessedStatistics, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSamplingTargetsCommandError
 */
const de_GetSamplingTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetServiceGraphCommand
 */
export const de_GetServiceGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetServiceGraphCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContainsOldGroupVersions != null) {
    contents.ContainsOldGroupVersions = __expectBoolean(data.ContainsOldGroupVersions);
  }
  if (data.EndTime != null) {
    contents.EndTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.EndTime)));
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Services != null) {
    contents.Services = de_ServiceList(data.Services, context);
  }
  if (data.StartTime != null) {
    contents.StartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.StartTime)));
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceGraphCommandError
 */
const de_GetServiceGraphCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceGraphCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand
 */
export const de_GetTimeSeriesServiceStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimeSeriesServiceStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTimeSeriesServiceStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ContainsOldGroupVersions != null) {
    contents.ContainsOldGroupVersions = __expectBoolean(data.ContainsOldGroupVersions);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TimeSeriesServiceStatistics != null) {
    contents.TimeSeriesServiceStatistics = de_TimeSeriesServiceStatisticsList(
      data.TimeSeriesServiceStatistics,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommandError
 */
const de_GetTimeSeriesServiceStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimeSeriesServiceStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetTraceGraphCommand
 */
export const de_GetTraceGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTraceGraphCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Services != null) {
    contents.Services = de_ServiceList(data.Services, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTraceGraphCommandError
 */
const de_GetTraceGraphCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceGraphCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetTraceSummariesCommand
 */
export const de_GetTraceSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTraceSummariesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ApproximateTime != null) {
    contents.ApproximateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.ApproximateTime)));
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TraceSummaries != null) {
    contents.TraceSummaries = de_TraceSummaryList(data.TraceSummaries, context);
  }
  if (data.TracesProcessedCount != null) {
    contents.TracesProcessedCount = __expectLong(data.TracesProcessedCount);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTraceSummariesCommandError
 */
const de_GetTraceSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListResourcePoliciesCommand
 */
export const de_ListResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResourcePoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ResourcePolicies != null) {
    contents.ResourcePolicies = de_ResourcePolicyList(data.ResourcePolicies, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListResourcePoliciesCommandError
 */
const de_ListResourcePoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcePoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Tags != null) {
    contents.Tags = de_TagList(data.Tags, context);
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
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.xray#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutEncryptionConfigCommand
 */
export const de_PutEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutEncryptionConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EncryptionConfig != null) {
    contents.EncryptionConfig = de_EncryptionConfig(data.EncryptionConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutEncryptionConfigCommandError
 */
const de_PutEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ResourcePolicy != null) {
    contents.ResourcePolicy = de_ResourcePolicy(data.ResourcePolicy, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutResourcePolicyCommandError
 */
const de_PutResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidPolicyRevisionIdException":
    case "com.amazonaws.xray#InvalidPolicyRevisionIdException":
      throw await de_InvalidPolicyRevisionIdExceptionRes(parsedOutput, context);
    case "LockoutPreventionException":
    case "com.amazonaws.xray#LockoutPreventionException":
      throw await de_LockoutPreventionExceptionRes(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.xray#MalformedPolicyDocumentException":
      throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
    case "PolicyCountLimitExceededException":
    case "com.amazonaws.xray#PolicyCountLimitExceededException":
      throw await de_PolicyCountLimitExceededExceptionRes(parsedOutput, context);
    case "PolicySizeLimitExceededException":
    case "com.amazonaws.xray#PolicySizeLimitExceededException":
      throw await de_PolicySizeLimitExceededExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutTelemetryRecordsCommand
 */
export const de_PutTelemetryRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTelemetryRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutTelemetryRecordsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutTelemetryRecordsCommandError
 */
const de_PutTelemetryRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTelemetryRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutTraceSegmentsCommand
 */
export const de_PutTraceSegmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTraceSegmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutTraceSegmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UnprocessedTraceSegments != null) {
    contents.UnprocessedTraceSegments = de_UnprocessedTraceSegmentList(data.UnprocessedTraceSegments, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutTraceSegmentsCommandError
 */
const de_PutTraceSegmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTraceSegmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.xray#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.xray#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.xray#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateGroupCommand
 */
export const de_UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = de_Group(data.Group, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGroupCommandError
 */
const de_UpdateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateSamplingRuleCommand
 */
export const de_UpdateSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSamplingRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SamplingRuleRecord != null) {
    contents.SamplingRuleRecord = de_SamplingRuleRecord(data.SamplingRuleRecord, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSamplingRuleCommandError
 */
const de_UpdateSamplingRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSamplingRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1InvalidPolicyRevisionIdExceptionRes
 */
const de_InvalidPolicyRevisionIdExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPolicyRevisionIdException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidPolicyRevisionIdException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LockoutPreventionExceptionRes
 */
const de_LockoutPreventionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LockoutPreventionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new LockoutPreventionException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new MalformedPolicyDocumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PolicyCountLimitExceededExceptionRes
 */
const de_PolicyCountLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyCountLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new PolicyCountLimitExceededException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName != null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RuleLimitExceededExceptionRes
 */
const de_RuleLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RuleLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new RuleLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottledExceptionRes
 */
const de_ThrottledExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName != null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AttributeMap
 */
const se_AttributeMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1BackendConnectionErrors
 */
const se_BackendConnectionErrors = (input: BackendConnectionErrors, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionRefusedCount != null && { ConnectionRefusedCount: input.ConnectionRefusedCount }),
    ...(input.HTTPCode4XXCount != null && { HTTPCode4XXCount: input.HTTPCode4XXCount }),
    ...(input.HTTPCode5XXCount != null && { HTTPCode5XXCount: input.HTTPCode5XXCount }),
    ...(input.OtherCount != null && { OtherCount: input.OtherCount }),
    ...(input.TimeoutCount != null && { TimeoutCount: input.TimeoutCount }),
    ...(input.UnknownHostCount != null && { UnknownHostCount: input.UnknownHostCount }),
  };
};

/**
 * serializeAws_restJson1InsightsConfiguration
 */
const se_InsightsConfiguration = (input: InsightsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InsightsEnabled != null && { InsightsEnabled: input.InsightsEnabled }),
    ...(input.NotificationsEnabled != null && { NotificationsEnabled: input.NotificationsEnabled }),
  };
};

/**
 * serializeAws_restJson1InsightStateList
 */
const se_InsightStateList = (input: (InsightState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SamplingRule
 */
const se_SamplingRule = (input: SamplingRule, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: se_AttributeMap(input.Attributes, context) }),
    ...(input.FixedRate != null && { FixedRate: __serializeFloat(input.FixedRate) }),
    ...(input.HTTPMethod != null && { HTTPMethod: input.HTTPMethod }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.ReservoirSize != null && { ReservoirSize: input.ReservoirSize }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.RuleARN != null && { RuleARN: input.RuleARN }),
    ...(input.RuleName != null && { RuleName: input.RuleName }),
    ...(input.ServiceName != null && { ServiceName: input.ServiceName }),
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
    ...(input.URLPath != null && { URLPath: input.URLPath }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_restJson1SamplingRuleUpdate
 */
const se_SamplingRuleUpdate = (input: SamplingRuleUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: se_AttributeMap(input.Attributes, context) }),
    ...(input.FixedRate != null && { FixedRate: __serializeFloat(input.FixedRate) }),
    ...(input.HTTPMethod != null && { HTTPMethod: input.HTTPMethod }),
    ...(input.Host != null && { Host: input.Host }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.ReservoirSize != null && { ReservoirSize: input.ReservoirSize }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.RuleARN != null && { RuleARN: input.RuleARN }),
    ...(input.RuleName != null && { RuleName: input.RuleName }),
    ...(input.ServiceName != null && { ServiceName: input.ServiceName }),
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
    ...(input.URLPath != null && { URLPath: input.URLPath }),
  };
};

/**
 * serializeAws_restJson1SamplingStatisticsDocument
 */
const se_SamplingStatisticsDocument = (input: SamplingStatisticsDocument, context: __SerdeContext): any => {
  return {
    ...(input.BorrowCount != null && { BorrowCount: input.BorrowCount }),
    ...(input.ClientID != null && { ClientID: input.ClientID }),
    ...(input.RequestCount != null && { RequestCount: input.RequestCount }),
    ...(input.RuleName != null && { RuleName: input.RuleName }),
    ...(input.SampledCount != null && { SampledCount: input.SampledCount }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1SamplingStatisticsDocumentList
 */
const se_SamplingStatisticsDocumentList = (input: SamplingStatisticsDocument[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SamplingStatisticsDocument(entry, context);
    });
};

/**
 * serializeAws_restJson1SamplingStrategy
 */
const se_SamplingStrategy = (input: SamplingStrategy, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: __serializeFloat(input.Value) }),
  };
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1TelemetryRecord
 */
const se_TelemetryRecord = (input: TelemetryRecord, context: __SerdeContext): any => {
  return {
    ...(input.BackendConnectionErrors != null && {
      BackendConnectionErrors: se_BackendConnectionErrors(input.BackendConnectionErrors, context),
    }),
    ...(input.SegmentsReceivedCount != null && { SegmentsReceivedCount: input.SegmentsReceivedCount }),
    ...(input.SegmentsRejectedCount != null && { SegmentsRejectedCount: input.SegmentsRejectedCount }),
    ...(input.SegmentsSentCount != null && { SegmentsSentCount: input.SegmentsSentCount }),
    ...(input.SegmentsSpilloverCount != null && { SegmentsSpilloverCount: input.SegmentsSpilloverCount }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1TelemetryRecordList
 */
const se_TelemetryRecordList = (input: TelemetryRecord[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TelemetryRecord(entry, context);
    });
};

/**
 * serializeAws_restJson1TraceIdList
 */
const se_TraceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TraceSegmentDocumentList
 */
const se_TraceSegmentDocumentList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1Alias
 */
const de_Alias = (output: any, context: __SerdeContext): Alias => {
  return {
    Name: __expectString(output.Name),
    Names: output.Names != null ? de_AliasNames(output.Names, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1AliasList
 */
const de_AliasList = (output: any, context: __SerdeContext): Alias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Alias(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AliasNames
 */
const de_AliasNames = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Annotations
 */
const de_Annotations = (output: any, context: __SerdeContext): Record<string, ValueWithServiceIds[]> => {
  return Object.entries(output).reduce((acc: Record<string, ValueWithServiceIds[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_ValuesWithServiceIds(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AnnotationValue
 */
const de_AnnotationValue = (output: any, context: __SerdeContext): AnnotationValue => {
  if (__expectBoolean(output.BooleanValue) !== undefined) {
    return { BooleanValue: __expectBoolean(output.BooleanValue) as any };
  }
  if (__limitedParseDouble(output.NumberValue) !== undefined) {
    return { NumberValue: __limitedParseDouble(output.NumberValue) as any };
  }
  if (__expectString(output.StringValue) !== undefined) {
    return { StringValue: __expectString(output.StringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1AnomalousService
 */
const de_AnomalousService = (output: any, context: __SerdeContext): AnomalousService => {
  return {
    ServiceId: output.ServiceId != null ? de_ServiceId(output.ServiceId, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AnomalousServiceList
 */
const de_AnomalousServiceList = (output: any, context: __SerdeContext): AnomalousService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnomalousService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AttributeMap
 */
const de_AttributeMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AvailabilityZoneDetail
 */
const de_AvailabilityZoneDetail = (output: any, context: __SerdeContext): AvailabilityZoneDetail => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1Edge
 */
const de_Edge = (output: any, context: __SerdeContext): Edge => {
  return {
    Aliases: output.Aliases != null ? de_AliasList(output.Aliases, context) : undefined,
    EdgeType: __expectString(output.EdgeType),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ReceivedEventAgeHistogram:
      output.ReceivedEventAgeHistogram != null ? de_Histogram(output.ReceivedEventAgeHistogram, context) : undefined,
    ReferenceId: __expectInt32(output.ReferenceId),
    ResponseTimeHistogram:
      output.ResponseTimeHistogram != null ? de_Histogram(output.ResponseTimeHistogram, context) : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    SummaryStatistics:
      output.SummaryStatistics != null ? de_EdgeStatistics(output.SummaryStatistics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EdgeList
 */
const de_EdgeList = (output: any, context: __SerdeContext): Edge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Edge(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EdgeStatistics
 */
const de_EdgeStatistics = (output: any, context: __SerdeContext): EdgeStatistics => {
  return {
    ErrorStatistics: output.ErrorStatistics != null ? de_ErrorStatistics(output.ErrorStatistics, context) : undefined,
    FaultStatistics: output.FaultStatistics != null ? de_FaultStatistics(output.FaultStatistics, context) : undefined,
    OkCount: __expectLong(output.OkCount),
    TotalCount: __expectLong(output.TotalCount),
    TotalResponseTime: __limitedParseDouble(output.TotalResponseTime),
  } as any;
};

/**
 * deserializeAws_restJson1EncryptionConfig
 */
const de_EncryptionConfig = (output: any, context: __SerdeContext): EncryptionConfig => {
  return {
    KeyId: __expectString(output.KeyId),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ErrorRootCause
 */
const de_ErrorRootCause = (output: any, context: __SerdeContext): ErrorRootCause => {
  return {
    ClientImpacting: __expectBoolean(output.ClientImpacting),
    Services: output.Services != null ? de_ErrorRootCauseServices(output.Services, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ErrorRootCauseEntity
 */
const de_ErrorRootCauseEntity = (output: any, context: __SerdeContext): ErrorRootCauseEntity => {
  return {
    Exceptions: output.Exceptions != null ? de_RootCauseExceptions(output.Exceptions, context) : undefined,
    Name: __expectString(output.Name),
    Remote: __expectBoolean(output.Remote),
  } as any;
};

/**
 * deserializeAws_restJson1ErrorRootCauseEntityPath
 */
const de_ErrorRootCauseEntityPath = (output: any, context: __SerdeContext): ErrorRootCauseEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ErrorRootCauseEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ErrorRootCauses
 */
const de_ErrorRootCauses = (output: any, context: __SerdeContext): ErrorRootCause[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ErrorRootCause(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ErrorRootCauseService
 */
const de_ErrorRootCauseService = (output: any, context: __SerdeContext): ErrorRootCauseService => {
  return {
    AccountId: __expectString(output.AccountId),
    EntityPath: output.EntityPath != null ? de_ErrorRootCauseEntityPath(output.EntityPath, context) : undefined,
    Inferred: __expectBoolean(output.Inferred),
    Name: __expectString(output.Name),
    Names: output.Names != null ? de_ServiceNames(output.Names, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ErrorRootCauseServices
 */
const de_ErrorRootCauseServices = (output: any, context: __SerdeContext): ErrorRootCauseService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ErrorRootCauseService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ErrorStatistics
 */
const de_ErrorStatistics = (output: any, context: __SerdeContext): ErrorStatistics => {
  return {
    OtherCount: __expectLong(output.OtherCount),
    ThrottleCount: __expectLong(output.ThrottleCount),
    TotalCount: __expectLong(output.TotalCount),
  } as any;
};

/**
 * deserializeAws_restJson1FaultRootCause
 */
const de_FaultRootCause = (output: any, context: __SerdeContext): FaultRootCause => {
  return {
    ClientImpacting: __expectBoolean(output.ClientImpacting),
    Services: output.Services != null ? de_FaultRootCauseServices(output.Services, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FaultRootCauseEntity
 */
const de_FaultRootCauseEntity = (output: any, context: __SerdeContext): FaultRootCauseEntity => {
  return {
    Exceptions: output.Exceptions != null ? de_RootCauseExceptions(output.Exceptions, context) : undefined,
    Name: __expectString(output.Name),
    Remote: __expectBoolean(output.Remote),
  } as any;
};

/**
 * deserializeAws_restJson1FaultRootCauseEntityPath
 */
const de_FaultRootCauseEntityPath = (output: any, context: __SerdeContext): FaultRootCauseEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FaultRootCauseEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FaultRootCauses
 */
const de_FaultRootCauses = (output: any, context: __SerdeContext): FaultRootCause[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FaultRootCause(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FaultRootCauseService
 */
const de_FaultRootCauseService = (output: any, context: __SerdeContext): FaultRootCauseService => {
  return {
    AccountId: __expectString(output.AccountId),
    EntityPath: output.EntityPath != null ? de_FaultRootCauseEntityPath(output.EntityPath, context) : undefined,
    Inferred: __expectBoolean(output.Inferred),
    Name: __expectString(output.Name),
    Names: output.Names != null ? de_ServiceNames(output.Names, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1FaultRootCauseServices
 */
const de_FaultRootCauseServices = (output: any, context: __SerdeContext): FaultRootCauseService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FaultRootCauseService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FaultStatistics
 */
const de_FaultStatistics = (output: any, context: __SerdeContext): FaultStatistics => {
  return {
    OtherCount: __expectLong(output.OtherCount),
    TotalCount: __expectLong(output.TotalCount),
  } as any;
};

/**
 * deserializeAws_restJson1ForecastStatistics
 */
const de_ForecastStatistics = (output: any, context: __SerdeContext): ForecastStatistics => {
  return {
    FaultCountHigh: __expectLong(output.FaultCountHigh),
    FaultCountLow: __expectLong(output.FaultCountLow),
  } as any;
};

/**
 * deserializeAws_restJson1Group
 */
const de_Group = (output: any, context: __SerdeContext): Group => {
  return {
    FilterExpression: __expectString(output.FilterExpression),
    GroupARN: __expectString(output.GroupARN),
    GroupName: __expectString(output.GroupName),
    InsightsConfiguration:
      output.InsightsConfiguration != null
        ? de_InsightsConfiguration(output.InsightsConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GroupSummary
 */
const de_GroupSummary = (output: any, context: __SerdeContext): GroupSummary => {
  return {
    FilterExpression: __expectString(output.FilterExpression),
    GroupARN: __expectString(output.GroupARN),
    GroupName: __expectString(output.GroupName),
    InsightsConfiguration:
      output.InsightsConfiguration != null
        ? de_InsightsConfiguration(output.InsightsConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GroupSummaryList
 */
const de_GroupSummaryList = (output: any, context: __SerdeContext): GroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Histogram
 */
const de_Histogram = (output: any, context: __SerdeContext): HistogramEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HistogramEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HistogramEntry
 */
const de_HistogramEntry = (output: any, context: __SerdeContext): HistogramEntry => {
  return {
    Count: __expectInt32(output.Count),
    Value: __limitedParseDouble(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1Http
 */
const de_Http = (output: any, context: __SerdeContext): Http => {
  return {
    ClientIp: __expectString(output.ClientIp),
    HttpMethod: __expectString(output.HttpMethod),
    HttpStatus: __expectInt32(output.HttpStatus),
    HttpURL: __expectString(output.HttpURL),
    UserAgent: __expectString(output.UserAgent),
  } as any;
};

/**
 * deserializeAws_restJson1Insight
 */
const de_Insight = (output: any, context: __SerdeContext): Insight => {
  return {
    Categories: output.Categories != null ? de_InsightCategoryList(output.Categories, context) : undefined,
    ClientRequestImpactStatistics:
      output.ClientRequestImpactStatistics != null
        ? de_RequestImpactStatistics(output.ClientRequestImpactStatistics, context)
        : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    GroupARN: __expectString(output.GroupARN),
    GroupName: __expectString(output.GroupName),
    InsightId: __expectString(output.InsightId),
    RootCauseServiceId:
      output.RootCauseServiceId != null ? de_ServiceId(output.RootCauseServiceId, context) : undefined,
    RootCauseServiceRequestImpactStatistics:
      output.RootCauseServiceRequestImpactStatistics != null
        ? de_RequestImpactStatistics(output.RootCauseServiceRequestImpactStatistics, context)
        : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
    Summary: __expectString(output.Summary),
    TopAnomalousServices:
      output.TopAnomalousServices != null ? de_AnomalousServiceList(output.TopAnomalousServices, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InsightCategoryList
 */
const de_InsightCategoryList = (output: any, context: __SerdeContext): (InsightCategory | string)[] => {
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
 * deserializeAws_restJson1InsightEvent
 */
const de_InsightEvent = (output: any, context: __SerdeContext): InsightEvent => {
  return {
    ClientRequestImpactStatistics:
      output.ClientRequestImpactStatistics != null
        ? de_RequestImpactStatistics(output.ClientRequestImpactStatistics, context)
        : undefined,
    EventTime:
      output.EventTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventTime))) : undefined,
    RootCauseServiceRequestImpactStatistics:
      output.RootCauseServiceRequestImpactStatistics != null
        ? de_RequestImpactStatistics(output.RootCauseServiceRequestImpactStatistics, context)
        : undefined,
    Summary: __expectString(output.Summary),
    TopAnomalousServices:
      output.TopAnomalousServices != null ? de_AnomalousServiceList(output.TopAnomalousServices, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InsightEventList
 */
const de_InsightEventList = (output: any, context: __SerdeContext): InsightEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InsightEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InsightImpactGraphEdge
 */
const de_InsightImpactGraphEdge = (output: any, context: __SerdeContext): InsightImpactGraphEdge => {
  return {
    ReferenceId: __expectInt32(output.ReferenceId),
  } as any;
};

/**
 * deserializeAws_restJson1InsightImpactGraphEdgeList
 */
const de_InsightImpactGraphEdgeList = (output: any, context: __SerdeContext): InsightImpactGraphEdge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InsightImpactGraphEdge(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InsightImpactGraphService
 */
const de_InsightImpactGraphService = (output: any, context: __SerdeContext): InsightImpactGraphService => {
  return {
    AccountId: __expectString(output.AccountId),
    Edges: output.Edges != null ? de_InsightImpactGraphEdgeList(output.Edges, context) : undefined,
    Name: __expectString(output.Name),
    Names: output.Names != null ? de_ServiceNames(output.Names, context) : undefined,
    ReferenceId: __expectInt32(output.ReferenceId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1InsightImpactGraphServiceList
 */
const de_InsightImpactGraphServiceList = (output: any, context: __SerdeContext): InsightImpactGraphService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InsightImpactGraphService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InsightsConfiguration
 */
const de_InsightsConfiguration = (output: any, context: __SerdeContext): InsightsConfiguration => {
  return {
    InsightsEnabled: __expectBoolean(output.InsightsEnabled),
    NotificationsEnabled: __expectBoolean(output.NotificationsEnabled),
  } as any;
};

/**
 * deserializeAws_restJson1InsightSummary
 */
const de_InsightSummary = (output: any, context: __SerdeContext): InsightSummary => {
  return {
    Categories: output.Categories != null ? de_InsightCategoryList(output.Categories, context) : undefined,
    ClientRequestImpactStatistics:
      output.ClientRequestImpactStatistics != null
        ? de_RequestImpactStatistics(output.ClientRequestImpactStatistics, context)
        : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    GroupARN: __expectString(output.GroupARN),
    GroupName: __expectString(output.GroupName),
    InsightId: __expectString(output.InsightId),
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdateTime)))
        : undefined,
    RootCauseServiceId:
      output.RootCauseServiceId != null ? de_ServiceId(output.RootCauseServiceId, context) : undefined,
    RootCauseServiceRequestImpactStatistics:
      output.RootCauseServiceRequestImpactStatistics != null
        ? de_RequestImpactStatistics(output.RootCauseServiceRequestImpactStatistics, context)
        : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
    Summary: __expectString(output.Summary),
    TopAnomalousServices:
      output.TopAnomalousServices != null ? de_AnomalousServiceList(output.TopAnomalousServices, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InsightSummaryList
 */
const de_InsightSummaryList = (output: any, context: __SerdeContext): InsightSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InsightSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InstanceIdDetail
 */
const de_InstanceIdDetail = (output: any, context: __SerdeContext): InstanceIdDetail => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_restJson1RequestImpactStatistics
 */
const de_RequestImpactStatistics = (output: any, context: __SerdeContext): RequestImpactStatistics => {
  return {
    FaultCount: __expectLong(output.FaultCount),
    OkCount: __expectLong(output.OkCount),
    TotalCount: __expectLong(output.TotalCount),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceARNDetail
 */
const de_ResourceARNDetail = (output: any, context: __SerdeContext): ResourceARNDetail => {
  return {
    ARN: __expectString(output.ARN),
  } as any;
};

/**
 * deserializeAws_restJson1ResourcePolicy
 */
const de_ResourcePolicy = (output: any, context: __SerdeContext): ResourcePolicy => {
  return {
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    PolicyDocument: __expectString(output.PolicyDocument),
    PolicyName: __expectString(output.PolicyName),
    PolicyRevisionId: __expectString(output.PolicyRevisionId),
  } as any;
};

/**
 * deserializeAws_restJson1ResourcePolicyList
 */
const de_ResourcePolicyList = (output: any, context: __SerdeContext): ResourcePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourcePolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResponseTimeRootCause
 */
const de_ResponseTimeRootCause = (output: any, context: __SerdeContext): ResponseTimeRootCause => {
  return {
    ClientImpacting: __expectBoolean(output.ClientImpacting),
    Services: output.Services != null ? de_ResponseTimeRootCauseServices(output.Services, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResponseTimeRootCauseEntity
 */
const de_ResponseTimeRootCauseEntity = (output: any, context: __SerdeContext): ResponseTimeRootCauseEntity => {
  return {
    Coverage: __limitedParseDouble(output.Coverage),
    Name: __expectString(output.Name),
    Remote: __expectBoolean(output.Remote),
  } as any;
};

/**
 * deserializeAws_restJson1ResponseTimeRootCauseEntityPath
 */
const de_ResponseTimeRootCauseEntityPath = (output: any, context: __SerdeContext): ResponseTimeRootCauseEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResponseTimeRootCauseEntity(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResponseTimeRootCauses
 */
const de_ResponseTimeRootCauses = (output: any, context: __SerdeContext): ResponseTimeRootCause[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResponseTimeRootCause(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResponseTimeRootCauseService
 */
const de_ResponseTimeRootCauseService = (output: any, context: __SerdeContext): ResponseTimeRootCauseService => {
  return {
    AccountId: __expectString(output.AccountId),
    EntityPath: output.EntityPath != null ? de_ResponseTimeRootCauseEntityPath(output.EntityPath, context) : undefined,
    Inferred: __expectBoolean(output.Inferred),
    Name: __expectString(output.Name),
    Names: output.Names != null ? de_ServiceNames(output.Names, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ResponseTimeRootCauseServices
 */
const de_ResponseTimeRootCauseServices = (output: any, context: __SerdeContext): ResponseTimeRootCauseService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResponseTimeRootCauseService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RootCauseException
 */
const de_RootCauseException = (output: any, context: __SerdeContext): RootCauseException => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1RootCauseExceptions
 */
const de_RootCauseExceptions = (output: any, context: __SerdeContext): RootCauseException[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RootCauseException(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SamplingRule
 */
const de_SamplingRule = (output: any, context: __SerdeContext): SamplingRule => {
  return {
    Attributes: output.Attributes != null ? de_AttributeMap(output.Attributes, context) : undefined,
    FixedRate: __limitedParseDouble(output.FixedRate),
    HTTPMethod: __expectString(output.HTTPMethod),
    Host: __expectString(output.Host),
    Priority: __expectInt32(output.Priority),
    ReservoirSize: __expectInt32(output.ReservoirSize),
    ResourceARN: __expectString(output.ResourceARN),
    RuleARN: __expectString(output.RuleARN),
    RuleName: __expectString(output.RuleName),
    ServiceName: __expectString(output.ServiceName),
    ServiceType: __expectString(output.ServiceType),
    URLPath: __expectString(output.URLPath),
    Version: __expectInt32(output.Version),
  } as any;
};

/**
 * deserializeAws_restJson1SamplingRuleRecord
 */
const de_SamplingRuleRecord = (output: any, context: __SerdeContext): SamplingRuleRecord => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    ModifiedAt:
      output.ModifiedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ModifiedAt))) : undefined,
    SamplingRule: output.SamplingRule != null ? de_SamplingRule(output.SamplingRule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SamplingRuleRecordList
 */
const de_SamplingRuleRecordList = (output: any, context: __SerdeContext): SamplingRuleRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SamplingRuleRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SamplingStatisticSummary
 */
const de_SamplingStatisticSummary = (output: any, context: __SerdeContext): SamplingStatisticSummary => {
  return {
    BorrowCount: __expectInt32(output.BorrowCount),
    RequestCount: __expectInt32(output.RequestCount),
    RuleName: __expectString(output.RuleName),
    SampledCount: __expectInt32(output.SampledCount),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SamplingStatisticSummaryList
 */
const de_SamplingStatisticSummaryList = (output: any, context: __SerdeContext): SamplingStatisticSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SamplingStatisticSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SamplingTargetDocument
 */
const de_SamplingTargetDocument = (output: any, context: __SerdeContext): SamplingTargetDocument => {
  return {
    FixedRate: __limitedParseDouble(output.FixedRate),
    Interval: __expectInt32(output.Interval),
    ReservoirQuota: __expectInt32(output.ReservoirQuota),
    ReservoirQuotaTTL:
      output.ReservoirQuotaTTL != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ReservoirQuotaTTL)))
        : undefined,
    RuleName: __expectString(output.RuleName),
  } as any;
};

/**
 * deserializeAws_restJson1SamplingTargetDocumentList
 */
const de_SamplingTargetDocumentList = (output: any, context: __SerdeContext): SamplingTargetDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SamplingTargetDocument(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Segment
 */
const de_Segment = (output: any, context: __SerdeContext): Segment => {
  return {
    Document: __expectString(output.Document),
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_restJson1SegmentList
 */
const de_SegmentList = (output: any, context: __SerdeContext): Segment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Segment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Service
 */
const de_Service = (output: any, context: __SerdeContext): Service => {
  return {
    AccountId: __expectString(output.AccountId),
    DurationHistogram: output.DurationHistogram != null ? de_Histogram(output.DurationHistogram, context) : undefined,
    Edges: output.Edges != null ? de_EdgeList(output.Edges, context) : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    Name: __expectString(output.Name),
    Names: output.Names != null ? de_ServiceNames(output.Names, context) : undefined,
    ReferenceId: __expectInt32(output.ReferenceId),
    ResponseTimeHistogram:
      output.ResponseTimeHistogram != null ? de_Histogram(output.ResponseTimeHistogram, context) : undefined,
    Root: __expectBoolean(output.Root),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
    SummaryStatistics:
      output.SummaryStatistics != null ? de_ServiceStatistics(output.SummaryStatistics, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceId
 */
const de_ServiceId = (output: any, context: __SerdeContext): ServiceId => {
  return {
    AccountId: __expectString(output.AccountId),
    Name: __expectString(output.Name),
    Names: output.Names != null ? de_ServiceNames(output.Names, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceIds
 */
const de_ServiceIds = (output: any, context: __SerdeContext): ServiceId[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceId(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServiceList
 */
const de_ServiceList = (output: any, context: __SerdeContext): Service[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Service(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ServiceNames
 */
const de_ServiceNames = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ServiceStatistics
 */
const de_ServiceStatistics = (output: any, context: __SerdeContext): ServiceStatistics => {
  return {
    ErrorStatistics: output.ErrorStatistics != null ? de_ErrorStatistics(output.ErrorStatistics, context) : undefined,
    FaultStatistics: output.FaultStatistics != null ? de_FaultStatistics(output.FaultStatistics, context) : undefined,
    OkCount: __expectLong(output.OkCount),
    TotalCount: __expectLong(output.TotalCount),
    TotalResponseTime: __limitedParseDouble(output.TotalResponseTime),
  } as any;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TimeSeriesServiceStatistics
 */
const de_TimeSeriesServiceStatistics = (output: any, context: __SerdeContext): TimeSeriesServiceStatistics => {
  return {
    EdgeSummaryStatistics:
      output.EdgeSummaryStatistics != null ? de_EdgeStatistics(output.EdgeSummaryStatistics, context) : undefined,
    ResponseTimeHistogram:
      output.ResponseTimeHistogram != null ? de_Histogram(output.ResponseTimeHistogram, context) : undefined,
    ServiceForecastStatistics:
      output.ServiceForecastStatistics != null
        ? de_ForecastStatistics(output.ServiceForecastStatistics, context)
        : undefined,
    ServiceSummaryStatistics:
      output.ServiceSummaryStatistics != null
        ? de_ServiceStatistics(output.ServiceSummaryStatistics, context)
        : undefined,
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TimeSeriesServiceStatisticsList
 */
const de_TimeSeriesServiceStatisticsList = (output: any, context: __SerdeContext): TimeSeriesServiceStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TimeSeriesServiceStatistics(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Trace
 */
const de_Trace = (output: any, context: __SerdeContext): Trace => {
  return {
    Duration: __limitedParseDouble(output.Duration),
    Id: __expectString(output.Id),
    LimitExceeded: __expectBoolean(output.LimitExceeded),
    Segments: output.Segments != null ? de_SegmentList(output.Segments, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TraceAvailabilityZones
 */
const de_TraceAvailabilityZones = (output: any, context: __SerdeContext): AvailabilityZoneDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AvailabilityZoneDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TraceInstanceIds
 */
const de_TraceInstanceIds = (output: any, context: __SerdeContext): InstanceIdDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceIdDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TraceList
 */
const de_TraceList = (output: any, context: __SerdeContext): Trace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Trace(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TraceResourceARNs
 */
const de_TraceResourceARNs = (output: any, context: __SerdeContext): ResourceARNDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceARNDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TraceSummary
 */
const de_TraceSummary = (output: any, context: __SerdeContext): TraceSummary => {
  return {
    Annotations: output.Annotations != null ? de_Annotations(output.Annotations, context) : undefined,
    AvailabilityZones:
      output.AvailabilityZones != null ? de_TraceAvailabilityZones(output.AvailabilityZones, context) : undefined,
    Duration: __limitedParseDouble(output.Duration),
    EntryPoint: output.EntryPoint != null ? de_ServiceId(output.EntryPoint, context) : undefined,
    ErrorRootCauses: output.ErrorRootCauses != null ? de_ErrorRootCauses(output.ErrorRootCauses, context) : undefined,
    FaultRootCauses: output.FaultRootCauses != null ? de_FaultRootCauses(output.FaultRootCauses, context) : undefined,
    HasError: __expectBoolean(output.HasError),
    HasFault: __expectBoolean(output.HasFault),
    HasThrottle: __expectBoolean(output.HasThrottle),
    Http: output.Http != null ? de_Http(output.Http, context) : undefined,
    Id: __expectString(output.Id),
    InstanceIds: output.InstanceIds != null ? de_TraceInstanceIds(output.InstanceIds, context) : undefined,
    IsPartial: __expectBoolean(output.IsPartial),
    MatchedEventTime:
      output.MatchedEventTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.MatchedEventTime)))
        : undefined,
    ResourceARNs: output.ResourceARNs != null ? de_TraceResourceARNs(output.ResourceARNs, context) : undefined,
    ResponseTime: __limitedParseDouble(output.ResponseTime),
    ResponseTimeRootCauses:
      output.ResponseTimeRootCauses != null
        ? de_ResponseTimeRootCauses(output.ResponseTimeRootCauses, context)
        : undefined,
    Revision: __expectInt32(output.Revision),
    ServiceIds: output.ServiceIds != null ? de_ServiceIds(output.ServiceIds, context) : undefined,
    Users: output.Users != null ? de_TraceUsers(output.Users, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TraceSummaryList
 */
const de_TraceSummaryList = (output: any, context: __SerdeContext): TraceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TraceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TraceUser
 */
const de_TraceUser = (output: any, context: __SerdeContext): TraceUser => {
  return {
    ServiceIds: output.ServiceIds != null ? de_ServiceIds(output.ServiceIds, context) : undefined,
    UserName: __expectString(output.UserName),
  } as any;
};

/**
 * deserializeAws_restJson1TraceUsers
 */
const de_TraceUsers = (output: any, context: __SerdeContext): TraceUser[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TraceUser(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UnprocessedStatistics
 */
const de_UnprocessedStatistics = (output: any, context: __SerdeContext): UnprocessedStatistics => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
    RuleName: __expectString(output.RuleName),
  } as any;
};

/**
 * deserializeAws_restJson1UnprocessedStatisticsList
 */
const de_UnprocessedStatisticsList = (output: any, context: __SerdeContext): UnprocessedStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UnprocessedStatistics(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UnprocessedTraceIdList
 */
const de_UnprocessedTraceIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1UnprocessedTraceSegment
 */
const de_UnprocessedTraceSegment = (output: any, context: __SerdeContext): UnprocessedTraceSegment => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Id: __expectString(output.Id),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_restJson1UnprocessedTraceSegmentList
 */
const de_UnprocessedTraceSegmentList = (output: any, context: __SerdeContext): UnprocessedTraceSegment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UnprocessedTraceSegment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValuesWithServiceIds
 */
const de_ValuesWithServiceIds = (output: any, context: __SerdeContext): ValueWithServiceIds[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValueWithServiceIds(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValueWithServiceIds
 */
const de_ValueWithServiceIds = (output: any, context: __SerdeContext): ValueWithServiceIds => {
  return {
    AnnotationValue:
      output.AnnotationValue != null ? de_AnnotationValue(__expectUnion(output.AnnotationValue), context) : undefined,
    ServiceIds: output.ServiceIds != null ? de_ServiceIds(output.ServiceIds, context) : undefined,
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
