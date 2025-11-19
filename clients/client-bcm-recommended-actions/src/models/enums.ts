// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const FilterName = {
  FEATURE: "FEATURE",
  SEVERITY: "SEVERITY",
  TYPE: "TYPE",
} as const;
/**
 * @public
 */
export type FilterName = (typeof FilterName)[keyof typeof FilterName];

/**
 * @public
 * @enum
 */
export const MatchOption = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;
/**
 * @public
 */
export type MatchOption = (typeof MatchOption)[keyof typeof MatchOption];

/**
 * @public
 * @enum
 */
export const ActionType = {
  ADD_ALTERNATE_BILLING_CONTACT: "ADD_ALTERNATE_BILLING_CONTACT",
  CREATE_ANOMALY_MONITOR: "CREATE_ANOMALY_MONITOR",
  CREATE_BUDGET: "CREATE_BUDGET",
  ENABLE_COST_OPTIMIZATION_HUB: "ENABLE_COST_OPTIMIZATION_HUB",
  MIGRATE_TO_GRANULAR_PERMISSIONS: "MIGRATE_TO_GRANULAR_PERMISSIONS",
  PAYMENTS_DUE: "PAYMENTS_DUE",
  PAYMENTS_PAST_DUE: "PAYMENTS_PAST_DUE",
  REVIEW_ANOMALIES: "REVIEW_ANOMALIES",
  REVIEW_BUDGETS_EXCEEDED: "REVIEW_BUDGETS_EXCEEDED",
  REVIEW_BUDGET_ALERTS: "REVIEW_BUDGET_ALERTS",
  REVIEW_EXPIRING_RI: "REVIEW_EXPIRING_RI",
  REVIEW_EXPIRING_SP: "REVIEW_EXPIRING_SP",
  REVIEW_FREETIER_USAGE_ALERTS: "REVIEW_FREETIER_USAGE_ALERTS",
  REVIEW_SAVINGS_OPPORTUNITY_RECOMMENDATIONS: "REVIEW_SAVINGS_OPPORTUNITY_RECOMMENDATIONS",
  UPDATE_EXPIRED_PAYMENT_METHOD: "UPDATE_EXPIRED_PAYMENT_METHOD",
  UPDATE_INVALID_PAYMENT_METHOD: "UPDATE_INVALID_PAYMENT_METHOD",
  UPDATE_TAX_EXEMPTION_CERTIFICATE: "UPDATE_TAX_EXEMPTION_CERTIFICATE",
  UPDATE_TAX_REGISTRATION_NUMBER: "UPDATE_TAX_REGISTRATION_NUMBER",
} as const;
/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * @enum
 */
export const Feature = {
  ACCOUNT: "ACCOUNT",
  BUDGETS: "BUDGETS",
  COST_ANOMALY_DETECTION: "COST_ANOMALY_DETECTION",
  COST_OPTIMIZATION_HUB: "COST_OPTIMIZATION_HUB",
  FREE_TIER: "FREE_TIER",
  IAM: "IAM",
  PAYMENTS: "PAYMENTS",
  RESERVATIONS: "RESERVATIONS",
  SAVINGS_PLANS: "SAVINGS_PLANS",
  TAX_SETTINGS: "TAX_SETTINGS",
} as const;
/**
 * @public
 */
export type Feature = (typeof Feature)[keyof typeof Feature];

/**
 * @public
 * @enum
 */
export const Severity = {
  CRITICAL: "CRITICAL",
  INFO: "INFO",
  WARNING: "WARNING",
} as const;
/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

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
