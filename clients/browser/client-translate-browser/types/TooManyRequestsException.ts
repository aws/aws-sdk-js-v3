import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> You have made too many requests within a short period of time. Wait for a short time and then try your request again.</p>
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
