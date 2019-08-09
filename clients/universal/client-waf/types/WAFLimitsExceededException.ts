import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation exceeds a resource limit, for example, the maximum number of <code>WebACL</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/limits.html">Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
 */
export interface WAFLimitsExceededException
  extends __ServiceException__<_WAFLimitsExceededExceptionDetails> {
  name: "WAFLimitsExceededException";
}

export interface _WAFLimitsExceededExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
