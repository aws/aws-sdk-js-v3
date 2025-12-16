import {
  ActionGroup,
  AddNotificationChannels$,
  AddNotificationChannelsCommand,
  AddNotificationChannelsRequest$,
  AddNotificationChannelsResponse$,
  AgentConfiguration$,
  AgentOrchestrationConfig$,
  AgentParameterField,
  AggregatedProfileTime$,
  AggregationPeriod,
  Anomaly$,
  AnomalyInstance$,
  BatchGetFrameMetricData$,
  BatchGetFrameMetricDataCommand,
  BatchGetFrameMetricDataRequest$,
  BatchGetFrameMetricDataResponse$,
  Channel$,
  CodeGuruProfiler,
  CodeGuruProfilerClient,
  CodeGuruProfilerServiceException,
  ComputePlatform,
  ConfigureAgent$,
  ConfigureAgentCommand,
  ConfigureAgentRequest$,
  ConfigureAgentResponse$,
  ConflictException,
  ConflictException$,
  CreateProfilingGroup$,
  CreateProfilingGroupCommand,
  CreateProfilingGroupRequest$,
  CreateProfilingGroupResponse$,
  DeleteProfilingGroup$,
  DeleteProfilingGroupCommand,
  DeleteProfilingGroupRequest$,
  DeleteProfilingGroupResponse$,
  DescribeProfilingGroup$,
  DescribeProfilingGroupCommand,
  DescribeProfilingGroupRequest$,
  DescribeProfilingGroupResponse$,
  EventPublisher,
  FeedbackType,
  FindingsReportSummary$,
  FrameMetric$,
  FrameMetricDatum$,
  GetFindingsReportAccountSummary$,
  GetFindingsReportAccountSummaryCommand,
  GetFindingsReportAccountSummaryRequest$,
  GetFindingsReportAccountSummaryResponse$,
  GetNotificationConfiguration$,
  GetNotificationConfigurationCommand,
  GetNotificationConfigurationRequest$,
  GetNotificationConfigurationResponse$,
  GetPolicy$,
  GetPolicyCommand,
  GetPolicyRequest$,
  GetPolicyResponse$,
  GetProfile$,
  GetProfileCommand,
  GetProfileRequest$,
  GetProfileResponse$,
  GetRecommendations$,
  GetRecommendationsCommand,
  GetRecommendationsRequest$,
  GetRecommendationsResponse$,
  InternalServerException,
  InternalServerException$,
  ListFindingsReports$,
  ListFindingsReportsCommand,
  ListFindingsReportsRequest$,
  ListFindingsReportsResponse$,
  ListProfileTimes$,
  ListProfileTimesCommand,
  ListProfileTimesRequest$,
  ListProfileTimesResponse$,
  ListProfilingGroups$,
  ListProfilingGroupsCommand,
  ListProfilingGroupsRequest$,
  ListProfilingGroupsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Match$,
  MetadataField,
  Metric$,
  MetricType,
  NotificationConfiguration$,
  OrderBy,
  Pattern$,
  PostAgentProfile$,
  PostAgentProfileCommand,
  PostAgentProfileRequest$,
  PostAgentProfileResponse$,
  ProfileTime$,
  ProfilingGroupDescription$,
  ProfilingStatus$,
  PutPermission$,
  PutPermissionCommand,
  PutPermissionRequest$,
  PutPermissionResponse$,
  Recommendation$,
  RemoveNotificationChannel$,
  RemoveNotificationChannelCommand,
  RemoveNotificationChannelRequest$,
  RemoveNotificationChannelResponse$,
  RemovePermission$,
  RemovePermissionCommand,
  RemovePermissionRequest$,
  RemovePermissionResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SubmitFeedback$,
  SubmitFeedbackCommand,
  SubmitFeedbackRequest$,
  SubmitFeedbackResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TimestampStructure$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateProfilingGroup$,
  UpdateProfilingGroupCommand,
  UpdateProfilingGroupRequest$,
  UpdateProfilingGroupResponse$,
  UserFeedback$,
  ValidationException,
  ValidationException$,
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
assert(typeof AddNotificationChannels$ === "object");
assert(typeof BatchGetFrameMetricDataCommand === "function");
assert(typeof BatchGetFrameMetricData$ === "object");
assert(typeof ConfigureAgentCommand === "function");
assert(typeof ConfigureAgent$ === "object");
assert(typeof CreateProfilingGroupCommand === "function");
assert(typeof CreateProfilingGroup$ === "object");
assert(typeof DeleteProfilingGroupCommand === "function");
assert(typeof DeleteProfilingGroup$ === "object");
assert(typeof DescribeProfilingGroupCommand === "function");
assert(typeof DescribeProfilingGroup$ === "object");
assert(typeof GetFindingsReportAccountSummaryCommand === "function");
assert(typeof GetFindingsReportAccountSummary$ === "object");
assert(typeof GetNotificationConfigurationCommand === "function");
assert(typeof GetNotificationConfiguration$ === "object");
assert(typeof GetPolicyCommand === "function");
assert(typeof GetPolicy$ === "object");
assert(typeof GetProfileCommand === "function");
assert(typeof GetProfile$ === "object");
assert(typeof GetRecommendationsCommand === "function");
assert(typeof GetRecommendations$ === "object");
assert(typeof ListFindingsReportsCommand === "function");
assert(typeof ListFindingsReports$ === "object");
assert(typeof ListProfileTimesCommand === "function");
assert(typeof ListProfileTimes$ === "object");
assert(typeof ListProfilingGroupsCommand === "function");
assert(typeof ListProfilingGroups$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PostAgentProfileCommand === "function");
assert(typeof PostAgentProfile$ === "object");
assert(typeof PutPermissionCommand === "function");
assert(typeof PutPermission$ === "object");
assert(typeof RemoveNotificationChannelCommand === "function");
assert(typeof RemoveNotificationChannel$ === "object");
assert(typeof RemovePermissionCommand === "function");
assert(typeof RemovePermission$ === "object");
assert(typeof SubmitFeedbackCommand === "function");
assert(typeof SubmitFeedback$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateProfilingGroupCommand === "function");
assert(typeof UpdateProfilingGroup$ === "object");
// structural schemas
assert(typeof AddNotificationChannelsRequest$ === "object");
assert(typeof AddNotificationChannelsResponse$ === "object");
assert(typeof AgentConfiguration$ === "object");
assert(typeof AgentOrchestrationConfig$ === "object");
assert(typeof AggregatedProfileTime$ === "object");
assert(typeof Anomaly$ === "object");
assert(typeof AnomalyInstance$ === "object");
assert(typeof BatchGetFrameMetricDataRequest$ === "object");
assert(typeof BatchGetFrameMetricDataResponse$ === "object");
assert(typeof Channel$ === "object");
assert(typeof ConfigureAgentRequest$ === "object");
assert(typeof ConfigureAgentResponse$ === "object");
assert(typeof CreateProfilingGroupRequest$ === "object");
assert(typeof CreateProfilingGroupResponse$ === "object");
assert(typeof DeleteProfilingGroupRequest$ === "object");
assert(typeof DeleteProfilingGroupResponse$ === "object");
assert(typeof DescribeProfilingGroupRequest$ === "object");
assert(typeof DescribeProfilingGroupResponse$ === "object");
assert(typeof FindingsReportSummary$ === "object");
assert(typeof FrameMetric$ === "object");
assert(typeof FrameMetricDatum$ === "object");
assert(typeof GetFindingsReportAccountSummaryRequest$ === "object");
assert(typeof GetFindingsReportAccountSummaryResponse$ === "object");
assert(typeof GetNotificationConfigurationRequest$ === "object");
assert(typeof GetNotificationConfigurationResponse$ === "object");
assert(typeof GetPolicyRequest$ === "object");
assert(typeof GetPolicyResponse$ === "object");
assert(typeof GetProfileRequest$ === "object");
assert(typeof GetProfileResponse$ === "object");
assert(typeof GetRecommendationsRequest$ === "object");
assert(typeof GetRecommendationsResponse$ === "object");
assert(typeof ListFindingsReportsRequest$ === "object");
assert(typeof ListFindingsReportsResponse$ === "object");
assert(typeof ListProfileTimesRequest$ === "object");
assert(typeof ListProfileTimesResponse$ === "object");
assert(typeof ListProfilingGroupsRequest$ === "object");
assert(typeof ListProfilingGroupsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Match$ === "object");
assert(typeof Metric$ === "object");
assert(typeof NotificationConfiguration$ === "object");
assert(typeof Pattern$ === "object");
assert(typeof PostAgentProfileRequest$ === "object");
assert(typeof PostAgentProfileResponse$ === "object");
assert(typeof ProfileTime$ === "object");
assert(typeof ProfilingGroupDescription$ === "object");
assert(typeof ProfilingStatus$ === "object");
assert(typeof PutPermissionRequest$ === "object");
assert(typeof PutPermissionResponse$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof RemoveNotificationChannelRequest$ === "object");
assert(typeof RemoveNotificationChannelResponse$ === "object");
assert(typeof RemovePermissionRequest$ === "object");
assert(typeof RemovePermissionResponse$ === "object");
assert(typeof SubmitFeedbackRequest$ === "object");
assert(typeof SubmitFeedbackResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimestampStructure$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateProfilingGroupRequest$ === "object");
assert(typeof UpdateProfilingGroupResponse$ === "object");
assert(typeof UserFeedback$ === "object");
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
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof CodeGuruProfilerServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CodeGuruProfilerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof CodeGuruProfilerServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof CodeGuruProfilerServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof CodeGuruProfilerServiceException);
assert(typeof ValidationException$ === "object");
assert(CodeGuruProfilerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetFindingsReportAccountSummary === "function");
assert(typeof paginateListFindingsReports === "function");
assert(typeof paginateListProfileTimes === "function");
assert(typeof paginateListProfilingGroups === "function");
console.log(`CodeGuruProfiler index test passed.`);
