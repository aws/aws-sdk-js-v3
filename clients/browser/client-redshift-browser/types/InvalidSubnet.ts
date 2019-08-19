import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested subnet is not valid, or not all of the subnets are in the same VPC.</p>
 */
export interface InvalidSubnet
  extends __ServiceException__<_InvalidSubnetDetails> {
  name: "InvalidSubnet";
}

export interface _InvalidSubnetDetails {}
