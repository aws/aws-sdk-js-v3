import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request would cause you to exceed the allowed number of DB snapshots.</p>
 */
export interface SnapshotQuotaExceededFault
  extends __ServiceException__<_SnapshotQuotaExceededFaultDetails> {
  name: "SnapshotQuotaExceededFault";
}

export interface _SnapshotQuotaExceededFaultDetails {}
