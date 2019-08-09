import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more parameters provided to the operation are not valid.</p>
 */
export interface InvalidParametersException
  extends __ServiceException__<_InvalidParametersExceptionDetails> {
  name: "InvalidParametersException";
}

export interface _InvalidParametersExceptionDetails {}
