// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EvaluatedEffect = {
  ALLOW: "ALLOW",
  EXPLICIT_DENY: "EXPLICIT_DENY",
  IMPLICIT_DENY: "IMPLICIT_DENY",
} as const;
/**
 * @public
 */
export type EvaluatedEffect = (typeof EvaluatedEffect)[keyof typeof EvaluatedEffect];

/**
 * @public
 * @enum
 */
export const StatementEffect = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type StatementEffect = (typeof StatementEffect)[keyof typeof StatementEffect];

/**
 * @public
 * @enum
 */
export const PolicyType = {
  IDENTITY_BASED_POLICY: "IDENTITY_BASED_POLICY",
  PERMISSIONS_BOUNDARY: "PERMISSIONS_BOUNDARY",
  RESOURCE_BASED_POLICY: "RESOURCE_BASED_POLICY",
  RESOURCE_CONTROL_POLICY: "RESOURCE_CONTROL_POLICY",
  SERVICE_CONTROL_POLICY: "SERVICE_CONTROL_POLICY",
  SESSION_POLICY: "SESSION_POLICY",
  VPC_ENDPOINT_POLICY: "VPC_ENDPOINT_POLICY",
} as const;
/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];
