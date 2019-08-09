import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An internal service error occurred.</p>
 */
export interface InternalServiceException
  extends __ServiceException__<_InternalServiceExceptionDetails> {
  name: "InternalServiceException";
}

export interface _InternalServiceExceptionDetails {
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}
