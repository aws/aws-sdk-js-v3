import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Specified CIDRIP or EC2 security group is not authorized for the specified DB security group.</p> <p>Neptune may not also be authorized via IAM to perform necessary actions on your behalf.</p>
 */
export interface AuthorizationNotFoundFault
  extends __ServiceException__<_AuthorizationNotFoundFaultDetails> {
  name: "AuthorizationNotFoundFault";
}

export interface _AuthorizationNotFoundFaultDetails {}
