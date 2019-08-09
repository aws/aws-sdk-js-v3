import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified <i>RoleArn</i> value doesn't match the specifed feature for the DB instance.</p>
 */
export interface DBInstanceRoleNotFoundFault
  extends __ServiceException__<_DBInstanceRoleNotFoundFaultDetails> {
  name: "DBInstanceRoleNotFoundFault";
}

export interface _DBInstanceRoleNotFoundFaultDetails {}
