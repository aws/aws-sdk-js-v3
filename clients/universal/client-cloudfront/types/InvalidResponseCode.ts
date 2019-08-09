import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A response code specified in the response body is not valid.</p>
 */
export interface InvalidResponseCode
  extends __ServiceException__<_InvalidResponseCodeDetails> {
  name: "InvalidResponseCode";
}

export interface _InvalidResponseCodeDetails {
  /**
   * _string shape
   */
  Message?: string;
}
