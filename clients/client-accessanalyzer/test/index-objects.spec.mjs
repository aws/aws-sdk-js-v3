import {
  AccessAnalyzer,
  AccessAnalyzerClient,
  AccessAnalyzerServiceException,
  AccessCheckPolicyType,
  AccessCheckResourceType,
  AccessPreviewStatus,
  AccessPreviewStatusReasonCode,
  AclPermission,
  AnalyzerStatus,
  ApplyArchiveRuleCommand,
  CancelPolicyGenerationCommand,
  CheckAccessNotGrantedCommand,
  CheckAccessNotGrantedResult,
  CheckNoNewAccessCommand,
  CheckNoNewAccessResult,
  CheckNoPublicAccessCommand,
  CheckNoPublicAccessResult,
  CreateAccessPreviewCommand,
  CreateAnalyzerCommand,
  CreateArchiveRuleCommand,
  DeleteAnalyzerCommand,
  DeleteArchiveRuleCommand,
  FindingChangeType,
  FindingSourceType,
  FindingStatus,
  FindingStatusUpdate,
  FindingType,
  GenerateFindingRecommendationCommand,
  GetAccessPreviewCommand,
  GetAnalyzedResourceCommand,
  GetAnalyzerCommand,
  GetArchiveRuleCommand,
  GetFindingCommand,
  GetFindingRecommendationCommand,
  GetFindingV2Command,
  GetFindingsStatisticsCommand,
  GetGeneratedPolicyCommand,
  InternalAccessType,
  JobErrorCode,
  JobStatus,
  KmsGrantOperation,
  ListAccessPreviewFindingsCommand,
  ListAccessPreviewsCommand,
  ListAnalyzedResourcesCommand,
  ListAnalyzersCommand,
  ListArchiveRulesCommand,
  ListFindingsCommand,
  ListFindingsV2Command,
  ListPolicyGenerationsCommand,
  ListTagsForResourceCommand,
  Locale,
  OrderBy,
  PolicyType,
  PrincipalType,
  ReasonCode,
  RecommendationType,
  RecommendedRemediationAction,
  ResourceControlPolicyRestriction,
  ResourceType,
  ServiceControlPolicyRestriction,
  StartPolicyGenerationCommand,
  StartResourceScanCommand,
  Status,
  TagResourceCommand,
  Type,
  UntagResourceCommand,
  UpdateAnalyzerCommand,
  UpdateArchiveRuleCommand,
  UpdateFindingsCommand,
  ValidatePolicyCommand,
  ValidatePolicyFindingType,
  ValidatePolicyResourceType,
  paginateGetFindingRecommendation,
  paginateGetFindingV2,
  paginateListAccessPreviewFindings,
  paginateListAccessPreviews,
  paginateListAnalyzedResources,
  paginateListAnalyzers,
  paginateListArchiveRules,
  paginateListFindings,
  paginateListFindingsV2,
  paginateListPolicyGenerations,
  paginateValidatePolicy,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AccessAnalyzerClient === "function");
assert(typeof AccessAnalyzer === "function");
// commands
assert(typeof ApplyArchiveRuleCommand === "function");
assert(typeof CancelPolicyGenerationCommand === "function");
assert(typeof CheckAccessNotGrantedCommand === "function");
assert(typeof CheckNoNewAccessCommand === "function");
assert(typeof CheckNoPublicAccessCommand === "function");
assert(typeof CreateAccessPreviewCommand === "function");
assert(typeof CreateAnalyzerCommand === "function");
assert(typeof CreateArchiveRuleCommand === "function");
assert(typeof DeleteAnalyzerCommand === "function");
assert(typeof DeleteArchiveRuleCommand === "function");
assert(typeof GenerateFindingRecommendationCommand === "function");
assert(typeof GetAccessPreviewCommand === "function");
assert(typeof GetAnalyzedResourceCommand === "function");
assert(typeof GetAnalyzerCommand === "function");
assert(typeof GetArchiveRuleCommand === "function");
assert(typeof GetFindingCommand === "function");
assert(typeof GetFindingRecommendationCommand === "function");
assert(typeof GetFindingsStatisticsCommand === "function");
assert(typeof GetFindingV2Command === "function");
assert(typeof GetGeneratedPolicyCommand === "function");
assert(typeof ListAccessPreviewFindingsCommand === "function");
assert(typeof ListAccessPreviewsCommand === "function");
assert(typeof ListAnalyzedResourcesCommand === "function");
assert(typeof ListAnalyzersCommand === "function");
assert(typeof ListArchiveRulesCommand === "function");
assert(typeof ListFindingsCommand === "function");
assert(typeof ListFindingsV2Command === "function");
assert(typeof ListPolicyGenerationsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartPolicyGenerationCommand === "function");
assert(typeof StartResourceScanCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAnalyzerCommand === "function");
assert(typeof UpdateArchiveRuleCommand === "function");
assert(typeof UpdateFindingsCommand === "function");
assert(typeof ValidatePolicyCommand === "function");
// enums
assert(typeof AccessCheckPolicyType === "object");
assert(typeof AccessCheckResourceType === "object");
assert(typeof AccessPreviewStatus === "object");
assert(typeof AccessPreviewStatusReasonCode === "object");
assert(typeof AclPermission === "object");
assert(typeof AnalyzerStatus === "object");
assert(typeof CheckAccessNotGrantedResult === "object");
assert(typeof CheckNoNewAccessResult === "object");
assert(typeof CheckNoPublicAccessResult === "object");
assert(typeof FindingChangeType === "object");
assert(typeof FindingSourceType === "object");
assert(typeof FindingStatus === "object");
assert(typeof FindingStatusUpdate === "object");
assert(typeof FindingType === "object");
assert(typeof InternalAccessType === "object");
assert(typeof JobErrorCode === "object");
assert(typeof JobStatus === "object");
assert(typeof KmsGrantOperation === "object");
assert(typeof Locale === "object");
assert(typeof OrderBy === "object");
assert(typeof PolicyType === "object");
assert(typeof PrincipalType === "object");
assert(typeof ReasonCode === "object");
assert(typeof RecommendationType === "object");
assert(typeof RecommendedRemediationAction === "object");
assert(typeof ResourceControlPolicyRestriction === "object");
assert(typeof ResourceType === "object");
assert(typeof ServiceControlPolicyRestriction === "object");
assert(typeof Status === "object");
assert(typeof Type === "object");
assert(typeof ValidatePolicyFindingType === "object");
assert(typeof ValidatePolicyResourceType === "object");
// errors
assert(AccessAnalyzerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetFindingRecommendation === "function");
assert(typeof paginateGetFindingV2 === "function");
assert(typeof paginateListAccessPreviewFindings === "function");
assert(typeof paginateListAccessPreviews === "function");
assert(typeof paginateListAnalyzedResources === "function");
assert(typeof paginateListAnalyzers === "function");
assert(typeof paginateListArchiveRules === "function");
assert(typeof paginateListFindings === "function");
assert(typeof paginateListFindingsV2 === "function");
assert(typeof paginateListPolicyGenerations === "function");
assert(typeof paginateValidatePolicy === "function");
console.log(`AccessAnalyzer index test passed.`);
