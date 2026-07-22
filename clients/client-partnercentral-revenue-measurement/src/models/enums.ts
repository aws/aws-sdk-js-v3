// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  ACCESS_DENIED: "ACCESS_DENIED",
} as const;
/**
 * @public
 */
export type AccessDeniedExceptionReason =
  (typeof AccessDeniedExceptionReason)[keyof typeof AccessDeniedExceptionReason];

/**
 * @public
 * @enum
 */
export const AllocationStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type AllocationStatus = (typeof AllocationStatus)[keyof typeof AllocationStatus];

/**
 * @public
 * @enum
 */
export const AttributionSortBy = {
  LAST_MODIFIED_DATE: "LastModifiedDate",
} as const;
/**
 * @public
 */
export type AttributionSortBy = (typeof AttributionSortBy)[keyof typeof AttributionSortBy];

/**
 * @public
 * @enum
 */
export const CatalogName = {
  AWS: "AWS",
  SANDBOX: "Sandbox",
} as const;
/**
 * @public
 */
export type CatalogName = (typeof CatalogName)[keyof typeof CatalogName];

/**
 * @public
 * @enum
 */
export const TenancyModel = {
  MULTI_TENANT: "MULTI_TENANT",
  SINGLE_TENANT: "SINGLE_TENANT",
} as const;
/**
 * @public
 */
export type TenancyModel = (typeof TenancyModel)[keyof typeof TenancyModel];

/**
 * @public
 * @enum
 */
export const ConflictExceptionReason = {
  CONCURRENT_MODIFICATION: "CONCURRENT_MODIFICATION",
  CONFLICT_CLIENT_TOKEN: "CONFLICT_CLIENT_TOKEN",
  RESOURCE_ALREADY_EXISTS: "RESOURCE_ALREADY_EXISTS",
  REVISION_MISMATCH: "REVISION_MISMATCH",
} as const;
/**
 * @public
 */
export type ConflictExceptionReason = (typeof ConflictExceptionReason)[keyof typeof ConflictExceptionReason];

/**
 * @public
 * @enum
 */
export const ResourceNotFoundExceptionReason = {
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type ResourceNotFoundExceptionReason =
  (typeof ResourceNotFoundExceptionReason)[keyof typeof ResourceNotFoundExceptionReason];

/**
 * @public
 * @enum
 */
export const ServiceQuotaExceededExceptionReason = {
  ATTRIBUTION_LIMIT_EXCEEDED: "ATTRIBUTION_LIMIT_EXCEEDED",
  TAG_LIMIT_EXCEEDED: "TAG_LIMIT_EXCEEDED",
} as const;
/**
 * @public
 */
export type ServiceQuotaExceededExceptionReason =
  (typeof ServiceQuotaExceededExceptionReason)[keyof typeof ServiceQuotaExceededExceptionReason];

/**
 * @public
 * @enum
 */
export const FieldValidationCode = {
  ACTION_NOT_PERMITTED: "ACTION_NOT_PERMITTED",
  DUPLICATE_VALUE: "DUPLICATE_VALUE",
  INVALID_ENUM_VALUE: "INVALID_ENUM_VALUE",
  INVALID_NUMBER_FORMAT: "INVALID_NUMBER_FORMAT",
  INVALID_STRING_FORMAT: "INVALID_STRING_FORMAT",
  INVALID_STRING_LENGTH: "INVALID_STRING_LENGTH",
  INVALID_VALUE: "INVALID_VALUE",
  REQUIRED_FIELD_MISSING: "REQUIRED_FIELD_MISSING",
  TOO_MANY_VALUES: "TOO_MANY_VALUES",
} as const;
/**
 * @public
 */
export type FieldValidationCode = (typeof FieldValidationCode)[keyof typeof FieldValidationCode];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  BUSINESS_VALIDATION_FAILED: "BUSINESS_VALIDATION_FAILED",
  REQUEST_VALIDATION_FAILED: "REQUEST_VALIDATION_FAILED",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const MarketplaceRevenueShareAllocationSortField = {
  EFFECTIVE_FROM: "EffectiveFrom",
} as const;
/**
 * @public
 */
export type MarketplaceRevenueShareAllocationSortField =
  (typeof MarketplaceRevenueShareAllocationSortField)[keyof typeof MarketplaceRevenueShareAllocationSortField];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const MarketplaceRevenueShareSortBy = {
  LAST_MODIFIED_DATE: "LastModifiedDate",
} as const;
/**
 * @public
 */
export type MarketplaceRevenueShareSortBy =
  (typeof MarketplaceRevenueShareSortBy)[keyof typeof MarketplaceRevenueShareSortBy];

/**
 * @public
 * @enum
 */
export const EntityType = {
  OFFER: "OFFER",
  OPPORTUNITY: "OPPORTUNITY",
} as const;
/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * @enum
 */
export const RevenueAttributionAllocationAction = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type RevenueAttributionAllocationAction =
  (typeof RevenueAttributionAllocationAction)[keyof typeof RevenueAttributionAllocationAction];

/**
 * @public
 * @enum
 */
export const RevenueAttributionAllocationErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  ALLOCATION_CAP_EXCEEDED: "ALLOCATION_CAP_EXCEEDED",
  CONCURRENT_MODIFICATION: "CONCURRENT_MODIFICATION",
  IMMUTABLE_ALLOCATION: "IMMUTABLE_ALLOCATION",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_VALUE: "INVALID_VALUE",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type RevenueAttributionAllocationErrorCode =
  (typeof RevenueAttributionAllocationErrorCode)[keyof typeof RevenueAttributionAllocationErrorCode];

/**
 * @public
 * @enum
 */
export const RevenueAttributionAllocationTaskStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type RevenueAttributionAllocationTaskStatus =
  (typeof RevenueAttributionAllocationTaskStatus)[keyof typeof RevenueAttributionAllocationTaskStatus];

/**
 * @public
 * @enum
 */
export const RevenueAttributionAllocationSortField = {
  EFFECTIVE_FROM: "EffectiveFrom",
} as const;
/**
 * @public
 */
export type RevenueAttributionAllocationSortField =
  (typeof RevenueAttributionAllocationSortField)[keyof typeof RevenueAttributionAllocationSortField];
