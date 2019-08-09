import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot. </p>
 */
export interface DBSnapshotNotFoundFault
  extends __ServiceException__<_DBSnapshotNotFoundFaultDetails> {
  name: "DBSnapshotNotFoundFault";
}

export interface _DBSnapshotNotFoundFaultDetails {}
