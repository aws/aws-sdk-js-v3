// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const EmailContactStatus = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const;
/**
 * @public
 */
export type EmailContactStatus = (typeof EmailContactStatus)[keyof typeof EmailContactStatus];
