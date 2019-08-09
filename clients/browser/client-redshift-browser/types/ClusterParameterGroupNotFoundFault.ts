import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The parameter group name does not refer to an existing parameter group.</p>
 */
export interface ClusterParameterGroupNotFoundFault
  extends __ServiceException__<_ClusterParameterGroupNotFoundFaultDetails> {
  name: "ClusterParameterGroupNotFoundFault";
}

export interface _ClusterParameterGroupNotFoundFaultDetails {}
