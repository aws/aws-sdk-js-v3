import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified snapshot schedule already exists. </p>
 */
export interface SnapshotScheduleAlreadyExistsFault
  extends __ServiceException__<_SnapshotScheduleAlreadyExistsFaultDetails> {
  name: "SnapshotScheduleAlreadyExistsFault";
}

export interface _SnapshotScheduleAlreadyExistsFaultDetails {}
