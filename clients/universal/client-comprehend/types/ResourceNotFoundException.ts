import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
