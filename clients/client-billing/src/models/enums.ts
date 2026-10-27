// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ApplicationType = {
  AFTER_DISCOUNTS: "AFTER_DISCOUNTS",
  BEFORE_CROSS_SERVICE_DISCOUNTS: "BEFORE_CROSS_SERVICE_DISCOUNTS",
} as const;
/**
 * @public
 */
export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
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
export const AssociationStatus = {
  ASSOCIATED: "ASSOCIATED",
  NOT_ASSOCIATED: "NOT_ASSOCIATED",
} as const;
/**
 * @public
 */
export type AssociationStatus = (typeof AssociationStatus)[keyof typeof AssociationStatus];

/**
 * @public
 * @enum
 */
export const Dimension = {
  LINKED_ACCOUNT: "LINKED_ACCOUNT",
} as const;
/**
 * @public
 */
export type Dimension = (typeof Dimension)[keyof typeof Dimension];

/**
 * @public
 * @enum
 */
export const BillingFeature = {
  BILLING_ALERTS: "BILLING_ALERTS",
  CREDIT_LEVEL_SHARING: "CREDIT_LEVEL_SHARING",
  CREDIT_PREFERENCE_OPTIONS: "CREDIT_PREFERENCE_OPTIONS",
  CREDIT_SHARING: "CREDIT_SHARING",
  CREDIT_SHARING_HISTORY: "CREDIT_SHARING_HISTORY",
  RI_SHARING: "RI_SHARING",
  RI_SHARING_HISTORY: "RI_SHARING_HISTORY",
} as const;
/**
 * @public
 */
export type BillingFeature = (typeof BillingFeature)[keyof typeof BillingFeature];

/**
 * @public
 * @enum
 */
export const BillingFeatureFilterName = {
  PREFERENCE_KEY: "PREFERENCE_KEY",
} as const;
/**
 * @public
 */
export type BillingFeatureFilterName = (typeof BillingFeatureFilterName)[keyof typeof BillingFeatureFilterName];

/**
 * @public
 * @enum
 */
export const PreferenceValue = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PreferenceValue = (typeof PreferenceValue)[keyof typeof PreferenceValue];

/**
 * @public
 * @enum
 */
export const BillingViewType = {
  BILLING_GROUP: "BILLING_GROUP",
  BILLING_TRANSFER: "BILLING_TRANSFER",
  BILLING_TRANSFER_SHOWBACK: "BILLING_TRANSFER_SHOWBACK",
  CUSTOM: "CUSTOM",
  PRIMARY: "PRIMARY",
} as const;
/**
 * @public
 */
export type BillingViewType = (typeof BillingViewType)[keyof typeof BillingViewType];

/**
 * @public
 * @enum
 */
export const BillingViewStatus = {
  CREATING: "CREATING",
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type BillingViewStatus = (typeof BillingViewStatus)[keyof typeof BillingViewStatus];

/**
 * @public
 * @enum
 */
export const BillingViewStatusReason = {
  AGGREGATE_SOURCE: "AGGREGATE_SOURCE",
  CYCLIC_DEPENDENCY: "CYCLIC_DEPENDENCY",
  SOURCE_VIEW_ACCESS_DENIED: "SOURCE_VIEW_ACCESS_DENIED",
  SOURCE_VIEW_DEPTH_EXCEEDED: "SOURCE_VIEW_DEPTH_EXCEEDED",
  SOURCE_VIEW_NOT_FOUND: "SOURCE_VIEW_NOT_FOUND",
  SOURCE_VIEW_UNHEALTHY: "SOURCE_VIEW_UNHEALTHY",
  SOURCE_VIEW_UPDATING: "SOURCE_VIEW_UPDATING",
  VIEW_OWNER_NOT_MANAGEMENT_ACCOUNT: "VIEW_OWNER_NOT_MANAGEMENT_ACCOUNT",
} as const;
/**
 * @public
 */
export type BillingViewStatusReason = (typeof BillingViewStatusReason)[keyof typeof BillingViewStatusReason];

/**
 * @public
 * @enum
 */
export const ContractRestriction = {
  ATTESTATION_SELF_SERVICE_BLOCKED: "ATTESTATION_SELF_SERVICE_BLOCKED",
} as const;
/**
 * @public
 */
export type ContractRestriction = (typeof ContractRestriction)[keyof typeof ContractRestriction];

/**
 * @public
 * @enum
 */
export const CreditSharingType = {
  COST_CATEGORY_RULE: "COST_CATEGORY_RULE",
  CUSTOM: "CUSTOM",
  DEFAULT: "DEFAULT",
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type CreditSharingType = (typeof CreditSharingType)[keyof typeof CreditSharingType];

/**
 * @public
 * @enum
 */
export const CreditStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type CreditStatus = (typeof CreditStatus)[keyof typeof CreditStatus];

/**
 * @public
 * @enum
 */
export const SearchOption = {
  STARTS_WITH: "STARTS_WITH",
} as const;
/**
 * @public
 */
export type SearchOption = (typeof SearchOption)[keyof typeof SearchOption];

/**
 * @public
 * @enum
 */
export const BillingDomain = {
  BILLABLE: "BILLABLE",
  PRO_FORMA: "PRO_FORMA",
} as const;
/**
 * @public
 */
export type BillingDomain = (typeof BillingDomain)[keyof typeof BillingDomain];

/**
 * @public
 * @enum
 */
export const ContractType = {
  CROSS_SERVICE: "Cross-Service",
  OTHER: "Other",
  SERVICE_SPECIFIC: "Service-Specific",
} as const;
/**
 * @public
 */
export type ContractType = (typeof ContractType)[keyof typeof ContractType];

/**
 * @public
 * @enum
 */
export const InvestmentAttestationStatus = {
  CANCELLED: "CANCELLED",
  DISBURSED: "DISBURSED",
  PENDING_CANCELLATION: "PENDING_CANCELLATION",
  PENDING_C_LEVEL_APPROVAL: "PENDING_C_LEVEL_APPROVAL",
  PENDING_REVIEW: "PENDING_REVIEW",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type InvestmentAttestationStatus =
  (typeof InvestmentAttestationStatus)[keyof typeof InvestmentAttestationStatus];

/**
 * @public
 * @enum
 */
export const MultiplierType = {
  CURRENCY_AMOUNT: "CURRENCY_AMOUNT",
  PERCENTAGE: "PERCENTAGE",
} as const;
/**
 * @public
 */
export type MultiplierType = (typeof MultiplierType)[keyof typeof MultiplierType];

/**
 * @public
 * @enum
 */
export const InvestmentType = {
  MILESTONE_BASED: "MILESTONE_BASED",
  OUTCOME_BASED: "OUTCOME_BASED",
} as const;
/**
 * @public
 */
export type InvestmentType = (typeof InvestmentType)[keyof typeof InvestmentType];
