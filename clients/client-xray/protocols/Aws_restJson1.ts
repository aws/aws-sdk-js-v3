import { BatchGetTracesCommandInput, BatchGetTracesCommandOutput } from "../commands/BatchGetTracesCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "../commands/CreateGroupCommand";
import { CreateSamplingRuleCommandInput, CreateSamplingRuleCommandOutput } from "../commands/CreateSamplingRuleCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "../commands/DeleteGroupCommand";
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
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutEncryptionConfigCommandInput,
  PutEncryptionConfigCommandOutput,
} from "../commands/PutEncryptionConfigCommand";
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
  InsightState,
  InsightSummary,
  InsightsConfiguration,
  InstanceIdDetail,
  InvalidRequestException,
  RequestImpactStatistics,
  ResourceARNDetail,
  ResourceNotFoundException,
  ResponseTimeRootCause,
  ResponseTimeRootCauseEntity,
  ResponseTimeRootCauseService,
  RootCauseException,
  RuleLimitExceededException,
  SamplingRule,
  SamplingRuleRecord,
  SamplingRuleUpdate,
  SamplingStatisticSummary,
  SamplingStatisticsDocument,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1BatchGetTracesCommand = async (
  input: BatchGetTracesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/Traces";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TraceIds !== undefined &&
      input.TraceIds !== null && { TraceIds: serializeAws_restJson1TraceIdList(input.TraceIds, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/CreateGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.FilterExpression !== undefined &&
      input.FilterExpression !== null && { FilterExpression: input.FilterExpression }),
    ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
    ...(input.InsightsConfiguration !== undefined &&
      input.InsightsConfiguration !== null && {
        InsightsConfiguration: serializeAws_restJson1InsightsConfiguration(input.InsightsConfiguration, context),
      }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/CreateSamplingRule";
  let body: any;
  body = JSON.stringify({
    ...(input.SamplingRule !== undefined &&
      input.SamplingRule !== null && { SamplingRule: serializeAws_restJson1SamplingRule(input.SamplingRule, context) }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/DeleteGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN }),
    ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/DeleteSamplingRule";
  let body: any;
  body = JSON.stringify({
    ...(input.RuleARN !== undefined && input.RuleARN !== null && { RuleARN: input.RuleARN }),
    ...(input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/EncryptionConfig";
  let body: any;
  body = "";
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/GetGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN }),
    ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/Groups";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/Insight";
  let body: any;
  body = JSON.stringify({
    ...(input.InsightId !== undefined && input.InsightId !== null && { InsightId: input.InsightId }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/InsightEvents";
  let body: any;
  body = JSON.stringify({
    ...(input.InsightId !== undefined && input.InsightId !== null && { InsightId: input.InsightId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/InsightImpactGraph";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.InsightId !== undefined && input.InsightId !== null && { InsightId: input.InsightId }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/InsightSummaries";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN }),
    ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    ...(input.States !== undefined &&
      input.States !== null && { States: serializeAws_restJson1InsightStateList(input.States, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/GetSamplingRules";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/SamplingStatisticSummaries";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/SamplingTargets";
  let body: any;
  body = JSON.stringify({
    ...(input.SamplingStatisticsDocuments !== undefined &&
      input.SamplingStatisticsDocuments !== null && {
        SamplingStatisticsDocuments: serializeAws_restJson1SamplingStatisticsDocumentList(
          input.SamplingStatisticsDocuments,
          context
        ),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/ServiceGraph";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN }),
    ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/TimeSeriesServiceStatistics";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.EntitySelectorExpression !== undefined &&
      input.EntitySelectorExpression !== null && { EntitySelectorExpression: input.EntitySelectorExpression }),
    ...(input.ForecastStatistics !== undefined &&
      input.ForecastStatistics !== null && { ForecastStatistics: input.ForecastStatistics }),
    ...(input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN }),
    ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Period !== undefined && input.Period !== null && { Period: input.Period }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/TraceGraph";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.TraceIds !== undefined &&
      input.TraceIds !== null && { TraceIds: serializeAws_restJson1TraceIdList(input.TraceIds, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/TraceSummaries";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime !== undefined &&
      input.EndTime !== null && { EndTime: Math.round(input.EndTime.getTime() / 1000) }),
    ...(input.FilterExpression !== undefined &&
      input.FilterExpression !== null && { FilterExpression: input.FilterExpression }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Sampling !== undefined && input.Sampling !== null && { Sampling: input.Sampling }),
    ...(input.SamplingStrategy !== undefined &&
      input.SamplingStrategy !== null && {
        SamplingStrategy: serializeAws_restJson1SamplingStrategy(input.SamplingStrategy, context),
      }),
    ...(input.StartTime !== undefined &&
      input.StartTime !== null && { StartTime: Math.round(input.StartTime.getTime() / 1000) }),
    ...(input.TimeRangeType !== undefined && input.TimeRangeType !== null && { TimeRangeType: input.TimeRangeType }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/ListTagsForResource";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/PutEncryptionConfig";
  let body: any;
  body = JSON.stringify({
    ...(input.KeyId !== undefined && input.KeyId !== null && { KeyId: input.KeyId }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/TelemetryRecords";
  let body: any;
  body = JSON.stringify({
    ...(input.EC2InstanceId !== undefined && input.EC2InstanceId !== null && { EC2InstanceId: input.EC2InstanceId }),
    ...(input.Hostname !== undefined && input.Hostname !== null && { Hostname: input.Hostname }),
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TelemetryRecords !== undefined &&
      input.TelemetryRecords !== null && {
        TelemetryRecords: serializeAws_restJson1TelemetryRecordList(input.TelemetryRecords, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/TraceSegments";
  let body: any;
  body = JSON.stringify({
    ...(input.TraceSegmentDocuments !== undefined &&
      input.TraceSegmentDocuments !== null && {
        TraceSegmentDocuments: serializeAws_restJson1TraceSegmentDocumentList(input.TraceSegmentDocuments, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/TagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/UntagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/UpdateGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.FilterExpression !== undefined &&
      input.FilterExpression !== null && { FilterExpression: input.FilterExpression }),
    ...(input.GroupARN !== undefined && input.GroupARN !== null && { GroupARN: input.GroupARN }),
    ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
    ...(input.InsightsConfiguration !== undefined &&
      input.InsightsConfiguration !== null && {
        InsightsConfiguration: serializeAws_restJson1InsightsConfiguration(input.InsightsConfiguration, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/UpdateSamplingRule";
  let body: any;
  body = JSON.stringify({
    ...(input.SamplingRuleUpdate !== undefined &&
      input.SamplingRuleUpdate !== null && {
        SamplingRuleUpdate: serializeAws_restJson1SamplingRuleUpdate(input.SamplingRuleUpdate, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const contents: BatchGetTracesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Traces: undefined,
    UnprocessedTraceIds: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Traces !== undefined && data.Traces !== null) {
    contents.Traces = deserializeAws_restJson1TraceList(data.Traces, context);
  }
  if (data.UnprocessedTraceIds !== undefined && data.UnprocessedTraceIds !== null) {
    contents.UnprocessedTraceIds = deserializeAws_restJson1UnprocessedTraceIdList(data.UnprocessedTraceIds, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchGetTracesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTracesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGroupCommandError(output, context);
  }
  const contents: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    Group: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined && data.Group !== null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSamplingRuleCommandError(output, context);
  }
  const contents: CreateSamplingRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    SamplingRuleRecord: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.SamplingRuleRecord !== undefined && data.SamplingRuleRecord !== null) {
    contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(data.SamplingRuleRecord, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSamplingRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSamplingRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RuleLimitExceededException":
    case "com.amazonaws.xray#RuleLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1RuleLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGroupCommandError(output, context);
  }
  const contents: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSamplingRuleCommandError(output, context);
  }
  const contents: DeleteSamplingRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    SamplingRuleRecord: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.SamplingRuleRecord !== undefined && data.SamplingRuleRecord !== null) {
    contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(data.SamplingRuleRecord, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSamplingRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSamplingRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEncryptionConfigCommandError(output, context);
  }
  const contents: GetEncryptionConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    EncryptionConfig: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.EncryptionConfig !== undefined && data.EncryptionConfig !== null) {
    contents.EncryptionConfig = deserializeAws_restJson1EncryptionConfig(data.EncryptionConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGroupCommandError(output, context);
  }
  const contents: GetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    Group: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined && data.Group !== null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGroupsCommandError(output, context);
  }
  const contents: GetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Groups: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Groups !== undefined && data.Groups !== null) {
    contents.Groups = deserializeAws_restJson1GroupSummaryList(data.Groups, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInsightCommandError(output, context);
  }
  const contents: GetInsightCommandOutput = {
    $metadata: deserializeMetadata(output),
    Insight: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Insight !== undefined && data.Insight !== null) {
    contents.Insight = deserializeAws_restJson1Insight(data.Insight, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetInsightEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInsightEventsCommandError(output, context);
  }
  const contents: GetInsightEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    InsightEvents: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.InsightEvents !== undefined && data.InsightEvents !== null) {
    contents.InsightEvents = deserializeAws_restJson1InsightEventList(data.InsightEvents, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetInsightEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetInsightImpactGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightImpactGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInsightImpactGraphCommandError(output, context);
  }
  const contents: GetInsightImpactGraphCommandOutput = {
    $metadata: deserializeMetadata(output),
    EndTime: undefined,
    InsightId: undefined,
    NextToken: undefined,
    ServiceGraphEndTime: undefined,
    ServiceGraphStartTime: undefined,
    Services: undefined,
    StartTime: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.EndTime !== undefined && data.EndTime !== null) {
    contents.EndTime = new Date(Math.round(data.EndTime * 1000));
  }
  if (data.InsightId !== undefined && data.InsightId !== null) {
    contents.InsightId = data.InsightId;
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.ServiceGraphEndTime !== undefined && data.ServiceGraphEndTime !== null) {
    contents.ServiceGraphEndTime = new Date(Math.round(data.ServiceGraphEndTime * 1000));
  }
  if (data.ServiceGraphStartTime !== undefined && data.ServiceGraphStartTime !== null) {
    contents.ServiceGraphStartTime = new Date(Math.round(data.ServiceGraphStartTime * 1000));
  }
  if (data.Services !== undefined && data.Services !== null) {
    contents.Services = deserializeAws_restJson1InsightImpactGraphServiceList(data.Services, context);
  }
  if (data.StartTime !== undefined && data.StartTime !== null) {
    contents.StartTime = new Date(Math.round(data.StartTime * 1000));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetInsightImpactGraphCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightImpactGraphCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetInsightSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInsightSummariesCommandError(output, context);
  }
  const contents: GetInsightSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    InsightSummaries: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.InsightSummaries !== undefined && data.InsightSummaries !== null) {
    contents.InsightSummaries = deserializeAws_restJson1InsightSummaryList(data.InsightSummaries, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetInsightSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSamplingRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSamplingRulesCommandError(output, context);
  }
  const contents: GetSamplingRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    SamplingRuleRecords: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.SamplingRuleRecords !== undefined && data.SamplingRuleRecords !== null) {
    contents.SamplingRuleRecords = deserializeAws_restJson1SamplingRuleRecordList(data.SamplingRuleRecords, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSamplingRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSamplingStatisticSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingStatisticSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSamplingStatisticSummariesCommandError(output, context);
  }
  const contents: GetSamplingStatisticSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    SamplingStatisticSummaries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.SamplingStatisticSummaries !== undefined && data.SamplingStatisticSummaries !== null) {
    contents.SamplingStatisticSummaries = deserializeAws_restJson1SamplingStatisticSummaryList(
      data.SamplingStatisticSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSamplingStatisticSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingStatisticSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetSamplingTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSamplingTargetsCommandError(output, context);
  }
  const contents: GetSamplingTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    LastRuleModification: undefined,
    SamplingTargetDocuments: undefined,
    UnprocessedStatistics: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.LastRuleModification !== undefined && data.LastRuleModification !== null) {
    contents.LastRuleModification = new Date(Math.round(data.LastRuleModification * 1000));
  }
  if (data.SamplingTargetDocuments !== undefined && data.SamplingTargetDocuments !== null) {
    contents.SamplingTargetDocuments = deserializeAws_restJson1SamplingTargetDocumentList(
      data.SamplingTargetDocuments,
      context
    );
  }
  if (data.UnprocessedStatistics !== undefined && data.UnprocessedStatistics !== null) {
    contents.UnprocessedStatistics = deserializeAws_restJson1UnprocessedStatisticsList(
      data.UnprocessedStatistics,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSamplingTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetServiceGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetServiceGraphCommandError(output, context);
  }
  const contents: GetServiceGraphCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContainsOldGroupVersions: undefined,
    EndTime: undefined,
    NextToken: undefined,
    Services: undefined,
    StartTime: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ContainsOldGroupVersions !== undefined && data.ContainsOldGroupVersions !== null) {
    contents.ContainsOldGroupVersions = data.ContainsOldGroupVersions;
  }
  if (data.EndTime !== undefined && data.EndTime !== null) {
    contents.EndTime = new Date(Math.round(data.EndTime * 1000));
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Services !== undefined && data.Services !== null) {
    contents.Services = deserializeAws_restJson1ServiceList(data.Services, context);
  }
  if (data.StartTime !== undefined && data.StartTime !== null) {
    contents.StartTime = new Date(Math.round(data.StartTime * 1000));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetServiceGraphCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceGraphCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimeSeriesServiceStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommandError(output, context);
  }
  const contents: GetTimeSeriesServiceStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ContainsOldGroupVersions: undefined,
    NextToken: undefined,
    TimeSeriesServiceStatistics: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ContainsOldGroupVersions !== undefined && data.ContainsOldGroupVersions !== null) {
    contents.ContainsOldGroupVersions = data.ContainsOldGroupVersions;
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.TimeSeriesServiceStatistics !== undefined && data.TimeSeriesServiceStatistics !== null) {
    contents.TimeSeriesServiceStatistics = deserializeAws_restJson1TimeSeriesServiceStatisticsList(
      data.TimeSeriesServiceStatistics,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimeSeriesServiceStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetTraceGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTraceGraphCommandError(output, context);
  }
  const contents: GetTraceGraphCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Services: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Services !== undefined && data.Services !== null) {
    contents.Services = deserializeAws_restJson1ServiceList(data.Services, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTraceGraphCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceGraphCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetTraceSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTraceSummariesCommandError(output, context);
  }
  const contents: GetTraceSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ApproximateTime: undefined,
    NextToken: undefined,
    TraceSummaries: undefined,
    TracesProcessedCount: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ApproximateTime !== undefined && data.ApproximateTime !== null) {
    contents.ApproximateTime = new Date(Math.round(data.ApproximateTime * 1000));
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.TraceSummaries !== undefined && data.TraceSummaries !== null) {
    contents.TraceSummaries = deserializeAws_restJson1TraceSummaryList(data.TraceSummaries, context);
  }
  if (data.TracesProcessedCount !== undefined && data.TracesProcessedCount !== null) {
    contents.TracesProcessedCount = data.TracesProcessedCount;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTraceSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.xray#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutEncryptionConfigCommandError(output, context);
  }
  const contents: PutEncryptionConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    EncryptionConfig: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.EncryptionConfig !== undefined && data.EncryptionConfig !== null) {
    contents.EncryptionConfig = deserializeAws_restJson1EncryptionConfig(data.EncryptionConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutTelemetryRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTelemetryRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutTelemetryRecordsCommandError(output, context);
  }
  const contents: PutTelemetryRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutTelemetryRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTelemetryRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutTraceSegmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTraceSegmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutTraceSegmentsCommandError(output, context);
  }
  const contents: PutTraceSegmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    UnprocessedTraceSegments: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.UnprocessedTraceSegments !== undefined && data.UnprocessedTraceSegments !== null) {
    contents.UnprocessedTraceSegments = deserializeAws_restJson1UnprocessedTraceSegmentList(
      data.UnprocessedTraceSegments,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutTraceSegmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTraceSegmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.xray#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.xray#TooManyTagsException":
      response = {
        ...(await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.xray#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGroupCommandError(output, context);
  }
  const contents: UpdateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    Group: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined && data.Group !== null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSamplingRuleCommandError(output, context);
  }
  const contents: UpdateSamplingRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    SamplingRuleRecord: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.SamplingRuleRecord !== undefined && data.SamplingRuleRecord !== null) {
    contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(data.SamplingRuleRecord, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSamplingRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSamplingRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceName: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = data.ResourceName;
  }
  return contents;
};

const deserializeAws_restJson1RuleLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RuleLimitExceededException> => {
  const contents: RuleLimitExceededException = {
    name: "RuleLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ThrottledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledException> => {
  const contents: ThrottledException = {
    name: "ThrottledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceName: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.ResourceName !== undefined && data.ResourceName !== null) {
    contents.ResourceName = data.ResourceName;
  }
  return contents;
};

const serializeAws_restJson1AttributeMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1BackendConnectionErrors = (
  input: BackendConnectionErrors,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionRefusedCount !== undefined &&
      input.ConnectionRefusedCount !== null && { ConnectionRefusedCount: input.ConnectionRefusedCount }),
    ...(input.HTTPCode4XXCount !== undefined &&
      input.HTTPCode4XXCount !== null && { HTTPCode4XXCount: input.HTTPCode4XXCount }),
    ...(input.HTTPCode5XXCount !== undefined &&
      input.HTTPCode5XXCount !== null && { HTTPCode5XXCount: input.HTTPCode5XXCount }),
    ...(input.OtherCount !== undefined && input.OtherCount !== null && { OtherCount: input.OtherCount }),
    ...(input.TimeoutCount !== undefined && input.TimeoutCount !== null && { TimeoutCount: input.TimeoutCount }),
    ...(input.UnknownHostCount !== undefined &&
      input.UnknownHostCount !== null && { UnknownHostCount: input.UnknownHostCount }),
  };
};

const serializeAws_restJson1InsightsConfiguration = (input: InsightsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.InsightsEnabled !== undefined &&
      input.InsightsEnabled !== null && { InsightsEnabled: input.InsightsEnabled }),
    ...(input.NotificationsEnabled !== undefined &&
      input.NotificationsEnabled !== null && { NotificationsEnabled: input.NotificationsEnabled }),
  };
};

const serializeAws_restJson1InsightStateList = (input: (InsightState | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SamplingRule = (input: SamplingRule, context: __SerdeContext): any => {
  return {
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && { Attributes: serializeAws_restJson1AttributeMap(input.Attributes, context) }),
    ...(input.FixedRate !== undefined && input.FixedRate !== null && { FixedRate: input.FixedRate }),
    ...(input.HTTPMethod !== undefined && input.HTTPMethod !== null && { HTTPMethod: input.HTTPMethod }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
    ...(input.ReservoirSize !== undefined && input.ReservoirSize !== null && { ReservoirSize: input.ReservoirSize }),
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.RuleARN !== undefined && input.RuleARN !== null && { RuleARN: input.RuleARN }),
    ...(input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName }),
    ...(input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName }),
    ...(input.ServiceType !== undefined && input.ServiceType !== null && { ServiceType: input.ServiceType }),
    ...(input.URLPath !== undefined && input.URLPath !== null && { URLPath: input.URLPath }),
    ...(input.Version !== undefined && input.Version !== null && { Version: input.Version }),
  };
};

const serializeAws_restJson1SamplingRuleUpdate = (input: SamplingRuleUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && { Attributes: serializeAws_restJson1AttributeMap(input.Attributes, context) }),
    ...(input.FixedRate !== undefined && input.FixedRate !== null && { FixedRate: input.FixedRate }),
    ...(input.HTTPMethod !== undefined && input.HTTPMethod !== null && { HTTPMethod: input.HTTPMethod }),
    ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
    ...(input.Priority !== undefined && input.Priority !== null && { Priority: input.Priority }),
    ...(input.ReservoirSize !== undefined && input.ReservoirSize !== null && { ReservoirSize: input.ReservoirSize }),
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.RuleARN !== undefined && input.RuleARN !== null && { RuleARN: input.RuleARN }),
    ...(input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName }),
    ...(input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName }),
    ...(input.ServiceType !== undefined && input.ServiceType !== null && { ServiceType: input.ServiceType }),
    ...(input.URLPath !== undefined && input.URLPath !== null && { URLPath: input.URLPath }),
  };
};

const serializeAws_restJson1SamplingStatisticsDocument = (
  input: SamplingStatisticsDocument,
  context: __SerdeContext
): any => {
  return {
    ...(input.BorrowCount !== undefined && input.BorrowCount !== null && { BorrowCount: input.BorrowCount }),
    ...(input.ClientID !== undefined && input.ClientID !== null && { ClientID: input.ClientID }),
    ...(input.RequestCount !== undefined && input.RequestCount !== null && { RequestCount: input.RequestCount }),
    ...(input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName }),
    ...(input.SampledCount !== undefined && input.SampledCount !== null && { SampledCount: input.SampledCount }),
    ...(input.Timestamp !== undefined &&
      input.Timestamp !== null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
  };
};

const serializeAws_restJson1SamplingStatisticsDocumentList = (
  input: SamplingStatisticsDocument[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SamplingStatisticsDocument(entry, context);
    });
};

const serializeAws_restJson1SamplingStrategy = (input: SamplingStrategy, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TelemetryRecord = (input: TelemetryRecord, context: __SerdeContext): any => {
  return {
    ...(input.BackendConnectionErrors !== undefined &&
      input.BackendConnectionErrors !== null && {
        BackendConnectionErrors: serializeAws_restJson1BackendConnectionErrors(input.BackendConnectionErrors, context),
      }),
    ...(input.SegmentsReceivedCount !== undefined &&
      input.SegmentsReceivedCount !== null && { SegmentsReceivedCount: input.SegmentsReceivedCount }),
    ...(input.SegmentsRejectedCount !== undefined &&
      input.SegmentsRejectedCount !== null && { SegmentsRejectedCount: input.SegmentsRejectedCount }),
    ...(input.SegmentsSentCount !== undefined &&
      input.SegmentsSentCount !== null && { SegmentsSentCount: input.SegmentsSentCount }),
    ...(input.SegmentsSpilloverCount !== undefined &&
      input.SegmentsSpilloverCount !== null && { SegmentsSpilloverCount: input.SegmentsSpilloverCount }),
    ...(input.Timestamp !== undefined &&
      input.Timestamp !== null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
  };
};

const serializeAws_restJson1TelemetryRecordList = (input: TelemetryRecord[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1TelemetryRecord(entry, context);
    });
};

const serializeAws_restJson1TraceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TraceSegmentDocumentList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1Alias = (output: any, context: __SerdeContext): Alias => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_restJson1AliasNames(output.Names, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1AliasList = (output: any, context: __SerdeContext): Alias[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Alias(entry, context);
    });
};

const deserializeAws_restJson1AliasNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1Annotations = (
  output: any,
  context: __SerdeContext
): { [key: string]: ValueWithServiceIds[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: ValueWithServiceIds[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ValuesWithServiceIds(value, context),
    };
  }, {});
};

const deserializeAws_restJson1AnnotationValue = (output: any, context: __SerdeContext): AnnotationValue => {
  if (output.BooleanValue !== undefined && output.BooleanValue !== null) {
    return {
      BooleanValue: output.BooleanValue,
    };
  }
  if (output.NumberValue !== undefined && output.NumberValue !== null) {
    return {
      NumberValue: output.NumberValue,
    };
  }
  if (output.StringValue !== undefined && output.StringValue !== null) {
    return {
      StringValue: output.StringValue,
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1AnomalousService = (output: any, context: __SerdeContext): AnomalousService => {
  return {
    ServiceId:
      output.ServiceId !== undefined && output.ServiceId !== null
        ? deserializeAws_restJson1ServiceId(output.ServiceId, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AnomalousServiceList = (output: any, context: __SerdeContext): AnomalousService[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnomalousService(entry, context);
    });
};

const deserializeAws_restJson1AttributeMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1AvailabilityZoneDetail = (
  output: any,
  context: __SerdeContext
): AvailabilityZoneDetail => {
  return {
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_restJson1Edge = (output: any, context: __SerdeContext): Edge => {
  return {
    Aliases:
      output.Aliases !== undefined && output.Aliases !== null
        ? deserializeAws_restJson1AliasList(output.Aliases, context)
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    ReferenceId: output.ReferenceId !== undefined && output.ReferenceId !== null ? output.ReferenceId : undefined,
    ResponseTimeHistogram:
      output.ResponseTimeHistogram !== undefined && output.ResponseTimeHistogram !== null
        ? deserializeAws_restJson1Histogram(output.ResponseTimeHistogram, context)
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    SummaryStatistics:
      output.SummaryStatistics !== undefined && output.SummaryStatistics !== null
        ? deserializeAws_restJson1EdgeStatistics(output.SummaryStatistics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EdgeList = (output: any, context: __SerdeContext): Edge[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Edge(entry, context);
    });
};

const deserializeAws_restJson1EdgeStatistics = (output: any, context: __SerdeContext): EdgeStatistics => {
  return {
    ErrorStatistics:
      output.ErrorStatistics !== undefined && output.ErrorStatistics !== null
        ? deserializeAws_restJson1ErrorStatistics(output.ErrorStatistics, context)
        : undefined,
    FaultStatistics:
      output.FaultStatistics !== undefined && output.FaultStatistics !== null
        ? deserializeAws_restJson1FaultStatistics(output.FaultStatistics, context)
        : undefined,
    OkCount: output.OkCount !== undefined && output.OkCount !== null ? output.OkCount : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    TotalResponseTime:
      output.TotalResponseTime !== undefined && output.TotalResponseTime !== null
        ? output.TotalResponseTime
        : undefined,
  } as any;
};

const deserializeAws_restJson1EncryptionConfig = (output: any, context: __SerdeContext): EncryptionConfig => {
  return {
    KeyId: output.KeyId !== undefined && output.KeyId !== null ? output.KeyId : undefined,
    Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1ErrorRootCause = (output: any, context: __SerdeContext): ErrorRootCause => {
  return {
    ClientImpacting:
      output.ClientImpacting !== undefined && output.ClientImpacting !== null ? output.ClientImpacting : undefined,
    Services:
      output.Services !== undefined && output.Services !== null
        ? deserializeAws_restJson1ErrorRootCauseServices(output.Services, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ErrorRootCauseEntity = (output: any, context: __SerdeContext): ErrorRootCauseEntity => {
  return {
    Exceptions:
      output.Exceptions !== undefined && output.Exceptions !== null
        ? deserializeAws_restJson1RootCauseExceptions(output.Exceptions, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Remote: output.Remote !== undefined && output.Remote !== null ? output.Remote : undefined,
  } as any;
};

const deserializeAws_restJson1ErrorRootCauseEntityPath = (
  output: any,
  context: __SerdeContext
): ErrorRootCauseEntity[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ErrorRootCauseEntity(entry, context);
    });
};

const deserializeAws_restJson1ErrorRootCauses = (output: any, context: __SerdeContext): ErrorRootCause[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ErrorRootCause(entry, context);
    });
};

const deserializeAws_restJson1ErrorRootCauseService = (output: any, context: __SerdeContext): ErrorRootCauseService => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    EntityPath:
      output.EntityPath !== undefined && output.EntityPath !== null
        ? deserializeAws_restJson1ErrorRootCauseEntityPath(output.EntityPath, context)
        : undefined,
    Inferred: output.Inferred !== undefined && output.Inferred !== null ? output.Inferred : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_restJson1ServiceNames(output.Names, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1ErrorRootCauseServices = (
  output: any,
  context: __SerdeContext
): ErrorRootCauseService[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ErrorRootCauseService(entry, context);
    });
};

const deserializeAws_restJson1ErrorStatistics = (output: any, context: __SerdeContext): ErrorStatistics => {
  return {
    OtherCount: output.OtherCount !== undefined && output.OtherCount !== null ? output.OtherCount : undefined,
    ThrottleCount:
      output.ThrottleCount !== undefined && output.ThrottleCount !== null ? output.ThrottleCount : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  } as any;
};

const deserializeAws_restJson1FaultRootCause = (output: any, context: __SerdeContext): FaultRootCause => {
  return {
    ClientImpacting:
      output.ClientImpacting !== undefined && output.ClientImpacting !== null ? output.ClientImpacting : undefined,
    Services:
      output.Services !== undefined && output.Services !== null
        ? deserializeAws_restJson1FaultRootCauseServices(output.Services, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FaultRootCauseEntity = (output: any, context: __SerdeContext): FaultRootCauseEntity => {
  return {
    Exceptions:
      output.Exceptions !== undefined && output.Exceptions !== null
        ? deserializeAws_restJson1RootCauseExceptions(output.Exceptions, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Remote: output.Remote !== undefined && output.Remote !== null ? output.Remote : undefined,
  } as any;
};

const deserializeAws_restJson1FaultRootCauseEntityPath = (
  output: any,
  context: __SerdeContext
): FaultRootCauseEntity[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FaultRootCauseEntity(entry, context);
    });
};

const deserializeAws_restJson1FaultRootCauses = (output: any, context: __SerdeContext): FaultRootCause[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FaultRootCause(entry, context);
    });
};

const deserializeAws_restJson1FaultRootCauseService = (output: any, context: __SerdeContext): FaultRootCauseService => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    EntityPath:
      output.EntityPath !== undefined && output.EntityPath !== null
        ? deserializeAws_restJson1FaultRootCauseEntityPath(output.EntityPath, context)
        : undefined,
    Inferred: output.Inferred !== undefined && output.Inferred !== null ? output.Inferred : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_restJson1ServiceNames(output.Names, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1FaultRootCauseServices = (
  output: any,
  context: __SerdeContext
): FaultRootCauseService[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FaultRootCauseService(entry, context);
    });
};

const deserializeAws_restJson1FaultStatistics = (output: any, context: __SerdeContext): FaultStatistics => {
  return {
    OtherCount: output.OtherCount !== undefined && output.OtherCount !== null ? output.OtherCount : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  } as any;
};

const deserializeAws_restJson1ForecastStatistics = (output: any, context: __SerdeContext): ForecastStatistics => {
  return {
    FaultCountHigh:
      output.FaultCountHigh !== undefined && output.FaultCountHigh !== null ? output.FaultCountHigh : undefined,
    FaultCountLow:
      output.FaultCountLow !== undefined && output.FaultCountLow !== null ? output.FaultCountLow : undefined,
  } as any;
};

const deserializeAws_restJson1Group = (output: any, context: __SerdeContext): Group => {
  return {
    FilterExpression:
      output.FilterExpression !== undefined && output.FilterExpression !== null ? output.FilterExpression : undefined,
    GroupARN: output.GroupARN !== undefined && output.GroupARN !== null ? output.GroupARN : undefined,
    GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    InsightsConfiguration:
      output.InsightsConfiguration !== undefined && output.InsightsConfiguration !== null
        ? deserializeAws_restJson1InsightsConfiguration(output.InsightsConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GroupSummary = (output: any, context: __SerdeContext): GroupSummary => {
  return {
    FilterExpression:
      output.FilterExpression !== undefined && output.FilterExpression !== null ? output.FilterExpression : undefined,
    GroupARN: output.GroupARN !== undefined && output.GroupARN !== null ? output.GroupARN : undefined,
    GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    InsightsConfiguration:
      output.InsightsConfiguration !== undefined && output.InsightsConfiguration !== null
        ? deserializeAws_restJson1InsightsConfiguration(output.InsightsConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GroupSummaryList = (output: any, context: __SerdeContext): GroupSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GroupSummary(entry, context);
    });
};

const deserializeAws_restJson1Histogram = (output: any, context: __SerdeContext): HistogramEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1HistogramEntry(entry, context);
    });
};

const deserializeAws_restJson1HistogramEntry = (output: any, context: __SerdeContext): HistogramEntry => {
  return {
    Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_restJson1Http = (output: any, context: __SerdeContext): Http => {
  return {
    ClientIp: output.ClientIp !== undefined && output.ClientIp !== null ? output.ClientIp : undefined,
    HttpMethod: output.HttpMethod !== undefined && output.HttpMethod !== null ? output.HttpMethod : undefined,
    HttpStatus: output.HttpStatus !== undefined && output.HttpStatus !== null ? output.HttpStatus : undefined,
    HttpURL: output.HttpURL !== undefined && output.HttpURL !== null ? output.HttpURL : undefined,
    UserAgent: output.UserAgent !== undefined && output.UserAgent !== null ? output.UserAgent : undefined,
  } as any;
};

const deserializeAws_restJson1Insight = (output: any, context: __SerdeContext): Insight => {
  return {
    Categories:
      output.Categories !== undefined && output.Categories !== null
        ? deserializeAws_restJson1InsightCategoryList(output.Categories, context)
        : undefined,
    ClientRequestImpactStatistics:
      output.ClientRequestImpactStatistics !== undefined && output.ClientRequestImpactStatistics !== null
        ? deserializeAws_restJson1RequestImpactStatistics(output.ClientRequestImpactStatistics, context)
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    GroupARN: output.GroupARN !== undefined && output.GroupARN !== null ? output.GroupARN : undefined,
    GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    InsightId: output.InsightId !== undefined && output.InsightId !== null ? output.InsightId : undefined,
    RootCauseServiceId:
      output.RootCauseServiceId !== undefined && output.RootCauseServiceId !== null
        ? deserializeAws_restJson1ServiceId(output.RootCauseServiceId, context)
        : undefined,
    RootCauseServiceRequestImpactStatistics:
      output.RootCauseServiceRequestImpactStatistics !== undefined &&
      output.RootCauseServiceRequestImpactStatistics !== null
        ? deserializeAws_restJson1RequestImpactStatistics(output.RootCauseServiceRequestImpactStatistics, context)
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    Summary: output.Summary !== undefined && output.Summary !== null ? output.Summary : undefined,
    TopAnomalousServices:
      output.TopAnomalousServices !== undefined && output.TopAnomalousServices !== null
        ? deserializeAws_restJson1AnomalousServiceList(output.TopAnomalousServices, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsightCategoryList = (
  output: any,
  context: __SerdeContext
): (InsightCategory | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1InsightEvent = (output: any, context: __SerdeContext): InsightEvent => {
  return {
    ClientRequestImpactStatistics:
      output.ClientRequestImpactStatistics !== undefined && output.ClientRequestImpactStatistics !== null
        ? deserializeAws_restJson1RequestImpactStatistics(output.ClientRequestImpactStatistics, context)
        : undefined,
    EventTime:
      output.EventTime !== undefined && output.EventTime !== null
        ? new Date(Math.round(output.EventTime * 1000))
        : undefined,
    RootCauseServiceRequestImpactStatistics:
      output.RootCauseServiceRequestImpactStatistics !== undefined &&
      output.RootCauseServiceRequestImpactStatistics !== null
        ? deserializeAws_restJson1RequestImpactStatistics(output.RootCauseServiceRequestImpactStatistics, context)
        : undefined,
    Summary: output.Summary !== undefined && output.Summary !== null ? output.Summary : undefined,
    TopAnomalousServices:
      output.TopAnomalousServices !== undefined && output.TopAnomalousServices !== null
        ? deserializeAws_restJson1AnomalousServiceList(output.TopAnomalousServices, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsightEventList = (output: any, context: __SerdeContext): InsightEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InsightEvent(entry, context);
    });
};

const deserializeAws_restJson1InsightImpactGraphEdge = (
  output: any,
  context: __SerdeContext
): InsightImpactGraphEdge => {
  return {
    ReferenceId: output.ReferenceId !== undefined && output.ReferenceId !== null ? output.ReferenceId : undefined,
  } as any;
};

const deserializeAws_restJson1InsightImpactGraphEdgeList = (
  output: any,
  context: __SerdeContext
): InsightImpactGraphEdge[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InsightImpactGraphEdge(entry, context);
    });
};

const deserializeAws_restJson1InsightImpactGraphService = (
  output: any,
  context: __SerdeContext
): InsightImpactGraphService => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    Edges:
      output.Edges !== undefined && output.Edges !== null
        ? deserializeAws_restJson1InsightImpactGraphEdgeList(output.Edges, context)
        : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_restJson1ServiceNames(output.Names, context)
        : undefined,
    ReferenceId: output.ReferenceId !== undefined && output.ReferenceId !== null ? output.ReferenceId : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1InsightImpactGraphServiceList = (
  output: any,
  context: __SerdeContext
): InsightImpactGraphService[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InsightImpactGraphService(entry, context);
    });
};

const deserializeAws_restJson1InsightsConfiguration = (output: any, context: __SerdeContext): InsightsConfiguration => {
  return {
    InsightsEnabled:
      output.InsightsEnabled !== undefined && output.InsightsEnabled !== null ? output.InsightsEnabled : undefined,
    NotificationsEnabled:
      output.NotificationsEnabled !== undefined && output.NotificationsEnabled !== null
        ? output.NotificationsEnabled
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsightSummary = (output: any, context: __SerdeContext): InsightSummary => {
  return {
    Categories:
      output.Categories !== undefined && output.Categories !== null
        ? deserializeAws_restJson1InsightCategoryList(output.Categories, context)
        : undefined,
    ClientRequestImpactStatistics:
      output.ClientRequestImpactStatistics !== undefined && output.ClientRequestImpactStatistics !== null
        ? deserializeAws_restJson1RequestImpactStatistics(output.ClientRequestImpactStatistics, context)
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    GroupARN: output.GroupARN !== undefined && output.GroupARN !== null ? output.GroupARN : undefined,
    GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
    InsightId: output.InsightId !== undefined && output.InsightId !== null ? output.InsightId : undefined,
    LastUpdateTime:
      output.LastUpdateTime !== undefined && output.LastUpdateTime !== null
        ? new Date(Math.round(output.LastUpdateTime * 1000))
        : undefined,
    RootCauseServiceId:
      output.RootCauseServiceId !== undefined && output.RootCauseServiceId !== null
        ? deserializeAws_restJson1ServiceId(output.RootCauseServiceId, context)
        : undefined,
    RootCauseServiceRequestImpactStatistics:
      output.RootCauseServiceRequestImpactStatistics !== undefined &&
      output.RootCauseServiceRequestImpactStatistics !== null
        ? deserializeAws_restJson1RequestImpactStatistics(output.RootCauseServiceRequestImpactStatistics, context)
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    Summary: output.Summary !== undefined && output.Summary !== null ? output.Summary : undefined,
    TopAnomalousServices:
      output.TopAnomalousServices !== undefined && output.TopAnomalousServices !== null
        ? deserializeAws_restJson1AnomalousServiceList(output.TopAnomalousServices, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsightSummaryList = (output: any, context: __SerdeContext): InsightSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InsightSummary(entry, context);
    });
};

const deserializeAws_restJson1InstanceIdDetail = (output: any, context: __SerdeContext): InstanceIdDetail => {
  return {
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
  } as any;
};

const deserializeAws_restJson1RequestImpactStatistics = (
  output: any,
  context: __SerdeContext
): RequestImpactStatistics => {
  return {
    FaultCount: output.FaultCount !== undefined && output.FaultCount !== null ? output.FaultCount : undefined,
    OkCount: output.OkCount !== undefined && output.OkCount !== null ? output.OkCount : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceARNDetail = (output: any, context: __SerdeContext): ResourceARNDetail => {
  return {
    ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
  } as any;
};

const deserializeAws_restJson1ResponseTimeRootCause = (output: any, context: __SerdeContext): ResponseTimeRootCause => {
  return {
    ClientImpacting:
      output.ClientImpacting !== undefined && output.ClientImpacting !== null ? output.ClientImpacting : undefined,
    Services:
      output.Services !== undefined && output.Services !== null
        ? deserializeAws_restJson1ResponseTimeRootCauseServices(output.Services, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResponseTimeRootCauseEntity = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCauseEntity => {
  return {
    Coverage: output.Coverage !== undefined && output.Coverage !== null ? output.Coverage : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Remote: output.Remote !== undefined && output.Remote !== null ? output.Remote : undefined,
  } as any;
};

const deserializeAws_restJson1ResponseTimeRootCauseEntityPath = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCauseEntity[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResponseTimeRootCauseEntity(entry, context);
    });
};

const deserializeAws_restJson1ResponseTimeRootCauses = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCause[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResponseTimeRootCause(entry, context);
    });
};

const deserializeAws_restJson1ResponseTimeRootCauseService = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCauseService => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    EntityPath:
      output.EntityPath !== undefined && output.EntityPath !== null
        ? deserializeAws_restJson1ResponseTimeRootCauseEntityPath(output.EntityPath, context)
        : undefined,
    Inferred: output.Inferred !== undefined && output.Inferred !== null ? output.Inferred : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_restJson1ServiceNames(output.Names, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1ResponseTimeRootCauseServices = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCauseService[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResponseTimeRootCauseService(entry, context);
    });
};

const deserializeAws_restJson1RootCauseException = (output: any, context: __SerdeContext): RootCauseException => {
  return {
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
  } as any;
};

const deserializeAws_restJson1RootCauseExceptions = (output: any, context: __SerdeContext): RootCauseException[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RootCauseException(entry, context);
    });
};

const deserializeAws_restJson1SamplingRule = (output: any, context: __SerdeContext): SamplingRule => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1AttributeMap(output.Attributes, context)
        : undefined,
    FixedRate: output.FixedRate !== undefined && output.FixedRate !== null ? output.FixedRate : undefined,
    HTTPMethod: output.HTTPMethod !== undefined && output.HTTPMethod !== null ? output.HTTPMethod : undefined,
    Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
    Priority: output.Priority !== undefined && output.Priority !== null ? output.Priority : undefined,
    ReservoirSize:
      output.ReservoirSize !== undefined && output.ReservoirSize !== null ? output.ReservoirSize : undefined,
    ResourceARN: output.ResourceARN !== undefined && output.ResourceARN !== null ? output.ResourceARN : undefined,
    RuleARN: output.RuleARN !== undefined && output.RuleARN !== null ? output.RuleARN : undefined,
    RuleName: output.RuleName !== undefined && output.RuleName !== null ? output.RuleName : undefined,
    ServiceName: output.ServiceName !== undefined && output.ServiceName !== null ? output.ServiceName : undefined,
    ServiceType: output.ServiceType !== undefined && output.ServiceType !== null ? output.ServiceType : undefined,
    URLPath: output.URLPath !== undefined && output.URLPath !== null ? output.URLPath : undefined,
    Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
  } as any;
};

const deserializeAws_restJson1SamplingRuleRecord = (output: any, context: __SerdeContext): SamplingRuleRecord => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    ModifiedAt:
      output.ModifiedAt !== undefined && output.ModifiedAt !== null
        ? new Date(Math.round(output.ModifiedAt * 1000))
        : undefined,
    SamplingRule:
      output.SamplingRule !== undefined && output.SamplingRule !== null
        ? deserializeAws_restJson1SamplingRule(output.SamplingRule, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SamplingRuleRecordList = (output: any, context: __SerdeContext): SamplingRuleRecord[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SamplingRuleRecord(entry, context);
    });
};

const deserializeAws_restJson1SamplingStatisticSummary = (
  output: any,
  context: __SerdeContext
): SamplingStatisticSummary => {
  return {
    BorrowCount: output.BorrowCount !== undefined && output.BorrowCount !== null ? output.BorrowCount : undefined,
    RequestCount: output.RequestCount !== undefined && output.RequestCount !== null ? output.RequestCount : undefined,
    RuleName: output.RuleName !== undefined && output.RuleName !== null ? output.RuleName : undefined,
    SampledCount: output.SampledCount !== undefined && output.SampledCount !== null ? output.SampledCount : undefined,
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1SamplingStatisticSummaryList = (
  output: any,
  context: __SerdeContext
): SamplingStatisticSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SamplingStatisticSummary(entry, context);
    });
};

const deserializeAws_restJson1SamplingTargetDocument = (
  output: any,
  context: __SerdeContext
): SamplingTargetDocument => {
  return {
    FixedRate: output.FixedRate !== undefined && output.FixedRate !== null ? output.FixedRate : undefined,
    Interval: output.Interval !== undefined && output.Interval !== null ? output.Interval : undefined,
    ReservoirQuota:
      output.ReservoirQuota !== undefined && output.ReservoirQuota !== null ? output.ReservoirQuota : undefined,
    ReservoirQuotaTTL:
      output.ReservoirQuotaTTL !== undefined && output.ReservoirQuotaTTL !== null
        ? new Date(Math.round(output.ReservoirQuotaTTL * 1000))
        : undefined,
    RuleName: output.RuleName !== undefined && output.RuleName !== null ? output.RuleName : undefined,
  } as any;
};

const deserializeAws_restJson1SamplingTargetDocumentList = (
  output: any,
  context: __SerdeContext
): SamplingTargetDocument[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SamplingTargetDocument(entry, context);
    });
};

const deserializeAws_restJson1Segment = (output: any, context: __SerdeContext): Segment => {
  return {
    Document: output.Document !== undefined && output.Document !== null ? output.Document : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentList = (output: any, context: __SerdeContext): Segment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Segment(entry, context);
    });
};

const deserializeAws_restJson1Service = (output: any, context: __SerdeContext): Service => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    DurationHistogram:
      output.DurationHistogram !== undefined && output.DurationHistogram !== null
        ? deserializeAws_restJson1Histogram(output.DurationHistogram, context)
        : undefined,
    Edges:
      output.Edges !== undefined && output.Edges !== null
        ? deserializeAws_restJson1EdgeList(output.Edges, context)
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_restJson1ServiceNames(output.Names, context)
        : undefined,
    ReferenceId: output.ReferenceId !== undefined && output.ReferenceId !== null ? output.ReferenceId : undefined,
    ResponseTimeHistogram:
      output.ResponseTimeHistogram !== undefined && output.ResponseTimeHistogram !== null
        ? deserializeAws_restJson1Histogram(output.ResponseTimeHistogram, context)
        : undefined,
    Root: output.Root !== undefined && output.Root !== null ? output.Root : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    State: output.State !== undefined && output.State !== null ? output.State : undefined,
    SummaryStatistics:
      output.SummaryStatistics !== undefined && output.SummaryStatistics !== null
        ? deserializeAws_restJson1ServiceStatistics(output.SummaryStatistics, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1ServiceId = (output: any, context: __SerdeContext): ServiceId => {
  return {
    AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
    Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_restJson1ServiceNames(output.Names, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_restJson1ServiceIds = (output: any, context: __SerdeContext): ServiceId[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ServiceId(entry, context);
    });
};

const deserializeAws_restJson1ServiceList = (output: any, context: __SerdeContext): Service[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Service(entry, context);
    });
};

const deserializeAws_restJson1ServiceNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ServiceStatistics = (output: any, context: __SerdeContext): ServiceStatistics => {
  return {
    ErrorStatistics:
      output.ErrorStatistics !== undefined && output.ErrorStatistics !== null
        ? deserializeAws_restJson1ErrorStatistics(output.ErrorStatistics, context)
        : undefined,
    FaultStatistics:
      output.FaultStatistics !== undefined && output.FaultStatistics !== null
        ? deserializeAws_restJson1FaultStatistics(output.FaultStatistics, context)
        : undefined,
    OkCount: output.OkCount !== undefined && output.OkCount !== null ? output.OkCount : undefined,
    TotalCount: output.TotalCount !== undefined && output.TotalCount !== null ? output.TotalCount : undefined,
    TotalResponseTime:
      output.TotalResponseTime !== undefined && output.TotalResponseTime !== null
        ? output.TotalResponseTime
        : undefined,
  } as any;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1TimeSeriesServiceStatistics = (
  output: any,
  context: __SerdeContext
): TimeSeriesServiceStatistics => {
  return {
    EdgeSummaryStatistics:
      output.EdgeSummaryStatistics !== undefined && output.EdgeSummaryStatistics !== null
        ? deserializeAws_restJson1EdgeStatistics(output.EdgeSummaryStatistics, context)
        : undefined,
    ResponseTimeHistogram:
      output.ResponseTimeHistogram !== undefined && output.ResponseTimeHistogram !== null
        ? deserializeAws_restJson1Histogram(output.ResponseTimeHistogram, context)
        : undefined,
    ServiceForecastStatistics:
      output.ServiceForecastStatistics !== undefined && output.ServiceForecastStatistics !== null
        ? deserializeAws_restJson1ForecastStatistics(output.ServiceForecastStatistics, context)
        : undefined,
    ServiceSummaryStatistics:
      output.ServiceSummaryStatistics !== undefined && output.ServiceSummaryStatistics !== null
        ? deserializeAws_restJson1ServiceStatistics(output.ServiceSummaryStatistics, context)
        : undefined,
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1TimeSeriesServiceStatisticsList = (
  output: any,
  context: __SerdeContext
): TimeSeriesServiceStatistics[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TimeSeriesServiceStatistics(entry, context);
    });
};

const deserializeAws_restJson1Trace = (output: any, context: __SerdeContext): Trace => {
  return {
    Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    LimitExceeded:
      output.LimitExceeded !== undefined && output.LimitExceeded !== null ? output.LimitExceeded : undefined,
    Segments:
      output.Segments !== undefined && output.Segments !== null
        ? deserializeAws_restJson1SegmentList(output.Segments, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TraceAvailabilityZones = (
  output: any,
  context: __SerdeContext
): AvailabilityZoneDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AvailabilityZoneDetail(entry, context);
    });
};

const deserializeAws_restJson1TraceInstanceIds = (output: any, context: __SerdeContext): InstanceIdDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InstanceIdDetail(entry, context);
    });
};

const deserializeAws_restJson1TraceList = (output: any, context: __SerdeContext): Trace[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Trace(entry, context);
    });
};

const deserializeAws_restJson1TraceResourceARNs = (output: any, context: __SerdeContext): ResourceARNDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceARNDetail(entry, context);
    });
};

const deserializeAws_restJson1TraceSummary = (output: any, context: __SerdeContext): TraceSummary => {
  return {
    Annotations:
      output.Annotations !== undefined && output.Annotations !== null
        ? deserializeAws_restJson1Annotations(output.Annotations, context)
        : undefined,
    AvailabilityZones:
      output.AvailabilityZones !== undefined && output.AvailabilityZones !== null
        ? deserializeAws_restJson1TraceAvailabilityZones(output.AvailabilityZones, context)
        : undefined,
    Duration: output.Duration !== undefined && output.Duration !== null ? output.Duration : undefined,
    EntryPoint:
      output.EntryPoint !== undefined && output.EntryPoint !== null
        ? deserializeAws_restJson1ServiceId(output.EntryPoint, context)
        : undefined,
    ErrorRootCauses:
      output.ErrorRootCauses !== undefined && output.ErrorRootCauses !== null
        ? deserializeAws_restJson1ErrorRootCauses(output.ErrorRootCauses, context)
        : undefined,
    FaultRootCauses:
      output.FaultRootCauses !== undefined && output.FaultRootCauses !== null
        ? deserializeAws_restJson1FaultRootCauses(output.FaultRootCauses, context)
        : undefined,
    HasError: output.HasError !== undefined && output.HasError !== null ? output.HasError : undefined,
    HasFault: output.HasFault !== undefined && output.HasFault !== null ? output.HasFault : undefined,
    HasThrottle: output.HasThrottle !== undefined && output.HasThrottle !== null ? output.HasThrottle : undefined,
    Http:
      output.Http !== undefined && output.Http !== null
        ? deserializeAws_restJson1Http(output.Http, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InstanceIds:
      output.InstanceIds !== undefined && output.InstanceIds !== null
        ? deserializeAws_restJson1TraceInstanceIds(output.InstanceIds, context)
        : undefined,
    IsPartial: output.IsPartial !== undefined && output.IsPartial !== null ? output.IsPartial : undefined,
    MatchedEventTime:
      output.MatchedEventTime !== undefined && output.MatchedEventTime !== null
        ? new Date(Math.round(output.MatchedEventTime * 1000))
        : undefined,
    ResourceARNs:
      output.ResourceARNs !== undefined && output.ResourceARNs !== null
        ? deserializeAws_restJson1TraceResourceARNs(output.ResourceARNs, context)
        : undefined,
    ResponseTime: output.ResponseTime !== undefined && output.ResponseTime !== null ? output.ResponseTime : undefined,
    ResponseTimeRootCauses:
      output.ResponseTimeRootCauses !== undefined && output.ResponseTimeRootCauses !== null
        ? deserializeAws_restJson1ResponseTimeRootCauses(output.ResponseTimeRootCauses, context)
        : undefined,
    Revision: output.Revision !== undefined && output.Revision !== null ? output.Revision : undefined,
    ServiceIds:
      output.ServiceIds !== undefined && output.ServiceIds !== null
        ? deserializeAws_restJson1ServiceIds(output.ServiceIds, context)
        : undefined,
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_restJson1TraceUsers(output.Users, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TraceSummaryList = (output: any, context: __SerdeContext): TraceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TraceSummary(entry, context);
    });
};

const deserializeAws_restJson1TraceUser = (output: any, context: __SerdeContext): TraceUser => {
  return {
    ServiceIds:
      output.ServiceIds !== undefined && output.ServiceIds !== null
        ? deserializeAws_restJson1ServiceIds(output.ServiceIds, context)
        : undefined,
    UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
  } as any;
};

const deserializeAws_restJson1TraceUsers = (output: any, context: __SerdeContext): TraceUser[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TraceUser(entry, context);
    });
};

const deserializeAws_restJson1UnprocessedStatistics = (output: any, context: __SerdeContext): UnprocessedStatistics => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    RuleName: output.RuleName !== undefined && output.RuleName !== null ? output.RuleName : undefined,
  } as any;
};

const deserializeAws_restJson1UnprocessedStatisticsList = (
  output: any,
  context: __SerdeContext
): UnprocessedStatistics[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UnprocessedStatistics(entry, context);
    });
};

const deserializeAws_restJson1UnprocessedTraceIdList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1UnprocessedTraceSegment = (
  output: any,
  context: __SerdeContext
): UnprocessedTraceSegment => {
  return {
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
  } as any;
};

const deserializeAws_restJson1UnprocessedTraceSegmentList = (
  output: any,
  context: __SerdeContext
): UnprocessedTraceSegment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UnprocessedTraceSegment(entry, context);
    });
};

const deserializeAws_restJson1ValuesWithServiceIds = (output: any, context: __SerdeContext): ValueWithServiceIds[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValueWithServiceIds(entry, context);
    });
};

const deserializeAws_restJson1ValueWithServiceIds = (output: any, context: __SerdeContext): ValueWithServiceIds => {
  return {
    AnnotationValue:
      output.AnnotationValue !== undefined && output.AnnotationValue !== null
        ? deserializeAws_restJson1AnnotationValue(output.AnnotationValue, context)
        : undefined,
    ServiceIds:
      output.ServiceIds !== undefined && output.ServiceIds !== null
        ? deserializeAws_restJson1ServiceIds(output.ServiceIds, context)
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
