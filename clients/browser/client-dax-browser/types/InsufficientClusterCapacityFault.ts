import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There are not enough system resources to create the cluster you requested (or to resize an already-existing cluster). </p>
 */
export interface InsufficientClusterCapacityFault
  extends __ServiceException__<_InsufficientClusterCapacityFaultDetails> {
  name: "InsufficientClusterCapacityFault";
}

export interface _InsufficientClusterCapacityFaultDetails {}
