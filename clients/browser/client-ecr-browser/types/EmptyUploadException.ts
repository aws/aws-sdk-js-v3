import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified layer upload does not contain any layer parts.</p>
 */
export interface EmptyUploadException
  extends __ServiceException__<_EmptyUploadExceptionDetails> {
  name: "EmptyUploadException";
}

export interface _EmptyUploadExceptionDetails {
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}
