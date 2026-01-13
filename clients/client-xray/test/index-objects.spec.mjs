import {
  Alias$,
  AnnotationValue$,
  AnomalousService$,
  AvailabilityZoneDetail$,
  BackendConnectionErrors$,
  BatchGetTraces$,
  BatchGetTracesCommand,
  BatchGetTracesRequest$,
  BatchGetTracesResult$,
  CancelTraceRetrieval$,
  CancelTraceRetrievalCommand,
  CancelTraceRetrievalRequest$,
  CancelTraceRetrievalResult$,
  CreateGroup$,
  CreateGroupCommand,
  CreateGroupRequest$,
  CreateGroupResult$,
  CreateSamplingRule$,
  CreateSamplingRuleCommand,
  CreateSamplingRuleRequest$,
  CreateSamplingRuleResult$,
  DeleteGroup$,
  DeleteGroupCommand,
  DeleteGroupRequest$,
  DeleteGroupResult$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResult$,
  DeleteSamplingRule$,
  DeleteSamplingRuleCommand,
  DeleteSamplingRuleRequest$,
  DeleteSamplingRuleResult$,
  Edge$,
  EdgeStatistics$,
  EncryptionConfig$,
  EncryptionStatus,
  EncryptionType,
  ErrorRootCause$,
  ErrorRootCauseEntity$,
  ErrorRootCauseService$,
  ErrorStatistics$,
  FaultRootCause$,
  FaultRootCauseEntity$,
  FaultRootCauseService$,
  FaultStatistics$,
  ForecastStatistics$,
  GetEncryptionConfig$,
  GetEncryptionConfigCommand,
  GetEncryptionConfigRequest$,
  GetEncryptionConfigResult$,
  GetGroup$,
  GetGroupCommand,
  GetGroupRequest$,
  GetGroupResult$,
  GetGroups$,
  GetGroupsCommand,
  GetGroupsRequest$,
  GetGroupsResult$,
  GetIndexingRules$,
  GetIndexingRulesCommand,
  GetIndexingRulesRequest$,
  GetIndexingRulesResult$,
  GetInsight$,
  GetInsightCommand,
  GetInsightEvents$,
  GetInsightEventsCommand,
  GetInsightEventsRequest$,
  GetInsightEventsResult$,
  GetInsightImpactGraph$,
  GetInsightImpactGraphCommand,
  GetInsightImpactGraphRequest$,
  GetInsightImpactGraphResult$,
  GetInsightRequest$,
  GetInsightResult$,
  GetInsightSummaries$,
  GetInsightSummariesCommand,
  GetInsightSummariesRequest$,
  GetInsightSummariesResult$,
  GetRetrievedTracesGraph$,
  GetRetrievedTracesGraphCommand,
  GetRetrievedTracesGraphRequest$,
  GetRetrievedTracesGraphResult$,
  GetSamplingRules$,
  GetSamplingRulesCommand,
  GetSamplingRulesRequest$,
  GetSamplingRulesResult$,
  GetSamplingStatisticSummaries$,
  GetSamplingStatisticSummariesCommand,
  GetSamplingStatisticSummariesRequest$,
  GetSamplingStatisticSummariesResult$,
  GetSamplingTargets$,
  GetSamplingTargetsCommand,
  GetSamplingTargetsRequest$,
  GetSamplingTargetsResult$,
  GetServiceGraph$,
  GetServiceGraphCommand,
  GetServiceGraphRequest$,
  GetServiceGraphResult$,
  GetTimeSeriesServiceStatistics$,
  GetTimeSeriesServiceStatisticsCommand,
  GetTimeSeriesServiceStatisticsRequest$,
  GetTimeSeriesServiceStatisticsResult$,
  GetTraceGraph$,
  GetTraceGraphCommand,
  GetTraceGraphRequest$,
  GetTraceGraphResult$,
  GetTraceSegmentDestination$,
  GetTraceSegmentDestinationCommand,
  GetTraceSegmentDestinationRequest$,
  GetTraceSegmentDestinationResult$,
  GetTraceSummaries$,
  GetTraceSummariesCommand,
  GetTraceSummariesRequest$,
  GetTraceSummariesResult$,
  GraphLink$,
  Group$,
  GroupSummary$,
  HistogramEntry$,
  Http$,
  IndexingRule$,
  IndexingRuleValue$,
  IndexingRuleValueUpdate$,
  Insight$,
  InsightCategory,
  InsightEvent$,
  InsightImpactGraphEdge$,
  InsightImpactGraphService$,
  InsightsConfiguration$,
  InsightState,
  InsightSummary$,
  InstanceIdDetail$,
  InvalidPolicyRevisionIdException,
  InvalidPolicyRevisionIdException$,
  InvalidRequestException,
  InvalidRequestException$,
  ListResourcePolicies$,
  ListResourcePoliciesCommand,
  ListResourcePoliciesRequest$,
  ListResourcePoliciesResult$,
  ListRetrievedTraces$,
  ListRetrievedTracesCommand,
  ListRetrievedTracesRequest$,
  ListRetrievedTracesResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LockoutPreventionException,
  LockoutPreventionException$,
  MalformedPolicyDocumentException,
  MalformedPolicyDocumentException$,
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
  PolicyCountLimitExceededException,
  PolicyCountLimitExceededException$,
  PolicySizeLimitExceededException,
  PolicySizeLimitExceededException$,
  ProbabilisticRuleValue$,
  ProbabilisticRuleValueUpdate$,
  PutEncryptionConfig$,
  PutEncryptionConfigCommand,
  PutEncryptionConfigRequest$,
  PutEncryptionConfigResult$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResult$,
  PutTelemetryRecords$,
  PutTelemetryRecordsCommand,
  PutTelemetryRecordsRequest$,
  PutTelemetryRecordsResult$,
  PutTraceSegments$,
  PutTraceSegmentsCommand,
  PutTraceSegmentsRequest$,
  PutTraceSegmentsResult$,
  RequestImpactStatistics$,
  ResourceARNDetail$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcePolicy$,
  ResponseTimeRootCause$,
  ResponseTimeRootCauseEntity$,
  ResponseTimeRootCauseService$,
  RetrievalStatus,
  RetrievedService$,
  RetrievedTrace$,
  RootCauseException$,
  RuleLimitExceededException,
  RuleLimitExceededException$,
  SamplingBoost$,
  SamplingBoostStatisticsDocument$,
  SamplingRateBoost$,
  SamplingRule$,
  SamplingRuleRecord$,
  SamplingRuleUpdate$,
  SamplingStatisticsDocument$,
  SamplingStatisticSummary$,
  SamplingStrategy$,
  SamplingStrategyName,
  SamplingTargetDocument$,
  Segment$,
  Service$,
  ServiceId$,
  ServiceStatistics$,
  Span$,
  StartTraceRetrieval$,
  StartTraceRetrievalCommand,
  StartTraceRetrievalRequest$,
  StartTraceRetrievalResult$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TelemetryRecord$,
  ThrottledException,
  ThrottledException$,
  TimeRangeType,
  TimeSeriesServiceStatistics$,
  TooManyTagsException,
  TooManyTagsException$,
  Trace$,
  TraceFormatType,
  TraceSegmentDestination,
  TraceSegmentDestinationStatus,
  TraceSummary$,
  TraceUser$,
  UnprocessedStatistics$,
  UnprocessedTraceSegment$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateGroup$,
  UpdateGroupCommand,
  UpdateGroupRequest$,
  UpdateGroupResult$,
  UpdateIndexingRule$,
  UpdateIndexingRuleCommand,
  UpdateIndexingRuleRequest$,
  UpdateIndexingRuleResult$,
  UpdateSamplingRule$,
  UpdateSamplingRuleCommand,
  UpdateSamplingRuleRequest$,
  UpdateSamplingRuleResult$,
  UpdateTraceSegmentDestination$,
  UpdateTraceSegmentDestinationCommand,
  UpdateTraceSegmentDestinationRequest$,
  UpdateTraceSegmentDestinationResult$,
  ValueWithServiceIds$,
  XRay,
  XRayClient,
  XRayServiceException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof XRayClient === "function");
assert(typeof XRay === "function");
// commands
assert(typeof BatchGetTracesCommand === "function");
assert(typeof BatchGetTraces$ === "object");
assert(typeof CancelTraceRetrievalCommand === "function");
assert(typeof CancelTraceRetrieval$ === "object");
assert(typeof CreateGroupCommand === "function");
assert(typeof CreateGroup$ === "object");
assert(typeof CreateSamplingRuleCommand === "function");
assert(typeof CreateSamplingRule$ === "object");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteGroup$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteSamplingRuleCommand === "function");
assert(typeof DeleteSamplingRule$ === "object");
assert(typeof GetEncryptionConfigCommand === "function");
assert(typeof GetEncryptionConfig$ === "object");
assert(typeof GetGroupCommand === "function");
assert(typeof GetGroup$ === "object");
assert(typeof GetGroupsCommand === "function");
assert(typeof GetGroups$ === "object");
assert(typeof GetIndexingRulesCommand === "function");
assert(typeof GetIndexingRules$ === "object");
assert(typeof GetInsightCommand === "function");
assert(typeof GetInsight$ === "object");
assert(typeof GetInsightEventsCommand === "function");
assert(typeof GetInsightEvents$ === "object");
assert(typeof GetInsightImpactGraphCommand === "function");
assert(typeof GetInsightImpactGraph$ === "object");
assert(typeof GetInsightSummariesCommand === "function");
assert(typeof GetInsightSummaries$ === "object");
assert(typeof GetRetrievedTracesGraphCommand === "function");
assert(typeof GetRetrievedTracesGraph$ === "object");
assert(typeof GetSamplingRulesCommand === "function");
assert(typeof GetSamplingRules$ === "object");
assert(typeof GetSamplingStatisticSummariesCommand === "function");
assert(typeof GetSamplingStatisticSummaries$ === "object");
assert(typeof GetSamplingTargetsCommand === "function");
assert(typeof GetSamplingTargets$ === "object");
assert(typeof GetServiceGraphCommand === "function");
assert(typeof GetServiceGraph$ === "object");
assert(typeof GetTimeSeriesServiceStatisticsCommand === "function");
assert(typeof GetTimeSeriesServiceStatistics$ === "object");
assert(typeof GetTraceGraphCommand === "function");
assert(typeof GetTraceGraph$ === "object");
assert(typeof GetTraceSegmentDestinationCommand === "function");
assert(typeof GetTraceSegmentDestination$ === "object");
assert(typeof GetTraceSummariesCommand === "function");
assert(typeof GetTraceSummaries$ === "object");
assert(typeof ListResourcePoliciesCommand === "function");
assert(typeof ListResourcePolicies$ === "object");
assert(typeof ListRetrievedTracesCommand === "function");
assert(typeof ListRetrievedTraces$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutEncryptionConfigCommand === "function");
assert(typeof PutEncryptionConfig$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof PutTelemetryRecordsCommand === "function");
assert(typeof PutTelemetryRecords$ === "object");
assert(typeof PutTraceSegmentsCommand === "function");
assert(typeof PutTraceSegments$ === "object");
assert(typeof StartTraceRetrievalCommand === "function");
assert(typeof StartTraceRetrieval$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateGroupCommand === "function");
assert(typeof UpdateGroup$ === "object");
assert(typeof UpdateIndexingRuleCommand === "function");
assert(typeof UpdateIndexingRule$ === "object");
assert(typeof UpdateSamplingRuleCommand === "function");
assert(typeof UpdateSamplingRule$ === "object");
assert(typeof UpdateTraceSegmentDestinationCommand === "function");
assert(typeof UpdateTraceSegmentDestination$ === "object");
// structural schemas
assert(typeof Alias$ === "object");
assert(typeof AnnotationValue$ === "object");
assert(typeof AnomalousService$ === "object");
assert(typeof AvailabilityZoneDetail$ === "object");
assert(typeof BackendConnectionErrors$ === "object");
assert(typeof BatchGetTracesRequest$ === "object");
assert(typeof BatchGetTracesResult$ === "object");
assert(typeof CancelTraceRetrievalRequest$ === "object");
assert(typeof CancelTraceRetrievalResult$ === "object");
assert(typeof CreateGroupRequest$ === "object");
assert(typeof CreateGroupResult$ === "object");
assert(typeof CreateSamplingRuleRequest$ === "object");
assert(typeof CreateSamplingRuleResult$ === "object");
assert(typeof DeleteGroupRequest$ === "object");
assert(typeof DeleteGroupResult$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResult$ === "object");
assert(typeof DeleteSamplingRuleRequest$ === "object");
assert(typeof DeleteSamplingRuleResult$ === "object");
assert(typeof Edge$ === "object");
assert(typeof EdgeStatistics$ === "object");
assert(typeof EncryptionConfig$ === "object");
assert(typeof ErrorRootCause$ === "object");
assert(typeof ErrorRootCauseEntity$ === "object");
assert(typeof ErrorRootCauseService$ === "object");
assert(typeof ErrorStatistics$ === "object");
assert(typeof FaultRootCause$ === "object");
assert(typeof FaultRootCauseEntity$ === "object");
assert(typeof FaultRootCauseService$ === "object");
assert(typeof FaultStatistics$ === "object");
assert(typeof ForecastStatistics$ === "object");
assert(typeof GetEncryptionConfigRequest$ === "object");
assert(typeof GetEncryptionConfigResult$ === "object");
assert(typeof GetGroupRequest$ === "object");
assert(typeof GetGroupResult$ === "object");
assert(typeof GetGroupsRequest$ === "object");
assert(typeof GetGroupsResult$ === "object");
assert(typeof GetIndexingRulesRequest$ === "object");
assert(typeof GetIndexingRulesResult$ === "object");
assert(typeof GetInsightEventsRequest$ === "object");
assert(typeof GetInsightEventsResult$ === "object");
assert(typeof GetInsightImpactGraphRequest$ === "object");
assert(typeof GetInsightImpactGraphResult$ === "object");
assert(typeof GetInsightRequest$ === "object");
assert(typeof GetInsightResult$ === "object");
assert(typeof GetInsightSummariesRequest$ === "object");
assert(typeof GetInsightSummariesResult$ === "object");
assert(typeof GetRetrievedTracesGraphRequest$ === "object");
assert(typeof GetRetrievedTracesGraphResult$ === "object");
assert(typeof GetSamplingRulesRequest$ === "object");
assert(typeof GetSamplingRulesResult$ === "object");
assert(typeof GetSamplingStatisticSummariesRequest$ === "object");
assert(typeof GetSamplingStatisticSummariesResult$ === "object");
assert(typeof GetSamplingTargetsRequest$ === "object");
assert(typeof GetSamplingTargetsResult$ === "object");
assert(typeof GetServiceGraphRequest$ === "object");
assert(typeof GetServiceGraphResult$ === "object");
assert(typeof GetTimeSeriesServiceStatisticsRequest$ === "object");
assert(typeof GetTimeSeriesServiceStatisticsResult$ === "object");
assert(typeof GetTraceGraphRequest$ === "object");
assert(typeof GetTraceGraphResult$ === "object");
assert(typeof GetTraceSegmentDestinationRequest$ === "object");
assert(typeof GetTraceSegmentDestinationResult$ === "object");
assert(typeof GetTraceSummariesRequest$ === "object");
assert(typeof GetTraceSummariesResult$ === "object");
assert(typeof GraphLink$ === "object");
assert(typeof Group$ === "object");
assert(typeof GroupSummary$ === "object");
assert(typeof HistogramEntry$ === "object");
assert(typeof Http$ === "object");
assert(typeof IndexingRule$ === "object");
assert(typeof IndexingRuleValue$ === "object");
assert(typeof IndexingRuleValueUpdate$ === "object");
assert(typeof Insight$ === "object");
assert(typeof InsightEvent$ === "object");
assert(typeof InsightImpactGraphEdge$ === "object");
assert(typeof InsightImpactGraphService$ === "object");
assert(typeof InsightsConfiguration$ === "object");
assert(typeof InsightSummary$ === "object");
assert(typeof InstanceIdDetail$ === "object");
assert(typeof ListResourcePoliciesRequest$ === "object");
assert(typeof ListResourcePoliciesResult$ === "object");
assert(typeof ListRetrievedTracesRequest$ === "object");
assert(typeof ListRetrievedTracesResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ProbabilisticRuleValue$ === "object");
assert(typeof ProbabilisticRuleValueUpdate$ === "object");
assert(typeof PutEncryptionConfigRequest$ === "object");
assert(typeof PutEncryptionConfigResult$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResult$ === "object");
assert(typeof PutTelemetryRecordsRequest$ === "object");
assert(typeof PutTelemetryRecordsResult$ === "object");
assert(typeof PutTraceSegmentsRequest$ === "object");
assert(typeof PutTraceSegmentsResult$ === "object");
assert(typeof RequestImpactStatistics$ === "object");
assert(typeof ResourceARNDetail$ === "object");
assert(typeof ResourcePolicy$ === "object");
assert(typeof ResponseTimeRootCause$ === "object");
assert(typeof ResponseTimeRootCauseEntity$ === "object");
assert(typeof ResponseTimeRootCauseService$ === "object");
assert(typeof RetrievedService$ === "object");
assert(typeof RetrievedTrace$ === "object");
assert(typeof RootCauseException$ === "object");
assert(typeof SamplingBoost$ === "object");
assert(typeof SamplingBoostStatisticsDocument$ === "object");
assert(typeof SamplingRateBoost$ === "object");
assert(typeof SamplingRule$ === "object");
assert(typeof SamplingRuleRecord$ === "object");
assert(typeof SamplingRuleUpdate$ === "object");
assert(typeof SamplingStatisticsDocument$ === "object");
assert(typeof SamplingStatisticSummary$ === "object");
assert(typeof SamplingStrategy$ === "object");
assert(typeof SamplingTargetDocument$ === "object");
assert(typeof Segment$ === "object");
assert(typeof Service$ === "object");
assert(typeof ServiceId$ === "object");
assert(typeof ServiceStatistics$ === "object");
assert(typeof Span$ === "object");
assert(typeof StartTraceRetrievalRequest$ === "object");
assert(typeof StartTraceRetrievalResult$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TelemetryRecord$ === "object");
assert(typeof TimeSeriesServiceStatistics$ === "object");
assert(typeof Trace$ === "object");
assert(typeof TraceSummary$ === "object");
assert(typeof TraceUser$ === "object");
assert(typeof UnprocessedStatistics$ === "object");
assert(typeof UnprocessedTraceSegment$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateGroupRequest$ === "object");
assert(typeof UpdateGroupResult$ === "object");
assert(typeof UpdateIndexingRuleRequest$ === "object");
assert(typeof UpdateIndexingRuleResult$ === "object");
assert(typeof UpdateSamplingRuleRequest$ === "object");
assert(typeof UpdateSamplingRuleResult$ === "object");
assert(typeof UpdateTraceSegmentDestinationRequest$ === "object");
assert(typeof UpdateTraceSegmentDestinationResult$ === "object");
assert(typeof ValueWithServiceIds$ === "object");
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
assert(InvalidPolicyRevisionIdException.prototype instanceof XRayServiceException);
assert(typeof InvalidPolicyRevisionIdException$ === "object");
assert(InvalidRequestException.prototype instanceof XRayServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(LockoutPreventionException.prototype instanceof XRayServiceException);
assert(typeof LockoutPreventionException$ === "object");
assert(MalformedPolicyDocumentException.prototype instanceof XRayServiceException);
assert(typeof MalformedPolicyDocumentException$ === "object");
assert(PolicyCountLimitExceededException.prototype instanceof XRayServiceException);
assert(typeof PolicyCountLimitExceededException$ === "object");
assert(PolicySizeLimitExceededException.prototype instanceof XRayServiceException);
assert(typeof PolicySizeLimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof XRayServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(RuleLimitExceededException.prototype instanceof XRayServiceException);
assert(typeof RuleLimitExceededException$ === "object");
assert(ThrottledException.prototype instanceof XRayServiceException);
assert(typeof ThrottledException$ === "object");
assert(TooManyTagsException.prototype instanceof XRayServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(XRayServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateBatchGetTraces === "function");
assert(typeof paginateGetGroups === "function");
assert(typeof paginateGetInsightEvents === "function");
assert(typeof paginateGetInsightSummaries === "function");
assert(typeof paginateGetSamplingRules === "function");
assert(typeof paginateGetSamplingStatisticSummaries === "function");
assert(typeof paginateGetServiceGraph === "function");
assert(typeof paginateGetTimeSeriesServiceStatistics === "function");
assert(typeof paginateGetTraceGraph === "function");
assert(typeof paginateGetTraceSummaries === "function");
assert(typeof paginateListResourcePolicies === "function");
assert(typeof paginateListTagsForResource === "function");
console.log(`XRay index test passed.`);
