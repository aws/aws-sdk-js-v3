// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const MediaCapabilities = {
  NONE: "None",
  RECEIVE: "Receive",
  SEND: "Send",
  SEND_RECEIVE: "SendReceive",
} as const;
/**
 * @public
 */
export type MediaCapabilities = (typeof MediaCapabilities)[keyof typeof MediaCapabilities];

/**
 * @public
 * @enum
 */
export const MeetingFeatureStatus = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type MeetingFeatureStatus = (typeof MeetingFeatureStatus)[keyof typeof MeetingFeatureStatus];

/**
 * @public
 * @enum
 */
export const MediaPlacementNetworkType = {
  DUAL_STACK: "DualStack",
  IPV4_ONLY: "Ipv4Only",
} as const;
/**
 * @public
 */
export type MediaPlacementNetworkType = (typeof MediaPlacementNetworkType)[keyof typeof MediaPlacementNetworkType];

/**
 * @public
 * @enum
 */
export const ContentResolution = {
  FHD: "FHD",
  NONE: "None",
  UHD: "UHD",
} as const;
/**
 * @public
 */
export type ContentResolution = (typeof ContentResolution)[keyof typeof ContentResolution];

/**
 * @public
 * @enum
 */
export const VideoResolution = {
  FHD: "FHD",
  HD: "HD",
  NONE: "None",
} as const;
/**
 * @public
 */
export type VideoResolution = (typeof VideoResolution)[keyof typeof VideoResolution];

/**
 * @public
 * @enum
 */
export const TranscribeMedicalContentIdentificationType = {
  PHI: "PHI",
} as const;
/**
 * @public
 */
export type TranscribeMedicalContentIdentificationType =
  (typeof TranscribeMedicalContentIdentificationType)[keyof typeof TranscribeMedicalContentIdentificationType];

/**
 * @public
 * @enum
 */
export const TranscribeMedicalLanguageCode = {
  EN_US: "en-US",
} as const;
/**
 * @public
 */
export type TranscribeMedicalLanguageCode =
  (typeof TranscribeMedicalLanguageCode)[keyof typeof TranscribeMedicalLanguageCode];

/**
 * @public
 * @enum
 */
export const TranscribeMedicalRegion = {
  AP_SOUTHEAST_2: "ap-southeast-2",
  AUTO: "auto",
  CA_CENTRAL_1: "ca-central-1",
  EU_WEST_1: "eu-west-1",
  US_EAST_1: "us-east-1",
  US_EAST_2: "us-east-2",
  US_WEST_2: "us-west-2",
} as const;
/**
 * @public
 */
export type TranscribeMedicalRegion = (typeof TranscribeMedicalRegion)[keyof typeof TranscribeMedicalRegion];

/**
 * @public
 * @enum
 */
export const TranscribeMedicalSpecialty = {
  CARDIOLOGY: "CARDIOLOGY",
  NEUROLOGY: "NEUROLOGY",
  ONCOLOGY: "ONCOLOGY",
  PRIMARYCARE: "PRIMARYCARE",
  RADIOLOGY: "RADIOLOGY",
  UROLOGY: "UROLOGY",
} as const;
/**
 * @public
 */
export type TranscribeMedicalSpecialty = (typeof TranscribeMedicalSpecialty)[keyof typeof TranscribeMedicalSpecialty];

/**
 * @public
 * @enum
 */
export const TranscribeMedicalType = {
  CONVERSATION: "CONVERSATION",
  DICTATION: "DICTATION",
} as const;
/**
 * @public
 */
export type TranscribeMedicalType = (typeof TranscribeMedicalType)[keyof typeof TranscribeMedicalType];

/**
 * @public
 * @enum
 */
export const TranscribeContentIdentificationType = {
  PII: "PII",
} as const;
/**
 * @public
 */
export type TranscribeContentIdentificationType =
  (typeof TranscribeContentIdentificationType)[keyof typeof TranscribeContentIdentificationType];

/**
 * @public
 * @enum
 */
export const TranscribeContentRedactionType = {
  PII: "PII",
} as const;
/**
 * @public
 */
export type TranscribeContentRedactionType =
  (typeof TranscribeContentRedactionType)[keyof typeof TranscribeContentRedactionType];

/**
 * @public
 * @enum
 */
export const TranscribeLanguageCode = {
  DE_DE: "de-DE",
  EN_AU: "en-AU",
  EN_GB: "en-GB",
  EN_US: "en-US",
  ES_US: "es-US",
  FR_CA: "fr-CA",
  FR_FR: "fr-FR",
  HI_IN: "hi-IN",
  IT_IT: "it-IT",
  JA_JP: "ja-JP",
  KO_KR: "ko-KR",
  PT_BR: "pt-BR",
  TH_TH: "th-TH",
  ZH_CN: "zh-CN",
} as const;
/**
 * @public
 */
export type TranscribeLanguageCode = (typeof TranscribeLanguageCode)[keyof typeof TranscribeLanguageCode];

/**
 * @public
 * @enum
 */
export const TranscribePartialResultsStability = {
  HIGH: "high",
  LOW: "low",
  MEDIUM: "medium",
} as const;
/**
 * @public
 */
export type TranscribePartialResultsStability =
  (typeof TranscribePartialResultsStability)[keyof typeof TranscribePartialResultsStability];

/**
 * @public
 * @enum
 */
export const TranscribeRegion = {
  AP_NORTHEAST_1: "ap-northeast-1",
  AP_NORTHEAST_2: "ap-northeast-2",
  AP_SOUTHEAST_2: "ap-southeast-2",
  AUTO: "auto",
  CA_CENTRAL_1: "ca-central-1",
  EU_CENTRAL_1: "eu-central-1",
  EU_WEST_1: "eu-west-1",
  EU_WEST_2: "eu-west-2",
  SA_EAST_1: "sa-east-1",
  US_EAST_1: "us-east-1",
  US_EAST_2: "us-east-2",
  US_GOV_WEST_1: "us-gov-west-1",
  US_WEST_2: "us-west-2",
} as const;
/**
 * @public
 */
export type TranscribeRegion = (typeof TranscribeRegion)[keyof typeof TranscribeRegion];

/**
 * @public
 * @enum
 */
export const TranscribeVocabularyFilterMethod = {
  MASK: "mask",
  REMOVE: "remove",
  TAG: "tag",
} as const;
/**
 * @public
 */
export type TranscribeVocabularyFilterMethod =
  (typeof TranscribeVocabularyFilterMethod)[keyof typeof TranscribeVocabularyFilterMethod];
