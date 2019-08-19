import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource could not be found.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
