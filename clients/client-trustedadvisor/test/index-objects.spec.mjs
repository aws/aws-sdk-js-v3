import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountRecommendationLifecycleSummary$,
  BatchUpdateRecommendationResourceExclusion$,
  BatchUpdateRecommendationResourceExclusionCommand,
  BatchUpdateRecommendationResourceExclusionRequest$,
  BatchUpdateRecommendationResourceExclusionResponse$,
  CheckSummary$,
  ConflictException,
  ConflictException$,
  ExclusionStatus,
  GetOrganizationRecommendation$,
  GetOrganizationRecommendationCommand,
  GetOrganizationRecommendationRequest$,
  GetOrganizationRecommendationResponse$,
  GetRecommendation$,
  GetRecommendationCommand,
  GetRecommendationRequest$,
  GetRecommendationResponse$,
  InternalServerException,
  InternalServerException$,
  ListChecks$,
  ListChecksCommand,
  ListChecksRequest$,
  ListChecksResponse$,
  ListOrganizationRecommendationAccounts$,
  ListOrganizationRecommendationAccountsCommand,
  ListOrganizationRecommendationAccountsRequest$,
  ListOrganizationRecommendationAccountsResponse$,
  ListOrganizationRecommendationResources$,
  ListOrganizationRecommendationResourcesCommand,
  ListOrganizationRecommendationResourcesRequest$,
  ListOrganizationRecommendationResourcesResponse$,
  ListOrganizationRecommendations$,
  ListOrganizationRecommendationsCommand,
  ListOrganizationRecommendationsRequest$,
  ListOrganizationRecommendationsResponse$,
  ListRecommendationResources$,
  ListRecommendationResourcesCommand,
  ListRecommendationResourcesRequest$,
  ListRecommendationResourcesResponse$,
  ListRecommendations$,
  ListRecommendationsCommand,
  ListRecommendationsRequest$,
  ListRecommendationsResponse$,
  OrganizationRecommendation$,
  OrganizationRecommendationResourceSummary$,
  OrganizationRecommendationSummary$,
  Recommendation$,
  RecommendationCostOptimizingAggregates$,
  RecommendationLanguage,
  RecommendationLifecycleStage,
  RecommendationPillar,
  RecommendationPillarSpecificAggregates$,
  RecommendationResourceExclusion$,
  RecommendationResourceSummary$,
  RecommendationResourcesAggregates$,
  RecommendationSource,
  RecommendationStatus,
  RecommendationSummary$,
  RecommendationType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceStatus,
  ThrottlingException,
  ThrottlingException$,
  TrustedAdvisor,
  TrustedAdvisorClient,
  TrustedAdvisorServiceException,
  UpdateOrganizationRecommendationLifecycle$,
  UpdateOrganizationRecommendationLifecycleCommand,
  UpdateOrganizationRecommendationLifecycleRequest$,
  UpdateRecommendationLifecycle$,
  UpdateRecommendationLifecycleCommand,
  UpdateRecommendationLifecycleRequest$,
  UpdateRecommendationLifecycleStage,
  UpdateRecommendationLifecycleStageReasonCode,
  UpdateRecommendationResourceExclusionError$,
  ValidationException,
  ValidationException$,
  paginateListChecks,
  paginateListOrganizationRecommendationAccounts,
  paginateListOrganizationRecommendationResources,
  paginateListOrganizationRecommendations,
  paginateListRecommendationResources,
  paginateListRecommendations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof TrustedAdvisorClient === "function");
assert(typeof TrustedAdvisor === "function");
// commands
assert(typeof BatchUpdateRecommendationResourceExclusionCommand === "function");
assert(typeof BatchUpdateRecommendationResourceExclusion$ === "object");
assert(typeof GetOrganizationRecommendationCommand === "function");
assert(typeof GetOrganizationRecommendation$ === "object");
assert(typeof GetRecommendationCommand === "function");
assert(typeof GetRecommendation$ === "object");
assert(typeof ListChecksCommand === "function");
assert(typeof ListChecks$ === "object");
assert(typeof ListOrganizationRecommendationAccountsCommand === "function");
assert(typeof ListOrganizationRecommendationAccounts$ === "object");
assert(typeof ListOrganizationRecommendationResourcesCommand === "function");
assert(typeof ListOrganizationRecommendationResources$ === "object");
assert(typeof ListOrganizationRecommendationsCommand === "function");
assert(typeof ListOrganizationRecommendations$ === "object");
assert(typeof ListRecommendationResourcesCommand === "function");
assert(typeof ListRecommendationResources$ === "object");
assert(typeof ListRecommendationsCommand === "function");
assert(typeof ListRecommendations$ === "object");
assert(typeof UpdateOrganizationRecommendationLifecycleCommand === "function");
assert(typeof UpdateOrganizationRecommendationLifecycle$ === "object");
assert(typeof UpdateRecommendationLifecycleCommand === "function");
assert(typeof UpdateRecommendationLifecycle$ === "object");
// structural schemas
assert(typeof AccountRecommendationLifecycleSummary$ === "object");
assert(typeof BatchUpdateRecommendationResourceExclusionRequest$ === "object");
assert(typeof BatchUpdateRecommendationResourceExclusionResponse$ === "object");
assert(typeof CheckSummary$ === "object");
assert(typeof GetOrganizationRecommendationRequest$ === "object");
assert(typeof GetOrganizationRecommendationResponse$ === "object");
assert(typeof GetRecommendationRequest$ === "object");
assert(typeof GetRecommendationResponse$ === "object");
assert(typeof ListChecksRequest$ === "object");
assert(typeof ListChecksResponse$ === "object");
assert(typeof ListOrganizationRecommendationAccountsRequest$ === "object");
assert(typeof ListOrganizationRecommendationAccountsResponse$ === "object");
assert(typeof ListOrganizationRecommendationResourcesRequest$ === "object");
assert(typeof ListOrganizationRecommendationResourcesResponse$ === "object");
assert(typeof ListOrganizationRecommendationsRequest$ === "object");
assert(typeof ListOrganizationRecommendationsResponse$ === "object");
assert(typeof ListRecommendationResourcesRequest$ === "object");
assert(typeof ListRecommendationResourcesResponse$ === "object");
assert(typeof ListRecommendationsRequest$ === "object");
assert(typeof ListRecommendationsResponse$ === "object");
assert(typeof OrganizationRecommendation$ === "object");
assert(typeof OrganizationRecommendationResourceSummary$ === "object");
assert(typeof OrganizationRecommendationSummary$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof RecommendationCostOptimizingAggregates$ === "object");
assert(typeof RecommendationPillarSpecificAggregates$ === "object");
assert(typeof RecommendationResourceExclusion$ === "object");
assert(typeof RecommendationResourcesAggregates$ === "object");
assert(typeof RecommendationResourceSummary$ === "object");
assert(typeof RecommendationSummary$ === "object");
assert(typeof UpdateOrganizationRecommendationLifecycleRequest$ === "object");
assert(typeof UpdateRecommendationLifecycleRequest$ === "object");
assert(typeof UpdateRecommendationResourceExclusionError$ === "object");
// enums
assert(typeof ExclusionStatus === "object");
assert(typeof RecommendationLanguage === "object");
assert(typeof RecommendationLifecycleStage === "object");
assert(typeof RecommendationPillar === "object");
assert(typeof RecommendationSource === "object");
assert(typeof RecommendationStatus === "object");
assert(typeof RecommendationType === "object");
assert(typeof ResourceStatus === "object");
assert(typeof UpdateRecommendationLifecycleStage === "object");
assert(typeof UpdateRecommendationLifecycleStageReasonCode === "object");
// errors
assert(AccessDeniedException.prototype instanceof TrustedAdvisorServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof TrustedAdvisorServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof TrustedAdvisorServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof TrustedAdvisorServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof TrustedAdvisorServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof TrustedAdvisorServiceException);
assert(typeof ValidationException$ === "object");
assert(TrustedAdvisorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChecks === "function");
assert(typeof paginateListOrganizationRecommendationAccounts === "function");
assert(typeof paginateListOrganizationRecommendationResources === "function");
assert(typeof paginateListOrganizationRecommendations === "function");
assert(typeof paginateListRecommendationResources === "function");
assert(typeof paginateListRecommendations === "function");
console.log(`TrustedAdvisor index test passed.`);
