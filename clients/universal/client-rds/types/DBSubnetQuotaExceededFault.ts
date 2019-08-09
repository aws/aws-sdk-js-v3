import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request would result in the user exceeding the allowed number of subnets in a DB subnet groups.</p>
 */
export interface DBSubnetQuotaExceededFault
  extends __ServiceException__<_DBSubnetQuotaExceededFaultDetails> {
  name: "DBSubnetQuotaExceededFault";
}

export interface _DBSubnetQuotaExceededFaultDetails {}
