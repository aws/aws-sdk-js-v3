import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <code>DBSecurityGroupName</code> doesn't refer to an existing DB security group. </p>
 */
export interface DBSecurityGroupNotFoundFault
  extends __ServiceException__<_DBSecurityGroupNotFoundFaultDetails> {
  name: "DBSecurityGroupNotFoundFault";
}

export interface _DBSecurityGroupNotFoundFaultDetails {}
