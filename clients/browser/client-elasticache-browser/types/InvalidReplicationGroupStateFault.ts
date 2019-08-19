import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested replication group is not in the <code>available</code> state.</p>
 */
export interface InvalidReplicationGroupStateFault
  extends __ServiceException__<_InvalidReplicationGroupStateFaultDetails> {
  name: "InvalidReplicationGroupStateFault";
}

export interface _InvalidReplicationGroupStateFaultDetails {}
