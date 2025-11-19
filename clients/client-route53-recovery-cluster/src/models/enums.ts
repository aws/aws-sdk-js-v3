// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RoutingControlState = {
  Off: "Off",
  On: "On",
} as const;
/**
 * @public
 */
export type RoutingControlState = (typeof RoutingControlState)[keyof typeof RoutingControlState];

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
