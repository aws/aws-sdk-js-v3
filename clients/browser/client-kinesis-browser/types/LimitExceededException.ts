import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed. </p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
