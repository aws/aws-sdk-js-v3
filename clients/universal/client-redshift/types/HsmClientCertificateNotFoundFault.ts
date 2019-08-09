import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is no Amazon Redshift HSM client certificate with the specified identifier.</p>
 */
export interface HsmClientCertificateNotFoundFault
  extends __ServiceException__<_HsmClientCertificateNotFoundFaultDetails> {
  name: "HsmClientCertificateNotFoundFault";
}

export interface _HsmClientCertificateNotFoundFaultDetails {}
