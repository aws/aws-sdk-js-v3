import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request cannot be processed because it would exceed the allowed number of clusters per customer.</p>
 */
export interface ClusterQuotaForCustomerExceededFault
  extends __ServiceException__<_ClusterQuotaForCustomerExceededFaultDetails> {
  name: "ClusterQuotaForCustomerExceededFault";
}

export interface _ClusterQuotaForCustomerExceededFaultDetails {}
