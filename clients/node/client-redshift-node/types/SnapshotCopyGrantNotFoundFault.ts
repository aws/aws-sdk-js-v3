import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified snapshot copy grant can't be found. Make sure that the name is typed correctly and that the grant exists in the destination region.</p>
 */
export interface SnapshotCopyGrantNotFoundFault
  extends __ServiceException__<_SnapshotCopyGrantNotFoundFaultDetails> {
  name: "SnapshotCopyGrantNotFoundFault";
}

export interface _SnapshotCopyGrantNotFoundFaultDetails {}
