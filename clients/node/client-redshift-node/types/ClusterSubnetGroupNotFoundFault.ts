import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The cluster subnet group name does not refer to an existing cluster subnet group.</p>
 */
export interface ClusterSubnetGroupNotFoundFault
  extends __ServiceException__<_ClusterSubnetGroupNotFoundFaultDetails> {
  name: "ClusterSubnetGroupNotFoundFault";
}

export interface _ClusterSubnetGroupNotFoundFaultDetails {}
