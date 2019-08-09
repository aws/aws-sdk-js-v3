import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified cluster snapshot is not in the <code>available</code> state, or other accounts are authorized to access the snapshot. </p>
 */
export interface InvalidClusterSnapshotStateFault
  extends __ServiceException__<_InvalidClusterSnapshotStateFaultDetails> {
  name: "InvalidClusterSnapshotStateFault";
}

export interface _InvalidClusterSnapshotStateFaultDetails {}
