import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group. </p>
 */
export interface DBSubnetGroupNotFoundFault
  extends __ServiceException__<_DBSubnetGroupNotFoundFaultDetails> {
  name: "DBSubnetGroupNotFoundFault";
}

export interface _DBSubnetGroupNotFoundFaultDetails {}
