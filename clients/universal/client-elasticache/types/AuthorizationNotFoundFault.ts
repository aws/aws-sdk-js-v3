import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified Amazon EC2 security group is not authorized for the specified cache security group.</p>
 */
export interface AuthorizationNotFoundFault
  extends __ServiceException__<_AuthorizationNotFoundFaultDetails> {
  name: "AuthorizationNotFoundFault";
}

export interface _AuthorizationNotFoundFaultDetails {}
