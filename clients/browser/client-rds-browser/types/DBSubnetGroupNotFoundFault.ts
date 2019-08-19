import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>DBSubnetGroupName</i> doesn't refer to an existing DB subnet group. </p>
 */
export interface DBSubnetGroupNotFoundFault
  extends __ServiceException__<_DBSubnetGroupNotFoundFaultDetails> {
  name: "DBSubnetGroupNotFoundFault";
}

export interface _DBSubnetGroupNotFoundFaultDetails {}
