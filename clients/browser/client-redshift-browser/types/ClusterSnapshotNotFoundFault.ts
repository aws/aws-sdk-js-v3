import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The snapshot identifier does not refer to an existing cluster snapshot.</p>
 */
export interface ClusterSnapshotNotFoundFault
  extends __ServiceException__<_ClusterSnapshotNotFoundFaultDetails> {
  name: "ClusterSnapshotNotFoundFault";
}

export interface _ClusterSnapshotNotFoundFaultDetails {}
