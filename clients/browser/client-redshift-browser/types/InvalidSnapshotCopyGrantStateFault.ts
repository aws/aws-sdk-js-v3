import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The snapshot copy grant can't be deleted because it is used by one or more clusters.</p>
 */
export interface InvalidSnapshotCopyGrantStateFault
  extends __ServiceException__<_InvalidSnapshotCopyGrantStateFaultDetails> {
  name: "InvalidSnapshotCopyGrantStateFault";
}

export interface _InvalidSnapshotCopyGrantStateFaultDetails {}
