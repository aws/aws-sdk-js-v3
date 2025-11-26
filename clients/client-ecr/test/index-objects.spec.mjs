import {
  ArtifactStatus,
  ArtifactStatusFilter,
  BatchCheckLayerAvailabilityCommand,
  BatchDeleteImageCommand,
  BatchGetImageCommand,
  BatchGetRepositoryScanningConfigurationCommand,
  CompleteLayerUploadCommand,
  CreatePullThroughCacheRuleCommand,
  CreateRepositoryCommand,
  CreateRepositoryCreationTemplateCommand,
  DeleteLifecyclePolicyCommand,
  DeletePullThroughCacheRuleCommand,
  DeleteRegistryPolicyCommand,
  DeleteRepositoryCommand,
  DeleteRepositoryCreationTemplateCommand,
  DeleteRepositoryPolicyCommand,
  DeleteSigningConfigurationCommand,
  DeregisterPullTimeUpdateExclusionCommand,
  DescribeImageReplicationStatusCommand,
  DescribeImageScanFindingsCommand,
  DescribeImageSigningStatusCommand,
  DescribeImagesCommand,
  DescribePullThroughCacheRulesCommand,
  DescribeRegistryCommand,
  DescribeRepositoriesCommand,
  DescribeRepositoryCreationTemplatesCommand,
  ECR,
  ECRClient,
  ECRServiceException,
  EncryptionType,
  FindingSeverity,
  GetAccountSettingCommand,
  GetAuthorizationTokenCommand,
  GetDownloadUrlForLayerCommand,
  GetLifecyclePolicyCommand,
  GetLifecyclePolicyPreviewCommand,
  GetRegistryPolicyCommand,
  GetRegistryScanningConfigurationCommand,
  GetRepositoryPolicyCommand,
  GetSigningConfigurationCommand,
  ImageActionType,
  ImageFailureCode,
  ImageStatus,
  ImageStatusFilter,
  ImageTagMutability,
  ImageTagMutabilityExclusionFilterType,
  InitiateLayerUploadCommand,
  LayerAvailability,
  LayerFailureCode,
  LifecyclePolicyPreviewStatus,
  LifecyclePolicyStorageClass,
  LifecyclePolicyTargetStorageClass,
  ListImageReferrersCommand,
  ListImagesCommand,
  ListPullTimeUpdateExclusionsCommand,
  ListTagsForResourceCommand,
  PutAccountSettingCommand,
  PutImageCommand,
  PutImageScanningConfigurationCommand,
  PutImageTagMutabilityCommand,
  PutLifecyclePolicyCommand,
  PutRegistryPolicyCommand,
  PutRegistryScanningConfigurationCommand,
  PutReplicationConfigurationCommand,
  PutSigningConfigurationCommand,
  RCTAppliedFor,
  RegisterPullTimeUpdateExclusionCommand,
  ReplicationStatus,
  RepositoryFilterType,
  ScanFrequency,
  ScanStatus,
  ScanType,
  ScanningConfigurationFailureCode,
  ScanningRepositoryFilterType,
  SetRepositoryPolicyCommand,
  SigningRepositoryFilterType,
  SigningStatus,
  StartImageScanCommand,
  StartLifecyclePolicyPreviewCommand,
  TagResourceCommand,
  TagStatus,
  TargetStorageClass,
  UntagResourceCommand,
  UpdateImageStorageClassCommand,
  UpdatePullThroughCacheRuleCommand,
  UpdateRepositoryCreationTemplateCommand,
  UploadLayerPartCommand,
  UpstreamRegistry,
  ValidatePullThroughCacheRuleCommand,
  paginateDescribeImageScanFindings,
  paginateDescribeImages,
  paginateDescribePullThroughCacheRules,
  paginateDescribeRepositories,
  paginateDescribeRepositoryCreationTemplates,
  paginateGetLifecyclePolicyPreview,
  paginateListImages,
  waitForImageScanComplete,
  waitForLifecyclePolicyPreviewComplete,
  waitUntilImageScanComplete,
  waitUntilLifecyclePolicyPreviewComplete,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ECRClient === "function")
assert(typeof ECR === "function")
// commands
assert(typeof BatchCheckLayerAvailabilityCommand === "function")
assert(typeof BatchDeleteImageCommand === "function")
assert(typeof BatchGetImageCommand === "function")
assert(typeof BatchGetRepositoryScanningConfigurationCommand === "function")
assert(typeof CompleteLayerUploadCommand === "function")
assert(typeof CreatePullThroughCacheRuleCommand === "function")
assert(typeof CreateRepositoryCommand === "function")
assert(typeof CreateRepositoryCreationTemplateCommand === "function")
assert(typeof DeleteLifecyclePolicyCommand === "function")
assert(typeof DeletePullThroughCacheRuleCommand === "function")
assert(typeof DeleteRegistryPolicyCommand === "function")
assert(typeof DeleteRepositoryCommand === "function")
assert(typeof DeleteRepositoryCreationTemplateCommand === "function")
assert(typeof DeleteRepositoryPolicyCommand === "function")
assert(typeof DeleteSigningConfigurationCommand === "function")
assert(typeof DeregisterPullTimeUpdateExclusionCommand === "function")
assert(typeof DescribeImageReplicationStatusCommand === "function")
assert(typeof DescribeImagesCommand === "function")
assert(typeof DescribeImageScanFindingsCommand === "function")
assert(typeof DescribeImageSigningStatusCommand === "function")
assert(typeof DescribePullThroughCacheRulesCommand === "function")
assert(typeof DescribeRegistryCommand === "function")
assert(typeof DescribeRepositoriesCommand === "function")
assert(typeof DescribeRepositoryCreationTemplatesCommand === "function")
assert(typeof GetAccountSettingCommand === "function")
assert(typeof GetAuthorizationTokenCommand === "function")
assert(typeof GetDownloadUrlForLayerCommand === "function")
assert(typeof GetLifecyclePolicyCommand === "function")
assert(typeof GetLifecyclePolicyPreviewCommand === "function")
assert(typeof GetRegistryPolicyCommand === "function")
assert(typeof GetRegistryScanningConfigurationCommand === "function")
assert(typeof GetRepositoryPolicyCommand === "function")
assert(typeof GetSigningConfigurationCommand === "function")
assert(typeof InitiateLayerUploadCommand === "function")
assert(typeof ListImageReferrersCommand === "function")
assert(typeof ListImagesCommand === "function")
assert(typeof ListPullTimeUpdateExclusionsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutAccountSettingCommand === "function")
assert(typeof PutImageCommand === "function")
assert(typeof PutImageScanningConfigurationCommand === "function")
assert(typeof PutImageTagMutabilityCommand === "function")
assert(typeof PutLifecyclePolicyCommand === "function")
assert(typeof PutRegistryPolicyCommand === "function")
assert(typeof PutRegistryScanningConfigurationCommand === "function")
assert(typeof PutReplicationConfigurationCommand === "function")
assert(typeof PutSigningConfigurationCommand === "function")
assert(typeof RegisterPullTimeUpdateExclusionCommand === "function")
assert(typeof SetRepositoryPolicyCommand === "function")
assert(typeof StartImageScanCommand === "function")
assert(typeof StartLifecyclePolicyPreviewCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateImageStorageClassCommand === "function")
assert(typeof UpdatePullThroughCacheRuleCommand === "function")
assert(typeof UpdateRepositoryCreationTemplateCommand === "function")
assert(typeof UploadLayerPartCommand === "function")
assert(typeof ValidatePullThroughCacheRuleCommand === "function")
// enums
assert(typeof ArtifactStatus === "object");
assert(typeof ArtifactStatusFilter === "object");
assert(typeof EncryptionType === "object");
assert(typeof FindingSeverity === "object");
assert(typeof ImageActionType === "object");
assert(typeof ImageFailureCode === "object");
assert(typeof ImageStatus === "object");
assert(typeof ImageStatusFilter === "object");
assert(typeof ImageTagMutability === "object");
assert(typeof ImageTagMutabilityExclusionFilterType === "object");
assert(typeof LayerAvailability === "object");
assert(typeof LayerFailureCode === "object");
assert(typeof LifecyclePolicyPreviewStatus === "object");
assert(typeof LifecyclePolicyStorageClass === "object");
assert(typeof LifecyclePolicyTargetStorageClass === "object");
assert(typeof RCTAppliedFor === "object");
assert(typeof ReplicationStatus === "object");
assert(typeof RepositoryFilterType === "object");
assert(typeof ScanFrequency === "object");
assert(typeof ScanningConfigurationFailureCode === "object");
assert(typeof ScanningRepositoryFilterType === "object");
assert(typeof ScanStatus === "object");
assert(typeof ScanType === "object");
assert(typeof SigningRepositoryFilterType === "object");
assert(typeof SigningStatus === "object");
assert(typeof TagStatus === "object");
assert(typeof TargetStorageClass === "object");
assert(typeof UpstreamRegistry === "object");
// errors
assert(ECRServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForImageScanComplete === "function")
assert(typeof waitForLifecyclePolicyPreviewComplete === "function")
assert(typeof waitUntilImageScanComplete === "function")
assert(typeof waitUntilLifecyclePolicyPreviewComplete === "function")
// paginators
assert(typeof paginateDescribeImageScanFindings === "function")
assert(typeof paginateDescribeImages === "function")
assert(typeof paginateDescribePullThroughCacheRules === "function")
assert(typeof paginateDescribeRepositories === "function")
assert(typeof paginateDescribeRepositoryCreationTemplates === "function")
assert(typeof paginateGetLifecyclePolicyPreview === "function")
assert(typeof paginateListImages === "function")
console.log(`ECR index test passed.`);
