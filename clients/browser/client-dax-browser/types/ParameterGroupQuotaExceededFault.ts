import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have attempted to exceed the maximum number of parameter groups.</p>
 */
export interface ParameterGroupQuotaExceededFault
  extends __ServiceException__<_ParameterGroupQuotaExceededFaultDetails> {
  name: "ParameterGroupQuotaExceededFault";
}

export interface _ParameterGroupQuotaExceededFaultDetails {}
