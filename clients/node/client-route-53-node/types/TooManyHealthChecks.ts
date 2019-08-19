import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This health check can't be created because the current account has reached the limit on the number of active health checks.</p> <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>For information about how to get the current limit for an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p> <p>You have reached the maximum number of active health checks for an AWS account. To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a case</a> with the AWS Support Center.</p>
 */
export interface TooManyHealthChecks
  extends __ServiceException__<_TooManyHealthChecksDetails> {
  name: "TooManyHealthChecks";
}

export interface _TooManyHealthChecksDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
