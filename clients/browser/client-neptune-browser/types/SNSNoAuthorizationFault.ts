import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is no SNS authorization.</p>
 */
export interface SNSNoAuthorizationFault
  extends __ServiceException__<_SNSNoAuthorizationFaultDetails> {
  name: "SNSNoAuthorizationFault";
}

export interface _SNSNoAuthorizationFaultDetails {}
