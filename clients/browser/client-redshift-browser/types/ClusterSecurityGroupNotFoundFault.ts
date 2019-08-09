import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The cluster security group name does not refer to an existing cluster security group.</p>
 */
export interface ClusterSecurityGroupNotFoundFault
  extends __ServiceException__<_ClusterSecurityGroupNotFoundFaultDetails> {
  name: "ClusterSecurityGroupNotFoundFault";
}

export interface _ClusterSecurityGroupNotFoundFaultDetails {}
