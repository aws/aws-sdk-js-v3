import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded the number of parameters for this AWS account. Delete one or more parameters and try again.</p>
 */
export interface ParameterLimitExceeded
  extends __ServiceException__<_ParameterLimitExceededDetails> {
  name: "ParameterLimitExceeded";
}

export interface _ParameterLimitExceededDetails {
  /**
   * _String shape
   */
  message?: string;
}
