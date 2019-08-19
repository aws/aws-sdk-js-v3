import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified AWS KMS entity or resource can't be found.</p>
 */
export interface KMSNotFoundFault
  extends __ServiceException__<_KMSNotFoundFaultDetails> {
  name: "KMSNotFoundFault";
}

export interface _KMSNotFoundFaultDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
