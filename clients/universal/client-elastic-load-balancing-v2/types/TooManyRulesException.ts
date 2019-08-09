import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You've reached the limit on the number of rules per load balancer.</p>
 */
export interface TooManyRulesException
  extends __ServiceException__<_TooManyRulesExceptionDetails> {
  name: "TooManyRulesException";
}

export interface _TooManyRulesExceptionDetails {}
