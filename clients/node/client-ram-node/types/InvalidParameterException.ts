import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A parameter is not valid.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
