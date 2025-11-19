// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EncryptionKeyType = {
  KMS: "KMS",
} as const;
/**
 * @public
 */
export type EncryptionKeyType = (typeof EncryptionKeyType)[keyof typeof EncryptionKeyType];

/**
 * @public
 * @enum
 */
export const ParallelDataFormat = {
  CSV: "CSV",
  TMX: "TMX",
  TSV: "TSV",
} as const;
/**
 * @public
 */
export type ParallelDataFormat = (typeof ParallelDataFormat)[keyof typeof ParallelDataFormat];

/**
 * @public
 * @enum
 */
export const ParallelDataStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ParallelDataStatus = (typeof ParallelDataStatus)[keyof typeof ParallelDataStatus];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ERROR: "COMPLETED_WITH_ERROR",
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
export const Brevity = {
  ON: "ON",
} as const;
/**
 * @public
 */
export type Brevity = (typeof Brevity)[keyof typeof Brevity];

/**
 * @public
 * @enum
 */
export const Formality = {
  FORMAL: "FORMAL",
  INFORMAL: "INFORMAL",
} as const;
/**
 * @public
 */
export type Formality = (typeof Formality)[keyof typeof Formality];

/**
 * @public
 * @enum
 */
export const Profanity = {
  MASK: "MASK",
} as const;
/**
 * @public
 */
export type Profanity = (typeof Profanity)[keyof typeof Profanity];

/**
 * @public
 * @enum
 */
export const TerminologyDataFormat = {
  CSV: "CSV",
  TMX: "TMX",
  TSV: "TSV",
} as const;
/**
 * @public
 */
export type TerminologyDataFormat = (typeof TerminologyDataFormat)[keyof typeof TerminologyDataFormat];

/**
 * @public
 * @enum
 */
export const Directionality = {
  MULTI: "MULTI",
  UNI: "UNI",
} as const;
/**
 * @public
 */
export type Directionality = (typeof Directionality)[keyof typeof Directionality];

/**
 * @public
 * @enum
 */
export const MergeStrategy = {
  OVERWRITE: "OVERWRITE",
} as const;
/**
 * @public
 */
export type MergeStrategy = (typeof MergeStrategy)[keyof typeof MergeStrategy];

/**
 * @public
 * @enum
 */
export const DisplayLanguageCode = {
  DE: "de",
  EN: "en",
  ES: "es",
  FR: "fr",
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
export type DisplayLanguageCode = (typeof DisplayLanguageCode)[keyof typeof DisplayLanguageCode];
