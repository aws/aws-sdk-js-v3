import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An error occured.</p>
 */
export interface UnsupportedOperation
  extends __ServiceException__<_UnsupportedOperationDetails> {
  name: "UnsupportedOperation";
}

export interface _UnsupportedOperationDetails {
  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
