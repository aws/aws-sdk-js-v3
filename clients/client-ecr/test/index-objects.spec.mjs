import {
  ArtifactStatus,
  ArtifactStatusFilter,
  Attribute$,
  AuthorizationData$,
  AwsEcrContainerImageDetails$,
  BatchCheckLayerAvailability$,
  BatchCheckLayerAvailabilityCommand,
  BatchCheckLayerAvailabilityRequest$,
  BatchCheckLayerAvailabilityResponse$,
  BatchDeleteImage$,
  BatchDeleteImageCommand,
  BatchDeleteImageRequest$,
  BatchDeleteImageResponse$,
  BatchGetImage$,
  BatchGetImageCommand,
  BatchGetImageRequest$,
  BatchGetImageResponse$,
  BatchGetRepositoryScanningConfiguration$,
  BatchGetRepositoryScanningConfigurationCommand,
  BatchGetRepositoryScanningConfigurationRequest$,
  BatchGetRepositoryScanningConfigurationResponse$,
  BlockedByOrganizationPolicyException,
  BlockedByOrganizationPolicyException$,
  CompleteLayerUpload$,
  CompleteLayerUploadCommand,
  CompleteLayerUploadRequest$,
  CompleteLayerUploadResponse$,
  CreatePullThroughCacheRule$,
  CreatePullThroughCacheRuleCommand,
  CreatePullThroughCacheRuleRequest$,
  CreatePullThroughCacheRuleResponse$,
  CreateRepository$,
  CreateRepositoryCommand,
  CreateRepositoryCreationTemplate$,
  CreateRepositoryCreationTemplateCommand,
  CreateRepositoryCreationTemplateRequest$,
  CreateRepositoryCreationTemplateResponse$,
  CreateRepositoryRequest$,
  CreateRepositoryResponse$,
  CvssScore$,
  CvssScoreAdjustment$,
  CvssScoreDetails$,
  DeleteLifecyclePolicy$,
  DeleteLifecyclePolicyCommand,
  DeleteLifecyclePolicyRequest$,
  DeleteLifecyclePolicyResponse$,
  DeletePullThroughCacheRule$,
  DeletePullThroughCacheRuleCommand,
  DeletePullThroughCacheRuleRequest$,
  DeletePullThroughCacheRuleResponse$,
  DeleteRegistryPolicy$,
  DeleteRegistryPolicyCommand,
  DeleteRegistryPolicyRequest$,
  DeleteRegistryPolicyResponse$,
  DeleteRepository$,
  DeleteRepositoryCommand,
  DeleteRepositoryCreationTemplate$,
  DeleteRepositoryCreationTemplateCommand,
  DeleteRepositoryCreationTemplateRequest$,
  DeleteRepositoryCreationTemplateResponse$,
  DeleteRepositoryPolicy$,
  DeleteRepositoryPolicyCommand,
  DeleteRepositoryPolicyRequest$,
  DeleteRepositoryPolicyResponse$,
  DeleteRepositoryRequest$,
  DeleteRepositoryResponse$,
  DeleteSigningConfiguration$,
  DeleteSigningConfigurationCommand,
  DeleteSigningConfigurationRequest$,
  DeleteSigningConfigurationResponse$,
  DeregisterPullTimeUpdateExclusion$,
  DeregisterPullTimeUpdateExclusionCommand,
  DeregisterPullTimeUpdateExclusionRequest$,
  DeregisterPullTimeUpdateExclusionResponse$,
  DescribeImageReplicationStatus$,
  DescribeImageReplicationStatusCommand,
  DescribeImageReplicationStatusRequest$,
  DescribeImageReplicationStatusResponse$,
  DescribeImages$,
  DescribeImageScanFindings$,
  DescribeImageScanFindingsCommand,
  DescribeImageScanFindingsRequest$,
  DescribeImageScanFindingsResponse$,
  DescribeImagesCommand,
  DescribeImagesFilter$,
  DescribeImageSigningStatus$,
  DescribeImageSigningStatusCommand,
  DescribeImageSigningStatusRequest$,
  DescribeImageSigningStatusResponse$,
  DescribeImagesRequest$,
  DescribeImagesResponse$,
  DescribePullThroughCacheRules$,
  DescribePullThroughCacheRulesCommand,
  DescribePullThroughCacheRulesRequest$,
  DescribePullThroughCacheRulesResponse$,
  DescribeRegistry$,
  DescribeRegistryCommand,
  DescribeRegistryRequest$,
  DescribeRegistryResponse$,
  DescribeRepositories$,
  DescribeRepositoriesCommand,
  DescribeRepositoriesRequest$,
  DescribeRepositoriesResponse$,
  DescribeRepositoryCreationTemplates$,
  DescribeRepositoryCreationTemplatesCommand,
  DescribeRepositoryCreationTemplatesRequest$,
  DescribeRepositoryCreationTemplatesResponse$,
  ECR,
  ECRClient,
  ECRServiceException,
  EmptyUploadException,
  EmptyUploadException$,
  EncryptionConfiguration$,
  EncryptionConfigurationForRepositoryCreationTemplate$,
  EncryptionType,
  EnhancedImageScanFinding$,
  ExclusionAlreadyExistsException,
  ExclusionAlreadyExistsException$,
  ExclusionNotFoundException,
  ExclusionNotFoundException$,
  FindingSeverity,
  GetAccountSetting$,
  GetAccountSettingCommand,
  GetAccountSettingRequest$,
  GetAccountSettingResponse$,
  GetAuthorizationToken$,
  GetAuthorizationTokenCommand,
  GetAuthorizationTokenRequest$,
  GetAuthorizationTokenResponse$,
  GetDownloadUrlForLayer$,
  GetDownloadUrlForLayerCommand,
  GetDownloadUrlForLayerRequest$,
  GetDownloadUrlForLayerResponse$,
  GetLifecyclePolicy$,
  GetLifecyclePolicyCommand,
  GetLifecyclePolicyPreview$,
  GetLifecyclePolicyPreviewCommand,
  GetLifecyclePolicyPreviewRequest$,
  GetLifecyclePolicyPreviewResponse$,
  GetLifecyclePolicyRequest$,
  GetLifecyclePolicyResponse$,
  GetRegistryPolicy$,
  GetRegistryPolicyCommand,
  GetRegistryPolicyRequest$,
  GetRegistryPolicyResponse$,
  GetRegistryScanningConfiguration$,
  GetRegistryScanningConfigurationCommand,
  GetRegistryScanningConfigurationRequest$,
  GetRegistryScanningConfigurationResponse$,
  GetRepositoryPolicy$,
  GetRepositoryPolicyCommand,
  GetRepositoryPolicyRequest$,
  GetRepositoryPolicyResponse$,
  GetSigningConfiguration$,
  GetSigningConfigurationCommand,
  GetSigningConfigurationRequest$,
  GetSigningConfigurationResponse$,
  Image$,
  ImageActionType,
  ImageAlreadyExistsException,
  ImageAlreadyExistsException$,
  ImageArchivedException,
  ImageArchivedException$,
  ImageDetail$,
  ImageDigestDoesNotMatchException,
  ImageDigestDoesNotMatchException$,
  ImageFailure$,
  ImageFailureCode,
  ImageIdentifier$,
  ImageNotFoundException,
  ImageNotFoundException$,
  ImageReferrer$,
  ImageReplicationStatus$,
  ImageScanFinding$,
  ImageScanFindings$,
  ImageScanFindingsSummary$,
  ImageScanningConfiguration$,
  ImageScanStatus$,
  ImageSigningStatus$,
  ImageStatus,
  ImageStatusFilter,
  ImageStorageClassUpdateNotSupportedException,
  ImageStorageClassUpdateNotSupportedException$,
  ImageTagAlreadyExistsException,
  ImageTagAlreadyExistsException$,
  ImageTagMutability,
  ImageTagMutabilityExclusionFilter$,
  ImageTagMutabilityExclusionFilterType,
  InitiateLayerUpload$,
  InitiateLayerUploadCommand,
  InitiateLayerUploadRequest$,
  InitiateLayerUploadResponse$,
  InvalidLayerException,
  InvalidLayerException$,
  InvalidLayerPartException,
  InvalidLayerPartException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidTagParameterException,
  InvalidTagParameterException$,
  KmsException,
  KmsException$,
  Layer$,
  LayerAlreadyExistsException,
  LayerAlreadyExistsException$,
  LayerAvailability,
  LayerFailure$,
  LayerFailureCode,
  LayerInaccessibleException,
  LayerInaccessibleException$,
  LayerPartTooSmallException,
  LayerPartTooSmallException$,
  LayersNotFoundException,
  LayersNotFoundException$,
  LifecyclePolicyNotFoundException,
  LifecyclePolicyNotFoundException$,
  LifecyclePolicyPreviewFilter$,
  LifecyclePolicyPreviewInProgressException,
  LifecyclePolicyPreviewInProgressException$,
  LifecyclePolicyPreviewNotFoundException,
  LifecyclePolicyPreviewNotFoundException$,
  LifecyclePolicyPreviewResult$,
  LifecyclePolicyPreviewStatus,
  LifecyclePolicyPreviewSummary$,
  LifecyclePolicyRuleAction$,
  LifecyclePolicyStorageClass,
  LifecyclePolicyTargetStorageClass,
  LimitExceededException,
  LimitExceededException$,
  ListImageReferrers$,
  ListImageReferrersCommand,
  ListImageReferrersFilter$,
  ListImageReferrersRequest$,
  ListImageReferrersResponse$,
  ListImages$,
  ListImagesCommand,
  ListImagesFilter$,
  ListImagesRequest$,
  ListImagesResponse$,
  ListPullTimeUpdateExclusions$,
  ListPullTimeUpdateExclusionsCommand,
  ListPullTimeUpdateExclusionsRequest$,
  ListPullTimeUpdateExclusionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  PackageVulnerabilityDetails$,
  paginateDescribeImages,
  paginateDescribeImageScanFindings,
  paginateDescribePullThroughCacheRules,
  paginateDescribeRepositories,
  paginateDescribeRepositoryCreationTemplates,
  paginateGetLifecyclePolicyPreview,
  paginateListImages,
  PullThroughCacheRule$,
  PullThroughCacheRuleAlreadyExistsException,
  PullThroughCacheRuleAlreadyExistsException$,
  PullThroughCacheRuleNotFoundException,
  PullThroughCacheRuleNotFoundException$,
  PutAccountSetting$,
  PutAccountSettingCommand,
  PutAccountSettingRequest$,
  PutAccountSettingResponse$,
  PutImage$,
  PutImageCommand,
  PutImageRequest$,
  PutImageResponse$,
  PutImageScanningConfiguration$,
  PutImageScanningConfigurationCommand,
  PutImageScanningConfigurationRequest$,
  PutImageScanningConfigurationResponse$,
  PutImageTagMutability$,
  PutImageTagMutabilityCommand,
  PutImageTagMutabilityRequest$,
  PutImageTagMutabilityResponse$,
  PutLifecyclePolicy$,
  PutLifecyclePolicyCommand,
  PutLifecyclePolicyRequest$,
  PutLifecyclePolicyResponse$,
  PutRegistryPolicy$,
  PutRegistryPolicyCommand,
  PutRegistryPolicyRequest$,
  PutRegistryPolicyResponse$,
  PutRegistryScanningConfiguration$,
  PutRegistryScanningConfigurationCommand,
  PutRegistryScanningConfigurationRequest$,
  PutRegistryScanningConfigurationResponse$,
  PutReplicationConfiguration$,
  PutReplicationConfigurationCommand,
  PutReplicationConfigurationRequest$,
  PutReplicationConfigurationResponse$,
  PutSigningConfiguration$,
  PutSigningConfigurationCommand,
  PutSigningConfigurationRequest$,
  PutSigningConfigurationResponse$,
  RCTAppliedFor,
  Recommendation$,
  ReferencedImagesNotFoundException,
  ReferencedImagesNotFoundException$,
  RegisterPullTimeUpdateExclusion$,
  RegisterPullTimeUpdateExclusionCommand,
  RegisterPullTimeUpdateExclusionRequest$,
  RegisterPullTimeUpdateExclusionResponse$,
  RegistryPolicyNotFoundException,
  RegistryPolicyNotFoundException$,
  RegistryScanningConfiguration$,
  RegistryScanningRule$,
  Remediation$,
  ReplicationConfiguration$,
  ReplicationDestination$,
  ReplicationRule$,
  ReplicationStatus,
  Repository$,
  RepositoryAlreadyExistsException,
  RepositoryAlreadyExistsException$,
  RepositoryCreationTemplate$,
  RepositoryFilter$,
  RepositoryFilterType,
  RepositoryNotEmptyException,
  RepositoryNotEmptyException$,
  RepositoryNotFoundException,
  RepositoryNotFoundException$,
  RepositoryPolicyNotFoundException,
  RepositoryPolicyNotFoundException$,
  RepositoryScanningConfiguration$,
  RepositoryScanningConfigurationFailure$,
  Resource$,
  ResourceDetails$,
  ScanFrequency,
  ScanningConfigurationFailureCode,
  ScanningRepositoryFilter$,
  ScanningRepositoryFilterType,
  ScanNotFoundException,
  ScanNotFoundException$,
  ScanStatus,
  ScanType,
  ScoreDetails$,
  SecretNotFoundException,
  SecretNotFoundException$,
  ServerException,
  ServerException$,
  SetRepositoryPolicy$,
  SetRepositoryPolicyCommand,
  SetRepositoryPolicyRequest$,
  SetRepositoryPolicyResponse$,
  SigningConfiguration$,
  SigningConfigurationNotFoundException,
  SigningConfigurationNotFoundException$,
  SigningRepositoryFilter$,
  SigningRepositoryFilterType,
  SigningRule$,
  SigningStatus,
  StartImageScan$,
  StartImageScanCommand,
  StartImageScanRequest$,
  StartImageScanResponse$,
  StartLifecyclePolicyPreview$,
  StartLifecyclePolicyPreviewCommand,
  StartLifecyclePolicyPreviewRequest$,
  StartLifecyclePolicyPreviewResponse$,
  SubjectIdentifier$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TagStatus,
  TargetStorageClass,
  TemplateAlreadyExistsException,
  TemplateAlreadyExistsException$,
  TemplateNotFoundException,
  TemplateNotFoundException$,
  TooManyTagsException,
  TooManyTagsException$,
  TransitioningImageTotalCount$,
  UnableToAccessSecretException,
  UnableToAccessSecretException$,
  UnableToDecryptSecretValueException,
  UnableToDecryptSecretValueException$,
  UnableToGetUpstreamImageException,
  UnableToGetUpstreamImageException$,
  UnableToGetUpstreamLayerException,
  UnableToGetUpstreamLayerException$,
  UnsupportedImageTypeException,
  UnsupportedImageTypeException$,
  UnsupportedUpstreamRegistryException,
  UnsupportedUpstreamRegistryException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateImageStorageClass$,
  UpdateImageStorageClassCommand,
  UpdateImageStorageClassRequest$,
  UpdateImageStorageClassResponse$,
  UpdatePullThroughCacheRule$,
  UpdatePullThroughCacheRuleCommand,
  UpdatePullThroughCacheRuleRequest$,
  UpdatePullThroughCacheRuleResponse$,
  UpdateRepositoryCreationTemplate$,
  UpdateRepositoryCreationTemplateCommand,
  UpdateRepositoryCreationTemplateRequest$,
  UpdateRepositoryCreationTemplateResponse$,
  UploadLayerPart$,
  UploadLayerPartCommand,
  UploadLayerPartRequest$,
  UploadLayerPartResponse$,
  UploadNotFoundException,
  UploadNotFoundException$,
  UpstreamRegistry,
  ValidatePullThroughCacheRule$,
  ValidatePullThroughCacheRuleCommand,
  ValidatePullThroughCacheRuleRequest$,
  ValidatePullThroughCacheRuleResponse$,
  ValidationException,
  ValidationException$,
  VulnerablePackage$,
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
assert(typeof BatchCheckLayerAvailability$ === "object");
assert(typeof BatchDeleteImageCommand === "function");
assert(typeof BatchDeleteImage$ === "object");
assert(typeof BatchGetImageCommand === "function");
assert(typeof BatchGetImage$ === "object");
assert(typeof BatchGetRepositoryScanningConfigurationCommand === "function");
assert(typeof BatchGetRepositoryScanningConfiguration$ === "object");
assert(typeof CompleteLayerUploadCommand === "function");
assert(typeof CompleteLayerUpload$ === "object");
assert(typeof CreatePullThroughCacheRuleCommand === "function");
assert(typeof CreatePullThroughCacheRule$ === "object");
assert(typeof CreateRepositoryCommand === "function");
assert(typeof CreateRepository$ === "object");
assert(typeof CreateRepositoryCreationTemplateCommand === "function");
assert(typeof CreateRepositoryCreationTemplate$ === "object");
assert(typeof DeleteLifecyclePolicyCommand === "function");
assert(typeof DeleteLifecyclePolicy$ === "object");
assert(typeof DeletePullThroughCacheRuleCommand === "function");
assert(typeof DeletePullThroughCacheRule$ === "object");
assert(typeof DeleteRegistryPolicyCommand === "function");
assert(typeof DeleteRegistryPolicy$ === "object");
assert(typeof DeleteRepositoryCommand === "function");
assert(typeof DeleteRepository$ === "object");
assert(typeof DeleteRepositoryCreationTemplateCommand === "function");
assert(typeof DeleteRepositoryCreationTemplate$ === "object");
assert(typeof DeleteRepositoryPolicyCommand === "function");
assert(typeof DeleteRepositoryPolicy$ === "object");
assert(typeof DeleteSigningConfigurationCommand === "function");
assert(typeof DeleteSigningConfiguration$ === "object");
assert(typeof DeregisterPullTimeUpdateExclusionCommand === "function");
assert(typeof DeregisterPullTimeUpdateExclusion$ === "object");
assert(typeof DescribeImageReplicationStatusCommand === "function");
assert(typeof DescribeImageReplicationStatus$ === "object");
assert(typeof DescribeImagesCommand === "function");
assert(typeof DescribeImages$ === "object");
assert(typeof DescribeImageScanFindingsCommand === "function");
assert(typeof DescribeImageScanFindings$ === "object");
assert(typeof DescribeImageSigningStatusCommand === "function");
assert(typeof DescribeImageSigningStatus$ === "object");
assert(typeof DescribePullThroughCacheRulesCommand === "function");
assert(typeof DescribePullThroughCacheRules$ === "object");
assert(typeof DescribeRegistryCommand === "function");
assert(typeof DescribeRegistry$ === "object");
assert(typeof DescribeRepositoriesCommand === "function");
assert(typeof DescribeRepositories$ === "object");
assert(typeof DescribeRepositoryCreationTemplatesCommand === "function");
assert(typeof DescribeRepositoryCreationTemplates$ === "object");
assert(typeof GetAccountSettingCommand === "function");
assert(typeof GetAccountSetting$ === "object");
assert(typeof GetAuthorizationTokenCommand === "function");
assert(typeof GetAuthorizationToken$ === "object");
assert(typeof GetDownloadUrlForLayerCommand === "function");
assert(typeof GetDownloadUrlForLayer$ === "object");
assert(typeof GetLifecyclePolicyCommand === "function");
assert(typeof GetLifecyclePolicy$ === "object");
assert(typeof GetLifecyclePolicyPreviewCommand === "function");
assert(typeof GetLifecyclePolicyPreview$ === "object");
assert(typeof GetRegistryPolicyCommand === "function");
assert(typeof GetRegistryPolicy$ === "object");
assert(typeof GetRegistryScanningConfigurationCommand === "function");
assert(typeof GetRegistryScanningConfiguration$ === "object");
assert(typeof GetRepositoryPolicyCommand === "function");
assert(typeof GetRepositoryPolicy$ === "object");
assert(typeof GetSigningConfigurationCommand === "function");
assert(typeof GetSigningConfiguration$ === "object");
assert(typeof InitiateLayerUploadCommand === "function");
assert(typeof InitiateLayerUpload$ === "object");
assert(typeof ListImageReferrersCommand === "function");
assert(typeof ListImageReferrers$ === "object");
assert(typeof ListImagesCommand === "function");
assert(typeof ListImages$ === "object");
assert(typeof ListPullTimeUpdateExclusionsCommand === "function");
assert(typeof ListPullTimeUpdateExclusions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutAccountSettingCommand === "function");
assert(typeof PutAccountSetting$ === "object");
assert(typeof PutImageCommand === "function");
assert(typeof PutImage$ === "object");
assert(typeof PutImageScanningConfigurationCommand === "function");
assert(typeof PutImageScanningConfiguration$ === "object");
assert(typeof PutImageTagMutabilityCommand === "function");
assert(typeof PutImageTagMutability$ === "object");
assert(typeof PutLifecyclePolicyCommand === "function");
assert(typeof PutLifecyclePolicy$ === "object");
assert(typeof PutRegistryPolicyCommand === "function");
assert(typeof PutRegistryPolicy$ === "object");
assert(typeof PutRegistryScanningConfigurationCommand === "function");
assert(typeof PutRegistryScanningConfiguration$ === "object");
assert(typeof PutReplicationConfigurationCommand === "function");
assert(typeof PutReplicationConfiguration$ === "object");
assert(typeof PutSigningConfigurationCommand === "function");
assert(typeof PutSigningConfiguration$ === "object");
assert(typeof RegisterPullTimeUpdateExclusionCommand === "function");
assert(typeof RegisterPullTimeUpdateExclusion$ === "object");
assert(typeof SetRepositoryPolicyCommand === "function");
assert(typeof SetRepositoryPolicy$ === "object");
assert(typeof StartImageScanCommand === "function");
assert(typeof StartImageScan$ === "object");
assert(typeof StartLifecyclePolicyPreviewCommand === "function");
assert(typeof StartLifecyclePolicyPreview$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateImageStorageClassCommand === "function");
assert(typeof UpdateImageStorageClass$ === "object");
assert(typeof UpdatePullThroughCacheRuleCommand === "function");
assert(typeof UpdatePullThroughCacheRule$ === "object");
assert(typeof UpdateRepositoryCreationTemplateCommand === "function");
assert(typeof UpdateRepositoryCreationTemplate$ === "object");
assert(typeof UploadLayerPartCommand === "function");
assert(typeof UploadLayerPart$ === "object");
assert(typeof ValidatePullThroughCacheRuleCommand === "function");
assert(typeof ValidatePullThroughCacheRule$ === "object");
// structural schemas
assert(typeof Attribute$ === "object");
assert(typeof AuthorizationData$ === "object");
assert(typeof AwsEcrContainerImageDetails$ === "object");
assert(typeof BatchCheckLayerAvailabilityRequest$ === "object");
assert(typeof BatchCheckLayerAvailabilityResponse$ === "object");
assert(typeof BatchDeleteImageRequest$ === "object");
assert(typeof BatchDeleteImageResponse$ === "object");
assert(typeof BatchGetImageRequest$ === "object");
assert(typeof BatchGetImageResponse$ === "object");
assert(typeof BatchGetRepositoryScanningConfigurationRequest$ === "object");
assert(typeof BatchGetRepositoryScanningConfigurationResponse$ === "object");
assert(typeof CompleteLayerUploadRequest$ === "object");
assert(typeof CompleteLayerUploadResponse$ === "object");
assert(typeof CreatePullThroughCacheRuleRequest$ === "object");
assert(typeof CreatePullThroughCacheRuleResponse$ === "object");
assert(typeof CreateRepositoryCreationTemplateRequest$ === "object");
assert(typeof CreateRepositoryCreationTemplateResponse$ === "object");
assert(typeof CreateRepositoryRequest$ === "object");
assert(typeof CreateRepositoryResponse$ === "object");
assert(typeof CvssScore$ === "object");
assert(typeof CvssScoreAdjustment$ === "object");
assert(typeof CvssScoreDetails$ === "object");
assert(typeof DeleteLifecyclePolicyRequest$ === "object");
assert(typeof DeleteLifecyclePolicyResponse$ === "object");
assert(typeof DeletePullThroughCacheRuleRequest$ === "object");
assert(typeof DeletePullThroughCacheRuleResponse$ === "object");
assert(typeof DeleteRegistryPolicyRequest$ === "object");
assert(typeof DeleteRegistryPolicyResponse$ === "object");
assert(typeof DeleteRepositoryCreationTemplateRequest$ === "object");
assert(typeof DeleteRepositoryCreationTemplateResponse$ === "object");
assert(typeof DeleteRepositoryPolicyRequest$ === "object");
assert(typeof DeleteRepositoryPolicyResponse$ === "object");
assert(typeof DeleteRepositoryRequest$ === "object");
assert(typeof DeleteRepositoryResponse$ === "object");
assert(typeof DeleteSigningConfigurationRequest$ === "object");
assert(typeof DeleteSigningConfigurationResponse$ === "object");
assert(typeof DeregisterPullTimeUpdateExclusionRequest$ === "object");
assert(typeof DeregisterPullTimeUpdateExclusionResponse$ === "object");
assert(typeof DescribeImageReplicationStatusRequest$ === "object");
assert(typeof DescribeImageReplicationStatusResponse$ === "object");
assert(typeof DescribeImageScanFindingsRequest$ === "object");
assert(typeof DescribeImageScanFindingsResponse$ === "object");
assert(typeof DescribeImagesFilter$ === "object");
assert(typeof DescribeImageSigningStatusRequest$ === "object");
assert(typeof DescribeImageSigningStatusResponse$ === "object");
assert(typeof DescribeImagesRequest$ === "object");
assert(typeof DescribeImagesResponse$ === "object");
assert(typeof DescribePullThroughCacheRulesRequest$ === "object");
assert(typeof DescribePullThroughCacheRulesResponse$ === "object");
assert(typeof DescribeRegistryRequest$ === "object");
assert(typeof DescribeRegistryResponse$ === "object");
assert(typeof DescribeRepositoriesRequest$ === "object");
assert(typeof DescribeRepositoriesResponse$ === "object");
assert(typeof DescribeRepositoryCreationTemplatesRequest$ === "object");
assert(typeof DescribeRepositoryCreationTemplatesResponse$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof EncryptionConfigurationForRepositoryCreationTemplate$ === "object");
assert(typeof EnhancedImageScanFinding$ === "object");
assert(typeof GetAccountSettingRequest$ === "object");
assert(typeof GetAccountSettingResponse$ === "object");
assert(typeof GetAuthorizationTokenRequest$ === "object");
assert(typeof GetAuthorizationTokenResponse$ === "object");
assert(typeof GetDownloadUrlForLayerRequest$ === "object");
assert(typeof GetDownloadUrlForLayerResponse$ === "object");
assert(typeof GetLifecyclePolicyPreviewRequest$ === "object");
assert(typeof GetLifecyclePolicyPreviewResponse$ === "object");
assert(typeof GetLifecyclePolicyRequest$ === "object");
assert(typeof GetLifecyclePolicyResponse$ === "object");
assert(typeof GetRegistryPolicyRequest$ === "object");
assert(typeof GetRegistryPolicyResponse$ === "object");
assert(typeof GetRegistryScanningConfigurationRequest$ === "object");
assert(typeof GetRegistryScanningConfigurationResponse$ === "object");
assert(typeof GetRepositoryPolicyRequest$ === "object");
assert(typeof GetRepositoryPolicyResponse$ === "object");
assert(typeof GetSigningConfigurationRequest$ === "object");
assert(typeof GetSigningConfigurationResponse$ === "object");
assert(typeof Image$ === "object");
assert(typeof ImageDetail$ === "object");
assert(typeof ImageFailure$ === "object");
assert(typeof ImageIdentifier$ === "object");
assert(typeof ImageReferrer$ === "object");
assert(typeof ImageReplicationStatus$ === "object");
assert(typeof ImageScanFinding$ === "object");
assert(typeof ImageScanFindings$ === "object");
assert(typeof ImageScanFindingsSummary$ === "object");
assert(typeof ImageScanningConfiguration$ === "object");
assert(typeof ImageScanStatus$ === "object");
assert(typeof ImageSigningStatus$ === "object");
assert(typeof ImageTagMutabilityExclusionFilter$ === "object");
assert(typeof InitiateLayerUploadRequest$ === "object");
assert(typeof InitiateLayerUploadResponse$ === "object");
assert(typeof Layer$ === "object");
assert(typeof LayerFailure$ === "object");
assert(typeof LifecyclePolicyPreviewFilter$ === "object");
assert(typeof LifecyclePolicyPreviewResult$ === "object");
assert(typeof LifecyclePolicyPreviewSummary$ === "object");
assert(typeof LifecyclePolicyRuleAction$ === "object");
assert(typeof ListImageReferrersFilter$ === "object");
assert(typeof ListImageReferrersRequest$ === "object");
assert(typeof ListImageReferrersResponse$ === "object");
assert(typeof ListImagesFilter$ === "object");
assert(typeof ListImagesRequest$ === "object");
assert(typeof ListImagesResponse$ === "object");
assert(typeof ListPullTimeUpdateExclusionsRequest$ === "object");
assert(typeof ListPullTimeUpdateExclusionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof PackageVulnerabilityDetails$ === "object");
assert(typeof PullThroughCacheRule$ === "object");
assert(typeof PutAccountSettingRequest$ === "object");
assert(typeof PutAccountSettingResponse$ === "object");
assert(typeof PutImageRequest$ === "object");
assert(typeof PutImageResponse$ === "object");
assert(typeof PutImageScanningConfigurationRequest$ === "object");
assert(typeof PutImageScanningConfigurationResponse$ === "object");
assert(typeof PutImageTagMutabilityRequest$ === "object");
assert(typeof PutImageTagMutabilityResponse$ === "object");
assert(typeof PutLifecyclePolicyRequest$ === "object");
assert(typeof PutLifecyclePolicyResponse$ === "object");
assert(typeof PutRegistryPolicyRequest$ === "object");
assert(typeof PutRegistryPolicyResponse$ === "object");
assert(typeof PutRegistryScanningConfigurationRequest$ === "object");
assert(typeof PutRegistryScanningConfigurationResponse$ === "object");
assert(typeof PutReplicationConfigurationRequest$ === "object");
assert(typeof PutReplicationConfigurationResponse$ === "object");
assert(typeof PutSigningConfigurationRequest$ === "object");
assert(typeof PutSigningConfigurationResponse$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof RegisterPullTimeUpdateExclusionRequest$ === "object");
assert(typeof RegisterPullTimeUpdateExclusionResponse$ === "object");
assert(typeof RegistryScanningConfiguration$ === "object");
assert(typeof RegistryScanningRule$ === "object");
assert(typeof Remediation$ === "object");
assert(typeof ReplicationConfiguration$ === "object");
assert(typeof ReplicationDestination$ === "object");
assert(typeof ReplicationRule$ === "object");
assert(typeof Repository$ === "object");
assert(typeof RepositoryCreationTemplate$ === "object");
assert(typeof RepositoryFilter$ === "object");
assert(typeof RepositoryScanningConfiguration$ === "object");
assert(typeof RepositoryScanningConfigurationFailure$ === "object");
assert(typeof Resource$ === "object");
assert(typeof ResourceDetails$ === "object");
assert(typeof ScanningRepositoryFilter$ === "object");
assert(typeof ScoreDetails$ === "object");
assert(typeof SetRepositoryPolicyRequest$ === "object");
assert(typeof SetRepositoryPolicyResponse$ === "object");
assert(typeof SigningConfiguration$ === "object");
assert(typeof SigningRepositoryFilter$ === "object");
assert(typeof SigningRule$ === "object");
assert(typeof StartImageScanRequest$ === "object");
assert(typeof StartImageScanResponse$ === "object");
assert(typeof StartLifecyclePolicyPreviewRequest$ === "object");
assert(typeof StartLifecyclePolicyPreviewResponse$ === "object");
assert(typeof SubjectIdentifier$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TransitioningImageTotalCount$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateImageStorageClassRequest$ === "object");
assert(typeof UpdateImageStorageClassResponse$ === "object");
assert(typeof UpdatePullThroughCacheRuleRequest$ === "object");
assert(typeof UpdatePullThroughCacheRuleResponse$ === "object");
assert(typeof UpdateRepositoryCreationTemplateRequest$ === "object");
assert(typeof UpdateRepositoryCreationTemplateResponse$ === "object");
assert(typeof UploadLayerPartRequest$ === "object");
assert(typeof UploadLayerPartResponse$ === "object");
assert(typeof ValidatePullThroughCacheRuleRequest$ === "object");
assert(typeof ValidatePullThroughCacheRuleResponse$ === "object");
assert(typeof VulnerablePackage$ === "object");
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
assert(typeof BlockedByOrganizationPolicyException$ === "object");
assert(EmptyUploadException.prototype instanceof ECRServiceException);
assert(typeof EmptyUploadException$ === "object");
assert(ExclusionAlreadyExistsException.prototype instanceof ECRServiceException);
assert(typeof ExclusionAlreadyExistsException$ === "object");
assert(ExclusionNotFoundException.prototype instanceof ECRServiceException);
assert(typeof ExclusionNotFoundException$ === "object");
assert(ImageAlreadyExistsException.prototype instanceof ECRServiceException);
assert(typeof ImageAlreadyExistsException$ === "object");
assert(ImageArchivedException.prototype instanceof ECRServiceException);
assert(typeof ImageArchivedException$ === "object");
assert(ImageDigestDoesNotMatchException.prototype instanceof ECRServiceException);
assert(typeof ImageDigestDoesNotMatchException$ === "object");
assert(ImageNotFoundException.prototype instanceof ECRServiceException);
assert(typeof ImageNotFoundException$ === "object");
assert(ImageStorageClassUpdateNotSupportedException.prototype instanceof ECRServiceException);
assert(typeof ImageStorageClassUpdateNotSupportedException$ === "object");
assert(ImageTagAlreadyExistsException.prototype instanceof ECRServiceException);
assert(typeof ImageTagAlreadyExistsException$ === "object");
assert(InvalidLayerException.prototype instanceof ECRServiceException);
assert(typeof InvalidLayerException$ === "object");
assert(InvalidLayerPartException.prototype instanceof ECRServiceException);
assert(typeof InvalidLayerPartException$ === "object");
assert(InvalidParameterException.prototype instanceof ECRServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidTagParameterException.prototype instanceof ECRServiceException);
assert(typeof InvalidTagParameterException$ === "object");
assert(KmsException.prototype instanceof ECRServiceException);
assert(typeof KmsException$ === "object");
assert(LayerAlreadyExistsException.prototype instanceof ECRServiceException);
assert(typeof LayerAlreadyExistsException$ === "object");
assert(LayerInaccessibleException.prototype instanceof ECRServiceException);
assert(typeof LayerInaccessibleException$ === "object");
assert(LayerPartTooSmallException.prototype instanceof ECRServiceException);
assert(typeof LayerPartTooSmallException$ === "object");
assert(LayersNotFoundException.prototype instanceof ECRServiceException);
assert(typeof LayersNotFoundException$ === "object");
assert(LifecyclePolicyNotFoundException.prototype instanceof ECRServiceException);
assert(typeof LifecyclePolicyNotFoundException$ === "object");
assert(LifecyclePolicyPreviewInProgressException.prototype instanceof ECRServiceException);
assert(typeof LifecyclePolicyPreviewInProgressException$ === "object");
assert(LifecyclePolicyPreviewNotFoundException.prototype instanceof ECRServiceException);
assert(typeof LifecyclePolicyPreviewNotFoundException$ === "object");
assert(LimitExceededException.prototype instanceof ECRServiceException);
assert(typeof LimitExceededException$ === "object");
assert(PullThroughCacheRuleAlreadyExistsException.prototype instanceof ECRServiceException);
assert(typeof PullThroughCacheRuleAlreadyExistsException$ === "object");
assert(PullThroughCacheRuleNotFoundException.prototype instanceof ECRServiceException);
assert(typeof PullThroughCacheRuleNotFoundException$ === "object");
assert(ReferencedImagesNotFoundException.prototype instanceof ECRServiceException);
assert(typeof ReferencedImagesNotFoundException$ === "object");
assert(RegistryPolicyNotFoundException.prototype instanceof ECRServiceException);
assert(typeof RegistryPolicyNotFoundException$ === "object");
assert(RepositoryAlreadyExistsException.prototype instanceof ECRServiceException);
assert(typeof RepositoryAlreadyExistsException$ === "object");
assert(RepositoryNotEmptyException.prototype instanceof ECRServiceException);
assert(typeof RepositoryNotEmptyException$ === "object");
assert(RepositoryNotFoundException.prototype instanceof ECRServiceException);
assert(typeof RepositoryNotFoundException$ === "object");
assert(RepositoryPolicyNotFoundException.prototype instanceof ECRServiceException);
assert(typeof RepositoryPolicyNotFoundException$ === "object");
assert(ScanNotFoundException.prototype instanceof ECRServiceException);
assert(typeof ScanNotFoundException$ === "object");
assert(SecretNotFoundException.prototype instanceof ECRServiceException);
assert(typeof SecretNotFoundException$ === "object");
assert(ServerException.prototype instanceof ECRServiceException);
assert(typeof ServerException$ === "object");
assert(SigningConfigurationNotFoundException.prototype instanceof ECRServiceException);
assert(typeof SigningConfigurationNotFoundException$ === "object");
assert(TemplateAlreadyExistsException.prototype instanceof ECRServiceException);
assert(typeof TemplateAlreadyExistsException$ === "object");
assert(TemplateNotFoundException.prototype instanceof ECRServiceException);
assert(typeof TemplateNotFoundException$ === "object");
assert(TooManyTagsException.prototype instanceof ECRServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnableToAccessSecretException.prototype instanceof ECRServiceException);
assert(typeof UnableToAccessSecretException$ === "object");
assert(UnableToDecryptSecretValueException.prototype instanceof ECRServiceException);
assert(typeof UnableToDecryptSecretValueException$ === "object");
assert(UnableToGetUpstreamImageException.prototype instanceof ECRServiceException);
assert(typeof UnableToGetUpstreamImageException$ === "object");
assert(UnableToGetUpstreamLayerException.prototype instanceof ECRServiceException);
assert(typeof UnableToGetUpstreamLayerException$ === "object");
assert(UnsupportedImageTypeException.prototype instanceof ECRServiceException);
assert(typeof UnsupportedImageTypeException$ === "object");
assert(UnsupportedUpstreamRegistryException.prototype instanceof ECRServiceException);
assert(typeof UnsupportedUpstreamRegistryException$ === "object");
assert(UploadNotFoundException.prototype instanceof ECRServiceException);
assert(typeof UploadNotFoundException$ === "object");
assert(ValidationException.prototype instanceof ECRServiceException);
assert(typeof ValidationException$ === "object");
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
