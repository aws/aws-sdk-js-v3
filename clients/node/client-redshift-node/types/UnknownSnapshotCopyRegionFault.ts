import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified region is incorrect or does not exist.</p>
 */
export interface UnknownSnapshotCopyRegionFault
  extends __ServiceException__<_UnknownSnapshotCopyRegionFaultDetails> {
  name: "UnknownSnapshotCopyRegionFault";
}

export interface _UnknownSnapshotCopyRegionFaultDetails {}
