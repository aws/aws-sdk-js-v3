import {
  AccessDeniedException,
  AddNotificationChannelCommand,
  AnomalySeverity,
  AnomalyStatus,
  AnomalyType,
  CloudWatchMetricDataStatusCode,
  CloudWatchMetricsStat,
  ConflictException,
  CostEstimationServiceResourceState,
  CostEstimationStatus,
  DeleteInsightCommand,
  DescribeAccountHealthCommand,
  DescribeAccountOverviewCommand,
  DescribeAnomalyCommand,
  DescribeEventSourcesConfigCommand,
  DescribeFeedbackCommand,
  DescribeInsightCommand,
  DescribeOrganizationHealthCommand,
  DescribeOrganizationOverviewCommand,
  DescribeOrganizationResourceCollectionHealthCommand,
  DescribeResourceCollectionHealthCommand,
  DescribeServiceIntegrationCommand,
  DevOpsGuru,
  DevOpsGuruClient,
  DevOpsGuruServiceException,
  EventClass,
  EventDataSource,
  EventSourceOptInStatus,
  GetCostEstimationCommand,
  GetResourceCollectionCommand,
  InsightFeedbackOption,
  InsightSeverity,
  InsightStatus,
  InsightType,
  InternalServerException,
  ListAnomaliesForInsightCommand,
  ListAnomalousLogGroupsCommand,
  ListEventsCommand,
  ListInsightsCommand,
  ListMonitoredResourcesCommand,
  ListNotificationChannelsCommand,
  ListOrganizationInsightsCommand,
  ListRecommendationsCommand,
  Locale,
  LogAnomalyType,
  NotificationMessageType,
  OptInStatus,
  OrganizationResourceCollectionType,
  PutFeedbackCommand,
  RemoveNotificationChannelCommand,
  ResourceCollectionType,
  ResourceNotFoundException,
  ResourcePermission,
  ResourceTypeFilter,
  SearchInsightsCommand,
  SearchOrganizationInsightsCommand,
  ServerSideEncryptionType,
  ServiceName,
  ServiceQuotaExceededException,
  StartCostEstimationCommand,
  ThrottlingException,
  UpdateEventSourcesConfigCommand,
  UpdateResourceCollectionAction,
  UpdateResourceCollectionCommand,
  UpdateServiceIntegrationCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateDescribeOrganizationResourceCollectionHealth,
  paginateDescribeResourceCollectionHealth,
  paginateGetCostEstimation,
  paginateGetResourceCollection,
  paginateListAnomaliesForInsight,
  paginateListAnomalousLogGroups,
  paginateListEvents,
  paginateListInsights,
  paginateListMonitoredResources,
  paginateListNotificationChannels,
  paginateListOrganizationInsights,
  paginateListRecommendations,
  paginateSearchInsights,
  paginateSearchOrganizationInsights,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DevOpsGuruClient === "function");
assert(typeof DevOpsGuru === "function");
// commands
assert(typeof AddNotificationChannelCommand === "function");
assert(typeof DeleteInsightCommand === "function");
assert(typeof DescribeAccountHealthCommand === "function");
assert(typeof DescribeAccountOverviewCommand === "function");
assert(typeof DescribeAnomalyCommand === "function");
assert(typeof DescribeEventSourcesConfigCommand === "function");
assert(typeof DescribeFeedbackCommand === "function");
assert(typeof DescribeInsightCommand === "function");
assert(typeof DescribeOrganizationHealthCommand === "function");
assert(typeof DescribeOrganizationOverviewCommand === "function");
assert(typeof DescribeOrganizationResourceCollectionHealthCommand === "function");
assert(typeof DescribeResourceCollectionHealthCommand === "function");
assert(typeof DescribeServiceIntegrationCommand === "function");
assert(typeof GetCostEstimationCommand === "function");
assert(typeof GetResourceCollectionCommand === "function");
assert(typeof ListAnomaliesForInsightCommand === "function");
assert(typeof ListAnomalousLogGroupsCommand === "function");
assert(typeof ListEventsCommand === "function");
assert(typeof ListInsightsCommand === "function");
assert(typeof ListMonitoredResourcesCommand === "function");
assert(typeof ListNotificationChannelsCommand === "function");
assert(typeof ListOrganizationInsightsCommand === "function");
assert(typeof ListRecommendationsCommand === "function");
assert(typeof PutFeedbackCommand === "function");
assert(typeof RemoveNotificationChannelCommand === "function");
assert(typeof SearchInsightsCommand === "function");
assert(typeof SearchOrganizationInsightsCommand === "function");
assert(typeof StartCostEstimationCommand === "function");
assert(typeof UpdateEventSourcesConfigCommand === "function");
assert(typeof UpdateResourceCollectionCommand === "function");
assert(typeof UpdateServiceIntegrationCommand === "function");
// enums
assert(typeof AnomalySeverity === "object");
assert(typeof AnomalyStatus === "object");
assert(typeof AnomalyType === "object");
assert(typeof CloudWatchMetricDataStatusCode === "object");
assert(typeof CloudWatchMetricsStat === "object");
assert(typeof CostEstimationServiceResourceState === "object");
assert(typeof CostEstimationStatus === "object");
assert(typeof EventClass === "object");
assert(typeof EventDataSource === "object");
assert(typeof EventSourceOptInStatus === "object");
assert(typeof InsightFeedbackOption === "object");
assert(typeof InsightSeverity === "object");
assert(typeof InsightStatus === "object");
assert(typeof InsightType === "object");
assert(typeof Locale === "object");
assert(typeof LogAnomalyType === "object");
assert(typeof NotificationMessageType === "object");
assert(typeof OptInStatus === "object");
assert(typeof OrganizationResourceCollectionType === "object");
assert(typeof ResourceCollectionType === "object");
assert(typeof ResourcePermission === "object");
assert(typeof ResourceTypeFilter === "object");
assert(typeof ServerSideEncryptionType === "object");
assert(typeof ServiceName === "object");
assert(typeof UpdateResourceCollectionAction === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof DevOpsGuruServiceException);
assert(ConflictException.prototype instanceof DevOpsGuruServiceException);
assert(InternalServerException.prototype instanceof DevOpsGuruServiceException);
assert(ResourceNotFoundException.prototype instanceof DevOpsGuruServiceException);
assert(ServiceQuotaExceededException.prototype instanceof DevOpsGuruServiceException);
assert(ThrottlingException.prototype instanceof DevOpsGuruServiceException);
assert(ValidationException.prototype instanceof DevOpsGuruServiceException);
assert(DevOpsGuruServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeOrganizationResourceCollectionHealth === "function");
assert(typeof paginateDescribeResourceCollectionHealth === "function");
assert(typeof paginateGetCostEstimation === "function");
assert(typeof paginateGetResourceCollection === "function");
assert(typeof paginateListAnomaliesForInsight === "function");
assert(typeof paginateListAnomalousLogGroups === "function");
assert(typeof paginateListEvents === "function");
assert(typeof paginateListInsights === "function");
assert(typeof paginateListMonitoredResources === "function");
assert(typeof paginateListNotificationChannels === "function");
assert(typeof paginateListOrganizationInsights === "function");
assert(typeof paginateListRecommendations === "function");
assert(typeof paginateSearchInsights === "function");
assert(typeof paginateSearchOrganizationInsights === "function");
console.log(`DevOpsGuru index test passed.`);
