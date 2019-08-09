import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request cannot be processed because it would exceed the allowed number of subnets in a subnet group.</p>
 */
export interface SubnetGroupQuotaExceededFault
  extends __ServiceException__<_SubnetGroupQuotaExceededFaultDetails> {
  name: "SubnetGroupQuotaExceededFault";
}

export interface _SubnetGroupQuotaExceededFaultDetails {}
