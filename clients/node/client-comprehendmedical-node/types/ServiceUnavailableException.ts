import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The Comprehend Medical service is temporarily unavailable. Please wait and then retry your request. </p>
 */
export interface ServiceUnavailableException
  extends __ServiceException__<_ServiceUnavailableExceptionDetails> {
  name: "ServiceUnavailableException";
}

export interface _ServiceUnavailableExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
