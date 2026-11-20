// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const FeatureType = {
  FORMS: "FORMS",
  LAYOUT: "LAYOUT",
  QUERIES: "QUERIES",
  SIGNATURES: "SIGNATURES",
  TABLES: "TABLES",
} as const;
/**
 * @public
 */
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType];

/**
 * @public
 * @enum
 */
export const AdapterVersionStatus = {
  ACTIVE: "ACTIVE",
  AT_RISK: "AT_RISK",
  CREATION_ERROR: "CREATION_ERROR",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  DEPRECATED: "DEPRECATED",
} as const;
/**
 * @public
 */
export type AdapterVersionStatus = (typeof AdapterVersionStatus)[keyof typeof AdapterVersionStatus];

/**
 * @public
 * @enum
 */
export const ContentClassifier = {
  FREE_OF_ADULT_CONTENT: "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION: "FreeOfPersonallyIdentifiableInformation",
} as const;
/**
 * @public
 */
export type ContentClassifier = (typeof ContentClassifier)[keyof typeof ContentClassifier];

/**
 * @public
 * @enum
 */
export const BlockType = {
  CELL: "CELL",
  KEY_VALUE_SET: "KEY_VALUE_SET",
  LAYOUT_FIGURE: "LAYOUT_FIGURE",
  LAYOUT_FOOTER: "LAYOUT_FOOTER",
  LAYOUT_HEADER: "LAYOUT_HEADER",
  LAYOUT_KEY_VALUE: "LAYOUT_KEY_VALUE",
  LAYOUT_LIST: "LAYOUT_LIST",
  LAYOUT_PAGE_NUMBER: "LAYOUT_PAGE_NUMBER",
  LAYOUT_SECTION_HEADER: "LAYOUT_SECTION_HEADER",
  LAYOUT_TABLE: "LAYOUT_TABLE",
  LAYOUT_TEXT: "LAYOUT_TEXT",
  LAYOUT_TITLE: "LAYOUT_TITLE",
  LINE: "LINE",
  MERGED_CELL: "MERGED_CELL",
  PAGE: "PAGE",
  QUERY: "QUERY",
  QUERY_RESULT: "QUERY_RESULT",
  SELECTION_ELEMENT: "SELECTION_ELEMENT",
  SIGNATURE: "SIGNATURE",
  TABLE: "TABLE",
  TABLE_FOOTER: "TABLE_FOOTER",
  TABLE_TITLE: "TABLE_TITLE",
  TITLE: "TITLE",
  WORD: "WORD",
} as const;
/**
 * @public
 */
export type BlockType = (typeof BlockType)[keyof typeof BlockType];

/**
 * @public
 * @enum
 */
export const EntityType = {
  COLUMN_HEADER: "COLUMN_HEADER",
  KEY: "KEY",
  SEMI_STRUCTURED_TABLE: "SEMI_STRUCTURED_TABLE",
  STRUCTURED_TABLE: "STRUCTURED_TABLE",
  TABLE_FOOTER: "TABLE_FOOTER",
  TABLE_SECTION_TITLE: "TABLE_SECTION_TITLE",
  TABLE_SUMMARY: "TABLE_SUMMARY",
  TABLE_TITLE: "TABLE_TITLE",
  VALUE: "VALUE",
} as const;
/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * @enum
 */
export const RelationshipType = {
  ANSWER: "ANSWER",
  CHILD: "CHILD",
  COMPLEX_FEATURES: "COMPLEX_FEATURES",
  MERGED_CELL: "MERGED_CELL",
  TABLE: "TABLE",
  TABLE_FOOTER: "TABLE_FOOTER",
  TABLE_TITLE: "TABLE_TITLE",
  TITLE: "TITLE",
  VALUE: "VALUE",
} as const;
/**
 * @public
 */
export type RelationshipType = (typeof RelationshipType)[keyof typeof RelationshipType];

/**
 * @public
 * @enum
 */
export const SelectionStatus = {
  NOT_SELECTED: "NOT_SELECTED",
  SELECTED: "SELECTED",
} as const;
/**
 * @public
 */
export type SelectionStatus = (typeof SelectionStatus)[keyof typeof SelectionStatus];

/**
 * @public
 * @enum
 */
export const TextType = {
  HANDWRITING: "HANDWRITING",
  PRINTED: "PRINTED",
} as const;
/**
 * @public
 */
export type TextType = (typeof TextType)[keyof typeof TextType];

/**
 * @public
 * @enum
 */
export const ValueType = {
  DATE: "DATE",
} as const;
/**
 * @public
 */
export type ValueType = (typeof ValueType)[keyof typeof ValueType];

/**
 * @public
 * @enum
 */
export const AutoUpdate = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AutoUpdate = (typeof AutoUpdate)[keyof typeof AutoUpdate];

/**
 * @public
 * @enum
 */
export const ResourceOwner = {
  ACCOUNT: "ACCOUNT",
  SERVICE: "SERVICE",
} as const;
/**
 * @public
 */
export type ResourceOwner = (typeof ResourceOwner)[keyof typeof ResourceOwner];

/**
 * @public
 * @enum
 */
export const State = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 * @enum
 */
export const ExtractionGranularityType = {
  DOCUMENT: "DOCUMENT",
  ELEMENT: "ELEMENT",
  LINE: "LINE",
  PAGE: "PAGE",
  WORD: "WORD",
} as const;
/**
 * @public
 */
export type ExtractionGranularityType = (typeof ExtractionGranularityType)[keyof typeof ExtractionGranularityType];

/**
 * @public
 * @enum
 */
export const OutputTextFormatType = {
  CSV: "CSV",
  HTML: "HTML",
  MARKDOWN: "MARKDOWN",
  PLAIN_TEXT: "PLAIN_TEXT",
} as const;
/**
 * @public
 */
export type OutputTextFormatType = (typeof OutputTextFormatType)[keyof typeof OutputTextFormatType];

/**
 * @public
 * @enum
 */
export const SensitiveDataDetectionMode = {
  DETECTION: "DETECTION",
  DETECTION_AND_REDACTION: "DETECTION_AND_REDACTION",
  DISABLED: "DISABLED",
} as const;
/**
 * @public
 */
export type SensitiveDataDetectionMode = (typeof SensitiveDataDetectionMode)[keyof typeof SensitiveDataDetectionMode];

/**
 * @public
 * @enum
 */
export const PIIEntityType = {
  ADDRESS: "ADDRESS",
  AGE: "AGE",
  ALL: "ALL",
  AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
  AWS_SECRET_KEY: "AWS_SECRET_KEY",
  CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
  CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
  CREDIT_DEBIT_CARD_CVV: "CREDIT_DEBIT_CARD_CVV",
  CREDIT_DEBIT_CARD_EXPIRY: "CREDIT_DEBIT_CARD_EXPIRY",
  CREDIT_DEBIT_CARD_NUMBER: "CREDIT_DEBIT_CARD_NUMBER",
  DRIVER_ID: "DRIVER_ID",
  EMAIL: "EMAIL",
  INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
  IP_ADDRESS: "IP_ADDRESS",
  LICENSE_PLATE: "LICENSE_PLATE",
  MAC_ADDRESS: "MAC_ADDRESS",
  NAME: "NAME",
  PASSWORD: "PASSWORD",
  PHONE: "PHONE",
  PIN: "PIN",
  SWIFT_CODE: "SWIFT_CODE",
  UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
  UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
  UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
  URL: "URL",
  USERNAME: "USERNAME",
  US_BANK_ACCOUNT_NUMBER: "US_BANK_ACCOUNT_NUMBER",
  US_BANK_ROUTING_NUMBER: "US_BANK_ROUTING_NUMBER",
  US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
  US_PASSPORT_NUMBER: "US_PASSPORT_NUMBER",
  US_SOCIAL_SECURITY_NUMBER: "US_SOCIAL_SECURITY_NUMBER",
  VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER",
} as const;
/**
 * @public
 */
export type PIIEntityType = (typeof PIIEntityType)[keyof typeof PIIEntityType];

/**
 * @public
 * @enum
 */
export const PIIRedactionMaskMode = {
  ENTITY_TYPE: "ENTITY_TYPE",
  PII: "PII",
} as const;
/**
 * @public
 */
export type PIIRedactionMaskMode = (typeof PIIRedactionMaskMode)[keyof typeof PIIRedactionMaskMode];

/**
 * @public
 * @enum
 */
export const ProjectStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PARTIAL_SUCCESS: "PARTIAL_SUCCESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];
