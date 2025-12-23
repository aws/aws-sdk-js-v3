import {
  AccessDeniedException,
  AccessDeniedException$,
  BCMDashboards,
  BCMDashboardsClient,
  BCMDashboardsServiceException,
  CostAndUsageQuery$,
  CostCategoryValues$,
  CreateDashboard$,
  CreateDashboardCommand,
  CreateDashboardRequest$,
  CreateDashboardResponse$,
  DashboardReference$,
  DashboardType,
  DateTimeRange$,
  DateTimeType,
  DateTimeValue$,
  DeleteDashboard$,
  DeleteDashboardCommand,
  DeleteDashboardRequest$,
  DeleteDashboardResponse$,
  Dimension,
  DimensionValues$,
  DisplayConfig$,
  Expression$,
  GetDashboard$,
  GetDashboardCommand,
  GetDashboardRequest$,
  GetDashboardResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  Granularity,
  GraphDisplayConfig$,
  GroupDefinition$,
  GroupDefinitionType,
  InternalServerException,
  InternalServerException$,
  ListDashboards$,
  ListDashboardsCommand,
  ListDashboardsRequest$,
  ListDashboardsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MatchOption,
  MetricName,
  paginateListDashboards,
  QueryParameters$,
  ReservationCoverageQuery$,
  ReservationUtilizationQuery$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTag$,
  SavingsPlansCoverageQuery$,
  SavingsPlansUtilizationQuery$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
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
assert(typeof DeleteDashboardCommand === "function");
assert(typeof DeleteDashboard$ === "object");
assert(typeof GetDashboardCommand === "function");
assert(typeof GetDashboard$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof ListDashboardsCommand === "function");
assert(typeof ListDashboards$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDashboardCommand === "function");
assert(typeof UpdateDashboard$ === "object");
// structural schemas
assert(typeof CostAndUsageQuery$ === "object");
assert(typeof CostCategoryValues$ === "object");
assert(typeof CreateDashboardRequest$ === "object");
assert(typeof CreateDashboardResponse$ === "object");
assert(typeof DashboardReference$ === "object");
assert(typeof DateTimeRange$ === "object");
assert(typeof DateTimeValue$ === "object");
assert(typeof DeleteDashboardRequest$ === "object");
assert(typeof DeleteDashboardResponse$ === "object");
assert(typeof DimensionValues$ === "object");
assert(typeof DisplayConfig$ === "object");
assert(typeof Expression$ === "object");
assert(typeof GetDashboardRequest$ === "object");
assert(typeof GetDashboardResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof GraphDisplayConfig$ === "object");
assert(typeof GroupDefinition$ === "object");
assert(typeof ListDashboardsRequest$ === "object");
assert(typeof ListDashboardsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof QueryParameters$ === "object");
assert(typeof ReservationCoverageQuery$ === "object");
assert(typeof ReservationUtilizationQuery$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof SavingsPlansCoverageQuery$ === "object");
assert(typeof SavingsPlansUtilizationQuery$ === "object");
assert(typeof TableDisplayConfigStruct$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TagValues$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDashboardRequest$ === "object");
assert(typeof UpdateDashboardResponse$ === "object");
assert(typeof Widget$ === "object");
assert(typeof WidgetConfig$ === "object");
// enums
assert(typeof DashboardType === "object");
assert(typeof DateTimeType === "object");
assert(typeof Dimension === "object");
assert(typeof Granularity === "object");
assert(typeof GroupDefinitionType === "object");
assert(typeof MatchOption === "object");
assert(typeof MetricName === "object");
assert(typeof VisualType === "object");
// errors
assert(AccessDeniedException.prototype instanceof BCMDashboardsServiceException);
assert(typeof AccessDeniedException$ === "object");
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
console.log(`BCMDashboards index test passed.`);
