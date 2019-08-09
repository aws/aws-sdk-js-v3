import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource is not available. Check to see if the resource is in the <code>TRAINED</code> state and try your request again.</p>
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
}
