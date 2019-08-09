import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Occurs when any of the rule parameter keys or values are invalid.</p>
 */
export interface InvalidRuleException
  extends __ServiceException__<_InvalidRuleExceptionDetails> {
  name: "InvalidRuleException";
}

export interface _InvalidRuleExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
