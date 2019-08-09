import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource isn't available.</p>
 */
export interface ResourceUnavailableException
  extends __ServiceException__<_ResourceUnavailableExceptionDetails> {
  name: "ResourceUnavailableException";
}

export interface _ResourceUnavailableExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>For a <code>ResourceUnavailableException</code> error, the type of resource that isn't available.</p>
   */
  ResourceType?: string;
}
