// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const NetworkType = {
  DUALSTACK: "DUALSTACK",
  IPV4: "IPV4",
} as const;
/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * @public
 * @enum
 */
export const Status = {
  DEPLOYED: "DEPLOYED",
  PENDING: "PENDING",
  PENDING_DELETION: "PENDING_DELETION",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const RuleType = {
  AND: "AND",
  ATLEAST: "ATLEAST",
  OR: "OR",
} as const;
/**
 * @public
 */
export type RuleType = (typeof RuleType)[keyof typeof RuleType];
