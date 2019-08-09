import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The filter name is not valid. Verify the you entered the correct name and try again.</p>
 */
export interface InvalidFilter
  extends __ServiceException__<_InvalidFilterDetails> {
  name: "InvalidFilter";
}

export interface _InvalidFilterDetails {
  /**
   * _String shape
   */
  Message?: string;
}
