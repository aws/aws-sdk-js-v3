import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown if the limit specified is invalid.</p>
 */
export interface InvalidMaxResultsException
  extends __ServiceException__<_InvalidMaxResultsExceptionDetails> {
  name: "InvalidMaxResultsException";
}

export interface _InvalidMaxResultsExceptionDetails {}
