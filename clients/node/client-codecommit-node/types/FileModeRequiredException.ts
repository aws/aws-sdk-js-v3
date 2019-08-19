import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The commit cannot be created because a file mode is required to update mode permissions for an existing file, but no file mode has been specified.</p>
 */
export interface FileModeRequiredException
  extends __ServiceException__<_FileModeRequiredExceptionDetails> {
  name: "FileModeRequiredException";
}

export interface _FileModeRequiredExceptionDetails {}
