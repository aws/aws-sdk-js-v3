import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have attempted to exceed the maximum number of DAX clusters for your AWS account.</p>
 */
export interface ClusterQuotaForCustomerExceededFault
  extends __ServiceException__<_ClusterQuotaForCustomerExceededFaultDetails> {
  name: "ClusterQuotaForCustomerExceededFault";
}

export interface _ClusterQuotaForCustomerExceededFaultDetails {}
