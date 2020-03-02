import {
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
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
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
  export function isa(o: any): o is AccountModification {
    return __isa(o, "AccountModification");
  }
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
  GroupIds: Array<string> | undefined;
}

export namespace AssociateIpGroupsRequest {
  export function isa(o: any): o is AssociateIpGroupsRequest {
    return __isa(o, "AssociateIpGroupsRequest");
  }
}

export interface AssociateIpGroupsResult {
  __type?: "AssociateIpGroupsResult";
}

export namespace AssociateIpGroupsResult {
  export function isa(o: any): o is AssociateIpGroupsResult {
    return __isa(o, "AssociateIpGroupsResult");
  }
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
  UserRules: Array<IpRuleItem> | undefined;
}

export namespace AuthorizeIpRulesRequest {
  export function isa(o: any): o is AuthorizeIpRulesRequest {
    return __isa(o, "AuthorizeIpRulesRequest");
  }
}

export interface AuthorizeIpRulesResult {
  __type?: "AuthorizeIpRulesResult";
}

export namespace AuthorizeIpRulesResult {
  export function isa(o: any): o is AuthorizeIpRulesResult {
    return __isa(o, "AuthorizeIpRulesResult");
  }
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
  export function isa(o: any): o is ClientProperties {
    return __isa(o, "ClientProperties");
  }
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
  export function isa(o: any): o is ClientPropertiesResult {
    return __isa(o, "ClientPropertiesResult");
  }
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
  export function isa(o: any): o is ComputeType {
    return __isa(o, "ComputeType");
  }
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
  Tags?: Array<Tag>;
}

export namespace CopyWorkspaceImageRequest {
  export function isa(o: any): o is CopyWorkspaceImageRequest {
    return __isa(o, "CopyWorkspaceImageRequest");
  }
}

export interface CopyWorkspaceImageResult {
  __type?: "CopyWorkspaceImageResult";
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;
}

export namespace CopyWorkspaceImageResult {
  export function isa(o: any): o is CopyWorkspaceImageResult {
    return __isa(o, "CopyWorkspaceImageResult");
  }
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
  Tags?: Array<Tag>;

  /**
   * <p>The rules to add to the group.</p>
   */
  UserRules?: Array<IpRuleItem>;
}

export namespace CreateIpGroupRequest {
  export function isa(o: any): o is CreateIpGroupRequest {
    return __isa(o, "CreateIpGroupRequest");
  }
}

export interface CreateIpGroupResult {
  __type?: "CreateIpGroupResult";
  /**
   * <p>The identifier of the group.</p>
   */
  GroupId?: string;
}

export namespace CreateIpGroupResult {
  export function isa(o: any): o is CreateIpGroupResult {
    return __isa(o, "CreateIpGroupResult");
  }
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
  Tags: Array<Tag> | undefined;
}

export namespace CreateTagsRequest {
  export function isa(o: any): o is CreateTagsRequest {
    return __isa(o, "CreateTagsRequest");
  }
}

export interface CreateTagsResult {
  __type?: "CreateTagsResult";
}

export namespace CreateTagsResult {
  export function isa(o: any): o is CreateTagsResult {
    return __isa(o, "CreateTagsResult");
  }
}

export interface CreateWorkspacesRequest {
  __type?: "CreateWorkspacesRequest";
  /**
   * <p>The WorkSpaces to create. You can specify up to 25 WorkSpaces.</p>
   */
  Workspaces: Array<WorkspaceRequest> | undefined;
}

export namespace CreateWorkspacesRequest {
  export function isa(o: any): o is CreateWorkspacesRequest {
    return __isa(o, "CreateWorkspacesRequest");
  }
}

export interface CreateWorkspacesResult {
  __type?: "CreateWorkspacesResult";
  /**
   * <p>Information about the WorkSpaces that could not be created.</p>
   */
  FailedRequests?: Array<FailedCreateWorkspaceRequest>;

  /**
   * <p>Information about the WorkSpaces that were created.</p>
   *          <p>Because this operation is asynchronous, the identifier returned is not immediately
   *          available for use with other operations. For example, if you call <a>DescribeWorkspaces</a> before the WorkSpace is created, the information returned
   *          can be incomplete.</p>
   */
  PendingRequests?: Array<Workspace>;
}

export namespace CreateWorkspacesResult {
  export function isa(o: any): o is CreateWorkspacesResult {
    return __isa(o, "CreateWorkspacesResult");
  }
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
  export function isa(o: any): o is DefaultWorkspaceCreationProperties {
    return __isa(o, "DefaultWorkspaceCreationProperties");
  }
}

export interface DeleteIpGroupRequest {
  __type?: "DeleteIpGroupRequest";
  /**
   * <p>The identifier of the IP access control group.</p>
   */
  GroupId: string | undefined;
}

export namespace DeleteIpGroupRequest {
  export function isa(o: any): o is DeleteIpGroupRequest {
    return __isa(o, "DeleteIpGroupRequest");
  }
}

export interface DeleteIpGroupResult {
  __type?: "DeleteIpGroupResult";
}

export namespace DeleteIpGroupResult {
  export function isa(o: any): o is DeleteIpGroupResult {
    return __isa(o, "DeleteIpGroupResult");
  }
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
  TagKeys: Array<string> | undefined;
}

export namespace DeleteTagsRequest {
  export function isa(o: any): o is DeleteTagsRequest {
    return __isa(o, "DeleteTagsRequest");
  }
}

export interface DeleteTagsResult {
  __type?: "DeleteTagsResult";
}

export namespace DeleteTagsResult {
  export function isa(o: any): o is DeleteTagsResult {
    return __isa(o, "DeleteTagsResult");
  }
}

export interface DeleteWorkspaceImageRequest {
  __type?: "DeleteWorkspaceImageRequest";
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId: string | undefined;
}

export namespace DeleteWorkspaceImageRequest {
  export function isa(o: any): o is DeleteWorkspaceImageRequest {
    return __isa(o, "DeleteWorkspaceImageRequest");
  }
}

export interface DeleteWorkspaceImageResult {
  __type?: "DeleteWorkspaceImageResult";
}

export namespace DeleteWorkspaceImageResult {
  export function isa(o: any): o is DeleteWorkspaceImageResult {
    return __isa(o, "DeleteWorkspaceImageResult");
  }
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
  export function isa(o: any): o is DeregisterWorkspaceDirectoryRequest {
    return __isa(o, "DeregisterWorkspaceDirectoryRequest");
  }
}

export interface DeregisterWorkspaceDirectoryResult {
  __type?: "DeregisterWorkspaceDirectoryResult";
}

export namespace DeregisterWorkspaceDirectoryResult {
  export function isa(o: any): o is DeregisterWorkspaceDirectoryResult {
    return __isa(o, "DeregisterWorkspaceDirectoryResult");
  }
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
  export function isa(o: any): o is DescribeAccountModificationsRequest {
    return __isa(o, "DescribeAccountModificationsRequest");
  }
}

export interface DescribeAccountModificationsResult {
  __type?: "DescribeAccountModificationsResult";
  /**
   * <p>The list of modifications to the configuration of BYOL.</p>
   */
  AccountModifications?: Array<AccountModification>;

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;
}

export namespace DescribeAccountModificationsResult {
  export function isa(o: any): o is DescribeAccountModificationsResult {
    return __isa(o, "DescribeAccountModificationsResult");
  }
}

export interface DescribeAccountRequest {
  __type?: "DescribeAccountRequest";
}

export namespace DescribeAccountRequest {
  export function isa(o: any): o is DescribeAccountRequest {
    return __isa(o, "DescribeAccountRequest");
  }
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
  export function isa(o: any): o is DescribeAccountResult {
    return __isa(o, "DescribeAccountResult");
  }
}

export interface DescribeClientPropertiesRequest {
  __type?: "DescribeClientPropertiesRequest";
  /**
   * <p>The resource identifier, in the form of directory IDs.</p>
   */
  ResourceIds: Array<string> | undefined;
}

export namespace DescribeClientPropertiesRequest {
  export function isa(o: any): o is DescribeClientPropertiesRequest {
    return __isa(o, "DescribeClientPropertiesRequest");
  }
}

export interface DescribeClientPropertiesResult {
  __type?: "DescribeClientPropertiesResult";
  /**
   * <p>Information about the specified Amazon WorkSpaces clients.</p>
   */
  ClientPropertiesList?: Array<ClientPropertiesResult>;
}

export namespace DescribeClientPropertiesResult {
  export function isa(o: any): o is DescribeClientPropertiesResult {
    return __isa(o, "DescribeClientPropertiesResult");
  }
}

export interface DescribeIpGroupsRequest {
  __type?: "DescribeIpGroupsRequest";
  /**
   * <p>The identifiers of one or more IP access control groups.</p>
   */
  GroupIds?: Array<string>;

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
  export function isa(o: any): o is DescribeIpGroupsRequest {
    return __isa(o, "DescribeIpGroupsRequest");
  }
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
  Result?: Array<WorkspacesIpGroup>;
}

export namespace DescribeIpGroupsResult {
  export function isa(o: any): o is DescribeIpGroupsResult {
    return __isa(o, "DescribeIpGroupsResult");
  }
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
  export function isa(o: any): o is DescribeTagsRequest {
    return __isa(o, "DescribeTagsRequest");
  }
}

export interface DescribeTagsResult {
  __type?: "DescribeTagsResult";
  /**
   * <p>The tags.</p>
   */
  TagList?: Array<Tag>;
}

export namespace DescribeTagsResult {
  export function isa(o: any): o is DescribeTagsResult {
    return __isa(o, "DescribeTagsResult");
  }
}

export interface DescribeWorkspaceBundlesRequest {
  __type?: "DescribeWorkspaceBundlesRequest";
  /**
   * <p>The identifiers of the bundles. You cannot combine this parameter with any other filter.</p>
   */
  BundleIds?: Array<string>;

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
  export function isa(o: any): o is DescribeWorkspaceBundlesRequest {
    return __isa(o, "DescribeWorkspaceBundlesRequest");
  }
}

export interface DescribeWorkspaceBundlesResult {
  __type?: "DescribeWorkspaceBundlesResult";
  /**
   * <p>Information about the bundles.</p>
   */
  Bundles?: Array<WorkspaceBundle>;

  /**
   * <p>The token to use to retrieve the next set of results, or null if there are no more results available.
   *          This token is valid for one day and must be used within that time frame.</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspaceBundlesResult {
  export function isa(o: any): o is DescribeWorkspaceBundlesResult {
    return __isa(o, "DescribeWorkspaceBundlesResult");
  }
}

export interface DescribeWorkspaceDirectoriesRequest {
  __type?: "DescribeWorkspaceDirectoriesRequest";
  /**
   * <p>The identifiers of the directories. If the value is null, all directories are
   *          retrieved.</p>
   */
  DirectoryIds?: Array<string>;

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
  export function isa(o: any): o is DescribeWorkspaceDirectoriesRequest {
    return __isa(o, "DescribeWorkspaceDirectoriesRequest");
  }
}

export interface DescribeWorkspaceDirectoriesResult {
  __type?: "DescribeWorkspaceDirectoriesResult";
  /**
   * <p>Information about the directories.</p>
   */
  Directories?: Array<WorkspaceDirectory>;

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspaceDirectoriesResult {
  export function isa(o: any): o is DescribeWorkspaceDirectoriesResult {
    return __isa(o, "DescribeWorkspaceDirectoriesResult");
  }
}

export interface DescribeWorkspaceImagesRequest {
  __type?: "DescribeWorkspaceImagesRequest";
  /**
   * <p>The identifier of the image.</p>
   */
  ImageIds?: Array<string>;

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
  export function isa(o: any): o is DescribeWorkspaceImagesRequest {
    return __isa(o, "DescribeWorkspaceImagesRequest");
  }
}

export interface DescribeWorkspaceImagesResult {
  __type?: "DescribeWorkspaceImagesResult";
  /**
   * <p>Information about the images.</p>
   */
  Images?: Array<WorkspaceImage>;

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;
}

export namespace DescribeWorkspaceImagesResult {
  export function isa(o: any): o is DescribeWorkspaceImagesResult {
    return __isa(o, "DescribeWorkspaceImagesResult");
  }
}

export interface DescribeWorkspaceSnapshotsRequest {
  __type?: "DescribeWorkspaceSnapshotsRequest";
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace DescribeWorkspaceSnapshotsRequest {
  export function isa(o: any): o is DescribeWorkspaceSnapshotsRequest {
    return __isa(o, "DescribeWorkspaceSnapshotsRequest");
  }
}

export interface DescribeWorkspaceSnapshotsResult {
  __type?: "DescribeWorkspaceSnapshotsResult";
  /**
   * <p>Information about the snapshots that can be used to rebuild a WorkSpace. These snapshots include
   *          the user volume.</p>
   */
  RebuildSnapshots?: Array<Snapshot>;

  /**
   * <p>Information about the snapshots that can be used to restore a WorkSpace. These snapshots
   *          include both the root volume and the user volume.</p>
   */
  RestoreSnapshots?: Array<Snapshot>;
}

export namespace DescribeWorkspaceSnapshotsResult {
  export function isa(o: any): o is DescribeWorkspaceSnapshotsResult {
    return __isa(o, "DescribeWorkspaceSnapshotsResult");
  }
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
  WorkspaceIds?: Array<string>;
}

export namespace DescribeWorkspacesConnectionStatusRequest {
  export function isa(o: any): o is DescribeWorkspacesConnectionStatusRequest {
    return __isa(o, "DescribeWorkspacesConnectionStatusRequest");
  }
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
  WorkspacesConnectionStatus?: Array<WorkspaceConnectionStatus>;
}

export namespace DescribeWorkspacesConnectionStatusResult {
  export function isa(o: any): o is DescribeWorkspacesConnectionStatusResult {
    return __isa(o, "DescribeWorkspacesConnectionStatusResult");
  }
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
  WorkspaceIds?: Array<string>;
}

export namespace DescribeWorkspacesRequest {
  export function isa(o: any): o is DescribeWorkspacesRequest {
    return __isa(o, "DescribeWorkspacesRequest");
  }
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
  Workspaces?: Array<Workspace>;
}

export namespace DescribeWorkspacesResult {
  export function isa(o: any): o is DescribeWorkspacesResult {
    return __isa(o, "DescribeWorkspacesResult");
  }
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
  GroupIds: Array<string> | undefined;
}

export namespace DisassociateIpGroupsRequest {
  export function isa(o: any): o is DisassociateIpGroupsRequest {
    return __isa(o, "DisassociateIpGroupsRequest");
  }
}

export interface DisassociateIpGroupsResult {
  __type?: "DisassociateIpGroupsResult";
}

export namespace DisassociateIpGroupsResult {
  export function isa(o: any): o is DisassociateIpGroupsResult {
    return __isa(o, "DisassociateIpGroupsResult");
  }
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
  export function isa(o: any): o is FailedCreateWorkspaceRequest {
    return __isa(o, "FailedCreateWorkspaceRequest");
  }
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
  export function isa(o: any): o is FailedWorkspaceChangeRequest {
    return __isa(o, "FailedWorkspaceChangeRequest");
  }
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
  Tags?: Array<Tag>;
}

export namespace ImportWorkspaceImageRequest {
  export function isa(o: any): o is ImportWorkspaceImageRequest {
    return __isa(o, "ImportWorkspaceImageRequest");
  }
}

export interface ImportWorkspaceImageResult {
  __type?: "ImportWorkspaceImageResult";
  /**
   * <p>The identifier of the WorkSpace image.</p>
   */
  ImageId?: string;
}

export namespace ImportWorkspaceImageResult {
  export function isa(o: any): o is ImportWorkspaceImageResult {
    return __isa(o, "ImportWorkspaceImageResult");
  }
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
  export function isa(o: any): o is InvalidParameterValuesException {
    return __isa(o, "InvalidParameterValuesException");
  }
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
  export function isa(o: any): o is InvalidResourceStateException {
    return __isa(o, "InvalidResourceStateException");
  }
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
  export function isa(o: any): o is IpRuleItem {
    return __isa(o, "IpRuleItem");
  }
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
  export function isa(o: any): o is ListAvailableManagementCidrRangesRequest {
    return __isa(o, "ListAvailableManagementCidrRangesRequest");
  }
}

export interface ListAvailableManagementCidrRangesResult {
  __type?: "ListAvailableManagementCidrRangesResult";
  /**
   * <p>The list of available IP address ranges, specified as IPv4 CIDR blocks.</p>
   */
  ManagementCidrRanges?: Array<string>;

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are
   *          available.</p>
   */
  NextToken?: string;
}

export namespace ListAvailableManagementCidrRangesResult {
  export function isa(o: any): o is ListAvailableManagementCidrRangesResult {
    return __isa(o, "ListAvailableManagementCidrRangesResult");
  }
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
  export function isa(o: any): o is MigrateWorkspaceRequest {
    return __isa(o, "MigrateWorkspaceRequest");
  }
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
  export function isa(o: any): o is MigrateWorkspaceResult {
    return __isa(o, "MigrateWorkspaceResult");
  }
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
  export function isa(o: any): o is ModificationState {
    return __isa(o, "ModificationState");
  }
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
  export function isa(o: any): o is ModifyAccountRequest {
    return __isa(o, "ModifyAccountRequest");
  }
}

export interface ModifyAccountResult {
  __type?: "ModifyAccountResult";
}

export namespace ModifyAccountResult {
  export function isa(o: any): o is ModifyAccountResult {
    return __isa(o, "ModifyAccountResult");
  }
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
  export function isa(o: any): o is ModifyClientPropertiesRequest {
    return __isa(o, "ModifyClientPropertiesRequest");
  }
}

export interface ModifyClientPropertiesResult {
  __type?: "ModifyClientPropertiesResult";
}

export namespace ModifyClientPropertiesResult {
  export function isa(o: any): o is ModifyClientPropertiesResult {
    return __isa(o, "ModifyClientPropertiesResult");
  }
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
  export function isa(o: any): o is ModifySelfservicePermissionsRequest {
    return __isa(o, "ModifySelfservicePermissionsRequest");
  }
}

export interface ModifySelfservicePermissionsResult {
  __type?: "ModifySelfservicePermissionsResult";
}

export namespace ModifySelfservicePermissionsResult {
  export function isa(o: any): o is ModifySelfservicePermissionsResult {
    return __isa(o, "ModifySelfservicePermissionsResult");
  }
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
  export function isa(o: any): o is ModifyWorkspaceAccessPropertiesRequest {
    return __isa(o, "ModifyWorkspaceAccessPropertiesRequest");
  }
}

export interface ModifyWorkspaceAccessPropertiesResult {
  __type?: "ModifyWorkspaceAccessPropertiesResult";
}

export namespace ModifyWorkspaceAccessPropertiesResult {
  export function isa(o: any): o is ModifyWorkspaceAccessPropertiesResult {
    return __isa(o, "ModifyWorkspaceAccessPropertiesResult");
  }
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
  export function isa(o: any): o is ModifyWorkspaceCreationPropertiesRequest {
    return __isa(o, "ModifyWorkspaceCreationPropertiesRequest");
  }
}

export interface ModifyWorkspaceCreationPropertiesResult {
  __type?: "ModifyWorkspaceCreationPropertiesResult";
}

export namespace ModifyWorkspaceCreationPropertiesResult {
  export function isa(o: any): o is ModifyWorkspaceCreationPropertiesResult {
    return __isa(o, "ModifyWorkspaceCreationPropertiesResult");
  }
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
  export function isa(o: any): o is ModifyWorkspacePropertiesRequest {
    return __isa(o, "ModifyWorkspacePropertiesRequest");
  }
}

export interface ModifyWorkspacePropertiesResult {
  __type?: "ModifyWorkspacePropertiesResult";
}

export namespace ModifyWorkspacePropertiesResult {
  export function isa(o: any): o is ModifyWorkspacePropertiesResult {
    return __isa(o, "ModifyWorkspacePropertiesResult");
  }
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
  export function isa(o: any): o is ModifyWorkspaceStateRequest {
    return __isa(o, "ModifyWorkspaceStateRequest");
  }
}

export interface ModifyWorkspaceStateResult {
  __type?: "ModifyWorkspaceStateResult";
}

export namespace ModifyWorkspaceStateResult {
  export function isa(o: any): o is ModifyWorkspaceStateResult {
    return __isa(o, "ModifyWorkspaceStateResult");
  }
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
  export function isa(o: any): o is OperatingSystem {
    return __isa(o, "OperatingSystem");
  }
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
  export function isa(o: any): o is OperationInProgressException {
    return __isa(o, "OperationInProgressException");
  }
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
  export function isa(o: any): o is OperationNotSupportedException {
    return __isa(o, "OperationNotSupportedException");
  }
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
  export function isa(o: any): o is RebootRequest {
    return __isa(o, "RebootRequest");
  }
}

export interface RebootWorkspacesRequest {
  __type?: "RebootWorkspacesRequest";
  /**
   * <p>The WorkSpaces to reboot. You can specify up to 25 WorkSpaces.</p>
   */
  RebootWorkspaceRequests: Array<RebootRequest> | undefined;
}

export namespace RebootWorkspacesRequest {
  export function isa(o: any): o is RebootWorkspacesRequest {
    return __isa(o, "RebootWorkspacesRequest");
  }
}

export interface RebootWorkspacesResult {
  __type?: "RebootWorkspacesResult";
  /**
   * <p>Information about the WorkSpaces that could not be rebooted.</p>
   */
  FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}

export namespace RebootWorkspacesResult {
  export function isa(o: any): o is RebootWorkspacesResult {
    return __isa(o, "RebootWorkspacesResult");
  }
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
  export function isa(o: any): o is RebuildRequest {
    return __isa(o, "RebuildRequest");
  }
}

export interface RebuildWorkspacesRequest {
  __type?: "RebuildWorkspacesRequest";
  /**
   * <p>The WorkSpace to rebuild. You can specify a single WorkSpace.</p>
   */
  RebuildWorkspaceRequests: Array<RebuildRequest> | undefined;
}

export namespace RebuildWorkspacesRequest {
  export function isa(o: any): o is RebuildWorkspacesRequest {
    return __isa(o, "RebuildWorkspacesRequest");
  }
}

export interface RebuildWorkspacesResult {
  __type?: "RebuildWorkspacesResult";
  /**
   * <p>Information about the WorkSpace that could not be rebuilt.</p>
   */
  FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}

export namespace RebuildWorkspacesResult {
  export function isa(o: any): o is RebuildWorkspacesResult {
    return __isa(o, "RebuildWorkspacesResult");
  }
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
  SubnetIds?: Array<string>;

  /**
   * <p>The tags associated with the directory.</p>
   */
  Tags?: Array<Tag>;

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
  export function isa(o: any): o is RegisterWorkspaceDirectoryRequest {
    return __isa(o, "RegisterWorkspaceDirectoryRequest");
  }
}

export interface RegisterWorkspaceDirectoryResult {
  __type?: "RegisterWorkspaceDirectoryResult";
}

export namespace RegisterWorkspaceDirectoryResult {
  export function isa(o: any): o is RegisterWorkspaceDirectoryResult {
    return __isa(o, "RegisterWorkspaceDirectoryResult");
  }
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
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return __isa(o, "ResourceAlreadyExistsException");
  }
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
  export function isa(o: any): o is ResourceAssociatedException {
    return __isa(o, "ResourceAssociatedException");
  }
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
  export function isa(o: any): o is ResourceCreationFailedException {
    return __isa(o, "ResourceCreationFailedException");
  }
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
  export function isa(o: any): o is ResourceLimitExceededException {
    return __isa(o, "ResourceLimitExceededException");
  }
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
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
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
  export function isa(o: any): o is ResourceUnavailableException {
    return __isa(o, "ResourceUnavailableException");
  }
}

export interface RestoreWorkspaceRequest {
  __type?: "RestoreWorkspaceRequest";
  /**
   * <p>The identifier of the WorkSpace.</p>
   */
  WorkspaceId: string | undefined;
}

export namespace RestoreWorkspaceRequest {
  export function isa(o: any): o is RestoreWorkspaceRequest {
    return __isa(o, "RestoreWorkspaceRequest");
  }
}

export interface RestoreWorkspaceResult {
  __type?: "RestoreWorkspaceResult";
}

export namespace RestoreWorkspaceResult {
  export function isa(o: any): o is RestoreWorkspaceResult {
    return __isa(o, "RestoreWorkspaceResult");
  }
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
  UserRules: Array<string> | undefined;
}

export namespace RevokeIpRulesRequest {
  export function isa(o: any): o is RevokeIpRulesRequest {
    return __isa(o, "RevokeIpRulesRequest");
  }
}

export interface RevokeIpRulesResult {
  __type?: "RevokeIpRulesResult";
}

export namespace RevokeIpRulesResult {
  export function isa(o: any): o is RevokeIpRulesResult {
    return __isa(o, "RevokeIpRulesResult");
  }
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
  export function isa(o: any): o is RootStorage {
    return __isa(o, "RootStorage");
  }
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
  export function isa(o: any): o is SelfservicePermissions {
    return __isa(o, "SelfservicePermissions");
  }
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
  export function isa(o: any): o is Snapshot {
    return __isa(o, "Snapshot");
  }
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
  export function isa(o: any): o is StartRequest {
    return __isa(o, "StartRequest");
  }
}

export interface StartWorkspacesRequest {
  __type?: "StartWorkspacesRequest";
  /**
   * <p>The WorkSpaces to start. You can specify up to 25 WorkSpaces.</p>
   */
  StartWorkspaceRequests: Array<StartRequest> | undefined;
}

export namespace StartWorkspacesRequest {
  export function isa(o: any): o is StartWorkspacesRequest {
    return __isa(o, "StartWorkspacesRequest");
  }
}

export interface StartWorkspacesResult {
  __type?: "StartWorkspacesResult";
  /**
   * <p>Information about the WorkSpaces that could not be started.</p>
   */
  FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}

export namespace StartWorkspacesResult {
  export function isa(o: any): o is StartWorkspacesResult {
    return __isa(o, "StartWorkspacesResult");
  }
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
  export function isa(o: any): o is StopRequest {
    return __isa(o, "StopRequest");
  }
}

export interface StopWorkspacesRequest {
  __type?: "StopWorkspacesRequest";
  /**
   * <p>The WorkSpaces to stop. You can specify up to 25 WorkSpaces.</p>
   */
  StopWorkspaceRequests: Array<StopRequest> | undefined;
}

export namespace StopWorkspacesRequest {
  export function isa(o: any): o is StopWorkspacesRequest {
    return __isa(o, "StopWorkspacesRequest");
  }
}

export interface StopWorkspacesResult {
  __type?: "StopWorkspacesResult";
  /**
   * <p>Information about the WorkSpaces that could not be stopped.</p>
   */
  FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}

export namespace StopWorkspacesResult {
  export function isa(o: any): o is StopWorkspacesResult {
    return __isa(o, "StopWorkspacesResult");
  }
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
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
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
  export function isa(o: any): o is TerminateRequest {
    return __isa(o, "TerminateRequest");
  }
}

export interface TerminateWorkspacesRequest {
  __type?: "TerminateWorkspacesRequest";
  /**
   * <p>The WorkSpaces to terminate. You can specify up to 25 WorkSpaces.</p>
   */
  TerminateWorkspaceRequests: Array<TerminateRequest> | undefined;
}

export namespace TerminateWorkspacesRequest {
  export function isa(o: any): o is TerminateWorkspacesRequest {
    return __isa(o, "TerminateWorkspacesRequest");
  }
}

export interface TerminateWorkspacesResult {
  __type?: "TerminateWorkspacesResult";
  /**
   * <p>Information about the WorkSpaces that could not be terminated.</p>
   */
  FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}

export namespace TerminateWorkspacesResult {
  export function isa(o: any): o is TerminateWorkspacesResult {
    return __isa(o, "TerminateWorkspacesResult");
  }
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
  export function isa(o: any): o is UnsupportedNetworkConfigurationException {
    return __isa(o, "UnsupportedNetworkConfigurationException");
  }
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
  export function isa(o: any): o is UnsupportedWorkspaceConfigurationException {
    return __isa(o, "UnsupportedWorkspaceConfigurationException");
  }
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
  UserRules: Array<IpRuleItem> | undefined;
}

export namespace UpdateRulesOfIpGroupRequest {
  export function isa(o: any): o is UpdateRulesOfIpGroupRequest {
    return __isa(o, "UpdateRulesOfIpGroupRequest");
  }
}

export interface UpdateRulesOfIpGroupResult {
  __type?: "UpdateRulesOfIpGroupResult";
}

export namespace UpdateRulesOfIpGroupResult {
  export function isa(o: any): o is UpdateRulesOfIpGroupResult {
    return __isa(o, "UpdateRulesOfIpGroupResult");
  }
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
  export function isa(o: any): o is UserStorage {
    return __isa(o, "UserStorage");
  }
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
  ModificationStates?: Array<ModificationState>;

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
  export function isa(o: any): o is Workspace {
    return __isa(o, "Workspace");
  }
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
  export function isa(o: any): o is WorkspaceAccessProperties {
    return __isa(o, "WorkspaceAccessProperties");
  }
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
  export function isa(o: any): o is WorkspaceBundle {
    return __isa(o, "WorkspaceBundle");
  }
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
  export function isa(o: any): o is WorkspaceConnectionStatus {
    return __isa(o, "WorkspaceConnectionStatus");
  }
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
  export function isa(o: any): o is WorkspaceCreationProperties {
    return __isa(o, "WorkspaceCreationProperties");
  }
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
  DnsIpAddresses?: Array<string>;

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
  SubnetIds?: Array<string>;

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
  ipGroupIds?: Array<string>;
}

export namespace WorkspaceDirectory {
  export function isa(o: any): o is WorkspaceDirectory {
    return __isa(o, "WorkspaceDirectory");
  }
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
  export function isa(o: any): o is WorkspaceImage {
    return __isa(o, "WorkspaceImage");
  }
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
  export function isa(o: any): o is WorkspaceProperties {
    return __isa(o, "WorkspaceProperties");
  }
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
  Tags?: Array<Tag>;

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
  export function isa(o: any): o is WorkspaceRequest {
    return __isa(o, "WorkspaceRequest");
  }
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
  export function isa(o: any): o is WorkspacesDefaultRoleNotFoundException {
    return __isa(o, "WorkspacesDefaultRoleNotFoundException");
  }
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
  userRules?: Array<IpRuleItem>;
}

export namespace WorkspacesIpGroup {
  export function isa(o: any): o is WorkspacesIpGroup {
    return __isa(o, "WorkspacesIpGroup");
  }
}
