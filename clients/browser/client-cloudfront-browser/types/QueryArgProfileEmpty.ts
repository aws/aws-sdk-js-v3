import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No profile specified for the field-level encryption query argument.</p>
 */
export interface QueryArgProfileEmpty
  extends __ServiceException__<_QueryArgProfileEmptyDetails> {
  name: "QueryArgProfileEmpty";
}

export interface _QueryArgProfileEmptyDetails {
  /**
   * _string shape
   */
  Message?: string;
}
