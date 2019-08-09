import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The AWS account has exceeded the maximum number of snapshot copy grants in this region.</p>
 */
export interface SnapshotCopyGrantQuotaExceededFault
  extends __ServiceException__<_SnapshotCopyGrantQuotaExceededFaultDetails> {
  name: "SnapshotCopyGrantQuotaExceededFault";
}

export interface _SnapshotCopyGrantQuotaExceededFaultDetails {}
