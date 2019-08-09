import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The image requested does not exist in the specified repository.</p>
 */
export interface ImageNotFoundException
  extends __ServiceException__<_ImageNotFoundExceptionDetails> {
  name: "ImageNotFoundException";
}

export interface _ImageNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
