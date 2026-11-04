// smithy-typescript generated code
import type {
  AccessScopeType,
  AddonIssueCode,
  AddonStatus,
  AMITypes,
  ArgoCdRole,
  AuthenticationMode,
  CancellationStatus,
  CapabilityDeletePropagationPolicy,
  CapabilityIssueCode,
  CapabilityStatus,
  CapabilityType,
  CapacityTypes,
  Category,
  CertificateAuthorityActivatedBy,
  CertificateAuthorityCreatedBy,
  CertificateAuthorityDistributionStatus,
  CertificateAuthoritySigningStatus,
  ClusterIssueCode,
  ClusterStatus,
  ClusterVersionStatus,
  ConfigStatus,
  ConnectorConfigProvider,
  ControlPlaneEgressModeType,
  EksAnywhereSubscriptionLicenseType,
  EksAnywhereSubscriptionStatus,
  EksAnywhereSubscriptionTermUnit,
  ErrorCode,
  FargateProfileIssueCode,
  FargateProfileStatus,
  InsightsRefreshStatus,
  InsightStatusValue,
  IpFamily,
  LogType,
  NodegroupIssueCode,
  NodegroupStatus,
  NodegroupUpdateStrategies,
  ProvisionedControlPlaneTier,
  RepairAction,
  ResolveConflicts,
  ScoringStrategyType,
  SpreadLevel,
  SsoIdentityType,
  SupportType,
  TaintEffect,
  UpdateParamType,
  UpdateStatus,
  UpdateType,
  VersionStatus,
  WarmPoolState,
} from "./enums";

/**
 * The access configuration for the cluster.
 *
 * @public
 */
export interface AccessConfigResponse {
  /**
   * Specifies whether or not the cluster creator IAM principal was set as a cluster admin access entry during cluster creation time.
   *
   * @public
   */
  bootstrapClusterCreatorAdminPermissions?: boolean | undefined;

  /**
   * The current authentication mode of the cluster.
   *
   * @public
   */
  authenticationMode?: AuthenticationMode | undefined;
}

/**
 * An access entry allows an IAM principal (user or role) to access your cluster. Access entries can replace the need to maintain the `aws-auth` `ConfigMap` for authentication. For more information about access entries, see [Access entries](https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html) in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface AccessEntry {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The ARN of the IAM principal for the access entry. If you ever delete the IAM principal with this ARN, the access entry isn't automatically deleted. We recommend that you delete the access entry with an ARN for an IAM principal that you delete. If you don't delete the access entry and ever recreate the IAM principal, even if it has the same ARN, the access entry won't work. This is because even though the ARN is the same for the recreated IAM principal, the `roleID` or `userID` (you can see this with the Security Token Service `GetCallerIdentity` API) is different for the recreated IAM principal than it was for the original IAM principal. Even though you don't see the IAM principal's `roleID` or `userID` for an access entry, Amazon EKS stores it with the access entry.
   *
   * @public
   */
  principalArn?: string | undefined;

  /**
   * A `name` that you've specified in a Kubernetes `RoleBinding` or `ClusterRoleBinding` object so that Kubernetes authorizes the `principalARN` access to cluster objects.
   *
   * @public
   */
  kubernetesGroups?: string[] | undefined;

  /**
   * The ARN of the access entry.
   *
   * @public
   */
  accessEntryArn?: string | undefined;

  /**
   * The Unix epoch timestamp at object creation.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix epoch timestamp for the last modification to the object.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The `name` of a user that can authenticate to your cluster.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The type of the access entry.
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * An access policy includes permissions that allow Amazon EKS to authorize an IAM principal to work with Kubernetes objects on your cluster. The policies are managed by Amazon EKS, but they're not IAM policies. You can't view the permissions in the policies using the API. The permissions for many of the policies are similar to the Kubernetes `cluster-admin`, `admin`, `edit`, and `view` cluster roles. For more information about these cluster roles, see [User-facing roles](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles) in the Kubernetes documentation. To view the contents of the policies, see [Access policy permissions](https://docs.aws.amazon.com/eks/latest/userguide/access-policies.html#access-policy-permissions) in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface AccessPolicy {
  /**
   * The name of the access policy.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN of the access policy.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * The scope of an `AccessPolicy` that's associated to an `AccessEntry`.
 *
 * @public
 */
export interface AccessScope {
  /**
   * The scope type of an access policy.
   *
   * @public
   */
  type?: AccessScopeType | undefined;

  /**
   * A Kubernetes `namespace` that an access policy is scoped to. A value is required if you specified `namespace` for `Type`.
   *
   * @public
   */
  namespaces?: string[] | undefined;
}

/**
 * Configuration settings for an ACK (Amazon Web Services Controllers for Kubernetes) capability. This includes whether controllers can resolve cross-namespace resource references and which ACK service controllers are disabled.
 *
 * @public
 */
export interface AckConfigRequest {
  /**
   * Specifies whether ACK controllers resolve resource references to resources in a different Kubernetes namespace. Set this value to `true` to allow references to resolve to resources in another namespace. If you don't specify this value, or you omit the `ack` configuration entirely, the capability is created with this value set to `false` and references must remain within the same namespace.
   *
   * @public
   */
  enableCrossNamespace?: boolean | undefined;

  /**
   * A list of ACK service names whose controllers are turned off for this capability, for example `s3`, `ec2`, and `iam`. Resources of a disabled service aren't reconciled until you re-enable the service. To keep all services enabled, omit this field or specify an empty list. An unrecognized service name is accepted and stored but turns nothing off, and `DescribeCapability` returns the list exactly as you supplied it. For more information, see [ACK capability configuration options](https://docs.aws.amazon.com/eks/latest/userguide/create-ack-capability.html#ack-configuration-options) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  disabledServices?: string[] | undefined;
}

/**
 * The response object containing configuration details for an ACK (Amazon Web Services Controllers for Kubernetes) capability.
 *
 * @public
 */
export interface AckConfigResponse {
  /**
   * Indicates whether ACK controllers resolve resource references to resources in a different Kubernetes namespace. This value reflects the setting that's in effect, and is `false` if you never specified a value. Capabilities that were using cross-namespace references before this setting became available have this value set to `true`, so their behavior is unchanged.
   *
   * @public
   */
  enableCrossNamespace?: boolean | undefined;

  /**
   * The list of ACK service names whose controllers are turned off for this capability. Existing custom resource definitions remain installed, and resources of a disabled service aren't reconciled until the service is re-enabled.
   *
   * @public
   */
  disabledServices?: string[] | undefined;
}

/**
 * @public
 */
export interface ActivateCertificateAuthorityRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ID of the certificate authority to activate as the cluster's signing certificate authority. This certificate authority must already exist on the cluster and have a `distributionStatus` of `COMPLETE`.
   *
   * @public
   */
  certificateAuthorityId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * Summary information about a certificate authority (CA) for an Amazon EKS cluster, returned by [`ListCertificateAuthorities`](https://docs.aws.amazon.com/eks/latest/APIReference/API_ListCertificateAuthorities.html) and the certificate-authority write operations.
 *
 * @public
 */
export interface CertificateAuthoritySummary {
  /**
   * The unique identifier of the certificate authority.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the certificate authority was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The entity that created the certificate authority, either `CUSTOMER` or `EKS`.
   *
   * @public
   */
  createdBy?: CertificateAuthorityCreatedBy | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the certificate authority was last activated. This value is absent if the certificate authority has never been activated.
   *
   * @public
   */
  activatedAt?: Date | undefined;

  /**
   * The entity that most recently activated the certificate authority, either `CUSTOMER` or `EKS`.
   *
   * @public
   */
  activatedBy?: CertificateAuthorityActivatedBy | undefined;

  /**
   * The signing status of the certificate authority: `IN_USE`, `ACTIVATING`, or `NOT_USED`.
   *
   * @public
   */
  signingStatus?: CertificateAuthoritySigningStatus | undefined;

  /**
   * The distribution status of the certificate authority: `IN_PROGRESS`, `COMPLETE`, `FAILED`, or `DELETING`.
   *
   * @public
   */
  distributionStatus?: CertificateAuthorityDistributionStatus | undefined;
}

/**
 * Contains information about the latest cancellation of an update to an Amazon EKS cluster.
 *
 * @public
 */
export interface Cancellation {
  /**
   * The current status of the cancellation. Valid values are `InProgress`, `Failed`, and `Successful`.
   *
   * @public
   */
  status?: CancellationStatus | undefined;

  /**
   * A message providing additional details about the cancellation, such as the reason for the cancellation or failure details.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * An object representing an error when an asynchronous operation fails.
 *
 * @public
 */
export interface ErrorDetail {
  /**
   * A brief description of the error.
   *
   * - **SubnetNotFound**: We couldn't find one of the subnets associated with the cluster.
   * - **SecurityGroupNotFound**: We couldn't find one of the security groups associated with the cluster.
   * - **EniLimitReached**: You have reached the elastic network interface limit for your account.
   * - **IpNotAvailable**: A subnet associated with the cluster doesn't have any available IP addresses.
   * - **AccessDenied**: You don't have permissions to perform the specified operation.
   * - **OperationNotPermitted**: The service role associated with the cluster doesn't have the required access permissions for Amazon EKS.
   * - **VpcIdNotFound**: We couldn't find the VPC associated with the cluster.
   *
   * @public
   */
  errorCode?: ErrorCode | undefined;

  /**
   * A more complete description of the error.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * An optional field that contains the resource IDs associated with the error.
   *
   * @public
   */
  resourceIds?: string[] | undefined;
}

/**
 * An object representing the details of an update request.
 *
 * @public
 */
export interface UpdateParam {
  /**
   * The keys associated with an update request.
   *
   * @public
   */
  type?: UpdateParamType | undefined;

  /**
   * The value of the keys submitted as part of an update request.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * An object representing an asynchronous update.
 *
 * @public
 */
export interface Update {
  /**
   * A UUID that is used to track the update.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The current status of the update.
   *
   * @public
   */
  status?: UpdateStatus | undefined;

  /**
   * The type of the update.
   *
   * @public
   */
  type?: UpdateType | undefined;

  /**
   * A key-value map that contains the parameters associated with the update.
   *
   * @public
   */
  params?: UpdateParam[] | undefined;

  /**
   * The Unix epoch timestamp at object creation.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * Any errors associated with a `Failed` update.
   *
   * @public
   */
  errors?: ErrorDetail[] | undefined;

  /**
   * The latest cancellation information for the update. This field is present only if any cancellation is attempted for the update.
   *
   * @public
   */
  cancellation?: Cancellation | undefined;
}

/**
 * @public
 */
export interface ActivateCertificateAuthorityResponse {
  /**
   * An object representing the asynchronous update that promotes the certificate authority to be the cluster's signer.
   *
   * @public
   */
  update?: Update | undefined;

  /**
   * Summary information about the certificate authority that is being activated.
   *
   * @public
   */
  certificateAuthority?: CertificateAuthoritySummary | undefined;
}

/**
 * Identifies the certificate authority that is currently signing certificates for the cluster.
 *
 * @public
 */
export interface ActiveCertificateAuthority {
  /**
   * The unique identifier of the certificate authority that is currently signing certificates for the cluster.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The entity that activated the current signing certificate authority, either `CUSTOMER` or `EKS`.
   *
   * @public
   */
  activatedBy?: CertificateAuthorityActivatedBy | undefined;
}

/**
 * An issue related to an add-on.
 *
 * @public
 */
export interface AddonIssue {
  /**
   * A code that describes the type of issue.
   *
   * @public
   */
  code?: AddonIssueCode | undefined;

  /**
   * A message that provides details about the issue and what might cause it.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The resource IDs of the issue.
   *
   * @public
   */
  resourceIds?: string[] | undefined;
}

/**
 * The health of the add-on.
 *
 * @public
 */
export interface AddonHealth {
  /**
   * An object representing the health issues for an add-on.
   *
   * @public
   */
  issues?: AddonIssue[] | undefined;
}

/**
 * Information about an Amazon EKS add-on from the Amazon Web Services Marketplace.
 *
 * @public
 */
export interface MarketplaceInformation {
  /**
   * The product ID from the Amazon Web Services Marketplace.
   *
   * @public
   */
  productId?: string | undefined;

  /**
   * The product URL from the Amazon Web Services Marketplace.
   *
   * @public
   */
  productUrl?: string | undefined;
}

/**
 * The namespace configuration response object containing information about the namespace where an addon is installed.
 *
 * @public
 */
export interface AddonNamespaceConfigResponse {
  /**
   * The name of the Kubernetes namespace where the addon is installed.
   *
   * @public
   */
  namespace?: string | undefined;
}

/**
 * An Amazon EKS add-on. For more information, see [Amazon EKS add-ons](https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html) in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface Addon {
  /**
   * The name of the add-on.
   *
   * @public
   */
  addonName?: string | undefined;

  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The status of the add-on.
   *
   * @public
   */
  status?: AddonStatus | undefined;

  /**
   * The version of the add-on.
   *
   * @public
   */
  addonVersion?: string | undefined;

  /**
   * An object that represents the health of the add-on.
   *
   * @public
   */
  health?: AddonHealth | undefined;

  /**
   * The Amazon Resource Name (ARN) of the add-on.
   *
   * @public
   */
  addonArn?: string | undefined;

  /**
   * The Unix epoch timestamp at object creation.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix epoch timestamp for the last modification to the object.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that's bound to the Kubernetes `ServiceAccount` object that the add-on uses.
   *
   * @public
   */
  serviceAccountRoleArn?: string | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The publisher of the add-on.
   *
   * @public
   */
  publisher?: string | undefined;

  /**
   * The owner of the add-on.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * Information about an Amazon EKS add-on from the Amazon Web Services Marketplace.
   *
   * @public
   */
  marketplaceInformation?: MarketplaceInformation | undefined;

  /**
   * The configuration values that you provided.
   *
   * @public
   */
  configurationValues?: string | undefined;

  /**
   * An array of EKS Pod Identity associations owned by the add-on. Each association maps a role to a service account in a namespace in the cluster.
   *
   * For more information, see [Attach an IAM Role to an Amazon EKS add-on using EKS Pod Identity](https://docs.aws.amazon.com/eks/latest/userguide/add-ons-iam.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  podIdentityAssociations?: string[] | undefined;

  /**
   * The namespace configuration for the addon. This specifies the Kubernetes namespace where the addon is installed.
   *
   * @public
   */
  namespaceConfig?: AddonNamespaceConfigResponse | undefined;
}

/**
 * The summary information about the Amazon EKS add-on compatibility for the next Kubernetes version for an insight check in the `UPGRADE_READINESS` category.
 *
 * @public
 */
export interface AddonCompatibilityDetail {
  /**
   * The name of the Amazon EKS add-on.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The list of compatible Amazon EKS add-on versions for the next Kubernetes version.
   *
   * @public
   */
  compatibleVersions?: string[] | undefined;
}

/**
 * Compatibility information.
 *
 * @public
 */
export interface Compatibility {
  /**
   * The supported Kubernetes version of the cluster.
   *
   * @public
   */
  clusterVersion?: string | undefined;

  /**
   * The supported compute platform.
   *
   * @public
   */
  platformVersions?: string[] | undefined;

  /**
   * The supported default version.
   *
   * @public
   */
  defaultVersion?: boolean | undefined;
}

/**
 * Information about an add-on version.
 *
 * @public
 */
export interface AddonVersionInfo {
  /**
   * The version of the add-on.
   *
   * @public
   */
  addonVersion?: string | undefined;

  /**
   * The architectures that the version supports.
   *
   * @public
   */
  architecture?: string[] | undefined;

  /**
   * Indicates the compute type of the add-on version.
   *
   * @public
   */
  computeTypes?: string[] | undefined;

  /**
   * An object representing the compatibilities of a version.
   *
   * @public
   */
  compatibilities?: Compatibility[] | undefined;

  /**
   * Whether the add-on requires configuration.
   *
   * @public
   */
  requiresConfiguration?: boolean | undefined;

  /**
   * Indicates if the add-on requires IAM Permissions to operate, such as networking permissions.
   *
   * @public
   */
  requiresIamPermissions?: boolean | undefined;
}

/**
 * Information about an add-on.
 *
 * @public
 */
export interface AddonInfo {
  /**
   * The name of the add-on.
   *
   * @public
   */
  addonName?: string | undefined;

  /**
   * The type of the add-on.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * An object representing information about available add-on versions and compatible Kubernetes versions.
   *
   * @public
   */
  addonVersions?: AddonVersionInfo[] | undefined;

  /**
   * The publisher of the add-on.
   *
   * @public
   */
  publisher?: string | undefined;

  /**
   * The owner of the add-on.
   *
   * @public
   */
  owner?: string | undefined;

  /**
   * Information about the add-on from the Amazon Web Services Marketplace.
   *
   * @public
   */
  marketplaceInformation?: MarketplaceInformation | undefined;

  /**
   * The default Kubernetes namespace where this addon is typically installed if no custom namespace is specified.
   *
   * @public
   */
  defaultNamespace?: string | undefined;
}

/**
 * The namespace configuration request object for specifying a custom namespace when creating an addon.
 *
 * @public
 */
export interface AddonNamespaceConfigRequest {
  /**
   * The name of the Kubernetes namespace to install the addon in. Must be a valid RFC 1123 DNS label.
   *
   * @public
   */
  namespace?: string | undefined;
}

/**
 * A type of EKS Pod Identity association owned by an Amazon EKS add-on.
 *
 * Each association maps a role to a service account in a namespace in the cluster.
 *
 * For more information, see [Attach an IAM Role to an Amazon EKS add-on using EKS Pod Identity](https://docs.aws.amazon.com/eks/latest/userguide/add-ons-iam.html) in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface AddonPodIdentityAssociations {
  /**
   * The name of a Kubernetes Service Account.
   *
   * @public
   */
  serviceAccount: string | undefined;

  /**
   * The ARN of an IAM Role.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Information about how to configure IAM for an add-on.
 *
 * @public
 */
export interface AddonPodIdentityConfiguration {
  /**
   * The Kubernetes Service Account name used by the add-on.
   *
   * @public
   */
  serviceAccount?: string | undefined;

  /**
   * A suggested IAM Policy for the add-on.
   *
   * @public
   */
  recommendedManagedPolicies?: string[] | undefined;
}

/**
 * A constraint specifying the allowed values for a parameter.
 *
 * @public
 */
export interface AllowedValuesConstraint {
  /**
   * The list of allowed values.
   *
   * @public
   */
  allowedValues?: string[] | undefined;
}

/**
 * Configuration for integrating Argo CD with IAM Identity CenterIAM; Identity Center. This allows you to use your organization's identity provider for authentication to Argo CD.
 *
 * @public
 */
export interface ArgoCdAwsIdcConfigRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM Identity CenterIAM; Identity Center instance to use for authentication.
   *
   * @public
   */
  idcInstanceArn: string | undefined;

  /**
   * The Region where your IAM Identity CenterIAM; Identity Center instance is located.
   *
   * @public
   */
  idcRegion?: string | undefined;
}

/**
 * The response object containing IAM Identity CenterIAM; Identity Center configuration details for an Argo CD capability.
 *
 * @public
 */
export interface ArgoCdAwsIdcConfigResponse {
  /**
   * The Amazon Resource Name (ARN) of the IAM Identity CenterIAM; Identity Center instance used for authentication.
   *
   * @public
   */
  idcInstanceArn?: string | undefined;

  /**
   * The Region where the IAM Identity CenterIAM; Identity Center instance is located.
   *
   * @public
   */
  idcRegion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the managed application created in IAM Identity CenterIAM; Identity Center for this Argo CD capability. This application is automatically created and managed by Amazon EKS.
   *
   * @public
   */
  idcManagedApplicationArn?: string | undefined;
}

/**
 * Configuration for network access to the Argo CD capability's managed API server endpoint. When VPC endpoint IDs are specified, public access is blocked and the Argo CD server is only accessible through the specified VPC endpoints.
 *
 * @public
 */
export interface ArgoCdNetworkAccessConfigRequest {
  /**
   * A list of VPC endpoint IDs to associate with the managed Argo CD API server endpoint. Each VPC endpoint provides private connectivity from a specific VPC to the Argo CD server. You can specify multiple VPC endpoint IDs to enable access from multiple VPCs.
   *
   * @public
   */
  vpceIds?: string[] | undefined;
}

/**
 * An IAM Identity CenterIAM; Identity Center identity (user or group) that can be assigned permissions in a capability.
 *
 * @public
 */
export interface SsoIdentity {
  /**
   * The unique identifier of the IAM Identity CenterIAM; Identity Center user or group.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of identity. Valid values are `SSO_USER` or `SSO_GROUP`.
   *
   * @public
   */
  type: SsoIdentityType | undefined;
}

/**
 * A mapping between an Argo CD role and IAM Identity CenterIAM; Identity Center identities. This defines which users or groups have specific permissions in Argo CD.
 *
 * @public
 */
export interface ArgoCdRoleMapping {
  /**
   * The Argo CD role to assign. Valid values are:
   *
   * - `ADMIN` – Full administrative access to Argo CD.
   * - `EDITOR` – Edit access to Argo CD resources.
   * - `VIEWER` – Read-only access to Argo CD resources.
   *
   * @public
   */
  role: ArgoCdRole | undefined;

  /**
   * A list of IAM Identity CenterIAM; Identity Center identities (users or groups) that should be assigned this Argo CD role.
   *
   * @public
   */
  identities: SsoIdentity[] | undefined;
}

/**
 * Configuration settings for an Argo CD capability. This includes the Kubernetes namespace, IAM Identity CenterIAM; Identity Center integration, RBAC role mappings, and network access configuration.
 *
 * @public
 */
export interface ArgoCdConfigRequest {
  /**
   * The Kubernetes namespace where Argo CD resources will be created. If not specified, the default namespace is used.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * Configuration for IAM Identity CenterIAM; Identity Center integration. When configured, users can authenticate to Argo CD using their IAM Identity CenterIAM; Identity Center credentials.
   *
   * @public
   */
  awsIdc: ArgoCdAwsIdcConfigRequest | undefined;

  /**
   * A list of role mappings that define which IAM Identity CenterIAM; Identity Center users or groups have which Argo CD roles. Each mapping associates an Argo CD role (`ADMIN`, `EDITOR`, or `VIEWER`) with one or more IAM Identity CenterIAM; Identity Center identities.
   *
   * @public
   */
  rbacRoleMappings?: ArgoCdRoleMapping[] | undefined;

  /**
   * Configuration for network access to the Argo CD capability's managed API server endpoint. By default, the Argo CD server is accessible via a public endpoint. You can optionally specify one or more VPC endpoint IDs to enable private connectivity from your VPCs. When VPC endpoints are configured, public access is blocked and the Argo CD server is only accessible through the specified VPC endpoints.
   *
   * @public
   */
  networkAccess?: ArgoCdNetworkAccessConfigRequest | undefined;

  /**
   * An optional prefix used to construct the hostname of the Argo CD server endpoint. If not specified, Amazon EKS automatically generates the endpoint. This value can't be changed after the capability is created.
   *
   * @public
   */
  endpointPrefix?: string | undefined;
}

/**
 * The response object containing network access configuration for the Argo CD capability's managed API server endpoint. If VPC endpoint IDs are present, public access is blocked and the Argo CD server is only accessible through the specified VPC endpoints.
 *
 * @public
 */
export interface ArgoCdNetworkAccessConfigResponse {
  /**
   * The list of VPC endpoint IDs associated with the managed Argo CD API server endpoint. Each VPC endpoint provides private connectivity from a specific VPC to the Argo CD server.
   *
   * @public
   */
  vpceIds?: string[] | undefined;
}

/**
 * The response object containing Argo CD configuration details, including the server URL that you use to access the Argo CD web interface and API.
 *
 * @public
 */
export interface ArgoCdConfigResponse {
  /**
   * The Kubernetes namespace where Argo CD resources are monitored by your Argo CD Capability.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The IAM Identity CenterIAM; Identity Center integration configuration.
   *
   * @public
   */
  awsIdc?: ArgoCdAwsIdcConfigResponse | undefined;

  /**
   * The list of role mappings that define which IAM Identity CenterIAM; Identity Center users or groups have which Argo CD roles.
   *
   * @public
   */
  rbacRoleMappings?: ArgoCdRoleMapping[] | undefined;

  /**
   * The network access configuration for the Argo CD capability's managed API server endpoint. If VPC endpoint IDs are specified, public access is blocked and the Argo CD server is only accessible through the specified VPC endpoints.
   *
   * @public
   */
  networkAccess?: ArgoCdNetworkAccessConfigResponse | undefined;

  /**
   * The URL of the Argo CD server. Use this URL to access the Argo CD web interface and API.
   *
   * @public
   */
  serverUrl?: string | undefined;

  /**
   * The prefix that was configured for the hostname of the Argo CD server endpoint when the capability was created.
   *
   * @public
   */
  endpointPrefix?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAccessPolicyRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM user or role for the `AccessEntry` that you're associating the access policy to.
   *
   * @public
   */
  principalArn: string | undefined;

  /**
   * The ARN of the `AccessPolicy` that you're associating. For a list of ARNs, use `ListAccessPolicies`.
   *
   * @public
   */
  policyArn: string | undefined;

  /**
   * The scope for the `AccessPolicy`. You can scope access policies to an entire cluster or to specific Kubernetes namespaces.
   *
   * @public
   */
  accessScope: AccessScope | undefined;
}

/**
 * An access policy association.
 *
 * @public
 */
export interface AssociatedAccessPolicy {
  /**
   * The ARN of the `AccessPolicy`.
   *
   * @public
   */
  policyArn?: string | undefined;

  /**
   * The scope of the access policy.
   *
   * @public
   */
  accessScope?: AccessScope | undefined;

  /**
   * The date and time the `AccessPolicy` was associated with an `AccessEntry`.
   *
   * @public
   */
  associatedAt?: Date | undefined;

  /**
   * The Unix epoch timestamp for the last modification to the object.
   *
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateAccessPolicyResponse {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The ARN of the IAM principal for the `AccessEntry`.
   *
   * @public
   */
  principalArn?: string | undefined;

  /**
   * The `AccessPolicy` and scope associated to the `AccessEntry`.
   *
   * @public
   */
  associatedAccessPolicy?: AssociatedAccessPolicy | undefined;
}

/**
 * Identifies the Key Management Service (KMS) key used to encrypt the secrets.
 *
 * @public
 */
export interface Provider {
  /**
   * Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be symmetric and created in the same Amazon Web Services Region as the cluster. If the KMS key was created in a different account, the [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) must have access to the KMS key. For more information, see [Allowing users in other accounts to use a KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html) in the *Key Management Service Developer Guide*.
   *
   * @public
   */
  keyArn?: string | undefined;
}

/**
 * The encryption configuration for the cluster.
 *
 * @public
 */
export interface EncryptionConfig {
  /**
   * > **Important:** Amazon EKS encrypts all Kubernetes API data with envelope encryption by default for clusters running Kubernetes version 1.28 or higher, so this field no longer affects which resources are encrypted.
   *
   * Specifies the resources to be encrypted. The only supported value is `secrets`.
   *
   * @deprecated (since 2025-03-05) Deprecated. Amazon EKS encrypts all Kubernetes API data by default, so this value no longer determines which resources are encrypted.
   * @public
   */
  resources?: string[] | undefined;

  /**
   * Key Management Service (KMS) key. Either the ARN or the alias can be used.
   *
   * @public
   */
  provider?: Provider | undefined;
}

/**
 * @public
 */
export interface AssociateEncryptionConfigRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The configuration you are using for encryption.
   *
   * @public
   */
  encryptionConfig: EncryptionConfig[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateEncryptionConfigResponse {
  /**
   * An object representing an asynchronous update.
   *
   * @public
   */
  update?: Update | undefined;
}

/**
 * An object representing an OpenID Connect (OIDC) configuration. Before associating an OIDC identity provider to your cluster, review the considerations in [Authenticating users for your cluster from an OIDC identity provider](https://docs.aws.amazon.com/eks/latest/userguide/authenticate-oidc-identity-provider.html) in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface OidcIdentityProviderConfigRequest {
  /**
   * The name of the OIDC provider configuration.
   *
   * @public
   */
  identityProviderConfigName: string | undefined;

  /**
   * The URL of the OIDC identity provider that allows the API server to discover public signing keys for verifying tokens. The URL must begin with `https://` and should correspond to the `iss` claim in the provider's OIDC ID tokens. Based on the OIDC standard, path components are allowed but query parameters are not. Typically the URL consists of only a hostname, like `https://server.example.org` or `https://example.com`. This URL should point to the level below `.well-known/openid-configuration` and must be publicly accessible over the internet.
   *
   * @public
   */
  issuerUrl: string | undefined;

  /**
   * This is also known as *audience*. The ID for the client application that makes authentication requests to the OIDC identity provider.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The JSON Web Token (JWT) claim to use as the username. The default is `sub`, which is expected to be a unique identifier of the end user. You can choose other claims, such as `email` or `name`, depending on the OIDC identity provider. Claims other than `email` are prefixed with the issuer URL to prevent naming clashes with other plug-ins.
   *
   * @public
   */
  usernameClaim?: string | undefined;

  /**
   * The prefix that is prepended to username claims to prevent clashes with existing names. If you do not provide this field, and `username` is a value other than `email`, the prefix defaults to `issuerurl#`. You can use the value `-` to disable all prefixing.
   *
   * @public
   */
  usernamePrefix?: string | undefined;

  /**
   * The JWT claim that the provider uses to return your groups.
   *
   * @public
   */
  groupsClaim?: string | undefined;

  /**
   * The prefix that is prepended to group claims to prevent clashes with existing names (such as `system:` groups). For example, the value`oidc:` will create group names like `oidc:engineering` and `oidc:infra`.
   *
   * @public
   */
  groupsPrefix?: string | undefined;

  /**
   * The key value pairs that describe required claims in the identity token. If set, each claim is verified to be present in the token with a matching value. For the maximum number of claims that you can require, see [Amazon EKS service quotas](https://docs.aws.amazon.com/eks/latest/userguide/service-quotas.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  requiredClaims?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface AssociateIdentityProviderConfigRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * An object representing an OpenID Connect (OIDC) identity provider configuration.
   *
   * @public
   */
  oidc: OidcIdentityProviderConfigRequest | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateIdentityProviderConfigResponse {
  /**
   * An object representing an asynchronous update.
   *
   * @public
   */
  update?: Update | undefined;

  /**
   * The tags for the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * An Auto Scaling group that is associated with an Amazon EKS managed node group.
 *
 * @public
 */
export interface AutoScalingGroup {
  /**
   * The name of the Auto Scaling group associated with an Amazon EKS managed node group.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface CancelUpdateRequest {
  /**
   * The name of the Amazon EKS cluster associated with the update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the update to cancel.
   *
   * @public
   */
  updateId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelUpdateResponse {
  /**
   * The full description of the specified update.
   *
   * @public
   */
  update?: Update | undefined;
}

/**
 * @public
 */
export interface CreateAccessEntryRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ARN of the IAM principal for the `AccessEntry`. You can specify one ARN for each access entry. You can't specify the same ARN in more than one access entry. This value can't be changed after access entry creation.
   *
   * The valid principals differ depending on the type of the access entry in the `type` field. For `STANDARD` access entries, you can use every IAM principal type. For nodes (`EC2` (for EKS Auto Mode), `EC2_LINUX`, `EC2_WINDOWS`, `FARGATE_LINUX`, and `HYBRID_LINUX`), the only valid ARN is IAM roles. You can't use the STS session principal type with access entries because this is a temporary principal for each session and not a permanent identity that can be assigned permissions.
   *
   * [IAM best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#bp-users-federation-idp) recommend using IAM roles with temporary credentials, rather than IAM users with long-term credentials.
   *
   * @public
   */
  principalArn: string | undefined;

  /**
   * The value for `name` that you've specified for `kind: Group` as a `subject` in a Kubernetes `RoleBinding` or `ClusterRoleBinding` object. Amazon EKS doesn't confirm that the value for `name` exists in any bindings on your cluster. You can specify one or more names.
   *
   * Kubernetes authorizes the `principalArn` of the access entry to access any cluster objects that you've specified in a Kubernetes `Role` or `ClusterRole` object that is also specified in a binding's `roleRef`. For more information about creating Kubernetes `RoleBinding`, `ClusterRoleBinding`, `Role`, or `ClusterRole` objects, see [Using RBAC Authorization in the Kubernetes documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/).
   *
   * If you want Amazon EKS to authorize the `principalArn` (instead of, or in addition to Kubernetes authorizing the `principalArn`), you can associate one or more access policies to the access entry using `AssociateAccessPolicy`. If you associate any access policies, the `principalARN` has all permissions assigned in the associated access policies and all permissions in any Kubernetes `Role` or `ClusterRole` objects that the group names are bound to.
   *
   * @public
   */
  kubernetesGroups?: string[] | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The username to authenticate to Kubernetes with. We recommend not specifying a username and letting Amazon EKS specify it for you. For more information about the value Amazon EKS specifies for you, or constraints before specifying your own username, see [Creating access entries](https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html#creating-access-entries) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The type of the new access entry. Valid values are `STANDARD`, `FARGATE_LINUX`, `EC2_LINUX`, `EC2_WINDOWS`, `EC2` (for EKS Auto Mode), `HYBRID_LINUX`, and `HYPERPOD_LINUX`.
   *
   * If the `principalArn` is for an IAM role that's used for self-managed Amazon EC2 nodes, specify `EC2_LINUX` or `EC2_WINDOWS`. Amazon EKS grants the necessary permissions to the node for you. If the `principalArn` is for any other purpose, specify `STANDARD`. If you don't specify a value, Amazon EKS sets the value to `STANDARD`. If you have the access mode of the cluster set to `API_AND_CONFIG_MAP`, it's unnecessary to create access entries for IAM roles used with Fargate profiles or managed Amazon EC2 nodes, because Amazon EKS creates entries in the `aws-auth` `ConfigMap` for the roles. You can't change this value once you've created the access entry.
   *
   * If you set the value to `EC2_LINUX` or `EC2_WINDOWS`, you can't specify values for `kubernetesGroups`, or associate an `AccessPolicy` to the access entry.
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccessEntryResponse {
  /**
   * An access entry allows an IAM principal (user or role) to access your cluster. Access entries can replace the need to maintain the `aws-auth` `ConfigMap` for authentication. For more information about access entries, see [Access entries](https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  accessEntry?: AccessEntry | undefined;
}

/**
 * @public
 */
export interface CreateAddonRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the add-on. The name must match one of the names returned by `DescribeAddonVersions`.
   *
   * @public
   */
  addonName: string | undefined;

  /**
   * The version of the add-on. The version must match one of the versions returned by [`DescribeAddonVersions`](https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html).
   *
   * @public
   */
  addonVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see [Amazon EKS node IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) in the *Amazon EKS User Guide*.
   *
   * > **Note:** To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see [Enabling IAM roles for service accounts on your cluster](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  serviceAccountRoleArn?: string | undefined;

  /**
   * How to resolve field value conflicts for an Amazon EKS add-on. Conflicts are handled based on the value you choose:
   *
   * - **None** – If the self-managed version of the add-on is installed on your cluster, Amazon EKS doesn't change the value. Creation of the add-on might fail.
   * - **Overwrite** – If the self-managed version of the add-on is installed on your cluster and the Amazon EKS default value is different than the existing value, Amazon EKS changes the value to the Amazon EKS default value.
   * - **Preserve** – This is similar to the NONE option. If the self-managed version of the add-on is installed on your cluster Amazon EKS doesn't change the add-on resource properties. Creation of the add-on might fail if conflicts are detected. This option works differently during the update operation. For more information, see [`UpdateAddon`](https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html).
   *
   * If you don't currently have the self-managed version of the add-on installed on your cluster, the Amazon EKS add-on is installed. Amazon EKS sets all values to default values, regardless of the option that you specify.
   *
   * @public
   */
  resolveConflicts?: ResolveConflicts | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The set of configuration values for the add-on that's created. The values that you provide are validated against the schema returned by `DescribeAddonConfiguration`.
   *
   * @public
   */
  configurationValues?: string | undefined;

  /**
   * An array of EKS Pod Identity associations to be created. Each association maps a Kubernetes service account to an IAM role.
   *
   * For more information, see [Attach an IAM Role to an Amazon EKS add-on using EKS Pod Identity](https://docs.aws.amazon.com/eks/latest/userguide/add-ons-iam.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  podIdentityAssociations?: AddonPodIdentityAssociations[] | undefined;

  /**
   * The namespace configuration for the addon. If specified, this will override the default namespace for the addon.
   *
   * @public
   */
  namespaceConfig?: AddonNamespaceConfigRequest | undefined;
}

/**
 * @public
 */
export interface CreateAddonResponse {
  /**
   * An Amazon EKS add-on. For more information, see [Amazon EKS add-ons](https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  addon?: Addon | undefined;
}

/**
 * Configuration settings for a capability. The structure of this object varies depending on the capability type.
 *
 * @public
 */
export interface CapabilityConfigurationRequest {
  /**
   * Configuration settings specific to Argo CD capabilities. This field is only used when creating or updating an Argo CD capability.
   *
   * @public
   */
  argoCd?: ArgoCdConfigRequest | undefined;

  /**
   * Configuration settings specific to ACK (Amazon Web Services Controllers for Kubernetes) capabilities. This field is only used when creating or updating an ACK capability.
   *
   * @public
   */
  ack?: AckConfigRequest | undefined;
}

/**
 * @public
 */
export interface CreateCapabilityRequest {
  /**
   * A unique name for the capability. The name must be unique within your cluster and can contain alphanumeric characters, hyphens, and underscores.
   *
   * @public
   */
  capabilityName: string | undefined;

  /**
   * The name of the Amazon EKS cluster where you want to create the capability.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This token is valid for 24 hours after creation. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The type of capability to create. Valid values are:
   *
   * - `ACK` – Amazon Web Services Controllers for Kubernetes (ACK), which lets you manage resources directly from Kubernetes.
   * - `ARGOCD` – Argo CD for GitOps-based continuous delivery.
   * - `KRO` – Kube Resource Orchestrator (KRO) for composing and managing custom Kubernetes resources.
   *
   * @public
   */
  type: CapabilityType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the capability uses to interact with Amazon Web Services services. This role must have a trust policy that allows the EKS service principal to assume it, and it must have the necessary permissions for the capability type you're creating.
   *
   * For ACK capabilities, the role needs permissions to manage the resources you want to control through Kubernetes. For Argo CD capabilities, the role needs permissions to access Git repositories and Secrets Manager. For KRO capabilities, the role needs permissions based on the resources you'll be orchestrating.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The configuration settings for the capability. The structure of this object varies depending on the capability type. For Argo CD capabilities, you can configure IAM Identity CenterIAM; Identity Center integration, RBAC role mappings, and network access settings.
   *
   * @public
   */
  configuration?: CapabilityConfigurationRequest | undefined;

  /**
   * The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource – 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length – 128 Unicode characters in UTF-8
   * - Maximum value length – 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specifies how Kubernetes resources managed by the capability should be handled when the capability is deleted. Currently, the only supported value is `RETAIN` which retains all Kubernetes resources managed by the capability when the capability is deleted.
   *
   * Because resources are retained, all Kubernetes resources created by the capability should be deleted from the cluster before deleting the capability itself. After the capability is deleted, these resources become difficult to manage because the controller is no longer available.
   *
   * @public
   */
  deletePropagationPolicy: CapabilityDeletePropagationPolicy | undefined;
}

/**
 * The response object containing capability configuration details.
 *
 * @public
 */
export interface CapabilityConfigurationResponse {
  /**
   * Configuration settings for an Argo CD capability, including the server URL and other Argo CD-specific settings.
   *
   * @public
   */
  argoCd?: ArgoCdConfigResponse | undefined;

  /**
   * Configuration settings for an ACK (Amazon Web Services Controllers for Kubernetes) capability, including the cross-namespace reference setting and the list of disabled services.
   *
   * @public
   */
  ack?: AckConfigResponse | undefined;
}

/**
 * An issue affecting a capability's health or operation.
 *
 * @public
 */
export interface CapabilityIssue {
  /**
   * A code identifying the type of issue. This can be used to programmatically handle specific issue types.
   *
   * @public
   */
  code?: CapabilityIssueCode | undefined;

  /**
   * A human-readable message describing the issue and potential remediation steps.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Health information for a capability, including any issues that may be affecting its operation.
 *
 * @public
 */
export interface CapabilityHealth {
  /**
   * A list of issues affecting the capability. If this list is empty, the capability is healthy.
   *
   * @public
   */
  issues?: CapabilityIssue[] | undefined;
}

/**
 * An object representing a managed capability in an Amazon EKS cluster. This includes all configuration, status, and health information for the capability.
 *
 * @public
 */
export interface Capability {
  /**
   * The unique name of the capability within the cluster.
   *
   * @public
   */
  capabilityName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the capability.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the Amazon EKS cluster that contains this capability.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The type of capability. Valid values are `ACK`, `ARGOCD`, or `KRO`.
   *
   * @public
   */
  type?: CapabilityType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the capability uses to interact with Amazon Web Services services.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The current status of the capability. Valid values include:
   *
   * - `CREATING` – The capability is being created.
   * - `ACTIVE` – The capability is running and available.
   * - `UPDATING` – The capability is being updated.
   * - `DELETING` – The capability is being deleted.
   * - `CREATE_FAILED` – The capability creation failed.
   * - `UPDATE_FAILED` – The capability update failed.
   * - `DELETE_FAILED` – The capability deletion failed.
   *
   * @public
   */
  status?: CapabilityStatus | undefined;

  /**
   * The version of the capability software that is currently running.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The configuration settings for the capability. The structure varies depending on the capability type.
   *
   * @public
   */
  configuration?: CapabilityConfigurationResponse | undefined;

  /**
   * The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource – 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length – 128 Unicode characters in UTF-8
   * - Maximum value length – 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Health information for the capability, including any issues that may be affecting its operation.
   *
   * @public
   */
  health?: CapabilityHealth | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the capability was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the capability was last modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * The delete propagation policy for the capability. Currently, the only supported value is `RETAIN`, which keeps all resources managed by the capability when the capability is deleted.
   *
   * @public
   */
  deletePropagationPolicy?: CapabilityDeletePropagationPolicy | undefined;
}

/**
 * @public
 */
export interface CreateCapabilityResponse {
  /**
   * An object containing information about the newly created capability, including its name, ARN, status, and configuration.
   *
   * @public
   */
  capability?: Capability | undefined;
}

/**
 * @public
 */
export interface CreateCertificateAuthorityRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateCertificateAuthorityResponse {
  /**
   * An object representing the asynchronous update that adds the certificate authority to the cluster's trust bundle.
   *
   * @public
   */
  update?: Update | undefined;

  /**
   * Summary information about the certificate authority that was created, including its ID and initial signing and distribution status.
   *
   * @public
   */
  certificateAuthority?: CertificateAuthoritySummary | undefined;
}

/**
 * The access configuration information for the cluster.
 *
 * @public
 */
export interface CreateAccessConfigRequest {
  /**
   * Specifies whether or not the cluster creator IAM principal was set as a cluster admin access entry during cluster creation time. The default value is `true`.
   *
   * @public
   */
  bootstrapClusterCreatorAdminPermissions?: boolean | undefined;

  /**
   * The desired authentication mode for the cluster. If you create a cluster by using the EKS API, Amazon Web Services SDKs, or CloudFormation, the default is `CONFIG_MAP`. If you create the cluster by using the Amazon Web Services Management Console, the default value is `API_AND_CONFIG_MAP`.
   *
   * @public
   */
  authenticationMode?: AuthenticationMode | undefined;
}

/**
 * Request to update the configuration of the compute capability of your EKS Auto Mode cluster. For example, enable the capability. For more information, see EKS Auto Mode compute capability in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface ComputeConfigRequest {
  /**
   * Request to enable or disable the compute capability on your EKS Auto Mode cluster. If the compute capability is enabled, EKS Auto Mode will create and delete EC2 Managed Instances in your Amazon Web Services account.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * Configuration for node pools that defines the compute resources for your EKS Auto Mode cluster. For more information, see EKS Auto Mode Node Pools in the *Amazon EKS User Guide*.
   *
   * @public
   */
  nodePools?: string[] | undefined;

  /**
   * The ARN of the IAM Role EKS will assign to EC2 Managed Instances in your EKS Auto Mode cluster. This value cannot be changed after the compute capability of EKS Auto Mode is enabled. For more information, see the IAM Reference in the *Amazon EKS User Guide*.
   *
   * @public
   */
  nodeRoleArn?: string | undefined;
}

/**
 * The control plane scaling tier configuration. For more information, see EKS Provisioned Control Plane in the Amazon EKS User Guide.
 *
 * @public
 */
export interface ControlPlaneScalingConfig {
  /**
   * The control plane scaling tier configuration. Available options are `standard`, `tier-xl`, `tier-2xl`, `tier-4xl, or tier-8xl`. For more information, see EKS Provisioned Control Plane in the Amazon EKS User Guide.
   *
   * @public
   */
  tier?: ProvisionedControlPlaneTier | undefined;
}

/**
 * The port range for Kubernetes NodePort services.
 *
 * @public
 */
export interface ServiceNodePortRange {
  /**
   * The minimum port number in the range.
   *
   * @public
   */
  minPort?: number | undefined;

  /**
   * The maximum port number in the range.
   *
   * @public
   */
  maxPort?: number | undefined;
}

/**
 * The configuration for the Kubernetes API server on an Amazon EKS cluster.
 *
 * @public
 */
export interface KubeApiServerConfigRequest {
  /**
   * The duration that Kubernetes events are retained. Valid values are single-unit durations such as `30m` or `1h`.
   *
   * @public
   */
  eventTtl?: string | undefined;

  /**
   * The port range for NodePort services.
   *
   * @public
   */
  serviceNodePortRange?: ServiceNodePortRange | undefined;
}

/**
 * The horizontal pod autoscaler controller configuration for the Kubernetes controller manager.
 *
 * @public
 */
export interface HorizontalPodAutoscalerControllerConfigRequest {
  /**
   * The interval between each sync of the horizontal pod autoscaler. Valid values are single-unit durations such as `15s` or `1m`.
   *
   * @public
   */
  horizontalPodAutoscalerSyncPeriod?: string | undefined;
}

/**
 * The pod garbage collection controller configuration for the Kubernetes controller manager.
 *
 * @public
 */
export interface PodGcControllerConfigRequest {
  /**
   * The number of terminated pods that can exist before the garbage collector starts deleting them.
   *
   * @public
   */
  terminatedPodGcThreshold?: number | undefined;
}

/**
 * The configuration for the Kubernetes controller manager on an Amazon EKS cluster.
 *
 * @public
 */
export interface KubeControllerManagerConfigRequest {
  /**
   * The pod garbage collection controller configuration.
   *
   * @public
   */
  podGcControllerConfig?: PodGcControllerConfigRequest | undefined;

  /**
   * The horizontal pod autoscaler controller configuration.
   *
   * @public
   */
  horizontalPodAutoscalerControllerConfig?: HorizontalPodAutoscalerControllerConfigRequest | undefined;
}

/**
 * Indicates the current configuration of Gateway API custom resource definition (CRD) management on your EKS Auto Mode cluster. For example, if CRD management is enabled or disabled. For more information, see EKS Auto Mode load balancing capability in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface CrdManagementConfiguration {
  /**
   * Indicates if Gateway API CRD management is enabled on your EKS Auto Mode cluster. If CRD management is enabled, EKS Auto Mode will create and update the Gateway API CRDs in your EKS Auto Mode cluster.
   *
   * @public
   */
  managed?: boolean | undefined;
}

/**
 * Indicates the current configuration of the Kubernetes Gateway API for the load balancing capability on your EKS Auto Mode cluster. For more information, see EKS Auto Mode load balancing capability in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface GatewayApiConfiguration {
  /**
   * Indicates the current configuration of Gateway API custom resource definition (CRD) management on your EKS Auto Mode cluster. For example, if CRD management is enabled or disabled.
   *
   * @public
   */
  crds?: CrdManagementConfiguration | undefined;
}

/**
 * Indicates the current configuration of the load balancing capability on your EKS Auto Mode cluster. For example, if the capability is enabled or disabled. For more information, see EKS Auto Mode load balancing capability in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface ElasticLoadBalancing {
  /**
   * Indicates if the load balancing capability is enabled on your EKS Auto Mode cluster. If the load balancing capability is enabled, EKS Auto Mode will create and delete load balancers in your Amazon Web Services account.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * Indicates the current configuration of the Kubernetes Gateway API for the load balancing capability on your EKS Auto Mode cluster. For more information, see EKS Auto Mode load balancing capability in the *Amazon EKS User Guide*.
   *
   * @public
   */
  gatewayApi?: GatewayApiConfiguration | undefined;
}

/**
 * The Kubernetes network configuration for the cluster.
 *
 * @public
 */
export interface KubernetesNetworkConfigRequest {
  /**
   * Don't specify a value if you select `ipv6` for **ipFamily**. The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the `10.100.0.0/16` or `172.20.0.0/16` CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC. The block must meet the following requirements:
   *
   * - Within one of the following private IP address blocks: `10.0.0.0/8`, `172.16.0.0/12`, or `192.168.0.0/16`.
   * - Doesn't overlap with any CIDR block assigned to the VPC that you selected for VPC.
   * - Between `/24` and `/12`.
   *
   * > **Important:** You can only specify a custom CIDR block when you create a cluster. You can't change this value after the cluster is created.
   *
   * @public
   */
  serviceIpv4Cidr?: string | undefined;

  /**
   * Specify which IP family is used to assign Kubernetes pod and service IP addresses. If you don't specify a value, `ipv4` is used by default. You can only specify an IP family when you create a cluster and can't change this value once the cluster is created. If you specify `ipv6`, the VPC and subnets that you specify for cluster creation must have both `IPv4` and `IPv6` CIDR blocks assigned to them. You can't specify `ipv6` for clusters in China Regions.
   *
   * You can only specify `ipv6` for `1.21` and later clusters that use version `1.10.1` or later of the Amazon VPC CNI add-on. If you specify `ipv6`, then ensure that your VPC meets the requirements listed in the considerations listed in [Assigning IPv6 addresses to pods and services](https://docs.aws.amazon.com/eks/latest/userguide/cni-ipv6.html) in the *Amazon EKS User Guide*. Kubernetes assigns services `IPv6` addresses from the unique local address range `(fc00::/7)`. You can't specify a custom `IPv6` CIDR block. Pod addresses are assigned from the subnet's `IPv6` CIDR.
   *
   * @public
   */
  ipFamily?: IpFamily | undefined;

  /**
   * Request to enable or disable the load balancing capability on your EKS Auto Mode cluster. For more information, see EKS Auto Mode load balancing capability in the *Amazon EKS User Guide*.
   *
   * @public
   */
  elasticLoadBalancing?: ElasticLoadBalancing | undefined;
}

/**
 * A resource weight entry for the scheduler scoring strategy.
 *
 * @public
 */
export interface ResourceWeight {
  /**
   * The name of the resource (for example, `cpu` or `memory`).
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The weight assigned to the resource for scoring. Must be between 1 and 100.
   *
   * @public
   */
  weight?: number | undefined;
}

/**
 * The scoring strategy configuration for the NodeResourcesFit scheduler plugin.
 *
 * @public
 */
export interface ScoringStrategy {
  /**
   * The scoring strategy type. Valid values are `LeastAllocated` or `MostAllocated`.
   *
   * @public
   */
  type?: ScoringStrategyType | undefined;

  /**
   * The resource weights used for scoring nodes.
   *
   * @public
   */
  resources?: ResourceWeight[] | undefined;
}

/**
 * The NodeResourcesFit plugin configuration for the Kubernetes scheduler.
 *
 * @public
 */
export interface NodeResourcesFitConfig {
  /**
   * The scoring strategy used to rank nodes during scheduling.
   *
   * @public
   */
  scoringStrategy?: ScoringStrategy | undefined;
}

/**
 * The configuration for the Kubernetes scheduler on an Amazon EKS cluster.
 *
 * @public
 */
export interface KubeSchedulerConfigRequest {
  /**
   * The node resource fit scoring configuration for the scheduler.
   *
   * @public
   */
  nodeResourcesFit?: NodeResourcesFitConfig | undefined;
}

/**
 * An object representing the enabled or disabled Kubernetes control plane logs for your cluster.
 *
 * @public
 */
export interface LogSetup {
  /**
   * The available cluster control plane log types.
   *
   * @public
   */
  types?: LogType[] | undefined;

  /**
   * If a log type is enabled, that log type exports its control plane logs to CloudWatch Logs . If a log type isn't enabled, that log type doesn't export its control plane logs. Each individual log type can be enabled or disabled independently.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * An object representing the logging configuration for resources in your cluster.
 *
 * @public
 */
export interface Logging {
  /**
   * The cluster control plane logging configuration for your cluster.
   *
   * @public
   */
  clusterLogging?: LogSetup[] | undefined;
}

/**
 * The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface ControlPlanePlacementRequest {
  /**
   * The name of the placement group for the Kubernetes control plane instances. This setting can't be changed after cluster creation.
   *
   * @public
   */
  groupName?: string | undefined;

  /**
   * Optional parameter to specify the placement group spread level for control plane instances. If not provided, Amazon EKS will deploy control plane instances without a placement group.
   *
   * @public
   */
  spreadLevel?: SpreadLevel | undefined;
}

/**
 * The placement configuration for the etcd instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface EtcdPlacementRequest {
  /**
   * Optional parameter to specify the placement group spread level for etcd instances. If not provided, Amazon EKS will deploy etcd instances without a placement group.
   *
   * @public
   */
  spreadLevel?: SpreadLevel | undefined;
}

/**
 * The configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a cluster on an Outpost, review [Creating a local cluster on an Outpost](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html) in the *Amazon EKS User Guide*. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud.
 *
 * @public
 */
export interface OutpostConfigRequest {
  /**
   * The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts. Only a single Outpost ARN is supported.
   *
   * @public
   */
  outpostArns: string[] | undefined;

  /**
   * The Amazon EC2 instance type for the Kubernetes control plane instances of your local Amazon EKS cluster on Amazon Web Services Outposts. This instance type applies to all control plane instances and cannot be changed after cluster creation.
   *
   * For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  controlPlaneInstanceType: string | undefined;

  /**
   * An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  controlPlanePlacement?: ControlPlanePlacementRequest | undefined;

  /**
   * The Amazon EC2 instance type for etcd instances of your local Amazon EKS cluster on Amazon Web Services Outposts. This instance type applies to all etcd instances and cannot be changed after cluster creation.
   *
   * @public
   */
  etcdInstanceType?: string | undefined;

  /**
   * An object representing the placement configuration for the etcd instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  etcdPlacement?: EtcdPlacementRequest | undefined;
}

/**
 * A network CIDR that can contain hybrid nodes.
 *
 * These CIDR blocks define the expected IP address range of the hybrid nodes that join the cluster. These blocks are typically determined by your network administrator.
 *
 * Enter one or more IPv4 CIDR blocks in decimal dotted-quad notation (for example, `10.2.0.0/16`).
 *
 * It must satisfy the following requirements:
 *
 * - Each block must be within an `IPv4` RFC-1918 network range. Minimum allowed size is /32, maximum allowed size is /8. Publicly-routable addresses aren't supported.
 * - Each block cannot overlap with the range of the VPC CIDR blocks for your EKS resources, or the block of the Kubernetes service IP range.
 * - Each block must have a route to the VPC that uses the VPC CIDR blocks, not public IPs or Elastic IPs. There are many options including Transit Gateway, Site-to-Site VPN, or Direct Connect.
 * - Each host must allow outbound connection to the EKS cluster control plane on TCP ports `443` and `10250`.
 * - Each host must allow inbound connection from the EKS cluster control plane on TCP port 10250 for logs, exec and port-forward operations.
 * - Each host must allow TCP and UDP network connectivity to and from other hosts that are running `CoreDNS` on UDP port `53` for service and pod DNS names.
 *
 * @public
 */
export interface RemoteNodeNetwork {
  /**
   * A network CIDR that can contain hybrid nodes.
   *
   * These CIDR blocks define the expected IP address range of the hybrid nodes that join the cluster. These blocks are typically determined by your network administrator.
   *
   * Enter one or more IPv4 CIDR blocks in decimal dotted-quad notation (for example, `10.2.0.0/16`).
   *
   * It must satisfy the following requirements:
   *
   * - Each block must be within an `IPv4` RFC-1918 network range. Minimum allowed size is /32, maximum allowed size is /8. Publicly-routable addresses aren't supported.
   * - Each block cannot overlap with the range of the VPC CIDR blocks for your EKS resources, or the block of the Kubernetes service IP range.
   * - Each block must have a route to the VPC that uses the VPC CIDR blocks, not public IPs or Elastic IPs. There are many options including Transit Gateway, Site-to-Site VPN, or Direct Connect.
   * - Each host must allow outbound connection to the EKS cluster control plane on TCP ports `443` and `10250`.
   * - Each host must allow inbound connection from the EKS cluster control plane on TCP port 10250 for logs, exec and port-forward operations.
   * - Each host must allow TCP and UDP network connectivity to and from other hosts that are running `CoreDNS` on UDP port `53` for service and pod DNS names.
   *
   * @public
   */
  cidrs?: string[] | undefined;
}

/**
 * A network CIDR that can contain pods that run Kubernetes webhooks on hybrid nodes.
 *
 * These CIDR blocks are determined by configuring your Container Network Interface (CNI) plugin. We recommend the Calico CNI or Cilium CNI. Note that the Amazon VPC CNI plugin for Kubernetes isn't available for on-premises and edge locations.
 *
 * Enter one or more IPv4 CIDR blocks in decimal dotted-quad notation (for example, `10.2.0.0/16`).
 *
 * It must satisfy the following requirements:
 *
 * - Each block must be within an `IPv4` RFC-1918 network range. Minimum allowed size is /32, maximum allowed size is /8. Publicly-routable addresses aren't supported.
 * - Each block cannot overlap with the range of the VPC CIDR blocks for your EKS resources, or the block of the Kubernetes service IP range.
 *
 * @public
 */
export interface RemotePodNetwork {
  /**
   * A network CIDR that can contain pods that run Kubernetes webhooks on hybrid nodes.
   *
   * These CIDR blocks are determined by configuring your Container Network Interface (CNI) plugin. We recommend the Calico CNI or Cilium CNI. Note that the Amazon VPC CNI plugin for Kubernetes isn't available for on-premises and edge locations.
   *
   * Enter one or more IPv4 CIDR blocks in decimal dotted-quad notation (for example, `10.2.0.0/16`).
   *
   * It must satisfy the following requirements:
   *
   * - Each block must be within an `IPv4` RFC-1918 network range. Minimum allowed size is /32, maximum allowed size is /8. Publicly-routable addresses aren't supported.
   * - Each block cannot overlap with the range of the VPC CIDR blocks for your EKS resources, or the block of the Kubernetes service IP range.
   *
   * @public
   */
  cidrs?: string[] | undefined;
}

/**
 * The configuration in the cluster for EKS Hybrid Nodes. You can add, change, or remove this configuration after the cluster is created.
 *
 * @public
 */
export interface RemoteNetworkConfigRequest {
  /**
   * The list of network CIDRs that can contain hybrid nodes.
   *
   * These CIDR blocks define the expected IP address range of the hybrid nodes that join the cluster. These blocks are typically determined by your network administrator.
   *
   * Enter one or more IPv4 CIDR blocks in decimal dotted-quad notation (for example, `10.2.0.0/16`).
   *
   * It must satisfy the following requirements:
   *
   * - Each block must be within an `IPv4` RFC-1918 network range. Minimum allowed size is /32, maximum allowed size is /8. Publicly-routable addresses aren't supported.
   * - Each block cannot overlap with the range of the VPC CIDR blocks for your EKS resources, or the block of the Kubernetes service IP range.
   * - Each block must have a route to the VPC that uses the VPC CIDR blocks, not public IPs or Elastic IPs. There are many options including Transit Gateway, Site-to-Site VPN, or Direct Connect.
   * - Each host must allow outbound connection to the EKS cluster control plane on TCP ports `443` and `10250`.
   * - Each host must allow inbound connection from the EKS cluster control plane on TCP port 10250 for logs, exec and port-forward operations.
   * - Each host must allow TCP and UDP network connectivity to and from other hosts that are running `CoreDNS` on UDP port `53` for service and pod DNS names.
   *
   * @public
   */
  remoteNodeNetworks?: RemoteNodeNetwork[] | undefined;

  /**
   * The list of network CIDRs that can contain pods that run Kubernetes webhooks on hybrid nodes.
   *
   * These CIDR blocks are determined by configuring your Container Network Interface (CNI) plugin. We recommend the Calico CNI or Cilium CNI. Note that the Amazon VPC CNI plugin for Kubernetes isn't available for on-premises and edge locations.
   *
   * Enter one or more IPv4 CIDR blocks in decimal dotted-quad notation (for example, `10.2.0.0/16`).
   *
   * It must satisfy the following requirements:
   *
   * - Each block must be within an `IPv4` RFC-1918 network range. Minimum allowed size is /32, maximum allowed size is /8. Publicly-routable addresses aren't supported.
   * - Each block cannot overlap with the range of the VPC CIDR blocks for your EKS resources, or the block of the Kubernetes service IP range.
   *
   * @public
   */
  remotePodNetworks?: RemotePodNetwork[] | undefined;
}

/**
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
 *
 * @public
 */
export interface VpcConfigRequest {
  /**
   * Specify subnets for your Amazon EKS nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use that allow communication between your nodes and the Kubernetes control plane. If you don't specify any security groups, then familiarize yourself with the difference between Amazon EKS defaults for clusters deployed with Kubernetes. For more information, see [Amazon EKS security group considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the **Amazon EKS User Guide** .
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * Set this value to `false` to disable public access to your cluster's Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is `true`, which enables public access for your Kubernetes API server. The endpoint domain name and IP address family depends on the value of the `ipFamily` for the cluster. For more information, see [Cluster API server endpoint](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the **Amazon EKS User Guide** .
   *
   * @public
   */
  endpointPublicAccess?: boolean | undefined;

  /**
   * Set this value to `true` to enable private access for your cluster's Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is `false`, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or Fargate pods in the cluster, then ensure that `publicAccessCidrs` includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see [Cluster API server endpoint](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the **Amazon EKS User Guide** .
   *
   * @public
   */
  endpointPrivateAccess?: boolean | undefined;

  /**
   * The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is `0.0.0.0/0` and additionally `::/0` for dual-stack `IPv6` clusters. If you've disabled private endpoint access, make sure that you specify the necessary CIDR blocks for every node and Fargate `Pod` in the cluster. For more information, see [Cluster API server endpoint](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the **Amazon EKS User Guide** .
   *
   * Note that the public endpoints are dual-stack for only `IPv6` clusters that are made after October 2024. You can't add `IPv6` CIDR blocks to `IPv4` clusters or `IPv6` clusters that were made before October 2024.
   *
   * @public
   */
  publicAccessCidrs?: string[] | undefined;

  /**
   * Specifies the control plane egress routing mode for the cluster. If the cluster is set to `AWS_MANAGED`, Amazon EKS manages the egress path from the control plane and you don't need to configure NAT gateways or other routing infrastructure for control plane traffic. If the cluster is set to `CUSTOMER_ROUTED`, you manage the egress path from the control plane in your VPC subnets. You are responsible for ensuring that the control plane can reach required endpoints such as webhook servers and OIDC providers. The default value is `AWS_MANAGED`. Once set to `CUSTOMER_ROUTED`, this setting cannot be changed back to `AWS_MANAGED` on the same cluster.
   *
   * [Learn more about control plane egress routing in the *Amazon EKS User Guide*.](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-egress.html)
   *
   * @public
   */
  controlPlaneEgressMode?: ControlPlaneEgressModeType | undefined;
}

/**
 * Indicates the current configuration of the block storage capability on your EKS Auto Mode cluster. For example, if the capability is enabled or disabled. If the block storage capability is enabled, EKS Auto Mode will create and delete EBS volumes in your Amazon Web Services account. For more information, see EKS Auto Mode block storage capability in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface BlockStorage {
  /**
   * Indicates if the block storage capability is enabled on your EKS Auto Mode cluster. If the block storage capability is enabled, EKS Auto Mode will create and delete EBS volumes in your Amazon Web Services account.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * Request to update the configuration of the storage capability of your EKS Auto Mode cluster. For example, enable the capability. For more information, see EKS Auto Mode block storage capability in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface StorageConfigRequest {
  /**
   * Request to configure EBS Block Storage settings for your EKS Auto Mode cluster.
   *
   * @public
   */
  blockStorage?: BlockStorage | undefined;
}

/**
 * The support policy to use for the cluster. Extended support allows you to remain on specific Kubernetes versions for longer. Clusters in extended support have higher costs. The default value is `EXTENDED`. Use `STANDARD` to disable extended support.
 *
 * [Learn more about EKS Extended Support in the *Amazon EKS User Guide*.](https://docs.aws.amazon.com/eks/latest/userguide/extended-support-control.html)
 *
 * @public
 */
export interface UpgradePolicyRequest {
  /**
   * If the cluster is set to `EXTENDED`, it will enter extended support at the end of standard support. If the cluster is set to `STANDARD`, it will be automatically upgraded at the end of standard support.
   *
   * [Learn more about EKS Extended Support in the *Amazon EKS User Guide*.](https://docs.aws.amazon.com/eks/latest/userguide/extended-support-control.html)
   *
   * @public
   */
  supportType?: SupportType | undefined;
}

/**
 * The configuration for zonal shift for the cluster.
 *
 * @public
 */
export interface ZonalShiftConfigRequest {
  /**
   * If zonal shift is enabled, Amazon Web Services configures zonal autoshift for the cluster.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateClusterRequest {
  /**
   * The unique name to give to your cluster. The name can contain only alphanumeric characters (case-sensitive), hyphens, and underscores. It must start with an alphanumeric character and can't be longer than 100 characters. The name must be unique within the Amazon Web Services Region and Amazon Web Services account that you're creating the cluster in.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The desired Kubernetes version for your cluster. If you don't specify a value here, the default version available in Amazon EKS is used.
   *
   * > **Note:** The default version might not be the latest version available.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf. For more information, see [Amazon EKS Service IAM Role](https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html) in the **Amazon EKS User Guide** .
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The VPC configuration that's used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see [Cluster VPC Considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and [Cluster Security Group Considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the *Amazon EKS User Guide*. You must specify at least two subnets. You can specify up to five security groups. However, we recommend that you use a dedicated security group for your cluster control plane.
   *
   * @public
   */
  resourcesVpcConfig: VpcConfigRequest | undefined;

  /**
   * The Kubernetes network configuration for the cluster.
   *
   * @public
   */
  kubernetesNetworkConfig?: KubernetesNetworkConfigRequest | undefined;

  /**
   * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs . By default, cluster control plane logs aren't exported to CloudWatch Logs . For more information, see [Amazon EKS Cluster control plane logs](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html) in the **Amazon EKS User Guide** .
   *
   * > **Note:** CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see [CloudWatch Pricing](http://aws.amazon.com/cloudwatch/pricing/).
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The encryption configuration for the cluster.
   *
   * @public
   */
  encryptionConfig?: EncryptionConfig[] | undefined;

  /**
   * An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. Before creating a local cluster on an Outpost, review [Local clusters for Amazon EKS on Amazon Web Services Outposts](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-overview.html) in the *Amazon EKS User Guide*. This object isn't available for creating Amazon EKS clusters on the Amazon Web Services cloud.
   *
   * @public
   */
  outpostConfig?: OutpostConfigRequest | undefined;

  /**
   * The access configuration for the cluster.
   *
   * @public
   */
  accessConfig?: CreateAccessConfigRequest | undefined;

  /**
   * If you set this value to `False` when creating a cluster, the default networking add-ons will not be installed.
   *
   * The default networking add-ons include `vpc-cni`, `coredns`, and `kube-proxy`.
   *
   * Use this option when you plan to install third-party alternative add-ons or self-manage the default networking add-ons.
   *
   * @public
   */
  bootstrapSelfManagedAddons?: boolean | undefined;

  /**
   * New clusters, by default, have extended support enabled. You can disable extended support when creating a cluster by setting this value to `STANDARD`.
   *
   * @public
   */
  upgradePolicy?: UpgradePolicyRequest | undefined;

  /**
   * Enable or disable ARC zonal shift for the cluster. If zonal shift is enabled, Amazon Web Services configures zonal autoshift for the cluster.
   *
   * Zonal shift is a feature of Amazon Application Recovery Controller (ARC). ARC zonal shift is designed to be a temporary measure that allows you to move traffic for a resource away from an impaired AZ until the zonal shift expires or you cancel it. You can extend the zonal shift if necessary.
   *
   * You can start a zonal shift for an Amazon EKS cluster, or you can allow Amazon Web Services to do it for you by enabling *zonal autoshift*. This shift updates the flow of east-to-west network traffic in your cluster to only consider network endpoints for Pods running on worker nodes in healthy AZs. Additionally, any ALB or NLB handling ingress traffic for applications in your Amazon EKS cluster will automatically route traffic to targets in the healthy AZs. For more information about zonal shift in EKS, see [Learn about Amazon Application Recovery Controller (ARC) Zonal Shift in Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/zone-shift.html) in the **Amazon EKS User Guide** .
   *
   * @public
   */
  zonalShiftConfig?: ZonalShiftConfigRequest | undefined;

  /**
   * The configuration in the cluster for EKS Hybrid Nodes. You can add, change, or remove this configuration after the cluster is created.
   *
   * @public
   */
  remoteNetworkConfig?: RemoteNetworkConfigRequest | undefined;

  /**
   * Enable or disable the compute capability of EKS Auto Mode when creating your EKS Auto Mode cluster. If the compute capability is enabled, EKS Auto Mode will create and delete EC2 Managed Instances in your Amazon Web Services account
   *
   * @public
   */
  computeConfig?: ComputeConfigRequest | undefined;

  /**
   * Enable or disable the block storage capability of EKS Auto Mode when creating your EKS Auto Mode cluster. If the block storage capability is enabled, EKS Auto Mode will create and delete EBS volumes in your Amazon Web Services account.
   *
   * @public
   */
  storageConfig?: StorageConfigRequest | undefined;

  /**
   * Indicates whether to enable deletion protection for the cluster. When enabled, the cluster cannot be deleted unless deletion protection is first disabled. This helps prevent accidental cluster deletion. Default value is `false`.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The control plane scaling tier configuration. For more information, see EKS Provisioned Control Plane in the Amazon EKS User Guide.
   *
   * @public
   */
  controlPlaneScalingConfig?: ControlPlaneScalingConfig | undefined;

  /**
   * The Kubernetes API server configuration for the new cluster.
   *
   * @public
   */
  kubeApiServerConfig?: KubeApiServerConfigRequest | undefined;

  /**
   * The Kubernetes scheduler configuration for the new cluster.
   *
   * @public
   */
  kubeSchedulerConfig?: KubeSchedulerConfigRequest | undefined;

  /**
   * The Kubernetes controller manager configuration for the new cluster.
   *
   * @public
   */
  kubeControllerManagerConfig?: KubeControllerManagerConfigRequest | undefined;
}

/**
 * An object representing the `certificate-authority-data` for your cluster.
 *
 * @public
 */
export interface Certificate {
  /**
   * The Base64-encoded certificate data required to communicate with your cluster. Add this to the `certificate-authority-data` section of the `kubeconfig` file for your cluster.
   *
   * @public
   */
  data?: string | undefined;

  /**
   * An object identifying the certificate authority that is currently signing certificates for the cluster.
   *
   * @public
   */
  active?: ActiveCertificateAuthority | undefined;
}

/**
 * Indicates the status of the request to update the compute capability of your EKS Auto Mode cluster.
 *
 * @public
 */
export interface ComputeConfigResponse {
  /**
   * Indicates if the compute capability is enabled on your EKS Auto Mode cluster. If the compute capability is enabled, EKS Auto Mode will create and delete EC2 Managed Instances in your Amazon Web Services account.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * Indicates the current configuration of node pools in your EKS Auto Mode cluster. For more information, see EKS Auto Mode Node Pools in the *Amazon EKS User Guide*.
   *
   * @public
   */
  nodePools?: string[] | undefined;

  /**
   * The ARN of the IAM Role EKS will assign to EC2 Managed Instances in your EKS Auto Mode cluster.
   *
   * @public
   */
  nodeRoleArn?: string | undefined;
}

/**
 * The full description of your connected cluster.
 *
 * @public
 */
export interface ConnectorConfigResponse {
  /**
   * A unique ID associated with the cluster for registration purposes.
   *
   * @public
   */
  activationId?: string | undefined;

  /**
   * A unique code associated with the cluster for registration purposes.
   *
   * @public
   */
  activationCode?: string | undefined;

  /**
   * The expiration time of the connected cluster. The cluster's YAML file must be applied through the native provider.
   *
   * @public
   */
  activationExpiry?: Date | undefined;

  /**
   * The cluster's cloud service provider.
   *
   * @public
   */
  provider?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role to communicate with services from the connected Kubernetes cluster.
   *
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * An issue with your Amazon EKS cluster.
 *
 * @public
 */
export interface ClusterIssue {
  /**
   * The error code of the issue.
   *
   * @public
   */
  code?: ClusterIssueCode | undefined;

  /**
   * A description of the issue.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The resource IDs that the issue relates to.
   *
   * @public
   */
  resourceIds?: string[] | undefined;
}

/**
 * An object representing the health of your Amazon EKS cluster.
 *
 * @public
 */
export interface ClusterHealth {
  /**
   * An object representing the health issues of your Amazon EKS cluster.
   *
   * @public
   */
  issues?: ClusterIssue[] | undefined;
}

/**
 * An object representing the [OpenID Connect](https://openid.net/connect/) (OIDC) identity provider information for the cluster.
 *
 * @public
 */
export interface OIDC {
  /**
   * The issuer URL for the OIDC identity provider.
   *
   * @public
   */
  issuer?: string | undefined;
}

/**
 * An object representing an identity provider.
 *
 * @public
 */
export interface Identity {
  /**
   * An object representing the [OpenID Connect](https://openid.net/connect/) identity provider information.
   *
   * @public
   */
  oidc?: OIDC | undefined;
}

/**
 * The Kubernetes API server configuration for an Amazon EKS cluster.
 *
 * @public
 */
export interface KubeApiServerConfigResponse {
  /**
   * The duration that Kubernetes events are retained.
   *
   * @public
   */
  eventTtl?: string | undefined;

  /**
   * The port range for NodePort services.
   *
   * @public
   */
  serviceNodePortRange?: ServiceNodePortRange | undefined;
}

/**
 * The horizontal pod autoscaler controller configuration for the Kubernetes controller manager.
 *
 * @public
 */
export interface HorizontalPodAutoscalerControllerConfigResponse {
  /**
   * The interval between each sync of the horizontal pod autoscaler.
   *
   * @public
   */
  horizontalPodAutoscalerSyncPeriod?: string | undefined;
}

/**
 * The pod garbage collection controller configuration for the Kubernetes controller manager.
 *
 * @public
 */
export interface PodGcControllerConfigResponse {
  /**
   * The number of terminated pods that can exist before the garbage collector starts deleting them.
   *
   * @public
   */
  terminatedPodGcThreshold?: number | undefined;
}

/**
 * The Kubernetes controller manager configuration for an Amazon EKS cluster.
 *
 * @public
 */
export interface KubeControllerManagerConfigResponse {
  /**
   * The pod garbage collection controller configuration.
   *
   * @public
   */
  podGcControllerConfig?: PodGcControllerConfigResponse | undefined;

  /**
   * The horizontal pod autoscaler controller configuration.
   *
   * @public
   */
  horizontalPodAutoscalerControllerConfig?: HorizontalPodAutoscalerControllerConfigResponse | undefined;
}

/**
 * The Kubernetes network configuration for the cluster. The response contains a value for **serviceIpv6Cidr** or **serviceIpv4Cidr**, but not both.
 *
 * @public
 */
export interface KubernetesNetworkConfigResponse {
  /**
   * The CIDR block that Kubernetes `Pod` and `Service` object IP addresses are assigned from. Kubernetes assigns addresses from an `IPv4` CIDR block assigned to a subnet that the node is in. If you didn't specify a CIDR block when you created the cluster, then Kubernetes assigns addresses from either the `10.100.0.0/16` or `172.20.0.0/16` CIDR blocks. If this was specified, then it was specified when the cluster was created and it can't be changed.
   *
   * @public
   */
  serviceIpv4Cidr?: string | undefined;

  /**
   * The CIDR block that Kubernetes pod and service IP addresses are assigned from if you created a 1.21 or later cluster with version 1.10.1 or later of the Amazon VPC CNI add-on and specified `ipv6` for **ipFamily** when you created the cluster. Kubernetes assigns service addresses from the unique local address range (`fc00::/7`) because you can't specify a custom IPv6 CIDR block when you create the cluster.
   *
   * @public
   */
  serviceIpv6Cidr?: string | undefined;

  /**
   * The IP family used to assign Kubernetes `Pod` and `Service` objects IP addresses. The IP family is always `ipv4`, unless you have a `1.21` or later cluster running version `1.10.1` or later of the Amazon VPC CNI plugin for Kubernetes and specified `ipv6` when you created the cluster.
   *
   * @public
   */
  ipFamily?: IpFamily | undefined;

  /**
   * Indicates the current configuration of the load balancing capability on your EKS Auto Mode cluster. For example, if the capability is enabled or disabled.
   *
   * @public
   */
  elasticLoadBalancing?: ElasticLoadBalancing | undefined;
}

/**
 * The Kubernetes scheduler configuration for an Amazon EKS cluster.
 *
 * @public
 */
export interface KubeSchedulerConfigResponse {
  /**
   * The node resource fit scoring configuration for the scheduler.
   *
   * @public
   */
  nodeResourcesFit?: NodeResourcesFitConfig | undefined;
}

/**
 * The placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface ControlPlanePlacementResponse {
  /**
   * The name of the placement group for the Kubernetes control plane instances.
   *
   * @public
   */
  groupName?: string | undefined;

  /**
   * The spread level used with the placement group for control plane instances on your local Amazon EKS cluster on Amazon Web Services Outposts.
   *
   * @public
   */
  spreadLevel?: SpreadLevel | undefined;
}

/**
 * The placement configuration for the etcd instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface EtcdPlacementResponse {
  /**
   * The spread level used with the placement group for etcd instances on your local Amazon EKS cluster on Amazon Web Services Outposts.
   *
   * @public
   */
  spreadLevel?: SpreadLevel | undefined;
}

/**
 * An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. This API isn't available for Amazon EKS clusters on the Amazon Web Services cloud.
 *
 * @public
 */
export interface OutpostConfigResponse {
  /**
   * The ARN of the Outpost that you specified for use with your local Amazon EKS cluster on Outposts.
   *
   * @public
   */
  outpostArns: string[] | undefined;

  /**
   * The Amazon EC2 instance type for the Kubernetes control plane instances of your local Amazon EKS cluster on Amazon Web Services Outposts. The instance type is the same for all control plane instances.
   *
   * @public
   */
  controlPlaneInstanceType: string | undefined;

  /**
   * An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  controlPlanePlacement?: ControlPlanePlacementResponse | undefined;

  /**
   * The Amazon EC2 instance type for etcd instances of your local Amazon EKS cluster on Amazon Web Services Outposts. The instance type is the same for all etcd instances.
   *
   * @public
   */
  etcdInstanceType?: string | undefined;

  /**
   * An object representing the placement configuration for the etcd instances of your local Amazon EKS cluster on an Amazon Web Services Outpost. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  etcdPlacement?: EtcdPlacementResponse | undefined;
}

/**
 * The configuration in the cluster for EKS Hybrid Nodes. You can add, change, or remove this configuration after the cluster is created.
 *
 * @public
 */
export interface RemoteNetworkConfigResponse {
  /**
   * The list of network CIDRs that can contain hybrid nodes.
   *
   * @public
   */
  remoteNodeNetworks?: RemoteNodeNetwork[] | undefined;

  /**
   * The list of network CIDRs that can contain pods that run Kubernetes webhooks on hybrid nodes.
   *
   * @public
   */
  remotePodNetworks?: RemotePodNetwork[] | undefined;
}

/**
 * An object representing an Amazon EKS cluster VPC configuration response.
 *
 * @public
 */
export interface VpcConfigResponse {
  /**
   * The subnets associated with your cluster.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The security groups associated with the cross-account elastic network interfaces that are used to allow communication between your nodes and the Kubernetes control plane.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The cluster security group that was created by Amazon EKS for the cluster. Managed node groups use this security group for control-plane-to-data-plane communication.
   *
   * @public
   */
  clusterSecurityGroupId?: string | undefined;

  /**
   * The VPC associated with your cluster.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * Whether the public API server endpoint is enabled.
   *
   * @public
   */
  endpointPublicAccess?: boolean | undefined;

  /**
   * This parameter indicates whether the Amazon EKS private API server endpoint is enabled. If the Amazon EKS private API server endpoint is enabled, Kubernetes API requests that originate from within your cluster's VPC use the private VPC endpoint instead of traversing the internet. If this value is disabled and you have nodes or Fargate pods in the cluster, then ensure that `publicAccessCidrs` includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see [Cluster API server endpoint](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the **Amazon EKS User Guide** .
   *
   * @public
   */
  endpointPrivateAccess?: boolean | undefined;

  /**
   * The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is `0.0.0.0/0` and additionally `::/0` for dual-stack `IPv6` clusters. If you've disabled private endpoint access, make sure that you specify the necessary CIDR blocks for every node and Fargate `Pod` in the cluster. For more information, see [Cluster API server endpoint](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the **Amazon EKS User Guide** .
   *
   * Note that the public endpoints are dual-stack for only `IPv6` clusters that are made after October 2024. You can't add `IPv6` CIDR blocks to `IPv4` clusters or `IPv6` clusters that were made before October 2024.
   *
   * @public
   */
  publicAccessCidrs?: string[] | undefined;

  /**
   * The current control plane egress routing mode for the cluster. If the cluster is set to `AWS_MANAGED`, Amazon EKS manages the egress path from the control plane. If the cluster is set to `CUSTOMER_ROUTED`, you manage the egress path from the control plane in your VPC subnets.
   *
   * [Learn more about control plane egress routing in the *Amazon EKS User Guide*.](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-egress.html)
   *
   * @public
   */
  controlPlaneEgressMode?: ControlPlaneEgressModeType | undefined;
}

/**
 * Indicates the status of the request to update the block storage capability of your EKS Auto Mode cluster.
 *
 * @public
 */
export interface StorageConfigResponse {
  /**
   * Indicates the current configuration of the block storage capability on your EKS Auto Mode cluster. For example, if the capability is enabled or disabled.
   *
   * @public
   */
  blockStorage?: BlockStorage | undefined;
}

/**
 * This value indicates if extended support is enabled or disabled for the cluster.
 *
 * [Learn more about EKS Extended Support in the *Amazon EKS User Guide*.](https://docs.aws.amazon.com/eks/latest/userguide/extended-support-control.html)
 *
 * @public
 */
export interface UpgradePolicyResponse {
  /**
   * If the cluster is set to `EXTENDED`, it will enter extended support at the end of standard support. If the cluster is set to `STANDARD`, it will be automatically upgraded at the end of standard support.
   *
   * [Learn more about EKS Extended Support in the *Amazon EKS User Guide*.](https://docs.aws.amazon.com/eks/latest/userguide/extended-support-control.html)
   *
   * @public
   */
  supportType?: SupportType | undefined;
}

/**
 * The status of zonal shift configuration for the cluster
 *
 * @public
 */
export interface ZonalShiftConfigResponse {
  /**
   * Whether the zonal shift is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;
}

/**
 * An object representing an Amazon EKS cluster.
 *
 * @public
 */
export interface Cluster {
  /**
   * The name of your cluster.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The Unix epoch timestamp at object creation.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Kubernetes server version for the cluster.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The endpoint for your Kubernetes API server.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to Amazon Web Services API operations on your behalf.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The VPC configuration used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see [Cluster VPC considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and [Cluster security group considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  resourcesVpcConfig?: VpcConfigResponse | undefined;

  /**
   * The Kubernetes network configuration for the cluster.
   *
   * @public
   */
  kubernetesNetworkConfig?: KubernetesNetworkConfigResponse | undefined;

  /**
   * The logging configuration for your cluster.
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * The identity provider information for the cluster.
   *
   * @public
   */
  identity?: Identity | undefined;

  /**
   * The current status of the cluster.
   *
   * @public
   */
  status?: ClusterStatus | undefined;

  /**
   * The `certificate-authority-data` for your cluster.
   *
   * @public
   */
  certificateAuthority?: Certificate | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The platform version of your Amazon EKS cluster. For more information about clusters deployed on the Amazon Web Services Cloud, see [Platform versions](https://docs.aws.amazon.com/eks/latest/userguide/platform-versions.html) in the **Amazon EKS User Guide** . For more information about local clusters deployed on an Outpost, see [Amazon EKS local cluster platform versions](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-platform-versions.html) in the **Amazon EKS User Guide** .
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The encryption configuration for the cluster.
   *
   * @public
   */
  encryptionConfig?: EncryptionConfig[] | undefined;

  /**
   * The configuration used to connect to a cluster for registration.
   *
   * @public
   */
  connectorConfig?: ConnectorConfigResponse | undefined;

  /**
   * The ID of your local Amazon EKS cluster on an Amazon Web Services Outpost. This property isn't available for an Amazon EKS cluster on the Amazon Web Services cloud.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * An object representing the health of your Amazon EKS cluster.
   *
   * @public
   */
  health?: ClusterHealth | undefined;

  /**
   * An object representing the configuration of your local Amazon EKS cluster on an Amazon Web Services Outpost. This object isn't available for clusters on the Amazon Web Services cloud.
   *
   * @public
   */
  outpostConfig?: OutpostConfigResponse | undefined;

  /**
   * The access configuration for the cluster.
   *
   * @public
   */
  accessConfig?: AccessConfigResponse | undefined;

  /**
   * This value indicates if extended support is enabled or disabled for the cluster.
   *
   * [Learn more about EKS Extended Support in the *Amazon EKS User Guide*.](https://docs.aws.amazon.com/eks/latest/userguide/extended-support-control.html)
   *
   * @public
   */
  upgradePolicy?: UpgradePolicyResponse | undefined;

  /**
   * The configuration for zonal shift for the cluster.
   *
   * @public
   */
  zonalShiftConfig?: ZonalShiftConfigResponse | undefined;

  /**
   * The configuration in the cluster for EKS Hybrid Nodes. You can add, change, or remove this configuration after the cluster is created.
   *
   * @public
   */
  remoteNetworkConfig?: RemoteNetworkConfigResponse | undefined;

  /**
   * Indicates the current configuration of the compute capability on your EKS Auto Mode cluster. For example, if the capability is enabled or disabled. If the compute capability is enabled, EKS Auto Mode will create and delete EC2 Managed Instances in your Amazon Web Services account. For more information, see EKS Auto Mode compute capability in the *Amazon EKS User Guide*.
   *
   * @public
   */
  computeConfig?: ComputeConfigResponse | undefined;

  /**
   * Indicates the current configuration of the block storage capability on your EKS Auto Mode cluster. For example, if the capability is enabled or disabled. If the block storage capability is enabled, EKS Auto Mode will create and delete EBS volumes in your Amazon Web Services account. For more information, see EKS Auto Mode block storage capability in the *Amazon EKS User Guide*.
   *
   * @public
   */
  storageConfig?: StorageConfigResponse | undefined;

  /**
   * The current deletion protection setting for the cluster. When `true`, deletion protection is enabled and the cluster cannot be deleted until protection is disabled. When `false`, the cluster can be deleted normally. This setting only applies to clusters in an active state.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The control plane scaling tier configuration. For more information, see EKS Provisioned Control Plane in the Amazon EKS User Guide.
   *
   * @public
   */
  controlPlaneScalingConfig?: ControlPlaneScalingConfig | undefined;

  /**
   * The Kubernetes API server configuration for the cluster.
   *
   * @public
   */
  kubeApiServerConfig?: KubeApiServerConfigResponse | undefined;

  /**
   * The Kubernetes scheduler configuration for the cluster.
   *
   * @public
   */
  kubeSchedulerConfig?: KubeSchedulerConfigResponse | undefined;

  /**
   * The Kubernetes controller manager configuration for the cluster.
   *
   * @public
   */
  kubeControllerManagerConfig?: KubeControllerManagerConfigResponse | undefined;
}

/**
 * @public
 */
export interface CreateClusterResponse {
  /**
   * The full description of your new cluster.
   *
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * An object representing the term duration and term unit type of your subscription. This determines the term length of your subscription. Valid values are MONTHS for term unit and 12 or 36 for term duration, indicating a 12 month or 36 month subscription.
 *
 * @public
 */
export interface EksAnywhereSubscriptionTerm {
  /**
   * The duration of the subscription term. Valid values are 12 and 36, indicating a 12 month or 36 month subscription.
   *
   * @public
   */
  duration?: number | undefined;

  /**
   * The term unit of the subscription. Valid value is `MONTHS`.
   *
   * @public
   */
  unit?: EksAnywhereSubscriptionTermUnit | undefined;
}

/**
 * @public
 */
export interface CreateEksAnywhereSubscriptionRequest {
  /**
   * The unique name for your subscription. It must be unique in your Amazon Web Services account in the Amazon Web Services Region you're creating the subscription in. The name can contain only alphanumeric characters (case-sensitive), hyphens, and underscores. It must start with an alphabetic character and can't be longer than 100 characters.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An object representing the term duration and term unit type of your subscription. This determines the term length of your subscription. Valid values are MONTHS for term unit and 12 or 36 for term duration, indicating a 12 month or 36 month subscription. This value cannot be changed after creating the subscription.
   *
   * @public
   */
  term: EksAnywhereSubscriptionTerm | undefined;

  /**
   * The number of licenses to purchase with the subscription. Valid values are between 1 and 100. This value can't be changed after creating the subscription.
   *
   * @public
   */
  licenseQuantity?: number | undefined;

  /**
   * The license type for all licenses in the subscription. Valid value is CLUSTER. With the CLUSTER license type, each license covers support for a single EKS Anywhere cluster.
   *
   * @public
   */
  licenseType?: EksAnywhereSubscriptionLicenseType | undefined;

  /**
   * A boolean indicating whether the subscription auto renews at the end of the term.
   *
   * @public
   */
  autoRenew?: boolean | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The metadata for a subscription to assist with categorization and organization. Each tag consists of a key and an optional value. Subscription tags don't propagate to any other resources associated with the subscription.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * An EKS Anywhere license associated with a subscription.
 *
 * @public
 */
export interface License {
  /**
   * An id associated with an EKS Anywhere subscription license.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * An optional license token that can be used for extended support verification.
   *
   * @public
   */
  token?: string | undefined;
}

/**
 * An EKS Anywhere subscription authorizing the customer to support for licensed clusters and access to EKS Anywhere Curated Packages.
 *
 * @public
 */
export interface EksAnywhereSubscription {
  /**
   * UUID identifying a subscription.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the subscription.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The Unix timestamp in seconds for when the subscription was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix timestamp in seconds for when the subscription is effective.
   *
   * @public
   */
  effectiveDate?: Date | undefined;

  /**
   * The Unix timestamp in seconds for when the subscription will expire or auto renew, depending on the auto renew configuration of the subscription object.
   *
   * @public
   */
  expirationDate?: Date | undefined;

  /**
   * The number of licenses included in a subscription. Valid values are between 1 and 100.
   *
   * @public
   */
  licenseQuantity?: number | undefined;

  /**
   * The type of licenses included in the subscription. Valid value is CLUSTER. With the CLUSTER license type, each license covers support for a single EKS Anywhere cluster.
   *
   * @public
   */
  licenseType?: EksAnywhereSubscriptionLicenseType | undefined;

  /**
   * An EksAnywhereSubscriptionTerm object.
   *
   * @public
   */
  term?: EksAnywhereSubscriptionTerm | undefined;

  /**
   * The status of a subscription.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * A boolean indicating whether or not a subscription will auto renew when it expires.
   *
   * @public
   */
  autoRenew?: boolean | undefined;

  /**
   * Amazon Web Services License Manager ARN associated with the subscription.
   *
   * @public
   */
  licenseArns?: string[] | undefined;

  /**
   * Includes all of the claims in the license token necessary to validate the license for extended support.
   *
   * @public
   */
  licenses?: License[] | undefined;

  /**
   * The metadata for a subscription to assist with categorization and organization. Each tag consists of a key and an optional value. Subscription tags do not propagate to any other resources associated with the subscription.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateEksAnywhereSubscriptionResponse {
  /**
   * The full description of the subscription.
   *
   * @public
   */
  subscription?: EksAnywhereSubscription | undefined;
}

/**
 * An object representing an Fargate profile selector.
 *
 * @public
 */
export interface FargateProfileSelector {
  /**
   * The Kubernetes `namespace` that the selector should match.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The Kubernetes labels that the selector should match. A pod must contain all of the labels that are specified in the selector for it to be considered a match.
   *
   * @public
   */
  labels?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFargateProfileRequest {
  /**
   * The name of the Fargate profile.
   *
   * @public
   */
  fargateProfileName: string | undefined;

  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the `Pod` execution role to use for a `Pod` that matches the selectors in the Fargate profile. The `Pod` execution role allows Fargate infrastructure to register with your cluster as a node, and it provides read access to Amazon ECR image repositories. For more information, see [`Pod` execution role](https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  podExecutionRoleArn: string | undefined;

  /**
   * The IDs of subnets to launch a `Pod` into. A `Pod` running on Fargate isn't assigned a public IP address, so only private subnets (with no direct route to an Internet Gateway) are accepted for this parameter.
   *
   * @public
   */
  subnets?: string[] | undefined;

  /**
   * The selectors to match for a `Pod` to use this Fargate profile. Each selector must have an associated Kubernetes `namespace`. Optionally, you can also specify `labels` for a `namespace`. You may specify up to five selectors in a Fargate profile.
   *
   * @public
   */
  selectors?: FargateProfileSelector[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * An issue that is associated with the Fargate profile.
 *
 * @public
 */
export interface FargateProfileIssue {
  /**
   * A brief description of the error.
   *
   * @public
   */
  code?: FargateProfileIssueCode | undefined;

  /**
   * The error message associated with the issue.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The Amazon Web Services resources that are affected by this issue.
   *
   * @public
   */
  resourceIds?: string[] | undefined;
}

/**
 * The health status of the Fargate profile. If there are issues with your Fargate profile's health, they are listed here.
 *
 * @public
 */
export interface FargateProfileHealth {
  /**
   * Any issues that are associated with the Fargate profile.
   *
   * @public
   */
  issues?: FargateProfileIssue[] | undefined;
}

/**
 * An object representing an Fargate profile.
 *
 * @public
 */
export interface FargateProfile {
  /**
   * The name of the Fargate profile.
   *
   * @public
   */
  fargateProfileName?: string | undefined;

  /**
   * The full Amazon Resource Name (ARN) of the Fargate profile.
   *
   * @public
   */
  fargateProfileArn?: string | undefined;

  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The Unix epoch timestamp at object creation.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the `Pod` execution role to use for any `Pod` that matches the selectors in the Fargate profile. For more information, see [`Pod` execution role](https://docs.aws.amazon.com/eks/latest/userguide/pod-execution-role.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  podExecutionRoleArn?: string | undefined;

  /**
   * The IDs of subnets to launch a `Pod` into.
   *
   * @public
   */
  subnets?: string[] | undefined;

  /**
   * The selectors to match for a `Pod` to use this Fargate profile.
   *
   * @public
   */
  selectors?: FargateProfileSelector[] | undefined;

  /**
   * The current status of the Fargate profile.
   *
   * @public
   */
  status?: FargateProfileStatus | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The health status of the Fargate profile. If there are issues with your Fargate profile's health, they are listed here.
   *
   * @public
   */
  health?: FargateProfileHealth | undefined;
}

/**
 * @public
 */
export interface CreateFargateProfileResponse {
  /**
   * The full description of your new Fargate profile.
   *
   * @public
   */
  fargateProfile?: FargateProfile | undefined;
}

/**
 * An object representing a node group launch template specification. The launch template can't include [`SubnetId`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateNetworkInterface.html), [`IamInstanceProfile`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_IamInstanceProfile.html), [`RequestSpotInstances`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RequestSpotInstances.html), [`HibernationOptions`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_HibernationOptionsRequest.html), or [`TerminateInstances`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_TerminateInstances.html), or the node group deployment or update will fail. For more information about launch templates, see [`CreateLaunchTemplate`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html) in the Amazon EC2 API Reference. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide*.
 *
 * You must specify either the launch template ID or the launch template name in the request, but not both.
 *
 * @public
 */
export interface LaunchTemplateSpecification {
  /**
   * The name of the launch template.
   *
   * You must specify either the launch template name or the launch template ID in the request, but not both. After node group creation, you cannot use a different name.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version number of the launch template to use. If no version is specified, then the template's default version is used. You can use a different version for node group updates.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The ID of the launch template.
   *
   * You must specify either the launch template ID or the launch template name in the request, but not both. After node group creation, you cannot use a different ID.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * Specify granular overrides for specific repair actions. These overrides control the repair action and the repair delay time before a node is considered eligible for repair. If you use this, you must specify all the values.
 *
 * @public
 */
export interface NodeRepairConfigOverrides {
  /**
   * Specify an unhealthy condition reported by the node monitoring agent that this override would apply to.
   *
   * @public
   */
  nodeMonitoringCondition?: string | undefined;

  /**
   * Specify a reason reported by the node monitoring agent that this override would apply to.
   *
   * @public
   */
  nodeUnhealthyReason?: string | undefined;

  /**
   * Specify the minimum time in minutes to wait before attempting to repair a node with this specific `nodeMonitoringCondition` and `nodeUnhealthyReason`.
   *
   * @public
   */
  minRepairWaitTimeMins?: number | undefined;

  /**
   * Specify the repair action to take for nodes when all of the specified conditions are met.
   *
   * @public
   */
  repairAction?: RepairAction | undefined;
}

/**
 * The node auto repair configuration for the node group.
 *
 * @public
 */
export interface NodeRepairConfig {
  /**
   * Specifies whether to enable node auto repair for the node group. Node auto repair is disabled by default.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * Specify a count threshold of unhealthy nodes, above which node auto repair actions will stop. When using this, you cannot also set `maxUnhealthyNodeThresholdPercentage` at the same time.
   *
   * @public
   */
  maxUnhealthyNodeThresholdCount?: number | undefined;

  /**
   * Specify a percentage threshold of unhealthy nodes, above which node auto repair actions will stop. When using this, you cannot also set `maxUnhealthyNodeThresholdCount` at the same time.
   *
   * @public
   */
  maxUnhealthyNodeThresholdPercentage?: number | undefined;

  /**
   * Specify the maximum number of nodes that can be repaired concurrently or in parallel, expressed as a count of unhealthy nodes. This gives you finer-grained control over the pace of node replacements. When using this, you cannot also set `maxParallelNodesRepairedPercentage` at the same time.
   *
   * @public
   */
  maxParallelNodesRepairedCount?: number | undefined;

  /**
   * Specify the maximum number of nodes that can be repaired concurrently or in parallel, expressed as a percentage of unhealthy nodes. This gives you finer-grained control over the pace of node replacements. When using this, you cannot also set `maxParallelNodesRepairedCount` at the same time.
   *
   * @public
   */
  maxParallelNodesRepairedPercentage?: number | undefined;

  /**
   * Specify granular overrides for specific repair actions. These overrides control the repair action and the repair delay time before a node is considered eligible for repair. If you use this, you must specify all the values.
   *
   * @public
   */
  nodeRepairConfigOverrides?: NodeRepairConfigOverrides[] | undefined;
}

/**
 * An object representing the remote access configuration for the managed node group.
 *
 * @public
 */
export interface RemoteAccessConfig {
  /**
   * The Amazon EC2 SSH key name that provides access for SSH communication with the nodes in the managed node group. For more information, see [Amazon EC2 key pairs and Linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) in the *Amazon Elastic Compute Cloud User Guide for Linux Instances*. For Windows, an Amazon EC2 SSH key is used to obtain the RDP password. For more information, see [Amazon EC2 key pairs and Windows instances](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-key-pairs.html) in the *Amazon Elastic Compute Cloud User Guide for Windows Instances*.
   *
   * @public
   */
  ec2SshKey?: string | undefined;

  /**
   * The security group IDs that are allowed SSH access (port 22) to the nodes. For Windows, the port is 3389. If you specify an Amazon EC2 SSH key but don't specify a source security group when you create a managed node group, then the port on the nodes is opened to the internet (`0.0.0.0/0`). For more information, see [Security Groups for Your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html) in the *Amazon Virtual Private Cloud User Guide*.
   *
   * @public
   */
  sourceSecurityGroups?: string[] | undefined;
}

/**
 * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
 *
 * @public
 */
export interface NodegroupScalingConfig {
  /**
   * The minimum number of nodes that the managed node group can scale in to.
   *
   * @public
   */
  minSize?: number | undefined;

  /**
   * The maximum number of nodes that the managed node group can scale out to. For information about the maximum number that you can specify, see [Amazon EKS service quotas](https://docs.aws.amazon.com/eks/latest/userguide/service-quotas.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  maxSize?: number | undefined;

  /**
   * The current number of nodes that the managed node group should maintain.
   *
   * > **Important:** If you use the Kubernetes [Cluster Autoscaler](https://github.com/kubernetes/autoscaler#kubernetes-autoscaler), you shouldn't change the `desiredSize` value directly, as this can cause the Cluster Autoscaler to suddenly scale up or scale down.
   *
   * Whenever this parameter changes, the number of worker nodes in the node group is updated to the specified size. If this parameter is given a value that is smaller than the current number of running worker nodes, the necessary number of worker nodes are terminated to match the given value. When using CloudFormation, no action occurs if you remove this parameter from your CFN template.
   *
   * This parameter can be different from `minSize` in some cases, such as when starting with extra hosts for testing. This parameter can also be different when you want to start with an estimated number of needed hosts, but let the Cluster Autoscaler reduce the number if there are too many. When the Cluster Autoscaler is used, the `desiredSize` parameter is altered by the Cluster Autoscaler (but can be out-of-date for short periods of time). the Cluster Autoscaler doesn't scale a managed node group lower than `minSize` or higher than `maxSize`.
   *
   * @public
   */
  desiredSize?: number | undefined;
}

/**
 * A property that allows a node to repel a `Pod`. For more information, see [Node taints on managed node groups](https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html) in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface Taint {
  /**
   * The key of the taint.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The value of the taint.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The effect of the taint.
   *
   * @public
   */
  effect?: TaintEffect | undefined;
}

/**
 * The node group update configuration. An Amazon EKS managed node group updates by replacing nodes with new nodes of newer AMI versions in parallel. You choose the *maximum unavailable* and the *update strategy*.
 *
 * @public
 */
export interface NodegroupUpdateConfig {
  /**
   * The maximum number of nodes unavailable at once during a version update. Nodes are updated in parallel. This value or `maxUnavailablePercentage` is required to have a value.The maximum number is 100.
   *
   * @public
   */
  maxUnavailable?: number | undefined;

  /**
   * The maximum percentage of nodes unavailable during a version update. This percentage of nodes are updated in parallel, up to 100 nodes at once. This value or `maxUnavailable` is required to have a value.
   *
   * @public
   */
  maxUnavailablePercentage?: number | undefined;

  /**
   * The configuration for the behavior to follow during a node group version update of this managed node group. You choose between two possible strategies for replacing nodes during an [`UpdateNodegroupVersion`](https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateNodegroupVersion.html) action.
   *
   * An Amazon EKS managed node group updates by replacing nodes with new nodes of newer AMI versions in parallel. The *update strategy* changes the managed node update behavior of the managed node group for each quantity. The *default* strategy has guardrails to protect you from misconfiguration and launches the new instances first, before terminating the old instances. The *minimal* strategy removes the guardrails and terminates the old instances before launching the new instances. This minimal strategy is useful in scenarios where you are constrained to resources or costs (for example, with hardware accelerators such as GPUs).
   *
   * @public
   */
  updateStrategy?: NodegroupUpdateStrategies | undefined;
}

/**
 * The configuration for an Amazon EC2 Auto Scaling warm pool attached to an Amazon EKS managed node group. Warm pools maintain pre-initialized EC2 instances alongside your Auto Scaling group that have already completed the bootup initialization process and can be kept in a `Stopped`, `Running`, or `Hibernated` state.
 *
 * @public
 */
export interface WarmPoolConfig {
  /**
   * Specifies whether to attach warm pools on the managed node group. Set to `true` to enable the warm pool, or `false` to disable and remove it. If not specified during an update, the current value is preserved.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The minimum number of instances to maintain in the warm pool. Default: `0`. Size your warm pool based on scaling patterns to balance cost and availability. Start with 10-20% of expected peak capacity.
   *
   * @public
   */
  minSize?: number | undefined;

  /**
   * The maximum total number of instances across the warm pool and Auto Scaling group combined. This value controls the total prepared capacity available for your node group.
   *
   * @public
   */
  maxGroupPreparedCapacity?: number | undefined;

  /**
   * The desired state for warm pool instances. Default: `Stopped`. Valid values are `Stopped` (most cost-effective with EBS storage costs only), `Running` (fastest transition time with full EC2 costs), and `Hibernated` (balance between cost and speed, only supported on specific instance types). Warm pool instances in the `Hibernated` state are not supported with Bottlerocket AMIs.
   *
   * @public
   */
  poolState?: WarmPoolState | undefined;

  /**
   * Indicates whether instances should return to the warm pool during scale-in events instead of being terminated. Default: `false`. Enable this to reduce costs by reusing instances. This feature is not supported for Bottlerocket AMIs.
   *
   * @public
   */
  reuseOnScaleIn?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateNodegroupRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The unique name to give your node group.
   *
   * @public
   */
  nodegroupName: string | undefined;

  /**
   * The scaling configuration details for the Auto Scaling group that is created for your node group.
   *
   * @public
   */
  scalingConfig?: NodegroupScalingConfig | undefined;

  /**
   * The root device disk size (in GiB) for your node group instances. The default disk size is 20 GiB for Linux and Bottlerocket. The default disk size is 50 GiB for Windows. If you specify `launchTemplate`, then don't specify `diskSize`, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  diskSize?: number | undefined;

  /**
   * The subnets to use for the Auto Scaling group that is created for your node group. If you specify `launchTemplate`, then don't specify `SubnetId` in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  subnets: string[] | undefined;

  /**
   * Specify the instance types for a node group. If you specify a GPU instance type, make sure to also specify an applicable GPU AMI type with the `amiType` parameter. If you specify `launchTemplate`, then you can specify zero or one instance type in your launch template *or* you can specify 0-20 instance types for `instanceTypes`. If however, you specify an instance type in your launch template *and* specify any `instanceTypes`, the node group deployment will fail. If you don't specify an instance type in a launch template or for `instanceTypes`, then `t3.medium` is used, by default. If you specify `Spot` for `capacityType`, then we recommend specifying multiple values for `instanceTypes`. For more information, see [Managed node group capacity types](https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html#managed-node-group-capacity-types) and [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * The AMI type for your node group. If you specify `launchTemplate`, and your launch template uses a custom AMI, then don't specify `amiType`, or the node group deployment will fail. If your launch template uses a Windows custom AMI, then add `eks:kube-proxy-windows` to your Windows nodes `rolearn` in the `aws-auth` `ConfigMap`. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  amiType?: AMITypes | undefined;

  /**
   * The remote access configuration to use with your node group. For Linux, the protocol is SSH. For Windows, the protocol is RDP. If you specify `launchTemplate`, then don't specify `remoteAccess`, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  remoteAccess?: RemoteAccessConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to associate with your node group. The Amazon EKS worker node `kubelet` daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies. Before you can launch nodes and register them into a cluster, you must create an IAM role for those nodes to use when they are launched. For more information, see [Amazon EKS node IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) in the **Amazon EKS User Guide** . If you specify `launchTemplate`, then don't specify `IamInstanceProfile` in your launch template, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  nodeRole: string | undefined;

  /**
   * The Kubernetes `labels` to apply to the nodes in the node group when they are created.
   *
   * @public
   */
  labels?: Record<string, string> | undefined;

  /**
   * The Kubernetes taints to be applied to the nodes in the node group. For more information, see [Node taints on managed node groups](https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html).
   *
   * @public
   */
  taints?: Taint[] | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * An object representing a node group's launch template specification. When using this object, don't directly specify `instanceTypes`, `diskSize`, or `remoteAccess`. You cannot later specify a different launch template ID or name than what was used to create the node group.
   *
   * Make sure that the launch template meets the requirements in `launchTemplateSpecification`. Also refer to [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  launchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * The node group update configuration.
   *
   * @public
   */
  updateConfig?: NodegroupUpdateConfig | undefined;

  /**
   * The node auto repair configuration for the node group.
   *
   * @public
   */
  nodeRepairConfig?: NodeRepairConfig | undefined;

  /**
   * The capacity type for your node group.
   *
   * @public
   */
  capacityType?: CapacityTypes | undefined;

  /**
   * The Kubernetes version to use for your managed nodes. By default, the Kubernetes version of the cluster is used, and this is the only accepted specified value. If you specify `launchTemplate`, and your launch template uses a custom AMI, then don't specify `version`, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The AMI version of the Amazon EKS optimized AMI to use with your node group. By default, the latest available AMI version for the node group's current Kubernetes version is used. For information about Linux versions, see [Amazon EKS optimized Amazon Linux AMI versions](https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html) in the *Amazon EKS User Guide*. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see [Amazon EKS optimized Windows AMI versions](https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html) in the *Amazon EKS User Guide*.
   *
   * If you specify `launchTemplate`, and your launch template uses a custom AMI, then don't specify `releaseVersion`, or the node group deployment will fail. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  releaseVersion?: string | undefined;

  /**
   * The warm pool configuration for the node group. Warm pools maintain pre-initialized EC2 instances that can quickly join your cluster during scale-out events, improving application scaling performance and reducing costs.
   *
   * @public
   */
  warmPoolConfig?: WarmPoolConfig | undefined;
}

/**
 * An object representing an issue with an Amazon EKS resource.
 *
 * @public
 */
export interface Issue {
  /**
   * A brief description of the error.
   *
   * - **AccessDenied**: Amazon EKS or one or more of your managed nodes is failing to authenticate or authorize with your Kubernetes cluster API server.
   * - **AsgInstanceLaunchFailures**: Your Auto Scaling group is experiencing failures while attempting to launch instances.
   * - **AutoScalingGroupNotFound**: We couldn't find the Auto Scaling group associated with the managed node group. You may be able to recreate an Auto Scaling group with the same settings to recover.
   * - **ClusterUnreachable**: Amazon EKS or one or more of your managed nodes is unable to to communicate with your Kubernetes cluster API server. This can happen if there are network disruptions or if API servers are timing out processing requests.
   * - **Ec2InstanceTypeDoesNotExist**: One or more of the supplied Amazon EC2 instance types do not exist. Amazon EKS checked for the instance types that you provided in this Amazon Web Services Region, and one or more aren't available.
   * - **Ec2LaunchTemplateNotFound**: We couldn't find the Amazon EC2 launch template for your managed node group. You may be able to recreate a launch template with the same settings to recover.
   * - **Ec2LaunchTemplateVersionMismatch**: The Amazon EC2 launch template version for your managed node group does not match the version that Amazon EKS created. You may be able to revert to the version that Amazon EKS created to recover.
   * - **Ec2SecurityGroupDeletionFailure**: We could not delete the remote access security group for your managed node group. Remove any dependencies from the security group.
   * - **Ec2SecurityGroupNotFound**: We couldn't find the cluster security group for the cluster. You must recreate your cluster.
   * - **Ec2SubnetInvalidConfiguration**: One or more Amazon EC2 subnets specified for a node group do not automatically assign public IP addresses to instances launched into it. If you want your instances to be assigned a public IP address, then you need to enable the `auto-assign public IP address` setting for the subnet. See [Modifying the public `IPv4` addressing attribute for your subnet](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-ip-addressing.html#subnet-public-ip) in the *Amazon VPC User Guide*.
   * - **IamInstanceProfileNotFound**: We couldn't find the IAM instance profile for your managed node group. You may be able to recreate an instance profile with the same settings to recover.
   * - **IamNodeRoleNotFound**: We couldn't find the IAM role for your managed node group. You may be able to recreate an IAM role with the same settings to recover.
   * - **InstanceLimitExceeded**: Your Amazon Web Services account is unable to launch any more instances of the specified instance type. You may be able to request an Amazon EC2 instance limit increase to recover.
   * - **InsufficientFreeAddresses**: One or more of the subnets associated with your managed node group does not have enough available IP addresses for new nodes.
   * - **InternalFailure**: These errors are usually caused by an Amazon EKS server-side issue.
   * - **NodeCreationFailure**: Your launched instances are unable to register with your Amazon EKS cluster. Common causes of this failure are insufficient [node IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) permissions or lack of outbound internet access for the nodes.
   *
   * @public
   */
  code?: NodegroupIssueCode | undefined;

  /**
   * The error message associated with the issue.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The Amazon Web Services resources that are afflicted by this issue.
   *
   * @public
   */
  resourceIds?: string[] | undefined;
}

/**
 * An object representing the health status of the node group.
 *
 * @public
 */
export interface NodegroupHealth {
  /**
   * Any issues that are associated with the node group.
   *
   * @public
   */
  issues?: Issue[] | undefined;
}

/**
 * An object representing the resources associated with the node group, such as Auto Scaling groups and security groups for remote access.
 *
 * @public
 */
export interface NodegroupResources {
  /**
   * The Auto Scaling groups associated with the node group.
   *
   * @public
   */
  autoScalingGroups?: AutoScalingGroup[] | undefined;

  /**
   * The remote access security group associated with the node group. This security group controls SSH access to the nodes.
   *
   * @public
   */
  remoteAccessSecurityGroup?: string | undefined;
}

/**
 * An object representing an Amazon EKS managed node group.
 *
 * @public
 */
export interface Nodegroup {
  /**
   * The name associated with an Amazon EKS managed node group.
   *
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) associated with the managed node group.
   *
   * @public
   */
  nodegroupArn?: string | undefined;

  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The Kubernetes version of the managed node group.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * If the node group was deployed using a launch template with a custom AMI, then this is the AMI ID that was specified in the launch template. For node groups that weren't deployed using a launch template, this is the version of the Amazon EKS optimized AMI that the node group was deployed with.
   *
   * @public
   */
  releaseVersion?: string | undefined;

  /**
   * The Unix epoch timestamp at object creation.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix epoch timestamp for the last modification to the object.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * The current status of the managed node group.
   *
   * @public
   */
  status?: NodegroupStatus | undefined;

  /**
   * The capacity type of your managed node group.
   *
   * @public
   */
  capacityType?: CapacityTypes | undefined;

  /**
   * The scaling configuration details for the Auto Scaling group that is associated with your node group.
   *
   * @public
   */
  scalingConfig?: NodegroupScalingConfig | undefined;

  /**
   * If the node group wasn't deployed with a launch template, then this is the instance type that is associated with the node group. If the node group was deployed with a launch template, then this is `null`.
   *
   * @public
   */
  instanceTypes?: string[] | undefined;

  /**
   * The subnets that were specified for the Auto Scaling group that is associated with your node group.
   *
   * @public
   */
  subnets?: string[] | undefined;

  /**
   * If the node group wasn't deployed with a launch template, then this is the remote access configuration that is associated with the node group. If the node group was deployed with a launch template, then this is `null`.
   *
   * @public
   */
  remoteAccess?: RemoteAccessConfig | undefined;

  /**
   * If the node group was deployed using a launch template with a custom AMI, then this is `CUSTOM`. For node groups that weren't deployed using a launch template, this is the AMI type that was specified in the node group configuration.
   *
   * @public
   */
  amiType?: AMITypes | undefined;

  /**
   * The IAM role associated with your node group. The Amazon EKS node `kubelet` daemon makes calls to Amazon Web Services APIs on your behalf. Nodes receive permissions for these API calls through an IAM instance profile and associated policies.
   *
   * @public
   */
  nodeRole?: string | undefined;

  /**
   * The Kubernetes `labels` applied to the nodes in the node group.
   *
   * > **Note:** Only `labels` that are applied with the Amazon EKS API are shown here. There may be other Kubernetes `labels` applied to the nodes in this group.
   *
   * @public
   */
  labels?: Record<string, string> | undefined;

  /**
   * The Kubernetes taints to be applied to the nodes in the node group when they are created. Effect is one of `No_Schedule`, `Prefer_No_Schedule`, or `No_Execute`. Kubernetes taints can be used together with tolerations to control how workloads are scheduled to your nodes. For more information, see [Node taints on managed node groups](https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html).
   *
   * @public
   */
  taints?: Taint[] | undefined;

  /**
   * The resources associated with the node group, such as Auto Scaling groups and security groups for remote access.
   *
   * @public
   */
  resources?: NodegroupResources | undefined;

  /**
   * If the node group wasn't deployed with a launch template, then this is the disk size in the node group configuration. If the node group was deployed with a launch template, then this is `null`.
   *
   * @public
   */
  diskSize?: number | undefined;

  /**
   * The health status of the node group. If there are issues with your node group's health, they are listed here.
   *
   * @public
   */
  health?: NodegroupHealth | undefined;

  /**
   * The node group update configuration.
   *
   * @public
   */
  updateConfig?: NodegroupUpdateConfig | undefined;

  /**
   * The node auto repair configuration for the node group.
   *
   * @public
   */
  nodeRepairConfig?: NodeRepairConfig | undefined;

  /**
   * If a launch template was used to create the node group, then this is the launch template that was used.
   *
   * @public
   */
  launchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The warm pool configuration attached to the node group. Amazon EKS manages warm pools throughout the node group lifecycle using the `AWSServiceRoleForAmazonEKSNodegroup` service-linked role to create, update, and delete warm pool resources.
   *
   * @public
   */
  warmPoolConfig?: WarmPoolConfig | undefined;
}

/**
 * @public
 */
export interface CreateNodegroupResponse {
  /**
   * The full description of your new node group.
   *
   * @public
   */
  nodegroup?: Nodegroup | undefined;
}

/**
 * @public
 */
export interface CreatePodIdentityAssociationRequest {
  /**
   * The name of the cluster to create the EKS Pod Identity association in.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the Kubernetes namespace inside the cluster to create the EKS Pod Identity association in. The service account and the Pods that use the service account must be in this namespace.
   *
   * @public
   */
  namespace: string | undefined;

  /**
   * The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.
   *
   * @public
   */
  serviceAccount: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to associate with the service account. The EKS Pod Identity agent manages credentials to assume this role for applications in the containers in the Pods that use this service account.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource – 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length – 128 Unicode characters in UTF-8
   * - Maximum value length – 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Disable the automatic sessions tags that are appended by EKS Pod Identity.
   *
   * EKS Pod Identity adds a pre-defined set of session tags when it assumes the role. You can use these tags to author a single role that can work across resources by allowing access to Amazon Web Services resources based on matching tags. By default, EKS Pod Identity attaches six tags, including tags for cluster name, namespace, and service account name. For the list of tags added by EKS Pod Identity, see [List of session tags added by EKS Pod Identity](https://docs.aws.amazon.com/eks/latest/userguide/pod-id-abac.html#pod-id-abac-tags) in the *Amazon EKS User Guide*.
   *
   * Amazon Web Services compresses inline session policies, managed policy ARNs, and session tags into a packed binary format that has a separate limit. If you receive a `PackedPolicyTooLarge` error indicating the packed binary format has exceeded the size limit, you can attempt to reduce the size by disabling the session tags added by EKS Pod Identity.
   *
   * @public
   */
  disableSessionTags?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target IAM role to associate with the service account. This role is assumed by using the EKS Pod Identity association role, then the credentials for this role are injected into the Pod.
   *
   * When you run applications on Amazon EKS, your application might need to access Amazon Web Services resources from a different role that exists in the same or different Amazon Web Services account. For example, your application running in “Account A” might need to access resources, such as Amazon S3 buckets in “Account B” or within “Account A” itself. You can create a association to access Amazon Web Services resources in “Account B” by creating two IAM roles: a role in “Account A” and a role in “Account B” (which can be the same or different account), each with the necessary trust and permission policies. After you provide these roles in the *IAM role* and *Target IAM role* fields, EKS will perform role chaining to ensure your application gets the required permissions. This means Role A will assume Role B, allowing your Pods to securely access resources like S3 buckets in the target account.
   *
   * @public
   */
  targetRoleArn?: string | undefined;

  /**
   * An optional IAM policy in JSON format (as an escaped string) that applies additional restrictions to this pod identity association beyond the IAM policies attached to the IAM role. This policy is applied as the intersection of the role's policies and this policy, allowing you to reduce the permissions that applications in the pods can use. Use this policy to enforce least privilege access while still leveraging a shared IAM role across multiple applications.
   *
   * **Important considerations**
   *
   * - **Session tags:** When using this policy, `disableSessionTags` must be set to `true`.
   * - **Target role permissions:** If you specify both a `TargetRoleArn` and a policy, the policy restrictions apply only to the target role's permissions, not to the initial role used for assuming the target role.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that Amazon EC2 instance profiles provide credentials to Amazon EC2 instances.
 *
 * @public
 */
export interface PodIdentityAssociation {
  /**
   * The name of the cluster that the association is in.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The name of the Kubernetes namespace inside the cluster to create the association in. The service account and the Pods that use the service account must be in this namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.
   *
   * @public
   */
  serviceAccount?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to associate with the service account. The EKS Pod Identity agent manages credentials to assume this role for applications in the containers in the Pods that use this service account.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  associationArn?: string | undefined;

  /**
   * The ID of the association.
   *
   * @public
   */
  associationId?: string | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource – 50
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length – 128 Unicode characters in UTF-8
   * - Maximum value length – 256 Unicode characters in UTF-8
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case-sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The timestamp that the association was created at.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The most recent timestamp that the association was modified at.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * If defined, the EKS Pod Identity association is owned by an Amazon EKS add-on.
   *
   * @public
   */
  ownerArn?: string | undefined;

  /**
   * The state of the automatic sessions tags. The value of *true* disables these tags.
   *
   * EKS Pod Identity adds a pre-defined set of session tags when it assumes the role. You can use these tags to author a single role that can work across resources by allowing access to Amazon Web Services resources based on matching tags. By default, EKS Pod Identity attaches six tags, including tags for cluster name, namespace, and service account name. For the list of tags added by EKS Pod Identity, see [List of session tags added by EKS Pod Identity](https://docs.aws.amazon.com/eks/latest/userguide/pod-id-abac.html#pod-id-abac-tags) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  disableSessionTags?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target IAM role to associate with the service account. This role is assumed by using the EKS Pod Identity association role, then the credentials for this role are injected into the Pod.
   *
   * @public
   */
  targetRoleArn?: string | undefined;

  /**
   * The unique identifier for this EKS Pod Identity association for a target IAM role. You put this value in the trust policy of the target role, in a `Condition` to match the `sts.ExternalId`. This ensures that the target role can only be assumed by this association. This prevents the *confused deputy problem*. For more information about the confused deputy problem, see [The confused deputy problem](https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html) in the *IAM User Guide*.
   *
   * If you want to use the same target role with multiple associations or other roles, use independent statements in the trust policy to allow `sts:AssumeRole` access from each role.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * An optional IAM policy in JSON format (as an escaped string) that applies additional restrictions to this pod identity association beyond the IAM policies attached to the IAM role. This policy is applied as the intersection of the role's policies and this policy, allowing you to reduce the permissions that applications in the pods can use. Use this policy to enforce least privilege access while still leveraging a shared IAM role across multiple applications.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface CreatePodIdentityAssociationResponse {
  /**
   * The full description of your new association.
   *
   * The description includes an ID for the association. Use the ID of the association in further actions to manage the association.
   *
   * @public
   */
  association?: PodIdentityAssociation | undefined;
}

/**
 * @public
 */
export interface DeleteAccessEntryRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ARN of the IAM principal for the `AccessEntry`.
   *
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
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the add-on. The name must match one of the names returned by [`ListAddons`](https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html).
   *
   * @public
   */
  addonName: string | undefined;

  /**
   * Specifying this option preserves the add-on software on your cluster but Amazon EKS stops managing any settings for the add-on. If an IAM account is associated with the add-on, it isn't removed.
   *
   * @public
   */
  preserve?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAddonResponse {
  /**
   * An Amazon EKS add-on. For more information, see [Amazon EKS add-ons](https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  addon?: Addon | undefined;
}

/**
 * @public
 */
export interface DeleteCapabilityRequest {
  /**
   * The name of the Amazon EKS cluster that contains the capability you want to delete.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the capability to delete.
   *
   * @public
   */
  capabilityName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCapabilityResponse {
  /**
   * An object containing information about the deleted capability, including its final status and configuration.
   *
   * @public
   */
  capability?: Capability | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateAuthorityRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ID of the certificate authority to delete. You can't delete the certificate authority that's currently signing certificates for the cluster.
   *
   * @public
   */
  certificateAuthorityId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCertificateAuthorityResponse {
  /**
   * An object representing the asynchronous update that removes the certificate authority from the cluster's trust bundle.
   *
   * @public
   */
  update?: Update | undefined;

  /**
   * Summary information about the certificate authority that is being deleted.
   *
   * @public
   */
  certificateAuthority?: CertificateAuthoritySummary | undefined;
}

/**
 * @public
 */
export interface DeleteClusterRequest {
  /**
   * The name of the cluster to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteClusterResponse {
  /**
   * The full description of the cluster to delete.
   *
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DeleteEksAnywhereSubscriptionRequest {
  /**
   * The ID of the subscription.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteEksAnywhereSubscriptionResponse {
  /**
   * The full description of the subscription to be deleted.
   *
   * @public
   */
  subscription?: EksAnywhereSubscription | undefined;
}

/**
 * @public
 */
export interface DeleteFargateProfileRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the Fargate profile to delete.
   *
   * @public
   */
  fargateProfileName: string | undefined;
}

/**
 * @public
 */
export interface DeleteFargateProfileResponse {
  /**
   * The deleted Fargate profile.
   *
   * @public
   */
  fargateProfile?: FargateProfile | undefined;
}

/**
 * @public
 */
export interface DeleteNodegroupRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the node group to delete.
   *
   * @public
   */
  nodegroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteNodegroupResponse {
  /**
   * The full description of your deleted node group.
   *
   * @public
   */
  nodegroup?: Nodegroup | undefined;
}

/**
 * @public
 */
export interface DeletePodIdentityAssociationRequest {
  /**
   * The cluster name that
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ID of the association to be deleted.
   *
   * @public
   */
  associationId: string | undefined;
}

/**
 * @public
 */
export interface DeletePodIdentityAssociationResponse {
  /**
   * The full description of the EKS Pod Identity association that was deleted.
   *
   * @public
   */
  association?: PodIdentityAssociation | undefined;
}

/**
 * @public
 */
export interface DeregisterClusterRequest {
  /**
   * The name of the connected cluster to deregister.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeregisterClusterResponse {
  /**
   * An object representing an Amazon EKS cluster.
   *
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DescribeAccessEntryRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ARN of the IAM principal for the `AccessEntry`.
   *
   * @public
   */
  principalArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccessEntryResponse {
  /**
   * Information about the access entry.
   *
   * @public
   */
  accessEntry?: AccessEntry | undefined;
}

/**
 * @public
 */
export interface DescribeAddonRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the add-on. The name must match one of the names returned by [`ListAddons`](https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html).
   *
   * @public
   */
  addonName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAddonResponse {
  /**
   * An Amazon EKS add-on. For more information, see [Amazon EKS add-ons](https://docs.aws.amazon.com/eks/latest/userguide/eks-add-ons.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  addon?: Addon | undefined;
}

/**
 * @public
 */
export interface DescribeAddonConfigurationRequest {
  /**
   * The name of the add-on. The name must match one of the names returned by `DescribeAddonVersions`.
   *
   * @public
   */
  addonName: string | undefined;

  /**
   * The version of the add-on. The version must match one of the versions returned by [`DescribeAddonVersions`](https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html).
   *
   * @public
   */
  addonVersion: string | undefined;
}

/**
 * @public
 */
export interface DescribeAddonConfigurationResponse {
  /**
   * The name of the add-on.
   *
   * @public
   */
  addonName?: string | undefined;

  /**
   * The version of the add-on. The version must match one of the versions returned by [`DescribeAddonVersions`](https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html).
   *
   * @public
   */
  addonVersion?: string | undefined;

  /**
   * A JSON schema that's used to validate the configuration values you provide when an add-on is created or updated.
   *
   * @public
   */
  configurationSchema?: string | undefined;

  /**
   * The Kubernetes service account name used by the add-on, and any suggested IAM policies. Use this information to create an IAM Role for the add-on.
   *
   * @public
   */
  podIdentityConfiguration?: AddonPodIdentityConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DescribeAddonVersionsRequest {
  /**
   * The Kubernetes versions that you can use the add-on with.
   *
   * @public
   */
  kubernetesVersion?: string | undefined;

  /**
   * The maximum number of results, returned in paginated output. You receive `maxResults` in a single page, along with a `nextToken` response element. You can see the remaining results of the initial request by sending another request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a `nextToken` value, if applicable, are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The name of the add-on. The name must match one of the names returned by [`ListAddons`](https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html).
   *
   * @public
   */
  addonName?: string | undefined;

  /**
   * The type of the add-on. For valid `types`, don't specify a value for this property.
   *
   * @public
   */
  types?: string[] | undefined;

  /**
   * The publisher of the add-on. For valid `publishers`, don't specify a value for this property.
   *
   * @public
   */
  publishers?: string[] | undefined;

  /**
   * The owner of the add-on. For valid `owners`, don't specify a value for this property.
   *
   * @public
   */
  owners?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeAddonVersionsResponse {
  /**
   * The list of available versions with Kubernetes version compatibility and other properties.
   *
   * @public
   */
  addons?: AddonInfo[] | undefined;

  /**
   * The `nextToken` value to include in a future `DescribeAddonVersions` request. When the results of a `DescribeAddonVersions` request exceed `maxResults`, you can use this value to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapabilityRequest {
  /**
   * The name of the Amazon EKS cluster that contains the capability you want to describe.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the capability to describe.
   *
   * @public
   */
  capabilityName: string | undefined;
}

/**
 * @public
 */
export interface DescribeCapabilityResponse {
  /**
   * An object containing detailed information about the capability, including its name, ARN, type, status, version, configuration, health status, and timestamps for when it was created and last modified.
   *
   * @public
   */
  capability?: Capability | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateAuthorityRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ID of the certificate authority to describe.
   *
   * @public
   */
  certificateAuthorityId: string | undefined;
}

/**
 * The scheduled events during which Amazon EKS may automatically activate a certificate authority, computed from its validity period. These events help ensure that a cluster's signing certificate authority is rotated before its certificate expires.
 *
 * @public
 */
export interface CertificateAuthorityScheduledEvents {
  /**
   * The earliest Unix epoch timestamp in seconds at which Amazon EKS may automatically activate this certificate authority.
   *
   * @public
   */
  firstAutoActivation?: Date | undefined;

  /**
   * The Unix epoch timestamp in seconds by which Amazon EKS will automatically activate this certificate authority if you haven't already activated it.
   *
   * @public
   */
  finalAutoActivation?: Date | undefined;
}

/**
 * The validity period of a certificate authority's certificate.
 *
 * @public
 */
export interface CertificateAuthorityValidity {
  /**
   * The Unix epoch timestamp in seconds for the start of the certificate authority's validity period.
   *
   * @public
   */
  notBefore?: Date | undefined;

  /**
   * The Unix epoch timestamp in seconds for the end of the certificate authority's validity period.
   *
   * @public
   */
  notAfter?: Date | undefined;
}

/**
 * An object representing a certificate authority (CA) for an Amazon EKS cluster.
 *
 * @public
 */
export interface CertificateAuthority {
  /**
   * The unique identifier of the certificate authority.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the certificate authority was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The entity that created the certificate authority. Certificate authorities that you create are `CUSTOMER`; those that Amazon EKS provisions on your behalf, such as a cluster's initial certificate authority, are `EKS`.
   *
   * @public
   */
  createdBy?: CertificateAuthorityCreatedBy | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the certificate authority was last activated as the cluster's signer. This value is absent if the certificate authority has never been activated.
   *
   * @public
   */
  activatedAt?: Date | undefined;

  /**
   * The entity that most recently activated the certificate authority. A value of `EKS` indicates that Amazon EKS activated it automatically; `CUSTOMER` indicates that you activated it.
   *
   * @public
   */
  activatedBy?: CertificateAuthorityActivatedBy | undefined;

  /**
   * The signing status of the certificate authority. `IN_USE` means the certificate authority is currently signing certificates for the cluster, `ACTIVATING` means it's being promoted to the signer, and `NOT_USED` means it's trusted by the cluster (for example, a successor CA during a rotation, or a retired outgoing CA) but isn't the signer.
   *
   * @public
   */
  signingStatus?: CertificateAuthoritySigningStatus | undefined;

  /**
   * The distribution status of the certificate authority, which tracks whether Amazon EKS has distributed its trust to the Amazon Web Services managed components in your cluster (the control plane, Amazon EKS Auto Mode instances, and Amazon Web Services Fargate nodes). Valid values are `IN_PROGRESS`, `COMPLETE`, `FAILED`, and `DELETING`. A successor CA can only be activated after its distribution status is `COMPLETE`.
   *
   * @public
   */
  distributionStatus?: CertificateAuthorityDistributionStatus | undefined;

  /**
   * The validity period of the certificate authority's certificate.
   *
   * @public
   */
  validity?: CertificateAuthorityValidity | undefined;

  /**
   * The scheduled auto-activation events for the certificate authority, computed from its validity period.
   *
   * @public
   */
  scheduledEvents?: CertificateAuthorityScheduledEvents | undefined;

  /**
   * Indicates whether CA rollback is still available for this certificate authority. After you activate a successor CA, rollback lets you revert to the outgoing CA for a limited period while you finish updating any worker nodes or clients that were missed.
   *
   * @public
   */
  rollbackAvailable?: boolean | undefined;

  /**
   * The Base64-encoded public certificate of the certificate authority.
   *
   * @public
   */
  data?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCertificateAuthorityResponse {
  /**
   * An object containing detailed information about the certificate authority.
   *
   * @public
   */
  certificateAuthority?: CertificateAuthority | undefined;
}

/**
 * @public
 */
export interface DescribeClusterRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DescribeClusterResponse {
  /**
   * The full description of your specified cluster.
   *
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface DescribeClusterVersionsRequest {
  /**
   * The type of cluster to filter versions by.
   *
   * @public
   */
  clusterType?: string | undefined;

  /**
   * Maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filter to show only default versions.
   *
   * @public
   */
  defaultOnly?: boolean | undefined;

  /**
   * Include all available versions in the response.
   *
   * @public
   */
  includeAll?: boolean | undefined;

  /**
   * List of specific cluster versions to describe.
   *
   * @public
   */
  clusterVersions?: string[] | undefined;

  /**
   * > **Important:** This field is deprecated. Use `versionStatus` instead, as that field matches for input and output of this action.
   *
   * Filter versions by their current status.
   *
   * @deprecated (since 2025-02-15) status has been replaced by versionStatus.
   * @public
   */
  status?: ClusterVersionStatus | undefined;

  /**
   * Filter versions by their current status.
   *
   * @public
   */
  versionStatus?: VersionStatus | undefined;
}

/**
 * Constraints for a duration parameter.
 *
 * @public
 */
export interface DurationConstraints {
  /**
   * The minimum allowed duration value.
   *
   * @public
   */
  min?: string | undefined;

  /**
   * The maximum allowed duration value.
   *
   * @public
   */
  max?: string | undefined;
}

/**
 * A duration parameter configuration with default value and constraints.
 *
 * @public
 */
export interface DurationParameterConfig {
  /**
   * The default value for the duration parameter.
   *
   * @public
   */
  defaultValue?: string | undefined;

  /**
   * The constraints for the duration parameter.
   *
   * @public
   */
  constraints?: DurationConstraints | undefined;
}

/**
 * An integer range constraint specifying minimum and maximum allowed values.
 *
 * @public
 */
export interface IntegerRangeConstraint {
  /**
   * The minimum allowed value.
   *
   * @public
   */
  min?: number | undefined;

  /**
   * The maximum allowed value.
   *
   * @public
   */
  max?: number | undefined;
}

/**
 * Constraints for a port range parameter.
 *
 * @public
 */
export interface PortRangeConstraints {
  /**
   * The constraints for the minimum port value.
   *
   * @public
   */
  minPort?: IntegerRangeConstraint | undefined;

  /**
   * The constraints for the maximum port value.
   *
   * @public
   */
  maxPort?: IntegerRangeConstraint | undefined;
}

/**
 * A port range parameter configuration with default value and constraints.
 *
 * @public
 */
export interface PortRangeParameterConfig {
  /**
   * The default port range value.
   *
   * @public
   */
  defaultValue?: ServiceNodePortRange | undefined;

  /**
   * The constraints for the port range parameter.
   *
   * @public
   */
  constraints?: PortRangeConstraints | undefined;
}

/**
 * The Kubernetes API server version-specific configuration defaults and constraints.
 *
 * @public
 */
export interface KubeApiServerVersionConfig {
  /**
   * The event TTL configuration with default value and constraints.
   *
   * @public
   */
  eventTtl?: DurationParameterConfig | undefined;

  /**
   * The service node port range configuration with default value and constraints.
   *
   * @public
   */
  serviceNodePortRange?: PortRangeParameterConfig | undefined;
}

/**
 * The horizontal pod autoscaler controller version configuration.
 *
 * @public
 */
export interface HorizontalPodAutoscalerControllerVersionConfig {
  /**
   * The HPA sync period configuration with default value and constraints.
   *
   * @public
   */
  horizontalPodAutoscalerSyncPeriod?: DurationParameterConfig | undefined;
}

/**
 * Constraints for an integer parameter specifying allowed range.
 *
 * @public
 */
export interface IntegerConstraints {
  /**
   * The minimum allowed value.
   *
   * @public
   */
  min?: number | undefined;

  /**
   * The maximum allowed value.
   *
   * @public
   */
  max?: number | undefined;
}

/**
 * An integer parameter configuration with default value and constraints.
 *
 * @public
 */
export interface IntegerParameterConfig {
  /**
   * The default value for the integer parameter.
   *
   * @public
   */
  defaultValue?: number | undefined;

  /**
   * The constraints for the integer parameter.
   *
   * @public
   */
  constraints?: IntegerConstraints | undefined;
}

/**
 * The pod garbage collection controller version configuration.
 *
 * @public
 */
export interface PodGcControllerVersionConfig {
  /**
   * The terminated pod garbage collection threshold configuration with default value and constraints.
   *
   * @public
   */
  terminatedPodGcThreshold?: IntegerParameterConfig | undefined;
}

/**
 * The Kubernetes controller manager version-specific configuration defaults and constraints.
 *
 * @public
 */
export interface KubeControllerManagerVersionConfig {
  /**
   * The pod garbage collection controller configuration with default value and constraints.
   *
   * @public
   */
  podGcControllerConfig?: PodGcControllerVersionConfig | undefined;

  /**
   * The horizontal pod autoscaler controller configuration with default value and constraints.
   *
   * @public
   */
  horizontalPodAutoscalerControllerConfig?: HorizontalPodAutoscalerControllerVersionConfig | undefined;
}

/**
 * Constraints for resource weight entries.
 *
 * @public
 */
export interface ResourceConstraints {
  /**
   * The allowed values for resource names.
   *
   * @public
   */
  name?: AllowedValuesConstraint | undefined;

  /**
   * The allowed range for resource weight values.
   *
   * @public
   */
  weight?: IntegerRangeConstraint | undefined;
}

/**
 * Constraints for the scoring strategy configuration.
 *
 * @public
 */
export interface ScoringStrategyConstraints {
  /**
   * The allowed values for the scoring strategy type.
   *
   * @public
   */
  scoringStrategy?: AllowedValuesConstraint | undefined;

  /**
   * The constraints for resource weights.
   *
   * @public
   */
  resources?: ResourceConstraints | undefined;
}

/**
 * The scoring strategy configuration with default value and constraints.
 *
 * @public
 */
export interface ScoringStrategyConfig {
  /**
   * The default scoring strategy.
   *
   * @public
   */
  defaultValue?: ScoringStrategy | undefined;

  /**
   * The constraints for the scoring strategy.
   *
   * @public
   */
  constraints?: ScoringStrategyConstraints | undefined;
}

/**
 * The NodeResourcesFit version configuration with default value and constraints.
 *
 * @public
 */
export interface NodeResourcesFitVersionConfig {
  /**
   * The scoring strategy configuration with default value and constraints.
   *
   * @public
   */
  scoringStrategy?: ScoringStrategyConfig | undefined;
}

/**
 * The Kubernetes scheduler version-specific configuration defaults and constraints.
 *
 * @public
 */
export interface KubeSchedulerVersionConfig {
  /**
   * The NodeResourcesFit configuration with default value and constraints.
   *
   * @public
   */
  nodeResourcesFit?: NodeResourcesFitVersionConfig | undefined;
}

/**
 * The control plane component configuration defaults and constraints.
 *
 * @public
 */
export interface ControlPlaneConfigInfo {
  /**
   * The Kubernetes API server configuration defaults and constraints.
   *
   * @public
   */
  kubeApiServerConfig?: KubeApiServerVersionConfig | undefined;

  /**
   * The Kubernetes scheduler configuration defaults and constraints.
   *
   * @public
   */
  kubeSchedulerConfig?: KubeSchedulerVersionConfig | undefined;

  /**
   * The Kubernetes controller manager configuration defaults and constraints.
   *
   * @public
   */
  kubeControllerManagerConfig?: KubeControllerManagerVersionConfig | undefined;
}

/**
 * Information about a provisioned control plane scaling tier.
 *
 * @public
 */
export interface ControlPlaneScalingTierInfo {
  /**
   * The name of the scaling tier.
   *
   * @public
   */
  tierName?: string | undefined;

  /**
   * The maximum API request concurrency supported by this tier.
   *
   * @public
   */
  apiRequestConcurrency?: number | undefined;

  /**
   * The maximum pod scheduling rate per second supported by this tier.
   *
   * @public
   */
  podSchedulingRatePerSecond?: number | undefined;

  /**
   * The maximum cluster database size in GB supported by this tier.
   *
   * @public
   */
  clusterDatabaseSizeGb?: number | undefined;

  /**
   * The control plane component configuration overrides specific to this scaling tier.
   *
   * @public
   */
  controlPlaneComponentConfigOverrides?: ControlPlaneConfigInfo | undefined;
}

/**
 * Contains details about a specific EKS cluster version.
 *
 * @public
 */
export interface ClusterVersionInformation {
  /**
   * The Kubernetes version for the cluster.
   *
   * @public
   */
  clusterVersion?: string | undefined;

  /**
   * The type of cluster this version is for.
   *
   * @public
   */
  clusterType?: string | undefined;

  /**
   * Default platform version for this Kubernetes version.
   *
   * @public
   */
  defaultPlatformVersion?: string | undefined;

  /**
   * Indicates if this is a default version.
   *
   * @public
   */
  defaultVersion?: boolean | undefined;

  /**
   * The release date of this cluster version.
   *
   * @public
   */
  releaseDate?: Date | undefined;

  /**
   * Date when standard support ends for this version.
   *
   * @public
   */
  endOfStandardSupportDate?: Date | undefined;

  /**
   * Date when extended support ends for this version.
   *
   * @public
   */
  endOfExtendedSupportDate?: Date | undefined;

  /**
   * > **Important:** This field is deprecated. Use `versionStatus` instead, as that field matches for input and output of this action.
   *
   * Current status of this cluster version.
   *
   * @public
   */
  status?: ClusterVersionStatus | undefined;

  /**
   * Current status of this cluster version.
   *
   * @public
   */
  versionStatus?: VersionStatus | undefined;

  /**
   * The patch version of Kubernetes for this cluster version.
   *
   * @public
   */
  kubernetesPatchVersion?: string | undefined;

  /**
   * The available provisioned control plane scaling tiers and their capabilities for this Kubernetes version.
   *
   * @public
   */
  controlPlaneScalingTiers?: ControlPlaneScalingTierInfo[] | undefined;

  /**
   * The default control plane component configuration and constraints for this Kubernetes version.
   *
   * @public
   */
  controlPlaneComponentConfig?: ControlPlaneConfigInfo | undefined;
}

/**
 * @public
 */
export interface DescribeClusterVersionsResponse {
  /**
   * Pagination token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of cluster version information objects.
   *
   * @public
   */
  clusterVersions?: ClusterVersionInformation[] | undefined;
}

/**
 * @public
 */
export interface DescribeEksAnywhereSubscriptionRequest {
  /**
   * The ID of the subscription.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DescribeEksAnywhereSubscriptionResponse {
  /**
   * The full description of the subscription.
   *
   * @public
   */
  subscription?: EksAnywhereSubscription | undefined;
}

/**
 * @public
 */
export interface DescribeFargateProfileRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the Fargate profile to describe.
   *
   * @public
   */
  fargateProfileName: string | undefined;
}

/**
 * @public
 */
export interface DescribeFargateProfileResponse {
  /**
   * The full description of your Fargate profile.
   *
   * @public
   */
  fargateProfile?: FargateProfile | undefined;
}

/**
 * An object representing an identity provider configuration.
 *
 * @public
 */
export interface IdentityProviderConfig {
  /**
   * The type of the identity provider configuration. The only type available is `oidc`.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The name of the identity provider configuration.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityProviderConfigRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * An object representing an identity provider configuration.
   *
   * @public
   */
  identityProviderConfig: IdentityProviderConfig | undefined;
}

/**
 * An object representing the configuration for an OpenID Connect (OIDC) identity provider.
 *
 * @public
 */
export interface OidcIdentityProviderConfig {
  /**
   * The name of the configuration.
   *
   * @public
   */
  identityProviderConfigName?: string | undefined;

  /**
   * The ARN of the configuration.
   *
   * @public
   */
  identityProviderConfigArn?: string | undefined;

  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The URL of the OIDC identity provider that allows the API server to discover public signing keys for verifying tokens.
   *
   * @public
   */
  issuerUrl?: string | undefined;

  /**
   * This is also known as *audience*. The ID of the client application that makes authentication requests to the OIDC identity provider.
   *
   * @public
   */
  clientId?: string | undefined;

  /**
   * The JSON Web token (JWT) claim that is used as the username.
   *
   * @public
   */
  usernameClaim?: string | undefined;

  /**
   * The prefix that is prepended to username claims to prevent clashes with existing names. The prefix can't contain `system:`
   *
   * @public
   */
  usernamePrefix?: string | undefined;

  /**
   * The JSON web token (JWT) claim that the provider uses to return your groups.
   *
   * @public
   */
  groupsClaim?: string | undefined;

  /**
   * The prefix that is prepended to group claims to prevent clashes with existing names (such as `system:` groups). For example, the value`oidc:` creates group names like `oidc:engineering` and `oidc:infra`. The prefix can't contain `system:`
   *
   * @public
   */
  groupsPrefix?: string | undefined;

  /**
   * The key-value pairs that describe required claims in the identity token. If set, each claim is verified to be present in the token with a matching value.
   *
   * @public
   */
  requiredClaims?: Record<string, string> | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The status of the OIDC identity provider.
   *
   * @public
   */
  status?: ConfigStatus | undefined;
}

/**
 * The full description of your identity configuration.
 *
 * @public
 */
export interface IdentityProviderConfigResponse {
  /**
   * An object representing an OpenID Connect (OIDC) identity provider configuration.
   *
   * @public
   */
  oidc?: OidcIdentityProviderConfig | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityProviderConfigResponse {
  /**
   * The object that represents an OpenID Connect (OIDC) identity provider configuration.
   *
   * @public
   */
  identityProviderConfig?: IdentityProviderConfigResponse | undefined;
}

/**
 * @public
 */
export interface DescribeInsightRequest {
  /**
   * The name of the cluster to describe the insight for.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The identity of the insight to describe.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Details about clients using the deprecated resources.
 *
 * @public
 */
export interface ClientStat {
  /**
   * The user agent of the Kubernetes client using the deprecated resource.
   *
   * @public
   */
  userAgent?: string | undefined;

  /**
   * The number of requests from the Kubernetes client seen over the last 30 days.
   *
   * @public
   */
  numberOfRequestsLast30Days?: number | undefined;

  /**
   * The timestamp of the last request seen from the Kubernetes client.
   *
   * @public
   */
  lastRequestTime?: Date | undefined;
}

/**
 * The summary information about deprecated resource usage for an insight check in the `UPGRADE_READINESS` category.
 *
 * @public
 */
export interface DeprecationDetail {
  /**
   * The deprecated version of the resource.
   *
   * @public
   */
  usage?: string | undefined;

  /**
   * The newer version of the resource to migrate to if applicable.
   *
   * @public
   */
  replacedWith?: string | undefined;

  /**
   * The version of the software where the deprecated resource version will stop being served.
   *
   * @public
   */
  stopServingVersion?: string | undefined;

  /**
   * The version of the software where the newer resource version became available to migrate to if applicable.
   *
   * @public
   */
  startServingReplacementVersion?: string | undefined;

  /**
   * Details about Kubernetes clients using the deprecated resources.
   *
   * @public
   */
  clientStats?: ClientStat[] | undefined;
}

/**
 * Summary information that relates to the category of the insight. Currently only returned with certain insights having category `UPGRADE_READINESS`.
 *
 * @public
 */
export interface InsightCategorySpecificSummary {
  /**
   * The summary information about deprecated resource usage for an insight check in the `UPGRADE_READINESS` category.
   *
   * @public
   */
  deprecationDetails?: DeprecationDetail[] | undefined;

  /**
   * A list of `AddonCompatibilityDetail` objects for Amazon EKS add-ons.
   *
   * @public
   */
  addonCompatibilityDetails?: AddonCompatibilityDetail[] | undefined;
}

/**
 * The status of the insight.
 *
 * @public
 */
export interface InsightStatus {
  /**
   * The status of the resource.
   *
   * @public
   */
  status?: InsightStatusValue | undefined;

  /**
   * Explanation on the reasoning for the status of the resource.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Returns information about the resource being evaluated.
 *
 * @public
 */
export interface InsightResourceDetail {
  /**
   * An object containing more detail on the status of the insight resource.
   *
   * @public
   */
  insightStatus?: InsightStatus | undefined;

  /**
   * The Kubernetes resource URI if applicable.
   *
   * @public
   */
  kubernetesResourceUri?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) if applicable.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * A check that provides recommendations to remedy potential upgrade-impacting issues.
 *
 * @public
 */
export interface Insight {
  /**
   * The ID of the insight.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the insight.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The category of the insight.
   *
   * @public
   */
  category?: Category | undefined;

  /**
   * The Kubernetes minor version associated with an insight if applicable.
   *
   * @public
   */
  kubernetesVersion?: string | undefined;

  /**
   * The time Amazon EKS last successfully completed a refresh of this insight check on the cluster.
   *
   * @public
   */
  lastRefreshTime?: Date | undefined;

  /**
   * The time the status of the insight last changed.
   *
   * @public
   */
  lastTransitionTime?: Date | undefined;

  /**
   * The description of the insight which includes alert criteria, remediation recommendation, and additional resources (contains Markdown).
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An object containing more detail on the status of the insight resource.
   *
   * @public
   */
  insightStatus?: InsightStatus | undefined;

  /**
   * A summary of how to remediate the finding of this insight if applicable.
   *
   * @public
   */
  recommendation?: string | undefined;

  /**
   * Links to sources that provide additional context on the insight.
   *
   * @public
   */
  additionalInfo?: Record<string, string> | undefined;

  /**
   * The details about each resource listed in the insight check result.
   *
   * @public
   */
  resources?: InsightResourceDetail[] | undefined;

  /**
   * Summary information that relates to the category of the insight. Currently only returned with certain insights having category `UPGRADE_READINESS`.
   *
   * @public
   */
  categorySpecificSummary?: InsightCategorySpecificSummary | undefined;
}

/**
 * @public
 */
export interface DescribeInsightResponse {
  /**
   * The full description of the insight.
   *
   * @public
   */
  insight?: Insight | undefined;
}

/**
 * @public
 */
export interface DescribeInsightsRefreshRequest {
  /**
   * The name of the cluster associated with the insights refresh operation.
   *
   * @public
   */
  clusterName: string | undefined;
}

/**
 * @public
 */
export interface DescribeInsightsRefreshResponse {
  /**
   * The message associated with the insights refresh operation.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The current status of the insights refresh operation.
   *
   * @public
   */
  status?: InsightsRefreshStatus | undefined;

  /**
   * The date and time when the insights refresh operation started.
   *
   * @public
   */
  startedAt?: Date | undefined;

  /**
   * The date and time when the insights refresh operation ended.
   *
   * @public
   */
  endedAt?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeNodegroupRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the node group to describe.
   *
   * @public
   */
  nodegroupName: string | undefined;
}

/**
 * @public
 */
export interface DescribeNodegroupResponse {
  /**
   * The full description of your node group.
   *
   * @public
   */
  nodegroup?: Nodegroup | undefined;
}

/**
 * @public
 */
export interface DescribePodIdentityAssociationRequest {
  /**
   * The name of the cluster that the association is in.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ID of the association that you want the description of.
   *
   * @public
   */
  associationId: string | undefined;
}

/**
 * @public
 */
export interface DescribePodIdentityAssociationResponse {
  /**
   * The full description of the EKS Pod Identity association.
   *
   * @public
   */
  association?: PodIdentityAssociation | undefined;
}

/**
 * Describes an update request.
 *
 * @public
 */
export interface DescribeUpdateRequest {
  /**
   * The name of the Amazon EKS cluster associated with the update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the update to describe.
   *
   * @public
   */
  updateId: string | undefined;

  /**
   * The name of the Amazon EKS node group associated with the update. This parameter is required if the update is a node group update.
   *
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * The name of the add-on. The name must match one of the names returned by [`ListAddons`](https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html). This parameter is required if the update is an add-on update.
   *
   * @public
   */
  addonName?: string | undefined;

  /**
   * The name of the capability for which you want to describe updates.
   *
   * @public
   */
  capabilityName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUpdateResponse {
  /**
   * The full description of the specified update.
   *
   * @public
   */
  update?: Update | undefined;
}

/**
 * @public
 */
export interface DisassociateAccessPolicyRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ARN of the IAM principal for the `AccessEntry`.
   *
   * @public
   */
  principalArn: string | undefined;

  /**
   * The ARN of the policy to disassociate from the access entry. For a list of associated policies ARNs, use `ListAssociatedAccessPolicies`.
   *
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
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * An object representing an identity provider configuration.
   *
   * @public
   */
  identityProviderConfig: IdentityProviderConfig | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateIdentityProviderConfigResponse {
  /**
   * An object representing an asynchronous update.
   *
   * @public
   */
  update?: Update | undefined;
}

/**
 * @public
 */
export interface ListAccessEntriesRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ARN of an `AccessPolicy`. When you specify an access policy ARN, only the access entries associated to that access policy are returned. For a list of available policy ARNs, use `ListAccessPolicies`.
   *
   * @public
   */
  associatedPolicyArn?: string | undefined;

  /**
   * The maximum number of results, returned in paginated output. You receive `maxResults` in a single page, along with a `nextToken` response element. You can see the remaining results of the initial request by sending another request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a `nextToken` value, if applicable, are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessEntriesResponse {
  /**
   * The list of access entries that exist for the cluster.
   *
   * @public
   */
  accessEntries?: string[] | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessPoliciesRequest {
  /**
   * The maximum number of results, returned in paginated output. You receive `maxResults` in a single page, along with a `nextToken` response element. You can see the remaining results of the initial request by sending another request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a `nextToken` value, if applicable, are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAccessPoliciesResponse {
  /**
   * The list of available access policies. You can't view the contents of an access policy using the API. To view the contents, see [Access policy permissions](https://docs.aws.amazon.com/eks/latest/userguide/access-policies.html#access-policy-permissions) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  accessPolicies?: AccessPolicy[] | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAddonsRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The maximum number of results, returned in paginated output. You receive `maxResults` in a single page, along with a `nextToken` response element. You can see the remaining results of the initial request by sending another request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a `nextToken` value, if applicable, are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAddonsResponse {
  /**
   * A list of installed add-ons.
   *
   * @public
   */
  addons?: string[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListAddons` request. When the results of a `ListAddons` request exceed `maxResults`, you can use this value to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedAccessPoliciesRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ARN of the IAM principal for the `AccessEntry`.
   *
   * @public
   */
  principalArn: string | undefined;

  /**
   * The maximum number of results, returned in paginated output. You receive `maxResults` in a single page, along with a `nextToken` response element. You can see the remaining results of the initial request by sending another request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a `nextToken` value, if applicable, are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedAccessPoliciesResponse {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The ARN of the IAM principal for the `AccessEntry`.
   *
   * @public
   */
  principalArn?: string | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of access policies associated with the access entry.
   *
   * @public
   */
  associatedAccessPolicies?: AssociatedAccessPolicy[] | undefined;
}

/**
 * @public
 */
export interface ListCapabilitiesRequest {
  /**
   * The name of the Amazon EKS cluster for which you want to list capabilities.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `nextToken` value. If you don't specify a value, the default is 100 results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A summary of a capability, containing basic information without the full configuration details. This is returned by the `ListCapabilities` operation.
 *
 * @public
 */
export interface CapabilitySummary {
  /**
   * The unique name of the capability within the cluster.
   *
   * @public
   */
  capabilityName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the capability.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The type of capability. Valid values are `ACK`, `ARGOCD`, or `KRO`.
   *
   * @public
   */
  type?: CapabilityType | undefined;

  /**
   * The current status of the capability.
   *
   * @public
   */
  status?: CapabilityStatus | undefined;

  /**
   * The version of the capability software that is currently running.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the capability was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The Unix epoch timestamp in seconds for when the capability was last modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCapabilitiesResponse {
  /**
   * A list of capability summary objects, each containing basic information about a capability including its name, ARN, type, status, version, and timestamps.
   *
   * @public
   */
  capabilities?: CapabilitySummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListCapabilities` request. When the results of a `ListCapabilities` request exceed `maxResults`, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificateAuthoritiesRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned `nextToken` value. If you don't specify a value, the default is 100 results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCertificateAuthoritiesResponse {
  /**
   * A list of certificate authority summary objects, each containing basic information about a certificate authority, including its ID, signing status, and distribution status.
   *
   * @public
   */
  certificateAuthorities?: CertificateAuthoritySummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListCertificateAuthorities` request. When the results of a `ListCertificateAuthorities` request exceed `maxResults`, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListClustersRequest {
  /**
   * The maximum number of results, returned in paginated output. You receive `maxResults` in a single page, along with a `nextToken` response element. You can see the remaining results of the initial request by sending another request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a `nextToken` value, if applicable, are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Indicates whether external clusters are included in the returned list. Use '`all`' to return [https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html](https://docs.aws.amazon.com/eks/latest/userguide/eks-connector.html)connected clusters, or blank to return only Amazon EKS clusters. '`all`' must be in lowercase otherwise an error occurs.
   *
   * @public
   */
  include?: string[] | undefined;
}

/**
 * @public
 */
export interface ListClustersResponse {
  /**
   * A list of all of the clusters for your account in the specified Amazon Web Services Region .
   *
   * @public
   */
  clusters?: string[] | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEksAnywhereSubscriptionsRequest {
  /**
   * The maximum number of cluster results returned by ListEksAnywhereSubscriptions in paginated output. When you use this parameter, ListEksAnywhereSubscriptions returns only maxResults results in a single page along with a nextToken response element. You can see the remaining results of the initial request by sending another ListEksAnywhereSubscriptions request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, ListEksAnywhereSubscriptions returns up to 10 results and a nextToken value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListEksAnywhereSubscriptions` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of subscription statuses to filter on.
   *
   * @public
   */
  includeStatus?: EksAnywhereSubscriptionStatus[] | undefined;
}

/**
 * @public
 */
export interface ListEksAnywhereSubscriptionsResponse {
  /**
   * A list of all subscription objects in the region, filtered by includeStatus and paginated by nextToken and maxResults.
   *
   * @public
   */
  subscriptions?: EksAnywhereSubscription[] | undefined;

  /**
   * The nextToken value to include in a future ListEksAnywhereSubscriptions request. When the results of a ListEksAnywhereSubscriptions request exceed maxResults, you can use this value to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFargateProfilesRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The maximum number of results, returned in paginated output. You receive `maxResults` in a single page, along with a `nextToken` response element. You can see the remaining results of the initial request by sending another request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a `nextToken` value, if applicable, are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFargateProfilesResponse {
  /**
   * A list of all of the Fargate profiles associated with the specified cluster.
   *
   * @public
   */
  fargateProfileNames?: string[] | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityProviderConfigsRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The maximum number of results, returned in paginated output. You receive `maxResults` in a single page, along with a `nextToken` response element. You can see the remaining results of the initial request by sending another request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a `nextToken` value, if applicable, are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityProviderConfigsResponse {
  /**
   * The identity provider configurations for the cluster.
   *
   * @public
   */
  identityProviderConfigs?: IdentityProviderConfig[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListIdentityProviderConfigsResponse` request. When the results of a `ListIdentityProviderConfigsResponse` request exceed `maxResults`, you can use this value to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The criteria to use for the insights.
 *
 * @public
 */
export interface InsightsFilter {
  /**
   * The categories to use to filter insights. The following lists the available categories:
   *
   * - `UPGRADE_READINESS`: Amazon EKS identifies issues that could impact your ability to upgrade to new versions of Kubernetes. These are called upgrade insights.
   * - `MISCONFIGURATION`: Amazon EKS identifies misconfiguration in your EKS Hybrid Nodes setup that could impair functionality of your cluster or workloads. These are called configuration insights.
   *
   * @public
   */
  categories?: Category[] | undefined;

  /**
   * The Kubernetes versions to use to filter the insights.
   *
   * @public
   */
  kubernetesVersions?: string[] | undefined;

  /**
   * The statuses to use to filter the insights.
   *
   * @public
   */
  statuses?: InsightStatusValue[] | undefined;
}

/**
 * @public
 */
export interface ListInsightsRequest {
  /**
   * The name of the Amazon EKS cluster associated with the insights.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The criteria to filter your list of insights for your cluster. You can filter which insights are returned by category, associated Kubernetes version, and status.
   *
   * @public
   */
  filter?: InsightsFilter | undefined;

  /**
   * The maximum number of identity provider configurations returned by `ListInsights` in paginated output. When you use this parameter, `ListInsights` returns only `maxResults` results in a single page along with a `nextToken` response element. You can see the remaining results of the initial request by sending another `ListInsights` request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, `ListInsights` returns up to 100 results and a `nextToken` value, if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListInsights` request. When the results of a `ListInsights` request exceed `maxResults`, you can use this value to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The summarized description of the insight.
 *
 * @public
 */
export interface InsightSummary {
  /**
   * The ID of the insight.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the insight.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The category of the insight.
   *
   * @public
   */
  category?: Category | undefined;

  /**
   * The Kubernetes minor version associated with an insight if applicable.
   *
   * @public
   */
  kubernetesVersion?: string | undefined;

  /**
   * The time Amazon EKS last successfully completed a refresh of this insight check on the cluster.
   *
   * @public
   */
  lastRefreshTime?: Date | undefined;

  /**
   * The time the status of the insight last changed.
   *
   * @public
   */
  lastTransitionTime?: Date | undefined;

  /**
   * The description of the insight which includes alert criteria, remediation recommendation, and additional resources (contains Markdown).
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An object containing more detail on the status of the insight.
   *
   * @public
   */
  insightStatus?: InsightStatus | undefined;
}

/**
 * @public
 */
export interface ListInsightsResponse {
  /**
   * The returned list of insights.
   *
   * @public
   */
  insights?: InsightSummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListInsights` request. When the results of a `ListInsights` request exceed `maxResults`, you can use this value to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNodegroupsRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The maximum number of results, returned in paginated output. You receive `maxResults` in a single page, along with a `nextToken` response element. You can see the remaining results of the initial request by sending another request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a `nextToken` value, if applicable, are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListNodegroupsResponse {
  /**
   * A list of all of the node groups associated with the specified cluster.
   *
   * @public
   */
  nodegroups?: string[] | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPodIdentityAssociationsRequest {
  /**
   * The name of the cluster that the associations are in.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the Kubernetes namespace inside the cluster that the associations are in.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the Kubernetes service account that the associations use.
   *
   * @public
   */
  serviceAccount?: string | undefined;

  /**
   * The maximum number of EKS Pod Identity association results returned by `ListPodIdentityAssociations` in paginated output. When you use this parameter, `ListPodIdentityAssociations` returns only `maxResults` results in a single page along with a `nextToken` response element. You can see the remaining results of the initial request by sending another `ListPodIdentityAssociations` request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, `ListPodIdentityAssociations` returns up to 100 results and a `nextToken` value if applicable.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The `nextToken` value returned from a previous paginated `ListUpdates` request where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The summarized description of the association.
 *
 * Each summary is simplified by removing these fields compared to the full [`PodIdentityAssociation`](https://docs.aws.amazon.com/eks/latest/APIReference/API_PodIdentityAssociation.html):
 *
 * - The IAM role: `roleArn`
 * - The timestamp that the association was created at: `createdAt`
 * - The most recent timestamp that the association was modified at:. `modifiedAt`
 * - The tags on the association: `tags`
 *
 * @public
 */
export interface PodIdentityAssociationSummary {
  /**
   * The name of the cluster that the association is in.
   *
   * @public
   */
  clusterName?: string | undefined;

  /**
   * The name of the Kubernetes namespace inside the cluster to create the association in. The service account and the Pods that use the service account must be in this namespace.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.
   *
   * @public
   */
  serviceAccount?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the association.
   *
   * @public
   */
  associationArn?: string | undefined;

  /**
   * The ID of the association.
   *
   * @public
   */
  associationId?: string | undefined;

  /**
   * If defined, the association is owned by an Amazon EKS add-on.
   *
   * @public
   */
  ownerArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPodIdentityAssociationsResponse {
  /**
   * The list of summarized descriptions of the associations that are in the cluster and match any filters that you provided.
   *
   * Each summary is simplified by removing these fields compared to the full [`PodIdentityAssociation`](https://docs.aws.amazon.com/eks/latest/APIReference/API_PodIdentityAssociation.html):
   *
   * - The IAM role: `roleArn`
   * - The timestamp that the association was created at: `createdAt`
   * - The most recent timestamp that the association was modified at:. `modifiedAt`
   * - The tags on the association: `tags`
   *
   * @public
   */
  associations?: PodIdentityAssociationSummary[] | undefined;

  /**
   * The `nextToken` value to include in a future `ListPodIdentityAssociations` request. When the results of a `ListPodIdentityAssociations` request exceed `maxResults`, you can use this value to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource to list tags for.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags for the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListUpdatesRequest {
  /**
   * The name of the Amazon EKS cluster to list updates for.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the Amazon EKS managed node group to list updates for.
   *
   * @public
   */
  nodegroupName?: string | undefined;

  /**
   * The names of the installed add-ons that have available updates.
   *
   * @public
   */
  addonName?: string | undefined;

  /**
   * The name of the capability for which you want to list updates.
   *
   * @public
   */
  capabilityName?: string | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results, returned in paginated output. You receive `maxResults` in a single page, along with a `nextToken` response element. You can see the remaining results of the initial request by sending another request with the returned `nextToken` value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a `nextToken` value, if applicable, are returned.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListUpdatesResponse {
  /**
   * A list of all the updates for the specified cluster and Region.
   *
   * @public
   */
  updateIds?: string[] | undefined;

  /**
   * The `nextToken` value returned from a previous paginated request, where `maxResults` was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the `nextToken` value. This value is null when there are no more results to return.
   *
   * > **Note:** This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The configuration sent to a cluster for configuration.
 *
 * @public
 */
export interface ConnectorConfigRequest {
  /**
   * The Amazon Resource Name (ARN) of the role that is authorized to request the connector configuration.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The cloud provider for the target cluster to connect.
   *
   * @public
   */
  provider: ConnectorConfigProvider | undefined;
}

/**
 * @public
 */
export interface RegisterClusterRequest {
  /**
   * A unique name for this cluster in your Amazon Web Services Region.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The configuration settings required to connect the Kubernetes cluster to the Amazon EKS control plane.
   *
   * @public
   */
  connectorConfig: ConnectorConfigRequest | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterClusterResponse {
  /**
   * An object representing an Amazon EKS cluster.
   *
   * @public
   */
  cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface StartInsightsRefreshRequest {
  /**
   * The name of the cluster for the refresh insights operation.
   *
   * @public
   */
  clusterName: string | undefined;
}

/**
 * @public
 */
export interface StartInsightsRefreshResponse {
  /**
   * The message associated with the insights refresh operation.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The current status of the insights refresh operation.
   *
   * @public
   */
  status?: InsightsRefreshStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to add tags to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or Amazon Web Services resources.
   *
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
   * The Amazon Resource Name (ARN) of the resource to delete tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to remove.
   *
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
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ARN of the IAM principal for the `AccessEntry`.
   *
   * @public
   */
  principalArn: string | undefined;

  /**
   * The value for `name` that you've specified for `kind: Group` as a `subject` in a Kubernetes `RoleBinding` or `ClusterRoleBinding` object. Amazon EKS doesn't confirm that the value for `name` exists in any bindings on your cluster. You can specify one or more names.
   *
   * Kubernetes authorizes the `principalArn` of the access entry to access any cluster objects that you've specified in a Kubernetes `Role` or `ClusterRole` object that is also specified in a binding's `roleRef`. For more information about creating Kubernetes `RoleBinding`, `ClusterRoleBinding`, `Role`, or `ClusterRole` objects, see [Using RBAC Authorization in the Kubernetes documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/).
   *
   * If you want Amazon EKS to authorize the `principalArn` (instead of, or in addition to Kubernetes authorizing the `principalArn`), you can associate one or more access policies to the access entry using `AssociateAccessPolicy`. If you associate any access policies, the `principalARN` has all permissions assigned in the associated access policies and all permissions in any Kubernetes `Role` or `ClusterRole` objects that the group names are bound to.
   *
   * @public
   */
  kubernetesGroups?: string[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The username to authenticate to Kubernetes with. We recommend not specifying a username and letting Amazon EKS specify it for you. For more information about the value Amazon EKS specifies for you, or constraints before specifying your own username, see [Creating access entries](https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html#creating-access-entries) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  username?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessEntryResponse {
  /**
   * The ARN of the IAM principal for the `AccessEntry`.
   *
   * @public
   */
  accessEntry?: AccessEntry | undefined;
}

/**
 * @public
 */
export interface UpdateAddonRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the add-on. The name must match one of the names returned by [`ListAddons`](https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html).
   *
   * @public
   */
  addonName: string | undefined;

  /**
   * The version of the add-on. The version must match one of the versions returned by [`DescribeAddonVersions`](https://docs.aws.amazon.com/eks/latest/APIReference/API_DescribeAddonVersions.html).
   *
   * @public
   */
  addonVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an existing IAM role to bind to the add-on's service account. The role must be assigned the IAM permissions required by the add-on. If you don't specify an existing IAM role, then the add-on uses the permissions assigned to the node IAM role. For more information, see [Amazon EKS node IAM role](https://docs.aws.amazon.com/eks/latest/userguide/create-node-role.html) in the *Amazon EKS User Guide*.
   *
   * > **Note:** To specify an existing IAM role, you must have an IAM OpenID Connect (OIDC) provider created for your cluster. For more information, see [Enabling IAM roles for service accounts on your cluster](https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  serviceAccountRoleArn?: string | undefined;

  /**
   * How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Conflicts are handled based on the option you choose:
   *
   * - **None** – Amazon EKS doesn't change the value. The update might fail.
   * - **Overwrite** – Amazon EKS overwrites the changed value back to the Amazon EKS default value.
   * - **Preserve** – Amazon EKS preserves the value. If you choose this option, we recommend that you test any field and value changes on a non-production cluster before updating the add-on on your production cluster.
   *
   * @public
   */
  resolveConflicts?: ResolveConflicts | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The set of configuration values for the add-on that's created. The values that you provide are validated against the schema returned by `DescribeAddonConfiguration`.
   *
   * @public
   */
  configurationValues?: string | undefined;

  /**
   * An array of EKS Pod Identity associations to be updated. Each association maps a Kubernetes service account to an IAM role. If this value is left blank, no change. If an empty array is provided, existing associations owned by the add-on are deleted.
   *
   * For more information, see [Attach an IAM Role to an Amazon EKS add-on using EKS Pod Identity](https://docs.aws.amazon.com/eks/latest/userguide/add-ons-iam.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  podIdentityAssociations?: AddonPodIdentityAssociations[] | undefined;
}

/**
 * @public
 */
export interface UpdateAddonResponse {
  /**
   * An object representing an asynchronous update.
   *
   * @public
   */
  update?: Update | undefined;
}

/**
 * Configuration updates for an ACK (Amazon Web Services Controllers for Kubernetes) capability. You only need to specify the fields that you want to update.
 *
 * @public
 */
export interface UpdateAckConfig {
  /**
   * Specifies whether ACK controllers resolve resource references to resources in a different Kubernetes namespace. Set this value to `false` to require references to remain within the same namespace, or `true` to allow cross-namespace references. If you omit this field, the current value is unchanged.
   *
   * @public
   */
  enableCrossNamespace?: boolean | undefined;

  /**
   * An updated list of ACK service names whose controllers are turned off for this capability. This list replaces the previous list instead of merging with it, so specify the complete set of services that you want turned off. If you omit this field, the previous list is unchanged. To turn all services back on, specify an empty list.
   *
   * @public
   */
  disabledServices?: string[] | undefined;
}

/**
 * Updates to RBAC role mappings for an Argo CD capability. You can add, update, or remove role mappings in a single operation.
 *
 * @public
 */
export interface UpdateRoleMappings {
  /**
   * A list of role mappings to add or update. If a mapping for the specified role already exists, it will be updated with the new identities. If it doesn't exist, a new mapping will be created.
   *
   * @public
   */
  addOrUpdateRoleMappings?: ArgoCdRoleMapping[] | undefined;

  /**
   * A list of role mappings to remove from the RBAC configuration. Each mapping specifies an Argo CD role (`ADMIN`, `EDITOR`, or `VIEWER`) and the identities to remove from that role.
   *
   * @public
   */
  removeRoleMappings?: ArgoCdRoleMapping[] | undefined;
}

/**
 * Configuration updates for an Argo CD capability. You only need to specify the fields you want to update.
 *
 * @public
 */
export interface UpdateArgoCdConfig {
  /**
   * Updated RBAC role mappings for the Argo CD capability. You can add, update, or remove role mappings.
   *
   * @public
   */
  rbacRoleMappings?: UpdateRoleMappings | undefined;

  /**
   * Updated network access configuration for the Argo CD capability's managed API server endpoint. You can add or remove VPC endpoint associations to control which VPCs have private access to the Argo CD server.
   *
   * @public
   */
  networkAccess?: ArgoCdNetworkAccessConfigRequest | undefined;
}

/**
 * Configuration updates for a capability. The structure varies depending on the capability type.
 *
 * @public
 */
export interface UpdateCapabilityConfiguration {
  /**
   * Configuration updates specific to Argo CD capabilities.
   *
   * @public
   */
  argoCd?: UpdateArgoCdConfig | undefined;

  /**
   * Configuration updates specific to ACK (Amazon Web Services Controllers for Kubernetes) capabilities.
   *
   * @public
   */
  ack?: UpdateAckConfig | undefined;
}

/**
 * @public
 */
export interface UpdateCapabilityRequest {
  /**
   * The name of the Amazon EKS cluster that contains the capability you want to update configuration for.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the capability to update configuration for.
   *
   * @public
   */
  capabilityName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the capability uses to interact with Amazon Web Services services. If you specify a new role ARN, the capability will start using the new role for all subsequent operations.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The updated configuration settings for the capability. You only need to specify the configuration parameters you want to change. For Argo CD capabilities, you can update RBAC role mappings and network access settings.
   *
   * @public
   */
  configuration?: UpdateCapabilityConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. This token is valid for 24 hours after creation.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The updated delete propagation policy for the capability. Currently, the only supported value is `RETAIN`.
   *
   * @public
   */
  deletePropagationPolicy?: CapabilityDeletePropagationPolicy | undefined;
}

/**
 * @public
 */
export interface UpdateCapabilityResponse {
  /**
   * An object representing an asynchronous update.
   *
   * @public
   */
  update?: Update | undefined;
}

/**
 * The access configuration information for the cluster.
 *
 * @public
 */
export interface UpdateAccessConfigRequest {
  /**
   * The desired authentication mode for the cluster.
   *
   * @public
   */
  authenticationMode?: AuthenticationMode | undefined;
}

/**
 * @public
 */
export interface UpdateClusterConfigRequest {
  /**
   * The name of the Amazon EKS cluster to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An object representing the VPC configuration to use for the cluster update. You can use this parameter to update the control plane egress mode, the subnets used by the cluster, the security groups, and the endpoint access settings.
   *
   * @public
   */
  resourcesVpcConfig?: VpcConfigRequest | undefined;

  /**
   * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs . By default, cluster control plane logs aren't exported to CloudWatch Logs . For more information, see [Amazon EKS cluster control plane logs](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html) in the **Amazon EKS User Guide** .
   *
   * > **Note:** CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see [CloudWatch Pricing](http://aws.amazon.com/cloudwatch/pricing/).
   *
   * @public
   */
  logging?: Logging | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * The access configuration for the cluster.
   *
   * @public
   */
  accessConfig?: UpdateAccessConfigRequest | undefined;

  /**
   * You can enable or disable extended support for clusters currently on standard support. You cannot disable extended support once it starts. You must enable extended support before your cluster exits standard support.
   *
   * @public
   */
  upgradePolicy?: UpgradePolicyRequest | undefined;

  /**
   * Enable or disable ARC zonal shift for the cluster. If zonal shift is enabled, Amazon Web Services configures zonal autoshift for the cluster.
   *
   * Zonal shift is a feature of Amazon Application Recovery Controller (ARC). ARC zonal shift is designed to be a temporary measure that allows you to move traffic for a resource away from an impaired AZ until the zonal shift expires or you cancel it. You can extend the zonal shift if necessary.
   *
   * You can start a zonal shift for an EKS cluster, or you can allow Amazon Web Services to do it for you by enabling *zonal autoshift*. This shift updates the flow of east-to-west network traffic in your cluster to only consider network endpoints for Pods running on worker nodes in healthy AZs. Additionally, any ALB or NLB handling ingress traffic for applications in your EKS cluster will automatically route traffic to targets in the healthy AZs. For more information about zonal shift in EKS, see [Learn about Amazon Application Recovery Controller (ARC) Zonal Shift in Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/zone-shift.html) in the **Amazon EKS User Guide** .
   *
   * @public
   */
  zonalShiftConfig?: ZonalShiftConfigRequest | undefined;

  /**
   * Update the configuration of the compute capability of your EKS Auto Mode cluster. For example, enable the capability.
   *
   * @public
   */
  computeConfig?: ComputeConfigRequest | undefined;

  /**
   * The Kubernetes network configuration for the cluster.
   *
   * @public
   */
  kubernetesNetworkConfig?: KubernetesNetworkConfigRequest | undefined;

  /**
   * Update the configuration of the block storage capability of your EKS Auto Mode cluster. For example, enable the capability.
   *
   * @public
   */
  storageConfig?: StorageConfigRequest | undefined;

  /**
   * The configuration in the cluster for EKS Hybrid Nodes. You can add, change, or remove this configuration after the cluster is created.
   *
   * @public
   */
  remoteNetworkConfig?: RemoteNetworkConfigRequest | undefined;

  /**
   * Specifies whether to enable or disable deletion protection for the cluster. When enabled (`true`), the cluster cannot be deleted until deletion protection is explicitly disabled. When disabled (`false`), the cluster can be deleted normally.
   *
   * @public
   */
  deletionProtection?: boolean | undefined;

  /**
   * The control plane scaling tier configuration. For more information, see EKS Provisioned Control Plane in the Amazon EKS User Guide.
   *
   * @public
   */
  controlPlaneScalingConfig?: ControlPlaneScalingConfig | undefined;

  /**
   * The Kubernetes API server configuration for the updated cluster.
   *
   * @public
   */
  kubeApiServerConfig?: KubeApiServerConfigRequest | undefined;

  /**
   * The Kubernetes scheduler configuration for the updated cluster.
   *
   * @public
   */
  kubeSchedulerConfig?: KubeSchedulerConfigRequest | undefined;

  /**
   * The Kubernetes controller manager configuration for the updated cluster.
   *
   * @public
   */
  kubeControllerManagerConfig?: KubeControllerManagerConfigRequest | undefined;
}

/**
 * @public
 */
export interface UpdateClusterConfigResponse {
  /**
   * An object representing an asynchronous update.
   *
   * @public
   */
  update?: Update | undefined;
}

/**
 * The rollback configuration for the cluster version rollback.
 *
 * @public
 */
export interface RollbackConfig {
  /**
   * The length of time in minutes to wait before cancelling the update. Timeout is a minimum-bound property, meaning the timeout occurs no sooner than the time you specify, but can occur shortly thereafter. This value can be between 120 (2 hours) and 10080 (7 days). Default: `720` (12 hours) if not specified.
   *
   * @public
   */
  timeoutMinutes?: number | undefined;
}

/**
 * @public
 */
export interface UpdateClusterVersionRequest {
  /**
   * The name of the Amazon EKS cluster to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The desired Kubernetes version following a successful update.
   *
   * @public
   */
  version: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * Set this value to `true` to override upgrade-blocking or rollback-blocking readiness checks when updating a cluster.
   *
   * @public
   */
  force?: boolean | undefined;

  /**
   * The rollback configuration for the cluster version rollback.
   *
   * @public
   */
  rollbackConfig?: RollbackConfig | undefined;
}

/**
 * @public
 */
export interface UpdateClusterVersionResponse {
  /**
   * The full description of the specified update
   *
   * @public
   */
  update?: Update | undefined;
}

/**
 * @public
 */
export interface UpdateEksAnywhereSubscriptionRequest {
  /**
   * The ID of the subscription.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A boolean indicating whether or not to automatically renew the subscription.
   *
   * @public
   */
  autoRenew: boolean | undefined;

  /**
   * Unique, case-sensitive identifier to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEksAnywhereSubscriptionResponse {
  /**
   * The full description of the updated subscription.
   *
   * @public
   */
  subscription?: EksAnywhereSubscription | undefined;
}

/**
 * An object representing a Kubernetes `label` change for a managed node group.
 *
 * @public
 */
export interface UpdateLabelsPayload {
  /**
   * The Kubernetes `labels` to add or update.
   *
   * @public
   */
  addOrUpdateLabels?: Record<string, string> | undefined;

  /**
   * The Kubernetes `labels` to remove.
   *
   * @public
   */
  removeLabels?: string[] | undefined;
}

/**
 * An object representing the details of an update to a taints payload. For more information, see [Node taints on managed node groups](https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html) in the *Amazon EKS User Guide*.
 *
 * @public
 */
export interface UpdateTaintsPayload {
  /**
   * Kubernetes taints to be added or updated.
   *
   * @public
   */
  addOrUpdateTaints?: Taint[] | undefined;

  /**
   * Kubernetes taints to remove.
   *
   * @public
   */
  removeTaints?: Taint[] | undefined;
}

/**
 * @public
 */
export interface UpdateNodegroupConfigRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the managed node group to update.
   *
   * @public
   */
  nodegroupName: string | undefined;

  /**
   * The Kubernetes `labels` to apply to the nodes in the node group after the update.
   *
   * @public
   */
  labels?: UpdateLabelsPayload | undefined;

  /**
   * The Kubernetes taints to be applied to the nodes in the node group after the update. For more information, see [Node taints on managed node groups](https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html).
   *
   * @public
   */
  taints?: UpdateTaintsPayload | undefined;

  /**
   * The scaling configuration details for the Auto Scaling group after the update.
   *
   * @public
   */
  scalingConfig?: NodegroupScalingConfig | undefined;

  /**
   * The node group update configuration.
   *
   * @public
   */
  updateConfig?: NodegroupUpdateConfig | undefined;

  /**
   * The node auto repair configuration for the node group.
   *
   * @public
   */
  nodeRepairConfig?: NodeRepairConfig | undefined;

  /**
   * The warm pool configuration to apply to the node group. You can use this to add a warm pool to an existing node group or modify the settings of an existing warm pool.
   *
   * @public
   */
  warmPoolConfig?: WarmPoolConfig | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNodegroupConfigResponse {
  /**
   * An object representing an asynchronous update.
   *
   * @public
   */
  update?: Update | undefined;
}

/**
 * @public
 */
export interface UpdateNodegroupVersionRequest {
  /**
   * The name of your cluster.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The name of the managed node group to update.
   *
   * @public
   */
  nodegroupName: string | undefined;

  /**
   * The Kubernetes version to update to. If no version is specified, then the node group will be updated to match the cluster's current Kubernetes version, and the latest available AMI for that version will be used. You can also specify the Kubernetes version of the cluster to update the node group to the latest AMI version of the cluster's Kubernetes version. If you specify `launchTemplate`, and your launch template uses a custom AMI, then don't specify `version`, or the node group update will fail. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The AMI version of the Amazon EKS optimized AMI to use for the update. By default, the latest available AMI version for the node group's Kubernetes version is used. For information about Linux versions, see [Amazon EKS optimized Amazon Linux AMI versions](https://docs.aws.amazon.com/eks/latest/userguide/eks-linux-ami-versions.html) in the *Amazon EKS User Guide*. Amazon EKS managed node groups support the November 2022 and later releases of the Windows AMIs. For information about Windows versions, see [Amazon EKS optimized Windows AMI versions](https://docs.aws.amazon.com/eks/latest/userguide/eks-ami-versions-windows.html) in the *Amazon EKS User Guide*.
   *
   * If you specify `launchTemplate`, and your launch template uses a custom AMI, then don't specify `releaseVersion`, or the node group update will fail. For more information about using launch templates with Amazon EKS, see [Customizing managed nodes with launch templates](https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html) in the *Amazon EKS User Guide*.
   *
   * @public
   */
  releaseVersion?: string | undefined;

  /**
   * An object representing a node group's launch template specification. You can only update a node group using a launch template if the node group was originally deployed with a launch template. When updating, you must specify the same launch template ID or name that was used to create the node group.
   *
   * @public
   */
  launchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * Force the update if any `Pod` on the existing node group can't be drained due to a `Pod` disruption budget issue. If an update fails because all Pods can't be drained, you can force the update after it fails to terminate the old node whether or not any `Pod` is running on the node.
   *
   * @public
   */
  force?: boolean | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNodegroupVersionResponse {
  /**
   * An object representing an asynchronous update.
   *
   * @public
   */
  update?: Update | undefined;
}

/**
 * @public
 */
export interface UpdatePodIdentityAssociationRequest {
  /**
   * The name of the cluster that you want to update the association in.
   *
   * @public
   */
  clusterName: string | undefined;

  /**
   * The ID of the association to be updated.
   *
   * @public
   */
  associationId: string | undefined;

  /**
   * The new IAM role to change in the association.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientRequestToken?: string | undefined;

  /**
   * Disable the automatic sessions tags that are appended by EKS Pod Identity.
   *
   * EKS Pod Identity adds a pre-defined set of session tags when it assumes the role. You can use these tags to author a single role that can work across resources by allowing access to Amazon Web Services resources based on matching tags. By default, EKS Pod Identity attaches six tags, including tags for cluster name, namespace, and service account name. For the list of tags added by EKS Pod Identity, see [List of session tags added by EKS Pod Identity](https://docs.aws.amazon.com/eks/latest/userguide/pod-id-abac.html#pod-id-abac-tags) in the *Amazon EKS User Guide*.
   *
   * Amazon Web Services compresses inline session policies, managed policy ARNs, and session tags into a packed binary format that has a separate limit. If you receive a `PackedPolicyTooLarge` error indicating the packed binary format has exceeded the size limit, you can attempt to reduce the size by disabling the session tags added by EKS Pod Identity.
   *
   * @public
   */
  disableSessionTags?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target IAM role to associate with the service account. This role is assumed by using the EKS Pod Identity association role, then the credentials for this role are injected into the Pod.
   *
   * When you run applications on Amazon EKS, your application might need to access Amazon Web Services resources from a different role that exists in the same or different Amazon Web Services account. For example, your application running in “Account A” might need to access resources, such as buckets in “Account B” or within “Account A” itself. You can create a association to access Amazon Web Services resources in “Account B” by creating two IAM roles: a role in “Account A” and a role in “Account B” (which can be the same or different account), each with the necessary trust and permission policies. After you provide these roles in the *IAM role* and *Target IAM role* fields, EKS will perform role chaining to ensure your application gets the required permissions. This means Role A will assume Role B, allowing your Pods to securely access resources like S3 buckets in the target account.
   *
   * @public
   */
  targetRoleArn?: string | undefined;

  /**
   * An optional IAM policy in JSON format (as an escaped string) that applies additional restrictions to this pod identity association beyond the IAM policies attached to the IAM role. This policy is applied as the intersection of the role's policies and this policy, allowing you to reduce the permissions that applications in the pods can use. Use this policy to enforce least privilege access while still leveraging a shared IAM role across multiple applications.
   *
   * **Important considerations**
   *
   * - **Session tags:** When using this policy, `disableSessionTags` must be set to `true`.
   * - **Target role permissions:** If you specify both a `TargetRoleArn` and a policy, the policy restrictions apply only to the target role's permissions, not to the initial role used for assuming the target role.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePodIdentityAssociationResponse {
  /**
   * The full description of the association that was updated.
   *
   * @public
   */
  association?: PodIdentityAssociation | undefined;
}
