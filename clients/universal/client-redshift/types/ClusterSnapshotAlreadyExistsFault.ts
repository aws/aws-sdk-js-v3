import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The value specified as a snapshot identifier is already used by an existing snapshot.</p>
 */
export interface ClusterSnapshotAlreadyExistsFault
  extends __ServiceException__<_ClusterSnapshotAlreadyExistsFaultDetails> {
  name: "ClusterSnapshotAlreadyExistsFault";
}

export interface _ClusterSnapshotAlreadyExistsFaultDetails {}
