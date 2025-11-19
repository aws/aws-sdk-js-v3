// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type AccessStatus = (typeof AccessStatus)[keyof typeof AccessStatus];
