import { _VpcConfigRequest } from "./_VpcConfigRequest";
import { _Logging } from "./_Logging";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateClusterInput shape
 */
export interface CreateClusterInput {
  /**
   * <p>The unique name to give to your cluster.</p>
   */
  name: string;

  /**
   * <p>The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used.</p>
   */
  version?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for Amazon EKS to make calls to other AWS API operations on your behalf. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html">Amazon EKS Service IAM Role</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p>
   */
  roleArn: string;

  /**
   * <p>The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html">Cluster VPC Considerations</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Cluster Security Group Considerations</a> in the <i>Amazon EKS User Guide</i>. You must specify at least two subnets. You can specify up to five security groups, but we recommend that you use a dedicated security group for your cluster control plane.</p>
   */
  resourcesVpcConfig: _VpcConfigRequest;

  /**
   * <p>Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p> <note> <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> </note>
   */
  logging?: _Logging;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
