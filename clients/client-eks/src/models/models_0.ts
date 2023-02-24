// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { EKSServiceException as __BaseException } from "./EKSServiceException";

/**
 * <p>You don't have permissions to perform the requested operation. The user or role that
 *             is making the request must have at least one IAM permissions policy
 *             attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access
 *                 Management</a> in the <i>IAM User Guide</i>. </p>
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

export enum AddonIssueCode {
  ACCESS_DENIED = "AccessDenied",
  ADMISSION_REQUEST_DENIED = "AdmissionRequestDenied",
  CLUSTER_UNREACHABLE = "ClusterUnreachable",
  CONFIGURATION_CONFLICT = "ConfigurationConflict",
  INSUFFICIENT_NUMBER_OF_REPLICAS = "InsufficientNumberOfReplicas",
  INTERNAL_FAILURE = "InternalFailure",
  K8S_RESOURCE_NOT_FOUND = "K8sResourceNotFound",
  UNSUPPORTED_ADDON_MODIFICATION = "UnsupportedAddonModification",
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

/**
 * <p>The health of the add-on.</p>
 */
export interface AddonHealth {
  /**
   * <p>An object representing the health issues for an add-on.</p>
   */
  issues?: AddonIssue[];
}

/**
 * <p>Information about an Amazon EKS add-on from the Amazon Web Services Marketplace.</p>
 */
export interface MarketplaceInformation {
  /**
   * <p>The product ID from the Amazon Web Services Marketplace.</p>
   */
  productId?: string;

  /**
   * <p>The product URL from the Amazon Web Services Marketplace.</p>
   */
  productUrl?: string;
}

export enum AddonStatus {
  ACTIVE = "ACTIVE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DEGRADED = "DEGRADED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in
 *             the <i>Amazon EKS User Guide</i>.</p>
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
   * <p>The Amazon Resource Name (ARN) of the IAM role that's bound to the Kubernetes service account
   *             that the add-on uses.</p>
   */
  serviceAccountRoleArn?: string;

  /**
   * <p>The metadata that you apply to the add-on to assist with categorization and
   *             organization. Each tag consists of a key and an optional value. You define both. Add-on
   *             tags do not propagate to any other resources associated with the cluster. </p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The publisher of the add-on.</p>
   */
  publisher?: string;

  /**
   * <p>The owner of the add-on.</p>
   */
  owner?: string;

  /**
   * <p>Information about an Amazon EKS add-on from the Amazon Web Services Marketplace.</p>
   */
  marketplaceInformation?: MarketplaceInformation;

  /**
   * <p>The configuration values that you provided.</p>
   */
  configurationValues?: string;
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
   * <p>An object representing the compatibilities of a version.</p>
   */
  compatibilities?: Compatibility[];

  /**
   * <p>Whether the add-on requires configuration.</p>
   */
  requiresConfiguration?: boolean;
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
   * <p>An object representing information about available add-on versions and compatible
   *             Kubernetes versions.</p>
   */
  addonVersions?: AddonVersionInfo[];

  /**
   * <p>The publisher of the add-on.</p>
   */
  publisher?: string;

  /**
   * <p>The owner of the add-on.</p>
   */
  owner?: string;

  /**
   * <p>Information about the add-on from the Amazon Web Services Marketplace.</p>
   */
  marketplaceInformation?: MarketplaceInformation;
}

export enum AMITypes {
  AL2_ARM_64 = "AL2_ARM_64",
  AL2_x86_64 = "AL2_x86_64",
  AL2_x86_64_GPU = "AL2_x86_64_GPU",
  BOTTLEROCKET_ARM_64 = "BOTTLEROCKET_ARM_64",
  BOTTLEROCKET_ARM_64_NVIDIA = "BOTTLEROCKET_ARM_64_NVIDIA",
  BOTTLEROCKET_x86_64 = "BOTTLEROCKET_x86_64",
  BOTTLEROCKET_x86_64_NVIDIA = "BOTTLEROCKET_x86_64_NVIDIA",
  CUSTOM = "CUSTOM",
  WINDOWS_CORE_2019_x86_64 = "WINDOWS_CORE_2019_x86_64",
  WINDOWS_CORE_2022_x86_64 = "WINDOWS_CORE_2022_x86_64",
  WINDOWS_FULL_2019_x86_64 = "WINDOWS_FULL_2019_x86_64",
  WINDOWS_FULL_2022_x86_64 = "WINDOWS_FULL_2022_x86_64",
}

/**
 * <p>Identifies the Key Management Service (KMS) key used to encrypt the
 *             secrets.</p>
 */
export interface Provider {
  /**
   * <p>Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be symmetric, created in the same
   *             region as the cluster, and if the KMS key was created in a different account, the user
   *             must have access to the KMS key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html">Allowing
   *                 Users in Other Accounts to Use a KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p>
   */
  keyArn?: string;
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
   * <p>Key Management Service (KMS) key. Either the ARN or the alias can be
   *             used.</p>
   */
  provider?: Provider;
}

export interface AssociateEncryptionConfigRequest {
  /**
   * <p>The name of the cluster that you are associating with encryption configuration.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The configuration you are using for encryption.</p>
   */
  encryptionConfig: EncryptionConfig[] | undefined;

  /**
   * <p>The client request token you are using with the encryption configuration.</p>
   */
  clientRequestToken?: string;
}

export enum ErrorCode {
  ACCESS_DENIED = "AccessDenied",
  ADMISSION_REQUEST_DENIED = "AdmissionRequestDenied",
  CLUSTER_UNREACHABLE = "ClusterUnreachable",
  CONFIGURATION_CONFLICT = "ConfigurationConflict",
  ENI_LIMIT_REACHED = "EniLimitReached",
  INSUFFICIENT_FREE_ADDRESSES = "InsufficientFreeAddresses",
  INSUFFICIENT_NUMBER_OF_REPLICAS = "InsufficientNumberOfReplicas",
  IP_NOT_AVAILABLE = "IpNotAvailable",
  K8S_RESOURCE_NOT_FOUND = "K8sResourceNotFound",
  NODE_CREATION_FAILURE = "NodeCreationFailure",
  OPERATION_NOT_PERMITTED = "OperationNotPermitted",
  POD_EVICTION_FAILURE = "PodEvictionFailure",
  SECURITY_GROUP_NOT_FOUND = "SecurityGroupNotFound",
  SUBNET_NOT_FOUND = "SubnetNotFound",
  UNKNOWN = "Unknown",
  UNSUPPORTED_ADDON_MODIFICATION = "UnsupportedAddonModification",
  VPC_ID_NOT_FOUND = "VpcIdNotFound",
}

/**
 * <p>An object representing an error when an asynchronous operation fails.</p>
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
   *                     cluster doesn't have any free IP addresses.</p>
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

export enum UpdateParamType {
  ADDON_VERSION = "AddonVersion",
  CLUSTER_LOGGING = "ClusterLogging",
  DESIRED_SIZE = "DesiredSize",
  ENCRYPTION_CONFIG = "EncryptionConfig",
  ENDPOINT_PRIVATE_ACCESS = "EndpointPrivateAccess",
  ENDPOINT_PUBLIC_ACCESS = "EndpointPublicAccess",
  IDENTITY_PROVIDER_CONFIG = "IdentityProviderConfig",
  LABELS_TO_ADD = "LabelsToAdd",
  LABELS_TO_REMOVE = "LabelsToRemove",
  LAUNCH_TEMPLATE_NAME = "LaunchTemplateName",
  LAUNCH_TEMPLATE_VERSION = "LaunchTemplateVersion",
  MAX_SIZE = "MaxSize",
  MAX_UNAVAILABLE = "MaxUnavailable",
  MAX_UNAVAILABLE_PERCENTAGE = "MaxUnavailablePercentage",
  MIN_SIZE = "MinSize",
  PLATFORM_VERSION = "PlatformVersion",
  PUBLIC_ACCESS_CIDRS = "PublicAccessCidrs",
  RELEASE_VERSION = "ReleaseVersion",
  RESOLVE_CONFLICTS = "ResolveConflicts",
  SERVICE_ACCOUNT_ROLE_ARN = "ServiceAccountRoleArn",
  TAINTS_TO_ADD = "TaintsToAdd",
  TAINTS_TO_REMOVE = "TaintsToRemove",
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

export enum UpdateStatus {
  CANCELLED = "Cancelled",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  SUCCESSFUL = "Successful",
}

export enum UpdateType {
  ADDON_UPDATE = "AddonUpdate",
  ASSOCIATE_ENCRYPTION_CONFIG = "AssociateEncryptionConfig",
  ASSOCIATE_IDENTITY_PROVIDER_CONFIG = "AssociateIdentityProviderConfig",
  CONFIG_UPDATE = "ConfigUpdate",
  DISASSOCIATE_IDENTITY_PROVIDER_CONFIG = "DisassociateIdentityProviderConfig",
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

export interface AssociateEncryptionConfigResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   */
  update?: Update;
}

/**
 * <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of a user that doesn't have permissions to use the action
 *             or resource or specifying an identifier that is not valid.</p>
 */
export class ClientException extends __BaseException {
  readonly name: "ClientException" = "ClientException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;

  addonName?: string;
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
  }
}

/**
 * <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;

  addonName?: string;
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
  }
}

/**
 * <p>The specified resource is in use.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;

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
 * <p>The specified resource could not be found. You can view your available clusters with
 *                 <a>ListClusters</a>. You can view your available managed node groups with
 *                 <a>ListNodegroups</a>. Amazon EKS clusters and node groups are
 *             Region-specific.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>These errors are usually caused by a server-side issue.</p>
 */
export class ServerException extends __BaseException {
  readonly name: "ServerException" = "ServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;

  addonName?: string;
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
  }
}

/**
 * <p>An object representing an OpenID Connect (OIDC) configuration. Before associating an
 *             OIDC identity provider to your cluster, review the considerations in <a href="https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html">Authenticating
 *                 users for your cluster from an OpenID Connect identity provider</a> in the
 *             <i>Amazon EKS User Guide</i>.</p>
 */
export interface OidcIdentityProviderConfigRequest {
  /**
   * <p>The name of the OIDC provider configuration.</p>
   */
  identityProviderConfigName: string | undefined;

  /**
   * <p>The URL of the OpenID identity provider that allows the API server to discover public
   *             signing keys for verifying tokens. The URL must begin with <code>https://</code> and
   *             should correspond to the <code>iss</code> claim in the provider's OIDC ID tokens. Per
   *             the OIDC standard, path components are allowed but query parameters are not. Typically
   *             the URL consists of only a hostname, like <code>https://server.example.org</code> or
   *                 <code>https://example.com</code>. This URL should point to the level below
   *                 <code>.well-known/openid-configuration</code> and must be publicly accessible over
   *             the internet.</p>
   */
  issuerUrl: string | undefined;

  /**
   * <p>This is also known as <i>audience</i>. The ID for the client application
   *             that makes authentication requests to the OpenID identity provider.</p>
   */
  clientId: string | undefined;

  /**
   * <p>The JSON Web Token (JWT) claim to use as the username. The default is
   *             <code>sub</code>, which is expected to be a unique identifier of the end user. You can
   *             choose other claims, such as <code>email</code> or <code>name</code>, depending on the
   *             OpenID identity provider. Claims other than <code>email</code> are prefixed with the
   *             issuer URL to prevent naming clashes with other plug-ins.</p>
   */
  usernameClaim?: string;

  /**
   * <p>The prefix that is prepended to username claims to prevent clashes with existing
   *             names. If you do not provide this field, and <code>username</code> is a value other than
   *                 <code>email</code>, the prefix defaults to <code>issuerurl#</code>. You can use the
   *             value <code>-</code> to disable all prefixing.</p>
   */
  usernamePrefix?: string;

  /**
   * <p>The JWT claim that the provider uses to return your groups.</p>
   */
  groupsClaim?: string;

  /**
   * <p>The prefix that is prepended to group claims to prevent clashes with existing names
   *             (such as <code>system:</code> groups). For example, the value<code> oidc:</code> will
   *             create group names like <code>oidc:engineering</code> and
   *             <code>oidc:infra</code>.</p>
   */
  groupsPrefix?: string;

  /**
   * <p>The key value pairs that describe required claims in the identity token. If set, each
   *             claim is verified to be present in the token with a matching value. For the maximum
   *             number of claims that you can require, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-quotas.html">Amazon EKS service
   *                 quotas</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  requiredClaims?: Record<string, string>;
}

export interface AssociateIdentityProviderConfigRequest {
  /**
   * <p>The name of the cluster to associate the configuration to.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>An object representing an OpenID Connect (OIDC) identity provider
   *             configuration.</p>
   */
  oidc: OidcIdentityProviderConfigRequest | undefined;

  /**
   * <p>The metadata to apply to the configuration to assist with categorization and
   *             organization. Each tag consists of a key and an optional value. You define both.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;
}

export interface AssociateIdentityProviderConfigResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   */
  update?: Update;

  /**
   * <p>The tags for the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>An Auto Scaling group that is associated with an Amazon EKS managed node
 *             group.</p>
 */
export interface AutoScalingGroup {
  /**
   * <p>The name of the Auto Scaling group associated with an Amazon EKS managed node
   *             group.</p>
   */
  name?: string;
}

export enum ResolveConflicts {
  NONE = "NONE",
  OVERWRITE = "OVERWRITE",
  PRESERVE = "PRESERVE",
}

export interface CreateAddonRequest {
  /**
   * <p>The name of the cluster to create the add-on for.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the add-on. The name must match one of the names that <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html">
   *                <code>DescribeAddonVersions</code>
   *             </a> returns.</p>
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
   *          <note>
   *             <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for
   *                 your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling
   *                     IAM roles for service accounts on your cluster</a> in the
   *                 <i>Amazon EKS User Guide</i>.</p>
   *          </note>
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
   *                   <b>Preserve</b> – Not supported. You can set
   *                     this value when updating an add-on though. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html">UpdateAddon</a>.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't currently have the self-managed version of the add-on installed on your
   *             cluster, the Amazon EKS add-on is installed. Amazon EKS sets all values
   *             to default values, regardless of the option that you specify.</p>
   */
  resolveConflicts?: ResolveConflicts | string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The metadata to apply to the cluster to assist with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The set of configuration values for the add-on that's created. The values that you
   *             provide are validated against the schema in <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html">
   *                <code>DescribeAddonConfiguration</code>
   *             </a>.</p>
   */
  configurationValues?: string;
}

export interface CreateAddonResponse {
  /**
   * <p>An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in
   *             the <i>Amazon EKS User Guide</i>.</p>
   */
  addon?: Addon;
}

export enum IpFamily {
  IPV4 = "ipv4",
  IPV6 = "ipv6",
}

/**
 * <p>The Kubernetes network configuration for the cluster.</p>
 */
export interface KubernetesNetworkConfigRequest {
  /**
   * <p>Don't specify a value if you select <code>ipv6</code> for <b>ipFamily</b>. The CIDR block to assign Kubernetes service IP addresses from.
   *             If you don't specify a block, Kubernetes assigns addresses from either the <code>10.100.0.0/16</code>
   *             or <code>172.20.0.0/16</code> CIDR blocks. We recommend that you specify a block that does not
   *             overlap with resources in other networks that are peered or connected to your VPC. The
   *             block must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Within one of the following private IP address blocks: <code>10.0.0.0/8</code>,
   *                     <code>172.16.0.0/12</code>, or <code>192.168.0.0/16</code>.</p>
   *             </li>
   *             <li>
   *                <p>Doesn't overlap with any CIDR block assigned to the VPC that you selected for
   *                     VPC.</p>
   *             </li>
   *             <li>
   *                <p>Between /24 and /12.</p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>You can only specify a custom CIDR block when you create a cluster and can't
   *                 change this value once the cluster is created.</p>
   *          </important>
   */
  serviceIpv4Cidr?: string;

  /**
   * <p>Specify which IP family is used to assign Kubernetes pod and service IP addresses. If
   *             you don't specify a value, <code>ipv4</code> is used by default. You can only specify an
   *             IP family when you create a cluster and can't change this value once the cluster is
   *             created. If you specify <code>ipv6</code>, the VPC and subnets that you specify for
   *             cluster creation must have both <code>IPv4</code> and <code>IPv6</code> CIDR blocks assigned to them. You can't
   *             specify <code>ipv6</code> for clusters in China Regions.</p>
   *          <p>You can only specify <code>ipv6</code> for <code>1.21</code> and later clusters that use version
   *             <code>1.10.1</code> or later of the Amazon VPC CNI add-on. If you specify <code>ipv6</code>, then ensure
   *             that your VPC meets the requirements listed in the considerations listed in <a href="https://docs.aws.amazon.com/eks/latest/userguide/cni-ipv6.html">Assigning IPv6
   *                 addresses to pods and services</a> in the Amazon EKS User Guide.
   *             Kubernetes assigns services <code>IPv6</code> addresses from the unique local address range
   *             <code>(fc00::/7)</code>. You can't specify a custom <code>IPv6</code> CIDR block. Pod addresses are assigned from
   *             the subnet's <code>IPv6</code> CIDR.</p>
   */
  ipFamily?: IpFamily | string;
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
   * <p>If a log type is enabled, that log type exports its control plane logs to CloudWatch Logs. If a log type isn't enabled, that log type doesn't export its control
   *             plane logs. Each individual log type can be enabled or disabled independently.</p>
   */
  enabled?: boolean;
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

/**
 * <p>The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see
 *                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity
 *                 considerations</a> in the <i>Amazon EKS User Guide</i>
 *          </p>
 */
export interface ControlPlanePlacementRequest {
  /**
   * <p>The name of the placement group for the Kubernetes control plane instances. This
   *             setting can't be changed after cluster creation. </p>
   */
  groupName?: string;
}

/**
 * <p>The configuration of your local Amazon EKS cluster on an Amazon Web Services
 *             Outpost. Before creating a cluster on an Outpost, review <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html">Creating a local
 *                 cluster on an Outpost</a> in the <i>Amazon EKS User Guide</i>. This API isn't available for
 *                 Amazon EKS clusters on the Amazon Web Services cloud.</p>
 */
export interface OutpostConfigRequest {
  /**
   * <p>The ARN of the Outpost that you want to use for your local Amazon EKS
   *             cluster on Outposts. Only a single Outpost ARN is supported.</p>
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
   */
  controlPlaneInstanceType: string | undefined;

  /**
   * <p>An object representing the placement configuration for all the control plane instances
   *             of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  controlPlanePlacement?: ControlPlanePlacementRequest;
}

/**
 * <p>An object representing the VPC configuration to use for an Amazon EKS
 *             cluster.</p>
 */
export interface VpcConfigRequest {
  /**
   * <p>Specify subnets for your Amazon EKS nodes. Amazon EKS creates
   *             cross-account elastic network interfaces in these subnets to allow communication between
   *             your nodes and the Kubernetes control plane.</p>
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
   */
  securityGroupIds?: string[];

  /**
   * <p>Set this value to <code>false</code> to disable public access to your cluster's
   *             Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes
   *             API server can only receive requests from within the cluster VPC. The default value for
   *             this parameter is <code>true</code>, which enables public access for your Kubernetes API
   *             server. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  endpointPublicAccess?: boolean;

  /**
   * <p>Set this value to <code>true</code> to enable private access for your cluster's
   *             Kubernetes API server endpoint. If you enable private access, Kubernetes API requests
   *             from within your cluster's VPC use the private VPC endpoint. The default value for this
   *             parameter is <code>false</code>, which disables private access for your Kubernetes API
   *             server. If you disable private access and you have nodes or Fargate
   *             pods in the cluster, then ensure that <code>publicAccessCidrs</code> includes the
   *             necessary CIDR blocks for communication with the nodes or Fargate pods.
   *             For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in
   *             the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  endpointPrivateAccess?: boolean;

  /**
   * <p>The CIDR blocks that are allowed access to your cluster's public Kubernetes API server
   *             endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that
   *             you specify is denied. The default value is <code>0.0.0.0/0</code>. If you've disabled
   *             private endpoint access and you have nodes or Fargate pods in the
   *             cluster, then ensure that you specify the necessary CIDR blocks. For more information,
   *             see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  publicAccessCidrs?: string[];
}

export interface CreateClusterRequest {
  /**
   * <p>The unique name to give to your cluster.</p>
   */
  name: string | undefined;

  /**
   * <p>The desired Kubernetes version for your cluster. If you don't specify a value here,
   *             the default version available in Amazon EKS is used.</p>
   *          <note>
   *             <p>The default version might not be the latest version available.</p>
   *          </note>
   */
  version?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the
   *             Kubernetes control plane to make calls to Amazon Web Services API operations on your
   *             behalf. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html">Amazon EKS Service IAM Role</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The VPC configuration that's used by the cluster control plane. Amazon EKS VPC
   *             resources have specific requirements to work properly with Kubernetes. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html">Cluster VPC Considerations</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Cluster Security
   *                 Group Considerations</a> in the <i>Amazon EKS User Guide</i>. You must specify at least two
   *             subnets. You can specify up to five security groups. However, we recommend that you use
   *             a dedicated security group for your cluster control plane.</p>
   */
  resourcesVpcConfig: VpcConfigRequest | undefined;

  /**
   * <p>The Kubernetes network configuration for the cluster.</p>
   */
  kubernetesNetworkConfig?: KubernetesNetworkConfigRequest;

  /**
   * <p>Enable or disable exporting the Kubernetes control plane logs for your cluster to
   *                 CloudWatch Logs. By default, cluster control plane logs aren't exported to
   *                 CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS Cluster control plane logs</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   *          <note>
   *             <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to
   *                 exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch
   *                 Pricing</a>.</p>
   *          </note>
   */
  logging?: Logging;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The metadata to apply to the cluster to assist with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The encryption configuration for the cluster.</p>
   */
  encryptionConfig?: EncryptionConfig[];

  /**
   * <p>An object representing the configuration of your local Amazon EKS cluster on
   *             an Amazon Web Services Outpost. Before creating a local cluster on an Outpost, review
   *                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-overview.html">Local clusters
   *                 for Amazon EKS on Amazon Web Services Outposts</a> in the
   *             <i>Amazon EKS User Guide</i>. This object isn't available for creating Amazon EKS clusters
   *             on the Amazon Web Services cloud.</p>
   */
  outpostConfig?: OutpostConfigRequest;
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

/**
 * <p>The full description of your connected cluster.</p>
 */
export interface ConnectorConfigResponse {
  /**
   * <p>A unique ID associated with the cluster for registration purposes.</p>
   */
  activationId?: string;

  /**
   * <p>A unique code associated with the cluster for registration purposes.</p>
   */
  activationCode?: string;

  /**
   * <p>The expiration time of the connected cluster. The cluster's YAML file must be applied
   *             through the native provider.</p>
   */
  activationExpiry?: Date;

  /**
   * <p>The cluster's cloud service provider.</p>
   */
  provider?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role to communicate with services from the connected Kubernetes
   *             cluster.</p>
   */
  roleArn?: string;
}

export enum ClusterIssueCode {
  ACCESS_DENIED = "AccessDenied",
  CLUSTER_UNREACHABLE = "ClusterUnreachable",
  CONFIGURATION_CONFLICT = "ConfigurationConflict",
  INTERNAL_FAILURE = "InternalFailure",
  RESOURCE_LIMIT_EXCEEDED = "ResourceLimitExceeded",
  RESOURCE_NOT_FOUND = "ResourceNotFound",
}

/**
 * <p>An issue with your local Amazon EKS cluster on an Amazon Web Services Outpost.
 *             You can't use this API with an Amazon EKS cluster on the Amazon Web Services
 *             cloud.</p>
 */
export interface ClusterIssue {
  /**
   * <p>The error code of the issue.</p>
   */
  code?: ClusterIssueCode | string;

  /**
   * <p>A description of the issue.</p>
   */
  message?: string;

  /**
   * <p>The resource IDs that the issue relates to.</p>
   */
  resourceIds?: string[];
}

/**
 * <p>An object representing the health of your local Amazon EKS cluster on an
 *                 Amazon Web Services Outpost. You can't use this API with an Amazon EKS
 *             cluster on the Amazon Web Services cloud. </p>
 */
export interface ClusterHealth {
  /**
   * <p>An object representing the health issues of your local Amazon EKS cluster on
   *             an Amazon Web Services Outpost.</p>
   */
  issues?: ClusterIssue[];
}

/**
 * <p>An object representing the <a href="https://openid.net/connect/">OpenID
 *                 Connect</a> (OIDC) identity provider information for the cluster.</p>
 */
export interface OIDC {
  /**
   * <p>The issuer URL for the OIDC identity provider.</p>
   */
  issuer?: string;
}

/**
 * <p>An object representing an identity provider.</p>
 */
export interface Identity {
  /**
   * <p>An object representing the <a href="https://openid.net/connect/">OpenID
   *                 Connect</a> identity provider information.</p>
   */
  oidc?: OIDC;
}

/**
 * <p>The Kubernetes network configuration for the cluster. The response contains a value
 *             for <b>serviceIpv6Cidr</b> or <b>serviceIpv4Cidr</b>, but not both. </p>
 */
export interface KubernetesNetworkConfigResponse {
  /**
   * <p>The CIDR block that Kubernetes pod and service IP addresses are assigned from. Kubernetes
   *             assigns addresses from an IPv4 CIDR block assigned to a subnet that the node is in. If
   *             you didn't specify a CIDR block when you created the cluster, then Kubernetes assigns
   *             addresses from either the <code>10.100.0.0/16</code> or <code>172.20.0.0/16</code> CIDR
   *             blocks. If this was specified, then it was specified when the cluster was created and it
   *             can't be changed.</p>
   */
  serviceIpv4Cidr?: string;

  /**
   * <p>The CIDR block that Kubernetes pod and service IP addresses are assigned from if you
   *             created a 1.21 or later cluster with version 1.10.1 or later of the Amazon VPC CNI add-on and
   *             specified <code>ipv6</code> for <b>ipFamily</b> when you
   *             created the cluster. Kubernetes assigns service addresses from the unique local address
   *             range (<code>fc00::/7</code>) because you can't specify a custom IPv6 CIDR block when
   *             you create the cluster.</p>
   */
  serviceIpv6Cidr?: string;

  /**
   * <p>The IP family used to assign Kubernetes pod and service IP addresses. The IP family is
   *             always <code>ipv4</code>, unless you have a <code>1.21</code> or later cluster running
   *             version 1.10.1 or later of the Amazon VPC CNI add-on and specified <code>ipv6</code> when you
   *             created the cluster. </p>
   */
  ipFamily?: IpFamily | string;
}

/**
 * <p>The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see
 *                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity considerations</a> in the <i>Amazon EKS User Guide</i>.</p>
 */
export interface ControlPlanePlacementResponse {
  /**
   * <p>The name of the placement group for the Kubernetes control plane instances.</p>
   */
  groupName?: string;
}

/**
 * <p>An object representing the configuration of your local Amazon EKS cluster on
 *             an Amazon Web Services Outpost. This API isn't available for Amazon EKS clusters
 *             on the Amazon Web Services cloud.</p>
 */
export interface OutpostConfigResponse {
  /**
   * <p>The ARN of the Outpost that you specified for use with your local Amazon EKS
   *             cluster on Outposts.</p>
   */
  outpostArns: string[] | undefined;

  /**
   * <p>The Amazon EC2 instance type used for the control plane. The instance type is
   *             the same for all control plane instances.</p>
   */
  controlPlaneInstanceType: string | undefined;

  /**
   * <p>An object representing the placement configuration for all the control plane instances
   *             of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html">Capacity
   *                 considerations</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  controlPlanePlacement?: ControlPlanePlacementResponse;
}

/**
 * <p>An object representing an Amazon EKS cluster VPC configuration
 *             response.</p>
 */
export interface VpcConfigResponse {
  /**
   * <p>The subnets associated with your cluster.</p>
   */
  subnetIds?: string[];

  /**
   * <p>The security groups associated with the cross-account elastic network interfaces that
   *             are used to allow communication between your nodes and the Kubernetes control
   *             plane.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>The cluster security group that was created by Amazon EKS for the cluster.
   *             Managed node groups use this security group for control-plane-to-data-plane
   *             communication.</p>
   */
  clusterSecurityGroupId?: string;

  /**
   * <p>The VPC associated with your cluster.</p>
   */
  vpcId?: string;

  /**
   * <p>This parameter indicates whether the Amazon EKS public API server endpoint is
   *             enabled. If the Amazon EKS public API server endpoint is disabled, your
   *             cluster's Kubernetes API server can only receive requests that originate from within the
   *             cluster VPC.</p>
   */
  endpointPublicAccess?: boolean;

  /**
   * <p>This parameter indicates whether the Amazon EKS private API server endpoint is
   *             enabled. If the Amazon EKS private API server endpoint is enabled, Kubernetes
   *             API requests that originate from within your cluster's VPC use the private VPC endpoint
   *             instead of traversing the internet. If this value is disabled and you have nodes or
   *                 Fargate pods in the cluster, then ensure that
   *                 <code>publicAccessCidrs</code> includes the necessary CIDR blocks for communication
   *             with the nodes or Fargate pods. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  endpointPrivateAccess?: boolean;

  /**
   * <p>The CIDR blocks that are allowed access to your cluster's public Kubernetes API server
   *             endpoint. Communication to the endpoint from addresses outside of the listed CIDR blocks
   *             is denied. The default value is <code>0.0.0.0/0</code>. If you've disabled private
   *             endpoint access and you have nodes or Fargate pods in the cluster,
   *             then ensure that the necessary CIDR blocks are listed. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html">Amazon EKS cluster endpoint access control</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  publicAccessCidrs?: string[];
}

export enum ClusterStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  PENDING = "PENDING",
  UPDATING = "UPDATING",
}

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
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the
   *             Kubernetes control plane to make calls to Amazon Web Services API operations on your
   *             behalf.</p>
   */
  roleArn?: string;

  /**
   * <p>The VPC configuration used by the cluster control plane. Amazon EKS VPC
   *             resources have specific requirements to work properly with Kubernetes. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html">Cluster VPC Considerations</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html">Cluster Security
   *                 Group Considerations</a> in the <i>Amazon EKS User Guide</i>.</p>
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
   * <p>The platform version of your Amazon EKS cluster. For more information, see
   *                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/platform-versions.html">Platform Versions</a> in the <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   */
  platformVersion?: string;

  /**
   * <p>The metadata that you apply to the cluster to assist with categorization and
   *             organization. Each tag consists of a key and an optional value. You define both. Cluster
   *             tags do not propagate to any other resources associated with the cluster.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The encryption configuration for the cluster.</p>
   */
  encryptionConfig?: EncryptionConfig[];

  /**
   * <p>The configuration used to connect to a cluster for registration.</p>
   */
  connectorConfig?: ConnectorConfigResponse;

  /**
   * <p>The ID of your local Amazon EKS cluster on an Amazon Web Services Outpost. This
   *             property isn't available for an Amazon EKS cluster on the Amazon Web Services
   *             cloud.</p>
   */
  id?: string;

  /**
   * <p>An object representing the health of your local Amazon EKS cluster on an
   *                 Amazon Web Services Outpost. This object isn't available for clusters on the Amazon Web Services cloud.</p>
   */
  health?: ClusterHealth;

  /**
   * <p>An object representing the configuration of your local Amazon EKS cluster on
   *             an Amazon Web Services Outpost. This object isn't available for clusters on the Amazon Web Services cloud.</p>
   */
  outpostConfig?: OutpostConfigResponse;
}

export interface CreateClusterResponse {
  /**
   * <p>The full description of your new cluster.</p>
   */
  cluster?: Cluster;
}

/**
 * <p>You have encountered a service limit on the specified resource.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The Amazon EKS cluster associated with the exception.</p>
   */
  clusterName?: string;

  /**
   * <p>The Amazon EKS managed node group associated with the exception.</p>
   */
  nodegroupName?: string;

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
  }
}

/**
 * <p>The service is unavailable. Back off and retry the operation.</p>
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
 */
export class UnsupportedAvailabilityZoneException extends __BaseException {
  readonly name: "UnsupportedAvailabilityZoneException" = "UnsupportedAvailabilityZoneException";
  readonly $fault: "client" = "client";
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
 * <p>An object representing an Fargate profile selector.</p>
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
  labels?: Record<string, string>;
}

export interface CreateFargateProfileRequest {
  /**
   * <p>The name of the Fargate profile.</p>
   */
  fargateProfileName: string | undefined;

  /**
   * <p>The name of the Amazon EKS cluster to apply the Fargate profile
   *             to.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the pod execution role to use for pods that match the selectors in
   *             the Fargate profile. The pod execution role allows Fargate
   *             infrastructure to register with your cluster as a node, and it provides read access to
   *                 Amazon ECR image repositories. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html">Pod
   *                 Execution Role</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  podExecutionRoleArn: string | undefined;

  /**
   * <p>The IDs of subnets to launch your pods into. At this time, pods running on Fargate are not assigned public IP addresses, so only private subnets (with
   *             no direct route to an Internet Gateway) are accepted for this parameter.</p>
   */
  subnets?: string[];

  /**
   * <p>The selectors to match for pods to use this Fargate profile. Each
   *             selector must have an associated namespace. Optionally, you can also specify labels for
   *             a namespace. You may specify up to five selectors in a Fargate
   *             profile.</p>
   */
  selectors?: FargateProfileSelector[];

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The metadata to apply to the Fargate profile to assist with
   *             categorization and organization. Each tag consists of a key and an optional value. You
   *             define both. Fargate profile tags do not propagate to any other resources
   *             associated with the Fargate profile, such as the pods that are scheduled
   *             with it.</p>
   */
  tags?: Record<string, string>;
}

export enum FargateProfileStatus {
  ACTIVE = "ACTIVE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
}

/**
 * <p>An object representing an Fargate profile.</p>
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
   * <p>The name of the Amazon EKS cluster that the Fargate profile
   *             belongs to.</p>
   */
  clusterName?: string;

  /**
   * <p>The Unix epoch timestamp in seconds for when the Fargate profile was
   *             created.</p>
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
   * <p>The metadata applied to the Fargate profile to assist with
   *             categorization and organization. Each tag consists of a key and an optional value. You
   *             define both. Fargate profile tags do not propagate to any other resources
   *             associated with the Fargate profile, such as the pods that are scheduled
   *             with it.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateFargateProfileResponse {
  /**
   * <p>The full description of your new Fargate profile.</p>
   */
  fargateProfile?: FargateProfile;
}

export enum CapacityTypes {
  ON_DEMAND = "ON_DEMAND",
  SPOT = "SPOT",
}

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
 *             Reference. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>
 *          <p>You must specify either the launch template ID or the launch template name in the
 *             request, but not both.</p>
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>The name of the launch template.</p>
   *          <p>You must specify either the launch template name or the launch template ID in the
   *             request, but not both.</p>
   */
  name?: string;

  /**
   * <p>The version number of the launch template to use. If no version is specified, then the
   *             template's default version is used.</p>
   */
  version?: string;

  /**
   * <p>The ID of the launch template.</p>
   *          <p>You must specify either the launch template ID or the launch template name in the
   *             request, but not both.</p>
   */
  id?: string;
}

/**
 * <p>An object representing the remote access configuration for the managed node
 *             group.</p>
 */
export interface RemoteAccessConfig {
  /**
   * <p>The Amazon EC2 SSH key name that provides access for SSH communication with
   *             the nodes in the managed node group. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 key pairs and Linux instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>. For
   *             Windows, an Amazon EC2 SSH key is used to obtain the RDP password. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-key-pairs.html">Amazon EC2 key pairs and Windows instances</a> in
   *             the <i>Amazon Elastic Compute Cloud User Guide for Windows Instances</i>.</p>
   */
  ec2SshKey?: string;

  /**
   * <p>The security group IDs that are allowed SSH access (port 22) to the nodes. For
   *             Windows, the port is 3389. If you specify an Amazon EC2 SSH key but don't
   *             specify a source security group when you create a managed node group, then the port on
   *             the nodes is opened to the internet (<code>0.0.0.0/0</code>). For more information, see
   *                 <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html">Security Groups for Your VPC</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
   */
  sourceSecurityGroups?: string[];
}

/**
 * <p>An object representing the scaling configuration details for the Auto Scaling group
 *             that is associated with your node group. When creating a node group, you must specify
 *             all or none of the properties. When updating a node group, you can specify any or none
 *             of the properties.</p>
 */
export interface NodegroupScalingConfig {
  /**
   * <p>The minimum number of nodes that the managed node group can scale in to.</p>
   */
  minSize?: number;

  /**
   * <p>The maximum number of nodes that the managed node group can scale out to. For
   *             information about the maximum number that you can specify, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/service-quotas.html">Amazon EKS service quotas</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  maxSize?: number;

  /**
   * <p>The current number of nodes that the managed node group should maintain.</p>
   *          <important>
   *             <p>If you use Cluster Autoscaler, you shouldn't change the desiredSize value
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
   *          <p>This parameter can be different from minSize in some cases, such as when starting with
   *             extra hosts for testing. This parameter can also be different when you want to start
   *             with an estimated number of needed hosts, but let Cluster Autoscaler reduce the number
   *             if there are too many. When Cluster Autoscaler is used, the desiredSize parameter is
   *             altered by Cluster Autoscaler (but can be out-of-date for short periods of time).
   *             Cluster Autoscaler doesn't scale a managed node group lower than minSize or higher than
   *             maxSize.</p>
   */
  desiredSize?: number;
}

export enum TaintEffect {
  NO_EXECUTE = "NO_EXECUTE",
  NO_SCHEDULE = "NO_SCHEDULE",
  PREFER_NO_SCHEDULE = "PREFER_NO_SCHEDULE",
}

/**
 * <p>A property that allows a node to repel a set of pods. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.</p>
 */
export interface Taint {
  /**
   * <p>The key of the taint.</p>
   */
  key?: string;

  /**
   * <p>The value of the taint.</p>
   */
  value?: string;

  /**
   * <p>The effect of the taint.</p>
   */
  effect?: TaintEffect | string;
}

/**
 * <p>The node group update configuration.</p>
 */
export interface NodegroupUpdateConfig {
  /**
   * <p>The maximum number of nodes unavailable at once during a version update. Nodes will be
   *             updated in parallel. This value or <code>maxUnavailablePercentage</code> is required to
   *             have a value.The maximum number is 100.</p>
   */
  maxUnavailable?: number;

  /**
   * <p>The maximum percentage of nodes unavailable during a version update. This percentage
   *             of nodes will be updated in parallel, up to 100 nodes at once. This value or
   *                 <code>maxUnavailable</code> is required to have a value.</p>
   */
  maxUnavailablePercentage?: number;
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
   *             size is 20 GiB for Linux and Bottlerocket. The default disk size is 50 GiB for Windows.
   *             If you specify <code>launchTemplate</code>, then don't specify  <code>diskSize</code>, or the node group
   *             deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  diskSize?: number;

  /**
   * <p>The subnets to use for the Auto Scaling group that is created for your node group.
   *             If you specify <code>launchTemplate</code>, then don't specify  <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html">
   *                <code>SubnetId</code>
   *             </a> in your launch template, or the node group
   *             deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>
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
   *             multiple values for <code>instanceTypes</code>. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html#managed-node-group-capacity-types">Managed node group capacity types</a> and <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in
   *             the <i>Amazon EKS User Guide</i>.</p>
   */
  instanceTypes?: string[];

  /**
   * <p>The AMI type for your node group. If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI,
   *                 then don't specify <code>amiType</code>, or the node group  deployment
   *             will fail. If your launch template uses a Windows custom AMI, then add
   *                 <code>eks:kube-proxy-windows</code> to your Windows nodes <code>rolearn</code> in
   *             the <code>aws-auth</code>
   *             <code>ConfigMap</code>. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  amiType?: AMITypes | string;

  /**
   * <p>The remote access configuration to use with your node group.
   *             For Linux, the protocol is SSH. For Windows, the protocol is RDP.
   *             If you specify <code>launchTemplate</code>, then don't specify
   *                 <code>remoteAccess</code>, or the node group  deployment will fail.
   *             For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>
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
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html">
   *                <code>IamInstanceProfile</code>
   *             </a> in your launch template,
   *             or the node group  deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  nodeRole: string | undefined;

  /**
   * <p>The Kubernetes labels to be applied to the nodes in the node group when they are
   *             created.</p>
   */
  labels?: Record<string, string>;

  /**
   * <p>The Kubernetes taints to be applied to the nodes in the node group. For more
   *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on
   *                 managed node groups</a>.</p>
   */
  taints?: Taint[];

  /**
   * <p>The metadata to apply to the node group to assist with categorization and
   *             organization. Each tag consists of a key and an optional value. You define both. Node
   *             group tags do not propagate to any other resources associated with the node group, such
   *             as the Amazon EC2 instances or subnets.</p>
   */
  tags?: Record<string, string>;

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
   * <p>The node group update configuration.</p>
   */
  updateConfig?: NodegroupUpdateConfig;

  /**
   * <p>The capacity type for your node group.</p>
   */
  capacityType?: CapacityTypes | string;

  /**
   * <p>The Kubernetes version to use for your managed nodes. By default, the Kubernetes
   *             version of the cluster is used, and this is the only accepted specified value.
   *             If you specify <code>launchTemplate</code>, and your launch template uses a custom AMI, then don't specify  <code>version</code>,
   *             or the node group  deployment will fail. For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>
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
   *             For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>
   */
  releaseVersion?: string;
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
  EC2_SUBNET_MISSING_IPV6_ASSIGNMENT = "Ec2SubnetMissingIpv6Assignment",
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
   *                         the public IPv4 addressing attribute for your subnet</a> in the
   *                         <i>Amazon VPC User Guide</i>.</p>
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
   */
  code?: NodegroupIssueCode | string;

  /**
   * <p>The error message associated with the issue.</p>
   */
  message?: string;

  /**
   * <p>The Amazon Web Services resources that are afflicted by this issue.</p>
   */
  resourceIds?: string[];
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
   *             controls SSH access to the nodes.</p>
   */
  remoteAccessSecurityGroup?: string;
}

export enum NodegroupStatus {
  ACTIVE = "ACTIVE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DEGRADED = "DEGRADED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETING = "DELETING",
  UPDATING = "UPDATING",
}

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
   *             deployed using a launch template, this is the version of the Amazon EKS
   *             optimized AMI that the node group was deployed with.</p>
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
   * <p>The IAM role associated with your node group. The Amazon EKS
   *             node <code>kubelet</code> daemon makes calls to Amazon Web Services APIs on your behalf.
   *             Nodes receive permissions for these API calls through an IAM instance
   *             profile and associated policies.</p>
   */
  nodeRole?: string;

  /**
   * <p>The Kubernetes labels applied to the nodes in the node group.</p>
   *          <note>
   *             <p>Only labels that are applied with the Amazon EKS API are shown here. There
   *                 may be other Kubernetes labels applied to the nodes in this group.</p>
   *          </note>
   */
  labels?: Record<string, string>;

  /**
   * <p>The Kubernetes taints to be applied to the nodes in the node group when they are
   *             created. Effect is one of <code>No_Schedule</code>, <code>Prefer_No_Schedule</code>, or
   *                 <code>No_Execute</code>. Kubernetes taints can be used together with tolerations to
   *             control how workloads are scheduled to your nodes. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.</p>
   */
  taints?: Taint[];

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
   * <p>The node group update configuration.</p>
   */
  updateConfig?: NodegroupUpdateConfig;

  /**
   * <p>If a launch template was used to create the node group, then this is the launch
   *             template that was used.</p>
   */
  launchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>The metadata applied to the node group to assist with categorization and organization.
   *             Each tag consists of a key and an optional value. You define both. Node group tags do
   *             not propagate to any other resources associated with the node group, such as the Amazon EC2 instances or subnets. </p>
   */
  tags?: Record<string, string>;
}

export interface CreateNodegroupResponse {
  /**
   * <p>The full description of your new node group.</p>
   */
  nodegroup?: Nodegroup;
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

  /**
   * <p>Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on. If an IAM
   *             account is associated with the add-on, it isn't removed.</p>
   */
  preserve?: boolean;
}

export interface DeleteAddonResponse {
  /**
   * <p>An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in
   *             the <i>Amazon EKS User Guide</i>.</p>
   */
  addon?: Addon;
}

export interface DeleteClusterRequest {
  /**
   * <p>The name of the cluster to delete.</p>
   */
  name: string | undefined;
}

export interface DeleteClusterResponse {
  /**
   * <p>The full description of the cluster to delete.</p>
   */
  cluster?: Cluster;
}

export interface DeleteFargateProfileRequest {
  /**
   * <p>The name of the Amazon EKS cluster associated with the Fargate
   *             profile to delete.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the Fargate profile to delete.</p>
   */
  fargateProfileName: string | undefined;
}

export interface DeleteFargateProfileResponse {
  /**
   * <p>The deleted Fargate profile.</p>
   */
  fargateProfile?: FargateProfile;
}

export interface DeleteNodegroupRequest {
  /**
   * <p>The name of the Amazon EKS cluster that is associated with your node
   *             group.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the node group to delete.</p>
   */
  nodegroupName: string | undefined;
}

export interface DeleteNodegroupResponse {
  /**
   * <p>The full description of your deleted node group.</p>
   */
  nodegroup?: Nodegroup;
}

export interface DeregisterClusterRequest {
  /**
   * <p>The name of the connected cluster to deregister.</p>
   */
  name: string | undefined;
}

export interface DeregisterClusterResponse {
  /**
   * <p>An object representing an Amazon EKS cluster.</p>
   */
  cluster?: Cluster;
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

export interface DescribeAddonResponse {
  /**
   * <p>An Amazon EKS add-on. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html">Amazon EKS add-ons</a> in
   *             the <i>Amazon EKS User Guide</i>.</p>
   */
  addon?: Addon;
}

export interface DescribeAddonConfigurationRequest {
  /**
   * <p>The name of the add-on. The name must match one of the names that <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html">
   *                <code>DescribeAddonVersions</code>
   *             </a> returns.</p>
   */
  addonName: string | undefined;

  /**
   * <p>The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html">
   *                <code>DescribeAddonVersions</code>
   *             </a>.</p>
   */
  addonVersion: string | undefined;
}

export interface DescribeAddonConfigurationResponse {
  /**
   * <p>The name of the add-on.</p>
   */
  addonName?: string;

  /**
   * <p>The version of the add-on. The version must match one of the versions returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html">
   *                <code>DescribeAddonVersions</code>
   *             </a>.</p>
   */
  addonVersion?: string;

  /**
   * <p>A JSON schema that's used to validate the configuration values that you provide when
   *             an addon is created or updated.</p>
   */
  configurationSchema?: string;
}

export interface DescribeAddonVersionsRequest {
  /**
   * <p>The Kubernetes versions that you can use the add-on with.</p>
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
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;

  /**
   * <p>The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html">
   *                <code>ListAddons</code>
   *             </a>.</p>
   */
  addonName?: string;

  /**
   * <p>The type of the add-on. For valid <code>types</code>, don't specify a value for this
   *             property.</p>
   */
  types?: string[];

  /**
   * <p>The publisher of the add-on. For valid <code>publishers</code>, don't specify a value
   *             for this property.</p>
   */
  publishers?: string[];

  /**
   * <p>The owner of the add-on. For valid <code>owners</code>, don't specify a value for this
   *             property.</p>
   */
  owners?: string[];
}

export interface DescribeAddonVersionsResponse {
  /**
   * <p>The list of available versions with Kubernetes version compatibility and other
   *             properties.</p>
   */
  addons?: AddonInfo[];

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>DescribeAddonVersionsResponse</code> where <code>maxResults</code> was used
   *             and the results exceeded the value of that parameter. Pagination continues from the end
   *             of the previous results that returned the <code>nextToken</code> value.</p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
}

export interface DescribeClusterRequest {
  /**
   * <p>The name of the cluster to describe.</p>
   */
  name: string | undefined;
}

export interface DescribeClusterResponse {
  /**
   * <p>The full description of your specified cluster.</p>
   */
  cluster?: Cluster;
}

export interface DescribeFargateProfileRequest {
  /**
   * <p>The name of the Amazon EKS cluster associated with the Fargate
   *             profile.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The name of the Fargate profile to describe.</p>
   */
  fargateProfileName: string | undefined;
}

export interface DescribeFargateProfileResponse {
  /**
   * <p>The full description of your Fargate profile.</p>
   */
  fargateProfile?: FargateProfile;
}

/**
 * <p>An object representing an identity provider configuration.</p>
 */
export interface IdentityProviderConfig {
  /**
   * <p>The type of the identity provider configuration. The only type available is
   *                 <code>oidc</code>.</p>
   */
  type: string | undefined;

  /**
   * <p>The name of the identity provider configuration.</p>
   */
  name: string | undefined;
}

export interface DescribeIdentityProviderConfigRequest {
  /**
   * <p>The cluster name that the identity provider configuration is associated to.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>An object representing an identity provider configuration.</p>
   */
  identityProviderConfig: IdentityProviderConfig | undefined;
}

export enum ConfigStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
}

/**
 * <p>An object representing the configuration for an OpenID Connect (OIDC) identity
 *             provider. </p>
 */
export interface OidcIdentityProviderConfig {
  /**
   * <p>The name of the configuration.</p>
   */
  identityProviderConfigName?: string;

  /**
   * <p>The ARN of the configuration.</p>
   */
  identityProviderConfigArn?: string;

  /**
   * <p>The cluster that the configuration is associated to.</p>
   */
  clusterName?: string;

  /**
   * <p>The URL of the OIDC identity provider that allows the API server to discover public
   *             signing keys for verifying tokens.</p>
   */
  issuerUrl?: string;

  /**
   * <p>This is also known as <i>audience</i>. The ID of the client application
   *             that makes authentication requests to the OIDC identity provider.</p>
   */
  clientId?: string;

  /**
   * <p>The JSON Web token (JWT) claim that is used as the username.</p>
   */
  usernameClaim?: string;

  /**
   * <p>The prefix that is prepended to username claims to prevent clashes with existing
   *             names. The prefix can't contain <code>system:</code>
   *          </p>
   */
  usernamePrefix?: string;

  /**
   * <p>The JSON web token (JWT) claim that the provider uses to return your groups.</p>
   */
  groupsClaim?: string;

  /**
   * <p>The prefix that is prepended to group claims to prevent clashes with existing names
   *             (such as <code>system:</code> groups). For example, the value<code> oidc:</code> creates
   *             group names like <code>oidc:engineering</code> and <code>oidc:infra</code>. The prefix
   *             can't contain <code>system:</code>
   *          </p>
   */
  groupsPrefix?: string;

  /**
   * <p>The key-value pairs that describe required claims in the identity token. If set, each
   *             claim is verified to be present in the token with a matching value.</p>
   */
  requiredClaims?: Record<string, string>;

  /**
   * <p>The metadata to apply to the provider configuration to assist with categorization and
   *             organization. Each tag consists of a key and an optional value. You define both.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The status of the OIDC identity provider.</p>
   */
  status?: ConfigStatus | string;
}

/**
 * <p>The full description of your identity configuration.</p>
 */
export interface IdentityProviderConfigResponse {
  /**
   * <p>An object representing an OpenID Connect (OIDC) identity provider
   *             configuration.</p>
   */
  oidc?: OidcIdentityProviderConfig;
}

export interface DescribeIdentityProviderConfigResponse {
  /**
   * <p>The object that represents an OpenID Connect (OIDC) identity provider
   *             configuration.</p>
   */
  identityProviderConfig?: IdentityProviderConfigResponse;
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

export interface DescribeNodegroupResponse {
  /**
   * <p>The full description of your node group.</p>
   */
  nodegroup?: Nodegroup;
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
   * <p>The name of the Amazon EKS node group associated with the update. This
   *             parameter is required if the update is a node group update.</p>
   */
  nodegroupName?: string;

  /**
   * <p>The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html">
   *                <code>ListAddons</code>
   *             </a>. This parameter is required if the update is an add-on update.</p>
   */
  addonName?: string;
}

export interface DescribeUpdateResponse {
  /**
   * <p>The full description of the specified update.</p>
   */
  update?: Update;
}

export interface DisassociateIdentityProviderConfigRequest {
  /**
   * <p>The name of the cluster to disassociate an identity provider from.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>An object representing an identity provider configuration.</p>
   */
  identityProviderConfig: IdentityProviderConfig | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;
}

export interface DisassociateIdentityProviderConfigResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   */
  update?: Update;
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
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
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
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
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
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is used only to
   *                 retrieve the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;

  /**
   * <p>Indicates whether external clusters are included in the returned list. Use
   *                 '<code>all</code>' to return connected clusters, or blank to return only Amazon EKS clusters. '<code>all</code>' must be in lowercase otherwise an error
   *             occurs.</p>
   */
  include?: string[];
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

export interface ListFargateProfilesRequest {
  /**
   * <p>The name of the Amazon EKS cluster that you would like to list Fargate profiles in.</p>
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

export interface ListFargateProfilesResponse {
  /**
   * <p>A list of all of the Fargate profiles associated with the specified
   *             cluster.</p>
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

export interface ListIdentityProviderConfigsRequest {
  /**
   * <p>The cluster name that you want to list identity provider configurations for.</p>
   */
  clusterName: string | undefined;

  /**
   * <p>The maximum number of identity provider configurations returned by
   *                 <code>ListIdentityProviderConfigs</code> in paginated output. When you use this
   *             parameter, <code>ListIdentityProviderConfigs</code> returns only <code>maxResults</code>
   *             results in a single page along with a <code>nextToken</code> response element. You can
   *             see the remaining results of the initial request by sending another
   *                 <code>ListIdentityProviderConfigs</code> request with the returned
   *                 <code>nextToken</code> value. This value can be between 1 and
   *             100. If you don't use this parameter,
   *                 <code>ListIdentityProviderConfigs</code> returns up to 100 results
   *             and a <code>nextToken</code> value, if applicable.</p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>IdentityProviderConfigsRequest</code> where <code>maxResults</code> was used
   *             and the results exceeded the value of that parameter. Pagination continues from the end
   *             of the previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;
}

export interface ListIdentityProviderConfigsResponse {
  /**
   * <p>The identity provider configurations for the cluster.</p>
   */
  identityProviderConfigs?: IdentityProviderConfig[];

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *                 <code>ListIdentityProviderConfigsResponse</code> where <code>maxResults</code> was
   *             used and the results exceeded the value of that parameter. Pagination continues from the
   *             end of the previous results that returned the <code>nextToken</code> value.</p>
   */
  nextToken?: string;
}

export interface ListNodegroupsRequest {
  /**
   * <p>The name of the Amazon EKS cluster that you would like to list node groups
   *             in.</p>
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

/**
 * <p>This exception is thrown if the request contains a semantic error. The precise meaning
 *             will depend on the API, and will be documented in the error message.</p>
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

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the
   *             supported resources are Amazon EKS clusters and managed node groups.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>A service resource associated with the request could not be found. Clients should not
 *             retry such requests.</p>
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

export enum ConnectorConfigProvider {
  AKS = "AKS",
  ANTHOS = "ANTHOS",
  EC2 = "EC2",
  EKS_ANYWHERE = "EKS_ANYWHERE",
  GKE = "GKE",
  OPENSHIFT = "OPENSHIFT",
  OTHER = "OTHER",
  RANCHER = "RANCHER",
  TANZU = "TANZU",
}

/**
 * <p>The configuration sent to a cluster for configuration.</p>
 */
export interface ConnectorConfigRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the role that is authorized to request the connector
   *             configuration.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The cloud provider for the target cluster to connect.</p>
   */
  provider: ConnectorConfigProvider | string | undefined;
}

export interface RegisterClusterRequest {
  /**
   * <p>Define a unique name for this cluster for your Region.</p>
   */
  name: string | undefined;

  /**
   * <p>The configuration settings required to connect the Kubernetes cluster to the Amazon EKS control plane.</p>
   */
  connectorConfig: ConnectorConfigRequest | undefined;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The metadata that you apply to the cluster to assist with categorization and
   *             organization. Each tag consists of a key and an optional value, both of which you
   *             define. Cluster tags do not propagate to any other resources associated with the
   *             cluster.</p>
   */
  tags?: Record<string, string>;
}

export interface RegisterClusterResponse {
  /**
   * <p>An object representing an Amazon EKS cluster.</p>
   */
  cluster?: Cluster;
}

/**
 * <p>Required resources (such as service-linked roles) were created and are still
 *             propagating. Retry later.</p>
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

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which to add tags. Currently, the supported resources
   *             are Amazon EKS clusters and managed node groups.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

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

export interface UntagResourceResponse {}

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
   *          <note>
   *             <p>To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for
   *                 your cluster. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html">Enabling
   *                     IAM roles for service accounts on your cluster</a> in the
   *                 <i>Amazon EKS User Guide</i>.</p>
   *          </note>
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
   */
  resolveConflicts?: ResolveConflicts | string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The set of configuration values for the add-on that's created. The values that you
   *             provide are validated against the schema in <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonConfiguration.html">DescribeAddonConfiguration</a>.</p>
   */
  configurationValues?: string;
}

export interface UpdateAddonResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   */
  update?: Update;
}

export interface UpdateClusterConfigRequest {
  /**
   * <p>The name of the Amazon EKS cluster to update.</p>
   */
  name: string | undefined;

  /**
   * <p>An object representing the VPC configuration to use for an Amazon EKS
   *             cluster.</p>
   */
  resourcesVpcConfig?: VpcConfigRequest;

  /**
   * <p>Enable or disable exporting the Kubernetes control plane logs for your cluster to
   *                 CloudWatch Logs. By default, cluster control plane logs aren't exported to
   *                 CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html">Amazon EKS cluster control plane logs</a> in the
   *                 <i>
   *                <i>Amazon EKS User Guide</i>
   *             </i>.</p>
   *          <note>
   *             <p>CloudWatch Logs ingestion, archive storage, and data scanning rates apply to
   *                 exported control plane logs. For more information, see <a href="http://aws.amazon.com/cloudwatch/pricing/">CloudWatch
   *                 Pricing</a>.</p>
   *          </note>
   */
  logging?: Logging;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;
}

export interface UpdateClusterConfigResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   */
  update?: Update;
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

export interface UpdateClusterVersionResponse {
  /**
   * <p>The full description of the specified update</p>
   */
  update?: Update;
}

/**
 * <p>An object representing a Kubernetes label change for a managed node group.</p>
 */
export interface UpdateLabelsPayload {
  /**
   * <p>Kubernetes labels to be added or updated.</p>
   */
  addOrUpdateLabels?: Record<string, string>;

  /**
   * <p>Kubernetes labels to be removed.</p>
   */
  removeLabels?: string[];
}

/**
 * <p>An object representing the details of an update to a taints payload. For more
 *             information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on
 *                 managed node groups</a>.</p>
 */
export interface UpdateTaintsPayload {
  /**
   * <p>Kubernetes taints to be added or updated.</p>
   */
  addOrUpdateTaints?: Taint[];

  /**
   * <p>Kubernetes taints to remove.</p>
   */
  removeTaints?: Taint[];
}

export interface UpdateNodegroupConfigRequest {
  /**
   * <p>The name of the Amazon EKS cluster that the managed node group resides
   *             in.</p>
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
   * <p>The Kubernetes taints to be applied to the nodes in the node group after the update.
   *             For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on
   *                 managed node groups</a>.</p>
   */
  taints?: UpdateTaintsPayload;

  /**
   * <p>The scaling configuration details for the Auto Scaling group after the update.</p>
   */
  scalingConfig?: NodegroupScalingConfig;

  /**
   * <p>The node group update configuration.</p>
   */
  updateConfig?: NodegroupUpdateConfig;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  clientRequestToken?: string;
}

export interface UpdateNodegroupConfigResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   */
  update?: Update;
}

export interface UpdateNodegroupVersionRequest {
  /**
   * <p>The name of the Amazon EKS cluster that is associated with the managed node
   *             group to update.</p>
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
   *             For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>
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
   *             For more information about using launch templates with Amazon EKS, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch template support</a> in the <i>Amazon EKS User Guide</i>.</p>
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

export interface UpdateNodegroupVersionResponse {
  /**
   * <p>An object representing an asynchronous update.</p>
   */
  update?: Update;
}

/**
 * @internal
 */
export const AddonIssueFilterSensitiveLog = (obj: AddonIssue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddonHealthFilterSensitiveLog = (obj: AddonHealth): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MarketplaceInformationFilterSensitiveLog = (obj: MarketplaceInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddonFilterSensitiveLog = (obj: Addon): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompatibilityFilterSensitiveLog = (obj: Compatibility): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddonVersionInfoFilterSensitiveLog = (obj: AddonVersionInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddonInfoFilterSensitiveLog = (obj: AddonInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProviderFilterSensitiveLog = (obj: Provider): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionConfigFilterSensitiveLog = (obj: EncryptionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateEncryptionConfigRequestFilterSensitiveLog = (obj: AssociateEncryptionConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorDetailFilterSensitiveLog = (obj: ErrorDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateParamFilterSensitiveLog = (obj: UpdateParam): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFilterSensitiveLog = (obj: Update): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateEncryptionConfigResponseFilterSensitiveLog = (obj: AssociateEncryptionConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OidcIdentityProviderConfigRequestFilterSensitiveLog = (obj: OidcIdentityProviderConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateIdentityProviderConfigRequestFilterSensitiveLog = (
  obj: AssociateIdentityProviderConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateIdentityProviderConfigResponseFilterSensitiveLog = (
  obj: AssociateIdentityProviderConfigResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoScalingGroupFilterSensitiveLog = (obj: AutoScalingGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAddonRequestFilterSensitiveLog = (obj: CreateAddonRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAddonResponseFilterSensitiveLog = (obj: CreateAddonResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KubernetesNetworkConfigRequestFilterSensitiveLog = (obj: KubernetesNetworkConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LogSetupFilterSensitiveLog = (obj: LogSetup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingFilterSensitiveLog = (obj: Logging): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ControlPlanePlacementRequestFilterSensitiveLog = (obj: ControlPlanePlacementRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutpostConfigRequestFilterSensitiveLog = (obj: OutpostConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcConfigRequestFilterSensitiveLog = (obj: VpcConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterRequestFilterSensitiveLog = (obj: CreateClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CertificateFilterSensitiveLog = (obj: Certificate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorConfigResponseFilterSensitiveLog = (obj: ConnectorConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterIssueFilterSensitiveLog = (obj: ClusterIssue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterHealthFilterSensitiveLog = (obj: ClusterHealth): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OIDCFilterSensitiveLog = (obj: OIDC): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IdentityFilterSensitiveLog = (obj: Identity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KubernetesNetworkConfigResponseFilterSensitiveLog = (obj: KubernetesNetworkConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ControlPlanePlacementResponseFilterSensitiveLog = (obj: ControlPlanePlacementResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutpostConfigResponseFilterSensitiveLog = (obj: OutpostConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcConfigResponseFilterSensitiveLog = (obj: VpcConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClusterFilterSensitiveLog = (obj: Cluster): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateClusterResponseFilterSensitiveLog = (obj: CreateClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FargateProfileSelectorFilterSensitiveLog = (obj: FargateProfileSelector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFargateProfileRequestFilterSensitiveLog = (obj: CreateFargateProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FargateProfileFilterSensitiveLog = (obj: FargateProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateFargateProfileResponseFilterSensitiveLog = (obj: CreateFargateProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateSpecificationFilterSensitiveLog = (obj: LaunchTemplateSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoteAccessConfigFilterSensitiveLog = (obj: RemoteAccessConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodegroupScalingConfigFilterSensitiveLog = (obj: NodegroupScalingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaintFilterSensitiveLog = (obj: Taint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodegroupUpdateConfigFilterSensitiveLog = (obj: NodegroupUpdateConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNodegroupRequestFilterSensitiveLog = (obj: CreateNodegroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IssueFilterSensitiveLog = (obj: Issue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodegroupHealthFilterSensitiveLog = (obj: NodegroupHealth): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodegroupResourcesFilterSensitiveLog = (obj: NodegroupResources): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NodegroupFilterSensitiveLog = (obj: Nodegroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateNodegroupResponseFilterSensitiveLog = (obj: CreateNodegroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAddonRequestFilterSensitiveLog = (obj: DeleteAddonRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAddonResponseFilterSensitiveLog = (obj: DeleteAddonResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClusterRequestFilterSensitiveLog = (obj: DeleteClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClusterResponseFilterSensitiveLog = (obj: DeleteClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFargateProfileRequestFilterSensitiveLog = (obj: DeleteFargateProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteFargateProfileResponseFilterSensitiveLog = (obj: DeleteFargateProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNodegroupRequestFilterSensitiveLog = (obj: DeleteNodegroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNodegroupResponseFilterSensitiveLog = (obj: DeleteNodegroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterClusterRequestFilterSensitiveLog = (obj: DeregisterClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterClusterResponseFilterSensitiveLog = (obj: DeregisterClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAddonRequestFilterSensitiveLog = (obj: DescribeAddonRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAddonResponseFilterSensitiveLog = (obj: DescribeAddonResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAddonConfigurationRequestFilterSensitiveLog = (obj: DescribeAddonConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAddonConfigurationResponseFilterSensitiveLog = (obj: DescribeAddonConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAddonVersionsRequestFilterSensitiveLog = (obj: DescribeAddonVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAddonVersionsResponseFilterSensitiveLog = (obj: DescribeAddonVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClusterRequestFilterSensitiveLog = (obj: DescribeClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClusterResponseFilterSensitiveLog = (obj: DescribeClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFargateProfileRequestFilterSensitiveLog = (obj: DescribeFargateProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeFargateProfileResponseFilterSensitiveLog = (obj: DescribeFargateProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IdentityProviderConfigFilterSensitiveLog = (obj: IdentityProviderConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIdentityProviderConfigRequestFilterSensitiveLog = (
  obj: DescribeIdentityProviderConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OidcIdentityProviderConfigFilterSensitiveLog = (obj: OidcIdentityProviderConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IdentityProviderConfigResponseFilterSensitiveLog = (obj: IdentityProviderConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIdentityProviderConfigResponseFilterSensitiveLog = (
  obj: DescribeIdentityProviderConfigResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNodegroupRequestFilterSensitiveLog = (obj: DescribeNodegroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNodegroupResponseFilterSensitiveLog = (obj: DescribeNodegroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUpdateRequestFilterSensitiveLog = (obj: DescribeUpdateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUpdateResponseFilterSensitiveLog = (obj: DescribeUpdateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateIdentityProviderConfigRequestFilterSensitiveLog = (
  obj: DisassociateIdentityProviderConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateIdentityProviderConfigResponseFilterSensitiveLog = (
  obj: DisassociateIdentityProviderConfigResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAddonsRequestFilterSensitiveLog = (obj: ListAddonsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAddonsResponseFilterSensitiveLog = (obj: ListAddonsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClustersRequestFilterSensitiveLog = (obj: ListClustersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListClustersResponseFilterSensitiveLog = (obj: ListClustersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFargateProfilesRequestFilterSensitiveLog = (obj: ListFargateProfilesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListFargateProfilesResponseFilterSensitiveLog = (obj: ListFargateProfilesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIdentityProviderConfigsRequestFilterSensitiveLog = (obj: ListIdentityProviderConfigsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIdentityProviderConfigsResponseFilterSensitiveLog = (
  obj: ListIdentityProviderConfigsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNodegroupsRequestFilterSensitiveLog = (obj: ListNodegroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNodegroupsResponseFilterSensitiveLog = (obj: ListNodegroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUpdatesRequestFilterSensitiveLog = (obj: ListUpdatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUpdatesResponseFilterSensitiveLog = (obj: ListUpdatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectorConfigRequestFilterSensitiveLog = (obj: ConnectorConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterClusterRequestFilterSensitiveLog = (obj: RegisterClusterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterClusterResponseFilterSensitiveLog = (obj: RegisterClusterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAddonRequestFilterSensitiveLog = (obj: UpdateAddonRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAddonResponseFilterSensitiveLog = (obj: UpdateAddonResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClusterConfigRequestFilterSensitiveLog = (obj: UpdateClusterConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClusterConfigResponseFilterSensitiveLog = (obj: UpdateClusterConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClusterVersionRequestFilterSensitiveLog = (obj: UpdateClusterVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClusterVersionResponseFilterSensitiveLog = (obj: UpdateClusterVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLabelsPayloadFilterSensitiveLog = (obj: UpdateLabelsPayload): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTaintsPayloadFilterSensitiveLog = (obj: UpdateTaintsPayload): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNodegroupConfigRequestFilterSensitiveLog = (obj: UpdateNodegroupConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNodegroupConfigResponseFilterSensitiveLog = (obj: UpdateNodegroupConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNodegroupVersionRequestFilterSensitiveLog = (obj: UpdateNodegroupVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateNodegroupVersionResponseFilterSensitiveLog = (obj: UpdateNodegroupVersionResponse): any => ({
  ...obj,
});
