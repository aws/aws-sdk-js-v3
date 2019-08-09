import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You specified more than the maximum number of allowed policies for the parameter. The maximum is 10.</p>
 */
export interface PoliciesLimitExceededException
  extends __ServiceException__<_PoliciesLimitExceededExceptionDetails> {
  name: "PoliciesLimitExceededException";
}

export interface _PoliciesLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
