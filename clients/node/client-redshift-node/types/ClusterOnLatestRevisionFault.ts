import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Cluster is already on the latest database revision.</p>
 */
export interface ClusterOnLatestRevisionFault
  extends __ServiceException__<_ClusterOnLatestRevisionFaultDetails> {
  name: "ClusterOnLatestRevisionFault";
}

export interface _ClusterOnLatestRevisionFaultDetails {}
