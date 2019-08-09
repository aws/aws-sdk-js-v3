import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You are not authorized for the SNS subscription.</p>
 */
export interface SNSNoAuthorizationFault
  extends __ServiceException__<_SNSNoAuthorizationFaultDetails> {
  name: "SNSNoAuthorizationFault";
}

export interface _SNSNoAuthorizationFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
