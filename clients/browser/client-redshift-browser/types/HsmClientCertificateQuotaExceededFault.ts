import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The quota for HSM client certificates has been reached. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
 */
export interface HsmClientCertificateQuotaExceededFault
  extends __ServiceException__<_HsmClientCertificateQuotaExceededFaultDetails> {
  name: "HsmClientCertificateQuotaExceededFault";
}

export interface _HsmClientCertificateQuotaExceededFaultDetails {}
