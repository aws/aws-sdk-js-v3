import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the combination of parameters provided is not valid.</p>
 */
export interface InvalidParameterCombinationException
  extends __ServiceException__<_InvalidParameterCombinationExceptionDetails> {
  name: "InvalidParameterCombinationException";
}

export interface _InvalidParameterCombinationExceptionDetails {}
