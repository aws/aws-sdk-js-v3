import {
  AccessDeniedException,
  ActionType,
  AllocationStrategy,
  CostOptimizationHub,
  CostOptimizationHubClient,
  CostOptimizationHubServiceException,
  Ec2AutoScalingGroupType,
  EnrollmentStatus,
  GetPreferencesCommand,
  GetRecommendationCommand,
  GranularityType,
  ImplementationEffort,
  InternalServerException,
  ListEfficiencyMetricsCommand,
  ListEnrollmentStatusesCommand,
  ListRecommendationSummariesCommand,
  ListRecommendationsCommand,
  MemberAccountDiscountVisibility,
  Order,
  PaymentOption,
  ResourceNotFoundException,
  ResourceType,
  SavingsEstimationMode,
  Source,
  SummaryMetrics,
  Term,
  ThrottlingException,
  UpdateEnrollmentStatusCommand,
  UpdatePreferencesCommand,
  ValidationException,
  ValidationExceptionReason,
  paginateListEfficiencyMetrics,
  paginateListEnrollmentStatuses,
  paginateListRecommendationSummaries,
  paginateListRecommendations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CostOptimizationHubClient === "function");
assert(typeof CostOptimizationHub === "function");
// commands
assert(typeof GetPreferencesCommand === "function");
assert(typeof GetRecommendationCommand === "function");
assert(typeof ListEfficiencyMetricsCommand === "function");
assert(typeof ListEnrollmentStatusesCommand === "function");
assert(typeof ListRecommendationsCommand === "function");
assert(typeof ListRecommendationSummariesCommand === "function");
assert(typeof UpdateEnrollmentStatusCommand === "function");
assert(typeof UpdatePreferencesCommand === "function");
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
assert(InternalServerException.prototype instanceof CostOptimizationHubServiceException);
assert(ResourceNotFoundException.prototype instanceof CostOptimizationHubServiceException);
assert(ThrottlingException.prototype instanceof CostOptimizationHubServiceException);
assert(ValidationException.prototype instanceof CostOptimizationHubServiceException);
assert(CostOptimizationHubServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEfficiencyMetrics === "function");
assert(typeof paginateListEnrollmentStatuses === "function");
assert(typeof paginateListRecommendationSummaries === "function");
assert(typeof paginateListRecommendations === "function");
console.log(`CostOptimizationHub index test passed.`);
