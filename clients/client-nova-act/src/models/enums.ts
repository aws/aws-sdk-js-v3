// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ActStatus = {
  FAILED: "FAILED",
  PENDING_CLIENT_ACTION: "PENDING_CLIENT_ACTION",
  PENDING_HUMAN_ACTION: "PENDING_HUMAN_ACTION",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type ActStatus = (typeof ActStatus)[keyof typeof ActStatus];

/**
 * @public
 * @enum
 */
export const InternalServerExceptionReason = {
  INVALID_MODEL_GENERATION: "InvalidModelGeneration",
  TOKEN_LIMIT_EXCEEDED: "RequestTokenLimitExceeded",
} as const;
/**
 * @public
 */
export type InternalServerExceptionReason =
  (typeof InternalServerExceptionReason)[keyof typeof InternalServerExceptionReason];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  GUARDRAIL_INTERVENED: "GuardrailIntervened",
  INVALID_STATUS: "InvalidStatus",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "Ascending",
  DESC: "Descending",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const TraceLocationType = {
  S3: "S3",
} as const;
/**
 * @public
 */
export type TraceLocationType = (typeof TraceLocationType)[keyof typeof TraceLocationType];

/**
 * @public
 * @enum
 */
export const ModelStatus = {
  ACTIVE: "ACTIVE",
  DEPRECATED: "DEPRECATED",
  LEGACY: "LEGACY",
  PREVIEW: "PREVIEW",
} as const;
/**
 * @public
 */
export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus];

/**
 * @public
 * @enum
 */
export const WorkflowDefinitionStatus = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type WorkflowDefinitionStatus = (typeof WorkflowDefinitionStatus)[keyof typeof WorkflowDefinitionStatus];

/**
 * @public
 * @enum
 */
export const WorkflowRunStatus = {
  DELETING: "DELETING",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type WorkflowRunStatus = (typeof WorkflowRunStatus)[keyof typeof WorkflowRunStatus];
