import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception indicating the specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __ServiceException__<_ResourceAlreadyExistsExceptionDetails> {
  name: "ResourceAlreadyExistsException";
}

export interface _ResourceAlreadyExistsExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
