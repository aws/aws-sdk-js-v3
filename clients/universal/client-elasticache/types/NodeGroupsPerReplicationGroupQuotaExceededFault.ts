import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request cannot be processed because it would exceed the maximum allowed number of node groups (shards) in a single replication group. The default maximum is 90</p>
 */
export interface NodeGroupsPerReplicationGroupQuotaExceededFault
  extends __ServiceException__<
    _NodeGroupsPerReplicationGroupQuotaExceededFaultDetails
  > {
  name: "NodeGroupsPerReplicationGroupQuotaExceededFault";
}

export interface _NodeGroupsPerReplicationGroupQuotaExceededFaultDetails {}
