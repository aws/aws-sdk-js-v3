import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The file cannot be added because it is too large. The maximum file size that can be added using PutFile is 6 MB. For files larger than 6 MB but smaller than 2 GB, add them using a Git client.</p>
 */
export interface FileContentSizeLimitExceededException
  extends __ServiceException__<_FileContentSizeLimitExceededExceptionDetails> {
  name: "FileContentSizeLimitExceededException";
}

export interface _FileContentSizeLimitExceededExceptionDetails {}
