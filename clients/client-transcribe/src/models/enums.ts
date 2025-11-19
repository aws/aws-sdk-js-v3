// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BaseModelName = {
  NARROW_BAND: "NarrowBand",
  WIDE_BAND: "WideBand",
} as const;
/**
 * @public
 */
export type BaseModelName = (typeof BaseModelName)[keyof typeof BaseModelName];

/**
 * @public
 * @enum
 */
export const CallAnalyticsFeature = {
  GENERATIVE_SUMMARIZATION: "GENERATIVE_SUMMARIZATION",
} as const;
/**
 * @public
 */
export type CallAnalyticsFeature = (typeof CallAnalyticsFeature)[keyof typeof CallAnalyticsFeature];

/**
 * @public
 * @enum
 */
export const CallAnalyticsSkippedReasonCode = {
  FAILED_SAFETY_GUIDELINES: "FAILED_SAFETY_GUIDELINES",
  INSUFFICIENT_CONVERSATION_CONTENT: "INSUFFICIENT_CONVERSATION_CONTENT",
} as const;
/**
 * @public
 */
export type CallAnalyticsSkippedReasonCode =
  (typeof CallAnalyticsSkippedReasonCode)[keyof typeof CallAnalyticsSkippedReasonCode];

/**
 * @public
 * @enum
 */
export const CallAnalyticsJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
} as const;
/**
 * @public
 */
export type CallAnalyticsJobStatus = (typeof CallAnalyticsJobStatus)[keyof typeof CallAnalyticsJobStatus];

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
export const LanguageCode = {
  AB_GE: "ab-GE",
  AF_ZA: "af-ZA",
  AR_AE: "ar-AE",
  AR_SA: "ar-SA",
  AST_ES: "ast-ES",
  AZ_AZ: "az-AZ",
  BA_RU: "ba-RU",
  BE_BY: "be-BY",
  BG_BG: "bg-BG",
  BN_IN: "bn-IN",
  BS_BA: "bs-BA",
  CA_ES: "ca-ES",
  CKB_IQ: "ckb-IQ",
  CKB_IR: "ckb-IR",
  CS_CZ: "cs-CZ",
  CY_WL: "cy-WL",
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
  ET_EE: "et-EE",
  ET_ET: "et-ET",
  EU_ES: "eu-ES",
  FA_IR: "fa-IR",
  FI_FI: "fi-FI",
  FR_CA: "fr-CA",
  FR_FR: "fr-FR",
  GL_ES: "gl-ES",
  GU_IN: "gu-IN",
  HA_NG: "ha-NG",
  HE_IL: "he-IL",
  HI_IN: "hi-IN",
  HR_HR: "hr-HR",
  HU_HU: "hu-HU",
  HY_AM: "hy-AM",
  ID_ID: "id-ID",
  IS_IS: "is-IS",
  IT_IT: "it-IT",
  JA_JP: "ja-JP",
  KAB_DZ: "kab-DZ",
  KA_GE: "ka-GE",
  KK_KZ: "kk-KZ",
  KN_IN: "kn-IN",
  KO_KR: "ko-KR",
  KY_KG: "ky-KG",
  LG_IN: "lg-IN",
  LT_LT: "lt-LT",
  LV_LV: "lv-LV",
  MHR_RU: "mhr-RU",
  MI_NZ: "mi-NZ",
  MK_MK: "mk-MK",
  ML_IN: "ml-IN",
  MN_MN: "mn-MN",
  MR_IN: "mr-IN",
  MS_MY: "ms-MY",
  MT_MT: "mt-MT",
  NL_NL: "nl-NL",
  NO_NO: "no-NO",
  OR_IN: "or-IN",
  PA_IN: "pa-IN",
  PL_PL: "pl-PL",
  PS_AF: "ps-AF",
  PT_BR: "pt-BR",
  PT_PT: "pt-PT",
  RO_RO: "ro-RO",
  RU_RU: "ru-RU",
  RW_RW: "rw-RW",
  SI_LK: "si-LK",
  SK_SK: "sk-SK",
  SL_SI: "sl-SI",
  SO_SO: "so-SO",
  SR_RS: "sr-RS",
  SU_ID: "su-ID",
  SV_SE: "sv-SE",
  SW_BI: "sw-BI",
  SW_KE: "sw-KE",
  SW_RW: "sw-RW",
  SW_TZ: "sw-TZ",
  SW_UG: "sw-UG",
  TA_IN: "ta-IN",
  TE_IN: "te-IN",
  TH_TH: "th-TH",
  TL_PH: "tl-PH",
  TR_TR: "tr-TR",
  TT_RU: "tt-RU",
  UG_CN: "ug-CN",
  UK_UA: "uk-UA",
  UZ_UZ: "uz-UZ",
  VI_VN: "vi-VN",
  WO_SN: "wo-SN",
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
export const MediaFormat = {
  AMR: "amr",
  FLAC: "flac",
  M4A: "m4a",
  MP3: "mp3",
  MP4: "mp4",
  OGG: "ogg",
  WAV: "wav",
  WEBM: "webm",
} as const;
/**
 * @public
 */
export type MediaFormat = (typeof MediaFormat)[keyof typeof MediaFormat];

/**
 * @public
 * @enum
 */
export const PiiEntityType = {
  ADDRESS: "ADDRESS",
  ALL: "ALL",
  BANK_ACCOUNT_NUMBER: "BANK_ACCOUNT_NUMBER",
  BANK_ROUTING: "BANK_ROUTING",
  CREDIT_DEBIT_CVV: "CREDIT_DEBIT_CVV",
  CREDIT_DEBIT_EXPIRY: "CREDIT_DEBIT_EXPIRY",
  CREDIT_DEBIT_NUMBER: "CREDIT_DEBIT_NUMBER",
  EMAIL: "EMAIL",
  NAME: "NAME",
  PHONE: "PHONE",
  PIN: "PIN",
  SSN: "SSN",
} as const;
/**
 * @public
 */
export type PiiEntityType = (typeof PiiEntityType)[keyof typeof PiiEntityType];

/**
 * @public
 * @enum
 */
export const RedactionOutput = {
  REDACTED: "redacted",
  REDACTED_AND_UNREDACTED: "redacted_and_unredacted",
} as const;
/**
 * @public
 */
export type RedactionOutput = (typeof RedactionOutput)[keyof typeof RedactionOutput];

/**
 * @public
 * @enum
 */
export const RedactionType = {
  PII: "PII",
} as const;
/**
 * @public
 */
export type RedactionType = (typeof RedactionType)[keyof typeof RedactionType];

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
export const InputType = {
  POST_CALL: "POST_CALL",
  REAL_TIME: "REAL_TIME",
} as const;
/**
 * @public
 */
export type InputType = (typeof InputType)[keyof typeof InputType];

/**
 * @public
 * @enum
 */
export const SentimentValue = {
  MIXED: "MIXED",
  NEGATIVE: "NEGATIVE",
  NEUTRAL: "NEUTRAL",
  POSITIVE: "POSITIVE",
} as const;
/**
 * @public
 */
export type SentimentValue = (typeof SentimentValue)[keyof typeof SentimentValue];

/**
 * @public
 * @enum
 */
export const TranscriptFilterType = {
  EXACT: "EXACT",
} as const;
/**
 * @public
 */
export type TranscriptFilterType = (typeof TranscriptFilterType)[keyof typeof TranscriptFilterType];

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
export const CLMLanguageCode = {
  DE_DE: "de-DE",
  EN_AU: "en-AU",
  EN_GB: "en-GB",
  EN_US: "en-US",
  ES_US: "es-US",
  HI_IN: "hi-IN",
  JA_JP: "ja-JP",
} as const;
/**
 * @public
 */
export type CLMLanguageCode = (typeof CLMLanguageCode)[keyof typeof CLMLanguageCode];

/**
 * @public
 * @enum
 */
export const ModelStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus];

/**
 * @public
 * @enum
 */
export const VocabularyState = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  READY: "READY",
} as const;
/**
 * @public
 */
export type VocabularyState = (typeof VocabularyState)[keyof typeof VocabularyState];

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
export const MedicalScribeJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
} as const;
/**
 * @public
 */
export type MedicalScribeJobStatus = (typeof MedicalScribeJobStatus)[keyof typeof MedicalScribeJobStatus];

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
export const Specialty = {
  PRIMARYCARE: "PRIMARYCARE",
} as const;
/**
 * @public
 */
export type Specialty = (typeof Specialty)[keyof typeof Specialty];

/**
 * @public
 * @enum
 */
export const TranscriptionJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
} as const;
/**
 * @public
 */
export type TranscriptionJobStatus = (typeof TranscriptionJobStatus)[keyof typeof TranscriptionJobStatus];

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

/**
 * @public
 * @enum
 */
export const SubtitleFormat = {
  SRT: "srt",
  VTT: "vtt",
} as const;
/**
 * @public
 */
export type SubtitleFormat = (typeof SubtitleFormat)[keyof typeof SubtitleFormat];

/**
 * @public
 * @enum
 */
export const ToxicityCategory = {
  ALL: "ALL",
} as const;
/**
 * @public
 */
export type ToxicityCategory = (typeof ToxicityCategory)[keyof typeof ToxicityCategory];

/**
 * @public
 * @enum
 */
export const OutputLocationType = {
  CUSTOMER_BUCKET: "CUSTOMER_BUCKET",
  SERVICE_BUCKET: "SERVICE_BUCKET",
} as const;
/**
 * @public
 */
export type OutputLocationType = (typeof OutputLocationType)[keyof typeof OutputLocationType];

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
