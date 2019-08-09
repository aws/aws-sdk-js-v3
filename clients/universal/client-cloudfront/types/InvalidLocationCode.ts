import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The location code specified is not valid.</p>
 */
export interface InvalidLocationCode
  extends __ServiceException__<_InvalidLocationCodeDetails> {
  name: "InvalidLocationCode";
}

export interface _InvalidLocationCodeDetails {
  /**
   * _string shape
   */
  Message?: string;
}
