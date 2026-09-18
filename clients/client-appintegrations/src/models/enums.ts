// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ContactHandlingScope = {
  CROSS_CONTACTS: "CROSS_CONTACTS",
  PER_CONTACT: "PER_CONTACT",
} as const;
/**
 * @public
 */
export type ContactHandlingScope = (typeof ContactHandlingScope)[keyof typeof ContactHandlingScope];

/**
 * @public
 * @enum
 */
export const ApplicationType = {
  A2A_SERVER: "A2A_SERVER",
  MCP_SERVER: "MCP_SERVER",
  SERVICE: "SERVICE",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType];

/**
 * @public
 * @enum
 */
export const AuthType = {
  API_KEY: "API_KEY",
} as const;
/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * @public
 * @enum
 */
export const ExecutionMode = {
  ON_DEMAND: "ON_DEMAND",
  SCHEDULED: "SCHEDULED",
} as const;
/**
 * @public
 */
export type ExecutionMode = (typeof ExecutionMode)[keyof typeof ExecutionMode];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];
