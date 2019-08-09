import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified image has already been pushed, and there were no changes to the manifest or image tag after the last push.</p>
 */
export interface ImageAlreadyExistsException
  extends __ServiceException__<_ImageAlreadyExistsExceptionDetails> {
  name: "ImageAlreadyExistsException";
}

export interface _ImageAlreadyExistsExceptionDetails {
  /**
   * <p>The error message associated with the exception.</p>
   */
  message?: string;
}
