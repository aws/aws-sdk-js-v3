import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more of the specified parameters are invalid. Verify that your parameters are valid and try again.</p>
 */
export interface InvalidParameterValueException
  extends __ServiceException__<_InvalidParameterValueExceptionDetails> {
  name: "InvalidParameterValueException";
}

export interface _InvalidParameterValueExceptionDetails {}
