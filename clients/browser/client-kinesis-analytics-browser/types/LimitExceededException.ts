import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exceeded the number of applications allowed.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * <p/>
   */
  message?: string;
}
