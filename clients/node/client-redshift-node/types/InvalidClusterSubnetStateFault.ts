import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The state of the subnet is invalid.</p>
 */
export interface InvalidClusterSubnetStateFault
  extends __ServiceException__<_InvalidClusterSubnetStateFaultDetails> {
  name: "InvalidClusterSubnetStateFault";
}

export interface _InvalidClusterSubnetStateFaultDetails {}
