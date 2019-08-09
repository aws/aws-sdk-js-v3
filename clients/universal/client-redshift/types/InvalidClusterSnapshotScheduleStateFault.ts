import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The cluster snapshot schedule state is not valid.</p>
 */
export interface InvalidClusterSnapshotScheduleStateFault
  extends __ServiceException__<
    _InvalidClusterSnapshotScheduleStateFaultDetails
  > {
  name: "InvalidClusterSnapshotScheduleStateFault";
}

export interface _InvalidClusterSnapshotScheduleStateFaultDetails {}
