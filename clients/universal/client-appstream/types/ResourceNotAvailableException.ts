import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource exists and is not in use, but isn't available.</p>
 */
export interface ResourceNotAvailableException
  extends __ServiceException__<_ResourceNotAvailableExceptionDetails> {
  name: "ResourceNotAvailableException";
}

export interface _ResourceNotAvailableExceptionDetails {
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}
