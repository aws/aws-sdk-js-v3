import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request would result in the user exceeding the allowed number of cluster snapshots.</p>
 */
export interface ClusterSnapshotQuotaExceededFault
  extends __ServiceException__<_ClusterSnapshotQuotaExceededFaultDetails> {
  name: "ClusterSnapshotQuotaExceededFault";
}

export interface _ClusterSnapshotQuotaExceededFaultDetails {}
