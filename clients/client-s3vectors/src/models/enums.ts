// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AnalyzerStatus = {
  /**
   * <p>The analyzer is built and serving queries.</p>
   */
  ACTIVE: "ACTIVE",
  /**
   * <p>The analyzer is being backfilled and isn't yet serving queries.</p>
   */
  BUILDING: "BUILDING",
} as const;
/**
 * @public
 */
export type AnalyzerStatus = (typeof AnalyzerStatus)[keyof typeof AnalyzerStatus];

/**
 * @public
 * @enum
 */
export const DataType = {
  FLOAT32: "float32",
} as const;
/**
 * @public
 */
export type DataType = (typeof DataType)[keyof typeof DataType];

/**
 * @public
 * @enum
 */
export const DistanceMetric = {
  COSINE: "cosine",
  EUCLIDEAN: "euclidean",
} as const;
/**
 * @public
 */
export type DistanceMetric = (typeof DistanceMetric)[keyof typeof DistanceMetric];

/**
 * @public
 * @enum
 */
export const SseType = {
  AES256: "AES256",
  AWS_KMS: "aws:kms",
} as const;
/**
 * @public
 */
export type SseType = (typeof SseType)[keyof typeof SseType];

/**
 * @public
 * @enum
 */
export const LanguageCode = {
  DE: "de",
  EN: "en",
  ES: "es",
  FR: "fr",
  IT: "it",
  JA: "ja",
  KO: "ko",
  NL: "nl",
  PT: "pt",
  ZH: "zh",
} as const;
/**
 * @public
 */
export type LanguageCode = (typeof LanguageCode)[keyof typeof LanguageCode];

/**
 * @public
 * @enum
 */
export const IndexMode = {
  CLASSIC: "CLASSIC",
  ENHANCED: "ENHANCED",
} as const;
/**
 * @public
 */
export type IndexMode = (typeof IndexMode)[keyof typeof IndexMode];
