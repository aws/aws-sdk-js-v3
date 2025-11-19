// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Capability = {
  CAPABILITY_AUTO_EXPAND: "CAPABILITY_AUTO_EXPAND",
  CAPABILITY_IAM: "CAPABILITY_IAM",
  CAPABILITY_NAMED_IAM: "CAPABILITY_NAMED_IAM",
  CAPABILITY_RESOURCE_POLICY: "CAPABILITY_RESOURCE_POLICY",
} as const;
/**
 * @public
 */
export type Capability = (typeof Capability)[keyof typeof Capability];

/**
 * @public
 * @enum
 */
export const Status = {
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
  PREPARING: "PREPARING",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];
