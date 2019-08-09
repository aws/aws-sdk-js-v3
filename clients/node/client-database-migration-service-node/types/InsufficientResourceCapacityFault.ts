import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There are not enough resources allocated to the database migration.</p>
 */
export interface InsufficientResourceCapacityFault
  extends __ServiceException__<_InsufficientResourceCapacityFaultDetails> {
  name: "InsufficientResourceCapacityFault";
}

export interface _InsufficientResourceCapacityFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
