// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BatchInferenceJobMode = {
  BATCH_INFERENCE: "BATCH_INFERENCE",
  THEME_GENERATION: "THEME_GENERATION",
} as const;
/**
 * @public
 */
export type BatchInferenceJobMode = (typeof BatchInferenceJobMode)[keyof typeof BatchInferenceJobMode];

/**
 * @public
 * @enum
 */
export const IngestionMode = {
  ALL: "ALL",
  BULK: "BULK",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type IngestionMode = (typeof IngestionMode)[keyof typeof IngestionMode];

/**
 * @public
 * @enum
 */
export const Domain = {
  ECOMMERCE: "ECOMMERCE",
  VIDEO_ON_DEMAND: "VIDEO_ON_DEMAND",
} as const;
/**
 * @public
 */
export type Domain = (typeof Domain)[keyof typeof Domain];

/**
 * @public
 * @enum
 */
export const ImportMode = {
  FULL: "FULL",
  INCREMENTAL: "INCREMENTAL",
} as const;
/**
 * @public
 */
export type ImportMode = (typeof ImportMode)[keyof typeof ImportMode];

/**
 * @public
 * @enum
 */
export const ObjectiveSensitivity = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type ObjectiveSensitivity = (typeof ObjectiveSensitivity)[keyof typeof ObjectiveSensitivity];

/**
 * @public
 * @enum
 */
export const TrainingMode = {
  AUTOTRAIN: "AUTOTRAIN",
  FULL: "FULL",
  UPDATE: "UPDATE",
} as const;
/**
 * @public
 */
export type TrainingMode = (typeof TrainingMode)[keyof typeof TrainingMode];

/**
 * @public
 * @enum
 */
export const TrainingType = {
  AUTOMATIC: "AUTOMATIC",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type TrainingType = (typeof TrainingType)[keyof typeof TrainingType];

/**
 * @public
 * @enum
 */
export const RecipeProvider = {
  SERVICE: "SERVICE",
} as const;
/**
 * @public
 */
export type RecipeProvider = (typeof RecipeProvider)[keyof typeof RecipeProvider];
