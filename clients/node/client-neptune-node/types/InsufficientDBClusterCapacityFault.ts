import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB cluster does not have enough capacity for the current operation.</p>
 */
export interface InsufficientDBClusterCapacityFault
  extends __ServiceException__<_InsufficientDBClusterCapacityFaultDetails> {
  name: "InsufficientDBClusterCapacityFault";
}

export interface _InsufficientDBClusterCapacityFaultDetails {}
