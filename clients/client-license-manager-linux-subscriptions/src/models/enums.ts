// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const Operator = {
  /**
   * Contains operator
   */
  CONTAINS: "Contains",
  /**
   * Equal operator
   */
  EQUAL: "Equal",
  /**
   * Not equal operator
   */
  NOT_EQUAL: "NotEqual",
} as const;
/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * @public
 * @enum
 */
export const SubscriptionProviderSource = {
  /**
   * RedHat subscription provider namespace
   */
  RedHat: "RedHat",
} as const;
/**
 * @public
 */
export type SubscriptionProviderSource = (typeof SubscriptionProviderSource)[keyof typeof SubscriptionProviderSource];

/**
 * @public
 * @enum
 */
export const SubscriptionProviderStatus = {
  /**
   * ACTIVE status
   */
  ACTIVE: "ACTIVE",
  /**
   * INVALID status
   */
  INVALID: "INVALID",
  /**
   * PENDING status
   */
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type SubscriptionProviderStatus = (typeof SubscriptionProviderStatus)[keyof typeof SubscriptionProviderStatus];

/**
 * @public
 * @enum
 */
export const LinuxSubscriptionsDiscovery = {
  /**
   * Disabled LinuxSubscriptionsDiscovery
   */
  Disabled: "Disabled",
  /**
   * Enabled LinuxSubscriptionsDiscovery
   */
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type LinuxSubscriptionsDiscovery =
  (typeof LinuxSubscriptionsDiscovery)[keyof typeof LinuxSubscriptionsDiscovery];

/**
 * @public
 * @enum
 */
export const OrganizationIntegration = {
  /**
   * Disabled OrganizationIntegration
   */
  Disabled: "Disabled",
  /**
   * Enabled OrganizationIntegration
   */
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type OrganizationIntegration = (typeof OrganizationIntegration)[keyof typeof OrganizationIntegration];

/**
 * @public
 * @enum
 */
export const Status = {
  /**
   * Completed status
   */
  Completed: "Completed",
  /**
   * Failed status
   */
  Failed: "Failed",
  /**
   * InProgress status
   */
  InProgress: "InProgress",
  /**
   * Successful status
   */
  Successful: "Successful",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];
