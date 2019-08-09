import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified value for MaxResults is not valid.</p>
 */
export interface InvalidMaxResultsException
  extends __ServiceException__<_InvalidMaxResultsExceptionDetails> {
  name: "InvalidMaxResultsException";
}

export interface _InvalidMaxResultsExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
