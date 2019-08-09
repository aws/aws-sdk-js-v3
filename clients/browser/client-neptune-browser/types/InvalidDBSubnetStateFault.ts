import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB subnet is not in the <i>available</i> state.</p>
 */
export interface InvalidDBSubnetStateFault
  extends __ServiceException__<_InvalidDBSubnetStateFaultDetails> {
  name: "InvalidDBSubnetStateFault";
}

export interface _InvalidDBSubnetStateFaultDetails {}
