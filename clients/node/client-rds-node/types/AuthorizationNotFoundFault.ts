import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified CIDRIP or Amazon EC2 security group isn't authorized for the specified DB security group.</p> <p>RDS also may not be authorized by using IAM to perform necessary actions on your behalf.</p>
 */
export interface AuthorizationNotFoundFault
  extends __ServiceException__<_AuthorizationNotFoundFaultDetails> {
  name: "AuthorizationNotFoundFault";
}

export interface _AuthorizationNotFoundFaultDetails {}
