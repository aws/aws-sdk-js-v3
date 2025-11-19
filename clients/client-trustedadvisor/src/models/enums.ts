// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RecommendationLifecycleStage = {
  DISMISSED: "dismissed",
  IN_PROGRESS: "in_progress",
  PENDING_RESPONSE: "pending_response",
  RESOLVED: "resolved",
} as const;
/**
 * @public
 */
export type RecommendationLifecycleStage =
  (typeof RecommendationLifecycleStage)[keyof typeof RecommendationLifecycleStage];

/**
 * @public
 * @enum
 */
export const UpdateRecommendationLifecycleStageReasonCode = {
  LOW_PRIORITY: "low_priority",
  NON_CRITICAL_ACCOUNT: "non_critical_account",
  NOT_APPLICABLE: "not_applicable",
  OTHER: "other",
  OTHER_METHODS_AVAILABLE: "other_methods_available",
  TEMPORARY_ACCOUNT: "temporary_account",
  VALID_BUSINESS_CASE: "valid_business_case",
} as const;
/**
 * @public
 */
export type UpdateRecommendationLifecycleStageReasonCode =
  (typeof UpdateRecommendationLifecycleStageReasonCode)[keyof typeof UpdateRecommendationLifecycleStageReasonCode];

/**
 * @public
 * @enum
 */
export const RecommendationPillar = {
  COST_OPTIMIZING: "cost_optimizing",
  FAULT_TOLERANCE: "fault_tolerance",
  OPERATIONAL_EXCELLENCE: "operational_excellence",
  PERFORMANCE: "performance",
  SECURITY: "security",
  SERVICE_LIMITS: "service_limits",
} as const;
/**
 * @public
 */
export type RecommendationPillar = (typeof RecommendationPillar)[keyof typeof RecommendationPillar];

/**
 * @public
 * @enum
 */
export const RecommendationSource = {
  AWS_CONFIG: "aws_config",
  COMPUTE_OPTIMIZER: "compute_optimizer",
  COST_EXPLORER: "cost_explorer",
  LSE: "lse",
  MANUAL: "manual",
  PSE: "pse",
  RDS: "rds",
  RESILIENCE: "resilience",
  RESILIENCE_HUB: "resilience_hub",
  SECURITY_HUB: "security_hub",
  STIR: "stir",
  TA_CHECK: "ta_check",
  WELL_ARCHITECTED: "well_architected",
} as const;
/**
 * @public
 */
export type RecommendationSource = (typeof RecommendationSource)[keyof typeof RecommendationSource];

/**
 * @public
 * @enum
 */
export const ExclusionStatus = {
  EXCLUDED: "excluded",
  INCLUDED: "included",
} as const;
/**
 * @public
 */
export type ExclusionStatus = (typeof ExclusionStatus)[keyof typeof ExclusionStatus];

/**
 * @public
 * @enum
 */
export const RecommendationStatus = {
  ERROR: "error",
  OK: "ok",
  WARNING: "warning",
} as const;
/**
 * @public
 */
export type RecommendationStatus = (typeof RecommendationStatus)[keyof typeof RecommendationStatus];

/**
 * @public
 * @enum
 */
export const RecommendationType = {
  PRIORITY: "priority",
  STANDARD: "standard",
} as const;
/**
 * @public
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

/**
 * @public
 * @enum
 */
export const RecommendationLanguage = {
  BAHASA_INDONESIA: "id",
  BRAZILIAN_PORTUGUESE: "pt_BR",
  CHINESE: "zh",
  ENGLISH: "en",
  FRENCH: "fr",
  GERMAN: "de",
  ITALIAN: "it",
  JAPANESE: "ja",
  KOREAN: "ko",
  SPANISH: "es",
  TRADITIONAL_CHINESE: "zh_TW",
} as const;
/**
 * @public
 */
export type RecommendationLanguage = (typeof RecommendationLanguage)[keyof typeof RecommendationLanguage];

/**
 * @public
 * @enum
 */
export const ResourceStatus = {
  ERROR: "error",
  OK: "ok",
  WARNING: "warning",
} as const;
/**
 * @public
 */
export type ResourceStatus = (typeof ResourceStatus)[keyof typeof ResourceStatus];

/**
 * @public
 * @enum
 */
export const UpdateRecommendationLifecycleStage = {
  DISMISSED: "dismissed",
  IN_PROGRESS: "in_progress",
  PENDING_RESPONSE: "pending_response",
  RESOLVED: "resolved",
} as const;
/**
 * @public
 */
export type UpdateRecommendationLifecycleStage =
  (typeof UpdateRecommendationLifecycleStage)[keyof typeof UpdateRecommendationLifecycleStage];
