import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Could not find the specified resource.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
