import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API request.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {}
