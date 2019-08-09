import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A required parameter is missing.</p>
 */
export interface MissingRequiredParameterException
  extends __ServiceException__<_MissingRequiredParameterExceptionDetails> {
  name: "MissingRequiredParameterException";
}

export interface _MissingRequiredParameterExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
