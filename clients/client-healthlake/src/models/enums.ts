// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AuthorizationStrategy = {
  AWS_AUTH: "AWS_AUTH",
  SMARTV1: "SMART_ON_FHIR_V1",
  SMART_ON_FHIR: "SMART_ON_FHIR",
} as const;
/**
 * @public
 */
export type AuthorizationStrategy = (typeof AuthorizationStrategy)[keyof typeof AuthorizationStrategy];

/**
 * @public
 * @enum
 */
export const CmkType = {
  AO_CMK: "AWS_OWNED_KMS_KEY",
  CM_CMK: "CUSTOMER_MANAGED_KMS_KEY",
} as const;
/**
 * @public
 */
export type CmkType = (typeof CmkType)[keyof typeof CmkType];

/**
 * @public
 * @enum
 */
export const FHIRVersion = {
  R4: "R4",
} as const;
/**
 * @public
 */
export type FHIRVersion = (typeof FHIRVersion)[keyof typeof FHIRVersion];

/**
 * @public
 * @enum
 */
export const PreloadDataType = {
  SYNTHEA: "SYNTHEA",
} as const;
/**
 * @public
 */
export type PreloadDataType = (typeof PreloadDataType)[keyof typeof PreloadDataType];

/**
 * @public
 * @enum
 */
export const DatastoreStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type DatastoreStatus = (typeof DatastoreStatus)[keyof typeof DatastoreStatus];

/**
 * @public
 * @enum
 */
export const ErrorCategory = {
  NON_RETRYABLE_ERROR: "NON_RETRYABLE_ERROR",
  RETRYABLE_ERROR: "RETRYABLE_ERROR",
} as const;
/**
 * @public
 */
export type ErrorCategory = (typeof ErrorCategory)[keyof typeof ErrorCategory];

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCEL_COMPLETED: "CANCEL_COMPLETED",
  CANCEL_FAILED: "CANCEL_FAILED",
  CANCEL_IN_PROGRESS: "CANCEL_IN_PROGRESS",
  CANCEL_SUBMITTED: "CANCEL_SUBMITTED",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_ERRORS: "COMPLETED_WITH_ERRORS",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
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
export const ValidationLevel = {
  MINIMAL: "minimal",
  STRICT: "strict",
  STRUCTURE_ONLY: "structure-only",
} as const;
/**
 * @public
 */
export type ValidationLevel = (typeof ValidationLevel)[keyof typeof ValidationLevel];
