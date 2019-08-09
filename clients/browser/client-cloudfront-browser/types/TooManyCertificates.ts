import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You cannot create anymore custom SSL/TLS certificates.</p>
 */
export interface TooManyCertificates
  extends __ServiceException__<_TooManyCertificatesDetails> {
  name: "TooManyCertificates";
}

export interface _TooManyCertificatesDetails {
  /**
   * _string shape
   */
  Message?: string;
}
