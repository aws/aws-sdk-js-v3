import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation would exceed the number of nodes allowed for a cluster.</p>
 */
export interface NumberOfNodesPerClusterLimitExceededFault
  extends __ServiceException__<
    _NumberOfNodesPerClusterLimitExceededFaultDetails
  > {
  name: "NumberOfNodesPerClusterLimitExceededFault";
}

export interface _NumberOfNodesPerClusterLimitExceededFaultDetails {}
