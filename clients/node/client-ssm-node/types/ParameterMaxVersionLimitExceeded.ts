import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The parameter exceeded the maximum number of allowed versions.</p>
 */
export interface ParameterMaxVersionLimitExceeded
  extends __ServiceException__<_ParameterMaxVersionLimitExceededDetails> {
  name: "ParameterMaxVersionLimitExceeded";
}

export interface _ParameterMaxVersionLimitExceededDetails {
  /**
   * _String shape
   */
  message?: string;
}
