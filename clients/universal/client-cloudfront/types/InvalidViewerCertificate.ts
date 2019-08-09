import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A viewer certificate specified in the response body is not valid.</p>
 */
export interface InvalidViewerCertificate
  extends __ServiceException__<_InvalidViewerCertificateDetails> {
  name: "InvalidViewerCertificate";
}

export interface _InvalidViewerCertificateDetails {
  /**
   * _string shape
   */
  Message?: string;
}
