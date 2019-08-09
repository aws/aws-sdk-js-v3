import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A specified parameter is not valid.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
