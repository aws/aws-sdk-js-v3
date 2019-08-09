import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A cluster security group with the same name already exists.</p>
 */
export interface ClusterSecurityGroupAlreadyExistsFault
  extends __ServiceException__<_ClusterSecurityGroupAlreadyExistsFaultDetails> {
  name: "ClusterSecurityGroupAlreadyExistsFault";
}

export interface _ClusterSecurityGroupAlreadyExistsFaultDetails {}
