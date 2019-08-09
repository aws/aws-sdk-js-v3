import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number for snapshot identifiers has been reached. The limit is 100. </p>
 */
export interface BatchModifyClusterSnapshotsLimitExceededFault
  extends __ServiceException__<
    _BatchModifyClusterSnapshotsLimitExceededFaultDetails
  > {
  name: "BatchModifyClusterSnapshotsLimitExceededFault";
}

export interface _BatchModifyClusterSnapshotsLimitExceededFaultDetails {}
