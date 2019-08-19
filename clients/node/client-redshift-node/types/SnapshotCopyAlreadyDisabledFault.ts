import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The cluster already has cross-region snapshot copy disabled.</p>
 */
export interface SnapshotCopyAlreadyDisabledFault
  extends __ServiceException__<_SnapshotCopyAlreadyDisabledFaultDetails> {
  name: "SnapshotCopyAlreadyDisabledFault";
}

export interface _SnapshotCopyAlreadyDisabledFaultDetails {}
