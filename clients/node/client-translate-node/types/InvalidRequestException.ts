import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The request that you made is invalid. Check your request to determine why it's invalid and then retry the request. </p>
 */
export interface InvalidRequestException
  extends __ServiceException__<_InvalidRequestExceptionDetails> {
  name: "InvalidRequestException";
}

export interface _InvalidRequestExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
