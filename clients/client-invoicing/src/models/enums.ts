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
export const BuyerDomain = {
  NetworkID: "NetworkID",
} as const;
/**
 * @public
 */
export type BuyerDomain = (typeof BuyerDomain)[keyof typeof BuyerDomain];

/**
 * @public
 * @enum
 */
export const ConnectionTestingMethod = {
  PROD_ENV_DOLLAR_TEST: "PROD_ENV_DOLLAR_TEST",
  TEST_ENV_REPLAY_TEST: "TEST_ENV_REPLAY_TEST",
} as const;
/**
 * @public
 */
export type ConnectionTestingMethod = (typeof ConnectionTestingMethod)[keyof typeof ConnectionTestingMethod];

/**
 * @public
 * @enum
 */
export const EinvoiceDeliveryAttachmentType = {
  INVOICE_PDF: "INVOICE_PDF",
  RFP_PDF: "RFP_PDF",
} as const;
/**
 * @public
 */
export type EinvoiceDeliveryAttachmentType =
  (typeof EinvoiceDeliveryAttachmentType)[keyof typeof EinvoiceDeliveryAttachmentType];

/**
 * @public
 * @enum
 */
export const EinvoiceDeliveryDocumentType = {
  AWS_CLOUD_CREDIT_MEMO: "AWS_CLOUD_CREDIT_MEMO",
  AWS_CLOUD_INVOICE: "AWS_CLOUD_INVOICE",
  AWS_MARKETPLACE_CREDIT_MEMO: "AWS_MARKETPLACE_CREDIT_MEMO",
  AWS_MARKETPLACE_INVOICE: "AWS_MARKETPLACE_INVOICE",
  AWS_REQUEST_FOR_PAYMENT: "AWS_REQUEST_FOR_PAYMENT",
} as const;
/**
 * @public
 */
export type EinvoiceDeliveryDocumentType =
  (typeof EinvoiceDeliveryDocumentType)[keyof typeof EinvoiceDeliveryDocumentType];

/**
 * @public
 * @enum
 */
export const Protocol = {
  CXML: "CXML",
} as const;
/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const PurchaseOrderDataSourceType = {
  ASSOCIATED_PURCHASE_ORDER_REQUIRED: "ASSOCIATED_PURCHASE_ORDER_REQUIRED",
  PURCHASE_ORDER_NOT_REQUIRED: "PURCHASE_ORDER_NOT_REQUIRED",
} as const;
/**
 * @public
 */
export type PurchaseOrderDataSourceType =
  (typeof PurchaseOrderDataSourceType)[keyof typeof PurchaseOrderDataSourceType];

/**
 * @public
 * @enum
 */
export const ProcurementPortalName = {
  COUPA: "COUPA",
  SAP_BUSINESS_NETWORK: "SAP_BUSINESS_NETWORK",
} as const;
/**
 * @public
 */
export type ProcurementPortalName = (typeof ProcurementPortalName)[keyof typeof ProcurementPortalName];

/**
 * @public
 * @enum
 */
export const SupplierDomain = {
  NetworkID: "NetworkID",
} as const;
/**
 * @public
 */
export type SupplierDomain = (typeof SupplierDomain)[keyof typeof SupplierDomain];

/**
 * @public
 * @enum
 */
export const ProcurementPortalPreferenceStatus = {
  ACTIVE: "ACTIVE",
  PENDING_VERIFICATION: "PENDING_VERIFICATION",
  SUSPENDED: "SUSPENDED",
  TEST_FAILED: "TEST_FAILED",
  TEST_INITIALIZATION_FAILED: "TEST_INITIALIZATION_FAILED",
  TEST_INITIALIZED: "TEST_INITIALIZED",
} as const;
/**
 * @public
 */
export type ProcurementPortalPreferenceStatus =
  (typeof ProcurementPortalPreferenceStatus)[keyof typeof ProcurementPortalPreferenceStatus];

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
