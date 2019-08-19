import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The argument is invalid.</p>
 */
export interface InvalidArgument
  extends __ServiceException__<_InvalidArgumentDetails> {
  name: "InvalidArgument";
}

export interface _InvalidArgumentDetails {
  /**
   * _string shape
   */
  Message?: string;
}
