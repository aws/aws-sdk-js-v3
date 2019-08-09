import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The cluster already has cross-region snapshot copy enabled.</p>
 */
export interface SnapshotCopyAlreadyEnabledFault
  extends __ServiceException__<_SnapshotCopyAlreadyEnabledFaultDetails> {
  name: "SnapshotCopyAlreadyEnabledFault";
}

export interface _SnapshotCopyAlreadyEnabledFaultDetails {}
