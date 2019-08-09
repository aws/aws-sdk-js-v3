import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The current state of the snapshot does not allow the requested operation to occur.</p>
 */
export interface InvalidSnapshotStateFault
  extends __ServiceException__<_InvalidSnapshotStateFaultDetails> {
  name: "InvalidSnapshotStateFault";
}

export interface _InvalidSnapshotStateFaultDetails {}
