import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The supplied value is not a valid DB cluster snapshot state.</p>
 */
export interface InvalidDBClusterSnapshotStateFault
  extends __ServiceException__<_InvalidDBClusterSnapshotStateFaultDetails> {
  name: "InvalidDBClusterSnapshotStateFault";
}

export interface _InvalidDBClusterSnapshotStateFaultDetails {}
