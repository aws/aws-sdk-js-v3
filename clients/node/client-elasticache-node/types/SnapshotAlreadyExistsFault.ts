import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You already have a snapshot with the given name.</p>
 */
export interface SnapshotAlreadyExistsFault
  extends __ServiceException__<_SnapshotAlreadyExistsFaultDetails> {
  name: "SnapshotAlreadyExistsFault";
}

export interface _SnapshotAlreadyExistsFaultDetails {}
