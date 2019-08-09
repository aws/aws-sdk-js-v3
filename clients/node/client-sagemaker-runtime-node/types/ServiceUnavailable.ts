import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The service is unavailable. Try your call again. </p>
 */
export interface ServiceUnavailable
  extends __ServiceException__<_ServiceUnavailableDetails> {
  name: "ServiceUnavailable";
}

export interface _ServiceUnavailableDetails {
  /**
   * _Message shape
   */
  Message?: string;
}
