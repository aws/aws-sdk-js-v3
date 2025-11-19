// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AugmentedManifestsDocumentTypeFormat = {
  PLAIN_TEXT_DOCUMENT: "PLAIN_TEXT_DOCUMENT",
  SEMI_STRUCTURED_DOCUMENT: "SEMI_STRUCTURED_DOCUMENT",
} as const;
/**
 * @public
 */
export type AugmentedManifestsDocumentTypeFormat =
  (typeof AugmentedManifestsDocumentTypeFormat)[keyof typeof AugmentedManifestsDocumentTypeFormat];

/**
 * @public
 * @enum
 */
export const Split = {
  TEST: "TEST",
  TRAIN: "TRAIN",
} as const;
/**
 * @public
 */
export type Split = (typeof Split)[keyof typeof Split];

/**
 * @public
 * @enum
 */
export const InvalidRequestDetailReason = {
  DOCUMENT_SIZE_EXCEEDED: "DOCUMENT_SIZE_EXCEEDED",
  PAGE_LIMIT_EXCEEDED: "PAGE_LIMIT_EXCEEDED",
  TEXTRACT_ACCESS_DENIED: "TEXTRACT_ACCESS_DENIED",
  UNSUPPORTED_DOC_TYPE: "UNSUPPORTED_DOC_TYPE",
} as const;
/**
 * @public
 */
export type InvalidRequestDetailReason = (typeof InvalidRequestDetailReason)[keyof typeof InvalidRequestDetailReason];

/**
 * @public
 * @enum
 */
export const InvalidRequestReason = {
  INVALID_DOCUMENT: "INVALID_DOCUMENT",
} as const;
/**
 * @public
 */
export type InvalidRequestReason = (typeof InvalidRequestReason)[keyof typeof InvalidRequestReason];

/**
 * @public
 * @enum
 */
export const LanguageCode = {
  AR: "ar",
  DE: "de",
  EN: "en",
  ES: "es",
  FR: "fr",
  HI: "hi",
  IT: "it",
  JA: "ja",
  KO: "ko",
  PT: "pt",
  ZH: "zh",
  ZH_TW: "zh-TW",
} as const;
/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

/**
 * @public
 * @enum
 */
export const EntityType = {
  COMMERCIAL_ITEM: "COMMERCIAL_ITEM",
  DATE: "DATE",
  EVENT: "EVENT",
  LOCATION: "LOCATION",
  ORGANIZATION: "ORGANIZATION",
  OTHER: "OTHER",
  PERSON: "PERSON",
  QUANTITY: "QUANTITY",
  TITLE: "TITLE",
} as const;
/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * @enum
 */
export const SentimentType = {
  MIXED: "MIXED",
  NEGATIVE: "NEGATIVE",
  NEUTRAL: "NEUTRAL",
  POSITIVE: "POSITIVE",
} as const;
/**
 * @public
 */
export type SentimentType = (typeof SentimentType)[keyof typeof SentimentType];

/**
 * @public
 * @enum
 */
export const SyntaxLanguageCode = {
  DE: "de",
  EN: "en",
  ES: "es",
  FR: "fr",
  IT: "it",
  PT: "pt",
} as const;
/**
 * @public
 */
export type SyntaxLanguageCode = (typeof SyntaxLanguageCode)[keyof typeof SyntaxLanguageCode];

/**
 * @public
 * @enum
 */
export const PartOfSpeechTagType = {
  ADJ: "ADJ",
  ADP: "ADP",
  ADV: "ADV",
  AUX: "AUX",
  CCONJ: "CCONJ",
  CONJ: "CONJ",
  DET: "DET",
  INTJ: "INTJ",
  NOUN: "NOUN",
  NUM: "NUM",
  O: "O",
  PART: "PART",
  PRON: "PRON",
  PROPN: "PROPN",
  PUNCT: "PUNCT",
  SCONJ: "SCONJ",
  SYM: "SYM",
  VERB: "VERB",
} as const;
/**
 * @public
 */
export type PartOfSpeechTagType = (typeof PartOfSpeechTagType)[keyof typeof PartOfSpeechTagType];

/**
 * @public
 * @enum
 */
export const TargetedSentimentEntityType = {
  ATTRIBUTE: "ATTRIBUTE",
  BOOK: "BOOK",
  BRAND: "BRAND",
  COMMERCIAL_ITEM: "COMMERCIAL_ITEM",
  DATE: "DATE",
  EVENT: "EVENT",
  FACILITY: "FACILITY",
  GAME: "GAME",
  LOCATION: "LOCATION",
  MOVIE: "MOVIE",
  MUSIC: "MUSIC",
  ORGANIZATION: "ORGANIZATION",
  OTHER: "OTHER",
  PERSON: "PERSON",
  PERSONAL_TITLE: "PERSONAL_TITLE",
  QUANTITY: "QUANTITY",
  SOFTWARE: "SOFTWARE",
} as const;
/**
 * @public
 */
export type TargetedSentimentEntityType =
  (typeof TargetedSentimentEntityType)[keyof typeof TargetedSentimentEntityType];

/**
 * @public
 * @enum
 */
export const BlockType = {
  LINE: "LINE",
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
export const RelationshipType = {
  CHILD: "CHILD",
} as const;
/**
 * @public
 */
export type RelationshipType = (typeof RelationshipType)[keyof typeof RelationshipType];

/**
 * @public
 * @enum
 */
export const DocumentReadAction = {
  TEXTRACT_ANALYZE_DOCUMENT: "TEXTRACT_ANALYZE_DOCUMENT",
  TEXTRACT_DETECT_DOCUMENT_TEXT: "TEXTRACT_DETECT_DOCUMENT_TEXT",
} as const;
/**
 * @public
 */
export type DocumentReadAction = (typeof DocumentReadAction)[keyof typeof DocumentReadAction];

/**
 * @public
 * @enum
 */
export const DocumentReadMode = {
  FORCE_DOCUMENT_READ_ACTION: "FORCE_DOCUMENT_READ_ACTION",
  SERVICE_DEFAULT: "SERVICE_DEFAULT",
} as const;
/**
 * @public
 */
export type DocumentReadMode = (typeof DocumentReadMode)[keyof typeof DocumentReadMode];

/**
 * @public
 * @enum
 */
export const DocumentReadFeatureTypes = {
  FORMS: "FORMS",
  TABLES: "TABLES",
} as const;
/**
 * @public
 */
export type DocumentReadFeatureTypes = (typeof DocumentReadFeatureTypes)[keyof typeof DocumentReadFeatureTypes];

/**
 * @public
 * @enum
 */
export const DocumentType = {
  IMAGE: "IMAGE",
  MS_WORD: "MS_WORD",
  NATIVE_PDF: "NATIVE_PDF",
  PLAIN_TEXT: "PLAIN_TEXT",
  SCANNED_PDF: "SCANNED_PDF",
  TEXTRACT_ANALYZE_DOCUMENT_JSON: "TEXTRACT_ANALYZE_DOCUMENT_JSON",
  TEXTRACT_DETECT_DOCUMENT_TEXT_JSON: "TEXTRACT_DETECT_DOCUMENT_TEXT_JSON",
} as const;
/**
 * @public
 */
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];

/**
 * @public
 * @enum
 */
export const PageBasedErrorCode = {
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  PAGE_CHARACTERS_EXCEEDED: "PAGE_CHARACTERS_EXCEEDED",
  PAGE_SIZE_EXCEEDED: "PAGE_SIZE_EXCEEDED",
  TEXTRACT_BAD_PAGE: "TEXTRACT_BAD_PAGE",
  TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED: "TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED",
} as const;
/**
 * @public
 */
export type PageBasedErrorCode = (typeof PageBasedErrorCode)[keyof typeof PageBasedErrorCode];

/**
 * @public
 * @enum
 */
export const PageBasedWarningCode = {
  INFERENCING_NATIVE_DOCUMENT_WITH_PLAINTEXT_TRAINED_MODEL: "INFERENCING_NATIVE_DOCUMENT_WITH_PLAINTEXT_TRAINED_MODEL",
  INFERENCING_PLAINTEXT_WITH_NATIVE_TRAINED_MODEL: "INFERENCING_PLAINTEXT_WITH_NATIVE_TRAINED_MODEL",
} as const;
/**
 * @public
 */
export type PageBasedWarningCode = (typeof PageBasedWarningCode)[keyof typeof PageBasedWarningCode];

/**
 * @public
 * @enum
 */
export const PiiEntityType = {
  ADDRESS: "ADDRESS",
  AGE: "AGE",
  ALL: "ALL",
  AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
  AWS_SECRET_KEY: "AWS_SECRET_KEY",
  BANK_ACCOUNT_NUMBER: "BANK_ACCOUNT_NUMBER",
  BANK_ROUTING: "BANK_ROUTING",
  CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
  CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
  CREDIT_DEBIT_CVV: "CREDIT_DEBIT_CVV",
  CREDIT_DEBIT_EXPIRY: "CREDIT_DEBIT_EXPIRY",
  CREDIT_DEBIT_NUMBER: "CREDIT_DEBIT_NUMBER",
  DATE_TIME: "DATE_TIME",
  DRIVER_ID: "DRIVER_ID",
  EMAIL: "EMAIL",
  INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
  IN_AADHAAR: "IN_AADHAAR",
  IN_NREGA: "IN_NREGA",
  IN_PERMANENT_ACCOUNT_NUMBER: "IN_PERMANENT_ACCOUNT_NUMBER",
  IN_VOTER_NUMBER: "IN_VOTER_NUMBER",
  IP_ADDRESS: "IP_ADDRESS",
  LICENSE_PLATE: "LICENSE_PLATE",
  MAC_ADDRESS: "MAC_ADDRESS",
  NAME: "NAME",
  PASSPORT_NUMBER: "PASSPORT_NUMBER",
  PASSWORD: "PASSWORD",
  PHONE: "PHONE",
  PIN: "PIN",
  SSN: "SSN",
  SWIFT_CODE: "SWIFT_CODE",
  UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
  UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
  UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
  URL: "URL",
  USERNAME: "USERNAME",
  US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
  VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER",
} as const;
/**
 * @public
 */
export type PiiEntityType = (typeof PiiEntityType)[keyof typeof PiiEntityType];

/**
 * @public
 * @enum
 */
export const DatasetType = {
  TEST: "TEST",
  TRAIN: "TRAIN",
} as const;
/**
 * @public
 */
export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType];

/**
 * @public
 * @enum
 */
export const DatasetDataFormat = {
  AUGMENTED_MANIFEST: "AUGMENTED_MANIFEST",
  COMPREHEND_CSV: "COMPREHEND_CSV",
} as const;
/**
 * @public
 */
export type DatasetDataFormat = (typeof DatasetDataFormat)[keyof typeof DatasetDataFormat];

/**
 * @public
 * @enum
 */
export const InputFormat = {
  ONE_DOC_PER_FILE: "ONE_DOC_PER_FILE",
  ONE_DOC_PER_LINE: "ONE_DOC_PER_LINE",
} as const;
/**
 * @public
 */
export type InputFormat = (typeof InputFormat)[keyof typeof InputFormat];

/**
 * @public
 * @enum
 */
export const DocumentClassifierDataFormat = {
  AUGMENTED_MANIFEST: "AUGMENTED_MANIFEST",
  COMPREHEND_CSV: "COMPREHEND_CSV",
} as const;
/**
 * @public
 */
export type DocumentClassifierDataFormat =
  (typeof DocumentClassifierDataFormat)[keyof typeof DocumentClassifierDataFormat];

/**
 * @public
 * @enum
 */
export const DocumentClassifierDocumentTypeFormat = {
  PLAIN_TEXT_DOCUMENT: "PLAIN_TEXT_DOCUMENT",
  SEMI_STRUCTURED_DOCUMENT: "SEMI_STRUCTURED_DOCUMENT",
} as const;
/**
 * @public
 */
export type DocumentClassifierDocumentTypeFormat =
  (typeof DocumentClassifierDocumentTypeFormat)[keyof typeof DocumentClassifierDocumentTypeFormat];

/**
 * @public
 * @enum
 */
export const DocumentClassifierMode = {
  MULTI_CLASS: "MULTI_CLASS",
  MULTI_LABEL: "MULTI_LABEL",
} as const;
/**
 * @public
 */
export type DocumentClassifierMode = (typeof DocumentClassifierMode)[keyof typeof DocumentClassifierMode];

/**
 * @public
 * @enum
 */
export const EntityRecognizerDataFormat = {
  AUGMENTED_MANIFEST: "AUGMENTED_MANIFEST",
  COMPREHEND_CSV: "COMPREHEND_CSV",
} as const;
/**
 * @public
 */
export type EntityRecognizerDataFormat = (typeof EntityRecognizerDataFormat)[keyof typeof EntityRecognizerDataFormat];

/**
 * @public
 * @enum
 */
export const ModelType = {
  DOCUMENT_CLASSIFIER: "DOCUMENT_CLASSIFIER",
  ENTITY_RECOGNIZER: "ENTITY_RECOGNIZER",
} as const;
/**
 * @public
 */
export type ModelType = (typeof ModelType)[keyof typeof ModelType];

/**
 * @public
 * @enum
 */
export const DatasetStatus = {
  COMPLETED: "COMPLETED",
  CREATING: "CREATING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type DatasetStatus = (typeof DatasetStatus)[keyof typeof DatasetStatus];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  STOPPED: "STOPPED",
  STOP_REQUESTED: "STOP_REQUESTED",
  SUBMITTED: "SUBMITTED",
} as const;
/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 * @enum
 */
export const ModelStatus = {
  DELETING: "DELETING",
  IN_ERROR: "IN_ERROR",
  STOPPED: "STOPPED",
  STOP_REQUESTED: "STOP_REQUESTED",
  SUBMITTED: "SUBMITTED",
  TRAINED: "TRAINED",
  TRAINED_WITH_WARNING: "TRAINED_WITH_WARNING",
  TRAINING: "TRAINING",
} as const;
/**
 * @public
 */
export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus];

/**
 * @public
 * @enum
 */
export const EndpointStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  IN_SERVICE: "IN_SERVICE",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];

/**
 * @public
 * @enum
 */
export const FlywheelStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type FlywheelStatus = (typeof FlywheelStatus)[keyof typeof FlywheelStatus];

/**
 * @public
 * @enum
 */
export const FlywheelIterationStatus = {
  COMPLETED: "COMPLETED",
  EVALUATING: "EVALUATING",
  FAILED: "FAILED",
  STOPPED: "STOPPED",
  STOP_REQUESTED: "STOP_REQUESTED",
  TRAINING: "TRAINING",
} as const;
/**
 * @public
 */
export type FlywheelIterationStatus = (typeof FlywheelIterationStatus)[keyof typeof FlywheelIterationStatus];

/**
 * @public
 * @enum
 */
export const PiiEntitiesDetectionMode = {
  ONLY_OFFSETS: "ONLY_OFFSETS",
  ONLY_REDACTION: "ONLY_REDACTION",
} as const;
/**
 * @public
 */
export type PiiEntitiesDetectionMode = (typeof PiiEntitiesDetectionMode)[keyof typeof PiiEntitiesDetectionMode];

/**
 * @public
 * @enum
 */
export const PiiEntitiesDetectionMaskMode = {
  MASK: "MASK",
  REPLACE_WITH_PII_ENTITY_TYPE: "REPLACE_WITH_PII_ENTITY_TYPE",
} as const;
/**
 * @public
 */
export type PiiEntitiesDetectionMaskMode =
  (typeof PiiEntitiesDetectionMaskMode)[keyof typeof PiiEntitiesDetectionMaskMode];

/**
 * @public
 * @enum
 */
export const ToxicContentType = {
  GRAPHIC: "GRAPHIC",
  HARASSMENT_OR_ABUSE: "HARASSMENT_OR_ABUSE",
  HATE_SPEECH: "HATE_SPEECH",
  INSULT: "INSULT",
  PROFANITY: "PROFANITY",
  SEXUAL: "SEXUAL",
  VIOLENCE_OR_THREAT: "VIOLENCE_OR_THREAT",
} as const;
/**
 * @public
 */
export type ToxicContentType = (typeof ToxicContentType)[keyof typeof ToxicContentType];
