import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The filter value is not valid. Verify the value and try again.</p>
 */
export interface InvalidFilterValue
  extends __ServiceException__<_InvalidFilterValueDetails> {
  name: "InvalidFilterValue";
}

export interface _InvalidFilterValueDetails {
  /**
   * _String shape
   */
  Message?: string;
}
