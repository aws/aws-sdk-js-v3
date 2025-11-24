// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const TypeHint = {
  DATE: "DATE",
  DECIMAL: "DECIMAL",
  JSON: "JSON",
  TIME: "TIME",
  TIMESTAMP: "TIMESTAMP",
  UUID: "UUID",
} as const;
/**
 * @public
 */
export type TypeHint = (typeof TypeHint)[keyof typeof TypeHint];

/**
 * @public
 * @enum
 */
export const DecimalReturnType = {
  DOUBLE_OR_LONG: "DOUBLE_OR_LONG",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type DecimalReturnType = (typeof DecimalReturnType)[keyof typeof DecimalReturnType];

/**
 * @public
 * @enum
 */
export const RecordsFormatType = {
  JSON: "JSON",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type RecordsFormatType = (typeof RecordsFormatType)[keyof typeof RecordsFormatType];

/**
 * @public
 * @enum
 */
export const LongReturnType = {
  LONG: "LONG",
  STRING: "STRING",
} as const;
/**
 * @public
 */
export type LongReturnType = (typeof LongReturnType)[keyof typeof LongReturnType];
