// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ClientVersion = {
  FIVE_ONE: "5.1",
  FIVE_THREE: "5.3",
} as const;
/**
 * @public
 */
export type ClientVersion = (typeof ClientVersion)[keyof typeof ClientVersion];

/**
 * @public
 * @enum
 */
export const SubscriptionType = {
  PRODUCTION: "PRODUCTION",
} as const;
/**
 * @public
 */
export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType];

/**
 * @public
 * @enum
 */
export const CloudHsmObjectState = {
  DEGRADED: "DEGRADED",
  READY: "READY",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type CloudHsmObjectState = (typeof CloudHsmObjectState)[keyof typeof CloudHsmObjectState];

/**
 * @public
 * @enum
 */
export const HsmStatus = {
  DEGRADED: "DEGRADED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  SUSPENDED: "SUSPENDED",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type HsmStatus = (typeof HsmStatus)[keyof typeof HsmStatus];
