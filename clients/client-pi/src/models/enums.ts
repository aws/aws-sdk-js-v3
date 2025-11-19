// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AcceptLanguage = {
  EN_US: "EN_US",
} as const;
/**
 * @public
 */
export type AcceptLanguage = (typeof AcceptLanguage)[keyof typeof AcceptLanguage];

/**
 * @public
 * @enum
 */
export const ContextType = {
  CAUSAL: "CAUSAL",
  CONTEXTUAL: "CONTEXTUAL",
} as const;
/**
 * @public
 */
export type ContextType = (typeof ContextType)[keyof typeof ContextType];

/**
 * @public
 * @enum
 */
export const Severity = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;
/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

/**
 * @public
 * @enum
 */
export const ServiceType = {
  DOCDB: "DOCDB",
  RDS: "RDS",
} as const;
/**
 * @public
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

/**
 * @public
 * @enum
 */
export const AnalysisStatus = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type AnalysisStatus = (typeof AnalysisStatus)[keyof typeof AnalysisStatus];

/**
 * @public
 * @enum
 */
export const FineGrainedAction = {
  DESCRIBE_DIMENSION_KEYS: "DescribeDimensionKeys",
  GET_DIMENSION_KEY_DETAILS: "GetDimensionKeyDetails",
  GET_RESOURCE_METRICS: "GetResourceMetrics",
} as const;
/**
 * @public
 */
export type FineGrainedAction = (typeof FineGrainedAction)[keyof typeof FineGrainedAction];

/**
 * @public
 * @enum
 */
export const DetailStatus = {
  AVAILABLE: "AVAILABLE",
  PROCESSING: "PROCESSING",
  UNAVAILABLE: "UNAVAILABLE",
} as const;
/**
 * @public
 */
export type DetailStatus = (typeof DetailStatus)[keyof typeof DetailStatus];

/**
 * @public
 * @enum
 */
export const FeatureStatus = {
  DISABLED: "DISABLED",
  DISABLED_PENDING_REBOOT: "DISABLED_PENDING_REBOOT",
  ENABLED: "ENABLED",
  ENABLED_PENDING_REBOOT: "ENABLED_PENDING_REBOOT",
  UNKNOWN: "UNKNOWN",
  UNSUPPORTED: "UNSUPPORTED",
} as const;
/**
 * @public
 */
export type FeatureStatus = (typeof FeatureStatus)[keyof typeof FeatureStatus];

/**
 * @public
 * @enum
 */
export const TextFormat = {
  MARKDOWN: "MARKDOWN",
  PLAIN_TEXT: "PLAIN_TEXT",
} as const;
/**
 * @public
 */
export type TextFormat = (typeof TextFormat)[keyof typeof TextFormat];

/**
 * @public
 * @enum
 */
export const PeriodAlignment = {
  END_TIME: "END_TIME",
  START_TIME: "START_TIME",
} as const;
/**
 * @public
 */
export type PeriodAlignment = (typeof PeriodAlignment)[keyof typeof PeriodAlignment];
