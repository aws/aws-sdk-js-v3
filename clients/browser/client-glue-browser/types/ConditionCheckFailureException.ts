import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A specified condition was not satisfied.</p>
 */
export interface ConditionCheckFailureException
  extends __ServiceException__<_ConditionCheckFailureExceptionDetails> {
  name: "ConditionCheckFailureException";
}

export interface _ConditionCheckFailureExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
