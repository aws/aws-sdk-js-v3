import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of nodes specified exceeds the allotted capacity of the cluster.</p>
 */
export interface InsufficientClusterCapacityFault
  extends __ServiceException__<_InsufficientClusterCapacityFaultDetails> {
  name: "InsufficientClusterCapacityFault";
}

export interface _InsufficientClusterCapacityFaultDetails {}
