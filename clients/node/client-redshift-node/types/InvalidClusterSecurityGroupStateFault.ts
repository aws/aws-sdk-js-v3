import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The state of the cluster security group is not <code>available</code>. </p>
 */
export interface InvalidClusterSecurityGroupStateFault
  extends __ServiceException__<_InvalidClusterSecurityGroupStateFaultDetails> {
  name: "InvalidClusterSecurityGroupStateFault";
}

export interface _InvalidClusterSecurityGroupStateFaultDetails {}
