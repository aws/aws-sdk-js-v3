import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleAlreadyExistsFault
  extends __ServiceException__<_DBClusterRoleAlreadyExistsFaultDetails> {
  name: "DBClusterRoleAlreadyExistsFault";
}

export interface _DBClusterRoleAlreadyExistsFaultDetails {}
