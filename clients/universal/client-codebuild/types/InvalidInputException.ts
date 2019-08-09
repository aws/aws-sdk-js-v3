import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The input value that was provided is not valid.</p>
 */
export interface InvalidInputException
  extends __ServiceException__<_InvalidInputExceptionDetails> {
  name: "InvalidInputException";
}

export interface _InvalidInputExceptionDetails {}
