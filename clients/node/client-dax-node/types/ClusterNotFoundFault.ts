import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested cluster ID does not refer to an existing DAX cluster.</p>
 */
export interface ClusterNotFoundFault
  extends __ServiceException__<_ClusterNotFoundFaultDetails> {
  name: "ClusterNotFoundFault";
}

export interface _ClusterNotFoundFaultDetails {}
