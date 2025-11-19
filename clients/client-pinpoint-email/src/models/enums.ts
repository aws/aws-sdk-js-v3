// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const TlsPolicy = {
  OPTIONAL: "OPTIONAL",
  REQUIRE: "REQUIRE",
} as const;
/**
 * @public
 */
export type TlsPolicy = (typeof TlsPolicy)[keyof typeof TlsPolicy];

/**
 * @public
 * @enum
 */
export const DimensionValueSource = {
  EMAIL_HEADER: "EMAIL_HEADER",
  LINK_TAG: "LINK_TAG",
  MESSAGE_TAG: "MESSAGE_TAG",
} as const;
/**
 * @public
 */
export type DimensionValueSource = (typeof DimensionValueSource)[keyof typeof DimensionValueSource];

/**
 * @public
 * @enum
 */
export const EventType = {
  BOUNCE: "BOUNCE",
  CLICK: "CLICK",
  COMPLAINT: "COMPLAINT",
  DELIVERY: "DELIVERY",
  OPEN: "OPEN",
  REJECT: "REJECT",
  RENDERING_FAILURE: "RENDERING_FAILURE",
  SEND: "SEND",
} as const;
/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * @public
 * @enum
 */
export const DeliverabilityTestStatus = {
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type DeliverabilityTestStatus = (typeof DeliverabilityTestStatus)[keyof typeof DeliverabilityTestStatus];

/**
 * @public
 * @enum
 */
export const DkimStatus = {
  FAILED: "FAILED",
  NOT_STARTED: "NOT_STARTED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  TEMPORARY_FAILURE: "TEMPORARY_FAILURE",
} as const;
/**
 * @public
 */
export type DkimStatus = (typeof DkimStatus)[keyof typeof DkimStatus];

/**
 * @public
 * @enum
 */
export const IdentityType = {
  DOMAIN: "DOMAIN",
  EMAIL_ADDRESS: "EMAIL_ADDRESS",
  MANAGED_DOMAIN: "MANAGED_DOMAIN",
} as const;
/**
 * @public
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

/**
 * @public
 * @enum
 */
export const WarmupStatus = {
  DONE: "DONE",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type WarmupStatus = (typeof WarmupStatus)[keyof typeof WarmupStatus];

/**
 * @public
 * @enum
 */
export const DeliverabilityDashboardAccountStatus = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
  PENDING_EXPIRATION: "PENDING_EXPIRATION",
} as const;
/**
 * @public
 */
export type DeliverabilityDashboardAccountStatus =
  (typeof DeliverabilityDashboardAccountStatus)[keyof typeof DeliverabilityDashboardAccountStatus];

/**
 * @public
 * @enum
 */
export const BehaviorOnMxFailure = {
  REJECT_MESSAGE: "REJECT_MESSAGE",
  USE_DEFAULT_VALUE: "USE_DEFAULT_VALUE",
} as const;
/**
 * @public
 */
export type BehaviorOnMxFailure = (typeof BehaviorOnMxFailure)[keyof typeof BehaviorOnMxFailure];

/**
 * @public
 * @enum
 */
export const MailFromDomainStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  TEMPORARY_FAILURE: "TEMPORARY_FAILURE",
} as const;
/**
 * @public
 */
export type MailFromDomainStatus = (typeof MailFromDomainStatus)[keyof typeof MailFromDomainStatus];
