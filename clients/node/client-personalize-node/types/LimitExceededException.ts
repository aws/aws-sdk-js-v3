import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The limit on the number of requests per second has been exceeded.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
