import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your account.</p>
 */
export interface ThrottledException
  extends __ServiceException__<_ThrottledExceptionDetails> {
  name: "ThrottledException";
}

export interface _ThrottledExceptionDetails {
  /**
   * <p>Throttled request.</p>
   */
  message?: string;
}
