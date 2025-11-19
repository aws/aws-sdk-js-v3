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
