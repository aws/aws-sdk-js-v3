import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A parameter version can have a maximum of ten labels.</p>
 */
export interface ParameterVersionLabelLimitExceeded
  extends __ServiceException__<_ParameterVersionLabelLimitExceededDetails> {
  name: "ParameterVersionLabelLimitExceeded";
}

export interface _ParameterVersionLabelLimitExceededDetails {
  /**
   * _String shape
   */
  message?: string;
}
