import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is already an existing Amazon Redshift HSM client certificate with the specified identifier.</p>
 */
export interface HsmClientCertificateAlreadyExistsFault
  extends __ServiceException__<_HsmClientCertificateAlreadyExistsFaultDetails> {
  name: "HsmClientCertificateAlreadyExistsFault";
}

export interface _HsmClientCertificateAlreadyExistsFaultDetails {}
