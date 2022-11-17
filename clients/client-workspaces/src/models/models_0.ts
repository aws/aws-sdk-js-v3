// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { WorkSpacesServiceException as __BaseException } from "./WorkSpacesServiceException";

/**
 * <p>The user is not authorized to access a resource.</p>
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

export enum AccessPropertyValue {
  ALLOW = "ALLOW",
  DENY = "DENY",
}

export enum DedicatedTenancySupportResultEnum {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum DedicatedTenancyModificationStateEnum {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

/**
 * <p>Describes a modification to the configuration of Bring Your Own License (BYOL) for the
 *          specified account. </p>
 */
export interface AccountModification {
  /**
   * <p>The state of the modification to the configuration of BYOL.</p>
   */
  ModificationState?: DedicatedTenancyModificationStateEnum | string;

  /**
   * <p>The status of BYOL (whether BYOL is being enabled or disabled).</p>
   */
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | string;

  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
   *          interface used for the account.</p>
   */
  DedicatedTenancyManagementCidrRange?: string;

  /**
   * <p>The timestamp when the modification of the BYOL configuration was started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The error code that is returned if the configuration of BYOL cannot be modified.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the configuration of BYOL cannot be
   *          modified.</p>
   */
  ErrorMessage?: string;
}

export enum Application {
  Microsoft_Office_2016 = "Microsoft_Office_2016",
  Microsoft_Office_2019 = "Microsoft_Office_2019",
}

export interface AssociateConnectionAliasRequest {
  /**
   * <p>The identifier of the connection alias.</p>
   */
  AliasId: string | undefined;

  /**
   * <p>The identifier of the directory to associate the connection alias with.</p>
   */
  ResourceId: string | undefined;
}

export interface AssociateConnectionAliasResult {
  /**
   * <p>The identifier of the connection alias association. You use the connection identifier in
   *          the DNS TXT record when you're configuring your DNS routing policies. </p>
   */
  ConnectionIdentifier?: string;
}

/**
 * <p>One or more parameter values are not valid.</p>
 */
export class InvalidParameterValuesException extends __BaseException {
  readonly name: "InvalidParameterValuesException" = "InvalidParameterValuesException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterValuesException, __BaseException>) {
    super({
      name: "InvalidParameterValuesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterValuesException.prototype);
  }
}

/**
 * <p>The state of the resource is not valid for this operation.</p>
 */
export class InvalidResourceStateException extends __BaseException {
  readonly name: "InvalidResourceStateException" = "InvalidResourceStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourceStateException, __BaseException>) {
    super({
      name: "InvalidResourceStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourceStateException.prototype);
  }
}

/**
 * <p>This operation is not supported.</p>
 */
export class OperationNotSupportedException extends __BaseException {
  readonly name: "OperationNotSupportedException" = "OperationNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The exception error reason.</p>
   */
  reason?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationNotSupportedException, __BaseException>) {
    super({
      name: "OperationNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationNotSupportedException.prototype);
    this.reason = opts.reason;
  }
}

/**
 * <p>The resource is associated with a directory.</p>
 */
export class ResourceAssociatedException extends __BaseException {
  readonly name: "ResourceAssociatedException" = "ResourceAssociatedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAssociatedException, __BaseException>) {
    super({
      name: "ResourceAssociatedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAssociatedException.prototype);
  }
}

/**
 * <p>The resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that could not be found.</p>
   */
  ResourceId?: string;

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
    this.ResourceId = opts.ResourceId;
  }
}

export interface AssociateIpGroupsRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   */
  GroupIds: string[] | undefined;
}

export interface AssociateIpGroupsResult {}

/**
 * <p>Your resource limits have been exceeded.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
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
  }
}

export enum AssociationStatus {
  ASSOCIATED_WITH_OWNER_ACCOUNT = "ASSOCIATED_WITH_OWNER_ACCOUNT",
  ASSOCIATED_WITH_SHARED_ACCOUNT = "ASSOCIATED_WITH_SHARED_ACCOUNT",
  NOT_ASSOCIATED = "NOT_ASSOCIATED",
  PENDING_ASSOCIATION = "PENDING_ASSOCIATION",
  PENDING_DISASSOCIATION = "PENDING_DISASSOCIATION",
}

/**
 * <p>Describes a rule for an IP access control group.</p>
 */
export interface IpRuleItem {
  /**
   * <p>The IP address range, in CIDR notation.</p>
   */
  ipRule?: string;

  /**
   * <p>The description.</p>
   */
  ruleDesc?: string;
}

export interface AuthorizeIpRulesRequest {
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The rules to add to the group.</p>
   */
  UserRules: IpRuleItem[] | undefined;
}

export interface AuthorizeIpRulesResult {}

export enum BundleType {
  REGULAR = "REGULAR",
  STANDBY = "STANDBY",
}

export enum Compute {
  GRAPHICS = "GRAPHICS",
  GRAPHICSPRO = "GRAPHICSPRO",
  GRAPHICSPRO_G4DN = "GRAPHICSPRO_G4DN",
  GRAPHICS_G4DN = "GRAPHICS_G4DN",
  PERFORMANCE = "PERFORMANCE",
  POWER = "POWER",
  POWERPRO = "POWERPRO",
  STANDARD = "STANDARD",
  VALUE = "VALUE",
}

/**
 * <p>Describes the compute type of the bundle.</p>
 */
export interface ComputeType {
  /**
   * <p>The compute type.</p>
   */
  Name?: Compute | string;
}

/**
 * <p>Describes the root volume for a WorkSpace bundle.</p>
 */
export interface RootStorage {
  /**
   * <p>The size of the root volume.</p>
   */
  Capacity?: string;
}

export enum WorkspaceBundleState {
  AVAILABLE = "AVAILABLE",
  ERROR = "ERROR",
  PENDING = "PENDING",
}

/**
 * <p>Describes the user volume for a WorkSpace bundle.</p>
 */
export interface UserStorage {
  /**
   * <p>The size of the user volume.</p>
   */
  Capacity?: string;
}

/**
 * <p>Describes a WorkSpace bundle.</p>
 */
export interface WorkspaceBundle {
  /**
   * <p>The identifier of the bundle.</p>
   */
  BundleId?: string;

  /**
   * <p>The name of the bundle.</p>
   */
  Name?: string;

  /**
   * <p>The owner of the bundle. This is the account identifier of the owner, or
   *          <code>AMAZON</code> if the bundle is provided by Amazon Web Services.</p>
   */
  Owner?: string;

  /**
   * <p>The description of the bundle.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the image that was used to create the bundle.</p>
   */
  ImageId?: string;

  /**
   * <p>The size of the root volume.</p>
   */
  RootStorage?: RootStorage;

  /**
   * <p>The size of the user volume.</p>
   */
  UserStorage?: UserStorage;

  /**
   * <p>The compute type of the bundle. For more information, see
   *          <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces Bundles</a>.</p>
   */
  ComputeType?: ComputeType;

  /**
   * <p>The last time that the bundle was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The time when the bundle was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The state of the WorkSpace bundle.</p>
   */
  State?: WorkspaceBundleState | string;

  /**
   * <p>The type of WorkSpace bundle.</p>
   */
  BundleType?: BundleType | string;
}

export enum CertificateBasedAuthStatusEnum {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Describes the properties of the certificate-based authentication you want to use
 *          with your WorkSpaces.</p>
 */
export interface CertificateBasedAuthProperties {
  /**
   * <p>The status of the certificate-based authentication properties.</p>
   */
  Status?: CertificateBasedAuthStatusEnum | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource.</p>
   */
  CertificateAuthorityArn?: string;
}

export enum ClientDeviceType {
  DEVICE_TYPE_ANDROID = "DeviceTypeAndroid",
  DEVICE_TYPE_IOS = "DeviceTypeIos",
  DEVICE_TYPE_LINUX = "DeviceTypeLinux",
  DEVICE_TYPE_OSX = "DeviceTypeOsx",
  DEVICE_TYPE_WEB = "DeviceTypeWeb",
  DEVICE_TYPE_WINDOWS = "DeviceTypeWindows",
}

export enum LogUploadEnum {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum ReconnectEnum {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Describes an Amazon WorkSpaces client.</p>
 */
export interface ClientProperties {
  /**
   * <p>Specifies whether users can cache their credentials on the Amazon WorkSpaces client.
   *          When enabled, users can choose to reconnect to their WorkSpaces without re-entering their
   *          credentials. </p>
   */
  ReconnectEnabled?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can upload diagnostic log files of Amazon WorkSpaces client directly to
   *          WorkSpaces to troubleshoot issues when using the WorkSpaces client.
   *          When enabled, the log files will be sent to WorkSpaces automatically and will be applied to all
   *          users in the specified directory.</p>
   */
  LogUploadEnabled?: LogUploadEnum | string;
}

/**
 * <p>Information about the Amazon WorkSpaces client.</p>
 */
export interface ClientPropertiesResult {
  /**
   * <p>The resource identifier, in the form of a directory ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>Information about the Amazon WorkSpaces client.</p>
   */
  ClientProperties?: ClientProperties;
}

/**
 * <p>Describes an Amazon Connect client add-in.</p>
 */
export interface ConnectClientAddIn {
  /**
   * <p>The client add-in identifier.</p>
   */
  AddInId?: string;

  /**
   * <p>The directory identifier for which the client add-in is configured.</p>
   */
  ResourceId?: string;

  /**
   * <p>The name of the client add in.</p>
   */
  Name?: string;

  /**
   * <p>The endpoint URL of the client add-in.</p>
   */
  URL?: string;
}

/**
 * <p>Describes a connection alias association that is used for cross-Region redirection. For
 *          more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAliasAssociation {
  /**
   * <p>The association status of the connection alias.</p>
   */
  AssociationStatus?: AssociationStatus | string;

  /**
   * <p>The identifier of the Amazon Web Services account that associated the connection alias
   *          with a directory.</p>
   */
  AssociatedAccountId?: string;

  /**
   * <p>The identifier of the directory associated with a connection alias.</p>
   */
  ResourceId?: string;

  /**
   * <p>The identifier of the connection alias association. You use the connection identifier in
   *          the DNS TXT record when you're configuring your DNS routing policies.</p>
   */
  ConnectionIdentifier?: string;
}

export enum ConnectionAliasState {
  CREATED = "CREATED",
  CREATING = "CREATING",
  DELETING = "DELETING",
}

/**
 * <p>Describes a connection alias. Connection aliases are used for cross-Region redirection.
 *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAlias {
  /**
   * <p>The connection string specified for the connection alias. The connection string must be
   *          in the form of a fully qualified domain name (FQDN), such as
   *          <code>www.example.com</code>.</p>
   */
  ConnectionString?: string;

  /**
   * <p>The identifier of the connection alias.</p>
   */
  AliasId?: string;

  /**
   * <p>The current state of the connection alias.</p>
   */
  State?: ConnectionAliasState | string;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the connection alias.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The association status of the connection alias.</p>
   */
  Associations?: ConnectionAliasAssociation[];
}

/**
 * <p>Describes the permissions for a connection alias. Connection aliases are used for
 *          cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region
 *             Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAliasPermission {
  /**
   * <p>The identifier of the Amazon Web Services account that the connection alias is shared
   *          with.</p>
   */
  SharedAccountId: string | undefined;

  /**
   * <p>Indicates whether the specified Amazon Web Services account is allowed to associate the
   *          connection alias with a directory.</p>
   */
  AllowAssociation: boolean | undefined;
}

export enum ConnectionState {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Describes a tag.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

export interface CopyWorkspaceImageRequest {
  /**
   * <p>The name of the image.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the source image.</p>
   */
  SourceImageId: string | undefined;

  /**
   * <p>The identifier of the source Region.</p>
   */
  SourceRegion: string | undefined;

  /**
   * <p>The tags for the image.</p>
   */
  Tags?: Tag[];
}

export interface CopyWorkspaceImageResult {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;
}

/**
 * <p>The specified resource already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
  }
}

/**
 * <p>The specified resource is not available.</p>
 */
export class ResourceUnavailableException extends __BaseException {
  readonly name: "ResourceUnavailableException" = "ResourceUnavailableException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier of the resource that is not available.</p>
   */
  ResourceId?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceUnavailableException, __BaseException>) {
    super({
      name: "ResourceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceUnavailableException.prototype);
    this.ResourceId = opts.ResourceId;
  }
}

export interface CreateConnectClientAddInRequest {
  /**
   * <p>The directory identifier for which to configure the client add-in.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The name of the client add-in.</p>
   */
  Name: string | undefined;

  /**
   * <p>The endpoint URL of the Amazon Connect client add-in.</p>
   */
  URL: string | undefined;
}

export interface CreateConnectClientAddInResult {
  /**
   * <p>The client add-in identifier.</p>
   */
  AddInId?: string;
}

/**
 * <p>The resource could not be created.</p>
 */
export class ResourceCreationFailedException extends __BaseException {
  readonly name: "ResourceCreationFailedException" = "ResourceCreationFailedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceCreationFailedException, __BaseException>) {
    super({
      name: "ResourceCreationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceCreationFailedException.prototype);
  }
}

export interface CreateConnectionAliasRequest {
  /**
   * <p>A connection string in the form of a fully qualified domain name (FQDN), such as
   *             <code>www.example.com</code>.</p>
   *          <important>
   *             <p>After you create a connection string, it is always associated to your Amazon Web Services account. You cannot recreate the same connection string with a different
   *             account, even if you delete all instances of it from the original account. The
   *             connection string is globally reserved for your account.</p>
   *          </important>
   */
  ConnectionString: string | undefined;

  /**
   * <p>The tags to associate with the connection alias.</p>
   */
  Tags?: Tag[];
}

export interface CreateConnectionAliasResult {
  /**
   * <p>The identifier of the connection alias.</p>
   */
  AliasId?: string;
}

export interface CreateIpGroupRequest {
  /**
   * <p>The name of the group.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The description of the group.</p>
   */
  GroupDesc?: string;

  /**
   * <p>The rules to add to the group.</p>
   */
  UserRules?: IpRuleItem[];

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags?: Tag[];
}

export interface CreateIpGroupResult {
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId?: string;
}

/**
 * <p>Describes a Standby WorkSpace.</p>
 */
export interface StandbyWorkspace {
  /**
   * <p>The identifier of the Standby WorkSpace.</p>
   */
  PrimaryWorkspaceId: string | undefined;

  /**
   * <p>The volume encryption key of the Standby WorkSpace.</p>
   */
  VolumeEncryptionKey?: string;

  /**
   * <p>The identifier of the directory for the Standby WorkSpace.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The tags associated with the Standby WorkSpace.</p>
   */
  Tags?: Tag[];
}

export interface CreateStandbyWorkspacesRequest {
  /**
   * <p>The Region of the primary WorkSpace.</p>
   */
  PrimaryRegion: string | undefined;

  /**
   * <p>Information about the Standby WorkSpace to be created.</p>
   */
  StandbyWorkspaces: StandbyWorkspace[] | undefined;
}

/**
 * <p>Describes the Standby WorkSpace that could not be created.</p>
 */
export interface FailedCreateStandbyWorkspacesRequest {
  /**
   * <p>Information about the Standby WorkSpace that could not be created.</p>
   */
  StandbyWorkspaceRequest?: StandbyWorkspace;

  /**
   * <p>The error code that is returned if the Standby WorkSpace could not be created.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the Standby WorkSpace could not be created.</p>
   */
  ErrorMessage?: string;
}

export enum WorkspaceState {
  ADMIN_MAINTENANCE = "ADMIN_MAINTENANCE",
  AVAILABLE = "AVAILABLE",
  ERROR = "ERROR",
  IMPAIRED = "IMPAIRED",
  MAINTENANCE = "MAINTENANCE",
  PENDING = "PENDING",
  REBOOTING = "REBOOTING",
  REBUILDING = "REBUILDING",
  RESTORING = "RESTORING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  SUSPENDED = "SUSPENDED",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING",
  UNHEALTHY = "UNHEALTHY",
  UPDATING = "UPDATING",
}

/**
 * <p>Information about the Standby WorkSpace.</p>
 */
export interface PendingCreateStandbyWorkspacesRequest {
  /**
   * <p>Describes the Standby WorkSpace that was created.</p>
   *          <p>Because this operation is asynchronous, the identifier returned is not immediately
   *          available for use with other operations. For example, if you call
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html">
   *             DescribeWorkspaces</a>
   *          before the WorkSpace is created, the information returned can be incomplete. </p>
   */
  UserName?: string;

  /**
   * <p>The identifier of the directory for the Standby WorkSpace.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The operational state of the Standby WorkSpace.</p>
   */
  State?: WorkspaceState | string;

  /**
   * <p>The identifier of the Standby WorkSpace.</p>
   */
  WorkspaceId?: string;
}

export interface CreateStandbyWorkspacesResult {
  /**
   * <p>Information about the Standby WorkSpace that could not be created. </p>
   */
  FailedStandbyRequests?: FailedCreateStandbyWorkspacesRequest[];

  /**
   * <p>Information about the Standby WorkSpace that was created.</p>
   */
  PendingStandbyRequests?: PendingCreateStandbyWorkspacesRequest[];
}

export interface CreateTagsRequest {
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection
   *          aliases.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags: Tag[] | undefined;
}

export interface CreateTagsResult {}

export interface CreateUpdatedWorkspaceImageRequest {
  /**
   * <p>The name of the new updated WorkSpace image.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of whether updates for the WorkSpace image are available.</p>
   */
  Description: string | undefined;

  /**
   * <p>The identifier of the source WorkSpace image.</p>
   */
  SourceImageId: string | undefined;

  /**
   * <p>The tags that you want to add to the new updated WorkSpace image.</p>
   *          <note>
   *             <p>To add tags at the same time when you're creating the updated image, you must create
   *             an IAM policy that grants your IAM user permissions to use
   *                <code>workspaces:CreateTags</code>. </p>
   *          </note>
   */
  Tags?: Tag[];
}

export interface CreateUpdatedWorkspaceImageResult {
  /**
   * <p>The identifier of the new updated WorkSpace image.</p>
   */
  ImageId?: string;
}

export interface CreateWorkspaceBundleRequest {
  /**
   * <p>The name of the bundle.</p>
   */
  BundleName: string | undefined;

  /**
   * <p>The description of the bundle.</p>
   */
  BundleDescription: string | undefined;

  /**
   * <p>The identifier of the image that is used to create the bundle.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Describes the compute type of the bundle.</p>
   */
  ComputeType: ComputeType | undefined;

  /**
   * <p>Describes the user volume for a WorkSpace bundle.</p>
   */
  UserStorage: UserStorage | undefined;

  /**
   * <p>Describes the root volume for a WorkSpace bundle.</p>
   */
  RootStorage?: RootStorage;

  /**
   * <p>The tags associated with the bundle.</p>
   *
   *          <note>
   *             <p>To add tags at the same time when you're creating the bundle, you must create an IAM policy that
   *             grants your IAM user permissions to use <code>workspaces:CreateTags</code>. </p>
   *          </note>
   */
  Tags?: Tag[];
}

export interface CreateWorkspaceBundleResult {
  /**
   * <p>Describes a WorkSpace bundle.</p>
   */
  WorkspaceBundle?: WorkspaceBundle;
}

export interface CreateWorkspaceImageRequest {
  /**
   * <p>The name of the new WorkSpace image.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the new WorkSpace image.</p>
   */
  Description: string | undefined;

  /**
   * <p>The identifier of the source WorkSpace</p>
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The tags that you want to add to the new WorkSpace image.
   *          To add tags when you're creating the image, you must create an IAM policy that grants
   *          your IAM user permission to use <code>workspaces:CreateTags</code>.</p>
   */
  Tags?: Tag[];
}

export enum OperatingSystemType {
  LINUX = "LINUX",
  WINDOWS = "WINDOWS",
}

/**
 * <p>The operating system that the image is running.</p>
 */
export interface OperatingSystem {
  /**
   * <p>The operating system.</p>
   */
  Type?: OperatingSystemType | string;
}

export enum WorkspaceImageRequiredTenancy {
  DEDICATED = "DEDICATED",
  DEFAULT = "DEFAULT",
}

export enum WorkspaceImageState {
  AVAILABLE = "AVAILABLE",
  ERROR = "ERROR",
  PENDING = "PENDING",
}

export interface CreateWorkspaceImageResult {
  /**
   * <p>The identifier of the new WorkSpace image.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the image.</p>
   */
  Name?: string;

  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The operating system that the image is running.</p>
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>The availability status of the image.</p>
   */
  State?: WorkspaceImageState | string;

  /**
   * <p>Specifies whether the image is running on dedicated hardware.
   *          When Bring Your Own License (BYOL) is enabled, this value is set
   *          to DEDICATED. For more information, see
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.htm">
   *             Bring Your Own Windows Desktop Images.</a>.</p>
   */
  RequiredTenancy?: WorkspaceImageRequiredTenancy | string;

  /**
   * <p>The date when the image was created.</p>
   */
  Created?: Date;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the image.</p>
   */
  OwnerAccountId?: string;
}

export enum Protocol {
  PCOIP = "PCOIP",
  WSP = "WSP",
}

export enum RunningMode {
  ALWAYS_ON = "ALWAYS_ON",
  AUTO_STOP = "AUTO_STOP",
  MANUAL = "MANUAL",
}

/**
 * <p>Describes a WorkSpace.</p>
 */
export interface WorkspaceProperties {
  /**
   * <p>The running mode. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html">Manage the WorkSpace Running
   *          Mode</a>.</p>
   *          <note>
   *             <p>The <code>MANUAL</code> value is only supported by Amazon WorkSpaces Core. Contact
   *             your account team to be allow-listed to use this value. For more information, see
   *             <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p>
   *          </note>
   */
  RunningMode?: RunningMode | string;

  /**
   * <p>The time after a user logs off when WorkSpaces are automatically stopped. Configured in
   *          60-minute intervals.</p>
   */
  RunningModeAutoStopTimeoutInMinutes?: number;

  /**
   * <p>The size of the root volume. For important information about how to modify the size of
   *          the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a
   *          WorkSpace</a>.</p>
   */
  RootVolumeSizeGib?: number;

  /**
   * <p>The size of the user storage. For important information about how to modify the size of
   *          the root and user volumes, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a
   *          WorkSpace</a>.</p>
   */
  UserVolumeSizeGib?: number;

  /**
   * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces
   *          Bundles</a>.</p>
   */
  ComputeTypeName?: Compute | string;

  /**
   * <p>The protocol. For more information, see
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-protocols.html">
   *             Protocols for Amazon WorkSpaces</a>.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>Only available for WorkSpaces created with PCoIP bundles.</p>
   *                </li>
   *                <li>
   *                   <p>The <code>Protocols</code> property is case sensitive. Ensure you use <code>PCOIP</code> or <code>WSP</code>.</p>
   *                </li>
   *                <li>
   *                   <p>Unavailable for Windows 7 WorkSpaces and WorkSpaces using GPU-based bundles
   *                (Graphics, GraphicsPro, Graphics.g4dn, and GraphicsPro.g4dn).</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  Protocols?: (Protocol | string)[];
}

/**
 * <p>Describes the information used to create a WorkSpace.</p>
 */
export interface WorkspaceRequest {
  /**
   * <p>The identifier of the Directory Service directory for the WorkSpace. You can use <a>DescribeWorkspaceDirectories</a> to list the available directories.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The user name of the user for the WorkSpace. This user name must exist in the Directory Service directory for the WorkSpace.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The identifier of the bundle for the WorkSpace. You can use <a>DescribeWorkspaceBundles</a> to list the available bundles.</p>
   */
  BundleId: string | undefined;

  /**
   * <p>The symmetric KMS key used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric KMS keys.</p>
   */
  VolumeEncryptionKey?: string;

  /**
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   */
  UserVolumeEncryptionEnabled?: boolean;

  /**
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   */
  RootVolumeEncryptionEnabled?: boolean;

  /**
   * <p>The WorkSpace properties.</p>
   */
  WorkspaceProperties?: WorkspaceProperties;

  /**
   * <p>The tags for the WorkSpace.</p>
   */
  Tags?: Tag[];
}

export interface CreateWorkspacesRequest {
  /**
   * <p>The WorkSpaces to create. You can specify up to 25 WorkSpaces.</p>
   */
  Workspaces: WorkspaceRequest[] | undefined;
}

/**
 * <p>Describes a WorkSpace that cannot be created.</p>
 */
export interface FailedCreateWorkspaceRequest {
  /**
   * <p>Information about the WorkSpace.</p>
   */
  WorkspaceRequest?: WorkspaceRequest;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          created.</p>
   */
  ErrorMessage?: string;
}

export enum ModificationResourceEnum {
  COMPUTE_TYPE = "COMPUTE_TYPE",
  ROOT_VOLUME = "ROOT_VOLUME",
  USER_VOLUME = "USER_VOLUME",
}

export enum ModificationStateEnum {
  UPDATE_INITIATED = "UPDATE_INITIATED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
}

/**
 * <p>Describes a WorkSpace modification.</p>
 */
export interface ModificationState {
  /**
   * <p>The resource.</p>
   */
  Resource?: ModificationResourceEnum | string;

  /**
   * <p>The modification state.</p>
   */
  State?: ModificationStateEnum | string;
}

export enum StandbyWorkspaceRelationshipType {
  PRIMARY = "PRIMARY",
  STANDBY = "STANDBY",
}

/**
 * <p>Describes the related WorkSpace. The related WorkSpace could be a Standby WorkSpace or
 *          Primary WorkSpace related to the specified WorkSpace.</p>
 */
export interface RelatedWorkspaceProperties {
  /**
   * <p>The identifier of the related WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * <p>The Region of the related WorkSpace.</p>
   */
  Region?: string;

  /**
   * <p>Indicates the state of the WorkSpace.</p>
   */
  State?: WorkspaceState | string;

  /**
   * <p>Indicates the type of WorkSpace.</p>
   */
  Type?: StandbyWorkspaceRelationshipType | string;
}

/**
 * <p>Describes a WorkSpace.</p>
 */
export interface Workspace {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * <p>The identifier of the Directory Service directory for the WorkSpace.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The user for the WorkSpace.</p>
   */
  UserName?: string;

  /**
   * <p>The IP address of the WorkSpace.</p>
   */
  IpAddress?: string;

  /**
   * <p>The operational state of the WorkSpace.</p>
   *          <note>
   *             <p>After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned only
   *             briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely
   *             returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using
   *                <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html">
   *                DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace
   *             has been successfully terminated.</p>
   *          </note>
   */
  State?: WorkspaceState | string;

  /**
   * <p>The identifier of the bundle used to create the WorkSpace.</p>
   */
  BundleId?: string;

  /**
   * <p>The identifier of the subnet for the WorkSpace.</p>
   */
  SubnetId?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          created.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The name of the WorkSpace, as seen by the operating system. The format of this name
   *          varies. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/launch-workspaces-tutorials.html"> Launch a
   *             WorkSpace</a>. </p>
   */
  ComputerName?: string;

  /**
   * <p>The symmetric KMS key used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric KMS keys.</p>
   */
  VolumeEncryptionKey?: string;

  /**
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   */
  UserVolumeEncryptionEnabled?: boolean;

  /**
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   */
  RootVolumeEncryptionEnabled?: boolean;

  /**
   * <p>The properties of the WorkSpace.</p>
   */
  WorkspaceProperties?: WorkspaceProperties;

  /**
   * <p>The modification states of the WorkSpace.</p>
   */
  ModificationStates?: ModificationState[];

  /**
   * <p>The Standby WorkSpace or Primary WorkSpace related to the specified WorkSpace.</p>
   */
  RelatedWorkspaces?: RelatedWorkspaceProperties[];
}

export interface CreateWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be created.</p>
   */
  FailedRequests?: FailedCreateWorkspaceRequest[];

  /**
   * <p>Information about the WorkSpaces that were created.</p>
   *          <p>Because this operation is asynchronous, the identifier returned is not immediately
   *          available for use with other operations. For example, if you call <a>DescribeWorkspaces</a> before the WorkSpace is created, the information returned
   *          can be incomplete.</p>
   */
  PendingRequests?: Workspace[];
}

export enum DedicatedTenancySupportEnum {
  ENABLED = "ENABLED",
}

/**
 * <p>Returns default client branding attributes that were imported. These attributes display
 *          on the client login screen.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure that you don't include sensitive
 *             information.</p>
 *          </important>
 */
export interface DefaultClientBrandingAttributes {
  /**
   * <p>The logo. The only image format accepted is a binary data object that is converted from a <code>.png</code> file.</p>
   */
  LogoUrl?: string;

  /**
   * <p>The support email. The company's customer support email address.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportEmail?: string;

  /**
   * <p>The support link. The link for the company's customer support page for their
   *          WorkSpace.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive.You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportLink?: string;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   */
  ForgotPasswordLink?: string;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   */
  LoginMessage?: Record<string, string>;
}

/**
 * <p>The default client branding attributes to be imported. These attributes display on the
 *          client login screen.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure that you do not include
 *             sensitive information.</p>
 *          </important>
 */
export interface DefaultImportClientBrandingAttributes {
  /**
   * <p>The logo. The only image format accepted is a binary data object that is converted from a <code>.png</code> file.</p>
   */
  Logo?: Uint8Array;

  /**
   * <p>The support email. The company's customer support email address.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportEmail?: string;

  /**
   * <p>The support link. The link for the company's customer support page for their
   *          WorkSpace.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportLink?: string;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   */
  ForgotPasswordLink?: string;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   */
  LoginMessage?: Record<string, string>;
}

/**
 * <p>Describes the default values that are used to create WorkSpaces. For more information,
 *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory
 *             Details for Your WorkSpaces</a>.</p>
 */
export interface DefaultWorkspaceCreationProperties {
  /**
   * <p>Specifies whether the directory is enabled for Amazon WorkDocs.</p>
   */
  EnableWorkDocs?: boolean;

  /**
   * <p>Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in
   *          this directory by default. If enabled, the Elastic public IP address allows outbound
   *          internet access from your WorkSpaces when you’re using an internet gateway in the Amazon
   *          VPC in which your WorkSpaces are located. If you're using a Network Address Translation
   *          (NAT) gateway for outbound internet access from your VPC, or if your WorkSpaces are in
   *          public subnets and you manually assign them Elastic IP addresses, you should disable this
   *          setting. This setting applies to new WorkSpaces that you launch or to existing WorkSpaces
   *          that you rebuild. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html"> Configure a VPC for
   *             Amazon WorkSpaces</a>.</p>
   */
  EnableInternetAccess?: boolean;

  /**
   * <p>The organizational unit (OU) in the directory for the WorkSpace machine accounts.</p>
   */
  DefaultOu?: string;

  /**
   * <p>The identifier of the default security group to apply to WorkSpaces when they are
   *          created. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-security-groups.html"> Security
   *             Groups for Your WorkSpaces</a>.</p>
   */
  CustomSecurityGroupId?: string;

  /**
   * <p>Specifies whether WorkSpace users are local administrators on their WorkSpaces.</p>
   */
  UserEnabledAsLocalAdministrator?: boolean;

  /**
   * <p>Specifies whether maintenance mode is enabled for WorkSpaces. For more information, see
   *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
   *             Maintenance</a>.</p>
   */
  EnableMaintenanceMode?: boolean;
}

export enum DeletableCertificateBasedAuthProperty {
  CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN = "CERTIFICATE_BASED_AUTH_PROPERTIES_CERTIFICATE_AUTHORITY_ARN",
}

export enum DeletableSamlProperty {
  SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME = "SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME",
  SAML_PROPERTIES_USER_ACCESS_URL = "SAML_PROPERTIES_USER_ACCESS_URL",
}

export interface DeleteClientBrandingRequest {
  /**
   * <p>The directory identifier of the WorkSpace for which you want to delete client
   *          branding.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The device type for which you want to delete client branding.</p>
   */
  Platforms: (ClientDeviceType | string)[] | undefined;
}

export interface DeleteClientBrandingResult {}

export interface DeleteConnectClientAddInRequest {
  /**
   * <p>The identifier of the client add-in to delete.</p>
   */
  AddInId: string | undefined;

  /**
   * <p>The directory identifier for which the client add-in is configured.</p>
   */
  ResourceId: string | undefined;
}

export interface DeleteConnectClientAddInResult {}

export interface DeleteConnectionAliasRequest {
  /**
   * <p>The identifier of the connection alias to delete.</p>
   */
  AliasId: string | undefined;
}

export interface DeleteConnectionAliasResult {}

export interface DeleteIpGroupRequest {
  /**
   * <p>The identifier of the IP access control group.</p>
   */
  GroupId: string | undefined;
}

export interface DeleteIpGroupResult {}

export interface DeleteTagsRequest {
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection
   *          aliases.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export interface DeleteTagsResult {}

export interface DeleteWorkspaceBundleRequest {
  /**
   * <p>The identifier of the bundle.</p>
   */
  BundleId?: string;
}

export interface DeleteWorkspaceBundleResult {}

export interface DeleteWorkspaceImageRequest {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;
}

export interface DeleteWorkspaceImageResult {}

export interface DeregisterWorkspaceDirectoryRequest {
  /**
   * <p>The identifier of the directory. If any WorkSpaces are registered to this directory, you
   *          must remove them before you deregister the directory, or you will receive an
   *          OperationNotSupportedException error.</p>
   */
  DirectoryId: string | undefined;
}

export interface DeregisterWorkspaceDirectoryResult {}

export interface DescribeAccountRequest {}

export interface DescribeAccountResult {
  /**
   * <p>The status of BYOL (whether BYOL is enabled or disabled).</p>
   */
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | string;

  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, used for the management network
   *          interface.</p>
   *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
   *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
   *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
   */
  DedicatedTenancyManagementCidrRange?: string;
}

export interface DescribeAccountModificationsRequest {
  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

export interface DescribeAccountModificationsResult {
  /**
   * <p>The list of modifications to the configuration of BYOL.</p>
   */
  AccountModifications?: AccountModification[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export interface DescribeClientBrandingRequest {
  /**
   * <p>The directory identifier of the WorkSpace for which you want to view client branding
   *          information.</p>
   */
  ResourceId: string | undefined;
}

/**
 * <p>The client branding attributes for iOS device types. These attributes are displayed on
 *          the iOS client login screen only.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure you do not include sensitive
 *             information.</p>
 *          </important>
 */
export interface IosClientBrandingAttributes {
  /**
   * <p>The logo. This is the standard-resolution display that has a 1:1 pixel density
   *          (or @1x), where one pixel is equal
   *          to one point. The only image format accepted is a binary data object that is converted from
   *          a <code>.png</code> file.</p>
   */
  LogoUrl?: string;

  /**
   * <p>The @2x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 2.0 (or @2x). The only image format accepted is a binary data object that is
   *          converted from a <code>.png</code> file.</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   */
  Logo2xUrl?: string;

  /**
   * <p>The @3x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 3.0 (or @3x).The only image format accepted is a binary data object that is
   *          converted from a <code>.png</code> file.</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   */
  Logo3xUrl?: string;

  /**
   * <p>The support email. The company's customer support email address.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportEmail?: string;

  /**
   * <p>The support link. The link for the company's customer support page for their
   *          WorkSpace.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportLink?: string;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   */
  ForgotPasswordLink?: string;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   */
  LoginMessage?: Record<string, string>;
}

export interface DescribeClientBrandingResult {
  /**
   * <p>The branding information for Windows devices.</p>
   */
  DeviceTypeWindows?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information for macOS devices.</p>
   */
  DeviceTypeOsx?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information for Android devices.</p>
   */
  DeviceTypeAndroid?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information for iOS devices.</p>
   */
  DeviceTypeIos?: IosClientBrandingAttributes;

  /**
   * <p>The branding information for Linux devices.</p>
   */
  DeviceTypeLinux?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information for Web access.</p>
   */
  DeviceTypeWeb?: DefaultClientBrandingAttributes;
}

export interface DescribeClientPropertiesRequest {
  /**
   * <p>The resource identifier, in the form of directory IDs.</p>
   */
  ResourceIds: string[] | undefined;
}

export interface DescribeClientPropertiesResult {
  /**
   * <p>Information about the specified Amazon WorkSpaces clients.</p>
   */
  ClientPropertiesList?: ClientPropertiesResult[];
}

export interface DescribeConnectClientAddInsRequest {
  /**
   * <p>The directory identifier for which the client add-in is configured.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;
}

export interface DescribeConnectClientAddInsResult {
  /**
   * <p>Information about client add-ins.</p>
   */
  AddIns?: ConnectClientAddIn[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export interface DescribeConnectionAliasesRequest {
  /**
   * <p>The identifiers of the connection aliases to describe.</p>
   */
  AliasIds?: string[];

  /**
   * <p>The identifier of the directory associated with the connection alias.</p>
   */
  ResourceId?: string;

  /**
   * <p>The maximum number of connection aliases to return.</p>
   */
  Limit?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results. </p>
   */
  NextToken?: string;
}

export interface DescribeConnectionAliasesResult {
  /**
   * <p>Information about the specified connection aliases.</p>
   */
  ConnectionAliases?: ConnectionAlias[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export interface DescribeConnectionAliasPermissionsRequest {
  /**
   * <p>The identifier of the connection alias.</p>
   */
  AliasId: string | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export interface DescribeConnectionAliasPermissionsResult {
  /**
   * <p>The identifier of the connection alias.</p>
   */
  AliasId?: string;

  /**
   * <p>The permissions associated with a connection alias.</p>
   */
  ConnectionAliasPermissions?: ConnectionAliasPermission[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export interface DescribeIpGroupsRequest {
  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   */
  GroupIds?: string[];

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Describes an IP access control group.</p>
 */
export interface WorkspacesIpGroup {
  /**
   * <p>The identifier of the group.</p>
   */
  groupId?: string;

  /**
   * <p>The name of the group.</p>
   */
  groupName?: string;

  /**
   * <p>The description of the group.</p>
   */
  groupDesc?: string;

  /**
   * <p>The rules.</p>
   */
  userRules?: IpRuleItem[];
}

export interface DescribeIpGroupsResult {
  /**
   * <p>Information about the IP access control groups.</p>
   */
  Result?: WorkspacesIpGroup[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export interface DescribeTagsRequest {
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection
   *          aliases.</p>
   */
  ResourceId: string | undefined;
}

export interface DescribeTagsResult {
  /**
   * <p>The tags.</p>
   */
  TagList?: Tag[];
}

export interface DescribeWorkspaceBundlesRequest {
  /**
   * <p>The identifiers of the bundles. You cannot combine this parameter with any other filter.</p>
   */
  BundleIds?: string[];

  /**
   * <p>The owner of the bundles. You cannot combine this parameter with any other filter.</p>
   *          <p>To describe the bundles provided by Amazon Web Services, specify <code>AMAZON</code>.
   *          To describe the bundles that belong to your account, don't specify a value.</p>
   */
  Owner?: string;

  /**
   * <p>The token for the next set of results. (You received this token from a previous call.)</p>
   */
  NextToken?: string;
}

export interface DescribeWorkspaceBundlesResult {
  /**
   * <p>Information about the bundles.</p>
   */
  Bundles?: WorkspaceBundle[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *          results to return. This token is valid for one day and must be used within that time
   *          frame.</p>
   */
  NextToken?: string;
}

export interface DescribeWorkspaceDirectoriesRequest {
  /**
   * <p>The identifiers of the directories. If the value is null, all directories are
   *          retrieved.</p>
   */
  DirectoryIds?: string[];

  /**
   * <p>The maximum number of directories to return.</p>
   */
  Limit?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

export enum WorkspaceDirectoryType {
  AD_CONNECTOR = "AD_CONNECTOR",
  SIMPLE_AD = "SIMPLE_AD",
}

export enum SamlStatusEnum {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK = "ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK",
}

/**
 * <p>Describes the enablement status, user access URL, and relay state parameter name that
 *          are used for configuring federation with an SAML 2.0 identity provider.</p>
 */
export interface SamlProperties {
  /**
   * <p>Indicates the status of SAML 2.0 authentication. These statuses include the following.</p>
   *          <ul>
   *             <li>
   *                <p>If the setting is <code>DISABLED</code>, end users will be directed to login with their directory credentials.</p>
   *             </li>
   *             <li>
   *                <p>If the setting is <code>ENABLED</code>, end users will be directed to login via the user access URL. Users attempting
   *                to connect to WorkSpaces from a client application that does not support SAML 2.0 authentication will not be able to
   *                connect.</p>
   *             </li>
   *             <li>
   *                <p>If the setting is <code>ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK</code>, end users will be directed to login via the user
   *                access URL on supported client applications, but will not prevent clients that do not support SAML 2.0 authentication
   *                from connecting as if SAML 2.0 authentication was disabled.</p>
   *             </li>
   *          </ul>
   */
  Status?: SamlStatusEnum | string;

  /**
   * <p>The SAML 2.0 identity provider (IdP) user access URL is the URL a user would navigate to in their web browser in
   *          order to federate from the IdP and directly access the application, without any SAML 2.0 service provider (SP)
   *          bindings.</p>
   */
  UserAccessUrl?: string;

  /**
   * <p>The relay state parameter name supported by the SAML 2.0 identity provider (IdP). When the end user is redirected to
   *          the user access URL from the WorkSpaces client application, this relay state parameter name is appended as a query
   *          parameter to the URL along with the relay state endpoint to return the user to the client application session.</p>
   *
   *          <p>To use SAML 2.0 authentication with WorkSpaces, the IdP must support IdP-initiated deep linking for the relay state
   *          URL. Consult your IdP documentation for more information.</p>
   */
  RelayStateParameterName?: string;
}

/**
 * <p>Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.</p>
 */
export interface SelfservicePermissions {
  /**
   * <p>Specifies whether users can restart their WorkSpace.</p>
   */
  RestartWorkspace?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can increase the volume size of the drives on their
   *          WorkSpace.</p>
   */
  IncreaseVolumeSize?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can change the compute type (bundle) for their WorkSpace.</p>
   */
  ChangeComputeType?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can switch the running mode of their WorkSpace.</p>
   */
  SwitchRunningMode?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can rebuild the operating system of a WorkSpace to its original
   *          state.</p>
   */
  RebuildWorkspace?: ReconnectEnum | string;
}

export enum WorkspaceDirectoryState {
  DEREGISTERED = "DEREGISTERED",
  DEREGISTERING = "DEREGISTERING",
  ERROR = "ERROR",
  REGISTERED = "REGISTERED",
  REGISTERING = "REGISTERING",
}

export enum Tenancy {
  DEDICATED = "DEDICATED",
  SHARED = "SHARED",
}

/**
 * <p>The device types and operating systems that can be used to access a WorkSpace. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon
 *             WorkSpaces Client Network Requirements</a>.</p>
 */
export interface WorkspaceAccessProperties {
  /**
   * <p>Indicates whether users can use Windows clients to access their WorkSpaces.</p>
   */
  DeviceTypeWindows?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use macOS clients to access their WorkSpaces.</p>
   */
  DeviceTypeOsx?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can access their WorkSpaces through a web browser.</p>
   */
  DeviceTypeWeb?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use iOS devices to access their WorkSpaces.</p>
   */
  DeviceTypeIos?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use Android and Android-compatible Chrome OS devices to
   *          access their WorkSpaces.</p>
   */
  DeviceTypeAndroid?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use Chromebooks to access their WorkSpaces.</p>
   */
  DeviceTypeChromeOs?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use zero client devices to access their WorkSpaces.</p>
   */
  DeviceTypeZeroClient?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use Linux clients to access their WorkSpaces.</p>
   */
  DeviceTypeLinux?: AccessPropertyValue | string;
}

/**
 * <p>Describes a directory that is used with Amazon WorkSpaces.</p>
 */
export interface WorkspaceDirectory {
  /**
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The directory alias.</p>
   */
  Alias?: string;

  /**
   * <p>The name of the directory.</p>
   */
  DirectoryName?: string;

  /**
   * <p>The registration code for the directory. This is the code that users enter in their
   *          Amazon WorkSpaces client application to connect to the directory.</p>
   */
  RegistrationCode?: string;

  /**
   * <p>The identifiers of the subnets used with the directory.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The IP addresses of the DNS servers for the directory.</p>
   */
  DnsIpAddresses?: string[];

  /**
   * <p>The user name for the service account.</p>
   */
  CustomerUserName?: string;

  /**
   * <p>The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make
   *          calls to other services, such as Amazon EC2, on your behalf.</p>
   */
  IamRoleId?: string;

  /**
   * <p>The directory type.</p>
   */
  DirectoryType?: WorkspaceDirectoryType | string;

  /**
   * <p>The identifier of the security group that is assigned to new WorkSpaces.</p>
   */
  WorkspaceSecurityGroupId?: string;

  /**
   * <p>The state of the directory's registration with Amazon WorkSpaces. After a directory is
   *          deregistered, the <code>DEREGISTERED</code> state is returned very briefly before the
   *          directory metadata is cleaned up, so this state is rarely returned. To confirm that a
   *          directory is deregistered, check for the directory ID by using <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html">
   *             DescribeWorkspaceDirectories</a>. If the directory ID isn't returned, then the
   *          directory has been successfully deregistered.</p>
   */
  State?: WorkspaceDirectoryState | string;

  /**
   * <p>The default creation properties for all WorkSpaces in the directory.</p>
   */
  WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;

  /**
   * <p>The identifiers of the IP access control groups associated with the directory.</p>
   */
  ipGroupIds?: string[];

  /**
   * <p>The devices and operating systems that users can use to access WorkSpaces.</p>
   */
  WorkspaceAccessProperties?: WorkspaceAccessProperties;

  /**
   * <p>Specifies whether the directory is dedicated or shared. To use Bring Your Own License
   *          (BYOL), this value must be set to <code>DEDICATED</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring
   *             Your Own Windows Desktop Images</a>.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>The default self-service permissions for WorkSpaces in the directory.</p>
   */
  SelfservicePermissions?: SelfservicePermissions;

  /**
   * <p>Describes the enablement status, user access URL, and relay state parameter name that are used for configuring
   *          federation with an SAML 2.0 identity provider.</p>
   */
  SamlProperties?: SamlProperties;

  /**
   * <p>The certificate-based authentication properties used to authenticate SAML 2.0 Identity Provider (IdP)
   *          user identities to Active Directory for WorkSpaces login.</p>
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;
}

export interface DescribeWorkspaceDirectoriesResult {
  /**
   * <p>Information about the directories.</p>
   */
  Directories?: WorkspaceDirectory[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export interface DescribeWorkspaceImagePermissionsRequest {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Describes the Amazon Web Services accounts that have been granted permission to use a
 *          shared image. For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom
 *             WorkSpaces Image</a>.</p>
 */
export interface ImagePermission {
  /**
   * <p>The identifier of the Amazon Web Services account that an image has been shared
   *          with.</p>
   */
  SharedAccountId?: string;
}

export interface DescribeWorkspaceImagePermissionsResult {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;

  /**
   * <p>The identifiers of the Amazon Web Services accounts that the image has been shared
   *          with.</p>
   */
  ImagePermissions?: ImagePermission[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export enum ImageType {
  OWNED = "OWNED",
  SHARED = "SHARED",
}

export interface DescribeWorkspaceImagesRequest {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageIds?: string[];

  /**
   * <p>The type (owned or shared) of the image.</p>
   */
  ImageType?: ImageType | string;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Describes whether a WorkSpace image needs to be updated with the latest drivers and
 *          other components required by Amazon WorkSpaces.</p>
 *          <note>
 *             <p>Only Windows 10 WorkSpace images can be programmatically updated at this time.</p>
 *          </note>
 */
export interface UpdateResult {
  /**
   * <p>Indicates whether updated drivers or other components are available for the specified
   *          WorkSpace image.</p>
   */
  UpdateAvailable?: boolean;

  /**
   * <p>A description of whether updates for the WorkSpace image are pending or
   *          available.</p>
   */
  Description?: string;
}

/**
 * <p>Describes a WorkSpace image.</p>
 */
export interface WorkspaceImage {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the image.</p>
   */
  Name?: string;

  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The operating system that the image is running. </p>
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>The status of the image.</p>
   */
  State?: WorkspaceImageState | string;

  /**
   * <p>Specifies whether the image is running on dedicated hardware. When Bring Your Own
   *          License (BYOL) is enabled, this value is set to <code>DEDICATED</code>. For more
   *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows
   *             Desktop Images</a>.</p>
   */
  RequiredTenancy?: WorkspaceImageRequiredTenancy | string;

  /**
   * <p>The error code that is returned for the image.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned for the image.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The date when the image was created. If the image has been shared, the Amazon Web Services account that the image has been shared with sees the original creation date
   *          of the image.</p>
   */
  Created?: Date;

  /**
   * <p>The identifier of the Amazon Web Services account that owns the image.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The updates (if any) that are available for the specified image.</p>
   */
  Updates?: UpdateResult;
}

export interface DescribeWorkspaceImagesResult {
  /**
   * <p>Information about the images.</p>
   */
  Images?: WorkspaceImage[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export interface DescribeWorkspacesRequest {
  /**
   * <p>The identifiers of the WorkSpaces. You cannot combine this parameter with any other
   *          filter.</p>
   *          <p>Because the <a>CreateWorkspaces</a> operation is asynchronous, the identifier
   *          it returns is not immediately available. If you immediately call <a>DescribeWorkspaces</a> with this identifier, no information is returned.</p>
   */
  WorkspaceIds?: string[];

  /**
   * <p>The identifier of the directory. In addition, you can optionally specify a specific
   *          directory user (see <code>UserName</code>). You cannot combine this parameter with any
   *          other filter.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The name of the directory user. You must specify this parameter with
   *             <code>DirectoryId</code>.</p>
   */
  UserName?: string;

  /**
   * <p>The identifier of the bundle. All WorkSpaces that are created from this bundle are
   *          retrieved. You cannot combine this parameter with any other filter.</p>
   */
  BundleId?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

export interface DescribeWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces.</p>
   *          <p>Because <a>CreateWorkspaces</a> is an asynchronous operation, some of the
   *          returned information could be incomplete.</p>
   */
  Workspaces?: Workspace[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export interface DescribeWorkspacesConnectionStatusRequest {
  /**
   * <p>The identifiers of the WorkSpaces. You can specify up to 25 WorkSpaces.</p>
   */
  WorkspaceIds?: string[];

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes the connection status of a WorkSpace.</p>
 */
export interface WorkspaceConnectionStatus {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * <p>The connection state of the WorkSpace. The connection state is unknown if the WorkSpace
   *          is stopped.</p>
   */
  ConnectionState?: ConnectionState | string;

  /**
   * <p>The timestamp of the connection status check.</p>
   */
  ConnectionStateCheckTimestamp?: Date;

  /**
   * <p>The timestamp of the last known user connection.</p>
   */
  LastKnownUserConnectionTimestamp?: Date;
}

export interface DescribeWorkspacesConnectionStatusResult {
  /**
   * <p>Information about the connection status of the WorkSpace.</p>
   */
  WorkspacesConnectionStatus?: WorkspaceConnectionStatus[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export interface DescribeWorkspaceSnapshotsRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

/**
 * <p>Describes a snapshot.</p>
 */
export interface Snapshot {
  /**
   * <p>The time when the snapshot was created.</p>
   */
  SnapshotTime?: Date;
}

export interface DescribeWorkspaceSnapshotsResult {
  /**
   * <p>Information about the snapshots that can be used to rebuild a WorkSpace. These snapshots
   *          include the user volume.</p>
   */
  RebuildSnapshots?: Snapshot[];

  /**
   * <p>Information about the snapshots that can be used to restore a WorkSpace. These snapshots
   *          include both the root volume and the user volume.</p>
   */
  RestoreSnapshots?: Snapshot[];
}

export interface DisassociateConnectionAliasRequest {
  /**
   * <p>The identifier of the connection alias to disassociate.</p>
   */
  AliasId: string | undefined;
}

export interface DisassociateConnectionAliasResult {}

export interface DisassociateIpGroupsRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   */
  GroupIds: string[] | undefined;
}

export interface DisassociateIpGroupsResult {}

/**
 * <p>Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>),
 *          rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).</p>
 */
export interface FailedWorkspaceChangeRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be rebooted.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          rebooted.</p>
   */
  ErrorMessage?: string;
}

/**
 * <p>The client branding attributes to import for iOS device types. These attributes are
 *          displayed on the iOS client login screen.</p>
 *          <important>
 *             <p>Client branding attributes are public facing. Ensure you do not include sensitive
 *             information.</p>
 *          </important>
 */
export interface IosImportClientBrandingAttributes {
  /**
   * <p>The logo. This is the
   *          standard-resolution display that has a 1:1 pixel density (or @1x), where one pixel is equal
   *          to one point. The only image format accepted is a binary data object that is converted
   *          from a <code>.png</code> file.</p>
   */
  Logo?: Uint8Array;

  /**
   * <p>The @2x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 2.0 (or @2x). The only image format accepted is a binary data object that is
   *          converted from a <code>.png</code> file.</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   */
  Logo2x?: Uint8Array;

  /**
   * <p>The @3x version of the logo. This is the higher resolution display that offers a scale
   *          factor of 3.0 (or @3x). The only image format accepted is a binary data object that is
   *          converted from a <code>.png</code> file.</p>
   *          <note>
   *             <p> For more information about iOS image size and resolution, see <a href="https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/image-size-and-resolution/">Image Size and Resolution </a> in the <i>Apple Human Interface
   *                Guidelines</i>.</p>
   *          </note>
   */
  Logo3x?: Uint8Array;

  /**
   * <p>The support email. The company's customer support email address.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default email is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportEmail?: string;

  /**
   * <p>The support link. The link for the company's customer support page for their
   *          WorkSpace.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>In each platform type, the <code>SupportEmail</code> and
   *                      <code>SupportLink</code> parameters are mutually exclusive. You can specify one
   *                   parameter for each platform type, but not both.</p>
   *                </li>
   *                <li>
   *                   <p>The default support link is <code>workspaces-feedback@amazon.com</code>.</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  SupportLink?: string;

  /**
   * <p>The forgotten password link. This is the web address that users can go to if they forget
   *          the password for their WorkSpace.</p>
   */
  ForgotPasswordLink?: string;

  /**
   * <p>The login message. Specified as a key value pair, in which the key is a locale and the
   *          value is the localized message for that locale. The only key supported is
   *          <code>en_US</code>. The HTML tags supported include the following: <code>a, b, blockquote, br, cite, code, dd, dl, dt, div, em,
   *             i, li, ol, p, pre, q, small, span, strike, strong, sub, sup, u, ul</code>.</p>
   */
  LoginMessage?: Record<string, string>;
}

export interface ImportClientBrandingRequest {
  /**
   * <p>The directory identifier of the WorkSpace for which you want to import client
   *          branding.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The branding information to import for Windows devices.</p>
   */
  DeviceTypeWindows?: DefaultImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for macOS devices.</p>
   */
  DeviceTypeOsx?: DefaultImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for Android devices.</p>
   */
  DeviceTypeAndroid?: DefaultImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for iOS devices.</p>
   */
  DeviceTypeIos?: IosImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for Linux devices.</p>
   */
  DeviceTypeLinux?: DefaultImportClientBrandingAttributes;

  /**
   * <p>The branding information to import for web access.</p>
   */
  DeviceTypeWeb?: DefaultImportClientBrandingAttributes;
}

export interface ImportClientBrandingResult {
  /**
   * <p>The branding information configured for Windows devices.</p>
   */
  DeviceTypeWindows?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information configured for macOS devices.</p>
   */
  DeviceTypeOsx?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information configured for Android devices.</p>
   */
  DeviceTypeAndroid?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information configured for iOS devices.</p>
   */
  DeviceTypeIos?: IosClientBrandingAttributes;

  /**
   * <p>The branding information configured for Linux devices.</p>
   */
  DeviceTypeLinux?: DefaultClientBrandingAttributes;

  /**
   * <p>The branding information configured for web access.</p>
   */
  DeviceTypeWeb?: DefaultClientBrandingAttributes;
}

export enum WorkspaceImageIngestionProcess {
  BYOL_GRAPHICS = "BYOL_GRAPHICS",
  BYOL_GRAPHICSPRO = "BYOL_GRAPHICSPRO",
  BYOL_GRAPHICS_G4DN = "BYOL_GRAPHICS_G4DN",
  BYOL_GRAPHICS_G4DN_BYOP = "BYOL_GRAPHICS_G4DN_BYOP",
  BYOL_REGULAR = "BYOL_REGULAR",
  BYOL_REGULAR_BYOP = "BYOL_REGULAR_BYOP",
  BYOL_REGULAR_WSP = "BYOL_REGULAR_WSP",
}

export interface ImportWorkspaceImageRequest {
  /**
   * <p>The identifier of the EC2 image.</p>
   */
  Ec2ImageId: string | undefined;

  /**
   * <p>The ingestion process to be used when importing the image, depending on which protocol
   *          you want to use for your BYOL Workspace image, either PCoIP, WorkSpaces Streaming Protocol
   *          (WSP), or bring your own protocol (BYOP). To use WSP, specify a value that ends in
   *          <code>_WSP</code>. To use PCoIP, specify a value that does not end in <code>_WSP</code>.
   *          To use BYOP, specify a value that ends in <code>_BYOP</code>.</p>
   *          <p>For non-GPU-enabled bundles (bundles other than Graphics or GraphicsPro), specify
   *          <code>BYOL_REGULAR</code>, <code>BYOL_REGULAR_WSP</code>, or <code>BYOL_REGULAR_BYOP</code>,
   *          depending on the protocol.</p>
   *          <note>
   *             <p>The <code>BYOL_REGULAR_BYOP</code> and <code>BYOL_GRAPHICS_G4DN_BYOP</code> values
   *             are only supported by Amazon WorkSpaces Core. Contact your account team to be
   *             allow-listed to use these values. For more information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces Core</a>.</p>
   *          </note>
   */
  IngestionProcess: WorkspaceImageIngestionProcess | string | undefined;

  /**
   * <p>The name of the WorkSpace image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The description of the WorkSpace image.</p>
   */
  ImageDescription: string | undefined;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>If specified, the version of Microsoft Office to subscribe to. Valid only for Windows 10
   *          BYOL images. For more information about subscribing to Office for BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html"> Bring
   *             Your Own Windows Desktop Licenses</a>.</p>
   *          <note>
   *             <p>Although this parameter is an array, only one item is allowed at this time.</p>
   *          </note>
   */
  Applications?: (Application | string)[];
}

export interface ImportWorkspaceImageResult {
  /**
   * <p>The identifier of the WorkSpace image.</p>
   */
  ImageId?: string;
}

export interface ListAvailableManagementCidrRangesRequest {
  /**
   * <p>The IP address range to search. Specify an IP address range that is compatible with your
   *          network and in CIDR notation (that is, specify the range as an IPv4 CIDR block).</p>
   */
  ManagementCidrRangeConstraint: string | undefined;

  /**
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListAvailableManagementCidrRangesResult {
  /**
   * <p>The list of available IP address ranges, specified as IPv4 CIDR blocks.</p>
   */
  ManagementCidrRanges?: string[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return. </p>
   */
  NextToken?: string;
}

export interface MigrateWorkspaceRequest {
  /**
   * <p>The identifier of the WorkSpace to migrate from.</p>
   */
  SourceWorkspaceId: string | undefined;

  /**
   * <p>The identifier of the target bundle type to migrate the WorkSpace to.</p>
   */
  BundleId: string | undefined;
}

export interface MigrateWorkspaceResult {
  /**
   * <p>The original identifier of the WorkSpace that is being migrated.</p>
   */
  SourceWorkspaceId?: string;

  /**
   * <p>The new identifier of the WorkSpace that is being migrated. If the migration does not
   *          succeed, the target WorkSpace ID will not be used, and the WorkSpace will still have the
   *          original WorkSpace ID.</p>
   */
  TargetWorkspaceId?: string;
}

/**
 * <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 */
export class OperationInProgressException extends __BaseException {
  readonly name: "OperationInProgressException" = "OperationInProgressException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationInProgressException, __BaseException>) {
    super({
      name: "OperationInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationInProgressException.prototype);
  }
}

export interface ModifyAccountRequest {
  /**
   * <p>The status of BYOL.</p>
   */
  DedicatedTenancySupport?: DedicatedTenancySupportEnum | string;

  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
   *          interface. Specify an IP address range that is compatible with your network and in CIDR
   *          notation (that is, specify the range as an IPv4 CIDR block). The CIDR block size must be
   *          /16 (for example, 203.0.113.25/16). It must also be specified as available by the
   *             <code>ListAvailableManagementCidrRanges</code> operation.</p>
   */
  DedicatedTenancyManagementCidrRange?: string;
}

export interface ModifyAccountResult {}

export interface ModifyCertificateBasedAuthPropertiesRequest {
  /**
   * <p>The resource identifiers, in the form of directory IDs.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The properties of the certificate-based authentication.</p>
   */
  CertificateBasedAuthProperties?: CertificateBasedAuthProperties;

  /**
   * <p>The properties of the certificate-based authentication you want to delete.</p>
   */
  PropertiesToDelete?: (DeletableCertificateBasedAuthProperty | string)[];
}

export interface ModifyCertificateBasedAuthPropertiesResult {}

export interface ModifyClientPropertiesRequest {
  /**
   * <p>The resource identifiers, in the form of directory IDs.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>Information about the Amazon WorkSpaces client.</p>
   */
  ClientProperties: ClientProperties | undefined;
}

export interface ModifyClientPropertiesResult {}

export interface ModifySamlPropertiesRequest {
  /**
   * <p>The directory identifier for which you want to configure SAML properties.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The properties for configuring SAML 2.0 authentication.</p>
   */
  SamlProperties?: SamlProperties;

  /**
   * <p>The SAML properties to delete as part of your request.</p>
   *          <p>Specify one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SAML_PROPERTIES_USER_ACCESS_URL</code> to delete the user access URL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SAML_PROPERTIES_RELAY_STATE_PARAMETER_NAME</code> to delete the
   *                relay state parameter name.</p>
   *             </li>
   *          </ul>
   */
  PropertiesToDelete?: (DeletableSamlProperty | string)[];
}

export interface ModifySamlPropertiesResult {}

export interface ModifySelfservicePermissionsRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The permissions to enable or disable self-service capabilities.</p>
   */
  SelfservicePermissions: SelfservicePermissions | undefined;
}

export interface ModifySelfservicePermissionsResult {}

export interface ModifyWorkspaceAccessPropertiesRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The device types and operating systems to enable or disable for access.</p>
   */
  WorkspaceAccessProperties: WorkspaceAccessProperties | undefined;
}

export interface ModifyWorkspaceAccessPropertiesResult {}

/**
 * <p>Describes the default properties that are used for creating WorkSpaces. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory
 *             Details for Your WorkSpaces</a>. </p>
 */
export interface WorkspaceCreationProperties {
  /**
   * <p>Indicates whether Amazon WorkDocs is enabled for your WorkSpaces.</p>
   *          <note>
   *             <p>If WorkDocs is already enabled for a WorkSpaces directory and you disable it, new
   *             WorkSpaces launched in the directory will not have WorkDocs enabled. However, WorkDocs
   *             remains enabled for any existing WorkSpaces, unless you either disable users' access to
   *             WorkDocs or you delete the WorkDocs site. To disable users' access to WorkDocs, see
   *                <a href="https://docs.aws.amazon.com/workdocs/latest/adminguide/inactive-user.html">Disabling Users</a> in the <i>Amazon WorkDocs Administration
   *                Guide</i>. To delete a WorkDocs site, see <a href="https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html">Deleting a Site</a> in the
   *                <i>Amazon WorkDocs Administration Guide</i>.</p>
   *             <p>If you enable WorkDocs on a directory that already has existing WorkSpaces, the
   *             existing WorkSpaces and any new WorkSpaces that are launched in the directory will have
   *             WorkDocs enabled.</p>
   *          </note>
   */
  EnableWorkDocs?: boolean;

  /**
   * <p>Indicates whether internet access is enabled for your WorkSpaces.</p>
   */
  EnableInternetAccess?: boolean;

  /**
   * <p>The default organizational unit (OU) for your WorkSpaces directories. This string must
   *          be the full Lightweight Directory Access Protocol (LDAP) distinguished name for the target
   *          domain and OU. It must be in the form
   *                <code>"OU=<i>value</i>,DC=<i>value</i>,DC=<i>value</i>"</code>,
   *          where <i>value</i> is any string of characters, and the number of domain
   *          components (DCs) is two or more. For example,
   *             <code>OU=WorkSpaces_machines,DC=machines,DC=example,DC=com</code>. </p>
   *          <important>
   *             <ul>
   *                <li>
   *                   <p>To avoid errors, certain characters in the distinguished name must be escaped.
   *                   For more information, see <a href="https://docs.microsoft.com/previous-versions/windows/desktop/ldap/distinguished-names"> Distinguished Names</a> in the Microsoft documentation.</p>
   *                </li>
   *                <li>
   *                   <p>The API doesn't validate whether the OU exists.</p>
   *                </li>
   *             </ul>
   *          </important>
   */
  DefaultOu?: string;

  /**
   * <p>The identifier of your custom security group.</p>
   */
  CustomSecurityGroupId?: string;

  /**
   * <p>Indicates whether users are local administrators of their WorkSpaces.</p>
   */
  UserEnabledAsLocalAdministrator?: boolean;

  /**
   * <p>Indicates whether maintenance mode is enabled for your WorkSpaces. For more information,
   *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
   *             Maintenance</a>. </p>
   */
  EnableMaintenanceMode?: boolean;
}

export interface ModifyWorkspaceCreationPropertiesRequest {
  /**
   * <p>The identifier of the directory.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The default properties for creating WorkSpaces.</p>
   */
  WorkspaceCreationProperties: WorkspaceCreationProperties | undefined;
}

export interface ModifyWorkspaceCreationPropertiesResult {}

export interface ModifyWorkspacePropertiesRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The properties of the WorkSpace.</p>
   */
  WorkspaceProperties: WorkspaceProperties | undefined;
}

export interface ModifyWorkspacePropertiesResult {}

/**
 * <p>The configuration of this WorkSpace is not supported for this operation. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/required-service-components.html">Required
 *             Configuration and Service Components for WorkSpaces </a>.</p>
 */
export class UnsupportedWorkspaceConfigurationException extends __BaseException {
  readonly name: "UnsupportedWorkspaceConfigurationException" = "UnsupportedWorkspaceConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedWorkspaceConfigurationException, __BaseException>) {
    super({
      name: "UnsupportedWorkspaceConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedWorkspaceConfigurationException.prototype);
  }
}

export enum TargetWorkspaceState {
  ADMIN_MAINTENANCE = "ADMIN_MAINTENANCE",
  AVAILABLE = "AVAILABLE",
}

export interface ModifyWorkspaceStateRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;

  /**
   * <p>The WorkSpace state.</p>
   */
  WorkspaceState: TargetWorkspaceState | string | undefined;
}

export interface ModifyWorkspaceStateResult {}

/**
 * <p>Describes the information used to reboot a WorkSpace.</p>
 */
export interface RebootRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export interface RebootWorkspacesRequest {
  /**
   * <p>The WorkSpaces to reboot. You can specify up to 25 WorkSpaces.</p>
   */
  RebootWorkspaceRequests: RebootRequest[] | undefined;
}

export interface RebootWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be rebooted.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

/**
 * <p>Describes the information used to rebuild a WorkSpace.</p>
 */
export interface RebuildRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export interface RebuildWorkspacesRequest {
  /**
   * <p>The WorkSpace to rebuild. You can specify a single WorkSpace.</p>
   */
  RebuildWorkspaceRequests: RebuildRequest[] | undefined;
}

export interface RebuildWorkspacesResult {
  /**
   * <p>Information about the WorkSpace that could not be rebuilt.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export interface RegisterWorkspaceDirectoryRequest {
  /**
   * <p>The identifier of the directory. You cannot register a directory if it does not have a
   *          status of Active. If the directory does not have a status of Active, you will receive an
   *          InvalidResourceStateException error. If you have already registered the maximum number of
   *          directories that you can register with Amazon WorkSpaces, you will receive a
   *          ResourceLimitExceededException error. Deregister directories that you are not using for
   *          WorkSpaces, and try again.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifiers of the subnets for your virtual private cloud (VPC). Make sure that the
   *          subnets are in supported Availability Zones. The subnets must also be in separate
   *          Availability Zones. If these conditions are not met, you will receive an
   *          OperationNotSupportedException error.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Indicates whether Amazon WorkDocs is enabled or disabled. If you have enabled this
   *          parameter and WorkDocs is not available in the Region, you will receive an
   *          OperationNotSupportedException error. Set <code>EnableWorkDocs</code> to disabled, and try
   *          again.</p>
   */
  EnableWorkDocs: boolean | undefined;

  /**
   * <p>Indicates whether self-service capabilities are enabled or disabled.</p>
   */
  EnableSelfService?: boolean;

  /**
   * <p>Indicates whether your WorkSpace directory is dedicated or shared. To use Bring Your Own
   *          License (BYOL) images, this value must be set to <code>DEDICATED</code> and your Amazon Web Services account must be enabled for BYOL. If your account has not been enabled for
   *          BYOL, you will receive an InvalidParameterValuesException error. For more information about
   *          BYOL images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows
   *             Desktop Images</a>.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>The tags associated with the directory.</p>
   */
  Tags?: Tag[];
}

export interface RegisterWorkspaceDirectoryResult {}

/**
 * <p>The configuration of this network is not supported for this operation, or your network configuration
 *          conflicts with the Amazon WorkSpaces management network IP range. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html">
 *             Configure a VPC for Amazon WorkSpaces</a>.</p>
 */
export class UnsupportedNetworkConfigurationException extends __BaseException {
  readonly name: "UnsupportedNetworkConfigurationException" = "UnsupportedNetworkConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedNetworkConfigurationException, __BaseException>) {
    super({
      name: "UnsupportedNetworkConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedNetworkConfigurationException.prototype);
  }
}

/**
 * <p>The workspaces_DefaultRole role could not be found. If this is the first time you are registering a directory, you
 *          will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role">Creating the workspaces_DefaultRole Role</a>.</p>
 */
export class WorkspacesDefaultRoleNotFoundException extends __BaseException {
  readonly name: "WorkspacesDefaultRoleNotFoundException" = "WorkspacesDefaultRoleNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WorkspacesDefaultRoleNotFoundException, __BaseException>) {
    super({
      name: "WorkspacesDefaultRoleNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WorkspacesDefaultRoleNotFoundException.prototype);
  }
}

export interface RestoreWorkspaceRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export interface RestoreWorkspaceResult {}

export interface RevokeIpRulesRequest {
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The rules to remove from the group.</p>
   */
  UserRules: string[] | undefined;
}

export interface RevokeIpRulesResult {}

/**
 * <p>Information used to start a WorkSpace.</p>
 */
export interface StartRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;
}

export interface StartWorkspacesRequest {
  /**
   * <p>The WorkSpaces to start. You can specify up to 25 WorkSpaces.</p>
   */
  StartWorkspaceRequests: StartRequest[] | undefined;
}

export interface StartWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be started.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

/**
 * <p>Describes the information used to stop a WorkSpace.</p>
 */
export interface StopRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;
}

export interface StopWorkspacesRequest {
  /**
   * <p>The WorkSpaces to stop. You can specify up to 25 WorkSpaces.</p>
   */
  StopWorkspaceRequests: StopRequest[] | undefined;
}

export interface StopWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be stopped.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

/**
 * <p>Describes the information used to terminate a WorkSpace.</p>
 */
export interface TerminateRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export interface TerminateWorkspacesRequest {
  /**
   * <p>The WorkSpaces to terminate. You can specify up to 25 WorkSpaces.</p>
   */
  TerminateWorkspaceRequests: TerminateRequest[] | undefined;
}

export interface TerminateWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be terminated.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export interface UpdateConnectClientAddInRequest {
  /**
   * <p>The identifier of the client add-in to update.</p>
   */
  AddInId: string | undefined;

  /**
   * <p>The directory identifier for which the client add-in is configured.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The name of the client add-in.</p>
   */
  Name?: string;

  /**
   * <p>The endpoint URL of the Amazon Connect client add-in.</p>
   */
  URL?: string;
}

export interface UpdateConnectClientAddInResult {}

export interface UpdateConnectionAliasPermissionRequest {
  /**
   * <p>The identifier of the connection alias that you want to update permissions for.</p>
   */
  AliasId: string | undefined;

  /**
   * <p>Indicates whether to share or unshare the connection alias with the specified Amazon Web Services account.</p>
   */
  ConnectionAliasPermission: ConnectionAliasPermission | undefined;
}

export interface UpdateConnectionAliasPermissionResult {}

export interface UpdateRulesOfIpGroupRequest {
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>One or more rules.</p>
   */
  UserRules: IpRuleItem[] | undefined;
}

export interface UpdateRulesOfIpGroupResult {}

export interface UpdateWorkspaceBundleRequest {
  /**
   * <p>The identifier of the bundle.</p>
   */
  BundleId?: string;

  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;
}

export interface UpdateWorkspaceBundleResult {}

export interface UpdateWorkspaceImagePermissionRequest {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The permission to copy the image. This permission can be revoked only after an image has
   *          been shared.</p>
   */
  AllowCopyImage: boolean | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account to share or unshare the image
   *          with.</p>
   *          <important>
   *             <p>Before sharing the image, confirm that you are sharing to the correct Amazon Web Services account ID.</p>
   *          </important>
   */
  SharedAccountId: string | undefined;
}

export interface UpdateWorkspaceImagePermissionResult {}

/**
 * @internal
 */
export const AccountModificationFilterSensitiveLog = (obj: AccountModification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateConnectionAliasRequestFilterSensitiveLog = (obj: AssociateConnectionAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateConnectionAliasResultFilterSensitiveLog = (obj: AssociateConnectionAliasResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateIpGroupsRequestFilterSensitiveLog = (obj: AssociateIpGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateIpGroupsResultFilterSensitiveLog = (obj: AssociateIpGroupsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IpRuleItemFilterSensitiveLog = (obj: IpRuleItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizeIpRulesRequestFilterSensitiveLog = (obj: AuthorizeIpRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthorizeIpRulesResultFilterSensitiveLog = (obj: AuthorizeIpRulesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComputeTypeFilterSensitiveLog = (obj: ComputeType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RootStorageFilterSensitiveLog = (obj: RootStorage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserStorageFilterSensitiveLog = (obj: UserStorage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkspaceBundleFilterSensitiveLog = (obj: WorkspaceBundle): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CertificateBasedAuthPropertiesFilterSensitiveLog = (obj: CertificateBasedAuthProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientPropertiesFilterSensitiveLog = (obj: ClientProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClientPropertiesResultFilterSensitiveLog = (obj: ClientPropertiesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectClientAddInFilterSensitiveLog = (obj: ConnectClientAddIn): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionAliasAssociationFilterSensitiveLog = (obj: ConnectionAliasAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionAliasFilterSensitiveLog = (obj: ConnectionAlias): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionAliasPermissionFilterSensitiveLog = (obj: ConnectionAliasPermission): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyWorkspaceImageRequestFilterSensitiveLog = (obj: CopyWorkspaceImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CopyWorkspaceImageResultFilterSensitiveLog = (obj: CopyWorkspaceImageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectClientAddInRequestFilterSensitiveLog = (obj: CreateConnectClientAddInRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectClientAddInResultFilterSensitiveLog = (obj: CreateConnectClientAddInResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectionAliasRequestFilterSensitiveLog = (obj: CreateConnectionAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectionAliasResultFilterSensitiveLog = (obj: CreateConnectionAliasResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIpGroupRequestFilterSensitiveLog = (obj: CreateIpGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIpGroupResultFilterSensitiveLog = (obj: CreateIpGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StandbyWorkspaceFilterSensitiveLog = (obj: StandbyWorkspace): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStandbyWorkspacesRequestFilterSensitiveLog = (obj: CreateStandbyWorkspacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailedCreateStandbyWorkspacesRequestFilterSensitiveLog = (
  obj: FailedCreateStandbyWorkspacesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PendingCreateStandbyWorkspacesRequestFilterSensitiveLog = (
  obj: PendingCreateStandbyWorkspacesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStandbyWorkspacesResultFilterSensitiveLog = (obj: CreateStandbyWorkspacesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTagsRequestFilterSensitiveLog = (obj: CreateTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTagsResultFilterSensitiveLog = (obj: CreateTagsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUpdatedWorkspaceImageRequestFilterSensitiveLog = (obj: CreateUpdatedWorkspaceImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUpdatedWorkspaceImageResultFilterSensitiveLog = (obj: CreateUpdatedWorkspaceImageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkspaceBundleRequestFilterSensitiveLog = (obj: CreateWorkspaceBundleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkspaceBundleResultFilterSensitiveLog = (obj: CreateWorkspaceBundleResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkspaceImageRequestFilterSensitiveLog = (obj: CreateWorkspaceImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OperatingSystemFilterSensitiveLog = (obj: OperatingSystem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkspaceImageResultFilterSensitiveLog = (obj: CreateWorkspaceImageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkspacePropertiesFilterSensitiveLog = (obj: WorkspaceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkspaceRequestFilterSensitiveLog = (obj: WorkspaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkspacesRequestFilterSensitiveLog = (obj: CreateWorkspacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailedCreateWorkspaceRequestFilterSensitiveLog = (obj: FailedCreateWorkspaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModificationStateFilterSensitiveLog = (obj: ModificationState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RelatedWorkspacePropertiesFilterSensitiveLog = (obj: RelatedWorkspaceProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkspaceFilterSensitiveLog = (obj: Workspace): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkspacesResultFilterSensitiveLog = (obj: CreateWorkspacesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultClientBrandingAttributesFilterSensitiveLog = (obj: DefaultClientBrandingAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultImportClientBrandingAttributesFilterSensitiveLog = (
  obj: DefaultImportClientBrandingAttributes
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultWorkspaceCreationPropertiesFilterSensitiveLog = (obj: DefaultWorkspaceCreationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClientBrandingRequestFilterSensitiveLog = (obj: DeleteClientBrandingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteClientBrandingResultFilterSensitiveLog = (obj: DeleteClientBrandingResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectClientAddInRequestFilterSensitiveLog = (obj: DeleteConnectClientAddInRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectClientAddInResultFilterSensitiveLog = (obj: DeleteConnectClientAddInResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectionAliasRequestFilterSensitiveLog = (obj: DeleteConnectionAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectionAliasResultFilterSensitiveLog = (obj: DeleteConnectionAliasResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIpGroupRequestFilterSensitiveLog = (obj: DeleteIpGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIpGroupResultFilterSensitiveLog = (obj: DeleteIpGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTagsRequestFilterSensitiveLog = (obj: DeleteTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTagsResultFilterSensitiveLog = (obj: DeleteTagsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkspaceBundleRequestFilterSensitiveLog = (obj: DeleteWorkspaceBundleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkspaceBundleResultFilterSensitiveLog = (obj: DeleteWorkspaceBundleResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkspaceImageRequestFilterSensitiveLog = (obj: DeleteWorkspaceImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkspaceImageResultFilterSensitiveLog = (obj: DeleteWorkspaceImageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterWorkspaceDirectoryRequestFilterSensitiveLog = (
  obj: DeregisterWorkspaceDirectoryRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterWorkspaceDirectoryResultFilterSensitiveLog = (obj: DeregisterWorkspaceDirectoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountRequestFilterSensitiveLog = (obj: DescribeAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountResultFilterSensitiveLog = (obj: DescribeAccountResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountModificationsRequestFilterSensitiveLog = (
  obj: DescribeAccountModificationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountModificationsResultFilterSensitiveLog = (obj: DescribeAccountModificationsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientBrandingRequestFilterSensitiveLog = (obj: DescribeClientBrandingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IosClientBrandingAttributesFilterSensitiveLog = (obj: IosClientBrandingAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientBrandingResultFilterSensitiveLog = (obj: DescribeClientBrandingResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientPropertiesRequestFilterSensitiveLog = (obj: DescribeClientPropertiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeClientPropertiesResultFilterSensitiveLog = (obj: DescribeClientPropertiesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectClientAddInsRequestFilterSensitiveLog = (obj: DescribeConnectClientAddInsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectClientAddInsResultFilterSensitiveLog = (obj: DescribeConnectClientAddInsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectionAliasesRequestFilterSensitiveLog = (obj: DescribeConnectionAliasesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectionAliasesResultFilterSensitiveLog = (obj: DescribeConnectionAliasesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectionAliasPermissionsRequestFilterSensitiveLog = (
  obj: DescribeConnectionAliasPermissionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectionAliasPermissionsResultFilterSensitiveLog = (
  obj: DescribeConnectionAliasPermissionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIpGroupsRequestFilterSensitiveLog = (obj: DescribeIpGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkspacesIpGroupFilterSensitiveLog = (obj: WorkspacesIpGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIpGroupsResultFilterSensitiveLog = (obj: DescribeIpGroupsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTagsRequestFilterSensitiveLog = (obj: DescribeTagsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTagsResultFilterSensitiveLog = (obj: DescribeTagsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkspaceBundlesRequestFilterSensitiveLog = (obj: DescribeWorkspaceBundlesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkspaceBundlesResultFilterSensitiveLog = (obj: DescribeWorkspaceBundlesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkspaceDirectoriesRequestFilterSensitiveLog = (
  obj: DescribeWorkspaceDirectoriesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SamlPropertiesFilterSensitiveLog = (obj: SamlProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SelfservicePermissionsFilterSensitiveLog = (obj: SelfservicePermissions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkspaceAccessPropertiesFilterSensitiveLog = (obj: WorkspaceAccessProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkspaceDirectoryFilterSensitiveLog = (obj: WorkspaceDirectory): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkspaceDirectoriesResultFilterSensitiveLog = (obj: DescribeWorkspaceDirectoriesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkspaceImagePermissionsRequestFilterSensitiveLog = (
  obj: DescribeWorkspaceImagePermissionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImagePermissionFilterSensitiveLog = (obj: ImagePermission): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkspaceImagePermissionsResultFilterSensitiveLog = (
  obj: DescribeWorkspaceImagePermissionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkspaceImagesRequestFilterSensitiveLog = (obj: DescribeWorkspaceImagesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResultFilterSensitiveLog = (obj: UpdateResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkspaceImageFilterSensitiveLog = (obj: WorkspaceImage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkspaceImagesResultFilterSensitiveLog = (obj: DescribeWorkspaceImagesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkspacesRequestFilterSensitiveLog = (obj: DescribeWorkspacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkspacesResultFilterSensitiveLog = (obj: DescribeWorkspacesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkspacesConnectionStatusRequestFilterSensitiveLog = (
  obj: DescribeWorkspacesConnectionStatusRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkspaceConnectionStatusFilterSensitiveLog = (obj: WorkspaceConnectionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkspacesConnectionStatusResultFilterSensitiveLog = (
  obj: DescribeWorkspacesConnectionStatusResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkspaceSnapshotsRequestFilterSensitiveLog = (obj: DescribeWorkspaceSnapshotsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotFilterSensitiveLog = (obj: Snapshot): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWorkspaceSnapshotsResultFilterSensitiveLog = (obj: DescribeWorkspaceSnapshotsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateConnectionAliasRequestFilterSensitiveLog = (obj: DisassociateConnectionAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateConnectionAliasResultFilterSensitiveLog = (obj: DisassociateConnectionAliasResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateIpGroupsRequestFilterSensitiveLog = (obj: DisassociateIpGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateIpGroupsResultFilterSensitiveLog = (obj: DisassociateIpGroupsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailedWorkspaceChangeRequestFilterSensitiveLog = (obj: FailedWorkspaceChangeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IosImportClientBrandingAttributesFilterSensitiveLog = (obj: IosImportClientBrandingAttributes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportClientBrandingRequestFilterSensitiveLog = (obj: ImportClientBrandingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportClientBrandingResultFilterSensitiveLog = (obj: ImportClientBrandingResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportWorkspaceImageRequestFilterSensitiveLog = (obj: ImportWorkspaceImageRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportWorkspaceImageResultFilterSensitiveLog = (obj: ImportWorkspaceImageResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAvailableManagementCidrRangesRequestFilterSensitiveLog = (
  obj: ListAvailableManagementCidrRangesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAvailableManagementCidrRangesResultFilterSensitiveLog = (
  obj: ListAvailableManagementCidrRangesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MigrateWorkspaceRequestFilterSensitiveLog = (obj: MigrateWorkspaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MigrateWorkspaceResultFilterSensitiveLog = (obj: MigrateWorkspaceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyAccountRequestFilterSensitiveLog = (obj: ModifyAccountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyAccountResultFilterSensitiveLog = (obj: ModifyAccountResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyCertificateBasedAuthPropertiesRequestFilterSensitiveLog = (
  obj: ModifyCertificateBasedAuthPropertiesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyCertificateBasedAuthPropertiesResultFilterSensitiveLog = (
  obj: ModifyCertificateBasedAuthPropertiesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClientPropertiesRequestFilterSensitiveLog = (obj: ModifyClientPropertiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyClientPropertiesResultFilterSensitiveLog = (obj: ModifyClientPropertiesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySamlPropertiesRequestFilterSensitiveLog = (obj: ModifySamlPropertiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySamlPropertiesResultFilterSensitiveLog = (obj: ModifySamlPropertiesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySelfservicePermissionsRequestFilterSensitiveLog = (
  obj: ModifySelfservicePermissionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifySelfservicePermissionsResultFilterSensitiveLog = (obj: ModifySelfservicePermissionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyWorkspaceAccessPropertiesRequestFilterSensitiveLog = (
  obj: ModifyWorkspaceAccessPropertiesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyWorkspaceAccessPropertiesResultFilterSensitiveLog = (
  obj: ModifyWorkspaceAccessPropertiesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkspaceCreationPropertiesFilterSensitiveLog = (obj: WorkspaceCreationProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyWorkspaceCreationPropertiesRequestFilterSensitiveLog = (
  obj: ModifyWorkspaceCreationPropertiesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyWorkspaceCreationPropertiesResultFilterSensitiveLog = (
  obj: ModifyWorkspaceCreationPropertiesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyWorkspacePropertiesRequestFilterSensitiveLog = (obj: ModifyWorkspacePropertiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyWorkspacePropertiesResultFilterSensitiveLog = (obj: ModifyWorkspacePropertiesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyWorkspaceStateRequestFilterSensitiveLog = (obj: ModifyWorkspaceStateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ModifyWorkspaceStateResultFilterSensitiveLog = (obj: ModifyWorkspaceStateResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebootRequestFilterSensitiveLog = (obj: RebootRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebootWorkspacesRequestFilterSensitiveLog = (obj: RebootWorkspacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebootWorkspacesResultFilterSensitiveLog = (obj: RebootWorkspacesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebuildRequestFilterSensitiveLog = (obj: RebuildRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebuildWorkspacesRequestFilterSensitiveLog = (obj: RebuildWorkspacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebuildWorkspacesResultFilterSensitiveLog = (obj: RebuildWorkspacesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterWorkspaceDirectoryRequestFilterSensitiveLog = (obj: RegisterWorkspaceDirectoryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterWorkspaceDirectoryResultFilterSensitiveLog = (obj: RegisterWorkspaceDirectoryResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreWorkspaceRequestFilterSensitiveLog = (obj: RestoreWorkspaceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreWorkspaceResultFilterSensitiveLog = (obj: RestoreWorkspaceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeIpRulesRequestFilterSensitiveLog = (obj: RevokeIpRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RevokeIpRulesResultFilterSensitiveLog = (obj: RevokeIpRulesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartRequestFilterSensitiveLog = (obj: StartRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartWorkspacesRequestFilterSensitiveLog = (obj: StartWorkspacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartWorkspacesResultFilterSensitiveLog = (obj: StartWorkspacesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopRequestFilterSensitiveLog = (obj: StopRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopWorkspacesRequestFilterSensitiveLog = (obj: StopWorkspacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopWorkspacesResultFilterSensitiveLog = (obj: StopWorkspacesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateRequestFilterSensitiveLog = (obj: TerminateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateWorkspacesRequestFilterSensitiveLog = (obj: TerminateWorkspacesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateWorkspacesResultFilterSensitiveLog = (obj: TerminateWorkspacesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectClientAddInRequestFilterSensitiveLog = (obj: UpdateConnectClientAddInRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectClientAddInResultFilterSensitiveLog = (obj: UpdateConnectClientAddInResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectionAliasPermissionRequestFilterSensitiveLog = (
  obj: UpdateConnectionAliasPermissionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectionAliasPermissionResultFilterSensitiveLog = (
  obj: UpdateConnectionAliasPermissionResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRulesOfIpGroupRequestFilterSensitiveLog = (obj: UpdateRulesOfIpGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRulesOfIpGroupResultFilterSensitiveLog = (obj: UpdateRulesOfIpGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkspaceBundleRequestFilterSensitiveLog = (obj: UpdateWorkspaceBundleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkspaceBundleResultFilterSensitiveLog = (obj: UpdateWorkspaceBundleResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkspaceImagePermissionRequestFilterSensitiveLog = (
  obj: UpdateWorkspaceImagePermissionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkspaceImagePermissionResultFilterSensitiveLog = (
  obj: UpdateWorkspaceImagePermissionResult
): any => ({
  ...obj,
});
