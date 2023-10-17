// smithy-typescript generated code
import { awsExpectUnion as __expectUnion } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  AnnotationValue,
  BackendConnectionErrors,
  Edge,
  EdgeStatistics,
  HistogramEntry,
  Insight,
  InsightEvent,
  InsightsConfiguration,
  InsightState,
  InsightSummary,
  InvalidPolicyRevisionIdException,
  InvalidRequestException,
  LockoutPreventionException,
  MalformedPolicyDocumentException,
  PolicyCountLimitExceededException,
  PolicySizeLimitExceededException,
  ResourceNotFoundException,
  ResourcePolicy,
  ResponseTimeRootCause,
  ResponseTimeRootCauseEntity,
  ResponseTimeRootCauseService,
  RuleLimitExceededException,
  SamplingRule,
  SamplingRuleRecord,
  SamplingRuleUpdate,
  SamplingStatisticsDocument,
  SamplingStatisticSummary,
  SamplingStrategy,
  SamplingTargetDocument,
  Service,
  ServiceStatistics,
  Tag,
  TelemetryRecord,
  ThrottledException,
  TimeSeriesServiceStatistics,
  TooManyTagsException,
  Trace,
  TraceSummary,
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
  body = JSON.stringify(
    take(input, {
      NextToken: [],
      TraceIds: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      FilterExpression: [],
      GroupName: [],
      InsightsConfiguration: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      SamplingRule: (_) => se_SamplingRule(_, context),
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
  body = JSON.stringify(
    take(input, {
      GroupARN: [],
      GroupName: [],
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
  body = JSON.stringify(
    take(input, {
      PolicyName: [],
      PolicyRevisionId: [],
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
  body = JSON.stringify(
    take(input, {
      RuleARN: [],
      RuleName: [],
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
  body = JSON.stringify(
    take(input, {
      GroupARN: [],
      GroupName: [],
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
  body = JSON.stringify(
    take(input, {
      NextToken: [],
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
  body = JSON.stringify(
    take(input, {
      InsightId: [],
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
  body = JSON.stringify(
    take(input, {
      InsightId: [],
      MaxResults: [],
      NextToken: [],
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
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => Math.round(_.getTime() / 1000),
      InsightId: [],
      NextToken: [],
      StartTime: (_) => Math.round(_.getTime() / 1000),
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
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => Math.round(_.getTime() / 1000),
      GroupARN: [],
      GroupName: [],
      MaxResults: [],
      NextToken: [],
      StartTime: (_) => Math.round(_.getTime() / 1000),
      States: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      NextToken: [],
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
  body = JSON.stringify(
    take(input, {
      NextToken: [],
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
  body = JSON.stringify(
    take(input, {
      SamplingStatisticsDocuments: (_) => se_SamplingStatisticsDocumentList(_, context),
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
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => Math.round(_.getTime() / 1000),
      GroupARN: [],
      GroupName: [],
      NextToken: [],
      StartTime: (_) => Math.round(_.getTime() / 1000),
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
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => Math.round(_.getTime() / 1000),
      EntitySelectorExpression: [],
      ForecastStatistics: [],
      GroupARN: [],
      GroupName: [],
      NextToken: [],
      Period: [],
      StartTime: (_) => Math.round(_.getTime() / 1000),
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
  body = JSON.stringify(
    take(input, {
      NextToken: [],
      TraceIds: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => Math.round(_.getTime() / 1000),
      FilterExpression: [],
      NextToken: [],
      Sampling: [],
      SamplingStrategy: (_) => se_SamplingStrategy(_, context),
      StartTime: (_) => Math.round(_.getTime() / 1000),
      TimeRangeType: [],
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
  body = JSON.stringify(
    take(input, {
      NextToken: [],
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
  body = JSON.stringify(
    take(input, {
      NextToken: [],
      ResourceARN: [],
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
  body = JSON.stringify(
    take(input, {
      KeyId: [],
      Type: [],
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
  body = JSON.stringify(
    take(input, {
      BypassPolicyLockoutCheck: [],
      PolicyDocument: [],
      PolicyName: [],
      PolicyRevisionId: [],
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
  body = JSON.stringify(
    take(input, {
      EC2InstanceId: [],
      Hostname: [],
      ResourceARN: [],
      TelemetryRecords: (_) => se_TelemetryRecordList(_, context),
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
  body = JSON.stringify(
    take(input, {
      TraceSegmentDocuments: (_) => _json(_),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TagResource";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
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
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UntagResource";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      TagKeys: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      FilterExpression: [],
      GroupARN: [],
      GroupName: [],
      InsightsConfiguration: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      SamplingRuleUpdate: (_) => se_SamplingRuleUpdate(_, context),
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
  const doc = take(data, {
    NextToken: __expectString,
    Traces: (_) => de_TraceList(_, context),
    UnprocessedTraceIds: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Group: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    SamplingRuleRecord: (_) => de_SamplingRuleRecord(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    SamplingRuleRecord: (_) => de_SamplingRuleRecord(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    EncryptionConfig: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Group: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Groups: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Insight: (_) => de_Insight(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    InsightEvents: (_) => de_InsightEventList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    EndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InsightId: __expectString,
    NextToken: __expectString,
    ServiceGraphEndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ServiceGraphStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Services: _json,
    StartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    InsightSummaries: (_) => de_InsightSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    SamplingRuleRecords: (_) => de_SamplingRuleRecordList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    SamplingStatisticSummaries: (_) => de_SamplingStatisticSummaryList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    LastRuleModification: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SamplingTargetDocuments: (_) => de_SamplingTargetDocumentList(_, context),
    UnprocessedStatistics: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ContainsOldGroupVersions: __expectBoolean,
    EndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextToken: __expectString,
    Services: (_) => de_ServiceList(_, context),
    StartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ContainsOldGroupVersions: __expectBoolean,
    NextToken: __expectString,
    TimeSeriesServiceStatistics: (_) => de_TimeSeriesServiceStatisticsList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    Services: (_) => de_ServiceList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ApproximateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NextToken: __expectString,
    TraceSummaries: (_) => de_TraceSummaryList(_, context),
    TracesProcessedCount: __expectLong,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    ResourcePolicies: (_) => de_ResourcePolicyList(_, context),
  });
  Object.assign(contents, doc);
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
    NextToken: __expectString,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    EncryptionConfig: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ResourcePolicy: (_) => de_ResourcePolicy(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    UnprocessedTraceSegments: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Group: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    SamplingRuleRecord: (_) => de_SamplingRuleRecord(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
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
    Message: __expectString,
    ResourceName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    ResourceName: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AttributeMap omitted.

// se_BackendConnectionErrors omitted.

// se_InsightsConfiguration omitted.

// se_InsightStateList omitted.

/**
 * serializeAws_restJson1SamplingRule
 */
const se_SamplingRule = (input: SamplingRule, context: __SerdeContext): any => {
  return take(input, {
    Attributes: _json,
    FixedRate: __serializeFloat,
    HTTPMethod: [],
    Host: [],
    Priority: [],
    ReservoirSize: [],
    ResourceARN: [],
    RuleARN: [],
    RuleName: [],
    ServiceName: [],
    ServiceType: [],
    URLPath: [],
    Version: [],
  });
};

/**
 * serializeAws_restJson1SamplingRuleUpdate
 */
const se_SamplingRuleUpdate = (input: SamplingRuleUpdate, context: __SerdeContext): any => {
  return take(input, {
    Attributes: _json,
    FixedRate: __serializeFloat,
    HTTPMethod: [],
    Host: [],
    Priority: [],
    ReservoirSize: [],
    ResourceARN: [],
    RuleARN: [],
    RuleName: [],
    ServiceName: [],
    ServiceType: [],
    URLPath: [],
  });
};

/**
 * serializeAws_restJson1SamplingStatisticsDocument
 */
const se_SamplingStatisticsDocument = (input: SamplingStatisticsDocument, context: __SerdeContext): any => {
  return take(input, {
    BorrowCount: [],
    ClientID: [],
    RequestCount: [],
    RuleName: [],
    SampledCount: [],
    Timestamp: (_) => Math.round(_.getTime() / 1000),
  });
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
  return take(input, {
    Name: [],
    Value: __serializeFloat,
  });
};

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

/**
 * serializeAws_restJson1TelemetryRecord
 */
const se_TelemetryRecord = (input: TelemetryRecord, context: __SerdeContext): any => {
  return take(input, {
    BackendConnectionErrors: _json,
    SegmentsReceivedCount: [],
    SegmentsRejectedCount: [],
    SegmentsSentCount: [],
    SegmentsSpilloverCount: [],
    Timestamp: (_) => Math.round(_.getTime() / 1000),
  });
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

// se_TraceIdList omitted.

// se_TraceSegmentDocumentList omitted.

// de_Alias omitted.

// de_AliasList omitted.

// de_AliasNames omitted.

/**
 * deserializeAws_restJson1Annotations
 */
const de_Annotations = (output: any, context: __SerdeContext): Record<string, ValueWithServiceIds[]> => {
  return Object.entries(output).reduce((acc: Record<string, ValueWithServiceIds[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_ValuesWithServiceIds(value, context);
    return acc;
  }, {} as Record<string, ValueWithServiceIds[]>);
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

// de_AnomalousService omitted.

// de_AnomalousServiceList omitted.

// de_AttributeMap omitted.

// de_AvailabilityZoneDetail omitted.

/**
 * deserializeAws_restJson1Edge
 */
const de_Edge = (output: any, context: __SerdeContext): Edge => {
  return take(output, {
    Aliases: _json,
    EdgeType: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReceivedEventAgeHistogram: (_: any) => de_Histogram(_, context),
    ReferenceId: __expectInt32,
    ResponseTimeHistogram: (_: any) => de_Histogram(_, context),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SummaryStatistics: (_: any) => de_EdgeStatistics(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1EdgeList
 */
const de_EdgeList = (output: any, context: __SerdeContext): Edge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Edge(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EdgeStatistics
 */
const de_EdgeStatistics = (output: any, context: __SerdeContext): EdgeStatistics => {
  return take(output, {
    ErrorStatistics: _json,
    FaultStatistics: _json,
    OkCount: __expectLong,
    TotalCount: __expectLong,
    TotalResponseTime: __limitedParseDouble,
  }) as any;
};

// de_EncryptionConfig omitted.

// de_ErrorRootCause omitted.

// de_ErrorRootCauseEntity omitted.

// de_ErrorRootCauseEntityPath omitted.

// de_ErrorRootCauses omitted.

// de_ErrorRootCauseService omitted.

// de_ErrorRootCauseServices omitted.

// de_ErrorStatistics omitted.

// de_FaultRootCause omitted.

// de_FaultRootCauseEntity omitted.

// de_FaultRootCauseEntityPath omitted.

// de_FaultRootCauses omitted.

// de_FaultRootCauseService omitted.

// de_FaultRootCauseServices omitted.

// de_FaultStatistics omitted.

// de_ForecastStatistics omitted.

// de_Group omitted.

// de_GroupSummary omitted.

// de_GroupSummaryList omitted.

/**
 * deserializeAws_restJson1Histogram
 */
const de_Histogram = (output: any, context: __SerdeContext): HistogramEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HistogramEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HistogramEntry
 */
const de_HistogramEntry = (output: any, context: __SerdeContext): HistogramEntry => {
  return take(output, {
    Count: __expectInt32,
    Value: __limitedParseDouble,
  }) as any;
};

// de_Http omitted.

/**
 * deserializeAws_restJson1Insight
 */
const de_Insight = (output: any, context: __SerdeContext): Insight => {
  return take(output, {
    Categories: _json,
    ClientRequestImpactStatistics: _json,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GroupARN: __expectString,
    GroupName: __expectString,
    InsightId: __expectString,
    RootCauseServiceId: _json,
    RootCauseServiceRequestImpactStatistics: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    Summary: __expectString,
    TopAnomalousServices: _json,
  }) as any;
};

// de_InsightCategoryList omitted.

/**
 * deserializeAws_restJson1InsightEvent
 */
const de_InsightEvent = (output: any, context: __SerdeContext): InsightEvent => {
  return take(output, {
    ClientRequestImpactStatistics: _json,
    EventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RootCauseServiceRequestImpactStatistics: _json,
    Summary: __expectString,
    TopAnomalousServices: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1InsightEventList
 */
const de_InsightEventList = (output: any, context: __SerdeContext): InsightEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InsightEvent(entry, context);
    });
  return retVal;
};

// de_InsightImpactGraphEdge omitted.

// de_InsightImpactGraphEdgeList omitted.

// de_InsightImpactGraphService omitted.

// de_InsightImpactGraphServiceList omitted.

// de_InsightsConfiguration omitted.

/**
 * deserializeAws_restJson1InsightSummary
 */
const de_InsightSummary = (output: any, context: __SerdeContext): InsightSummary => {
  return take(output, {
    Categories: _json,
    ClientRequestImpactStatistics: _json,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GroupARN: __expectString,
    GroupName: __expectString,
    InsightId: __expectString,
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RootCauseServiceId: _json,
    RootCauseServiceRequestImpactStatistics: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    Summary: __expectString,
    TopAnomalousServices: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1InsightSummaryList
 */
const de_InsightSummaryList = (output: any, context: __SerdeContext): InsightSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InsightSummary(entry, context);
    });
  return retVal;
};

// de_InstanceIdDetail omitted.

// de_RequestImpactStatistics omitted.

// de_ResourceARNDetail omitted.

/**
 * deserializeAws_restJson1ResourcePolicy
 */
const de_ResourcePolicy = (output: any, context: __SerdeContext): ResourcePolicy => {
  return take(output, {
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PolicyDocument: __expectString,
    PolicyName: __expectString,
    PolicyRevisionId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ResourcePolicyList
 */
const de_ResourcePolicyList = (output: any, context: __SerdeContext): ResourcePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourcePolicy(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResponseTimeRootCause
 */
const de_ResponseTimeRootCause = (output: any, context: __SerdeContext): ResponseTimeRootCause => {
  return take(output, {
    ClientImpacting: __expectBoolean,
    Services: (_: any) => de_ResponseTimeRootCauseServices(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ResponseTimeRootCauseEntity
 */
const de_ResponseTimeRootCauseEntity = (output: any, context: __SerdeContext): ResponseTimeRootCauseEntity => {
  return take(output, {
    Coverage: __limitedParseDouble,
    Name: __expectString,
    Remote: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1ResponseTimeRootCauseEntityPath
 */
const de_ResponseTimeRootCauseEntityPath = (output: any, context: __SerdeContext): ResponseTimeRootCauseEntity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_ResponseTimeRootCause(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResponseTimeRootCauseService
 */
const de_ResponseTimeRootCauseService = (output: any, context: __SerdeContext): ResponseTimeRootCauseService => {
  return take(output, {
    AccountId: __expectString,
    EntityPath: (_: any) => de_ResponseTimeRootCauseEntityPath(_, context),
    Inferred: __expectBoolean,
    Name: __expectString,
    Names: _json,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ResponseTimeRootCauseServices
 */
const de_ResponseTimeRootCauseServices = (output: any, context: __SerdeContext): ResponseTimeRootCauseService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResponseTimeRootCauseService(entry, context);
    });
  return retVal;
};

// de_RootCauseException omitted.

// de_RootCauseExceptions omitted.

/**
 * deserializeAws_restJson1SamplingRule
 */
const de_SamplingRule = (output: any, context: __SerdeContext): SamplingRule => {
  return take(output, {
    Attributes: _json,
    FixedRate: __limitedParseDouble,
    HTTPMethod: __expectString,
    Host: __expectString,
    Priority: __expectInt32,
    ReservoirSize: __expectInt32,
    ResourceARN: __expectString,
    RuleARN: __expectString,
    RuleName: __expectString,
    ServiceName: __expectString,
    ServiceType: __expectString,
    URLPath: __expectString,
    Version: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1SamplingRuleRecord
 */
const de_SamplingRuleRecord = (output: any, context: __SerdeContext): SamplingRuleRecord => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SamplingRule: (_: any) => de_SamplingRule(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SamplingRuleRecordList
 */
const de_SamplingRuleRecordList = (output: any, context: __SerdeContext): SamplingRuleRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SamplingRuleRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SamplingStatisticSummary
 */
const de_SamplingStatisticSummary = (output: any, context: __SerdeContext): SamplingStatisticSummary => {
  return take(output, {
    BorrowCount: __expectInt32,
    RequestCount: __expectInt32,
    RuleName: __expectString,
    SampledCount: __expectInt32,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1SamplingStatisticSummaryList
 */
const de_SamplingStatisticSummaryList = (output: any, context: __SerdeContext): SamplingStatisticSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SamplingStatisticSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SamplingTargetDocument
 */
const de_SamplingTargetDocument = (output: any, context: __SerdeContext): SamplingTargetDocument => {
  return take(output, {
    FixedRate: __limitedParseDouble,
    Interval: __expectInt32,
    ReservoirQuota: __expectInt32,
    ReservoirQuotaTTL: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RuleName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SamplingTargetDocumentList
 */
const de_SamplingTargetDocumentList = (output: any, context: __SerdeContext): SamplingTargetDocument[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SamplingTargetDocument(entry, context);
    });
  return retVal;
};

// de_Segment omitted.

// de_SegmentList omitted.

/**
 * deserializeAws_restJson1Service
 */
const de_Service = (output: any, context: __SerdeContext): Service => {
  return take(output, {
    AccountId: __expectString,
    DurationHistogram: (_: any) => de_Histogram(_, context),
    Edges: (_: any) => de_EdgeList(_, context),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Names: _json,
    ReferenceId: __expectInt32,
    ResponseTimeHistogram: (_: any) => de_Histogram(_, context),
    Root: __expectBoolean,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    SummaryStatistics: (_: any) => de_ServiceStatistics(_, context),
    Type: __expectString,
  }) as any;
};

// de_ServiceId omitted.

// de_ServiceIds omitted.

/**
 * deserializeAws_restJson1ServiceList
 */
const de_ServiceList = (output: any, context: __SerdeContext): Service[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Service(entry, context);
    });
  return retVal;
};

// de_ServiceNames omitted.

/**
 * deserializeAws_restJson1ServiceStatistics
 */
const de_ServiceStatistics = (output: any, context: __SerdeContext): ServiceStatistics => {
  return take(output, {
    ErrorStatistics: _json,
    FaultStatistics: _json,
    OkCount: __expectLong,
    TotalCount: __expectLong,
    TotalResponseTime: __limitedParseDouble,
  }) as any;
};

// de_Tag omitted.

// de_TagList omitted.

/**
 * deserializeAws_restJson1TimeSeriesServiceStatistics
 */
const de_TimeSeriesServiceStatistics = (output: any, context: __SerdeContext): TimeSeriesServiceStatistics => {
  return take(output, {
    EdgeSummaryStatistics: (_: any) => de_EdgeStatistics(_, context),
    ResponseTimeHistogram: (_: any) => de_Histogram(_, context),
    ServiceForecastStatistics: _json,
    ServiceSummaryStatistics: (_: any) => de_ServiceStatistics(_, context),
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1TimeSeriesServiceStatisticsList
 */
const de_TimeSeriesServiceStatisticsList = (output: any, context: __SerdeContext): TimeSeriesServiceStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TimeSeriesServiceStatistics(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Trace
 */
const de_Trace = (output: any, context: __SerdeContext): Trace => {
  return take(output, {
    Duration: __limitedParseDouble,
    Id: __expectString,
    LimitExceeded: __expectBoolean,
    Segments: _json,
  }) as any;
};

// de_TraceAvailabilityZones omitted.

// de_TraceInstanceIds omitted.

/**
 * deserializeAws_restJson1TraceList
 */
const de_TraceList = (output: any, context: __SerdeContext): Trace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Trace(entry, context);
    });
  return retVal;
};

// de_TraceResourceARNs omitted.

/**
 * deserializeAws_restJson1TraceSummary
 */
const de_TraceSummary = (output: any, context: __SerdeContext): TraceSummary => {
  return take(output, {
    Annotations: (_: any) => de_Annotations(_, context),
    AvailabilityZones: _json,
    Duration: __limitedParseDouble,
    EntryPoint: _json,
    ErrorRootCauses: _json,
    FaultRootCauses: _json,
    HasError: __expectBoolean,
    HasFault: __expectBoolean,
    HasThrottle: __expectBoolean,
    Http: _json,
    Id: __expectString,
    InstanceIds: _json,
    IsPartial: __expectBoolean,
    MatchedEventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceARNs: _json,
    ResponseTime: __limitedParseDouble,
    ResponseTimeRootCauses: (_: any) => de_ResponseTimeRootCauses(_, context),
    Revision: __expectInt32,
    ServiceIds: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Users: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1TraceSummaryList
 */
const de_TraceSummaryList = (output: any, context: __SerdeContext): TraceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TraceSummary(entry, context);
    });
  return retVal;
};

// de_TraceUser omitted.

// de_TraceUsers omitted.

// de_UnprocessedStatistics omitted.

// de_UnprocessedStatisticsList omitted.

// de_UnprocessedTraceIdList omitted.

// de_UnprocessedTraceSegment omitted.

// de_UnprocessedTraceSegmentList omitted.

/**
 * deserializeAws_restJson1ValuesWithServiceIds
 */
const de_ValuesWithServiceIds = (output: any, context: __SerdeContext): ValueWithServiceIds[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ValueWithServiceIds(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ValueWithServiceIds
 */
const de_ValueWithServiceIds = (output: any, context: __SerdeContext): ValueWithServiceIds => {
  return take(output, {
    AnnotationValue: (_: any) => de_AnnotationValue(__expectUnion(_), context),
    ServiceIds: _json,
  }) as any;
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
