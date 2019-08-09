import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The snapshot copy grant can't be created because a grant with the same name already exists.</p>
 */
export interface SnapshotCopyGrantAlreadyExistsFault
  extends __ServiceException__<_SnapshotCopyGrantAlreadyExistsFaultDetails> {
  name: "SnapshotCopyGrantAlreadyExistsFault";
}

export interface _SnapshotCopyGrantAlreadyExistsFaultDetails {}
