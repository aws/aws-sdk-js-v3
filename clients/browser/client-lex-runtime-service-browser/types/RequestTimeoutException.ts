import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The input speech is too long.</p>
 */
export interface RequestTimeoutException
  extends __ServiceException__<_RequestTimeoutExceptionDetails> {
  name: "RequestTimeoutException";
}

export interface _RequestTimeoutExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
