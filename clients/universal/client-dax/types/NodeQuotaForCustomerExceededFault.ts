import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have attempted to exceed the maximum number of nodes for your AWS account.</p>
 */
export interface NodeQuotaForCustomerExceededFault
  extends __ServiceException__<_NodeQuotaForCustomerExceededFaultDetails> {
  name: "NodeQuotaForCustomerExceededFault";
}

export interface _NodeQuotaForCustomerExceededFaultDetails {}
