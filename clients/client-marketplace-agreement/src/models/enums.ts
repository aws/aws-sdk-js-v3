// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AgreementStatus = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
  CANCELLED: "CANCELLED",
  EXPIRED: "EXPIRED",
  RENEWED: "RENEWED",
  REPLACED: "REPLACED",
  ROLLED_BACK: "ROLLED_BACK",
  SUPERSEDED: "SUPERSEDED",
  TERMINATED: "TERMINATED",
} as const;
/**
 * @public
 */
export type AgreementStatus = (typeof AgreementStatus)[keyof typeof AgreementStatus];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AGREEMENT: "Agreement",
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
  INVALID_AGREEMENT_ID: "INVALID_AGREEMENT_ID",
  INVALID_CATALOG: "INVALID_CATALOG",
  INVALID_FILTER_NAME: "INVALID_FILTER_NAME",
  INVALID_FILTER_VALUES: "INVALID_FILTER_VALUES",
  INVALID_MAX_RESULTS: "INVALID_MAX_RESULTS",
  INVALID_NEXT_TOKEN: "INVALID_NEXT_TOKEN",
  INVALID_SORT_BY: "INVALID_SORT_BY",
  INVALID_SORT_ORDER: "INVALID_SORT_ORDER",
  MISSING_AGREEMENT_ID: "MISSING_AGREEMENT_ID",
  OTHER: "OTHER",
  UNSUPPORTED_FILTERS: "UNSUPPORTED_FILTERS",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

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
