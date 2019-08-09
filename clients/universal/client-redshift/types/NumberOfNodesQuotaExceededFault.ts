import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation would exceed the number of nodes allotted to the account. For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
 */
export interface NumberOfNodesQuotaExceededFault
  extends __ServiceException__<_NumberOfNodesQuotaExceededFaultDetails> {
  name: "NumberOfNodesQuotaExceededFault";
}

export interface _NumberOfNodesQuotaExceededFaultDetails {}
