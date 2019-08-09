import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You are trying to update a subscription that has not yet completed the 1-year commitment. You can change the <code>AutoRenew</code> parameter during the last 30 days of your subscription. This exception indicates that you are attempting to change <code>AutoRenew</code> prior to that period.</p>
 */
export interface LockedSubscriptionException
  extends __ServiceException__<_LockedSubscriptionExceptionDetails> {
  name: "LockedSubscriptionException";
}

export interface _LockedSubscriptionExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
