import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The commit cannot be created because no files have been specified as added, updated, or changed (PutFile or DeleteFile) for the commit.</p>
 */
export interface FileEntryRequiredException
  extends __ServiceException__<_FileEntryRequiredExceptionDetails> {
  name: "FileEntryRequiredException";
}

export interface _FileEntryRequiredExceptionDetails {}
