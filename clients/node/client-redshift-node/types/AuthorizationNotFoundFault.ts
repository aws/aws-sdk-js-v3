import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified CIDR IP range or EC2 security group is not authorized for the specified cluster security group.</p>
 */
export interface AuthorizationNotFoundFault
  extends __ServiceException__<_AuthorizationNotFoundFaultDetails> {
  name: "AuthorizationNotFoundFault";
}

export interface _AuthorizationNotFoundFaultDetails {}
