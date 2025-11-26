import {
  BatchGetTracesCommand,
  CancelTraceRetrievalCommand,
  CreateGroupCommand,
  CreateSamplingRuleCommand,
  DeleteGroupCommand,
  DeleteResourcePolicyCommand,
  DeleteSamplingRuleCommand,
  EncryptionStatus,
  EncryptionType,
  GetEncryptionConfigCommand,
  GetGroupCommand,
  GetGroupsCommand,
  GetIndexingRulesCommand,
  GetInsightCommand,
  GetInsightEventsCommand,
  GetInsightImpactGraphCommand,
  GetInsightSummariesCommand,
  GetRetrievedTracesGraphCommand,
  GetSamplingRulesCommand,
  GetSamplingStatisticSummariesCommand,
  GetSamplingTargetsCommand,
  GetServiceGraphCommand,
  GetTimeSeriesServiceStatisticsCommand,
  GetTraceGraphCommand,
  GetTraceSegmentDestinationCommand,
  GetTraceSummariesCommand,
  InsightCategory,
  InsightState,
  ListResourcePoliciesCommand,
  ListRetrievedTracesCommand,
  ListTagsForResourceCommand,
  PutEncryptionConfigCommand,
  PutResourcePolicyCommand,
  PutTelemetryRecordsCommand,
  PutTraceSegmentsCommand,
  RetrievalStatus,
  SamplingStrategyName,
  StartTraceRetrievalCommand,
  TagResourceCommand,
  TimeRangeType,
  TraceFormatType,
  TraceSegmentDestination,
  TraceSegmentDestinationStatus,
  UntagResourceCommand,
  UpdateGroupCommand,
  UpdateIndexingRuleCommand,
  UpdateSamplingRuleCommand,
  UpdateTraceSegmentDestinationCommand,
  XRay,
  XRayClient,
  XRayServiceException,
  paginateBatchGetTraces,
  paginateGetGroups,
  paginateGetInsightEvents,
  paginateGetInsightSummaries,
  paginateGetSamplingRules,
  paginateGetSamplingStatisticSummaries,
  paginateGetServiceGraph,
  paginateGetTimeSeriesServiceStatistics,
  paginateGetTraceGraph,
  paginateGetTraceSummaries,
  paginateListResourcePolicies,
  paginateListTagsForResource,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof XRayClient === "function")
assert(typeof XRay === "function")
// commands
assert(typeof BatchGetTracesCommand === "function")
assert(typeof CancelTraceRetrievalCommand === "function")
assert(typeof CreateGroupCommand === "function")
assert(typeof CreateSamplingRuleCommand === "function")
assert(typeof DeleteGroupCommand === "function")
assert(typeof DeleteResourcePolicyCommand === "function")
assert(typeof DeleteSamplingRuleCommand === "function")
assert(typeof GetEncryptionConfigCommand === "function")
assert(typeof GetGroupCommand === "function")
assert(typeof GetGroupsCommand === "function")
assert(typeof GetIndexingRulesCommand === "function")
assert(typeof GetInsightCommand === "function")
assert(typeof GetInsightEventsCommand === "function")
assert(typeof GetInsightImpactGraphCommand === "function")
assert(typeof GetInsightSummariesCommand === "function")
assert(typeof GetRetrievedTracesGraphCommand === "function")
assert(typeof GetSamplingRulesCommand === "function")
assert(typeof GetSamplingStatisticSummariesCommand === "function")
assert(typeof GetSamplingTargetsCommand === "function")
assert(typeof GetServiceGraphCommand === "function")
assert(typeof GetTimeSeriesServiceStatisticsCommand === "function")
assert(typeof GetTraceGraphCommand === "function")
assert(typeof GetTraceSegmentDestinationCommand === "function")
assert(typeof GetTraceSummariesCommand === "function")
assert(typeof ListResourcePoliciesCommand === "function")
assert(typeof ListRetrievedTracesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutEncryptionConfigCommand === "function")
assert(typeof PutResourcePolicyCommand === "function")
assert(typeof PutTelemetryRecordsCommand === "function")
assert(typeof PutTraceSegmentsCommand === "function")
assert(typeof StartTraceRetrievalCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateGroupCommand === "function")
assert(typeof UpdateIndexingRuleCommand === "function")
assert(typeof UpdateSamplingRuleCommand === "function")
assert(typeof UpdateTraceSegmentDestinationCommand === "function")
// enums
assert(typeof EncryptionStatus === "object");
assert(typeof EncryptionType === "object");
assert(typeof InsightCategory === "object");
assert(typeof InsightState === "object");
assert(typeof RetrievalStatus === "object");
assert(typeof SamplingStrategyName === "object");
assert(typeof TimeRangeType === "object");
assert(typeof TraceFormatType === "object");
assert(typeof TraceSegmentDestination === "object");
assert(typeof TraceSegmentDestinationStatus === "object");
// errors
assert(XRayServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateBatchGetTraces === "function")
assert(typeof paginateGetGroups === "function")
assert(typeof paginateGetInsightEvents === "function")
assert(typeof paginateGetInsightSummaries === "function")
assert(typeof paginateGetSamplingRules === "function")
assert(typeof paginateGetSamplingStatisticSummaries === "function")
assert(typeof paginateGetServiceGraph === "function")
assert(typeof paginateGetTimeSeriesServiceStatistics === "function")
assert(typeof paginateGetTraceGraph === "function")
assert(typeof paginateGetTraceSummaries === "function")
assert(typeof paginateListResourcePolicies === "function")
assert(typeof paginateListTagsForResource === "function")
console.log(`XRay index test passed.`);
