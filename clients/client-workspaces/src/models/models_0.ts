// smithy-typescript generated code
import type {
  AccessEndpointType,
  AccessPropertyValue,
  AccountLinkStatusEnum,
  AGAModeForDirectoryEnum,
  AGAModeForWorkSpaceEnum,
  AGAPreferredProtocolForDirectory,
  AGAPreferredProtocolForWorkSpace,
  Application,
  ApplicationAssociatedResourceType,
  ApplicationSettingsStatusEnum,
  AssociationErrorCode,
  AssociationState,
  AssociationStatus,
  AuthenticationType,
  BundleAssociatedResourceType,
  BundleType,
  CertificateBasedAuthStatusEnum,
  ClientDeviceType,
  Compute,
  ConnectionAliasState,
  ConnectionState,
  CustomImageProtocol,
  CustomWorkspaceImageImportState,
  DataReplication,
  DedicatedTenancyAccountType,
  DedicatedTenancyModificationStateEnum,
  DedicatedTenancySupportEnum,
  DedicatedTenancySupportResultEnum,
  DeletableCertificateBasedAuthProperty,
  DeletableSamlProperty,
  DescribeWorkspaceDirectoriesFilterName,
  DescribeWorkspacesPoolsFilterName,
  DescribeWorkspacesPoolsFilterOperator,
  EndpointEncryptionMode,
  ImageAssociatedResourceType,
  ImageComputeType,
  ImageType,
  ImageValidationMode,
  InternetFallbackProtocol,
  LogUploadEnum,
  ModificationResourceEnum,
  ModificationStateEnum,
  OperatingSystemName,
  OperatingSystemType,
  OSVersion,
  Platform,
  PoolsRunningMode,
  Protocol,
  ReconnectEnum,
  RunningMode,
  SamlStatusEnum,
  SessionConnectionState,
  StandbyWorkspaceRelationshipType,
  StorageConnectorStatusEnum,
  StorageConnectorTypeEnum,
  StreamingExperiencePreferredProtocolEnum,
  TargetWorkspaceState,
  Tenancy,
  UserIdentityType,
  UserSettingActionEnum,
  UserSettingPermissionEnum,
  WorkSpaceApplicationLicenseType,
  WorkSpaceApplicationState,
  WorkSpaceAssociatedResourceType,
  WorkspaceBundleState,
  WorkspaceDirectoryState,
  WorkspaceDirectoryType,
  WorkspaceImageErrorDetailCode,
  WorkspaceImageIngestionProcess,
  WorkspaceImageRequiredTenancy,
  WorkspaceImageState,
  WorkspacesPoolErrorCode,
  WorkspacesPoolState,
  WorkspaceState,
  WorkspaceType,
} from "./enums";

/**
 * @public
 */
export interface AcceptAccountLinkInvitationRequest {
  /**
   * The identifier of the account link.
   *
   * @public
   */
  LinkId: string | undefined;

  /**
   * A string of up to 64 ASCII characters that Amazon WorkSpaces uses to ensure idempotent creation.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Information about about the account link.
 *
 * @public
 */
export interface AccountLink {
  /**
   * The identifier of the account link.
   *
   * @public
   */
  AccountLinkId?: string | undefined;

  /**
   * The status of the account link.
   *
   * @public
   */
  AccountLinkStatus?: AccountLinkStatusEnum | undefined;

  /**
   * The identifier of the source account.
   *
   * @public
   */
  SourceAccountId?: string | undefined;

  /**
   * The identifier of the target account.
   *
   * @public
   */
  TargetAccountId?: string | undefined;
}

/**
 * @public
 */
export interface AcceptAccountLinkInvitationResult {
  /**
   * Information about the account link.
   *
   * @public
   */
  AccountLink?: AccountLink | undefined;
}

/**
 * Describes the access type and endpoint for a WorkSpace.
 *
 * @public
 */
export interface AccessEndpoint {
  /**
   * Indicates the type of access endpoint.
   *
   * @public
   */
  AccessEndpointType?: AccessEndpointType | undefined;

  /**
   * Indicates the VPC endpoint to use for access.
   *
   * @public
   */
  VpcEndpointId?: string | undefined;
}

/**
 * Describes the access endpoint configuration for a WorkSpace.
 *
 * @public
 */
export interface AccessEndpointConfig {
  /**
   * Indicates a list of access endpoints associated with this directory.
   *
   * @public
   */
  AccessEndpoints: AccessEndpoint[] | undefined;

  /**
   * Indicates a list of protocols that fallback to using the public Internet when streaming over a VPC endpoint is not available.
   *
   * @public
   */
  InternetFallbackProtocols?: InternetFallbackProtocol[] | undefined;
}

/**
 * Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account.
 *
 * @public
 */
export interface AccountModification {
  /**
   * The state of the modification to the configuration of BYOL.
   *
   * @public
   */
  ModificationState?: DedicatedTenancyModificationStateEnum | undefined;

  /**
   * The status of BYOL (whether BYOL is being enabled or disabled).
   *
   * @public
   */
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | undefined;

  /**
   * The IP address range, specified as an IPv4 CIDR block, for the management network interface used for the account.
   *
   * @public
   */
  DedicatedTenancyManagementCidrRange?: string | undefined;

  /**
   * The timestamp when the modification of the BYOL configuration was started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The error code that is returned if the configuration of BYOL cannot be modified.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The text of the error message that is returned if the configuration of BYOL cannot be modified.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Information about the Active Directory config.
 *
 * @public
 */
export interface ActiveDirectoryConfig {
  /**
   * The name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Indicates the secret ARN on the service account.
   *
   * @public
   */
  ServiceAccountSecretArn: string | undefined;
}

/**
 * Indicates the reason that the association deployment failed, including the error code and error message.
 *
 * @public
 */
export interface AssociationStateReason {
  /**
   * The error code of the association deployment failure.
   *
   * @public
   */
  ErrorCode?: AssociationErrorCode | undefined;

  /**
   * The error message of the association deployment failure.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Describes the association between an application and an application resource.
 *
 * @public
 */
export interface ApplicationResourceAssociation {
  /**
   * The identifier of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The identifier of the associated resource.
   *
   * @public
   */
  AssociatedResourceId?: string | undefined;

  /**
   * The resource type of the associated resource.
   *
   * @public
   */
  AssociatedResourceType?: ApplicationAssociatedResourceType | undefined;

  /**
   * The time the association was created.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * The time the association status was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The status of the application resource association.
   *
   * @public
   */
  State?: AssociationState | undefined;

  /**
   * The reason the association deployment failed.
   *
   * @public
   */
  StateReason?: AssociationStateReason | undefined;
}

/**
 * The persistent application settings for WorkSpaces Pools users.
 *
 * @public
 */
export interface ApplicationSettingsRequest {
  /**
   * Enables or disables persistent application settings for users during their pool sessions.
   *
   * @public
   */
  Status: ApplicationSettingsStatusEnum | undefined;

  /**
   * The path prefix for the S3 bucket where users’ persistent application settings are stored. You can allow the same persistent application settings to be used across multiple pools by specifying the same settings group for each pool.
   *
   * @public
   */
  SettingsGroup?: string | undefined;
}

/**
 * Describes the persistent application settings for WorkSpaces Pools users.
 *
 * @public
 */
export interface ApplicationSettingsResponse {
  /**
   * Specifies whether persistent application settings are enabled for users during their pool sessions.
   *
   * @public
   */
  Status: ApplicationSettingsStatusEnum | undefined;

  /**
   * The path prefix for the S3 bucket where users’ persistent application settings are stored.
   *
   * @public
   */
  SettingsGroup?: string | undefined;

  /**
   * The S3 bucket where users’ persistent application settings are stored. When persistent application settings are enabled for the first time for an account in an Amazon Web Services Region, an S3 bucket is created. The bucket is unique to the Amazon Web Services account and the Region.
   *
   * @public
   */
  S3BucketName?: string | undefined;
}

/**
 * @public
 */
export interface AssociateConnectionAliasRequest {
  /**
   * The identifier of the connection alias.
   *
   * @public
   */
  AliasId: string | undefined;

  /**
   * The identifier of the directory to associate the connection alias with.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface AssociateConnectionAliasResult {
  /**
   * The identifier of the connection alias association. You use the connection identifier in the DNS TXT record when you're configuring your DNS routing policies.
   *
   * @public
   */
  ConnectionIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface AssociateIpGroupsRequest {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The identifiers of one or more IP access control groups.
   *
   * @public
   */
  GroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface AssociateIpGroupsResult {}

/**
 * @public
 */
export interface AssociateWorkspaceApplicationRequest {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * The identifier of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * Describes the association between an application and a WorkSpace resource.
 *
 * @public
 */
export interface WorkspaceResourceAssociation {
  /**
   * The identifier of the associated resource.
   *
   * @public
   */
  AssociatedResourceId?: string | undefined;

  /**
   * The resource types of the associated resource.
   *
   * @public
   */
  AssociatedResourceType?: WorkSpaceAssociatedResourceType | undefined;

  /**
   * The time the association is created.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * The time the association status was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The status of the WorkSpace resource association.
   *
   * @public
   */
  State?: AssociationState | undefined;

  /**
   * The reason the association deployment failed.
   *
   * @public
   */
  StateReason?: AssociationStateReason | undefined;

  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateWorkspaceApplicationResult {
  /**
   * Information about the association between the specified WorkSpace and the specified application.
   *
   * @public
   */
  Association?: WorkspaceResourceAssociation | undefined;
}

/**
 * Describes a rule for an IP access control group.
 *
 * @public
 */
export interface IpRuleItem {
  /**
   * The IP address range, in CIDR notation.
   *
   * @public
   */
  ipRule?: string | undefined;

  /**
   * The description.
   *
   * @public
   */
  ruleDesc?: string | undefined;
}

/**
 * @public
 */
export interface AuthorizeIpRulesRequest {
  /**
   * The identifier of the group.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * The rules to add to the group.
   *
   * @public
   */
  UserRules: IpRuleItem[] | undefined;
}

/**
 * @public
 */
export interface AuthorizeIpRulesResult {}

/**
 * Describes the compute type of the bundle.
 *
 * @public
 */
export interface ComputeType {
  /**
   * The compute type.
   *
   * @public
   */
  Name?: Compute | undefined;
}

/**
 * Describes the root volume for a WorkSpace bundle.
 *
 * @public
 */
export interface RootStorage {
  /**
   * The size of the root volume.
   *
   * @public
   */
  Capacity: string | undefined;
}

/**
 * Describes the user volume for a WorkSpace bundle.
 *
 * @public
 */
export interface UserStorage {
  /**
   * The size of the user volume.
   *
   * @public
   */
  Capacity: string | undefined;
}

/**
 * Describes a WorkSpace bundle.
 *
 * @public
 */
export interface WorkspaceBundle {
  /**
   * The identifier of the bundle.
   *
   * @public
   */
  BundleId?: string | undefined;

  /**
   * The name of the bundle.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The owner of the bundle. This is the account identifier of the owner, or `AMAZON` if the bundle is provided by Amazon Web Services.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The description of the bundle.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the image that was used to create the bundle.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The size of the root volume.
   *
   * @public
   */
  RootStorage?: RootStorage | undefined;

  /**
   * The size of the user volume.
   *
   * @public
   */
  UserStorage?: UserStorage | undefined;

  /**
   * The compute type of the bundle. For more information, see [Amazon WorkSpaces Bundles](http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles).
   *
   * @public
   */
  ComputeType?: ComputeType | undefined;

  /**
   * The last time that the bundle was updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The time when the bundle was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The state of the WorkSpace bundle.
   *
   * @public
   */
  State?: WorkspaceBundleState | undefined;

  /**
   * The type of WorkSpace bundle.
   *
   * @public
   */
  BundleType?: BundleType | undefined;
}

/**
 * Describes the association between an application and a bundle resource.
 *
 * @public
 */
export interface BundleResourceAssociation {
  /**
   * The identifier of the associated resource.
   *
   * @public
   */
  AssociatedResourceId?: string | undefined;

  /**
   * The resource type of the associated resources.
   *
   * @public
   */
  AssociatedResourceType?: BundleAssociatedResourceType | undefined;

  /**
   * The identifier of the bundle.
   *
   * @public
   */
  BundleId?: string | undefined;

  /**
   * The time the association is created.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * The time the association status was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The status of the bundle resource association.
   *
   * @public
   */
  State?: AssociationState | undefined;

  /**
   * The reason the association deployment failed.
   *
   * @public
   */
  StateReason?: AssociationStateReason | undefined;
}

/**
 * Describes the user capacity for a pool of WorkSpaces.
 *
 * @public
 */
export interface Capacity {
  /**
   * The desired number of user sessions for the WorkSpaces in the pool.
   *
   * @public
   */
  DesiredUserSessions: number | undefined;
}

/**
 * Describes the capacity status for a pool of WorkSpaces.
 *
 * @public
 */
export interface CapacityStatus {
  /**
   * The number of user sessions currently available for streaming from your pool.
   *
   * AvailableUserSessions = ActualUserSessions - ActiveUserSessions
   *
   * @public
   */
  AvailableUserSessions: number | undefined;

  /**
   * The total number of sessions slots that are either running or pending. This represents the total number of concurrent streaming sessions your pool can support in a steady state.
   *
   * @public
   */
  DesiredUserSessions: number | undefined;

  /**
   * The total number of user sessions that are available for streaming or are currently streaming in your pool.
   *
   * ActualUserSessions = AvailableUserSessions + ActiveUserSessions
   *
   * @public
   */
  ActualUserSessions: number | undefined;

  /**
   * The number of user sessions currently being used for your pool.
   *
   * @public
   */
  ActiveUserSessions: number | undefined;
}

/**
 * Describes the properties of the certificate-based authentication you want to use with your WorkSpaces.
 *
 * @public
 */
export interface CertificateBasedAuthProperties {
  /**
   * The status of the certificate-based authentication properties.
   *
   * @public
   */
  Status?: CertificateBasedAuthStatusEnum | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource.
   *
   * @public
   */
  CertificateAuthorityArn?: string | undefined;
}

/**
 * Describes an Amazon WorkSpaces client.
 *
 * @public
 */
export interface ClientProperties {
  /**
   * Specifies whether users can cache their credentials on the Amazon WorkSpaces client. When enabled, users can choose to reconnect to their WorkSpaces without re-entering their credentials.
   *
   * @public
   */
  ReconnectEnabled?: ReconnectEnum | undefined;

  /**
   * Specifies whether users can upload diagnostic log files of Amazon WorkSpaces client directly to WorkSpaces to troubleshoot issues when using the WorkSpaces client. When enabled, the log files will be sent to WorkSpaces automatically and will be applied to all users in the specified directory.
   *
   * @public
   */
  LogUploadEnabled?: LogUploadEnum | undefined;

  /**
   * The client experience policy that determines which client experience the user sees. Administrators can set this policy to control the client experience for users in a directory. Valid values include `FORCE_CLASSIC`, `FORCE_UI_2026`, and `USER_CHOICE`.
   *
   * @public
   */
  ClientExperiencePolicy?: string | undefined;
}

/**
 * Information about the Amazon WorkSpaces client.
 *
 * @public
 */
export interface ClientPropertiesResult {
  /**
   * The resource identifier, in the form of a directory ID.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * Information about the Amazon WorkSpaces client.
   *
   * @public
   */
  ClientProperties?: ClientProperties | undefined;
}

/**
 * Describes an Connect Customer client add-in.
 *
 * @public
 */
export interface ConnectClientAddIn {
  /**
   * The client add-in identifier.
   *
   * @public
   */
  AddInId?: string | undefined;

  /**
   * The directory identifier for which the client add-in is configured.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The name of the client add in.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The endpoint URL of the client add-in.
   *
   * @public
   */
  URL?: string | undefined;
}

/**
 * Describes a connection alias association that is used for cross-Region redirection. For more information, see [Cross-Region Redirection for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html).
 *
 * @public
 */
export interface ConnectionAliasAssociation {
  /**
   * The association status of the connection alias.
   *
   * @public
   */
  AssociationStatus?: AssociationStatus | undefined;

  /**
   * The identifier of the Amazon Web Services account that associated the connection alias with a directory.
   *
   * @public
   */
  AssociatedAccountId?: string | undefined;

  /**
   * The identifier of the directory associated with a connection alias.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The identifier of the connection alias association. You use the connection identifier in the DNS TXT record when you're configuring your DNS routing policies.
   *
   * @public
   */
  ConnectionIdentifier?: string | undefined;
}

/**
 * Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information, see [Cross-Region Redirection for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html).
 *
 * @public
 */
export interface ConnectionAlias {
  /**
   * The connection string specified for the connection alias. The connection string must be in the form of a fully qualified domain name (FQDN), such as `www.example.com`.
   *
   * @public
   */
  ConnectionString?: string | undefined;

  /**
   * The identifier of the connection alias.
   *
   * @public
   */
  AliasId?: string | undefined;

  /**
   * The current state of the connection alias.
   *
   * @public
   */
  State?: ConnectionAliasState | undefined;

  /**
   * The identifier of the Amazon Web Services account that owns the connection alias.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The association status of the connection alias.
   *
   * @public
   */
  Associations?: ConnectionAliasAssociation[] | undefined;
}

/**
 * Describes the permissions for a connection alias. Connection aliases are used for cross-Region redirection. For more information, see [Cross-Region Redirection for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html).
 *
 * @public
 */
export interface ConnectionAliasPermission {
  /**
   * The identifier of the Amazon Web Services account that the connection alias is shared with.
   *
   * @public
   */
  SharedAccountId: string | undefined;

  /**
   * Indicates whether the specified Amazon Web Services account is allowed to associate the connection alias with a directory.
   *
   * @public
   */
  AllowAssociation: boolean | undefined;
}

/**
 * Describes a tag.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CopyWorkspaceImageRequest {
  /**
   * The name of the image.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the image.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the source image.
   *
   * @public
   */
  SourceImageId: string | undefined;

  /**
   * The identifier of the source Region.
   *
   * @public
   */
  SourceRegion: string | undefined;

  /**
   * The tags for the image.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CopyWorkspaceImageResult {
  /**
   * The identifier of the image.
   *
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountLinkInvitationRequest {
  /**
   * The identifier of the target account.
   *
   * @public
   */
  TargetAccountId: string | undefined;

  /**
   * A string of up to 64 ASCII characters that Amazon WorkSpaces uses to ensure idempotent creation.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateAccountLinkInvitationResult {
  /**
   * Information about the account link.
   *
   * @public
   */
  AccountLink?: AccountLink | undefined;
}

/**
 * @public
 */
export interface CreateConnectClientAddInRequest {
  /**
   * The directory identifier for which to configure the client add-in.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The name of the client add-in.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The endpoint URL of the Connect Customer client add-in.
   *
   * @public
   */
  URL: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectClientAddInResult {
  /**
   * The client add-in identifier.
   *
   * @public
   */
  AddInId?: string | undefined;
}

/**
 * @public
 */
export interface CreateConnectionAliasRequest {
  /**
   * A connection string in the form of a fully qualified domain name (FQDN), such as `www.example.com`.
   *
   * > **Important:** After you create a connection string, it is always associated to your Amazon Web Services account. You cannot recreate the same connection string with a different account, even if you delete all instances of it from the original account. The connection string is globally reserved for your account.
   *
   * @public
   */
  ConnectionString: string | undefined;

  /**
   * The tags to associate with the connection alias.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateConnectionAliasResult {
  /**
   * The identifier of the connection alias.
   *
   * @public
   */
  AliasId?: string | undefined;
}

/**
 * @public
 */
export interface CreateIpGroupRequest {
  /**
   * The name of the group.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The description of the group.
   *
   * @public
   */
  GroupDesc?: string | undefined;

  /**
   * The rules to add to the group.
   *
   * @public
   */
  UserRules?: IpRuleItem[] | undefined;

  /**
   * The tags. Each WorkSpaces resource can have a maximum of 50 tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateIpGroupResult {
  /**
   * The identifier of the group.
   *
   * @public
   */
  GroupId?: string | undefined;
}

/**
 * Describes a standby WorkSpace.
 *
 * @public
 */
export interface StandbyWorkspace {
  /**
   * The identifier of the standby WorkSpace.
   *
   * @public
   */
  PrimaryWorkspaceId: string | undefined;

  /**
   * The volume encryption key of the standby WorkSpace.
   *
   * @public
   */
  VolumeEncryptionKey?: string | undefined;

  /**
   * The identifier of the directory for the standby WorkSpace.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The tags associated with the standby WorkSpace.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Indicates whether data replication is enabled, and if enabled, the type of data replication.
   *
   * @public
   */
  DataReplication?: DataReplication | undefined;
}

/**
 * @public
 */
export interface CreateStandbyWorkspacesRequest {
  /**
   * The Region of the primary WorkSpace.
   *
   * @public
   */
  PrimaryRegion: string | undefined;

  /**
   * Information about the standby WorkSpace to be created.
   *
   * @public
   */
  StandbyWorkspaces: StandbyWorkspace[] | undefined;
}

/**
 * Describes the standby WorkSpace that could not be created.
 *
 * @public
 */
export interface FailedCreateStandbyWorkspacesRequest {
  /**
   * Information about the standby WorkSpace that could not be created.
   *
   * @public
   */
  StandbyWorkspaceRequest?: StandbyWorkspace | undefined;

  /**
   * The error code that is returned if the standby WorkSpace could not be created.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The text of the error message that is returned if the standby WorkSpace could not be created.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Information about the standby WorkSpace.
 *
 * @public
 */
export interface PendingCreateStandbyWorkspacesRequest {
  /**
   * Describes the standby WorkSpace that was created.
   *
   * Because this operation is asynchronous, the identifier returned is not immediately available for use with other operations. For example, if you call [DescribeWorkspaces](https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html) before the WorkSpace is created, the information returned can be incomplete.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The identifier of the directory for the standby WorkSpace.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The operational state of the standby WorkSpace.
   *
   * @public
   */
  State?: WorkspaceState | undefined;

  /**
   * The identifier of the standby WorkSpace.
   *
   * @public
   */
  WorkspaceId?: string | undefined;
}

/**
 * @public
 */
export interface CreateStandbyWorkspacesResult {
  /**
   * Information about the standby WorkSpace that could not be created.
   *
   * @public
   */
  FailedStandbyRequests?: FailedCreateStandbyWorkspacesRequest[] | undefined;

  /**
   * Information about the standby WorkSpace that was created.
   *
   * @public
   */
  PendingStandbyRequests?: PendingCreateStandbyWorkspacesRequest[] | undefined;
}

/**
 * @public
 */
export interface CreateTagsRequest {
  /**
   * The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces, registered directories, images, custom bundles, IP access control groups, and connection aliases.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The tags. Each WorkSpaces resource can have a maximum of 50 tags.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateTagsResult {}

/**
 * @public
 */
export interface CreateUpdatedWorkspaceImageRequest {
  /**
   * The name of the new updated WorkSpace image.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of whether updates for the WorkSpace image are available.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The identifier of the source WorkSpace image.
   *
   * @public
   */
  SourceImageId: string | undefined;

  /**
   * The tags that you want to add to the new updated WorkSpace image.
   *
   * > **Note:** To add tags at the same time when you're creating the updated image, you must create an IAM policy that grants your IAM user permissions to use `workspaces:CreateTags`.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateUpdatedWorkspaceImageResult {
  /**
   * The identifier of the new updated WorkSpace image.
   *
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceBundleRequest {
  /**
   * The name of the bundle.
   *
   * @public
   */
  BundleName: string | undefined;

  /**
   * The description of the bundle.
   *
   * @public
   */
  BundleDescription: string | undefined;

  /**
   * The identifier of the image that is used to create the bundle.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * Describes the compute type of the bundle.
   *
   * @public
   */
  ComputeType: ComputeType | undefined;

  /**
   * Describes the user volume for a WorkSpace bundle.
   *
   * @public
   */
  UserStorage: UserStorage | undefined;

  /**
   * Describes the root volume for a WorkSpace bundle.
   *
   * @public
   */
  RootStorage?: RootStorage | undefined;

  /**
   * The tags associated with the bundle.
   *
   * > **Note:** To add tags at the same time when you're creating the bundle, you must create an IAM policy that grants your IAM user permissions to use `workspaces:CreateTags`.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceBundleResult {
  /**
   * Describes a WorkSpace bundle.
   *
   * @public
   */
  WorkspaceBundle?: WorkspaceBundle | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceImageRequest {
  /**
   * The name of the new WorkSpace image.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the new WorkSpace image.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The identifier of the source WorkSpace
   *
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * The tags that you want to add to the new WorkSpace image. To add tags when you're creating the image, you must create an IAM policy that grants your IAM user permission to use `workspaces:CreateTags`.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The operating system that the image is running.
 *
 * @public
 */
export interface OperatingSystem {
  /**
   * The operating system.
   *
   * @public
   */
  Type?: OperatingSystemType | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceImageResult {
  /**
   * The identifier of the new WorkSpace image.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The name of the image.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the image.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The operating system that the image is running.
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * The availability status of the image.
   *
   * @public
   */
  State?: WorkspaceImageState | undefined;

  /**
   * Specifies whether the image is running on dedicated hardware. When Bring Your Own License (BYOL) is enabled, this value is set to DEDICATED. For more information, see [Bring Your Own Windows Desktop Images.](https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.htm).
   *
   * @public
   */
  RequiredTenancy?: WorkspaceImageRequiredTenancy | undefined;

  /**
   * The date when the image was created.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * The identifier of the Amazon Web Services account that owns the image.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;
}

/**
 * Describes the Global Accelerator for WorkSpaces.
 *
 * @public
 */
export interface GlobalAcceleratorForWorkSpace {
  /**
   * Indicates if Global Accelerator for WorkSpaces is enabled, disabled, or the same mode as the associated directory.
   *
   * @public
   */
  Mode: AGAModeForWorkSpaceEnum | undefined;

  /**
   * Indicates the preferred protocol for Global Accelerator.
   *
   * @public
   */
  PreferredProtocol?: AGAPreferredProtocolForWorkSpace | undefined;
}

/**
 * Describes a WorkSpace.
 *
 * @public
 */
export interface WorkspaceProperties {
  /**
   * The running mode. For more information, see [Manage the WorkSpace Running Mode](https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html).
   *
   * > **Note:** The `MANUAL` value is only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use this value. For more information, see [Amazon WorkSpaces Core](http://aws.amazon.com/workspaces/core/).
   *
   * Review your running mode to ensure you are using one that is optimal for your needs and budget. For more information on switching running modes, see [Can I switch between hourly and monthly billing?](http://aws.amazon.com/workspaces-family/workspaces/faqs/#:~:text=Can%20I%20switch%20between%20hourly%20and%20monthly%20billing%20on%20WorkSpaces%20Personal%3F)
   *
   * @public
   */
  RunningMode?: RunningMode | undefined;

  /**
   * The time after a user logs off when WorkSpaces are automatically stopped. Configured in 60-minute intervals.
   *
   * @public
   */
  RunningModeAutoStopTimeoutInMinutes?: number | undefined;

  /**
   * The size of the root volume. For important information about how to modify the size of the root and user volumes, see [Modify a WorkSpace](https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html).
   *
   * @public
   */
  RootVolumeSizeGib?: number | undefined;

  /**
   * The size of the user storage. For important information about how to modify the size of the root and user volumes, see [Modify a WorkSpace](https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html).
   *
   * @public
   */
  UserVolumeSizeGib?: number | undefined;

  /**
   * The compute type. For more information, see [Amazon WorkSpaces Bundles](http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles).
   *
   * @public
   */
  ComputeTypeName?: Compute | undefined;

  /**
   * The protocol. For more information, see [Protocols for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-protocols.html).
   *
   * > **Note:**
   * >
   * > - Only available for WorkSpaces created with PCoIP bundles.
   * > - The `Protocols` property is case sensitive. Ensure you use `PCOIP` or `DCV` (formerly WSP).
   * > - Unavailable for Windows 7 WorkSpaces and WorkSpaces using GPU-based bundles (Graphics, GraphicsPro, Graphics.g4dn, GraphicsPro.g4dn, Graphics.g6, and Graphics.g7).
   *
   * @public
   */
  Protocols?: Protocol[] | undefined;

  /**
   * The name of the operating system.
   *
   * @public
   */
  OperatingSystemName?: OperatingSystemName | undefined;

  /**
   * Indicates the Global Accelerator properties.
   *
   * @public
   */
  GlobalAccelerator?: GlobalAcceleratorForWorkSpace | undefined;

  /**
   * Specifies whether nested virtualization is enabled for the WorkSpace.
   *
   * For more information, see [Nested virtualization for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/nested-virtualization.html).
   *
   * @public
   */
  NestedVirtualizationEnabled?: boolean | undefined;
}

/**
 * Describes the information used to create a WorkSpace.
 *
 * @public
 */
export interface WorkspaceRequest {
  /**
   * The identifier of the Directory Service directory for the WorkSpace. You can use DescribeWorkspaceDirectories to list the available directories.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The user name of the user for the WorkSpace. This user name must exist in the Directory Service directory for the WorkSpace.
   *
   * The username is not case-sensitive, but we recommend matching the case in the Directory Service directory to avoid potential incompatibilities.
   *
   * The reserved keyword, `[UNDEFINED]`, is used when creating user-decoupled WorkSpaces.
   *
   * @public
   */
  UserName: string | undefined;

  /**
   * The identifier of the bundle for the WorkSpace. You can use DescribeWorkspaceBundles to list the available bundles.
   *
   * @public
   */
  BundleId: string | undefined;

  /**
   * The ARN of the symmetric KMS key used to encrypt data stored on your WorkSpace. Amazon WorkSpaces does not support asymmetric KMS keys.
   *
   * @public
   */
  VolumeEncryptionKey?: string | undefined;

  /**
   * Indicates whether the data stored on the user volume is encrypted.
   *
   * @public
   */
  UserVolumeEncryptionEnabled?: boolean | undefined;

  /**
   * Indicates whether the data stored on the root volume is encrypted.
   *
   * @public
   */
  RootVolumeEncryptionEnabled?: boolean | undefined;

  /**
   * The WorkSpace properties.
   *
   * @public
   */
  WorkspaceProperties?: WorkspaceProperties | undefined;

  /**
   * The tags for the WorkSpace.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The name of the user-decoupled WorkSpace.
   *
   * > **Note:** `WorkspaceName` is required if `UserName` is `[UNDEFINED]` for user-decoupled WorkSpaces. `WorkspaceName` is not applicable if `UserName` is specified for user-assigned WorkSpaces.
   *
   * @public
   */
  WorkspaceName?: string | undefined;

  /**
   * The IPv6 address for the WorkSpace.
   *
   * @public
   */
  Ipv6Address?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspacesRequest {
  /**
   * The WorkSpaces to create. You can specify up to 25 WorkSpaces.
   *
   * @public
   */
  Workspaces: WorkspaceRequest[] | undefined;
}

/**
 * Describes a WorkSpace that cannot be created.
 *
 * @public
 */
export interface FailedCreateWorkspaceRequest {
  /**
   * Information about the WorkSpace.
   *
   * @public
   */
  WorkspaceRequest?: WorkspaceRequest | undefined;

  /**
   * The error code that is returned if the WorkSpace cannot be created.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The text of the error message that is returned if the WorkSpace cannot be created.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Describes the data replication settings.
 *
 * @public
 */
export interface DataReplicationSettings {
  /**
   * Indicates whether data replication is enabled, and if enabled, the type of data replication.
   *
   * @public
   */
  DataReplication?: DataReplication | undefined;

  /**
   * The date and time at which the last successful snapshot was taken of the primary WorkSpace used for replicating data.
   *
   * @public
   */
  RecoverySnapshotTime?: Date | undefined;
}

/**
 * Describes a WorkSpace modification.
 *
 * @public
 */
export interface ModificationState {
  /**
   * The WorkSpace property being modified.
   *
   * @public
   */
  Resource?: ModificationResourceEnum | undefined;

  /**
   * The modification state.
   *
   * @public
   */
  State?: ModificationStateEnum | undefined;
}

/**
 * Describes the related WorkSpace. The related WorkSpace could be a standby WorkSpace or primary WorkSpace related to the specified WorkSpace.
 *
 * @public
 */
export interface RelatedWorkspaceProperties {
  /**
   * The identifier of the related WorkSpace.
   *
   * @public
   */
  WorkspaceId?: string | undefined;

  /**
   * The Region of the related WorkSpace.
   *
   * @public
   */
  Region?: string | undefined;

  /**
   * Indicates the state of the WorkSpace.
   *
   * @public
   */
  State?: WorkspaceState | undefined;

  /**
   * Indicates the type of WorkSpace.
   *
   * @public
   */
  Type?: StandbyWorkspaceRelationshipType | undefined;
}

/**
 * Describes the properties of the related standby WorkSpaces.
 *
 * @public
 */
export interface StandbyWorkspacesProperties {
  /**
   * The identifier of the standby WorkSpace
   *
   * @public
   */
  StandbyWorkspaceId?: string | undefined;

  /**
   * Indicates whether data replication is enabled, and if enabled, the type of data replication.
   *
   * @public
   */
  DataReplication?: DataReplication | undefined;

  /**
   * The date and time at which the last successful snapshot was taken of the primary WorkSpace used for replicating data.
   *
   * @public
   */
  RecoverySnapshotTime?: Date | undefined;
}

/**
 * Describes a WorkSpace.
 *
 * @public
 */
export interface Workspace {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId?: string | undefined;

  /**
   * The identifier of the Directory Service directory for the WorkSpace.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The user for the WorkSpace.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The IP address of the WorkSpace.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The IPv6 address of the WorkSpace.
   *
   * @public
   */
  Ipv6Address?: string | undefined;

  /**
   * The operational state of the WorkSpace.
   *
   * - `PENDING` – The WorkSpace is in a waiting state (for example, the WorkSpace is being created).
   * - `AVAILABLE` – The WorkSpace is running and has passed the health checks.
   * - `IMPAIRED` – Refer to `UNHEALTHY` state.
   * - `UNHEALTHY` – The WorkSpace is not responding to health checks.
   * - `REBOOTING` – The WorkSpace is being rebooted (restarted).
   * - `STARTING` – The WorkSpace is starting up and health checks are being run.
   * - `REBUILDING` – The WorkSpace is being rebuilt.
   * - `RESTORING` – The WorkSpace is being restored.
   * - `MAINTENANCE` – The WorkSpace is undergoing scheduled maintenance by Amazon Web Services.
   * - `ADMIN_MAINTENANCE` – The WorkSpace is undergoing maintenance by the WorkSpaces administrator.
   * - `TERMINATING` – The WorkSpace is being deleted.
   * - `TERMINATED` – The WorkSpace has been deleted.
   * - `SUSPENDED` – The WorkSpace has been suspended for image creation.
   * - `UPDATING` – The WorkSpace is undergoing an update.
   * - `STOPPING` – The WorkSpace is being stopped.
   * - `STOPPED` – The WorkSpace has been stopped.
   * - `ERROR` – The WorkSpace is an error state (for example, an error occurred during startup).
   *
   * > **Note:** After a WorkSpace is terminated, the `TERMINATED` state is returned only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using [DescribeWorkSpaces](https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html). If the WorkSpace ID isn't returned, then the WorkSpace has been successfully terminated.
   *
   * @public
   */
  State?: WorkspaceState | undefined;

  /**
   * The identifier of the bundle used to create the WorkSpace.
   *
   * @public
   */
  BundleId?: string | undefined;

  /**
   * The identifier of the subnet for the WorkSpace.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The text of the error message that is returned if the WorkSpace cannot be created.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The error code that is returned if the WorkSpace cannot be created.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The name of the WorkSpace, as seen by the operating system. The format of this name varies. For more information, see [Launch a WorkSpace](https://docs.aws.amazon.com/workspaces/latest/adminguide/launch-workspaces-tutorials.html).
   *
   * @public
   */
  ComputerName?: string | undefined;

  /**
   * The ARN of the symmetric KMS key used to encrypt data stored on your WorkSpace. Amazon WorkSpaces does not support asymmetric KMS keys.
   *
   * @public
   */
  VolumeEncryptionKey?: string | undefined;

  /**
   * Indicates whether the data stored on the user volume is encrypted.
   *
   * @public
   */
  UserVolumeEncryptionEnabled?: boolean | undefined;

  /**
   * Indicates whether the data stored on the root volume is encrypted.
   *
   * @public
   */
  RootVolumeEncryptionEnabled?: boolean | undefined;

  /**
   * The name of the user-decoupled WorkSpace.
   *
   * @public
   */
  WorkspaceName?: string | undefined;

  /**
   * The properties of the WorkSpace.
   *
   * @public
   */
  WorkspaceProperties?: WorkspaceProperties | undefined;

  /**
   * The modification states of the WorkSpace.
   *
   * @public
   */
  ModificationStates?: ModificationState[] | undefined;

  /**
   * The standby WorkSpace or primary WorkSpace related to the specified WorkSpace.
   *
   * @public
   */
  RelatedWorkspaces?: RelatedWorkspaceProperties[] | undefined;

  /**
   * Indicates the settings of the data replication.
   *
   * @public
   */
  DataReplicationSettings?: DataReplicationSettings | undefined;

  /**
   * The properties of the standby WorkSpace
   *
   * @public
   */
  StandbyWorkspacesProperties?: StandbyWorkspacesProperties[] | undefined;
}

/**
 * @public
 */
export interface CreateWorkspacesResult {
  /**
   * Information about the WorkSpaces that could not be created.
   *
   * @public
   */
  FailedRequests?: FailedCreateWorkspaceRequest[] | undefined;

  /**
   * Information about the WorkSpaces that were created.
   *
   * Because this operation is asynchronous, the identifier returned is not immediately available for use with other operations. For example, if you call DescribeWorkspaces before the WorkSpace is created, the information returned can be incomplete.
   *
   * @public
   */
  PendingRequests?: Workspace[] | undefined;
}

/**
 * Describes the timeout settings for a pool of WorkSpaces.
 *
 * @public
 */
export interface TimeoutSettings {
  /**
   * Specifies the amount of time, in seconds, that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within the time set, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.
   *
   * @public
   */
  DisconnectTimeoutInSeconds?: number | undefined;

  /**
   * The amount of time in seconds a connection will stay active while idle.
   *
   * @public
   */
  IdleDisconnectTimeoutInSeconds?: number | undefined;

  /**
   * Specifies the maximum amount of time, in seconds, that a streaming session can remain active. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.
   *
   * @public
   */
  MaxUserDurationInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CreateWorkspacesPoolRequest {
  /**
   * The name of the pool.
   *
   * @public
   */
  PoolName: string | undefined;

  /**
   * The pool description.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The identifier of the bundle for the pool.
   *
   * @public
   */
  BundleId: string | undefined;

  /**
   * The identifier of the directory for the pool.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The user capacity of the pool.
   *
   * @public
   */
  Capacity: Capacity | undefined;

  /**
   * The tags for the pool.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Indicates the application settings of the pool.
   *
   * @public
   */
  ApplicationSettings?: ApplicationSettingsRequest | undefined;

  /**
   * Indicates the timeout settings of the pool.
   *
   * @public
   */
  TimeoutSettings?: TimeoutSettings | undefined;

  /**
   * The running mode for the pool.
   *
   * @public
   */
  RunningMode?: PoolsRunningMode | undefined;
}

/**
 * Describes a pool error.
 *
 * @public
 */
export interface WorkspacesPoolError {
  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: WorkspacesPoolErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Describes a pool of WorkSpaces.
 *
 * @public
 */
export interface WorkspacesPool {
  /**
   * The identifier of a pool.
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the pool.
   *
   * @public
   */
  PoolArn: string | undefined;

  /**
   * The capacity status for the pool
   *
   * @public
   */
  CapacityStatus: CapacityStatus | undefined;

  /**
   * The name of the pool.
   *
   * @public
   */
  PoolName: string | undefined;

  /**
   * The description of the pool.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current state of the pool.
   *
   * @public
   */
  State: WorkspacesPoolState | undefined;

  /**
   * The time the pool was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The identifier of the bundle used by the pool.
   *
   * @public
   */
  BundleId: string | undefined;

  /**
   * The identifier of the directory used by the pool.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The pool errors.
   *
   * @public
   */
  Errors?: WorkspacesPoolError[] | undefined;

  /**
   * The persistent application settings for users of the pool.
   *
   * @public
   */
  ApplicationSettings?: ApplicationSettingsResponse | undefined;

  /**
   * The amount of time that a pool session remains active after users disconnect. If they try to reconnect to the pool session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new pool instance.
   *
   * @public
   */
  TimeoutSettings?: TimeoutSettings | undefined;

  /**
   * The running mode of the pool.
   *
   * @public
   */
  RunningMode: PoolsRunningMode | undefined;
}

/**
 * @public
 */
export interface CreateWorkspacesPoolResult {
  /**
   * Indicates the pool to create.
   *
   * @public
   */
  WorkspacesPool?: WorkspacesPool | undefined;
}

/**
 * Describes in-depth details about the error. These details include the possible causes of the error and troubleshooting information.
 *
 * @public
 */
export interface CustomWorkspaceImageImportErrorDetails {
  /**
   * The error code that is returned for the image import.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The text of the error message that is returned for the image import.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Returns default client branding attributes that were imported. These attributes display on the client login screen.
 *
 * > **Important:** Client branding attributes are public facing. Ensure that you don't include sensitive information.
 *
 * @public
 */
export interface DefaultClientBrandingAttributes {
  /**
   * The logo. The only image format accepted is a binary data object that is converted from a `.png` file.
   *
   * @public
   */
  LogoUrl?: string | undefined;

  /**
   * The support email. The company's customer support email address.
   *
   * > **Note:**
   * >
   * > - In each platform type, the `SupportEmail` and `SupportLink` parameters are mutually exclusive. You can specify one parameter for each platform type, but not both.
   * > - The default email is `workspaces-feedback@amazon.com`.
   *
   * @public
   */
  SupportEmail?: string | undefined;

  /**
   * The support link. The link for the company's customer support page for their WorkSpace.
   *
   * > **Note:**
   * >
   * > - In each platform type, the `SupportEmail` and `SupportLink` parameters are mutually exclusive.You can specify one parameter for each platform type, but not both.
   * > - The default support link is `workspaces-feedback@amazon.com`.
   *
   * @public
   */
  SupportLink?: string | undefined;

  /**
   * The forgotten password link. This is the web address that users can go to if they forget the password for their WorkSpace.
   *
   * @public
   */
  ForgotPasswordLink?: string | undefined;

  /**
   * The login message. Specified as a key value pair, in which the key is a locale and the value is the localized message for that locale. The only key supported is `en_US`. The HTML tags supported include the following: `a, b, blockquote, br, cite, code, dd, dl, dt, div, em, i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul`.
   *
   * @public
   */
  LoginMessage?: Record<string, string> | undefined;
}

/**
 * The default client branding attributes to be imported. These attributes display on the client login screen.
 *
 * > **Important:** Client branding attributes are public facing. Ensure that you do not include sensitive information.
 *
 * @public
 */
export interface DefaultImportClientBrandingAttributes {
  /**
   * The logo. The only image format accepted is a binary data object that is converted from a `.png` file.
   *
   * @public
   */
  Logo?: Uint8Array | undefined;

  /**
   * The support email. The company's customer support email address.
   *
   * > **Note:**
   * >
   * > - In each platform type, the `SupportEmail` and `SupportLink` parameters are mutually exclusive. You can specify one parameter for each platform type, but not both.
   * > - The default email is `workspaces-feedback@amazon.com`.
   *
   * @public
   */
  SupportEmail?: string | undefined;

  /**
   * The support link. The link for the company's customer support page for their WorkSpace.
   *
   * > **Note:**
   * >
   * > - In each platform type, the `SupportEmail` and `SupportLink` parameters are mutually exclusive. You can specify one parameter for each platform type, but not both.
   * > - The default support link is `workspaces-feedback@amazon.com`.
   *
   * @public
   */
  SupportLink?: string | undefined;

  /**
   * The forgotten password link. This is the web address that users can go to if they forget the password for their WorkSpace.
   *
   * @public
   */
  ForgotPasswordLink?: string | undefined;

  /**
   * The login message. Specified as a key value pair, in which the key is a locale and the value is the localized message for that locale. The only key supported is `en_US`. The HTML tags supported include the following: `a, b, blockquote, br, cite, code, dd, dl, dt, div, em, i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul`.
   *
   * @public
   */
  LoginMessage?: Record<string, string> | undefined;
}

/**
 * Describes the default values that are used to create WorkSpaces. For more information, see [Update Directory Details for Your WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html).
 *
 * @public
 */
export interface DefaultWorkspaceCreationProperties {
  /**
   * Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default. If enabled, the Elastic public IP address allows outbound internet access from your WorkSpaces when you’re using an internet gateway in the Amazon VPC in which your WorkSpaces are located. If you're using a Network Address Translation (NAT) gateway for outbound internet access from your VPC, or if your WorkSpaces are in public subnets and you manually assign them Elastic IP addresses, you should disable this setting. This setting applies to new WorkSpaces that you launch or to existing WorkSpaces that you rebuild. For more information, see [Configure a VPC for Amazon WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html).
   *
   * @public
   */
  EnableInternetAccess?: boolean | undefined;

  /**
   * The organizational unit (OU) in the directory for the WorkSpace machine accounts.
   *
   * @public
   */
  DefaultOu?: string | undefined;

  /**
   * The identifier of the default security group to apply to WorkSpaces when they are created. For more information, see [Security Groups for Your WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-security-groups.html).
   *
   * @public
   */
  CustomSecurityGroupId?: string | undefined;

  /**
   * Specifies whether WorkSpace users are local administrators on their WorkSpaces.
   *
   * @public
   */
  UserEnabledAsLocalAdministrator?: boolean | undefined;

  /**
   * Specifies whether maintenance mode is enabled for WorkSpaces. For more information, see [WorkSpace Maintenance](https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html).
   *
   * @public
   */
  EnableMaintenanceMode?: boolean | undefined;

  /**
   * Indicates the IAM role ARN of the instance.
   *
   * @public
   */
  InstanceIamRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountLinkInvitationRequest {
  /**
   * The identifier of the account link.
   *
   * @public
   */
  LinkId: string | undefined;

  /**
   * A string of up to 64 ASCII characters that Amazon WorkSpaces uses to ensure idempotent creation.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccountLinkInvitationResult {
  /**
   * Information about the account link.
   *
   * @public
   */
  AccountLink?: AccountLink | undefined;
}

/**
 * @public
 */
export interface DeleteClientBrandingRequest {
  /**
   * The directory identifier of the WorkSpace for which you want to delete client branding.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The device type for which you want to delete client branding.
   *
   * @public
   */
  Platforms: ClientDeviceType[] | undefined;
}

/**
 * @public
 */
export interface DeleteClientBrandingResult {}

/**
 * @public
 */
export interface DeleteConnectClientAddInRequest {
  /**
   * The identifier of the client add-in to delete.
   *
   * @public
   */
  AddInId: string | undefined;

  /**
   * The directory identifier for which the client add-in is configured.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectClientAddInResult {}

/**
 * @public
 */
export interface DeleteConnectionAliasRequest {
  /**
   * The identifier of the connection alias to delete.
   *
   * @public
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionAliasResult {}

/**
 * @public
 */
export interface DeleteIpGroupRequest {
  /**
   * The identifier of the IP access control group.
   *
   * @public
   */
  GroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIpGroupResult {}

/**
 * @public
 */
export interface DeleteTagsRequest {
  /**
   * The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces, registered directories, images, custom bundles, IP access control groups, and connection aliases.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The tag keys.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteTagsResult {}

/**
 * @public
 */
export interface DeleteWorkspaceBundleRequest {
  /**
   * The identifier of the bundle.
   *
   * @public
   */
  BundleId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceBundleResult {}

/**
 * @public
 */
export interface DeleteWorkspaceImageRequest {
  /**
   * The identifier of the image.
   *
   * @public
   */
  ImageId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceImageResult {}

/**
 * @public
 */
export interface DeployWorkspaceApplicationsRequest {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * Indicates whether the force flag is applied for the specified WorkSpace. When the force flag is enabled, it allows previously failed deployments to be retried.
   *
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * Describes the WorkSpace application deployment.
 *
 * @public
 */
export interface WorkSpaceApplicationDeployment {
  /**
   * The associations between the applications and the associated resources.
   *
   * @public
   */
  Associations?: WorkspaceResourceAssociation[] | undefined;
}

/**
 * @public
 */
export interface DeployWorkspaceApplicationsResult {
  /**
   * The list of deployed associations and information about them.
   *
   * @public
   */
  Deployment?: WorkSpaceApplicationDeployment | undefined;
}

/**
 * @public
 */
export interface DeregisterWorkspaceDirectoryRequest {
  /**
   * The identifier of the directory. If any WorkSpaces are registered to this directory, you must remove them before you deregister the directory, or you will receive an OperationNotSupportedException error.
   *
   * @public
   */
  DirectoryId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterWorkspaceDirectoryResult {}

/**
 * @public
 */
export interface DescribeAccountRequest {}

/**
 * @public
 */
export interface DescribeAccountResult {
  /**
   * The status of BYOL (whether BYOL is enabled or disabled).
   *
   * @public
   */
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | undefined;

  /**
   * The IP address range, specified as an IPv4 CIDR block, used for the management network interface.
   *
   * The management network interface is connected to a secure Amazon WorkSpaces management network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces clients, and to allow Amazon WorkSpaces to manage the WorkSpace.
   *
   * @public
   */
  DedicatedTenancyManagementCidrRange?: string | undefined;

  /**
   * The type of linked account.
   *
   * @public
   */
  DedicatedTenancyAccountType?: DedicatedTenancyAccountType | undefined;

  /**
   * The text message to describe the status of BYOL.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountModificationsRequest {
  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountModificationsResult {
  /**
   * The list of modifications to the configuration of BYOL.
   *
   * @public
   */
  AccountModifications?: AccountModification[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationAssociationsRequest {
  /**
   * The maximum number of associations to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The identifier of the specified application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The resource type of the associated resources.
   *
   * @public
   */
  AssociatedResourceTypes: ApplicationAssociatedResourceType[] | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationAssociationsResult {
  /**
   * List of associations and information about them.
   *
   * @public
   */
  Associations?: ApplicationResourceAssociation[] | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationsRequest {
  /**
   * The identifiers of one or more applications.
   *
   * @public
   */
  ApplicationIds?: string[] | undefined;

  /**
   * The compute types supported by the applications.
   *
   * @public
   */
  ComputeTypeNames?: Compute[] | undefined;

  /**
   * The license availability for the applications.
   *
   * @public
   */
  LicenseType?: WorkSpaceApplicationLicenseType | undefined;

  /**
   * The operating systems supported by the applications.
   *
   * @public
   */
  OperatingSystemNames?: OperatingSystemName[] | undefined;

  /**
   * The owner of the applications.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The maximum number of applications to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the WorkSpace application.
 *
 * @public
 */
export interface WorkSpaceApplication {
  /**
   * The identifier of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The time the application is created.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * The description of the WorkSpace application.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The license availability for the applications.
   *
   * @public
   */
  LicenseType?: WorkSpaceApplicationLicenseType | undefined;

  /**
   * The name of the WorkSpace application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The owner of the WorkSpace application.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The status of WorkSpace application.
   *
   * @public
   */
  State?: WorkSpaceApplicationState | undefined;

  /**
   * The supported compute types of the WorkSpace application.
   *
   * @public
   */
  SupportedComputeTypeNames?: Compute[] | undefined;

  /**
   * The supported operating systems of the WorkSpace application.
   *
   * @public
   */
  SupportedOperatingSystemNames?: OperatingSystemName[] | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationsResult {
  /**
   * List of information about the specified applications.
   *
   * @public
   */
  Applications?: WorkSpaceApplication[] | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBundleAssociationsRequest {
  /**
   * The identifier of the bundle.
   *
   * @public
   */
  BundleId: string | undefined;

  /**
   * The resource types of the associated resource.
   *
   * @public
   */
  AssociatedResourceTypes: BundleAssociatedResourceType[] | undefined;
}

/**
 * @public
 */
export interface DescribeBundleAssociationsResult {
  /**
   * List of information about the specified associations.
   *
   * @public
   */
  Associations?: BundleResourceAssociation[] | undefined;
}

/**
 * @public
 */
export interface DescribeClientBrandingRequest {
  /**
   * The directory identifier of the WorkSpace for which you want to view client branding information.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * The client branding attributes for iOS device types. These attributes are displayed on the iOS client login screen only.
 *
 * > **Important:** Client branding attributes are public facing. Ensure you do not include sensitive information.
 *
 * @public
 */
export interface IosClientBrandingAttributes {
  /**
   * The logo. This is the standard-resolution display that has a 1:1 pixel density (or @1x), where one pixel is equal to one point. The only image format accepted is a binary data object that is converted from a `.png` file.
   *
   * @public
   */
  LogoUrl?: string | undefined;

  /**
   * The @2x version of the logo. This is the higher resolution display that offers a scale factor of 2.0 (or @2x). The only image format accepted is a binary data object that is converted from a `.png` file.
   *
   * > **Note:** For more information about iOS image size and resolution, see [Image Size and Resolution](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/) in the *Apple Human Interface Guidelines*.
   *
   * @public
   */
  Logo2xUrl?: string | undefined;

  /**
   * The @3x version of the logo. This is the higher resolution display that offers a scale factor of 3.0 (or @3x).The only image format accepted is a binary data object that is converted from a `.png` file.
   *
   * > **Note:** For more information about iOS image size and resolution, see [Image Size and Resolution](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/) in the *Apple Human Interface Guidelines*.
   *
   * @public
   */
  Logo3xUrl?: string | undefined;

  /**
   * The support email. The company's customer support email address.
   *
   * > **Note:**
   * >
   * > - In each platform type, the `SupportEmail` and `SupportLink` parameters are mutually exclusive. You can specify one parameter for each platform type, but not both.
   * > - The default email is `workspaces-feedback@amazon.com`.
   *
   * @public
   */
  SupportEmail?: string | undefined;

  /**
   * The support link. The link for the company's customer support page for their WorkSpace.
   *
   * > **Note:**
   * >
   * > - In each platform type, the `SupportEmail` and `SupportLink` parameters are mutually exclusive. You can specify one parameter for each platform type, but not both.
   * > - The default support link is `workspaces-feedback@amazon.com`.
   *
   * @public
   */
  SupportLink?: string | undefined;

  /**
   * The forgotten password link. This is the web address that users can go to if they forget the password for their WorkSpace.
   *
   * @public
   */
  ForgotPasswordLink?: string | undefined;

  /**
   * The login message. Specified as a key value pair, in which the key is a locale and the value is the localized message for that locale. The only key supported is `en_US`. The HTML tags supported include the following: `a, b, blockquote, br, cite, code, dd, dl, dt, div, em, i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul`.
   *
   * @public
   */
  LoginMessage?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeClientBrandingResult {
  /**
   * The branding information for Windows devices.
   *
   * @public
   */
  DeviceTypeWindows?: DefaultClientBrandingAttributes | undefined;

  /**
   * The branding information for macOS devices.
   *
   * @public
   */
  DeviceTypeOsx?: DefaultClientBrandingAttributes | undefined;

  /**
   * The branding information for Android devices.
   *
   * @public
   */
  DeviceTypeAndroid?: DefaultClientBrandingAttributes | undefined;

  /**
   * The branding information for iOS devices.
   *
   * @public
   */
  DeviceTypeIos?: IosClientBrandingAttributes | undefined;

  /**
   * The branding information for Linux devices.
   *
   * @public
   */
  DeviceTypeLinux?: DefaultClientBrandingAttributes | undefined;

  /**
   * The branding information for Web access.
   *
   * @public
   */
  DeviceTypeWeb?: DefaultClientBrandingAttributes | undefined;
}

/**
 * @public
 */
export interface DescribeClientPropertiesRequest {
  /**
   * The resource identifier, in the form of directory IDs.
   *
   * @public
   */
  ResourceIds: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeClientPropertiesResult {
  /**
   * Information about the specified Amazon WorkSpaces clients.
   *
   * @public
   */
  ClientPropertiesList?: ClientPropertiesResult[] | undefined;
}

/**
 * @public
 */
export interface DescribeConnectClientAddInsRequest {
  /**
   * The directory identifier for which the client add-in is configured.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeConnectClientAddInsResult {
  /**
   * Information about client add-ins.
   *
   * @public
   */
  AddIns?: ConnectClientAddIn[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionAliasesRequest {
  /**
   * The identifiers of the connection aliases to describe.
   *
   * @public
   */
  AliasIds?: string[] | undefined;

  /**
   * The identifier of the directory associated with the connection alias.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The maximum number of connection aliases to return.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionAliasesResult {
  /**
   * Information about the specified connection aliases.
   *
   * @public
   */
  ConnectionAliases?: ConnectionAlias[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionAliasPermissionsRequest {
  /**
   * The identifier of the connection alias.
   *
   * @public
   */
  AliasId: string | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionAliasPermissionsResult {
  /**
   * The identifier of the connection alias.
   *
   * @public
   */
  AliasId?: string | undefined;

  /**
   * The permissions associated with a connection alias.
   *
   * @public
   */
  ConnectionAliasPermissions?: ConnectionAliasPermission[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeCustomWorkspaceImageImportRequest {
  /**
   * The identifier of the WorkSpace image.
   *
   * @public
   */
  ImageId: string | undefined;
}

/**
 * Describes the image import source.
 *
 * @public
 */
export type ImageSourceIdentifier =
  | ImageSourceIdentifier.Ec2ImageIdMember
  | ImageSourceIdentifier.Ec2ImportTaskIdMember
  | ImageSourceIdentifier.ImageBuildVersionArnMember
  | ImageSourceIdentifier.$UnknownMember;

/**
 * @public
 */
export namespace ImageSourceIdentifier {
  /**
   * The EC2 import task ID to import the image from the Amazon EC2 VM import process.
   *
   * @public
   */
  export interface Ec2ImportTaskIdMember {
    Ec2ImportTaskId: string;
    ImageBuildVersionArn?: never;
    Ec2ImageId?: never;
    $unknown?: never;
  }

  /**
   * The ARN of the EC2 Image Builder image.
   *
   * @public
   */
  export interface ImageBuildVersionArnMember {
    Ec2ImportTaskId?: never;
    ImageBuildVersionArn: string;
    Ec2ImageId?: never;
    $unknown?: never;
  }

  /**
   * The identifier of the EC2 image.
   *
   * @public
   */
  export interface Ec2ImageIdMember {
    Ec2ImportTaskId?: never;
    ImageBuildVersionArn?: never;
    Ec2ImageId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Ec2ImportTaskId?: never;
    ImageBuildVersionArn?: never;
    Ec2ImageId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Ec2ImportTaskId: (value: string) => T;
    ImageBuildVersionArn: (value: string) => T;
    Ec2ImageId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface DescribeCustomWorkspaceImageImportResult {
  /**
   * The identifier of the WorkSpace image.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The infrastructure configuration ARN that specifies how the WorkSpace image is built.
   *
   * @public
   */
  InfrastructureConfigurationArn?: string | undefined;

  /**
   * The state of the WorkSpace image.
   *
   * @public
   */
  State?: CustomWorkspaceImageImportState | undefined;

  /**
   * The state message of the WorkSpace image import workflow.
   *
   * @public
   */
  StateMessage?: string | undefined;

  /**
   * The estimated progress percentage of the WorkSpace image import workflow.
   *
   * @public
   */
  ProgressPercentage?: number | undefined;

  /**
   * The timestamp when the WorkSpace image import was created.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * The timestamp when the WorkSpace image import was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * Describes the image import source.
   *
   * @public
   */
  ImageSource?: ImageSourceIdentifier | undefined;

  /**
   * The image builder instance ID of the WorkSpace image.
   *
   * @public
   */
  ImageBuilderInstanceId?: string | undefined;

  /**
   * Describes in-depth details about the error. These details include the possible causes of the error and troubleshooting information.
   *
   * @public
   */
  ErrorDetails?: CustomWorkspaceImageImportErrorDetails[] | undefined;
}

/**
 * @public
 */
export interface DescribeImageAssociationsRequest {
  /**
   * The identifier of the image.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * The resource types of the associated resource.
   *
   * @public
   */
  AssociatedResourceTypes: ImageAssociatedResourceType[] | undefined;
}

/**
 * Describes the association between an application and an image resource.
 *
 * @public
 */
export interface ImageResourceAssociation {
  /**
   * The identifier of the associated resource.
   *
   * @public
   */
  AssociatedResourceId?: string | undefined;

  /**
   * The resource type of the associated resources.
   *
   * @public
   */
  AssociatedResourceType?: ImageAssociatedResourceType | undefined;

  /**
   * The time the association is created.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * The time the association status was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The identifier of the image.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The status of the image resource association.
   *
   * @public
   */
  State?: AssociationState | undefined;

  /**
   * The reason the association deployment failed.
   *
   * @public
   */
  StateReason?: AssociationStateReason | undefined;
}

/**
 * @public
 */
export interface DescribeImageAssociationsResult {
  /**
   * List of information about the specified associations.
   *
   * @public
   */
  Associations?: ImageResourceAssociation[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpGroupsRequest {
  /**
   * The identifiers of one or more IP access control groups.
   *
   * @public
   */
  GroupIds?: string[] | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes an IP access control group.
 *
 * @public
 */
export interface WorkspacesIpGroup {
  /**
   * The identifier of the group.
   *
   * @public
   */
  groupId?: string | undefined;

  /**
   * The name of the group.
   *
   * @public
   */
  groupName?: string | undefined;

  /**
   * The description of the group.
   *
   * @public
   */
  groupDesc?: string | undefined;

  /**
   * The rules.
   *
   * @public
   */
  userRules?: IpRuleItem[] | undefined;
}

/**
 * @public
 */
export interface DescribeIpGroupsResult {
  /**
   * Information about the IP access control groups.
   *
   * @public
   */
  Result?: WorkspacesIpGroup[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagsRequest {
  /**
   * The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces, registered directories, images, custom bundles, IP access control groups, and connection aliases.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagsResult {
  /**
   * The tags.
   *
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceAssociationsRequest {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * The resource types of the associated resources.
   *
   * @public
   */
  AssociatedResourceTypes: WorkSpaceAssociatedResourceType[] | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceAssociationsResult {
  /**
   * List of information about the specified associations.
   *
   * @public
   */
  Associations?: WorkspaceResourceAssociation[] | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceBundlesRequest {
  /**
   * The identifiers of the bundles. You cannot combine this parameter with any other filter.
   *
   * @public
   */
  BundleIds?: string[] | undefined;

  /**
   * The owner of the bundles. You cannot combine this parameter with any other filter.
   *
   * To describe the bundles provided by Amazon Web Services, specify `AMAZON`. To describe the bundles that belong to your account, don't specify a value.
   *
   * @public
   */
  Owner?: string | undefined;

  /**
   * The token for the next set of results. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceBundlesResult {
  /**
   * Information about the bundles.
   *
   * @public
   */
  Bundles?: WorkspaceBundle[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return. This token is valid for one day and must be used within that time frame.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the filter conditions for the WorkSpaces to return.
 *
 * @public
 */
export interface DescribeWorkspaceDirectoriesFilter {
  /**
   * The name of the WorkSpaces to filter.
   *
   * @public
   */
  Name: DescribeWorkspaceDirectoriesFilterName | undefined;

  /**
   * The values for filtering WorkSpaces
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceDirectoriesRequest {
  /**
   * The identifiers of the directories. If the value is null, all directories are retrieved.
   *
   * @public
   */
  DirectoryIds?: string[] | undefined;

  /**
   * The names of the WorkSpace directories.
   *
   * @public
   */
  WorkspaceDirectoryNames?: string[] | undefined;

  /**
   * The maximum number of directories to return.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The filter condition for the WorkSpaces.
   *
   * @public
   */
  Filters?: DescribeWorkspaceDirectoriesFilter[] | undefined;
}

/**
 * Specifies the configurations of the identity center.
 *
 * @public
 */
export interface IDCConfig {
  /**
   * The Amazon Resource Name (ARN) of the identity center instance.
   *
   * @public
   */
  InstanceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationArn?: string | undefined;
}

/**
 * Specifies the configurations of the Microsoft Entra.
 *
 * @public
 */
export interface MicrosoftEntraConfig {
  /**
   * The identifier of the tenant.
   *
   * @public
   */
  TenantId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the application config.
   *
   * @public
   */
  ApplicationConfigSecretArn?: string | undefined;
}

/**
 * Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.
 *
 * @public
 */
export interface SamlProperties {
  /**
   * Indicates the status of SAML 2.0 authentication. These statuses include the following.
   *
   * - If the setting is `DISABLED`, end users will be directed to login with their directory credentials.
   * - If the setting is `ENABLED`, end users will be directed to login via the user access URL. Users attempting to connect to WorkSpaces from a client application that does not support SAML 2.0 authentication will not be able to connect.
   * - If the setting is `ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK`, end users will be directed to login via the user access URL on supported client applications, but will not prevent clients that do not support SAML 2.0 authentication from connecting as if SAML 2.0 authentication was disabled.
   *
   * @public
   */
  Status?: SamlStatusEnum | undefined;

  /**
   * The SAML 2.0 identity provider (IdP) user access URL is the URL a user would navigate to in their web browser in order to federate from the IdP and directly access the application, without any SAML 2.0 service provider (SP) bindings.
   *
   * @public
   */
  UserAccessUrl?: string | undefined;

  /**
   * The relay state parameter name supported by the SAML 2.0 identity provider (IdP). When the end user is redirected to the user access URL from the WorkSpaces client application, this relay state parameter name is appended as a query parameter to the URL along with the relay state endpoint to return the user to the client application session.
   *
   * To use SAML 2.0 authentication with WorkSpaces, the IdP must support IdP-initiated deep linking for the relay state URL. Consult your IdP documentation for more information.
   *
   * @public
   */
  RelayStateParameterName?: string | undefined;
}

/**
 * Describes the self-service permissions for a directory. For more information, see [Enable Self-Service WorkSpace Management Capabilities for Your Users](https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html).
 *
 * @public
 */
export interface SelfservicePermissions {
  /**
   * Specifies whether users can restart their WorkSpace.
   *
   * @public
   */
  RestartWorkspace?: ReconnectEnum | undefined;

  /**
   * Specifies whether users can increase the volume size of the drives on their WorkSpace.
   *
   * @public
   */
  IncreaseVolumeSize?: ReconnectEnum | undefined;

  /**
   * Specifies whether users can change the compute type (bundle) for their WorkSpace.
   *
   * @public
   */
  ChangeComputeType?: ReconnectEnum | undefined;

  /**
   * Specifies whether users can switch the running mode of their WorkSpace.
   *
   * @public
   */
  SwitchRunningMode?: ReconnectEnum | undefined;

  /**
   * Specifies whether users can rebuild the operating system of a WorkSpace to its original state.
   *
   * @public
   */
  RebuildWorkspace?: ReconnectEnum | undefined;
}

/**
 * Describes the Global Accelerator for directory
 *
 * @public
 */
export interface GlobalAcceleratorForDirectory {
  /**
   * Indicates if Global Accelerator for directory is enabled or disabled.
   *
   * @public
   */
  Mode: AGAModeForDirectoryEnum | undefined;

  /**
   * Indicates the preferred protocol for Global Accelerator.
   *
   * @public
   */
  PreferredProtocol?: AGAPreferredProtocolForDirectory | undefined;
}

/**
 * Describes the storage connector.
 *
 * @public
 */
export interface StorageConnector {
  /**
   * The type of connector used to save user files.
   *
   * @public
   */
  ConnectorType: StorageConnectorTypeEnum | undefined;

  /**
   * Indicates if the storage connetor is enabled or disabled.
   *
   * @public
   */
  Status: StorageConnectorStatusEnum | undefined;
}

/**
 * Information about the user's permission settings.
 *
 * @public
 */
export interface UserSetting {
  /**
   * Indicates the type of action.
   *
   * @public
   */
  Action: UserSettingActionEnum | undefined;

  /**
   * Indicates if the setting is enabled or disabled.
   *
   * @public
   */
  Permission: UserSettingPermissionEnum | undefined;

  /**
   * Indicates the maximum character length for the specified user setting.
   *
   * @public
   */
  MaximumLength?: number | undefined;
}

/**
 * Describes the streaming properties.
 *
 * @public
 */
export interface StreamingProperties {
  /**
   * Indicates the type of preferred protocol for the streaming experience.
   *
   * @public
   */
  StreamingExperiencePreferredProtocol?: StreamingExperiencePreferredProtocolEnum | undefined;

  /**
   * Indicates the permission settings asscoiated with the user.
   *
   * @public
   */
  UserSettings?: UserSetting[] | undefined;

  /**
   * Indicates the storage connector used
   *
   * @public
   */
  StorageConnectors?: StorageConnector[] | undefined;

  /**
   * Indicates the Global Accelerator properties.
   *
   * @public
   */
  GlobalAccelerator?: GlobalAcceleratorForDirectory | undefined;
}

/**
 * The device types and operating systems that can be used to access a WorkSpace. For more information, see [Amazon WorkSpaces Client Network Requirements](https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html).
 *
 * @public
 */
export interface WorkspaceAccessProperties {
  /**
   * Indicates whether users can use Windows clients to access their WorkSpaces.
   *
   * @public
   */
  DeviceTypeWindows?: AccessPropertyValue | undefined;

  /**
   * Indicates whether users can use macOS clients to access their WorkSpaces.
   *
   * @public
   */
  DeviceTypeOsx?: AccessPropertyValue | undefined;

  /**
   * Indicates whether users can access their WorkSpaces through a web browser.
   *
   * @public
   */
  DeviceTypeWeb?: AccessPropertyValue | undefined;

  /**
   * Indicates whether users can use iOS devices to access their WorkSpaces.
   *
   * @public
   */
  DeviceTypeIos?: AccessPropertyValue | undefined;

  /**
   * Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces.
   *
   * @public
   */
  DeviceTypeAndroid?: AccessPropertyValue | undefined;

  /**
   * Indicates whether users can use Chromebooks to access their WorkSpaces.
   *
   * @public
   */
  DeviceTypeChromeOs?: AccessPropertyValue | undefined;

  /**
   * Indicates whether users can use zero client devices to access their WorkSpaces.
   *
   * @public
   */
  DeviceTypeZeroClient?: AccessPropertyValue | undefined;

  /**
   * Indicates whether users can use Linux clients to access their WorkSpaces.
   *
   * @public
   */
  DeviceTypeLinux?: AccessPropertyValue | undefined;

  /**
   * Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client.
   *
   * @public
   */
  DeviceTypeWorkSpacesThinClient?: AccessPropertyValue | undefined;

  /**
   * Specifies the configuration for accessing the WorkSpace.
   *
   * @public
   */
  AccessEndpointConfig?: AccessEndpointConfig | undefined;
}

/**
 * Describes a directory that is used with Amazon WorkSpaces.
 *
 * @public
 */
export interface WorkspaceDirectory {
  /**
   * The directory identifier.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The directory alias.
   *
   * @public
   */
  Alias?: string | undefined;

  /**
   * The name of the directory.
   *
   * @public
   */
  DirectoryName?: string | undefined;

  /**
   * The registration code for the directory. This is the code that users enter in their Amazon WorkSpaces client application to connect to the directory.
   *
   * @public
   */
  RegistrationCode?: string | undefined;

  /**
   * The identifiers of the subnets used with the directory.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The IP addresses of the DNS servers for the directory.
   *
   * @public
   */
  DnsIpAddresses?: string[] | undefined;

  /**
   * The IPv6 addresses of the DNS servers for the directory.
   *
   * @public
   */
  DnsIpv6Addresses?: string[] | undefined;

  /**
   * The user name for the service account.
   *
   * @public
   */
  CustomerUserName?: string | undefined;

  /**
   * The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make calls to other services, such as Amazon EC2, on your behalf.
   *
   * @public
   */
  IamRoleId?: string | undefined;

  /**
   * The directory type.
   *
   * @public
   */
  DirectoryType?: WorkspaceDirectoryType | undefined;

  /**
   * The identifier of the security group that is assigned to new WorkSpaces.
   *
   * @public
   */
  WorkspaceSecurityGroupId?: string | undefined;

  /**
   * The state of the directory's registration with Amazon WorkSpaces. After a directory is deregistered, the `DEREGISTERED` state is returned very briefly before the directory metadata is cleaned up, so this state is rarely returned. To confirm that a directory is deregistered, check for the directory ID by using [DescribeWorkspaceDirectories](https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html). If the directory ID isn't returned, then the directory has been successfully deregistered.
   *
   * @public
   */
  State?: WorkspaceDirectoryState | undefined;

  /**
   * The default creation properties for all WorkSpaces in the directory.
   *
   * @public
   */
  WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties | undefined;

  /**
   * The identifiers of the IP access control groups associated with the directory.
   *
   * @public
   */
  ipGroupIds?: string[] | undefined;

  /**
   * The devices and operating systems that users can use to access WorkSpaces.
   *
   * @public
   */
  WorkspaceAccessProperties?: WorkspaceAccessProperties | undefined;

  /**
   * Specifies whether the directory is dedicated or shared. To use Bring Your Own License (BYOL), this value must be set to `DEDICATED`. For more information, see [Bring Your Own Windows Desktop Images](https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html).
   *
   * @public
   */
  Tenancy?: Tenancy | undefined;

  /**
   * The default self-service permissions for WorkSpaces in the directory.
   *
   * @public
   */
  SelfservicePermissions?: SelfservicePermissions | undefined;

  /**
   * Describes the enablement status, user access URL, and relay state parameter name that are used for configuring federation with an SAML 2.0 identity provider.
   *
   * @public
   */
  SamlProperties?: SamlProperties | undefined;

  /**
   * The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP) user identities to Active Directory for WorkSpaces login.
   *
   * @public
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties | undefined;

  /**
   * Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode.
   *
   * @public
   */
  EndpointEncryptionMode?: EndpointEncryptionMode | undefined;

  /**
   * Specifies details about Microsoft Entra configurations.
   *
   * @public
   */
  MicrosoftEntraConfig?: MicrosoftEntraConfig | undefined;

  /**
   * The name fo the WorkSpace directory.
   *
   * @public
   */
  WorkspaceDirectoryName?: string | undefined;

  /**
   * The description of the WorkSpace directory
   *
   * @public
   */
  WorkspaceDirectoryDescription?: string | undefined;

  /**
   * Indicates the identity type of the specifired user.
   *
   * @public
   */
  UserIdentityType?: UserIdentityType | undefined;

  /**
   * Indicates whether the directory's WorkSpace type is personal or pools.
   *
   * @public
   */
  WorkspaceType?: WorkspaceType | undefined;

  /**
   * Specifies details about identity center configurations.
   *
   * @public
   */
  IDCConfig?: IDCConfig | undefined;

  /**
   * Information about the Active Directory config.
   *
   * @public
   */
  ActiveDirectoryConfig?: ActiveDirectoryConfig | undefined;

  /**
   * The streaming properties to configure.
   *
   * @public
   */
  StreamingProperties?: StreamingProperties | undefined;

  /**
   * The error message returned.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceDirectoriesResult {
  /**
   * Information about the directories.
   *
   * @public
   */
  Directories?: WorkspaceDirectory[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceImagePermissionsRequest {
  /**
   * The identifier of the image.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes the Amazon Web Services accounts that have been granted permission to use a shared image. For more information about sharing images, see [Share or Unshare a Custom WorkSpaces Image](https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html).
 *
 * @public
 */
export interface ImagePermission {
  /**
   * The identifier of the Amazon Web Services account that an image has been shared with.
   *
   * @public
   */
  SharedAccountId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceImagePermissionsResult {
  /**
   * The identifier of the image.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The identifiers of the Amazon Web Services accounts that the image has been shared with.
   *
   * @public
   */
  ImagePermissions?: ImagePermission[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceImagesRequest {
  /**
   * The identifier of the image.
   *
   * @public
   */
  ImageIds?: string[] | undefined;

  /**
   * The type (owned or shared) of the image.
   *
   * @public
   */
  ImageType?: ImageType | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Describes in-depth details about the error. These details include the possible causes of the error and troubleshooting information.
 *
 * @public
 */
export interface ErrorDetails {
  /**
   * Indicates the error code returned.
   *
   * @public
   */
  ErrorCode?: WorkspaceImageErrorDetailCode | undefined;

  /**
   * The text of the error message related the error code.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Describes whether a WorkSpace image needs to be updated with the latest drivers and other components required by Amazon WorkSpaces.
 *
 * > **Note:** Only Windows 10 WorkSpace images can be programmatically updated at this time.
 *
 * @public
 */
export interface UpdateResult {
  /**
   * Indicates whether updated drivers or other components are available for the specified WorkSpace image.
   *
   * @public
   */
  UpdateAvailable?: boolean | undefined;

  /**
   * A description of whether updates for the WorkSpace image are pending or available.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Describes a WorkSpace image.
 *
 * @public
 */
export interface WorkspaceImage {
  /**
   * The identifier of the image.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The name of the image.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the image.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The operating system that the image is running.
   *
   * @public
   */
  OperatingSystem?: OperatingSystem | undefined;

  /**
   * The status of the image.
   *
   * @public
   */
  State?: WorkspaceImageState | undefined;

  /**
   * Specifies whether the image is running on dedicated hardware. When Bring Your Own License (BYOL) is enabled, this value is set to `DEDICATED`. For more information, see [Bring Your Own Windows Desktop Images](https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html).
   *
   * @public
   */
  RequiredTenancy?: WorkspaceImageRequiredTenancy | undefined;

  /**
   * The error code that is returned for the image.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The text of the error message that is returned for the image.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The date when the image was created. If the image has been shared, the Amazon Web Services account that the image has been shared with sees the original creation date of the image.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * The identifier of the Amazon Web Services account that owns the image.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The updates (if any) that are available for the specified image.
   *
   * @public
   */
  Updates?: UpdateResult | undefined;

  /**
   * Additional details of the error returned for the image, including the possible causes of the errors and troubleshooting information.
   *
   * @public
   */
  ErrorDetails?: ErrorDetails[] | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceImagesResult {
  /**
   * Information about the images.
   *
   * @public
   */
  Images?: WorkspaceImage[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspacesRequest {
  /**
   * The identifiers of the WorkSpaces. You cannot combine this parameter with any other filter.
   *
   * Because the CreateWorkspaces operation is asynchronous, the identifier it returns is not immediately available. If you immediately call DescribeWorkspaces with this identifier, no information is returned.
   *
   * @public
   */
  WorkspaceIds?: string[] | undefined;

  /**
   * The identifier of the directory. In addition, you can optionally specify a specific directory user (see `UserName`). You cannot combine this parameter with any other filter.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The name of the directory user. You must specify this parameter with `DirectoryId`.
   *
   * @public
   */
  UserName?: string | undefined;

  /**
   * The identifier of the bundle. All WorkSpaces that are created from this bundle are retrieved. You cannot combine this parameter with any other filter.
   *
   * @public
   */
  BundleId?: string | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The name of the user-decoupled WorkSpace.
   *
   * @public
   */
  WorkspaceName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspacesResult {
  /**
   * Information about the WorkSpaces.
   *
   * Because CreateWorkspaces is an asynchronous operation, some of the returned information could be incomplete.
   *
   * @public
   */
  Workspaces?: Workspace[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspacesConnectionStatusRequest {
  /**
   * The identifiers of the WorkSpaces. You can specify up to 25 WorkSpaces.
   *
   * @public
   */
  WorkspaceIds?: string[] | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the connection status of a WorkSpace.
 *
 * @public
 */
export interface WorkspaceConnectionStatus {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId?: string | undefined;

  /**
   * The connection state of the WorkSpace. The connection state is unknown if the WorkSpace is stopped.
   *
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * The timestamp of the connection status check.
   *
   * @public
   */
  ConnectionStateCheckTimestamp?: Date | undefined;

  /**
   * The timestamp of the last known user connection.
   *
   * @public
   */
  LastKnownUserConnectionTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspacesConnectionStatusResult {
  /**
   * Information about the connection status of the WorkSpace.
   *
   * @public
   */
  WorkspacesConnectionStatus?: WorkspaceConnectionStatus[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceSnapshotsRequest {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId: string | undefined;
}

/**
 * Describes a snapshot.
 *
 * @public
 */
export interface Snapshot {
  /**
   * The time when the snapshot was created.
   *
   * @public
   */
  SnapshotTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceSnapshotsResult {
  /**
   * Information about the snapshots that can be used to rebuild a WorkSpace. These snapshots include the user volume.
   *
   * @public
   */
  RebuildSnapshots?: Snapshot[] | undefined;

  /**
   * Information about the snapshots that can be used to restore a WorkSpace. These snapshots include both the root volume and the user volume.
   *
   * @public
   */
  RestoreSnapshots?: Snapshot[] | undefined;
}

/**
 * Describes the filter conditions for WorkSpaces Pools to return.
 *
 * @public
 */
export interface DescribeWorkspacesPoolsFilter {
  /**
   * The name of the pool to filter.
   *
   * @public
   */
  Name: DescribeWorkspacesPoolsFilterName | undefined;

  /**
   * The values for filtering WorkSpaces Pools.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * The operator values for filtering WorkSpaces Pools.
   *
   * @public
   */
  Operator: DescribeWorkspacesPoolsFilterOperator | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspacesPoolsRequest {
  /**
   * The identifier of the WorkSpaces Pools.
   *
   * @public
   */
  PoolIds?: string[] | undefined;

  /**
   * The filter conditions for the WorkSpaces Pool to return.
   *
   * @public
   */
  Filters?: DescribeWorkspacesPoolsFilter[] | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspacesPoolsResult {
  /**
   * Information about the WorkSpaces Pools.
   *
   * @public
   */
  WorkspacesPools?: WorkspacesPool[] | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspacesPoolSessionsRequest {
  /**
   * The identifier of the pool.
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * The identifier of the user.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The maximum size of each page of results. The default value is 20 and the maximum value is 50.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes the network details of a WorkSpaces Pool.
 *
 * @public
 */
export interface NetworkAccessConfiguration {
  /**
   * The private IP address of the elastic network interface that is attached to instances in your VPC.
   *
   * @public
   */
  EniPrivateIpAddress?: string | undefined;

  /**
   * The resource identifier of the elastic network interface that is attached to instances in your VPC. All network interfaces have the eni-xxxxxxxx resource identifier.
   *
   * @public
   */
  EniId?: string | undefined;
}

/**
 * Describes a pool session.
 *
 * @public
 */
export interface WorkspacesPoolSession {
  /**
   * The authentication method. The user is authenticated using a WorkSpaces Pools URL (API) or SAML 2.0 federation (SAML).
   *
   * @public
   */
  AuthenticationType?: AuthenticationType | undefined;

  /**
   * Specifies whether a user is connected to the pool session.
   *
   * @public
   */
  ConnectionState?: SessionConnectionState | undefined;

  /**
   * The identifier of the session.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * The identifier for the instance hosting the session.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The identifier of the pool.
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * The time that the pool session ended.
   *
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * Describes the network details of the pool.
   *
   * @public
   */
  NetworkAccessConfiguration?: NetworkAccessConfiguration | undefined;

  /**
   * The time that the pool sission started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The identifier of the user.
   *
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspacesPoolSessionsResult {
  /**
   * Describes the pool sessions.
   *
   * @public
   */
  Sessions?: WorkspacesPoolSession[] | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateConnectionAliasRequest {
  /**
   * The identifier of the connection alias to disassociate.
   *
   * @public
   */
  AliasId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateConnectionAliasResult {}

/**
 * @public
 */
export interface DisassociateIpGroupsRequest {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The identifiers of one or more IP access control groups.
   *
   * @public
   */
  GroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateIpGroupsResult {}

/**
 * @public
 */
export interface DisassociateWorkspaceApplicationRequest {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * The identifier of the application.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateWorkspaceApplicationResult {
  /**
   * Information about the targeted association.
   *
   * @public
   */
  Association?: WorkspaceResourceAssociation | undefined;
}

/**
 * Describes a WorkSpace that could not be rebooted. (RebootWorkspaces), rebuilt (RebuildWorkspaces), restored (RestoreWorkspace), terminated (TerminateWorkspaces), started (StartWorkspaces), or stopped (StopWorkspaces).
 *
 * @public
 */
export interface FailedWorkspaceChangeRequest {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId?: string | undefined;

  /**
   * The error code that is returned if the WorkSpace cannot be rebooted.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The text of the error message that is returned if the WorkSpace cannot be rebooted.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountLinkRequest {
  /**
   * The identifier of the account to link.
   *
   * @public
   */
  LinkId?: string | undefined;

  /**
   * The identifier of the account link
   *
   * @public
   */
  LinkedAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetAccountLinkResult {
  /**
   * The account link of the account link to retrieve.
   *
   * @public
   */
  AccountLink?: AccountLink | undefined;
}

/**
 * The client branding attributes to import for iOS device types. These attributes are displayed on the iOS client login screen.
 *
 * > **Important:** Client branding attributes are public facing. Ensure you do not include sensitive information.
 *
 * @public
 */
export interface IosImportClientBrandingAttributes {
  /**
   * The logo. This is the standard-resolution display that has a 1:1 pixel density (or @1x), where one pixel is equal to one point. The only image format accepted is a binary data object that is converted from a `.png` file.
   *
   * @public
   */
  Logo?: Uint8Array | undefined;

  /**
   * The @2x version of the logo. This is the higher resolution display that offers a scale factor of 2.0 (or @2x). The only image format accepted is a binary data object that is converted from a `.png` file.
   *
   * > **Note:** For more information about iOS image size and resolution, see [Image Size and Resolution](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/) in the *Apple Human Interface Guidelines*.
   *
   * @public
   */
  Logo2x?: Uint8Array | undefined;

  /**
   * The @3x version of the logo. This is the higher resolution display that offers a scale factor of 3.0 (or @3x). The only image format accepted is a binary data object that is converted from a `.png` file.
   *
   * > **Note:** For more information about iOS image size and resolution, see [Image Size and Resolution](https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/) in the *Apple Human Interface Guidelines*.
   *
   * @public
   */
  Logo3x?: Uint8Array | undefined;

  /**
   * The support email. The company's customer support email address.
   *
   * > **Note:**
   * >
   * > - In each platform type, the `SupportEmail` and `SupportLink` parameters are mutually exclusive. You can specify one parameter for each platform type, but not both.
   * > - The default email is `workspaces-feedback@amazon.com`.
   *
   * @public
   */
  SupportEmail?: string | undefined;

  /**
   * The support link. The link for the company's customer support page for their WorkSpace.
   *
   * > **Note:**
   * >
   * > - In each platform type, the `SupportEmail` and `SupportLink` parameters are mutually exclusive. You can specify one parameter for each platform type, but not both.
   * > - The default support link is `workspaces-feedback@amazon.com`.
   *
   * @public
   */
  SupportLink?: string | undefined;

  /**
   * The forgotten password link. This is the web address that users can go to if they forget the password for their WorkSpace.
   *
   * @public
   */
  ForgotPasswordLink?: string | undefined;

  /**
   * The login message. Specified as a key value pair, in which the key is a locale and the value is the localized message for that locale. The only key supported is `en_US`. The HTML tags supported include the following: `a, b, blockquote, br, cite, code, dd, dl, dt, div, em, i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul`.
   *
   * @public
   */
  LoginMessage?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ImportClientBrandingRequest {
  /**
   * The directory identifier of the WorkSpace for which you want to import client branding.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The branding information to import for Windows devices.
   *
   * @public
   */
  DeviceTypeWindows?: DefaultImportClientBrandingAttributes | undefined;

  /**
   * The branding information to import for macOS devices.
   *
   * @public
   */
  DeviceTypeOsx?: DefaultImportClientBrandingAttributes | undefined;

  /**
   * The branding information to import for Android devices.
   *
   * @public
   */
  DeviceTypeAndroid?: DefaultImportClientBrandingAttributes | undefined;

  /**
   * The branding information to import for iOS devices.
   *
   * @public
   */
  DeviceTypeIos?: IosImportClientBrandingAttributes | undefined;

  /**
   * The branding information to import for Linux devices.
   *
   * @public
   */
  DeviceTypeLinux?: DefaultImportClientBrandingAttributes | undefined;

  /**
   * The branding information to import for web access.
   *
   * @public
   */
  DeviceTypeWeb?: DefaultImportClientBrandingAttributes | undefined;
}

/**
 * @public
 */
export interface ImportClientBrandingResult {
  /**
   * The branding information configured for Windows devices.
   *
   * @public
   */
  DeviceTypeWindows?: DefaultClientBrandingAttributes | undefined;

  /**
   * The branding information configured for macOS devices.
   *
   * @public
   */
  DeviceTypeOsx?: DefaultClientBrandingAttributes | undefined;

  /**
   * The branding information configured for Android devices.
   *
   * @public
   */
  DeviceTypeAndroid?: DefaultClientBrandingAttributes | undefined;

  /**
   * The branding information configured for iOS devices.
   *
   * @public
   */
  DeviceTypeIos?: IosClientBrandingAttributes | undefined;

  /**
   * The branding information configured for Linux devices.
   *
   * @public
   */
  DeviceTypeLinux?: DefaultClientBrandingAttributes | undefined;

  /**
   * The branding information configured for web access.
   *
   * @public
   */
  DeviceTypeWeb?: DefaultClientBrandingAttributes | undefined;
}

/**
 * @public
 */
export interface ImportCustomWorkspaceImageRequest {
  /**
   * The name of the WorkSpace image.
   *
   * @public
   */
  ImageName: string | undefined;

  /**
   * The description of the WorkSpace image.
   *
   * @public
   */
  ImageDescription: string | undefined;

  /**
   * The supported compute type for the WorkSpace image.
   *
   * @public
   */
  ComputeType: ImageComputeType | undefined;

  /**
   * The supported protocol for the WorkSpace image. Windows 11 does not support PCOIP protocol.
   *
   * @public
   */
  Protocol: CustomImageProtocol | undefined;

  /**
   * The options for image import source.
   *
   * @public
   */
  ImageSource: ImageSourceIdentifier | undefined;

  /**
   * The infrastructure configuration ARN that specifies how the WorkSpace image is built.
   *
   * @public
   */
  InfrastructureConfigurationArn: string | undefined;

  /**
   * The platform for the WorkSpace image source.
   *
   * @public
   */
  Platform: Platform | undefined;

  /**
   * The OS version for the WorkSpace image source.
   *
   * @public
   */
  OsVersion: OSVersion | undefined;

  /**
   * The resource tags. Each WorkSpaces resource can have a maximum of 50 tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The image validation mode for the WorkSpace image import.
   *
   * @public
   */
  ImageValidationMode?: ImageValidationMode | undefined;
}

/**
 * @public
 */
export interface ImportCustomWorkspaceImageResult {
  /**
   * The identifier of the WorkSpace image.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The state of the WorkSpace image.
   *
   * @public
   */
  State?: CustomWorkspaceImageImportState | undefined;
}

/**
 * @public
 */
export interface ImportWorkspaceImageRequest {
  /**
   * The identifier of the EC2 image.
   *
   * @public
   */
  Ec2ImageId: string | undefined;

  /**
   * The ingestion process to be used when importing the image, depending on which protocol you want to use for your BYOL Workspace image, either PCoIP, WSP, or bring your own protocol (BYOP). To use DCV, specify a value that ends in `_WSP`. To use PCoIP, specify a value that does not end in `_WSP`. To use BYOP, specify a value that ends in `_BYOP`.
   *
   * For non-GPU-enabled bundles (bundles other than Graphics or GraphicsPro), specify `BYOL_REGULAR`, `BYOL_REGULAR_WSP`, or `BYOL_REGULAR_BYOP`, depending on the protocol.
   *
   * > **Note:** The `BYOL_REGULAR_BYOP` and `BYOL_GRAPHICS_G4DN_BYOP` values are only supported by Amazon WorkSpaces Core. Contact your account team to be allow-listed to use these values. For more information, see [Amazon WorkSpaces Core](http://aws.amazon.com/workspaces/core/).
   *
   * @public
   */
  IngestionProcess: WorkspaceImageIngestionProcess | undefined;

  /**
   * The name of the WorkSpace image.
   *
   * @public
   */
  ImageName: string | undefined;

  /**
   * The description of the WorkSpace image.
   *
   * @public
   */
  ImageDescription: string | undefined;

  /**
   * The tags. Each WorkSpaces resource can have a maximum of 50 tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * If specified, the version of Microsoft Office to subscribe to. Valid only for Windows 10 and 11 BYOL images. For more information about subscribing to Office for BYOL images, see [Bring Your Own Windows Desktop Licenses](https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html).
   *
   * > **Note:**
   * >
   * > - Although this parameter is an array, only one item is allowed at this time.
   * > - During the image import process, non-GPU DCV (formerly WSP) WorkSpaces with Windows 11 support only `Microsoft_Office_2019`. GPU DCV (formerly WSP) WorkSpaces with Windows 11 do not support Office installation.
   *
   * @public
   */
  Applications?: Application[] | undefined;
}

/**
 * @public
 */
export interface ImportWorkspaceImageResult {
  /**
   * The identifier of the WorkSpace image.
   *
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * @public
 */
export interface ListAccountLinksRequest {
  /**
   * Filters the account based on their link status.
   *
   * @public
   */
  LinkStatusFilter?: AccountLinkStatusEnum[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of accounts to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccountLinksResult {
  /**
   * Information about the account links.
   *
   * @public
   */
  AccountLinks?: AccountLink[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAvailableManagementCidrRangesRequest {
  /**
   * The IP address range to search. Specify an IP address range that is compatible with your network and in CIDR notation (that is, specify the range as an IPv4 CIDR block).
   *
   * @public
   */
  ManagementCidrRangeConstraint: string | undefined;

  /**
   * The maximum number of items to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * If you received a `NextToken` from a previous call that was paginated, provide this token to receive the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAvailableManagementCidrRangesResult {
  /**
   * The list of available IP address ranges, specified as IPv4 CIDR blocks.
   *
   * @public
   */
  ManagementCidrRanges?: string[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface MigrateWorkspaceRequest {
  /**
   * The identifier of the WorkSpace to migrate from.
   *
   * @public
   */
  SourceWorkspaceId: string | undefined;

  /**
   * The identifier of the target bundle type to migrate the WorkSpace to.
   *
   * @public
   */
  BundleId: string | undefined;
}

/**
 * @public
 */
export interface MigrateWorkspaceResult {
  /**
   * The original identifier of the WorkSpace that is being migrated.
   *
   * @public
   */
  SourceWorkspaceId?: string | undefined;

  /**
   * The new identifier of the WorkSpace that is being migrated. If the migration does not succeed, the target WorkSpace ID will not be used, and the WorkSpace will still have the original WorkSpace ID.
   *
   * @public
   */
  TargetWorkspaceId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyAccountRequest {
  /**
   * The status of BYOL.
   *
   * @public
   */
  DedicatedTenancySupport?: DedicatedTenancySupportEnum | undefined;

  /**
   * The IP address range, specified as an IPv4 CIDR block, for the management network interface. Specify an IP address range that is compatible with your network and in CIDR notation (that is, specify the range as an IPv4 CIDR block). The CIDR block size must be /16 (for example, 203.0.113.25/16). It must also be specified as available by the `ListAvailableManagementCidrRanges` operation.
   *
   * @public
   */
  DedicatedTenancyManagementCidrRange?: string | undefined;
}

/**
 * @public
 */
export interface ModifyAccountResult {
  /**
   * The text message to describe the status of BYOL modification.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface ModifyCertificateBasedAuthPropertiesRequest {
  /**
   * The resource identifiers, in the form of directory IDs.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The properties of the certificate-based authentication.
   *
   * @public
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties | undefined;

  /**
   * The properties of the certificate-based authentication you want to delete.
   *
   * @public
   */
  PropertiesToDelete?: DeletableCertificateBasedAuthProperty[] | undefined;
}

/**
 * @public
 */
export interface ModifyCertificateBasedAuthPropertiesResult {}

/**
 * @public
 */
export interface ModifyClientPropertiesRequest {
  /**
   * The resource identifiers, in the form of directory IDs.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * Information about the Amazon WorkSpaces client.
   *
   * @public
   */
  ClientProperties: ClientProperties | undefined;
}

/**
 * @public
 */
export interface ModifyClientPropertiesResult {}

/**
 * @public
 */
export interface ModifyEndpointEncryptionModeRequest {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId: string | undefined;

  /**
   * The encryption mode used for endpoint connections when streaming to WorkSpaces Personal or WorkSpace Pools.
   *
   * @public
   */
  EndpointEncryptionMode: EndpointEncryptionMode | undefined;
}

/**
 * @public
 */
export interface ModifyEndpointEncryptionModeResponse {}

/**
 * @public
 */
export interface ModifySamlPropertiesRequest {
  /**
   * The directory identifier for which you want to configure SAML properties.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The properties for configuring SAML 2.0 authentication.
   *
   * @public
   */
  SamlProperties?: SamlProperties | undefined;

  /**
   * The SAML properties to delete as part of your request.
   *
   * Specify one of the following options:
   *
   * - `SAML_PROPERTIES_USER_ACCESS_URL` to delete the user access URL.
   * - `SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME` to delete the relay state parameter name.
   *
   * @public
   */
  PropertiesToDelete?: DeletableSamlProperty[] | undefined;
}

/**
 * @public
 */
export interface ModifySamlPropertiesResult {}

/**
 * @public
 */
export interface ModifySelfservicePermissionsRequest {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The permissions to enable or disable self-service capabilities.
   *
   * @public
   */
  SelfservicePermissions: SelfservicePermissions | undefined;
}

/**
 * @public
 */
export interface ModifySelfservicePermissionsResult {}

/**
 * @public
 */
export interface ModifyStreamingPropertiesRequest {
  /**
   * The identifier of the resource.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The streaming properties to configure.
   *
   * @public
   */
  StreamingProperties?: StreamingProperties | undefined;
}

/**
 * @public
 */
export interface ModifyStreamingPropertiesResult {}

/**
 * @public
 */
export interface ModifyWorkspaceAccessPropertiesRequest {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The device types and operating systems to enable or disable for access.
   *
   * @public
   */
  WorkspaceAccessProperties: WorkspaceAccessProperties | undefined;
}

/**
 * @public
 */
export interface ModifyWorkspaceAccessPropertiesResult {}

/**
 * Describes the default properties that are used for creating WorkSpaces. For more information, see [Update Directory Details for Your WorkSpaces](https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html).
 *
 * @public
 */
export interface WorkspaceCreationProperties {
  /**
   * Indicates whether internet access is enabled for your WorkSpaces.
   *
   * @public
   */
  EnableInternetAccess?: boolean | undefined;

  /**
   * The default organizational unit (OU) for your WorkSpaces directories. This string must be the full Lightweight Directory Access Protocol (LDAP) distinguished name for the target domain and OU. It must be in the form `"OU=value,DC=value,DC=value"`, where *value* is any string of characters, and the number of domain components (DCs) is two or more. For example, `OU=WorkSpaces_machines,DC=machines,DC=example,DC=com`.
   *
   * > **Important:**
   * >
   * > - To avoid errors, certain characters in the distinguished name must be escaped. For more information, see [Distinguished Names](https://docs.microsoft.com/previous-versions/windows/desktop/ldap/distinguished-names) in the Microsoft documentation.
   * > - The API doesn't validate whether the OU exists.
   *
   * @public
   */
  DefaultOu?: string | undefined;

  /**
   * The identifier of your custom security group.
   *
   * @public
   */
  CustomSecurityGroupId?: string | undefined;

  /**
   * Indicates whether users are local administrators of their WorkSpaces.
   *
   * @public
   */
  UserEnabledAsLocalAdministrator?: boolean | undefined;

  /**
   * Indicates whether maintenance mode is enabled for your WorkSpaces. For more information, see [WorkSpace Maintenance](https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html).
   *
   * @public
   */
  EnableMaintenanceMode?: boolean | undefined;

  /**
   * Indicates the IAM role ARN of the instance.
   *
   * @public
   */
  InstanceIamRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface ModifyWorkspaceCreationPropertiesRequest {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The default properties for creating WorkSpaces.
   *
   * @public
   */
  WorkspaceCreationProperties: WorkspaceCreationProperties | undefined;
}

/**
 * @public
 */
export interface ModifyWorkspaceCreationPropertiesResult {}

/**
 * @public
 */
export interface ModifyWorkspacePropertiesRequest {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * The properties of the WorkSpace.
   *
   * @public
   */
  WorkspaceProperties?: WorkspaceProperties | undefined;

  /**
   * Indicates the data replication status.
   *
   * @public
   */
  DataReplication?: DataReplication | undefined;
}

/**
 * @public
 */
export interface ModifyWorkspacePropertiesResult {}

/**
 * @public
 */
export interface ModifyWorkspaceStateRequest {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId: string | undefined;

  /**
   * The WorkSpace state.
   *
   * @public
   */
  WorkspaceState: TargetWorkspaceState | undefined;
}

/**
 * @public
 */
export interface ModifyWorkspaceStateResult {}

/**
 * Describes the information used to reboot a WorkSpace.
 *
 * @public
 */
export interface RebootRequest {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId: string | undefined;
}

/**
 * @public
 */
export interface RebootWorkspacesRequest {
  /**
   * The WorkSpaces to reboot. You can specify up to 25 WorkSpaces.
   *
   * @public
   */
  RebootWorkspaceRequests: RebootRequest[] | undefined;
}

/**
 * @public
 */
export interface RebootWorkspacesResult {
  /**
   * Information about the WorkSpaces that could not be rebooted.
   *
   * @public
   */
  FailedRequests?: FailedWorkspaceChangeRequest[] | undefined;
}

/**
 * Describes the information used to rebuild a WorkSpace.
 *
 * @public
 */
export interface RebuildRequest {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId: string | undefined;
}

/**
 * @public
 */
export interface RebuildWorkspacesRequest {
  /**
   * The WorkSpace to rebuild. You can specify a single WorkSpace.
   *
   * @public
   */
  RebuildWorkspaceRequests: RebuildRequest[] | undefined;
}

/**
 * @public
 */
export interface RebuildWorkspacesResult {
  /**
   * Information about the WorkSpace that could not be rebuilt.
   *
   * @public
   */
  FailedRequests?: FailedWorkspaceChangeRequest[] | undefined;
}

/**
 * @public
 */
export interface RegisterWorkspaceDirectoryRequest {
  /**
   * The identifier of the directory. You cannot register a directory if it does not have a status of Active. If the directory does not have a status of Active, you will receive an InvalidResourceStateException error. If you have already registered the maximum number of directories that you can register with Amazon WorkSpaces, you will receive a ResourceLimitExceededException error. Deregister directories that you are not using for WorkSpaces, and try again.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The identifiers of the subnets for your virtual private cloud (VPC). Make sure that the subnets are in supported Availability Zones. The subnets must also be in separate Availability Zones. If these conditions are not met, you will receive an OperationNotSupportedException error.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * Indicates whether self-service capabilities are enabled or disabled.
   *
   * @public
   */
  EnableSelfService?: boolean | undefined;

  /**
   * Indicates whether your WorkSpace directory is dedicated or shared. To use Bring Your Own License (BYOL) images, this value must be set to `DEDICATED` and your Amazon Web Services account must be enabled for BYOL. If your account has not been enabled for BYOL, you will receive an InvalidParameterValuesException error. For more information about BYOL images, see [Bring Your Own Windows Desktop Images](https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html).
   *
   * @public
   */
  Tenancy?: Tenancy | undefined;

  /**
   * The tags associated with the directory.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The name of the directory to register.
   *
   * @public
   */
  WorkspaceDirectoryName?: string | undefined;

  /**
   * Description of the directory to register.
   *
   * @public
   */
  WorkspaceDirectoryDescription?: string | undefined;

  /**
   * The type of identity management the user is using.
   *
   * @public
   */
  UserIdentityType?: UserIdentityType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the identity center instance.
   *
   * @public
   */
  IdcInstanceArn?: string | undefined;

  /**
   * The details about Microsoft Entra config.
   *
   * @public
   */
  MicrosoftEntraConfig?: MicrosoftEntraConfig | undefined;

  /**
   * Indicates whether the directory's WorkSpace type is personal or pools.
   *
   * @public
   */
  WorkspaceType?: WorkspaceType | undefined;

  /**
   * The active directory config of the directory.
   *
   * @public
   */
  ActiveDirectoryConfig?: ActiveDirectoryConfig | undefined;
}

/**
 * @public
 */
export interface RegisterWorkspaceDirectoryResult {
  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The registration status of the WorkSpace directory.
   *
   * @public
   */
  State?: WorkspaceDirectoryState | undefined;
}

/**
 * @public
 */
export interface RejectAccountLinkInvitationRequest {
  /**
   * The identifier of the account link
   *
   * @public
   */
  LinkId: string | undefined;

  /**
   * The client token of the account link invitation to reject.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RejectAccountLinkInvitationResult {
  /**
   * Information about the account link.
   *
   * @public
   */
  AccountLink?: AccountLink | undefined;
}

/**
 * @public
 */
export interface RestoreWorkspaceRequest {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId: string | undefined;
}

/**
 * @public
 */
export interface RestoreWorkspaceResult {}

/**
 * @public
 */
export interface RevokeIpRulesRequest {
  /**
   * The identifier of the group.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * The rules to remove from the group.
   *
   * @public
   */
  UserRules: string[] | undefined;
}

/**
 * @public
 */
export interface RevokeIpRulesResult {}

/**
 * Information used to start a WorkSpace.
 *
 * @public
 */
export interface StartRequest {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId?: string | undefined;
}

/**
 * @public
 */
export interface StartWorkspacesRequest {
  /**
   * The WorkSpaces to start. You can specify up to 25 WorkSpaces.
   *
   * @public
   */
  StartWorkspaceRequests: StartRequest[] | undefined;
}

/**
 * @public
 */
export interface StartWorkspacesResult {
  /**
   * Information about the WorkSpaces that could not be started.
   *
   * @public
   */
  FailedRequests?: FailedWorkspaceChangeRequest[] | undefined;
}

/**
 * @public
 */
export interface StartWorkspacesPoolRequest {
  /**
   * The identifier of the pool.
   *
   * @public
   */
  PoolId: string | undefined;
}

/**
 * @public
 */
export interface StartWorkspacesPoolResult {}

/**
 * Describes the information used to stop a WorkSpace.
 *
 * @public
 */
export interface StopRequest {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId?: string | undefined;
}

/**
 * @public
 */
export interface StopWorkspacesRequest {
  /**
   * The WorkSpaces to stop. You can specify up to 25 WorkSpaces.
   *
   * @public
   */
  StopWorkspaceRequests: StopRequest[] | undefined;
}

/**
 * @public
 */
export interface StopWorkspacesResult {
  /**
   * Information about the WorkSpaces that could not be stopped.
   *
   * @public
   */
  FailedRequests?: FailedWorkspaceChangeRequest[] | undefined;
}

/**
 * @public
 */
export interface StopWorkspacesPoolRequest {
  /**
   * The identifier of the pool.
   *
   * @public
   */
  PoolId: string | undefined;
}

/**
 * @public
 */
export interface StopWorkspacesPoolResult {}

/**
 * Describes the information used to terminate a WorkSpace.
 *
 * @public
 */
export interface TerminateRequest {
  /**
   * The identifier of the WorkSpace.
   *
   * @public
   */
  WorkspaceId: string | undefined;
}

/**
 * @public
 */
export interface TerminateWorkspacesRequest {
  /**
   * The WorkSpaces to terminate. You can specify up to 25 WorkSpaces.
   *
   * @public
   */
  TerminateWorkspaceRequests: TerminateRequest[] | undefined;
}

/**
 * @public
 */
export interface TerminateWorkspacesResult {
  /**
   * Information about the WorkSpaces that could not be terminated.
   *
   * @public
   */
  FailedRequests?: FailedWorkspaceChangeRequest[] | undefined;
}

/**
 * @public
 */
export interface TerminateWorkspacesPoolRequest {
  /**
   * The identifier of the pool.
   *
   * @public
   */
  PoolId: string | undefined;
}

/**
 * @public
 */
export interface TerminateWorkspacesPoolResult {}

/**
 * @public
 */
export interface TerminateWorkspacesPoolSessionRequest {
  /**
   * The identifier of the pool session.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * @public
 */
export interface TerminateWorkspacesPoolSessionResult {}

/**
 * @public
 */
export interface UpdateConnectClientAddInRequest {
  /**
   * The identifier of the client add-in to update.
   *
   * @public
   */
  AddInId: string | undefined;

  /**
   * The directory identifier for which the client add-in is configured.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The name of the client add-in.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The endpoint URL of the Connect Customer client add-in.
   *
   * @public
   */
  URL?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectClientAddInResult {}

/**
 * @public
 */
export interface UpdateConnectionAliasPermissionRequest {
  /**
   * The identifier of the connection alias that you want to update permissions for.
   *
   * @public
   */
  AliasId: string | undefined;

  /**
   * Indicates whether to share or unshare the connection alias with the specified Amazon Web Services account.
   *
   * @public
   */
  ConnectionAliasPermission: ConnectionAliasPermission | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionAliasPermissionResult {}

/**
 * @public
 */
export interface UpdateRulesOfIpGroupRequest {
  /**
   * The identifier of the group.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * One or more rules.
   *
   * @public
   */
  UserRules: IpRuleItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateRulesOfIpGroupResult {}

/**
 * @public
 */
export interface UpdateWorkspaceBundleRequest {
  /**
   * The identifier of the bundle.
   *
   * @public
   */
  BundleId?: string | undefined;

  /**
   * The identifier of the image.
   *
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceBundleResult {}

/**
 * @public
 */
export interface UpdateWorkspaceImagePermissionRequest {
  /**
   * The identifier of the image.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * The permission to copy the image. This permission can be revoked only after an image has been shared.
   *
   * @public
   */
  AllowCopyImage: boolean | undefined;

  /**
   * The identifier of the Amazon Web Services account to share or unshare the image with.
   *
   * > **Important:** Before sharing the image, confirm that you are sharing to the correct Amazon Web Services account ID.
   *
   * @public
   */
  SharedAccountId: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceImagePermissionResult {}

/**
 * @public
 */
export interface UpdateWorkspacesPoolRequest {
  /**
   * The identifier of the specified pool to update.
   *
   * @public
   */
  PoolId: string | undefined;

  /**
   * Describes the specified pool to update.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The identifier of the bundle.
   *
   * @public
   */
  BundleId?: string | undefined;

  /**
   * The identifier of the directory.
   *
   * @public
   */
  DirectoryId?: string | undefined;

  /**
   * The desired capacity for the pool.
   *
   * @public
   */
  Capacity?: Capacity | undefined;

  /**
   * The persistent application settings for users in the pool.
   *
   * @public
   */
  ApplicationSettings?: ApplicationSettingsRequest | undefined;

  /**
   * Indicates the timeout settings of the specified pool.
   *
   * @public
   */
  TimeoutSettings?: TimeoutSettings | undefined;

  /**
   * The desired running mode for the pool. The running mode can only be updated when the pool is in a stopped state.
   *
   * @public
   */
  RunningMode?: PoolsRunningMode | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspacesPoolResult {
  /**
   * Describes the specified pool.
   *
   * @public
   */
  WorkspacesPool?: WorkspacesPool | undefined;
}
