import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of specified files to change as part of this commit exceeds the maximum number of files that can be changed in a single commit. Consider using a Git client for these changes.</p>
 */
export interface MaximumFileEntriesExceededException
  extends __ServiceException__<_MaximumFileEntriesExceededExceptionDetails> {
  name: "MaximumFileEntriesExceededException";
}

export interface _MaximumFileEntriesExceededExceptionDetails {}
