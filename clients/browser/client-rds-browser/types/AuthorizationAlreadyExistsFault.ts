import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified CIDRIP or Amazon EC2 security group is already authorized for the specified DB security group.</p>
 */
export interface AuthorizationAlreadyExistsFault
  extends __ServiceException__<_AuthorizationAlreadyExistsFaultDetails> {
  name: "AuthorizationAlreadyExistsFault";
}

export interface _AuthorizationAlreadyExistsFaultDetails {}
