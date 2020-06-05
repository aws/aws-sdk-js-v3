import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The user is not authorized to access a resource.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessDeniedException =>
    __isa(o, "AccessDeniedException");
}

export enum AccessPropertyValue {
  ALLOW = "ALLOW",
  DENY = "DENY"
}

/**
 * <p>Describes a modification to the configuration of Bring Your Own License (BYOL) for the
 *          specified account. </p>
 */
export interface AccountModification {
  __type?: "AccountModification";
  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
   *          interface used for the account.</p>
   */
  DedicatedTenancyManagementCidrRange?: string;

  /**
   * <p>The status of BYOL (whether BYOL is being enabled or disabled).</p>
   */
  DedicatedTenancySupport?: DedicatedTenancySupportResultEnum | string;

  /**
   * <p>The error code that is returned if the configuration of BYOL cannot be modified.</p>
   */
  ErrorCode?: string;

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
   * <p>The timestamp when the modification of the BYOL configuration was started.</p>
   */
  StartTime?: Date;
}

export namespace AccountModification {
  export const filterSensitiveLog = (obj: AccountModification): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccountModification =>
    __isa(o, "AccountModification");
}

export interface AssociateIpGroupsRequest {
  __type?: "AssociateIpGroupsRequest";
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
    ...obj
  });
  export const isa = (o: any): o is AssociateIpGroupsRequest =>
    __isa(o, "AssociateIpGroupsRequest");
}

export interface AssociateIpGroupsResult {
  __type?: "AssociateIpGroupsResult";
}

export namespace AssociateIpGroupsResult {
  export const filterSensitiveLog = (obj: AssociateIpGroupsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateIpGroupsResult =>
    __isa(o, "AssociateIpGroupsResult");
}

export interface AuthorizeIpRulesRequest {
  __type?: "AuthorizeIpRulesRequest";
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
    ...obj
  });
  export const isa = (o: any): o is AuthorizeIpRulesRequest =>
    __isa(o, "AuthorizeIpRulesRequest");
}

export interface AuthorizeIpRulesResult {
  __type?: "AuthorizeIpRulesResult";
}

export namespace AuthorizeIpRulesResult {
  export const filterSensitiveLog = (obj: AuthorizeIpRulesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is AuthorizeIpRulesResult =>
    __isa(o, "AuthorizeIpRulesResult");
}

/**
 * <p>Describes an Amazon WorkSpaces client.</p>
 */
export interface ClientProperties {
  __type?: "ClientProperties";
  /**
   * <p>Specifies whether users can cache their credentials on the Amazon WorkSpaces client.
   *          When enabled, users can choose to reconnect to their WorkSpaces without re-entering their
   *          credentials. </p>
   */
  ReconnectEnabled?: ReconnectEnum | string;
}

export namespace ClientProperties {
  export const filterSensitiveLog = (obj: ClientProperties): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClientProperties =>
    __isa(o, "ClientProperties");
}

/**
 * <p>Information about the Amazon WorkSpaces client.</p>
 */
export interface ClientPropertiesResult {
  __type?: "ClientPropertiesResult";
  /**
   * <p>Information about the Amazon WorkSpaces client.</p>
   */
  ClientProperties?: ClientProperties;

  /**
   * <p>The resource identifier, in the form of a directory ID.</p>
   */
  ResourceId?: string;
}

export namespace ClientPropertiesResult {
  export const filterSensitiveLog = (obj: ClientPropertiesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ClientPropertiesResult =>
    __isa(o, "ClientPropertiesResult");
}

export enum Compute {
  GRAPHICS = "GRAPHICS",
  GRAPHICSPRO = "GRAPHICSPRO",
  PERFORMANCE = "PERFORMANCE",
  POWER = "POWER",
  POWERPRO = "POWERPRO",
  STANDARD = "STANDARD",
  VALUE = "VALUE"
}

/**
 * <p>Describes the compute type.</p>
 */
export interface ComputeType {
  __type?: "ComputeType";
  /**
   * <p>The compute type.</p>
   */
  Name?: Compute | string;
}

export namespace ComputeType {
  export const filterSensitiveLog = (obj: ComputeType): any => ({
    ...obj
  });
  export const isa = (o: any): o is ComputeType => __isa(o, "ComputeType");
}

export enum ConnectionState {
  CONNECTED = "CONNECTED",
  DISCONNECTED = "DISCONNECTED",
  UNKNOWN = "UNKNOWN"
}

export interface CopyWorkspaceImageRequest {
  __type?: "CopyWorkspaceImageRequest";
  /**
   * <p>A description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The name of the image.</p>
   */
  Name: string | undefined;

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
    ...obj
  });
  export const isa = (o: any): o is CopyWorkspaceImageRequest =>
    __isa(o, "CopyWorkspaceImageRequest");
}

export interface CopyWorkspaceImageResult {
  __type?: "CopyWorkspaceImageResult";
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;
}

export namespace CopyWorkspaceImageResult {
  export const filterSensitiveLog = (obj: CopyWorkspaceImageResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CopyWorkspaceImageResult =>
    __isa(o, "CopyWorkspaceImageResult");
}

export interface CreateIpGroupRequest {
  __type?: "CreateIpGroupRequest";
  /**
   * <p>The description of the group.</p>
   */
  GroupDesc?: string;

  /**
   * <p>The name of the group.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The rules to add to the group.</p>
   */
  UserRules?: IpRuleItem[];
}

export namespace CreateIpGroupRequest {
  export const filterSensitiveLog = (obj: CreateIpGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateIpGroupRequest =>
    __isa(o, "CreateIpGroupRequest");
}

export interface CreateIpGroupResult {
  __type?: "CreateIpGroupResult";
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId?: string;
}

export namespace CreateIpGroupResult {
  export const filterSensitiveLog = (obj: CreateIpGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateIpGroupResult =>
    __isa(o, "CreateIpGroupResult");
}

export interface CreateTagsRequest {
  __type?: "CreateTagsRequest";
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, and IP access control groups.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags. If you want to add new tags
   *          to a set of existing tags, you must submit all of the existing tags along with the new ones.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace CreateTagsRequest {
  export const filterSensitiveLog = (obj: CreateTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTagsRequest =>
    __isa(o, "CreateTagsRequest");
}

export interface CreateTagsResult {
  __type?: "CreateTagsResult";
}

export namespace CreateTagsResult {
  export const filterSensitiveLog = (obj: CreateTagsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTagsResult =>
    __isa(o, "CreateTagsResult");
}

export interface CreateWorkspacesRequest {
  __type?: "CreateWorkspacesRequest";
  /**
   * <p>The WorkSpaces to create. You can specify up to 25 WorkSpaces.</p>
   */
  Workspaces: WorkspaceRequest[] | undefined;
}

export namespace CreateWorkspacesRequest {
  export const filterSensitiveLog = (obj: CreateWorkspacesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateWorkspacesRequest =>
    __isa(o, "CreateWorkspacesRequest");
}

export interface CreateWorkspacesResult {
  __type?: "CreateWorkspacesResult";
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
    ...obj
  });
  export const isa = (o: any): o is CreateWorkspacesResult =>
    __isa(o, "CreateWorkspacesResult");
}

export enum DedicatedTenancyModificationStateEnum {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  PENDING = "PENDING"
}

export enum DedicatedTenancySupportEnum {
  ENABLED = "ENABLED"
}

export enum DedicatedTenancySupportResultEnum {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * <p>Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.</p>
 */
export interface DefaultWorkspaceCreationProperties {
  __type?: "DefaultWorkspaceCreationProperties";
  /**
   * <p>The identifier of any security groups to apply to WorkSpaces when they are
   *          created.</p>
   */
  CustomSecurityGroupId?: string;

  /**
   * <p>The organizational unit (OU) in the directory for the WorkSpace machine accounts.</p>
   */
  DefaultOu?: string;

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
   * <p>Specifies whether maintenance mode is enabled for WorkSpaces. For more information, see
   *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspace-maintenance.html">WorkSpace
   *             Maintenance</a>.</p>
   */
  EnableMaintenanceMode?: boolean;

  /**
   * <p>Specifies whether the directory is enabled for Amazon WorkDocs.</p>
   */
  EnableWorkDocs?: boolean;

  /**
   * <p>Specifies whether WorkSpace users are local administrators on their WorkSpaces.</p>
   */
  UserEnabledAsLocalAdministrator?: boolean;
}

export namespace DefaultWorkspaceCreationProperties {
  export const filterSensitiveLog = (
    obj: DefaultWorkspaceCreationProperties
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DefaultWorkspaceCreationProperties =>
    __isa(o, "DefaultWorkspaceCreationProperties");
}

export interface DeleteIpGroupRequest {
  __type?: "DeleteIpGroupRequest";
  /**
   * <p>The identifier of the IP access control group.</p>
   */
  GroupId: string | undefined;
}

export namespace DeleteIpGroupRequest {
  export const filterSensitiveLog = (obj: DeleteIpGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteIpGroupRequest =>
    __isa(o, "DeleteIpGroupRequest");
}

export interface DeleteIpGroupResult {
  __type?: "DeleteIpGroupResult";
}

export namespace DeleteIpGroupResult {
  export const filterSensitiveLog = (obj: DeleteIpGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteIpGroupResult =>
    __isa(o, "DeleteIpGroupResult");
}

export interface DeleteTagsRequest {
  __type?: "DeleteTagsRequest";
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, and IP access control groups.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsRequest {
  export const filterSensitiveLog = (obj: DeleteTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTagsRequest =>
    __isa(o, "DeleteTagsRequest");
}

export interface DeleteTagsResult {
  __type?: "DeleteTagsResult";
}

export namespace DeleteTagsResult {
  export const filterSensitiveLog = (obj: DeleteTagsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTagsResult =>
    __isa(o, "DeleteTagsResult");
}

export interface DeleteWorkspaceImageRequest {
  __type?: "DeleteWorkspaceImageRequest";
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;
}

export namespace DeleteWorkspaceImageRequest {
  export const filterSensitiveLog = (
    obj: DeleteWorkspaceImageRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteWorkspaceImageRequest =>
    __isa(o, "DeleteWorkspaceImageRequest");
}

export interface DeleteWorkspaceImageResult {
  __type?: "DeleteWorkspaceImageResult";
}

export namespace DeleteWorkspaceImageResult {
  export const filterSensitiveLog = (obj: DeleteWorkspaceImageResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteWorkspaceImageResult =>
    __isa(o, "DeleteWorkspaceImageResult");
}

export interface DeregisterWorkspaceDirectoryRequest {
  __type?: "DeregisterWorkspaceDirectoryRequest";
  /**
   * <p>The identifier of the directory. If any WorkSpaces are registered to this directory, you must
   *          remove them before you deregister the directory, or you will receive an OperationNotSupportedException
   *          error.</p>
   */
  DirectoryId: string | undefined;
}

export namespace DeregisterWorkspaceDirectoryRequest {
  export const filterSensitiveLog = (
    obj: DeregisterWorkspaceDirectoryRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterWorkspaceDirectoryRequest =>
    __isa(o, "DeregisterWorkspaceDirectoryRequest");
}

export interface DeregisterWorkspaceDirectoryResult {
  __type?: "DeregisterWorkspaceDirectoryResult";
}

export namespace DeregisterWorkspaceDirectoryResult {
  export const filterSensitiveLog = (
    obj: DeregisterWorkspaceDirectoryResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeregisterWorkspaceDirectoryResult =>
    __isa(o, "DeregisterWorkspaceDirectoryResult");
}

export interface DescribeAccountModificationsRequest {
  __type?: "DescribeAccountModificationsRequest";
  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
   *          provide this token to receive the next set of results.</p>
   */
  NextToken?: string;
}

export namespace DescribeAccountModificationsRequest {
  export const filterSensitiveLog = (
    obj: DescribeAccountModificationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountModificationsRequest =>
    __isa(o, "DescribeAccountModificationsRequest");
}

export interface DescribeAccountModificationsResult {
  __type?: "DescribeAccountModificationsResult";
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
  export const filterSensitiveLog = (
    obj: DescribeAccountModificationsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountModificationsResult =>
    __isa(o, "DescribeAccountModificationsResult");
}

export interface DescribeAccountRequest {
  __type?: "DescribeAccountRequest";
}

export namespace DescribeAccountRequest {
  export const filterSensitiveLog = (obj: DescribeAccountRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountRequest =>
    __isa(o, "DescribeAccountRequest");
}

export interface DescribeAccountResult {
  __type?: "DescribeAccountResult";
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
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountResult =>
    __isa(o, "DescribeAccountResult");
}

export interface DescribeClientPropertiesRequest {
  __type?: "DescribeClientPropertiesRequest";
  /**
   * <p>The resource identifier, in the form of directory IDs.</p>
   */
  ResourceIds: string[] | undefined;
}

export namespace DescribeClientPropertiesRequest {
  export const filterSensitiveLog = (
    obj: DescribeClientPropertiesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeClientPropertiesRequest =>
    __isa(o, "DescribeClientPropertiesRequest");
}

export interface DescribeClientPropertiesResult {
  __type?: "DescribeClientPropertiesResult";
  /**
   * <p>Information about the specified Amazon WorkSpaces clients.</p>
   */
  ClientPropertiesList?: ClientPropertiesResult[];
}

export namespace DescribeClientPropertiesResult {
  export const filterSensitiveLog = (
    obj: DescribeClientPropertiesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeClientPropertiesResult =>
    __isa(o, "DescribeClientPropertiesResult");
}

export interface DescribeIpGroupsRequest {
  __type?: "DescribeIpGroupsRequest";
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
    ...obj
  });
  export const isa = (o: any): o is DescribeIpGroupsRequest =>
    __isa(o, "DescribeIpGroupsRequest");
}

export interface DescribeIpGroupsResult {
  __type?: "DescribeIpGroupsResult";
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
    ...obj
  });
  export const isa = (o: any): o is DescribeIpGroupsResult =>
    __isa(o, "DescribeIpGroupsResult");
}

export interface DescribeTagsRequest {
  __type?: "DescribeTagsRequest";
  /**
   * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
   *          registered directories, images, custom bundles, and IP access control groups.</p>
   */
  ResourceId: string | undefined;
}

export namespace DescribeTagsRequest {
  export const filterSensitiveLog = (obj: DescribeTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTagsRequest =>
    __isa(o, "DescribeTagsRequest");
}

export interface DescribeTagsResult {
  __type?: "DescribeTagsResult";
  /**
   * <p>The tags.</p>
   */
  TagList?: Tag[];
}

export namespace DescribeTagsResult {
  export const filterSensitiveLog = (obj: DescribeTagsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTagsResult =>
    __isa(o, "DescribeTagsResult");
}

export interface DescribeWorkspaceBundlesRequest {
  __type?: "DescribeWorkspaceBundlesRequest";
  /**
   * <p>The identifiers of the bundles. You cannot combine this parameter with any other filter.</p>
   */
  BundleIds?: string[];

  /**
   * <p>The token for the next set of results. (You received this token from a previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The owner of the bundles. You cannot combine this parameter with any other filter.</p>
   *          <p>Specify <code>AMAZON</code> to describe the bundles provided by AWS or null
   *          to describe the bundles that belong to your account.</p>
   */
  Owner?: string;
}

export namespace DescribeWorkspaceBundlesRequest {
  export const filterSensitiveLog = (
    obj: DescribeWorkspaceBundlesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkspaceBundlesRequest =>
    __isa(o, "DescribeWorkspaceBundlesRequest");
}

export interface DescribeWorkspaceBundlesResult {
  __type?: "DescribeWorkspaceBundlesResult";
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
  export const filterSensitiveLog = (
    obj: DescribeWorkspaceBundlesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkspaceBundlesResult =>
    __isa(o, "DescribeWorkspaceBundlesResult");
}

export interface DescribeWorkspaceDirectoriesRequest {
  __type?: "DescribeWorkspaceDirectoriesRequest";
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
  export const filterSensitiveLog = (
    obj: DescribeWorkspaceDirectoriesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkspaceDirectoriesRequest =>
    __isa(o, "DescribeWorkspaceDirectoriesRequest");
}

export interface DescribeWorkspaceDirectoriesResult {
  __type?: "DescribeWorkspaceDirectoriesResult";
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
  export const filterSensitiveLog = (
    obj: DescribeWorkspaceDirectoriesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkspaceDirectoriesResult =>
    __isa(o, "DescribeWorkspaceDirectoriesResult");
}

export interface DescribeWorkspaceImagesRequest {
  __type?: "DescribeWorkspaceImagesRequest";
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
}

export namespace DescribeWorkspaceImagesRequest {
  export const filterSensitiveLog = (
    obj: DescribeWorkspaceImagesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkspaceImagesRequest =>
    __isa(o, "DescribeWorkspaceImagesRequest");
}

export interface DescribeWorkspaceImagesResult {
  __type?: "DescribeWorkspaceImagesResult";
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
  export const filterSensitiveLog = (
    obj: DescribeWorkspaceImagesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkspaceImagesResult =>
    __isa(o, "DescribeWorkspaceImagesResult");
}

export interface DescribeWorkspacesConnectionStatusRequest {
  __type?: "DescribeWorkspacesConnectionStatusRequest";
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
  export const filterSensitiveLog = (
    obj: DescribeWorkspacesConnectionStatusRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkspacesConnectionStatusRequest =>
    __isa(o, "DescribeWorkspacesConnectionStatusRequest");
}

export interface DescribeWorkspacesConnectionStatusResult {
  __type?: "DescribeWorkspacesConnectionStatusResult";
  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the connection status of the WorkSpace.</p>
   */
  WorkspacesConnectionStatus?: WorkspaceConnectionStatus[];
}

export namespace DescribeWorkspacesConnectionStatusResult {
  export const filterSensitiveLog = (
    obj: DescribeWorkspacesConnectionStatusResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkspacesConnectionStatusResult =>
    __isa(o, "DescribeWorkspacesConnectionStatusResult");
}

export interface DescribeWorkspaceSnapshotsRequest {
  __type?: "DescribeWorkspaceSnapshotsRequest";
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace DescribeWorkspaceSnapshotsRequest {
  export const filterSensitiveLog = (
    obj: DescribeWorkspaceSnapshotsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkspaceSnapshotsRequest =>
    __isa(o, "DescribeWorkspaceSnapshotsRequest");
}

export interface DescribeWorkspaceSnapshotsResult {
  __type?: "DescribeWorkspaceSnapshotsResult";
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
  export const filterSensitiveLog = (
    obj: DescribeWorkspaceSnapshotsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkspaceSnapshotsResult =>
    __isa(o, "DescribeWorkspaceSnapshotsResult");
}

export interface DescribeWorkspacesRequest {
  __type?: "DescribeWorkspacesRequest";
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
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

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
   * <p>The identifiers of the WorkSpaces. You cannot combine this parameter with any other
   *          filter.</p>
   *          <p>Because the <a>CreateWorkspaces</a> operation is asynchronous, the identifier
   *          it returns is not immediately available. If you immediately call <a>DescribeWorkspaces</a> with this identifier, no information is returned.</p>
   */
  WorkspaceIds?: string[];
}

export namespace DescribeWorkspacesRequest {
  export const filterSensitiveLog = (obj: DescribeWorkspacesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkspacesRequest =>
    __isa(o, "DescribeWorkspacesRequest");
}

export interface DescribeWorkspacesResult {
  __type?: "DescribeWorkspacesResult";
  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the WorkSpaces.</p>
   *          <p>Because <a>CreateWorkspaces</a> is an asynchronous operation, some of the
   *          returned information could be incomplete.</p>
   */
  Workspaces?: Workspace[];
}

export namespace DescribeWorkspacesResult {
  export const filterSensitiveLog = (obj: DescribeWorkspacesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeWorkspacesResult =>
    __isa(o, "DescribeWorkspacesResult");
}

export interface DisassociateIpGroupsRequest {
  __type?: "DisassociateIpGroupsRequest";
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
  export const filterSensitiveLog = (
    obj: DisassociateIpGroupsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateIpGroupsRequest =>
    __isa(o, "DisassociateIpGroupsRequest");
}

export interface DisassociateIpGroupsResult {
  __type?: "DisassociateIpGroupsResult";
}

export namespace DisassociateIpGroupsResult {
  export const filterSensitiveLog = (obj: DisassociateIpGroupsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateIpGroupsResult =>
    __isa(o, "DisassociateIpGroupsResult");
}

/**
 * <p>Describes a WorkSpace that cannot be created.</p>
 */
export interface FailedCreateWorkspaceRequest {
  __type?: "FailedCreateWorkspaceRequest";
  /**
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          created.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>Information about the WorkSpace.</p>
   */
  WorkspaceRequest?: WorkspaceRequest;
}

export namespace FailedCreateWorkspaceRequest {
  export const filterSensitiveLog = (
    obj: FailedCreateWorkspaceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is FailedCreateWorkspaceRequest =>
    __isa(o, "FailedCreateWorkspaceRequest");
}

/**
 * <p>Describes a WorkSpace that could not be rebooted.
 *          (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated
 *          (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).</p>
 */
export interface FailedWorkspaceChangeRequest {
  __type?: "FailedWorkspaceChangeRequest";
  /**
   * <p>The error code that is returned if the WorkSpace cannot be rebooted.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          rebooted.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;
}

export namespace FailedWorkspaceChangeRequest {
  export const filterSensitiveLog = (
    obj: FailedWorkspaceChangeRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is FailedWorkspaceChangeRequest =>
    __isa(o, "FailedWorkspaceChangeRequest");
}

export interface ImportWorkspaceImageRequest {
  __type?: "ImportWorkspaceImageRequest";
  /**
   * <p>The identifier of the EC2 image.</p>
   */
  Ec2ImageId: string | undefined;

  /**
   * <p>The description of the WorkSpace image.</p>
   */
  ImageDescription: string | undefined;

  /**
   * <p>The name of the WorkSpace image.</p>
   */
  ImageName: string | undefined;

  /**
   * <p>The ingestion process to be used when importing the image.</p>
   */
  IngestionProcess: WorkspaceImageIngestionProcess | string | undefined;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags?: Tag[];
}

export namespace ImportWorkspaceImageRequest {
  export const filterSensitiveLog = (
    obj: ImportWorkspaceImageRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportWorkspaceImageRequest =>
    __isa(o, "ImportWorkspaceImageRequest");
}

export interface ImportWorkspaceImageResult {
  __type?: "ImportWorkspaceImageResult";
  /**
   * <p>The identifier of the WorkSpace image.</p>
   */
  ImageId?: string;
}

export namespace ImportWorkspaceImageResult {
  export const filterSensitiveLog = (obj: ImportWorkspaceImageResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportWorkspaceImageResult =>
    __isa(o, "ImportWorkspaceImageResult");
}

/**
 * <p>One or more parameter values are not valid.</p>
 */
export interface InvalidParameterValuesException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterValuesException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace InvalidParameterValuesException {
  export const filterSensitiveLog = (
    obj: InvalidParameterValuesException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidParameterValuesException =>
    __isa(o, "InvalidParameterValuesException");
}

/**
 * <p>The state of the resource is not valid for this operation.</p>
 */
export interface InvalidResourceStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidResourceStateException";
  $fault: "client";
  message?: string;
}

export namespace InvalidResourceStateException {
  export const filterSensitiveLog = (
    obj: InvalidResourceStateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidResourceStateException =>
    __isa(o, "InvalidResourceStateException");
}

/**
 * <p>Describes a rule for an IP access control group.</p>
 */
export interface IpRuleItem {
  __type?: "IpRuleItem";
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
    ...obj
  });
  export const isa = (o: any): o is IpRuleItem => __isa(o, "IpRuleItem");
}

export interface ListAvailableManagementCidrRangesRequest {
  __type?: "ListAvailableManagementCidrRangesRequest";
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
  export const filterSensitiveLog = (
    obj: ListAvailableManagementCidrRangesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAvailableManagementCidrRangesRequest =>
    __isa(o, "ListAvailableManagementCidrRangesRequest");
}

export interface ListAvailableManagementCidrRangesResult {
  __type?: "ListAvailableManagementCidrRangesResult";
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
  export const filterSensitiveLog = (
    obj: ListAvailableManagementCidrRangesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAvailableManagementCidrRangesResult =>
    __isa(o, "ListAvailableManagementCidrRangesResult");
}

export interface MigrateWorkspaceRequest {
  __type?: "MigrateWorkspaceRequest";
  /**
   * <p>The identifier of the target bundle type to migrate the WorkSpace to.</p>
   */
  BundleId: string | undefined;

  /**
   * <p>The identifier of the WorkSpace to migrate from.</p>
   */
  SourceWorkspaceId: string | undefined;
}

export namespace MigrateWorkspaceRequest {
  export const filterSensitiveLog = (obj: MigrateWorkspaceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is MigrateWorkspaceRequest =>
    __isa(o, "MigrateWorkspaceRequest");
}

export interface MigrateWorkspaceResult {
  __type?: "MigrateWorkspaceResult";
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
    ...obj
  });
  export const isa = (o: any): o is MigrateWorkspaceResult =>
    __isa(o, "MigrateWorkspaceResult");
}

export enum ModificationResourceEnum {
  COMPUTE_TYPE = "COMPUTE_TYPE",
  ROOT_VOLUME = "ROOT_VOLUME",
  USER_VOLUME = "USER_VOLUME"
}

/**
 * <p>Describes a WorkSpace modification.</p>
 */
export interface ModificationState {
  __type?: "ModificationState";
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
    ...obj
  });
  export const isa = (o: any): o is ModificationState =>
    __isa(o, "ModificationState");
}

export enum ModificationStateEnum {
  UPDATE_INITIATED = "UPDATE_INITIATED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS"
}

export interface ModifyAccountRequest {
  __type?: "ModifyAccountRequest";
  /**
   * <p>The IP address range, specified as an IPv4 CIDR block, for the management network
   *          interface. Specify an IP address range that is compatible with your network and in CIDR
   *          notation (that is, specify the range as an IPv4 CIDR block). The CIDR block size must be
   *          /16 (for example, 203.0.113.25/16). It must also be specified as available by the
   *             <code>ListAvailableManagementCidrRanges</code> operation.</p>
   */
  DedicatedTenancyManagementCidrRange?: string;

  /**
   * <p>The status of BYOL.</p>
   */
  DedicatedTenancySupport?: DedicatedTenancySupportEnum | string;
}

export namespace ModifyAccountRequest {
  export const filterSensitiveLog = (obj: ModifyAccountRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyAccountRequest =>
    __isa(o, "ModifyAccountRequest");
}

export interface ModifyAccountResult {
  __type?: "ModifyAccountResult";
}

export namespace ModifyAccountResult {
  export const filterSensitiveLog = (obj: ModifyAccountResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyAccountResult =>
    __isa(o, "ModifyAccountResult");
}

export interface ModifyClientPropertiesRequest {
  __type?: "ModifyClientPropertiesRequest";
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
  export const filterSensitiveLog = (
    obj: ModifyClientPropertiesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClientPropertiesRequest =>
    __isa(o, "ModifyClientPropertiesRequest");
}

export interface ModifyClientPropertiesResult {
  __type?: "ModifyClientPropertiesResult";
}

export namespace ModifyClientPropertiesResult {
  export const filterSensitiveLog = (
    obj: ModifyClientPropertiesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyClientPropertiesResult =>
    __isa(o, "ModifyClientPropertiesResult");
}

export interface ModifySelfservicePermissionsRequest {
  __type?: "ModifySelfservicePermissionsRequest";
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
  export const filterSensitiveLog = (
    obj: ModifySelfservicePermissionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifySelfservicePermissionsRequest =>
    __isa(o, "ModifySelfservicePermissionsRequest");
}

export interface ModifySelfservicePermissionsResult {
  __type?: "ModifySelfservicePermissionsResult";
}

export namespace ModifySelfservicePermissionsResult {
  export const filterSensitiveLog = (
    obj: ModifySelfservicePermissionsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifySelfservicePermissionsResult =>
    __isa(o, "ModifySelfservicePermissionsResult");
}

export interface ModifyWorkspaceAccessPropertiesRequest {
  __type?: "ModifyWorkspaceAccessPropertiesRequest";
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
  export const filterSensitiveLog = (
    obj: ModifyWorkspaceAccessPropertiesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyWorkspaceAccessPropertiesRequest =>
    __isa(o, "ModifyWorkspaceAccessPropertiesRequest");
}

export interface ModifyWorkspaceAccessPropertiesResult {
  __type?: "ModifyWorkspaceAccessPropertiesResult";
}

export namespace ModifyWorkspaceAccessPropertiesResult {
  export const filterSensitiveLog = (
    obj: ModifyWorkspaceAccessPropertiesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyWorkspaceAccessPropertiesResult =>
    __isa(o, "ModifyWorkspaceAccessPropertiesResult");
}

export interface ModifyWorkspaceCreationPropertiesRequest {
  __type?: "ModifyWorkspaceCreationPropertiesRequest";
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
  export const filterSensitiveLog = (
    obj: ModifyWorkspaceCreationPropertiesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyWorkspaceCreationPropertiesRequest =>
    __isa(o, "ModifyWorkspaceCreationPropertiesRequest");
}

export interface ModifyWorkspaceCreationPropertiesResult {
  __type?: "ModifyWorkspaceCreationPropertiesResult";
}

export namespace ModifyWorkspaceCreationPropertiesResult {
  export const filterSensitiveLog = (
    obj: ModifyWorkspaceCreationPropertiesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyWorkspaceCreationPropertiesResult =>
    __isa(o, "ModifyWorkspaceCreationPropertiesResult");
}

export interface ModifyWorkspacePropertiesRequest {
  __type?: "ModifyWorkspacePropertiesRequest";
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
  export const filterSensitiveLog = (
    obj: ModifyWorkspacePropertiesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyWorkspacePropertiesRequest =>
    __isa(o, "ModifyWorkspacePropertiesRequest");
}

export interface ModifyWorkspacePropertiesResult {
  __type?: "ModifyWorkspacePropertiesResult";
}

export namespace ModifyWorkspacePropertiesResult {
  export const filterSensitiveLog = (
    obj: ModifyWorkspacePropertiesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyWorkspacePropertiesResult =>
    __isa(o, "ModifyWorkspacePropertiesResult");
}

export interface ModifyWorkspaceStateRequest {
  __type?: "ModifyWorkspaceStateRequest";
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
  export const filterSensitiveLog = (
    obj: ModifyWorkspaceStateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyWorkspaceStateRequest =>
    __isa(o, "ModifyWorkspaceStateRequest");
}

export interface ModifyWorkspaceStateResult {
  __type?: "ModifyWorkspaceStateResult";
}

export namespace ModifyWorkspaceStateResult {
  export const filterSensitiveLog = (obj: ModifyWorkspaceStateResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyWorkspaceStateResult =>
    __isa(o, "ModifyWorkspaceStateResult");
}

/**
 * <p>The operating system that the image is running.</p>
 */
export interface OperatingSystem {
  __type?: "OperatingSystem";
  /**
   * <p>The operating system.</p>
   */
  Type?: OperatingSystemType | string;
}

export namespace OperatingSystem {
  export const filterSensitiveLog = (obj: OperatingSystem): any => ({
    ...obj
  });
  export const isa = (o: any): o is OperatingSystem =>
    __isa(o, "OperatingSystem");
}

export enum OperatingSystemType {
  LINUX = "LINUX",
  WINDOWS = "WINDOWS"
}

/**
 * <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 */
export interface OperationInProgressException
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationInProgressException";
  $fault: "client";
  message?: string;
}

export namespace OperationInProgressException {
  export const filterSensitiveLog = (
    obj: OperationInProgressException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OperationInProgressException =>
    __isa(o, "OperationInProgressException");
}

/**
 * <p>This operation is not supported.</p>
 */
export interface OperationNotSupportedException
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationNotSupportedException";
  $fault: "client";
  message?: string;
}

export namespace OperationNotSupportedException {
  export const filterSensitiveLog = (
    obj: OperationNotSupportedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OperationNotSupportedException =>
    __isa(o, "OperationNotSupportedException");
}

/**
 * <p>Describes the information used to reboot a WorkSpace.</p>
 */
export interface RebootRequest {
  __type?: "RebootRequest";
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace RebootRequest {
  export const filterSensitiveLog = (obj: RebootRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebootRequest => __isa(o, "RebootRequest");
}

export interface RebootWorkspacesRequest {
  __type?: "RebootWorkspacesRequest";
  /**
   * <p>The WorkSpaces to reboot. You can specify up to 25 WorkSpaces.</p>
   */
  RebootWorkspaceRequests: RebootRequest[] | undefined;
}

export namespace RebootWorkspacesRequest {
  export const filterSensitiveLog = (obj: RebootWorkspacesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebootWorkspacesRequest =>
    __isa(o, "RebootWorkspacesRequest");
}

export interface RebootWorkspacesResult {
  __type?: "RebootWorkspacesResult";
  /**
   * <p>Information about the WorkSpaces that could not be rebooted.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace RebootWorkspacesResult {
  export const filterSensitiveLog = (obj: RebootWorkspacesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebootWorkspacesResult =>
    __isa(o, "RebootWorkspacesResult");
}

/**
 * <p>Describes the information used to rebuild a WorkSpace.</p>
 */
export interface RebuildRequest {
  __type?: "RebuildRequest";
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace RebuildRequest {
  export const filterSensitiveLog = (obj: RebuildRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebuildRequest =>
    __isa(o, "RebuildRequest");
}

export interface RebuildWorkspacesRequest {
  __type?: "RebuildWorkspacesRequest";
  /**
   * <p>The WorkSpace to rebuild. You can specify a single WorkSpace.</p>
   */
  RebuildWorkspaceRequests: RebuildRequest[] | undefined;
}

export namespace RebuildWorkspacesRequest {
  export const filterSensitiveLog = (obj: RebuildWorkspacesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebuildWorkspacesRequest =>
    __isa(o, "RebuildWorkspacesRequest");
}

export interface RebuildWorkspacesResult {
  __type?: "RebuildWorkspacesResult";
  /**
   * <p>Information about the WorkSpace that could not be rebuilt.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace RebuildWorkspacesResult {
  export const filterSensitiveLog = (obj: RebuildWorkspacesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebuildWorkspacesResult =>
    __isa(o, "RebuildWorkspacesResult");
}

export enum ReconnectEnum {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

export interface RegisterWorkspaceDirectoryRequest {
  __type?: "RegisterWorkspaceDirectoryRequest";
  /**
   * <p>The identifier of the directory. You cannot register a directory if it does not have a status
   *          of Active. If the directory does not have a status of Active, you will receive an
   *          InvalidResourceStateException error. If you have already registered the maximum number of directories
   *          that you can register with Amazon WorkSpaces, you will receive a ResourceLimitExceededException error.
   *          Deregister directories that you are not using for WorkSpaces, and try again.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>Indicates whether self-service capabilities are enabled or disabled.</p>
   */
  EnableSelfService?: boolean;

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
}

export namespace RegisterWorkspaceDirectoryRequest {
  export const filterSensitiveLog = (
    obj: RegisterWorkspaceDirectoryRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterWorkspaceDirectoryRequest =>
    __isa(o, "RegisterWorkspaceDirectoryRequest");
}

export interface RegisterWorkspaceDirectoryResult {
  __type?: "RegisterWorkspaceDirectoryResult";
}

export namespace RegisterWorkspaceDirectoryResult {
  export const filterSensitiveLog = (
    obj: RegisterWorkspaceDirectoryResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RegisterWorkspaceDirectoryResult =>
    __isa(o, "RegisterWorkspaceDirectoryResult");
}

/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (
    obj: ResourceAlreadyExistsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceAlreadyExistsException =>
    __isa(o, "ResourceAlreadyExistsException");
}

/**
 * <p>The resource is associated with a directory.</p>
 */
export interface ResourceAssociatedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAssociatedException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAssociatedException {
  export const filterSensitiveLog = (
    obj: ResourceAssociatedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceAssociatedException =>
    __isa(o, "ResourceAssociatedException");
}

/**
 * <p>The resource could not be created.</p>
 */
export interface ResourceCreationFailedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceCreationFailedException";
  $fault: "client";
  message?: string;
}

export namespace ResourceCreationFailedException {
  export const filterSensitiveLog = (
    obj: ResourceCreationFailedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceCreationFailedException =>
    __isa(o, "ResourceCreationFailedException");
}

/**
 * <p>Your resource limits have been exceeded.</p>
 */
export interface ResourceLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace ResourceLimitExceededException {
  export const filterSensitiveLog = (
    obj: ResourceLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceLimitExceededException =>
    __isa(o, "ResourceLimitExceededException");
}

/**
 * <p>The resource could not be found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The ID of the resource that could not be found.</p>
   */
  ResourceId?: string;

  /**
   * <p>The resource could not be found.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The specified resource is not available.</p>
 */
export interface ResourceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceUnavailableException";
  $fault: "client";
  /**
   * <p>The identifier of the resource that is not available.</p>
   */
  ResourceId?: string;

  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace ResourceUnavailableException {
  export const filterSensitiveLog = (
    obj: ResourceUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceUnavailableException =>
    __isa(o, "ResourceUnavailableException");
}

export interface RestoreWorkspaceRequest {
  __type?: "RestoreWorkspaceRequest";
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace RestoreWorkspaceRequest {
  export const filterSensitiveLog = (obj: RestoreWorkspaceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreWorkspaceRequest =>
    __isa(o, "RestoreWorkspaceRequest");
}

export interface RestoreWorkspaceResult {
  __type?: "RestoreWorkspaceResult";
}

export namespace RestoreWorkspaceResult {
  export const filterSensitiveLog = (obj: RestoreWorkspaceResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestoreWorkspaceResult =>
    __isa(o, "RestoreWorkspaceResult");
}

export interface RevokeIpRulesRequest {
  __type?: "RevokeIpRulesRequest";
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
    ...obj
  });
  export const isa = (o: any): o is RevokeIpRulesRequest =>
    __isa(o, "RevokeIpRulesRequest");
}

export interface RevokeIpRulesResult {
  __type?: "RevokeIpRulesResult";
}

export namespace RevokeIpRulesResult {
  export const filterSensitiveLog = (obj: RevokeIpRulesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is RevokeIpRulesResult =>
    __isa(o, "RevokeIpRulesResult");
}

/**
 * <p>Describes the root volume for a WorkSpace bundle.</p>
 */
export interface RootStorage {
  __type?: "RootStorage";
  /**
   * <p>The size of the root volume.</p>
   */
  Capacity?: string;
}

export namespace RootStorage {
  export const filterSensitiveLog = (obj: RootStorage): any => ({
    ...obj
  });
  export const isa = (o: any): o is RootStorage => __isa(o, "RootStorage");
}

export enum RunningMode {
  ALWAYS_ON = "ALWAYS_ON",
  AUTO_STOP = "AUTO_STOP"
}

/**
 * <p>Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.</p>
 */
export interface SelfservicePermissions {
  __type?: "SelfservicePermissions";
  /**
   * <p>Specifies whether users can change the compute type (bundle) for their WorkSpace.</p>
   */
  ChangeComputeType?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can increase the volume size of the drives on their
   *          WorkSpace.</p>
   */
  IncreaseVolumeSize?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can rebuild the operating system of a WorkSpace to its original
   *          state.</p>
   */
  RebuildWorkspace?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can restart their WorkSpace.</p>
   */
  RestartWorkspace?: ReconnectEnum | string;

  /**
   * <p>Specifies whether users can switch the running mode of their WorkSpace.</p>
   */
  SwitchRunningMode?: ReconnectEnum | string;
}

export namespace SelfservicePermissions {
  export const filterSensitiveLog = (obj: SelfservicePermissions): any => ({
    ...obj
  });
  export const isa = (o: any): o is SelfservicePermissions =>
    __isa(o, "SelfservicePermissions");
}

/**
 * <p>Describes a snapshot.</p>
 */
export interface Snapshot {
  __type?: "Snapshot";
  /**
   * <p>The time when the snapshot was created.</p>
   */
  SnapshotTime?: Date;
}

export namespace Snapshot {
  export const filterSensitiveLog = (obj: Snapshot): any => ({
    ...obj
  });
  export const isa = (o: any): o is Snapshot => __isa(o, "Snapshot");
}

/**
 * <p>Information used to start a WorkSpace.</p>
 */
export interface StartRequest {
  __type?: "StartRequest";
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;
}

export namespace StartRequest {
  export const filterSensitiveLog = (obj: StartRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartRequest => __isa(o, "StartRequest");
}

export interface StartWorkspacesRequest {
  __type?: "StartWorkspacesRequest";
  /**
   * <p>The WorkSpaces to start. You can specify up to 25 WorkSpaces.</p>
   */
  StartWorkspaceRequests: StartRequest[] | undefined;
}

export namespace StartWorkspacesRequest {
  export const filterSensitiveLog = (obj: StartWorkspacesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartWorkspacesRequest =>
    __isa(o, "StartWorkspacesRequest");
}

export interface StartWorkspacesResult {
  __type?: "StartWorkspacesResult";
  /**
   * <p>Information about the WorkSpaces that could not be started.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace StartWorkspacesResult {
  export const filterSensitiveLog = (obj: StartWorkspacesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartWorkspacesResult =>
    __isa(o, "StartWorkspacesResult");
}

/**
 * <p>Describes the information used to stop a WorkSpace.</p>
 */
export interface StopRequest {
  __type?: "StopRequest";
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;
}

export namespace StopRequest {
  export const filterSensitiveLog = (obj: StopRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopRequest => __isa(o, "StopRequest");
}

export interface StopWorkspacesRequest {
  __type?: "StopWorkspacesRequest";
  /**
   * <p>The WorkSpaces to stop. You can specify up to 25 WorkSpaces.</p>
   */
  StopWorkspaceRequests: StopRequest[] | undefined;
}

export namespace StopWorkspacesRequest {
  export const filterSensitiveLog = (obj: StopWorkspacesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopWorkspacesRequest =>
    __isa(o, "StopWorkspacesRequest");
}

export interface StopWorkspacesResult {
  __type?: "StopWorkspacesResult";
  /**
   * <p>Information about the WorkSpaces that could not be stopped.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace StopWorkspacesResult {
  export const filterSensitiveLog = (obj: StopWorkspacesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopWorkspacesResult =>
    __isa(o, "StopWorkspacesResult");
}

/**
 * <p>Describes a tag.</p>
 */
export interface Tag {
  __type?: "Tag";
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
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export enum TargetWorkspaceState {
  ADMIN_MAINTENANCE = "ADMIN_MAINTENANCE",
  AVAILABLE = "AVAILABLE"
}

export enum Tenancy {
  DEDICATED = "DEDICATED",
  SHARED = "SHARED"
}

/**
 * <p>Describes the information used to terminate a WorkSpace.</p>
 */
export interface TerminateRequest {
  __type?: "TerminateRequest";
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace TerminateRequest {
  export const filterSensitiveLog = (obj: TerminateRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TerminateRequest =>
    __isa(o, "TerminateRequest");
}

export interface TerminateWorkspacesRequest {
  __type?: "TerminateWorkspacesRequest";
  /**
   * <p>The WorkSpaces to terminate. You can specify up to 25 WorkSpaces.</p>
   */
  TerminateWorkspaceRequests: TerminateRequest[] | undefined;
}

export namespace TerminateWorkspacesRequest {
  export const filterSensitiveLog = (obj: TerminateWorkspacesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TerminateWorkspacesRequest =>
    __isa(o, "TerminateWorkspacesRequest");
}

export interface TerminateWorkspacesResult {
  __type?: "TerminateWorkspacesResult";
  /**
   * <p>Information about the WorkSpaces that could not be terminated.</p>
   */
  FailedRequests?: FailedWorkspaceChangeRequest[];
}

export namespace TerminateWorkspacesResult {
  export const filterSensitiveLog = (obj: TerminateWorkspacesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is TerminateWorkspacesResult =>
    __isa(o, "TerminateWorkspacesResult");
}

/**
 * <p>The configuration of this network is not supported for this operation, or your network configuration
 *          conflicts with the Amazon WorkSpaces management network IP range. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces-vpc.html">
 *             Configure a VPC for Amazon WorkSpaces</a>.</p>
 */
export interface UnsupportedNetworkConfigurationException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedNetworkConfigurationException";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedNetworkConfigurationException {
  export const filterSensitiveLog = (
    obj: UnsupportedNetworkConfigurationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedNetworkConfigurationException =>
    __isa(o, "UnsupportedNetworkConfigurationException");
}

/**
 * <p>The configuration of this WorkSpace is not supported for this operation. For more information, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/required-service-components.html">Required
 *             Configuration and Service Components for WorkSpaces </a>.</p>
 */
export interface UnsupportedWorkspaceConfigurationException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedWorkspaceConfigurationException";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedWorkspaceConfigurationException {
  export const filterSensitiveLog = (
    obj: UnsupportedWorkspaceConfigurationException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is UnsupportedWorkspaceConfigurationException =>
    __isa(o, "UnsupportedWorkspaceConfigurationException");
}

export interface UpdateRulesOfIpGroupRequest {
  __type?: "UpdateRulesOfIpGroupRequest";
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
  export const filterSensitiveLog = (
    obj: UpdateRulesOfIpGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRulesOfIpGroupRequest =>
    __isa(o, "UpdateRulesOfIpGroupRequest");
}

export interface UpdateRulesOfIpGroupResult {
  __type?: "UpdateRulesOfIpGroupResult";
}

export namespace UpdateRulesOfIpGroupResult {
  export const filterSensitiveLog = (obj: UpdateRulesOfIpGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateRulesOfIpGroupResult =>
    __isa(o, "UpdateRulesOfIpGroupResult");
}

/**
 * <p>Describes the user storage for a WorkSpace bundle.</p>
 */
export interface UserStorage {
  __type?: "UserStorage";
  /**
   * <p>The size of the user storage.</p>
   */
  Capacity?: string;
}

export namespace UserStorage {
  export const filterSensitiveLog = (obj: UserStorage): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserStorage => __isa(o, "UserStorage");
}

/**
 * <p>Describes a WorkSpace.</p>
 */
export interface Workspace {
  __type?: "Workspace";
  /**
   * <p>The identifier of the bundle used to create the WorkSpace.</p>
   */
  BundleId?: string;

  /**
   * <p>The name of the WorkSpace, as seen by the operating system.</p>
   */
  ComputerName?: string;

  /**
   * <p>The identifier of the AWS Directory Service directory for the WorkSpace.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The error code that is returned if the WorkSpace cannot be created.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned if the WorkSpace cannot be
   *          created.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The IP address of the WorkSpace.</p>
   */
  IpAddress?: string;

  /**
   * <p>The modification states of the WorkSpace.</p>
   */
  ModificationStates?: ModificationState[];

  /**
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   */
  RootVolumeEncryptionEnabled?: boolean;

  /**
   * <p>The operational state of the WorkSpace.</p>
   */
  State?: WorkspaceState | string;

  /**
   * <p>The identifier of the subnet for the WorkSpace.</p>
   */
  SubnetId?: string;

  /**
   * <p>The user for the WorkSpace.</p>
   */
  UserName?: string;

  /**
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   */
  UserVolumeEncryptionEnabled?: boolean;

  /**
   * <p>The symmetric AWS KMS customer master key (CMK) used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric CMKs.</p>
   */
  VolumeEncryptionKey?: string;

  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;

  /**
   * <p>The properties of the WorkSpace.</p>
   */
  WorkspaceProperties?: WorkspaceProperties;
}

export namespace Workspace {
  export const filterSensitiveLog = (obj: Workspace): any => ({
    ...obj
  });
  export const isa = (o: any): o is Workspace => __isa(o, "Workspace");
}

/**
 * <p>The device types and operating systems that can be used to access a WorkSpace. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon
 *             WorkSpaces Client Network Requirements</a>.</p>
 */
export interface WorkspaceAccessProperties {
  __type?: "WorkspaceAccessProperties";
  /**
   * <p>Indicates whether users can use Android devices to access their WorkSpaces.</p>
   */
  DeviceTypeAndroid?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use Chromebooks to access their WorkSpaces.</p>
   */
  DeviceTypeChromeOs?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use iOS devices to access their WorkSpaces.</p>
   */
  DeviceTypeIos?: AccessPropertyValue | string;

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
   * <p>Indicates whether users can use Windows clients to access their WorkSpaces. To restrict
   *          WorkSpaces access to trusted devices (also known as managed devices) with valid
   *          certificates, specify a value of <code>TRUST</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/trusted-devices.html">Restrict
   *             WorkSpaces Access to Trusted Devices</a>. </p>
   */
  DeviceTypeWindows?: AccessPropertyValue | string;

  /**
   * <p>Indicates whether users can use zero client devices to access their WorkSpaces.</p>
   */
  DeviceTypeZeroClient?: AccessPropertyValue | string;
}

export namespace WorkspaceAccessProperties {
  export const filterSensitiveLog = (obj: WorkspaceAccessProperties): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkspaceAccessProperties =>
    __isa(o, "WorkspaceAccessProperties");
}

/**
 * <p>Describes a WorkSpace bundle.</p>
 */
export interface WorkspaceBundle {
  __type?: "WorkspaceBundle";
  /**
   * <p>The bundle identifier.</p>
   */
  BundleId?: string;

  /**
   * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces Bundles</a>.</p>
   */
  ComputeType?: ComputeType;

  /**
   * <p>A description.</p>
   */
  Description?: string;

  /**
   * <p>The image identifier of the bundle.</p>
   */
  ImageId?: string;

  /**
   * <p>The last time that the bundle was updated.</p>
   */
  LastUpdatedTime?: Date;

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
   * <p>The size of the root volume.</p>
   */
  RootStorage?: RootStorage;

  /**
   * <p>The size of the user storage.</p>
   */
  UserStorage?: UserStorage;
}

export namespace WorkspaceBundle {
  export const filterSensitiveLog = (obj: WorkspaceBundle): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkspaceBundle =>
    __isa(o, "WorkspaceBundle");
}

/**
 * <p>Describes the connection status of a WorkSpace.</p>
 */
export interface WorkspaceConnectionStatus {
  __type?: "WorkspaceConnectionStatus";
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

  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId?: string;
}

export namespace WorkspaceConnectionStatus {
  export const filterSensitiveLog = (obj: WorkspaceConnectionStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkspaceConnectionStatus =>
    __isa(o, "WorkspaceConnectionStatus");
}

/**
 * <p>Describes the default properties that are used for creating WorkSpaces. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory
 *             Details for Your WorkSpaces</a>. </p>
 */
export interface WorkspaceCreationProperties {
  __type?: "WorkspaceCreationProperties";
  /**
   * <p>The identifier of your custom security group.</p>
   */
  CustomSecurityGroupId?: string;

  /**
   * <p>The default organizational unit (OU) for your WorkSpace directories.</p>
   */
  DefaultOu?: string;

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
}

export namespace WorkspaceCreationProperties {
  export const filterSensitiveLog = (
    obj: WorkspaceCreationProperties
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkspaceCreationProperties =>
    __isa(o, "WorkspaceCreationProperties");
}

/**
 * <p>Describes a directory that is used with Amazon WorkSpaces.</p>
 */
export interface WorkspaceDirectory {
  __type?: "WorkspaceDirectory";
  /**
   * <p>The directory alias.</p>
   */
  Alias?: string;

  /**
   * <p>The user name for the service account.</p>
   */
  CustomerUserName?: string;

  /**
   * <p>The directory identifier.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The name of the directory.</p>
   */
  DirectoryName?: string;

  /**
   * <p>The directory type.</p>
   */
  DirectoryType?: WorkspaceDirectoryType | string;

  /**
   * <p>The IP addresses of the DNS servers for the directory.</p>
   */
  DnsIpAddresses?: string[];

  /**
   * <p>The identifier of the IAM role. This is the role that allows Amazon WorkSpaces to make
   *          calls to other services, such as Amazon EC2, on your behalf.</p>
   */
  IamRoleId?: string;

  /**
   * <p>The registration code for the directory. This is the code that users enter in their
   *          Amazon WorkSpaces client application to connect to the directory.</p>
   */
  RegistrationCode?: string;

  /**
   * <p>The default self-service permissions for WorkSpaces in the directory.</p>
   */
  SelfservicePermissions?: SelfservicePermissions;

  /**
   * <p>The state of the directory's registration with Amazon WorkSpaces.</p>
   */
  State?: WorkspaceDirectoryState | string;

  /**
   * <p>The identifiers of the subnets used with the directory.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>Specifies whether the directory is dedicated or shared. To use Bring Your Own License
   *          (BYOL), this value must be set to <code>DEDICATED</code>. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">Bring
   *             Your Own Windows Desktop Images</a>.</p>
   */
  Tenancy?: Tenancy | string;

  /**
   * <p>The devices and operating systems that users can use to access WorkSpaces.</p>
   */
  WorkspaceAccessProperties?: WorkspaceAccessProperties;

  /**
   * <p>The default creation properties for all WorkSpaces in the directory.</p>
   */
  WorkspaceCreationProperties?: DefaultWorkspaceCreationProperties;

  /**
   * <p>The identifier of the security group that is assigned to new WorkSpaces.</p>
   */
  WorkspaceSecurityGroupId?: string;

  /**
   * <p>The identifiers of the IP access control groups associated with the directory.</p>
   */
  ipGroupIds?: string[];
}

export namespace WorkspaceDirectory {
  export const filterSensitiveLog = (obj: WorkspaceDirectory): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkspaceDirectory =>
    __isa(o, "WorkspaceDirectory");
}

export enum WorkspaceDirectoryState {
  DEREGISTERED = "DEREGISTERED",
  DEREGISTERING = "DEREGISTERING",
  ERROR = "ERROR",
  REGISTERED = "REGISTERED",
  REGISTERING = "REGISTERING"
}

export enum WorkspaceDirectoryType {
  AD_CONNECTOR = "AD_CONNECTOR",
  SIMPLE_AD = "SIMPLE_AD"
}

/**
 * <p>Describes a WorkSpace image.</p>
 */
export interface WorkspaceImage {
  __type?: "WorkspaceImage";
  /**
   * <p>The description of the image.</p>
   */
  Description?: string;

  /**
   * <p>The error code that is returned for the image.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message that is returned for the image.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the image.</p>
   */
  Name?: string;

  /**
   * <p>The operating system that the image is running. </p>
   */
  OperatingSystem?: OperatingSystem;

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
}

export namespace WorkspaceImage {
  export const filterSensitiveLog = (obj: WorkspaceImage): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkspaceImage =>
    __isa(o, "WorkspaceImage");
}

export enum WorkspaceImageIngestionProcess {
  BYOL_GRAPHICS = "BYOL_GRAPHICS",
  BYOL_GRAPHICSPRO = "BYOL_GRAPHICSPRO",
  BYOL_REGULAR = "BYOL_REGULAR"
}

export enum WorkspaceImageRequiredTenancy {
  DEDICATED = "DEDICATED",
  DEFAULT = "DEFAULT"
}

export enum WorkspaceImageState {
  AVAILABLE = "AVAILABLE",
  ERROR = "ERROR",
  PENDING = "PENDING"
}

/**
 * <p>Describes a WorkSpace.</p>
 */
export interface WorkspaceProperties {
  __type?: "WorkspaceProperties";
  /**
   * <p>The compute type. For more information, see <a href="http://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles">Amazon WorkSpaces
   *          Bundles</a>.</p>
   */
  ComputeTypeName?: Compute | string;

  /**
   * <p>The size of the root volume.</p>
   */
  RootVolumeSizeGib?: number;

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
   * <p>The size of the user storage.</p>
   */
  UserVolumeSizeGib?: number;
}

export namespace WorkspaceProperties {
  export const filterSensitiveLog = (obj: WorkspaceProperties): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkspaceProperties =>
    __isa(o, "WorkspaceProperties");
}

/**
 * <p>Describes the information used to create a WorkSpace.</p>
 */
export interface WorkspaceRequest {
  __type?: "WorkspaceRequest";
  /**
   * <p>The identifier of the bundle for the WorkSpace. You can use <a>DescribeWorkspaceBundles</a> to list the available bundles.</p>
   */
  BundleId: string | undefined;

  /**
   * <p>The identifier of the AWS Directory Service directory for the WorkSpace. You can use
   *             <a>DescribeWorkspaceDirectories</a> to list the available directories.</p>
   */
  DirectoryId: string | undefined;

  /**
   * <p>Indicates whether the data stored on the root volume is encrypted.</p>
   */
  RootVolumeEncryptionEnabled?: boolean;

  /**
   * <p>The tags for the WorkSpace.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The user name of the user for the WorkSpace. This user name must exist in the AWS
   *          Directory Service directory for the WorkSpace.</p>
   */
  UserName: string | undefined;

  /**
   * <p>Indicates whether the data stored on the user volume is encrypted.</p>
   */
  UserVolumeEncryptionEnabled?: boolean;

  /**
   * <p>The symmetric AWS KMS customer master key (CMK) used to encrypt data stored on your WorkSpace.
   *          Amazon WorkSpaces does not support asymmetric CMKs.</p>
   */
  VolumeEncryptionKey?: string;

  /**
   * <p>The WorkSpace properties.</p>
   */
  WorkspaceProperties?: WorkspaceProperties;
}

export namespace WorkspaceRequest {
  export const filterSensitiveLog = (obj: WorkspaceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkspaceRequest =>
    __isa(o, "WorkspaceRequest");
}

/**
 * <p>The workspaces_DefaultRole role could not be found. If this is the first time you are registering a directory, you
 *          will need to create the workspaces_DefaultRole role before you can register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role">Creating the workspaces_DefaultRole Role</a>.</p>
 */
export interface WorkspacesDefaultRoleNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "WorkspacesDefaultRoleNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace WorkspacesDefaultRoleNotFoundException {
  export const filterSensitiveLog = (
    obj: WorkspacesDefaultRoleNotFoundException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkspacesDefaultRoleNotFoundException =>
    __isa(o, "WorkspacesDefaultRoleNotFoundException");
}

/**
 * <p>Describes an IP access control group.</p>
 */
export interface WorkspacesIpGroup {
  __type?: "WorkspacesIpGroup";
  /**
   * <p>The description of the group.</p>
   */
  groupDesc?: string;

  /**
   * <p>The identifier of the group.</p>
   */
  groupId?: string;

  /**
   * <p>The name of the group.</p>
   */
  groupName?: string;

  /**
   * <p>The rules.</p>
   */
  userRules?: IpRuleItem[];
}

export namespace WorkspacesIpGroup {
  export const filterSensitiveLog = (obj: WorkspacesIpGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkspacesIpGroup =>
    __isa(o, "WorkspacesIpGroup");
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
  UPDATING = "UPDATING"
}
