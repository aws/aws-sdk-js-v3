import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The quota for the number of policies for this load balancer has been reached.</p>
 */
export interface TooManyPoliciesException
  extends __ServiceException__<_TooManyPoliciesExceptionDetails> {
  name: "TooManyPoliciesException";
}

export interface _TooManyPoliciesExceptionDetails {}
