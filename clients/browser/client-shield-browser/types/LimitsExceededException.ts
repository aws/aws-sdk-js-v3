import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception that indicates that the operation would exceed a limit.</p> <p> <code>Type</code> is the type of limit that would be exceeded.</p> <p> <code>Limit</code> is the threshold that would be exceeded.</p>
 */
export interface LimitsExceededException
  extends __ServiceException__<_LimitsExceededExceptionDetails> {
  name: "LimitsExceededException";
}

export interface _LimitsExceededExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;

  /**
   * _LimitType shape
   */
  Type?: string;

  /**
   * _LimitNumber shape
   */
  Limit?: number;
}
