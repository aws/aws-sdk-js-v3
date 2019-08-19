import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The command caused an internal limit to be exceeded.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * __errorMessage shape
   */
  message?: string;
}
