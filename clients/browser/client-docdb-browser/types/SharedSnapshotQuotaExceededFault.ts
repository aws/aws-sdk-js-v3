import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with. </p>
 */
export interface SharedSnapshotQuotaExceededFault
  extends __ServiceException__<_SharedSnapshotQuotaExceededFaultDetails> {
  name: "SharedSnapshotQuotaExceededFault";
}

export interface _SharedSnapshotQuotaExceededFaultDetails {}
