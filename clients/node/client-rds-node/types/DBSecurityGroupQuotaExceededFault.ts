import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request would result in the user exceeding the allowed number of DB security groups.</p>
 */
export interface DBSecurityGroupQuotaExceededFault
  extends __ServiceException__<_DBSecurityGroupQuotaExceededFaultDetails> {
  name: "DBSecurityGroupQuotaExceededFault";
}

export interface _DBSecurityGroupQuotaExceededFaultDetails {}
