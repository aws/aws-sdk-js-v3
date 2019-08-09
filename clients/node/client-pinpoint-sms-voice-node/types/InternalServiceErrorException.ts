import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * The API encountered an unexpected error and couldn't complete the request. You might be able to successfully issue the request again in the future.
 */
export interface InternalServiceErrorException
  extends __ServiceException__<_InternalServiceErrorExceptionDetails> {
  name: "InternalServiceErrorException";
}

export interface _InternalServiceErrorExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
