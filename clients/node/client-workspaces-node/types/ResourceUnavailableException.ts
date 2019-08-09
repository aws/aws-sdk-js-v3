import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource is not available.</p>
 */
export interface ResourceUnavailableException
  extends __ServiceException__<_ResourceUnavailableExceptionDetails> {
  name: "ResourceUnavailableException";
}

export interface _ResourceUnavailableExceptionDetails {
  /**
   * <p>The exception error message.</p>
   */
  message?: string;

  /**
   * <p>The identifier of the resource that is not available.</p>
   */
  ResourceId?: string;
}
