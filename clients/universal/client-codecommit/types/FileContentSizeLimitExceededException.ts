import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The file cannot be added because it is too large. The maximum file size that can be added is 6 MB, and the combined file content change size is 7 MB. Consider making these changes using a Git client.</p>
 */
export interface FileContentSizeLimitExceededException
  extends __ServiceException__<_FileContentSizeLimitExceededExceptionDetails> {
  name: "FileContentSizeLimitExceededException";
}

export interface _FileContentSizeLimitExceededExceptionDetails {}
