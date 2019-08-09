import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request would exceed the allowed number of cluster instances for this account. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
 */
export interface ClusterQuotaExceededFault
  extends __ServiceException__<_ClusterQuotaExceededFaultDetails> {
  name: "ClusterQuotaExceededFault";
}

export interface _ClusterQuotaExceededFaultDetails {}
