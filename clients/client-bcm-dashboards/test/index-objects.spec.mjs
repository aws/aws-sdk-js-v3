import {
  AccessDeniedException,
  AccessDeniedException$,
  BCMDashboards,
  BCMDashboardsClient,
  BCMDashboardsServiceException,
  ConflictException,
  ConflictException$,
  CostAndUsageQuery$,
  CostCategoryValues$,
  CreateDashboard$,
  CreateDashboardCommand,
  CreateDashboardRequest$,
  CreateDashboardResponse$,
  CreateScheduledReport$,
  CreateScheduledReportCommand,
  CreateScheduledReportRequest$,
  CreateScheduledReportResponse$,
  DashboardReference$,
  DashboardType,
  DateTimeRange$,
  DateTimeType,
  DateTimeValue$,
  DeleteDashboard$,
  DeleteDashboardCommand,
  DeleteDashboardRequest$,
  DeleteDashboardResponse$,
  DeleteScheduledReport$,
  DeleteScheduledReportCommand,
  DeleteScheduledReportRequest$,
  DeleteScheduledReportResponse$,
  Dimension,
  DimensionValues$,
  DisplayConfig$,
  ExecuteScheduledReport$,
  ExecuteScheduledReportCommand,
  ExecuteScheduledReportRequest$,
  ExecuteScheduledReportResponse$,
  Expression$,
  GetDashboard$,
  GetDashboardCommand,
  GetDashboardRequest$,
  GetDashboardResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  GetScheduledReport$,
  GetScheduledReportCommand,
  GetScheduledReportRequest$,
  GetScheduledReportResponse$,
  Granularity,
  GraphDisplayConfig$,
  GroupDefinition$,
  GroupDefinitionType,
  HealthStatus$,
  HealthStatusCode,
  InternalServerException,
  InternalServerException$,
  ListDashboards$,
  ListDashboardsCommand,
  ListDashboardsRequest$,
  ListDashboardsResponse$,
  ListScheduledReports$,
  ListScheduledReportsCommand,
  ListScheduledReportsRequest$,
  ListScheduledReportsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MatchOption,
  MetricName,
  paginateListDashboards,
  paginateListScheduledReports,
  QueryParameters$,
  ReservationCoverageQuery$,
  ReservationUtilizationQuery$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTag$,
  SavingsPlansCoverageQuery$,
  SavingsPlansUtilizationQuery$,
  ScheduleConfig$,
  ScheduledReport$,
  ScheduledReportInput$,
  ScheduledReportSummary$,
  SchedulePeriod$,
  ScheduleState,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StatusReason,
  TableDisplayConfigStruct$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TagValues$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDashboard$,
  UpdateDashboardCommand,
  UpdateDashboardRequest$,
  UpdateDashboardResponse$,
  UpdateScheduledReport$,
  UpdateScheduledReportCommand,
  UpdateScheduledReportRequest$,
  UpdateScheduledReportResponse$,
  ValidationException,
  ValidationException$,
  VisualType,
  Widget$,
  WidgetConfig$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BCMDashboardsClient === "function");
assert(typeof BCMDashboards === "function");
// commands
assert(typeof CreateDashboardCommand === "function");
assert(typeof CreateDashboard$ === "object");
assert(typeof CreateScheduledReportCommand === "function");
assert(typeof CreateScheduledReport$ === "object");
assert(typeof DeleteDashboardCommand === "function");
assert(typeof DeleteDashboard$ === "object");
assert(typeof DeleteScheduledReportCommand === "function");
assert(typeof DeleteScheduledReport$ === "object");
assert(typeof ExecuteScheduledReportCommand === "function");
assert(typeof ExecuteScheduledReport$ === "object");
assert(typeof GetDashboardCommand === "function");
assert(typeof GetDashboard$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof GetScheduledReportCommand === "function");
assert(typeof GetScheduledReport$ === "object");
assert(typeof ListDashboardsCommand === "function");
assert(typeof ListDashboards$ === "object");
assert(typeof ListScheduledReportsCommand === "function");
assert(typeof ListScheduledReports$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDashboardCommand === "function");
assert(typeof UpdateDashboard$ === "object");
assert(typeof UpdateScheduledReportCommand === "function");
assert(typeof UpdateScheduledReport$ === "object");
// structural schemas
assert(typeof CostAndUsageQuery$ === "object");
assert(typeof CostCategoryValues$ === "object");
assert(typeof CreateDashboardRequest$ === "object");
assert(typeof CreateDashboardResponse$ === "object");
assert(typeof CreateScheduledReportRequest$ === "object");
assert(typeof CreateScheduledReportResponse$ === "object");
assert(typeof DashboardReference$ === "object");
assert(typeof DateTimeRange$ === "object");
assert(typeof DateTimeValue$ === "object");
assert(typeof DeleteDashboardRequest$ === "object");
assert(typeof DeleteDashboardResponse$ === "object");
assert(typeof DeleteScheduledReportRequest$ === "object");
assert(typeof DeleteScheduledReportResponse$ === "object");
assert(typeof DimensionValues$ === "object");
assert(typeof DisplayConfig$ === "object");
assert(typeof ExecuteScheduledReportRequest$ === "object");
assert(typeof ExecuteScheduledReportResponse$ === "object");
assert(typeof Expression$ === "object");
assert(typeof GetDashboardRequest$ === "object");
assert(typeof GetDashboardResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof GetScheduledReportRequest$ === "object");
assert(typeof GetScheduledReportResponse$ === "object");
assert(typeof GraphDisplayConfig$ === "object");
assert(typeof GroupDefinition$ === "object");
assert(typeof HealthStatus$ === "object");
assert(typeof ListDashboardsRequest$ === "object");
assert(typeof ListDashboardsResponse$ === "object");
assert(typeof ListScheduledReportsRequest$ === "object");
assert(typeof ListScheduledReportsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof QueryParameters$ === "object");
assert(typeof ReservationCoverageQuery$ === "object");
assert(typeof ReservationUtilizationQuery$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof SavingsPlansCoverageQuery$ === "object");
assert(typeof SavingsPlansUtilizationQuery$ === "object");
assert(typeof ScheduleConfig$ === "object");
assert(typeof ScheduledReport$ === "object");
assert(typeof ScheduledReportInput$ === "object");
assert(typeof ScheduledReportSummary$ === "object");
assert(typeof SchedulePeriod$ === "object");
assert(typeof TableDisplayConfigStruct$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TagValues$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDashboardRequest$ === "object");
assert(typeof UpdateDashboardResponse$ === "object");
assert(typeof UpdateScheduledReportRequest$ === "object");
assert(typeof UpdateScheduledReportResponse$ === "object");
assert(typeof Widget$ === "object");
assert(typeof WidgetConfig$ === "object");
// enums
assert(typeof DashboardType === "object");
assert(typeof DateTimeType === "object");
assert(typeof Dimension === "object");
assert(typeof Granularity === "object");
assert(typeof GroupDefinitionType === "object");
assert(typeof HealthStatusCode === "object");
assert(typeof MatchOption === "object");
assert(typeof MetricName === "object");
assert(typeof ScheduleState === "object");
assert(typeof StatusReason === "object");
assert(typeof VisualType === "object");
// errors
assert(AccessDeniedException.prototype instanceof BCMDashboardsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof BCMDashboardsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof BCMDashboardsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BCMDashboardsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BCMDashboardsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof BCMDashboardsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof BCMDashboardsServiceException);
assert(typeof ValidationException$ === "object");
assert(BCMDashboardsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDashboards === "function");
assert(typeof paginateListScheduledReports === "function");
console.log(`BCMDashboards index test passed.`);
