// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const VlanState = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type VlanState = (typeof VlanState)[keyof typeof VlanState];

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
export const _InstanceType = {
  I4I_METAL: "i4i.metal",
} as const;
/**
 * @public
 */
export type _InstanceType = (typeof _InstanceType)[keyof typeof _InstanceType];

/**
 * @public
 * @enum
 */
export const VcfVersion = {
  VCF_5_2_1: "VCF-5.2.1",
} as const;
/**
 * @public
 */
export type VcfVersion = (typeof VcfVersion)[keyof typeof VcfVersion];

/**
 * @public
 * @enum
 */
export const CheckResult = {
  FAILED: "FAILED",
  PASSED: "PASSED",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type CheckResult = (typeof CheckResult)[keyof typeof CheckResult];

/**
 * @public
 * @enum
 */
export const CheckType = {
  HOST_COUNT: "HOST_COUNT",
  KEY_COVERAGE: "KEY_COVERAGE",
  KEY_REUSE: "KEY_REUSE",
  REACHABILITY: "REACHABILITY",
} as const;
/**
 * @public
 */
export type CheckType = (typeof CheckType)[keyof typeof CheckType];

/**
 * @public
 * @enum
 */
export const EnvironmentState = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type EnvironmentState = (typeof EnvironmentState)[keyof typeof EnvironmentState];

/**
 * @public
 * @enum
 */
export const HostState = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type HostState = (typeof HostState)[keyof typeof HostState];
