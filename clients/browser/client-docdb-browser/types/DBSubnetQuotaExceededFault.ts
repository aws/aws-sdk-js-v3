import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request would cause you to exceed the allowed number of subnets in a DB subnet group.</p>
 */
export interface DBSubnetQuotaExceededFault
  extends __ServiceException__<_DBSubnetQuotaExceededFaultDetails> {
  name: "DBSubnetQuotaExceededFault";
}

export interface _DBSubnetQuotaExceededFaultDetails {}
