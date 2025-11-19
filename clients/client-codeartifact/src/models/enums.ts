// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AllowPublish = {
  ALLOW: "ALLOW",
  BLOCK: "BLOCK",
} as const;
/**
 * @public
 */
export type AllowPublish = (typeof AllowPublish)[keyof typeof AllowPublish];

/**
 * @public
 * @enum
 */
export const AllowUpstream = {
  ALLOW: "ALLOW",
  BLOCK: "BLOCK",
} as const;
/**
 * @public
 */
export type AllowUpstream = (typeof AllowUpstream)[keyof typeof AllowUpstream];

/**
 * @public
 * @enum
 */
export const HashAlgorithm = {
  MD5: "MD5",
  SHA1: "SHA-1",
  SHA256: "SHA-256",
  SHA512: "SHA-512",
} as const;
/**
 * @public
 */
export type HashAlgorithm = (typeof HashAlgorithm)[keyof typeof HashAlgorithm];

/**
 * @public
 * @enum
 */
export const PackageGroupAssociationType = {
  STRONG: "STRONG",
  WEAK: "WEAK",
} as const;
/**
 * @public
 */
export type PackageGroupAssociationType =
  (typeof PackageGroupAssociationType)[keyof typeof PackageGroupAssociationType];

/**
 * @public
 * @enum
 */
export const PackageFormat = {
  CARGO: "cargo",
  GENERIC: "generic",
  MAVEN: "maven",
  NPM: "npm",
  NUGET: "nuget",
  PYPI: "pypi",
  RUBY: "ruby",
  SWIFT: "swift",
} as const;
/**
 * @public
 */
export type PackageFormat = (typeof PackageFormat)[keyof typeof PackageFormat];

/**
 * @public
 * @enum
 */
export const ExternalConnectionStatus = {
  AVAILABLE: "Available",
} as const;
/**
 * @public
 */
export type ExternalConnectionStatus = (typeof ExternalConnectionStatus)[keyof typeof ExternalConnectionStatus];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ASSET: "asset",
  DOMAIN: "domain",
  PACKAGE: "package",
  PACKAGE_VERSION: "package-version",
  REPOSITORY: "repository",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  ENCRYPTION_KEY_ERROR: "ENCRYPTION_KEY_ERROR",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const PackageVersionErrorCode = {
  ALREADY_EXISTS: "ALREADY_EXISTS",
  MISMATCHED_REVISION: "MISMATCHED_REVISION",
  MISMATCHED_STATUS: "MISMATCHED_STATUS",
  NOT_ALLOWED: "NOT_ALLOWED",
  NOT_FOUND: "NOT_FOUND",
  SKIPPED: "SKIPPED",
} as const;
/**
 * @public
 */
export type PackageVersionErrorCode = (typeof PackageVersionErrorCode)[keyof typeof PackageVersionErrorCode];

/**
 * @public
 * @enum
 */
export const PackageVersionStatus = {
  ARCHIVED: "Archived",
  DELETED: "Deleted",
  DISPOSED: "Disposed",
  PUBLISHED: "Published",
  UNFINISHED: "Unfinished",
  UNLISTED: "Unlisted",
} as const;
/**
 * @public
 */
export type PackageVersionStatus = (typeof PackageVersionStatus)[keyof typeof PackageVersionStatus];

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  ACTIVE: "Active",
  DELETED: "Deleted",
} as const;
/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 * @enum
 */
export const PackageGroupOriginRestrictionType = {
  EXTERNAL_UPSTREAM: "EXTERNAL_UPSTREAM",
  INTERNAL_UPSTREAM: "INTERNAL_UPSTREAM",
  PUBLISH: "PUBLISH",
} as const;
/**
 * @public
 */
export type PackageGroupOriginRestrictionType =
  (typeof PackageGroupOriginRestrictionType)[keyof typeof PackageGroupOriginRestrictionType];

/**
 * @public
 * @enum
 */
export const PackageGroupOriginRestrictionMode = {
  ALLOW: "ALLOW",
  ALLOW_SPECIFIC_REPOSITORIES: "ALLOW_SPECIFIC_REPOSITORIES",
  BLOCK: "BLOCK",
  INHERIT: "INHERIT",
} as const;
/**
 * @public
 */
export type PackageGroupOriginRestrictionMode =
  (typeof PackageGroupOriginRestrictionMode)[keyof typeof PackageGroupOriginRestrictionMode];

/**
 * @public
 * @enum
 */
export const PackageVersionOriginType = {
  EXTERNAL: "EXTERNAL",
  INTERNAL: "INTERNAL",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type PackageVersionOriginType = (typeof PackageVersionOriginType)[keyof typeof PackageVersionOriginType];

/**
 * @public
 * @enum
 */
export const EndpointType = {
  DUALSTACK: "dualstack",
  IPV4: "ipv4",
} as const;
/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * @public
 * @enum
 */
export const PackageVersionSortType = {
  PUBLISHED_TIME: "PUBLISHED_TIME",
} as const;
/**
 * @public
 */
export type PackageVersionSortType = (typeof PackageVersionSortType)[keyof typeof PackageVersionSortType];

/**
 * @public
 * @enum
 */
export const PackageGroupAllowedRepositoryUpdateType = {
  ADDED: "ADDED",
  REMOVED: "REMOVED",
} as const;
/**
 * @public
 */
export type PackageGroupAllowedRepositoryUpdateType =
  (typeof PackageGroupAllowedRepositoryUpdateType)[keyof typeof PackageGroupAllowedRepositoryUpdateType];
