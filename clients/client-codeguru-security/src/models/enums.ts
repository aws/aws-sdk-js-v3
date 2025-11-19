// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AnalysisType = {
  ALL: "All",
  SECURITY: "Security",
} as const;
/**
 * @public
 */
export type AnalysisType = (typeof AnalysisType)[keyof typeof AnalysisType];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  DUPLICATE_IDENTIFIER: "DUPLICATE_IDENTIFIER",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_FINDING_ID: "INVALID_FINDING_ID",
  INVALID_SCAN_NAME: "INVALID_SCAN_NAME",
  ITEM_DOES_NOT_EXIST: "ITEM_DOES_NOT_EXIST",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const Severity = {
  CRITICAL: "Critical",
  HIGH: "High",
  INFO: "Info",
  LOW: "Low",
  MEDIUM: "Medium",
} as const;
/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

/**
 * @public
 * @enum
 */
export const Status = {
  ALL: "All",
  CLOSED: "Closed",
  OPEN: "Open",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  LAMBDA_CODE_SHA_MISMATCH: "lambdaCodeShaMisMatch",
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
export const ScanType = {
  EXPRESS: "Express",
  STANDARD: "Standard",
} as const;
/**
 * @public
 */
export type ScanType = (typeof ScanType)[keyof typeof ScanType];

/**
 * @public
 * @enum
 */
export const ScanState = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  SUCCESSFUL: "Successful",
} as const;
/**
 * @public
 */
export type ScanState = (typeof ScanState)[keyof typeof ScanState];
