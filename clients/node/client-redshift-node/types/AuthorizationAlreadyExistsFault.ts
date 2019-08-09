import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified CIDR block or EC2 security group is already authorized for the specified cluster security group.</p>
 */
export interface AuthorizationAlreadyExistsFault
  extends __ServiceException__<_AuthorizationAlreadyExistsFaultDetails> {
  name: "AuthorizationAlreadyExistsFault";
}

export interface _AuthorizationAlreadyExistsFaultDetails {}
