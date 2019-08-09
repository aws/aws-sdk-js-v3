import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified HSM client certificate is not in the <code>available</code> state, or it is still in use by one or more Amazon Redshift clusters.</p>
 */
export interface InvalidHsmClientCertificateStateFault
  extends __ServiceException__<_InvalidHsmClientCertificateStateFaultDetails> {
  name: "InvalidHsmClientCertificateStateFault";
}

export interface _InvalidHsmClientCertificateStateFaultDetails {}
