import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified Amazon EC2 security group is already authorized for the specified cache security group.</p>
 */
export interface AuthorizationAlreadyExistsFault
  extends __ServiceException__<_AuthorizationAlreadyExistsFaultDetails> {
  name: "AuthorizationAlreadyExistsFault";
}

export interface _AuthorizationAlreadyExistsFaultDetails {}
