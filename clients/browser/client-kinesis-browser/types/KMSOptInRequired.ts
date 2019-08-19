import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The AWS access key ID needs a subscription for the service.</p>
 */
export interface KMSOptInRequired
  extends __ServiceException__<_KMSOptInRequiredDetails> {
  name: "KMSOptInRequired";
}

export interface _KMSOptInRequiredDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
