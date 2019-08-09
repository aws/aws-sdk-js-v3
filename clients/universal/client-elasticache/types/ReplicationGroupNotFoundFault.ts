import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified replication group does not exist.</p>
 */
export interface ReplicationGroupNotFoundFault
  extends __ServiceException__<_ReplicationGroupNotFoundFaultDetails> {
  name: "ReplicationGroupNotFoundFault";
}

export interface _ReplicationGroupNotFoundFaultDetails {}
