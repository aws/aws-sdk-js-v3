import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified snapshot schedule is already being updated.</p>
 */
export interface SnapshotScheduleUpdateInProgressFault
  extends __ServiceException__<_SnapshotScheduleUpdateInProgressFaultDetails> {
  name: "SnapshotScheduleUpdateInProgressFault";
}

export interface _SnapshotScheduleUpdateInProgressFaultDetails {}
