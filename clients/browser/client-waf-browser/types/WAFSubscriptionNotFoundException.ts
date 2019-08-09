import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified subscription does not exist.</p>
 */
export interface WAFSubscriptionNotFoundException
  extends __ServiceException__<_WAFSubscriptionNotFoundExceptionDetails> {
  name: "WAFSubscriptionNotFoundException";
}

export interface _WAFSubscriptionNotFoundExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
