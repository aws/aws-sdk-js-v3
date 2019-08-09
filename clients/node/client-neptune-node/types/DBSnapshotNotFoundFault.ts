import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>DBSnapshotIdentifier</i> does not refer to an existing DB snapshot.</p>
 */
export interface DBSnapshotNotFoundFault
  extends __ServiceException__<_DBSnapshotNotFoundFaultDetails> {
  name: "DBSnapshotNotFoundFault";
}

export interface _DBSnapshotNotFoundFaultDetails {}
