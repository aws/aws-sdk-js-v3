import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The input was specified in an invalid format.</p>
 */
export interface InvalidInputException
  extends __ServiceException__<_InvalidInputExceptionDetails> {
  name: "InvalidInputException";
}

export interface _InvalidInputExceptionDetails {}
