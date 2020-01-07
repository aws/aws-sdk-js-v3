import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
/**
 * <p>Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint.</p>
 */
export interface AccessEndpoint {
    __type?: "AccessEndpoint";
    /**
     * <p>The type of interface endpoint.</p>
     */
    EndpointType: AccessEndpointType | string | undefined;
    /**
     * <p>The identifier (ID) of the VPC in which the interface endpoint is used.</p>
     */
    VpceId?: string;
}
export declare namespace AccessEndpoint {
    function isa(o: any): o is AccessEndpoint;
}
export declare enum AccessEndpointType {
    STREAMING = "STREAMING"
}
export declare enum Action {
    CLIPBOARD_COPY_FROM_LOCAL_DEVICE = "CLIPBOARD_COPY_FROM_LOCAL_DEVICE",
    CLIPBOARD_COPY_TO_LOCAL_DEVICE = "CLIPBOARD_COPY_TO_LOCAL_DEVICE",
    FILE_DOWNLOAD = "FILE_DOWNLOAD",
    FILE_UPLOAD = "FILE_UPLOAD",
    PRINTING_TO_LOCAL_DEVICE = "PRINTING_TO_LOCAL_DEVICE"
}
/**
 * <p>Describes an application in the application catalog.</p>
 */
export interface Application {
    __type?: "Application";
    /**
     * <p>The application name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>If there is a problem, the application can be disabled after image creation.</p>
     */
    Enabled?: boolean;
    /**
     * <p>The URL for the application icon. This URL might be time-limited.</p>
     */
    IconURL?: string;
    /**
     * <p>The arguments that are passed to the application at launch.</p>
     */
    LaunchParameters?: string;
    /**
     * <p>The path to the application executable in the instance.</p>
     */
    LaunchPath?: string;
    /**
     * <p>Additional attributes that describe the application.</p>
     */
    Metadata?: {
        [key: string]: string;
    };
    /**
     * <p>The name of the application.</p>
     */
    Name?: string;
}
export declare namespace Application {
    function isa(o: any): o is Application;
}
/**
 * <p>The persistent application settings for users of a stack.</p>
 */
export interface ApplicationSettings {
    __type?: "ApplicationSettings";
    /**
     * <p>Enables or disables persistent application settings for users during their streaming sessions. </p>
     */
    Enabled: boolean | undefined;
    /**
     * <p>The path prefix for the S3 bucket where users’ persistent application settings are stored. You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack. </p>
     */
    SettingsGroup?: string;
}
export declare namespace ApplicationSettings {
    function isa(o: any): o is ApplicationSettings;
}
/**
 * <p>Describes the persistent application settings for users of a stack.</p>
 */
export interface ApplicationSettingsResponse {
    __type?: "ApplicationSettingsResponse";
    /**
     * <p>Specifies whether persistent application settings are enabled for users during their streaming sessions.</p>
     */
    Enabled?: boolean;
    /**
     * <p>The S3 bucket where users’ persistent application settings are stored. When persistent application settings are enabled for the first time for an account in an AWS Region, an S3 bucket is created. The bucket is unique to the AWS account and the Region.
     *         </p>
     */
    S3BucketName?: string;
    /**
     * <p>The path prefix for the S3 bucket where users’ persistent application settings are stored.</p>
     */
    SettingsGroup?: string;
}
export declare namespace ApplicationSettingsResponse {
    function isa(o: any): o is ApplicationSettingsResponse;
}
export interface AssociateFleetRequest {
    __type?: "AssociateFleetRequest";
    /**
     * <p>The name of the fleet. </p>
     */
    FleetName: string | undefined;
    /**
     * <p>The name of the stack.</p>
     */
    StackName: string | undefined;
}
export declare namespace AssociateFleetRequest {
    function isa(o: any): o is AssociateFleetRequest;
}
export interface AssociateFleetResult {
    __type?: "AssociateFleetResult";
}
export declare namespace AssociateFleetResult {
    function isa(o: any): o is AssociateFleetResult;
}
export declare enum AuthenticationType {
    API = "API",
    SAML = "SAML",
    USERPOOL = "USERPOOL"
}
export interface BatchAssociateUserStackRequest {
    __type?: "BatchAssociateUserStackRequest";
    /**
     * <p>The list of UserStackAssociation objects.</p>
     */
    UserStackAssociations: Array<UserStackAssociation> | undefined;
}
export declare namespace BatchAssociateUserStackRequest {
    function isa(o: any): o is BatchAssociateUserStackRequest;
}
export interface BatchAssociateUserStackResult {
    __type?: "BatchAssociateUserStackResult";
    /**
     * <p>The list of UserStackAssociationError objects.</p>
     */
    errors?: Array<UserStackAssociationError>;
}
export declare namespace BatchAssociateUserStackResult {
    function isa(o: any): o is BatchAssociateUserStackResult;
}
export interface BatchDisassociateUserStackRequest {
    __type?: "BatchDisassociateUserStackRequest";
    /**
     * <p>The list of UserStackAssociation objects.</p>
     */
    UserStackAssociations: Array<UserStackAssociation> | undefined;
}
export declare namespace BatchDisassociateUserStackRequest {
    function isa(o: any): o is BatchDisassociateUserStackRequest;
}
export interface BatchDisassociateUserStackResult {
    __type?: "BatchDisassociateUserStackResult";
    /**
     * <p>The list of UserStackAssociationError objects.</p>
     */
    errors?: Array<UserStackAssociationError>;
}
export declare namespace BatchDisassociateUserStackResult {
    function isa(o: any): o is BatchDisassociateUserStackResult;
}
/**
 * <p>Describes the capacity for a fleet.</p>
 */
export interface ComputeCapacity {
    __type?: "ComputeCapacity";
    /**
     * <p>The desired number of streaming instances.</p>
     */
    DesiredInstances: number | undefined;
}
export declare namespace ComputeCapacity {
    function isa(o: any): o is ComputeCapacity;
}
/**
 * <p>Describes the capacity status for a fleet.</p>
 */
export interface ComputeCapacityStatus {
    __type?: "ComputeCapacityStatus";
    /**
     * <p>The number of currently available instances that can be used to stream
     *             sessions.</p>
     */
    Available?: number;
    /**
     * <p>The desired number of streaming instances.</p>
     */
    Desired: number | undefined;
    /**
     * <p>The number of instances in use for streaming.</p>
     */
    InUse?: number;
    /**
     * <p>The total number of simultaneous streaming instances that are running.</p>
     */
    Running?: number;
}
export declare namespace ComputeCapacityStatus {
    function isa(o: any): o is ComputeCapacityStatus;
}
/**
 * <p>An API error occurred. Wait a few minutes and try again.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
    name: "ConcurrentModificationException";
    $fault: "client";
    /**
     * <p>The error message in the exception.</p>
     */
    Message?: string;
}
export declare namespace ConcurrentModificationException {
    function isa(o: any): o is ConcurrentModificationException;
}
export interface CopyImageRequest {
    __type?: "CopyImageRequest";
    /**
     * <p>The description that the image will have when it is copied to the destination.</p>
     */
    DestinationImageDescription?: string;
    /**
     * <p>The name that the image will have when it is copied to the destination.</p>
     */
    DestinationImageName: string | undefined;
    /**
     * <p>The destination region to which the image will be copied. This parameter is required, even if you are copying an image within the same region.</p>
     */
    DestinationRegion: string | undefined;
    /**
     * <p>The name of the image to copy.</p>
     */
    SourceImageName: string | undefined;
}
export declare namespace CopyImageRequest {
    function isa(o: any): o is CopyImageRequest;
}
export interface CopyImageResponse {
    __type?: "CopyImageResponse";
    /**
     * <p>The name of the destination image.</p>
     */
    DestinationImageName?: string;
}
export declare namespace CopyImageResponse {
    function isa(o: any): o is CopyImageResponse;
}
export interface CreateDirectoryConfigRequest {
    __type?: "CreateDirectoryConfigRequest";
    /**
     * <p>The fully qualified name of the directory (for example, corp.example.com).</p>
     */
    DirectoryName: string | undefined;
    /**
     * <p>The distinguished names of the organizational units for computer accounts.</p>
     */
    OrganizationalUnitDistinguishedNames: Array<string> | undefined;
    /**
     * <p>The credentials for the service account used by the fleet or image builder to connect to the directory.</p>
     */
    ServiceAccountCredentials: ServiceAccountCredentials | undefined;
}
export declare namespace CreateDirectoryConfigRequest {
    function isa(o: any): o is CreateDirectoryConfigRequest;
}
export interface CreateDirectoryConfigResult {
    __type?: "CreateDirectoryConfigResult";
    /**
     * <p>Information about the directory configuration.</p>
     */
    DirectoryConfig?: DirectoryConfig;
}
export declare namespace CreateDirectoryConfigResult {
    function isa(o: any): o is CreateDirectoryConfigResult;
}
export interface CreateFleetRequest {
    __type?: "CreateFleetRequest";
    /**
     * <p>The desired capacity for the fleet.</p>
     */
    ComputeCapacity: ComputeCapacity | undefined;
    /**
     * <p>The description to display.</p>
     */
    Description?: string;
    /**
     * <p>The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance. </p>
     *         <p>Specify a value between 60 and 360000.</p>
     */
    DisconnectTimeoutInSeconds?: number;
    /**
     * <p>The fleet name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. </p>
     */
    DomainJoinInfo?: DomainJoinInfo;
    /**
     * <p>Enables or disables default internet access for the fleet.</p>
     */
    EnableDefaultInternetAccess?: boolean;
    /**
     * <p>The fleet type.</p>
     *         <dl>
     *             <dt>ALWAYS_ON</dt>
     *             <dd>
     *                     <p>Provides users with instant-on access to their apps.
     *                         You are charged for all running instances in your fleet, even if no users are streaming apps.</p>
     *                 </dd>
     *             <dt>ON_DEMAND</dt>
     *             <dd>
     *                     <p>Provide users with access to applications after they connect, which takes one to two minutes.
     *                         You are charged for instance streaming when users are connected and a
     *                         small hourly fee for instances that are not streaming apps.</p>
     *                 </dd>
     *          </dl>
     */
    FleetType?: FleetType | string;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role to apply to the fleet. To assume a role, a fleet instance calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>AppStream_Machine_Role</b> credential profile on the instance.</p>
     *
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    IamRoleArn?: string;
    /**
     * <p>The amount of time that users can be idle (inactive) before they are disconnected
     *             from their streaming session and the <code>DisconnectTimeoutInSeconds</code> time
     *             interval begins. Users are notified before they are disconnected due to inactivity. If
     *             they try to reconnect to the streaming session before the time interval specified in
     *             <code>DisconnectTimeoutInSeconds</code> elapses, they are connected to their
     *             previous session. Users are considered idle when they stop providing keyboard or mouse
     *             input during their streaming session. File uploads and downloads, audio in, audio out,
     *             and pixels changing do not qualify as user activity. If users continue to be idle after
     *             the time interval in <code>IdleDisconnectTimeoutInSeconds</code> elapses, they are
     *             disconnected.</p>
     *         <p>To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 3600. The default value is 0.</p>
     *         <note>
     *             <p>If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity. </p>
     *          </note>
     */
    IdleDisconnectTimeoutInSeconds?: number;
    /**
     * <p>The ARN of the public, private, or shared image to use.</p>
     */
    ImageArn?: string;
    /**
     * <p>The name of the image used to create the fleet.</p>
     */
    ImageName?: string;
    /**
     * <p>The instance type to use when launching fleet instances. The following instance types are available:</p>
     *         <ul>
     *             <li>
     *                <p>stream.standard.medium</p>
     *             </li>
     *             <li>
     *                <p>stream.standard.large</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.large</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.large</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.large</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-desktop.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.16xlarge</p>
     *             </li>
     *          </ul>
     */
    InstanceType: string | undefined;
    /**
     * <p>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.</p>
     *         <p>Specify a value between 600 and 360000.</p>
     */
    MaxUserDurationInSeconds?: number;
    /**
     * <p>A unique name for the fleet.</p>
     */
    Name: string | undefined;
    /**
     * <p>The tags to associate with the fleet. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p>
     *
     *         <p>If you do not specify a value, the value is set to an empty string.</p>
     *
     *         <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
     *         <p>_ . : / = + \ - @</p>
     *
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The VPC configuration for the fleet.</p>
     */
    VpcConfig?: VpcConfig;
}
export declare namespace CreateFleetRequest {
    function isa(o: any): o is CreateFleetRequest;
}
export interface CreateFleetResult {
    __type?: "CreateFleetResult";
    /**
     * <p>Information about the fleet.</p>
     */
    Fleet?: Fleet;
}
export declare namespace CreateFleetResult {
    function isa(o: any): o is CreateFleetResult;
}
export interface CreateImageBuilderRequest {
    __type?: "CreateImageBuilderRequest";
    /**
     * <p>The list of interface VPC endpoint (interface endpoint) objects. Administrators can connect to the image builder only through the specified endpoints.</p>
     */
    AccessEndpoints?: Array<AccessEndpoint>;
    /**
     * <p>The version of the AppStream 2.0 agent to use for this image builder. To use the latest version of the AppStream 2.0 agent, specify [LATEST]. </p>
     */
    AppstreamAgentVersion?: string;
    /**
     * <p>The description to display.</p>
     */
    Description?: string;
    /**
     * <p>The image builder name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain. </p>
     */
    DomainJoinInfo?: DomainJoinInfo;
    /**
     * <p>Enables or disables default internet access for the image builder.</p>
     */
    EnableDefaultInternetAccess?: boolean;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role to apply to the image builder. To assume a role, the image builder calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>AppStream_Machine_Role</b> credential profile on the instance.</p>
     *
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    IamRoleArn?: string;
    /**
     * <p>The ARN of the public, private, or shared image to use.</p>
     */
    ImageArn?: string;
    /**
     * <p>The name of the image used to create the image builder.</p>
     */
    ImageName?: string;
    /**
     * <p>The instance type to use when launching the image builder. The following instance types are available:</p>
     *         <ul>
     *             <li>
     *                <p>stream.standard.medium</p>
     *             </li>
     *             <li>
     *                <p>stream.standard.large</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.large</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.large</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.large</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-desktop.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.16xlarge</p>
     *             </li>
     *          </ul>
     */
    InstanceType: string | undefined;
    /**
     * <p>A unique name for the image builder.</p>
     */
    Name: string | undefined;
    /**
     * <p>The tags to associate with the image builder. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p>
     *
     *         <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
     *         <p>_ . : / = + \ - @</p>
     *
     *         <p>If you do not specify a value, the value is set to an empty string.</p>
     *
     *         <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The VPC configuration for the image builder. You can specify only one subnet.</p>
     */
    VpcConfig?: VpcConfig;
}
export declare namespace CreateImageBuilderRequest {
    function isa(o: any): o is CreateImageBuilderRequest;
}
export interface CreateImageBuilderResult {
    __type?: "CreateImageBuilderResult";
    /**
     * <p>Information about the image builder.</p>
     */
    ImageBuilder?: ImageBuilder;
}
export declare namespace CreateImageBuilderResult {
    function isa(o: any): o is CreateImageBuilderResult;
}
export interface CreateImageBuilderStreamingURLRequest {
    __type?: "CreateImageBuilderStreamingURLRequest";
    /**
     * <p>The name of the image builder.</p>
     */
    Name: string | undefined;
    /**
     * <p>The time that the streaming URL will be valid, in seconds.
     *             Specify a value between 1 and 604800 seconds. The default is 3600 seconds.</p>
     */
    Validity?: number;
}
export declare namespace CreateImageBuilderStreamingURLRequest {
    function isa(o: any): o is CreateImageBuilderStreamingURLRequest;
}
export interface CreateImageBuilderStreamingURLResult {
    __type?: "CreateImageBuilderStreamingURLResult";
    /**
     * <p>The elapsed time, in seconds after the Unix epoch, when this URL expires.</p>
     */
    Expires?: Date;
    /**
     * <p>The URL to start the AppStream 2.0 streaming session.</p>
     */
    StreamingURL?: string;
}
export declare namespace CreateImageBuilderStreamingURLResult {
    function isa(o: any): o is CreateImageBuilderStreamingURLResult;
}
export interface CreateStackRequest {
    __type?: "CreateStackRequest";
    /**
     * <p>The list of interface VPC endpoint (interface endpoint) objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints.</p>
     */
    AccessEndpoints?: Array<AccessEndpoint>;
    /**
     * <p>The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.</p>
     */
    ApplicationSettings?: ApplicationSettings;
    /**
     * <p>The description to display.</p>
     */
    Description?: string;
    /**
     * <p>The stack name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.</p>
     */
    EmbedHostDomains?: Array<string>;
    /**
     * <p>The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</p>
     */
    FeedbackURL?: string;
    /**
     * <p>The name of the stack.</p>
     */
    Name: string | undefined;
    /**
     * <p>The URL that users are redirected to after their streaming session ends.</p>
     */
    RedirectURL?: string;
    /**
     * <p>The storage connectors to enable.</p>
     */
    StorageConnectors?: Array<StorageConnector>;
    /**
     * <p>The tags to associate with the stack. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p>
     *
     *         <p>If you do not specify a value, the value is set to an empty string.</p>
     *
     *         <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
     *         <p>_ . : / = + \ - @</p>
     *
     *         <p>For more information about tags, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/tagging-basic.html">Tagging Your Resources</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    Tags?: {
        [key: string]: string;
    };
    /**
     * <p>The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled. </p>
     */
    UserSettings?: Array<UserSetting>;
}
export declare namespace CreateStackRequest {
    function isa(o: any): o is CreateStackRequest;
}
export interface CreateStackResult {
    __type?: "CreateStackResult";
    /**
     * <p>Information about the stack.</p>
     */
    Stack?: Stack;
}
export declare namespace CreateStackResult {
    function isa(o: any): o is CreateStackResult;
}
export interface CreateStreamingURLRequest {
    __type?: "CreateStreamingURLRequest";
    /**
     * <p>The name of the application to launch after the session starts. This is the name that you specified
     *             as <b>Name</b> in the Image Assistant.</p>
     */
    ApplicationId?: string;
    /**
     * <p>The name of the fleet.</p>
     */
    FleetName: string | undefined;
    /**
     * <p>The session context. For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/managing-stacks-fleets.html#managing-stacks-fleets-parameters">Session Context</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    SessionContext?: string;
    /**
     * <p>The name of the stack.</p>
     */
    StackName: string | undefined;
    /**
     * <p>The identifier of the user.</p>
     */
    UserId: string | undefined;
    /**
     * <p>The time that the streaming URL will be valid, in seconds.
     *             Specify a value between 1 and 604800 seconds. The default is 60 seconds.</p>
     */
    Validity?: number;
}
export declare namespace CreateStreamingURLRequest {
    function isa(o: any): o is CreateStreamingURLRequest;
}
export interface CreateStreamingURLResult {
    __type?: "CreateStreamingURLResult";
    /**
     * <p>The elapsed time, in seconds after the Unix epoch, when this URL expires.</p>
     */
    Expires?: Date;
    /**
     * <p>The URL to start the AppStream 2.0 streaming session.</p>
     */
    StreamingURL?: string;
}
export declare namespace CreateStreamingURLResult {
    function isa(o: any): o is CreateStreamingURLResult;
}
export interface CreateUsageReportSubscriptionRequest {
    __type?: "CreateUsageReportSubscriptionRequest";
}
export declare namespace CreateUsageReportSubscriptionRequest {
    function isa(o: any): o is CreateUsageReportSubscriptionRequest;
}
export interface CreateUsageReportSubscriptionResult {
    __type?: "CreateUsageReportSubscriptionResult";
    /**
     * <p>The Amazon S3 bucket where generated reports are stored.</p>
     *
     *             <p>If you enabled on-instance session scripts and Amazon S3 logging for your session script
     *             configuration, AppStream 2.0 created an S3 bucket to store the script output. The bucket is
     *             unique to your account and Region. When you enable usage reporting in this case, AppStream 2.0
     *             uses the same bucket to store your usage reports. If you haven't already enabled on-instance session scripts,
     *             when you enable usage reports, AppStream 2.0 creates a new S3 bucket.</p>
     */
    S3BucketName?: string;
    /**
     * <p>The schedule for generating usage reports.</p>
     */
    Schedule?: UsageReportSchedule | string;
}
export declare namespace CreateUsageReportSubscriptionResult {
    function isa(o: any): o is CreateUsageReportSubscriptionResult;
}
export interface CreateUserRequest {
    __type?: "CreateUserRequest";
    /**
     * <p>The authentication type for the user. You must specify USERPOOL. </p>
     */
    AuthenticationType: AuthenticationType | string | undefined;
    /**
     * <p>The first name, or given name, of the user.</p>
     */
    FirstName?: string;
    /**
     * <p>The last name, or surname, of the user.</p>
     */
    LastName?: string;
    /**
     * <p>The action to take for the welcome email that is sent to a user after the user is created in the user pool. If you specify SUPPRESS, no email is sent. If you specify RESEND, do not specify the first name or last name of the user. If the value is null, the email is sent. </p>
     *
     *         <note>
     *             <p>The temporary password in the welcome email is valid for only 7 days. If users don’t set their passwords within 7 days, you must send them a new welcome email.</p>
     *          </note>
     */
    MessageAction?: MessageAction | string;
    /**
     * <p>The email address of the user.</p>
     *
     *         <note>
     *             <p>Users' email addresses are case-sensitive. During login, if they specify an email address that doesn't use the same capitalization as the email address specified when their user pool account was created, a "user does not exist" error message displays.</p>
     *          </note>
     */
    UserName: string | undefined;
}
export declare namespace CreateUserRequest {
    function isa(o: any): o is CreateUserRequest;
}
export interface CreateUserResult {
    __type?: "CreateUserResult";
}
export declare namespace CreateUserResult {
    function isa(o: any): o is CreateUserResult;
}
export interface DeleteDirectoryConfigRequest {
    __type?: "DeleteDirectoryConfigRequest";
    /**
     * <p>The name of the directory configuration.</p>
     */
    DirectoryName: string | undefined;
}
export declare namespace DeleteDirectoryConfigRequest {
    function isa(o: any): o is DeleteDirectoryConfigRequest;
}
export interface DeleteDirectoryConfigResult {
    __type?: "DeleteDirectoryConfigResult";
}
export declare namespace DeleteDirectoryConfigResult {
    function isa(o: any): o is DeleteDirectoryConfigResult;
}
export interface DeleteFleetRequest {
    __type?: "DeleteFleetRequest";
    /**
     * <p>The name of the fleet.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteFleetRequest {
    function isa(o: any): o is DeleteFleetRequest;
}
export interface DeleteFleetResult {
    __type?: "DeleteFleetResult";
}
export declare namespace DeleteFleetResult {
    function isa(o: any): o is DeleteFleetResult;
}
export interface DeleteImageBuilderRequest {
    __type?: "DeleteImageBuilderRequest";
    /**
     * <p>The name of the image builder.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteImageBuilderRequest {
    function isa(o: any): o is DeleteImageBuilderRequest;
}
export interface DeleteImageBuilderResult {
    __type?: "DeleteImageBuilderResult";
    /**
     * <p>Information about the image builder.</p>
     */
    ImageBuilder?: ImageBuilder;
}
export declare namespace DeleteImageBuilderResult {
    function isa(o: any): o is DeleteImageBuilderResult;
}
export interface DeleteImagePermissionsRequest {
    __type?: "DeleteImagePermissionsRequest";
    /**
     * <p>The name of the private image.</p>
     */
    Name: string | undefined;
    /**
     * <p>The 12-digit identifier of the AWS account for which to delete image permissions.</p>
     */
    SharedAccountId: string | undefined;
}
export declare namespace DeleteImagePermissionsRequest {
    function isa(o: any): o is DeleteImagePermissionsRequest;
}
export interface DeleteImagePermissionsResult {
    __type?: "DeleteImagePermissionsResult";
}
export declare namespace DeleteImagePermissionsResult {
    function isa(o: any): o is DeleteImagePermissionsResult;
}
export interface DeleteImageRequest {
    __type?: "DeleteImageRequest";
    /**
     * <p>The name of the image.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteImageRequest {
    function isa(o: any): o is DeleteImageRequest;
}
export interface DeleteImageResult {
    __type?: "DeleteImageResult";
    /**
     * <p>Information about the image.</p>
     */
    Image?: Image;
}
export declare namespace DeleteImageResult {
    function isa(o: any): o is DeleteImageResult;
}
export interface DeleteStackRequest {
    __type?: "DeleteStackRequest";
    /**
     * <p>The name of the stack.</p>
     */
    Name: string | undefined;
}
export declare namespace DeleteStackRequest {
    function isa(o: any): o is DeleteStackRequest;
}
export interface DeleteStackResult {
    __type?: "DeleteStackResult";
}
export declare namespace DeleteStackResult {
    function isa(o: any): o is DeleteStackResult;
}
export interface DeleteUsageReportSubscriptionRequest {
    __type?: "DeleteUsageReportSubscriptionRequest";
}
export declare namespace DeleteUsageReportSubscriptionRequest {
    function isa(o: any): o is DeleteUsageReportSubscriptionRequest;
}
export interface DeleteUsageReportSubscriptionResult {
    __type?: "DeleteUsageReportSubscriptionResult";
}
export declare namespace DeleteUsageReportSubscriptionResult {
    function isa(o: any): o is DeleteUsageReportSubscriptionResult;
}
export interface DeleteUserRequest {
    __type?: "DeleteUserRequest";
    /**
     * <p>The authentication type for the user. You must specify USERPOOL.</p>
     */
    AuthenticationType: AuthenticationType | string | undefined;
    /**
     * <p>The email address of the user.</p>
     *
     *         <note>
     *             <p>Users' email addresses are case-sensitive.</p>
     *          </note>
     */
    UserName: string | undefined;
}
export declare namespace DeleteUserRequest {
    function isa(o: any): o is DeleteUserRequest;
}
export interface DeleteUserResult {
    __type?: "DeleteUserResult";
}
export declare namespace DeleteUserResult {
    function isa(o: any): o is DeleteUserResult;
}
export interface DescribeDirectoryConfigsRequest {
    __type?: "DescribeDirectoryConfigsRequest";
    /**
     * <p>The directory names.</p>
     */
    DirectoryNames?: Array<string>;
    /**
     * <p>The maximum size of each page of results.</p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeDirectoryConfigsRequest {
    function isa(o: any): o is DescribeDirectoryConfigsRequest;
}
export interface DescribeDirectoryConfigsResult {
    __type?: "DescribeDirectoryConfigsResult";
    /**
     * <p>Information about the directory configurations. Note that although the response syntax in this topic includes the account password, this password is not returned in the actual response. </p>
     */
    DirectoryConfigs?: Array<DirectoryConfig>;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeDirectoryConfigsResult {
    function isa(o: any): o is DescribeDirectoryConfigsResult;
}
export interface DescribeFleetsRequest {
    __type?: "DescribeFleetsRequest";
    /**
     * <p>The names of the fleets to describe.</p>
     */
    Names?: Array<string>;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeFleetsRequest {
    function isa(o: any): o is DescribeFleetsRequest;
}
export interface DescribeFleetsResult {
    __type?: "DescribeFleetsResult";
    /**
     * <p>Information about the fleets.</p>
     */
    Fleets?: Array<Fleet>;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeFleetsResult {
    function isa(o: any): o is DescribeFleetsResult;
}
export interface DescribeImageBuildersRequest {
    __type?: "DescribeImageBuildersRequest";
    /**
     * <p>The maximum size of each page of results.</p>
     */
    MaxResults?: number;
    /**
     * <p>The names of the image builders to describe.</p>
     */
    Names?: Array<string>;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeImageBuildersRequest {
    function isa(o: any): o is DescribeImageBuildersRequest;
}
export interface DescribeImageBuildersResult {
    __type?: "DescribeImageBuildersResult";
    /**
     * <p>Information about the image builders.</p>
     */
    ImageBuilders?: Array<ImageBuilder>;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeImageBuildersResult {
    function isa(o: any): o is DescribeImageBuildersResult;
}
export interface DescribeImagePermissionsRequest {
    __type?: "DescribeImagePermissionsRequest";
    /**
     * <p>The maximum size of each page of results.</p>
     */
    MaxResults?: number;
    /**
     * <p>The name of the private image for which to describe permissions. The image must be one that you own. </p>
     */
    Name: string | undefined;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
    /**
     * <p>The 12-digit identifier of one or more AWS accounts with which the image is shared.</p>
     */
    SharedAwsAccountIds?: Array<string>;
}
export declare namespace DescribeImagePermissionsRequest {
    function isa(o: any): o is DescribeImagePermissionsRequest;
}
export interface DescribeImagePermissionsResult {
    __type?: "DescribeImagePermissionsResult";
    /**
     * <p>The name of the private image.</p>
     */
    Name?: string;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
    /**
     * <p>The permissions for a private image that you own. </p>
     */
    SharedImagePermissionsList?: Array<SharedImagePermissions>;
}
export declare namespace DescribeImagePermissionsResult {
    function isa(o: any): o is DescribeImagePermissionsResult;
}
export interface DescribeImagesRequest {
    __type?: "DescribeImagesRequest";
    /**
     * <p>The ARNs of the public, private, and shared images to describe.</p>
     */
    Arns?: Array<string>;
    /**
     * <p>The maximum size of each page of results.</p>
     */
    MaxResults?: number;
    /**
     * <p>The names of the public or private images to describe.</p>
     */
    Names?: Array<string>;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
    /**
     * <p>The type of image (public, private, or shared) to describe. </p>
     */
    Type?: VisibilityType | string;
}
export declare namespace DescribeImagesRequest {
    function isa(o: any): o is DescribeImagesRequest;
}
export interface DescribeImagesResult {
    __type?: "DescribeImagesResult";
    /**
     * <p>Information about the images.</p>
     */
    Images?: Array<Image>;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeImagesResult {
    function isa(o: any): o is DescribeImagesResult;
}
export interface DescribeSessionsRequest {
    __type?: "DescribeSessionsRequest";
    /**
     * <p>The authentication method. Specify <code>API</code> for a user
     *             authenticated using a streaming URL or <code>SAML</code> for a SAML federated user.
     *             The default is to authenticate users using a streaming URL.</p>
     */
    AuthenticationType?: AuthenticationType | string;
    /**
     * <p>The name of the fleet. This value is case-sensitive.</p>
     */
    FleetName: string | undefined;
    /**
     * <p>The size of each page of results. The default value is 20 and the maximum value is 50.</p>
     */
    Limit?: number;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
    /**
     * <p>The name of the stack. This value is case-sensitive.</p>
     */
    StackName: string | undefined;
    /**
     * <p>The user identifier.</p>
     */
    UserId?: string;
}
export declare namespace DescribeSessionsRequest {
    function isa(o: any): o is DescribeSessionsRequest;
}
export interface DescribeSessionsResult {
    __type?: "DescribeSessionsResult";
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the streaming sessions.</p>
     */
    Sessions?: Array<Session>;
}
export declare namespace DescribeSessionsResult {
    function isa(o: any): o is DescribeSessionsResult;
}
export interface DescribeStacksRequest {
    __type?: "DescribeStacksRequest";
    /**
     * <p>The names of the stacks to describe.</p>
     */
    Names?: Array<string>;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeStacksRequest {
    function isa(o: any): o is DescribeStacksRequest;
}
export interface DescribeStacksResult {
    __type?: "DescribeStacksResult";
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the stacks.</p>
     */
    Stacks?: Array<Stack>;
}
export declare namespace DescribeStacksResult {
    function isa(o: any): o is DescribeStacksResult;
}
export interface DescribeUsageReportSubscriptionsRequest {
    __type?: "DescribeUsageReportSubscriptionsRequest";
    /**
     * <p>The maximum size of each page of results.</p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeUsageReportSubscriptionsRequest {
    function isa(o: any): o is DescribeUsageReportSubscriptionsRequest;
}
export interface DescribeUsageReportSubscriptionsResult {
    __type?: "DescribeUsageReportSubscriptionsResult";
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about the usage report subscription.</p>
     */
    UsageReportSubscriptions?: Array<UsageReportSubscription>;
}
export declare namespace DescribeUsageReportSubscriptionsResult {
    function isa(o: any): o is DescribeUsageReportSubscriptionsResult;
}
export interface DescribeUserStackAssociationsRequest {
    __type?: "DescribeUserStackAssociationsRequest";
    /**
     * <p>The authentication type for the user who is associated with the stack. You must specify USERPOOL.</p>
     */
    AuthenticationType?: AuthenticationType | string;
    /**
     * <p>The maximum size of each page of results.</p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
    /**
     * <p>The name of the stack that is associated with the user.</p>
     */
    StackName?: string;
    /**
     * <p>The email address of the user who is associated with the stack.</p>
     *
     *         <note>
     *             <p>Users' email addresses are case-sensitive.</p>
     *          </note>
     */
    UserName?: string;
}
export declare namespace DescribeUserStackAssociationsRequest {
    function isa(o: any): o is DescribeUserStackAssociationsRequest;
}
export interface DescribeUserStackAssociationsResult {
    __type?: "DescribeUserStackAssociationsResult";
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
    /**
     * <p>The UserStackAssociation objects.</p>
     */
    UserStackAssociations?: Array<UserStackAssociation>;
}
export declare namespace DescribeUserStackAssociationsResult {
    function isa(o: any): o is DescribeUserStackAssociationsResult;
}
export interface DescribeUsersRequest {
    __type?: "DescribeUsersRequest";
    /**
     * <p>The authentication type for the users in the user pool to describe. You must specify USERPOOL.</p>
     */
    AuthenticationType: AuthenticationType | string | undefined;
    /**
     * <p>The maximum size of each page of results.</p>
     */
    MaxResults?: number;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace DescribeUsersRequest {
    function isa(o: any): o is DescribeUsersRequest;
}
export interface DescribeUsersResult {
    __type?: "DescribeUsersResult";
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
    /**
     * <p>Information about users in the user pool.</p>
     */
    Users?: Array<User>;
}
export declare namespace DescribeUsersResult {
    function isa(o: any): o is DescribeUsersResult;
}
/**
 * <p>Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 */
export interface DirectoryConfig {
    __type?: "DirectoryConfig";
    /**
     * <p>The time the directory configuration was created.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The fully qualified name of the directory (for example, corp.example.com).</p>
     */
    DirectoryName: string | undefined;
    /**
     * <p>The distinguished names of the organizational units for computer accounts.</p>
     */
    OrganizationalUnitDistinguishedNames?: Array<string>;
    /**
     * <p>The credentials for the service account used by the fleet or image builder to connect to the directory.</p>
     */
    ServiceAccountCredentials?: ServiceAccountCredentials;
}
export declare namespace DirectoryConfig {
    function isa(o: any): o is DirectoryConfig;
}
export interface DisableUserRequest {
    __type?: "DisableUserRequest";
    /**
     * <p>The authentication type for the user. You must specify USERPOOL.</p>
     */
    AuthenticationType: AuthenticationType | string | undefined;
    /**
     * <p>The email address of the user.</p>
     *
     *         <note>
     *             <p>Users' email addresses are case-sensitive.</p>
     *          </note>
     */
    UserName: string | undefined;
}
export declare namespace DisableUserRequest {
    function isa(o: any): o is DisableUserRequest;
}
export interface DisableUserResult {
    __type?: "DisableUserResult";
}
export declare namespace DisableUserResult {
    function isa(o: any): o is DisableUserResult;
}
export interface DisassociateFleetRequest {
    __type?: "DisassociateFleetRequest";
    /**
     * <p>The name of the fleet.</p>
     */
    FleetName: string | undefined;
    /**
     * <p>The name of the stack.</p>
     */
    StackName: string | undefined;
}
export declare namespace DisassociateFleetRequest {
    function isa(o: any): o is DisassociateFleetRequest;
}
export interface DisassociateFleetResult {
    __type?: "DisassociateFleetResult";
}
export declare namespace DisassociateFleetResult {
    function isa(o: any): o is DisassociateFleetResult;
}
/**
 * <p>Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.</p>
 */
export interface DomainJoinInfo {
    __type?: "DomainJoinInfo";
    /**
     * <p>The fully qualified name of the directory (for example, corp.example.com).</p>
     */
    DirectoryName?: string;
    /**
     * <p>The distinguished name of the organizational unit for computer accounts.</p>
     */
    OrganizationalUnitDistinguishedName?: string;
}
export declare namespace DomainJoinInfo {
    function isa(o: any): o is DomainJoinInfo;
}
export interface EnableUserRequest {
    __type?: "EnableUserRequest";
    /**
     * <p>The authentication type for the user. You must specify USERPOOL.</p>
     */
    AuthenticationType: AuthenticationType | string | undefined;
    /**
     * <p>The email address of the user.</p>
     *
     *         <note>
     *             <p>Users' email addresses are case-sensitive. During login, if they specify an email address that doesn't use the same capitalization as the email address specified when their user pool account was created, a "user does not exist" error message displays. </p>
     *          </note>
     */
    UserName: string | undefined;
}
export declare namespace EnableUserRequest {
    function isa(o: any): o is EnableUserRequest;
}
export interface EnableUserResult {
    __type?: "EnableUserResult";
}
export declare namespace EnableUserResult {
    function isa(o: any): o is EnableUserResult;
}
export interface ExpireSessionRequest {
    __type?: "ExpireSessionRequest";
    /**
     * <p>The identifier of the streaming session.</p>
     */
    SessionId: string | undefined;
}
export declare namespace ExpireSessionRequest {
    function isa(o: any): o is ExpireSessionRequest;
}
export interface ExpireSessionResult {
    __type?: "ExpireSessionResult";
}
export declare namespace ExpireSessionResult {
    function isa(o: any): o is ExpireSessionResult;
}
/**
 * <p>Describes a fleet.</p>
 */
export interface Fleet {
    __type?: "Fleet";
    /**
     * <p>The Amazon Resource Name (ARN) for the fleet.</p>
     */
    Arn: string | undefined;
    /**
     * <p>The capacity status for the fleet.</p>
     */
    ComputeCapacityStatus: ComputeCapacityStatus | undefined;
    /**
     * <p>The time the fleet was created.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The description to display.</p>
     */
    Description?: string;
    /**
     * <p>The amount of time that a streaming session remains active after users disconnect. If they try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.</p>
     *         <p>Specify a value between 60 and 360000.</p>
     */
    DisconnectTimeoutInSeconds?: number;
    /**
     * <p>The fleet name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. </p>
     */
    DomainJoinInfo?: DomainJoinInfo;
    /**
     * <p>Indicates whether default internet access is enabled for the fleet.</p>
     */
    EnableDefaultInternetAccess?: boolean;
    /**
     * <p>The fleet errors.</p>
     */
    FleetErrors?: Array<FleetError>;
    /**
     * <p>The fleet type.</p>
     *         <dl>
     *             <dt>ALWAYS_ON</dt>
     *             <dd>
     *                     <p>Provides users with instant-on access to their apps.
     *                         You are charged for all running instances in your fleet, even if no users are streaming apps.</p>
     *                 </dd>
     *             <dt>ON_DEMAND</dt>
     *             <dd>
     *                     <p>Provide users with access to applications after they connect, which takes one to two minutes.
     *                         You are charged for instance streaming when users are connected and a
     *                         small hourly fee for instances that are not streaming apps.</p>
     *                 </dd>
     *          </dl>
     */
    FleetType?: FleetType | string;
    /**
     * <p>The ARN of the IAM role that is applied to the fleet. To assume a role, the fleet instance calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>AppStream_Machine_Role</b> credential profile on the instance.</p>
     *
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    IamRoleArn?: string;
    /**
     * <p>The amount of time that users can be idle (inactive) before they are disconnected
     *             from their streaming session and the <code>DisconnectTimeoutInSeconds</code> time
     *             interval begins. Users are notified before they are disconnected due to inactivity. If
     *             users try to reconnect to the streaming session before the time interval specified in
     *             <code>DisconnectTimeoutInSeconds</code> elapses, they are connected to their
     *             previous session. Users are considered idle when they stop providing keyboard or mouse
     *             input during their streaming session. File uploads and downloads, audio in, audio out,
     *             and pixels changing do not qualify as user activity. If users continue to be idle after
     *             the time interval in <code>IdleDisconnectTimeoutInSeconds</code> elapses, they are
     *             disconnected.</p>
     *         <p>To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 3600. The default value is 0.</p>
     *
     *         <note>
     *             <p>If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity. </p>
     *          </note>
     */
    IdleDisconnectTimeoutInSeconds?: number;
    /**
     * <p>The ARN for the public, private, or shared image.</p>
     */
    ImageArn?: string;
    /**
     * <p>The name of the image used to create the fleet.</p>
     */
    ImageName?: string;
    /**
     * <p>The instance type to use when launching fleet instances. The following instance types are available:</p>
     *         <ul>
     *             <li>
     *                <p>stream.standard.medium</p>
     *             </li>
     *             <li>
     *                <p>stream.standard.large</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.large</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.large</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.large</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-desktop.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.16xlarge</p>
     *             </li>
     *          </ul>
     */
    InstanceType: string | undefined;
    /**
     * <p>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance. </p>
     *         <p>Specify a value between 600 and 360000.</p>
     */
    MaxUserDurationInSeconds?: number;
    /**
     * <p>The name of the fleet.</p>
     */
    Name: string | undefined;
    /**
     * <p>The current state for the fleet.</p>
     */
    State: FleetState | string | undefined;
    /**
     * <p>The VPC configuration for the fleet.</p>
     */
    VpcConfig?: VpcConfig;
}
export declare namespace Fleet {
    function isa(o: any): o is Fleet;
}
export declare enum FleetAttribute {
    DOMAIN_JOIN_INFO = "DOMAIN_JOIN_INFO",
    IAM_ROLE_ARN = "IAM_ROLE_ARN",
    VPC_CONFIGURATION = "VPC_CONFIGURATION",
    VPC_CONFIGURATION_SECURITY_GROUP_IDS = "VPC_CONFIGURATION_SECURITY_GROUP_IDS"
}
/**
 * <p>Describes a fleet error.</p>
 */
export interface FleetError {
    __type?: "FleetError";
    /**
     * <p>The error code.</p>
     */
    ErrorCode?: FleetErrorCode | string;
    /**
     * <p>The error message.</p>
     */
    ErrorMessage?: string;
}
export declare namespace FleetError {
    function isa(o: any): o is FleetError;
}
export declare enum FleetErrorCode {
    DOMAIN_JOIN_ERROR_ACCESS_DENIED = "DOMAIN_JOIN_ERROR_ACCESS_DENIED",
    DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED = "DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED",
    DOMAIN_JOIN_ERROR_FILE_NOT_FOUND = "DOMAIN_JOIN_ERROR_FILE_NOT_FOUND",
    DOMAIN_JOIN_ERROR_INVALID_PARAMETER = "DOMAIN_JOIN_ERROR_INVALID_PARAMETER",
    DOMAIN_JOIN_ERROR_LOGON_FAILURE = "DOMAIN_JOIN_ERROR_LOGON_FAILURE",
    DOMAIN_JOIN_ERROR_MORE_DATA = "DOMAIN_JOIN_ERROR_MORE_DATA",
    DOMAIN_JOIN_ERROR_NOT_SUPPORTED = "DOMAIN_JOIN_ERROR_NOT_SUPPORTED",
    DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN = "DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN",
    DOMAIN_JOIN_INTERNAL_SERVICE_ERROR = "DOMAIN_JOIN_INTERNAL_SERVICE_ERROR",
    DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME = "DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME",
    DOMAIN_JOIN_NERR_PASSWORD_EXPIRED = "DOMAIN_JOIN_NERR_PASSWORD_EXPIRED",
    DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED = "DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED",
    IAM_SERVICE_ROLE_IS_MISSING = "IAM_SERVICE_ROLE_IS_MISSING",
    IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION = "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION",
    IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION = "IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION",
    IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION = "IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION",
    IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION = "IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION",
    IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION = "IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION",
    IGW_NOT_ATTACHED = "IGW_NOT_ATTACHED",
    IMAGE_NOT_FOUND = "IMAGE_NOT_FOUND",
    INTERNAL_SERVICE_ERROR = "INTERNAL_SERVICE_ERROR",
    INVALID_SUBNET_CONFIGURATION = "INVALID_SUBNET_CONFIGURATION",
    MACHINE_ROLE_IS_MISSING = "MACHINE_ROLE_IS_MISSING",
    NETWORK_INTERFACE_LIMIT_EXCEEDED = "NETWORK_INTERFACE_LIMIT_EXCEEDED",
    SECURITY_GROUPS_NOT_FOUND = "SECURITY_GROUPS_NOT_FOUND",
    STS_DISABLED_IN_REGION = "STS_DISABLED_IN_REGION",
    SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES = "SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES",
    SUBNET_NOT_FOUND = "SUBNET_NOT_FOUND"
}
export declare enum FleetState {
    RUNNING = "RUNNING",
    STARTING = "STARTING",
    STOPPED = "STOPPED",
    STOPPING = "STOPPING"
}
export declare enum FleetType {
    ALWAYS_ON = "ALWAYS_ON",
    ON_DEMAND = "ON_DEMAND"
}
/**
 * <p>Describes an image.</p>
 */
export interface Image {
    __type?: "Image";
    /**
     * <p>The applications associated with the image.</p>
     */
    Applications?: Array<Application>;
    /**
     * <p>The version of the AppStream 2.0 agent to use for instances that are launched from this image. </p>
     */
    AppstreamAgentVersion?: string;
    /**
     * <p>The ARN of the image.</p>
     */
    Arn?: string;
    /**
     * <p>The ARN of the image from which this image was created.</p>
     */
    BaseImageArn?: string;
    /**
     * <p>The time the image was created.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The description to display.</p>
     */
    Description?: string;
    /**
     * <p>The image name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The name of the image builder that was used to create the private image. If the image is shared, this value is null.</p>
     */
    ImageBuilderName?: string;
    /**
     * <p>Indicates whether an image builder can be launched from this image.</p>
     */
    ImageBuilderSupported?: boolean;
    /**
     * <p>The permissions to provide to the destination AWS account for the specified image.</p>
     */
    ImagePermissions?: ImagePermissions;
    /**
     * <p>The name of the image.</p>
     */
    Name: string | undefined;
    /**
     * <p>The operating system platform of the image.</p>
     */
    Platform?: PlatformType | string;
    /**
     * <p>The release date of the public base image.
     *             For private images, this date is the release date of the base image from which the image was created.</p>
     */
    PublicBaseImageReleasedDate?: Date;
    /**
     * <p>The image starts in the <code>PENDING</code> state. If image creation succeeds, the
     *             state is <code>AVAILABLE</code>. If image creation fails, the state is <code>FAILED</code>.</p>
     */
    State?: ImageState | string;
    /**
     * <p>The reason why the last state change occurred.</p>
     */
    StateChangeReason?: ImageStateChangeReason;
    /**
     * <p>Indicates whether the image is public or private.</p>
     */
    Visibility?: VisibilityType | string;
}
export declare namespace Image {
    function isa(o: any): o is Image;
}
/**
 * <p>Describes a virtual machine that is used to create an image. </p>
 */
export interface ImageBuilder {
    __type?: "ImageBuilder";
    /**
     * <p>The list of virtual private cloud (VPC) interface endpoint objects. Administrators can connect to the image builder only through the specified endpoints.</p>
     */
    AccessEndpoints?: Array<AccessEndpoint>;
    /**
     * <p>The version of the AppStream 2.0 agent that is currently being used by the image builder. </p>
     */
    AppstreamAgentVersion?: string;
    /**
     * <p>The ARN for the image builder.</p>
     */
    Arn?: string;
    /**
     * <p>The time stamp when the image builder was created.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The description to display.</p>
     */
    Description?: string;
    /**
     * <p>The image builder name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The name of the directory and organizational unit (OU) to use to join the image builder to a Microsoft Active Directory domain. </p>
     */
    DomainJoinInfo?: DomainJoinInfo;
    /**
     * <p>Enables or disables default internet access for the image builder.</p>
     */
    EnableDefaultInternetAccess?: boolean;
    /**
     * <p>The ARN of the IAM role that is applied to the image builder. To assume a role, the image builder calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>AppStream_Machine_Role</b> credential profile on the instance.</p>
     *
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    IamRoleArn?: string;
    /**
     * <p>The ARN of the image from which this builder was created.</p>
     */
    ImageArn?: string;
    /**
     * <p>The image builder errors.</p>
     */
    ImageBuilderErrors?: Array<ResourceError>;
    /**
     * <p>The instance type for the image builder. The following instance types are available:</p>
     *             <ul>
     *             <li>
     *                <p>stream.standard.medium</p>
     *             </li>
     *             <li>
     *                <p>stream.standard.large</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.large</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.large</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.large</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-desktop.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.16xlarge</p>
     *             </li>
     *          </ul>
     */
    InstanceType?: string;
    /**
     * <p>The name of the image builder.</p>
     */
    Name: string | undefined;
    /**
     * <p>Describes the network details of the fleet or image builder instance.</p>
     */
    NetworkAccessConfiguration?: NetworkAccessConfiguration;
    /**
     * <p>The operating system platform of the image builder.</p>
     */
    Platform?: PlatformType | string;
    /**
     * <p>The state of the image builder.</p>
     */
    State?: ImageBuilderState | string;
    /**
     * <p>The reason why the last state change occurred.</p>
     */
    StateChangeReason?: ImageBuilderStateChangeReason;
    /**
     * <p>The VPC configuration of the image builder.</p>
     */
    VpcConfig?: VpcConfig;
}
export declare namespace ImageBuilder {
    function isa(o: any): o is ImageBuilder;
}
export declare enum ImageBuilderState {
    DELETING = "DELETING",
    FAILED = "FAILED",
    PENDING = "PENDING",
    REBOOTING = "REBOOTING",
    RUNNING = "RUNNING",
    SNAPSHOTTING = "SNAPSHOTTING",
    STOPPED = "STOPPED",
    STOPPING = "STOPPING",
    UPDATING_AGENT = "UPDATING_AGENT"
}
/**
 * <p>Describes the reason why the last image builder state change occurred.</p>
 */
export interface ImageBuilderStateChangeReason {
    __type?: "ImageBuilderStateChangeReason";
    /**
     * <p>The state change reason code.</p>
     */
    Code?: ImageBuilderStateChangeReasonCode | string;
    /**
     * <p>The state change reason message.</p>
     */
    Message?: string;
}
export declare namespace ImageBuilderStateChangeReason {
    function isa(o: any): o is ImageBuilderStateChangeReason;
}
export declare enum ImageBuilderStateChangeReasonCode {
    IMAGE_UNAVAILABLE = "IMAGE_UNAVAILABLE",
    INTERNAL_ERROR = "INTERNAL_ERROR"
}
/**
 * <p>Describes the permissions for an image. </p>
 */
export interface ImagePermissions {
    __type?: "ImagePermissions";
    /**
     * <p>Indicates whether the image can be used for a fleet.</p>
     */
    allowFleet?: boolean;
    /**
     * <p>Indicates whether the image can be used for an image builder.</p>
     */
    allowImageBuilder?: boolean;
}
export declare namespace ImagePermissions {
    function isa(o: any): o is ImagePermissions;
}
export declare enum ImageState {
    AVAILABLE = "AVAILABLE",
    COPYING = "COPYING",
    DELETING = "DELETING",
    FAILED = "FAILED",
    PENDING = "PENDING"
}
/**
 * <p>Describes the reason why the last image state change occurred.</p>
 */
export interface ImageStateChangeReason {
    __type?: "ImageStateChangeReason";
    /**
     * <p>The state change reason code.</p>
     */
    Code?: ImageStateChangeReasonCode | string;
    /**
     * <p>The state change reason message.</p>
     */
    Message?: string;
}
export declare namespace ImageStateChangeReason {
    function isa(o: any): o is ImageStateChangeReason;
}
export declare enum ImageStateChangeReasonCode {
    IMAGE_BUILDER_NOT_AVAILABLE = "IMAGE_BUILDER_NOT_AVAILABLE",
    IMAGE_COPY_FAILURE = "IMAGE_COPY_FAILURE",
    INTERNAL_ERROR = "INTERNAL_ERROR"
}
/**
 * <p>The image does not support storage connectors.</p>
 */
export interface IncompatibleImageException extends __SmithyException, $MetadataBearer {
    name: "IncompatibleImageException";
    $fault: "client";
    /**
     * <p>The error message in the exception.</p>
     */
    Message?: string;
}
export declare namespace IncompatibleImageException {
    function isa(o: any): o is IncompatibleImageException;
}
/**
 * <p>The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. </p>
 */
export interface InvalidAccountStatusException extends __SmithyException, $MetadataBearer {
    name: "InvalidAccountStatusException";
    $fault: "client";
    /**
     * <p>The error message in the exception.</p>
     */
    Message?: string;
}
export declare namespace InvalidAccountStatusException {
    function isa(o: any): o is InvalidAccountStatusException;
}
/**
 * <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 */
export interface InvalidParameterCombinationException extends __SmithyException, $MetadataBearer {
    name: "InvalidParameterCombinationException";
    $fault: "client";
    /**
     * <p>The error message in the exception.</p>
     */
    Message?: string;
}
export declare namespace InvalidParameterCombinationException {
    function isa(o: any): o is InvalidParameterCombinationException;
}
/**
 * <p>The specified role is invalid.</p>
 */
export interface InvalidRoleException extends __SmithyException, $MetadataBearer {
    name: "InvalidRoleException";
    $fault: "client";
    /**
     * <p>The error message in the exception.</p>
     */
    Message?: string;
}
export declare namespace InvalidRoleException {
    function isa(o: any): o is InvalidRoleException;
}
/**
 * <p>Describes the error that is returned when a usage report can't be generated.</p>
 */
export interface LastReportGenerationExecutionError {
    __type?: "LastReportGenerationExecutionError";
    /**
     * <p>The error code for the error that is returned when a usage report can't be generated.</p>
     */
    ErrorCode?: UsageReportExecutionErrorCode | string;
    /**
     * <p>The error message for the error that is returned when a usage report can't be generated.</p>
     */
    ErrorMessage?: string;
}
export declare namespace LastReportGenerationExecutionError {
    function isa(o: any): o is LastReportGenerationExecutionError;
}
/**
 * <p>The requested limit exceeds the permitted limit for an account.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
    name: "LimitExceededException";
    $fault: "client";
    /**
     * <p>The error message in the exception.</p>
     */
    Message?: string;
}
export declare namespace LimitExceededException {
    function isa(o: any): o is LimitExceededException;
}
export interface ListAssociatedFleetsRequest {
    __type?: "ListAssociatedFleetsRequest";
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
    /**
     * <p>The name of the stack.</p>
     */
    StackName: string | undefined;
}
export declare namespace ListAssociatedFleetsRequest {
    function isa(o: any): o is ListAssociatedFleetsRequest;
}
export interface ListAssociatedFleetsResult {
    __type?: "ListAssociatedFleetsResult";
    /**
     * <p>The name of the fleet.</p>
     */
    Names?: Array<string>;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace ListAssociatedFleetsResult {
    function isa(o: any): o is ListAssociatedFleetsResult;
}
export interface ListAssociatedStacksRequest {
    __type?: "ListAssociatedStacksRequest";
    /**
     * <p>The name of the fleet.</p>
     */
    FleetName: string | undefined;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If this value is null, it retrieves the first page.</p>
     */
    NextToken?: string;
}
export declare namespace ListAssociatedStacksRequest {
    function isa(o: any): o is ListAssociatedStacksRequest;
}
export interface ListAssociatedStacksResult {
    __type?: "ListAssociatedStacksResult";
    /**
     * <p>The name of the stack.</p>
     */
    Names?: Array<string>;
    /**
     * <p>The pagination token to use to retrieve the next page of results for this operation. If there are no more pages, this value is null.</p>
     */
    NextToken?: string;
}
export declare namespace ListAssociatedStacksResult {
    function isa(o: any): o is ListAssociatedStacksResult;
}
export interface ListTagsForResourceRequest {
    __type?: "ListTagsForResourceRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn: string | undefined;
}
export declare namespace ListTagsForResourceRequest {
    function isa(o: any): o is ListTagsForResourceRequest;
}
export interface ListTagsForResourceResponse {
    __type?: "ListTagsForResourceResponse";
    /**
     * <p>The information about the tags.</p>
     */
    Tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    function isa(o: any): o is ListTagsForResourceResponse;
}
export declare enum MessageAction {
    RESEND = "RESEND",
    SUPPRESS = "SUPPRESS"
}
/**
 * <p>Describes the network details of the fleet or image builder instance.</p>
 */
export interface NetworkAccessConfiguration {
    __type?: "NetworkAccessConfiguration";
    /**
     * <p>The resource identifier of the elastic network interface that is attached to instances in your VPC. All network interfaces have the eni-xxxxxxxx resource identifier.</p>
     */
    EniId?: string;
    /**
     * <p>The private IP address of the elastic network interface that is attached to instances in your VPC.</p>
     */
    EniPrivateIpAddress?: string;
}
export declare namespace NetworkAccessConfiguration {
    function isa(o: any): o is NetworkAccessConfiguration;
}
/**
 * <p>The attempted operation is not permitted.</p>
 */
export interface OperationNotPermittedException extends __SmithyException, $MetadataBearer {
    name: "OperationNotPermittedException";
    $fault: "client";
    /**
     * <p>The error message in the exception.</p>
     */
    Message?: string;
}
export declare namespace OperationNotPermittedException {
    function isa(o: any): o is OperationNotPermittedException;
}
export declare enum Permission {
    DISABLED = "DISABLED",
    ENABLED = "ENABLED"
}
export declare type PlatformType = "WINDOWS" | "WINDOWS_SERVER_2016" | "WINDOWS_SERVER_2019";
/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
    name: "ResourceAlreadyExistsException";
    $fault: "client";
    /**
     * <p>The error message in the exception.</p>
     */
    Message?: string;
}
export declare namespace ResourceAlreadyExistsException {
    function isa(o: any): o is ResourceAlreadyExistsException;
}
/**
 * <p>Describes a resource error.</p>
 */
export interface ResourceError {
    __type?: "ResourceError";
    /**
     * <p>The error code.</p>
     */
    ErrorCode?: FleetErrorCode | string;
    /**
     * <p>The error message.</p>
     */
    ErrorMessage?: string;
    /**
     * <p>The time the error occurred.</p>
     */
    ErrorTimestamp?: Date;
}
export declare namespace ResourceError {
    function isa(o: any): o is ResourceError;
}
/**
 * <p>The specified resource is in use.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
    name: "ResourceInUseException";
    $fault: "client";
    /**
     * <p>The error message in the exception.</p>
     */
    Message?: string;
}
export declare namespace ResourceInUseException {
    function isa(o: any): o is ResourceInUseException;
}
/**
 * <p>The specified resource exists and is not in use, but isn't available.</p>
 */
export interface ResourceNotAvailableException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotAvailableException";
    $fault: "client";
    /**
     * <p>The error message in the exception.</p>
     */
    Message?: string;
}
export declare namespace ResourceNotAvailableException {
    function isa(o: any): o is ResourceNotAvailableException;
}
/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    /**
     * <p>The error message in the exception.</p>
     */
    Message?: string;
}
export declare namespace ResourceNotFoundException {
    function isa(o: any): o is ResourceNotFoundException;
}
/**
 * <p>Describes the credentials for the service account used by the fleet or image builder to connect to the directory.</p>
 */
export interface ServiceAccountCredentials {
    __type?: "ServiceAccountCredentials";
    /**
     * <p>The user name of the account. This account must have the following privileges: create computer objects,
     *             join computers to the domain, and change/reset the password on descendant computer objects for the
     *             organizational units specified.</p>
     */
    AccountName: string | undefined;
    /**
     * <p>The password for the account.</p>
     */
    AccountPassword: string | undefined;
}
export declare namespace ServiceAccountCredentials {
    function isa(o: any): o is ServiceAccountCredentials;
}
/**
 * <p>Describes a streaming session.</p>
 */
export interface Session {
    __type?: "Session";
    /**
     * <p>The authentication method. The user is authenticated using a streaming URL
     *             (<code>API</code>) or SAML 2.0 federation (<code>SAML</code>).</p>
     */
    AuthenticationType?: AuthenticationType | string;
    /**
     * <p>Specifies whether a user is connected to the streaming session.</p>
     */
    ConnectionState?: SessionConnectionState | string;
    /**
     * <p>The name of the fleet for the streaming session.</p>
     */
    FleetName: string | undefined;
    /**
     * <p>The identifier of the streaming session.</p>
     */
    Id: string | undefined;
    /**
     * <p>The time when the streaming session is set to expire. This time is based on the <code>MaxUserDurationinSeconds</code> value, which determines the maximum length of time that a streaming session can run. A streaming session might end earlier than the time specified in <code>SessionMaxExpirationTime</code>, when the <code>DisconnectTimeOutInSeconds</code> elapses or the user chooses to end his or her session. If the <code>DisconnectTimeOutInSeconds</code> elapses, or the user chooses to end his or her session, the streaming instance is terminated and the streaming session ends.</p>
     */
    MaxExpirationTime?: Date;
    /**
     * <p>The network details for the streaming session.</p>
     */
    NetworkAccessConfiguration?: NetworkAccessConfiguration;
    /**
     * <p>The name of the stack for the streaming session.</p>
     */
    StackName: string | undefined;
    /**
     * <p>The time when a streaming instance is dedicated for the user.</p>
     */
    StartTime?: Date;
    /**
     * <p>The current state of the streaming session.</p>
     */
    State: SessionState | string | undefined;
    /**
     * <p>The identifier of the user for whom the session was created.</p>
     */
    UserId: string | undefined;
}
export declare namespace Session {
    function isa(o: any): o is Session;
}
export declare enum SessionConnectionState {
    CONNECTED = "CONNECTED",
    NOT_CONNECTED = "NOT_CONNECTED"
}
export declare enum SessionState {
    ACTIVE = "ACTIVE",
    EXPIRED = "EXPIRED",
    PENDING = "PENDING"
}
/**
 * <p>Describes the permissions that are available to the specified AWS account for a shared image.</p>
 */
export interface SharedImagePermissions {
    __type?: "SharedImagePermissions";
    /**
     * <p>Describes the permissions for a shared image.</p>
     */
    imagePermissions: ImagePermissions | undefined;
    /**
     * <p>The 12-digit identifier of the AWS account with which the image is shared.</p>
     */
    sharedAccountId: string | undefined;
}
export declare namespace SharedImagePermissions {
    function isa(o: any): o is SharedImagePermissions;
}
/**
 * <p>Describes a stack.</p>
 */
export interface Stack {
    __type?: "Stack";
    /**
     * <p>The list of virtual private cloud (VPC) interface endpoint objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints. </p>
     */
    AccessEndpoints?: Array<AccessEndpoint>;
    /**
     * <p>The persistent application settings for users of the stack.</p>
     */
    ApplicationSettings?: ApplicationSettingsResponse;
    /**
     * <p>The ARN of the stack.</p>
     */
    Arn?: string;
    /**
     * <p>The time the stack was created.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>The description to display.</p>
     */
    Description?: string;
    /**
     * <p>The stack name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.</p>
     */
    EmbedHostDomains?: Array<string>;
    /**
     * <p>The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</p>
     */
    FeedbackURL?: string;
    /**
     * <p>The name of the stack.</p>
     */
    Name: string | undefined;
    /**
     * <p>The URL that users are redirected to after their streaming session ends.</p>
     */
    RedirectURL?: string;
    /**
     * <p>The errors for the stack.</p>
     */
    StackErrors?: Array<StackError>;
    /**
     * <p>The storage connectors to enable.</p>
     */
    StorageConnectors?: Array<StorageConnector>;
    /**
     * <p>The actions that are enabled or disabled for users during their streaming sessions. By default these actions are enabled.</p>
     */
    UserSettings?: Array<UserSetting>;
}
export declare namespace Stack {
    function isa(o: any): o is Stack;
}
export declare enum StackAttribute {
    ACCESS_ENDPOINTS = "ACCESS_ENDPOINTS",
    EMBED_HOST_DOMAINS = "EMBED_HOST_DOMAINS",
    FEEDBACK_URL = "FEEDBACK_URL",
    IAM_ROLE_ARN = "IAM_ROLE_ARN",
    REDIRECT_URL = "REDIRECT_URL",
    STORAGE_CONNECTORS = "STORAGE_CONNECTORS",
    STORAGE_CONNECTOR_GOOGLE_DRIVE = "STORAGE_CONNECTOR_GOOGLE_DRIVE",
    STORAGE_CONNECTOR_HOMEFOLDERS = "STORAGE_CONNECTOR_HOMEFOLDERS",
    STORAGE_CONNECTOR_ONE_DRIVE = "STORAGE_CONNECTOR_ONE_DRIVE",
    THEME_NAME = "THEME_NAME",
    USER_SETTINGS = "USER_SETTINGS"
}
/**
 * <p>Describes a stack error.</p>
 */
export interface StackError {
    __type?: "StackError";
    /**
     * <p>The error code.</p>
     */
    ErrorCode?: StackErrorCode | string;
    /**
     * <p>The error message.</p>
     */
    ErrorMessage?: string;
}
export declare namespace StackError {
    function isa(o: any): o is StackError;
}
export declare enum StackErrorCode {
    INTERNAL_SERVICE_ERROR = "INTERNAL_SERVICE_ERROR",
    STORAGE_CONNECTOR_ERROR = "STORAGE_CONNECTOR_ERROR"
}
export interface StartFleetRequest {
    __type?: "StartFleetRequest";
    /**
     * <p>The name of the fleet.</p>
     */
    Name: string | undefined;
}
export declare namespace StartFleetRequest {
    function isa(o: any): o is StartFleetRequest;
}
export interface StartFleetResult {
    __type?: "StartFleetResult";
}
export declare namespace StartFleetResult {
    function isa(o: any): o is StartFleetResult;
}
export interface StartImageBuilderRequest {
    __type?: "StartImageBuilderRequest";
    /**
     * <p>The version of the AppStream 2.0 agent to use for this image builder. To use the latest version of the AppStream 2.0 agent, specify [LATEST]. </p>
     */
    AppstreamAgentVersion?: string;
    /**
     * <p>The name of the image builder.</p>
     */
    Name: string | undefined;
}
export declare namespace StartImageBuilderRequest {
    function isa(o: any): o is StartImageBuilderRequest;
}
export interface StartImageBuilderResult {
    __type?: "StartImageBuilderResult";
    /**
     * <p>Information about the image builder.</p>
     */
    ImageBuilder?: ImageBuilder;
}
export declare namespace StartImageBuilderResult {
    function isa(o: any): o is StartImageBuilderResult;
}
export interface StopFleetRequest {
    __type?: "StopFleetRequest";
    /**
     * <p>The name of the fleet.</p>
     */
    Name: string | undefined;
}
export declare namespace StopFleetRequest {
    function isa(o: any): o is StopFleetRequest;
}
export interface StopFleetResult {
    __type?: "StopFleetResult";
}
export declare namespace StopFleetResult {
    function isa(o: any): o is StopFleetResult;
}
export interface StopImageBuilderRequest {
    __type?: "StopImageBuilderRequest";
    /**
     * <p>The name of the image builder.</p>
     */
    Name: string | undefined;
}
export declare namespace StopImageBuilderRequest {
    function isa(o: any): o is StopImageBuilderRequest;
}
export interface StopImageBuilderResult {
    __type?: "StopImageBuilderResult";
    /**
     * <p>Information about the image builder.</p>
     */
    ImageBuilder?: ImageBuilder;
}
export declare namespace StopImageBuilderResult {
    function isa(o: any): o is StopImageBuilderResult;
}
/**
 * <p>Describes a connector that enables persistent storage for users.</p>
 */
export interface StorageConnector {
    __type?: "StorageConnector";
    /**
     * <p>The type of storage connector.</p>
     */
    ConnectorType: StorageConnectorType | string | undefined;
    /**
     * <p>The names of the domains for the account.</p>
     */
    Domains?: Array<string>;
    /**
     * <p>The ARN of the storage connector.</p>
     */
    ResourceIdentifier?: string;
}
export declare namespace StorageConnector {
    function isa(o: any): o is StorageConnector;
}
export declare enum StorageConnectorType {
    GOOGLE_DRIVE = "GOOGLE_DRIVE",
    HOMEFOLDERS = "HOMEFOLDERS",
    ONE_DRIVE = "ONE_DRIVE"
}
export interface TagResourceRequest {
    __type?: "TagResourceRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tags to associate. A tag is a key-value pair, and the value is optional. For example, Environment=Test. If you do not specify a value, Environment=. </p>
     *
     *         <p>If you do not specify a value, the value is set to an empty string.</p>
     *
     *         <p>Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following special characters: </p>
     *         <p>_ . : / = + \ - @</p>
     */
    Tags: {
        [key: string]: string;
    } | undefined;
}
export declare namespace TagResourceRequest {
    function isa(o: any): o is TagResourceRequest;
}
export interface TagResourceResponse {
    __type?: "TagResourceResponse";
}
export declare namespace TagResourceResponse {
    function isa(o: any): o is TagResourceResponse;
}
export interface UntagResourceRequest {
    __type?: "UntagResourceRequest";
    /**
     * <p>The Amazon Resource Name (ARN) of the resource.</p>
     */
    ResourceArn: string | undefined;
    /**
     * <p>The tag keys for the tags to disassociate.</p>
     */
    TagKeys: Array<string> | undefined;
}
export declare namespace UntagResourceRequest {
    function isa(o: any): o is UntagResourceRequest;
}
export interface UntagResourceResponse {
    __type?: "UntagResourceResponse";
}
export declare namespace UntagResourceResponse {
    function isa(o: any): o is UntagResourceResponse;
}
export interface UpdateDirectoryConfigRequest {
    __type?: "UpdateDirectoryConfigRequest";
    /**
     * <p>The name of the Directory Config object.</p>
     */
    DirectoryName: string | undefined;
    /**
     * <p>The distinguished names of the organizational units for computer accounts.</p>
     */
    OrganizationalUnitDistinguishedNames?: Array<string>;
    /**
     * <p>The credentials for the service account used by the fleet or image builder to connect to the directory.</p>
     */
    ServiceAccountCredentials?: ServiceAccountCredentials;
}
export declare namespace UpdateDirectoryConfigRequest {
    function isa(o: any): o is UpdateDirectoryConfigRequest;
}
export interface UpdateDirectoryConfigResult {
    __type?: "UpdateDirectoryConfigResult";
    /**
     * <p>Information about the Directory Config object.</p>
     */
    DirectoryConfig?: DirectoryConfig;
}
export declare namespace UpdateDirectoryConfigResult {
    function isa(o: any): o is UpdateDirectoryConfigResult;
}
export interface UpdateFleetRequest {
    __type?: "UpdateFleetRequest";
    /**
     * <p>The fleet attributes to delete.</p>
     */
    AttributesToDelete?: Array<FleetAttribute | string>;
    /**
     * <p>The desired capacity for the fleet.</p>
     */
    ComputeCapacity?: ComputeCapacity;
    /**
     * <p>Deletes the VPC association for the specified fleet.</p>
     */
    DeleteVpcConfig?: boolean;
    /**
     * <p>The description to display.</p>
     */
    Description?: string;
    /**
     * <p>The amount of time that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance. </p>
     *         <p>Specify a value between 60 and 360000.</p>
     */
    DisconnectTimeoutInSeconds?: number;
    /**
     * <p>The fleet name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The name of the directory and organizational unit (OU) to use to join the fleet to a Microsoft Active Directory domain. </p>
     */
    DomainJoinInfo?: DomainJoinInfo;
    /**
     * <p>Enables or disables default internet access for the fleet.</p>
     */
    EnableDefaultInternetAccess?: boolean;
    /**
     * <p>The Amazon Resource Name (ARN) of the IAM role to apply to the fleet. To assume a role, a fleet instance calls the AWS Security Token Service (STS) <code>AssumeRole</code> API operation and passes the ARN of the role to use. The operation creates a new session with temporary credentials. AppStream 2.0 retrieves the temporary credentials and creates the <b>AppStream_Machine_Role</b> credential profile on the instance.</p>
     *
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/using-iam-roles-to-grant-permissions-to-applications-scripts-streaming-instances.html">Using an IAM Role to Grant Permissions to Applications and Scripts Running on AppStream 2.0 Streaming Instances</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
     */
    IamRoleArn?: string;
    /**
     * <p>The amount of time that users can be idle (inactive) before they are disconnected
     *             from their streaming session and the <code>DisconnectTimeoutInSeconds</code> time
     *             interval begins. Users are notified before they are disconnected due to inactivity. If
     *             users try to reconnect to the streaming session before the time interval specified in
     *             <code>DisconnectTimeoutInSeconds</code> elapses, they are connected to their
     *             previous session. Users are considered idle when they stop providing keyboard or mouse
     *             input during their streaming session. File uploads and downloads, audio in, audio out,
     *             and pixels changing do not qualify as user activity. If users continue to be idle after
     *             the time interval in <code>IdleDisconnectTimeoutInSeconds</code> elapses, they are
     *             disconnected. </p>
     *         <p>To prevent users from being disconnected due to inactivity, specify a value of 0. Otherwise, specify a value between 60 and 3600. The default value is 0.</p>
     *
     *         <note>
     *             <p>If you enable this feature, we recommend that you specify a value that corresponds exactly to a whole number of minutes (for example, 60, 120, and 180). If you don't do this, the value is rounded to the nearest minute. For example, if you specify a value of 70, users are disconnected after 1 minute of inactivity. If you specify a value that is at the midpoint between two different minutes, the value is rounded up. For example, if you specify a value of 90, users are disconnected after 2 minutes of inactivity. </p>
     *          </note>
     */
    IdleDisconnectTimeoutInSeconds?: number;
    /**
     * <p>The ARN of the public, private, or shared image to use.</p>
     */
    ImageArn?: string;
    /**
     * <p>The name of the image used to create the fleet.</p>
     */
    ImageName?: string;
    /**
     * <p>The instance type to use when launching fleet instances. The following instance types are available:</p>
     *         <ul>
     *             <li>
     *                <p>stream.standard.medium</p>
     *             </li>
     *             <li>
     *                <p>stream.standard.large</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.large</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.compute.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.large</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.memory.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.large</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-design.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-desktop.2xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.4xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.8xlarge</p>
     *             </li>
     *             <li>
     *                <p>stream.graphics-pro.16xlarge</p>
     *             </li>
     *          </ul>
     */
    InstanceType?: string;
    /**
     * <p>The maximum amount of time that a streaming session can remain active, in seconds. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.</p>
     *         <p>Specify a value between 600 and 360000.</p>
     */
    MaxUserDurationInSeconds?: number;
    /**
     * <p>A unique name for the fleet.</p>
     */
    Name?: string;
    /**
     * <p>The VPC configuration for the fleet.</p>
     */
    VpcConfig?: VpcConfig;
}
export declare namespace UpdateFleetRequest {
    function isa(o: any): o is UpdateFleetRequest;
}
export interface UpdateFleetResult {
    __type?: "UpdateFleetResult";
    /**
     * <p>Information about the fleet.</p>
     */
    Fleet?: Fleet;
}
export declare namespace UpdateFleetResult {
    function isa(o: any): o is UpdateFleetResult;
}
export interface UpdateImagePermissionsRequest {
    __type?: "UpdateImagePermissionsRequest";
    /**
     * <p>The permissions for the image.</p>
     */
    ImagePermissions: ImagePermissions | undefined;
    /**
     * <p>The name of the private image.</p>
     */
    Name: string | undefined;
    /**
     * <p>The 12-digit identifier of the AWS account for which you want add or update image permissions.</p>
     */
    SharedAccountId: string | undefined;
}
export declare namespace UpdateImagePermissionsRequest {
    function isa(o: any): o is UpdateImagePermissionsRequest;
}
export interface UpdateImagePermissionsResult {
    __type?: "UpdateImagePermissionsResult";
}
export declare namespace UpdateImagePermissionsResult {
    function isa(o: any): o is UpdateImagePermissionsResult;
}
export interface UpdateStackRequest {
    __type?: "UpdateStackRequest";
    /**
     * <p>The list of interface VPC endpoint (interface endpoint) objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints.</p>
     */
    AccessEndpoints?: Array<AccessEndpoint>;
    /**
     * <p>The persistent application settings for users of a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.</p>
     */
    ApplicationSettings?: ApplicationSettings;
    /**
     * <p>The stack attributes to delete.</p>
     */
    AttributesToDelete?: Array<StackAttribute | string>;
    /**
     * <p>Deletes the storage connectors currently enabled for the stack.</p>
     */
    DeleteStorageConnectors?: boolean;
    /**
     * <p>The description to display.</p>
     */
    Description?: string;
    /**
     * <p>The stack name to display.</p>
     */
    DisplayName?: string;
    /**
     * <p>The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.</p>
     */
    EmbedHostDomains?: Array<string>;
    /**
     * <p>The URL that users are redirected to after they choose the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.</p>
     */
    FeedbackURL?: string;
    /**
     * <p>The name of the stack.</p>
     */
    Name: string | undefined;
    /**
     * <p>The URL that users are redirected to after their streaming session ends.</p>
     */
    RedirectURL?: string;
    /**
     * <p>The storage connectors to enable.</p>
     */
    StorageConnectors?: Array<StorageConnector>;
    /**
     * <p>The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.</p>
     */
    UserSettings?: Array<UserSetting>;
}
export declare namespace UpdateStackRequest {
    function isa(o: any): o is UpdateStackRequest;
}
export interface UpdateStackResult {
    __type?: "UpdateStackResult";
    /**
     * <p>Information about the stack.</p>
     */
    Stack?: Stack;
}
export declare namespace UpdateStackResult {
    function isa(o: any): o is UpdateStackResult;
}
export declare enum UsageReportExecutionErrorCode {
    ACCESS_DENIED = "ACCESS_DENIED",
    INTERNAL_SERVICE_ERROR = "INTERNAL_SERVICE_ERROR",
    RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND"
}
export declare enum UsageReportSchedule {
    DAILY = "DAILY"
}
/**
 * <p>Describes information about the usage report subscription.</p>
 */
export interface UsageReportSubscription {
    __type?: "UsageReportSubscription";
    /**
     * <p>The time when the last usage report was generated.</p>
     */
    LastGeneratedReportDate?: Date;
    /**
     * <p>The Amazon S3 bucket where generated reports are stored.</p>
     *
     *         <p>If you enabled on-instance session scripts and Amazon S3 logging for your session script
     *             configuration, AppStream 2.0 created an S3 bucket to store the script output. The bucket is
     *             unique to your account and Region. When you enable usage reporting in this case, AppStream 2.0
     *             uses the same bucket to store your usage reports. If you haven't already enabled on-instance session scripts,
     *             when you enable usage reports, AppStream 2.0 creates a new S3 bucket.</p>
     */
    S3BucketName?: string;
    /**
     * <p>The schedule for generating usage reports.</p>
     */
    Schedule?: UsageReportSchedule | string;
    /**
     * <p>The errors that were returned if usage reports couldn't be generated.</p>
     */
    SubscriptionErrors?: Array<LastReportGenerationExecutionError>;
}
export declare namespace UsageReportSubscription {
    function isa(o: any): o is UsageReportSubscription;
}
/**
 * <p>Describes a user in the user pool.</p>
 */
export interface User {
    __type?: "User";
    /**
     * <p>The ARN of the user.</p>
     */
    Arn?: string;
    /**
     * <p>The authentication type for the user.</p>
     */
    AuthenticationType: AuthenticationType | string | undefined;
    /**
     * <p>The date and time the user was created in the user pool.</p>
     */
    CreatedTime?: Date;
    /**
     * <p>Specifies whether the user in the user pool is enabled.</p>
     */
    Enabled?: boolean;
    /**
     * <p>The first name, or given name, of the user.</p>
     */
    FirstName?: string;
    /**
     * <p>The last name, or surname, of the user.</p>
     */
    LastName?: string;
    /**
     * <p>The status of the user in the user pool. The status can be one of the following:</p>
     *         <ul>
     *             <li>
     *                <p>UNCONFIRMED – The user is created but not confirmed.</p>
     *             </li>
     *             <li>
     *                <p>CONFIRMED – The user is confirmed.</p>
     *             </li>
     *             <li>
     *                <p>ARCHIVED – The user is no longer active.</p>
     *             </li>
     *             <li>
     *                <p>COMPROMISED – The user is disabled because of a potential security threat.</p>
     *             </li>
     *             <li>
     *                <p>UNKNOWN – The user status is not known.</p>
     *             </li>
     *          </ul>
     */
    Status?: string;
    /**
     * <p>The email address of the user.</p>
     *
     *         <note>
     *             <p>Users' email addresses are case-sensitive.</p>
     *          </note>
     */
    UserName?: string;
}
export declare namespace User {
    function isa(o: any): o is User;
}
/**
 * <p>Describes an action and whether the action is enabled or disabled for users during their streaming sessions.</p>
 */
export interface UserSetting {
    __type?: "UserSetting";
    /**
     * <p>The action that is enabled or disabled.</p>
     */
    Action: Action | string | undefined;
    /**
     * <p>Indicates whether the action is enabled or disabled.</p>
     */
    Permission: Permission | string | undefined;
}
export declare namespace UserSetting {
    function isa(o: any): o is UserSetting;
}
/**
 * <p>Describes a user in the user pool and the associated stack.</p>
 */
export interface UserStackAssociation {
    __type?: "UserStackAssociation";
    /**
     * <p>The authentication type for the user.</p>
     */
    AuthenticationType: AuthenticationType | string | undefined;
    /**
     * <p>Specifies whether a welcome email is sent to a user after the user is created in the user pool.</p>
     */
    SendEmailNotification?: boolean;
    /**
     * <p>The name of the stack that is associated with the user.</p>
     */
    StackName: string | undefined;
    /**
     * <p>The email address of the user who is associated with the stack.</p>
     *
     *         <note>
     *             <p>Users' email addresses are case-sensitive.</p>
     *          </note>
     */
    UserName: string | undefined;
}
export declare namespace UserStackAssociation {
    function isa(o: any): o is UserStackAssociation;
}
/**
 * <p>Describes the error that is returned when a user can’t be associated with or disassociated from a stack. </p>
 */
export interface UserStackAssociationError {
    __type?: "UserStackAssociationError";
    /**
     * <p>The error code for the error that is returned when a user can’t be associated with or disassociated from a stack.</p>
     */
    ErrorCode?: UserStackAssociationErrorCode | string;
    /**
     * <p>The error message for the error that is returned when a user can’t be associated with or disassociated from a stack.</p>
     */
    ErrorMessage?: string;
    /**
     * <p>Information about the user and associated stack.</p>
     */
    UserStackAssociation?: UserStackAssociation;
}
export declare namespace UserStackAssociationError {
    function isa(o: any): o is UserStackAssociationError;
}
export declare enum UserStackAssociationErrorCode {
    INTERNAL_ERROR = "INTERNAL_ERROR",
    STACK_NOT_FOUND = "STACK_NOT_FOUND",
    USER_NAME_NOT_FOUND = "USER_NAME_NOT_FOUND"
}
export declare enum VisibilityType {
    PRIVATE = "PRIVATE",
    PUBLIC = "PUBLIC",
    SHARED = "SHARED"
}
/**
 * <p>Describes VPC configuration information for fleets and image builders.</p>
 */
export interface VpcConfig {
    __type?: "VpcConfig";
    /**
     * <p>The identifiers of the security groups for the fleet or image builder.</p>
     */
    SecurityGroupIds?: Array<string>;
    /**
     * <p>The identifiers of the subnets to which a network interface is attached from the fleet instance or image builder instance. Fleet instances use one or more subnets. Image builder instances use one subnet.</p>
     */
    SubnetIds?: Array<string>;
}
export declare namespace VpcConfig {
    function isa(o: any): o is VpcConfig;
}
