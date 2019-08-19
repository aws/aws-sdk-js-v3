import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Cross-region snapshot copy was temporarily disabled. Try your request again.</p>
 */
export interface SnapshotCopyDisabledFault
  extends __ServiceException__<_SnapshotCopyDisabledFaultDetails> {
  name: "SnapshotCopyDisabledFault";
}

export interface _SnapshotCopyDisabledFaultDetails {}
