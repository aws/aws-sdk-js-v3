import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {
  /**
   * _Message shape
   */
  message?: string;
}
