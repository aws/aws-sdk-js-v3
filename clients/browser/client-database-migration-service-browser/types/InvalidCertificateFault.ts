import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The certificate was not valid.</p>
 */
export interface InvalidCertificateFault
  extends __ServiceException__<_InvalidCertificateFaultDetails> {
  name: "InvalidCertificateFault";
}

export interface _InvalidCertificateFaultDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
