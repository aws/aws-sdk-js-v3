import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The commit cannot be created because a specified file path points to a submodule. Verify that the destination files have valid file paths that do not point to a submodule.</p>
 */
export interface FilePathConflictsWithSubmodulePathException
  extends __ServiceException__<
    _FilePathConflictsWithSubmodulePathExceptionDetails
  > {
  name: "FilePathConflictsWithSubmodulePathException";
}

export interface _FilePathConflictsWithSubmodulePathExceptionDetails {}
