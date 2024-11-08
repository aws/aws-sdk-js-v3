// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { EKSServiceException as __BaseException } from "./EKSServiceException";

/**
 * @public
 * @enum
 */
export const AuthenticationMode = {
  API: "API",
  API_AND_CONFIG_MAP: "API_AND_CONFIG_MAP",
  CONFIG_MAP: "CONFIG_MAP",
} as const;

/**
 * @public
 */
export type AuthenticationMode = (typeof AuthenticationMode)[keyof typeof AuthenticationMode];

/**
 * <p>The access configuration for the cluster.</p>
 * @public
 */
export interface AccessConfigResponse {
  /**
   * <p>Specifies whether or not the cluster creator IAM principal was set as a
   *             cluster admin access entry during cluster creation time.</p>
   * @public
   */
  bootstrapClusterCreatorAdminPermissions?: boolean;

  /**
   * <p>The current authentication mode of the cluster.</p>
   * @public
   */
  authenticationMode?: AuthenticationMode;
}

/**
 * <p>You don't have permissions to perform the requested operation. The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a>
 *             making the request must have at least one IAM permissions policy attached
 *             that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access
 *                 management</a> in the <i>IAM User Guide</i>.
 *         </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>An access entry allows an IAM principal (user or role) to access your
 *             cluster. Access entries can replace the need to maintain the <code>aws-auth</code>
 *             <code>ConfigMap</code> for authentication. For more information about access entries,
 *             see <a href="https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html">Access
 *                 entries</a> in the <i>Amazon EKS User Guide</i>.</p>
 * @public
 */
export interface AccessEntry {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The ARN of the IAM principal for the access entry. If you ever delete
   *             the IAM principal with this ARN, the access entry isn't automatically
   *             deleted. We recommend that you delete the access entry with an ARN for an IAM principal that you delete. If you don't delete the access entry and ever
   *             recreate the IAM principal, even if it has the same ARN, the access
   *             entry won't work. This is because even though the ARN is the same for the recreated
   *                 IAM principal, the <code>roleID</code> or <code>userID</code> (you
   *             can see this with the Security Token Service
   *             <code>GetCallerIdentity</code> API) is different for the recreated IAM
   *             principal than it was for the original IAM principal. Even though you
   *             don't see the IAM principal's <code>roleID</code> or <code>userID</code>
   *             for an access entry, Amazon EKS stores it with the access entry.</p>
   * @public
   */
  principalArn?: string;

  /**
   * <p>A <code>name</code> that you've specified in a Kubernetes <code>RoleBinding</code> or
   *                 <code>ClusterRoleBinding</code> object so that Kubernetes authorizes the
   *                 <code>principalARN</code> access to cluster objects.</p>
   * @public
   */
  kubernetesGroups?: string[];

  /**
   * <p>The ARN of the access entry.</p>
   * @public
   */
  accessEntryArn?: string;

  /**
   * <p>The Unix epoch timestamp at object creation.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Unix epoch timestamp for the last modification to the object.</p>
   * @public
   */
  modifiedAt?: Date;

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The <code>name</code> of a user that can authenticate to your cluster.</p>
   * @public
   */
  username?: string;

  /**
   * <p>The type of the access entry.</p>
   * @public
   */
  type?: string;
}

/**
 * <p>An access policy includes permissions that allow Amazon EKS to authorize an
 *             IAM principal to work with Kubernetes objects on your cluster. The policies are
 *             managed by Amazon EKS, but they're not IAM policies. You can't
 *             view the permissions in the policies using the API. The permissions for many of the
 *             policies are similar to the Kubernetes <code>cluster-admin</code>, <code>admin</code>,
 *                 <code>edit</code>, and <code>view</code> cluster roles. For more information about
 *             these cluster roles, see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles">User-facing roles</a> in the Kubernetes documentation. To view the contents of the
 *             policies, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/access-policies.html#access-policy-permissions">Access
 *                 policy permissions</a> in the <i>Amazon EKS User Guide</i>.</p>
 * @public
 */
export interface AccessPolicy {
  /**
   * <p>The name of the access policy.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The ARN of the access policy.</p>
   * @public
   */
  arn?: string;
}

/**
 * @public
 * @enum
 */
export const AccessScopeType = {
  cluster: "cluster",
  namespace: "namespace",
} as const;

/**
 * @public
 */
export type AccessScopeType = (typeof AccessScopeType)[keyof typeof AccessScopeType];

/**
 * <p>The scope of an <code>AccessPolicy</code> that's associated to an
 *                 <code>AccessEntry</code>.</p>
 * @public
 */
export interface AccessScope {
  /**
   * <p>The scope type of an access policy.</p>
   * @public
   */
  type?: AccessScopeType;

  /**
   * <p>A Kubernetes <code>namespace</code> that an access policy is scoped to. A value is required
   *             if you specified <code>namespace</code> for <code>Type</code>.</p>
   * @public
   */
  namespaces?: string[];
}

/**
 * @public
 * @enum
 */
export const AddonIssueCode = {
  ACCESS_DENIED: "AccessDenied",
  ADDON_PERMISSION_FAILURE: "AddonPermissionFailure",
  ADDON_SUBSCRIPTION_NEEDED: "AddonSubscriptionNeeded",
  ADMISSION_REQUEST_DENIED: "AdmissionRequestDenied",
  CLUSTER_UNREACHABLE: "ClusterUnreachable",
  CONFIGURATION_CONFLICT: "ConfigurationConflict",
  INSUFFICIENT_NUMBER_OF_REPLICAS: "InsufficientNumberOfReplicas",
  INTERNAL_FAILURE: "InternalFailure",
  K8S_RESOURCE_NOT_FOUND: "K8sResourceNotFound",
  UNSUPPORTED_ADDON_MODIFICATION: "UnsupportedAddonModification",
} as const;

/**
 * @public
 */
export type AddonIssueCode = (typeof AddonIssueCode)[keyof typeof AddonIssueCode];

/**
 * <p>An issue related to an add-on.</p>
 * @public
 */
export interface AddonIssue {
  /**
   * <p>A code that describes the type of issue.</p>
   * @public
   */
  code?: AddonIssueCode;

  /**
   * <p>A message that provides details about the issue and what might cause it.</p>
   * @public
   */
  message?: string;

  /**
   * <p>The resource IDs of the issue.</p>
   * @public
   */
  resourceIds?: string[];
}

/**
 * <p>The health of the add-on.</p>
 * @public
 */
export interface AddonHealth {
  /**
   * <p>An object representing the health issues for an add-on.</p>
   * @public
   */
  issues?: AddonIssue[];
}

/**
 * <p>Information about an Amazon EKS add-on from the Amazon Web Services Marketplace.</p>
 * @public
 */
export interface MarketplaceInformation {
  /**
   * <p>The product ID from the Amazon Web Services Marketplace.</p>
   * @public
   */
  productId?: string;

  /**
   * <p>The product URL from the Amazon Web Services Marketplace.</p>
   * @public
   */
  productUrl?: string;
}

/**
 * @public
 * @enum
 */
export const AddonStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DEGRADED: "DEGRADED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type AddonStatus = (typeof AddonStatus)[keyof typeof AddonStatus];

/**
 * <p>An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in
 *             the <i>Amazon EKS User Guide</i>.</p>
 * @public
 */
export interface Addon {
  /**
   * <p>The name of the add-on.</p>
   * @public
   */
  addonName?: string;

  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The status of the add-on.</p>
   * @public
   */
  status?: AddonStatus;

  /**
   * <p>The version of the add-on.</p>
   * @public
   */
  addonVersion?: string;

  /**
   * <p>An object that represents the health of the add-on.</p>
   * @public
   */
  health?: AddonHealth;

  /**
   * <p>The Amazon Resource Name (ARN) of the add-on.</p>
   * @public
   */
  addonArn?: string;

  /**
   * <p>The Unix epoch timestamp at object creation.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Unix epoch timestamp for the last modification to the object.</p>
   * @public
   */
  modifiedAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that's bound to the Kubernetes
   *                 <code>ServiceAccount</code> object that the add-on uses.</p>
   * @public
   */
  serviceAccountRoleArn?: string;

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The publisher of the add-on.</p>
   * @public
   */
  publisher?: string;

  /**
   * <p>The owner of the add-on.</p>
   * @public
   */
  owner?: string;

  /**
   * <p>Information about an Amazon EKS add-on from the Amazon Web Services Marketplace.</p>
   * @public
   */
  marketplaceInformation?: MarketplaceInformation;

  /**
   * <p>The configuration values that you provided.</p>
   * @public
   */
  configurationValues?: string;

  /**
   * <p>An array of Pod Identity Assocations owned by the Addon. Each EKS Pod Identity association maps a role to a service account in a namespace in the cluster.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/add-ons-iam.html">Attach an IAM Role to an Amazon EKS add-on using Pod Identity</a> in the EKS User Guide.</p>
   * @public
   */
  podIdentityAssociations?: string[];
}

/**
 * <p>Compatibility information.</p>
 * @public
 */
export interface Compatibility {
  /**
   * <p>The supported Kubernetes version of the cluster.</p>
   * @public
   */
  clusterVersion?: string;

  /**
   * <p>The supported compute platform.</p>
   * @public
   */
  platformVersions?: string[];

  /**
   * <p>The supported default version.</p>
   * @public
   */
  defaultVersion?: boolean;
}

/**
 * <p>Information about an add-on version.</p>
 * @public
 */
export interface AddonVersionInfo {
  /**
   * <p>The version of the add-on.</p>
   * @public
   */
  addonVersion?: string;

  /**
   * <p>The architectures that the version supports.</p>
   * @public
   */
  architecture?: string[];

  /**
   * <p>An object representing the compatibilities of a version.</p>
   * @public
   */
  compatibilities?: Compatibility[];

  /**
   * <p>Whether the add-on requires configuration.</p>
   * @public
   */
  requiresConfiguration?: boolean;

  /**
   * <p>Indicates if the Addon requires IAM Permissions to operate, such as networking permissions.</p>
   * @public
   */
  requiresIamPermissions?: boolean;
}

/**
 * <p>Information about an add-on.</p>
 * @public
 */
export interface AddonInfo {
  /**
   * <p>The name of the add-on.</p>
   * @public
   */
  addonName?: string;

  /**
   * <p>The type of the add-on.</p>
   * @public
   */
  type?: string;

  /**
   * <p>An object representing information about available add-on versions and compatible
   *             Kubernetes versions.</p>
   * @public
   */
  addonVersions?: AddonVersionInfo[];

  /**
   * <p>The publisher of the add-on.</p>
   * @public
   */
  publisher?: string;

  /**
   * <p>The owner of the add-on.</p>
   * @public
   */
  owner?: string;

  /**
   * <p>Information about the add-on from the Amazon Web Services Marketplace.</p>
   * @public
   */
  marketplaceInformation?: MarketplaceInformation;
}

/**
 * <p>A type of Pod Identity Association owned by an Amazon EKS Add-on.</p>
 *          <p>Each EKS Pod Identity Association maps a role to a service account in a namespace in the cluster.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/add-ons-iam.html">Attach an IAM Role to an Amazon EKS add-on using Pod Identity</a> in the EKS User Guide.</p>
 * @public
 */
export interface AddonPodIdentityAssociations {
  /**
   * <p>The name of a Kubernetes Service Account.</p>
   * @public
   */
  serviceAccount: string | undefined;

  /**
   * <p>The ARN of an IAM Role.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>Information about how to configure IAM for an Addon.</p>
 * @public
 */
export interface AddonPodIdentityConfiguration {
  /**
   * <p>The Kubernetes Service Account name used by the addon.</p>
   * @public
   */
  serviceAccount?: string;

  /**
   * <p>A suggested IAM Policy for the addon.</p>
   * @public
   */
  recommendedManagedPolicies?: string[];
}

/**
 * @public
 * @enum
 */
export const AMITypes = {
  AL2023_ARM_64_STANDARD: "AL2023_ARM_64_STANDARD",
  AL2023_x86_64_NEURON: "AL2023_x86_64_NEURON",
  AL2023_x86_64_NVIDIA: "AL2023_x86_64_NVIDIA",
  AL2023_x86_64_STANDARD: "AL2023_x86_64_STANDARD",
  AL2_ARM_64: "AL2_ARM_64",
  AL2_x86_64: "AL2_x86_64",
  AL2_x86_64_GPU: "AL2_x86_64_GPU",
  BOTTLEROCKET_ARM_64: "BOTTLEROCKET_ARM_64",
  BOTTLEROCKET_ARM_64_NVIDIA: "BOTTLEROCKET_ARM_64_NVIDIA",
  BOTTLEROCKET_x86_64: "BOTTLEROCKET_x86_64",
  BOTTLEROCKET_x86_64_NVIDIA: "BOTTLEROCKET_x86_64_NVIDIA",
  CUSTOM: "CUSTOM",
  WINDOWS_CORE_2019_x86_64: "WINDOWS_CORE_2019_x86_64",
  WINDOWS_CORE_2022_x86_64: "WINDOWS_CORE_2022_x86_64",
  WINDOWS_FULL_2019_x86_64: "WINDOWS_FULL_2019_x86_64",
  WINDOWS_FULL_2022_x86_64: "WINDOWS_FULL_2022_x86_64",
} as const;

/**
 * @public
 */
export type AMITypes = (typeof AMITypes)[keyof typeof AMITypes];

/**
 * @public
 */
export interface AssociateAccessPolicyRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM user or role for the <code>AccessEntry</code>
   *             that you're associating the access policy to. </p>
   * @public
   */
  principalArn: string | undefined;

  /**
   * <p>The ARN of the <code>AccessPolicy</code> that you're associating. For a list of
   *             ARNs, use <code>ListAccessPolicies</code>.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The scope for the <code>AccessPolicy</code>. You can scope access policies to an
   *             entire cluster or to specific Kubernetes namespaces.</p>
   * @public
   */
  accessScope: AccessScope | undefined;
}

/**
 * <p>An access policy association.</p>
 * @public
 */
export interface AssociatedAccessPolicy {
  /**
   * <p>The ARN of the <code>AccessPolicy</code>.</p>
   * @public
   */
  policyArn?: string;

  /**
   * <p>The scope of the access policy.</p>
   * @public
   */
  accessScope?: AccessScope;

  /**
   * <p>The date and time the <code>AccessPolicy</code> was associated with an
   *                 <code>AccessEntry</code>.</p>
   * @public
   */
  associatedAt?: Date;

  /**
   * <p>The Unix epoch timestamp for the last modification to the object.</p>
   * @public
   */
  modifiedAt?: Date;
}

/**
 * @public
 */
export interface AssociateAccessPolicyResponse {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The ARN of the IAM principal for the <code>AccessEntry</code>.</p>
   * @public
   */
  principalArn?: string;

  /**
   * <p>The <code>AccessPolicy</code> and scope associated to the
   *             <code>AccessEntry</code>.</p>
   * @public
   */
  associatedAccessPolicy?: AssociatedAccessPolicy;
}

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string;

  /**
   * <p>The Fargate profile associated with the exception.</p>
   * @public
   */
  fargateProfileName?: string;

  /**
   * <p>The specified parameter for the add-on name is invalid. Review the available
   *             parameters for the API request</p>
   * @public
   */
  addonName?: string;

  /**
   * <p>The Amazon EKS subscription ID with the exception.</p>
   * @public
   */
  subscriptionId?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.fargateProfileName = opts.fargateProfileName;
    this.addonName = opts.addonName;
    this.subscriptionId = opts.subscriptionId;
  }
}

/**
 * <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string;

  /**
   * <p>The request is invalid given the state of the add-on name. Check the state of the
   *             cluster and the associated operations.</p>
   * @public
   */
  addonName?: string;

  /**
   * <p>The Amazon EKS subscription ID with the exception.</p>
   * @public
   */
  subscriptionId?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.addonName = opts.addonName;
    this.subscriptionId = opts.subscriptionId;
  }
}

/**
 * <p>The specified resource could not be found. You can view your available clusters with
 *                 <code>ListClusters</code>. You can view your available managed node groups with
 *                 <code>ListNodegroups</code>. Amazon EKS clusters and node groups are Amazon Web Services Region specific.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string;

  /**
   * <p>The Fargate profile associated with the exception.</p>
   * @public
   */
  fargateProfileName?: string;

  /**
   * <p>The Amazon EKS add-on name associated with the exception.</p>
   * @public
   */
  addonName?: string;

  /**
   * <p>The Amazon EKS subscription ID with the exception.</p>
   * @public
   */
  subscriptionId?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.fargateProfileName = opts.fargateProfileName;
    this.addonName = opts.addonName;
    this.subscriptionId = opts.subscriptionId;
  }
}

/**
 * <p>These errors are usually caused by a server-side issue.</p>
 * @public
 */
export class ServerException extends __BaseException {
  readonly name: "ServerException" = "ServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string;

  /**
   * <p>The Amazon EKS add-on name associated with the exception.</p>
   * @public
   */
  addonName?: string;

  /**
   * <p>The Amazon EKS subscription ID with the exception.</p>
   * @public
   */
  subscriptionId?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServerException, __BaseException>) {
    super({
      name: "ServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServerException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.addonName = opts.addonName;
    this.subscriptionId = opts.subscriptionId;
  }
}

/**
 * <p>Identifies the Key Management Service (KMS) key used to encrypt the
 *             secrets.</p>
 * @public
 */
export interface Provider {
  /**
   * <p>Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be
   *             symmetric and created in the same Amazon Web Services Region as the cluster. If the
   *                 KMS key was created in a different account, the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> must
   *             have access to the KMS key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html">Allowing
   *                 users in other accounts to use a KMS key</a> in the
   *                     <i>Key Management Service Developer Guide</i>.</p>
   * @public
   */
  keyArn?: string;
}

/**
 * <p>The encryption configuration for the cluster.</p>
 * @public
 */
export interface EncryptionConfig {
  /**
   * <p>Specifies the resources to be encrypted. The only supported value is
   *                 <code>secrets</code>.</p>
   * @public
   */
  resources?: string[];

  /**
   * <p>Key Management Service (KMS) key. Either the ARN or the alias can be
   *             used.</p>
   * @public
   */
  provider?: Provider;
}

/**
 * @public
 */
export interface AssociateEncryptionConfigRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The configuration you are using for encryption.</p>
   * @public
   */
  encryptionConfig: EncryptionConfig[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;
}

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  ACCESS_DENIED: "AccessDenied",
  ADMISSION_REQUEST_DENIED: "AdmissionRequestDenied",
  CLUSTER_UNREACHABLE: "ClusterUnreachable",
  CONFIGURATION_CONFLICT: "ConfigurationConflict",
  ENI_LIMIT_REACHED: "EniLimitReached",
  INSUFFICIENT_FREE_ADDRESSES: "InsufficientFreeAddresses",
  INSUFFICIENT_NUMBER_OF_REPLICAS: "InsufficientNumberOfReplicas",
  IP_NOT_AVAILABLE: "IpNotAvailable",
  K8S_RESOURCE_NOT_FOUND: "K8sResourceNotFound",
  NODE_CREATION_FAILURE: "NodeCreationFailure",
  OPERATION_NOT_PERMITTED: "OperationNotPermitted",
  POD_EVICTION_FAILURE: "PodEvictionFailure",
  SECURITY_GROUP_NOT_FOUND: "SecurityGroupNotFound",
  SUBNET_NOT_FOUND: "SubnetNotFound",
  UNKNOWN: "Unknown",
  UNSUPPORTED_ADDON_MODIFICATION: "UnsupportedAddonModification",
  VPC_ID_NOT_FOUND: "VpcIdNotFound",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * <p>An object representing an error when an asynchronous operation fails.</p>
 * @public
 */
export interface ErrorDetail {
  /**
   * <p>A brief description of the error. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>SubnetNotFound</b>: We couldn't find one of the
   *                     subnets associated with the cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SecurityGroupNotFound</b>: We couldn't find one
   *                     of the security groups associated with the cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>EniLimitReached</b>: You have reached the elastic
   *                     network interface limit for your account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IpNotAvailable</b>: A subnet associated with the
   *                     cluster doesn't have any available IP addresses.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AccessDenied</b>: You don't have permissions to
   *                     perform the specified operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>OperationNotPermitted</b>: The service role
   *                     associated with the cluster doesn't have the required access permissions for
   *                         Amazon EKS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>VpcIdNotFound</b>: We couldn't find the VPC
   *                     associated with the cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  errorCode?: ErrorCode;

  /**
   * <p>A more complete description of the error.</p>
   * @public
   */
  errorMessage?: string;

  /**
   * <p>An optional field that contains the resource IDs associated with the error.</p>
   * @public
   */
  resourceIds?: string[];
}

/**
 * @public
 * @enum
 */
export const UpdateParamType = {
  ADDON_VERSION: "AddonVersion",
  AUTHENTICATION_MODE: "AuthenticationMode",
  CLUSTER_LOGGING: "ClusterLogging",
  CONFIGURATION_VALUES: "ConfigurationValues",
  DESIRED_SIZE: "DesiredSize",
  ENCRYPTION_CONFIG: "EncryptionConfig",
  ENDPOINT_PRIVATE_ACCESS: "EndpointPrivateAccess",
  ENDPOINT_PUBLIC_ACCESS: "EndpointPublicAccess",
  IDENTITY_PROVIDER_CONFIG: "IdentityProviderConfig",
  LABELS_TO_ADD: "LabelsToAdd",
  LABELS_TO_REMOVE: "LabelsToRemove",
  LAUNCH_TEMPLATE_NAME: "LaunchTemplateName",
  LAUNCH_TEMPLATE_VERSION: "LaunchTemplateVersion",
  MAX_SIZE: "MaxSize",
  MAX_UNAVAILABLE: "MaxUnavailable",
  MAX_UNAVAILABLE_PERCENTAGE: "MaxUnavailablePercentage",
  MIN_SIZE: "MinSize",
  PLATFORM_VERSION: "PlatformVersion",
  POD_IDENTITY_ASSOCIATIONS: "PodIdentityAssociations",
  PUBLIC_ACCESS_CIDRS: "PublicAccessCidrs",
  RELEASE_VERSION: "ReleaseVersion",
  RESOLVE_CONFLICTS: "ResolveConflicts",
  SECURITY_GROUPS: "SecurityGroups",
  SERVICE_ACCOUNT_ROLE_ARN: "ServiceAccountRoleArn",
  SUBNETS: "Subnets",
  TAINTS_TO_ADD: "TaintsToAdd",
  TAINTS_TO_REMOVE: "TaintsToRemove",
  UPGRADE_POLICY: "UpgradePolicy",
  VERSION: "Version",
  ZONAL_SHIFT_CONFIG: "ZonalShiftConfig",
} as const;

/**
 * @public
 */
export type UpdateParamType = (typeof UpdateParamType)[keyof typeof UpdateParamType];

/**
 * <p>An object representing the details of an update request.</p>
 * @public
 */
export interface UpdateParam {
  /**
   * <p>The keys associated with an update request.</p>
   * @public
   */
  type?: UpdateParamType;

  /**
   * <p>The value of the keys submitted as part of an update request.</p>
   * @public
   */
  value?: string;
}

/**
 * @public
 * @enum
 */
export const UpdateStatus = {
  CANCELLED: "Cancelled",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  SUCCESSFUL: "Successful",
} as const;

/**
 * @public
 */
export type UpdateStatus = (typeof UpdateStatus)[keyof typeof UpdateStatus];

/**
 * @public
 * @enum
 */
export const UpdateType = {
  ACCESS_CONFIG_UPDATE: "AccessConfigUpdate",
  ADDON_UPDATE: "AddonUpdate",
  ASSOCIATE_ENCRYPTION_CONFIG: "AssociateEncryptionConfig",
  ASSOCIATE_IDENTITY_PROVIDER_CONFIG: "AssociateIdentityProviderConfig",
  CONFIG_UPDATE: "ConfigUpdate",
  DISASSOCIATE_IDENTITY_PROVIDER_CONFIG: "DisassociateIdentityProviderConfig",
  ENDPOINT_ACCESS_UPDATE: "EndpointAccessUpdate",
  LOGGING_UPDATE: "LoggingUpdate",
  UPGRADE_POLICY_UPDATE: "UpgradePolicyUpdate",
  VERSION_UPDATE: "VersionUpdate",
  VPC_CONFIG_UPDATE: "VpcConfigUpdate",
  ZONAL_SHIFT_CONFIG_UPDATE: "ZonalShiftConfigUpdate",
} as const;

/**
 * @public
 */
export type UpdateType = (typeof UpdateType)[keyof typeof UpdateType];

/**
 * <p>An object representing an asynchronous update.</p>
 * @public
 */
export interface Update {
  /**
   * <p>A UUID that is used to track the update.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The current status of the update.</p>
   * @public
   */
  status?: UpdateStatus;

  /**
   * <p>The type of the update.</p>
   * @public
   */
  type?: UpdateType;

  /**
   * <p>A key-value map that contains the parameters associated with the update.</p>
   * @public
   */
  params?: UpdateParam[];

  /**
   * <p>The Unix epoch timestamp at object creation.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>Any errors associated with a <code>Failed</code> update.</p>
   * @public
   */
  errors?: ErrorDetail[];
}

/**
 * @public
 */
export interface AssociateEncryptionConfigResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   * @public
   */
  update?: Update;
}

/**
 * <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html">IAM principal</a> that doesn't have permissions to use
 *             the action or resource or specifying an identifier that is not valid.</p>
 * @public
 */
export class ClientException extends __BaseException {
  readonly name: "ClientException" = "ClientException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string;

  /**
   * <p>The Amazon EKS add-on name associated with the exception.</p>
   * @public
   */
  addonName?: string;

  /**
   * <p>The Amazon EKS subscription ID with the exception.</p>
   * @public
   */
  subscriptionId?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ClientException, __BaseException>) {
    super({
      name: "ClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ClientException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.addonName = opts.addonName;
    this.subscriptionId = opts.subscriptionId;
  }
}

/**
 * <p>The specified resource is in use.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string;

  /**
   * <p>The specified add-on name is in use.</p>
   * @public
   */
  addonName?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.addonName = opts.addonName;
  }
}

/**
 * <p>An object representing an OpenID Connect (OIDC) configuration. Before associating an
 *             OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating
 *                 users for your cluster from an OIDC identity provider</a> in the
 *             <i>Amazon EKS User Guide</i>.</p>
 * @public
 */
export interface OidcIdentityProviderConfigRequest {
  /**
   * <p>The name of the OIDC provider configuration.</p>
   * @public
   */
  identityProviderConfigName: string | undefined;

  /**
   * <p>The URL of the OIDC identity provider that allows the API server to discover public
   *             signing keys for verifying tokens. The URL must begin with <code>https://</code> and
   *             should correspond to the <code>iss</code> claim in the provider's OIDC ID tokens.
   *             Based on the OIDC standard, path components are allowed but query parameters are not.
   *             Typically the URL consists of only a hostname, like
   *                 <code>https://server.example.org</code> or <code>https://example.com</code>. This
   *             URL should point to the level below <code>.well-known/openid-configuration</code> and
   *             must be publicly accessible over the internet.</p>
   * @public
   */
  issuerUrl: string | undefined;

  /**
   * <p>This is also known as <i>audience</i>. The ID for the client application
   *             that makes authentication requests to the OIDC identity provider.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The JSON Web Token (JWT) claim to use as the username. The default is
   *             <code>sub</code>, which is expected to be a unique identifier of the end user. You can
   *             choose other claims, such as <code>email</code> or <code>name</code>, depending on the
   *             OIDC identity provider. Claims other than <code>email</code> are prefixed with the
   *             issuer URL to prevent naming clashes with other plug-ins.</p>
   * @public
   */
  usernameClaim?: string;

  /**
   * <p>The prefix that is prepended to username claims to prevent clashes with existing
   *             names. If you do not provide this field, and <code>username</code> is a value other than
   *                 <code>email</code>, the prefix defaults to <code>issuerurl#</code>. You can use the
   *             value <code>-</code> to disable all prefixing.</p>
   * @public
   */
  usernamePrefix?: string;

  /**
   * <p>The JWT claim that the provider uses to return your groups.</p>
   * @public
   */
  groupsClaim?: string;

  /**
   * <p>The prefix that is prepended to group claims to prevent clashes with existing names
   *             (such as <code>system:</code> groups). For example, the value<code> oidc:</code> will
   *             create group names like <code>oidc:engineering</code> and
   *             <code>oidc:infra</code>.</p>
   * @public
   */
  groupsPrefix?: string;

  /**
   * <p>The key value pairs that describe required claims in the identity token. If set, each
   *             claim is verified to be present in the token with a matching value. For the maximum
   *             number of claims that you can require, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-quotas.html">Amazon EKS service
   *                 quotas</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  requiredClaims?: Record<string, string>;
}

/**
 * @public
 */
export interface AssociateIdentityProviderConfigRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>An object representing an OpenID Connect (OIDC) identity provider configuration.</p>
   * @public
   */
  oidc: OidcIdentityProviderConfigRequest | undefined;

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;
}

/**
 * @public
 */
export interface AssociateIdentityProviderConfigResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   * @public
   */
  update?: Update;

  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>An Auto Scaling group that is associated with an Amazon EKS managed node
 *             group.</p>
 * @public
 */
export interface AutoScalingGroup {
  /**
   * <p>The name of the Auto Scaling group associated with an Amazon EKS managed
   *             node group.</p>
   * @public
   */
  name?: string;
}

/**
 * @public
 */
export interface CreateAccessEntryRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The ARN of the IAM principal for the <code>AccessEntry</code>. You can specify one ARN for each access entry. You can't specify the
   *             same ARN in more than one access entry. This value can't be changed after access entry
   *             creation.</p>
   *          <p>The valid principals differ depending on the type of the access entry in the
   *                 <code>type</code> field. The only valid ARN is IAM roles for the types of access
   *             entries for nodes: <code></code>
   *             <code></code>. You can use every IAM principal type for <code>STANDARD</code> access entries.
   *             You can't use the STS session principal type with access entries because this is a
   *             temporary principal for each session and not a permanent identity that can be assigned
   *             permissions.</p>
   *          <p>
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#bp-users-federation-idp">IAM best practices</a> recommend using IAM roles with
   *             temporary credentials, rather than IAM users with long-term credentials.
   *         </p>
   * @public
   */
  principalArn: string | undefined;

  /**
   * <p>The value for <code>name</code> that you've specified for <code>kind: Group</code> as
   *             a <code>subject</code> in a Kubernetes <code>RoleBinding</code> or
   *                 <code>ClusterRoleBinding</code> object. Amazon EKS doesn't confirm that the
   *             value for <code>name</code> exists in any bindings on your cluster. You can specify one
   *             or more names.</p>
   *          <p>Kubernetes authorizes the <code>principalArn</code> of the access entry to access any
   *             cluster objects that you've specified in a Kubernetes <code>Role</code> or
   *                 <code>ClusterRole</code> object that is also specified in a binding's
   *                 <code>roleRef</code>. For more information about creating Kubernetes
   *                 <code>RoleBinding</code>, <code>ClusterRoleBinding</code>, <code>Role</code>, or
   *                 <code>ClusterRole</code> objects, see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC
   *                 Authorization in the Kubernetes documentation</a>.</p>
   *          <p>If you want Amazon EKS to authorize the <code>principalArn</code> (instead of,
   *             or in addition to Kubernetes authorizing the <code>principalArn</code>), you can associate
   *             one or more access policies to the access entry using
   *             <code>AssociateAccessPolicy</code>. If you associate any access policies, the
   *                 <code>principalARN</code> has all permissions assigned in the associated access
   *             policies and all permissions in any Kubernetes <code>Role</code> or <code>ClusterRole</code>
   *             objects that the group names are bound to.</p>
   * @public
   */
  kubernetesGroups?: string[];

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>The username to authenticate to Kubernetes with. We recommend not specifying a username and
   *             letting Amazon EKS specify it for you. For more information about the value
   *                 Amazon EKS specifies for you, or constraints before specifying your own
   *             username, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html#creating-access-entries">Creating
   *                 access entries</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  username?: string;

  /**
   * <p>The type of the new access entry. Valid values are <code>Standard</code>,
   *                 <code>FARGATE_LINUX</code>, <code>EC2_LINUX</code>, and
   *             <code>EC2_WINDOWS</code>.</p>
   *          <p>If the <code>principalArn</code> is for an IAM role that's used for
   *             self-managed Amazon EC2 nodes, specify <code>EC2_LINUX</code> or
   *                 <code>EC2_WINDOWS</code>. Amazon EKS grants the necessary permissions to the
   *             node for you. If the <code>principalArn</code> is for any other purpose, specify
   *                 <code>STANDARD</code>. If you don't specify a value, Amazon EKS sets the
   *             value to <code>STANDARD</code>. It's unnecessary to create access entries for IAM roles used with Fargate profiles or managed Amazon EC2 nodes, because Amazon EKS creates entries in the
   *                 <code>aws-auth</code>
   *             <code>ConfigMap</code> for the roles. You can't change this value once you've created
   *             the access entry.</p>
   *          <p>If you set the value to <code>EC2_LINUX</code> or <code>EC2_WINDOWS</code>, you can't
   *             specify values for <code>kubernetesGroups</code>, or associate an
   *                 <code>AccessPolicy</code> to the access entry.</p>
   * @public
   */
  type?: string;
}

/**
 * @public
 */
export interface CreateAccessEntryResponse {
  /**
   * <p>An access entry allows an IAM principal (user or role) to access your
   *             cluster. Access entries can replace the need to maintain the <code>aws-auth</code>
   *             <code>ConfigMap</code> for authentication. For more information about access entries,
   *             see <a href="https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html">Access
   *                 entries</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  accessEntry?: AccessEntry;
}

/**
 * <p>You have encountered a service limit on the specified resource.</p>
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string;

  /**
   * <p>The Amazon EKS subscription ID with the exception.</p>
   * @public
   */
  subscriptionId?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.subscriptionId = opts.subscriptionId;
  }
}

/**
 * @public
 * @enum
 */
export const ResolveConflicts = {
  NONE: "NONE",
  OVERWRITE: "OVERWRITE",
  PRESERVE: "PRESERVE",
} as const;

/**
 * @public
 */
export type ResolveConflicts = (typeof ResolveConflicts)[keyof typeof ResolveConflicts];

/**
 * @public
 */
export interface CreateAddonRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the add-on. The name must match one of the names returned by
   *                 <code>DescribeAddonVersions</code>.</p>
   * @public
   */
  addonName: string | undefined;

  /**
   * <p>The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html">
   *                <code>DescribeAddonVersions</code>
   *             </a>.</p>
   * @public
   */
  addonVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the
   *      permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p>
   *          <note>
   *             <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for
   *                 your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling
   *                     IAM roles for service accounts on your cluster</a> in the
   *                 <i>Amazon EKS User Guide</i>.</p>
   *          </note>
   * @public
   */
  serviceAccountRoleArn?: string;

  /**
   * <p>How to resolve field value conflicts for an Amazon EKS add-on. Conflicts are
   *             handled based on the value you choose:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>None</b> – If the self-managed version of
   *                     the add-on is installed on your cluster, Amazon EKS doesn't change the
   *                     value. Creation of the add-on might fail.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Overwrite</b> – If the self-managed
   *                     version of the add-on is installed on your cluster and the Amazon EKS
   *                     default value is different than the existing value, Amazon EKS changes
   *                     the value to the Amazon EKS default value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Preserve</b> – This is similar to the NONE
   *                     option. If the self-managed version of the add-on is installed on your cluster
   *                         Amazon EKS doesn't change the add-on resource properties. Creation
   *                     of the add-on might fail if conflicts are detected. This option works
   *                     differently during the update operation. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html">UpdateAddon</a>.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't currently have the self-managed version of the add-on installed on your
   *             cluster, the Amazon EKS add-on is installed. Amazon EKS sets all values
   *             to default values, regardless of the option that you specify.</p>
   * @public
   */
  resolveConflicts?: ResolveConflicts;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The set of configuration values for the add-on that's created. The values that you
   *             provide are validated against the schema returned by
   *                 <code>DescribeAddonConfiguration</code>.</p>
   * @public
   */
  configurationValues?: string;

  /**
   * <p>An array of Pod Identity Assocations to be created. Each EKS Pod Identity association maps a Kubernetes service account to an IAM Role.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/add-ons-iam.html">Attach an IAM Role to an Amazon EKS add-on using Pod Identity</a> in the EKS User Guide.</p>
   * @public
   */
  podIdentityAssociations?: AddonPodIdentityAssociations[];
}

/**
 * @public
 */
export interface CreateAddonResponse {
  /**
   * <p>An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in
   *             the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  addon?: Addon;
}

/**
 * <p>The access configuration information for the cluster.</p>
 * @public
 */
export interface CreateAccessConfigRequest {
  /**
   * <p>Specifies whether or not the cluster creator IAM principal was set as a
   *             cluster admin access entry during cluster creation time. The default value is
   *                 <code>true</code>.</p>
   * @public
   */
  bootstrapClusterCreatorAdminPermissions?: boolean;

  /**
   * <p>The desired authentication mode for the cluster. If you create a cluster by using the
   *             EKS API, Amazon Web Services SDKs, or CloudFormation, the default is <code>CONFIG_MAP</code>. If you create
   *             the cluster by using the Amazon Web Services Management Console, the default value is
   *             <code>API_AND_CONFIG_MAP</code>.</p>
   * @public
   */
  authenticationMode?: AuthenticationMode;
}

/**
 * @public
 * @enum
 */
export const IpFamily = {
  IPV4: "ipv4",
  IPV6: "ipv6",
} as const;

/**
 * @public
 */
export type IpFamily = (typeof IpFamily)[keyof typeof IpFamily];

/**
 * <p>The Kubernetes network configuration for the cluster.</p>
 * @public
 */
export interface KubernetesNetworkConfigRequest {
  /**
   * <p>Don't specify a value if you select <code>ipv6</code> for <b>ipFamily</b>. The CIDR block to assign Kubernetes service IP addresses from. If
   *             you don't specify a block, Kubernetes assigns addresses from either the
   *                 <code>10.100.0.0/16</code> or <code>172.20.0.0/16</code> CIDR blocks. We recommend
   *             that you specify a block that does not overlap with resources in other networks that are
   *             peered or connected to your VPC. The block must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Within one of the following private IP address blocks:
   *                     <code>10.0.0.0/8</code>, <code>172.16.0.0/12</code>, or
   *                         <code>192.168.0.0/16</code>.</p>
   *             </li>
   *             <li>
   *                <p>Doesn't overlap with any CIDR block assigned to the VPC that you selected for
   *                     VPC.</p>
   *             </li>
   *             <li>
   *                <p>Between <code>/24</code> and <code>/12</code>.</p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>You can only specify a custom CIDR block when you create a cluster. You can't
   *                 change this value after the cluster is created.</p>
   *          </important>
   * @public
   */
  serviceIpv4Cidr?: string;

  /**
   * <p>Specify which IP family is used to assign Kubernetes pod and service IP addresses. If you
   *             don't specify a value, <code>ipv4</code> is used by default. You can only specify an IP
   *             family when you create a cluster and can't change this value once the cluster is
   *             created. If you specify <code>ipv6</code>, the VPC and subnets that you specify for
   *             cluster creation must have both <code>IPv4</code> and <code>IPv6</code> CIDR blocks
   *             assigned to them. You can't specify <code>ipv6</code> for clusters in China
   *             Regions.</p>
   *          <p>You can only specify <code>ipv6</code> for <code>1.21</code> and later clusters that
   *             use version <code>1.10.1</code> or later of the Amazon VPC CNI add-on. If you specify
   *                 <code>ipv6</code>, then ensure that your VPC meets the requirements listed in the
   *             considerations listed in <a href="https://docs.aws.amazon.com/eks/latest/userguide/cni-ipv6.html">Assigning IPv6 addresses to pods and
   *                 services</a> in the Amazon EKS User Guide. Kubernetes assigns services
   *                 <code>IPv6</code> addresses from the unique local address range
   *                 <code>(fc00::/7)</code>. You can't specify a custom <code>IPv6</code> CIDR block.
   *             Pod addresses are assigned from the subnet's <code>IPv6</code> CIDR.</p>
   * @public
   */
  ipFamily?: IpFamily;
}

/**
 * @public
 * @enum
 */
export const LogType = {
  API: "api",
  AUDIT: "audit",
  AUTHENTICATOR: "authenticator",
  CONTROLLER_MANAGER: "controllerManager",
  SCHEDULER: "scheduler",
} as const;

/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * <p>An object representing the enabled or disabled Kubernetes control plane logs for your
 *             cluster.</p>
 * @public
 */
export interface LogSetup {
  /**
   * <p>The available cluster control plane log types.</p>
   * @public
   */
  types?: LogType[];

  /**
   * <p>If a log type is enabled, that log type exports its control plane logs to CloudWatch Logs. If a log type isn't enabled, that log type doesn't export its control
   *             plane logs. Each individual log type can be enabled or disabled independently.</p>
   * @public
   */
  enabled?: boolean;
}

/**
 * <p>An object representing the logging configuration for resources in your cluster.</p>
 * @public
 */
export interface Logging {
  /**
   * <p>The cluster control plane logging configuration for your cluster.</p>
   * @public
   */
  clusterLogging?: LogSetup[];
}

/**
 * <p>The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see
 *                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity
 *                 considerations</a> in the Amazon EKS User Guide.</p>
 * @public
 */
export interface ControlPlanePlacementRequest {
  /**
   * <p>The name of the placement group for the Kubernetes control plane instances. This setting
   *             can't be changed after cluster creation. </p>
   * @public
   */
  groupName?: string;
}

/**
 * <p>The configuration of your local Amazon EKS cluster on an Amazon Web Services
 *             Outpost. Before creating a cluster on an Outpost, review <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html">Creating a local
 *                 cluster on an Outpost</a> in the <i>Amazon EKS User Guide</i>. This API isn't available for
 *                 Amazon EKS clusters on the Amazon Web Services cloud.</p>
 * @public
 */
export interface OutpostConfigRequest {
  /**
   * <p>The ARN of the Outpost that you want to use for your local Amazon EKS
   *             cluster on Outposts. Only a single Outpost ARN is supported.</p>
   * @public
   */
  outpostArns: string[] | undefined;

  /**
   * <p>The Amazon EC2 instance type that you want to use for your local Amazon EKS cluster on Outposts. Choose an instance type based on the number of nodes
   *             that your cluster will have. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity
   *                 considerations</a> in the <i>Amazon EKS User Guide</i>.</p>
   *          <p>The instance type that you specify is used for all Kubernetes control plane instances. The
   *             instance type can't be changed after cluster creation. The control plane is not
   *             automatically scaled by Amazon EKS.</p>
   *          <p> </p>
   * @public
   */
  controlPlaneInstanceType: string | undefined;

  /**
   * <p>An object representing the placement configuration for all the control plane instances
   *             of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  controlPlanePlacement?: ControlPlanePlacementRequest;
}

/**
 * <p>An object representing the VPC configuration to use for an Amazon EKS
 *             cluster.</p>
 * @public
 */
export interface VpcConfigRequest {
  /**
   * <p>Specify subnets for your Amazon EKS nodes. Amazon EKS creates
   *             cross-account elastic network interfaces in these subnets to allow communication between
   *             your nodes and the Kubernetes control plane.</p>
   * @public
   */
  subnetIds?: string[];

  /**
   * <p>Specify one or more security groups for the cross-account elastic network interfaces
   *             that Amazon EKS creates to use that allow communication between your nodes and
   *             the Kubernetes control plane. If you don't specify any security groups, then familiarize
   *             yourself with the difference between Amazon EKS defaults for clusters deployed
   *             with Kubernetes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Amazon EKS security group
   *                 considerations</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   * @public
   */
  securityGroupIds?: string[];

  /**
   * <p>Set this value to <code>false</code> to disable public access to your cluster's Kubernetes
   *             API server endpoint. If you disable public access, your cluster's Kubernetes API server can
   *             only receive requests from within the cluster VPC. The default value for this parameter
   *             is <code>true</code>, which enables public access for your Kubernetes API server. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in
   *             the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   * @public
   */
  endpointPublicAccess?: boolean;

  /**
   * <p>Set this value to <code>true</code> to enable private access for your cluster's Kubernetes
   *             API server endpoint. If you enable private access, Kubernetes API requests from within your
   *             cluster's VPC use the private VPC endpoint. The default value for this parameter is
   *                 <code>false</code>, which disables private access for your Kubernetes API server. If you
   *             disable private access and you have nodes or Fargate pods in the
   *             cluster, then ensure that <code>publicAccessCidrs</code> includes the necessary CIDR
   *             blocks for communication with the nodes or Fargate pods. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in
   *             the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   * @public
   */
  endpointPrivateAccess?: boolean;

  /**
   * <p>The CIDR blocks that are allowed access to your cluster's public Kubernetes API server
   *             endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that
   *             you specify is denied. The default value is <code>0.0.0.0/0</code>. If you've disabled
   *             private endpoint access, make sure that you specify the necessary CIDR blocks for every
   *             node and Fargate
   *             <code>Pod</code> in the cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   * @public
   */
  publicAccessCidrs?: string[];
}

/**
 * @public
 * @enum
 */
export const SupportType = {
  EXTENDED: "EXTENDED",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type SupportType = (typeof SupportType)[keyof typeof SupportType];

/**
 * <p>The support policy to use for the cluster. Extended support allows you to remain on specific Kubernetes versions for longer. Clusters in extended support have higher costs. The default value is <code>EXTENDED</code>. Use <code>STANDARD</code> to disable extended support.</p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/eks/latest/userguide/extended-support-control.html">Learn more about EKS Extended Support in the EKS User Guide.</a>
 *          </p>
 * @public
 */
export interface UpgradePolicyRequest {
  /**
   * <p>If the cluster is set to <code>EXTENDED</code>, it will enter extended support at the end of standard support. If the cluster is set to <code>STANDARD</code>, it will be automatically upgraded at the end of standard support.</p>
   *          <p>
   *             <a href="https://docs.aws.amazon.com/eks/latest/userguide/extended-support-control.html">Learn more about EKS Extended Support in the EKS User Guide.</a>
   *          </p>
   * @public
   */
  supportType?: SupportType;
}

/**
 * <p>The configuration for zonal shift for the cluster.</p>
 * @public
 */
export interface ZonalShiftConfigRequest {
  /**
   * <p>If zonal shift is enabled, Amazon Web Services configures zonal autoshift for the cluster.</p>
   * @public
   */
  enabled?: boolean;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * <p>The unique name to give to your cluster. The name can contain only alphanumeric characters (case-sensitive),
   * hyphens, and underscores. It must start with an alphanumeric character and can't be longer than
   * 100 characters. The name must be unique within the Amazon Web Services Region and Amazon Web Services account that you're
   * creating the cluster in.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The desired Kubernetes version for your cluster. If you don't specify a value here, the
   *             default version available in Amazon EKS is used.</p>
   *          <note>
   *             <p>The default version might not be the latest version available.</p>
   *          </note>
   * @public
   */
  version?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes
   *             control plane to make calls to Amazon Web Services API operations on your behalf. For
   *             more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html">Amazon EKS Service IAM Role</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The VPC configuration that's used by the cluster control plane. Amazon EKS VPC
   *             resources have specific requirements to work properly with Kubernetes. For more information,
   *             see <a href="https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html">Cluster VPC
   *                 Considerations</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Cluster Security Group Considerations</a> in the
   *             <i>Amazon EKS User Guide</i>. You must specify at least two subnets. You can specify up to five
   *             security groups. However, we recommend that you use a dedicated security group for your
   *             cluster control plane.</p>
   * @public
   */
  resourcesVpcConfig: VpcConfigRequest | undefined;

  /**
   * <p>The Kubernetes network configuration for the cluster.</p>
   * @public
   */
  kubernetesNetworkConfig?: KubernetesNetworkConfigRequest;

  /**
   * <p>Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster control plane logs</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   *          <note>
   *             <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to
   *                 exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch
   *                 Pricing</a>.</p>
   *          </note>
   * @public
   */
  logging?: Logging;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The encryption configuration for the cluster.</p>
   * @public
   */
  encryptionConfig?: EncryptionConfig[];

  /**
   * <p>An object representing the configuration of your local Amazon EKS cluster on
   *             an Amazon Web Services Outpost. Before creating a local cluster on an Outpost, review
   *                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-overview.html">Local clusters
   *                 for Amazon EKS on Amazon Web Services Outposts</a> in the
   *             <i>Amazon EKS User Guide</i>. This object isn't available for creating Amazon EKS clusters
   *             on the Amazon Web Services cloud.</p>
   * @public
   */
  outpostConfig?: OutpostConfigRequest;

  /**
   * <p>The access configuration for the cluster.</p>
   * @public
   */
  accessConfig?: CreateAccessConfigRequest;

  /**
   * <p>If you set this value to <code>False</code> when creating a cluster, the default networking add-ons will not be installed.</p>
   *          <p>The default networking addons include vpc-cni, coredns, and kube-proxy.</p>
   *          <p>Use this option when you plan to install third-party alternative add-ons or self-manage the default networking add-ons.</p>
   * @public
   */
  bootstrapSelfManagedAddons?: boolean;

  /**
   * <p>New clusters, by default, have extended support enabled. You can disable extended support when creating a cluster by setting this value to <code>STANDARD</code>.</p>
   * @public
   */
  upgradePolicy?: UpgradePolicyRequest;

  /**
   * <p>Enable or disable ARC zonal shift for the cluster. If zonal shift is enabled, Amazon Web Services
   *             configures zonal autoshift for the cluster.</p>
   *          <p>Zonal shift is a feature of
   *             Amazon Application Recovery Controller (ARC). ARC zonal shift is designed to be a temporary measure that allows you to move
   *             traffic for a resource away from an impaired AZ until the zonal shift expires or you cancel
   *             it. You can extend the zonal shift if necessary.</p>
   *          <p>You can start a zonal shift for an EKS cluster, or you can allow Amazon Web Services to do it for you
   *             by enabling <i>zonal autoshift</i>. This shift updates the flow of
   *             east-to-west network traffic in your cluster to only consider network endpoints for Pods
   *             running on worker nodes in healthy AZs. Additionally, any ALB or NLB handling ingress
   *             traffic for applications in your EKS cluster will automatically route traffic to targets in
   *             the healthy AZs. For more information about zonal shift in EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/zone-shift.html">Learn about Amazon Application Recovery Controller (ARC)
   *                 Zonal Shift in Amazon EKS</a> in the
   *             <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   * @public
   */
  zonalShiftConfig?: ZonalShiftConfigRequest;
}

/**
 * <p>An object representing the <code>certificate-authority-data</code> for your
 *             cluster.</p>
 * @public
 */
export interface Certificate {
  /**
   * <p>The Base64-encoded certificate data required to communicate with your cluster. Add
   *             this to the <code>certificate-authority-data</code> section of the
   *                 <code>kubeconfig</code> file for your cluster.</p>
   * @public
   */
  data?: string;
}

/**
 * <p>The full description of your connected cluster.</p>
 * @public
 */
export interface ConnectorConfigResponse {
  /**
   * <p>A unique ID associated with the cluster for registration purposes.</p>
   * @public
   */
  activationId?: string;

  /**
   * <p>A unique code associated with the cluster for registration purposes.</p>
   * @public
   */
  activationCode?: string;

  /**
   * <p>The expiration time of the connected cluster. The cluster's YAML file must be applied
   *             through the native provider.</p>
   * @public
   */
  activationExpiry?: Date;

  /**
   * <p>The cluster's cloud service provider.</p>
   * @public
   */
  provider?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role to communicate with services from the connected Kubernetes
   *             cluster.</p>
   * @public
   */
  roleArn?: string;
}

/**
 * @public
 * @enum
 */
export const ClusterIssueCode = {
  ACCESS_DENIED: "AccessDenied",
  CLUSTER_UNREACHABLE: "ClusterUnreachable",
  CONFIGURATION_CONFLICT: "ConfigurationConflict",
  EC2_SECURITY_GROUP_NOT_FOUND: "Ec2SecurityGroupNotFound",
  EC2_SERVICE_NOT_SUBSCRIBED: "Ec2ServiceNotSubscribed",
  EC2_SUBNET_NOT_FOUND: "Ec2SubnetNotFound",
  IAM_ROLE_NOT_FOUND: "IamRoleNotFound",
  INSUFFICIENT_FREE_ADDRESSES: "InsufficientFreeAddresses",
  INTERNAL_FAILURE: "InternalFailure",
  KMS_GRANT_REVOKED: "KmsGrantRevoked",
  KMS_KEY_DISABLED: "KmsKeyDisabled",
  KMS_KEY_MARKED_FOR_DELETION: "KmsKeyMarkedForDeletion",
  KMS_KEY_NOT_FOUND: "KmsKeyNotFound",
  OTHER: "Other",
  RESOURCE_LIMIT_EXCEEDED: "ResourceLimitExceeded",
  RESOURCE_NOT_FOUND: "ResourceNotFound",
  STS_REGIONAL_ENDPOINT_DISABLED: "StsRegionalEndpointDisabled",
  UNSUPPORTED_VERSION: "UnsupportedVersion",
  VPC_NOT_FOUND: "VpcNotFound",
} as const;

/**
 * @public
 */
export type ClusterIssueCode = (typeof ClusterIssueCode)[keyof typeof ClusterIssueCode];

/**
 * <p>An issue with your Amazon EKS cluster.</p>
 * @public
 */
export interface ClusterIssue {
  /**
   * <p>The error code of the issue.</p>
   * @public
   */
  code?: ClusterIssueCode;

  /**
   * <p>A description of the issue.</p>
   * @public
   */
  message?: string;

  /**
   * <p>The resource IDs that the issue relates to.</p>
   * @public
   */
  resourceIds?: string[];
}

/**
 * <p>An object representing the health of your Amazon EKS cluster.</p>
 * @public
 */
export interface ClusterHealth {
  /**
   * <p>An object representing the health issues of your Amazon EKS cluster.</p>
   * @public
   */
  issues?: ClusterIssue[];
}

/**
 * <p>An object representing the <a href="https://openid.net/connect/">OpenID Connect</a>
 *             (OIDC) identity provider information for the cluster.</p>
 * @public
 */
export interface OIDC {
  /**
   * <p>The issuer URL for the OIDC identity provider.</p>
   * @public
   */
  issuer?: string;
}

/**
 * <p>An object representing an identity provider.</p>
 * @public
 */
export interface Identity {
  /**
   * <p>An object representing the <a href="https://openid.net/connect/">OpenID Connect</a>
   *             identity provider information.</p>
   * @public
   */
  oidc?: OIDC;
}

/**
 * <p>The Kubernetes network configuration for the cluster. The response contains a value for
 *                 <b>serviceIpv6Cidr</b> or <b>serviceIpv4Cidr</b>, but not both. </p>
 * @public
 */
export interface KubernetesNetworkConfigResponse {
  /**
   * <p>The CIDR block that Kubernetes <code>Pod</code> and <code>Service</code> object IP
   *             addresses are assigned from. Kubernetes assigns addresses from an <code>IPv4</code> CIDR
   *             block assigned to a subnet that the node is in. If you didn't specify a CIDR block when
   *             you created the cluster, then Kubernetes assigns addresses from either the
   *                 <code>10.100.0.0/16</code> or <code>172.20.0.0/16</code> CIDR blocks. If this was
   *             specified, then it was specified when the cluster was created and it can't be
   *             changed.</p>
   * @public
   */
  serviceIpv4Cidr?: string;

  /**
   * <p>The CIDR block that Kubernetes pod and service IP addresses are assigned from if you
   *             created a 1.21 or later cluster with version 1.10.1 or later of the Amazon VPC CNI add-on and
   *             specified <code>ipv6</code> for <b>ipFamily</b> when you
   *             created the cluster. Kubernetes assigns service addresses from the unique local address range
   *                 (<code>fc00::/7</code>) because you can't specify a custom IPv6 CIDR block when you
   *             create the cluster.</p>
   * @public
   */
  serviceIpv6Cidr?: string;

  /**
   * <p>The IP family used to assign Kubernetes <code>Pod</code> and <code>Service</code> objects
   *             IP addresses. The IP family is always <code>ipv4</code>, unless you have a
   *                 <code>1.21</code> or later cluster running version <code>1.10.1</code> or later of
   *             the Amazon VPC CNI plugin for Kubernetes and specified <code>ipv6</code> when you created the cluster.
   *         </p>
   * @public
   */
  ipFamily?: IpFamily;
}

/**
 * <p>The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see
 *                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>.</p>
 * @public
 */
export interface ControlPlanePlacementResponse {
  /**
   * <p>The name of the placement group for the Kubernetes control plane instances.</p>
   * @public
   */
  groupName?: string;
}

/**
 * <p>An object representing the configuration of your local Amazon EKS cluster on
 *             an Amazon Web Services Outpost. This API isn't available for Amazon EKS clusters
 *             on the Amazon Web Services cloud.</p>
 * @public
 */
export interface OutpostConfigResponse {
  /**
   * <p>The ARN of the Outpost that you specified for use with your local Amazon EKS
   *             cluster on Outposts.</p>
   * @public
   */
  outpostArns: string[] | undefined;

  /**
   * <p>The Amazon EC2 instance type used for the control plane. The instance type is
   *             the same for all control plane instances.</p>
   * @public
   */
  controlPlaneInstanceType: string | undefined;

  /**
   * <p>An object representing the placement configuration for all the control plane instances
   *             of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity
   *                 considerations</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  controlPlanePlacement?: ControlPlanePlacementResponse;
}

/**
 * <p>An object representing an Amazon EKS cluster VPC configuration
 *             response.</p>
 * @public
 */
export interface VpcConfigResponse {
  /**
   * <p>The subnets associated with your cluster.</p>
   * @public
   */
  subnetIds?: string[];

  /**
   * <p>The security groups associated with the cross-account elastic network interfaces that
   *             are used to allow communication between your nodes and the Kubernetes control plane.</p>
   * @public
   */
  securityGroupIds?: string[];

  /**
   * <p>The cluster security group that was created by Amazon EKS for the cluster.
   *             Managed node groups use this security group for control-plane-to-data-plane
   *             communication.</p>
   * @public
   */
  clusterSecurityGroupId?: string;

  /**
   * <p>The VPC associated with your cluster.</p>
   * @public
   */
  vpcId?: string;

  /**
   * <p>Whether the public API server endpoint is enabled.</p>
   * @public
   */
  endpointPublicAccess?: boolean;

  /**
   * <p>This parameter indicates whether the Amazon EKS private API server endpoint is
   *             enabled. If the Amazon EKS private API server endpoint is enabled, Kubernetes API
   *             requests that originate from within your cluster's VPC use the private VPC endpoint
   *             instead of traversing the internet. If this value is disabled and you have nodes or
   *                 Fargate pods in the cluster, then ensure that
   *                 <code>publicAccessCidrs</code> includes the necessary CIDR blocks for communication
   *             with the nodes or Fargate pods. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   * @public
   */
  endpointPrivateAccess?: boolean;

  /**
   * <p>The CIDR blocks that are allowed access to your cluster's public Kubernetes API server
   *             endpoint.</p>
   * @public
   */
  publicAccessCidrs?: string[];
}

/**
 * @public
 * @enum
 */
export const ClusterStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ClusterStatus = (typeof ClusterStatus)[keyof typeof ClusterStatus];

/**
 * <p>This value indicates if extended support is enabled or disabled for the cluster.</p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/eks/latest/userguide/extended-support-control.html">Learn more about EKS Extended Support in the EKS User Guide.</a>
 *          </p>
 * @public
 */
export interface UpgradePolicyResponse {
  /**
   * <p>If the cluster is set to <code>EXTENDED</code>, it will enter extended support at the end of standard support. If the cluster is set to <code>STANDARD</code>, it will be automatically upgraded at the end of standard support.</p>
   *          <p>
   *             <a href="https://docs.aws.amazon.com/eks/latest/userguide/extended-support-control.html">Learn more about EKS Extended Support in the EKS User Guide.</a>
   *          </p>
   * @public
   */
  supportType?: SupportType;
}

/**
 * <p>The status of zonal shift configuration for the cluster</p>
 * @public
 */
export interface ZonalShiftConfigResponse {
  /**
   * <p>Whether the zonal shift is enabled.</p>
   * @public
   */
  enabled?: boolean;
}

/**
 * <p>An object representing an Amazon EKS cluster.</p>
 * @public
 */
export interface Cluster {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The Unix epoch timestamp at object creation.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Kubernetes server version for the cluster.</p>
   * @public
   */
  version?: string;

  /**
   * <p>The endpoint for your Kubernetes API server.</p>
   * @public
   */
  endpoint?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes
   *             control plane to make calls to Amazon Web Services API operations on your behalf.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The VPC configuration used by the cluster control plane. Amazon EKS VPC
   *             resources have specific requirements to work properly with Kubernetes. For more information,
   *             see <a href="https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html">Cluster VPC
   *                 considerations</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Cluster security group considerations</a> in the
   *             <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  resourcesVpcConfig?: VpcConfigResponse;

  /**
   * <p>The Kubernetes network configuration for the cluster.</p>
   * @public
   */
  kubernetesNetworkConfig?: KubernetesNetworkConfigResponse;

  /**
   * <p>The logging configuration for your cluster.</p>
   * @public
   */
  logging?: Logging;

  /**
   * <p>The identity provider information for the cluster.</p>
   * @public
   */
  identity?: Identity;

  /**
   * <p>The current status of the cluster.</p>
   * @public
   */
  status?: ClusterStatus;

  /**
   * <p>The <code>certificate-authority-data</code> for your cluster.</p>
   * @public
   */
  certificateAuthority?: Certificate;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>The platform version of your Amazon EKS cluster. For more information about
   *             clusters deployed on the Amazon Web Services Cloud, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/platform-versions.html">Platform
   *                 versions</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>. For more information
   *             about local clusters deployed on an Outpost, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-platform-versions.html">Amazon EKS local cluster platform versions</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   * @public
   */
  platformVersion?: string;

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The encryption configuration for the cluster.</p>
   * @public
   */
  encryptionConfig?: EncryptionConfig[];

  /**
   * <p>The configuration used to connect to a cluster for registration.</p>
   * @public
   */
  connectorConfig?: ConnectorConfigResponse;

  /**
   * <p>The ID of your local Amazon EKS cluster on an Amazon Web Services Outpost. This
   *             property isn't available for an Amazon EKS cluster on the Amazon Web Services
   *             cloud.</p>
   * @public
   */
  id?: string;

  /**
   * <p>An object representing the health of your Amazon EKS cluster.</p>
   * @public
   */
  health?: ClusterHealth;

  /**
   * <p>An object representing the configuration of your local Amazon EKS cluster on
   *             an Amazon Web Services Outpost. This object isn't available for clusters on the Amazon Web Services cloud.</p>
   * @public
   */
  outpostConfig?: OutpostConfigResponse;

  /**
   * <p>The access configuration for the cluster.</p>
   * @public
   */
  accessConfig?: AccessConfigResponse;

  /**
   * <p>This value indicates if extended support is enabled or disabled for the cluster.</p>
   *          <p>
   *             <a href="https://docs.aws.amazon.com/eks/latest/userguide/extended-support-control.html">Learn more about EKS Extended Support in the EKS User Guide.</a>
   *          </p>
   * @public
   */
  upgradePolicy?: UpgradePolicyResponse;

  /**
   * <p>The configuration for zonal shift for the cluster.</p>
   * @public
   */
  zonalShiftConfig?: ZonalShiftConfigResponse;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * <p>The full description of your new cluster.</p>
   * @public
   */
  cluster?: Cluster;
}

/**
 * <p>The service is unavailable. Back off and retry the operation.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * <p>At least one of your specified cluster subnets is in an Availability Zone that does
 *             not support Amazon EKS. The exception output specifies the supported
 *             Availability Zones for your account, from which you can choose subnets for your
 *             cluster.</p>
 * @public
 */
export class UnsupportedAvailabilityZoneException extends __BaseException {
  readonly name: "UnsupportedAvailabilityZoneException" = "UnsupportedAvailabilityZoneException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   * @public
   */
  nodegroupName?: string;

  /**
   * <p>The supported Availability Zones for your account. Choose subnets in these
   *             Availability Zones for your cluster.</p>
   * @public
   */
  validZones?: string[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedAvailabilityZoneException, __BaseException>) {
    super({
      name: "UnsupportedAvailabilityZoneException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedAvailabilityZoneException.prototype);
    this.clusterName = opts.clusterName;
    this.nodegroupName = opts.nodegroupName;
    this.validZones = opts.validZones;
  }
}

/**
 * @public
 * @enum
 */
export const EksAnywhereSubscriptionLicenseType = {
  Cluster: "Cluster",
} as const;

/**
 * @public
 */
export type EksAnywhereSubscriptionLicenseType =
  (typeof EksAnywhereSubscriptionLicenseType)[keyof typeof EksAnywhereSubscriptionLicenseType];

/**
 * @public
 * @enum
 */
export const EksAnywhereSubscriptionTermUnit = {
  MONTHS: "MONTHS",
} as const;

/**
 * @public
 */
export type EksAnywhereSubscriptionTermUnit =
  (typeof EksAnywhereSubscriptionTermUnit)[keyof typeof EksAnywhereSubscriptionTermUnit];

/**
 * <p>An object representing the term duration and term unit type of your subscription. This
 *             determines the term length of your subscription. Valid values are MONTHS for term unit
 *             and 12 or 36 for term duration, indicating a 12 month or 36 month subscription.</p>
 * @public
 */
export interface EksAnywhereSubscriptionTerm {
  /**
   * <p>The duration of the subscription term. Valid values are 12 and 36, indicating a 12
   *             month or 36 month subscription.</p>
   * @public
   */
  duration?: number;

  /**
   * <p>The term unit of the subscription. Valid value is <code>MONTHS</code>.</p>
   * @public
   */
  unit?: EksAnywhereSubscriptionTermUnit;
}

/**
 * @public
 */
export interface CreateEksAnywhereSubscriptionRequest {
  /**
   * <p>The unique name for your subscription. It must be unique in your Amazon Web Services account in the
   *             Amazon Web Services Region you're creating the subscription in. The name can contain only alphanumeric
   *             characters (case-sensitive), hyphens, and underscores. It must start with an alphabetic
   *             character and can't be longer than 100 characters.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An object representing the term duration and term unit type of your subscription. This
   *             determines the term length of your subscription. Valid values are MONTHS for term unit
   *             and 12 or 36 for term duration, indicating a 12 month or 36 month subscription. This
   *             value cannot be changed after creating the subscription.</p>
   * @public
   */
  term: EksAnywhereSubscriptionTerm | undefined;

  /**
   * <p>The number of licenses to purchase with the subscription. Valid values are between 1
   *             and 100. This value can't be changed after creating the subscription.</p>
   * @public
   */
  licenseQuantity?: number;

  /**
   * <p>The license type for all licenses in the subscription. Valid value is CLUSTER. With
   *             the CLUSTER license type, each license covers support for a single EKS Anywhere
   *             cluster.</p>
   * @public
   */
  licenseType?: EksAnywhereSubscriptionLicenseType;

  /**
   * <p>A boolean indicating whether the subscription auto renews at the end of the
   *             term.</p>
   * @public
   */
  autoRenew?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>The metadata for a subscription to assist with categorization and organization. Each
   *             tag consists of a key and an optional value. Subscription tags don't propagate to any
   *             other resources associated with the subscription.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>An EKS Anywhere subscription authorizing the customer to support for licensed clusters
 *             and access to EKS Anywhere Curated Packages.</p>
 * @public
 */
export interface EksAnywhereSubscription {
  /**
   * <p>UUID identifying a subscription.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the subscription.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The Unix timestamp in seconds for when the subscription was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Unix timestamp in seconds for when the subscription is effective.</p>
   * @public
   */
  effectiveDate?: Date;

  /**
   * <p>The Unix timestamp in seconds for when the subscription will expire or auto renew,
   *             depending on the auto renew configuration of the subscription object.</p>
   * @public
   */
  expirationDate?: Date;

  /**
   * <p>The number of licenses included in a subscription. Valid values are between 1 and
   *             100.</p>
   * @public
   */
  licenseQuantity?: number;

  /**
   * <p>The type of licenses included in the subscription. Valid value is CLUSTER. With the
   *             CLUSTER license type, each license covers support for a single EKS Anywhere
   *             cluster.</p>
   * @public
   */
  licenseType?: EksAnywhereSubscriptionLicenseType;

  /**
   * <p>An EksAnywhereSubscriptionTerm object. </p>
   * @public
   */
  term?: EksAnywhereSubscriptionTerm;

  /**
   * <p>The status of a subscription.</p>
   * @public
   */
  status?: string;

  /**
   * <p>A boolean indicating whether or not a subscription will auto renew when it
   *             expires.</p>
   * @public
   */
  autoRenew?: boolean;

  /**
   * <p>Amazon Web Services License Manager ARN associated with the subscription.</p>
   * @public
   */
  licenseArns?: string[];

  /**
   * <p>The metadata for a subscription to assist with categorization and organization. Each
   *             tag consists of a key and an optional value. Subscription tags do not propagate to any
   *             other resources associated with the subscription.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateEksAnywhereSubscriptionResponse {
  /**
   * <p>The full description of the subscription.</p>
   * @public
   */
  subscription?: EksAnywhereSubscription;
}

/**
 * <p>An object representing an Fargate profile selector.</p>
 * @public
 */
export interface FargateProfileSelector {
  /**
   * <p>The Kubernetes <code>namespace</code> that the selector should match.</p>
   * @public
   */
  namespace?: string;

  /**
   * <p>The Kubernetes labels that the selector should match. A pod must contain all of the labels
   *             that are specified in the selector for it to be considered a match.</p>
   * @public
   */
  labels?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateFargateProfileRequest {
  /**
   * <p>The name of the Fargate profile.</p>
   * @public
   */
  fargateProfileName: string | undefined;

  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the <code>Pod</code> execution role to use for a <code>Pod</code>
   *             that matches the selectors in the Fargate profile. The <code>Pod</code>
   *             execution role allows Fargate infrastructure to register with your
   *             cluster as a node, and it provides read access to Amazon ECR image repositories.
   *             For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">
   *                <code>Pod</code> execution
   *                 role</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  podExecutionRoleArn: string | undefined;

  /**
   * <p>The IDs of subnets to launch a <code>Pod</code> into. A <code>Pod</code> running on
   *                 Fargate isn't assigned a public IP address, so only private subnets
   *             (with no direct route to an Internet Gateway) are accepted for this parameter.</p>
   * @public
   */
  subnets?: string[];

  /**
   * <p>The selectors to match for a <code>Pod</code> to use this Fargate
   *             profile. Each selector must have an associated Kubernetes <code>namespace</code>. Optionally,
   *             you can also specify <code>labels</code> for a <code>namespace</code>. You may specify
   *             up to five selectors in a Fargate profile.</p>
   * @public
   */
  selectors?: FargateProfileSelector[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const FargateProfileIssueCode = {
  ACCESS_DENIED: "AccessDenied",
  CLUSTER_UNREACHABLE: "ClusterUnreachable",
  INTERNAL_FAILURE: "InternalFailure",
  POD_EXECUTION_ROLE_ALREADY_IN_USE: "PodExecutionRoleAlreadyInUse",
} as const;

/**
 * @public
 */
export type FargateProfileIssueCode = (typeof FargateProfileIssueCode)[keyof typeof FargateProfileIssueCode];

/**
 * <p>An issue that is associated with the Fargate profile.</p>
 * @public
 */
export interface FargateProfileIssue {
  /**
   * <p>A brief description of the error.</p>
   * @public
   */
  code?: FargateProfileIssueCode;

  /**
   * <p>The error message associated with the issue.</p>
   * @public
   */
  message?: string;

  /**
   * <p>The Amazon Web Services resources that are affected by this issue.</p>
   * @public
   */
  resourceIds?: string[];
}

/**
 * <p>The health status of the Fargate  profile. If there are issues with
 *             your Fargate profile's health, they are listed here.</p>
 * @public
 */
export interface FargateProfileHealth {
  /**
   * <p>Any issues that are associated with the Fargate profile.</p>
   * @public
   */
  issues?: FargateProfileIssue[];
}

/**
 * @public
 * @enum
 */
export const FargateProfileStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type FargateProfileStatus = (typeof FargateProfileStatus)[keyof typeof FargateProfileStatus];

/**
 * <p>An object representing an Fargate profile.</p>
 * @public
 */
export interface FargateProfile {
  /**
   * <p>The name of the Fargate profile.</p>
   * @public
   */
  fargateProfileName?: string;

  /**
   * <p>The full Amazon Resource Name (ARN) of the Fargate profile.</p>
   * @public
   */
  fargateProfileArn?: string;

  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The Unix epoch timestamp at object creation.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the <code>Pod</code> execution role to use for any <code>Pod</code>
   *             that matches the selectors in the Fargate profile. For more information,
   *             see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">
   *                <code>Pod</code> execution role</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  podExecutionRoleArn?: string;

  /**
   * <p>The IDs of subnets to launch a <code>Pod</code> into.</p>
   * @public
   */
  subnets?: string[];

  /**
   * <p>The selectors to match for a <code>Pod</code> to use this Fargate
   *             profile.</p>
   * @public
   */
  selectors?: FargateProfileSelector[];

  /**
   * <p>The current status of the Fargate profile.</p>
   * @public
   */
  status?: FargateProfileStatus;

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The health status of the Fargate  profile. If there are issues with
   *             your Fargate profile's health, they are listed here.</p>
   * @public
   */
  health?: FargateProfileHealth;
}

/**
 * @public
 */
export interface CreateFargateProfileResponse {
  /**
   * <p>The full description of your new Fargate profile.</p>
   * @public
   */
  fargateProfile?: FargateProfile;
}

/**
 * @public
 * @enum
 */
export const CapacityTypes = {
  CAPACITY_BLOCK: "CAPACITY_BLOCK",
  ON_DEMAND: "ON_DEMAND",
  SPOT: "SPOT",
} as const;

/**
 * @public
 */
export type CapacityTypes = (typeof CapacityTypes)[keyof typeof CapacityTypes];

/**
 * <p>An object representing a node group launch template specification. The launch template
 *             can't include <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html">
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
 *             </a> in the Amazon EC2 API
 *             Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Customizing managed nodes with launch templates</a> in the <i>Amazon EKS User Guide</i>.</p>
 *          <p>You must specify either the launch template ID or the launch template name in the
 *             request, but not both.</p>
 * @public
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify either the launch template name or the launch template ID in the
   *             request, but not both.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The version number of the launch template to use. If no version is specified, then the
   *             template's default version is used.</p>
   * @public
   */
  version?: string;

  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the launch template ID or the launch template name in the
   *             request, but not both.</p>
   * @public
   */
  id?: string;
}

/**
 * <p>An object representing the remote access configuration for the managed node
 *             group.</p>
 * @public
 */
export interface RemoteAccessConfig {
  /**
   * <p>The Amazon EC2 SSH key name that provides access for SSH communication with
   *             the nodes in the managed node group. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 key pairs and Linux instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>. For
   *             Windows, an Amazon EC2 SSH key is used to obtain the RDP password. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-key-pairs.html">Amazon EC2 key pairs and Windows instances</a> in
   *             the <i>Amazon Elastic Compute Cloud User Guide for Windows Instances</i>.</p>
   * @public
   */
  ec2SshKey?: string;

  /**
   * <p>The security group IDs that are allowed SSH access (port 22) to the nodes. For
   *             Windows, the port is 3389. If you specify an Amazon EC2 SSH key but don't
   *             specify a source security group when you create a managed node group, then the port on
   *             the nodes is opened to the internet (<code>0.0.0.0/0</code>). For more information, see
   *                 <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Security Groups for Your VPC</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   * @public
   */
  sourceSecurityGroups?: string[];
}

/**
 * <p>An object representing the scaling configuration details for the Auto Scaling
 *             group that is associated with your node group. When creating a node group, you must
 *             specify all or none of the properties. When updating a node group, you can specify any
 *             or none of the properties.</p>
 * @public
 */
export interface NodegroupScalingConfig {
  /**
   * <p>The minimum number of nodes that the managed node group can scale in to.</p>
   * @public
   */
  minSize?: number;

  /**
   * <p>The maximum number of nodes that the managed node group can scale out to. For
   *             information about the maximum number that you can specify, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-quotas.html">Amazon EKS service quotas</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  maxSize?: number;

  /**
   * <p>The current number of nodes that the managed node group should maintain.</p>
   *          <important>
   *             <p>If you use the Kubernetes <a href="https://github.com/kubernetes/autoscaler#kubernetes-autoscaler">Cluster
   *                     Autoscaler</a>, you shouldn't change the <code>desiredSize</code> value
   *                 directly, as this can cause the Cluster Autoscaler to suddenly scale up or scale
   *                 down.</p>
   *          </important>
   *          <p>Whenever this parameter changes, the number of worker nodes in the node group is
   *             updated to the specified size. If this parameter is given a value that is smaller than
   *             the current number of running worker nodes, the necessary number of worker nodes are
   *             terminated to match the given value.
   *
   *             When using CloudFormation, no action occurs if you remove this parameter from your CFN
   *             template.</p>
   *          <p>This parameter can be different from <code>minSize</code> in some cases, such as when
   *             starting with extra hosts for testing. This parameter can also be different when you
   *             want to start with an estimated number of needed hosts, but let the Cluster Autoscaler
   *             reduce the number if there are too many. When the Cluster Autoscaler is used, the
   *                 <code>desiredSize</code> parameter is altered by the Cluster Autoscaler (but can be
   *             out-of-date for short periods of time). the Cluster Autoscaler doesn't scale a managed
   *             node group lower than <code>minSize</code> or higher than <code>maxSize</code>.</p>
   * @public
   */
  desiredSize?: number;
}

/**
 * @public
 * @enum
 */
export const TaintEffect = {
  NO_EXECUTE: "NO_EXECUTE",
  NO_SCHEDULE: "NO_SCHEDULE",
  PREFER_NO_SCHEDULE: "PREFER_NO_SCHEDULE",
} as const;

/**
 * @public
 */
export type TaintEffect = (typeof TaintEffect)[keyof typeof TaintEffect];

/**
 * <p>A property that allows a node to repel a <code>Pod</code>. For more information, see
 *                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on
 *                 managed node groups</a> in the <i>Amazon EKS User Guide</i>.</p>
 * @public
 */
export interface Taint {
  /**
   * <p>The key of the taint.</p>
   * @public
   */
  key?: string;

  /**
   * <p>The value of the taint.</p>
   * @public
   */
  value?: string;

  /**
   * <p>The effect of the taint.</p>
   * @public
   */
  effect?: TaintEffect;
}

/**
 * <p>The node group update configuration.</p>
 * @public
 */
export interface NodegroupUpdateConfig {
  /**
   * <p>The maximum number of nodes unavailable at once during a version update. Nodes are
   *             updated in parallel. This value or <code>maxUnavailablePercentage</code> is required to
   *             have a value.The maximum number is 100.</p>
   * @public
   */
  maxUnavailable?: number;

  /**
   * <p>The maximum percentage of nodes unavailable during a version update. This percentage
   *             of nodes are updated in parallel, up to 100 nodes at once. This value or
   *                 <code>maxUnavailable</code> is required to have a value.</p>
   * @public
   */
  maxUnavailablePercentage?: number;
}

/**
 * @public
 */
export interface CreateNodegroupRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The unique name to give your node group.</p>
   * @public
   */
  nodegroupName: string | undefined;

  /**
   * <p>The scaling configuration details for the Auto Scaling group that is created for your
   *             node group.</p>
   * @public
   */
  scalingConfig?: NodegroupScalingConfig;

  /**
   * <p>The root device disk size (in GiB) for your node group instances. The default disk
   *             size is 20 GiB for Linux and Bottlerocket. The default disk size is 50 GiB for Windows.
   *             If you specify <code>launchTemplate</code>, then don't specify  <code>diskSize</code>, or the node group
   *             deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Customizing managed nodes with launch templates</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  diskSize?: number;

  /**
   * <p>The subnets to use for the Auto Scaling group that is created for your node group.
   *             If you specify <code>launchTemplate</code>, then don't specify  <code>
   *                <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html">SubnetId</a>
   *             </code> in your launch template, or the node group  deployment
   *             will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Customizing managed nodes with launch templates</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  subnets: string[] | undefined;

  /**
   * <p>Specify the instance types for a node group. If you specify a GPU instance type, make
   *             sure to also specify an applicable GPU AMI type with the <code>amiType</code> parameter.
   *             If you specify <code>launchTemplate</code>, then you can specify zero or one instance
   *             type in your launch template <i>or</i> you can specify 0-20 instance types
   *             for <code>instanceTypes</code>. If however, you specify an instance type in your launch
   *             template <i>and</i> specify any <code>instanceTypes</code>, the node group
   *             deployment will fail. If you don't specify an instance type in a launch template or for
   *                 <code>instanceTypes</code>, then <code>t3.medium</code> is used, by default. If you
   *             specify <code>Spot</code> for <code>capacityType</code>, then we recommend specifying
   *             multiple values for <code>instanceTypes</code>. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html#managed-node-group-capacity-types">Managed node group capacity types</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Customizing managed nodes with launch templates</a> in
   *             the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  instanceTypes?: string[];

  /**
   * <p>The AMI type for your node group. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI,
   *                 then don't specify <code>amiType</code>, or the node group  deployment
   *             will fail. If your launch template uses a Windows custom AMI, then add
   *                 <code>eks:kube-proxy-windows</code> to your Windows nodes <code>rolearn</code> in
   *             the <code>aws-auth</code>
   *             <code>ConfigMap</code>. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Customizing managed nodes with launch templates</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  amiType?: AMITypes;

  /**
   * <p>The remote access configuration to use with your node group. For Linux, the protocol
   *             is SSH. For Windows, the protocol is RDP. If you specify <code>launchTemplate</code>, then don't specify
   *                 <code>remoteAccess</code>, or the node group  deployment will fail.
   *             For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Customizing managed nodes with launch templates</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  remoteAccess?: RemoteAccessConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The
   *                 Amazon EKS worker node <code>kubelet</code> daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls
   *             through an IAM instance profile and associated policies. Before you can
   *             launch nodes and register them into a cluster, you must create an IAM
   *             role for those nodes to use when they are launched. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>. If you specify <code>launchTemplate</code>, then don't specify
   *                     <code>
   *                <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html">IamInstanceProfile</a>
   *             </code> in your launch template, or the node group
   *             deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Customizing managed nodes with launch templates</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  nodeRole: string | undefined;

  /**
   * <p>The Kubernetes <code>labels</code> to apply to the nodes in the node group when they are
   *             created.</p>
   * @public
   */
  labels?: Record<string, string>;

  /**
   * <p>The Kubernetes taints to be applied to the nodes in the node group. For more information,
   *             see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on
   *                 managed node groups</a>.</p>
   * @public
   */
  taints?: Taint[];

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>An object representing a node group's launch template specification. When using this
   *             object, don't directly specify <code>instanceTypes</code>, <code>diskSize</code>, or
   *             <code>remoteAccess</code>. Make sure that
   *             the launch template meets the requirements in <code>launchTemplateSpecification</code>. Also refer to
   *             <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Customizing managed nodes with launch templates</a> in
   *             the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  launchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>The node group update configuration.</p>
   * @public
   */
  updateConfig?: NodegroupUpdateConfig;

  /**
   * <p>The capacity type for your node group.</p>
   * @public
   */
  capacityType?: CapacityTypes;

  /**
   * <p>The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the
   *             cluster is used, and this is the only accepted specified value. If you specify <code>launchTemplate</code>,
   *             and your launch template uses a custom AMI, then don't specify  <code>version</code>, or the node group
   *             deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Customizing managed nodes with launch templates</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  version?: string;

  /**
   * <p>The AMI version of the Amazon EKS optimized AMI to use with your node group.
   *             By default, the latest available AMI version for the node group's current Kubernetes version
   *             is used. For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. Amazon EKS managed node groups support the November 2022 and later releases of the
   *             Windows AMIs. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the
   *             <i>Amazon EKS User Guide</i>.</p>
   *          <p>If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify
   *                 <code>releaseVersion</code>, or the node group  deployment will fail.
   *             For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Customizing managed nodes with launch templates</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  releaseVersion?: string;
}

/**
 * @public
 * @enum
 */
export const NodegroupIssueCode = {
  ACCESS_DENIED: "AccessDenied",
  AMI_ID_NOT_FOUND: "AmiIdNotFound",
  ASG_INSTANCE_LAUNCH_FAILURES: "AsgInstanceLaunchFailures",
  AUTO_SCALING_GROUP_INSTANCE_REFRESH_ACTIVE: "AutoScalingGroupInstanceRefreshActive",
  AUTO_SCALING_GROUP_INVALID_CONFIGURATION: "AutoScalingGroupInvalidConfiguration",
  AUTO_SCALING_GROUP_NOT_FOUND: "AutoScalingGroupNotFound",
  AUTO_SCALING_GROUP_OPT_IN_REQUIRED: "AutoScalingGroupOptInRequired",
  AUTO_SCALING_GROUP_RATE_LIMIT_EXCEEDED: "AutoScalingGroupRateLimitExceeded",
  CLUSTER_UNREACHABLE: "ClusterUnreachable",
  EC2_INSTANCE_TYPE_DOES_NOT_EXIST: "Ec2InstanceTypeDoesNotExist",
  EC2_LAUNCH_TEMPLATE_DELETION_FAILURE: "Ec2LaunchTemplateDeletionFailure",
  EC2_LAUNCH_TEMPLATE_INVALID_CONFIGURATION: "Ec2LaunchTemplateInvalidConfiguration",
  EC2_LAUNCH_TEMPLATE_MAX_LIMIT_EXCEEDED: "Ec2LaunchTemplateMaxLimitExceeded",
  EC2_LAUNCH_TEMPLATE_NOT_FOUND: "Ec2LaunchTemplateNotFound",
  EC2_LAUNCH_TEMPLATE_VERSION_MAX_LIMIT_EXCEEDED: "Ec2LaunchTemplateVersionMaxLimitExceeded",
  EC2_LAUNCH_TEMPLATE_VERSION_MISMATCH: "Ec2LaunchTemplateVersionMismatch",
  EC2_SECURITY_GROUP_DELETION_FAILURE: "Ec2SecurityGroupDeletionFailure",
  EC2_SECURITY_GROUP_NOT_FOUND: "Ec2SecurityGroupNotFound",
  EC2_SUBNET_INVALID_CONFIGURATION: "Ec2SubnetInvalidConfiguration",
  EC2_SUBNET_LIST_TOO_LONG: "Ec2SubnetListTooLong",
  EC2_SUBNET_MISSING_IPV6_ASSIGNMENT: "Ec2SubnetMissingIpv6Assignment",
  EC2_SUBNET_NOT_FOUND: "Ec2SubnetNotFound",
  IAM_INSTANCE_PROFILE_NOT_FOUND: "IamInstanceProfileNotFound",
  IAM_LIMIT_EXCEEDED: "IamLimitExceeded",
  IAM_NODE_ROLE_NOT_FOUND: "IamNodeRoleNotFound",
  IAM_THROTTLING: "IamThrottling",
  INSTANCE_LIMIT_EXCEEDED: "InstanceLimitExceeded",
  INSUFFICIENT_FREE_ADDRESSES: "InsufficientFreeAddresses",
  INTERNAL_FAILURE: "InternalFailure",
  KUBERNETES_LABEL_INVALID: "KubernetesLabelInvalid",
  LIMIT_EXCEEDED: "LimitExceeded",
  NODE_CREATION_FAILURE: "NodeCreationFailure",
  NODE_TERMINATION_FAILURE: "NodeTerminationFailure",
  POD_EVICTION_FAILURE: "PodEvictionFailure",
  SOURCE_EC2_LAUNCH_TEMPLATE_NOT_FOUND: "SourceEc2LaunchTemplateNotFound",
  UNKNOWN: "Unknown",
} as const;

/**
 * @public
 */
export type NodegroupIssueCode = (typeof NodegroupIssueCode)[keyof typeof NodegroupIssueCode];

/**
 * <p>An object representing an issue with an Amazon EKS resource.</p>
 * @public
 */
export interface Issue {
  /**
   * <p>A brief description of the error.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>AccessDenied</b>: Amazon EKS or one or
   *                     more of your managed nodes is failing to authenticate or authorize with your
   *                     Kubernetes cluster API server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AsgInstanceLaunchFailures</b>: Your Auto Scaling group is experiencing failures while attempting to launch
   *                     instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>AutoScalingGroupNotFound</b>: We couldn't find
   *                     the Auto Scaling group associated with the managed node group. You may be
   *                     able to recreate an Auto Scaling group with the same settings to
   *                     recover.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ClusterUnreachable</b>: Amazon EKS or one
   *                     or more of your managed nodes is unable to to communicate with your Kubernetes
   *                     cluster API server. This can happen if there are network disruptions or if API
   *                     servers are timing out processing requests. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Ec2InstanceTypeDoesNotExist</b>: One or more of
   *                     the supplied Amazon EC2 instance types do not exist. Amazon EKS checked for the
   *                     instance types that you provided in this Amazon Web Services Region, and one or more aren't
   *                     available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Ec2LaunchTemplateNotFound</b>: We couldn't find
   *                     the Amazon EC2 launch template for your managed node group. You may be
   *                     able to recreate a launch template with the same settings to recover.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Ec2LaunchTemplateVersionMismatch</b>: The Amazon EC2 launch template version for your managed node group does not
   *                     match the version that Amazon EKS created. You may be able to revert to
   *                     the version that Amazon EKS created to recover.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Ec2SecurityGroupDeletionFailure</b>: We could not
   *                     delete the remote access security group for your managed node group. Remove any
   *                     dependencies from the security group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Ec2SecurityGroupNotFound</b>: We couldn't find
   *                     the cluster security group for the cluster. You must recreate your
   *                     cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Ec2SubnetInvalidConfiguration</b>: One or more
   *                         Amazon EC2 subnets specified for a node group do not automatically
   *                     assign public IP addresses to instances launched into it. If you want your
   *                     instances to be assigned a public IP address, then you need to enable the
   *                         <code>auto-assign public IP address</code> setting for the subnet. See
   *                         <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html#subnet-public-ip">Modifying
   *                         the public <code>IPv4</code> addressing attribute for your subnet</a> in
   *                     the <i>Amazon VPC User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IamInstanceProfileNotFound</b>: We couldn't find
   *                     the IAM instance profile for your managed node group. You may be
   *                     able to recreate an instance profile with the same settings to recover.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>IamNodeRoleNotFound</b>: We couldn't find the
   *                         IAM role for your managed node group. You may be able to
   *                     recreate an IAM role with the same settings to recover.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>InstanceLimitExceeded</b>: Your Amazon Web Services account is unable to launch any more instances of the specified instance
   *                     type. You may be able to request an Amazon EC2 instance limit increase
   *                     to recover.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>InsufficientFreeAddresses</b>: One or more of the
   *                     subnets associated with your managed node group does not have enough available
   *                     IP addresses for new nodes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>InternalFailure</b>: These errors are usually
   *                     caused by an Amazon EKS server-side issue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>NodeCreationFailure</b>: Your launched instances
   *                     are unable to register with your Amazon EKS cluster. Common causes of
   *                     this failure are insufficient <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">node IAM
   *                         role</a> permissions or lack of outbound internet access for the nodes.
   *                 </p>
   *             </li>
   *          </ul>
   * @public
   */
  code?: NodegroupIssueCode;

  /**
   * <p>The error message associated with the issue.</p>
   * @public
   */
  message?: string;

  /**
   * <p>The Amazon Web Services resources that are afflicted by this issue.</p>
   * @public
   */
  resourceIds?: string[];
}

/**
 * <p>An object representing the health status of the node group.</p>
 * @public
 */
export interface NodegroupHealth {
  /**
   * <p>Any issues that are associated with the node group. </p>
   * @public
   */
  issues?: Issue[];
}

/**
 * <p>An object representing the resources associated with the node group, such as Auto
 *             Scaling groups and security groups for remote access.</p>
 * @public
 */
export interface NodegroupResources {
  /**
   * <p>The Auto Scaling groups associated with the node group.</p>
   * @public
   */
  autoScalingGroups?: AutoScalingGroup[];

  /**
   * <p>The remote access security group associated with the node group. This security group
   *             controls SSH access to the nodes.</p>
   * @public
   */
  remoteAccessSecurityGroup?: string;
}

/**
 * @public
 * @enum
 */
export const NodegroupStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DEGRADED: "DEGRADED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type NodegroupStatus = (typeof NodegroupStatus)[keyof typeof NodegroupStatus];

/**
 * <p>An object representing an Amazon EKS managed node group.</p>
 * @public
 */
export interface Nodegroup {
  /**
   * <p>The name associated with an Amazon EKS managed node group.</p>
   * @public
   */
  nodegroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) associated with the managed node group.</p>
   * @public
   */
  nodegroupArn?: string;

  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The Kubernetes version of the managed node group.</p>
   * @public
   */
  version?: string;

  /**
   * <p>If the node group was deployed using a launch template with a custom AMI, then this is
   *             the AMI ID that was specified in the launch template. For node groups that weren't
   *             deployed using a launch template, this is the version of the Amazon EKS
   *             optimized AMI that the node group was deployed with.</p>
   * @public
   */
  releaseVersion?: string;

  /**
   * <p>The Unix epoch timestamp at object creation.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Unix epoch timestamp for the last modification to the object.</p>
   * @public
   */
  modifiedAt?: Date;

  /**
   * <p>The current status of the managed node group.</p>
   * @public
   */
  status?: NodegroupStatus;

  /**
   * <p>The capacity type of your managed node group.</p>
   * @public
   */
  capacityType?: CapacityTypes;

  /**
   * <p>The scaling configuration details for the Auto Scaling group that is associated with
   *             your node group.</p>
   * @public
   */
  scalingConfig?: NodegroupScalingConfig;

  /**
   * <p>If the node group wasn't deployed with a launch template, then this is the instance
   *             type that is associated with the node group. If the node group was deployed with a
   *             launch template, then this is <code>null</code>.</p>
   * @public
   */
  instanceTypes?: string[];

  /**
   * <p>The subnets that were specified for the Auto Scaling group that is associated with
   *             your node group.</p>
   * @public
   */
  subnets?: string[];

  /**
   * <p>If the node group wasn't deployed with a launch template, then this is the remote
   *             access configuration that is associated with the node group. If the node group was
   *             deployed with a launch template, then this is <code>null</code>.</p>
   * @public
   */
  remoteAccess?: RemoteAccessConfig;

  /**
   * <p>If the node group was deployed using a launch template with a custom AMI, then this is
   *                 <code>CUSTOM</code>. For node groups that weren't deployed using a launch template,
   *             this is the AMI type that was specified in the node group configuration.</p>
   * @public
   */
  amiType?: AMITypes;

  /**
   * <p>The IAM role associated with your node group. The Amazon EKS
   *             node <code>kubelet</code> daemon makes calls to Amazon Web Services APIs on your behalf.
   *             Nodes receive permissions for these API calls through an IAM instance
   *             profile and associated policies.</p>
   * @public
   */
  nodeRole?: string;

  /**
   * <p>The Kubernetes <code>labels</code> applied to the nodes in the node group.</p>
   *          <note>
   *             <p>Only <code>labels</code> that are applied with the Amazon EKS API are
   *                 shown here. There may be other Kubernetes <code>labels</code> applied to the nodes in
   *                 this group.</p>
   *          </note>
   * @public
   */
  labels?: Record<string, string>;

  /**
   * <p>The Kubernetes taints to be applied to the nodes in the node group when they are created.
   *             Effect is one of <code>No_Schedule</code>, <code>Prefer_No_Schedule</code>, or
   *                 <code>No_Execute</code>. Kubernetes taints can be used together with tolerations to
   *             control how workloads are scheduled to your nodes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.</p>
   * @public
   */
  taints?: Taint[];

  /**
   * <p>The resources associated with the node group, such as Auto Scaling groups and security
   *             groups for remote access.</p>
   * @public
   */
  resources?: NodegroupResources;

  /**
   * <p>If the node group wasn't deployed with a launch template, then this is the disk size
   *             in the node group configuration. If the node group was deployed with a launch template,
   *             then this is <code>null</code>.</p>
   * @public
   */
  diskSize?: number;

  /**
   * <p>The health status of the node group. If there are issues with your node group's
   *             health, they are listed here.</p>
   * @public
   */
  health?: NodegroupHealth;

  /**
   * <p>The node group update configuration.</p>
   * @public
   */
  updateConfig?: NodegroupUpdateConfig;

  /**
   * <p>If a launch template was used to create the node group, then this is the launch
   *             template that was used.</p>
   * @public
   */
  launchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateNodegroupResponse {
  /**
   * <p>The full description of your new node group.</p>
   * @public
   */
  nodegroup?: Nodegroup;
}

/**
 * @public
 */
export interface CreatePodIdentityAssociationRequest {
  /**
   * <p>The name of the cluster to create the association in.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the Kubernetes namespace inside the cluster to create the association in. The
   *             service account and the pods that use the service account must be in this
   *             namespace.</p>
   * @public
   */
  namespace: string | undefined;

  /**
   * <p>The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.</p>
   * @public
   */
  serviceAccount: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the service account. The EKS Pod Identity
   *             agent manages credentials to assume this role for applications in the containers in the
   *             pods that use this service account.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource – 50</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length – 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length – 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that Amazon EC2 instance profiles provide credentials to Amazon EC2 instances.</p>
 * @public
 */
export interface PodIdentityAssociation {
  /**
   * <p>The name of the cluster that the association is in.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The name of the Kubernetes namespace inside the cluster to create the association in. The
   *             service account and the pods that use the service account must be in this
   *             namespace.</p>
   * @public
   */
  namespace?: string;

  /**
   * <p>The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.</p>
   * @public
   */
  serviceAccount?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the service account. The EKS Pod Identity
   *             agent manages credentials to assume this role for applications in the containers in the
   *             pods that use this service account.</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  associationArn?: string;

  /**
   * <p>The ID of the association.</p>
   * @public
   */
  associationId?: string;

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource – 50</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only
   *                     one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length – 128 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length – 256 Unicode characters in UTF-8</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources,
   *                     remember that other services may have restrictions on allowed characters.
   *                     Generally allowed characters are: letters, numbers, and spaces representable in
   *                     UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case-sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase
   *                     combination of such as a prefix for either keys or values as it is reserved for
   *                     Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with
   *                     this prefix do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The timestamp that the association was created at.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The most recent timestamp that the association was modified at</p>
   * @public
   */
  modifiedAt?: Date;

  /**
   * <p>If defined, the Pod Identity Association is owned by an Amazon EKS Addon.</p>
   * @public
   */
  ownerArn?: string;
}

/**
 * @public
 */
export interface CreatePodIdentityAssociationResponse {
  /**
   * <p>The full description of your new association.</p>
   *          <p>The description includes an ID for the association. Use the ID of the association in further
   *             actions to manage the association.</p>
   * @public
   */
  association?: PodIdentityAssociation;
}

/**
 * @public
 */
export interface DeleteAccessEntryRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The ARN of the IAM principal for the <code>AccessEntry</code>.</p>
   * @public
   */
  principalArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessEntryResponse {}

/**
 * @public
 */
export interface DeleteAddonRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html">
   *                <code>ListAddons</code>
   *             </a>.</p>
   * @public
   */
  addonName: string | undefined;

  /**
   * <p>Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on. If an IAM
   *             account is associated with the add-on, it isn't removed.</p>
   * @public
   */
  preserve?: boolean;
}

/**
 * @public
 */
export interface DeleteAddonResponse {
  /**
   * <p>An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in
   *             the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  addon?: Addon;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * <p>The name of the cluster to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * <p>The full description of the cluster to delete.</p>
   * @public
   */
  cluster?: Cluster;
}

/**
 * @public
 */
export interface DeleteEksAnywhereSubscriptionRequest {
  /**
   * <p>The ID of the subscription.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteEksAnywhereSubscriptionResponse {
  /**
   * <p>The full description of the subscription to be deleted.</p>
   * @public
   */
  subscription?: EksAnywhereSubscription;
}

/**
 * @public
 */
export interface DeleteFargateProfileRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the Fargate profile to delete.</p>
   * @public
   */
  fargateProfileName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFargateProfileResponse {
  /**
   * <p>The deleted Fargate profile.</p>
   * @public
   */
  fargateProfile?: FargateProfile;
}

/**
 * @public
 */
export interface DeleteNodegroupRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the node group to delete.</p>
   * @public
   */
  nodegroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteNodegroupResponse {
  /**
   * <p>The full description of your deleted node group.</p>
   * @public
   */
  nodegroup?: Nodegroup;
}

/**
 * @public
 */
export interface DeletePodIdentityAssociationRequest {
  /**
   * <p>The cluster name that</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The ID of the association to be deleted.</p>
   * @public
   */
  associationId: string | undefined;
}

/**
 * @public
 */
export interface DeletePodIdentityAssociationResponse {
  /**
   * <p>The full description of the EKS Pod Identity association that was deleted.</p>
   * @public
   */
  association?: PodIdentityAssociation;
}

/**
 * @public
 */
export interface DeregisterClusterRequest {
  /**
   * <p>The name of the connected cluster to deregister.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeregisterClusterResponse {
  /**
   * <p>An object representing an Amazon EKS cluster.</p>
   * @public
   */
  cluster?: Cluster;
}

/**
 * @public
 */
export interface DescribeAccessEntryRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The ARN of the IAM principal for the <code>AccessEntry</code>.</p>
   * @public
   */
  principalArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccessEntryResponse {
  /**
   * <p>Information about the access entry.</p>
   * @public
   */
  accessEntry?: AccessEntry;
}

/**
 * @public
 */
export interface DescribeAddonRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html">
   *                <code>ListAddons</code>
   *             </a>.</p>
   * @public
   */
  addonName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAddonResponse {
  /**
   * <p>An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in
   *             the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  addon?: Addon;
}

/**
 * @public
 */
export interface DescribeAddonConfigurationRequest {
  /**
   * <p>The name of the add-on. The name must match one of the names returned by
   *                 <code>DescribeAddonVersions</code>.</p>
   * @public
   */
  addonName: string | undefined;

  /**
   * <p>The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html">
   *                <code>DescribeAddonVersions</code>
   *             </a>.</p>
   * @public
   */
  addonVersion: string | undefined;
}

/**
 * @public
 */
export interface DescribeAddonConfigurationResponse {
  /**
   * <p>The name of the add-on.</p>
   * @public
   */
  addonName?: string;

  /**
   * <p>The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html">
   *                <code>DescribeAddonVersions</code>
   *             </a>.</p>
   * @public
   */
  addonVersion?: string;

  /**
   * <p>A JSON schema that's used to validate the configuration values you provide when an
   *             add-on is created or updated.</p>
   * @public
   */
  configurationSchema?: string;

  /**
   * <p>The Kubernetes service account name used by the addon, and any suggested IAM policies. Use this information to create an IAM Role for the Addon.</p>
   * @public
   */
  podIdentityConfiguration?: AddonPodIdentityConfiguration[];
}

/**
 * @public
 */
export interface DescribeAddonVersionsRequest {
  /**
   * <p>The Kubernetes versions that you can use the add-on with.</p>
   * @public
   */
  kubernetesVersion?: string;

  /**
   * <p>The maximum number of results, returned in paginated output. You receive
   *                 <code>maxResults</code> in a single page, along with a <code>nextToken</code>
   *             response element. You can see the remaining results of the initial request by sending
   *             another request with the returned <code>nextToken</code> value. This value can be
   *             between 1 and 100. If you don't use this parameter,
   *             100 results and a <code>nextToken</code> value, if applicable, are
   *             returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html">
   *                <code>ListAddons</code>
   *             </a>.</p>
   * @public
   */
  addonName?: string;

  /**
   * <p>The type of the add-on. For valid <code>types</code>, don't specify a value for this
   *             property.</p>
   * @public
   */
  types?: string[];

  /**
   * <p>The publisher of the add-on. For valid <code>publishers</code>, don't specify a value
   *             for this property.</p>
   * @public
   */
  publishers?: string[];

  /**
   * <p>The owner of the add-on. For valid <code>owners</code>, don't specify a value for this
   *             property.</p>
   * @public
   */
  owners?: string[];
}

/**
 * @public
 */
export interface DescribeAddonVersionsResponse {
  /**
   * <p>The list of available versions with Kubernetes version compatibility and other
   *             properties.</p>
   * @public
   */
  addons?: AddonInfo[];

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>DescribeAddonVersions</code> request. When the results of a
   *                 <code>DescribeAddonVersions</code> request exceed <code>maxResults</code>, you can
   *             use this value to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface DescribeClusterRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterResponse {
  /**
   * <p>The full description of your specified cluster.</p>
   * @public
   */
  cluster?: Cluster;
}

/**
 * @public
 */
export interface DescribeEksAnywhereSubscriptionRequest {
  /**
   * <p>The ID of the subscription.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DescribeEksAnywhereSubscriptionResponse {
  /**
   * <p>The full description of the subscription.</p>
   * @public
   */
  subscription?: EksAnywhereSubscription;
}

/**
 * @public
 */
export interface DescribeFargateProfileRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the Fargate profile to describe.</p>
   * @public
   */
  fargateProfileName: string | undefined;
}

/**
 * @public
 */
export interface DescribeFargateProfileResponse {
  /**
   * <p>The full description of your Fargate profile.</p>
   * @public
   */
  fargateProfile?: FargateProfile;
}

/**
 * <p>An object representing an identity provider configuration.</p>
 * @public
 */
export interface IdentityProviderConfig {
  /**
   * <p>The type of the identity provider configuration. The only type available is
   *                 <code>oidc</code>.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The name of the identity provider configuration.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityProviderConfigRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>An object representing an identity provider configuration.</p>
   * @public
   */
  identityProviderConfig: IdentityProviderConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfigStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type ConfigStatus = (typeof ConfigStatus)[keyof typeof ConfigStatus];

/**
 * <p>An object representing the configuration for an OpenID Connect (OIDC) identity provider.
 *         </p>
 * @public
 */
export interface OidcIdentityProviderConfig {
  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  identityProviderConfigName?: string;

  /**
   * <p>The ARN of the configuration.</p>
   * @public
   */
  identityProviderConfigArn?: string;

  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The URL of the OIDC identity provider that allows the API server to discover public
   *             signing keys for verifying tokens.</p>
   * @public
   */
  issuerUrl?: string;

  /**
   * <p>This is also known as <i>audience</i>. The ID of the client application
   *             that makes authentication requests to the OIDC identity provider.</p>
   * @public
   */
  clientId?: string;

  /**
   * <p>The JSON Web token (JWT) claim that is used as the username.</p>
   * @public
   */
  usernameClaim?: string;

  /**
   * <p>The prefix that is prepended to username claims to prevent clashes with existing
   *             names. The prefix can't contain <code>system:</code>
   *          </p>
   * @public
   */
  usernamePrefix?: string;

  /**
   * <p>The JSON web token (JWT) claim that the provider uses to return your groups.</p>
   * @public
   */
  groupsClaim?: string;

  /**
   * <p>The prefix that is prepended to group claims to prevent clashes with existing names
   *             (such as <code>system:</code> groups). For example, the value<code> oidc:</code> creates
   *             group names like <code>oidc:engineering</code> and <code>oidc:infra</code>. The prefix
   *             can't contain <code>system:</code>
   *          </p>
   * @public
   */
  groupsPrefix?: string;

  /**
   * <p>The key-value pairs that describe required claims in the identity token. If set, each
   *             claim is verified to be present in the token with a matching value.</p>
   * @public
   */
  requiredClaims?: Record<string, string>;

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The status of the OIDC identity provider.</p>
   * @public
   */
  status?: ConfigStatus;
}

/**
 * <p>The full description of your identity configuration.</p>
 * @public
 */
export interface IdentityProviderConfigResponse {
  /**
   * <p>An object representing an OpenID Connect (OIDC) identity provider configuration.</p>
   * @public
   */
  oidc?: OidcIdentityProviderConfig;
}

/**
 * @public
 */
export interface DescribeIdentityProviderConfigResponse {
  /**
   * <p>The object that represents an OpenID Connect (OIDC) identity provider
   *             configuration.</p>
   * @public
   */
  identityProviderConfig?: IdentityProviderConfigResponse;
}

/**
 * @public
 */
export interface DescribeInsightRequest {
  /**
   * <p>The name of the cluster to describe the insight for.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The identity of the insight to describe.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Category = {
  UPGRADE_READINESS: "UPGRADE_READINESS",
} as const;

/**
 * @public
 */
export type Category = (typeof Category)[keyof typeof Category];

/**
 * <p>Details about clients using the deprecated resources.</p>
 * @public
 */
export interface ClientStat {
  /**
   * <p>The user agent of the Kubernetes client using the deprecated resource.</p>
   * @public
   */
  userAgent?: string;

  /**
   * <p>The number of requests from the Kubernetes client seen over the last 30 days.</p>
   * @public
   */
  numberOfRequestsLast30Days?: number;

  /**
   * <p>The timestamp of the last request seen from the Kubernetes client.</p>
   * @public
   */
  lastRequestTime?: Date;
}

/**
 * <p>The summary information about deprecated resource usage for an insight check in the
 *                 <code>UPGRADE_READINESS</code> category.</p>
 * @public
 */
export interface DeprecationDetail {
  /**
   * <p>The deprecated version of the resource.</p>
   * @public
   */
  usage?: string;

  /**
   * <p>The newer version of the resource to migrate to if applicable. </p>
   * @public
   */
  replacedWith?: string;

  /**
   * <p>The version of the software where the deprecated resource version will stop being
   *             served.</p>
   * @public
   */
  stopServingVersion?: string;

  /**
   * <p>The version of the software where the newer resource version became available to
   *             migrate to if applicable.</p>
   * @public
   */
  startServingReplacementVersion?: string;

  /**
   * <p>Details about Kubernetes clients using the deprecated resources.</p>
   * @public
   */
  clientStats?: ClientStat[];
}

/**
 * <p>Summary information that relates to the category of the insight. Currently only
 *             returned with certain insights having category <code>UPGRADE_READINESS</code>.</p>
 * @public
 */
export interface InsightCategorySpecificSummary {
  /**
   * <p>The summary information about deprecated resource usage for an insight check in the
   *                 <code>UPGRADE_READINESS</code> category.</p>
   * @public
   */
  deprecationDetails?: DeprecationDetail[];
}

/**
 * @public
 * @enum
 */
export const InsightStatusValue = {
  ERROR: "ERROR",
  PASSING: "PASSING",
  UNKNOWN: "UNKNOWN",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type InsightStatusValue = (typeof InsightStatusValue)[keyof typeof InsightStatusValue];

/**
 * <p>The status of the insight.</p>
 * @public
 */
export interface InsightStatus {
  /**
   * <p>The status of the resource.</p>
   * @public
   */
  status?: InsightStatusValue;

  /**
   * <p>Explanation on the reasoning for the status of the resource. </p>
   * @public
   */
  reason?: string;
}

/**
 * <p>Returns information about the resource being evaluated.</p>
 * @public
 */
export interface InsightResourceDetail {
  /**
   * <p>An object containing more detail on the status of the insight resource.</p>
   * @public
   */
  insightStatus?: InsightStatus;

  /**
   * <p>The Kubernetes resource URI if applicable.</p>
   * @public
   */
  kubernetesResourceUri?: string;

  /**
   * <p>The Amazon Resource Name (ARN) if applicable.</p>
   * @public
   */
  arn?: string;
}

/**
 * <p>A check that provides recommendations to remedy potential upgrade-impacting
 *             issues.</p>
 * @public
 */
export interface Insight {
  /**
   * <p>The ID of the insight.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the insight.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The category of the insight.</p>
   * @public
   */
  category?: Category;

  /**
   * <p>The Kubernetes minor version associated with an insight if applicable.</p>
   * @public
   */
  kubernetesVersion?: string;

  /**
   * <p>The time Amazon EKS last successfully completed a refresh of this insight check on the
   *             cluster.</p>
   * @public
   */
  lastRefreshTime?: Date;

  /**
   * <p>The time the status of the insight last changed.</p>
   * @public
   */
  lastTransitionTime?: Date;

  /**
   * <p>The description of the insight which includes alert criteria, remediation
   *             recommendation, and additional resources (contains Markdown).</p>
   * @public
   */
  description?: string;

  /**
   * <p>An object containing more detail on the status of the insight resource.</p>
   * @public
   */
  insightStatus?: InsightStatus;

  /**
   * <p>A summary of how to remediate the finding of this insight if applicable. </p>
   * @public
   */
  recommendation?: string;

  /**
   * <p>Links to sources that provide additional context on the insight.</p>
   * @public
   */
  additionalInfo?: Record<string, string>;

  /**
   * <p>The details about each resource listed in the insight check result.</p>
   * @public
   */
  resources?: InsightResourceDetail[];

  /**
   * <p>Summary information that relates to the category of the insight. Currently only
   *             returned with certain insights having category <code>UPGRADE_READINESS</code>.</p>
   * @public
   */
  categorySpecificSummary?: InsightCategorySpecificSummary;
}

/**
 * @public
 */
export interface DescribeInsightResponse {
  /**
   * <p>The full description of the insight.</p>
   * @public
   */
  insight?: Insight;
}

/**
 * @public
 */
export interface DescribeNodegroupRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the node group to describe.</p>
   * @public
   */
  nodegroupName: string | undefined;
}

/**
 * @public
 */
export interface DescribeNodegroupResponse {
  /**
   * <p>The full description of your node group.</p>
   * @public
   */
  nodegroup?: Nodegroup;
}

/**
 * @public
 */
export interface DescribePodIdentityAssociationRequest {
  /**
   * <p>The name of the cluster that the association is in.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The ID of the association that you want the description of.</p>
   * @public
   */
  associationId: string | undefined;
}

/**
 * @public
 */
export interface DescribePodIdentityAssociationResponse {
  /**
   * <p>The full description of the EKS Pod Identity association.</p>
   * @public
   */
  association?: PodIdentityAssociation;
}

/**
 * <p>Describes an update request.</p>
 * @public
 */
export interface DescribeUpdateRequest {
  /**
   * <p>The name of the Amazon EKS cluster associated with the update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the update to describe.</p>
   * @public
   */
  updateId: string | undefined;

  /**
   * <p>The name of the Amazon EKS node group associated with the update. This
   *             parameter is required if the update is a node group update.</p>
   * @public
   */
  nodegroupName?: string;

  /**
   * <p>The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html">
   *                <code>ListAddons</code>
   *             </a>. This parameter is required if the update is an add-on update.</p>
   * @public
   */
  addonName?: string;
}

/**
 * @public
 */
export interface DescribeUpdateResponse {
  /**
   * <p>The full description of the specified update.</p>
   * @public
   */
  update?: Update;
}

/**
 * @public
 */
export interface DisassociateAccessPolicyRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The ARN of the IAM principal for the <code>AccessEntry</code>.</p>
   * @public
   */
  principalArn: string | undefined;

  /**
   * <p>The ARN of the policy to disassociate from the access entry. For a list of
   *             associated policies ARNs, use <code>ListAssociatedAccessPolicies</code>.</p>
   * @public
   */
  policyArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAccessPolicyResponse {}

/**
 * @public
 */
export interface DisassociateIdentityProviderConfigRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>An object representing an identity provider configuration.</p>
   * @public
   */
  identityProviderConfig: IdentityProviderConfig | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;
}

/**
 * @public
 */
export interface DisassociateIdentityProviderConfigResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   * @public
   */
  update?: Update;
}

/**
 * @public
 */
export interface ListAccessEntriesRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The ARN of an <code>AccessPolicy</code>. When you specify an access policy ARN,
   *             only the access entries associated to that access policy are returned. For a list of
   *             available policy ARNs, use <code>ListAccessPolicies</code>.</p>
   * @public
   */
  associatedPolicyArn?: string;

  /**
   * <p>The maximum number of results, returned in paginated output. You receive
   *                 <code>maxResults</code> in a single page, along with a <code>nextToken</code>
   *             response element. You can see the remaining results of the initial request by sending
   *             another request with the returned <code>nextToken</code> value. This value can be
   *             between 1 and 100. If you don't use this parameter,
   *             100 results and a <code>nextToken</code> value, if applicable, are
   *             returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAccessEntriesResponse {
  /**
   * <p>The list of access entries that exist for the cluster.</p>
   * @public
   */
  accessEntries?: string[];

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAccessPoliciesRequest {
  /**
   * <p>The maximum number of results, returned in paginated output. You receive
   *                 <code>maxResults</code> in a single page, along with a <code>nextToken</code>
   *             response element. You can see the remaining results of the initial request by sending
   *             another request with the returned <code>nextToken</code> value. This value can be
   *             between 1 and 100. If you don't use this parameter,
   *             100 results and a <code>nextToken</code> value, if applicable, are
   *             returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAccessPoliciesResponse {
  /**
   * <p>The list of available access policies. You can't view the contents of an access policy
   *             using the API. To view the contents, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/access-policies.html#access-policy-permissions">Access
   *                 policy permissions</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  accessPolicies?: AccessPolicy[];

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAddonsRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The maximum number of results, returned in paginated output. You receive
   *                 <code>maxResults</code> in a single page, along with a <code>nextToken</code>
   *             response element. You can see the remaining results of the initial request by sending
   *             another request with the returned <code>nextToken</code> value. This value can be
   *             between 1 and 100. If you don't use this parameter,
   *             100 results and a <code>nextToken</code> value, if applicable, are
   *             returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAddonsResponse {
  /**
   * <p>A list of installed add-ons.</p>
   * @public
   */
  addons?: string[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListAddons</code>
   *             request. When the results of a <code>ListAddons</code> request exceed
   *                 <code>maxResults</code>, you can use this value to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAssociatedAccessPoliciesRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The ARN of the IAM principal for the <code>AccessEntry</code>.</p>
   * @public
   */
  principalArn: string | undefined;

  /**
   * <p>The maximum number of results, returned in paginated output. You receive
   *                 <code>maxResults</code> in a single page, along with a <code>nextToken</code>
   *             response element. You can see the remaining results of the initial request by sending
   *             another request with the returned <code>nextToken</code> value. This value can be
   *             between 1 and 100. If you don't use this parameter,
   *             100 results and a <code>nextToken</code> value, if applicable, are
   *             returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAssociatedAccessPoliciesResponse {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The ARN of the IAM principal for the <code>AccessEntry</code>.</p>
   * @public
   */
  principalArn?: string;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The list of access policies associated with the access entry.</p>
   * @public
   */
  associatedAccessPolicies?: AssociatedAccessPolicy[];
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * <p>The maximum number of results, returned in paginated output. You receive
   *                 <code>maxResults</code> in a single page, along with a <code>nextToken</code>
   *             response element. You can see the remaining results of the initial request by sending
   *             another request with the returned <code>nextToken</code> value. This value can be
   *             between 1 and 100. If you don't use this parameter,
   *             100 results and a <code>nextToken</code> value, if applicable, are
   *             returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;

  /**
   * <p>Indicates whether external clusters are included in the returned list. Use
   *                 '<code>all</code>' to return <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html">https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html</a>connected clusters, or blank to
   *             return only Amazon EKS clusters. '<code>all</code>' must be in lowercase
   *             otherwise an error occurs.</p>
   * @public
   */
  include?: string[];
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * <p>A list of all of the clusters for your account in the specified Amazon Web Services Region.</p>
   * @public
   */
  clusters?: string[];

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const EksAnywhereSubscriptionStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  EXPIRED: "EXPIRED",
  EXPIRING: "EXPIRING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type EksAnywhereSubscriptionStatus =
  (typeof EksAnywhereSubscriptionStatus)[keyof typeof EksAnywhereSubscriptionStatus];

/**
 * @public
 */
export interface ListEksAnywhereSubscriptionsRequest {
  /**
   * <p>The maximum number of cluster results returned by ListEksAnywhereSubscriptions in
   *             paginated output. When you use this parameter, ListEksAnywhereSubscriptions returns only
   *             maxResults results in a single page along with a nextToken response element. You can see
   *             the remaining results of the initial request by sending another
   *             ListEksAnywhereSubscriptions request with the returned nextToken value. This value can
   *             be between 1 and 100. If you don't use this parameter, ListEksAnywhereSubscriptions
   *             returns up to 10 results and a nextToken value if applicable.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>ListEksAnywhereSubscriptions</code> request where <code>maxResults</code> was
   *             used and the results exceeded the value of that parameter. Pagination continues from the
   *             end of the previous results that returned the <code>nextToken</code> value.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An array of subscription statuses to filter on.</p>
   * @public
   */
  includeStatus?: EksAnywhereSubscriptionStatus[];
}

/**
 * @public
 */
export interface ListEksAnywhereSubscriptionsResponse {
  /**
   * <p>A list of all subscription objects in the region, filtered by includeStatus and
   *             paginated by nextToken and maxResults.</p>
   * @public
   */
  subscriptions?: EksAnywhereSubscription[];

  /**
   * <p>The nextToken value to include in a future ListEksAnywhereSubscriptions request. When
   *             the results of a ListEksAnywhereSubscriptions request exceed maxResults, you can use
   *             this value to retrieve the next page of results. This value is null when there are no
   *             more results to return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListFargateProfilesRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The maximum number of results, returned in paginated output. You receive
   *                 <code>maxResults</code> in a single page, along with a <code>nextToken</code>
   *             response element. You can see the remaining results of the initial request by sending
   *             another request with the returned <code>nextToken</code> value. This value can be
   *             between 1 and 100. If you don't use this parameter,
   *             100 results and a <code>nextToken</code> value, if applicable, are
   *             returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListFargateProfilesResponse {
  /**
   * <p>A list of all of the Fargate profiles associated with the specified
   *             cluster.</p>
   * @public
   */
  fargateProfileNames?: string[];

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListIdentityProviderConfigsRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The maximum number of results, returned in paginated output. You receive
   *                 <code>maxResults</code> in a single page, along with a <code>nextToken</code>
   *             response element. You can see the remaining results of the initial request by sending
   *             another request with the returned <code>nextToken</code> value. This value can be
   *             between 1 and 100. If you don't use this parameter,
   *             100 results and a <code>nextToken</code> value, if applicable, are
   *             returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListIdentityProviderConfigsResponse {
  /**
   * <p>The identity provider configurations for the cluster.</p>
   * @public
   */
  identityProviderConfigs?: IdentityProviderConfig[];

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>ListIdentityProviderConfigsResponse</code> request. When the results of a
   *                 <code>ListIdentityProviderConfigsResponse</code> request exceed
   *                 <code>maxResults</code>, you can use this value to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The criteria to use for the insights.</p>
 * @public
 */
export interface InsightsFilter {
  /**
   * <p>The categories to use to filter insights.</p>
   * @public
   */
  categories?: Category[];

  /**
   * <p>The Kubernetes versions to use to filter the insights.</p>
   * @public
   */
  kubernetesVersions?: string[];

  /**
   * <p>The statuses to use to filter the insights. </p>
   * @public
   */
  statuses?: InsightStatusValue[];
}

/**
 * @public
 */
export interface ListInsightsRequest {
  /**
   * <p>The name of the Amazon EKS cluster associated with the insights.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The criteria to filter your list of insights for your cluster. You can filter which
   *             insights are returned by category, associated Kubernetes version, and status.</p>
   * @public
   */
  filter?: InsightsFilter;

  /**
   * <p>The maximum number of identity provider configurations returned by
   *                 <code>ListInsights</code> in paginated output. When you use this parameter,
   *                 <code>ListInsights</code> returns only <code>maxResults</code> results in a single
   *             page along with a <code>nextToken</code> response element. You can see the remaining
   *             results of the initial request by sending another <code>ListInsights</code> request with
   *             the returned <code>nextToken</code> value. This value can be between 1
   *             and 100. If you don't use this parameter, <code>ListInsights</code>
   *             returns up to 100 results and a <code>nextToken</code> value, if
   *             applicable.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>ListInsights</code> request. When the results of a <code>ListInsights</code>
   *             request exceed <code>maxResults</code>, you can use this value to retrieve the next page
   *             of results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The summarized description of the insight.</p>
 * @public
 */
export interface InsightSummary {
  /**
   * <p>The ID of the insight.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the insight.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The category of the insight.</p>
   * @public
   */
  category?: Category;

  /**
   * <p>The Kubernetes minor version associated with an insight if applicable. </p>
   * @public
   */
  kubernetesVersion?: string;

  /**
   * <p>The time Amazon EKS last successfully completed a refresh of this insight check on the
   *             cluster.</p>
   * @public
   */
  lastRefreshTime?: Date;

  /**
   * <p>The time the status of the insight last changed.</p>
   * @public
   */
  lastTransitionTime?: Date;

  /**
   * <p>The description of the insight which includes alert criteria, remediation
   *             recommendation, and additional resources (contains Markdown).</p>
   * @public
   */
  description?: string;

  /**
   * <p>An object containing more detail on the status of the insight.</p>
   * @public
   */
  insightStatus?: InsightStatus;
}

/**
 * @public
 */
export interface ListInsightsResponse {
  /**
   * <p>The returned list of insights.</p>
   * @public
   */
  insights?: InsightSummary[];

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListInsights</code>
   *             request. When the results of a <code>ListInsights</code> request exceed
   *                 <code>maxResults</code>, you can use this value to retrieve the next page of
   *             results. This value is <code>null</code> when there are no more results to
   *             return.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListNodegroupsRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The maximum number of results, returned in paginated output. You receive
   *                 <code>maxResults</code> in a single page, along with a <code>nextToken</code>
   *             response element. You can see the remaining results of the initial request by sending
   *             another request with the returned <code>nextToken</code> value. This value can be
   *             between 1 and 100. If you don't use this parameter,
   *             100 results and a <code>nextToken</code> value, if applicable, are
   *             returned.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListNodegroupsResponse {
  /**
   * <p>A list of all of the node groups associated with the specified cluster.</p>
   * @public
   */
  nodegroups?: string[];

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListPodIdentityAssociationsRequest {
  /**
   * <p>The name of the cluster that the associations are in.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the Kubernetes namespace inside the cluster that the associations are in.</p>
   * @public
   */
  namespace?: string;

  /**
   * <p>The name of the Kubernetes service account that the associations use.</p>
   * @public
   */
  serviceAccount?: string;

  /**
   * <p>The maximum number of EKS Pod Identity association results returned by
   *                 <code>ListPodIdentityAssociations</code> in paginated output. When you use this
   *             parameter, <code>ListPodIdentityAssociations</code> returns only <code>maxResults</code>
   *             results in a single page along with a <code>nextToken</code> response element. You can
   *             see the remaining results of the initial request by sending another
   *                 <code>ListPodIdentityAssociations</code> request with the returned
   *                 <code>nextToken</code> value. This value can be between 1 and
   *             100. If you don't use this parameter,
   *                 <code>ListPodIdentityAssociations</code> returns up to 100 results
   *             and a <code>nextToken</code> value if applicable.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>ListUpdates</code> request where <code>maxResults</code> was used and the
   *             results exceeded the value of that parameter. Pagination continues from the end of the
   *             previous results that returned the <code>nextToken</code> value.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The summarized description of the association.</p>
 *          <p>Each summary is simplified by removing these fields compared to the full <code>
 *                <a>PodIdentityAssociation</a>
 *             </code>:</p>
 *          <ul>
 *             <li>
 *                <p>The IAM role: <code>roleArn</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>The timestamp that the association was created at: <code>createdAt</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>The most recent timestamp that the association was modified at:. <code>modifiedAt</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>The tags on the association: <code>tags</code>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface PodIdentityAssociationSummary {
  /**
   * <p>The name of the cluster that the association is in.</p>
   * @public
   */
  clusterName?: string;

  /**
   * <p>The name of the Kubernetes namespace inside the cluster to create the association in. The
   *             service account and the pods that use the service account must be in this
   *             namespace.</p>
   * @public
   */
  namespace?: string;

  /**
   * <p>The name of the Kubernetes service account inside the cluster to associate the IAM
   *             credentials with.</p>
   * @public
   */
  serviceAccount?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the association.</p>
   * @public
   */
  associationArn?: string;

  /**
   * <p>The ID of the association.</p>
   * @public
   */
  associationId?: string;

  /**
   * <p>If defined, the Pod Identity Association is owned by an Amazon EKS Addon.</p>
   * @public
   */
  ownerArn?: string;
}

/**
 * @public
 */
export interface ListPodIdentityAssociationsResponse {
  /**
   * <p>The list of summarized descriptions of the associations that are in the cluster and match
   *             any filters that you provided.</p>
   *          <p>Each summary is simplified by removing these fields compared to the full <code>
   *                <a>PodIdentityAssociation</a>
   *             </code>:</p>
   *          <ul>
   *             <li>
   *                <p>The IAM role: <code>roleArn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>The timestamp that the association was created at: <code>createdAt</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>The most recent timestamp that the association was modified at:. <code>modifiedAt</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>The tags on the association: <code>tags</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  associations?: PodIdentityAssociationSummary[];

  /**
   * <p>The <code>nextToken</code> value to include in a future
   *                 <code>ListPodIdentityAssociations</code> request. When the results of a
   *                 <code>ListPodIdentityAssociations</code> request exceed <code>maxResults</code>, you
   *             can use this value to retrieve the next page of results. This value is <code>null</code>
   *             when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>This exception is thrown if the request contains a semantic error. The precise meaning
 *             will depend on the API, and will be documented in the error message.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to list tags for.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>A service resource associated with the request could not be found. Clients should not
 *             retry such requests.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface ListUpdatesRequest {
  /**
   * <p>The name of the Amazon EKS cluster to list updates for.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the Amazon EKS managed node group to list updates for.</p>
   * @public
   */
  nodegroupName?: string;

  /**
   * <p>The names of the installed add-ons that have available updates.</p>
   * @public
   */
  addonName?: string;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results, returned in paginated output. You receive
   *                 <code>maxResults</code> in a single page, along with a <code>nextToken</code>
   *             response element. You can see the remaining results of the initial request by sending
   *             another request with the returned <code>nextToken</code> value. This value can be
   *             between 1 and 100. If you don't use this parameter,
   *             100 results and a <code>nextToken</code> value, if applicable, are
   *             returned.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListUpdatesResponse {
  /**
   * <p>A list of all the updates for the specified cluster and Region.</p>
   * @public
   */
  updateIds?: string[];

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated request, where <code>maxResults</code> was used and
   *             the results exceeded the value of that parameter. Pagination continues from the end of
   *             the previous results that returned the <code>nextToken</code> value. This value is null when there are no more results to return.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ConnectorConfigProvider = {
  AKS: "AKS",
  ANTHOS: "ANTHOS",
  EC2: "EC2",
  EKS_ANYWHERE: "EKS_ANYWHERE",
  GKE: "GKE",
  OPENSHIFT: "OPENSHIFT",
  OTHER: "OTHER",
  RANCHER: "RANCHER",
  TANZU: "TANZU",
} as const;

/**
 * @public
 */
export type ConnectorConfigProvider = (typeof ConnectorConfigProvider)[keyof typeof ConnectorConfigProvider];

/**
 * <p>The configuration sent to a cluster for configuration.</p>
 * @public
 */
export interface ConnectorConfigRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the role that is authorized to request the connector
   *             configuration.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The cloud provider for the target cluster to connect.</p>
   * @public
   */
  provider: ConnectorConfigProvider | undefined;
}

/**
 * @public
 */
export interface RegisterClusterRequest {
  /**
   * <p>A unique name for this cluster in your Amazon Web Services Region.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The configuration settings required to connect the Kubernetes cluster to the Amazon EKS control plane.</p>
   * @public
   */
  connectorConfig: ConnectorConfigRequest | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface RegisterClusterResponse {
  /**
   * <p>An object representing an Amazon EKS cluster.</p>
   * @public
   */
  cluster?: Cluster;
}

/**
 * <p>Required resources (such as service-linked roles) were created and are still
 *             propagating. Retry later.</p>
 * @public
 */
export class ResourcePropagationDelayException extends __BaseException {
  readonly name: "ResourcePropagationDelayException" = "ResourcePropagationDelayException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourcePropagationDelayException, __BaseException>) {
    super({
      name: "ResourcePropagationDelayException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourcePropagationDelayException.prototype);
  }
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to add tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Metadata that assists with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Tags don't
   *             propagate to any other cluster or Amazon Web Services resources.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to delete tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAccessEntryRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The ARN of the IAM principal for the <code>AccessEntry</code>.</p>
   * @public
   */
  principalArn: string | undefined;

  /**
   * <p>The value for <code>name</code> that you've specified for <code>kind: Group</code> as
   *             a <code>subject</code> in a Kubernetes <code>RoleBinding</code> or
   *                 <code>ClusterRoleBinding</code> object. Amazon EKS doesn't confirm that the
   *             value for <code>name</code> exists in any bindings on your cluster. You can specify one
   *             or more names.</p>
   *          <p>Kubernetes authorizes the <code>principalArn</code> of the access entry to access any
   *             cluster objects that you've specified in a Kubernetes <code>Role</code> or
   *                 <code>ClusterRole</code> object that is also specified in a binding's
   *                 <code>roleRef</code>. For more information about creating Kubernetes
   *                 <code>RoleBinding</code>, <code>ClusterRoleBinding</code>, <code>Role</code>, or
   *                 <code>ClusterRole</code> objects, see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC
   *                 Authorization in the Kubernetes documentation</a>.</p>
   *          <p>If you want Amazon EKS to authorize the <code>principalArn</code> (instead of,
   *             or in addition to Kubernetes authorizing the <code>principalArn</code>), you can associate
   *             one or more access policies to the access entry using
   *             <code>AssociateAccessPolicy</code>. If you associate any access policies, the
   *                 <code>principalARN</code> has all permissions assigned in the associated access
   *             policies and all permissions in any Kubernetes <code>Role</code> or <code>ClusterRole</code>
   *             objects that the group names are bound to.</p>
   * @public
   */
  kubernetesGroups?: string[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>The username to authenticate to Kubernetes with. We recommend not specifying a username and
   *             letting Amazon EKS specify it for you. For more information about the value
   *                 Amazon EKS specifies for you, or constraints before specifying your own
   *             username, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html#creating-access-entries">Creating
   *                 access entries</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  username?: string;
}

/**
 * @public
 */
export interface UpdateAccessEntryResponse {
  /**
   * <p>The ARN of the IAM principal for the <code>AccessEntry</code>.</p>
   * @public
   */
  accessEntry?: AccessEntry;
}

/**
 * @public
 */
export interface UpdateAddonRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html">
   *                <code>ListAddons</code>
   *             </a>.</p>
   * @public
   */
  addonName: string | undefined;

  /**
   * <p>The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html">
   *                <code>DescribeAddonVersions</code>
   *             </a>.</p>
   * @public
   */
  addonVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the
   *      permissions assigned to the node IAM role. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html">Amazon EKS node IAM role</a> in the <i>Amazon EKS User Guide</i>.</p>
   *          <note>
   *             <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for
   *                 your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling
   *                     IAM roles for service accounts on your cluster</a> in the
   *                 <i>Amazon EKS User Guide</i>.</p>
   *          </note>
   * @public
   */
  serviceAccountRoleArn?: string;

  /**
   * <p>How to resolve field value conflicts for an Amazon EKS add-on if you've
   *             changed a value from the Amazon EKS default value. Conflicts are handled based
   *             on the option you choose:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>None</b> – Amazon EKS doesn't
   *                     change the value. The update might fail.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Overwrite</b> – Amazon EKS
   *                     overwrites the changed value back to the Amazon EKS default
   *                     value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Preserve</b> – Amazon EKS
   *                     preserves the value. If you choose this option, we recommend that you test any
   *                     field and value changes on a non-production cluster before updating the add-on
   *                     on your production cluster.</p>
   *             </li>
   *          </ul>
   * @public
   */
  resolveConflicts?: ResolveConflicts;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>The set of configuration values for the add-on that's created. The values that you
   *             provide are validated against the schema returned by
   *                 <code>DescribeAddonConfiguration</code>.</p>
   * @public
   */
  configurationValues?: string;

  /**
   * <p>An array of Pod Identity Assocations to be updated. Each EKS Pod Identity association maps a Kubernetes service account to an IAM Role. If this value is left blank, no change. If an empty array is provided, existing Pod Identity Assocations owned by the Addon are deleted.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/add-ons-iam.html">Attach an IAM Role to an Amazon EKS add-on using Pod Identity</a> in the EKS User Guide.</p>
   * @public
   */
  podIdentityAssociations?: AddonPodIdentityAssociations[];
}

/**
 * @public
 */
export interface UpdateAddonResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   * @public
   */
  update?: Update;
}

/**
 * <p>The access configuration information for the cluster.</p>
 * @public
 */
export interface UpdateAccessConfigRequest {
  /**
   * <p>The desired authentication mode for the cluster.</p>
   * @public
   */
  authenticationMode?: AuthenticationMode;
}

/**
 * @public
 */
export interface UpdateClusterConfigRequest {
  /**
   * <p>The name of the Amazon EKS cluster to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An object representing the VPC configuration to use for an Amazon EKS
   *             cluster.</p>
   * @public
   */
  resourcesVpcConfig?: VpcConfigRequest;

  /**
   * <p>Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS cluster control plane logs</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   *          <note>
   *             <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to
   *                 exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch
   *                 Pricing</a>.</p>
   *          </note>
   * @public
   */
  logging?: Logging;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;

  /**
   * <p>The access configuration for the cluster.</p>
   * @public
   */
  accessConfig?: UpdateAccessConfigRequest;

  /**
   * <p>You can enable or disable extended support for clusters currently on standard support. You cannot disable extended support once it starts. You must enable extended support before your cluster exits standard support.</p>
   * @public
   */
  upgradePolicy?: UpgradePolicyRequest;

  /**
   * <p>Enable or disable ARC zonal shift for the cluster. If zonal shift is enabled, Amazon Web Services
   *             configures zonal autoshift for the cluster.</p>
   *          <p>Zonal shift is a feature of
   *             Amazon Application Recovery Controller (ARC). ARC zonal shift is designed to be a temporary measure that allows you to move
   *             traffic for a resource away from an impaired AZ until the zonal shift expires or you cancel
   *             it. You can extend the zonal shift if necessary.</p>
   *          <p>You can start a zonal shift for an EKS cluster, or you can allow Amazon Web Services to do it for you
   *             by enabling <i>zonal autoshift</i>. This shift updates the flow of
   *             east-to-west network traffic in your cluster to only consider network endpoints for Pods
   *             running on worker nodes in healthy AZs. Additionally, any ALB or NLB handling ingress
   *             traffic for applications in your EKS cluster will automatically route traffic to targets in
   *             the healthy AZs. For more information about zonal shift in EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/zone-shift.html">Learn about Amazon Application Recovery Controller (ARC)
   *                 Zonal Shift in Amazon EKS</a> in the
   *             <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   * @public
   */
  zonalShiftConfig?: ZonalShiftConfigRequest;
}

/**
 * @public
 */
export interface UpdateClusterConfigResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   * @public
   */
  update?: Update;
}

/**
 * @public
 */
export interface UpdateClusterVersionRequest {
  /**
   * <p>The name of the Amazon EKS cluster to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The desired Kubernetes version following a successful update.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;
}

/**
 * @public
 */
export interface UpdateClusterVersionResponse {
  /**
   * <p>The full description of the specified update</p>
   * @public
   */
  update?: Update;
}

/**
 * @public
 */
export interface UpdateEksAnywhereSubscriptionRequest {
  /**
   * <p>The ID of the subscription.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A boolean indicating whether or not to automatically renew the subscription.</p>
   * @public
   */
  autoRenew: boolean | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;
}

/**
 * @public
 */
export interface UpdateEksAnywhereSubscriptionResponse {
  /**
   * <p>The full description of the updated subscription.</p>
   * @public
   */
  subscription?: EksAnywhereSubscription;
}

/**
 * <p>An object representing a Kubernetes <code>label</code> change for a managed node
 *             group.</p>
 * @public
 */
export interface UpdateLabelsPayload {
  /**
   * <p>The Kubernetes <code>labels</code> to add or update.</p>
   * @public
   */
  addOrUpdateLabels?: Record<string, string>;

  /**
   * <p>The Kubernetes <code>labels</code> to remove.</p>
   * @public
   */
  removeLabels?: string[];
}

/**
 * <p>An object representing the details of an update to a taints payload. For more
 *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on
 *                 managed node groups</a> in the <i>Amazon EKS User Guide</i>.</p>
 * @public
 */
export interface UpdateTaintsPayload {
  /**
   * <p>Kubernetes taints to be added or updated.</p>
   * @public
   */
  addOrUpdateTaints?: Taint[];

  /**
   * <p>Kubernetes taints to remove.</p>
   * @public
   */
  removeTaints?: Taint[];
}

/**
 * @public
 */
export interface UpdateNodegroupConfigRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the managed node group to update.</p>
   * @public
   */
  nodegroupName: string | undefined;

  /**
   * <p>The Kubernetes <code>labels</code> to apply to the nodes in the node group after the
   *             update.</p>
   * @public
   */
  labels?: UpdateLabelsPayload;

  /**
   * <p>The Kubernetes taints to be applied to the nodes in the node group after the update. For
   *             more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on
   *                 managed node groups</a>.</p>
   * @public
   */
  taints?: UpdateTaintsPayload;

  /**
   * <p>The scaling configuration details for the Auto Scaling group after the update.</p>
   * @public
   */
  scalingConfig?: NodegroupScalingConfig;

  /**
   * <p>The node group update configuration.</p>
   * @public
   */
  updateConfig?: NodegroupUpdateConfig;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;
}

/**
 * @public
 */
export interface UpdateNodegroupConfigResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   * @public
   */
  update?: Update;
}

/**
 * @public
 */
export interface UpdateNodegroupVersionRequest {
  /**
   * <p>The name of your cluster.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the managed node group to update.</p>
   * @public
   */
  nodegroupName: string | undefined;

  /**
   * <p>The Kubernetes version to update to. If no version is specified, then the Kubernetes version of
   *             the node group does not change. You can specify the Kubernetes version of the cluster to
   *             update the node group to the latest AMI version of the cluster's Kubernetes version.
   *             If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify  <code>version</code>,
   *             or the node group  update will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Customizing managed nodes with launch templates</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  version?: string;

  /**
   * <p>The AMI version of the Amazon EKS optimized AMI to use for the update. By
   *             default, the latest available AMI version for the node group's Kubernetes version is used.
   *             For information about Linux versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html">Amazon EKS optimized Amazon Linux AMI versions</a> in the <i>Amazon EKS User Guide</i>. Amazon EKS managed node groups support the November 2022 and later releases of the
   *             Windows AMIs. For information about Windows versions, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html">Amazon EKS optimized Windows AMI versions</a> in the
   *             <i>Amazon EKS User Guide</i>.</p>
   *          <p>If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify
   *                 <code>releaseVersion</code>, or the node group  update will fail.
   *             For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Customizing managed nodes with launch templates</a> in the <i>Amazon EKS User Guide</i>.</p>
   * @public
   */
  releaseVersion?: string;

  /**
   * <p>An object representing a node group's launch template specification. You can only
   *             update a node group using a launch template if the node group was originally deployed
   *             with a launch template.</p>
   * @public
   */
  launchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>Force the update if any <code>Pod</code> on the existing node group can't be drained
   *             due to a <code>Pod</code> disruption budget issue. If an update fails because all Pods
   *             can't be drained, you can force the update after it fails to terminate the old node
   *             whether or not any <code>Pod</code> is running on the node.</p>
   * @public
   */
  force?: boolean;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;
}

/**
 * @public
 */
export interface UpdateNodegroupVersionResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   * @public
   */
  update?: Update;
}

/**
 * @public
 */
export interface UpdatePodIdentityAssociationRequest {
  /**
   * <p>The name of the cluster that you want to update the association in.</p>
   * @public
   */
  clusterName: string | undefined;

  /**
   * <p>The ID of the association to be updated.</p>
   * @public
   */
  associationId: string | undefined;

  /**
   * <p>The new IAM role to change the </p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure
   * the idempotency of the request.</p>
   * @public
   */
  clientRequestToken?: string;
}

/**
 * @public
 */
export interface UpdatePodIdentityAssociationResponse {
  /**
   * <p>The full description of the EKS Pod Identity association that was updated.</p>
   * @public
   */
  association?: PodIdentityAssociation;
}
