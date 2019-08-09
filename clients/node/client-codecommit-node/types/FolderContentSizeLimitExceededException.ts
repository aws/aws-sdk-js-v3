import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The commit cannot be created because at least one of the overall changes in the commit results in a folder whose contents exceed the limit of 6 MB. Either reduce the number and size of your changes, or split the changes across multiple folders.</p>
 */
export interface FolderContentSizeLimitExceededException
  extends __ServiceException__<
    _FolderContentSizeLimitExceededExceptionDetails
  > {
  name: "FolderContentSizeLimitExceededException";
}

export interface _FolderContentSizeLimitExceededExceptionDetails {}
