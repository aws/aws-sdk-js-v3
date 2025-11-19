// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ItemType = {
  PRONUNCIATION: "pronunciation",
  PUNCTUATION: "punctuation",
} as const;
/**
 * @public
 */
export type ItemType = (typeof ItemType)[keyof typeof ItemType];

/**
 * @public
 * @enum
 */
export const ParticipantRole = {
  AGENT: "AGENT",
  CUSTOMER: "CUSTOMER",
} as const;
/**
 * @public
 */
export type ParticipantRole = (typeof ParticipantRole)[keyof typeof ParticipantRole];

/**
 * @public
 * @enum
 */
export const ContentRedactionOutput = {
  REDACTED: "redacted",
  REDACTED_AND_UNREDACTED: "redacted_and_unredacted",
} as const;
/**
 * @public
 */
export type ContentRedactionOutput = (typeof ContentRedactionOutput)[keyof typeof ContentRedactionOutput];

/**
 * @public
 * @enum
 */
export const CallAnalyticsLanguageCode = {
  DE_DE: "de-DE",
  EN_AU: "en-AU",
  EN_GB: "en-GB",
  EN_US: "en-US",
  ES_US: "es-US",
  FR_CA: "fr-CA",
  FR_FR: "fr-FR",
  IT_IT: "it-IT",
  PT_BR: "pt-BR",
} as const;
/**
 * @public
 */
export type CallAnalyticsLanguageCode = (typeof CallAnalyticsLanguageCode)[keyof typeof CallAnalyticsLanguageCode];

/**
 * @public
 * @enum
 */
export const Sentiment = {
  MIXED: "MIXED",
  NEGATIVE: "NEGATIVE",
  NEUTRAL: "NEUTRAL",
  POSITIVE: "POSITIVE",
} as const;
/**
 * @public
 */
export type Sentiment = (typeof Sentiment)[keyof typeof Sentiment];

/**
 * @public
 * @enum
 */
export const ClinicalNoteGenerationStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ClinicalNoteGenerationStatus =
  (typeof ClinicalNoteGenerationStatus)[keyof typeof ClinicalNoteGenerationStatus];

/**
 * @public
 * @enum
 */
export const MedicalScribeNoteTemplate = {
  BEHAVIORAL_SOAP: "BEHAVIORAL_SOAP",
  BIRP: "BIRP",
  DAP: "DAP",
  GIRPP: "GIRPP",
  HISTORY_AND_PHYSICAL: "HISTORY_AND_PHYSICAL",
  PHYSICAL_SOAP: "PHYSICAL_SOAP",
  SIRP: "SIRP",
} as const;
/**
 * @public
 */
export type MedicalScribeNoteTemplate = (typeof MedicalScribeNoteTemplate)[keyof typeof MedicalScribeNoteTemplate];

/**
 * @public
 * @enum
 */
export const ContentIdentificationType = {
  PII: "PII",
} as const;
/**
 * @public
 */
export type ContentIdentificationType = (typeof ContentIdentificationType)[keyof typeof ContentIdentificationType];

/**
 * @public
 * @enum
 */
export const ContentRedactionType = {
  PII: "PII",
} as const;
/**
 * @public
 */
export type ContentRedactionType = (typeof ContentRedactionType)[keyof typeof ContentRedactionType];

/**
 * @public
 * @enum
 */
export const MedicalScribeParticipantRole = {
  CLINICIAN: "CLINICIAN",
  PATIENT: "PATIENT",
} as const;
/**
 * @public
 */
export type MedicalScribeParticipantRole =
  (typeof MedicalScribeParticipantRole)[keyof typeof MedicalScribeParticipantRole];

/**
 * @public
 * @enum
 */
export const MedicalScribeLanguageCode = {
  EN_US: "en-US",
} as const;
/**
 * @public
 */
export type MedicalScribeLanguageCode = (typeof MedicalScribeLanguageCode)[keyof typeof MedicalScribeLanguageCode];

/**
 * @public
 * @enum
 */
export const MedicalScribeMediaEncoding = {
  FLAC: "flac",
  OGG_OPUS: "ogg-opus",
  PCM: "pcm",
} as const;
/**
 * @public
 */
export type MedicalScribeMediaEncoding = (typeof MedicalScribeMediaEncoding)[keyof typeof MedicalScribeMediaEncoding];

/**
 * @public
 * @enum
 */
export const MedicalScribeStreamStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PAUSED: "PAUSED",
} as const;
/**
 * @public
 */
export type MedicalScribeStreamStatus = (typeof MedicalScribeStreamStatus)[keyof typeof MedicalScribeStreamStatus];

/**
 * @public
 * @enum
 */
export const MedicalScribeVocabularyFilterMethod = {
  MASK: "mask",
  REMOVE: "remove",
  TAG: "tag",
} as const;
/**
 * @public
 */
export type MedicalScribeVocabularyFilterMethod =
  (typeof MedicalScribeVocabularyFilterMethod)[keyof typeof MedicalScribeVocabularyFilterMethod];

/**
 * @public
 * @enum
 */
export const LanguageCode = {
  AF_ZA: "af-ZA",
  AR_AE: "ar-AE",
  AR_SA: "ar-SA",
  CA_ES: "ca-ES",
  CS_CZ: "cs-CZ",
  DA_DK: "da-DK",
  DE_CH: "de-CH",
  DE_DE: "de-DE",
  EL_GR: "el-GR",
  EN_AB: "en-AB",
  EN_AU: "en-AU",
  EN_GB: "en-GB",
  EN_IE: "en-IE",
  EN_IN: "en-IN",
  EN_NZ: "en-NZ",
  EN_US: "en-US",
  EN_WL: "en-WL",
  EN_ZA: "en-ZA",
  ES_ES: "es-ES",
  ES_US: "es-US",
  EU_ES: "eu-ES",
  FA_IR: "fa-IR",
  FI_FI: "fi-FI",
  FR_CA: "fr-CA",
  FR_FR: "fr-FR",
  GL_ES: "gl-ES",
  HE_IL: "he-IL",
  HI_IN: "hi-IN",
  HR_HR: "hr-HR",
  ID_ID: "id-ID",
  IT_IT: "it-IT",
  JA_JP: "ja-JP",
  KO_KR: "ko-KR",
  LV_LV: "lv-LV",
  MS_MY: "ms-MY",
  NL_NL: "nl-NL",
  NO_NO: "no-NO",
  PL_PL: "pl-PL",
  PT_BR: "pt-BR",
  PT_PT: "pt-PT",
  RO_RO: "ro-RO",
  RU_RU: "ru-RU",
  SK_SK: "sk-SK",
  SO_SO: "so-SO",
  SR_RS: "sr-RS",
  SV_SE: "sv-SE",
  TH_TH: "th-TH",
  TL_PH: "tl-PH",
  UK_UA: "uk-UA",
  VI_VN: "vi-VN",
  ZH_CN: "zh-CN",
  ZH_HK: "zh-HK",
  ZH_TW: "zh-TW",
  ZU_ZA: "zu-ZA",
} as const;
/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

/**
 * @public
 * @enum
 */
export const MediaEncoding = {
  FLAC: "flac",
  OGG_OPUS: "ogg-opus",
  PCM: "pcm",
} as const;
/**
 * @public
 */
export type MediaEncoding = (typeof MediaEncoding)[keyof typeof MediaEncoding];

/**
 * @public
 * @enum
 */
export const MedicalContentIdentificationType = {
  PHI: "PHI",
} as const;
/**
 * @public
 */
export type MedicalContentIdentificationType =
  (typeof MedicalContentIdentificationType)[keyof typeof MedicalContentIdentificationType];

/**
 * @public
 * @enum
 */
export const Pronouns = {
  HE_HIM: "HE_HIM",
  SHE_HER: "SHE_HER",
  THEY_THEM: "THEY_THEM",
} as const;
/**
 * @public
 */
export type Pronouns = (typeof Pronouns)[keyof typeof Pronouns];

/**
 * @public
 * @enum
 */
export const MedicalScribeSessionControlEventType = {
  END_OF_SESSION: "END_OF_SESSION",
} as const;
/**
 * @public
 */
export type MedicalScribeSessionControlEventType =
  (typeof MedicalScribeSessionControlEventType)[keyof typeof MedicalScribeSessionControlEventType];

/**
 * @public
 * @enum
 */
export const MedicalScribeTranscriptItemType = {
  PRONUNCIATION: "pronunciation",
  PUNCTUATION: "punctuation",
} as const;
/**
 * @public
 */
export type MedicalScribeTranscriptItemType =
  (typeof MedicalScribeTranscriptItemType)[keyof typeof MedicalScribeTranscriptItemType];

/**
 * @public
 * @enum
 */
export const PartialResultsStability = {
  HIGH: "high",
  LOW: "low",
  MEDIUM: "medium",
} as const;
/**
 * @public
 */
export type PartialResultsStability = (typeof PartialResultsStability)[keyof typeof PartialResultsStability];

/**
 * @public
 * @enum
 */
export const Specialty = {
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
export type Specialty = (typeof Specialty)[keyof typeof Specialty];

/**
 * @public
 * @enum
 */
export const VocabularyFilterMethod = {
  MASK: "mask",
  REMOVE: "remove",
  TAG: "tag",
} as const;
/**
 * @public
 */
export type VocabularyFilterMethod = (typeof VocabularyFilterMethod)[keyof typeof VocabularyFilterMethod];

/**
 * @public
 * @enum
 */
export const Type = {
  CONVERSATION: "CONVERSATION",
  DICTATION: "DICTATION",
} as const;
/**
 * @public
 */
export type Type = (typeof Type)[keyof typeof Type];
