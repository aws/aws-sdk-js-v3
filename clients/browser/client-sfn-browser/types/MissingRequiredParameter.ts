import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Request is missing a required parameter. This error occurs if both <code>definition</code> and <code>roleArn</code> are not specified.</p>
 */
export interface MissingRequiredParameter
  extends __ServiceException__<_MissingRequiredParameterDetails> {
  name: "MissingRequiredParameter";
}

export interface _MissingRequiredParameterDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
