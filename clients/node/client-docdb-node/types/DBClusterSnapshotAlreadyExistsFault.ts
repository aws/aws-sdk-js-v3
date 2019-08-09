import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You already have a DB cluster snapshot with the given identifier.</p>
 */
export interface DBClusterSnapshotAlreadyExistsFault
  extends __ServiceException__<_DBClusterSnapshotAlreadyExistsFaultDetails> {
  name: "DBClusterSnapshotAlreadyExistsFault";
}

export interface _DBClusterSnapshotAlreadyExistsFaultDetails {}
