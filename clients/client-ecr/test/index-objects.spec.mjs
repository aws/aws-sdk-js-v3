import {
  ArtifactStatus,
  ArtifactStatusFilter,
  BatchCheckLayerAvailabilityCommand,
  BatchDeleteImageCommand,
  BatchGetImageCommand,
  BatchGetRepositoryScanningConfigurationCommand,
  BlockedByOrganizationPolicyException,
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
  EmptyUploadException,
  EncryptionType,
  ExclusionAlreadyExistsException,
  ExclusionNotFoundException,
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
  ImageAlreadyExistsException,
  ImageArchivedException,
  ImageDigestDoesNotMatchException,
  ImageFailureCode,
  ImageNotFoundException,
  ImageStatus,
  ImageStatusFilter,
  ImageStorageClassUpdateNotSupportedException,
  ImageTagAlreadyExistsException,
  ImageTagMutability,
  ImageTagMutabilityExclusionFilterType,
  InitiateLayerUploadCommand,
  InvalidLayerException,
  InvalidLayerPartException,
  InvalidParameterException,
  InvalidTagParameterException,
  KmsException,
  LayerAlreadyExistsException,
  LayerAvailability,
  LayerFailureCode,
  LayerInaccessibleException,
  LayerPartTooSmallException,
  LayersNotFoundException,
  LifecyclePolicyNotFoundException,
  LifecyclePolicyPreviewInProgressException,
  LifecyclePolicyPreviewNotFoundException,
  LifecyclePolicyPreviewStatus,
  LifecyclePolicyStorageClass,
  LifecyclePolicyTargetStorageClass,
  LimitExceededException,
  ListImageReferrersCommand,
  ListImagesCommand,
  ListPullTimeUpdateExclusionsCommand,
  ListTagsForResourceCommand,
  PullThroughCacheRuleAlreadyExistsException,
  PullThroughCacheRuleNotFoundException,
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
  ReferencedImagesNotFoundException,
  RegisterPullTimeUpdateExclusionCommand,
  RegistryPolicyNotFoundException,
  ReplicationStatus,
  RepositoryAlreadyExistsException,
  RepositoryFilterType,
  RepositoryNotEmptyException,
  RepositoryNotFoundException,
  RepositoryPolicyNotFoundException,
  ScanFrequency,
  ScanNotFoundException,
  ScanStatus,
  ScanType,
  ScanningConfigurationFailureCode,
  ScanningRepositoryFilterType,
  SecretNotFoundException,
  ServerException,
  SetRepositoryPolicyCommand,
  SigningConfigurationNotFoundException,
  SigningRepositoryFilterType,
  SigningStatus,
  StartImageScanCommand,
  StartLifecyclePolicyPreviewCommand,
  TagResourceCommand,
  TagStatus,
  TargetStorageClass,
  TemplateAlreadyExistsException,
  TemplateNotFoundException,
  TooManyTagsException,
  UnableToAccessSecretException,
  UnableToDecryptSecretValueException,
  UnableToGetUpstreamImageException,
  UnableToGetUpstreamLayerException,
  UnsupportedImageTypeException,
  UnsupportedUpstreamRegistryException,
  UntagResourceCommand,
  UpdateImageStorageClassCommand,
  UpdatePullThroughCacheRuleCommand,
  UpdateRepositoryCreationTemplateCommand,
  UploadLayerPartCommand,
  UploadNotFoundException,
  UpstreamRegistry,
  ValidatePullThroughCacheRuleCommand,
  ValidationException,
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
assert(typeof ECRClient === "function");
assert(typeof ECR === "function");
// commands
assert(typeof BatchCheckLayerAvailabilityCommand === "function");
assert(typeof BatchDeleteImageCommand === "function");
assert(typeof BatchGetImageCommand === "function");
assert(typeof BatchGetRepositoryScanningConfigurationCommand === "function");
assert(typeof CompleteLayerUploadCommand === "function");
assert(typeof CreatePullThroughCacheRuleCommand === "function");
assert(typeof CreateRepositoryCommand === "function");
assert(typeof CreateRepositoryCreationTemplateCommand === "function");
assert(typeof DeleteLifecyclePolicyCommand === "function");
assert(typeof DeletePullThroughCacheRuleCommand === "function");
assert(typeof DeleteRegistryPolicyCommand === "function");
assert(typeof DeleteRepositoryCommand === "function");
assert(typeof DeleteRepositoryCreationTemplateCommand === "function");
assert(typeof DeleteRepositoryPolicyCommand === "function");
assert(typeof DeleteSigningConfigurationCommand === "function");
assert(typeof DeregisterPullTimeUpdateExclusionCommand === "function");
assert(typeof DescribeImageReplicationStatusCommand === "function");
assert(typeof DescribeImagesCommand === "function");
assert(typeof DescribeImageScanFindingsCommand === "function");
assert(typeof DescribeImageSigningStatusCommand === "function");
assert(typeof DescribePullThroughCacheRulesCommand === "function");
assert(typeof DescribeRegistryCommand === "function");
assert(typeof DescribeRepositoriesCommand === "function");
assert(typeof DescribeRepositoryCreationTemplatesCommand === "function");
assert(typeof GetAccountSettingCommand === "function");
assert(typeof GetAuthorizationTokenCommand === "function");
assert(typeof GetDownloadUrlForLayerCommand === "function");
assert(typeof GetLifecyclePolicyCommand === "function");
assert(typeof GetLifecyclePolicyPreviewCommand === "function");
assert(typeof GetRegistryPolicyCommand === "function");
assert(typeof GetRegistryScanningConfigurationCommand === "function");
assert(typeof GetRepositoryPolicyCommand === "function");
assert(typeof GetSigningConfigurationCommand === "function");
assert(typeof InitiateLayerUploadCommand === "function");
assert(typeof ListImageReferrersCommand === "function");
assert(typeof ListImagesCommand === "function");
assert(typeof ListPullTimeUpdateExclusionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutAccountSettingCommand === "function");
assert(typeof PutImageCommand === "function");
assert(typeof PutImageScanningConfigurationCommand === "function");
assert(typeof PutImageTagMutabilityCommand === "function");
assert(typeof PutLifecyclePolicyCommand === "function");
assert(typeof PutRegistryPolicyCommand === "function");
assert(typeof PutRegistryScanningConfigurationCommand === "function");
assert(typeof PutReplicationConfigurationCommand === "function");
assert(typeof PutSigningConfigurationCommand === "function");
assert(typeof RegisterPullTimeUpdateExclusionCommand === "function");
assert(typeof SetRepositoryPolicyCommand === "function");
assert(typeof StartImageScanCommand === "function");
assert(typeof StartLifecyclePolicyPreviewCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateImageStorageClassCommand === "function");
assert(typeof UpdatePullThroughCacheRuleCommand === "function");
assert(typeof UpdateRepositoryCreationTemplateCommand === "function");
assert(typeof UploadLayerPartCommand === "function");
assert(typeof ValidatePullThroughCacheRuleCommand === "function");
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
assert(BlockedByOrganizationPolicyException.prototype instanceof ECRServiceException);
assert(EmptyUploadException.prototype instanceof ECRServiceException);
assert(ExclusionAlreadyExistsException.prototype instanceof ECRServiceException);
assert(ExclusionNotFoundException.prototype instanceof ECRServiceException);
assert(ImageAlreadyExistsException.prototype instanceof ECRServiceException);
assert(ImageArchivedException.prototype instanceof ECRServiceException);
assert(ImageDigestDoesNotMatchException.prototype instanceof ECRServiceException);
assert(ImageNotFoundException.prototype instanceof ECRServiceException);
assert(ImageStorageClassUpdateNotSupportedException.prototype instanceof ECRServiceException);
assert(ImageTagAlreadyExistsException.prototype instanceof ECRServiceException);
assert(InvalidLayerException.prototype instanceof ECRServiceException);
assert(InvalidLayerPartException.prototype instanceof ECRServiceException);
assert(InvalidParameterException.prototype instanceof ECRServiceException);
assert(InvalidTagParameterException.prototype instanceof ECRServiceException);
assert(KmsException.prototype instanceof ECRServiceException);
assert(LayerAlreadyExistsException.prototype instanceof ECRServiceException);
assert(LayerInaccessibleException.prototype instanceof ECRServiceException);
assert(LayerPartTooSmallException.prototype instanceof ECRServiceException);
assert(LayersNotFoundException.prototype instanceof ECRServiceException);
assert(LifecyclePolicyNotFoundException.prototype instanceof ECRServiceException);
assert(LifecyclePolicyPreviewInProgressException.prototype instanceof ECRServiceException);
assert(LifecyclePolicyPreviewNotFoundException.prototype instanceof ECRServiceException);
assert(LimitExceededException.prototype instanceof ECRServiceException);
assert(PullThroughCacheRuleAlreadyExistsException.prototype instanceof ECRServiceException);
assert(PullThroughCacheRuleNotFoundException.prototype instanceof ECRServiceException);
assert(ReferencedImagesNotFoundException.prototype instanceof ECRServiceException);
assert(RegistryPolicyNotFoundException.prototype instanceof ECRServiceException);
assert(RepositoryAlreadyExistsException.prototype instanceof ECRServiceException);
assert(RepositoryNotEmptyException.prototype instanceof ECRServiceException);
assert(RepositoryNotFoundException.prototype instanceof ECRServiceException);
assert(RepositoryPolicyNotFoundException.prototype instanceof ECRServiceException);
assert(ScanNotFoundException.prototype instanceof ECRServiceException);
assert(SecretNotFoundException.prototype instanceof ECRServiceException);
assert(ServerException.prototype instanceof ECRServiceException);
assert(SigningConfigurationNotFoundException.prototype instanceof ECRServiceException);
assert(TemplateAlreadyExistsException.prototype instanceof ECRServiceException);
assert(TemplateNotFoundException.prototype instanceof ECRServiceException);
assert(TooManyTagsException.prototype instanceof ECRServiceException);
assert(UnableToAccessSecretException.prototype instanceof ECRServiceException);
assert(UnableToDecryptSecretValueException.prototype instanceof ECRServiceException);
assert(UnableToGetUpstreamImageException.prototype instanceof ECRServiceException);
assert(UnableToGetUpstreamLayerException.prototype instanceof ECRServiceException);
assert(UnsupportedImageTypeException.prototype instanceof ECRServiceException);
assert(UnsupportedUpstreamRegistryException.prototype instanceof ECRServiceException);
assert(UploadNotFoundException.prototype instanceof ECRServiceException);
assert(ValidationException.prototype instanceof ECRServiceException);
assert(ECRServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForImageScanComplete === "function");
assert(typeof waitForLifecyclePolicyPreviewComplete === "function");
assert(typeof waitUntilImageScanComplete === "function");
assert(typeof waitUntilLifecyclePolicyPreviewComplete === "function");
// paginators
assert(typeof paginateDescribeImageScanFindings === "function");
assert(typeof paginateDescribeImages === "function");
assert(typeof paginateDescribePullThroughCacheRules === "function");
assert(typeof paginateDescribeRepositories === "function");
assert(typeof paginateDescribeRepositoryCreationTemplates === "function");
assert(typeof paginateGetLifecyclePolicyPreview === "function");
assert(typeof paginateListImages === "function");
console.log(`ECR index test passed.`);
