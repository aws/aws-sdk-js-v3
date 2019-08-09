import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the provided receipt rule does not exist.</p>
 */
export interface RuleDoesNotExistException
  extends __ServiceException__<_RuleDoesNotExistExceptionDetails> {
  name: "RuleDoesNotExistException";
}

export interface _RuleDoesNotExistExceptionDetails {
  /**
   * <p>Indicates that the named receipt rule does not exist.</p>
   */
  Name?: string;
}
