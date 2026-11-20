// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessDeniedExceptionReason = {
  INVALID_ACCOUNT_STATE: "INVALID_ACCOUNT_STATE",
  NOT_AUTHORIZED: "NOT_AUTHORIZED",
  OTHER: "OTHER",
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
export const BatchErrorCode = {
  INTERNAL_ERROR: "INTERNAL_ERROR",
  NOT_FOUND: "NOT_FOUND",
} as const;
/**
 * @public
 */
export type BatchErrorCode = (typeof BatchErrorCode)[keyof typeof BatchErrorCode];

/**
 * @public
 * @enum
 */
export const LineOfBusiness = {
  AWS_CLOUD_SERVICES: "AWS_CLOUD_SERVICES",
  AWS_MARKETPLACE: "AWS_MARKETPLACE",
  PROSERVE_MARKETING_AND_TRAINING: "PROSERVE_MARKETING_AND_TRAINING",
} as const;
/**
 * @public
 */
export type LineOfBusiness = (typeof LineOfBusiness)[keyof typeof LineOfBusiness];

/**
 * @public
 * @enum
 */
export const DueStatus = {
  DUE: "DUE",
  PAST_DUE: "PAST_DUE",
} as const;
/**
 * @public
 */
export type DueStatus = (typeof DueStatus)[keyof typeof DueStatus];

/**
 * @public
 * @enum
 */
export const InvoiceFrequency = {
  ONE_TIME: "ONE_TIME",
  RECURRING: "RECURRING",
} as const;
/**
 * @public
 */
export type InvoiceFrequency = (typeof InvoiceFrequency)[keyof typeof InvoiceFrequency];

/**
 * @public
 * @enum
 */
export const SettlementStatus = {
  CLOSED: "CLOSED",
  OPEN: "OPEN",
} as const;
/**
 * @public
 */
export type SettlementStatus = (typeof SettlementStatus)[keyof typeof SettlementStatus];

/**
 * @public
 * @enum
 */
export const FinancialRecordStatus = {
  CANCELED: "CANCELED",
  OUTSTANDING: "OUTSTANDING",
  PROCESSING: "PROCESSING",
  SETTLED: "SETTLED",
} as const;
/**
 * @public
 */
export type FinancialRecordStatus = (typeof FinancialRecordStatus)[keyof typeof FinancialRecordStatus];

/**
 * @public
 * @enum
 */
export const FinancialRecordType = {
  CREDIT_MEMO: "CREDIT_MEMO",
  INVOICE: "INVOICE",
} as const;
/**
 * @public
 */
export type FinancialRecordType = (typeof FinancialRecordType)[keyof typeof FinancialRecordType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  INVALID_PAGINATION_TOKEN: "INVALID_PAGINATION_TOKEN",
  OTHER: "OTHER",
  UNSUPPORTED_ACTION: "UNSUPPORTED_ACTION",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const BalanceType = {
  INVOICES_DUE: "INVOICES_DUE",
  INVOICES_PAST_DUE: "INVOICES_PAST_DUE",
  OUTSTANDING_CREDIT_MEMOS: "OUTSTANDING_CREDIT_MEMOS",
} as const;
/**
 * @public
 */
export type BalanceType = (typeof BalanceType)[keyof typeof BalanceType];

/**
 * @public
 * @enum
 */
export const CardBrand = {
  AMEX: "AMEX",
  CHINA_UNIONPAY: "CHINA_UNIONPAY",
  DISCOVER: "DISCOVER",
  JCB: "JCB",
  MASTERCARD: "MASTERCARD",
  RUPAY: "RUPAY",
  VISA: "VISA",
} as const;
/**
 * @public
 */
export type CardBrand = (typeof CardBrand)[keyof typeof CardBrand];

/**
 * @public
 * @enum
 */
export const CardType = {
  CREDIT: "CREDIT",
  DEBIT: "DEBIT",
} as const;
/**
 * @public
 */
export type CardType = (typeof CardType)[keyof typeof CardType];

/**
 * @public
 * @enum
 */
export const BankAccountType = {
  CHECKING: "CHECKING",
  SAVINGS: "SAVINGS",
} as const;
/**
 * @public
 */
export type BankAccountType = (typeof BankAccountType)[keyof typeof BankAccountType];

/**
 * @public
 * @enum
 */
export const PaymentMethod = {
  CARD: "CARD",
  CN_BANK_REDIRECT: "CN_BANK_REDIRECT",
  IN_NET_BANKING: "IN_NET_BANKING",
  PAY_BY_INVOICE: "PAY_BY_INVOICE",
  PIX: "PIX",
  SEPA_BANK_ACCOUNT: "SEPA_BANK_ACCOUNT",
  UK_BACS_BANK_ACCOUNT: "UK_BACS_BANK_ACCOUNT",
  UPI: "UPI",
  US_ACH_BANK_ACCOUNT: "US_ACH_BANK_ACCOUNT",
} as const;
/**
 * @public
 */
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];

/**
 * @public
 * @enum
 */
export const PaymentInstrumentStatus = {
  ACTIVE: "ACTIVE",
  INVALID: "INVALID",
  PENDING_SETUP: "PENDING_SETUP",
  SETUP_IN_PROGRESS: "SETUP_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type PaymentInstrumentStatus = (typeof PaymentInstrumentStatus)[keyof typeof PaymentInstrumentStatus];

/**
 * @public
 * @enum
 */
export const FinancialRecordSortField = {
  ISSUED_AT: "ISSUED_AT",
} as const;
/**
 * @public
 */
export type FinancialRecordSortField = (typeof FinancialRecordSortField)[keyof typeof FinancialRecordSortField];

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
