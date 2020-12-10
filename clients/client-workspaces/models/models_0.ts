import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The user is not authorized to access a resource.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
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

export namespace AccountModification {
  export const filterSensitiveLog = (obj: AccountModification): any => ({
    ...obj,
  });
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

export namespace AssociateConnectionAliasRequest {
  export const filterSensitiveLog = (obj: AssociateConnectionAliasRequest): any => ({
    ...obj,
  });
}

export interface AssociateConnectionAliasResult {
  /**
   * <p>The identifier of the connection alias association. You use the connection identifier in the DNS TXT record when
   *          you're configuring your DNS routing policies. </p>
   */
  ConnectionIdentifier?: string;
}

export namespace AssociateConnectionAliasResult {
  export const filterSensitiveLog = (obj: AssociateConnectionAliasResult): any => ({
    ...obj,
  });
}

/**
 * <p>One or more parameter values are not valid.</p>
 */
export interface InvalidParameterValuesException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterValuesException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace InvalidParameterValuesException {
  export const filterSensitiveLog = (obj: InvalidParameterValuesException): any => ({
    ...obj,
  });
}

/**
 * <p>The state of the resource is not valid for this operation.</p>
 */
export interface InvalidResourceStateException extends __SmithyException, $MetadataBearer {
  name: "InvalidResourceStateException";
  $fault: "client";
  message?: string;
}

export namespace InvalidResourceStateException {
  export const filterSensitiveLog = (obj: InvalidResourceStateException): any => ({
    ...obj,
  });
}

/**
 * <p>This operation is not supported.</p>
 */
export interface OperationNotSupportedException extends __SmithyException, $MetadataBearer {
  name: "OperationNotSupportedException";
  $fault: "client";
  message?: string;
}

export namespace OperationNotSupportedException {
  export const filterSensitiveLog = (obj: OperationNotSupportedException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource is associated with a directory.</p>
 */
export interface ResourceAssociatedException extends __SmithyException, $MetadataBearer {
  name: "ResourceAssociatedException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAssociatedException {
  export const filterSensitiveLog = (obj: ResourceAssociatedException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The resource could not be found.</p>
   */
  message?: string;

  /**
   * <p>The ID of the resource that could not be found.</p>
   */
  ResourceId?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
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

export namespace AssociateIpGroupsRequest {
  export const filterSensitiveLog = (obj: AssociateIpGroupsRequest): any => ({
    ...obj,
  });
}

export interface AssociateIpGroupsResult {}

export namespace AssociateIpGroupsResult {
  export const filterSensitiveLog = (obj: AssociateIpGroupsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Your resource limits have been exceeded.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace ResourceLimitExceededException {
  export const filterSensitiveLog = (obj: ResourceLimitExceededException): any => ({
    ...obj,
  });
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

export namespace IpRuleItem {
  export const filterSensitiveLog = (obj: IpRuleItem): any => ({
    ...obj,
  });
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

export namespace AuthorizeIpRulesRequest {
  export const filterSensitiveLog = (obj: AuthorizeIpRulesRequest): any => ({
    ...obj,
  });
}

export interface AuthorizeIpRulesResult {}

export namespace AuthorizeIpRulesResult {
  export const filterSensitiveLog = (obj: AuthorizeIpRulesResult): any => ({
    ...obj,
  });
}

export enum Compute {
  GRAPHICS = "GRAPHICS",
  GRAPHICSPRO = "GRAPHICSPRO",
  PERFORMANCE = "PERFORMANCE",
  POWER = "POWER",
  POWERPRO = "POWERPRO",
  STANDARD = "STANDARD",
  VALUE = "VALUE",
}

/**
 * <p>Describes the compute type.</p>
 */
export interface ComputeType {
  /**
   * <p>The compute type.</p>
   */
  Name?: Compute | string;
}

export namespace ComputeType {
  export const filterSensitiveLog = (obj: ComputeType): any => ({
    ...obj,
  });
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

export namespace RootStorage {
  export const filterSensitiveLog = (obj: RootStorage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the user storage for a WorkSpace bundle.</p>
 */
export interface UserStorage {
  /**
   * <p>The size of the user storage.</p>
   */
  Capacity?: string;
}

export namespace UserStorage {
  export const filterSensitiveLog = (obj: UserStorage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a WorkSpace bundle.</p>
 */
export interface WorkspaceBundle {
  /**
   * <p>The bundle identifier.</p>
   */
  BundleId?: string;

  /**
   * <p>The name of the bundle.</p>
   */
  Name?: string;

  /**
   * <p>The owner of the bundle. This is the account identifier of the owner, or
   *          <code>AMAZON</code> if the bundle is provided by AWS.</p>
   */
  Owner?: string;

  /**
   * <p>A description.</p>
   */
  Description?: string;

  /**
   * <p>The image identifier of the bundle.</p>
   */
  ImageId?: string;

  /**
   * <p>The size of the root volume.</p>
   */
  RootStorage?: RootStorage;

  /**
   * <p>The size of the user storage.</p>
   */
  UserStorage?: UserStorage;

  /**
   * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces Bundles</a>.</p>
   */
  ComputeType?: ComputeType;

  /**
   * <p>The last time that the bundle was updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace WorkspaceBundle {
  export const filterSensitiveLog = (obj: WorkspaceBundle): any => ({
    ...obj,
  });
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
}

export namespace ClientProperties {
  export const filterSensitiveLog = (obj: ClientProperties): any => ({
    ...obj,
  });
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

export namespace ClientPropertiesResult {
  export const filterSensitiveLog = (obj: ClientPropertiesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a connection alias association that is used for cross-Region redirection. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAliasAssociation {
  /**
   * <p>The association status of the connection alias.</p>
   */
  AssociationStatus?: AssociationStatus | string;

  /**
   * <p>The identifier of the AWS account that associated the connection alias with a directory.</p>
   */
  AssociatedAccountId?: string;

  /**
   * <p>The identifier of the directory associated with a connection alias.</p>
   */
  ResourceId?: string;

  /**
   * <p>The identifier of the connection alias association. You use the connection identifier in the DNS TXT record when
   *          you're configuring your DNS routing policies.</p>
   */
  ConnectionIdentifier?: string;
}

export namespace ConnectionAliasAssociation {
  export const filterSensitiveLog = (obj: ConnectionAliasAssociation): any => ({
    ...obj,
  });
}

export enum ConnectionAliasState {
  CREATED = "CREATED",
  CREATING = "CREATING",
  DELETING = "DELETING",
}

/**
 * <p>Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information,
 *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAlias {
  /**
   * <p>The connection string specified for the connection alias. The connection string must be in the form of
   *          a fully qualified domain name (FQDN), such as <code>www.example.com</code>.</p>
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
   * <p>The identifier of the AWS account that owns the connection alias.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The association status of the connection alias.</p>
   */
  Associations?: ConnectionAliasAssociation[];
}

export namespace ConnectionAlias {
  export const filterSensitiveLog = (obj: ConnectionAlias): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the permissions for a connection alias. Connection aliases are used for cross-Region redirection.
 *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html">
 *          Cross-Region Redirection for Amazon WorkSpaces</a>.</p>
 */
export interface ConnectionAliasPermission {
  /**
   * <p>The identifier of the AWS account that the connection alias is shared with.</p>
   */
  SharedAccountId: string | undefined;

  /**
   * <p>Indicates whether the specified AWS account is allowed to associate the connection alias with a directory.</p>
   */
  AllowAssociation: boolean | undefined;
}

export namespace ConnectionAliasPermission {
  export const filterSensitiveLog = (obj: ConnectionAliasPermission): any => ({
    ...obj,
  });
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

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
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

export namespace CopyWorkspaceImageRequest {
  export const filterSensitiveLog = (obj: CopyWorkspaceImageRequest): any => ({
    ...obj,
  });
}

export interface CopyWorkspaceImageResult {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;
}

export namespace CopyWorkspaceImageResult {
  export const filterSensitiveLog = (obj: CopyWorkspaceImageResult): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource is not available.</p>
 */
export interface ResourceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ResourceUnavailableException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;

  /**
   * <p>The identifier of the resource that is not available.</p>
   */
  ResourceId?: string;
}

export namespace ResourceUnavailableException {
  export const filterSensitiveLog = (obj: ResourceUnavailableException): any => ({
    ...obj,
  });
}

export interface CreateConnectionAliasRequest {
  /**
   * <p>A connection string in the form of a fully qualified domain name (FQDN), such as <code>www.example.com</code>.</p>
   *
   *          <important>
   *             <p>After you create a connection string, it is always associated to your AWS account. You cannot recreate the same
   *             connection string with a different account, even if you delete all instances of it from the original account. The
   *          connection string is globally reserved for your account.</p>
   *          </important>
   */
  ConnectionString: string | undefined;

  /**
   * <p>The tags to associate with the connection alias.</p>
   */
  Tags?: Tag[];
}

export namespace CreateConnectionAliasRequest {
  export const filterSensitiveLog = (obj: CreateConnectionAliasRequest): any => ({
    ...obj,
  });
}

export interface CreateConnectionAliasResult {
  /**
   * <p>The identifier of the connection alias.</p>
   */
  AliasId?: string;
}

export namespace CreateConnectionAliasResult {
  export const filterSensitiveLog = (obj: CreateConnectionAliasResult): any => ({
    ...obj,
  });
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

export namespace CreateIpGroupRequest {
  export const filterSensitiveLog = (obj: CreateIpGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateIpGroupResult {
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId?: string;
}

export namespace CreateIpGroupResult {
  export const filterSensitiveLog = (obj: CreateIpGroupResult): any => ({
    ...obj,
  });
}

/**
 * <p>The resource could not be created.</p>
 */
export interface ResourceCreationFailedException extends __SmithyException, $MetadataBearer {
  name: "ResourceCreationFailedException";
  $fault: "client";
  message?: string;
}

export namespace ResourceCreationFailedException {
  export const filterSensitiveLog = (obj: ResourceCreationFailedException): any => ({
    ...obj,
  });
}

export interface CreateTagsRequest {
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection aliases.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace CreateTagsRequest {
  export const filterSensitiveLog = (obj: CreateTagsRequest): any => ({
    ...obj,
  });
}

export interface CreateTagsResult {}

export namespace CreateTagsResult {
  export const filterSensitiveLog = (obj: CreateTagsResult): any => ({
    ...obj,
  });
}

export enum RunningMode {
  ALWAYS_ON = "ALWAYS_ON",
  AUTO_STOP = "AUTO_STOP",
}

/**
 * <p>Describes a WorkSpace.</p>
 */
export interface WorkspaceProperties {
  /**
   * <p>The running mode. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html">Manage the WorkSpace Running
   *             Mode</a>.</p>
   */
  RunningMode?: RunningMode | string;

  /**
   * <p>The time after a user logs off when WorkSpaces are automatically stopped. Configured in 60-minute intervals.</p>
   */
  RunningModeAutoStopTimeoutInMinutes?: number;

  /**
   * <p>The size of the root volume. For important information about how to modify the size of the root and user volumes, see
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a WorkSpace</a>.</p>
   */
  RootVolumeSizeGib?: number;

  /**
   * <p>The size of the user storage. For important information about how to modify the size of the root and user volumes, see
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a WorkSpace</a>.</p>
   */
  UserVolumeSizeGib?: number;

  /**
   * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces
   *          Bundles</a>.</p>
   */
  ComputeTypeName?: Compute | string;
}

export namespace WorkspaceProperties {
  export const filterSensitiveLog = (obj: WorkspaceProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the information used to create a WorkSpace.</p>
 */
export interface WorkspaceRequest {
  /**
   * <p>The identifier of the AWS Directory Service directory for the WorkSpace. You can use
   *             <a>DescribeWorkspaceDirectories</a> to list the available directories.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The user name of the user for the WorkSpace. This user name must exist in the AWS
   *          Directory Service directory for the WorkSpace.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The identifier of the bundle for the WorkSpace. You can use <a>DescribeWorkspaceBundles</a> to list the available bundles.</p>
   */
  BundleId: string | undefined;

  /**
   * <p>The symmetric AWS KMS customer master key (CMK) used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric CMKs.</p>
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

export namespace WorkspaceRequest {
  export const filterSensitiveLog = (obj: WorkspaceRequest): any => ({
    ...obj,
  });
}

export interface CreateWorkspacesRequest {
  /**
   * <p>The WorkSpaces to create. You can specify up to 25 WorkSpaces.</p>
   */
  Workspaces: WorkspaceRequest[] | undefined;
}

export namespace CreateWorkspacesRequest {
  export const filterSensitiveLog = (obj: CreateWorkspacesRequest): any => ({
    ...obj,
  });
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

export namespace FailedCreateWorkspaceRequest {
  export const filterSensitiveLog = (obj: FailedCreateWorkspaceRequest): any => ({
    ...obj,
  });
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

export namespace ModificationState {
  export const filterSensitiveLog = (obj: ModificationState): any => ({
    ...obj,
  });
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
 * <p>Describes a WorkSpace.</p>
 */
export interface Workspace {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * <p>The identifier of the AWS Directory Service directory for the WorkSpace.</p>
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
   *
   *          <note>
   *             <p>After a WorkSpace is terminated, the <code>TERMINATED</code> state is returned
   *             only briefly before the WorkSpace directory metadata is cleaned up, so this state is rarely
   *             returned. To confirm that a WorkSpace is terminated, check for the WorkSpace ID by using
   *             <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaces.html">
   *                DescribeWorkSpaces</a>. If the WorkSpace ID isn't returned, then the WorkSpace has
   *             been successfully terminated.</p>
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
   * <p>The name of the WorkSpace, as seen by the operating system. The format of this name varies.
   *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/launch-workspaces-tutorials.html">
   *             Launch a WorkSpace</a>. </p>
   */
  ComputerName?: string;

  /**
   * <p>The symmetric AWS KMS customer master key (CMK) used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric CMKs.</p>
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
}

export namespace Workspace {
  export const filterSensitiveLog = (obj: Workspace): any => ({
    ...obj,
  });
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

export namespace CreateWorkspacesResult {
  export const filterSensitiveLog = (obj: CreateWorkspacesResult): any => ({
    ...obj,
  });
}

export enum DedicatedTenancySupportEnum {
  ENABLED = "ENABLED",
}

/**
 * <p>Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.</p>
 */
export interface DefaultWorkspaceCreationProperties {
  /**
   * <p>Specifies whether the directory is enabled for Amazon WorkDocs.</p>
   */
  EnableWorkDocs?: boolean;

  /**
   * <p>Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default.
   *          If enabled, the Elastic public IP address allows outbound internet access from your WorkSpaces when you’re using an
   *          internet gateway in the Amazon VPC in which your WorkSpaces are located. If you're using a Network Address
   *          Translation (NAT) gateway for outbound internet access from your VPC, or if your WorkSpaces are in public
   *          subnets and you manually assign them Elastic IP addresses, you should disable this setting. This setting
   *          applies to new WorkSpaces that you launch or to existing WorkSpaces that you rebuild. For more information,
   *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html">
   *             Configure a VPC for Amazon WorkSpaces</a>.</p>
   */
  EnableInternetAccess?: boolean;

  /**
   * <p>The organizational unit (OU) in the directory for the WorkSpace machine accounts.</p>
   */
  DefaultOu?: string;

  /**
   * <p>The identifier of the default security group to apply to WorkSpaces when they are created.
   *          For more information, see
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-security-groups.html">
   *             Security Groups for Your WorkSpaces</a>.</p>
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

export namespace DefaultWorkspaceCreationProperties {
  export const filterSensitiveLog = (obj: DefaultWorkspaceCreationProperties): any => ({
    ...obj,
  });
}

export interface DeleteConnectionAliasRequest {
  /**
   * <p>The identifier of the connection alias to delete.</p>
   */
  AliasId: string | undefined;
}

export namespace DeleteConnectionAliasRequest {
  export const filterSensitiveLog = (obj: DeleteConnectionAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteConnectionAliasResult {}

export namespace DeleteConnectionAliasResult {
  export const filterSensitiveLog = (obj: DeleteConnectionAliasResult): any => ({
    ...obj,
  });
}

export interface DeleteIpGroupRequest {
  /**
   * <p>The identifier of the IP access control group.</p>
   */
  GroupId: string | undefined;
}

export namespace DeleteIpGroupRequest {
  export const filterSensitiveLog = (obj: DeleteIpGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteIpGroupResult {}

export namespace DeleteIpGroupResult {
  export const filterSensitiveLog = (obj: DeleteIpGroupResult): any => ({
    ...obj,
  });
}

export interface DeleteTagsRequest {
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection aliases.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsRequest {
  export const filterSensitiveLog = (obj: DeleteTagsRequest): any => ({
    ...obj,
  });
}

export interface DeleteTagsResult {}

export namespace DeleteTagsResult {
  export const filterSensitiveLog = (obj: DeleteTagsResult): any => ({
    ...obj,
  });
}

export interface DeleteWorkspaceImageRequest {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;
}

export namespace DeleteWorkspaceImageRequest {
  export const filterSensitiveLog = (obj: DeleteWorkspaceImageRequest): any => ({
    ...obj,
  });
}

export interface DeleteWorkspaceImageResult {}

export namespace DeleteWorkspaceImageResult {
  export const filterSensitiveLog = (obj: DeleteWorkspaceImageResult): any => ({
    ...obj,
  });
}

export interface DeregisterWorkspaceDirectoryRequest {
  /**
   * <p>The identifier of the directory. If any WorkSpaces are registered to this directory, you must
   *          remove them before you deregister the directory, or you will receive an OperationNotSupportedException
   *          error.</p>
   */
  DirectoryId: string | undefined;
}

export namespace DeregisterWorkspaceDirectoryRequest {
  export const filterSensitiveLog = (obj: DeregisterWorkspaceDirectoryRequest): any => ({
    ...obj,
  });
}

export interface DeregisterWorkspaceDirectoryResult {}

export namespace DeregisterWorkspaceDirectoryResult {
  export const filterSensitiveLog = (obj: DeregisterWorkspaceDirectoryResult): any => ({
    ...obj,
  });
}

export interface DescribeAccountRequest {}

export namespace DescribeAccountRequest {
  export const filterSensitiveLog = (obj: DescribeAccountRequest): any => ({
    ...obj,
  });
}

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

export namespace DescribeAccountResult {
  export const filterSensitiveLog = (obj: DescribeAccountResult): any => ({
    ...obj,
  });
}

export interface DescribeAccountModificationsRequest {
  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeAccountModificationsRequest {
  export const filterSensitiveLog = (obj: DescribeAccountModificationsRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountModificationsResult {
  /**
   * <p>The list of modifications to the configuration of BYOL.</p>
   */
  AccountModifications?: AccountModification[];

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;
}

export namespace DescribeAccountModificationsResult {
  export const filterSensitiveLog = (obj: DescribeAccountModificationsResult): any => ({
    ...obj,
  });
}

export interface DescribeClientPropertiesRequest {
  /**
   * <p>The resource identifier, in the form of directory IDs.</p>
   */
  ResourceIds: string[] | undefined;
}

export namespace DescribeClientPropertiesRequest {
  export const filterSensitiveLog = (obj: DescribeClientPropertiesRequest): any => ({
    ...obj,
  });
}

export interface DescribeClientPropertiesResult {
  /**
   * <p>Information about the specified Amazon WorkSpaces clients.</p>
   */
  ClientPropertiesList?: ClientPropertiesResult[];
}

export namespace DescribeClientPropertiesResult {
  export const filterSensitiveLog = (obj: DescribeClientPropertiesResult): any => ({
    ...obj,
  });
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
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the
   *          next set of results. </p>
   */
  NextToken?: string;
}

export namespace DescribeConnectionAliasesRequest {
  export const filterSensitiveLog = (obj: DescribeConnectionAliasesRequest): any => ({
    ...obj,
  });
}

export interface DescribeConnectionAliasesResult {
  /**
   * <p>Information about the specified connection aliases.</p>
   */
  ConnectionAliases?: ConnectionAlias[];

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are available.</p>
   */
  NextToken?: string;
}

export namespace DescribeConnectionAliasesResult {
  export const filterSensitiveLog = (obj: DescribeConnectionAliasesResult): any => ({
    ...obj,
  });
}

export interface DescribeConnectionAliasPermissionsRequest {
  /**
   * <p>The identifier of the connection alias.</p>
   */
  AliasId: string | undefined;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the
   *          next set of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace DescribeConnectionAliasPermissionsRequest {
  export const filterSensitiveLog = (obj: DescribeConnectionAliasPermissionsRequest): any => ({
    ...obj,
  });
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
   * <p>The token to use to retrieve the next set of results, or null if no more results are available.</p>
   */
  NextToken?: string;
}

export namespace DescribeConnectionAliasPermissionsResult {
  export const filterSensitiveLog = (obj: DescribeConnectionAliasPermissionsResult): any => ({
    ...obj,
  });
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

export namespace DescribeIpGroupsRequest {
  export const filterSensitiveLog = (obj: DescribeIpGroupsRequest): any => ({
    ...obj,
  });
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

export namespace WorkspacesIpGroup {
  export const filterSensitiveLog = (obj: WorkspacesIpGroup): any => ({
    ...obj,
  });
}

export interface DescribeIpGroupsResult {
  /**
   * <p>Information about the IP access control groups.</p>
   */
  Result?: WorkspacesIpGroup[];

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;
}

export namespace DescribeIpGroupsResult {
  export const filterSensitiveLog = (obj: DescribeIpGroupsResult): any => ({
    ...obj,
  });
}

export interface DescribeTagsRequest {
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, IP access control groups, and connection aliases.</p>
   */
  ResourceId: string | undefined;
}

export namespace DescribeTagsRequest {
  export const filterSensitiveLog = (obj: DescribeTagsRequest): any => ({
    ...obj,
  });
}

export interface DescribeTagsResult {
  /**
   * <p>The tags.</p>
   */
  TagList?: Tag[];
}

export namespace DescribeTagsResult {
  export const filterSensitiveLog = (obj: DescribeTagsResult): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceBundlesRequest {
  /**
   * <p>The identifiers of the bundles. You cannot combine this parameter with any other filter.</p>
   */
  BundleIds?: string[];

  /**
   * <p>The owner of the bundles. You cannot combine this parameter with any other filter.</p>
   *          <p>Specify <code>AMAZON</code> to describe the bundles provided by AWS or null
   *          to describe the bundles that belong to your account.</p>
   */
  Owner?: string;

  /**
   * <p>The token for the next set of results. (You received this token from a previous call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspaceBundlesRequest {
  export const filterSensitiveLog = (obj: DescribeWorkspaceBundlesRequest): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceBundlesResult {
  /**
   * <p>Information about the bundles.</p>
   */
  Bundles?: WorkspaceBundle[];

  /**
   * <p>The token to use to retrieve the next set of results, or null if there are no more results available.
   *          This token is valid for one day and must be used within that time frame.</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspaceBundlesResult {
  export const filterSensitiveLog = (obj: DescribeWorkspaceBundlesResult): any => ({
    ...obj,
  });
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

export namespace DescribeWorkspaceDirectoriesRequest {
  export const filterSensitiveLog = (obj: DescribeWorkspaceDirectoriesRequest): any => ({
    ...obj,
  });
}

export enum WorkspaceDirectoryType {
  AD_CONNECTOR = "AD_CONNECTOR",
  SIMPLE_AD = "SIMPLE_AD",
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

export namespace SelfservicePermissions {
  export const filterSensitiveLog = (obj: SelfservicePermissions): any => ({
    ...obj,
  });
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
   * <p>Indicates whether users can use Windows clients to access their WorkSpaces. To restrict
   *          WorkSpaces access to trusted devices (also known as managed devices) with valid
   *          certificates, specify a value of <code>TRUST</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/trusted-devices.html">Restrict
   *             WorkSpaces Access to Trusted Devices</a>. </p>
   */
  DeviceTypeWindows?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use macOS clients to access their WorkSpaces. To restrict
   *          WorkSpaces access to trusted devices (also known as managed devices) with valid
   *          certificates, specify a value of <code>TRUST</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/trusted-devices.html">Restrict
   *             WorkSpaces Access to Trusted Devices</a>. </p>
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
   * <p>Indicates whether users can use Android devices to access their WorkSpaces.</p>
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
}

export namespace WorkspaceAccessProperties {
  export const filterSensitiveLog = (obj: WorkspaceAccessProperties): any => ({
    ...obj,
  });
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
   *          deregistered, the <code>DEREGISTERED</code> state is returned very briefly before the directory
   *          metadata is cleaned up, so this state is rarely returned. To confirm that a directory is deregistered,
   *          check for the directory ID by using
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceDirectories.html">
   *             DescribeWorkspaceDirectories</a>. If the directory ID isn't returned, then the directory has been
   *          successfully deregistered.</p>
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
}

export namespace WorkspaceDirectory {
  export const filterSensitiveLog = (obj: WorkspaceDirectory): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceDirectoriesResult {
  /**
   * <p>Information about the directories.</p>
   */
  Directories?: WorkspaceDirectory[];

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspaceDirectoriesResult {
  export const filterSensitiveLog = (obj: DescribeWorkspaceDirectoriesResult): any => ({
    ...obj,
  });
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

export namespace DescribeWorkspaceImagePermissionsRequest {
  export const filterSensitiveLog = (obj: DescribeWorkspaceImagePermissionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the AWS accounts that have been granted permission to use a shared image. For more
 *          information about sharing images, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html">
 *             Share or Unshare a Custom WorkSpaces Image</a>.</p>
 */
export interface ImagePermission {
  /**
   * <p>The identifier of the AWS account that an image has been shared with.</p>
   */
  SharedAccountId?: string;
}

export namespace ImagePermission {
  export const filterSensitiveLog = (obj: ImagePermission): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceImagePermissionsResult {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;

  /**
   * <p>The identifiers of the AWS accounts that the image has been shared with.</p>
   */
  ImagePermissions?: ImagePermission[];

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more
   *          results are available.</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspaceImagePermissionsResult {
  export const filterSensitiveLog = (obj: DescribeWorkspaceImagePermissionsResult): any => ({
    ...obj,
  });
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

export namespace DescribeWorkspaceImagesRequest {
  export const filterSensitiveLog = (obj: DescribeWorkspaceImagesRequest): any => ({
    ...obj,
  });
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

export namespace OperatingSystem {
  export const filterSensitiveLog = (obj: OperatingSystem): any => ({
    ...obj,
  });
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
   * <p>The date when the image was created. If the image has been shared, the AWS account
   *          that the image has been shared with sees the original creation date of the image.</p>
   */
  Created?: Date;

  /**
   * <p>The identifier of the AWS account that owns the image.</p>
   */
  OwnerAccountId?: string;
}

export namespace WorkspaceImage {
  export const filterSensitiveLog = (obj: WorkspaceImage): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceImagesResult {
  /**
   * <p>Information about the images.</p>
   */
  Images?: WorkspaceImage[];

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspaceImagesResult {
  export const filterSensitiveLog = (obj: DescribeWorkspaceImagesResult): any => ({
    ...obj,
  });
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

export namespace DescribeWorkspacesRequest {
  export const filterSensitiveLog = (obj: DescribeWorkspacesRequest): any => ({
    ...obj,
  });
}

export interface DescribeWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces.</p>
   *          <p>Because <a>CreateWorkspaces</a> is an asynchronous operation, some of the
   *          returned information could be incomplete.</p>
   */
  Workspaces?: Workspace[];

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspacesResult {
  export const filterSensitiveLog = (obj: DescribeWorkspacesResult): any => ({
    ...obj,
  });
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

export namespace DescribeWorkspacesConnectionStatusRequest {
  export const filterSensitiveLog = (obj: DescribeWorkspacesConnectionStatusRequest): any => ({
    ...obj,
  });
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

export namespace WorkspaceConnectionStatus {
  export const filterSensitiveLog = (obj: WorkspaceConnectionStatus): any => ({
    ...obj,
  });
}

export interface DescribeWorkspacesConnectionStatusResult {
  /**
   * <p>Information about the connection status of the WorkSpace.</p>
   */
  WorkspacesConnectionStatus?: WorkspaceConnectionStatus[];

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspacesConnectionStatusResult {
  export const filterSensitiveLog = (obj: DescribeWorkspacesConnectionStatusResult): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceSnapshotsRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace DescribeWorkspaceSnapshotsRequest {
  export const filterSensitiveLog = (obj: DescribeWorkspaceSnapshotsRequest): any => ({
    ...obj,
  });
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

export namespace Snapshot {
  export const filterSensitiveLog = (obj: Snapshot): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceSnapshotsResult {
  /**
   * <p>Information about the snapshots that can be used to rebuild a WorkSpace. These snapshots include
   *          the user volume.</p>
   */
  RebuildSnapshots?: Snapshot[];

  /**
   * <p>Information about the snapshots that can be used to restore a WorkSpace. These snapshots
   *          include both the root volume and the user volume.</p>
   */
  RestoreSnapshots?: Snapshot[];
}

export namespace DescribeWorkspaceSnapshotsResult {
  export const filterSensitiveLog = (obj: DescribeWorkspaceSnapshotsResult): any => ({
    ...obj,
  });
}

export interface DisassociateConnectionAliasRequest {
  /**
   * <p>The identifier of the connection alias to disassociate.</p>
   */
  AliasId: string | undefined;
}

export namespace DisassociateConnectionAliasRequest {
  export const filterSensitiveLog = (obj: DisassociateConnectionAliasRequest): any => ({
    ...obj,
  });
}

export interface DisassociateConnectionAliasResult {}

export namespace DisassociateConnectionAliasResult {
  export const filterSensitiveLog = (obj: DisassociateConnectionAliasResult): any => ({
    ...obj,
  });
}

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

export namespace DisassociateIpGroupsRequest {
  export const filterSensitiveLog = (obj: DisassociateIpGroupsRequest): any => ({
    ...obj,
  });
}

export interface DisassociateIpGroupsResult {}

export namespace DisassociateIpGroupsResult {
  export const filterSensitiveLog = (obj: DisassociateIpGroupsResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a WorkSpace that could not be rebooted.
 *          (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated
 *          (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).</p>
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

export namespace FailedWorkspaceChangeRequest {
  export const filterSensitiveLog = (obj: FailedWorkspaceChangeRequest): any => ({
    ...obj,
  });
}

export enum WorkspaceImageIngestionProcess {
  BYOL_GRAPHICS = "BYOL_GRAPHICS",
  BYOL_GRAPHICSPRO = "BYOL_GRAPHICSPRO",
  BYOL_REGULAR = "BYOL_REGULAR",
  BYOL_REGULAR_WSP = "BYOL_REGULAR_WSP",
}

export interface ImportWorkspaceImageRequest {
  /**
   * <p>The identifier of the EC2 image.</p>
   */
  Ec2ImageId: string | undefined;

  /**
   * <p>The ingestion process to be used when importing the image, depending on which protocol
   *          you want to use for your BYOL Workspace image, either PCoIP or WorkSpaces Streaming Protocol
   *          (WSP). To use WSP, specify a value that ends in <code>_WSP</code>. To use PCoIP, specify a value
   *          that does not end in <code>_WSP</code>. </p>
   *
   *          <p>For non-GPU-enabled bundles (bundles other than Graphics or GraphicsPro), specify
   *          <code>BYOL_REGULAR</code> or <code>BYOL_REGULAR_WSP</code>, depending on the protocol.</p>
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
   *          BYOL images. For more information about subscribing to Office for BYOL images, see
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">
   *             Bring Your Own Windows Desktop Licenses</a>.</p>
   *
   *          <note>
   *             <p>Although this parameter is an array, only one item is allowed at this time.</p>
   *          </note>
   */
  Applications?: (Application | string)[];
}

export namespace ImportWorkspaceImageRequest {
  export const filterSensitiveLog = (obj: ImportWorkspaceImageRequest): any => ({
    ...obj,
  });
}

export interface ImportWorkspaceImageResult {
  /**
   * <p>The identifier of the WorkSpace image.</p>
   */
  ImageId?: string;
}

export namespace ImportWorkspaceImageResult {
  export const filterSensitiveLog = (obj: ImportWorkspaceImageResult): any => ({
    ...obj,
  });
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

export namespace ListAvailableManagementCidrRangesRequest {
  export const filterSensitiveLog = (obj: ListAvailableManagementCidrRangesRequest): any => ({
    ...obj,
  });
}

export interface ListAvailableManagementCidrRangesResult {
  /**
   * <p>The list of available IP address ranges, specified as IPv4 CIDR blocks.</p>
   */
  ManagementCidrRanges?: string[];

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;
}

export namespace ListAvailableManagementCidrRangesResult {
  export const filterSensitiveLog = (obj: ListAvailableManagementCidrRangesResult): any => ({
    ...obj,
  });
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

export namespace MigrateWorkspaceRequest {
  export const filterSensitiveLog = (obj: MigrateWorkspaceRequest): any => ({
    ...obj,
  });
}

export interface MigrateWorkspaceResult {
  /**
   * <p>The original identifier of the WorkSpace that is being migrated.</p>
   */
  SourceWorkspaceId?: string;

  /**
   * <p>The new identifier of the WorkSpace that is being migrated. If the migration does not succeed,
   *          the target WorkSpace ID will not be used, and the WorkSpace will still have the original WorkSpace ID.</p>
   */
  TargetWorkspaceId?: string;
}

export namespace MigrateWorkspaceResult {
  export const filterSensitiveLog = (obj: MigrateWorkspaceResult): any => ({
    ...obj,
  });
}

/**
 * <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 */
export interface OperationInProgressException extends __SmithyException, $MetadataBearer {
  name: "OperationInProgressException";
  $fault: "client";
  message?: string;
}

export namespace OperationInProgressException {
  export const filterSensitiveLog = (obj: OperationInProgressException): any => ({
    ...obj,
  });
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

export namespace ModifyAccountRequest {
  export const filterSensitiveLog = (obj: ModifyAccountRequest): any => ({
    ...obj,
  });
}

export interface ModifyAccountResult {}

export namespace ModifyAccountResult {
  export const filterSensitiveLog = (obj: ModifyAccountResult): any => ({
    ...obj,
  });
}

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

export namespace ModifyClientPropertiesRequest {
  export const filterSensitiveLog = (obj: ModifyClientPropertiesRequest): any => ({
    ...obj,
  });
}

export interface ModifyClientPropertiesResult {}

export namespace ModifyClientPropertiesResult {
  export const filterSensitiveLog = (obj: ModifyClientPropertiesResult): any => ({
    ...obj,
  });
}

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

export namespace ModifySelfservicePermissionsRequest {
  export const filterSensitiveLog = (obj: ModifySelfservicePermissionsRequest): any => ({
    ...obj,
  });
}

export interface ModifySelfservicePermissionsResult {}

export namespace ModifySelfservicePermissionsResult {
  export const filterSensitiveLog = (obj: ModifySelfservicePermissionsResult): any => ({
    ...obj,
  });
}

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

export namespace ModifyWorkspaceAccessPropertiesRequest {
  export const filterSensitiveLog = (obj: ModifyWorkspaceAccessPropertiesRequest): any => ({
    ...obj,
  });
}

export interface ModifyWorkspaceAccessPropertiesResult {}

export namespace ModifyWorkspaceAccessPropertiesResult {
  export const filterSensitiveLog = (obj: ModifyWorkspaceAccessPropertiesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the default properties that are used for creating WorkSpaces. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory
 *             Details for Your WorkSpaces</a>. </p>
 */
export interface WorkspaceCreationProperties {
  /**
   * <p>Indicates whether Amazon WorkDocs is enabled for your WorkSpaces.</p>
   *
   *          <note>
   *             <p>If WorkDocs is already enabled for a WorkSpaces directory and you disable it, new WorkSpaces launched in the
   *             directory will not have WorkDocs enabled. However, WorkDocs remains enabled for any existing WorkSpaces, unless
   *             you either disable users' access to WorkDocs or you delete the WorkDocs site. To disable users' access to WorkDocs,
   *             see <a href="https://docs.aws.amazon.com/workdocs/latest/adminguide/inactive-user.html">Disabling Users</a> in the
   *             <i>Amazon WorkDocs Administration Guide</i>. To delete a WorkDocs site, see
   *             <a href="https://docs.aws.amazon.com/workdocs/latest/adminguide/manage-sites.html">Deleting a Site</a> in the
   *             <i>Amazon WorkDocs Administration Guide</i>.</p>
   *
   *             <p>If you enable WorkDocs on a directory that already has existing WorkSpaces, the existing WorkSpaces and any
   *          new WorkSpaces that are launched in the directory will have WorkDocs enabled.</p>
   *          </note>
   */
  EnableWorkDocs?: boolean;

  /**
   * <p>Indicates whether internet access is enabled for your WorkSpaces.</p>
   */
  EnableInternetAccess?: boolean;

  /**
   * <p>The default organizational unit (OU) for your WorkSpaces directories. This string must be the full Lightweight
   *          Directory Access Protocol (LDAP) distinguished name for the target domain and OU. It must be in the form
   *          <code>"OU=<i>value</i>,DC=<i>value</i>,DC=<i>value</i>"</code>,
   *          where <i>value</i> is any string of characters, and the number of domain components (DCs) is
   *          two or more. For example, <code>OU=WorkSpaces_machines,DC=machines,DC=example,DC=com</code>. </p>
   *
   *          <important>
   *             <ul>
   *                <li>
   *                   <p>To avoid errors, certain characters in the distinguished name must be escaped. For more information,
   *                   see <a href="https://docs.microsoft.com/previous-versions/windows/desktop/ldap/distinguished-names">
   *                      Distinguished Names</a> in the Microsoft documentation.</p>
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

export namespace WorkspaceCreationProperties {
  export const filterSensitiveLog = (obj: WorkspaceCreationProperties): any => ({
    ...obj,
  });
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

export namespace ModifyWorkspaceCreationPropertiesRequest {
  export const filterSensitiveLog = (obj: ModifyWorkspaceCreationPropertiesRequest): any => ({
    ...obj,
  });
}

export interface ModifyWorkspaceCreationPropertiesResult {}

export namespace ModifyWorkspaceCreationPropertiesResult {
  export const filterSensitiveLog = (obj: ModifyWorkspaceCreationPropertiesResult): any => ({
    ...obj,
  });
}

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

export namespace ModifyWorkspacePropertiesRequest {
  export const filterSensitiveLog = (obj: ModifyWorkspacePropertiesRequest): any => ({
    ...obj,
  });
}

export interface ModifyWorkspacePropertiesResult {}

export namespace ModifyWorkspacePropertiesResult {
  export const filterSensitiveLog = (obj: ModifyWorkspacePropertiesResult): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration of this WorkSpace is not supported for this operation. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/required-service-components.html">Required
 *             Configuration and Service Components for WorkSpaces </a>.</p>
 */
export interface UnsupportedWorkspaceConfigurationException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedWorkspaceConfigurationException";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedWorkspaceConfigurationException {
  export const filterSensitiveLog = (obj: UnsupportedWorkspaceConfigurationException): any => ({
    ...obj,
  });
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

export namespace ModifyWorkspaceStateRequest {
  export const filterSensitiveLog = (obj: ModifyWorkspaceStateRequest): any => ({
    ...obj,
  });
}

export interface ModifyWorkspaceStateResult {}

export namespace ModifyWorkspaceStateResult {
  export const filterSensitiveLog = (obj: ModifyWorkspaceStateResult): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the information used to reboot a WorkSpace.</p>
 */
export interface RebootRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace RebootRequest {
  export const filterSensitiveLog = (obj: RebootRequest): any => ({
    ...obj,
  });
}

export interface RebootWorkspacesRequest {
  /**
   * <p>The WorkSpaces to reboot. You can specify up to 25 WorkSpaces.</p>
   */
  RebootWorkspaceRequests: RebootRequest[] | undefined;
}

export namespace RebootWorkspacesRequest {
  export const filterSensitiveLog = (obj: RebootWorkspacesRequest): any => ({
    ...obj,
  });
}

export interface RebootWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be rebooted.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace RebootWorkspacesResult {
  export const filterSensitiveLog = (obj: RebootWorkspacesResult): any => ({
    ...obj,
  });
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

export namespace RebuildRequest {
  export const filterSensitiveLog = (obj: RebuildRequest): any => ({
    ...obj,
  });
}

export interface RebuildWorkspacesRequest {
  /**
   * <p>The WorkSpace to rebuild. You can specify a single WorkSpace.</p>
   */
  RebuildWorkspaceRequests: RebuildRequest[] | undefined;
}

export namespace RebuildWorkspacesRequest {
  export const filterSensitiveLog = (obj: RebuildWorkspacesRequest): any => ({
    ...obj,
  });
}

export interface RebuildWorkspacesResult {
  /**
   * <p>Information about the WorkSpace that could not be rebuilt.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace RebuildWorkspacesResult {
  export const filterSensitiveLog = (obj: RebuildWorkspacesResult): any => ({
    ...obj,
  });
}

export interface RegisterWorkspaceDirectoryRequest {
  /**
   * <p>The identifier of the directory. You cannot register a directory if it does not have a status
   *          of Active. If the directory does not have a status of Active, you will receive an
   *          InvalidResourceStateException error. If you have already registered the maximum number of directories
   *          that you can register with Amazon WorkSpaces, you will receive a ResourceLimitExceededException error.
   *          Deregister directories that you are not using for WorkSpaces, and try again.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>The identifiers of the subnets for your virtual private cloud (VPC). Make sure that the subnets
   *          are in supported Availability Zones. The subnets must also be in separate Availability Zones. If these
   *          conditions are not met, you will receive an OperationNotSupportedException error.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Indicates whether Amazon WorkDocs is enabled or disabled. If you have enabled this parameter and
   *          WorkDocs is not available in the Region, you will receive an OperationNotSupportedException error. Set
   *          <code>EnableWorkDocs</code> to disabled, and try again.</p>
   */
  EnableWorkDocs: boolean | undefined;

  /**
   * <p>Indicates whether self-service capabilities are enabled or disabled.</p>
   */
  EnableSelfService?: boolean;

  /**
   * <p>Indicates whether your WorkSpace directory is dedicated or shared. To use Bring Your Own
   *          License (BYOL) images, this value must be set to <code>DEDICATED</code> and your AWS account must be
   *          enabled for BYOL. If your account has not been enabled for BYOL, you will receive an
   *          InvalidParameterValuesException error. For more information about BYOL images, see
   *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows Desktop Images</a>.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>The tags associated with the directory.</p>
   */
  Tags?: Tag[];
}

export namespace RegisterWorkspaceDirectoryRequest {
  export const filterSensitiveLog = (obj: RegisterWorkspaceDirectoryRequest): any => ({
    ...obj,
  });
}

export interface RegisterWorkspaceDirectoryResult {}

export namespace RegisterWorkspaceDirectoryResult {
  export const filterSensitiveLog = (obj: RegisterWorkspaceDirectoryResult): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration of this network is not supported for this operation, or your network configuration
 *          conflicts with the Amazon WorkSpaces management network IP range. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html">
 *             Configure a VPC for Amazon WorkSpaces</a>.</p>
 */
export interface UnsupportedNetworkConfigurationException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedNetworkConfigurationException";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedNetworkConfigurationException {
  export const filterSensitiveLog = (obj: UnsupportedNetworkConfigurationException): any => ({
    ...obj,
  });
}

/**
 * <p>The workspaces_DefaultRole role could not be found. If this is the first time you are registering a directory, you
 *          will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role">Creating the workspaces_DefaultRole Role</a>.</p>
 */
export interface WorkspacesDefaultRoleNotFoundException extends __SmithyException, $MetadataBearer {
  name: "WorkspacesDefaultRoleNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace WorkspacesDefaultRoleNotFoundException {
  export const filterSensitiveLog = (obj: WorkspacesDefaultRoleNotFoundException): any => ({
    ...obj,
  });
}

export interface RestoreWorkspaceRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace RestoreWorkspaceRequest {
  export const filterSensitiveLog = (obj: RestoreWorkspaceRequest): any => ({
    ...obj,
  });
}

export interface RestoreWorkspaceResult {}

export namespace RestoreWorkspaceResult {
  export const filterSensitiveLog = (obj: RestoreWorkspaceResult): any => ({
    ...obj,
  });
}

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

export namespace RevokeIpRulesRequest {
  export const filterSensitiveLog = (obj: RevokeIpRulesRequest): any => ({
    ...obj,
  });
}

export interface RevokeIpRulesResult {}

export namespace RevokeIpRulesResult {
  export const filterSensitiveLog = (obj: RevokeIpRulesResult): any => ({
    ...obj,
  });
}

/**
 * <p>Information used to start a WorkSpace.</p>
 */
export interface StartRequest {
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;
}

export namespace StartRequest {
  export const filterSensitiveLog = (obj: StartRequest): any => ({
    ...obj,
  });
}

export interface StartWorkspacesRequest {
  /**
   * <p>The WorkSpaces to start. You can specify up to 25 WorkSpaces.</p>
   */
  StartWorkspaceRequests: StartRequest[] | undefined;
}

export namespace StartWorkspacesRequest {
  export const filterSensitiveLog = (obj: StartWorkspacesRequest): any => ({
    ...obj,
  });
}

export interface StartWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be started.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace StartWorkspacesResult {
  export const filterSensitiveLog = (obj: StartWorkspacesResult): any => ({
    ...obj,
  });
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

export namespace StopRequest {
  export const filterSensitiveLog = (obj: StopRequest): any => ({
    ...obj,
  });
}

export interface StopWorkspacesRequest {
  /**
   * <p>The WorkSpaces to stop. You can specify up to 25 WorkSpaces.</p>
   */
  StopWorkspaceRequests: StopRequest[] | undefined;
}

export namespace StopWorkspacesRequest {
  export const filterSensitiveLog = (obj: StopWorkspacesRequest): any => ({
    ...obj,
  });
}

export interface StopWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be stopped.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace StopWorkspacesResult {
  export const filterSensitiveLog = (obj: StopWorkspacesResult): any => ({
    ...obj,
  });
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

export namespace TerminateRequest {
  export const filterSensitiveLog = (obj: TerminateRequest): any => ({
    ...obj,
  });
}

export interface TerminateWorkspacesRequest {
  /**
   * <p>The WorkSpaces to terminate. You can specify up to 25 WorkSpaces.</p>
   */
  TerminateWorkspaceRequests: TerminateRequest[] | undefined;
}

export namespace TerminateWorkspacesRequest {
  export const filterSensitiveLog = (obj: TerminateWorkspacesRequest): any => ({
    ...obj,
  });
}

export interface TerminateWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that could not be terminated.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace TerminateWorkspacesResult {
  export const filterSensitiveLog = (obj: TerminateWorkspacesResult): any => ({
    ...obj,
  });
}

export interface UpdateConnectionAliasPermissionRequest {
  /**
   * <p>The identifier of the connection alias that you want to update permissions for.</p>
   */
  AliasId: string | undefined;

  /**
   * <p>Indicates whether to share or unshare the connection alias with the specified AWS account.</p>
   */
  ConnectionAliasPermission: ConnectionAliasPermission | undefined;
}

export namespace UpdateConnectionAliasPermissionRequest {
  export const filterSensitiveLog = (obj: UpdateConnectionAliasPermissionRequest): any => ({
    ...obj,
  });
}

export interface UpdateConnectionAliasPermissionResult {}

export namespace UpdateConnectionAliasPermissionResult {
  export const filterSensitiveLog = (obj: UpdateConnectionAliasPermissionResult): any => ({
    ...obj,
  });
}

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

export namespace UpdateRulesOfIpGroupRequest {
  export const filterSensitiveLog = (obj: UpdateRulesOfIpGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateRulesOfIpGroupResult {}

export namespace UpdateRulesOfIpGroupResult {
  export const filterSensitiveLog = (obj: UpdateRulesOfIpGroupResult): any => ({
    ...obj,
  });
}

export interface UpdateWorkspaceImagePermissionRequest {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The permission to copy the image. This permission can be revoked only after an image
   *       has been shared.</p>
   */
  AllowCopyImage: boolean | undefined;

  /**
   * <p>The identifier of the AWS account to share or unshare the image with.</p>
   *
   *          <important>
   *             <p>Before sharing the image, confirm that you are sharing to the correct AWS account ID.</p>
   *          </important>
   */
  SharedAccountId: string | undefined;
}

export namespace UpdateWorkspaceImagePermissionRequest {
  export const filterSensitiveLog = (obj: UpdateWorkspaceImagePermissionRequest): any => ({
    ...obj,
  });
}

export interface UpdateWorkspaceImagePermissionResult {}

export namespace UpdateWorkspaceImagePermissionResult {
  export const filterSensitiveLog = (obj: UpdateWorkspaceImagePermissionResult): any => ({
    ...obj,
  });
}
