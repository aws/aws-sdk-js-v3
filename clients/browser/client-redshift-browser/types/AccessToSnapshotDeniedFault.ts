import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The owner of the specified snapshot has not authorized your account to access the snapshot.</p>
 */
export interface AccessToSnapshotDeniedFault
  extends __ServiceException__<_AccessToSnapshotDeniedFaultDetails> {
  name: "AccessToSnapshotDeniedFault";
}

export interface _AccessToSnapshotDeniedFaultDetails {}
