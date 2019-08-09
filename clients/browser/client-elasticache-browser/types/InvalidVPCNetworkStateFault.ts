import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The VPC network is in an invalid state.</p>
 */
export interface InvalidVPCNetworkStateFault
  extends __ServiceException__<_InvalidVPCNetworkStateFaultDetails> {
  name: "InvalidVPCNetworkStateFault";
}

export interface _InvalidVPCNetworkStateFaultDetails {}
