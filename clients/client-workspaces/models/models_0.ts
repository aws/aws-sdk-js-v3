import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
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
   * <p>The text of the error message that is returned if the configuration of BYOL cannot be
   *          modified.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The state of the modification to the configuration of BYOL.</p>
   */
  ModificationState?: DedicatedTenancyModificationStateEnum | string;

  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
   *          interface used for the account.</p>
   */
  DedicatedTenancyManagementCidrRange?: string;

  /**
   * <p>The error code that is returned if the configuration of BYOL cannot be modified.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The timestamp when the modification of the BYOL configuration was started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The status of BYOL (whether BYOL is being enabled or disabled).</p>
   */
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | string;
}

export namespace AccountModification {
  export const filterSensitiveLog = (obj: AccountModification): any => ({
    ...obj,
  });
}

export interface AssociateIpGroupsRequest {
  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   */
  GroupIds: string[] | undefined;

  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;
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
   * <p>The rules to add to the group.</p>
   */
  UserRules: IpRuleItem[] | undefined;

  /**
   * <p>The identifier of the group.</p>
   */
  GroupId: string | undefined;
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
   * <p>The image identifier of the bundle.</p>
   */
  ImageId?: string;

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
   * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces Bundles</a>.</p>
   */
  ComputeType?: ComputeType;

  /**
   * <p>The size of the user storage.</p>
   */
  UserStorage?: UserStorage;

  /**
   * <p>The bundle identifier.</p>
   */
  BundleId?: string;

  /**
   * <p>The last time that the bundle was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The name of the bundle.</p>
   */
  Name?: string;

  /**
   * <p>The size of the root volume.</p>
   */
  RootStorage?: RootStorage;
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
   * <p>The value of the tag.</p>
   */
  Value?: string;

  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;
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
   * <p>The identifier of the source image.</p>
   */
  SourceImageId: string | undefined;

  /**
   * <p>The tags for the image.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The identifier of the source Region.</p>
   */
  SourceRegion: string | undefined;

  /**
   * <p>A description of the image.</p>
   */
  Description?: string;
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

export interface CreateIpGroupRequest {
  /**
   * <p>The rules to add to the group.</p>
   */
  UserRules?: IpRuleItem[];

  /**
   * <p>The name of the group.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The description of the group.</p>
   */
  GroupDesc?: string;
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
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags. If you want to add new tags
   *          to a set of existing tags, you must submit all of the existing tags along with the new ones.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, and IP access control groups.</p>
   */
  ResourceId: string | undefined;
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
   * <p>The time after a user logs off when WorkSpaces are automatically stopped. Configured in 60-minute intervals.</p>
   */
  RunningModeAutoStopTimeoutInMinutes?: number;

  /**
   * <p>The size of the user storage. For important information about how to modify the size of the root and user volumes, see
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a WorkSpace</a>.</p>
   */
  UserVolumeSizeGib?: number;

  /**
   * <p>The size of the root volume. For important information about how to modify the size of the root and user volumes, see
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">Modify a WorkSpace</a>.</p>
   */
  RootVolumeSizeGib?: number;

  /**
   * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces
   *          Bundles</a>.</p>
   */
  ComputeTypeName?: Compute | string;

  /**
   * <p>The running mode. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html">Manage the WorkSpace Running
   *             Mode</a>.</p>
   */
  RunningMode?: RunningMode | string;
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
   * <p>The symmetric AWS KMS customer master key (CMK) used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric CMKs.</p>
   */
  VolumeEncryptionKey?: string;

  /**
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   */
  RootVolumeEncryptionEnabled?: boolean;

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
   * <p>The tags for the WorkSpace.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The WorkSpace properties.</p>
   */
  WorkspaceProperties?: WorkspaceProperties;

  /**
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   */
  UserVolumeEncryptionEnabled?: boolean;

  /**
   * <p>The identifier of the AWS Directory Service directory for the WorkSpace. You can use
   *             <a>DescribeWorkspaceDirectories</a> to list the available directories.</p>
   */
  DirectoryId: string | undefined;
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
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          created.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   */
  ErrorCode?: string;
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
   * <p>The user for the WorkSpace.</p>
   */
  UserName?: string;

  /**
   * <p>The identifier of the subnet for the WorkSpace.</p>
   */
  SubnetId?: string;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   */
  ErrorCode?: string;

  /**
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   */
  UserVolumeEncryptionEnabled?: boolean;

  /**
   * <p>The modification states of the WorkSpace.</p>
   */
  ModificationStates?: ModificationState[];

  /**
   * <p>The symmetric AWS KMS customer master key (CMK) used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric CMKs.</p>
   */
  VolumeEncryptionKey?: string;

  /**
   * <p>The operational state of the WorkSpace.</p>
   */
  State?: WorkspaceState | string;

  /**
   * <p>The properties of the WorkSpace.</p>
   */
  WorkspaceProperties?: WorkspaceProperties;

  /**
   * <p>The IP address of the WorkSpace.</p>
   */
  IpAddress?: string;

  /**
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   */
  RootVolumeEncryptionEnabled?: boolean;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          created.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The identifier of the bundle used to create the WorkSpace.</p>
   */
  BundleId?: string;

  /**
   * <p>The identifier of the AWS Directory Service directory for the WorkSpace.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * <p>The name of the WorkSpace, as seen by the operating system.</p>
   */
  ComputerName?: string;
}

export namespace Workspace {
  export const filterSensitiveLog = (obj: Workspace): any => ({
    ...obj,
  });
}

export interface CreateWorkspacesResult {
  /**
   * <p>Information about the WorkSpaces that were created.</p>
   *          <p>Because this operation is asynchronous, the identifier returned is not immediately
   *          available for use with other operations. For example, if you call <a>DescribeWorkspaces</a> before the WorkSpace is created, the information returned
   *          can be incomplete.</p>
   */
  PendingRequests?: Workspace[];

  /**
   * <p>Information about the WorkSpaces that could not be created.</p>
   */
  FailedRequests?: FailedCreateWorkspaceRequest[];
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
   * <p>The identifier of the default security group to apply to WorkSpaces when they are created.
   *          For more information, see
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-security-groups.html">
   *             Security Groups for Your WorkSpaces</a>.</p>
   */
  CustomSecurityGroupId?: string;

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
   * <p>Specifies whether the directory is enabled for Amazon WorkDocs.</p>
   */
  EnableWorkDocs?: boolean;

  /**
   * <p>The organizational unit (OU) in the directory for the WorkSpace machine accounts.</p>
   */
  DefaultOu?: string;

  /**
   * <p>Specifies whether maintenance mode is enabled for WorkSpaces. For more information, see
   *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
   *             Maintenance</a>.</p>
   */
  EnableMaintenanceMode?: boolean;

  /**
   * <p>Specifies whether WorkSpace users are local administrators on their WorkSpaces.</p>
   */
  UserEnabledAsLocalAdministrator?: boolean;
}

export namespace DefaultWorkspaceCreationProperties {
  export const filterSensitiveLog = (obj: DefaultWorkspaceCreationProperties): any => ({
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

export interface DeleteTagsRequest {
  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, and IP access control groups.</p>
   */
  ResourceId: string | undefined;
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
   * <p>The IP address range, specified as an IPv4 CIDR block, used for the management network
   *          interface.</p>
   *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
   *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
   *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
   */
  DedicatedTenancyManagementCidrRange?: string;

  /**
   * <p>The status of BYOL (whether BYOL is enabled or disabled).</p>
   */
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | string;
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

export interface DescribeIpGroupsRequest {
  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   */
  GroupIds?: string[];

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
   * <p>The rules.</p>
   */
  userRules?: IpRuleItem[];

  /**
   * <p>The name of the group.</p>
   */
  groupName?: string;

  /**
   * <p>The description of the group.</p>
   */
  groupDesc?: string;
}

export namespace WorkspacesIpGroup {
  export const filterSensitiveLog = (obj: WorkspacesIpGroup): any => ({
    ...obj,
  });
}

export interface DescribeIpGroupsResult {
  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the IP access control groups.</p>
   */
  Result?: WorkspacesIpGroup[];
}

export namespace DescribeIpGroupsResult {
  export const filterSensitiveLog = (obj: DescribeIpGroupsResult): any => ({
    ...obj,
  });
}

export interface DescribeTagsRequest {
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, and IP access control groups.</p>
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
   * <p>The token for the next set of results. (You received this token from a previous call.)</p>
   */
  NextToken?: string;

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
   * <p>The maximum number of directories to return.</p>
   */
  Limit?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifiers of the directories. If the value is null, all directories are
   *          retrieved.</p>
   */
  DirectoryIds?: string[];
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
   * <p>Specifies whether users can switch the running mode of their WorkSpace.</p>
   */
  SwitchRunningMode?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can rebuild the operating system of a WorkSpace to its original
   *          state.</p>
   */
  RebuildWorkspace?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can change the compute type (bundle) for their WorkSpace.</p>
   */
  ChangeComputeType?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can restart their WorkSpace.</p>
   */
  RestartWorkspace?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can increase the volume size of the drives on their
   *          WorkSpace.</p>
   */
  IncreaseVolumeSize?: ReconnectEnum | string;
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
   * <p>Indicates whether users can use zero client devices to access their WorkSpaces.</p>
   */
  DeviceTypeZeroClient?: AccessPropertyValue | string;

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
   * <p>Indicates whether users can access their WorkSpaces through a web browser.</p>
   */
  DeviceTypeWeb?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use macOS clients to access their WorkSpaces. To restrict
   *          WorkSpaces access to trusted devices (also known as managed devices) with valid
   *          certificates, specify a value of <code>TRUST</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/trusted-devices.html">Restrict
   *             WorkSpaces Access to Trusted Devices</a>. </p>
   */
  DeviceTypeOsx?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use Windows clients to access their WorkSpaces. To restrict
   *          WorkSpaces access to trusted devices (also known as managed devices) with valid
   *          certificates, specify a value of <code>TRUST</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/trusted-devices.html">Restrict
   *             WorkSpaces Access to Trusted Devices</a>. </p>
   */
  DeviceTypeWindows?: AccessPropertyValue | string;
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
   * <p>The name of the directory.</p>
   */
  DirectoryName?: string;

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
   * <p>Specifies whether the directory is dedicated or shared. To use Bring Your Own License
   *          (BYOL), this value must be set to <code>DEDICATED</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring
   *             Your Own Windows Desktop Images</a>.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The devices and operating systems that users can use to access WorkSpaces.</p>
   */
  WorkspaceAccessProperties?: WorkspaceAccessProperties;

  /**
   * <p>The default self-service permissions for WorkSpaces in the directory.</p>
   */
  SelfservicePermissions?: SelfservicePermissions;

  /**
   * <p>The registration code for the directory. This is the code that users enter in their
   *          Amazon WorkSpaces client application to connect to the directory.</p>
   */
  RegistrationCode?: string;

  /**
   * <p>The IP addresses of the DNS servers for the directory.</p>
   */
  DnsIpAddresses?: string[];

  /**
   * <p>The identifier of the security group that is assigned to new WorkSpaces.</p>
   */
  WorkspaceSecurityGroupId?: string;

  /**
   * <p>The directory type.</p>
   */
  DirectoryType?: WorkspaceDirectoryType | string;

  /**
   * <p>The default creation properties for all WorkSpaces in the directory.</p>
   */
  WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;

  /**
   * <p>The state of the directory's registration with Amazon WorkSpaces.</p>
   */
  State?: WorkspaceDirectoryState | string;

  /**
   * <p>The identifiers of the IP access control groups associated with the directory.</p>
   */
  ipGroupIds?: string[];

  /**
   * <p>The directory alias.</p>
   */
  Alias?: string;

  /**
   * <p>The identifiers of the subnets used with the directory.</p>
   */
  SubnetIds?: string[];
}

export namespace WorkspaceDirectory {
  export const filterSensitiveLog = (obj: WorkspaceDirectory): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceDirectoriesResult {
  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the directories.</p>
   */
  Directories?: WorkspaceDirectory[];
}

export namespace DescribeWorkspaceDirectoriesResult {
  export const filterSensitiveLog = (obj: DescribeWorkspaceDirectoriesResult): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceImagePermissionsRequest {
  /**
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;
}

export namespace DescribeWorkspaceImagePermissionsRequest {
  export const filterSensitiveLog = (obj: DescribeWorkspaceImagePermissionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the AWS accounts that have been granted permission to use a shared image.</p>
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
   * <p>The identifiers of the AWS accounts that the image has been shared with.</p>
   */
  ImagePermissions?: ImagePermission[];

  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;

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
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The type (owned or shared) of the image.</p>
   */
  ImageType?: ImageType | string;
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
   * <p>The name of the image.</p>
   */
  Name?: string;

  /**
   * <p>The error code that is returned for the image.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;

  /**
   * <p>Specifies whether the image is running on dedicated hardware. When Bring Your Own
   *          License (BYOL) is enabled, this value is set to <code>DEDICATED</code>. For more
   *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows
   *             Desktop Images</a>.</p>
   */
  RequiredTenancy?: WorkspaceImageRequiredTenancy | string;

  /**
   * <p>The status of the image.</p>
   */
  State?: WorkspaceImageState | string;

  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the AWS account that owns the image.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The operating system that the image is running. </p>
   */
  OperatingSystem?: OperatingSystem;

  /**
   * <p>The date when the image was created. If the image has been shared, the AWS account
   *          that the image has been shared with sees the original creation date of the image.</p>
   */
  Created?: Date;

  /**
   * <p>The text of the error message that is returned for the image.</p>
   */
  ErrorMessage?: string;
}

export namespace WorkspaceImage {
  export const filterSensitiveLog = (obj: WorkspaceImage): any => ({
    ...obj,
  });
}

export interface DescribeWorkspaceImagesResult {
  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the images.</p>
   */
  Images?: WorkspaceImage[];
}

export namespace DescribeWorkspaceImagesResult {
  export const filterSensitiveLog = (obj: DescribeWorkspaceImagesResult): any => ({
    ...obj,
  });
}

export interface DescribeWorkspacesRequest {
  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the directory user. You must specify this parameter with
   *             <code>DirectoryId</code>.</p>
   */
  UserName?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

  /**
   * <p>The identifier of the bundle. All WorkSpaces that are created from this bundle are
   *          retrieved. You cannot combine this parameter with any other filter.</p>
   */
  BundleId?: string;

  /**
   * <p>The identifier of the directory. In addition, you can optionally specify a specific
   *          directory user (see <code>UserName</code>). You cannot combine this parameter with any
   *          other filter.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The identifiers of the WorkSpaces. You cannot combine this parameter with any other
   *          filter.</p>
   *          <p>Because the <a>CreateWorkspaces</a> operation is asynchronous, the identifier
   *          it returns is not immediately available. If you immediately call <a>DescribeWorkspaces</a> with this identifier, no information is returned.</p>
   */
  WorkspaceIds?: string[];
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
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The identifiers of the WorkSpaces. You can specify up to 25 WorkSpaces.</p>
   */
  WorkspaceIds?: string[];
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
   * <p>The timestamp of the last known user connection.</p>
   */
  LastKnownUserConnectionTimestamp?: Date;

  /**
   * <p>The timestamp of the connection status check.</p>
   */
  ConnectionStateCheckTimestamp?: Date;
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

export interface DisassociateIpGroupsRequest {
  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   */
  GroupIds: string[] | undefined;

  /**
   * <p>The identifier of the directory.</p>
   */
  DirectoryId: string | undefined;
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
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          rebooted.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be rebooted.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;
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
}

export interface ImportWorkspaceImageRequest {
  /**
   * <p>The identifier of the EC2 image.</p>
   */
  Ec2ImageId: string | undefined;

  /**
   * <p>The description of the WorkSpace image.</p>
   */
  ImageDescription: string | undefined;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The ingestion process to be used when importing the image.</p>
   */
  IngestionProcess: WorkspaceImageIngestionProcess | string | undefined;

  /**
   * <p>The name of the WorkSpace image.</p>
   */
  ImageName: string | undefined;
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
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  MaxResults?: number;
}

export namespace ListAvailableManagementCidrRangesRequest {
  export const filterSensitiveLog = (obj: ListAvailableManagementCidrRangesRequest): any => ({
    ...obj,
  });
}

export interface ListAvailableManagementCidrRangesResult {
  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of available IP address ranges, specified as IPv4 CIDR blocks.</p>
   */
  ManagementCidrRanges?: string[];
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
   * <p>The new identifier of the WorkSpace that is being migrated. If the migration does not succeed,
   *          the target WorkSpace ID will not be used, and the WorkSpace will still have the original WorkSpace ID.</p>
   */
  TargetWorkspaceId?: string;

  /**
   * <p>The original identifier of the WorkSpace that is being migrated.</p>
   */
  SourceWorkspaceId?: string;
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
   * <p>Information about the Amazon WorkSpaces client.</p>
   */
  ClientProperties: ClientProperties | undefined;

  /**
   * <p>The resource identifiers, in the form of directory IDs.</p>
   */
  ResourceId: string | undefined;
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
   * <p>The permissions to enable or disable self-service capabilities.</p>
   */
  SelfservicePermissions: SelfservicePermissions | undefined;

  /**
   * <p>The identifier of the directory.</p>
   */
  ResourceId: string | undefined;
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
   * <p>The identifier of your custom security group.</p>
   */
  CustomSecurityGroupId?: string;

  /**
   * <p>Indicates whether internet access is enabled for your WorkSpaces.</p>
   */
  EnableInternetAccess?: boolean;

  /**
   * <p>Indicates whether maintenance mode is enabled for your WorkSpaces. For more information,
   *          see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
   *             Maintenance</a>. </p>
   */
  EnableMaintenanceMode?: boolean;

  /**
   * <p>Indicates whether users are local administrators of their WorkSpaces.</p>
   */
  UserEnabledAsLocalAdministrator?: boolean;

  /**
   * <p>The default organizational unit (OU) for your WorkSpace directories.</p>
   */
  DefaultOu?: string;
}

export namespace WorkspaceCreationProperties {
  export const filterSensitiveLog = (obj: WorkspaceCreationProperties): any => ({
    ...obj,
  });
}

export interface ModifyWorkspaceCreationPropertiesRequest {
  /**
   * <p>The default properties for creating WorkSpaces.</p>
   */
  WorkspaceCreationProperties: WorkspaceCreationProperties | undefined;

  /**
   * <p>The identifier of the directory.</p>
   */
  ResourceId: string | undefined;
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
   * <p>The WorkSpace state.</p>
   */
  WorkspaceState: TargetWorkspaceState | string | undefined;

  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
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
   * <p>The tags associated with the directory.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Indicates whether your WorkSpace directory is dedicated or shared. To use Bring Your Own
   *          License (BYOL) images, this value must be set to <code>DEDICATED</code> and your AWS account must be
   *          enabled for BYOL. If your account has not been enabled for BYOL, you will receive an
   *          InvalidParameterValuesException error. For more information about BYOL images, see
   *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring Your Own Windows Desktop Images</a>.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>The identifier of the directory. You cannot register a directory if it does not have a status
   *          of Active. If the directory does not have a status of Active, you will receive an
   *          InvalidResourceStateException error. If you have already registered the maximum number of directories
   *          that you can register with Amazon WorkSpaces, you will receive a ResourceLimitExceededException error.
   *          Deregister directories that you are not using for WorkSpaces, and try again.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>Indicates whether Amazon WorkDocs is enabled or disabled. If you have enabled this parameter and
   *          WorkDocs is not available in the Region, you will receive an OperationNotSupportedException error. Set
   *          <code>EnableWorkDocs</code> to disabled, and try again.</p>
   */
  EnableWorkDocs: boolean | undefined;

  /**
   * <p>The identifiers of the subnets for your virtual private cloud (VPC). Make sure that the subnets
   *          are in supported Availability Zones. The subnets must also be in separate Availability Zones. If these
   *          conditions are not met, you will receive an OperationNotSupportedException error.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Indicates whether self-service capabilities are enabled or disabled.</p>
   */
  EnableSelfService?: boolean;
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

export interface UpdateRulesOfIpGroupRequest {
  /**
   * <p>One or more rules.</p>
   */
  UserRules: IpRuleItem[] | undefined;

  /**
   * <p>The identifier of the group.</p>
   */
  GroupId: string | undefined;
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
   * <p>The permission to copy the image. This permission can be revoked only after an image
   *       has been shared.</p>
   */
  AllowCopyImage: boolean | undefined;

  /**
   * <p>The identifier of the AWS account to share or unshare the image with.</p>
   */
  SharedAccountId: string | undefined;

  /**
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;
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
