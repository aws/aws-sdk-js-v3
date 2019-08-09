import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The input provided was not valid.</p>
 */
export interface InvalidInputException
  extends __ServiceException__<_InvalidInputExceptionDetails> {
  name: "InvalidInputException";
}

export interface _InvalidInputExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
