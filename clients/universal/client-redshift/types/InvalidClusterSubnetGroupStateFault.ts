import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The cluster subnet group cannot be deleted because it is in use.</p>
 */
export interface InvalidClusterSubnetGroupStateFault
  extends __ServiceException__<_InvalidClusterSubnetGroupStateFaultDetails> {
  name: "InvalidClusterSubnetGroupStateFault";
}

export interface _InvalidClusterSubnetGroupStateFaultDetails {}
