// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BlueprintStage = {
  DEVELOPMENT: "DEVELOPMENT",
  LIVE: "LIVE",
} as const;
/**
 * @public
 */
export type BlueprintStage = (typeof BlueprintStage)[keyof typeof BlueprintStage];

/**
 * @public
 * @enum
 */
export const Type = {
  AUDIO: "AUDIO",
  DOCUMENT: "DOCUMENT",
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];

/**
 * @public
 * @enum
 */
export const BlueprintStageFilter = {
  ALL: "ALL",
  DEVELOPMENT: "DEVELOPMENT",
  LIVE: "LIVE",
} as const;
/**
 * @public
 */
export type BlueprintStageFilter = (typeof BlueprintStageFilter)[keyof typeof BlueprintStageFilter];

/**
 * @public
 * @enum
 */
export const DataAutomationProjectStage = {
  DEVELOPMENT: "DEVELOPMENT",
  LIVE: "LIVE",
} as const;
/**
 * @public
 */
export type DataAutomationProjectStage = (typeof DataAutomationProjectStage)[keyof typeof DataAutomationProjectStage];

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
export const AudioGenerativeOutputLanguage = {
  DEFAULT: "DEFAULT",
  EN: "EN",
} as const;
/**
 * @public
 */
export type AudioGenerativeOutputLanguage =
  (typeof AudioGenerativeOutputLanguage)[keyof typeof AudioGenerativeOutputLanguage];

/**
 * @public
 * @enum
 */
export const Language = {
  CN: "CN",
  DE: "DE",
  EN: "EN",
  ES: "ES",
  FR: "FR",
  HK: "HK",
  IT: "IT",
  JA: "JA",
  KO: "KO",
  PT: "PT",
  TW: "TW",
} as const;
/**
 * @public
 */
export type Language = (typeof Language)[keyof typeof Language];

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
export const SensitiveDataDetectionMode = {
  /**
   * Only detect sensitive data without redaction
   */
  DETECTION: "DETECTION",
  /**
   * Detect and redact sensitive data
   */
  DETECTION_AND_REDACTION: "DETECTION_AND_REDACTION",
} as const;
/**
 * @public
 */
export type SensitiveDataDetectionMode = (typeof SensitiveDataDetectionMode)[keyof typeof SensitiveDataDetectionMode];

/**
 * @public
 * @enum
 */
export const SensitiveDataDetectionScopeType = {
  /**
   * Custom PII detection
   */
  CUSTOM: "CUSTOM",
  /**
   * Standard PII detection
   */
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type SensitiveDataDetectionScopeType =
  (typeof SensitiveDataDetectionScopeType)[keyof typeof SensitiveDataDetectionScopeType];

/**
 * @public
 * @enum
 */
export const PIIEntityType = {
  /**
   * A physical address, such as '100 Main Street, Anytown, USA' or 'Suite #12, Building 123'
   */
  ADDRESS: "ADDRESS",
  /**
   * An individual's age, including the quantity and unit of time
   */
  AGE: "AGE",
  /**
   * All supported PII entity types
   */
  ALL: "ALL",
  /**
   * A unique identifier associated with AWS secret access key
   */
  AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
  /**
   * A unique identifier associated with AWS access key for signing programmatic requests
   */
  AWS_SECRET_KEY: "AWS_SECRET_KEY",
  /**
   * A Canadian Health Service Number - 10-digit unique identifier for healthcare benefits
   */
  CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
  /**
   * A Canadian Social Insurance Number (SIN) - nine-digit unique identifier
   */
  CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
  /**
   * A three-digit card verification code (CVV) for VISA, MasterCard, and Discover cards, or four-digit for American Express
   */
  CREDIT_DEBIT_CARD_CVV: "CREDIT_DEBIT_CARD_CVV",
  /**
   * The expiration date for a credit or debit card
   */
  CREDIT_DEBIT_CARD_EXPIRY: "CREDIT_DEBIT_CARD_EXPIRY",
  /**
   * The number for a credit or debit card
   */
  CREDIT_DEBIT_CARD_NUMBER: "CREDIT_DEBIT_CARD_NUMBER",
  /**
   * The number assigned to a driver's license
   */
  DRIVER_ID: "DRIVER_ID",
  /**
   * An email address, such as marymajor@email.com
   */
  EMAIL: "EMAIL",
  /**
   * An International Bank Account Number with specific formats for each country
   */
  INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
  /**
   * An IPv4 address, such as 198.51.100.0
   */
  IP_ADDRESS: "IP_ADDRESS",
  /**
   * A license plate for a vehicle issued by the state or country where the vehicle is registered
   */
  LICENSE_PLATE: "LICENSE_PLATE",
  /**
   * A media access control (MAC) address - unique identifier for network interface controller
   */
  MAC_ADDRESS: "MAC_ADDRESS",
  /**
   * An individual's name. Does not include titles such as Dr., Mr., Mrs., or Miss
   */
  NAME: "NAME",
  /**
   * An alphanumeric string that is used as a password
   */
  PASSWORD: "PASSWORD",
  /**
   * A phone number. Also includes fax and pager numbers
   */
  PHONE: "PHONE",
  /**
   * A four-digit personal identification number (PIN)
   */
  PIN: "PIN",
  /**
   * A SWIFT code - standard format of Bank Identifier Code (BIC)
   */
  SWIFT_CODE: "SWIFT_CODE",
  /**
   * A UK National Health Service Number - 10-17 digit number
   */
  UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
  /**
   * A UK National Insurance Number (NINO) for accessing National Insurance benefits
   */
  UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
  /**
   * A UK Unique Taxpayer Reference (UTR) - 10-digit number identifying taxpayer or business
   */
  UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
  /**
   * A web address, such as www.example.com
   */
  URL: "URL",
  /**
   * A user name that identifies an account, such as a login name, screen name, nick name, or handle
   */
  USERNAME: "USERNAME",
  /**
   * A US bank account number, typically 10 to 12 digits long
   */
  US_BANK_ACCOUNT_NUMBER: "US_BANK_ACCOUNT_NUMBER",
  /**
   * A US bank account routing number, typically nine digits long
   */
  US_BANK_ROUTING_NUMBER: "US_BANK_ROUTING_NUMBER",
  /**
   * A US Individual Taxpayer Identification Number (ITIN)
   */
  US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
  /**
   * A US passport number, ranging from six to nine alphanumeric characters
   */
  US_PASSPORT_NUMBER: "US_PASSPORT_NUMBER",
  /**
   * A US Social Security Number (SSN) - nine-digit number for US citizens and residents
   */
  US_SOCIAL_SECURITY_NUMBER: "US_SOCIAL_SECURITY_NUMBER",
  /**
   * A Vehicle Identification Number (VIN) that uniquely identifies a vehicle
   */
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
  /**
   * Replace with specific entity type marker, e.g. [NAME]/[SSN] etc.
   */
  ENTITY_TYPE: "ENTITY_TYPE",
  /**
   * Replace with generic PII marker [PII]
   */
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
export const DesiredModality = {
  AUDIO: "AUDIO",
  DOCUMENT: "DOCUMENT",
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
} as const;
/**
 * @public
 */
export type DesiredModality = (typeof DesiredModality)[keyof typeof DesiredModality];

/**
 * @public
 * @enum
 */
export const DataAutomationProjectType = {
  ASYNC: "ASYNC",
  SYNC: "SYNC",
} as const;
/**
 * @public
 */
export type DataAutomationProjectType = (typeof DataAutomationProjectType)[keyof typeof DataAutomationProjectType];

/**
 * @public
 * @enum
 */
export const AudioExtractionCategoryType = {
  AUDIO_CONTENT_MODERATION: "AUDIO_CONTENT_MODERATION",
  TOPIC_CONTENT_MODERATION: "TOPIC_CONTENT_MODERATION",
  TRANSCRIPT: "TRANSCRIPT",
} as const;
/**
 * @public
 */
export type AudioExtractionCategoryType =
  (typeof AudioExtractionCategoryType)[keyof typeof AudioExtractionCategoryType];

/**
 * @public
 * @enum
 */
export const AudioStandardGenerativeFieldType = {
  AUDIO_SUMMARY: "AUDIO_SUMMARY",
  IAB: "IAB",
  TOPIC_SUMMARY: "TOPIC_SUMMARY",
} as const;
/**
 * @public
 */
export type AudioStandardGenerativeFieldType =
  (typeof AudioStandardGenerativeFieldType)[keyof typeof AudioStandardGenerativeFieldType];

/**
 * @public
 * @enum
 */
export const DocumentExtractionGranularityType = {
  DOCUMENT: "DOCUMENT",
  ELEMENT: "ELEMENT",
  LINE: "LINE",
  PAGE: "PAGE",
  WORD: "WORD",
} as const;
/**
 * @public
 */
export type DocumentExtractionGranularityType =
  (typeof DocumentExtractionGranularityType)[keyof typeof DocumentExtractionGranularityType];

/**
 * @public
 * @enum
 */
export const DocumentOutputTextFormatType = {
  CSV: "CSV",
  HTML: "HTML",
  MARKDOWN: "MARKDOWN",
  PLAIN_TEXT: "PLAIN_TEXT",
} as const;
/**
 * @public
 */
export type DocumentOutputTextFormatType =
  (typeof DocumentOutputTextFormatType)[keyof typeof DocumentOutputTextFormatType];

/**
 * @public
 * @enum
 */
export const ImageExtractionCategoryType = {
  CONTENT_MODERATION: "CONTENT_MODERATION",
  LOGOS: "LOGOS",
  TEXT_DETECTION: "TEXT_DETECTION",
} as const;
/**
 * @public
 */
export type ImageExtractionCategoryType =
  (typeof ImageExtractionCategoryType)[keyof typeof ImageExtractionCategoryType];

/**
 * @public
 * @enum
 */
export const ImageStandardGenerativeFieldType = {
  IAB: "IAB",
  IMAGE_SUMMARY: "IMAGE_SUMMARY",
} as const;
/**
 * @public
 */
export type ImageStandardGenerativeFieldType =
  (typeof ImageStandardGenerativeFieldType)[keyof typeof ImageStandardGenerativeFieldType];

/**
 * @public
 * @enum
 */
export const VideoExtractionCategoryType = {
  CONTENT_MODERATION: "CONTENT_MODERATION",
  LOGOS: "LOGOS",
  TEXT_DETECTION: "TEXT_DETECTION",
  TRANSCRIPT: "TRANSCRIPT",
} as const;
/**
 * @public
 */
export type VideoExtractionCategoryType =
  (typeof VideoExtractionCategoryType)[keyof typeof VideoExtractionCategoryType];

/**
 * @public
 * @enum
 */
export const VideoStandardGenerativeFieldType = {
  CHAPTER_SUMMARY: "CHAPTER_SUMMARY",
  IAB: "IAB",
  VIDEO_SUMMARY: "VIDEO_SUMMARY",
} as const;
/**
 * @public
 */
export type VideoStandardGenerativeFieldType =
  (typeof VideoStandardGenerativeFieldType)[keyof typeof VideoStandardGenerativeFieldType];

/**
 * @public
 * @enum
 */
export const DataAutomationProjectStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type DataAutomationProjectStatus =
  (typeof DataAutomationProjectStatus)[keyof typeof DataAutomationProjectStatus];

/**
 * @public
 * @enum
 */
export const DataAutomationProjectStageFilter = {
  ALL: "ALL",
  DEVELOPMENT: "DEVELOPMENT",
  LIVE: "LIVE",
} as const;
/**
 * @public
 */
export type DataAutomationProjectStageFilter =
  (typeof DataAutomationProjectStageFilter)[keyof typeof DataAutomationProjectStageFilter];
