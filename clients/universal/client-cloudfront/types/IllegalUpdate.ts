import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Origin and <code>CallerReference</code> cannot be updated. </p>
 */
export interface IllegalUpdate
  extends __ServiceException__<_IllegalUpdateDetails> {
  name: "IllegalUpdate";
}

export interface _IllegalUpdateDetails {
  /**
   * _string shape
   */
  Message?: string;
}
