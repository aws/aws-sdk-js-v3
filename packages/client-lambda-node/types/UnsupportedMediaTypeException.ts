import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The content type of the <code>Invoke</code> request body is not JSON.</p>
 */
export interface UnsupportedMediaTypeException
  extends __ServiceException__<_UnsupportedMediaTypeExceptionDetails> {
  name: "UnsupportedMediaTypeException";
}

export interface _UnsupportedMediaTypeExceptionDetails {
  /**
   * _String shape
   */
  Type?: string;

  /**
   * _String shape
   */
  message?: string;
}
