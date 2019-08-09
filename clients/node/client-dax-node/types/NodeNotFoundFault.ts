import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>None of the nodes in the cluster have the given node ID.</p>
 */
export interface NodeNotFoundFault
  extends __ServiceException__<_NodeNotFoundFaultDetails> {
  name: "NodeNotFoundFault";
}

export interface _NodeNotFoundFaultDetails {}
