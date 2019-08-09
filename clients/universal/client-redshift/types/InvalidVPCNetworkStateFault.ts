import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The cluster subnet group does not cover all Availability Zones.</p>
 */
export interface InvalidVPCNetworkStateFault
  extends __ServiceException__<_InvalidVPCNetworkStateFaultDetails> {
  name: "InvalidVPCNetworkStateFault";
}

export interface _InvalidVPCNetworkStateFaultDetails {}
