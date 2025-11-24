// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccountType = {
  MANAGEMENT: "management",
  MEMBER: "member",
} as const;
/**
 * @public
 */
export type AccountType = (typeof AccountType)[keyof typeof AccountType];

/**
 * @public
 * @enum
 */
export const NotificationSeverityLevel = {
  ALL: "all",
  HIGH: "high",
  NONE: "none",
} as const;
/**
 * @public
 */
export type NotificationSeverityLevel = (typeof NotificationSeverityLevel)[keyof typeof NotificationSeverityLevel];
