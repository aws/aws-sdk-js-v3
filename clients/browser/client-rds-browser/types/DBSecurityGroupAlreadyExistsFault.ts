import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> A DB security group with the name specified in <i>DBSecurityGroupName</i> already exists. </p>
 */
export interface DBSecurityGroupAlreadyExistsFault
  extends __ServiceException__<_DBSecurityGroupAlreadyExistsFaultDetails> {
  name: "DBSecurityGroupAlreadyExistsFault";
}

export interface _DBSecurityGroupAlreadyExistsFaultDetails {}
