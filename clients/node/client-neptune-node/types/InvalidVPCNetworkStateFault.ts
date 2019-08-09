import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>DB subnet group does not cover all Availability Zones after it is created because users' change.</p>
 */
export interface InvalidVPCNetworkStateFault
  extends __ServiceException__<_InvalidVPCNetworkStateFaultDetails> {
  name: "InvalidVPCNetworkStateFault";
}

export interface _InvalidVPCNetworkStateFaultDetails {}
