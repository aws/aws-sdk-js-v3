import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
 */
export interface InconsistentQuantities
  extends __ServiceException__<_InconsistentQuantitiesDetails> {
  name: "InconsistentQuantities";
}

export interface _InconsistentQuantitiesDetails {
  /**
   * _string shape
   */
  Message?: string;
}
