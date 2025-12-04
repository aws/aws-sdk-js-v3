import {
  BatchUpdateRecommendationResourceExclusionCommand,
  ExclusionStatus,
  GetOrganizationRecommendationCommand,
  GetRecommendationCommand,
  ListChecksCommand,
  ListOrganizationRecommendationAccountsCommand,
  ListOrganizationRecommendationResourcesCommand,
  ListOrganizationRecommendationsCommand,
  ListRecommendationResourcesCommand,
  ListRecommendationsCommand,
  RecommendationLanguage,
  RecommendationLifecycleStage,
  RecommendationPillar,
  RecommendationSource,
  RecommendationStatus,
  RecommendationType,
  ResourceStatus,
  TrustedAdvisor,
  TrustedAdvisorClient,
  TrustedAdvisorServiceException,
  UpdateOrganizationRecommendationLifecycleCommand,
  UpdateRecommendationLifecycleCommand,
  UpdateRecommendationLifecycleStage,
  UpdateRecommendationLifecycleStageReasonCode,
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
assert(typeof GetOrganizationRecommendationCommand === "function");
assert(typeof GetRecommendationCommand === "function");
assert(typeof ListChecksCommand === "function");
assert(typeof ListOrganizationRecommendationAccountsCommand === "function");
assert(typeof ListOrganizationRecommendationResourcesCommand === "function");
assert(typeof ListOrganizationRecommendationsCommand === "function");
assert(typeof ListRecommendationResourcesCommand === "function");
assert(typeof ListRecommendationsCommand === "function");
assert(typeof UpdateOrganizationRecommendationLifecycleCommand === "function");
assert(typeof UpdateRecommendationLifecycleCommand === "function");
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
assert(TrustedAdvisorServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListChecks === "function");
assert(typeof paginateListOrganizationRecommendationAccounts === "function");
assert(typeof paginateListOrganizationRecommendationResources === "function");
assert(typeof paginateListOrganizationRecommendations === "function");
assert(typeof paginateListRecommendationResources === "function");
assert(typeof paginateListRecommendations === "function");
console.log(`TrustedAdvisor index test passed.`);
