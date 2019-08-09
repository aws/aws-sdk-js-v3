import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster. </p>
 */
export interface ClusterNotFoundFault
  extends __ServiceException__<_ClusterNotFoundFaultDetails> {
  name: "ClusterNotFoundFault";
}

export interface _ClusterNotFoundFaultDetails {}
