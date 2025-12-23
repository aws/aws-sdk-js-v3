import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountHealth$,
  AccountInsightHealth$,
  AddNotificationChannel$,
  AddNotificationChannelCommand,
  AddNotificationChannelRequest$,
  AddNotificationChannelResponse$,
  AmazonCodeGuruProfilerIntegration$,
  AnomalousLogGroup$,
  AnomalyReportedTimeRange$,
  AnomalyResource$,
  AnomalySeverity,
  AnomalySourceDetails$,
  AnomalySourceMetadata$,
  AnomalyStatus,
  AnomalyTimeRange$,
  AnomalyType,
  CloudFormationCollection$,
  CloudFormationCollectionFilter$,
  CloudFormationCostEstimationResourceCollectionFilter$,
  CloudFormationHealth$,
  CloudWatchMetricDataStatusCode,
  CloudWatchMetricsDataSummary$,
  CloudWatchMetricsDetail$,
  CloudWatchMetricsDimension$,
  CloudWatchMetricsStat,
  ConflictException,
  ConflictException$,
  CostEstimationResourceCollectionFilter$,
  CostEstimationServiceResourceState,
  CostEstimationStatus,
  CostEstimationTimeRange$,
  DeleteInsight$,
  DeleteInsightCommand,
  DeleteInsightRequest$,
  DeleteInsightResponse$,
  DescribeAccountHealth$,
  DescribeAccountHealthCommand,
  DescribeAccountHealthRequest$,
  DescribeAccountHealthResponse$,
  DescribeAccountOverview$,
  DescribeAccountOverviewCommand,
  DescribeAccountOverviewRequest$,
  DescribeAccountOverviewResponse$,
  DescribeAnomaly$,
  DescribeAnomalyCommand,
  DescribeAnomalyRequest$,
  DescribeAnomalyResponse$,
  DescribeEventSourcesConfig$,
  DescribeEventSourcesConfigCommand,
  DescribeEventSourcesConfigRequest$,
  DescribeEventSourcesConfigResponse$,
  DescribeFeedback$,
  DescribeFeedbackCommand,
  DescribeFeedbackRequest$,
  DescribeFeedbackResponse$,
  DescribeInsight$,
  DescribeInsightCommand,
  DescribeInsightRequest$,
  DescribeInsightResponse$,
  DescribeOrganizationHealth$,
  DescribeOrganizationHealthCommand,
  DescribeOrganizationHealthRequest$,
  DescribeOrganizationHealthResponse$,
  DescribeOrganizationOverview$,
  DescribeOrganizationOverviewCommand,
  DescribeOrganizationOverviewRequest$,
  DescribeOrganizationOverviewResponse$,
  DescribeOrganizationResourceCollectionHealth$,
  DescribeOrganizationResourceCollectionHealthCommand,
  DescribeOrganizationResourceCollectionHealthRequest$,
  DescribeOrganizationResourceCollectionHealthResponse$,
  DescribeResourceCollectionHealth$,
  DescribeResourceCollectionHealthCommand,
  DescribeResourceCollectionHealthRequest$,
  DescribeResourceCollectionHealthResponse$,
  DescribeServiceIntegration$,
  DescribeServiceIntegrationCommand,
  DescribeServiceIntegrationRequest$,
  DescribeServiceIntegrationResponse$,
  DevOpsGuru,
  DevOpsGuruClient,
  DevOpsGuruServiceException,
  EndTimeRange$,
  Event$,
  EventClass,
  EventDataSource,
  EventResource$,
  EventSourceOptInStatus,
  EventSourcesConfig$,
  EventTimeRange$,
  GetCostEstimation$,
  GetCostEstimationCommand,
  GetCostEstimationRequest$,
  GetCostEstimationResponse$,
  GetResourceCollection$,
  GetResourceCollectionCommand,
  GetResourceCollectionRequest$,
  GetResourceCollectionResponse$,
  InsightFeedback$,
  InsightFeedbackOption,
  InsightHealth$,
  InsightSeverity,
  InsightStatus,
  InsightTimeRange$,
  InsightType,
  InternalServerException,
  InternalServerException$,
  KMSServerSideEncryptionIntegration$,
  KMSServerSideEncryptionIntegrationConfig$,
  ListAnomaliesForInsight$,
  ListAnomaliesForInsightCommand,
  ListAnomaliesForInsightFilters$,
  ListAnomaliesForInsightRequest$,
  ListAnomaliesForInsightResponse$,
  ListAnomalousLogGroups$,
  ListAnomalousLogGroupsCommand,
  ListAnomalousLogGroupsRequest$,
  ListAnomalousLogGroupsResponse$,
  ListEvents$,
  ListEventsCommand,
  ListEventsFilters$,
  ListEventsRequest$,
  ListEventsResponse$,
  ListInsights$,
  ListInsightsAnyStatusFilter$,
  ListInsightsClosedStatusFilter$,
  ListInsightsCommand,
  ListInsightsOngoingStatusFilter$,
  ListInsightsRequest$,
  ListInsightsResponse$,
  ListInsightsStatusFilter$,
  ListMonitoredResources$,
  ListMonitoredResourcesCommand,
  ListMonitoredResourcesFilters$,
  ListMonitoredResourcesRequest$,
  ListMonitoredResourcesResponse$,
  ListNotificationChannels$,
  ListNotificationChannelsCommand,
  ListNotificationChannelsRequest$,
  ListNotificationChannelsResponse$,
  ListOrganizationInsights$,
  ListOrganizationInsightsCommand,
  ListOrganizationInsightsRequest$,
  ListOrganizationInsightsResponse$,
  ListRecommendations$,
  ListRecommendationsCommand,
  ListRecommendationsRequest$,
  ListRecommendationsResponse$,
  Locale,
  LogAnomalyClass$,
  LogAnomalyShowcase$,
  LogAnomalyType,
  LogsAnomalyDetectionIntegration$,
  LogsAnomalyDetectionIntegrationConfig$,
  MonitoredResourceIdentifier$,
  NotificationChannel$,
  NotificationChannelConfig$,
  NotificationFilterConfig$,
  NotificationMessageType,
  OpsCenterIntegration$,
  OpsCenterIntegrationConfig$,
  OptInStatus,
  OrganizationResourceCollectionType,
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
  PerformanceInsightsMetricDimensionGroup$,
  PerformanceInsightsMetricQuery$,
  PerformanceInsightsMetricsDetail$,
  PerformanceInsightsReferenceComparisonValues$,
  PerformanceInsightsReferenceData$,
  PerformanceInsightsReferenceMetric$,
  PerformanceInsightsReferenceScalar$,
  PerformanceInsightsStat$,
  PredictionTimeRange$,
  ProactiveAnomaly$,
  ProactiveAnomalySummary$,
  ProactiveInsight$,
  ProactiveInsightSummary$,
  ProactiveOrganizationInsightSummary$,
  PutFeedback$,
  PutFeedbackCommand,
  PutFeedbackRequest$,
  PutFeedbackResponse$,
  ReactiveAnomaly$,
  ReactiveAnomalySummary$,
  ReactiveInsight$,
  ReactiveInsightSummary$,
  ReactiveOrganizationInsightSummary$,
  Recommendation$,
  RecommendationRelatedAnomaly$,
  RecommendationRelatedAnomalyResource$,
  RecommendationRelatedAnomalySourceDetail$,
  RecommendationRelatedCloudWatchMetricsSourceDetail$,
  RecommendationRelatedEvent$,
  RecommendationRelatedEventResource$,
  RemoveNotificationChannel$,
  RemoveNotificationChannelCommand,
  RemoveNotificationChannelRequest$,
  RemoveNotificationChannelResponse$,
  ResourceCollection$,
  ResourceCollectionFilter$,
  ResourceCollectionType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcePermission,
  ResourceTypeFilter,
  SearchInsights$,
  SearchInsightsCommand,
  SearchInsightsFilters$,
  SearchInsightsRequest$,
  SearchInsightsResponse$,
  SearchOrganizationInsights$,
  SearchOrganizationInsightsCommand,
  SearchOrganizationInsightsFilters$,
  SearchOrganizationInsightsRequest$,
  SearchOrganizationInsightsResponse$,
  ServerSideEncryptionType,
  ServiceCollection$,
  ServiceHealth$,
  ServiceInsightHealth$,
  ServiceIntegrationConfig$,
  ServiceName,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceResourceCost$,
  SnsChannelConfig$,
  StartCostEstimation$,
  StartCostEstimationCommand,
  StartCostEstimationRequest$,
  StartCostEstimationResponse$,
  StartTimeRange$,
  TagCollection$,
  TagCollectionFilter$,
  TagCostEstimationResourceCollectionFilter$,
  TagHealth$,
  ThrottlingException,
  ThrottlingException$,
  TimestampMetricValuePair$,
  UpdateCloudFormationCollectionFilter$,
  UpdateEventSourcesConfig$,
  UpdateEventSourcesConfigCommand,
  UpdateEventSourcesConfigRequest$,
  UpdateEventSourcesConfigResponse$,
  UpdateResourceCollection$,
  UpdateResourceCollectionAction,
  UpdateResourceCollectionCommand,
  UpdateResourceCollectionFilter$,
  UpdateResourceCollectionRequest$,
  UpdateResourceCollectionResponse$,
  UpdateServiceIntegration$,
  UpdateServiceIntegrationCommand,
  UpdateServiceIntegrationConfig$,
  UpdateServiceIntegrationRequest$,
  UpdateServiceIntegrationResponse$,
  UpdateTagCollectionFilter$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DevOpsGuruClient === "function");
assert(typeof DevOpsGuru === "function");
// commands
assert(typeof AddNotificationChannelCommand === "function");
assert(typeof AddNotificationChannel$ === "object");
assert(typeof DeleteInsightCommand === "function");
assert(typeof DeleteInsight$ === "object");
assert(typeof DescribeAccountHealthCommand === "function");
assert(typeof DescribeAccountHealth$ === "object");
assert(typeof DescribeAccountOverviewCommand === "function");
assert(typeof DescribeAccountOverview$ === "object");
assert(typeof DescribeAnomalyCommand === "function");
assert(typeof DescribeAnomaly$ === "object");
assert(typeof DescribeEventSourcesConfigCommand === "function");
assert(typeof DescribeEventSourcesConfig$ === "object");
assert(typeof DescribeFeedbackCommand === "function");
assert(typeof DescribeFeedback$ === "object");
assert(typeof DescribeInsightCommand === "function");
assert(typeof DescribeInsight$ === "object");
assert(typeof DescribeOrganizationHealthCommand === "function");
assert(typeof DescribeOrganizationHealth$ === "object");
assert(typeof DescribeOrganizationOverviewCommand === "function");
assert(typeof DescribeOrganizationOverview$ === "object");
assert(typeof DescribeOrganizationResourceCollectionHealthCommand === "function");
assert(typeof DescribeOrganizationResourceCollectionHealth$ === "object");
assert(typeof DescribeResourceCollectionHealthCommand === "function");
assert(typeof DescribeResourceCollectionHealth$ === "object");
assert(typeof DescribeServiceIntegrationCommand === "function");
assert(typeof DescribeServiceIntegration$ === "object");
assert(typeof GetCostEstimationCommand === "function");
assert(typeof GetCostEstimation$ === "object");
assert(typeof GetResourceCollectionCommand === "function");
assert(typeof GetResourceCollection$ === "object");
assert(typeof ListAnomaliesForInsightCommand === "function");
assert(typeof ListAnomaliesForInsight$ === "object");
assert(typeof ListAnomalousLogGroupsCommand === "function");
assert(typeof ListAnomalousLogGroups$ === "object");
assert(typeof ListEventsCommand === "function");
assert(typeof ListEvents$ === "object");
assert(typeof ListInsightsCommand === "function");
assert(typeof ListInsights$ === "object");
assert(typeof ListMonitoredResourcesCommand === "function");
assert(typeof ListMonitoredResources$ === "object");
assert(typeof ListNotificationChannelsCommand === "function");
assert(typeof ListNotificationChannels$ === "object");
assert(typeof ListOrganizationInsightsCommand === "function");
assert(typeof ListOrganizationInsights$ === "object");
assert(typeof ListRecommendationsCommand === "function");
assert(typeof ListRecommendations$ === "object");
assert(typeof PutFeedbackCommand === "function");
assert(typeof PutFeedback$ === "object");
assert(typeof RemoveNotificationChannelCommand === "function");
assert(typeof RemoveNotificationChannel$ === "object");
assert(typeof SearchInsightsCommand === "function");
assert(typeof SearchInsights$ === "object");
assert(typeof SearchOrganizationInsightsCommand === "function");
assert(typeof SearchOrganizationInsights$ === "object");
assert(typeof StartCostEstimationCommand === "function");
assert(typeof StartCostEstimation$ === "object");
assert(typeof UpdateEventSourcesConfigCommand === "function");
assert(typeof UpdateEventSourcesConfig$ === "object");
assert(typeof UpdateResourceCollectionCommand === "function");
assert(typeof UpdateResourceCollection$ === "object");
assert(typeof UpdateServiceIntegrationCommand === "function");
assert(typeof UpdateServiceIntegration$ === "object");
// structural schemas
assert(typeof AccountHealth$ === "object");
assert(typeof AccountInsightHealth$ === "object");
assert(typeof AddNotificationChannelRequest$ === "object");
assert(typeof AddNotificationChannelResponse$ === "object");
assert(typeof AmazonCodeGuruProfilerIntegration$ === "object");
assert(typeof AnomalousLogGroup$ === "object");
assert(typeof AnomalyReportedTimeRange$ === "object");
assert(typeof AnomalyResource$ === "object");
assert(typeof AnomalySourceDetails$ === "object");
assert(typeof AnomalySourceMetadata$ === "object");
assert(typeof AnomalyTimeRange$ === "object");
assert(typeof CloudFormationCollection$ === "object");
assert(typeof CloudFormationCollectionFilter$ === "object");
assert(typeof CloudFormationCostEstimationResourceCollectionFilter$ === "object");
assert(typeof CloudFormationHealth$ === "object");
assert(typeof CloudWatchMetricsDataSummary$ === "object");
assert(typeof CloudWatchMetricsDetail$ === "object");
assert(typeof CloudWatchMetricsDimension$ === "object");
assert(typeof CostEstimationResourceCollectionFilter$ === "object");
assert(typeof CostEstimationTimeRange$ === "object");
assert(typeof DeleteInsightRequest$ === "object");
assert(typeof DeleteInsightResponse$ === "object");
assert(typeof DescribeAccountHealthRequest$ === "object");
assert(typeof DescribeAccountHealthResponse$ === "object");
assert(typeof DescribeAccountOverviewRequest$ === "object");
assert(typeof DescribeAccountOverviewResponse$ === "object");
assert(typeof DescribeAnomalyRequest$ === "object");
assert(typeof DescribeAnomalyResponse$ === "object");
assert(typeof DescribeEventSourcesConfigRequest$ === "object");
assert(typeof DescribeEventSourcesConfigResponse$ === "object");
assert(typeof DescribeFeedbackRequest$ === "object");
assert(typeof DescribeFeedbackResponse$ === "object");
assert(typeof DescribeInsightRequest$ === "object");
assert(typeof DescribeInsightResponse$ === "object");
assert(typeof DescribeOrganizationHealthRequest$ === "object");
assert(typeof DescribeOrganizationHealthResponse$ === "object");
assert(typeof DescribeOrganizationOverviewRequest$ === "object");
assert(typeof DescribeOrganizationOverviewResponse$ === "object");
assert(typeof DescribeOrganizationResourceCollectionHealthRequest$ === "object");
assert(typeof DescribeOrganizationResourceCollectionHealthResponse$ === "object");
assert(typeof DescribeResourceCollectionHealthRequest$ === "object");
assert(typeof DescribeResourceCollectionHealthResponse$ === "object");
assert(typeof DescribeServiceIntegrationRequest$ === "object");
assert(typeof DescribeServiceIntegrationResponse$ === "object");
assert(typeof EndTimeRange$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventResource$ === "object");
assert(typeof EventSourcesConfig$ === "object");
assert(typeof EventTimeRange$ === "object");
assert(typeof GetCostEstimationRequest$ === "object");
assert(typeof GetCostEstimationResponse$ === "object");
assert(typeof GetResourceCollectionRequest$ === "object");
assert(typeof GetResourceCollectionResponse$ === "object");
assert(typeof InsightFeedback$ === "object");
assert(typeof InsightHealth$ === "object");
assert(typeof InsightTimeRange$ === "object");
assert(typeof KMSServerSideEncryptionIntegration$ === "object");
assert(typeof KMSServerSideEncryptionIntegrationConfig$ === "object");
assert(typeof ListAnomaliesForInsightFilters$ === "object");
assert(typeof ListAnomaliesForInsightRequest$ === "object");
assert(typeof ListAnomaliesForInsightResponse$ === "object");
assert(typeof ListAnomalousLogGroupsRequest$ === "object");
assert(typeof ListAnomalousLogGroupsResponse$ === "object");
assert(typeof ListEventsFilters$ === "object");
assert(typeof ListEventsRequest$ === "object");
assert(typeof ListEventsResponse$ === "object");
assert(typeof ListInsightsAnyStatusFilter$ === "object");
assert(typeof ListInsightsClosedStatusFilter$ === "object");
assert(typeof ListInsightsOngoingStatusFilter$ === "object");
assert(typeof ListInsightsRequest$ === "object");
assert(typeof ListInsightsResponse$ === "object");
assert(typeof ListInsightsStatusFilter$ === "object");
assert(typeof ListMonitoredResourcesFilters$ === "object");
assert(typeof ListMonitoredResourcesRequest$ === "object");
assert(typeof ListMonitoredResourcesResponse$ === "object");
assert(typeof ListNotificationChannelsRequest$ === "object");
assert(typeof ListNotificationChannelsResponse$ === "object");
assert(typeof ListOrganizationInsightsRequest$ === "object");
assert(typeof ListOrganizationInsightsResponse$ === "object");
assert(typeof ListRecommendationsRequest$ === "object");
assert(typeof ListRecommendationsResponse$ === "object");
assert(typeof LogAnomalyClass$ === "object");
assert(typeof LogAnomalyShowcase$ === "object");
assert(typeof LogsAnomalyDetectionIntegration$ === "object");
assert(typeof LogsAnomalyDetectionIntegrationConfig$ === "object");
assert(typeof MonitoredResourceIdentifier$ === "object");
assert(typeof NotificationChannel$ === "object");
assert(typeof NotificationChannelConfig$ === "object");
assert(typeof NotificationFilterConfig$ === "object");
assert(typeof OpsCenterIntegration$ === "object");
assert(typeof OpsCenterIntegrationConfig$ === "object");
assert(typeof PerformanceInsightsMetricDimensionGroup$ === "object");
assert(typeof PerformanceInsightsMetricQuery$ === "object");
assert(typeof PerformanceInsightsMetricsDetail$ === "object");
assert(typeof PerformanceInsightsReferenceComparisonValues$ === "object");
assert(typeof PerformanceInsightsReferenceData$ === "object");
assert(typeof PerformanceInsightsReferenceMetric$ === "object");
assert(typeof PerformanceInsightsReferenceScalar$ === "object");
assert(typeof PerformanceInsightsStat$ === "object");
assert(typeof PredictionTimeRange$ === "object");
assert(typeof ProactiveAnomaly$ === "object");
assert(typeof ProactiveAnomalySummary$ === "object");
assert(typeof ProactiveInsight$ === "object");
assert(typeof ProactiveInsightSummary$ === "object");
assert(typeof ProactiveOrganizationInsightSummary$ === "object");
assert(typeof PutFeedbackRequest$ === "object");
assert(typeof PutFeedbackResponse$ === "object");
assert(typeof ReactiveAnomaly$ === "object");
assert(typeof ReactiveAnomalySummary$ === "object");
assert(typeof ReactiveInsight$ === "object");
assert(typeof ReactiveInsightSummary$ === "object");
assert(typeof ReactiveOrganizationInsightSummary$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof RecommendationRelatedAnomaly$ === "object");
assert(typeof RecommendationRelatedAnomalyResource$ === "object");
assert(typeof RecommendationRelatedAnomalySourceDetail$ === "object");
assert(typeof RecommendationRelatedCloudWatchMetricsSourceDetail$ === "object");
assert(typeof RecommendationRelatedEvent$ === "object");
assert(typeof RecommendationRelatedEventResource$ === "object");
assert(typeof RemoveNotificationChannelRequest$ === "object");
assert(typeof RemoveNotificationChannelResponse$ === "object");
assert(typeof ResourceCollection$ === "object");
assert(typeof ResourceCollectionFilter$ === "object");
assert(typeof SearchInsightsFilters$ === "object");
assert(typeof SearchInsightsRequest$ === "object");
assert(typeof SearchInsightsResponse$ === "object");
assert(typeof SearchOrganizationInsightsFilters$ === "object");
assert(typeof SearchOrganizationInsightsRequest$ === "object");
assert(typeof SearchOrganizationInsightsResponse$ === "object");
assert(typeof ServiceCollection$ === "object");
assert(typeof ServiceHealth$ === "object");
assert(typeof ServiceInsightHealth$ === "object");
assert(typeof ServiceIntegrationConfig$ === "object");
assert(typeof ServiceResourceCost$ === "object");
assert(typeof SnsChannelConfig$ === "object");
assert(typeof StartCostEstimationRequest$ === "object");
assert(typeof StartCostEstimationResponse$ === "object");
assert(typeof StartTimeRange$ === "object");
assert(typeof TagCollection$ === "object");
assert(typeof TagCollectionFilter$ === "object");
assert(typeof TagCostEstimationResourceCollectionFilter$ === "object");
assert(typeof TagHealth$ === "object");
assert(typeof TimestampMetricValuePair$ === "object");
assert(typeof UpdateCloudFormationCollectionFilter$ === "object");
assert(typeof UpdateEventSourcesConfigRequest$ === "object");
assert(typeof UpdateEventSourcesConfigResponse$ === "object");
assert(typeof UpdateResourceCollectionFilter$ === "object");
assert(typeof UpdateResourceCollectionRequest$ === "object");
assert(typeof UpdateResourceCollectionResponse$ === "object");
assert(typeof UpdateServiceIntegrationConfig$ === "object");
assert(typeof UpdateServiceIntegrationRequest$ === "object");
assert(typeof UpdateServiceIntegrationResponse$ === "object");
assert(typeof UpdateTagCollectionFilter$ === "object");
assert(typeof ValidationExceptionField$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof DevOpsGuruServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof DevOpsGuruServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof DevOpsGuruServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof DevOpsGuruServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof DevOpsGuruServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof DevOpsGuruServiceException);
assert(typeof ValidationException$ === "object");
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
