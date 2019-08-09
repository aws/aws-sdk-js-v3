import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified <i>RoleArn</i> or <i>FeatureName</i> value is already associated with the DB instance.</p>
 */
export interface DBInstanceRoleAlreadyExistsFault
  extends __ServiceException__<_DBInstanceRoleAlreadyExistsFaultDetails> {
  name: "DBInstanceRoleAlreadyExistsFault";
}

export interface _DBInstanceRoleAlreadyExistsFaultDetails {}
