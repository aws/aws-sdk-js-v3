import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the specified AWS CloudHSM cluster has a different cluster certificate than the original cluster. You cannot use the operation to specify an unrelated cluster.</p> <p>Specify a cluster that shares a backup history with the original cluster. This includes clusters that were created from a backup of the current cluster, and clusters that were created from the same backup that produced the current cluster.</p> <p>Clusters that share a backup history have the same cluster certificate. To view the cluster certificate of a cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation.</p>
 */
export interface CloudHsmClusterNotRelatedException
  extends __ServiceException__<_CloudHsmClusterNotRelatedExceptionDetails> {
  name: "CloudHsmClusterNotRelatedException";
}

export interface _CloudHsmClusterNotRelatedExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  message?: string;
}
