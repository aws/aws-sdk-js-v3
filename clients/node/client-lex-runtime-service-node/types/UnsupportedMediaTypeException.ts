import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The Content-Type header (<code>PostContent</code> API) has an invalid value. </p>
 */
export interface UnsupportedMediaTypeException
  extends __ServiceException__<_UnsupportedMediaTypeExceptionDetails> {
  name: "UnsupportedMediaTypeException";
}

export interface _UnsupportedMediaTypeExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
