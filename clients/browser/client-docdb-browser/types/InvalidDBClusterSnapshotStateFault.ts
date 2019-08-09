import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided value isn't a valid DB cluster snapshot state.</p>
 */
export interface InvalidDBClusterSnapshotStateFault
  extends __ServiceException__<_InvalidDBClusterSnapshotStateFaultDetails> {
  name: "InvalidDBClusterSnapshotStateFault";
}

export interface _InvalidDBClusterSnapshotStateFaultDetails {}
