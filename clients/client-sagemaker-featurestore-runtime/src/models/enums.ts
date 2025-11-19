// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ExpirationTimeResponse = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type ExpirationTimeResponse = (typeof ExpirationTimeResponse)[keyof typeof ExpirationTimeResponse];

/**
 * @public
 * @enum
 */
export const DeletionMode = {
  HARD_DELETE: "HardDelete",
  SOFT_DELETE: "SoftDelete",
} as const;
/**
 * @public
 */
export type DeletionMode = (typeof DeletionMode)[keyof typeof DeletionMode];

/**
 * @public
 * @enum
 */
export const TargetStore = {
  OFFLINE_STORE: "OfflineStore",
  ONLINE_STORE: "OnlineStore",
} as const;
/**
 * @public
 */
export type TargetStore = (typeof TargetStore)[keyof typeof TargetStore];

/**
 * @public
 * @enum
 */
export const TtlDurationUnit = {
  DAYS: "Days",
  HOURS: "Hours",
  MINUTES: "Minutes",
  SECONDS: "Seconds",
  WEEKS: "Weeks",
} as const;
/**
 * @public
 */
export type TtlDurationUnit = (typeof TtlDurationUnit)[keyof typeof TtlDurationUnit];
