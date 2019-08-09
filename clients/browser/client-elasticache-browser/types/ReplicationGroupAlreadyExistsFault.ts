import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified replication group already exists.</p>
 */
export interface ReplicationGroupAlreadyExistsFault
  extends __ServiceException__<_ReplicationGroupAlreadyExistsFaultDetails> {
  name: "ReplicationGroupAlreadyExistsFault";
}

export interface _ReplicationGroupAlreadyExistsFaultDetails {}
