import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded the quota of snapshot schedules. </p>
 */
export interface SnapshotScheduleQuotaExceededFault
  extends __ServiceException__<_SnapshotScheduleQuotaExceededFaultDetails> {
  name: "SnapshotScheduleQuotaExceededFault";
}

export interface _SnapshotScheduleQuotaExceededFaultDetails {}
