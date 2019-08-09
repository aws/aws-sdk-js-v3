import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>DBSecurityGroupName</i> does not refer to an existing DB security group.</p>
 */
export interface DBSecurityGroupNotFoundFault
  extends __ServiceException__<_DBSecurityGroupNotFoundFaultDetails> {
  name: "DBSecurityGroupNotFoundFault";
}

export interface _DBSecurityGroupNotFoundFaultDetails {}
