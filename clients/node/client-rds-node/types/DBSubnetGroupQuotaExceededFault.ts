import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request would result in the user exceeding the allowed number of DB subnet groups.</p>
 */
export interface DBSubnetGroupQuotaExceededFault
  extends __ServiceException__<_DBSubnetGroupQuotaExceededFaultDetails> {
  name: "DBSubnetGroupQuotaExceededFault";
}

export interface _DBSubnetGroupQuotaExceededFaultDetails {}
