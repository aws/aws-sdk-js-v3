import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the specified AWS CloudHSM cluster is already associated with a custom key store or it shares a backup history with a cluster that is associated with a custom key store. Each custom key store must be associated with a different AWS CloudHSM cluster.</p> <p>Clusters that share a backup history have the same cluster certificate. To view the cluster certificate of a cluster, use the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/API_DescribeClusters.html">DescribeClusters</a> operation.</p>
 */
export interface CloudHsmClusterInUseException
  extends __ServiceException__<_CloudHsmClusterInUseExceptionDetails> {
  name: "CloudHsmClusterInUseException";
}

export interface _CloudHsmClusterInUseExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  message?: string;
}
