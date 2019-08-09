import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request uses an HTTP method which is not allowed for the specified resource.</p>
 */
export interface MethodNotAllowedException
  extends __ServiceException__<_MethodNotAllowedExceptionDetails> {
  name: "MethodNotAllowedException";
}

export interface _MethodNotAllowedExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
