import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified custom endpoint doesn't exist.</p>
 */
export interface DBClusterEndpointNotFoundFault
  extends __ServiceException__<_DBClusterEndpointNotFoundFaultDetails> {
  name: "DBClusterEndpointNotFoundFault";
}

export interface _DBClusterEndpointNotFoundFaultDetails {}
