import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request failed because a provided policy could not be successfully evaluated. An additional detailed message indicates the source of the failure.</p>
 */
export interface PolicyEvaluationException
  extends __ServiceException__<_PolicyEvaluationExceptionDetails> {
  name: "PolicyEvaluationException";
}

export interface _PolicyEvaluationExceptionDetails {
  /**
   * _policyEvaluationErrorMessage shape
   */
  message?: string;
}
