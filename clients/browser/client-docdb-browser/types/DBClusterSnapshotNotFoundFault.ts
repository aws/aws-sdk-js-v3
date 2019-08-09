import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot. </p>
 */
export interface DBClusterSnapshotNotFoundFault
  extends __ServiceException__<_DBClusterSnapshotNotFoundFaultDetails> {
  name: "DBClusterSnapshotNotFoundFault";
}

export interface _DBClusterSnapshotNotFoundFaultDetails {}
