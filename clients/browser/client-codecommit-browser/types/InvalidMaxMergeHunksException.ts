import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified value for the number of merge hunks to return is not valid.</p>
 */
export interface InvalidMaxMergeHunksException
  extends __ServiceException__<_InvalidMaxMergeHunksExceptionDetails> {
  name: "InvalidMaxMergeHunksException";
}

export interface _InvalidMaxMergeHunksExceptionDetails {}
