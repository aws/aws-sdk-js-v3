import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountEnrollmentStatus$,
  ActionType,
  AllocationStrategy,
  AuroraDbClusterStorage$,
  AuroraDbClusterStorageConfiguration$,
  BlockStoragePerformanceConfiguration$,
  ComputeConfiguration$,
  ComputeSavingsPlans$,
  ComputeSavingsPlansConfiguration$,
  CostOptimizationHub,
  CostOptimizationHubClient,
  CostOptimizationHubServiceException,
  DbInstanceConfiguration$,
  DynamoDbReservedCapacity$,
  DynamoDbReservedCapacityConfiguration$,
  EbsVolume$,
  EbsVolumeConfiguration$,
  Ec2AutoScalingGroup$,
  Ec2AutoScalingGroupConfiguration$,
  Ec2AutoScalingGroupType,
  Ec2Instance$,
  Ec2InstanceConfiguration$,
  Ec2InstanceSavingsPlans$,
  Ec2InstanceSavingsPlansConfiguration$,
  Ec2ReservedInstances$,
  Ec2ReservedInstancesConfiguration$,
  EcsService$,
  EcsServiceConfiguration$,
  EfficiencyMetricsByGroup$,
  ElastiCacheReservedInstances$,
  ElastiCacheReservedInstancesConfiguration$,
  EnrollmentStatus,
  EstimatedDiscounts$,
  Filter$,
  GetPreferences$,
  GetPreferencesCommand,
  GetPreferencesRequest$,
  GetPreferencesResponse$,
  GetRecommendation$,
  GetRecommendationCommand,
  GetRecommendationRequest$,
  GetRecommendationResponse$,
  GranularityType,
  ImplementationEffort,
  InstanceConfiguration$,
  InternalServerException,
  InternalServerException$,
  LambdaFunction$,
  LambdaFunctionConfiguration$,
  ListEfficiencyMetrics$,
  ListEfficiencyMetricsCommand,
  ListEfficiencyMetricsRequest$,
  ListEfficiencyMetricsResponse$,
  ListEnrollmentStatuses$,
  ListEnrollmentStatusesCommand,
  ListEnrollmentStatusesRequest$,
  ListEnrollmentStatusesResponse$,
  ListRecommendations$,
  ListRecommendationsCommand,
  ListRecommendationsRequest$,
  ListRecommendationsResponse$,
  ListRecommendationSummaries$,
  ListRecommendationSummariesCommand,
  ListRecommendationSummariesRequest$,
  ListRecommendationSummariesResponse$,
  MemberAccountDiscountVisibility,
  MemoryDbReservedInstances$,
  MemoryDbReservedInstancesConfiguration$,
  MetricsByTime$,
  MixedInstanceConfiguration$,
  NatGateway$,
  NatGatewayConfiguration$,
  OpenSearchReservedInstances$,
  OpenSearchReservedInstancesConfiguration$,
  Order,
  OrderBy$,
  paginateListEfficiencyMetrics,
  paginateListEnrollmentStatuses,
  paginateListRecommendations,
  paginateListRecommendationSummaries,
  PaymentOption,
  PreferredCommitment$,
  RdsDbInstance$,
  RdsDbInstanceConfiguration$,
  RdsDbInstanceStorage$,
  RdsDbInstanceStorageConfiguration$,
  RdsReservedInstances$,
  RdsReservedInstancesConfiguration$,
  Recommendation$,
  RecommendationSummary$,
  RedshiftReservedInstances$,
  RedshiftReservedInstancesConfiguration$,
  ReservedInstancesCostCalculation$,
  ReservedInstancesPricing$,
  ResourceCostCalculation$,
  ResourceDetails$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcePricing$,
  ResourceType,
  SageMakerSavingsPlans$,
  SageMakerSavingsPlansConfiguration$,
  SavingsEstimationMode,
  SavingsPlansCostCalculation$,
  SavingsPlansPricing$,
  Source,
  StorageConfiguration$,
  SummaryMetrics,
  SummaryMetricsResult$,
  Tag$,
  Term,
  ThrottlingException,
  ThrottlingException$,
  TimePeriod$,
  UpdateEnrollmentStatus$,
  UpdateEnrollmentStatusCommand,
  UpdateEnrollmentStatusRequest$,
  UpdateEnrollmentStatusResponse$,
  UpdatePreferences$,
  UpdatePreferencesCommand,
  UpdatePreferencesRequest$,
  UpdatePreferencesResponse$,
  Usage$,
  ValidationException,
  ValidationException$,
  ValidationExceptionDetail$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CostOptimizationHubClient === "function");
assert(typeof CostOptimizationHub === "function");
// commands
assert(typeof GetPreferencesCommand === "function");
assert(typeof GetPreferences$ === "object");
assert(typeof GetRecommendationCommand === "function");
assert(typeof GetRecommendation$ === "object");
assert(typeof ListEfficiencyMetricsCommand === "function");
assert(typeof ListEfficiencyMetrics$ === "object");
assert(typeof ListEnrollmentStatusesCommand === "function");
assert(typeof ListEnrollmentStatuses$ === "object");
assert(typeof ListRecommendationsCommand === "function");
assert(typeof ListRecommendations$ === "object");
assert(typeof ListRecommendationSummariesCommand === "function");
assert(typeof ListRecommendationSummaries$ === "object");
assert(typeof UpdateEnrollmentStatusCommand === "function");
assert(typeof UpdateEnrollmentStatus$ === "object");
assert(typeof UpdatePreferencesCommand === "function");
assert(typeof UpdatePreferences$ === "object");
// structural schemas
assert(typeof AccountEnrollmentStatus$ === "object");
assert(typeof AuroraDbClusterStorage$ === "object");
assert(typeof AuroraDbClusterStorageConfiguration$ === "object");
assert(typeof BlockStoragePerformanceConfiguration$ === "object");
assert(typeof ComputeConfiguration$ === "object");
assert(typeof ComputeSavingsPlans$ === "object");
assert(typeof ComputeSavingsPlansConfiguration$ === "object");
assert(typeof DbInstanceConfiguration$ === "object");
assert(typeof DynamoDbReservedCapacity$ === "object");
assert(typeof DynamoDbReservedCapacityConfiguration$ === "object");
assert(typeof EbsVolume$ === "object");
assert(typeof EbsVolumeConfiguration$ === "object");
assert(typeof Ec2AutoScalingGroup$ === "object");
assert(typeof Ec2AutoScalingGroupConfiguration$ === "object");
assert(typeof Ec2Instance$ === "object");
assert(typeof Ec2InstanceConfiguration$ === "object");
assert(typeof Ec2InstanceSavingsPlans$ === "object");
assert(typeof Ec2InstanceSavingsPlansConfiguration$ === "object");
assert(typeof Ec2ReservedInstances$ === "object");
assert(typeof Ec2ReservedInstancesConfiguration$ === "object");
assert(typeof EcsService$ === "object");
assert(typeof EcsServiceConfiguration$ === "object");
assert(typeof EfficiencyMetricsByGroup$ === "object");
assert(typeof ElastiCacheReservedInstances$ === "object");
assert(typeof ElastiCacheReservedInstancesConfiguration$ === "object");
assert(typeof EstimatedDiscounts$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetPreferencesRequest$ === "object");
assert(typeof GetPreferencesResponse$ === "object");
assert(typeof GetRecommendationRequest$ === "object");
assert(typeof GetRecommendationResponse$ === "object");
assert(typeof InstanceConfiguration$ === "object");
assert(typeof LambdaFunction$ === "object");
assert(typeof LambdaFunctionConfiguration$ === "object");
assert(typeof ListEfficiencyMetricsRequest$ === "object");
assert(typeof ListEfficiencyMetricsResponse$ === "object");
assert(typeof ListEnrollmentStatusesRequest$ === "object");
assert(typeof ListEnrollmentStatusesResponse$ === "object");
assert(typeof ListRecommendationsRequest$ === "object");
assert(typeof ListRecommendationsResponse$ === "object");
assert(typeof ListRecommendationSummariesRequest$ === "object");
assert(typeof ListRecommendationSummariesResponse$ === "object");
assert(typeof MemoryDbReservedInstances$ === "object");
assert(typeof MemoryDbReservedInstancesConfiguration$ === "object");
assert(typeof MetricsByTime$ === "object");
assert(typeof MixedInstanceConfiguration$ === "object");
assert(typeof NatGateway$ === "object");
assert(typeof NatGatewayConfiguration$ === "object");
assert(typeof OpenSearchReservedInstances$ === "object");
assert(typeof OpenSearchReservedInstancesConfiguration$ === "object");
assert(typeof OrderBy$ === "object");
assert(typeof PreferredCommitment$ === "object");
assert(typeof RdsDbInstance$ === "object");
assert(typeof RdsDbInstanceConfiguration$ === "object");
assert(typeof RdsDbInstanceStorage$ === "object");
assert(typeof RdsDbInstanceStorageConfiguration$ === "object");
assert(typeof RdsReservedInstances$ === "object");
assert(typeof RdsReservedInstancesConfiguration$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof RecommendationSummary$ === "object");
assert(typeof RedshiftReservedInstances$ === "object");
assert(typeof RedshiftReservedInstancesConfiguration$ === "object");
assert(typeof ReservedInstancesCostCalculation$ === "object");
assert(typeof ReservedInstancesPricing$ === "object");
assert(typeof ResourceCostCalculation$ === "object");
assert(typeof ResourceDetails$ === "object");
assert(typeof ResourcePricing$ === "object");
assert(typeof SageMakerSavingsPlans$ === "object");
assert(typeof SageMakerSavingsPlansConfiguration$ === "object");
assert(typeof SavingsPlansCostCalculation$ === "object");
assert(typeof SavingsPlansPricing$ === "object");
assert(typeof StorageConfiguration$ === "object");
assert(typeof SummaryMetricsResult$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TimePeriod$ === "object");
assert(typeof UpdateEnrollmentStatusRequest$ === "object");
assert(typeof UpdateEnrollmentStatusResponse$ === "object");
assert(typeof UpdatePreferencesRequest$ === "object");
assert(typeof UpdatePreferencesResponse$ === "object");
assert(typeof Usage$ === "object");
assert(typeof ValidationExceptionDetail$ === "object");
// enums
assert(typeof ActionType === "object");
assert(typeof AllocationStrategy === "object");
assert(typeof Ec2AutoScalingGroupType === "object");
assert(typeof EnrollmentStatus === "object");
assert(typeof GranularityType === "object");
assert(typeof ImplementationEffort === "object");
assert(typeof MemberAccountDiscountVisibility === "object");
assert(typeof Order === "object");
assert(typeof PaymentOption === "object");
assert(typeof ResourceType === "object");
assert(typeof SavingsEstimationMode === "object");
assert(typeof Source === "object");
assert(typeof SummaryMetrics === "object");
assert(typeof Term === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof CostOptimizationHubServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof CostOptimizationHubServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CostOptimizationHubServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof CostOptimizationHubServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof CostOptimizationHubServiceException);
assert(typeof ValidationException$ === "object");
assert(CostOptimizationHubServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEfficiencyMetrics === "function");
assert(typeof paginateListEnrollmentStatuses === "function");
assert(typeof paginateListRecommendationSummaries === "function");
assert(typeof paginateListRecommendations === "function");
console.log(`CostOptimizationHub index test passed.`);
