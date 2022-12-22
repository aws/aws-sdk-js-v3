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

export const serializeAws_restJson1BatchGetTracesCommand = async (
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
    ...(input.TraceIds != null && { TraceIds: serializeAws_restJson1TraceIdList(input.TraceIds, context) }),
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

export const serializeAws_restJson1CreateGroupCommand = async (
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
      InsightsConfiguration: serializeAws_restJson1InsightsConfiguration(input.InsightsConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateSamplingRuleCommand = async (
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
    ...(input.SamplingRule != null && {
      SamplingRule: serializeAws_restJson1SamplingRule(input.SamplingRule, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteGroupCommand = async (
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

export const serializeAws_restJson1DeleteResourcePolicyCommand = async (
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

export const serializeAws_restJson1DeleteSamplingRuleCommand = async (
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

export const serializeAws_restJson1GetEncryptionConfigCommand = async (
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

export const serializeAws_restJson1GetGroupCommand = async (
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

export const serializeAws_restJson1GetGroupsCommand = async (
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

export const serializeAws_restJson1GetInsightCommand = async (
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

export const serializeAws_restJson1GetInsightEventsCommand = async (
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

export const serializeAws_restJson1GetInsightImpactGraphCommand = async (
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

export const serializeAws_restJson1GetInsightSummariesCommand = async (
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
    ...(input.States != null && { States: serializeAws_restJson1InsightStateList(input.States, context) }),
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

export const serializeAws_restJson1GetSamplingRulesCommand = async (
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

export const serializeAws_restJson1GetSamplingStatisticSummariesCommand = async (
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

export const serializeAws_restJson1GetSamplingTargetsCommand = async (
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
      SamplingStatisticsDocuments: serializeAws_restJson1SamplingStatisticsDocumentList(
        input.SamplingStatisticsDocuments,
        context
      ),
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

export const serializeAws_restJson1GetServiceGraphCommand = async (
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

export const serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand = async (
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

export const serializeAws_restJson1GetTraceGraphCommand = async (
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
    ...(input.TraceIds != null && { TraceIds: serializeAws_restJson1TraceIdList(input.TraceIds, context) }),
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

export const serializeAws_restJson1GetTraceSummariesCommand = async (
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
    ...(input.SamplingStrategy != null && {
      SamplingStrategy: serializeAws_restJson1SamplingStrategy(input.SamplingStrategy, context),
    }),
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

export const serializeAws_restJson1ListResourcePoliciesCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1PutEncryptionConfigCommand = async (
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

export const serializeAws_restJson1PutResourcePolicyCommand = async (
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

export const serializeAws_restJson1PutTelemetryRecordsCommand = async (
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
      TelemetryRecords: serializeAws_restJson1TelemetryRecordList(input.TelemetryRecords, context),
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

export const serializeAws_restJson1PutTraceSegmentsCommand = async (
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
      TraceSegmentDocuments: serializeAws_restJson1TraceSegmentDocumentList(input.TraceSegmentDocuments, context),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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
    ...(input.TagKeys != null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) }),
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

export const serializeAws_restJson1UpdateGroupCommand = async (
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
      InsightsConfiguration: serializeAws_restJson1InsightsConfiguration(input.InsightsConfiguration, context),
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

export const serializeAws_restJson1UpdateSamplingRuleCommand = async (
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
      SamplingRuleUpdate: serializeAws_restJson1SamplingRuleUpdate(input.SamplingRuleUpdate, context),
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

export const deserializeAws_restJson1BatchGetTracesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTracesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchGetTracesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Traces != null) {
    contents.Traces = deserializeAws_restJson1TraceList(data.Traces, context);
  }
  if (data.UnprocessedTraceIds != null) {
    contents.UnprocessedTraceIds = deserializeAws_restJson1UnprocessedTraceIdList(data.UnprocessedTraceIds, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchGetTracesCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateGroupCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSamplingRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SamplingRuleRecord != null) {
    contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(data.SamplingRuleRecord, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateSamplingRuleCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "RuleLimitExceededException":
    case "com.amazonaws.xray#RuleLimitExceededException":
      throw await deserializeAws_restJson1RuleLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteGroupCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteResourcePolicyCommandError = async (
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
      throw await deserializeAws_restJson1InvalidPolicyRevisionIdExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSamplingRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SamplingRuleRecord != null) {
    contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(data.SamplingRuleRecord, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteSamplingRuleCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEncryptionConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EncryptionConfig != null) {
    contents.EncryptionConfig = deserializeAws_restJson1EncryptionConfig(data.EncryptionConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1GetEncryptionConfigCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  return contents;
};

const deserializeAws_restJson1GetGroupCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Groups != null) {
    contents.Groups = deserializeAws_restJson1GroupSummaryList(data.Groups, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetGroupsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInsightCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Insight != null) {
    contents.Insight = deserializeAws_restJson1Insight(data.Insight, context);
  }
  return contents;
};

const deserializeAws_restJson1GetInsightCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetInsightEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInsightEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InsightEvents != null) {
    contents.InsightEvents = deserializeAws_restJson1InsightEventList(data.InsightEvents, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetInsightEventsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetInsightImpactGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightImpactGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInsightImpactGraphCommandError(output, context);
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
    contents.Services = deserializeAws_restJson1InsightImpactGraphServiceList(data.Services, context);
  }
  if (data.StartTime != null) {
    contents.StartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.StartTime)));
  }
  return contents;
};

const deserializeAws_restJson1GetInsightImpactGraphCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetInsightSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInsightSummariesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InsightSummaries != null) {
    contents.InsightSummaries = deserializeAws_restJson1InsightSummaryList(data.InsightSummaries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetInsightSummariesCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSamplingRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSamplingRulesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SamplingRuleRecords != null) {
    contents.SamplingRuleRecords = deserializeAws_restJson1SamplingRuleRecordList(data.SamplingRuleRecords, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSamplingRulesCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSamplingStatisticSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingStatisticSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSamplingStatisticSummariesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.SamplingStatisticSummaries != null) {
    contents.SamplingStatisticSummaries = deserializeAws_restJson1SamplingStatisticSummaryList(
      data.SamplingStatisticSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetSamplingStatisticSummariesCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSamplingTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSamplingTargetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LastRuleModification != null) {
    contents.LastRuleModification = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastRuleModification)));
  }
  if (data.SamplingTargetDocuments != null) {
    contents.SamplingTargetDocuments = deserializeAws_restJson1SamplingTargetDocumentList(
      data.SamplingTargetDocuments,
      context
    );
  }
  if (data.UnprocessedStatistics != null) {
    contents.UnprocessedStatistics = deserializeAws_restJson1UnprocessedStatisticsList(
      data.UnprocessedStatistics,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetSamplingTargetsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetServiceGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetServiceGraphCommandError(output, context);
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
    contents.Services = deserializeAws_restJson1ServiceList(data.Services, context);
  }
  if (data.StartTime != null) {
    contents.StartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.StartTime)));
  }
  return contents;
};

const deserializeAws_restJson1GetServiceGraphCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimeSeriesServiceStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommandError(output, context);
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
    contents.TimeSeriesServiceStatistics = deserializeAws_restJson1TimeSeriesServiceStatisticsList(
      data.TimeSeriesServiceStatistics,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTraceGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTraceGraphCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Services != null) {
    contents.Services = deserializeAws_restJson1ServiceList(data.Services, context);
  }
  return contents;
};

const deserializeAws_restJson1GetTraceGraphCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTraceSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTraceSummariesCommandError(output, context);
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
    contents.TraceSummaries = deserializeAws_restJson1TraceSummaryList(data.TraceSummaries, context);
  }
  if (data.TracesProcessedCount != null) {
    contents.TracesProcessedCount = __expectLong(data.TracesProcessedCount);
  }
  return contents;
};

const deserializeAws_restJson1GetTraceSummariesCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResourcePoliciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ResourcePolicies != null) {
    contents.ResourcePolicies = deserializeAws_restJson1ResourcePolicyList(data.ResourcePolicies, context);
  }
  return contents;
};

const deserializeAws_restJson1ListResourcePoliciesCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.xray#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEncryptionConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EncryptionConfig != null) {
    contents.EncryptionConfig = deserializeAws_restJson1EncryptionConfig(data.EncryptionConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1PutEncryptionConfigCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ResourcePolicy != null) {
    contents.ResourcePolicy = deserializeAws_restJson1ResourcePolicy(data.ResourcePolicy, context);
  }
  return contents;
};

const deserializeAws_restJson1PutResourcePolicyCommandError = async (
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
      throw await deserializeAws_restJson1InvalidPolicyRevisionIdExceptionResponse(parsedOutput, context);
    case "LockoutPreventionException":
    case "com.amazonaws.xray#LockoutPreventionException":
      throw await deserializeAws_restJson1LockoutPreventionExceptionResponse(parsedOutput, context);
    case "MalformedPolicyDocumentException":
    case "com.amazonaws.xray#MalformedPolicyDocumentException":
      throw await deserializeAws_restJson1MalformedPolicyDocumentExceptionResponse(parsedOutput, context);
    case "PolicyCountLimitExceededException":
    case "com.amazonaws.xray#PolicyCountLimitExceededException":
      throw await deserializeAws_restJson1PolicyCountLimitExceededExceptionResponse(parsedOutput, context);
    case "PolicySizeLimitExceededException":
    case "com.amazonaws.xray#PolicySizeLimitExceededException":
      throw await deserializeAws_restJson1PolicySizeLimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutTelemetryRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTelemetryRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutTelemetryRecordsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutTelemetryRecordsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutTraceSegmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTraceSegmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutTraceSegmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UnprocessedTraceSegments != null) {
    contents.UnprocessedTraceSegments = deserializeAws_restJson1UnprocessedTraceSegmentList(
      data.UnprocessedTraceSegments,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1PutTraceSegmentsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.xray#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.xray#TooManyTagsException":
      throw await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.xray#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Group != null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateGroupCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSamplingRuleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.SamplingRuleRecord != null) {
    contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(data.SamplingRuleRecord, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateSamplingRuleCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1InvalidPolicyRevisionIdExceptionResponse = async (
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

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
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

const deserializeAws_restJson1LockoutPreventionExceptionResponse = async (
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

const deserializeAws_restJson1MalformedPolicyDocumentExceptionResponse = async (
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

const deserializeAws_restJson1PolicyCountLimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1PolicySizeLimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1RuleLimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledException> => {
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

const deserializeAws_restJson1TooManyTagsExceptionResponse = async (
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

const serializeAws_restJson1AttributeMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1BackendConnectionErrors = (
  input: BackendConnectionErrors,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionRefusedCount != null && { ConnectionRefusedCount: input.ConnectionRefusedCount }),
    ...(input.HTTPCode4XXCount != null && { HTTPCode4XXCount: input.HTTPCode4XXCount }),
    ...(input.HTTPCode5XXCount != null && { HTTPCode5XXCount: input.HTTPCode5XXCount }),
    ...(input.OtherCount != null && { OtherCount: input.OtherCount }),
    ...(input.TimeoutCount != null && { TimeoutCount: input.TimeoutCount }),
    ...(input.UnknownHostCount != null && { UnknownHostCount: input.UnknownHostCount }),
  };
};

const serializeAws_restJson1InsightsConfiguration = (input: InsightsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InsightsEnabled != null && { InsightsEnabled: input.InsightsEnabled }),
    ...(input.NotificationsEnabled != null && { NotificationsEnabled: input.NotificationsEnabled }),
  };
};

const serializeAws_restJson1InsightStateList = (input: (InsightState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SamplingRule = (input: SamplingRule, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: serializeAws_restJson1AttributeMap(input.Attributes, context) }),
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

const serializeAws_restJson1SamplingRuleUpdate = (input: SamplingRuleUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: serializeAws_restJson1AttributeMap(input.Attributes, context) }),
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

const serializeAws_restJson1SamplingStatisticsDocument = (
  input: SamplingStatisticsDocument,
  context: __SerdeContext
): any => {
  return {
    ...(input.BorrowCount != null && { BorrowCount: input.BorrowCount }),
    ...(input.ClientID != null && { ClientID: input.ClientID }),
    ...(input.RequestCount != null && { RequestCount: input.RequestCount }),
    ...(input.RuleName != null && { RuleName: input.RuleName }),
    ...(input.SampledCount != null && { SampledCount: input.SampledCount }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
  };
};

const serializeAws_restJson1SamplingStatisticsDocumentList = (
  input: SamplingStatisticsDocument[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SamplingStatisticsDocument(entry, context);
    });
};

const serializeAws_restJson1SamplingStrategy = (input: SamplingStrategy, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: __serializeFloat(input.Value) }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TelemetryRecord = (input: TelemetryRecord, context: __SerdeContext): any => {
  return {
    ...(input.BackendConnectionErrors != null && {
      BackendConnectionErrors: serializeAws_restJson1BackendConnectionErrors(input.BackendConnectionErrors, context),
    }),
    ...(input.SegmentsReceivedCount != null && { SegmentsReceivedCount: input.SegmentsReceivedCount }),
    ...(input.SegmentsRejectedCount != null && { SegmentsRejectedCount: input.SegmentsRejectedCount }),
    ...(input.SegmentsSentCount != null && { SegmentsSentCount: input.SegmentsSentCount }),
    ...(input.SegmentsSpilloverCount != null && { SegmentsSpilloverCount: input.SegmentsSpilloverCount }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
  };
};

const serializeAws_restJson1TelemetryRecordList = (input: TelemetryRecord[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TelemetryRecord(entry, context);
    });
};

const serializeAws_restJson1TraceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TraceSegmentDocumentList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_restJson1Alias = (output: any, context: __SerdeContext): Alias => {
  return {
    Name: __expectString(output.Name),
    Names: output.Names != null ? deserializeAws_restJson1AliasNames(output.Names, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AliasList = (output: any, context: __SerdeContext): Alias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Alias(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AliasNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Annotations = (
  output: any,
  context: __SerdeContext
): Record<string, ValueWithServiceIds[]> => {
  return Object.entries(output).reduce((acc: Record<string, ValueWithServiceIds[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1ValuesWithServiceIds(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1AnnotationValue = (output: any, context: __SerdeContext): AnnotationValue => {
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

const deserializeAws_restJson1AnomalousService = (output: any, context: __SerdeContext): AnomalousService => {
  return {
    ServiceId: output.ServiceId != null ? deserializeAws_restJson1ServiceId(output.ServiceId, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AnomalousServiceList = (output: any, context: __SerdeContext): AnomalousService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnomalousService(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AttributeMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1AvailabilityZoneDetail = (
  output: any,
  context: __SerdeContext
): AvailabilityZoneDetail => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1Edge = (output: any, context: __SerdeContext): Edge => {
  return {
    Aliases: output.Aliases != null ? deserializeAws_restJson1AliasList(output.Aliases, context) : undefined,
    EdgeType: __expectString(output.EdgeType),
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    ReceivedEventAgeHistogram:
      output.ReceivedEventAgeHistogram != null
        ? deserializeAws_restJson1Histogram(output.ReceivedEventAgeHistogram, context)
        : undefined,
    ReferenceId: __expectInt32(output.ReferenceId),
    ResponseTimeHistogram:
      output.ResponseTimeHistogram != null
        ? deserializeAws_restJson1Histogram(output.ResponseTimeHistogram, context)
        : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    SummaryStatistics:
      output.SummaryStatistics != null
        ? deserializeAws_restJson1EdgeStatistics(output.SummaryStatistics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EdgeList = (output: any, context: __SerdeContext): Edge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Edge(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EdgeStatistics = (output: any, context: __SerdeContext): EdgeStatistics => {
  return {
    ErrorStatistics:
      output.ErrorStatistics != null
        ? deserializeAws_restJson1ErrorStatistics(output.ErrorStatistics, context)
        : undefined,
    FaultStatistics:
      output.FaultStatistics != null
        ? deserializeAws_restJson1FaultStatistics(output.FaultStatistics, context)
        : undefined,
    OkCount: __expectLong(output.OkCount),
    TotalCount: __expectLong(output.TotalCount),
    TotalResponseTime: __limitedParseDouble(output.TotalResponseTime),
  } as any;
};

const deserializeAws_restJson1EncryptionConfig = (output: any, context: __SerdeContext): EncryptionConfig => {
  return {
    KeyId: __expectString(output.KeyId),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ErrorRootCause = (output: any, context: __SerdeContext): ErrorRootCause => {
  return {
    ClientImpacting: __expectBoolean(output.ClientImpacting),
    Services:
      output.Services != null ? deserializeAws_restJson1ErrorRootCauseServices(output.Services, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ErrorRootCauseEntity = (output: any, context: __SerdeContext): ErrorRootCauseEntity => {
  return {
    Exceptions:
      output.Exceptions != null ? deserializeAws_restJson1RootCauseExceptions(output.Exceptions, context) : undefined,
    Name: __expectString(output.Name),
    Remote: __expectBoolean(output.Remote),
  } as any;
};

const deserializeAws_restJson1ErrorRootCauseEntityPath = (
  output: any,
  context: __SerdeContext
): ErrorRootCauseEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ErrorRootCauseEntity(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ErrorRootCauses = (output: any, context: __SerdeContext): ErrorRootCause[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ErrorRootCause(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ErrorRootCauseService = (output: any, context: __SerdeContext): ErrorRootCauseService => {
  return {
    AccountId: __expectString(output.AccountId),
    EntityPath:
      output.EntityPath != null
        ? deserializeAws_restJson1ErrorRootCauseEntityPath(output.EntityPath, context)
        : undefined,
    Inferred: __expectBoolean(output.Inferred),
    Name: __expectString(output.Name),
    Names: output.Names != null ? deserializeAws_restJson1ServiceNames(output.Names, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ErrorRootCauseServices = (
  output: any,
  context: __SerdeContext
): ErrorRootCauseService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ErrorRootCauseService(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ErrorStatistics = (output: any, context: __SerdeContext): ErrorStatistics => {
  return {
    OtherCount: __expectLong(output.OtherCount),
    ThrottleCount: __expectLong(output.ThrottleCount),
    TotalCount: __expectLong(output.TotalCount),
  } as any;
};

const deserializeAws_restJson1FaultRootCause = (output: any, context: __SerdeContext): FaultRootCause => {
  return {
    ClientImpacting: __expectBoolean(output.ClientImpacting),
    Services:
      output.Services != null ? deserializeAws_restJson1FaultRootCauseServices(output.Services, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FaultRootCauseEntity = (output: any, context: __SerdeContext): FaultRootCauseEntity => {
  return {
    Exceptions:
      output.Exceptions != null ? deserializeAws_restJson1RootCauseExceptions(output.Exceptions, context) : undefined,
    Name: __expectString(output.Name),
    Remote: __expectBoolean(output.Remote),
  } as any;
};

const deserializeAws_restJson1FaultRootCauseEntityPath = (
  output: any,
  context: __SerdeContext
): FaultRootCauseEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FaultRootCauseEntity(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FaultRootCauses = (output: any, context: __SerdeContext): FaultRootCause[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FaultRootCause(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FaultRootCauseService = (output: any, context: __SerdeContext): FaultRootCauseService => {
  return {
    AccountId: __expectString(output.AccountId),
    EntityPath:
      output.EntityPath != null
        ? deserializeAws_restJson1FaultRootCauseEntityPath(output.EntityPath, context)
        : undefined,
    Inferred: __expectBoolean(output.Inferred),
    Name: __expectString(output.Name),
    Names: output.Names != null ? deserializeAws_restJson1ServiceNames(output.Names, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1FaultRootCauseServices = (
  output: any,
  context: __SerdeContext
): FaultRootCauseService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FaultRootCauseService(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FaultStatistics = (output: any, context: __SerdeContext): FaultStatistics => {
  return {
    OtherCount: __expectLong(output.OtherCount),
    TotalCount: __expectLong(output.TotalCount),
  } as any;
};

const deserializeAws_restJson1ForecastStatistics = (output: any, context: __SerdeContext): ForecastStatistics => {
  return {
    FaultCountHigh: __expectLong(output.FaultCountHigh),
    FaultCountLow: __expectLong(output.FaultCountLow),
  } as any;
};

const deserializeAws_restJson1Group = (output: any, context: __SerdeContext): Group => {
  return {
    FilterExpression: __expectString(output.FilterExpression),
    GroupARN: __expectString(output.GroupARN),
    GroupName: __expectString(output.GroupName),
    InsightsConfiguration:
      output.InsightsConfiguration != null
        ? deserializeAws_restJson1InsightsConfiguration(output.InsightsConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GroupSummary = (output: any, context: __SerdeContext): GroupSummary => {
  return {
    FilterExpression: __expectString(output.FilterExpression),
    GroupARN: __expectString(output.GroupARN),
    GroupName: __expectString(output.GroupName),
    InsightsConfiguration:
      output.InsightsConfiguration != null
        ? deserializeAws_restJson1InsightsConfiguration(output.InsightsConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GroupSummaryList = (output: any, context: __SerdeContext): GroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GroupSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Histogram = (output: any, context: __SerdeContext): HistogramEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HistogramEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1HistogramEntry = (output: any, context: __SerdeContext): HistogramEntry => {
  return {
    Count: __expectInt32(output.Count),
    Value: __limitedParseDouble(output.Value),
  } as any;
};

const deserializeAws_restJson1Http = (output: any, context: __SerdeContext): Http => {
  return {
    ClientIp: __expectString(output.ClientIp),
    HttpMethod: __expectString(output.HttpMethod),
    HttpStatus: __expectInt32(output.HttpStatus),
    HttpURL: __expectString(output.HttpURL),
    UserAgent: __expectString(output.UserAgent),
  } as any;
};

const deserializeAws_restJson1Insight = (output: any, context: __SerdeContext): Insight => {
  return {
    Categories:
      output.Categories != null ? deserializeAws_restJson1InsightCategoryList(output.Categories, context) : undefined,
    ClientRequestImpactStatistics:
      output.ClientRequestImpactStatistics != null
        ? deserializeAws_restJson1RequestImpactStatistics(output.ClientRequestImpactStatistics, context)
        : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    GroupARN: __expectString(output.GroupARN),
    GroupName: __expectString(output.GroupName),
    InsightId: __expectString(output.InsightId),
    RootCauseServiceId:
      output.RootCauseServiceId != null
        ? deserializeAws_restJson1ServiceId(output.RootCauseServiceId, context)
        : undefined,
    RootCauseServiceRequestImpactStatistics:
      output.RootCauseServiceRequestImpactStatistics != null
        ? deserializeAws_restJson1RequestImpactStatistics(output.RootCauseServiceRequestImpactStatistics, context)
        : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
    Summary: __expectString(output.Summary),
    TopAnomalousServices:
      output.TopAnomalousServices != null
        ? deserializeAws_restJson1AnomalousServiceList(output.TopAnomalousServices, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsightCategoryList = (
  output: any,
  context: __SerdeContext
): (InsightCategory | string)[] => {
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

const deserializeAws_restJson1InsightEvent = (output: any, context: __SerdeContext): InsightEvent => {
  return {
    ClientRequestImpactStatistics:
      output.ClientRequestImpactStatistics != null
        ? deserializeAws_restJson1RequestImpactStatistics(output.ClientRequestImpactStatistics, context)
        : undefined,
    EventTime:
      output.EventTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EventTime))) : undefined,
    RootCauseServiceRequestImpactStatistics:
      output.RootCauseServiceRequestImpactStatistics != null
        ? deserializeAws_restJson1RequestImpactStatistics(output.RootCauseServiceRequestImpactStatistics, context)
        : undefined,
    Summary: __expectString(output.Summary),
    TopAnomalousServices:
      output.TopAnomalousServices != null
        ? deserializeAws_restJson1AnomalousServiceList(output.TopAnomalousServices, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsightEventList = (output: any, context: __SerdeContext): InsightEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InsightEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InsightImpactGraphEdge = (
  output: any,
  context: __SerdeContext
): InsightImpactGraphEdge => {
  return {
    ReferenceId: __expectInt32(output.ReferenceId),
  } as any;
};

const deserializeAws_restJson1InsightImpactGraphEdgeList = (
  output: any,
  context: __SerdeContext
): InsightImpactGraphEdge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InsightImpactGraphEdge(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InsightImpactGraphService = (
  output: any,
  context: __SerdeContext
): InsightImpactGraphService => {
  return {
    AccountId: __expectString(output.AccountId),
    Edges: output.Edges != null ? deserializeAws_restJson1InsightImpactGraphEdgeList(output.Edges, context) : undefined,
    Name: __expectString(output.Name),
    Names: output.Names != null ? deserializeAws_restJson1ServiceNames(output.Names, context) : undefined,
    ReferenceId: __expectInt32(output.ReferenceId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1InsightImpactGraphServiceList = (
  output: any,
  context: __SerdeContext
): InsightImpactGraphService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InsightImpactGraphService(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InsightsConfiguration = (output: any, context: __SerdeContext): InsightsConfiguration => {
  return {
    InsightsEnabled: __expectBoolean(output.InsightsEnabled),
    NotificationsEnabled: __expectBoolean(output.NotificationsEnabled),
  } as any;
};

const deserializeAws_restJson1InsightSummary = (output: any, context: __SerdeContext): InsightSummary => {
  return {
    Categories:
      output.Categories != null ? deserializeAws_restJson1InsightCategoryList(output.Categories, context) : undefined,
    ClientRequestImpactStatistics:
      output.ClientRequestImpactStatistics != null
        ? deserializeAws_restJson1RequestImpactStatistics(output.ClientRequestImpactStatistics, context)
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
      output.RootCauseServiceId != null
        ? deserializeAws_restJson1ServiceId(output.RootCauseServiceId, context)
        : undefined,
    RootCauseServiceRequestImpactStatistics:
      output.RootCauseServiceRequestImpactStatistics != null
        ? deserializeAws_restJson1RequestImpactStatistics(output.RootCauseServiceRequestImpactStatistics, context)
        : undefined,
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
    Summary: __expectString(output.Summary),
    TopAnomalousServices:
      output.TopAnomalousServices != null
        ? deserializeAws_restJson1AnomalousServiceList(output.TopAnomalousServices, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsightSummaryList = (output: any, context: __SerdeContext): InsightSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InsightSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InstanceIdDetail = (output: any, context: __SerdeContext): InstanceIdDetail => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1RequestImpactStatistics = (
  output: any,
  context: __SerdeContext
): RequestImpactStatistics => {
  return {
    FaultCount: __expectLong(output.FaultCount),
    OkCount: __expectLong(output.OkCount),
    TotalCount: __expectLong(output.TotalCount),
  } as any;
};

const deserializeAws_restJson1ResourceARNDetail = (output: any, context: __SerdeContext): ResourceARNDetail => {
  return {
    ARN: __expectString(output.ARN),
  } as any;
};

const deserializeAws_restJson1ResourcePolicy = (output: any, context: __SerdeContext): ResourcePolicy => {
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

const deserializeAws_restJson1ResourcePolicyList = (output: any, context: __SerdeContext): ResourcePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourcePolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResponseTimeRootCause = (output: any, context: __SerdeContext): ResponseTimeRootCause => {
  return {
    ClientImpacting: __expectBoolean(output.ClientImpacting),
    Services:
      output.Services != null
        ? deserializeAws_restJson1ResponseTimeRootCauseServices(output.Services, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResponseTimeRootCauseEntity = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCauseEntity => {
  return {
    Coverage: __limitedParseDouble(output.Coverage),
    Name: __expectString(output.Name),
    Remote: __expectBoolean(output.Remote),
  } as any;
};

const deserializeAws_restJson1ResponseTimeRootCauseEntityPath = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCauseEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResponseTimeRootCauseEntity(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResponseTimeRootCauses = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCause[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResponseTimeRootCause(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResponseTimeRootCauseService = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCauseService => {
  return {
    AccountId: __expectString(output.AccountId),
    EntityPath:
      output.EntityPath != null
        ? deserializeAws_restJson1ResponseTimeRootCauseEntityPath(output.EntityPath, context)
        : undefined,
    Inferred: __expectBoolean(output.Inferred),
    Name: __expectString(output.Name),
    Names: output.Names != null ? deserializeAws_restJson1ServiceNames(output.Names, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ResponseTimeRootCauseServices = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCauseService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResponseTimeRootCauseService(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RootCauseException = (output: any, context: __SerdeContext): RootCauseException => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1RootCauseExceptions = (output: any, context: __SerdeContext): RootCauseException[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RootCauseException(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SamplingRule = (output: any, context: __SerdeContext): SamplingRule => {
  return {
    Attributes:
      output.Attributes != null ? deserializeAws_restJson1AttributeMap(output.Attributes, context) : undefined,
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

const deserializeAws_restJson1SamplingRuleRecord = (output: any, context: __SerdeContext): SamplingRuleRecord => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    ModifiedAt:
      output.ModifiedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ModifiedAt))) : undefined,
    SamplingRule:
      output.SamplingRule != null ? deserializeAws_restJson1SamplingRule(output.SamplingRule, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SamplingRuleRecordList = (output: any, context: __SerdeContext): SamplingRuleRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SamplingRuleRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SamplingStatisticSummary = (
  output: any,
  context: __SerdeContext
): SamplingStatisticSummary => {
  return {
    BorrowCount: __expectInt32(output.BorrowCount),
    RequestCount: __expectInt32(output.RequestCount),
    RuleName: __expectString(output.RuleName),
    SampledCount: __expectInt32(output.SampledCount),
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
  } as any;
};

const deserializeAws_restJson1SamplingStatisticSummaryList = (
  output: any,
  context: __SerdeContext
): SamplingStatisticSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SamplingStatisticSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SamplingTargetDocument = (
  output: any,
  context: __SerdeContext
): SamplingTargetDocument => {
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

const deserializeAws_restJson1SamplingTargetDocumentList = (
  output: any,
  context: __SerdeContext
): SamplingTargetDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SamplingTargetDocument(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Segment = (output: any, context: __SerdeContext): Segment => {
  return {
    Document: __expectString(output.Document),
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1SegmentList = (output: any, context: __SerdeContext): Segment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Segment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Service = (output: any, context: __SerdeContext): Service => {
  return {
    AccountId: __expectString(output.AccountId),
    DurationHistogram:
      output.DurationHistogram != null
        ? deserializeAws_restJson1Histogram(output.DurationHistogram, context)
        : undefined,
    Edges: output.Edges != null ? deserializeAws_restJson1EdgeList(output.Edges, context) : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    Name: __expectString(output.Name),
    Names: output.Names != null ? deserializeAws_restJson1ServiceNames(output.Names, context) : undefined,
    ReferenceId: __expectInt32(output.ReferenceId),
    ResponseTimeHistogram:
      output.ResponseTimeHistogram != null
        ? deserializeAws_restJson1Histogram(output.ResponseTimeHistogram, context)
        : undefined,
    Root: __expectBoolean(output.Root),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    State: __expectString(output.State),
    SummaryStatistics:
      output.SummaryStatistics != null
        ? deserializeAws_restJson1ServiceStatistics(output.SummaryStatistics, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ServiceId = (output: any, context: __SerdeContext): ServiceId => {
  return {
    AccountId: __expectString(output.AccountId),
    Name: __expectString(output.Name),
    Names: output.Names != null ? deserializeAws_restJson1ServiceNames(output.Names, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ServiceIds = (output: any, context: __SerdeContext): ServiceId[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ServiceId(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ServiceList = (output: any, context: __SerdeContext): Service[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Service(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ServiceNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ServiceStatistics = (output: any, context: __SerdeContext): ServiceStatistics => {
  return {
    ErrorStatistics:
      output.ErrorStatistics != null
        ? deserializeAws_restJson1ErrorStatistics(output.ErrorStatistics, context)
        : undefined,
    FaultStatistics:
      output.FaultStatistics != null
        ? deserializeAws_restJson1FaultStatistics(output.FaultStatistics, context)
        : undefined,
    OkCount: __expectLong(output.OkCount),
    TotalCount: __expectLong(output.TotalCount),
    TotalResponseTime: __limitedParseDouble(output.TotalResponseTime),
  } as any;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TimeSeriesServiceStatistics = (
  output: any,
  context: __SerdeContext
): TimeSeriesServiceStatistics => {
  return {
    EdgeSummaryStatistics:
      output.EdgeSummaryStatistics != null
        ? deserializeAws_restJson1EdgeStatistics(output.EdgeSummaryStatistics, context)
        : undefined,
    ResponseTimeHistogram:
      output.ResponseTimeHistogram != null
        ? deserializeAws_restJson1Histogram(output.ResponseTimeHistogram, context)
        : undefined,
    ServiceForecastStatistics:
      output.ServiceForecastStatistics != null
        ? deserializeAws_restJson1ForecastStatistics(output.ServiceForecastStatistics, context)
        : undefined,
    ServiceSummaryStatistics:
      output.ServiceSummaryStatistics != null
        ? deserializeAws_restJson1ServiceStatistics(output.ServiceSummaryStatistics, context)
        : undefined,
    Timestamp:
      output.Timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Timestamp))) : undefined,
  } as any;
};

const deserializeAws_restJson1TimeSeriesServiceStatisticsList = (
  output: any,
  context: __SerdeContext
): TimeSeriesServiceStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TimeSeriesServiceStatistics(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Trace = (output: any, context: __SerdeContext): Trace => {
  return {
    Duration: __limitedParseDouble(output.Duration),
    Id: __expectString(output.Id),
    LimitExceeded: __expectBoolean(output.LimitExceeded),
    Segments: output.Segments != null ? deserializeAws_restJson1SegmentList(output.Segments, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TraceAvailabilityZones = (
  output: any,
  context: __SerdeContext
): AvailabilityZoneDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AvailabilityZoneDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TraceInstanceIds = (output: any, context: __SerdeContext): InstanceIdDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InstanceIdDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TraceList = (output: any, context: __SerdeContext): Trace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Trace(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TraceResourceARNs = (output: any, context: __SerdeContext): ResourceARNDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceARNDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TraceSummary = (output: any, context: __SerdeContext): TraceSummary => {
  return {
    Annotations:
      output.Annotations != null ? deserializeAws_restJson1Annotations(output.Annotations, context) : undefined,
    AvailabilityZones:
      output.AvailabilityZones != null
        ? deserializeAws_restJson1TraceAvailabilityZones(output.AvailabilityZones, context)
        : undefined,
    Duration: __limitedParseDouble(output.Duration),
    EntryPoint: output.EntryPoint != null ? deserializeAws_restJson1ServiceId(output.EntryPoint, context) : undefined,
    ErrorRootCauses:
      output.ErrorRootCauses != null
        ? deserializeAws_restJson1ErrorRootCauses(output.ErrorRootCauses, context)
        : undefined,
    FaultRootCauses:
      output.FaultRootCauses != null
        ? deserializeAws_restJson1FaultRootCauses(output.FaultRootCauses, context)
        : undefined,
    HasError: __expectBoolean(output.HasError),
    HasFault: __expectBoolean(output.HasFault),
    HasThrottle: __expectBoolean(output.HasThrottle),
    Http: output.Http != null ? deserializeAws_restJson1Http(output.Http, context) : undefined,
    Id: __expectString(output.Id),
    InstanceIds:
      output.InstanceIds != null ? deserializeAws_restJson1TraceInstanceIds(output.InstanceIds, context) : undefined,
    IsPartial: __expectBoolean(output.IsPartial),
    MatchedEventTime:
      output.MatchedEventTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.MatchedEventTime)))
        : undefined,
    ResourceARNs:
      output.ResourceARNs != null ? deserializeAws_restJson1TraceResourceARNs(output.ResourceARNs, context) : undefined,
    ResponseTime: __limitedParseDouble(output.ResponseTime),
    ResponseTimeRootCauses:
      output.ResponseTimeRootCauses != null
        ? deserializeAws_restJson1ResponseTimeRootCauses(output.ResponseTimeRootCauses, context)
        : undefined,
    Revision: __expectInt32(output.Revision),
    ServiceIds: output.ServiceIds != null ? deserializeAws_restJson1ServiceIds(output.ServiceIds, context) : undefined,
    Users: output.Users != null ? deserializeAws_restJson1TraceUsers(output.Users, context) : undefined,
  } as any;
};

const deserializeAws_restJson1TraceSummaryList = (output: any, context: __SerdeContext): TraceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TraceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TraceUser = (output: any, context: __SerdeContext): TraceUser => {
  return {
    ServiceIds: output.ServiceIds != null ? deserializeAws_restJson1ServiceIds(output.ServiceIds, context) : undefined,
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_restJson1TraceUsers = (output: any, context: __SerdeContext): TraceUser[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TraceUser(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UnprocessedStatistics = (output: any, context: __SerdeContext): UnprocessedStatistics => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
    RuleName: __expectString(output.RuleName),
  } as any;
};

const deserializeAws_restJson1UnprocessedStatisticsList = (
  output: any,
  context: __SerdeContext
): UnprocessedStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UnprocessedStatistics(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UnprocessedTraceIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1UnprocessedTraceSegment = (
  output: any,
  context: __SerdeContext
): UnprocessedTraceSegment => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Id: __expectString(output.Id),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1UnprocessedTraceSegmentList = (
  output: any,
  context: __SerdeContext
): UnprocessedTraceSegment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UnprocessedTraceSegment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ValuesWithServiceIds = (output: any, context: __SerdeContext): ValueWithServiceIds[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValueWithServiceIds(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ValueWithServiceIds = (output: any, context: __SerdeContext): ValueWithServiceIds => {
  return {
    AnnotationValue:
      output.AnnotationValue != null
        ? deserializeAws_restJson1AnnotationValue(__expectUnion(output.AnnotationValue), context)
        : undefined,
    ServiceIds: output.ServiceIds != null ? deserializeAws_restJson1ServiceIds(output.ServiceIds, context) : undefined,
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
