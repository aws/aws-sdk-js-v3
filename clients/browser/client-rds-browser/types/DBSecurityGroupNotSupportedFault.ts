import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A DB security group isn't allowed for this action.</p>
 */
export interface DBSecurityGroupNotSupportedFault
  extends __ServiceException__<_DBSecurityGroupNotSupportedFaultDetails> {
  name: "DBSecurityGroupNotSupportedFault";
}

export interface _DBSecurityGroupNotSupportedFaultDetails {}
