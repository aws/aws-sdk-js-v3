import {
  Access$,
  AccessAnalyzer,
  AccessAnalyzerClient,
  AccessAnalyzerServiceException,
  AccessCheckPolicyType,
  AccessCheckResourceType,
  AccessDeniedException,
  AccessDeniedException$,
  AccessPreview$,
  AccessPreviewFinding$,
  AccessPreviewStatus,
  AccessPreviewStatusReason$,
  AccessPreviewStatusReasonCode,
  AccessPreviewSummary$,
  AclGrantee$,
  AclPermission,
  AnalysisRule$,
  AnalysisRuleCriteria$,
  AnalyzedResource$,
  AnalyzedResourceSummary$,
  AnalyzerConfiguration$,
  AnalyzerStatus,
  AnalyzerSummary$,
  ApplyArchiveRule$,
  ApplyArchiveRuleCommand,
  ApplyArchiveRuleRequest$,
  ArchiveRuleSummary$,
  CancelPolicyGeneration$,
  CancelPolicyGenerationCommand,
  CancelPolicyGenerationRequest$,
  CancelPolicyGenerationResponse$,
  CheckAccessNotGranted$,
  CheckAccessNotGrantedCommand,
  CheckAccessNotGrantedRequest$,
  CheckAccessNotGrantedResponse$,
  CheckAccessNotGrantedResult,
  CheckNoNewAccess$,
  CheckNoNewAccessCommand,
  CheckNoNewAccessRequest$,
  CheckNoNewAccessResponse$,
  CheckNoNewAccessResult,
  CheckNoPublicAccess$,
  CheckNoPublicAccessCommand,
  CheckNoPublicAccessRequest$,
  CheckNoPublicAccessResponse$,
  CheckNoPublicAccessResult,
  CloudTrailDetails$,
  CloudTrailProperties$,
  Configuration$,
  ConflictException,
  ConflictException$,
  CreateAccessPreview$,
  CreateAccessPreviewCommand,
  CreateAccessPreviewRequest$,
  CreateAccessPreviewResponse$,
  CreateAnalyzer$,
  CreateAnalyzerCommand,
  CreateAnalyzerRequest$,
  CreateAnalyzerResponse$,
  CreateArchiveRule$,
  CreateArchiveRuleCommand,
  CreateArchiveRuleRequest$,
  Criterion$,
  DeleteAnalyzer$,
  DeleteAnalyzerCommand,
  DeleteAnalyzerRequest$,
  DeleteArchiveRule$,
  DeleteArchiveRuleCommand,
  DeleteArchiveRuleRequest$,
  DynamodbStreamConfiguration$,
  DynamodbTableConfiguration$,
  EbsSnapshotConfiguration$,
  EcrRepositoryConfiguration$,
  EfsFileSystemConfiguration$,
  ExternalAccessDetails$,
  ExternalAccessFindingsStatistics$,
  Finding$,
  FindingAggregationAccountDetails$,
  FindingChangeType,
  FindingDetails$,
  FindingSource$,
  FindingSourceDetail$,
  FindingSourceType,
  FindingsStatistics$,
  FindingStatus,
  FindingStatusUpdate,
  FindingSummary$,
  FindingSummaryV2$,
  FindingType,
  GeneratedPolicy$,
  GeneratedPolicyProperties$,
  GeneratedPolicyResult$,
  GenerateFindingRecommendation$,
  GenerateFindingRecommendationCommand,
  GenerateFindingRecommendationRequest$,
  GetAccessPreview$,
  GetAccessPreviewCommand,
  GetAccessPreviewRequest$,
  GetAccessPreviewResponse$,
  GetAnalyzedResource$,
  GetAnalyzedResourceCommand,
  GetAnalyzedResourceRequest$,
  GetAnalyzedResourceResponse$,
  GetAnalyzer$,
  GetAnalyzerCommand,
  GetAnalyzerRequest$,
  GetAnalyzerResponse$,
  GetArchiveRule$,
  GetArchiveRuleCommand,
  GetArchiveRuleRequest$,
  GetArchiveRuleResponse$,
  GetFinding$,
  GetFindingCommand,
  GetFindingRecommendation$,
  GetFindingRecommendationCommand,
  GetFindingRecommendationRequest$,
  GetFindingRecommendationResponse$,
  GetFindingRequest$,
  GetFindingResponse$,
  GetFindingsStatistics$,
  GetFindingsStatisticsCommand,
  GetFindingsStatisticsRequest$,
  GetFindingsStatisticsResponse$,
  GetFindingV2$,
  GetFindingV2Command,
  GetFindingV2Request$,
  GetFindingV2Response$,
  GetGeneratedPolicy$,
  GetGeneratedPolicyCommand,
  GetGeneratedPolicyRequest$,
  GetGeneratedPolicyResponse$,
  IamRoleConfiguration$,
  InlineArchiveRule$,
  InternalAccessAnalysisRule$,
  InternalAccessAnalysisRuleCriteria$,
  InternalAccessConfiguration$,
  InternalAccessDetails$,
  InternalAccessFindingsStatistics$,
  InternalAccessResourceTypeDetails$,
  InternalAccessType,
  InternalServerException,
  InternalServerException$,
  InternetConfiguration$,
  InvalidParameterException,
  InvalidParameterException$,
  JobDetails$,
  JobError$,
  JobErrorCode,
  JobStatus,
  KmsGrantConfiguration$,
  KmsGrantConstraints$,
  KmsGrantOperation,
  KmsKeyConfiguration$,
  ListAccessPreviewFindings$,
  ListAccessPreviewFindingsCommand,
  ListAccessPreviewFindingsRequest$,
  ListAccessPreviewFindingsResponse$,
  ListAccessPreviews$,
  ListAccessPreviewsCommand,
  ListAccessPreviewsRequest$,
  ListAccessPreviewsResponse$,
  ListAnalyzedResources$,
  ListAnalyzedResourcesCommand,
  ListAnalyzedResourcesRequest$,
  ListAnalyzedResourcesResponse$,
  ListAnalyzers$,
  ListAnalyzersCommand,
  ListAnalyzersRequest$,
  ListAnalyzersResponse$,
  ListArchiveRules$,
  ListArchiveRulesCommand,
  ListArchiveRulesRequest$,
  ListArchiveRulesResponse$,
  ListFindings$,
  ListFindingsCommand,
  ListFindingsRequest$,
  ListFindingsResponse$,
  ListFindingsV2$,
  ListFindingsV2Command,
  ListFindingsV2Request$,
  ListFindingsV2Response$,
  ListPolicyGenerations$,
  ListPolicyGenerationsCommand,
  ListPolicyGenerationsRequest$,
  ListPolicyGenerationsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Locale,
  Location$,
  NetworkOriginConfiguration$,
  OrderBy,
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
  PathElement$,
  PolicyGeneration$,
  PolicyGenerationDetails$,
  PolicyType,
  Position$,
  PrincipalType,
  RdsDbClusterSnapshotAttributeValue$,
  RdsDbClusterSnapshotConfiguration$,
  RdsDbSnapshotAttributeValue$,
  RdsDbSnapshotConfiguration$,
  ReasonCode,
  ReasonSummary$,
  RecommendationError$,
  RecommendationType,
  RecommendedRemediationAction,
  RecommendedStep$,
  ResourceControlPolicyRestriction,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  ResourceTypeDetails$,
  S3AccessPointConfiguration$,
  S3BucketAclGrantConfiguration$,
  S3BucketConfiguration$,
  S3ExpressDirectoryAccessPointConfiguration$,
  S3ExpressDirectoryBucketConfiguration$,
  S3PublicAccessBlockConfiguration$,
  SecretsManagerSecretConfiguration$,
  ServiceControlPolicyRestriction,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SnsTopicConfiguration$,
  SortCriteria$,
  Span$,
  SqsQueueConfiguration$,
  StartPolicyGeneration$,
  StartPolicyGenerationCommand,
  StartPolicyGenerationRequest$,
  StartPolicyGenerationResponse$,
  StartResourceScan$,
  StartResourceScanCommand,
  StartResourceScanRequest$,
  Status,
  StatusReason$,
  Substring$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  Trail$,
  TrailProperties$,
  Type,
  UnprocessableEntityException,
  UnprocessableEntityException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UnusedAccessConfiguration$,
  UnusedAccessFindingsStatistics$,
  UnusedAccessTypeStatistics$,
  UnusedAction$,
  UnusedIamRoleDetails$,
  UnusedIamUserAccessKeyDetails$,
  UnusedIamUserPasswordDetails$,
  UnusedPermissionDetails$,
  UnusedPermissionsRecommendedStep$,
  UpdateAnalyzer$,
  UpdateAnalyzerCommand,
  UpdateAnalyzerRequest$,
  UpdateAnalyzerResponse$,
  UpdateArchiveRule$,
  UpdateArchiveRuleCommand,
  UpdateArchiveRuleRequest$,
  UpdateFindings$,
  UpdateFindingsCommand,
  UpdateFindingsRequest$,
  ValidatePolicy$,
  ValidatePolicyCommand,
  ValidatePolicyFinding$,
  ValidatePolicyFindingType,
  ValidatePolicyRequest$,
  ValidatePolicyResourceType,
  ValidatePolicyResponse$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VpcConfiguration$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AccessAnalyzerClient === "function");
assert(typeof AccessAnalyzer === "function");
// commands
assert(typeof ApplyArchiveRuleCommand === "function");
assert(typeof ApplyArchiveRule$ === "object");
assert(typeof CancelPolicyGenerationCommand === "function");
assert(typeof CancelPolicyGeneration$ === "object");
assert(typeof CheckAccessNotGrantedCommand === "function");
assert(typeof CheckAccessNotGranted$ === "object");
assert(typeof CheckNoNewAccessCommand === "function");
assert(typeof CheckNoNewAccess$ === "object");
assert(typeof CheckNoPublicAccessCommand === "function");
assert(typeof CheckNoPublicAccess$ === "object");
assert(typeof CreateAccessPreviewCommand === "function");
assert(typeof CreateAccessPreview$ === "object");
assert(typeof CreateAnalyzerCommand === "function");
assert(typeof CreateAnalyzer$ === "object");
assert(typeof CreateArchiveRuleCommand === "function");
assert(typeof CreateArchiveRule$ === "object");
assert(typeof DeleteAnalyzerCommand === "function");
assert(typeof DeleteAnalyzer$ === "object");
assert(typeof DeleteArchiveRuleCommand === "function");
assert(typeof DeleteArchiveRule$ === "object");
assert(typeof GenerateFindingRecommendationCommand === "function");
assert(typeof GenerateFindingRecommendation$ === "object");
assert(typeof GetAccessPreviewCommand === "function");
assert(typeof GetAccessPreview$ === "object");
assert(typeof GetAnalyzedResourceCommand === "function");
assert(typeof GetAnalyzedResource$ === "object");
assert(typeof GetAnalyzerCommand === "function");
assert(typeof GetAnalyzer$ === "object");
assert(typeof GetArchiveRuleCommand === "function");
assert(typeof GetArchiveRule$ === "object");
assert(typeof GetFindingCommand === "function");
assert(typeof GetFinding$ === "object");
assert(typeof GetFindingRecommendationCommand === "function");
assert(typeof GetFindingRecommendation$ === "object");
assert(typeof GetFindingsStatisticsCommand === "function");
assert(typeof GetFindingsStatistics$ === "object");
assert(typeof GetFindingV2Command === "function");
assert(typeof GetFindingV2$ === "object");
assert(typeof GetGeneratedPolicyCommand === "function");
assert(typeof GetGeneratedPolicy$ === "object");
assert(typeof ListAccessPreviewFindingsCommand === "function");
assert(typeof ListAccessPreviewFindings$ === "object");
assert(typeof ListAccessPreviewsCommand === "function");
assert(typeof ListAccessPreviews$ === "object");
assert(typeof ListAnalyzedResourcesCommand === "function");
assert(typeof ListAnalyzedResources$ === "object");
assert(typeof ListAnalyzersCommand === "function");
assert(typeof ListAnalyzers$ === "object");
assert(typeof ListArchiveRulesCommand === "function");
assert(typeof ListArchiveRules$ === "object");
assert(typeof ListFindingsCommand === "function");
assert(typeof ListFindings$ === "object");
assert(typeof ListFindingsV2Command === "function");
assert(typeof ListFindingsV2$ === "object");
assert(typeof ListPolicyGenerationsCommand === "function");
assert(typeof ListPolicyGenerations$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartPolicyGenerationCommand === "function");
assert(typeof StartPolicyGeneration$ === "object");
assert(typeof StartResourceScanCommand === "function");
assert(typeof StartResourceScan$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAnalyzerCommand === "function");
assert(typeof UpdateAnalyzer$ === "object");
assert(typeof UpdateArchiveRuleCommand === "function");
assert(typeof UpdateArchiveRule$ === "object");
assert(typeof UpdateFindingsCommand === "function");
assert(typeof UpdateFindings$ === "object");
assert(typeof ValidatePolicyCommand === "function");
assert(typeof ValidatePolicy$ === "object");
// structural schemas
assert(typeof Access$ === "object");
assert(typeof AccessPreview$ === "object");
assert(typeof AccessPreviewFinding$ === "object");
assert(typeof AccessPreviewStatusReason$ === "object");
assert(typeof AccessPreviewSummary$ === "object");
assert(typeof AclGrantee$ === "object");
assert(typeof AnalysisRule$ === "object");
assert(typeof AnalysisRuleCriteria$ === "object");
assert(typeof AnalyzedResource$ === "object");
assert(typeof AnalyzedResourceSummary$ === "object");
assert(typeof AnalyzerConfiguration$ === "object");
assert(typeof AnalyzerSummary$ === "object");
assert(typeof ApplyArchiveRuleRequest$ === "object");
assert(typeof ArchiveRuleSummary$ === "object");
assert(typeof CancelPolicyGenerationRequest$ === "object");
assert(typeof CancelPolicyGenerationResponse$ === "object");
assert(typeof CheckAccessNotGrantedRequest$ === "object");
assert(typeof CheckAccessNotGrantedResponse$ === "object");
assert(typeof CheckNoNewAccessRequest$ === "object");
assert(typeof CheckNoNewAccessResponse$ === "object");
assert(typeof CheckNoPublicAccessRequest$ === "object");
assert(typeof CheckNoPublicAccessResponse$ === "object");
assert(typeof CloudTrailDetails$ === "object");
assert(typeof CloudTrailProperties$ === "object");
assert(typeof Configuration$ === "object");
assert(typeof CreateAccessPreviewRequest$ === "object");
assert(typeof CreateAccessPreviewResponse$ === "object");
assert(typeof CreateAnalyzerRequest$ === "object");
assert(typeof CreateAnalyzerResponse$ === "object");
assert(typeof CreateArchiveRuleRequest$ === "object");
assert(typeof Criterion$ === "object");
assert(typeof DeleteAnalyzerRequest$ === "object");
assert(typeof DeleteArchiveRuleRequest$ === "object");
assert(typeof DynamodbStreamConfiguration$ === "object");
assert(typeof DynamodbTableConfiguration$ === "object");
assert(typeof EbsSnapshotConfiguration$ === "object");
assert(typeof EcrRepositoryConfiguration$ === "object");
assert(typeof EfsFileSystemConfiguration$ === "object");
assert(typeof ExternalAccessDetails$ === "object");
assert(typeof ExternalAccessFindingsStatistics$ === "object");
assert(typeof Finding$ === "object");
assert(typeof FindingAggregationAccountDetails$ === "object");
assert(typeof FindingDetails$ === "object");
assert(typeof FindingSource$ === "object");
assert(typeof FindingSourceDetail$ === "object");
assert(typeof FindingsStatistics$ === "object");
assert(typeof FindingSummary$ === "object");
assert(typeof FindingSummaryV2$ === "object");
assert(typeof GeneratedPolicy$ === "object");
assert(typeof GeneratedPolicyProperties$ === "object");
assert(typeof GeneratedPolicyResult$ === "object");
assert(typeof GenerateFindingRecommendationRequest$ === "object");
assert(typeof GetAccessPreviewRequest$ === "object");
assert(typeof GetAccessPreviewResponse$ === "object");
assert(typeof GetAnalyzedResourceRequest$ === "object");
assert(typeof GetAnalyzedResourceResponse$ === "object");
assert(typeof GetAnalyzerRequest$ === "object");
assert(typeof GetAnalyzerResponse$ === "object");
assert(typeof GetArchiveRuleRequest$ === "object");
assert(typeof GetArchiveRuleResponse$ === "object");
assert(typeof GetFindingRecommendationRequest$ === "object");
assert(typeof GetFindingRecommendationResponse$ === "object");
assert(typeof GetFindingRequest$ === "object");
assert(typeof GetFindingResponse$ === "object");
assert(typeof GetFindingsStatisticsRequest$ === "object");
assert(typeof GetFindingsStatisticsResponse$ === "object");
assert(typeof GetFindingV2Request$ === "object");
assert(typeof GetFindingV2Response$ === "object");
assert(typeof GetGeneratedPolicyRequest$ === "object");
assert(typeof GetGeneratedPolicyResponse$ === "object");
assert(typeof IamRoleConfiguration$ === "object");
assert(typeof InlineArchiveRule$ === "object");
assert(typeof InternalAccessAnalysisRule$ === "object");
assert(typeof InternalAccessAnalysisRuleCriteria$ === "object");
assert(typeof InternalAccessConfiguration$ === "object");
assert(typeof InternalAccessDetails$ === "object");
assert(typeof InternalAccessFindingsStatistics$ === "object");
assert(typeof InternalAccessResourceTypeDetails$ === "object");
assert(typeof InternetConfiguration$ === "object");
assert(typeof JobDetails$ === "object");
assert(typeof JobError$ === "object");
assert(typeof KmsGrantConfiguration$ === "object");
assert(typeof KmsGrantConstraints$ === "object");
assert(typeof KmsKeyConfiguration$ === "object");
assert(typeof ListAccessPreviewFindingsRequest$ === "object");
assert(typeof ListAccessPreviewFindingsResponse$ === "object");
assert(typeof ListAccessPreviewsRequest$ === "object");
assert(typeof ListAccessPreviewsResponse$ === "object");
assert(typeof ListAnalyzedResourcesRequest$ === "object");
assert(typeof ListAnalyzedResourcesResponse$ === "object");
assert(typeof ListAnalyzersRequest$ === "object");
assert(typeof ListAnalyzersResponse$ === "object");
assert(typeof ListArchiveRulesRequest$ === "object");
assert(typeof ListArchiveRulesResponse$ === "object");
assert(typeof ListFindingsRequest$ === "object");
assert(typeof ListFindingsResponse$ === "object");
assert(typeof ListFindingsV2Request$ === "object");
assert(typeof ListFindingsV2Response$ === "object");
assert(typeof ListPolicyGenerationsRequest$ === "object");
assert(typeof ListPolicyGenerationsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Location$ === "object");
assert(typeof NetworkOriginConfiguration$ === "object");
assert(typeof PathElement$ === "object");
assert(typeof PolicyGeneration$ === "object");
assert(typeof PolicyGenerationDetails$ === "object");
assert(typeof Position$ === "object");
assert(typeof RdsDbClusterSnapshotAttributeValue$ === "object");
assert(typeof RdsDbClusterSnapshotConfiguration$ === "object");
assert(typeof RdsDbSnapshotAttributeValue$ === "object");
assert(typeof RdsDbSnapshotConfiguration$ === "object");
assert(typeof ReasonSummary$ === "object");
assert(typeof RecommendationError$ === "object");
assert(typeof RecommendedStep$ === "object");
assert(typeof ResourceTypeDetails$ === "object");
assert(typeof S3AccessPointConfiguration$ === "object");
assert(typeof S3BucketAclGrantConfiguration$ === "object");
assert(typeof S3BucketConfiguration$ === "object");
assert(typeof S3ExpressDirectoryAccessPointConfiguration$ === "object");
assert(typeof S3ExpressDirectoryBucketConfiguration$ === "object");
assert(typeof S3PublicAccessBlockConfiguration$ === "object");
assert(typeof SecretsManagerSecretConfiguration$ === "object");
assert(typeof SnsTopicConfiguration$ === "object");
assert(typeof SortCriteria$ === "object");
assert(typeof Span$ === "object");
assert(typeof SqsQueueConfiguration$ === "object");
assert(typeof StartPolicyGenerationRequest$ === "object");
assert(typeof StartPolicyGenerationResponse$ === "object");
assert(typeof StartResourceScanRequest$ === "object");
assert(typeof StatusReason$ === "object");
assert(typeof Substring$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Trail$ === "object");
assert(typeof TrailProperties$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UnusedAccessConfiguration$ === "object");
assert(typeof UnusedAccessFindingsStatistics$ === "object");
assert(typeof UnusedAccessTypeStatistics$ === "object");
assert(typeof UnusedAction$ === "object");
assert(typeof UnusedIamRoleDetails$ === "object");
assert(typeof UnusedIamUserAccessKeyDetails$ === "object");
assert(typeof UnusedIamUserPasswordDetails$ === "object");
assert(typeof UnusedPermissionDetails$ === "object");
assert(typeof UnusedPermissionsRecommendedStep$ === "object");
assert(typeof UpdateAnalyzerRequest$ === "object");
assert(typeof UpdateAnalyzerResponse$ === "object");
assert(typeof UpdateArchiveRuleRequest$ === "object");
assert(typeof UpdateFindingsRequest$ === "object");
assert(typeof ValidatePolicyFinding$ === "object");
assert(typeof ValidatePolicyRequest$ === "object");
assert(typeof ValidatePolicyResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VpcConfiguration$ === "object");
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
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof AccessAnalyzerServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof AccessAnalyzerServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof AccessAnalyzerServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidParameterException.prototype instanceof AccessAnalyzerServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AccessAnalyzerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof AccessAnalyzerServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof AccessAnalyzerServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnprocessableEntityException.prototype instanceof AccessAnalyzerServiceException);
assert(typeof UnprocessableEntityException$ === "object");
assert(ValidationException.prototype instanceof AccessAnalyzerServiceException);
assert(typeof ValidationException$ === "object");
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
