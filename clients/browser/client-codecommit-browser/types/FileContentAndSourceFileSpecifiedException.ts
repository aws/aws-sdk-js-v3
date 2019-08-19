import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The commit cannot be created because both a source file and file content have been specified for the same file. You cannot provide both. Either specify a source file, or provide the file content directly.</p>
 */
export interface FileContentAndSourceFileSpecifiedException
  extends __ServiceException__<
    _FileContentAndSourceFileSpecifiedExceptionDetails
  > {
  name: "FileContentAndSourceFileSpecifiedException";
}

export interface _FileContentAndSourceFileSpecifiedExceptionDetails {}
