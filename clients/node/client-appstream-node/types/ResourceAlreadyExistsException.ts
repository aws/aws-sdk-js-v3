import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __ServiceException__<_ResourceAlreadyExistsExceptionDetails> {
  name: "ResourceAlreadyExistsException";
}

export interface _ResourceAlreadyExistsExceptionDetails {
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}
