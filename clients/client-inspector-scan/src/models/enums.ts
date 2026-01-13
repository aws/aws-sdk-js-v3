// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const InternalServerExceptionReason = {
  FAILED_TO_GENERATE_SBOM: "FAILED_TO_GENERATE_SBOM",
  OTHER: "OTHER",
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
export const OutputFormat = {
  CYCLONE_DX_1_5: "CYCLONE_DX_1_5",
  INSPECTOR: "INSPECTOR",
  INSPECTOR_ALT: "INSPECTOR_ALT",
} as const;
/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
  UNSUPPORTED_SBOM_TYPE: "UNSUPPORTED_SBOM_TYPE",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];
