// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AuthType = {
  API_KEY: "apiKey",
  OAUTH2: "oauth2",
} as const;
/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * @public
 * @enum
 */
export const Persona = {
  ADMIN: "admin",
  ENDUSER: "endUser",
} as const;
/**
 * @public
 */
export type Persona = (typeof Persona)[keyof typeof Persona];

/**
 * @public
 * @enum
 */
export const AppAuthorizationStatus = {
  CONNECTED: "Connected",
  CONNECTION_VALIDATION_FAILED: "ConnectionValidationFailed",
  PENDING_CONNECT: "PendingConnect",
  TOKEN_AUTO_ROTATION_FAILED: "TokenAutoRotationFailed",
} as const;
/**
 * @public
 */
export type AppAuthorizationStatus = (typeof AppAuthorizationStatus)[keyof typeof AppAuthorizationStatus];

/**
 * @public
 * @enum
 */
export const Format = {
  JSON: "json",
  PARQUET: "parquet",
} as const;
/**
 * @public
 */
export type Format = (typeof Format)[keyof typeof Format];

/**
 * @public
 * @enum
 */
export const Schema = {
  OCSF: "ocsf",
  RAW: "raw",
} as const;
/**
 * @public
 */
export type Schema = (typeof Schema)[keyof typeof Schema];

/**
 * @public
 * @enum
 */
export const ResultStatus = {
  COMPLETED: "COMPLETED",
  EXPIRED: "EXPIRED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ResultStatus = (typeof ResultStatus)[keyof typeof ResultStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const IngestionType = {
  AUDIT_LOG: "auditLog",
} as const;
/**
 * @public
 */
export type IngestionType = (typeof IngestionType)[keyof typeof IngestionType];

/**
 * @public
 * @enum
 */
export const IngestionState = {
  DISABLED: "disabled",
  ENABLED: "enabled",
} as const;
/**
 * @public
 */
export type IngestionState = (typeof IngestionState)[keyof typeof IngestionState];

/**
 * @public
 * @enum
 */
export const IngestionDestinationStatus = {
  ACTIVE: "Active",
  FAILED: "Failed",
} as const;
/**
 * @public
 */
export type IngestionDestinationStatus = (typeof IngestionDestinationStatus)[keyof typeof IngestionDestinationStatus];
