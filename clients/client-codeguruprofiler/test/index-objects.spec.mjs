import {
  ActionGroup,
  AddNotificationChannelsCommand,
  AgentParameterField,
  AggregationPeriod,
  BatchGetFrameMetricDataCommand,
  CodeGuruProfiler,
  CodeGuruProfilerClient,
  CodeGuruProfilerServiceException,
  ComputePlatform,
  ConfigureAgentCommand,
  ConflictException,
  CreateProfilingGroupCommand,
  DeleteProfilingGroupCommand,
  DescribeProfilingGroupCommand,
  EventPublisher,
  FeedbackType,
  GetFindingsReportAccountSummaryCommand,
  GetNotificationConfigurationCommand,
  GetPolicyCommand,
  GetProfileCommand,
  GetRecommendationsCommand,
  InternalServerException,
  ListFindingsReportsCommand,
  ListProfileTimesCommand,
  ListProfilingGroupsCommand,
  ListTagsForResourceCommand,
  MetadataField,
  MetricType,
  OrderBy,
  PostAgentProfileCommand,
  PutPermissionCommand,
  RemoveNotificationChannelCommand,
  RemovePermissionCommand,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SubmitFeedbackCommand,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateProfilingGroupCommand,
  ValidationException,
  paginateGetFindingsReportAccountSummary,
  paginateListFindingsReports,
  paginateListProfileTimes,
  paginateListProfilingGroups,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodeGuruProfilerClient === "function");
assert(typeof CodeGuruProfiler === "function");
// commands
assert(typeof AddNotificationChannelsCommand === "function");
assert(typeof BatchGetFrameMetricDataCommand === "function");
assert(typeof ConfigureAgentCommand === "function");
assert(typeof CreateProfilingGroupCommand === "function");
assert(typeof DeleteProfilingGroupCommand === "function");
assert(typeof DescribeProfilingGroupCommand === "function");
assert(typeof GetFindingsReportAccountSummaryCommand === "function");
assert(typeof GetNotificationConfigurationCommand === "function");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetProfileCommand === "function");
assert(typeof GetRecommendationsCommand === "function");
assert(typeof ListFindingsReportsCommand === "function");
assert(typeof ListProfileTimesCommand === "function");
assert(typeof ListProfilingGroupsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PostAgentProfileCommand === "function");
assert(typeof PutPermissionCommand === "function");
assert(typeof RemoveNotificationChannelCommand === "function");
assert(typeof RemovePermissionCommand === "function");
assert(typeof SubmitFeedbackCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateProfilingGroupCommand === "function");
// enums
assert(typeof ActionGroup === "object");
assert(typeof AgentParameterField === "object");
assert(typeof AggregationPeriod === "object");
assert(typeof ComputePlatform === "object");
assert(typeof EventPublisher === "object");
assert(typeof FeedbackType === "object");
assert(typeof MetadataField === "object");
assert(typeof MetricType === "object");
assert(typeof OrderBy === "object");
// errors
assert(ConflictException.prototype instanceof CodeGuruProfilerServiceException);
assert(InternalServerException.prototype instanceof CodeGuruProfilerServiceException);
assert(ResourceNotFoundException.prototype instanceof CodeGuruProfilerServiceException);
assert(ServiceQuotaExceededException.prototype instanceof CodeGuruProfilerServiceException);
assert(ThrottlingException.prototype instanceof CodeGuruProfilerServiceException);
assert(ValidationException.prototype instanceof CodeGuruProfilerServiceException);
assert(CodeGuruProfilerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetFindingsReportAccountSummary === "function");
assert(typeof paginateListFindingsReports === "function");
assert(typeof paginateListProfileTimes === "function");
assert(typeof paginateListProfilingGroups === "function");
console.log(`CodeGuruProfiler index test passed.`);
