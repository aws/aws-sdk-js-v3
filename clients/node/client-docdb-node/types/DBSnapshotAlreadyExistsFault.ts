import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <code>DBSnapshotIdentifier</code> is already being used by an existing snapshot. </p>
 */
export interface DBSnapshotAlreadyExistsFault
  extends __ServiceException__<_DBSnapshotAlreadyExistsFaultDetails> {
  name: "DBSnapshotAlreadyExistsFault";
}

export interface _DBSnapshotAlreadyExistsFaultDetails {}
