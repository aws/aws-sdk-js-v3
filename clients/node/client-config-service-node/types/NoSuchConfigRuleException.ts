import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more AWS Config rules in the request are invalid. Verify that the rule names are correct and try again.</p>
 */
export interface NoSuchConfigRuleException
  extends __ServiceException__<_NoSuchConfigRuleExceptionDetails> {
  name: "NoSuchConfigRuleException";
}

export interface _NoSuchConfigRuleExceptionDetails {}
