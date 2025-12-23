import {
  AccountScope,
  AnalysisDetails$,
  AnalysisNotFoundException,
  AnalysisNotFoundException$,
  AnalysisStatus,
  AnalysisSummary$,
  AnalysisType,
  Anomaly$,
  AnomalyDateInterval$,
  AnomalyFeedbackType,
  AnomalyMonitor$,
  AnomalyScore$,
  AnomalySubscription$,
  AnomalySubscriptionFrequency,
  ApproximationDimension,
  BackfillLimitExceededException,
  BackfillLimitExceededException$,
  BillExpirationException,
  BillExpirationException$,
  BillingViewHealthStatusException,
  BillingViewHealthStatusException$,
  CommitmentPurchaseAnalysisConfiguration$,
  ComparisonMetricValue$,
  Context,
  CostAllocationTag$,
  CostAllocationTagBackfillRequest$,
  CostAllocationTagBackfillStatus,
  CostAllocationTagStatus,
  CostAllocationTagStatusEntry$,
  CostAllocationTagType,
  CostAndUsageComparison$,
  CostCategory$,
  CostCategoryInheritedValueDimension$,
  CostCategoryInheritedValueDimensionName,
  CostCategoryProcessingStatus$,
  CostCategoryReference$,
  CostCategoryResourceAssociation$,
  CostCategoryRule$,
  CostCategoryRuleType,
  CostCategoryRuleVersion,
  CostCategorySplitChargeMethod,
  CostCategorySplitChargeRule$,
  CostCategorySplitChargeRuleParameter$,
  CostCategorySplitChargeRuleParameterType,
  CostCategoryStatus,
  CostCategoryStatusComponent,
  CostCategoryValues$,
  CostComparisonDriver$,
  CostDriver$,
  CostExplorer,
  CostExplorerClient,
  CostExplorerServiceException,
  Coverage$,
  CoverageByTime$,
  CoverageCost$,
  CoverageHours$,
  CoverageNormalizedUnits$,
  CreateAnomalyMonitor$,
  CreateAnomalyMonitorCommand,
  CreateAnomalyMonitorRequest$,
  CreateAnomalyMonitorResponse$,
  CreateAnomalySubscription$,
  CreateAnomalySubscriptionCommand,
  CreateAnomalySubscriptionRequest$,
  CreateAnomalySubscriptionResponse$,
  CreateCostCategoryDefinition$,
  CreateCostCategoryDefinitionCommand,
  CreateCostCategoryDefinitionRequest$,
  CreateCostCategoryDefinitionResponse$,
  CurrentInstance$,
  DataUnavailableException,
  DataUnavailableException$,
  DateInterval$,
  DeleteAnomalyMonitor$,
  DeleteAnomalyMonitorCommand,
  DeleteAnomalyMonitorRequest$,
  DeleteAnomalyMonitorResponse$,
  DeleteAnomalySubscription$,
  DeleteAnomalySubscriptionCommand,
  DeleteAnomalySubscriptionRequest$,
  DeleteAnomalySubscriptionResponse$,
  DeleteCostCategoryDefinition$,
  DeleteCostCategoryDefinitionCommand,
  DeleteCostCategoryDefinitionRequest$,
  DeleteCostCategoryDefinitionResponse$,
  DescribeCostCategoryDefinition$,
  DescribeCostCategoryDefinitionCommand,
  DescribeCostCategoryDefinitionRequest$,
  DescribeCostCategoryDefinitionResponse$,
  Dimension,
  DimensionValues$,
  DimensionValuesWithAttributes$,
  DiskResourceUtilization$,
  DynamoDBCapacityDetails$,
  EBSResourceUtilization$,
  EC2InstanceDetails$,
  EC2ResourceDetails$,
  EC2ResourceUtilization$,
  EC2Specification$,
  ElastiCacheInstanceDetails$,
  ErrorCode,
  ESInstanceDetails$,
  Expression$,
  FindingReasonCode,
  ForecastResult$,
  GenerationExistsException,
  GenerationExistsException$,
  GenerationStatus,
  GenerationSummary$,
  GetAnomalies$,
  GetAnomaliesCommand,
  GetAnomaliesRequest$,
  GetAnomaliesResponse$,
  GetAnomalyMonitors$,
  GetAnomalyMonitorsCommand,
  GetAnomalyMonitorsRequest$,
  GetAnomalyMonitorsResponse$,
  GetAnomalySubscriptions$,
  GetAnomalySubscriptionsCommand,
  GetAnomalySubscriptionsRequest$,
  GetAnomalySubscriptionsResponse$,
  GetApproximateUsageRecords$,
  GetApproximateUsageRecordsCommand,
  GetApproximateUsageRecordsRequest$,
  GetApproximateUsageRecordsResponse$,
  GetCommitmentPurchaseAnalysis$,
  GetCommitmentPurchaseAnalysisCommand,
  GetCommitmentPurchaseAnalysisRequest$,
  GetCommitmentPurchaseAnalysisResponse$,
  GetCostAndUsage$,
  GetCostAndUsageCommand,
  GetCostAndUsageComparisons$,
  GetCostAndUsageComparisonsCommand,
  GetCostAndUsageComparisonsRequest$,
  GetCostAndUsageComparisonsResponse$,
  GetCostAndUsageRequest$,
  GetCostAndUsageResponse$,
  GetCostAndUsageWithResources$,
  GetCostAndUsageWithResourcesCommand,
  GetCostAndUsageWithResourcesRequest$,
  GetCostAndUsageWithResourcesResponse$,
  GetCostCategories$,
  GetCostCategoriesCommand,
  GetCostCategoriesRequest$,
  GetCostCategoriesResponse$,
  GetCostComparisonDrivers$,
  GetCostComparisonDriversCommand,
  GetCostComparisonDriversRequest$,
  GetCostComparisonDriversResponse$,
  GetCostForecast$,
  GetCostForecastCommand,
  GetCostForecastRequest$,
  GetCostForecastResponse$,
  GetDimensionValues$,
  GetDimensionValuesCommand,
  GetDimensionValuesRequest$,
  GetDimensionValuesResponse$,
  GetReservationCoverage$,
  GetReservationCoverageCommand,
  GetReservationCoverageRequest$,
  GetReservationCoverageResponse$,
  GetReservationPurchaseRecommendation$,
  GetReservationPurchaseRecommendationCommand,
  GetReservationPurchaseRecommendationRequest$,
  GetReservationPurchaseRecommendationResponse$,
  GetReservationUtilization$,
  GetReservationUtilizationCommand,
  GetReservationUtilizationRequest$,
  GetReservationUtilizationResponse$,
  GetRightsizingRecommendation$,
  GetRightsizingRecommendationCommand,
  GetRightsizingRecommendationRequest$,
  GetRightsizingRecommendationResponse$,
  GetSavingsPlanPurchaseRecommendationDetails$,
  GetSavingsPlanPurchaseRecommendationDetailsCommand,
  GetSavingsPlanPurchaseRecommendationDetailsRequest$,
  GetSavingsPlanPurchaseRecommendationDetailsResponse$,
  GetSavingsPlansCoverage$,
  GetSavingsPlansCoverageCommand,
  GetSavingsPlansCoverageRequest$,
  GetSavingsPlansCoverageResponse$,
  GetSavingsPlansPurchaseRecommendation$,
  GetSavingsPlansPurchaseRecommendationCommand,
  GetSavingsPlansPurchaseRecommendationRequest$,
  GetSavingsPlansPurchaseRecommendationResponse$,
  GetSavingsPlansUtilization$,
  GetSavingsPlansUtilizationCommand,
  GetSavingsPlansUtilizationDetails$,
  GetSavingsPlansUtilizationDetailsCommand,
  GetSavingsPlansUtilizationDetailsRequest$,
  GetSavingsPlansUtilizationDetailsResponse$,
  GetSavingsPlansUtilizationRequest$,
  GetSavingsPlansUtilizationResponse$,
  GetTags$,
  GetTagsCommand,
  GetTagsRequest$,
  GetTagsResponse$,
  GetUsageForecast$,
  GetUsageForecastCommand,
  GetUsageForecastRequest$,
  GetUsageForecastResponse$,
  Granularity,
  Group$,
  GroupDefinition$,
  GroupDefinitionType,
  Impact$,
  InstanceDetails$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  LimitExceededException,
  LimitExceededException$,
  ListCommitmentPurchaseAnalyses$,
  ListCommitmentPurchaseAnalysesCommand,
  ListCommitmentPurchaseAnalysesRequest$,
  ListCommitmentPurchaseAnalysesResponse$,
  ListCostAllocationTagBackfillHistory$,
  ListCostAllocationTagBackfillHistoryCommand,
  ListCostAllocationTagBackfillHistoryRequest$,
  ListCostAllocationTagBackfillHistoryResponse$,
  ListCostAllocationTags$,
  ListCostAllocationTagsCommand,
  ListCostAllocationTagsRequest$,
  ListCostAllocationTagsResponse$,
  ListCostCategoryDefinitions$,
  ListCostCategoryDefinitionsCommand,
  ListCostCategoryDefinitionsRequest$,
  ListCostCategoryDefinitionsResponse$,
  ListCostCategoryResourceAssociations$,
  ListCostCategoryResourceAssociationsCommand,
  ListCostCategoryResourceAssociationsRequest$,
  ListCostCategoryResourceAssociationsResponse$,
  ListSavingsPlansPurchaseRecommendationGeneration$,
  ListSavingsPlansPurchaseRecommendationGenerationCommand,
  ListSavingsPlansPurchaseRecommendationGenerationRequest$,
  ListSavingsPlansPurchaseRecommendationGenerationResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LookbackPeriodInDays,
  MatchOption,
  MemoryDBInstanceDetails$,
  Metric,
  MetricValue$,
  ModifyRecommendationDetail$,
  MonitorDimension,
  MonitorType,
  NetworkResourceUtilization$,
  NumericOperator,
  OfferingClass,
  paginateGetAnomalies,
  paginateGetAnomalyMonitors,
  paginateGetAnomalySubscriptions,
  paginateGetCostAndUsageComparisons,
  paginateGetCostComparisonDrivers,
  paginateGetSavingsPlansCoverage,
  paginateGetSavingsPlansUtilizationDetails,
  paginateListCostAllocationTagBackfillHistory,
  paginateListCostAllocationTags,
  paginateListCostCategoryDefinitions,
  paginateListCostCategoryResourceAssociations,
  PaymentOption,
  PlatformDifference,
  ProvideAnomalyFeedback$,
  ProvideAnomalyFeedbackCommand,
  ProvideAnomalyFeedbackRequest$,
  ProvideAnomalyFeedbackResponse$,
  RDSInstanceDetails$,
  RecommendationDetailData$,
  RecommendationDetailHourlyMetrics$,
  RecommendationTarget,
  RedshiftInstanceDetails$,
  RequestChangedException,
  RequestChangedException$,
  ReservationAggregates$,
  ReservationCoverageGroup$,
  ReservationPurchaseRecommendation$,
  ReservationPurchaseRecommendationDetail$,
  ReservationPurchaseRecommendationMetadata$,
  ReservationPurchaseRecommendationSummary$,
  ReservationUtilizationGroup$,
  ReservedCapacityDetails$,
  ResourceDetails$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceTag$,
  ResourceUtilization$,
  ResultByTime$,
  RightsizingRecommendation$,
  RightsizingRecommendationConfiguration$,
  RightsizingRecommendationMetadata$,
  RightsizingRecommendationSummary$,
  RightsizingType,
  RootCause$,
  RootCauseImpact$,
  SavingsPlans$,
  SavingsPlansAmortizedCommitment$,
  SavingsPlansCoverage$,
  SavingsPlansCoverageData$,
  SavingsPlansDataType,
  SavingsPlansDetails$,
  SavingsPlansPurchaseAnalysisConfiguration$,
  SavingsPlansPurchaseAnalysisDetails$,
  SavingsPlansPurchaseRecommendation$,
  SavingsPlansPurchaseRecommendationDetail$,
  SavingsPlansPurchaseRecommendationMetadata$,
  SavingsPlansPurchaseRecommendationSummary$,
  SavingsPlansSavings$,
  SavingsPlansUtilization$,
  SavingsPlansUtilizationAggregates$,
  SavingsPlansUtilizationByTime$,
  SavingsPlansUtilizationDetail$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceSpecification$,
  SortDefinition$,
  SortOrder,
  StartCommitmentPurchaseAnalysis$,
  StartCommitmentPurchaseAnalysisCommand,
  StartCommitmentPurchaseAnalysisRequest$,
  StartCommitmentPurchaseAnalysisResponse$,
  StartCostAllocationTagBackfill$,
  StartCostAllocationTagBackfillCommand,
  StartCostAllocationTagBackfillRequest$,
  StartCostAllocationTagBackfillResponse$,
  StartSavingsPlansPurchaseRecommendationGeneration$,
  StartSavingsPlansPurchaseRecommendationGenerationCommand,
  StartSavingsPlansPurchaseRecommendationGenerationRequest$,
  StartSavingsPlansPurchaseRecommendationGenerationResponse$,
  Subscriber$,
  SubscriberStatus,
  SubscriberType,
  SupportedSavingsPlansType,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TagValues$,
  TargetInstance$,
  TerminateRecommendationDetail$,
  TermInYears,
  TooManyTagsException,
  TooManyTagsException$,
  TotalImpactFilter$,
  UnknownMonitorException,
  UnknownMonitorException$,
  UnknownSubscriptionException,
  UnknownSubscriptionException$,
  UnresolvableUsageUnitException,
  UnresolvableUsageUnitException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAnomalyMonitor$,
  UpdateAnomalyMonitorCommand,
  UpdateAnomalyMonitorRequest$,
  UpdateAnomalyMonitorResponse$,
  UpdateAnomalySubscription$,
  UpdateAnomalySubscriptionCommand,
  UpdateAnomalySubscriptionRequest$,
  UpdateAnomalySubscriptionResponse$,
  UpdateCostAllocationTagsStatus$,
  UpdateCostAllocationTagsStatusCommand,
  UpdateCostAllocationTagsStatusError$,
  UpdateCostAllocationTagsStatusRequest$,
  UpdateCostAllocationTagsStatusResponse$,
  UpdateCostCategoryDefinition$,
  UpdateCostCategoryDefinitionCommand,
  UpdateCostCategoryDefinitionRequest$,
  UpdateCostCategoryDefinitionResponse$,
  UtilizationByTime$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CostExplorerClient === "function");
assert(typeof CostExplorer === "function");
// commands
assert(typeof CreateAnomalyMonitorCommand === "function");
assert(typeof CreateAnomalyMonitor$ === "object");
assert(typeof CreateAnomalySubscriptionCommand === "function");
assert(typeof CreateAnomalySubscription$ === "object");
assert(typeof CreateCostCategoryDefinitionCommand === "function");
assert(typeof CreateCostCategoryDefinition$ === "object");
assert(typeof DeleteAnomalyMonitorCommand === "function");
assert(typeof DeleteAnomalyMonitor$ === "object");
assert(typeof DeleteAnomalySubscriptionCommand === "function");
assert(typeof DeleteAnomalySubscription$ === "object");
assert(typeof DeleteCostCategoryDefinitionCommand === "function");
assert(typeof DeleteCostCategoryDefinition$ === "object");
assert(typeof DescribeCostCategoryDefinitionCommand === "function");
assert(typeof DescribeCostCategoryDefinition$ === "object");
assert(typeof GetAnomaliesCommand === "function");
assert(typeof GetAnomalies$ === "object");
assert(typeof GetAnomalyMonitorsCommand === "function");
assert(typeof GetAnomalyMonitors$ === "object");
assert(typeof GetAnomalySubscriptionsCommand === "function");
assert(typeof GetAnomalySubscriptions$ === "object");
assert(typeof GetApproximateUsageRecordsCommand === "function");
assert(typeof GetApproximateUsageRecords$ === "object");
assert(typeof GetCommitmentPurchaseAnalysisCommand === "function");
assert(typeof GetCommitmentPurchaseAnalysis$ === "object");
assert(typeof GetCostAndUsageCommand === "function");
assert(typeof GetCostAndUsage$ === "object");
assert(typeof GetCostAndUsageComparisonsCommand === "function");
assert(typeof GetCostAndUsageComparisons$ === "object");
assert(typeof GetCostAndUsageWithResourcesCommand === "function");
assert(typeof GetCostAndUsageWithResources$ === "object");
assert(typeof GetCostCategoriesCommand === "function");
assert(typeof GetCostCategories$ === "object");
assert(typeof GetCostComparisonDriversCommand === "function");
assert(typeof GetCostComparisonDrivers$ === "object");
assert(typeof GetCostForecastCommand === "function");
assert(typeof GetCostForecast$ === "object");
assert(typeof GetDimensionValuesCommand === "function");
assert(typeof GetDimensionValues$ === "object");
assert(typeof GetReservationCoverageCommand === "function");
assert(typeof GetReservationCoverage$ === "object");
assert(typeof GetReservationPurchaseRecommendationCommand === "function");
assert(typeof GetReservationPurchaseRecommendation$ === "object");
assert(typeof GetReservationUtilizationCommand === "function");
assert(typeof GetReservationUtilization$ === "object");
assert(typeof GetRightsizingRecommendationCommand === "function");
assert(typeof GetRightsizingRecommendation$ === "object");
assert(typeof GetSavingsPlanPurchaseRecommendationDetailsCommand === "function");
assert(typeof GetSavingsPlanPurchaseRecommendationDetails$ === "object");
assert(typeof GetSavingsPlansCoverageCommand === "function");
assert(typeof GetSavingsPlansCoverage$ === "object");
assert(typeof GetSavingsPlansPurchaseRecommendationCommand === "function");
assert(typeof GetSavingsPlansPurchaseRecommendation$ === "object");
assert(typeof GetSavingsPlansUtilizationCommand === "function");
assert(typeof GetSavingsPlansUtilization$ === "object");
assert(typeof GetSavingsPlansUtilizationDetailsCommand === "function");
assert(typeof GetSavingsPlansUtilizationDetails$ === "object");
assert(typeof GetTagsCommand === "function");
assert(typeof GetTags$ === "object");
assert(typeof GetUsageForecastCommand === "function");
assert(typeof GetUsageForecast$ === "object");
assert(typeof ListCommitmentPurchaseAnalysesCommand === "function");
assert(typeof ListCommitmentPurchaseAnalyses$ === "object");
assert(typeof ListCostAllocationTagBackfillHistoryCommand === "function");
assert(typeof ListCostAllocationTagBackfillHistory$ === "object");
assert(typeof ListCostAllocationTagsCommand === "function");
assert(typeof ListCostAllocationTags$ === "object");
assert(typeof ListCostCategoryDefinitionsCommand === "function");
assert(typeof ListCostCategoryDefinitions$ === "object");
assert(typeof ListCostCategoryResourceAssociationsCommand === "function");
assert(typeof ListCostCategoryResourceAssociations$ === "object");
assert(typeof ListSavingsPlansPurchaseRecommendationGenerationCommand === "function");
assert(typeof ListSavingsPlansPurchaseRecommendationGeneration$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ProvideAnomalyFeedbackCommand === "function");
assert(typeof ProvideAnomalyFeedback$ === "object");
assert(typeof StartCommitmentPurchaseAnalysisCommand === "function");
assert(typeof StartCommitmentPurchaseAnalysis$ === "object");
assert(typeof StartCostAllocationTagBackfillCommand === "function");
assert(typeof StartCostAllocationTagBackfill$ === "object");
assert(typeof StartSavingsPlansPurchaseRecommendationGenerationCommand === "function");
assert(typeof StartSavingsPlansPurchaseRecommendationGeneration$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAnomalyMonitorCommand === "function");
assert(typeof UpdateAnomalyMonitor$ === "object");
assert(typeof UpdateAnomalySubscriptionCommand === "function");
assert(typeof UpdateAnomalySubscription$ === "object");
assert(typeof UpdateCostAllocationTagsStatusCommand === "function");
assert(typeof UpdateCostAllocationTagsStatus$ === "object");
assert(typeof UpdateCostCategoryDefinitionCommand === "function");
assert(typeof UpdateCostCategoryDefinition$ === "object");
// structural schemas
assert(typeof AnalysisDetails$ === "object");
assert(typeof AnalysisSummary$ === "object");
assert(typeof Anomaly$ === "object");
assert(typeof AnomalyDateInterval$ === "object");
assert(typeof AnomalyMonitor$ === "object");
assert(typeof AnomalyScore$ === "object");
assert(typeof AnomalySubscription$ === "object");
assert(typeof CommitmentPurchaseAnalysisConfiguration$ === "object");
assert(typeof ComparisonMetricValue$ === "object");
assert(typeof CostAllocationTag$ === "object");
assert(typeof CostAllocationTagBackfillRequest$ === "object");
assert(typeof CostAllocationTagStatusEntry$ === "object");
assert(typeof CostAndUsageComparison$ === "object");
assert(typeof CostCategory$ === "object");
assert(typeof CostCategoryInheritedValueDimension$ === "object");
assert(typeof CostCategoryProcessingStatus$ === "object");
assert(typeof CostCategoryReference$ === "object");
assert(typeof CostCategoryResourceAssociation$ === "object");
assert(typeof CostCategoryRule$ === "object");
assert(typeof CostCategorySplitChargeRule$ === "object");
assert(typeof CostCategorySplitChargeRuleParameter$ === "object");
assert(typeof CostCategoryValues$ === "object");
assert(typeof CostComparisonDriver$ === "object");
assert(typeof CostDriver$ === "object");
assert(typeof Coverage$ === "object");
assert(typeof CoverageByTime$ === "object");
assert(typeof CoverageCost$ === "object");
assert(typeof CoverageHours$ === "object");
assert(typeof CoverageNormalizedUnits$ === "object");
assert(typeof CreateAnomalyMonitorRequest$ === "object");
assert(typeof CreateAnomalyMonitorResponse$ === "object");
assert(typeof CreateAnomalySubscriptionRequest$ === "object");
assert(typeof CreateAnomalySubscriptionResponse$ === "object");
assert(typeof CreateCostCategoryDefinitionRequest$ === "object");
assert(typeof CreateCostCategoryDefinitionResponse$ === "object");
assert(typeof CurrentInstance$ === "object");
assert(typeof DateInterval$ === "object");
assert(typeof DeleteAnomalyMonitorRequest$ === "object");
assert(typeof DeleteAnomalyMonitorResponse$ === "object");
assert(typeof DeleteAnomalySubscriptionRequest$ === "object");
assert(typeof DeleteAnomalySubscriptionResponse$ === "object");
assert(typeof DeleteCostCategoryDefinitionRequest$ === "object");
assert(typeof DeleteCostCategoryDefinitionResponse$ === "object");
assert(typeof DescribeCostCategoryDefinitionRequest$ === "object");
assert(typeof DescribeCostCategoryDefinitionResponse$ === "object");
assert(typeof DimensionValues$ === "object");
assert(typeof DimensionValuesWithAttributes$ === "object");
assert(typeof DiskResourceUtilization$ === "object");
assert(typeof DynamoDBCapacityDetails$ === "object");
assert(typeof EBSResourceUtilization$ === "object");
assert(typeof EC2InstanceDetails$ === "object");
assert(typeof EC2ResourceDetails$ === "object");
assert(typeof EC2ResourceUtilization$ === "object");
assert(typeof EC2Specification$ === "object");
assert(typeof ElastiCacheInstanceDetails$ === "object");
assert(typeof ESInstanceDetails$ === "object");
assert(typeof Expression$ === "object");
assert(typeof ForecastResult$ === "object");
assert(typeof GenerationSummary$ === "object");
assert(typeof GetAnomaliesRequest$ === "object");
assert(typeof GetAnomaliesResponse$ === "object");
assert(typeof GetAnomalyMonitorsRequest$ === "object");
assert(typeof GetAnomalyMonitorsResponse$ === "object");
assert(typeof GetAnomalySubscriptionsRequest$ === "object");
assert(typeof GetAnomalySubscriptionsResponse$ === "object");
assert(typeof GetApproximateUsageRecordsRequest$ === "object");
assert(typeof GetApproximateUsageRecordsResponse$ === "object");
assert(typeof GetCommitmentPurchaseAnalysisRequest$ === "object");
assert(typeof GetCommitmentPurchaseAnalysisResponse$ === "object");
assert(typeof GetCostAndUsageComparisonsRequest$ === "object");
assert(typeof GetCostAndUsageComparisonsResponse$ === "object");
assert(typeof GetCostAndUsageRequest$ === "object");
assert(typeof GetCostAndUsageResponse$ === "object");
assert(typeof GetCostAndUsageWithResourcesRequest$ === "object");
assert(typeof GetCostAndUsageWithResourcesResponse$ === "object");
assert(typeof GetCostCategoriesRequest$ === "object");
assert(typeof GetCostCategoriesResponse$ === "object");
assert(typeof GetCostComparisonDriversRequest$ === "object");
assert(typeof GetCostComparisonDriversResponse$ === "object");
assert(typeof GetCostForecastRequest$ === "object");
assert(typeof GetCostForecastResponse$ === "object");
assert(typeof GetDimensionValuesRequest$ === "object");
assert(typeof GetDimensionValuesResponse$ === "object");
assert(typeof GetReservationCoverageRequest$ === "object");
assert(typeof GetReservationCoverageResponse$ === "object");
assert(typeof GetReservationPurchaseRecommendationRequest$ === "object");
assert(typeof GetReservationPurchaseRecommendationResponse$ === "object");
assert(typeof GetReservationUtilizationRequest$ === "object");
assert(typeof GetReservationUtilizationResponse$ === "object");
assert(typeof GetRightsizingRecommendationRequest$ === "object");
assert(typeof GetRightsizingRecommendationResponse$ === "object");
assert(typeof GetSavingsPlanPurchaseRecommendationDetailsRequest$ === "object");
assert(typeof GetSavingsPlanPurchaseRecommendationDetailsResponse$ === "object");
assert(typeof GetSavingsPlansCoverageRequest$ === "object");
assert(typeof GetSavingsPlansCoverageResponse$ === "object");
assert(typeof GetSavingsPlansPurchaseRecommendationRequest$ === "object");
assert(typeof GetSavingsPlansPurchaseRecommendationResponse$ === "object");
assert(typeof GetSavingsPlansUtilizationDetailsRequest$ === "object");
assert(typeof GetSavingsPlansUtilizationDetailsResponse$ === "object");
assert(typeof GetSavingsPlansUtilizationRequest$ === "object");
assert(typeof GetSavingsPlansUtilizationResponse$ === "object");
assert(typeof GetTagsRequest$ === "object");
assert(typeof GetTagsResponse$ === "object");
assert(typeof GetUsageForecastRequest$ === "object");
assert(typeof GetUsageForecastResponse$ === "object");
assert(typeof Group$ === "object");
assert(typeof GroupDefinition$ === "object");
assert(typeof Impact$ === "object");
assert(typeof InstanceDetails$ === "object");
assert(typeof ListCommitmentPurchaseAnalysesRequest$ === "object");
assert(typeof ListCommitmentPurchaseAnalysesResponse$ === "object");
assert(typeof ListCostAllocationTagBackfillHistoryRequest$ === "object");
assert(typeof ListCostAllocationTagBackfillHistoryResponse$ === "object");
assert(typeof ListCostAllocationTagsRequest$ === "object");
assert(typeof ListCostAllocationTagsResponse$ === "object");
assert(typeof ListCostCategoryDefinitionsRequest$ === "object");
assert(typeof ListCostCategoryDefinitionsResponse$ === "object");
assert(typeof ListCostCategoryResourceAssociationsRequest$ === "object");
assert(typeof ListCostCategoryResourceAssociationsResponse$ === "object");
assert(typeof ListSavingsPlansPurchaseRecommendationGenerationRequest$ === "object");
assert(typeof ListSavingsPlansPurchaseRecommendationGenerationResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MemoryDBInstanceDetails$ === "object");
assert(typeof MetricValue$ === "object");
assert(typeof ModifyRecommendationDetail$ === "object");
assert(typeof NetworkResourceUtilization$ === "object");
assert(typeof ProvideAnomalyFeedbackRequest$ === "object");
assert(typeof ProvideAnomalyFeedbackResponse$ === "object");
assert(typeof RDSInstanceDetails$ === "object");
assert(typeof RecommendationDetailData$ === "object");
assert(typeof RecommendationDetailHourlyMetrics$ === "object");
assert(typeof RedshiftInstanceDetails$ === "object");
assert(typeof ReservationAggregates$ === "object");
assert(typeof ReservationCoverageGroup$ === "object");
assert(typeof ReservationPurchaseRecommendation$ === "object");
assert(typeof ReservationPurchaseRecommendationDetail$ === "object");
assert(typeof ReservationPurchaseRecommendationMetadata$ === "object");
assert(typeof ReservationPurchaseRecommendationSummary$ === "object");
assert(typeof ReservationUtilizationGroup$ === "object");
assert(typeof ReservedCapacityDetails$ === "object");
assert(typeof ResourceDetails$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof ResourceUtilization$ === "object");
assert(typeof ResultByTime$ === "object");
assert(typeof RightsizingRecommendation$ === "object");
assert(typeof RightsizingRecommendationConfiguration$ === "object");
assert(typeof RightsizingRecommendationMetadata$ === "object");
assert(typeof RightsizingRecommendationSummary$ === "object");
assert(typeof RootCause$ === "object");
assert(typeof RootCauseImpact$ === "object");
assert(typeof SavingsPlans$ === "object");
assert(typeof SavingsPlansAmortizedCommitment$ === "object");
assert(typeof SavingsPlansCoverage$ === "object");
assert(typeof SavingsPlansCoverageData$ === "object");
assert(typeof SavingsPlansDetails$ === "object");
assert(typeof SavingsPlansPurchaseAnalysisConfiguration$ === "object");
assert(typeof SavingsPlansPurchaseAnalysisDetails$ === "object");
assert(typeof SavingsPlansPurchaseRecommendation$ === "object");
assert(typeof SavingsPlansPurchaseRecommendationDetail$ === "object");
assert(typeof SavingsPlansPurchaseRecommendationMetadata$ === "object");
assert(typeof SavingsPlansPurchaseRecommendationSummary$ === "object");
assert(typeof SavingsPlansSavings$ === "object");
assert(typeof SavingsPlansUtilization$ === "object");
assert(typeof SavingsPlansUtilizationAggregates$ === "object");
assert(typeof SavingsPlansUtilizationByTime$ === "object");
assert(typeof SavingsPlansUtilizationDetail$ === "object");
assert(typeof ServiceSpecification$ === "object");
assert(typeof SortDefinition$ === "object");
assert(typeof StartCommitmentPurchaseAnalysisRequest$ === "object");
assert(typeof StartCommitmentPurchaseAnalysisResponse$ === "object");
assert(typeof StartCostAllocationTagBackfillRequest$ === "object");
assert(typeof StartCostAllocationTagBackfillResponse$ === "object");
assert(typeof StartSavingsPlansPurchaseRecommendationGenerationRequest$ === "object");
assert(typeof StartSavingsPlansPurchaseRecommendationGenerationResponse$ === "object");
assert(typeof Subscriber$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TagValues$ === "object");
assert(typeof TargetInstance$ === "object");
assert(typeof TerminateRecommendationDetail$ === "object");
assert(typeof TotalImpactFilter$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAnomalyMonitorRequest$ === "object");
assert(typeof UpdateAnomalyMonitorResponse$ === "object");
assert(typeof UpdateAnomalySubscriptionRequest$ === "object");
assert(typeof UpdateAnomalySubscriptionResponse$ === "object");
assert(typeof UpdateCostAllocationTagsStatusError$ === "object");
assert(typeof UpdateCostAllocationTagsStatusRequest$ === "object");
assert(typeof UpdateCostAllocationTagsStatusResponse$ === "object");
assert(typeof UpdateCostCategoryDefinitionRequest$ === "object");
assert(typeof UpdateCostCategoryDefinitionResponse$ === "object");
assert(typeof UtilizationByTime$ === "object");
// enums
assert(typeof AccountScope === "object");
assert(typeof AnalysisStatus === "object");
assert(typeof AnalysisType === "object");
assert(typeof AnomalyFeedbackType === "object");
assert(typeof AnomalySubscriptionFrequency === "object");
assert(typeof ApproximationDimension === "object");
assert(typeof Context === "object");
assert(typeof CostAllocationTagBackfillStatus === "object");
assert(typeof CostAllocationTagStatus === "object");
assert(typeof CostAllocationTagType === "object");
assert(typeof CostCategoryInheritedValueDimensionName === "object");
assert(typeof CostCategoryRuleType === "object");
assert(typeof CostCategoryRuleVersion === "object");
assert(typeof CostCategorySplitChargeMethod === "object");
assert(typeof CostCategorySplitChargeRuleParameterType === "object");
assert(typeof CostCategoryStatus === "object");
assert(typeof CostCategoryStatusComponent === "object");
assert(typeof Dimension === "object");
assert(typeof ErrorCode === "object");
assert(typeof FindingReasonCode === "object");
assert(typeof GenerationStatus === "object");
assert(typeof Granularity === "object");
assert(typeof GroupDefinitionType === "object");
assert(typeof LookbackPeriodInDays === "object");
assert(typeof MatchOption === "object");
assert(typeof Metric === "object");
assert(typeof MonitorDimension === "object");
assert(typeof MonitorType === "object");
assert(typeof NumericOperator === "object");
assert(typeof OfferingClass === "object");
assert(typeof PaymentOption === "object");
assert(typeof PlatformDifference === "object");
assert(typeof RecommendationTarget === "object");
assert(typeof RightsizingType === "object");
assert(typeof SavingsPlansDataType === "object");
assert(typeof SortOrder === "object");
assert(typeof SubscriberStatus === "object");
assert(typeof SubscriberType === "object");
assert(typeof SupportedSavingsPlansType === "object");
assert(typeof TermInYears === "object");
// errors
assert(AnalysisNotFoundException.prototype instanceof CostExplorerServiceException);
assert(typeof AnalysisNotFoundException$ === "object");
assert(BackfillLimitExceededException.prototype instanceof CostExplorerServiceException);
assert(typeof BackfillLimitExceededException$ === "object");
assert(BillExpirationException.prototype instanceof CostExplorerServiceException);
assert(typeof BillExpirationException$ === "object");
assert(BillingViewHealthStatusException.prototype instanceof CostExplorerServiceException);
assert(typeof BillingViewHealthStatusException$ === "object");
assert(DataUnavailableException.prototype instanceof CostExplorerServiceException);
assert(typeof DataUnavailableException$ === "object");
assert(GenerationExistsException.prototype instanceof CostExplorerServiceException);
assert(typeof GenerationExistsException$ === "object");
assert(InvalidNextTokenException.prototype instanceof CostExplorerServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(LimitExceededException.prototype instanceof CostExplorerServiceException);
assert(typeof LimitExceededException$ === "object");
assert(RequestChangedException.prototype instanceof CostExplorerServiceException);
assert(typeof RequestChangedException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CostExplorerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof CostExplorerServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(TooManyTagsException.prototype instanceof CostExplorerServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnknownMonitorException.prototype instanceof CostExplorerServiceException);
assert(typeof UnknownMonitorException$ === "object");
assert(UnknownSubscriptionException.prototype instanceof CostExplorerServiceException);
assert(typeof UnknownSubscriptionException$ === "object");
assert(UnresolvableUsageUnitException.prototype instanceof CostExplorerServiceException);
assert(typeof UnresolvableUsageUnitException$ === "object");
assert(CostExplorerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetAnomalies === "function");
assert(typeof paginateGetAnomalyMonitors === "function");
assert(typeof paginateGetAnomalySubscriptions === "function");
assert(typeof paginateGetCostAndUsageComparisons === "function");
assert(typeof paginateGetCostComparisonDrivers === "function");
assert(typeof paginateGetSavingsPlansCoverage === "function");
assert(typeof paginateGetSavingsPlansUtilizationDetails === "function");
assert(typeof paginateListCostAllocationTagBackfillHistory === "function");
assert(typeof paginateListCostAllocationTags === "function");
assert(typeof paginateListCostCategoryDefinitions === "function");
assert(typeof paginateListCostCategoryResourceAssociations === "function");
console.log(`CostExplorer index test passed.`);
