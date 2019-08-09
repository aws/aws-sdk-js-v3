import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified rule does not exist.</p>
 */
export interface RuleNotFoundException
  extends __ServiceException__<_RuleNotFoundExceptionDetails> {
  name: "RuleNotFoundException";
}

export interface _RuleNotFoundExceptionDetails {}
