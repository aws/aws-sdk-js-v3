// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AcceptanceType = {
  /**
   * Require explicit click-through acceptance of the
   * Term associated with this Report.
   */
  EXPLICIT: "EXPLICIT",
  /**
   * Do not require explicit click-through acceptance
   * of the Term associated with this Report
   */
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type AcceptanceType = (typeof AcceptanceType)[keyof typeof AcceptanceType];

/**
 * @public
 * @enum
 */
export const NotificationSubscriptionStatus = {
  NOT_SUBSCRIBED: "NOT_SUBSCRIBED",
  SUBSCRIBED: "SUBSCRIBED",
} as const;
/**
 * @public
 */
export type NotificationSubscriptionStatus =
  (typeof NotificationSubscriptionStatus)[keyof typeof NotificationSubscriptionStatus];

/**
 * @public
 * @enum
 */
export const AgreementType = {
  CUSTOM: "CUSTOM",
  DEFAULT: "DEFAULT",
  MODIFIED: "MODIFIED",
} as const;
/**
 * @public
 */
export type AgreementType = (typeof AgreementType)[keyof typeof AgreementType];

/**
 * @public
 * @enum
 */
export const CustomerAgreementState = {
  ACTIVE: "ACTIVE",
  AWS_TERMINATED: "AWS_TERMINATED",
  CUSTOMER_TERMINATED: "CUSTOMER_TERMINATED",
} as const;
/**
 * @public
 */
export type CustomerAgreementState = (typeof CustomerAgreementState)[keyof typeof CustomerAgreementState];

/**
 * @public
 * @enum
 */
export const PublishedState = {
  PUBLISHED: "PUBLISHED",
  UNPUBLISHED: "UNPUBLISHED",
} as const;
/**
 * @public
 */
export type PublishedState = (typeof PublishedState)[keyof typeof PublishedState];

/**
 * @public
 * @enum
 */
export const UploadState = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  FAULT: "FAULT",
  PROCESSING: "PROCESSING",
} as const;
/**
 * @public
 */
export type UploadState = (typeof UploadState)[keyof typeof UploadState];
