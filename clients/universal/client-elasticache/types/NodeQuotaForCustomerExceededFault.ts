import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache nodes per customer.</p>
 */
export interface NodeQuotaForCustomerExceededFault
  extends __ServiceException__<_NodeQuotaForCustomerExceededFaultDetails> {
  name: "NodeQuotaForCustomerExceededFault";
}

export interface _NodeQuotaForCustomerExceededFaultDetails {}
