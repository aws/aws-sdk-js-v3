import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A <i>ClusterSubnetGroupName</i> is already used by an existing cluster subnet group. </p>
 */
export interface ClusterSubnetGroupAlreadyExistsFault
  extends __ServiceException__<_ClusterSubnetGroupAlreadyExistsFaultDetails> {
  name: "ClusterSubnetGroupAlreadyExistsFault";
}

export interface _ClusterSubnetGroupAlreadyExistsFaultDetails {}
