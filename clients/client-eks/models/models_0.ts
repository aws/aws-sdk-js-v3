import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AddonIssueCode {
  ACCESS_DENIED = "AccessDenied",
  CLUSTER_UNREACHABLE = "ClusterUnreachable",
  CONFIGURATION_CONFLICT = "ConfigurationConflict",
  INSUFFICIENT_NUMBER_OF_REPLICAS = "InsufficientNumberOfReplicas",
  INTERNAL_FAILURE = "InternalFailure",
}

/**
 * <p>An issue related to an add-on.</p>
 */
export interface AddonIssue {
  /**
   * <p>A code that describes the type of issue.</p>
   */
  code?: AddonIssueCode | string;

  /**
   * <p>A message that provides details about the issue and what might cause it.</p>
   */
  message?: string;

  /**
   * <p>The resource IDs of the issue.</p>
   */
  resourceIds?: string[];
}

export namespace AddonIssue {
  export const filterSensitiveLog = (obj: AddonIssue): any => ({
    ...obj,
  });
}

/**
 * <p>The health of the add-on.</p>
 */
export interface AddonHealth {
  /**
   * <p>An object that represents the add-on's health issues.</p>
   */
  issues?: AddonIssue[];
}

export namespace AddonHealth {
  export const filterSensitiveLog = (obj: AddonHealth): any => ({
    ...obj,
  });
}

export type AddonStatus =
  | "ACTIVE"
  | "CREATE_FAILED"
  | "CREATING"
  | "DEGRADED"
  | "DELETE_FAILED"
  | "DELETING"
  | "UPDATING";

/**
 * <p>An Amazon EKS add-on.</p>
 */
export interface Addon {
  /**
   * <p>The name of the add-on.</p>
   */
  addonName?: string;

  /**
   * <p>The name of the cluster.</p>
   */
  clusterName?: string;

  /**
   * <p>The status of the add-on.</p>
   */
  status?: AddonStatus | string;

  /**
   * <p>The version of the add-on.</p>
   */
  addonVersion?: string;

  /**
   * <p>An object that represents the health of the add-on.</p>
   */
  health?: AddonHealth;

  /**
   * <p>The Amazon Resource Name (ARN) of the add-on.</p>
   */
  addonArn?: string;

  /**
   * <p>The date and time that the add-on was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The date and time that the add-on was last modified.</p>
   */
  modifiedAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is bound to the Kubernetes service account used
   *             by the add-on.</p>
   */
  serviceAccountRoleArn?: string;

  /**
   * <p>The metadata that you apply to the cluster to assist with categorization and
   *             organization. Each tag consists of a key and an optional value, both of which you
   *             define. Cluster tags do not propagate to any other resources associated with the
   *             cluster. </p>
   */
  tags?: { [key: string]: string };
}

export namespace Addon {
  export const filterSensitiveLog = (obj: Addon): any => ({
    ...obj,
  });
}

/**
 * <p>Compatibility information.</p>
 */
export interface Compatibility {
  /**
   * <p>The supported Kubernetes version of the cluster.</p>
   */
  clusterVersion?: string;

  /**
   * <p>The supported compute platform.</p>
   */
  platformVersions?: string[];

  /**
   * <p>The supported default version.</p>
   */
  defaultVersion?: boolean;
}

export namespace Compatibility {
  export const filterSensitiveLog = (obj: Compatibility): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an add-on version.</p>
 */
export interface AddonVersionInfo {
  /**
   * <p>The version of the add-on.</p>
   */
  addonVersion?: string;

  /**
   * <p>The architectures that the version supports.</p>
   */
  architecture?: string[];

  /**
   * <p>An object that represents the compatibilities of a version.</p>
   */
  compatibilities?: Compatibility[];
}

export namespace AddonVersionInfo {
  export const filterSensitiveLog = (obj: AddonVersionInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Information about an add-on.</p>
 */
export interface AddonInfo {
  /**
   * <p>The name of the add-on.</p>
   */
  addonName?: string;

  /**
   * <p>The type of the add-on.</p>
   */
  type?: string;

  /**
   * <p>An object that represents information about available add-on versions and compatible
   *             Kubernetes versions.</p>
   */
  addonVersions?: AddonVersionInfo[];
}

export namespace AddonInfo {
  export const filterSensitiveLog = (obj: AddonInfo): any => ({
    ...obj,
  });
}

export type AMITypes = "AL2_ARM_64" | "AL2_x86_64" | "AL2_x86_64_GPU";

/**
 * <p>An Auto Scaling group that is associated with an Amazon EKS managed node group.</p>
 */
export interface AutoScalingGroup {
  /**
   * <p>The name of the Auto Scaling group associated with an Amazon EKS managed node group.</p>
   */
  name?: string;
}

export namespace AutoScalingGroup {
  export const filterSensitiveLog = (obj: AutoScalingGroup): any => ({
    ...obj,
  });
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

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;

  addonName?: string;
  message?: string;
}

export namespace ClientException {
  export const filterSensitiveLog = (obj: ClientException): any => ({
    ...obj,
  });
}

export type ResolveConflicts = "NONE" | "OVERWRITE";

export interface CreateAddonRequest {
  /**
   * <p>The name of the cluster to create the add-on for.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html">
   *                <code>ListAddons</code>
   *             </a>.</p>
   */
  addonName: string | undefined;

  /**
   * <p>The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html">
   *                <code>DescribeAddonVersions</code>
   *             </a>.</p>
   */
  addonVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the
   *      permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p>
   *         <note>
   *             <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for
   *                 your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling
   *                     IAM roles for service accounts on your cluster</a> in the
   *                 <i>Amazon EKS User Guide</i>.</p>
   *          </note>
   */
  serviceAccountRoleArn?: string;

  /**
   * <p>How to resolve parameter value conflicts when migrating an existing add-on to an
   *             Amazon EKS add-on.</p>
   */
  resolveConflicts?: ResolveConflicts | string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The metadata to apply to the cluster to assist with categorization and organization.
   *             Each tag consists of a key and an optional value, both of which you define. </p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateAddonRequest {
  export const filterSensitiveLog = (obj: CreateAddonRequest): any => ({
    ...obj,
  });
}

export interface CreateAddonResponse {
  /**
   * <p>An Amazon EKS add-on.</p>
   */
  addon?: Addon;
}

export namespace CreateAddonResponse {
  export const filterSensitiveLog = (obj: CreateAddonResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;

  /**
   * <p>The Fargate profile associated with the exception.</p>
   */
  fargateProfileName?: string;

  addonName?: string;
  message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;

  addonName?: string;
  message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource is in use.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;

  addonName?: string;
  message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource could not be found. You can view your available clusters with
 *                 <a>ListClusters</a>. You can view your available managed node groups with
 *                 <a>ListNodegroups</a>. Amazon EKS clusters and node groups are
 *             Region-specific.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;

  /**
   * <p>The Fargate profile associated with the exception.</p>
   */
  fargateProfileName?: string;

  addonName?: string;
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
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

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;

  addonName?: string;
  message?: string;
}

export namespace ServerException {
  export const filterSensitiveLog = (obj: ServerException): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the AWS Key Management Service (AWS KMS) customer master key (CMK) used to encrypt the
 *             secrets.</p>
 */
export interface Provider {
  /**
   * <p>Amazon Resource Name (ARN) or alias of the customer master key (CMK). The CMK must be symmetric,
   *             created in the same region as the cluster, and if the CMK was created in a different
   *             account, the user must have access to the CMK. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html">Allowing
   *                 Users in Other Accounts to Use a CMK</a> in the <i>AWS Key Management Service Developer
   *                 Guide</i>.</p>
   */
  keyArn?: string;
}

export namespace Provider {
  export const filterSensitiveLog = (obj: Provider): any => ({
    ...obj,
  });
}

/**
 * <p>The encryption configuration for the cluster.</p>
 */
export interface EncryptionConfig {
  /**
   * <p>Specifies the resources to be encrypted. The only supported value is "secrets".</p>
   */
  resources?: string[];

  /**
   * <p>AWS Key Management Service (AWS KMS) customer master key (CMK). Either the ARN or the alias can be
   *             used.</p>
   */
  provider?: Provider;
}

export namespace EncryptionConfig {
  export const filterSensitiveLog = (obj: EncryptionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The Kubernetes network configuration for the cluster.</p>
 */
export interface KubernetesNetworkConfigRequest {
  /**
   * <p>The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a
   *             block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR
   *             blocks. We recommend that you specify a block that does not overlap with resources in
   *             other networks that are peered or connected to your VPC. The block must meet the
   *             following requirements:</p>
   *         <ul>
   *             <li>
   *                 <p>Within one of the following private IP address blocks: 10.0.0.0/8,
   *                     172.16.0.0.0/12, or 192.168.0.0/16.</p>
   *             </li>
   *             <li>
   *                 <p>Doesn't overlap with any CIDR block assigned to the VPC that you selected for
   *                     VPC.</p>
   *             </li>
   *             <li>
   *                 <p>Between /24 and /12.</p>
   *             </li>
   *          </ul>
   *         <important>
   *             <p>You can only specify a custom CIDR block when you create a cluster and can't
   *                 change this value once the cluster is created.</p>
   *         </important>
   */
  serviceIpv4Cidr?: string;
}

export namespace KubernetesNetworkConfigRequest {
  export const filterSensitiveLog = (obj: KubernetesNetworkConfigRequest): any => ({
    ...obj,
  });
}

export enum LogType {
  API = "api",
  AUDIT = "audit",
  AUTHENTICATOR = "authenticator",
  CONTROLLER_MANAGER = "controllerManager",
  SCHEDULER = "scheduler",
}

/**
 * <p>An object representing the enabled or disabled Kubernetes control plane logs for your
 *             cluster.</p>
 */
export interface LogSetup {
  /**
   * <p>The available cluster control plane log types.</p>
   */
  types?: (LogType | string)[];

  /**
   * <p>If a log type is enabled, that log type exports its control plane logs to CloudWatch Logs. If a
   *             log type isn't enabled, that log type doesn't export its control plane logs. Each
   *             individual log type can be enabled or disabled independently.</p>
   */
  enabled?: boolean;
}

export namespace LogSetup {
  export const filterSensitiveLog = (obj: LogSetup): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the logging configuration for resources in your cluster.</p>
 */
export interface Logging {
  /**
   * <p>The cluster control plane logging configuration for your cluster.</p>
   */
  clusterLogging?: LogSetup[];
}

export namespace Logging {
  export const filterSensitiveLog = (obj: Logging): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the VPC configuration to use for an Amazon EKS cluster.</p>
 */
export interface VpcConfigRequest {
  /**
   * <p>Specify subnets for your Amazon EKS worker nodes. Amazon EKS creates cross-account elastic
   *             network interfaces in these subnets to allow communication between your worker nodes and
   *             the Kubernetes control plane.</p>
   */
  subnetIds?: string[];

  /**
   * <p>Specify one or more security groups for the cross-account elastic network interfaces
   *             that Amazon EKS creates to use to allow communication between your worker nodes and the
   *             Kubernetes control plane. If you don't specify any security groups, then familiarize
   *             yourself with the difference between Amazon EKS defaults for clusters deployed with
   *             Kubernetes:</p>
   *         <ul>
   *             <li>
   *                 <p>1.14 Amazon EKS platform version <code>eks.2</code> and earlier</p>
   *             </li>
   *             <li>
   *                 <p>1.14 Amazon EKS platform version <code>eks.3</code> and later </p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Amazon EKS security group
   *                 considerations</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  securityGroupIds?: string[];

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
   * <p>The CIDR blocks that are allowed access to your cluster's public Kubernetes API server
   *             endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that
   *             you specify is denied. The default value is <code>0.0.0.0/0</code>. If you've disabled
   *             private endpoint access and you have worker nodes or AWS Fargate pods in the cluster, then
   *             ensure that you specify the necessary CIDR blocks. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS Cluster
   *                 Endpoint Access Control</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  publicAccessCidrs?: string[];
}

export namespace VpcConfigRequest {
  export const filterSensitiveLog = (obj: VpcConfigRequest): any => ({
    ...obj,
  });
}

export interface CreateClusterRequest {
  /**
   * <p>The unique name to give to your cluster.</p>
   */
  name: string | undefined;

  /**
   * <p>The desired Kubernetes version for your cluster. If you don't specify a value here,
   *             the latest version available in Amazon EKS is used.</p>
   */
  version?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control
   *             plane to make calls to AWS API operations on your behalf. For more information, see
   *                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html">Amazon EKS
   *                 Service IAM Role</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  roleArn: string | undefined;

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
   * <p>The Kubernetes network configuration for the cluster.</p>
   */
  kubernetesNetworkConfig?: KubernetesNetworkConfigRequest;

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
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The metadata to apply to the cluster to assist with categorization and organization.
   *             Each tag consists of a key and an optional value, both of which you define.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The encryption configuration for the cluster.</p>
   */
  encryptionConfig?: EncryptionConfig[];
}

export namespace CreateClusterRequest {
  export const filterSensitiveLog = (obj: CreateClusterRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the <code>certificate-authority-data</code> for your
 *             cluster.</p>
 */
export interface Certificate {
  /**
   * <p>The Base64-encoded certificate data required to communicate with your cluster. Add
   *             this to the <code>certificate-authority-data</code> section of the
   *                 <code>kubeconfig</code> file for your cluster.</p>
   */
  data?: string;
}

export namespace Certificate {
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the <a href="https://openid.net/connect/">OpenID
 *                 Connect</a> identity provider information for the cluster.</p>
 */
export interface OIDC {
  /**
   * <p>The issuer URL for the OpenID Connect identity provider.</p>
   */
  issuer?: string;
}

export namespace OIDC {
  export const filterSensitiveLog = (obj: OIDC): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing an identity provider for authentication credentials.</p>
 */
export interface Identity {
  /**
   * <p>The <a href="https://openid.net/connect/">OpenID Connect</a> identity provider
   *             information for the cluster.</p>
   */
  oidc?: OIDC;
}

export namespace Identity {
  export const filterSensitiveLog = (obj: Identity): any => ({
    ...obj,
  });
}

/**
 * <p>The Kubernetes network configuration for the cluster.</p>
 */
export interface KubernetesNetworkConfigResponse {
  /**
   * <p>The CIDR block that Kubernetes service IP addresses are assigned from. If you didn't
   *             specify a CIDR block when you created the cluster, then Kubernetes assigns addresses
   *             from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks. If this was specified, then
   *             it was specified when the cluster was created and it cannot be changed.</p>
   */
  serviceIpv4Cidr?: string;
}

export namespace KubernetesNetworkConfigResponse {
  export const filterSensitiveLog = (obj: KubernetesNetworkConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing an Amazon EKS cluster VPC configuration response.</p>
 */
export interface VpcConfigResponse {
  /**
   * <p>The subnets associated with your cluster.</p>
   */
  subnetIds?: string[];

  /**
   * <p>The security groups associated with the cross-account elastic network interfaces that
   *             are used to allow communication between your worker nodes and the Kubernetes control
   *             plane.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>The cluster security group that was created by Amazon EKS for the cluster. Managed node
   *             groups use this security group for control-plane-to-data-plane communication.</p>
   */
  clusterSecurityGroupId?: string;

  /**
   * <p>The VPC associated with your cluster.</p>
   */
  vpcId?: string;

  /**
   * <p>This parameter indicates whether the Amazon EKS public API server endpoint is enabled. If
   *             the Amazon EKS public API server endpoint is disabled, your cluster's Kubernetes API server
   *             can only receive requests that originate from within the cluster VPC.</p>
   */
  endpointPublicAccess?: boolean;

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
   * <p>The CIDR blocks that are allowed access to your cluster's public Kubernetes API server
   *             endpoint. Communication to the endpoint from addresses outside of the listed CIDR blocks
   *             is denied. The default value is <code>0.0.0.0/0</code>. If you've disabled private
   *             endpoint access and you have worker nodes or AWS Fargate pods in the cluster, then ensure
   *             that the necessary CIDR blocks are listed. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS Cluster
   *                 Endpoint Access Control</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  publicAccessCidrs?: string[];
}

export namespace VpcConfigResponse {
  export const filterSensitiveLog = (obj: VpcConfigResponse): any => ({
    ...obj,
  });
}

export type ClusterStatus = "ACTIVE" | "CREATING" | "DELETING" | "FAILED" | "UPDATING";

/**
 * <p>An object representing an Amazon EKS cluster.</p>
 */
export interface Cluster {
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
  createdAt?: Date;

  /**
   * <p>The Kubernetes server version for the cluster.</p>
   */
  version?: string;

  /**
   * <p>The endpoint for your Kubernetes API server.</p>
   */
  endpoint?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control
   *             plane to make calls to AWS API operations on your behalf.</p>
   */
  roleArn?: string;

  /**
   * <p>The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have
   *             specific requirements to work properly with Kubernetes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html">Cluster VPC
   *                 Considerations</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Cluster Security Group Considerations</a> in the
   *             <i>Amazon EKS User Guide</i>.</p>
   */
  resourcesVpcConfig?: VpcConfigResponse;

  /**
   * <p>The Kubernetes network configuration for the cluster.</p>
   */
  kubernetesNetworkConfig?: KubernetesNetworkConfigResponse;

  /**
   * <p>The logging configuration for your cluster.</p>
   */
  logging?: Logging;

  /**
   * <p>The identity provider information for the cluster.</p>
   */
  identity?: Identity;

  /**
   * <p>The current status of the cluster.</p>
   */
  status?: ClusterStatus | string;

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
   * <p>The platform version of your Amazon EKS cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/platform-versions.html">Platform
   *                 Versions</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>The metadata that you apply to the cluster to assist with categorization and
   *             organization. Each tag consists of a key and an optional value, both of which you
   *             define. Cluster tags do not propagate to any other resources associated with the
   *             cluster. </p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The encryption configuration for the cluster.</p>
   */
  encryptionConfig?: EncryptionConfig[];
}

export namespace Cluster {
  export const filterSensitiveLog = (obj: Cluster): any => ({
    ...obj,
  });
}

export interface CreateClusterResponse {
  /**
   * <p>The full description of your new cluster.</p>
   */
  cluster?: Cluster;
}

export namespace CreateClusterResponse {
  export const filterSensitiveLog = (obj: CreateClusterResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You have encountered a service limit on the specified resource.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;

  message?: string;
}

export namespace ResourceLimitExceededException {
  export const filterSensitiveLog = (obj: ResourceLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The service is unavailable. Back off and retry the operation.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>At least one of your specified cluster subnets is in an Availability Zone that does
 *             not support Amazon EKS. The exception output specifies the supported Availability Zones for
 *             your account, from which you can choose subnets for your cluster.</p>
 */
export interface UnsupportedAvailabilityZoneException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedAvailabilityZoneException";
  $fault: "client";
  message?: string;
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;

  /**
   * <p>The supported Availability Zones for your account. Choose subnets in these
   *             Availability Zones for your cluster.</p>
   */
  validZones?: string[];
}

export namespace UnsupportedAvailabilityZoneException {
  export const filterSensitiveLog = (obj: UnsupportedAvailabilityZoneException): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing an AWS Fargate profile selector.</p>
 */
export interface FargateProfileSelector {
  /**
   * <p>The Kubernetes namespace that the selector should match.</p>
   */
  namespace?: string;

  /**
   * <p>The Kubernetes labels that the selector should match. A pod must contain all of the
   *             labels that are specified in the selector for it to be considered a match.</p>
   */
  labels?: { [key: string]: string };
}

export namespace FargateProfileSelector {
  export const filterSensitiveLog = (obj: FargateProfileSelector): any => ({
    ...obj,
  });
}

export interface CreateFargateProfileRequest {
  /**
   * <p>The name of the Fargate profile.</p>
   */
  fargateProfileName: string | undefined;

  /**
   * <p>The name of the Amazon EKS cluster to apply the Fargate profile to.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in
   *             the Fargate profile. The pod execution role allows Fargate infrastructure to register with
   *             your cluster as a node, and it provides read access to Amazon ECR image repositories. For
   *             more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod Execution Role</a> in the
   *             <i>Amazon EKS User Guide</i>.</p>
   */
  podExecutionRoleArn: string | undefined;

  /**
   * <p>The IDs of subnets to launch your pods into. At this time, pods running on Fargate are
   *             not assigned public IP addresses, so only private subnets (with no direct route to an
   *             Internet Gateway) are accepted for this parameter.</p>
   */
  subnets?: string[];

  /**
   * <p>The selectors to match for pods to use this Fargate profile. Each selector must have an
   *             associated namespace. Optionally, you can also specify labels for a namespace. You may
   *             specify up to five selectors in a Fargate profile.</p>
   */
  selectors?: FargateProfileSelector[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The metadata to apply to the Fargate profile to assist with categorization and
   *             organization. Each tag consists of a key and an optional value, both of which you
   *             define. Fargate profile tags do not propagate to any other resources associated with the
   *             Fargate profile, such as the pods that are scheduled with it.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateFargateProfileRequest {
  export const filterSensitiveLog = (obj: CreateFargateProfileRequest): any => ({
    ...obj,
  });
}

export type FargateProfileStatus = "ACTIVE" | "CREATE_FAILED" | "CREATING" | "DELETE_FAILED" | "DELETING";

/**
 * <p>An object representing an AWS Fargate profile.</p>
 */
export interface FargateProfile {
  /**
   * <p>The name of the Fargate profile.</p>
   */
  fargateProfileName?: string;

  /**
   * <p>The full Amazon Resource Name (ARN) of the Fargate profile.</p>
   */
  fargateProfileArn?: string;

  /**
   * <p>The name of the Amazon EKS cluster that the Fargate profile belongs to.</p>
   */
  clusterName?: string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the Fargate profile was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in
   *             the Fargate profile. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod
   *                 Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  podExecutionRoleArn?: string;

  /**
   * <p>The IDs of subnets to launch pods into.</p>
   */
  subnets?: string[];

  /**
   * <p>The selectors to match for pods to use this Fargate profile.</p>
   */
  selectors?: FargateProfileSelector[];

  /**
   * <p>The current status of the Fargate profile.</p>
   */
  status?: FargateProfileStatus | string;

  /**
   * <p>The metadata applied to the Fargate profile to assist with categorization and
   *             organization. Each tag consists of a key and an optional value, both of which you
   *             define. Fargate profile tags do not propagate to any other resources associated with the
   *             Fargate profile, such as the pods that are scheduled with it.</p>
   */
  tags?: { [key: string]: string };
}

export namespace FargateProfile {
  export const filterSensitiveLog = (obj: FargateProfile): any => ({
    ...obj,
  });
}

export interface CreateFargateProfileResponse {
  /**
   * <p>The full description of your new Fargate profile.</p>
   */
  fargateProfile?: FargateProfile;
}

export namespace CreateFargateProfileResponse {
  export const filterSensitiveLog = (obj: CreateFargateProfileResponse): any => ({
    ...obj,
  });
}

export type CapacityTypes = "ON_DEMAND" | "SPOT";

/**
 * <p>An object representing a node group launch template specification. The launch template
 *             cannot include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html">
 *                <code>SubnetId</code>
 *             </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html">
 *                <code>IamInstanceProfile</code>
 *             </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html">
 *                <code>RequestSpotInstances</code>
 *             </a>, <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html">
 *                <code>HibernationOptions</code>
 *             </a>, or <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html">
 *                <code>TerminateInstances</code>
 *             </a>, or the node group  deployment or
 *             update will fail. For more information about launch templates, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html">
 *                <code>CreateLaunchTemplate</code>
 *             </a> in the Amazon EC2 API Reference.
 *             For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p>
 *         <p>Specify either <code>name</code> or <code>id</code>, but not both.</p>
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>The name of the launch template.</p>
   */
  name?: string;

  /**
   * <p>The version of the launch template to use. If no version is specified, then the
   *             template's default version is used.</p>
   */
  version?: string;

  /**
   * <p>The ID of the launch template.</p>
   */
  id?: string;
}

export namespace LaunchTemplateSpecification {
  export const filterSensitiveLog = (obj: LaunchTemplateSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the remote access configuration for the managed node
 *             group.</p>
 */
export interface RemoteAccessConfig {
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
  sourceSecurityGroups?: string[];
}

export namespace RemoteAccessConfig {
  export const filterSensitiveLog = (obj: RemoteAccessConfig): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the scaling configuration details for the Auto Scaling group
 *             that is associated with your node group. If you specify a value for any property, then
 *             you must specify values for all of the properties.</p>
 */
export interface NodegroupScalingConfig {
  /**
   * <p>The minimum number of worker nodes that the managed node group can scale in to. This
   *             number must be greater than zero.</p>
   */
  minSize?: number;

  /**
   * <p>The maximum number of worker nodes that the managed node group can scale out to.
   *             Managed node groups can support up to 100 nodes by default.</p>
   */
  maxSize?: number;

  /**
   * <p>The current number of worker nodes that the managed node group should maintain.</p>
   */
  desiredSize?: number;
}

export namespace NodegroupScalingConfig {
  export const filterSensitiveLog = (obj: NodegroupScalingConfig): any => ({
    ...obj,
  });
}

export interface CreateNodegroupRequest {
  /**
   * <p>The name of the cluster to create the node group in.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The unique name to give your node group.</p>
   */
  nodegroupName: string | undefined;

  /**
   * <p>The scaling configuration details for the Auto Scaling group that is created for your
   *             node group.</p>
   */
  scalingConfig?: NodegroupScalingConfig;

  /**
   * <p>The root device disk size (in GiB) for your node group instances. The default disk
   *             size is 20 GiB. If you specify <code>launchTemplate</code>, then don't specify  <code>diskSize</code>,
   *             or the node group  deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p>
   */
  diskSize?: number;

  /**
   * <p>The subnets to use for the Auto Scaling group that is created for your node group.
   *             These subnets must have the tag key <code>kubernetes.io/cluster/CLUSTER_NAME</code> with
   *             a value of <code>shared</code>, where <code>CLUSTER_NAME</code> is replaced with the
   *             name of your cluster. If you specify <code>launchTemplate</code>, then don't specify  <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html">
   *                <code>SubnetId</code>
   *             </a> in your launch template, or the node group
   *             deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p>
   */
  subnets: string[] | undefined;

  /**
   * <p>Specify the instance types for a node group. If you specify a GPU instance type, be
   *             sure to specify <code>AL2_x86_64_GPU</code> with the <code>amiType</code> parameter. If
   *             you specify <code>launchTemplate</code>, then you can specify zero or one instance type
   *             in your launch template <i>or</i> you can specify 0-20 instance types for
   *                 <code>instanceTypes</code>. If however, you specify an instance type in your launch
   *             template <i>and</i> specify any <code>instanceTypes</code>, the node group
   *             deployment will fail. If you don't specify an instance type in a launch template or for
   *                 <code>instanceTypes</code>, then <code>t3.medium</code> is used, by default. If you
   *             specify <code>Spot</code> for <code>capacityType</code>, then we recommend specifying
   *             multiple values for <code>instanceTypes</code>. For more information, see <a href="https://docs.aws.amazon.com/managed-node-groups.html#managed-node-group-capacity-types">Managed node group
   *                 capacity types</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in
   *             the <i>Amazon EKS User Guide</i>.</p>
   */
  instanceTypes?: string[];

  /**
   * <p>The AMI type for your node group. GPU instance types should use the
   *                 <code>AL2_x86_64_GPU</code> AMI type. Non-GPU instances should use the
   *                 <code>AL2_x86_64</code> AMI type. Arm instances should use the
   *                 <code>AL2_ARM_64</code> AMI type. All types use the Amazon EKS optimized Amazon Linux 2 AMI.
   *             If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify <code>amiType</code>,
   *             or the node group  deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p>
   */
  amiType?: AMITypes | string;

  /**
   * <p>The remote access (SSH) configuration to use with your node group. If you specify <code>launchTemplate</code>,
   *             then don't specify  <code>remoteAccess</code>, or the node group  deployment
   *             will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p>
   */
  remoteAccess?: RemoteAccessConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker
   *             node <code>kubelet</code> daemon makes calls to AWS APIs on your behalf. Worker nodes
   *             receive permissions for these API calls through an IAM instance profile and associated
   *             policies. Before you can launch worker nodes and register them into a cluster, you must
   *             create an IAM role for those worker nodes to use when they are launched. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html">Amazon EKS Worker Node IAM Role</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>. If you specify <code>launchTemplate</code>, then don't specify
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html">
   *                <code>IamInstanceProfile</code>
   *             </a> in your launch template,
   *             or the node group  deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p>
   */
  nodeRole: string | undefined;

  /**
   * <p>The Kubernetes labels to be applied to the nodes in the node group when they are
   *             created.</p>
   */
  labels?: { [key: string]: string };

  /**
   * <p>The metadata to apply to the node group to assist with categorization and
   *             organization. Each tag consists of a key and an optional value, both of which you
   *             define. Node group tags do not propagate to any other resources associated with the node
   *             group, such as the Amazon EC2 instances or subnets.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>An object representing a node group's launch template specification. If specified,
   *             then do not specify <code>instanceTypes</code>, <code>diskSize</code>, or
   *                 <code>remoteAccess</code> and make sure that the launch template meets the
   *             requirements in <code>launchTemplateSpecification</code>.</p>
   */
  launchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>The capacity type for your node group.</p>
   */
  capacityType?: CapacityTypes | string;

  /**
   * <p>The Kubernetes version to use for your managed nodes. By default, the Kubernetes
   *             version of the cluster is used, and this is the only accepted specified value.
   *             If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify  <code>version</code>,
   *             or the node group  deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p>
   */
  version?: string;

  /**
   * <p>The AMI version of the Amazon EKS optimized AMI to use with your node group. By default,
   *             the latest available AMI version for the node group's current Kubernetes version is
   *             used. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS
   *                 optimized Amazon Linux 2 AMI versions</a> in the <i>Amazon EKS User Guide</i>. If you specify <code>launchTemplate</code>,
   *             and your launch template uses a custom AMI, then don't specify  <code>releaseVersion</code>, or the node group
   *             deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p>
   */
  releaseVersion?: string;
}

export namespace CreateNodegroupRequest {
  export const filterSensitiveLog = (obj: CreateNodegroupRequest): any => ({
    ...obj,
  });
}

export enum NodegroupIssueCode {
  ACCESS_DENIED = "AccessDenied",
  ASG_INSTANCE_LAUNCH_FAILURES = "AsgInstanceLaunchFailures",
  AUTO_SCALING_GROUP_INVALID_CONFIGURATION = "AutoScalingGroupInvalidConfiguration",
  AUTO_SCALING_GROUP_NOT_FOUND = "AutoScalingGroupNotFound",
  CLUSTER_UNREACHABLE = "ClusterUnreachable",
  EC2_LAUNCH_TEMPLATE_NOT_FOUND = "Ec2LaunchTemplateNotFound",
  EC2_LAUNCH_TEMPLATE_VERSION_MISMATCH = "Ec2LaunchTemplateVersionMismatch",
  EC2_SECURITY_GROUP_DELETION_FAILURE = "Ec2SecurityGroupDeletionFailure",
  EC2_SECURITY_GROUP_NOT_FOUND = "Ec2SecurityGroupNotFound",
  EC2_SUBNET_INVALID_CONFIGURATION = "Ec2SubnetInvalidConfiguration",
  EC2_SUBNET_NOT_FOUND = "Ec2SubnetNotFound",
  IAM_INSTANCE_PROFILE_NOT_FOUND = "IamInstanceProfileNotFound",
  IAM_LIMIT_EXCEEDED = "IamLimitExceeded",
  IAM_NODE_ROLE_NOT_FOUND = "IamNodeRoleNotFound",
  INSTANCE_LIMIT_EXCEEDED = "InstanceLimitExceeded",
  INSUFFICIENT_FREE_ADDRESSES = "InsufficientFreeAddresses",
  INTERNAL_FAILURE = "InternalFailure",
  NODE_CREATION_FAILURE = "NodeCreationFailure",
}

/**
 * <p>An object representing an issue with an Amazon EKS resource.</p>
 */
export interface Issue {
  /**
   * <p>A brief description of the error.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>AccessDenied</b>: Amazon EKS or one or more of your
   *                     managed nodes is failing to authenticate or authorize with your Kubernetes
   *                     cluster API server.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>AsgInstanceLaunchFailures</b>: Your Auto Scaling group is
   *                     experiencing failures while attempting to launch instances.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>AutoScalingGroupNotFound</b>: We couldn't find
   *                     the Auto Scaling group associated with the managed node group. You may be able to
   *                     recreate an Auto Scaling group with the same settings to recover.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>ClusterUnreachable</b>: Amazon EKS or one or more of
   *                     your managed nodes is unable to to communicate with your Kubernetes cluster API
   *                     server. This can happen if there are network disruptions or if API servers are
   *                     timing out processing requests. </p>
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
   *                   <b>Ec2SecurityGroupDeletionFailure</b>: We could not
   *                     delete the remote access security group for your managed node group. Remove any
   *                     dependencies from the security group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Ec2SecurityGroupNotFound</b>: We couldn't find
   *                     the cluster security group for the cluster. You must recreate your
   *                     cluster.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Ec2SubnetInvalidConfiguration</b>: One or more
   *                     Amazon EC2 subnets specified for a node group do not automatically assign public IP
   *                     addresses to instances launched into it. If you want your instances to be
   *                     assigned a public IP address, then you need to enable the <code>auto-assign
   *                         public IP address</code> setting for the subnet. See <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html#subnet-public-ip">Modifying
   *                         the public IPv4 addressing attribute for your subnet</a> in the Amazon
   *                     VPC User Guide.</p>
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
   *                   <b>InternalFailure</b>: These errors are usually
   *                     caused by an Amazon EKS server-side issue.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>NodeCreationFailure</b>: Your launched instances
   *                     are unable to register with your Amazon EKS cluster. Common causes of this failure
   *                     are insufficient <a href="https://docs.aws.amazon.com/eks/latest/userguide/worker_node_IAM_role.html">worker node IAM
   *                         role</a> permissions or lack of outbound internet access for the nodes.
   *                 </p>
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
  resourceIds?: string[];
}

export namespace Issue {
  export const filterSensitiveLog = (obj: Issue): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the health status of the node group.</p>
 */
export interface NodegroupHealth {
  /**
   * <p>Any issues that are associated with the node group. </p>
   */
  issues?: Issue[];
}

export namespace NodegroupHealth {
  export const filterSensitiveLog = (obj: NodegroupHealth): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing the resources associated with the node group, such as Auto
 *             Scaling groups and security groups for remote access.</p>
 */
export interface NodegroupResources {
  /**
   * <p>The Auto Scaling groups associated with the node group.</p>
   */
  autoScalingGroups?: AutoScalingGroup[];

  /**
   * <p>The remote access security group associated with the node group. This security group
   *             controls SSH access to the worker nodes.</p>
   */
  remoteAccessSecurityGroup?: string;
}

export namespace NodegroupResources {
  export const filterSensitiveLog = (obj: NodegroupResources): any => ({
    ...obj,
  });
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
 * <p>An object representing an Amazon EKS managed node group.</p>
 */
export interface Nodegroup {
  /**
   * <p>The name associated with an Amazon EKS managed node group.</p>
   */
  nodegroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the managed node group.</p>
   */
  nodegroupArn?: string;

  /**
   * <p>The name of the cluster that the managed node group resides in.</p>
   */
  clusterName?: string;

  /**
   * <p>The Kubernetes version of the managed node group.</p>
   */
  version?: string;

  /**
   * <p>If the node group was deployed using a launch template with a custom AMI, then this is
   *             the AMI ID that was specified in the launch template. For node groups that weren't
   *             deployed using a launch template, this is the version of the Amazon EKS optimized AMI that
   *             the node group was deployed with.</p>
   */
  releaseVersion?: string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the managed node group was
   *             created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Unix epoch timestamp in seconds for when the managed node group was last
   *             modified.</p>
   */
  modifiedAt?: Date;

  /**
   * <p>The current status of the managed node group.</p>
   */
  status?: NodegroupStatus | string;

  /**
   * <p>The capacity type of your managed node group.</p>
   */
  capacityType?: CapacityTypes | string;

  /**
   * <p>The scaling configuration details for the Auto Scaling group that is associated with
   *             your node group.</p>
   */
  scalingConfig?: NodegroupScalingConfig;

  /**
   * <p>If the node group wasn't deployed with a launch template, then this is the instance
   *             type that is associated with the node group. If the node group was deployed with a
   *             launch template, then this is <code>null</code>.</p>
   */
  instanceTypes?: string[];

  /**
   * <p>The subnets that were specified for the Auto Scaling group that is associated with
   *             your node group.</p>
   */
  subnets?: string[];

  /**
   * <p>If the node group wasn't deployed with a launch template, then this is the remote
   *             access configuration that is associated with the node group. If the node group was
   *             deployed with a launch template, then this is <code>null</code>.</p>
   */
  remoteAccess?: RemoteAccessConfig;

  /**
   * <p>If the node group was deployed using a launch template with a custom AMI, then this is
   *                 <code>CUSTOM</code>. For node groups that weren't deployed using a launch template,
   *             this is the AMI type that was specified in the node group configuration.</p>
   */
  amiType?: AMITypes | string;

  /**
   * <p>The IAM role associated with your node group. The Amazon EKS worker node
   *                 <code>kubelet</code> daemon makes calls to AWS APIs on your behalf. Worker nodes
   *             receive permissions for these API calls through an IAM instance profile and associated
   *             policies.</p>
   */
  nodeRole?: string;

  /**
   * <p>The Kubernetes labels applied to the nodes in the node group.</p>
   *         <note>
   *             <p>Only labels that are applied with the Amazon EKS API are shown here. There may be other
   *                 Kubernetes labels applied to the nodes in this group.</p>
   *         </note>
   */
  labels?: { [key: string]: string };

  /**
   * <p>The resources associated with the node group, such as Auto Scaling groups and security
   *             groups for remote access.</p>
   */
  resources?: NodegroupResources;

  /**
   * <p>If the node group wasn't deployed with a launch template, then this is the disk size
   *             in the node group configuration. If the node group was deployed with a launch template,
   *             then this is <code>null</code>.</p>
   */
  diskSize?: number;

  /**
   * <p>The health status of the node group. If there are issues with your node group's
   *             health, they are listed here.</p>
   */
  health?: NodegroupHealth;

  /**
   * <p>If a launch template was used to create the node group, then this is the launch
   *             template that was used.</p>
   */
  launchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>The metadata applied to the node group to assist with categorization and organization.
   *             Each tag consists of a key and an optional value, both of which you define. Node group
   *             tags do not propagate to any other resources associated with the node group, such as the
   *             Amazon EC2 instances or subnets. </p>
   */
  tags?: { [key: string]: string };
}

export namespace Nodegroup {
  export const filterSensitiveLog = (obj: Nodegroup): any => ({
    ...obj,
  });
}

export interface CreateNodegroupResponse {
  /**
   * <p>The full description of your new node group.</p>
   */
  nodegroup?: Nodegroup;
}

export namespace CreateNodegroupResponse {
  export const filterSensitiveLog = (obj: CreateNodegroupResponse): any => ({
    ...obj,
  });
}

export interface DeleteAddonRequest {
  /**
   * <p>The name of the cluster to delete the add-on from.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html">
   *                <code>ListAddons</code>
   *             </a>.</p>
   */
  addonName: string | undefined;
}

export namespace DeleteAddonRequest {
  export const filterSensitiveLog = (obj: DeleteAddonRequest): any => ({
    ...obj,
  });
}

export interface DeleteAddonResponse {
  /**
   * <p>An Amazon EKS add-on.</p>
   */
  addon?: Addon;
}

export namespace DeleteAddonResponse {
  export const filterSensitiveLog = (obj: DeleteAddonResponse): any => ({
    ...obj,
  });
}

export interface DeleteClusterRequest {
  /**
   * <p>The name of the cluster to delete.</p>
   */
  name: string | undefined;
}

export namespace DeleteClusterRequest {
  export const filterSensitiveLog = (obj: DeleteClusterRequest): any => ({
    ...obj,
  });
}

export interface DeleteClusterResponse {
  /**
   * <p>The full description of the cluster to delete.</p>
   */
  cluster?: Cluster;
}

export namespace DeleteClusterResponse {
  export const filterSensitiveLog = (obj: DeleteClusterResponse): any => ({
    ...obj,
  });
}

export interface DeleteFargateProfileRequest {
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
  export const filterSensitiveLog = (obj: DeleteFargateProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteFargateProfileResponse {
  /**
   * <p>The deleted Fargate profile.</p>
   */
  fargateProfile?: FargateProfile;
}

export namespace DeleteFargateProfileResponse {
  export const filterSensitiveLog = (obj: DeleteFargateProfileResponse): any => ({
    ...obj,
  });
}

export interface DeleteNodegroupRequest {
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
  export const filterSensitiveLog = (obj: DeleteNodegroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteNodegroupResponse {
  /**
   * <p>The full description of your deleted node group.</p>
   */
  nodegroup?: Nodegroup;
}

export namespace DeleteNodegroupResponse {
  export const filterSensitiveLog = (obj: DeleteNodegroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeAddonRequest {
  /**
   * <p>The name of the cluster.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html">
   *                <code>ListAddons</code>
   *             </a>.</p>
   */
  addonName: string | undefined;
}

export namespace DescribeAddonRequest {
  export const filterSensitiveLog = (obj: DescribeAddonRequest): any => ({
    ...obj,
  });
}

export interface DescribeAddonResponse {
  /**
   * <p>An Amazon EKS add-on.</p>
   */
  addon?: Addon;
}

export namespace DescribeAddonResponse {
  export const filterSensitiveLog = (obj: DescribeAddonResponse): any => ({
    ...obj,
  });
}

export interface DescribeAddonVersionsRequest {
  /**
   * <p>The Kubernetes versions that the add-on can be used with.</p>
   */
  kubernetesVersion?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribeAddonVersionsRequest</code> where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value.</p>
   *         <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;

  /**
   * <p>The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html">
   *                <code>ListAddons</code>
   *             </a>.</p>
   */
  addonName?: string;
}

export namespace DescribeAddonVersionsRequest {
  export const filterSensitiveLog = (obj: DescribeAddonVersionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeAddonVersionsResponse {
  /**
   * <p>The list of available versions with Kubernetes version compatibility.</p>
   */
  addons?: AddonInfo[];

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribeAddonVersionsResponse</code> where <code>maxResults</code> was used
   *             and the results exceeded the value of that parameter. Pagination continues from the end
   *             of the previous results that returned the <code>nextToken</code> value.</p>
   *         <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;
}

export namespace DescribeAddonVersionsResponse {
  export const filterSensitiveLog = (obj: DescribeAddonVersionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeClusterRequest {
  /**
   * <p>The name of the cluster to describe.</p>
   */
  name: string | undefined;
}

export namespace DescribeClusterRequest {
  export const filterSensitiveLog = (obj: DescribeClusterRequest): any => ({
    ...obj,
  });
}

export interface DescribeClusterResponse {
  /**
   * <p>The full description of your specified cluster.</p>
   */
  cluster?: Cluster;
}

export namespace DescribeClusterResponse {
  export const filterSensitiveLog = (obj: DescribeClusterResponse): any => ({
    ...obj,
  });
}

export interface DescribeFargateProfileRequest {
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
  export const filterSensitiveLog = (obj: DescribeFargateProfileRequest): any => ({
    ...obj,
  });
}

export interface DescribeFargateProfileResponse {
  /**
   * <p>The full description of your Fargate profile.</p>
   */
  fargateProfile?: FargateProfile;
}

export namespace DescribeFargateProfileResponse {
  export const filterSensitiveLog = (obj: DescribeFargateProfileResponse): any => ({
    ...obj,
  });
}

export interface DescribeNodegroupRequest {
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
  export const filterSensitiveLog = (obj: DescribeNodegroupRequest): any => ({
    ...obj,
  });
}

export interface DescribeNodegroupResponse {
  /**
   * <p>The full description of your node group.</p>
   */
  nodegroup?: Nodegroup;
}

export namespace DescribeNodegroupResponse {
  export const filterSensitiveLog = (obj: DescribeNodegroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeUpdateRequest {
  /**
   * <p>The name of the Amazon EKS cluster associated with the update.</p>
   */
  name: string | undefined;

  /**
   * <p>The ID of the update to describe.</p>
   */
  updateId: string | undefined;

  /**
   * <p>The name of the Amazon EKS node group associated with the update.</p>
   */
  nodegroupName?: string;

  /**
   * <p>The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html">
   *                <code>ListAddons</code>
   *             </a>.</p>
   */
  addonName?: string;
}

export namespace DescribeUpdateRequest {
  export const filterSensitiveLog = (obj: DescribeUpdateRequest): any => ({
    ...obj,
  });
}

export enum ErrorCode {
  ACCESS_DENIED = "AccessDenied",
  CLUSTER_UNREACHABLE = "ClusterUnreachable",
  CONFIGURATION_CONFLICT = "ConfigurationConflict",
  ENI_LIMIT_REACHED = "EniLimitReached",
  INSUFFICIENT_FREE_ADDRESSES = "InsufficientFreeAddresses",
  INSUFFICIENT_NUMBER_OF_REPLICAS = "InsufficientNumberOfReplicas",
  IP_NOT_AVAILABLE = "IpNotAvailable",
  NODE_CREATION_FAILURE = "NodeCreationFailure",
  OPERATION_NOT_PERMITTED = "OperationNotPermitted",
  POD_EVICTION_FAILURE = "PodEvictionFailure",
  SECURITY_GROUP_NOT_FOUND = "SecurityGroupNotFound",
  SUBNET_NOT_FOUND = "SubnetNotFound",
  UNKNOWN = "Unknown",
  VPC_ID_NOT_FOUND = "VpcIdNotFound",
}

/**
 * <p>An object representing an error when an asynchronous operation fails.</p>
 */
export interface ErrorDetail {
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
  resourceIds?: string[];
}

export namespace ErrorDetail {
  export const filterSensitiveLog = (obj: ErrorDetail): any => ({
    ...obj,
  });
}

export enum UpdateParamType {
  ADDON_VERSION = "AddonVersion",
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
  RESOLVE_CONFLICTS = "ResolveConflicts",
  SERVICE_ACCOUNT_ROLE_ARN = "ServiceAccountRoleArn",
  VERSION = "Version",
}

/**
 * <p>An object representing the details of an update request.</p>
 */
export interface UpdateParam {
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
  export const filterSensitiveLog = (obj: UpdateParam): any => ({
    ...obj,
  });
}

export enum UpdateStatus {
  CANCELLED = "Cancelled",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  SUCCESSFUL = "Successful",
}

export enum UpdateType {
  ADDON_UPDATE = "AddonUpdate",
  CONFIG_UPDATE = "ConfigUpdate",
  ENDPOINT_ACCESS_UPDATE = "EndpointAccessUpdate",
  LOGGING_UPDATE = "LoggingUpdate",
  VERSION_UPDATE = "VersionUpdate",
}

/**
 * <p>An object representing an asynchronous update.</p>
 */
export interface Update {
  /**
   * <p>A UUID that is used to track the update.</p>
   */
  id?: string;

  /**
   * <p>The current status of the update.</p>
   */
  status?: UpdateStatus | string;

  /**
   * <p>The type of the update.</p>
   */
  type?: UpdateType | string;

  /**
   * <p>A key-value map that contains the parameters associated with the update.</p>
   */
  params?: UpdateParam[];

  /**
   * <p>The Unix epoch timestamp in seconds for when the update was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Any errors associated with a <code>Failed</code> update.</p>
   */
  errors?: ErrorDetail[];
}

export namespace Update {
  export const filterSensitiveLog = (obj: Update): any => ({
    ...obj,
  });
}

export interface DescribeUpdateResponse {
  /**
   * <p>The full description of the specified update.</p>
   */
  update?: Update;
}

export namespace DescribeUpdateResponse {
  export const filterSensitiveLog = (obj: DescribeUpdateResponse): any => ({
    ...obj,
  });
}

export interface ListAddonsRequest {
  /**
   * <p>The name of the cluster.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The maximum number of add-on results returned by <code>ListAddonsRequest</code> in
   *             paginated output. When you use this parameter, <code>ListAddonsRequest</code> returns
   *             only <code>maxResults</code> results in a single page along with a
   *                 <code>nextToken</code> response element. You can see the remaining results of the
   *             initial request by sending another <code>ListAddonsRequest</code> request with the
   *             returned <code>nextToken</code> value. This value can be between 1 and
   *             100. If you don't use this parameter, <code>ListAddonsRequest</code>
   *             returns up to 100 results and a <code>nextToken</code> value, if
   *             applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>ListAddonsRequest</code> where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the
   *             previous results that returned the <code>nextToken</code> value.</p>
   *         <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;
}

export namespace ListAddonsRequest {
  export const filterSensitiveLog = (obj: ListAddonsRequest): any => ({
    ...obj,
  });
}

export interface ListAddonsResponse {
  /**
   * <p>A list of available add-ons.</p>
   */
  addons?: string[];

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>ListAddonsResponse</code> where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the
   *             previous results that returned the <code>nextToken</code> value.</p>
   *         <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *         </note>
   */
  nextToken?: string;
}

export namespace ListAddonsResponse {
  export const filterSensitiveLog = (obj: ListAddonsResponse): any => ({
    ...obj,
  });
}

export interface ListClustersRequest {
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
  export const filterSensitiveLog = (obj: ListClustersRequest): any => ({
    ...obj,
  });
}

export interface ListClustersResponse {
  /**
   * <p>A list of all of the clusters for your account in the specified Region.</p>
   */
  clusters?: string[];

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
  export const filterSensitiveLog = (obj: ListClustersResponse): any => ({
    ...obj,
  });
}

export interface ListFargateProfilesRequest {
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
  export const filterSensitiveLog = (obj: ListFargateProfilesRequest): any => ({
    ...obj,
  });
}

export interface ListFargateProfilesResponse {
  /**
   * <p>A list of all of the Fargate profiles associated with the specified cluster.</p>
   */
  fargateProfileNames?: string[];

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
  export const filterSensitiveLog = (obj: ListFargateProfilesResponse): any => ({
    ...obj,
  });
}

export interface ListNodegroupsRequest {
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
  export const filterSensitiveLog = (obj: ListNodegroupsRequest): any => ({
    ...obj,
  });
}

export interface ListNodegroupsResponse {
  /**
   * <p>A list of all of the node groups associated with the specified cluster.</p>
   */
  nodegroups?: string[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListNodegroups</code>
   *             request. When the results of a <code>ListNodegroups</code> request exceed
   *                 <code>maxResults</code>, you can use this value to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   */
  nextToken?: string;
}

export namespace ListNodegroupsResponse {
  export const filterSensitiveLog = (obj: ListNodegroupsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown if the request contains a semantic error. The precise meaning
 *             will depend on the API, and will be documented in the error message.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the
   *             supported resources are Amazon EKS clusters and managed node groups.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

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
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

export interface ListUpdatesRequest {
  /**
   * <p>The name of the Amazon EKS cluster to list updates for.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the Amazon EKS managed node group to list updates for.</p>
   */
  nodegroupName?: string;

  /**
   * <p>The names of the installed add-ons that have available updates.</p>
   */
  addonName?: string;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>ListUpdates</code> request where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the
   *             previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;

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
}

export namespace ListUpdatesRequest {
  export const filterSensitiveLog = (obj: ListUpdatesRequest): any => ({
    ...obj,
  });
}

export interface ListUpdatesResponse {
  /**
   * <p>A list of all the updates for the specified cluster and Region.</p>
   */
  updateIds?: string[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListUpdates</code>
   *             request. When the results of a <code>ListUpdates</code> request exceed
   *                 <code>maxResults</code>, you can use this value to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   */
  nextToken?: string;
}

export namespace ListUpdatesResponse {
  export const filterSensitiveLog = (obj: ListUpdatesResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
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
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to delete tags. Currently, the supported
   *             resources are Amazon EKS clusters and managed node groups.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateAddonRequest {
  /**
   * <p>The name of the cluster.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html">
   *                <code>ListAddons</code>
   *             </a>.</p>
   */
  addonName: string | undefined;

  /**
   * <p>The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html">
   *                <code>DescribeAddonVersions</code>
   *             </a>.</p>
   */
  addonVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the
   *      permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p>
   *         <note>
   *             <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for
   *                 your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling
   *                     IAM roles for service accounts on your cluster</a> in the
   *                 <i>Amazon EKS User Guide</i>.</p>
   *          </note>
   */
  serviceAccountRoleArn?: string;

  /**
   * <p>How to resolve parameter value conflicts when applying the new version of the add-on
   *             to the cluster.</p>
   */
  resolveConflicts?: ResolveConflicts | string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;
}

export namespace UpdateAddonRequest {
  export const filterSensitiveLog = (obj: UpdateAddonRequest): any => ({
    ...obj,
  });
}

export interface UpdateAddonResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   */
  update?: Update;
}

export namespace UpdateAddonResponse {
  export const filterSensitiveLog = (obj: UpdateAddonResponse): any => ({
    ...obj,
  });
}

export interface UpdateClusterConfigRequest {
  /**
   * <p>The name of the Amazon EKS cluster to update.</p>
   */
  name: string | undefined;

  /**
   * <p>An object representing the VPC configuration to use for an Amazon EKS cluster.</p>
   */
  resourcesVpcConfig?: VpcConfigRequest;

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
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;
}

export namespace UpdateClusterConfigRequest {
  export const filterSensitiveLog = (obj: UpdateClusterConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateClusterConfigResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   */
  update?: Update;
}

export namespace UpdateClusterConfigResponse {
  export const filterSensitiveLog = (obj: UpdateClusterConfigResponse): any => ({
    ...obj,
  });
}

export interface UpdateClusterVersionRequest {
  /**
   * <p>The name of the Amazon EKS cluster to update.</p>
   */
  name: string | undefined;

  /**
   * <p>The desired Kubernetes version following a successful update.</p>
   */
  version: string | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;
}

export namespace UpdateClusterVersionRequest {
  export const filterSensitiveLog = (obj: UpdateClusterVersionRequest): any => ({
    ...obj,
  });
}

export interface UpdateClusterVersionResponse {
  /**
   * <p>The full description of the specified update</p>
   */
  update?: Update;
}

export namespace UpdateClusterVersionResponse {
  export const filterSensitiveLog = (obj: UpdateClusterVersionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An object representing a Kubernetes label change for a managed node group.</p>
 */
export interface UpdateLabelsPayload {
  /**
   * <p>Kubernetes labels to be added or updated.</p>
   */
  addOrUpdateLabels?: { [key: string]: string };

  /**
   * <p>Kubernetes labels to be removed.</p>
   */
  removeLabels?: string[];
}

export namespace UpdateLabelsPayload {
  export const filterSensitiveLog = (obj: UpdateLabelsPayload): any => ({
    ...obj,
  });
}

export interface UpdateNodegroupConfigRequest {
  /**
   * <p>The name of the Amazon EKS cluster that the managed node group resides in.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the managed node group to update.</p>
   */
  nodegroupName: string | undefined;

  /**
   * <p>The Kubernetes labels to be applied to the nodes in the node group after the
   *             update.</p>
   */
  labels?: UpdateLabelsPayload;

  /**
   * <p>The scaling configuration details for the Auto Scaling group after the update.</p>
   */
  scalingConfig?: NodegroupScalingConfig;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;
}

export namespace UpdateNodegroupConfigRequest {
  export const filterSensitiveLog = (obj: UpdateNodegroupConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateNodegroupConfigResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   */
  update?: Update;
}

export namespace UpdateNodegroupConfigResponse {
  export const filterSensitiveLog = (obj: UpdateNodegroupConfigResponse): any => ({
    ...obj,
  });
}

export interface UpdateNodegroupVersionRequest {
  /**
   * <p>The name of the Amazon EKS cluster that is associated with the managed node group to
   *             update.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the managed node group to update.</p>
   */
  nodegroupName: string | undefined;

  /**
   * <p>The Kubernetes version to update to. If no version is specified, then the Kubernetes
   *             version of the node group does not change. You can specify the Kubernetes version of the
   *             cluster to update the node group to the latest AMI version of the cluster's Kubernetes
   *             version. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify
   *                 <code>version</code>, or the node group  update will fail.
   *             For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p>
   */
  version?: string;

  /**
   * <p>The AMI version of the Amazon EKS optimized AMI to use for the update. By default, the
   *             latest available AMI version for the node group's Kubernetes version is used. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux 2 AMI versions </a> in the
   *             <i>Amazon EKS User Guide</i>. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify
   *                 <code>releaseVersion</code>, or the node group  update will fail.
   *             For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the Amazon EKS User Guide.</p>
   */
  releaseVersion?: string;

  /**
   * <p>An object representing a node group's launch template specification. You can only
   *             update a node group using a launch template if the node group was originally deployed
   *             with a launch template.</p>
   */
  launchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>Force the update if the existing node group's pods are unable to be drained due to a
   *             pod disruption budget issue. If an update fails because pods could not be drained, you
   *             can force the update after it fails to terminate the old node whether or not any pods
   *             are running on the node.</p>
   */
  force?: boolean;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;
}

export namespace UpdateNodegroupVersionRequest {
  export const filterSensitiveLog = (obj: UpdateNodegroupVersionRequest): any => ({
    ...obj,
  });
}

export interface UpdateNodegroupVersionResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   */
  update?: Update;
}

export namespace UpdateNodegroupVersionResponse {
  export const filterSensitiveLog = (obj: UpdateNodegroupVersionResponse): any => ({
    ...obj,
  });
}
