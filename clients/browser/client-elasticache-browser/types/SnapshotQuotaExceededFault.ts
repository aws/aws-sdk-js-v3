import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request cannot be processed because it would exceed the maximum number of snapshots.</p>
 */
export interface SnapshotQuotaExceededFault
  extends __ServiceException__<_SnapshotQuotaExceededFaultDetails> {
  name: "SnapshotQuotaExceededFault";
}

export interface _SnapshotQuotaExceededFaultDetails {}
