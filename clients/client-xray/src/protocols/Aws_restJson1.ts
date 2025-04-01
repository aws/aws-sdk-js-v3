// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
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
import {
  CancelTraceRetrievalCommandInput,
  CancelTraceRetrievalCommandOutput,
} from "../commands/CancelTraceRetrievalCommand";
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
import { GetIndexingRulesCommandInput, GetIndexingRulesCommandOutput } from "../commands/GetIndexingRulesCommand";
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
import {
  GetRetrievedTracesGraphCommandInput,
  GetRetrievedTracesGraphCommandOutput,
} from "../commands/GetRetrievedTracesGraphCommand";
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
import {
  GetTraceSegmentDestinationCommandInput,
  GetTraceSegmentDestinationCommandOutput,
} from "../commands/GetTraceSegmentDestinationCommand";
import { GetTraceSummariesCommandInput, GetTraceSummariesCommandOutput } from "../commands/GetTraceSummariesCommand";
import {
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput,
} from "../commands/ListResourcePoliciesCommand";
import {
  ListRetrievedTracesCommandInput,
  ListRetrievedTracesCommandOutput,
} from "../commands/ListRetrievedTracesCommand";
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
import {
  StartTraceRetrievalCommandInput,
  StartTraceRetrievalCommandOutput,
} from "../commands/StartTraceRetrievalCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "../commands/UpdateGroupCommand";
import { UpdateIndexingRuleCommandInput, UpdateIndexingRuleCommandOutput } from "../commands/UpdateIndexingRuleCommand";
import { UpdateSamplingRuleCommandInput, UpdateSamplingRuleCommandOutput } from "../commands/UpdateSamplingRuleCommand";
import {
  UpdateTraceSegmentDestinationCommandInput,
  UpdateTraceSegmentDestinationCommandOutput,
} from "../commands/UpdateTraceSegmentDestinationCommand";
import {
  AnnotationValue,
  BackendConnectionErrors,
  Edge,
  EdgeStatistics,
  HistogramEntry,
  IndexingRule,
  IndexingRuleValue,
  IndexingRuleValueUpdate,
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
  ProbabilisticRuleValue,
  ProbabilisticRuleValueUpdate,
  ResourceNotFoundException,
  ResourcePolicy,
  ResponseTimeRootCause,
  ResponseTimeRootCauseEntity,
  ResponseTimeRootCauseService,
  RetrievedService,
  RetrievedTrace,
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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/Traces");
  let body: any;
  body = JSON.stringify(
    take(input, {
      NextToken: [],
      TraceIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelTraceRetrievalCommand
 */
export const se_CancelTraceRetrievalCommand = async (
  input: CancelTraceRetrievalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CancelTraceRetrieval");
  let body: any;
  body = JSON.stringify(
    take(input, {
      RetrievalToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGroupCommand
 */
export const se_CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateGroup");
  let body: any;
  body = JSON.stringify(
    take(input, {
      FilterExpression: [],
      GroupName: [],
      InsightsConfiguration: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSamplingRuleCommand
 */
export const se_CreateSamplingRuleCommand = async (
  input: CreateSamplingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/CreateSamplingRule");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SamplingRule: (_) => se_SamplingRule(_, context),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGroupCommand
 */
export const se_DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteGroup");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GroupARN: [],
      GroupName: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteResourcePolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      PolicyName: [],
      PolicyRevisionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSamplingRuleCommand
 */
export const se_DeleteSamplingRuleCommand = async (
  input: DeleteSamplingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/DeleteSamplingRule");
  let body: any;
  body = JSON.stringify(
    take(input, {
      RuleARN: [],
      RuleName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEncryptionConfigCommand
 */
export const se_GetEncryptionConfigCommand = async (
  input: GetEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/EncryptionConfig");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGroupCommand
 */
export const se_GetGroupCommand = async (
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetGroup");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GroupARN: [],
      GroupName: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGroupsCommand
 */
export const se_GetGroupsCommand = async (
  input: GetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/Groups");
  let body: any;
  body = JSON.stringify(
    take(input, {
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetIndexingRulesCommand
 */
export const se_GetIndexingRulesCommand = async (
  input: GetIndexingRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetIndexingRules");
  let body: any;
  body = JSON.stringify(
    take(input, {
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInsightCommand
 */
export const se_GetInsightCommand = async (
  input: GetInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/Insight");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InsightId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInsightEventsCommand
 */
export const se_GetInsightEventsCommand = async (
  input: GetInsightEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/InsightEvents");
  let body: any;
  body = JSON.stringify(
    take(input, {
      InsightId: [],
      MaxResults: [],
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInsightImpactGraphCommand
 */
export const se_GetInsightImpactGraphCommand = async (
  input: GetInsightImpactGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/InsightImpactGraph");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => _.getTime() / 1_000,
      InsightId: [],
      NextToken: [],
      StartTime: (_) => _.getTime() / 1_000,
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInsightSummariesCommand
 */
export const se_GetInsightSummariesCommand = async (
  input: GetInsightSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/InsightSummaries");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => _.getTime() / 1_000,
      GroupARN: [],
      GroupName: [],
      MaxResults: [],
      NextToken: [],
      StartTime: (_) => _.getTime() / 1_000,
      States: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRetrievedTracesGraphCommand
 */
export const se_GetRetrievedTracesGraphCommand = async (
  input: GetRetrievedTracesGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetRetrievedTracesGraph");
  let body: any;
  body = JSON.stringify(
    take(input, {
      NextToken: [],
      RetrievalToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSamplingRulesCommand
 */
export const se_GetSamplingRulesCommand = async (
  input: GetSamplingRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/GetSamplingRules");
  let body: any;
  body = JSON.stringify(
    take(input, {
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSamplingStatisticSummariesCommand
 */
export const se_GetSamplingStatisticSummariesCommand = async (
  input: GetSamplingStatisticSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/SamplingStatisticSummaries");
  let body: any;
  body = JSON.stringify(
    take(input, {
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSamplingTargetsCommand
 */
export const se_GetSamplingTargetsCommand = async (
  input: GetSamplingTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/SamplingTargets");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SamplingStatisticsDocuments: (_) => se_SamplingStatisticsDocumentList(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServiceGraphCommand
 */
export const se_GetServiceGraphCommand = async (
  input: GetServiceGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ServiceGraph");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => _.getTime() / 1_000,
      GroupARN: [],
      GroupName: [],
      NextToken: [],
      StartTime: (_) => _.getTime() / 1_000,
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand
 */
export const se_GetTimeSeriesServiceStatisticsCommand = async (
  input: GetTimeSeriesServiceStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/TimeSeriesServiceStatistics");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => _.getTime() / 1_000,
      EntitySelectorExpression: [],
      ForecastStatistics: [],
      GroupARN: [],
      GroupName: [],
      NextToken: [],
      Period: [],
      StartTime: (_) => _.getTime() / 1_000,
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTraceGraphCommand
 */
export const se_GetTraceGraphCommand = async (
  input: GetTraceGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/TraceGraph");
  let body: any;
  body = JSON.stringify(
    take(input, {
      NextToken: [],
      TraceIds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTraceSegmentDestinationCommand
 */
export const se_GetTraceSegmentDestinationCommand = async (
  input: GetTraceSegmentDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/GetTraceSegmentDestination");
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTraceSummariesCommand
 */
export const se_GetTraceSummariesCommand = async (
  input: GetTraceSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/TraceSummaries");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => _.getTime() / 1_000,
      FilterExpression: [],
      NextToken: [],
      Sampling: [],
      SamplingStrategy: (_) => se_SamplingStrategy(_, context),
      StartTime: (_) => _.getTime() / 1_000,
      TimeRangeType: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListResourcePoliciesCommand
 */
export const se_ListResourcePoliciesCommand = async (
  input: ListResourcePoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListResourcePolicies");
  let body: any;
  body = JSON.stringify(
    take(input, {
      NextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRetrievedTracesCommand
 */
export const se_ListRetrievedTracesCommand = async (
  input: ListRetrievedTracesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListRetrievedTraces");
  let body: any;
  body = JSON.stringify(
    take(input, {
      NextToken: [],
      RetrievalToken: [],
      TraceFormat: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ListTagsForResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      NextToken: [],
      ResourceARN: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutEncryptionConfigCommand
 */
export const se_PutEncryptionConfigCommand = async (
  input: PutEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/PutEncryptionConfig");
  let body: any;
  body = JSON.stringify(
    take(input, {
      KeyId: [],
      Type: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/PutResourcePolicy");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BypassPolicyLockoutCheck: [],
      PolicyDocument: [],
      PolicyName: [],
      PolicyRevisionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutTelemetryRecordsCommand
 */
export const se_PutTelemetryRecordsCommand = async (
  input: PutTelemetryRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/TelemetryRecords");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EC2InstanceId: [],
      Hostname: [],
      ResourceARN: [],
      TelemetryRecords: (_) => se_TelemetryRecordList(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutTraceSegmentsCommand
 */
export const se_PutTraceSegmentsCommand = async (
  input: PutTraceSegmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/TraceSegments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      TraceSegmentDocuments: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartTraceRetrievalCommand
 */
export const se_StartTraceRetrievalCommand = async (
  input: StartTraceRetrievalCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/StartTraceRetrieval");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EndTime: (_) => _.getTime() / 1_000,
      StartTime: (_) => _.getTime() / 1_000,
      TraceIds: (_) => _json(_),
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
  b.bp("/TagResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UntagResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceARN: [],
      TagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGroupCommand
 */
export const se_UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateGroup");
  let body: any;
  body = JSON.stringify(
    take(input, {
      FilterExpression: [],
      GroupARN: [],
      GroupName: [],
      InsightsConfiguration: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateIndexingRuleCommand
 */
export const se_UpdateIndexingRuleCommand = async (
  input: UpdateIndexingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateIndexingRule");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      Rule: (_) => se_IndexingRuleValueUpdate(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSamplingRuleCommand
 */
export const se_UpdateSamplingRuleCommand = async (
  input: UpdateSamplingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateSamplingRule");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SamplingRuleUpdate: (_) => se_SamplingRuleUpdate(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTraceSegmentDestinationCommand
 */
export const se_UpdateTraceSegmentDestinationCommand = async (
  input: UpdateTraceSegmentDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UpdateTraceSegmentDestination");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Destination: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchGetTracesCommand
 */
export const de_BatchGetTracesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTracesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CancelTraceRetrievalCommand
 */
export const de_CancelTraceRetrievalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelTraceRetrievalCommandOutput> => {
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
 * deserializeAws_restJson1CreateGroupCommand
 */
export const de_CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateSamplingRuleCommand
 */
export const de_CreateSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DeleteGroupCommand
 */
export const de_DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
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
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSamplingRuleCommand
 */
export const de_DeleteSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetEncryptionConfigCommand
 */
export const de_GetEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetGroupCommand
 */
export const de_GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetGroupsCommand
 */
export const de_GetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetIndexingRulesCommand
 */
export const de_GetIndexingRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIndexingRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IndexingRules: (_) => de_IndexingRuleList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetInsightCommand
 */
export const de_GetInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetInsightEventsCommand
 */
export const de_GetInsightEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetInsightImpactGraphCommand
 */
export const de_GetInsightImpactGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightImpactGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetInsightSummariesCommand
 */
export const de_GetInsightSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetRetrievedTracesGraphCommand
 */
export const de_GetRetrievedTracesGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRetrievedTracesGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RetrievalStatus: __expectString,
    Services: (_) => de_RetrievedServicesList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSamplingRulesCommand
 */
export const de_GetSamplingRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetSamplingStatisticSummariesCommand
 */
export const de_GetSamplingStatisticSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingStatisticSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetSamplingTargetsCommand
 */
export const de_GetSamplingTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetServiceGraphCommand
 */
export const de_GetServiceGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand
 */
export const de_GetTimeSeriesServiceStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimeSeriesServiceStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetTraceGraphCommand
 */
export const de_GetTraceGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetTraceSegmentDestinationCommand
 */
export const de_GetTraceSegmentDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceSegmentDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Destination: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTraceSummariesCommand
 */
export const de_GetTraceSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListResourcePoliciesCommand
 */
export const de_ListResourcePoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcePoliciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListRetrievedTracesCommand
 */
export const de_ListRetrievedTracesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRetrievedTracesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RetrievalStatus: __expectString,
    TraceFormat: __expectString,
    Traces: (_) => de_TraceSpanList(_, context),
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
    NextToken: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutEncryptionConfigCommand
 */
export const de_PutEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    ResourcePolicy: (_) => de_ResourcePolicy(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutTelemetryRecordsCommand
 */
export const de_PutTelemetryRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTelemetryRecordsCommandOutput> => {
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
 * deserializeAws_restJson1PutTraceSegmentsCommand
 */
export const de_PutTraceSegmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTraceSegmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1StartTraceRetrievalCommand
 */
export const de_StartTraceRetrievalCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTraceRetrievalCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RetrievalToken: __expectString,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1UpdateGroupCommand
 */
export const de_UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateIndexingRuleCommand
 */
export const de_UpdateIndexingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIndexingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IndexingRule: (_) => de_IndexingRule(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSamplingRuleCommand
 */
export const de_UpdateSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateTraceSegmentDestinationCommand
 */
export const de_UpdateTraceSegmentDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTraceSegmentDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Destination: __expectString,
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
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.xray#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "RuleLimitExceededException":
    case "com.amazonaws.xray#RuleLimitExceededException":
      throw await de_RuleLimitExceededExceptionRes(parsedOutput, context);
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
    case "TooManyTagsException":
    case "com.amazonaws.xray#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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

/**
 * serializeAws_restJson1IndexingRuleValueUpdate
 */
const se_IndexingRuleValueUpdate = (input: IndexingRuleValueUpdate, context: __SerdeContext): any => {
  return IndexingRuleValueUpdate.visit(input, {
    Probabilistic: (value) => ({ Probabilistic: se_ProbabilisticRuleValueUpdate(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_InsightsConfiguration omitted.

// se_InsightStateList omitted.

/**
 * serializeAws_restJson1ProbabilisticRuleValueUpdate
 */
const se_ProbabilisticRuleValueUpdate = (input: ProbabilisticRuleValueUpdate, context: __SerdeContext): any => {
  return take(input, {
    DesiredSamplingPercentage: __serializeFloat,
  });
};

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
    Timestamp: (_) => _.getTime() / 1_000,
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
    Timestamp: (_) => _.getTime() / 1_000,
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

// se_TraceIdListForRetrieval omitted.

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

// de_GraphLink omitted.

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
 * deserializeAws_restJson1IndexingRule
 */
const de_IndexingRule = (output: any, context: __SerdeContext): IndexingRule => {
  return take(output, {
    ModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Rule: (_: any) => de_IndexingRuleValue(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1IndexingRuleList
 */
const de_IndexingRuleList = (output: any, context: __SerdeContext): IndexingRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IndexingRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IndexingRuleValue
 */
const de_IndexingRuleValue = (output: any, context: __SerdeContext): IndexingRuleValue => {
  if (output.Probabilistic != null) {
    return {
      Probabilistic: de_ProbabilisticRuleValue(output.Probabilistic, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

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

// de_LinksList omitted.

/**
 * deserializeAws_restJson1ProbabilisticRuleValue
 */
const de_ProbabilisticRuleValue = (output: any, context: __SerdeContext): ProbabilisticRuleValue => {
  return take(output, {
    ActualSamplingPercentage: __limitedParseDouble,
    DesiredSamplingPercentage: __limitedParseDouble,
  }) as any;
};

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

/**
 * deserializeAws_restJson1RetrievedService
 */
const de_RetrievedService = (output: any, context: __SerdeContext): RetrievedService => {
  return take(output, {
    Links: _json,
    Service: (_: any) => de_Service(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RetrievedServicesList
 */
const de_RetrievedServicesList = (output: any, context: __SerdeContext): RetrievedService[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RetrievedService(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RetrievedTrace
 */
const de_RetrievedTrace = (output: any, context: __SerdeContext): RetrievedTrace => {
  return take(output, {
    Duration: __limitedParseDouble,
    Id: __expectString,
    Spans: _json,
  }) as any;
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

// de_Span omitted.

// de_SpanList omitted.

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

// de_TraceIdList omitted.

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
 * deserializeAws_restJson1TraceSpanList
 */
const de_TraceSpanList = (output: any, context: __SerdeContext): RetrievedTrace[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RetrievedTrace(entry, context);
    });
  return retVal;
};

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
