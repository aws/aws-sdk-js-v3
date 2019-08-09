import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested snapshot name does not refer to an existing snapshot.</p>
 */
export interface SnapshotNotFoundFault
  extends __ServiceException__<_SnapshotNotFoundFaultDetails> {
  name: "SnapshotNotFoundFault";
}

export interface _SnapshotNotFoundFaultDetails {}
