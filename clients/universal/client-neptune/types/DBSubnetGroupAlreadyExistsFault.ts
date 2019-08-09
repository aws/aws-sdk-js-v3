import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>DBSubnetGroupName</i> is already used by an existing DB subnet group.</p>
 */
export interface DBSubnetGroupAlreadyExistsFault
  extends __ServiceException__<_DBSubnetGroupAlreadyExistsFaultDetails> {
  name: "DBSubnetGroupAlreadyExistsFault";
}

export interface _DBSubnetGroupAlreadyExistsFaultDetails {}
