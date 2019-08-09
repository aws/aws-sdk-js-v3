import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the provided receipt rule set does not exist.</p>
 */
export interface RuleSetDoesNotExistException
  extends __ServiceException__<_RuleSetDoesNotExistExceptionDetails> {
  name: "RuleSetDoesNotExistException";
}

export interface _RuleSetDoesNotExistExceptionDetails {
  /**
   * <p>Indicates that the named receipt rule set does not exist.</p>
   */
  Name?: string;
}
