import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB subnet group doesn't cover all Availability Zones after it is created because of changes that were made.</p>
 */
export interface InvalidVPCNetworkStateFault
  extends __ServiceException__<_InvalidVPCNetworkStateFaultDetails> {
  name: "InvalidVPCNetworkStateFault";
}

export interface _InvalidVPCNetworkStateFaultDetails {}
