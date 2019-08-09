import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The node group specified by the <code>NodeGroupId</code> parameter could not be found. Please verify that the node group exists and that you spelled the <code>NodeGroupId</code> value correctly.</p>
 */
export interface NodeGroupNotFoundFault
  extends __ServiceException__<_NodeGroupNotFoundFaultDetails> {
  name: "NodeGroupNotFoundFault";
}

export interface _NodeGroupNotFoundFaultDetails {}
