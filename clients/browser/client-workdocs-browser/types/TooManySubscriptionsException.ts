import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You've reached the limit on the number of subscriptions for the WorkDocs instance.</p>
 */
export interface TooManySubscriptionsException
  extends __ServiceException__<_TooManySubscriptionsExceptionDetails> {
  name: "TooManySubscriptionsException";
}

export interface _TooManySubscriptionsExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
