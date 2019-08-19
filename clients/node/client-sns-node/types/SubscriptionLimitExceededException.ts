import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the customer already owns the maximum allowed number of subscriptions.</p>
 */
export interface SubscriptionLimitExceededException
  extends __ServiceException__<_SubscriptionLimitExceededExceptionDetails> {
  name: "SubscriptionLimitExceededException";
}

export interface _SubscriptionLimitExceededExceptionDetails {
  /**
   * __string shape
   */
  message?: string;
}
