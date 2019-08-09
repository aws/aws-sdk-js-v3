import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
 */
export interface InvalidSubnet
  extends __ServiceException__<_InvalidSubnetDetails> {
  name: "InvalidSubnet";
}

export interface _InvalidSubnetDetails {}
