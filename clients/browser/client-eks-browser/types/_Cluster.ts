import {
  _VpcConfigResponse,
  _UnmarshalledVpcConfigResponse
} from "./_VpcConfigResponse";
import { _Logging, _UnmarshalledLogging } from "./_Logging";
import { _Certificate, _UnmarshalledCertificate } from "./_Certificate";

/**
 * <p>An object representing an Amazon EKS cluster.</p>
 */
export interface _Cluster {
  /**
   * <p>The name of the cluster.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  arn?: string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the cluster was created.</p>
   */
  createdAt?: Date | string | number;

  /**
   * <p>The Kubernetes server version for the cluster.</p>
   */
  version?: string;

  /**
   * <p>The endpoint for your Kubernetes API server.</p>
   */
  endpoint?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.</p>
   */
  roleArn?: string;

  /**
   * <p>The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html">Cluster VPC Considerations</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Cluster Security Group Considerations</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  resourcesVpcConfig?: _VpcConfigResponse;

  /**
   * <p>The logging configuration for your cluster.</p>
   */
  logging?: _Logging;

  /**
   * <p>The current status of the cluster.</p>
   */
  status?: "CREATING" | "ACTIVE" | "DELETING" | "FAILED" | string;

  /**
   * <p>The <code>certificate-authority-data</code> for your cluster.</p>
   */
  certificateAuthority?: _Certificate;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The platform version of your Amazon EKS cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/platform-versions.html">Platform Versions</a> in the <i> <i>Amazon EKS User Guide</i> </i>.</p>
   */
  platformVersion?: string;
}

export interface _UnmarshalledCluster extends _Cluster {
  /**
   * <p>The Unix epoch timestamp in seconds for when the cluster was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html">Cluster VPC Considerations</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Cluster Security Group Considerations</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  resourcesVpcConfig?: _UnmarshalledVpcConfigResponse;

  /**
   * <p>The logging configuration for your cluster.</p>
   */
  logging?: _UnmarshalledLogging;

  /**
   * <p>The <code>certificate-authority-data</code> for your cluster.</p>
   */
  certificateAuthority?: _UnmarshalledCertificate;
}
