import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified resource can't be found. Check the information you provided in your last request, and try again.</p>
 */
export interface InvalidResourceException
  extends __ServiceException__<_InvalidResourceExceptionDetails> {
  name: "InvalidResourceException";
}

export interface _InvalidResourceExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>The provided resource value is invalid.</p>
   */
  ResourceType?: string;
}
