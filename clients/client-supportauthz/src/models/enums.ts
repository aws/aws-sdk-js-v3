// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const SupportPermitStatus = {
  /**
   * <p>The permit is active and can be used by the support operator.</p>
   */
  ACTIVE: "ACTIVE",
  /**
   * <p>The permit is being deleted.</p>
   */
  DELETING: "DELETING",
  /**
   * <p>The permit is inactive and cannot be used.</p>
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
   * <p>The request has been accepted.</p>
   */
  ACCEPTED: "ACCEPTED",
  /**
   * <p>The request has been cancelled.</p>
   */
  CANCELLED: "CANCELLED",
  /**
   * <p>The request is pending customer review.</p>
   */
  PENDING: "PENDING",
  /**
   * <p>The request has been rejected.</p>
   */
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type SupportPermitRequestStatus = (typeof SupportPermitRequestStatus)[keyof typeof SupportPermitRequestStatus];
