import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request would result in user exceeding the allowed number of cluster subnet groups. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
 */
export interface ClusterSubnetGroupQuotaExceededFault
  extends __ServiceException__<_ClusterSubnetGroupQuotaExceededFaultDetails> {
  name: "ClusterSubnetGroupQuotaExceededFault";
}

export interface _ClusterSubnetGroupQuotaExceededFaultDetails {}
