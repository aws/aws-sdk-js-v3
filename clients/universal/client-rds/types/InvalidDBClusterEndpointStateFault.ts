import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested operation can't be performed on the endpoint while the endpoint is in this state.</p>
 */
export interface InvalidDBClusterEndpointStateFault
  extends __ServiceException__<_InvalidDBClusterEndpointStateFaultDetails> {
  name: "InvalidDBClusterEndpointStateFault";
}

export interface _InvalidDBClusterEndpointStateFaultDetails {}
