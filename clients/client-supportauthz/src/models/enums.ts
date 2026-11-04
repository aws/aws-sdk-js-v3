// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const SupportPermitStatus = {
  /**
   * The permit is active and can be used by the support operator.
   */
  ACTIVE: "ACTIVE",
  /**
   * The permit is being deleted.
   */
  DELETING: "DELETING",
  /**
   * The permit is inactive and cannot be used.
   */
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type SupportPermitStatus = (typeof SupportPermitStatus)[keyof typeof SupportPermitStatus];

/**
 * @public
 * @enum
 */
export const SupportPermitRequestStatus = {
  /**
   * The request has been accepted.
   */
  ACCEPTED: "ACCEPTED",
  /**
   * The request has been cancelled.
   */
  CANCELLED: "CANCELLED",
  /**
   * The request is pending customer review.
   */
  PENDING: "PENDING",
  /**
   * The request has been rejected.
   */
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type SupportPermitRequestStatus = (typeof SupportPermitRequestStatus)[keyof typeof SupportPermitRequestStatus];
