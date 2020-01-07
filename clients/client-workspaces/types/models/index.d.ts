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
export declare namespace AccessDeniedException {
    function isa(o: any): o is AccessDeniedException;
}
export declare enum AccessPropertyValue {
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
export declare namespace AccountModification {
    function isa(o: any): o is AccountModification;
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
export declare namespace AssociateIpGroupsRequest {
    function isa(o: any): o is AssociateIpGroupsRequest;
}
export interface AssociateIpGroupsResult {
    __type?: "AssociateIpGroupsResult";
}
export declare namespace AssociateIpGroupsResult {
    function isa(o: any): o is AssociateIpGroupsResult;
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
export declare namespace AuthorizeIpRulesRequest {
    function isa(o: any): o is AuthorizeIpRulesRequest;
}
export interface AuthorizeIpRulesResult {
    __type?: "AuthorizeIpRulesResult";
}
export declare namespace AuthorizeIpRulesResult {
    function isa(o: any): o is AuthorizeIpRulesResult;
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
export declare namespace ClientProperties {
    function isa(o: any): o is ClientProperties;
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
export declare namespace ClientPropertiesResult {
    function isa(o: any): o is ClientPropertiesResult;
}
export declare enum Compute {
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
export declare namespace ComputeType {
    function isa(o: any): o is ComputeType;
}
export declare enum ConnectionState {
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
export declare namespace CopyWorkspaceImageRequest {
    function isa(o: any): o is CopyWorkspaceImageRequest;
}
export interface CopyWorkspaceImageResult {
    __type?: "CopyWorkspaceImageResult";
    /**
     * <p>The identifier of the image.</p>
     */
    ImageId?: string;
}
export declare namespace CopyWorkspaceImageResult {
    function isa(o: any): o is CopyWorkspaceImageResult;
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
export declare namespace CreateIpGroupRequest {
    function isa(o: any): o is CreateIpGroupRequest;
}
export interface CreateIpGroupResult {
    __type?: "CreateIpGroupResult";
    /**
     * <p>The identifier of the group.</p>
     */
    GroupId?: string;
}
export declare namespace CreateIpGroupResult {
    function isa(o: any): o is CreateIpGroupResult;
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
export declare namespace CreateTagsRequest {
    function isa(o: any): o is CreateTagsRequest;
}
export interface CreateTagsResult {
    __type?: "CreateTagsResult";
}
export declare namespace CreateTagsResult {
    function isa(o: any): o is CreateTagsResult;
}
export interface CreateWorkspacesRequest {
    __type?: "CreateWorkspacesRequest";
    /**
     * <p>The WorkSpaces to create. You can specify up to 25 WorkSpaces.</p>
     */
    Workspaces: Array<WorkspaceRequest> | undefined;
}
export declare namespace CreateWorkspacesRequest {
    function isa(o: any): o is CreateWorkspacesRequest;
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
export declare namespace CreateWorkspacesResult {
    function isa(o: any): o is CreateWorkspacesResult;
}
export declare enum DedicatedTenancyModificationStateEnum {
    COMPLETED = "COMPLETED",
    FAILED = "FAILED",
    PENDING = "PENDING"
}
export declare enum DedicatedTenancySupportEnum {
    ENABLED = "ENABLED"
}
export declare enum DedicatedTenancySupportResultEnum {
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
export declare namespace DefaultWorkspaceCreationProperties {
    function isa(o: any): o is DefaultWorkspaceCreationProperties;
}
export interface DeleteIpGroupRequest {
    __type?: "DeleteIpGroupRequest";
    /**
     * <p>The identifier of the IP access control group.</p>
     */
    GroupId: string | undefined;
}
export declare namespace DeleteIpGroupRequest {
    function isa(o: any): o is DeleteIpGroupRequest;
}
export interface DeleteIpGroupResult {
    __type?: "DeleteIpGroupResult";
}
export declare namespace DeleteIpGroupResult {
    function isa(o: any): o is DeleteIpGroupResult;
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
export declare namespace DeleteTagsRequest {
    function isa(o: any): o is DeleteTagsRequest;
}
export interface DeleteTagsResult {
    __type?: "DeleteTagsResult";
}
export declare namespace DeleteTagsResult {
    function isa(o: any): o is DeleteTagsResult;
}
export interface DeleteWorkspaceImageRequest {
    __type?: "DeleteWorkspaceImageRequest";
    /**
     * <p>The identifier of the image.</p>
     */
    ImageId: string | undefined;
}
export declare namespace DeleteWorkspaceImageRequest {
    function isa(o: any): o is DeleteWorkspaceImageRequest;
}
export interface DeleteWorkspaceImageResult {
    __type?: "DeleteWorkspaceImageResult";
}
export declare namespace DeleteWorkspaceImageResult {
    function isa(o: any): o is DeleteWorkspaceImageResult;
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
export declare namespace DeregisterWorkspaceDirectoryRequest {
    function isa(o: any): o is DeregisterWorkspaceDirectoryRequest;
}
export interface DeregisterWorkspaceDirectoryResult {
    __type?: "DeregisterWorkspaceDirectoryResult";
}
export declare namespace DeregisterWorkspaceDirectoryResult {
    function isa(o: any): o is DeregisterWorkspaceDirectoryResult;
}
export interface DescribeAccountModificationsRequest {
    __type?: "DescribeAccountModificationsRequest";
    /**
     * <p>If you received a <code>NextToken</code> from a previous call that was paginated,
     *          provide this token to receive the next set of results.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeAccountModificationsRequest {
    function isa(o: any): o is DescribeAccountModificationsRequest;
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
export declare namespace DescribeAccountModificationsResult {
    function isa(o: any): o is DescribeAccountModificationsResult;
}
export interface DescribeAccountRequest {
    __type?: "DescribeAccountRequest";
}
export declare namespace DescribeAccountRequest {
    function isa(o: any): o is DescribeAccountRequest;
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
export declare namespace DescribeAccountResult {
    function isa(o: any): o is DescribeAccountResult;
}
export interface DescribeClientPropertiesRequest {
    __type?: "DescribeClientPropertiesRequest";
    /**
     * <p>The resource identifier, in the form of directory IDs.</p>
     */
    ResourceIds: Array<string> | undefined;
}
export declare namespace DescribeClientPropertiesRequest {
    function isa(o: any): o is DescribeClientPropertiesRequest;
}
export interface DescribeClientPropertiesResult {
    __type?: "DescribeClientPropertiesResult";
    /**
     * <p>Information about the specified Amazon WorkSpaces clients.</p>
     */
    ClientPropertiesList?: Array<ClientPropertiesResult>;
}
export declare namespace DescribeClientPropertiesResult {
    function isa(o: any): o is DescribeClientPropertiesResult;
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
export declare namespace DescribeIpGroupsRequest {
    function isa(o: any): o is DescribeIpGroupsRequest;
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
export declare namespace DescribeIpGroupsResult {
    function isa(o: any): o is DescribeIpGroupsResult;
}
export interface DescribeTagsRequest {
    __type?: "DescribeTagsRequest";
    /**
     * <p>The identifier of the WorkSpaces resource. The supported resource types are WorkSpaces,
     *          registered directories, images, custom bundles, and IP access control groups.</p>
     */
    ResourceId: string | undefined;
}
export declare namespace DescribeTagsRequest {
    function isa(o: any): o is DescribeTagsRequest;
}
export interface DescribeTagsResult {
    __type?: "DescribeTagsResult";
    /**
     * <p>The tags.</p>
     */
    TagList?: Array<Tag>;
}
export declare namespace DescribeTagsResult {
    function isa(o: any): o is DescribeTagsResult;
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
export declare namespace DescribeWorkspaceBundlesRequest {
    function isa(o: any): o is DescribeWorkspaceBundlesRequest;
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
export declare namespace DescribeWorkspaceBundlesResult {
    function isa(o: any): o is DescribeWorkspaceBundlesResult;
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
export declare namespace DescribeWorkspaceDirectoriesRequest {
    function isa(o: any): o is DescribeWorkspaceDirectoriesRequest;
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
export declare namespace DescribeWorkspaceDirectoriesResult {
    function isa(o: any): o is DescribeWorkspaceDirectoriesResult;
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
export declare namespace DescribeWorkspaceImagesRequest {
    function isa(o: any): o is DescribeWorkspaceImagesRequest;
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
export declare namespace DescribeWorkspaceImagesResult {
    function isa(o: any): o is DescribeWorkspaceImagesResult;
}
export interface DescribeWorkspaceSnapshotsRequest {
    __type?: "DescribeWorkspaceSnapshotsRequest";
    /**
     * <p>The identifier of the WorkSpace.</p>
     */
    WorkspaceId: string | undefined;
}
export declare namespace DescribeWorkspaceSnapshotsRequest {
    function isa(o: any): o is DescribeWorkspaceSnapshotsRequest;
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
export declare namespace DescribeWorkspaceSnapshotsResult {
    function isa(o: any): o is DescribeWorkspaceSnapshotsResult;
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
export declare namespace DescribeWorkspacesConnectionStatusRequest {
    function isa(o: any): o is DescribeWorkspacesConnectionStatusRequest;
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
export declare namespace DescribeWorkspacesConnectionStatusResult {
    function isa(o: any): o is DescribeWorkspacesConnectionStatusResult;
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
export declare namespace DescribeWorkspacesRequest {
    function isa(o: any): o is DescribeWorkspacesRequest;
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
export declare namespace DescribeWorkspacesResult {
    function isa(o: any): o is DescribeWorkspacesResult;
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
export declare namespace DisassociateIpGroupsRequest {
    function isa(o: any): o is DisassociateIpGroupsRequest;
}
export interface DisassociateIpGroupsResult {
    __type?: "DisassociateIpGroupsResult";
}
export declare namespace DisassociateIpGroupsResult {
    function isa(o: any): o is DisassociateIpGroupsResult;
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
export declare namespace FailedCreateWorkspaceRequest {
    function isa(o: any): o is FailedCreateWorkspaceRequest;
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
export declare namespace FailedWorkspaceChangeRequest {
    function isa(o: any): o is FailedWorkspaceChangeRequest;
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
export declare namespace ImportWorkspaceImageRequest {
    function isa(o: any): o is ImportWorkspaceImageRequest;
}
export interface ImportWorkspaceImageResult {
    __type?: "ImportWorkspaceImageResult";
    /**
     * <p>The identifier of the WorkSpace image.</p>
     */
    ImageId?: string;
}
export declare namespace ImportWorkspaceImageResult {
    function isa(o: any): o is ImportWorkspaceImageResult;
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
export declare namespace InvalidParameterValuesException {
    function isa(o: any): o is InvalidParameterValuesException;
}
/**
 * <p>The state of the resource is not valid for this operation.</p>
 */
export interface InvalidResourceStateException extends __SmithyException, $MetadataBearer {
    name: "InvalidResourceStateException";
    $fault: "client";
    message?: string;
}
export declare namespace InvalidResourceStateException {
    function isa(o: any): o is InvalidResourceStateException;
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
export declare namespace IpRuleItem {
    function isa(o: any): o is IpRuleItem;
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
export declare namespace ListAvailableManagementCidrRangesRequest {
    function isa(o: any): o is ListAvailableManagementCidrRangesRequest;
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
export declare namespace ListAvailableManagementCidrRangesResult {
    function isa(o: any): o is ListAvailableManagementCidrRangesResult;
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
export declare namespace MigrateWorkspaceRequest {
    function isa(o: any): o is MigrateWorkspaceRequest;
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
export declare namespace MigrateWorkspaceResult {
    function isa(o: any): o is MigrateWorkspaceResult;
}
export declare enum ModificationResourceEnum {
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
export declare namespace ModificationState {
    function isa(o: any): o is ModificationState;
}
export declare enum ModificationStateEnum {
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
export declare namespace ModifyAccountRequest {
    function isa(o: any): o is ModifyAccountRequest;
}
export interface ModifyAccountResult {
    __type?: "ModifyAccountResult";
}
export declare namespace ModifyAccountResult {
    function isa(o: any): o is ModifyAccountResult;
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
export declare namespace ModifyClientPropertiesRequest {
    function isa(o: any): o is ModifyClientPropertiesRequest;
}
export interface ModifyClientPropertiesResult {
    __type?: "ModifyClientPropertiesResult";
}
export declare namespace ModifyClientPropertiesResult {
    function isa(o: any): o is ModifyClientPropertiesResult;
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
export declare namespace ModifySelfservicePermissionsRequest {
    function isa(o: any): o is ModifySelfservicePermissionsRequest;
}
export interface ModifySelfservicePermissionsResult {
    __type?: "ModifySelfservicePermissionsResult";
}
export declare namespace ModifySelfservicePermissionsResult {
    function isa(o: any): o is ModifySelfservicePermissionsResult;
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
export declare namespace ModifyWorkspaceAccessPropertiesRequest {
    function isa(o: any): o is ModifyWorkspaceAccessPropertiesRequest;
}
export interface ModifyWorkspaceAccessPropertiesResult {
    __type?: "ModifyWorkspaceAccessPropertiesResult";
}
export declare namespace ModifyWorkspaceAccessPropertiesResult {
    function isa(o: any): o is ModifyWorkspaceAccessPropertiesResult;
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
export declare namespace ModifyWorkspaceCreationPropertiesRequest {
    function isa(o: any): o is ModifyWorkspaceCreationPropertiesRequest;
}
export interface ModifyWorkspaceCreationPropertiesResult {
    __type?: "ModifyWorkspaceCreationPropertiesResult";
}
export declare namespace ModifyWorkspaceCreationPropertiesResult {
    function isa(o: any): o is ModifyWorkspaceCreationPropertiesResult;
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
export declare namespace ModifyWorkspacePropertiesRequest {
    function isa(o: any): o is ModifyWorkspacePropertiesRequest;
}
export interface ModifyWorkspacePropertiesResult {
    __type?: "ModifyWorkspacePropertiesResult";
}
export declare namespace ModifyWorkspacePropertiesResult {
    function isa(o: any): o is ModifyWorkspacePropertiesResult;
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
export declare namespace ModifyWorkspaceStateRequest {
    function isa(o: any): o is ModifyWorkspaceStateRequest;
}
export interface ModifyWorkspaceStateResult {
    __type?: "ModifyWorkspaceStateResult";
}
export declare namespace ModifyWorkspaceStateResult {
    function isa(o: any): o is ModifyWorkspaceStateResult;
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
export declare namespace OperatingSystem {
    function isa(o: any): o is OperatingSystem;
}
export declare enum OperatingSystemType {
    LINUX = "LINUX",
    WINDOWS = "WINDOWS"
}
/**
 * <p>The properties of this WorkSpace are currently being modified. Try again in a moment.</p>
 */
export interface OperationInProgressException extends __SmithyException, $MetadataBearer {
    name: "OperationInProgressException";
    $fault: "client";
    message?: string;
}
export declare namespace OperationInProgressException {
    function isa(o: any): o is OperationInProgressException;
}
/**
 * <p>This operation is not supported.</p>
 */
export interface OperationNotSupportedException extends __SmithyException, $MetadataBearer {
    name: "OperationNotSupportedException";
    $fault: "client";
    message?: string;
}
export declare namespace OperationNotSupportedException {
    function isa(o: any): o is OperationNotSupportedException;
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
export declare namespace RebootRequest {
    function isa(o: any): o is RebootRequest;
}
export interface RebootWorkspacesRequest {
    __type?: "RebootWorkspacesRequest";
    /**
     * <p>The WorkSpaces to reboot. You can specify up to 25 WorkSpaces.</p>
     */
    RebootWorkspaceRequests: Array<RebootRequest> | undefined;
}
export declare namespace RebootWorkspacesRequest {
    function isa(o: any): o is RebootWorkspacesRequest;
}
export interface RebootWorkspacesResult {
    __type?: "RebootWorkspacesResult";
    /**
     * <p>Information about the WorkSpaces that could not be rebooted.</p>
     */
    FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}
export declare namespace RebootWorkspacesResult {
    function isa(o: any): o is RebootWorkspacesResult;
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
export declare namespace RebuildRequest {
    function isa(o: any): o is RebuildRequest;
}
export interface RebuildWorkspacesRequest {
    __type?: "RebuildWorkspacesRequest";
    /**
     * <p>The WorkSpace to rebuild. You can specify a single WorkSpace.</p>
     */
    RebuildWorkspaceRequests: Array<RebuildRequest> | undefined;
}
export declare namespace RebuildWorkspacesRequest {
    function isa(o: any): o is RebuildWorkspacesRequest;
}
export interface RebuildWorkspacesResult {
    __type?: "RebuildWorkspacesResult";
    /**
     * <p>Information about the WorkSpace that could not be rebuilt.</p>
     */
    FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}
export declare namespace RebuildWorkspacesResult {
    function isa(o: any): o is RebuildWorkspacesResult;
}
export declare enum ReconnectEnum {
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
export declare namespace RegisterWorkspaceDirectoryRequest {
    function isa(o: any): o is RegisterWorkspaceDirectoryRequest;
}
export interface RegisterWorkspaceDirectoryResult {
    __type?: "RegisterWorkspaceDirectoryResult";
}
export declare namespace RegisterWorkspaceDirectoryResult {
    function isa(o: any): o is RegisterWorkspaceDirectoryResult;
}
/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ResourceAlreadyExistsException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceAlreadyExistsException {
    function isa(o: any): o is ResourceAlreadyExistsException;
}
/**
 * <p>The resource is associated with a directory.</p>
 */
export interface ResourceAssociatedException extends __SmithyException, $MetadataBearer {
    name: "ResourceAssociatedException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceAssociatedException {
    function isa(o: any): o is ResourceAssociatedException;
}
/**
 * <p>The resource could not be created.</p>
 */
export interface ResourceCreationFailedException extends __SmithyException, $MetadataBearer {
    name: "ResourceCreationFailedException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceCreationFailedException {
    function isa(o: any): o is ResourceCreationFailedException;
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
export declare namespace ResourceLimitExceededException {
    function isa(o: any): o is ResourceLimitExceededException;
}
/**
 * <p>The resource could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
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
export declare namespace ResourceNotFoundException {
    function isa(o: any): o is ResourceNotFoundException;
}
/**
 * <p>The specified resource is not available.</p>
 */
export interface ResourceUnavailableException extends __SmithyException, $MetadataBearer {
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
export declare namespace ResourceUnavailableException {
    function isa(o: any): o is ResourceUnavailableException;
}
export interface RestoreWorkspaceRequest {
    __type?: "RestoreWorkspaceRequest";
    /**
     * <p>The identifier of the WorkSpace.</p>
     */
    WorkspaceId: string | undefined;
}
export declare namespace RestoreWorkspaceRequest {
    function isa(o: any): o is RestoreWorkspaceRequest;
}
export interface RestoreWorkspaceResult {
    __type?: "RestoreWorkspaceResult";
}
export declare namespace RestoreWorkspaceResult {
    function isa(o: any): o is RestoreWorkspaceResult;
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
export declare namespace RevokeIpRulesRequest {
    function isa(o: any): o is RevokeIpRulesRequest;
}
export interface RevokeIpRulesResult {
    __type?: "RevokeIpRulesResult";
}
export declare namespace RevokeIpRulesResult {
    function isa(o: any): o is RevokeIpRulesResult;
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
export declare namespace RootStorage {
    function isa(o: any): o is RootStorage;
}
export declare enum RunningMode {
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
export declare namespace SelfservicePermissions {
    function isa(o: any): o is SelfservicePermissions;
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
export declare namespace Snapshot {
    function isa(o: any): o is Snapshot;
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
export declare namespace StartRequest {
    function isa(o: any): o is StartRequest;
}
export interface StartWorkspacesRequest {
    __type?: "StartWorkspacesRequest";
    /**
     * <p>The WorkSpaces to start. You can specify up to 25 WorkSpaces.</p>
     */
    StartWorkspaceRequests: Array<StartRequest> | undefined;
}
export declare namespace StartWorkspacesRequest {
    function isa(o: any): o is StartWorkspacesRequest;
}
export interface StartWorkspacesResult {
    __type?: "StartWorkspacesResult";
    /**
     * <p>Information about the WorkSpaces that could not be started.</p>
     */
    FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}
export declare namespace StartWorkspacesResult {
    function isa(o: any): o is StartWorkspacesResult;
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
export declare namespace StopRequest {
    function isa(o: any): o is StopRequest;
}
export interface StopWorkspacesRequest {
    __type?: "StopWorkspacesRequest";
    /**
     * <p>The WorkSpaces to stop. You can specify up to 25 WorkSpaces.</p>
     */
    StopWorkspaceRequests: Array<StopRequest> | undefined;
}
export declare namespace StopWorkspacesRequest {
    function isa(o: any): o is StopWorkspacesRequest;
}
export interface StopWorkspacesResult {
    __type?: "StopWorkspacesResult";
    /**
     * <p>Information about the WorkSpaces that could not be stopped.</p>
     */
    FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}
export declare namespace StopWorkspacesResult {
    function isa(o: any): o is StopWorkspacesResult;
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
export declare namespace Tag {
    function isa(o: any): o is Tag;
}
export declare enum TargetWorkspaceState {
    ADMIN_MAINTENANCE = "ADMIN_MAINTENANCE",
    AVAILABLE = "AVAILABLE"
}
export declare enum Tenancy {
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
export declare namespace TerminateRequest {
    function isa(o: any): o is TerminateRequest;
}
export interface TerminateWorkspacesRequest {
    __type?: "TerminateWorkspacesRequest";
    /**
     * <p>The WorkSpaces to terminate. You can specify up to 25 WorkSpaces.</p>
     */
    TerminateWorkspaceRequests: Array<TerminateRequest> | undefined;
}
export declare namespace TerminateWorkspacesRequest {
    function isa(o: any): o is TerminateWorkspacesRequest;
}
export interface TerminateWorkspacesResult {
    __type?: "TerminateWorkspacesResult";
    /**
     * <p>Information about the WorkSpaces that could not be terminated.</p>
     */
    FailedRequests?: Array<FailedWorkspaceChangeRequest>;
}
export declare namespace TerminateWorkspacesResult {
    function isa(o: any): o is TerminateWorkspacesResult;
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
export declare namespace UnsupportedNetworkConfigurationException {
    function isa(o: any): o is UnsupportedNetworkConfigurationException;
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
export declare namespace UnsupportedWorkspaceConfigurationException {
    function isa(o: any): o is UnsupportedWorkspaceConfigurationException;
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
export declare namespace UpdateRulesOfIpGroupRequest {
    function isa(o: any): o is UpdateRulesOfIpGroupRequest;
}
export interface UpdateRulesOfIpGroupResult {
    __type?: "UpdateRulesOfIpGroupResult";
}
export declare namespace UpdateRulesOfIpGroupResult {
    function isa(o: any): o is UpdateRulesOfIpGroupResult;
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
export declare namespace UserStorage {
    function isa(o: any): o is UserStorage;
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
export declare namespace Workspace {
    function isa(o: any): o is Workspace;
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
export declare namespace WorkspaceAccessProperties {
    function isa(o: any): o is WorkspaceAccessProperties;
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
export declare namespace WorkspaceBundle {
    function isa(o: any): o is WorkspaceBundle;
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
export declare namespace WorkspaceConnectionStatus {
    function isa(o: any): o is WorkspaceConnectionStatus;
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
export declare namespace WorkspaceCreationProperties {
    function isa(o: any): o is WorkspaceCreationProperties;
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
export declare namespace WorkspaceDirectory {
    function isa(o: any): o is WorkspaceDirectory;
}
export declare enum WorkspaceDirectoryState {
    DEREGISTERED = "DEREGISTERED",
    DEREGISTERING = "DEREGISTERING",
    ERROR = "ERROR",
    REGISTERED = "REGISTERED",
    REGISTERING = "REGISTERING"
}
export declare enum WorkspaceDirectoryType {
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
export declare namespace WorkspaceImage {
    function isa(o: any): o is WorkspaceImage;
}
export declare enum WorkspaceImageIngestionProcess {
    BYOL_GRAPHICS = "BYOL_GRAPHICS",
    BYOL_GRAPHICSPRO = "BYOL_GRAPHICSPRO",
    BYOL_REGULAR = "BYOL_REGULAR"
}
export declare enum WorkspaceImageRequiredTenancy {
    DEDICATED = "DEDICATED",
    DEFAULT = "DEFAULT"
}
export declare enum WorkspaceImageState {
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
export declare namespace WorkspaceProperties {
    function isa(o: any): o is WorkspaceProperties;
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
export declare namespace WorkspaceRequest {
    function isa(o: any): o is WorkspaceRequest;
}
export declare enum WorkspaceState {
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
export interface WorkspacesDefaultRoleNotFoundException extends __SmithyException, $MetadataBearer {
    name: "WorkspacesDefaultRoleNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace WorkspacesDefaultRoleNotFoundException {
    function isa(o: any): o is WorkspacesDefaultRoleNotFoundException;
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
export declare namespace WorkspacesIpGroup {
    function isa(o: any): o is WorkspacesIpGroup;
}
