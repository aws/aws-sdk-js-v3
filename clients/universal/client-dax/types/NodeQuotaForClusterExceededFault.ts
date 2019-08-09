import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have attempted to exceed the maximum number of nodes for a DAX cluster.</p>
 */
export interface NodeQuotaForClusterExceededFault
  extends __ServiceException__<_NodeQuotaForClusterExceededFaultDetails> {
  name: "NodeQuotaForClusterExceededFault";
}

export interface _NodeQuotaForClusterExceededFaultDetails {}
