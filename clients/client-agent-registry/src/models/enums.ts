// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const BatchGetDiscoverableRegistryRecordErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
} as const;
/**
 * @public
 */
export type BatchGetDiscoverableRegistryRecordErrorCode =
  (typeof BatchGetDiscoverableRegistryRecordErrorCode)[keyof typeof BatchGetDiscoverableRegistryRecordErrorCode];

/**
 * @public
 * @enum
 */
export const RecordType = {
  AGENT: "AGENT",
  CUSTOM: "CUSTOM",
  GATEWAY: "GATEWAY",
  MCP: "MCP",
  SKILL: "SKILL",
} as const;
/**
 * @public
 */
export type RecordType = (typeof RecordType)[keyof typeof RecordType];

/**
 * @public
 * @enum
 */
export const RegistryRecordStatus = {
  APPROVED: "APPROVED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DEPRECATED: "DEPRECATED",
  DRAFT: "DRAFT",
  PENDING_APPROVAL: "PENDING_APPROVAL",
  REJECTED: "REJECTED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type RegistryRecordStatus = (typeof RegistryRecordStatus)[keyof typeof RegistryRecordStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CannotParse",
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  IDEMPOTENT_PARAMETER_MISMATCH_EXCEPTION: "IdempotentParameterMismatchException",
  RESOURCE_CONFLICT: "ResourceConflict",
  ROOT_EVENT_IN_OTHER_SESSION: "EventInOtherSession",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const RegistryRecordFilterName = {
  DESCRIPTOR_TYPE: "descriptorType",
  /**
   * <p> Filters records by record type, such as <code>MCP</code> or <code>AGENT</code>.</p>
   */
  RECORD_TYPE: "recordType",
} as const;
/**
 * @public
 */
export type RegistryRecordFilterName = (typeof RegistryRecordFilterName)[keyof typeof RegistryRecordFilterName];
