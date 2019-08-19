import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The quota for HSM configurations has been reached. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
 */
export interface HsmConfigurationQuotaExceededFault
  extends __ServiceException__<_HsmConfigurationQuotaExceededFaultDetails> {
  name: "HsmConfigurationQuotaExceededFault";
}

export interface _HsmConfigurationQuotaExceededFaultDetails {}
