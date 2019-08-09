import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We could not find the specified snapshot schedule. </p>
 */
export interface SnapshotScheduleNotFoundFault
  extends __ServiceException__<_SnapshotScheduleNotFoundFaultDetails> {
  name: "SnapshotScheduleNotFoundFault";
}

export interface _SnapshotScheduleNotFoundFaultDetails {}
