import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified value for the number of conflict files to return is not valid.</p>
 */
export interface InvalidMaxConflictFilesException
  extends __ServiceException__<_InvalidMaxConflictFilesExceptionDetails> {
  name: "InvalidMaxConflictFilesException";
}

export interface _InvalidMaxConflictFilesExceptionDetails {}
