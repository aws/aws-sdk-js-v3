import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
