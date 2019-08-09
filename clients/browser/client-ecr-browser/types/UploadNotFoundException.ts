import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The upload could not be found, or the specified upload id is not valid for this repository.</p>
 */
export interface UploadNotFoundException
  extends __ServiceException__<_UploadNotFoundExceptionDetails> {
  name: "UploadNotFoundException";
}

export interface _UploadNotFoundExceptionDetails {
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}
