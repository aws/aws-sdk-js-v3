import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified CIDR IP or Amazon EC2 security group isn't authorized for the specified DB security group.</p> <p>Amazon DocumentDB also might not be authorized to perform necessary actions on your behalf using IAM.</p>
 */
export interface AuthorizationNotFoundFault
  extends __ServiceException__<_AuthorizationNotFoundFaultDetails> {
  name: "AuthorizationNotFoundFault";
}

export interface _AuthorizationNotFoundFaultDetails {}
