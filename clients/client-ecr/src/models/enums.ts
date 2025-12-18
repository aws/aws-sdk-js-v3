// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const LayerFailureCode = {
  InvalidLayerDigest: "InvalidLayerDigest",
  MissingLayerDigest: "MissingLayerDigest",
} as const;
/**
 * @public
 */
export type LayerFailureCode = (typeof LayerFailureCode)[keyof typeof LayerFailureCode];

/**
 * @public
 * @enum
 */
export const LayerAvailability = {
  ARCHIVED: "ARCHIVED",
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type LayerAvailability = (typeof LayerAvailability)[keyof typeof LayerAvailability];

/**
 * @public
 * @enum
 */
export const ImageFailureCode = {
  ImageInaccessible: "ImageInaccessible",
  ImageNotFound: "ImageNotFound",
  ImageReferencedByManifestList: "ImageReferencedByManifestList",
  ImageTagDoesNotMatchDigest: "ImageTagDoesNotMatchDigest",
  InvalidImageDigest: "InvalidImageDigest",
  InvalidImageTag: "InvalidImageTag",
  KmsError: "KmsError",
  MissingDigestAndTag: "MissingDigestAndTag",
  UpstreamAccessDenied: "UpstreamAccessDenied",
  UpstreamTooManyRequests: "UpstreamTooManyRequests",
  UpstreamUnavailable: "UpstreamUnavailable",
} as const;
/**
 * @public
 */
export type ImageFailureCode = (typeof ImageFailureCode)[keyof typeof ImageFailureCode];

/**
 * @public
 * @enum
 */
export const ScanningConfigurationFailureCode = {
  REPOSITORY_NOT_FOUND: "REPOSITORY_NOT_FOUND",
} as const;
/**
 * @public
 */
export type ScanningConfigurationFailureCode =
  (typeof ScanningConfigurationFailureCode)[keyof typeof ScanningConfigurationFailureCode];

/**
 * @public
 * @enum
 */
export const ScanningRepositoryFilterType = {
  WILDCARD: "WILDCARD",
} as const;
/**
 * @public
 */
export type ScanningRepositoryFilterType =
  (typeof ScanningRepositoryFilterType)[keyof typeof ScanningRepositoryFilterType];

/**
 * @public
 * @enum
 */
export const ScanFrequency = {
  CONTINUOUS_SCAN: "CONTINUOUS_SCAN",
  MANUAL: "MANUAL",
  SCAN_ON_PUSH: "SCAN_ON_PUSH",
} as const;
/**
 * @public
 */
export type ScanFrequency = (typeof ScanFrequency)[keyof typeof ScanFrequency];

/**
 * @public
 * @enum
 */
export const UpstreamRegistry = {
  AzureContainerRegistry: "azure-container-registry",
  DockerHub: "docker-hub",
  Ecr: "ecr",
  EcrPublic: "ecr-public",
  GitHubContainerRegistry: "github-container-registry",
  GitLabContainerRegistry: "gitlab-container-registry",
  K8s: "k8s",
  Quay: "quay",
} as const;
/**
 * @public
 */
export type UpstreamRegistry = (typeof UpstreamRegistry)[keyof typeof UpstreamRegistry];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  AES256: "AES256",
  KMS: "KMS",
  KMS_DSSE: "KMS_DSSE",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const ImageTagMutability = {
  IMMUTABLE: "IMMUTABLE",
  IMMUTABLE_WITH_EXCLUSION: "IMMUTABLE_WITH_EXCLUSION",
  MUTABLE: "MUTABLE",
  MUTABLE_WITH_EXCLUSION: "MUTABLE_WITH_EXCLUSION",
} as const;
/**
 * @public
 */
export type ImageTagMutability = (typeof ImageTagMutability)[keyof typeof ImageTagMutability];

/**
 * @public
 * @enum
 */
export const ImageTagMutabilityExclusionFilterType = {
  WILDCARD: "WILDCARD",
} as const;
/**
 * @public
 */
export type ImageTagMutabilityExclusionFilterType =
  (typeof ImageTagMutabilityExclusionFilterType)[keyof typeof ImageTagMutabilityExclusionFilterType];

/**
 * @public
 * @enum
 */
export const RCTAppliedFor = {
  CREATE_ON_PUSH: "CREATE_ON_PUSH",
  PULL_THROUGH_CACHE: "PULL_THROUGH_CACHE",
  REPLICATION: "REPLICATION",
} as const;
/**
 * @public
 */
export type RCTAppliedFor = (typeof RCTAppliedFor)[keyof typeof RCTAppliedFor];

/**
 * @public
 * @enum
 */
export const SigningRepositoryFilterType = {
  WILDCARD_MATCH: "WILDCARD_MATCH",
} as const;
/**
 * @public
 */
export type SigningRepositoryFilterType =
  (typeof SigningRepositoryFilterType)[keyof typeof SigningRepositoryFilterType];

/**
 * @public
 * @enum
 */
export const ReplicationStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ReplicationStatus = (typeof ReplicationStatus)[keyof typeof ReplicationStatus];

/**
 * @public
 * @enum
 */
export const ImageStatusFilter = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  ANY: "ANY",
  ARCHIVED: "ARCHIVED",
} as const;
/**
 * @public
 */
export type ImageStatusFilter = (typeof ImageStatusFilter)[keyof typeof ImageStatusFilter];

/**
 * @public
 * @enum
 */
export const TagStatus = {
  ANY: "ANY",
  TAGGED: "TAGGED",
  UNTAGGED: "UNTAGGED",
} as const;
/**
 * @public
 */
export type TagStatus = (typeof TagStatus)[keyof typeof TagStatus];

/**
 * @public
 * @enum
 */
export const FindingSeverity = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  INFORMATIONAL: "INFORMATIONAL",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  UNDEFINED: "UNDEFINED",
} as const;
/**
 * @public
 */
export type FindingSeverity = (typeof FindingSeverity)[keyof typeof FindingSeverity];

/**
 * @public
 * @enum
 */
export const ScanStatus = {
  ACTIVE: "ACTIVE",
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  FINDINGS_UNAVAILABLE: "FINDINGS_UNAVAILABLE",
  IMAGE_ARCHIVED: "IMAGE_ARCHIVED",
  IN_PROGRESS: "IN_PROGRESS",
  LIMIT_EXCEEDED: "LIMIT_EXCEEDED",
  PENDING: "PENDING",
  SCAN_ELIGIBILITY_EXPIRED: "SCAN_ELIGIBILITY_EXPIRED",
  UNSUPPORTED_IMAGE: "UNSUPPORTED_IMAGE",
} as const;
/**
 * @public
 */
export type ScanStatus = (typeof ScanStatus)[keyof typeof ScanStatus];

/**
 * @public
 * @enum
 */
export const ImageStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;
/**
 * @public
 */
export type ImageStatus = (typeof ImageStatus)[keyof typeof ImageStatus];

/**
 * @public
 * @enum
 */
export const SigningStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type SigningStatus = (typeof SigningStatus)[keyof typeof SigningStatus];

/**
 * @public
 * @enum
 */
export const RepositoryFilterType = {
  PREFIX_MATCH: "PREFIX_MATCH",
} as const;
/**
 * @public
 */
export type RepositoryFilterType = (typeof RepositoryFilterType)[keyof typeof RepositoryFilterType];

/**
 * @public
 * @enum
 */
export const LifecyclePolicyTargetStorageClass = {
  ARCHIVE: "ARCHIVE",
} as const;
/**
 * @public
 */
export type LifecyclePolicyTargetStorageClass =
  (typeof LifecyclePolicyTargetStorageClass)[keyof typeof LifecyclePolicyTargetStorageClass];

/**
 * @public
 * @enum
 */
export const ImageActionType = {
  EXPIRE: "EXPIRE",
  TRANSITION: "TRANSITION",
} as const;
/**
 * @public
 */
export type ImageActionType = (typeof ImageActionType)[keyof typeof ImageActionType];

/**
 * @public
 * @enum
 */
export const LifecyclePolicyStorageClass = {
  ARCHIVE: "ARCHIVE",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type LifecyclePolicyStorageClass =
  (typeof LifecyclePolicyStorageClass)[keyof typeof LifecyclePolicyStorageClass];

/**
 * @public
 * @enum
 */
export const LifecyclePolicyPreviewStatus = {
  COMPLETE: "COMPLETE",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type LifecyclePolicyPreviewStatus =
  (typeof LifecyclePolicyPreviewStatus)[keyof typeof LifecyclePolicyPreviewStatus];

/**
 * @public
 * @enum
 */
export const ScanType = {
  BASIC: "BASIC",
  ENHANCED: "ENHANCED",
} as const;
/**
 * @public
 */
export type ScanType = (typeof ScanType)[keyof typeof ScanType];

/**
 * @public
 * @enum
 */
export const ArtifactStatusFilter = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  ANY: "ANY",
  ARCHIVED: "ARCHIVED",
} as const;
/**
 * @public
 */
export type ArtifactStatusFilter = (typeof ArtifactStatusFilter)[keyof typeof ArtifactStatusFilter];

/**
 * @public
 * @enum
 */
export const ArtifactStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;
/**
 * @public
 */
export type ArtifactStatus = (typeof ArtifactStatus)[keyof typeof ArtifactStatus];

/**
 * @public
 * @enum
 */
export const TargetStorageClass = {
  ARCHIVE: "ARCHIVE",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type TargetStorageClass = (typeof TargetStorageClass)[keyof typeof TargetStorageClass];
