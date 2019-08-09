import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB subnet group doesn't cover all Availability Zones after it's created because of users' change.</p>
 */
export interface InvalidVPCNetworkStateFault
  extends __ServiceException__<_InvalidVPCNetworkStateFaultDetails> {
  name: "InvalidVPCNetworkStateFault";
}

export interface _InvalidVPCNetworkStateFaultDetails {}
