import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The product code passed does not match the product code used for publishing the product.</p>
 */
export interface InvalidProductCodeException
  extends __ServiceException__<_InvalidProductCodeExceptionDetails> {
  name: "InvalidProductCodeException";
}

export interface _InvalidProductCodeExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
