import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export type AMITypes = "AL2_x86_64" | "AL2_x86_64_GPU";

/**
 * <p>An Auto Scaling group that is associated with an Amazon EKS managed node group.</p>
 */
export interface AutoScalingGroup {
  __type?: "AutoScalingGroup";
  /**
   * <p>The name of the Auto Scaling group associated with an Amazon EKS managed node group.</p>
   */
  name?: string;
}

export namespace AutoScalingGroup {
  export function isa(o: any): o is AutoScalingGroup {
    return __isa(o, "AutoScalingGroup");
  }
}

/**
 * <p>This exception is thrown if the request contains a semantic error. The precise meaning
 *             will depend on the API, and will be documented in the error message.</p>
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return __isa(o, "BadRequestException");
  }
}

/**
 * <p>An object representing the <code>certificate-authority-data</code> for your
 *             cluster.</p>
 */
export interface Certificate {
  __type?: "Certificate";
  /**
   * <p>The Base64-encoded certificate data required to communicate with your cluster. Add
   *             this to the <code>certificate-authority-data</code> section of the
   *                 <code>kubeconfig</code> file for your cluster.</p>
   */
  data?: string;
}

export namespace Certificate {
  export function isa(o: any): o is Certificate {
    return __isa(o, "Certificate");
  }
}

/**
 * <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of a user that doesn't have permissions to use the action
 *             or resource or specifying an identifier that is not valid.</p>
 */
export interface ClientException extends __SmithyException, $MetadataBearer {
  name: "ClientException";
  $fault: "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  message?: string;
  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;
}

export namespace ClientException {
  export function isa(o: any): o is ClientException {
    return __isa(o, "ClientException");
  }
}

/**
 * <p>An object representing an Amazon EKS cluster.</p>
 */
export interface Cluster {
  __type?: "Cluster";
  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  arn?: string;

  /**
   * <p>The <code>certificate-authority-data</code> for your cluster.</p>
   */
  certificateAuthority?: Certificate;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the cluster was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The endpoint for your Kubernetes API server.</p>
   */
  endpoint?: string;

  /**
   * <p>The identity provider information for the cluster.</p>
   */
  identity?: Identity;

  /**
   * <p>The logging configuration for your cluster.</p>
   */
  logging?: Logging;

  /**
   * <p>The name of the cluster.</p>
   */
  name?: string;

  /**
   * <p>The platform version of your Amazon EKS cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/platform-versions.html">Platform
   *                 Versions</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have
   *             specific requirements to work properly with Kubernetes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html">Cluster VPC
   *                 Considerations</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Cluster Security Group Considerations</a> in the
   *             <i>Amazon EKS User Guide</i>.</p>
   */
  resourcesVpcConfig?: VpcConfigResponse;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control
   *             plane to make calls to AWS API operations on your behalf.</p>
   */
  roleArn?: string;

  /**
   * <p>The current status of the cluster.</p>
   */
  status?: ClusterStatus | string;

  /**
   * <p>The metadata that you apply to the cluster to assist with categorization and
   *             organization. Each tag consists of a key and an optional value, both of which you
   *             define. Cluster tags do not propagate to any other resources associated with the
   *             cluster. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The Kubernetes server version for the cluster.</p>
   */
  version?: string;
}

export namespace Cluster {
  export function isa(o: any): o is Cluster {
    return __isa(o, "Cluster");
  }
}

export type ClusterStatus =
  | "ACTIVE"
  | "CREATING"
  | "DELETING"
  | "FAILED"
  | "UPDATING";

export interface CreateClusterRequest {
  __type?: "CreateClusterRequest";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>Enable or disable exporting the Kubernetes control plane logs for your cluster to
   *             CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   *         <note>
   *             <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported
   *                 control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
   *         </note>
   */
  logging?: Logging;

  /**
   * <p>The unique name to give to your cluster.</p>
   */
  name: string | undefined;

  /**
   * <p>The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have
   *             specific requirements to work properly with Kubernetes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html">Cluster VPC
   *                 Considerations</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Cluster Security Group Considerations</a> in the
   *             <i>Amazon EKS User Guide</i>. You must specify at least two subnets. You can specify up to five
   *             security groups, but we recommend that you use a dedicated security group for your
   *             cluster control plane.</p>
   */
  resourcesVpcConfig: VpcConfigRequest | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for Amazon EKS to make calls to
   *             other AWS API operations on your behalf. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html">Amazon EKS Service
   *                 IAM Role</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The metadata to apply to the cluster to assist with categorization and organization.
   *             Each tag consists of a key and an optional value, both of which you define.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The desired Kubernetes version for your cluster. If you don't specify a value here,
   *             the latest version available in Amazon EKS is used.</p>
   */
  version?: string;
}

export namespace CreateClusterRequest {
  export function isa(o: any): o is CreateClusterRequest {
    return __isa(o, "CreateClusterRequest");
  }
}

export interface CreateClusterResponse {
  __type?: "CreateClusterResponse";
  /**
   * <p>The full description of your new cluster.</p>
   */
  cluster?: Cluster;
}

export namespace CreateClusterResponse {
  export function isa(o: any): o is CreateClusterResponse {
    return __isa(o, "CreateClusterResponse");
  }
}

export interface CreateFargateProfileRequest {
  __type?: "CreateFargateProfileRequest";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The name of the Amazon EKS cluster to apply the Fargate profile to.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the Fargate profile.</p>
   */
  fargateProfileName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in
   *             the Fargate profile. The pod execution role allows Fargate infrastructure to register with
   *             your cluster as a node, and it provides read access to Amazon ECR image repositories. For
   *             more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the
   *             <i>Amazon EKS User Guide</i>.</p>
   */
  podExecutionRoleArn: string | undefined;

  /**
   * <p>The selectors to match for pods to use this Fargate profile. Each selector must have an
   *             associated namespace. Optionally, you can also specify labels for a namespace. You may
   *             specify up to five selectors in a Fargate profile.</p>
   */
  selectors?: Array<FargateProfileSelector>;

  /**
   * <p>The IDs of subnets to launch your pods into. At this time, pods running on Fargate are
   *             not assigned public IP addresses, so only private subnets (with no direct route to an
   *             Internet Gateway) are accepted for this parameter.</p>
   */
  subnets?: Array<string>;

  /**
   * <p>The metadata to apply to the Fargate profile to assist with categorization and
   *             organization. Each tag consists of a key and an optional value, both of which you
   *             define. Fargate profile tags do not propagate to any other resources associated with the
   *             Fargate profile, such as the pods that are scheduled with it.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateFargateProfileRequest {
  export function isa(o: any): o is CreateFargateProfileRequest {
    return __isa(o, "CreateFargateProfileRequest");
  }
}

export interface CreateFargateProfileResponse {
  __type?: "CreateFargateProfileResponse";
  /**
   * <p>The full description of your new Fargate profile.</p>
   */
  fargateProfile?: FargateProfile;
}

export namespace CreateFargateProfileResponse {
  export function isa(o: any): o is CreateFargateProfileResponse {
    return __isa(o, "CreateFargateProfileResponse");
  }
}

export interface CreateNodegroupRequest {
  __type?: "CreateNodegroupRequest";
  /**
   * <p>The AMI type for your node group. GPU instance types should use the
   *                 <code>AL2_x86_64_GPU</code> AMI type, which uses the Amazon EKS-optimized Linux AMI with
   *             GPU support. Non-GPU instances should use the <code>AL2_x86_64</code> AMI type, which
   *             uses the Amazon EKS-optimized Linux AMI.</p>
   */
  amiType?: AMITypes | string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The name of the cluster to create the node group in.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The root device disk size (in GiB) for your node group instances. The default disk
   *             size is 20 GiB.</p>
   */
  diskSize?: number;

  /**
   * <p>The instance type to use for your node group. Currently, you can specify a single
   *             instance type for a node group. The default value for this parameter is
   *                 <code>t3.medium</code>. If you choose a GPU instance type, be sure to specify the
   *                 <code>AL2_x86_64_GPU</code> with the <code>amiType</code> parameter.</p>
   */
  instanceTypes?: Array<string>;

  /**
   * <p>The Kubernetes labels to be applied to the nodes in the node group when they are
   *             created.</p>
   */
  labels?: { [key: string]: string };

  /**
   * <p>The IAM role associated with your node group. The Amazon EKS worker node
   *                 <code>kubelet</code> daemon makes calls to AWS APIs on your behalf. Worker nodes
   *             receive permissions for these API calls through an IAM instance profile and associated
   *             policies. Before you can launch worker nodes and register them into a cluster, you must
   *             create an IAM role for those worker nodes to use when they are launched. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html">Amazon EKS Worker Node IAM Role</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  nodeRole: string | undefined;

  /**
   * <p>The unique name to give your node group.</p>
   */
  nodegroupName: string | undefined;

  /**
   * <p>The AMI version of the Amazon EKS-optimized AMI to use with your node group. By default,
   *             the latest available AMI version for the node group's current Kubernetes version is
   *             used. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS-Optimized Linux AMI Versions</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  releaseVersion?: string;

  /**
   * <p>The remote access (SSH) configuration to use with your node group.</p>
   */
  remoteAccess?: RemoteAccessConfig;

  /**
   * <p>The scaling configuration details for the Auto Scaling group that is created for your
   *             node group.</p>
   */
  scalingConfig?: NodegroupScalingConfig;

  /**
   * <p>The subnets to use for the Auto Scaling group that is created for your node group.
   *             These subnets must have the tag key <code>kubernetes.io/cluster/CLUSTER_NAME</code> with
   *             a value of <code>shared</code>, where <code>CLUSTER_NAME</code> is replaced with the
   *             name of your cluster.</p>
   */
  subnets: Array<string> | undefined;

  /**
   * <p>The metadata to apply to the node group to assist with categorization and
   *             organization. Each tag consists of a key and an optional value, both of which you
   *             define. Node group tags do not propagate to any other resources associated with the node
   *             group, such as the Amazon EC2 instances or subnets.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The Kubernetes version to use for your managed nodes. By default, the Kubernetes
   *             version of the cluster is used, and this is the only accepted specified value.</p>
   */
  version?: string;
}

export namespace CreateNodegroupRequest {
  export function isa(o: any): o is CreateNodegroupRequest {
    return __isa(o, "CreateNodegroupRequest");
  }
}

export interface CreateNodegroupResponse {
  __type?: "CreateNodegroupResponse";
  /**
   * <p>The full description of your new node group.</p>
   */
  nodegroup?: Nodegroup;
}

export namespace CreateNodegroupResponse {
  export function isa(o: any): o is CreateNodegroupResponse {
    return __isa(o, "CreateNodegroupResponse");
  }
}

export interface DeleteClusterRequest {
  __type?: "DeleteClusterRequest";
  /**
   * <p>The name of the cluster to delete.</p>
   */
  name: string | undefined;
}

export namespace DeleteClusterRequest {
  export function isa(o: any): o is DeleteClusterRequest {
    return __isa(o, "DeleteClusterRequest");
  }
}

export interface DeleteClusterResponse {
  __type?: "DeleteClusterResponse";
  /**
   * <p>The full description of the cluster to delete.</p>
   */
  cluster?: Cluster;
}

export namespace DeleteClusterResponse {
  export function isa(o: any): o is DeleteClusterResponse {
    return __isa(o, "DeleteClusterResponse");
  }
}

export interface DeleteFargateProfileRequest {
  __type?: "DeleteFargateProfileRequest";
  /**
   * <p>The name of the Amazon EKS cluster associated with the Fargate profile to delete.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the Fargate profile to delete.</p>
   */
  fargateProfileName: string | undefined;
}

export namespace DeleteFargateProfileRequest {
  export function isa(o: any): o is DeleteFargateProfileRequest {
    return __isa(o, "DeleteFargateProfileRequest");
  }
}

export interface DeleteFargateProfileResponse {
  __type?: "DeleteFargateProfileResponse";
  /**
   * <p>The deleted Fargate profile.</p>
   */
  fargateProfile?: FargateProfile;
}

export namespace DeleteFargateProfileResponse {
  export function isa(o: any): o is DeleteFargateProfileResponse {
    return __isa(o, "DeleteFargateProfileResponse");
  }
}

export interface DeleteNodegroupRequest {
  __type?: "DeleteNodegroupRequest";
  /**
   * <p>The name of the Amazon EKS cluster that is associated with your node group.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the node group to delete.</p>
   */
  nodegroupName: string | undefined;
}

export namespace DeleteNodegroupRequest {
  export function isa(o: any): o is DeleteNodegroupRequest {
    return __isa(o, "DeleteNodegroupRequest");
  }
}

export interface DeleteNodegroupResponse {
  __type?: "DeleteNodegroupResponse";
  /**
   * <p>The full description of your deleted node group.</p>
   */
  nodegroup?: Nodegroup;
}

export namespace DeleteNodegroupResponse {
  export function isa(o: any): o is DeleteNodegroupResponse {
    return __isa(o, "DeleteNodegroupResponse");
  }
}

export interface DescribeClusterRequest {
  __type?: "DescribeClusterRequest";
  /**
   * <p>The name of the cluster to describe.</p>
   */
  name: string | undefined;
}

export namespace DescribeClusterRequest {
  export function isa(o: any): o is DescribeClusterRequest {
    return __isa(o, "DescribeClusterRequest");
  }
}

export interface DescribeClusterResponse {
  __type?: "DescribeClusterResponse";
  /**
   * <p>The full description of your specified cluster.</p>
   */
  cluster?: Cluster;
}

export namespace DescribeClusterResponse {
  export function isa(o: any): o is DescribeClusterResponse {
    return __isa(o, "DescribeClusterResponse");
  }
}

export interface DescribeFargateProfileRequest {
  __type?: "DescribeFargateProfileRequest";
  /**
   * <p>The name of the Amazon EKS cluster associated with the Fargate profile.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the Fargate profile to describe.</p>
   */
  fargateProfileName: string | undefined;
}

export namespace DescribeFargateProfileRequest {
  export function isa(o: any): o is DescribeFargateProfileRequest {
    return __isa(o, "DescribeFargateProfileRequest");
  }
}

export interface DescribeFargateProfileResponse {
  __type?: "DescribeFargateProfileResponse";
  /**
   * <p>The full description of your Fargate profile.</p>
   */
  fargateProfile?: FargateProfile;
}

export namespace DescribeFargateProfileResponse {
  export function isa(o: any): o is DescribeFargateProfileResponse {
    return __isa(o, "DescribeFargateProfileResponse");
  }
}

export interface DescribeNodegroupRequest {
  __type?: "DescribeNodegroupRequest";
  /**
   * <p>The name of the Amazon EKS cluster associated with the node group.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the node group to describe.</p>
   */
  nodegroupName: string | undefined;
}

export namespace DescribeNodegroupRequest {
  export function isa(o: any): o is DescribeNodegroupRequest {
    return __isa(o, "DescribeNodegroupRequest");
  }
}

export interface DescribeNodegroupResponse {
  __type?: "DescribeNodegroupResponse";
  /**
   * <p>The full description of your node group.</p>
   */
  nodegroup?: Nodegroup;
}

export namespace DescribeNodegroupResponse {
  export function isa(o: any): o is DescribeNodegroupResponse {
    return __isa(o, "DescribeNodegroupResponse");
  }
}

export interface DescribeUpdateRequest {
  __type?: "DescribeUpdateRequest";
  /**
   * <p>The name of the Amazon EKS cluster associated with the update.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the Amazon EKS node group associated with the update.</p>
   */
  nodegroupName?: string;

  /**
   * <p>The ID of the update to describe.</p>
   */
  updateId: string | undefined;
}

export namespace DescribeUpdateRequest {
  export function isa(o: any): o is DescribeUpdateRequest {
    return __isa(o, "DescribeUpdateRequest");
  }
}

export interface DescribeUpdateResponse {
  __type?: "DescribeUpdateResponse";
  /**
   * <p>The full description of the specified update.</p>
   */
  update?: Update;
}

export namespace DescribeUpdateResponse {
  export function isa(o: any): o is DescribeUpdateResponse {
    return __isa(o, "DescribeUpdateResponse");
  }
}

export enum ErrorCode {
  ACCESS_DENIED = "AccessDenied",
  ENI_LIMIT_REACHED = "EniLimitReached",
  INSUFFICIENT_FREE_ADDRESSES = "InsufficientFreeAddresses",
  IP_NOT_AVAILABLE = "IpNotAvailable",
  NODE_CREATION_FAILURE = "NodeCreationFailure",
  OPERATION_NOT_PERMITTED = "OperationNotPermitted",
  POD_EVICTION_FAILURE = "PodEvictionFailure",
  SECURITY_GROUP_NOT_FOUND = "SecurityGroupNotFound",
  SUBNET_NOT_FOUND = "SubnetNotFound",
  UNKNOWN = "Unknown",
  VPC_ID_NOT_FOUND = "VpcIdNotFound"
}

/**
 * <p>An object representing an error when an asynchronous operation fails.</p>
 */
export interface ErrorDetail {
  __type?: "ErrorDetail";
  /**
   * <p>A brief description of the error. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>SubnetNotFound</b>: We couldn't find one of the
   *                     subnets associated with the cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>SecurityGroupNotFound</b>: We couldn't find one
   *                     of the security groups associated with the cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>EniLimitReached</b>: You have reached the elastic
   *                     network interface limit for your account.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>IpNotAvailable</b>: A subnet associated with the
   *                     cluster doesn't have any free IP addresses.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>AccessDenied</b>: You don't have permissions to
   *                     perform the specified operation.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>OperationNotPermitted</b>: The service role
   *                     associated with the cluster doesn't have the required access permissions for
   *                     Amazon EKS.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>VpcIdNotFound</b>: We couldn't find the VPC
   *                     associated with the cluster.</p>
   *             </li>
   *          </ul>
   */
  errorCode?: ErrorCode | string;

  /**
   * <p>A more complete description of the error.</p>
   */
  errorMessage?: string;

  /**
   * <p>An optional field that contains the resource IDs associated with the error.</p>
   */
  resourceIds?: Array<string>;
}

export namespace ErrorDetail {
  export function isa(o: any): o is ErrorDetail {
    return __isa(o, "ErrorDetail");
  }
}

/**
 * <p>An object representing an AWS Fargate profile.</p>
 */
export interface FargateProfile {
  __type?: "FargateProfile";
  /**
   * <p>The name of the Amazon EKS cluster that the Fargate profile belongs to.</p>
   */
  clusterName?: string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the Fargate profile was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The full Amazon Resource Name (ARN) of the Fargate profile.</p>
   */
  fargateProfileArn?: string;

  /**
   * <p>The name of the Fargate profile.</p>
   */
  fargateProfileName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in
   *             the Fargate profile. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod
   *                 Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  podExecutionRoleArn?: string;

  /**
   * <p>The selectors to match for pods to use this Fargate profile.</p>
   */
  selectors?: Array<FargateProfileSelector>;

  /**
   * <p>The current status of the Fargate profile.</p>
   */
  status?: FargateProfileStatus | string;

  /**
   * <p>The IDs of subnets to launch pods into.</p>
   */
  subnets?: Array<string>;

  /**
   * <p>The metadata applied to the Fargate profile to assist with categorization and
   *             organization. Each tag consists of a key and an optional value, both of which you
   *             define. Fargate profile tags do not propagate to any other resources associated with the
   *             Fargate profile, such as the pods that are scheduled with it.</p>
   */
  tags?: { [key: string]: string };
}

export namespace FargateProfile {
  export function isa(o: any): o is FargateProfile {
    return __isa(o, "FargateProfile");
  }
}

/**
 * <p>An object representing an AWS Fargate profile selector.</p>
 */
export interface FargateProfileSelector {
  __type?: "FargateProfileSelector";
  /**
   * <p>The Kubernetes labels that the selector should match. A pod must contain all of the
   *             labels that are specified in the selector for it to be considered a match.</p>
   */
  labels?: { [key: string]: string };

  /**
   * <p>The Kubernetes namespace that the selector should match.</p>
   */
  namespace?: string;
}

export namespace FargateProfileSelector {
  export function isa(o: any): o is FargateProfileSelector {
    return __isa(o, "FargateProfileSelector");
  }
}

export type FargateProfileStatus =
  | "ACTIVE"
  | "CREATE_FAILED"
  | "CREATING"
  | "DELETE_FAILED"
  | "DELETING";

/**
 * <p>An object representing an identity provider for authentication credentials.</p>
 */
export interface Identity {
  __type?: "Identity";
  /**
   * <p>The <a href="https://openid.net/connect/">OpenID Connect</a> identity provider
   *             information for the cluster.</p>
   */
  oidc?: OIDC;
}

export namespace Identity {
  export function isa(o: any): o is Identity {
    return __isa(o, "Identity");
  }
}

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * <p>The Fargate profile associated with the exception.</p>
   */
  fargateProfileName?: string;

  message?: string;
  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return __isa(o, "InvalidParameterException");
  }
}

/**
 * <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  message?: string;
  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

/**
 * <p>An object representing an issue with an Amazon EKS resource.</p>
 */
export interface Issue {
  __type?: "Issue";
  /**
   * <p>A brief description of the error.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>AutoScalingGroupNotFound</b>: We couldn't find
   *                     the Auto Scaling group associated with the managed node group. You may be able to
   *                     recreate an Auto Scaling group with the same settings to recover.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Ec2SecurityGroupNotFound</b>: We couldn't find
   *                     the cluster security group for the cluster. You must recreate your
   *                     cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Ec2SecurityGroupDeletionFailure</b>: We could not
   *                     delete the remote access security group for your managed node group. Remove any
   *                     dependencies from the security group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Ec2LaunchTemplateNotFound</b>: We couldn't find
   *                     the Amazon EC2 launch template for your managed node group. You may be able to
   *                     recreate a launch template with the same settings to recover.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Ec2LaunchTemplateVersionMismatch</b>: The Amazon EC2
   *                     launch template version for your managed node group does not match the version
   *                     that Amazon EKS created. You may be able to revert to the version that Amazon EKS created
   *                     to recover.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>IamInstanceProfileNotFound</b>: We couldn't find
   *                     the IAM instance profile for your managed node group. You may be able to
   *                     recreate an instance profile with the same settings to recover.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>IamNodeRoleNotFound</b>: We couldn't find the
   *                     IAM role for your managed node group. You may be able to recreate an IAM role
   *                     with the same settings to recover.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>AsgInstanceLaunchFailures</b>: Your Auto Scaling group is
   *                     experiencing failures while attempting to launch instances.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>NodeCreationFailure</b>: Your launched instances
   *                     are unable to register with your Amazon EKS cluster. Common causes of this failure
   *                     are insufficient <a href="https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html">worker node IAM
   *                         role</a> permissions or lack of outbound internet access for the nodes.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>InstanceLimitExceeded</b>: Your AWS account is
   *                     unable to launch any more instances of the specified instance type. You may be
   *                     able to request an Amazon EC2 instance limit increase to recover.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>InsufficientFreeAddresses</b>: One or more of the
   *                     subnets associated with your managed node group does not have enough available
   *                     IP addresses for new nodes.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>AccessDenied</b>: Amazon EKS or one or more of your
   *                     managed nodes is unable to communicate with your cluster API server.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>InternalFailure</b>: These errors are usually
   *                     caused by an Amazon EKS server-side issue.</p>
   *             </li>
   *          </ul>
   */
  code?: NodegroupIssueCode | string;

  /**
   * <p>The error message associated with the issue.</p>
   */
  message?: string;

  /**
   * <p>The AWS resources that are afflicted by this issue.</p>
   */
  resourceIds?: Array<string>;
}

export namespace Issue {
  export function isa(o: any): o is Issue {
    return __isa(o, "Issue");
  }
}

export interface ListClustersRequest {
  __type?: "ListClustersRequest";
  /**
   * <p>The maximum number of cluster results returned by <code>ListClusters</code> in
   *             paginated output. When you use this parameter, <code>ListClusters</code> returns only
   *                 <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *             response element. You can see the remaining results of the initial request by sending
   *             another <code>ListClusters</code> request with the returned <code>nextToken</code>
   *             value. This value can be between 1 and 100. If you don't
   *             use this parameter, <code>ListClusters</code> returns up to 100
   *             results and a <code>nextToken</code> value if applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>ListClusters</code> request where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the
   *             previous results that returned the <code>nextToken</code> value.</p>
   *         <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;
}

export namespace ListClustersRequest {
  export function isa(o: any): o is ListClustersRequest {
    return __isa(o, "ListClustersRequest");
  }
}

export interface ListClustersResponse {
  __type?: "ListClustersResponse";
  /**
   * <p>A list of all of the clusters for your account in the specified Region.</p>
   */
  clusters?: Array<string>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListClusters</code>
   *             request. When the results of a <code>ListClusters</code> request exceed
   *                 <code>maxResults</code>, you can use this value to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   */
  nextToken?: string;
}

export namespace ListClustersResponse {
  export function isa(o: any): o is ListClustersResponse {
    return __isa(o, "ListClustersResponse");
  }
}

export interface ListFargateProfilesRequest {
  __type?: "ListFargateProfilesRequest";
  /**
   * <p>The name of the Amazon EKS cluster that you would like to listFargate profiles in.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The maximum number of Fargate profile results returned by
   *                 <code>ListFargateProfiles</code> in paginated output. When you use this parameter,
   *                 <code>ListFargateProfiles</code> returns only <code>maxResults</code> results in a
   *             single page along with a <code>nextToken</code> response element. You can see the
   *             remaining results of the initial request by sending another
   *                 <code>ListFargateProfiles</code> request with the returned <code>nextToken</code>
   *             value. This value can be between 1 and 100. If you don't
   *             use this parameter, <code>ListFargateProfiles</code> returns up to 100
   *             results and a <code>nextToken</code> value if applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>ListFargateProfiles</code> request where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;
}

export namespace ListFargateProfilesRequest {
  export function isa(o: any): o is ListFargateProfilesRequest {
    return __isa(o, "ListFargateProfilesRequest");
  }
}

export interface ListFargateProfilesResponse {
  __type?: "ListFargateProfilesResponse";
  /**
   * <p>A list of all of the Fargate profiles associated with the specified cluster.</p>
   */
  fargateProfileNames?: Array<string>;

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>ListFargateProfiles</code> request. When the results of a
   *                 <code>ListFargateProfiles</code> request exceed <code>maxResults</code>, you can use
   *             this value to retrieve the next page of results. This value is <code>null</code> when
   *             there are no more results to return.</p>
   */
  nextToken?: string;
}

export namespace ListFargateProfilesResponse {
  export function isa(o: any): o is ListFargateProfilesResponse {
    return __isa(o, "ListFargateProfilesResponse");
  }
}

export interface ListNodegroupsRequest {
  __type?: "ListNodegroupsRequest";
  /**
   * <p>The name of the Amazon EKS cluster that you would like to list node groups in.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The maximum number of node group results returned by <code>ListNodegroups</code> in
   *             paginated output. When you use this parameter, <code>ListNodegroups</code> returns only
   *                 <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *             response element. You can see the remaining results of the initial request by sending
   *             another <code>ListNodegroups</code> request with the returned <code>nextToken</code>
   *             value. This value can be between 1 and 100. If you don't
   *             use this parameter, <code>ListNodegroups</code> returns up to 100
   *             results and a <code>nextToken</code> value if applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>ListNodegroups</code> request where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the
   *             previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;
}

export namespace ListNodegroupsRequest {
  export function isa(o: any): o is ListNodegroupsRequest {
    return __isa(o, "ListNodegroupsRequest");
  }
}

export interface ListNodegroupsResponse {
  __type?: "ListNodegroupsResponse";
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListNodegroups</code>
   *             request. When the results of a <code>ListNodegroups</code> request exceed
   *                 <code>maxResults</code>, you can use this value to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of all of the node groups associated with the specified cluster.</p>
   */
  nodegroups?: Array<string>;
}

export namespace ListNodegroupsResponse {
  export function isa(o: any): o is ListNodegroupsResponse {
    return __isa(o, "ListNodegroupsResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the
   *             supported resources are Amazon EKS clusters and managed node groups.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The tags for the resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

export interface ListUpdatesRequest {
  __type?: "ListUpdatesRequest";
  /**
   * <p>The maximum number of update results returned by <code>ListUpdates</code> in paginated
   *             output. When you use this parameter, <code>ListUpdates</code> returns only
   *                 <code>maxResults</code> results in a single page along with a <code>nextToken</code>
   *             response element. You can see the remaining results of the initial request by sending
   *             another <code>ListUpdates</code> request with the returned <code>nextToken</code> value.
   *             This value can be between 1 and 100. If you don't use this
   *             parameter, <code>ListUpdates</code> returns up to 100 results and a
   *                 <code>nextToken</code> value if applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The name of the Amazon EKS cluster to list updates for.</p>
   */
  name: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>ListUpdates</code> request where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the
   *             previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the Amazon EKS managed node group to list updates for.</p>
   */
  nodegroupName?: string;
}

export namespace ListUpdatesRequest {
  export function isa(o: any): o is ListUpdatesRequest {
    return __isa(o, "ListUpdatesRequest");
  }
}

export interface ListUpdatesResponse {
  __type?: "ListUpdatesResponse";
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListUpdates</code>
   *             request. When the results of a <code>ListUpdates</code> request exceed
   *                 <code>maxResults</code>, you can use this value to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of all the updates for the specified cluster and Region.</p>
   */
  updateIds?: Array<string>;
}

export namespace ListUpdatesResponse {
  export function isa(o: any): o is ListUpdatesResponse {
    return __isa(o, "ListUpdatesResponse");
  }
}

/**
 * <p>An object representing the enabled or disabled Kubernetes control plane logs for your
 *             cluster.</p>
 */
export interface LogSetup {
  __type?: "LogSetup";
  /**
   * <p>If a log type is enabled, that log type exports its control plane logs to CloudWatch Logs. If a
   *             log type isn't enabled, that log type doesn't export its control plane logs. Each
   *             individual log type can be enabled or disabled independently.</p>
   */
  enabled?: boolean;

  /**
   * <p>The available cluster control plane log types.</p>
   */
  types?: Array<LogType | string>;
}

export namespace LogSetup {
  export function isa(o: any): o is LogSetup {
    return __isa(o, "LogSetup");
  }
}

export enum LogType {
  API = "api",
  AUDIT = "audit",
  AUTHENTICATOR = "authenticator",
  CONTROLLER_MANAGER = "controllerManager",
  SCHEDULER = "scheduler"
}

/**
 * <p>An object representing the logging configuration for resources in your cluster.</p>
 */
export interface Logging {
  __type?: "Logging";
  /**
   * <p>The cluster control plane logging configuration for your cluster.</p>
   */
  clusterLogging?: Array<LogSetup>;
}

export namespace Logging {
  export function isa(o: any): o is Logging {
    return __isa(o, "Logging");
  }
}

/**
 * <p>An object representing an Amazon EKS managed node group.</p>
 */
export interface Nodegroup {
  __type?: "Nodegroup";
  /**
   * <p>The AMI type associated with your node group. GPU instance types should use the
   *                 <code>AL2_x86_64_GPU</code> AMI type, which uses the Amazon EKS-optimized Linux AMI with
   *             GPU support. Non-GPU instances should use the <code>AL2_x86_64</code> AMI type, which
   *             uses the Amazon EKS-optimized Linux AMI.</p>
   */
  amiType?: AMITypes | string;

  /**
   * <p>The name of the cluster that the managed node group resides in.</p>
   */
  clusterName?: string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the managed node group was
   *             created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The root device disk size (in GiB) for your node group instances. The default disk
   *             size is 20 GiB.</p>
   */
  diskSize?: number;

  /**
   * <p>The health status of the node group. If there are issues with your node group's
   *             health, they are listed here.</p>
   */
  health?: NodegroupHealth;

  /**
   * <p>The instance types associated with your node group.</p>
   */
  instanceTypes?: Array<string>;

  /**
   * <p>The Kubernetes labels applied to the nodes in the node group.</p>
   *         <note>
   *             <p>Only labels that are applied with the Amazon EKS API are shown here. There may be other
   *                 Kubernetes labels applied to the nodes in this group.</p>
   *         </note>
   */
  labels?: { [key: string]: string };

  /**
   * <p>The Unix epoch timestamp in seconds for when the managed node group was last
   *             modified.</p>
   */
  modifiedAt?: Date;

  /**
   * <p>The IAM role associated with your node group. The Amazon EKS worker node
   *                 <code>kubelet</code> daemon makes calls to AWS APIs on your behalf. Worker nodes
   *             receive permissions for these API calls through an IAM instance profile and associated
   *             policies. Before you can launch worker nodes and register them into a cluster, you must
   *             create an IAM role for those worker nodes to use when they are launched. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html">Amazon EKS Worker Node IAM Role</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  nodeRole?: string;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the managed node group.</p>
   */
  nodegroupArn?: string;

  /**
   * <p>The name associated with an Amazon EKS managed node group.</p>
   */
  nodegroupName?: string;

  /**
   * <p>The AMI version of the managed node group. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS-Optimized Linux AMI Versions </a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  releaseVersion?: string;

  /**
   * <p>The remote access (SSH) configuration that is associated with the node group.</p>
   */
  remoteAccess?: RemoteAccessConfig;

  /**
   * <p>The resources associated with the node group, such as Auto Scaling groups and security
   *             groups for remote access.</p>
   */
  resources?: NodegroupResources;

  /**
   * <p>The scaling configuration details for the Auto Scaling group that is associated with
   *             your node group.</p>
   */
  scalingConfig?: NodegroupScalingConfig;

  /**
   * <p>The current status of the managed node group.</p>
   */
  status?: NodegroupStatus | string;

  /**
   * <p>The subnets allowed for the Auto Scaling group that is associated with your node
   *             group. These subnets must have the following tag:
   *                 <code>kubernetes.io/cluster/CLUSTER_NAME</code>, where <code>CLUSTER_NAME</code> is
   *             replaced with the name of your cluster.</p>
   */
  subnets?: Array<string>;

  /**
   * <p>The metadata applied to the node group to assist with categorization and organization.
   *             Each tag consists of a key and an optional value, both of which you define. Node group
   *             tags do not propagate to any other resources associated with the node group, such as the
   *             Amazon EC2 instances or subnets. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The Kubernetes version of the managed node group.</p>
   */
  version?: string;
}

export namespace Nodegroup {
  export function isa(o: any): o is Nodegroup {
    return __isa(o, "Nodegroup");
  }
}

/**
 * <p>An object representing the health status of the node group.</p>
 */
export interface NodegroupHealth {
  __type?: "NodegroupHealth";
  /**
   * <p>Any issues that are associated with the node group. </p>
   */
  issues?: Array<Issue>;
}

export namespace NodegroupHealth {
  export function isa(o: any): o is NodegroupHealth {
    return __isa(o, "NodegroupHealth");
  }
}

export enum NodegroupIssueCode {
  ACCESS_DENIED = "AccessDenied",
  ASG_INSTANCE_LAUNCH_FAILURES = "AsgInstanceLaunchFailures",
  AUTO_SCALING_GROUP_NOT_FOUND = "AutoScalingGroupNotFound",
  EC2_LAUNCH_TEMPLATE_NOT_FOUND = "Ec2LaunchTemplateNotFound",
  EC2_LAUNCH_TEMPLATE_VERSION_MISMATCH = "Ec2LaunchTemplateVersionMismatch",
  EC2_SECURITY_GROUP_DELETION_FAILURE = "Ec2SecurityGroupDeletionFailure",
  EC2_SECURITY_GROUP_NOT_FOUND = "Ec2SecurityGroupNotFound",
  IAM_INSTANCE_PROFILE_NOT_FOUND = "IamInstanceProfileNotFound",
  IAM_NODE_ROLE_NOT_FOUND = "IamNodeRoleNotFound",
  INSTANCE_LIMIT_EXCEEDED = "InstanceLimitExceeded",
  INSUFFICIENT_FREE_ADDRESSES = "InsufficientFreeAddresses",
  INTERNAL_FAILURE = "InternalFailure"
}

/**
 * <p>An object representing the resources associated with the node group, such as Auto
 *             Scaling groups and security groups for remote access.</p>
 */
export interface NodegroupResources {
  __type?: "NodegroupResources";
  /**
   * <p>The Auto Scaling groups associated with the node group.</p>
   */
  autoScalingGroups?: Array<AutoScalingGroup>;

  /**
   * <p>The remote access security group associated with the node group. This security group
   *             controls SSH access to the worker nodes.</p>
   */
  remoteAccessSecurityGroup?: string;
}

export namespace NodegroupResources {
  export function isa(o: any): o is NodegroupResources {
    return __isa(o, "NodegroupResources");
  }
}

/**
 * <p>An object representing the scaling configuration details for the Auto Scaling group
 *             that is associated with your node group.</p>
 */
export interface NodegroupScalingConfig {
  __type?: "NodegroupScalingConfig";
  /**
   * <p>The current number of worker nodes that the managed node group should maintain.</p>
   */
  desiredSize?: number;

  /**
   * <p>The maximum number of worker nodes that the managed node group can scale out to.
   *             Managed node groups can support up to 100 nodes by default.</p>
   */
  maxSize?: number;

  /**
   * <p>The minimum number of worker nodes that the managed node group can scale in to. This
   *             number must be greater than zero.</p>
   */
  minSize?: number;
}

export namespace NodegroupScalingConfig {
  export function isa(o: any): o is NodegroupScalingConfig {
    return __isa(o, "NodegroupScalingConfig");
  }
}

export type NodegroupStatus =
  | "ACTIVE"
  | "CREATE_FAILED"
  | "CREATING"
  | "DEGRADED"
  | "DELETE_FAILED"
  | "DELETING"
  | "UPDATING";

/**
 * <p>A service resource associated with the request could not be found. Clients should not
 *             retry such requests.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  message?: string;
}

export namespace NotFoundException {
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
}

/**
 * <p>An object representing the <a href="https://openid.net/connect/">OpenID
 *                 Connect</a> identity provider information for the cluster.</p>
 */
export interface OIDC {
  __type?: "OIDC";
  /**
   * <p>The issuer URL for the OpenID Connect identity provider.</p>
   */
  issuer?: string;
}

export namespace OIDC {
  export function isa(o: any): o is OIDC {
    return __isa(o, "OIDC");
  }
}

/**
 * <p>An object representing the remote access configuration for the managed node
 *             group.</p>
 */
export interface RemoteAccessConfig {
  __type?: "RemoteAccessConfig";
  /**
   * <p>The Amazon EC2 SSH key that provides access for SSH communication with the worker nodes in
   *             the managed node group. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 Key
   *                 Pairs</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>.</p>
   */
  ec2SshKey?: string;

  /**
   * <p>The security groups that are allowed SSH access (port 22) to the worker nodes. If you
   *             specify an Amazon EC2 SSH key but do not specify a source security group when you create a
   *             managed node group, then port 22 on the worker nodes is opened to the internet
   *             (0.0.0.0/0). For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Security
   *                 Groups for Your VPC</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  sourceSecurityGroups?: Array<string>;
}

export namespace RemoteAccessConfig {
  export function isa(o: any): o is RemoteAccessConfig {
    return __isa(o, "RemoteAccessConfig");
  }
}

/**
 * <p>The specified resource is in use.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  message?: string;
  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return __isa(o, "ResourceInUseException");
  }
}

/**
 * <p>You have encountered a service limit on the specified resource.</p>
 */
export interface ResourceLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  message?: string;
  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;
}

export namespace ResourceLimitExceededException {
  export function isa(o: any): o is ResourceLimitExceededException {
    return __isa(o, "ResourceLimitExceededException");
  }
}

/**
 * <p>The specified resource could not be found. You can view your available clusters with
 *                 <a>ListClusters</a>. You can view your available managed node groups with
 *                 <a>ListNodegroups</a>. Amazon EKS clusters and node groups are
 *             Region-specific.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * <p>The Fargate profile associated with the exception.</p>
   */
  fargateProfileName?: string;

  message?: string;
  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>These errors are usually caused by a server-side issue.</p>
 */
export interface ServerException extends __SmithyException, $MetadataBearer {
  name: "ServerException";
  $fault: "server";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  message?: string;
  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;
}

export namespace ServerException {
  export function isa(o: any): o is ServerException {
    return __isa(o, "ServerException");
  }
}

/**
 * <p>The service is unavailable. Back off and retry the operation.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which to add tags. Currently, the supported resources
   *             are Amazon EKS clusters and managed node groups.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

/**
 * <p>At least one of your specified cluster subnets is in an Availability Zone that does
 *             not support Amazon EKS. The exception output specifies the supported Availability Zones for
 *             your account, from which you can choose subnets for your cluster.</p>
 */
export interface UnsupportedAvailabilityZoneException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedAvailabilityZoneException";
  $fault: "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  message?: string;
  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;

  /**
   * <p>The supported Availability Zones for your account. Choose subnets in these
   *             Availability Zones for your cluster.</p>
   */
  validZones?: Array<string>;
}

export namespace UnsupportedAvailabilityZoneException {
  export function isa(o: any): o is UnsupportedAvailabilityZoneException {
    return __isa(o, "UnsupportedAvailabilityZoneException");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to delete tags. Currently, the supported
   *             resources are Amazon EKS clusters and managed node groups.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

/**
 * <p>An object representing an asynchronous update.</p>
 */
export interface Update {
  __type?: "Update";
  /**
   * <p>The Unix epoch timestamp in seconds for when the update was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Any errors associated with a <code>Failed</code> update.</p>
   */
  errors?: Array<ErrorDetail>;

  /**
   * <p>A UUID that is used to track the update.</p>
   */
  id?: string;

  /**
   * <p>A key-value map that contains the parameters associated with the update.</p>
   */
  params?: Array<UpdateParam>;

  /**
   * <p>The current status of the update.</p>
   */
  status?: UpdateStatus | string;

  /**
   * <p>The type of the update.</p>
   */
  type?: UpdateType | string;
}

export namespace Update {
  export function isa(o: any): o is Update {
    return __isa(o, "Update");
  }
}

export interface UpdateClusterConfigRequest {
  __type?: "UpdateClusterConfigRequest";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>Enable or disable exporting the Kubernetes control plane logs for your cluster to
   *             CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster Control Plane Logs</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   *         <note>
   *             <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported
   *                 control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p>
   *         </note>
   */
  logging?: Logging;

  /**
   * <p>The name of the Amazon EKS cluster to update.</p>
   */
  name: string | undefined;

  /**
   * <p>An object representing the VPC configuration to use for an Amazon EKS cluster.</p>
   */
  resourcesVpcConfig?: VpcConfigRequest;
}

export namespace UpdateClusterConfigRequest {
  export function isa(o: any): o is UpdateClusterConfigRequest {
    return __isa(o, "UpdateClusterConfigRequest");
  }
}

export interface UpdateClusterConfigResponse {
  __type?: "UpdateClusterConfigResponse";
  /**
   * <p>An object representing an asynchronous update.</p>
   */
  update?: Update;
}

export namespace UpdateClusterConfigResponse {
  export function isa(o: any): o is UpdateClusterConfigResponse {
    return __isa(o, "UpdateClusterConfigResponse");
  }
}

export interface UpdateClusterVersionRequest {
  __type?: "UpdateClusterVersionRequest";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The name of the Amazon EKS cluster to update.</p>
   */
  name: string | undefined;

  /**
   * <p>The desired Kubernetes version following a successful update.</p>
   */
  version: string | undefined;
}

export namespace UpdateClusterVersionRequest {
  export function isa(o: any): o is UpdateClusterVersionRequest {
    return __isa(o, "UpdateClusterVersionRequest");
  }
}

export interface UpdateClusterVersionResponse {
  __type?: "UpdateClusterVersionResponse";
  /**
   * <p>The full description of the specified update</p>
   */
  update?: Update;
}

export namespace UpdateClusterVersionResponse {
  export function isa(o: any): o is UpdateClusterVersionResponse {
    return __isa(o, "UpdateClusterVersionResponse");
  }
}

/**
 * <p>An object representing a Kubernetes label change for a managed node group.</p>
 */
export interface UpdateLabelsPayload {
  __type?: "UpdateLabelsPayload";
  /**
   * <p>Kubernetes labels to be added or updated.</p>
   */
  addOrUpdateLabels?: { [key: string]: string };

  /**
   * <p>Kubernetes labels to be removed.</p>
   */
  removeLabels?: Array<string>;
}

export namespace UpdateLabelsPayload {
  export function isa(o: any): o is UpdateLabelsPayload {
    return __isa(o, "UpdateLabelsPayload");
  }
}

export interface UpdateNodegroupConfigRequest {
  __type?: "UpdateNodegroupConfigRequest";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The name of the Amazon EKS cluster that the managed node group resides in.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The Kubernetes labels to be applied to the nodes in the node group after the
   *             update.</p>
   */
  labels?: UpdateLabelsPayload;

  /**
   * <p>The name of the managed node group to update.</p>
   */
  nodegroupName: string | undefined;

  /**
   * <p>The scaling configuration details for the Auto Scaling group after the update.</p>
   */
  scalingConfig?: NodegroupScalingConfig;
}

export namespace UpdateNodegroupConfigRequest {
  export function isa(o: any): o is UpdateNodegroupConfigRequest {
    return __isa(o, "UpdateNodegroupConfigRequest");
  }
}

export interface UpdateNodegroupConfigResponse {
  __type?: "UpdateNodegroupConfigResponse";
  /**
   * <p>An object representing an asynchronous update.</p>
   */
  update?: Update;
}

export namespace UpdateNodegroupConfigResponse {
  export function isa(o: any): o is UpdateNodegroupConfigResponse {
    return __isa(o, "UpdateNodegroupConfigResponse");
  }
}

export interface UpdateNodegroupVersionRequest {
  __type?: "UpdateNodegroupVersionRequest";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The name of the Amazon EKS cluster that is associated with the managed node group to
   *             update.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>Force the update if the existing node group's pods are unable to be drained due to a
   *             pod disruption budget issue. If an update fails because pods could not be drained, you
   *             can force the update after it fails to terminate the old node whether or not any pods
   *             are running on the node.</p>
   */
  force?: boolean;

  /**
   * <p>The name of the managed node group to update.</p>
   */
  nodegroupName: string | undefined;

  /**
   * <p>The AMI version of the Amazon EKS-optimized AMI to use for the update. By default, the
   *             latest available AMI version for the node group's Kubernetes version is used. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS-Optimized Linux AMI Versions </a> in the
   *             <i>Amazon EKS User Guide</i>.</p>
   */
  releaseVersion?: string;

  /**
   * <p>The Kubernetes version to update to. If no version is specified, then the Kubernetes
   *             version of the node group does not change. You can specify the Kubernetes version of the
   *             cluster to update the node group to the latest AMI version of the cluster's Kubernetes
   *             version.</p>
   */
  version?: string;
}

export namespace UpdateNodegroupVersionRequest {
  export function isa(o: any): o is UpdateNodegroupVersionRequest {
    return __isa(o, "UpdateNodegroupVersionRequest");
  }
}

export interface UpdateNodegroupVersionResponse {
  __type?: "UpdateNodegroupVersionResponse";
  /**
   * <p>An object representing an asynchronous update.</p>
   */
  update?: Update;
}

export namespace UpdateNodegroupVersionResponse {
  export function isa(o: any): o is UpdateNodegroupVersionResponse {
    return __isa(o, "UpdateNodegroupVersionResponse");
  }
}

/**
 * <p>An object representing the details of an update request.</p>
 */
export interface UpdateParam {
  __type?: "UpdateParam";
  /**
   * <p>The keys associated with an update request.</p>
   */
  type?: UpdateParamType | string;

  /**
   * <p>The value of the keys submitted as part of an update request.</p>
   */
  value?: string;
}

export namespace UpdateParam {
  export function isa(o: any): o is UpdateParam {
    return __isa(o, "UpdateParam");
  }
}

export enum UpdateParamType {
  CLUSTER_LOGGING = "ClusterLogging",
  DESIRED_SIZE = "DesiredSize",
  ENDPOINT_PRIVATE_ACCESS = "EndpointPrivateAccess",
  ENDPOINT_PUBLIC_ACCESS = "EndpointPublicAccess",
  LABELS_TO_ADD = "LabelsToAdd",
  LABELS_TO_REMOVE = "LabelsToRemove",
  MAX_SIZE = "MaxSize",
  MIN_SIZE = "MinSize",
  PLATFORM_VERSION = "PlatformVersion",
  PUBLIC_ACCESS_CIDRS = "PublicAccessCidrs",
  RELEASE_VERSION = "ReleaseVersion",
  VERSION = "Version"
}

export enum UpdateStatus {
  CANCELLED = "Cancelled",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  SUCCESSFUL = "Successful"
}

export enum UpdateType {
  CONFIG_UPDATE = "ConfigUpdate",
  ENDPOINT_ACCESS_UPDATE = "EndpointAccessUpdate",
  LOGGING_UPDATE = "LoggingUpdate",
  VERSION_UPDATE = "VersionUpdate"
}

/**
 * <p>An object representing the VPC configuration to use for an Amazon EKS cluster.</p>
 */
export interface VpcConfigRequest {
  __type?: "VpcConfigRequest";
  /**
   * <p>Set this value to <code>true</code> to enable private access for your cluster's
   *             Kubernetes API server endpoint. If you enable private access, Kubernetes API requests
   *             from within your cluster's VPC use the private VPC endpoint. The default value for this
   *             parameter is <code>false</code>, which disables private access for your Kubernetes API
   *             server. If you disable private access and you have worker nodes or AWS Fargate pods in the
   *             cluster, then ensure that <code>publicAccessCidrs</code> includes the necessary CIDR
   *             blocks for communication with the worker nodes or Fargate pods. For more information, see
   *                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS
   *                 Cluster Endpoint Access Control</a> in the
   *             <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  endpointPrivateAccess?: boolean;

  /**
   * <p>Set this value to <code>false</code> to disable public access to your cluster's
   *             Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes
   *             API server can only receive requests from within the cluster VPC. The default value for
   *             this parameter is <code>true</code>, which enables public access for your Kubernetes API
   *             server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS Cluster
   *                 Endpoint Access Control</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  endpointPublicAccess?: boolean;

  /**
   * <p>The CIDR blocks that are allowed access to your cluster's public Kubernetes API server
   *             endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that
   *             you specify is denied. The default value is <code>0.0.0.0/0</code>. If you've disabled
   *             private endpoint access and you have worker nodes or AWS Fargate pods in the cluster, then
   *             ensure that you specify the necessary CIDR blocks. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS Cluster
   *                 Endpoint Access Control</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  publicAccessCidrs?: Array<string>;

  /**
   * <p>Specify one or more security groups for the cross-account elastic network interfaces
   *             that Amazon EKS creates to use to allow communication between your worker nodes and the
   *             Kubernetes control plane. If you don't specify a security group, the default security
   *             group for your VPC is used.</p>
   */
  securityGroupIds?: Array<string>;

  /**
   * <p>Specify subnets for your Amazon EKS worker nodes. Amazon EKS creates cross-account elastic
   *             network interfaces in these subnets to allow communication between your worker nodes and
   *             the Kubernetes control plane.</p>
   */
  subnetIds?: Array<string>;
}

export namespace VpcConfigRequest {
  export function isa(o: any): o is VpcConfigRequest {
    return __isa(o, "VpcConfigRequest");
  }
}

/**
 * <p>An object representing an Amazon EKS cluster VPC configuration response.</p>
 */
export interface VpcConfigResponse {
  __type?: "VpcConfigResponse";
  /**
   * <p>The cluster security group that was created by Amazon EKS for the cluster. Managed node
   *             groups use this security group for control-plane-to-data-plane communication.</p>
   */
  clusterSecurityGroupId?: string;

  /**
   * <p>This parameter indicates whether the Amazon EKS private API server endpoint is enabled. If
   *             the Amazon EKS private API server endpoint is enabled, Kubernetes API requests that originate
   *             from within your cluster's VPC use the private VPC endpoint instead of traversing the
   *             internet. If this value is disabled and you have worker nodes or AWS Fargate pods in the
   *             cluster, then ensure that <code>publicAccessCidrs</code> includes the necessary CIDR
   *             blocks for communication with the worker nodes or Fargate pods. For more information, see
   *                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS
   *                 Cluster Endpoint Access Control</a> in the
   *             <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  endpointPrivateAccess?: boolean;

  /**
   * <p>This parameter indicates whether the Amazon EKS public API server endpoint is enabled. If
   *             the Amazon EKS public API server endpoint is disabled, your cluster's Kubernetes API server
   *             can only receive requests that originate from within the cluster VPC.</p>
   */
  endpointPublicAccess?: boolean;

  /**
   * <p>The CIDR blocks that are allowed access to your cluster's public Kubernetes API server
   *             endpoint. Communication to the endpoint from addresses outside of the listed CIDR blocks
   *             is denied. The default value is <code>0.0.0.0/0</code>. If you've disabled private
   *             endpoint access and you have worker nodes or AWS Fargate pods in the cluster, then ensure
   *             that the necessary CIDR blocks are listed. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS Cluster
   *                 Endpoint Access Control</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  publicAccessCidrs?: Array<string>;

  /**
   * <p>The security groups associated with the cross-account elastic network interfaces that
   *             are used to allow communication between your worker nodes and the Kubernetes control
   *             plane.</p>
   */
  securityGroupIds?: Array<string>;

  /**
   * <p>The subnets associated with your cluster.</p>
   */
  subnetIds?: Array<string>;

  /**
   * <p>The VPC associated with your cluster.</p>
   */
  vpcId?: string;
}

export namespace VpcConfigResponse {
  export function isa(o: any): o is VpcConfigResponse {
    return __isa(o, "VpcConfigResponse");
  }
}
