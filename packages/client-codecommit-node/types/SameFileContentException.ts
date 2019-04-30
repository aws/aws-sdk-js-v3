import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The file was not added or updated because the content of the file is exactly the same as the content of that file in the repository and branch that you specified.</p>
 */
export interface SameFileContentException
  extends __ServiceException__<_SameFileContentExceptionDetails> {
  name: "SameFileContentException";
}

export interface _SameFileContentExceptionDetails {}
