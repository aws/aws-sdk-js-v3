import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The customer has exceeded the allowed rate of API calls.</p>
 */
export interface APICallRateForCustomerExceededFault
  extends __ServiceException__<_APICallRateForCustomerExceededFaultDetails> {
  name: "APICallRateForCustomerExceededFault";
}

export interface _APICallRateForCustomerExceededFaultDetails {}
