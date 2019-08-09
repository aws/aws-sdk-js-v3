import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified image is tagged with a tag that already exists. The repository is configured for tag immutability.</p>
 */
export interface ImageTagAlreadyExistsException
  extends __ServiceException__<_ImageTagAlreadyExistsExceptionDetails> {
  name: "ImageTagAlreadyExistsException";
}

export interface _ImageTagAlreadyExistsExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
