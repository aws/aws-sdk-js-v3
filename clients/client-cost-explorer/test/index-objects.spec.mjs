import {
  AccountScope,
  AnalysisNotFoundException,
  AnalysisStatus,
  AnalysisType,
  AnomalyFeedbackType,
  AnomalySubscriptionFrequency,
  ApproximationDimension,
  BackfillLimitExceededException,
  BillExpirationException,
  BillingViewHealthStatusException,
  Context,
  CostAllocationTagBackfillStatus,
  CostAllocationTagStatus,
  CostAllocationTagType,
  CostCategoryInheritedValueDimensionName,
  CostCategoryRuleType,
  CostCategoryRuleVersion,
  CostCategorySplitChargeMethod,
  CostCategorySplitChargeRuleParameterType,
  CostCategoryStatus,
  CostCategoryStatusComponent,
  CostExplorer,
  CostExplorerClient,
  CostExplorerServiceException,
  CreateAnomalyMonitorCommand,
  CreateAnomalySubscriptionCommand,
  CreateCostCategoryDefinitionCommand,
  DataUnavailableException,
  DeleteAnomalyMonitorCommand,
  DeleteAnomalySubscriptionCommand,
  DeleteCostCategoryDefinitionCommand,
  DescribeCostCategoryDefinitionCommand,
  Dimension,
  ErrorCode,
  FindingReasonCode,
  GenerationExistsException,
  GenerationStatus,
  GetAnomaliesCommand,
  GetAnomalyMonitorsCommand,
  GetAnomalySubscriptionsCommand,
  GetApproximateUsageRecordsCommand,
  GetCommitmentPurchaseAnalysisCommand,
  GetCostAndUsageCommand,
  GetCostAndUsageComparisonsCommand,
  GetCostAndUsageWithResourcesCommand,
  GetCostCategoriesCommand,
  GetCostComparisonDriversCommand,
  GetCostForecastCommand,
  GetDimensionValuesCommand,
  GetReservationCoverageCommand,
  GetReservationPurchaseRecommendationCommand,
  GetReservationUtilizationCommand,
  GetRightsizingRecommendationCommand,
  GetSavingsPlanPurchaseRecommendationDetailsCommand,
  GetSavingsPlansCoverageCommand,
  GetSavingsPlansPurchaseRecommendationCommand,
  GetSavingsPlansUtilizationCommand,
  GetSavingsPlansUtilizationDetailsCommand,
  GetTagsCommand,
  GetUsageForecastCommand,
  Granularity,
  GroupDefinitionType,
  InvalidNextTokenException,
  LimitExceededException,
  ListCommitmentPurchaseAnalysesCommand,
  ListCostAllocationTagBackfillHistoryCommand,
  ListCostAllocationTagsCommand,
  ListCostCategoryDefinitionsCommand,
  ListSavingsPlansPurchaseRecommendationGenerationCommand,
  ListTagsForResourceCommand,
  LookbackPeriodInDays,
  MatchOption,
  Metric,
  MonitorDimension,
  MonitorType,
  NumericOperator,
  OfferingClass,
  PaymentOption,
  PlatformDifference,
  ProvideAnomalyFeedbackCommand,
  RecommendationTarget,
  RequestChangedException,
  ResourceNotFoundException,
  RightsizingType,
  SavingsPlansDataType,
  ServiceQuotaExceededException,
  SortOrder,
  StartCommitmentPurchaseAnalysisCommand,
  StartCostAllocationTagBackfillCommand,
  StartSavingsPlansPurchaseRecommendationGenerationCommand,
  SubscriberStatus,
  SubscriberType,
  SupportedSavingsPlansType,
  TagResourceCommand,
  TermInYears,
  TooManyTagsException,
  UnknownMonitorException,
  UnknownSubscriptionException,
  UnresolvableUsageUnitException,
  UntagResourceCommand,
  UpdateAnomalyMonitorCommand,
  UpdateAnomalySubscriptionCommand,
  UpdateCostAllocationTagsStatusCommand,
  UpdateCostCategoryDefinitionCommand,
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
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CostExplorerClient === "function");
assert(typeof CostExplorer === "function");
// commands
assert(typeof CreateAnomalyMonitorCommand === "function");
assert(typeof CreateAnomalySubscriptionCommand === "function");
assert(typeof CreateCostCategoryDefinitionCommand === "function");
assert(typeof DeleteAnomalyMonitorCommand === "function");
assert(typeof DeleteAnomalySubscriptionCommand === "function");
assert(typeof DeleteCostCategoryDefinitionCommand === "function");
assert(typeof DescribeCostCategoryDefinitionCommand === "function");
assert(typeof GetAnomaliesCommand === "function");
assert(typeof GetAnomalyMonitorsCommand === "function");
assert(typeof GetAnomalySubscriptionsCommand === "function");
assert(typeof GetApproximateUsageRecordsCommand === "function");
assert(typeof GetCommitmentPurchaseAnalysisCommand === "function");
assert(typeof GetCostAndUsageCommand === "function");
assert(typeof GetCostAndUsageComparisonsCommand === "function");
assert(typeof GetCostAndUsageWithResourcesCommand === "function");
assert(typeof GetCostCategoriesCommand === "function");
assert(typeof GetCostComparisonDriversCommand === "function");
assert(typeof GetCostForecastCommand === "function");
assert(typeof GetDimensionValuesCommand === "function");
assert(typeof GetReservationCoverageCommand === "function");
assert(typeof GetReservationPurchaseRecommendationCommand === "function");
assert(typeof GetReservationUtilizationCommand === "function");
assert(typeof GetRightsizingRecommendationCommand === "function");
assert(typeof GetSavingsPlanPurchaseRecommendationDetailsCommand === "function");
assert(typeof GetSavingsPlansCoverageCommand === "function");
assert(typeof GetSavingsPlansPurchaseRecommendationCommand === "function");
assert(typeof GetSavingsPlansUtilizationCommand === "function");
assert(typeof GetSavingsPlansUtilizationDetailsCommand === "function");
assert(typeof GetTagsCommand === "function");
assert(typeof GetUsageForecastCommand === "function");
assert(typeof ListCommitmentPurchaseAnalysesCommand === "function");
assert(typeof ListCostAllocationTagBackfillHistoryCommand === "function");
assert(typeof ListCostAllocationTagsCommand === "function");
assert(typeof ListCostCategoryDefinitionsCommand === "function");
assert(typeof ListSavingsPlansPurchaseRecommendationGenerationCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ProvideAnomalyFeedbackCommand === "function");
assert(typeof StartCommitmentPurchaseAnalysisCommand === "function");
assert(typeof StartCostAllocationTagBackfillCommand === "function");
assert(typeof StartSavingsPlansPurchaseRecommendationGenerationCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAnomalyMonitorCommand === "function");
assert(typeof UpdateAnomalySubscriptionCommand === "function");
assert(typeof UpdateCostAllocationTagsStatusCommand === "function");
assert(typeof UpdateCostCategoryDefinitionCommand === "function");
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
assert(BackfillLimitExceededException.prototype instanceof CostExplorerServiceException);
assert(BillExpirationException.prototype instanceof CostExplorerServiceException);
assert(BillingViewHealthStatusException.prototype instanceof CostExplorerServiceException);
assert(DataUnavailableException.prototype instanceof CostExplorerServiceException);
assert(GenerationExistsException.prototype instanceof CostExplorerServiceException);
assert(InvalidNextTokenException.prototype instanceof CostExplorerServiceException);
assert(LimitExceededException.prototype instanceof CostExplorerServiceException);
assert(RequestChangedException.prototype instanceof CostExplorerServiceException);
assert(ResourceNotFoundException.prototype instanceof CostExplorerServiceException);
assert(ServiceQuotaExceededException.prototype instanceof CostExplorerServiceException);
assert(TooManyTagsException.prototype instanceof CostExplorerServiceException);
assert(UnknownMonitorException.prototype instanceof CostExplorerServiceException);
assert(UnknownSubscriptionException.prototype instanceof CostExplorerServiceException);
assert(UnresolvableUsageUnitException.prototype instanceof CostExplorerServiceException);
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
console.log(`CostExplorer index test passed.`);
