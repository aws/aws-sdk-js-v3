import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You are performing an action that would put you beyond your account's limits.</p>
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
