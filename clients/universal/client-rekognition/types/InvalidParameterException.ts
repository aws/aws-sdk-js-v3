import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Input parameter violated a constraint. Validate your parameter before calling the API operation again.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {}
