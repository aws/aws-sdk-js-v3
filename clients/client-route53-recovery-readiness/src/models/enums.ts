// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Readiness = {
  NOT_AUTHORIZED: "NOT_AUTHORIZED",
  NOT_READY: "NOT_READY",
  READY: "READY",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type Readiness = (typeof Readiness)[keyof typeof Readiness];
