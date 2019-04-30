import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A file cannot be added to the repository because the specified path name has the same name as a file that already exists in this repository. Either provide a different name for the file, or specify a different path for the file.</p>
 */
export interface DirectoryNameConflictsWithFileNameException
  extends __ServiceException__<
    _DirectoryNameConflictsWithFileNameExceptionDetails
  > {
  name: "DirectoryNameConflictsWithFileNameException";
}

export interface _DirectoryNameConflictsWithFileNameExceptionDetails {}
