import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The commit cannot be created because one or more files specified in the commit reference both a file and a folder.</p>
 */
export interface PutFileEntryConflictException
  extends __ServiceException__<_PutFileEntryConflictExceptionDetails> {
  name: "PutFileEntryConflictException";
}

export interface _PutFileEntryConflictExceptionDetails {}
