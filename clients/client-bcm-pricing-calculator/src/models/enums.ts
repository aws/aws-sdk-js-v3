// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const CurrencyCode = {
  USD: "USD",
} as const;
/**
 * @public
 */
export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode];

/**
 * @public
 * @enum
 */
export const PurchaseAgreementType = {
  RESERVED_INSTANCE: "RESERVED_INSTANCE",
  SAVINGS_PLANS: "SAVINGS_PLANS",
} as const;
/**
 * @public
 */
export type PurchaseAgreementType = (typeof PurchaseAgreementType)[keyof typeof PurchaseAgreementType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  DISALLOWED_RATE: "disallowedRate",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  INVALID_REQUEST_FROM_MEMBER: "invalidRequestFromMember",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const MatchOption = {
  CONTAINS: "CONTAINS",
  EQUALS: "EQUALS",
  STARTS_WITH: "STARTS_WITH",
} as const;
/**
 * @public
 */
export type MatchOption = (typeof MatchOption)[keyof typeof MatchOption];

/**
 * @public
 * @enum
 */
export const ListUsageFilterName = {
  HISTORICAL_LOCATION: "HISTORICAL_LOCATION",
  HISTORICAL_OPERATION: "HISTORICAL_OPERATION",
  HISTORICAL_SERVICE_CODE: "HISTORICAL_SERVICE_CODE",
  HISTORICAL_USAGE_ACCOUNT_ID: "HISTORICAL_USAGE_ACCOUNT_ID",
  HISTORICAL_USAGE_TYPE: "HISTORICAL_USAGE_TYPE",
  LOCATION: "LOCATION",
  OPERATION: "OPERATION",
  SERVICE_CODE: "SERVICE_CODE",
  USAGE_ACCOUNT_ID: "USAGE_ACCOUNT_ID",
  USAGE_GROUP: "USAGE_GROUP",
  USAGE_TYPE: "USAGE_TYPE",
} as const;
/**
 * @public
 */
export type ListUsageFilterName = (typeof ListUsageFilterName)[keyof typeof ListUsageFilterName];

/**
 * @public
 * @enum
 */
export const ListBillEstimateLineItemsFilterName = {
  LINE_ITEM_TYPE: "LINE_ITEM_TYPE",
  LOCATION: "LOCATION",
  OPERATION: "OPERATION",
  SERVICE_CODE: "SERVICE_CODE",
  USAGE_ACCOUNT_ID: "USAGE_ACCOUNT_ID",
  USAGE_TYPE: "USAGE_TYPE",
} as const;
/**
 * @public
 */
export type ListBillEstimateLineItemsFilterName =
  (typeof ListBillEstimateLineItemsFilterName)[keyof typeof ListBillEstimateLineItemsFilterName];

/**
 * @public
 * @enum
 */
export const BillEstimateStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type BillEstimateStatus = (typeof BillEstimateStatus)[keyof typeof BillEstimateStatus];

/**
 * @public
 * @enum
 */
export const ListBillEstimatesFilterName = {
  NAME: "NAME",
  STATUS: "STATUS",
} as const;
/**
 * @public
 */
export type ListBillEstimatesFilterName =
  (typeof ListBillEstimatesFilterName)[keyof typeof ListBillEstimatesFilterName];

/**
 * @public
 * @enum
 */
export const BatchCreateBillScenarioCommitmentModificationErrorCode = {
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  INVALID_ACCOUNT: "INVALID_ACCOUNT",
} as const;
/**
 * @public
 */
export type BatchCreateBillScenarioCommitmentModificationErrorCode =
  (typeof BatchCreateBillScenarioCommitmentModificationErrorCode)[keyof typeof BatchCreateBillScenarioCommitmentModificationErrorCode];

/**
 * @public
 * @enum
 */
export const BatchDeleteBillScenarioCommitmentModificationErrorCode = {
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
} as const;
/**
 * @public
 */
export type BatchDeleteBillScenarioCommitmentModificationErrorCode =
  (typeof BatchDeleteBillScenarioCommitmentModificationErrorCode)[keyof typeof BatchDeleteBillScenarioCommitmentModificationErrorCode];

/**
 * @public
 * @enum
 */
export const BatchUpdateBillScenarioCommitmentModificationErrorCode = {
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;
/**
 * @public
 */
export type BatchUpdateBillScenarioCommitmentModificationErrorCode =
  (typeof BatchUpdateBillScenarioCommitmentModificationErrorCode)[keyof typeof BatchUpdateBillScenarioCommitmentModificationErrorCode];

/**
 * @public
 * @enum
 */
export const BillScenarioStatus = {
  FAILED: "FAILED",
  LOCKED: "LOCKED",
  READY: "READY",
  STALE: "STALE",
} as const;
/**
 * @public
 */
export type BillScenarioStatus = (typeof BillScenarioStatus)[keyof typeof BillScenarioStatus];

/**
 * @public
 * @enum
 */
export const BatchCreateBillScenarioUsageModificationErrorCode = {
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;
/**
 * @public
 */
export type BatchCreateBillScenarioUsageModificationErrorCode =
  (typeof BatchCreateBillScenarioUsageModificationErrorCode)[keyof typeof BatchCreateBillScenarioUsageModificationErrorCode];

/**
 * @public
 * @enum
 */
export const BatchDeleteBillScenarioUsageModificationErrorCode = {
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
} as const;
/**
 * @public
 */
export type BatchDeleteBillScenarioUsageModificationErrorCode =
  (typeof BatchDeleteBillScenarioUsageModificationErrorCode)[keyof typeof BatchDeleteBillScenarioUsageModificationErrorCode];

/**
 * @public
 * @enum
 */
export const BatchUpdateBillScenarioUsageModificationErrorCode = {
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;
/**
 * @public
 */
export type BatchUpdateBillScenarioUsageModificationErrorCode =
  (typeof BatchUpdateBillScenarioUsageModificationErrorCode)[keyof typeof BatchUpdateBillScenarioUsageModificationErrorCode];

/**
 * @public
 * @enum
 */
export const ListBillScenariosFilterName = {
  NAME: "NAME",
  STATUS: "STATUS",
} as const;
/**
 * @public
 */
export type ListBillScenariosFilterName =
  (typeof ListBillScenariosFilterName)[keyof typeof ListBillScenariosFilterName];

/**
 * @public
 * @enum
 */
export const RateType = {
  AFTER_DISCOUNTS: "AFTER_DISCOUNTS",
  AFTER_DISCOUNTS_AND_COMMITMENTS: "AFTER_DISCOUNTS_AND_COMMITMENTS",
  BEFORE_DISCOUNTS: "BEFORE_DISCOUNTS",
} as const;
/**
 * @public
 */
export type RateType = (typeof RateType)[keyof typeof RateType];

/**
 * @public
 * @enum
 */
export const WorkloadEstimateRateType = {
  AFTER_DISCOUNTS: "AFTER_DISCOUNTS",
  AFTER_DISCOUNTS_AND_COMMITMENTS: "AFTER_DISCOUNTS_AND_COMMITMENTS",
  BEFORE_DISCOUNTS: "BEFORE_DISCOUNTS",
} as const;
/**
 * @public
 */
export type WorkloadEstimateRateType = (typeof WorkloadEstimateRateType)[keyof typeof WorkloadEstimateRateType];

/**
 * @public
 * @enum
 */
export const WorkloadEstimateStatus = {
  ACTION_NEEDED: "ACTION_NEEDED",
  INVALID: "INVALID",
  UPDATING: "UPDATING",
  VALID: "VALID",
} as const;
/**
 * @public
 */
export type WorkloadEstimateStatus = (typeof WorkloadEstimateStatus)[keyof typeof WorkloadEstimateStatus];

/**
 * @public
 * @enum
 */
export const ListWorkloadEstimatesFilterName = {
  NAME: "NAME",
  STATUS: "STATUS",
} as const;
/**
 * @public
 */
export type ListWorkloadEstimatesFilterName =
  (typeof ListWorkloadEstimatesFilterName)[keyof typeof ListWorkloadEstimatesFilterName];

/**
 * @public
 * @enum
 */
export const BatchCreateWorkloadEstimateUsageCode = {
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;
/**
 * @public
 */
export type BatchCreateWorkloadEstimateUsageCode =
  (typeof BatchCreateWorkloadEstimateUsageCode)[keyof typeof BatchCreateWorkloadEstimateUsageCode];

/**
 * @public
 * @enum
 */
export const WorkloadEstimateCostStatus = {
  INVALID: "INVALID",
  STALE: "STALE",
  VALID: "VALID",
} as const;
/**
 * @public
 */
export type WorkloadEstimateCostStatus = (typeof WorkloadEstimateCostStatus)[keyof typeof WorkloadEstimateCostStatus];

/**
 * @public
 * @enum
 */
export const WorkloadEstimateUpdateUsageErrorCode = {
  BAD_REQUEST: "BAD_REQUEST",
  CONFLICT: "CONFLICT",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;
/**
 * @public
 */
export type WorkloadEstimateUpdateUsageErrorCode =
  (typeof WorkloadEstimateUpdateUsageErrorCode)[keyof typeof WorkloadEstimateUpdateUsageErrorCode];
