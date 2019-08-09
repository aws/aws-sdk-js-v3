import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache nodes in a single cluster.</p>
 */
export interface NodeQuotaForClusterExceededFault
  extends __ServiceException__<_NodeQuotaForClusterExceededFaultDetails> {
  name: "NodeQuotaForClusterExceededFault";
}

export interface _NodeQuotaForClusterExceededFaultDetails {}
