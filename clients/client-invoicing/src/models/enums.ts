// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  ACCOUNT_MEMBERSHIP_ERROR: "accountMembershipError",
  CANNOT_PARSE: "cannotParse",
  DUPLICATE_INVOICE_UNIT: "duplicateInvoiceUnit",
  EXPIRED_NEXT_TOKEN: "expiredNextToken",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  INVALID_INPUT: "invalidInput",
  INVALID_NEXT_TOKEN: "invalidNextToken",
  MAX_ACCOUNTS_EXCEEDED: "maxAccountsExceeded",
  MAX_INVOICE_UNITS_EXCEEDED: "maxInvoiceUnitsExceeded",
  MUTUAL_EXCLUSION_ERROR: "mutualExclusionError",
  NON_MEMBERS_PRESENT: "nonMemberPresent",
  OTHER: "other",
  TAX_SETTINGS_ERROR: "taxSettingsError",
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
export const InvoiceType = {
  CREDIT_MEMO: "CREDIT_MEMO",
  INVOICE: "INVOICE",
} as const;
/**
 * @public
 */
export type InvoiceType = (typeof InvoiceType)[keyof typeof InvoiceType];

/**
 * @public
 * @enum
 */
export const ListInvoiceSummariesResourceType = {
  ACCOUNT_ID: "ACCOUNT_ID",
  INVOICE_ID: "INVOICE_ID",
} as const;
/**
 * @public
 */
export type ListInvoiceSummariesResourceType =
  (typeof ListInvoiceSummariesResourceType)[keyof typeof ListInvoiceSummariesResourceType];
