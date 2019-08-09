import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation exceeds a resource limit, for example, the maximum number of <code>policy</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall Manager Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
