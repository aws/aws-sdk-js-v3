import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request cannot be completed because a dependent service is throttling requests made by Amazon Redshift on your behalf. Wait and retry the request.</p>
 */
export interface DependentServiceRequestThrottlingFault
  extends __ServiceException__<_DependentServiceRequestThrottlingFaultDetails> {
  name: "DependentServiceRequestThrottlingFault";
}

export interface _DependentServiceRequestThrottlingFaultDetails {}
