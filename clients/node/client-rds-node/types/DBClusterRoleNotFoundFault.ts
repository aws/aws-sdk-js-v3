import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified IAM role Amazon Resource Name (ARN) isn't associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleNotFoundFault
  extends __ServiceException__<_DBClusterRoleNotFoundFaultDetails> {
  name: "DBClusterRoleNotFoundFault";
}

export interface _DBClusterRoleNotFoundFaultDetails {}
