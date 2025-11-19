// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ErrorCode = {
  INTERNAL_SERVICE_EXCEPTION: "InternalServiceException",
  INVALID_PARAMETER_EXCEPTION: "InvalidParameterException",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const GroupByAttribute = {
  REGION: "REGION",
  RESOURCE_TYPE: "RESOURCE_TYPE",
  TARGET_ID: "TARGET_ID",
} as const;
/**
 * @public
 */
export type GroupByAttribute = (typeof GroupByAttribute)[keyof typeof GroupByAttribute];

/**
 * @public
 * @enum
 */
export const TargetIdType = {
  ACCOUNT: "ACCOUNT",
  OU: "OU",
  ROOT: "ROOT",
} as const;
/**
 * @public
 */
export type TargetIdType = (typeof TargetIdType)[keyof typeof TargetIdType];
