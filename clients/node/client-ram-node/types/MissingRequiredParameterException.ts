import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A required input parameter is missing.</p>
 */
export interface MissingRequiredParameterException
  extends __ServiceException__<_MissingRequiredParameterExceptionDetails> {
  name: "MissingRequiredParameterException";
}

export interface _MissingRequiredParameterExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
