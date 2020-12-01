import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export type AcceptanceType = "ACCEPT" | "REJECT";

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface AcceptMatchInput {
  /**
   * <p>A unique identifier for a matchmaking ticket. The ticket must be in status <code>REQUIRES_ACCEPTANCE</code>; otherwise this
   *             request will fail.</p>
   */
  TicketId: string | undefined;

  /**
   * <p>A unique identifier for a player delivering the response. This parameter can include one or multiple
   *             player IDs.</p>
   */
  PlayerIds: string[] | undefined;

  /**
   * <p>Player response to the proposed match.</p>
   */
  AcceptanceType: AcceptanceType | string | undefined;
}

export namespace AcceptMatchInput {
  export const filterSensitiveLog = (obj: AcceptMatchInput): any => ({
    ...obj,
  });
}

export interface AcceptMatchOutput {}

export namespace AcceptMatchOutput {
  export const filterSensitiveLog = (obj: AcceptMatchOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting
 *             period.</p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceException {
  export const filterSensitiveLog = (obj: InternalServiceException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more parameter values in the request are invalid. Correct the invalid
 *             parameter values before retrying.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>A service resource associated with the request could not be found. Clients should
 *             not retry such requests.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested operation is not supported in the Region specified.</p>
 */
export interface UnsupportedRegionException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedRegionException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedRegionException {
  export const filterSensitiveLog = (obj: UnsupportedRegionException): any => ({
    ...obj,
  });
}

export enum RoutingStrategyType {
  SIMPLE = "SIMPLE",
  TERMINAL = "TERMINAL",
}

/**
 * <p>The routing configuration for a fleet alias.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAliases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ResolveAlias</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface RoutingStrategy {
  /**
   * <p>The type of routing strategy for the alias.</p>
   *         <p>Possible routing types include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>SIMPLE</b> - The alias resolves to one specific
   *                     fleet. Use this type when routing to active fleets.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>TERMINAL</b> - The alias does not resolve to a
   *                     fleet but instead can be used to display a message to the user. A terminal alias
   *                     throws a TerminalRoutingStrategyException with the <a>RoutingStrategy</a> message embedded.</p>
   *             </li>
   *          </ul>
   */
  Type?: RoutingStrategyType | string;

  /**
   * <p>The unique identifier for a fleet that the alias points to. This value is the fleet ID, not the fleet ARN.</p>
   */
  FleetId?: string;

  /**
   * <p>The message text to be used with a terminal routing strategy.</p>
   */
  Message?: string;
}

export namespace RoutingStrategy {
  export const filterSensitiveLog = (obj: RoutingStrategy): any => ({
    ...obj,
  });
}

/**
 * <p>Properties that describe an alias resource.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAliases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ResolveAlias</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Alias {
  /**
   * <p>A unique identifier for an alias. Alias IDs are unique within a Region.</p>
   */
  AliasId?: string;

  /**
   * <p>A descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) that is assigned to a GameLift alias resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift alias ARN, the resource ID matches the alias ID value.</p>
   */
  AliasArn?: string;

  /**
   * <p>A human-readable description of an alias.</p>
   */
  Description?: string;

  /**
   * <p>The routing configuration, including routing type and fleet target, for the alias. </p>
   */
  RoutingStrategy?: RoutingStrategy;

  /**
   * <p>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that this data object was last modified. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  LastUpdatedTime?: Date;
}

export namespace Alias {
  export const filterSensitiveLog = (obj: Alias): any => ({
    ...obj,
  });
}

/**
 * <p>Values for use in <a>Player</a> attribute key-value pairs. This object lets
 *             you specify an attribute value using any of the valid data types: string, number, string
 *             array, or data map. Each <code>AttributeValue</code> object can use only one of the
 *             available properties.</p>
 */
export interface AttributeValue {
  /**
   * <p>For single string values. Maximum string length is 100 characters.</p>
   */
  S?: string;

  /**
   * <p>For number values, expressed as double.</p>
   */
  N?: number;

  /**
   * <p>For a list of up to 10 strings. Maximum length for each string is 100 characters.
   *             Duplicate values are not recognized; all occurrences of the repeated value after the
   *             first of a repeated value are ignored.</p>
   */
  SL?: string[];

  /**
   * <p>For a map of up to 10 data type:value pairs. Maximum length for each string value
   *             is 100 characters. </p>
   */
  SDM?: { [key: string]: number };
}

export namespace AttributeValue {
  export const filterSensitiveLog = (obj: AttributeValue): any => ({
    ...obj,
  });
}

/**
 * <p>Temporary access credentials used for uploading game build files to Amazon GameLift. They
 *             are valid for a limited time. If they expire before you upload your game build, get a
 *             new set by calling <a>RequestUploadCredentials</a>.</p>
 */
export interface AwsCredentials {
  /**
   * <p>Temporary key allowing access to the Amazon GameLift S3 account.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>Temporary secret key allowing access to the Amazon GameLift S3 account.</p>
   */
  SecretAccessKey?: string;

  /**
   * <p>Token used to associate a specific build ID with the files uploaded using these
   *             credentials.</p>
   */
  SessionToken?: string;
}

export namespace AwsCredentials {
  export const filterSensitiveLog = (obj: AwsCredentials): any => ({
    ...obj,
  });
}

export enum BackfillMode {
  AUTOMATIC = "AUTOMATIC",
  MANUAL = "MANUAL",
}

export enum BalancingStrategy {
  ON_DEMAND_ONLY = "ON_DEMAND_ONLY",
  SPOT_ONLY = "SPOT_ONLY",
  SPOT_PREFERRED = "SPOT_PREFERRED",
}

export enum OperatingSystem {
  AMAZON_LINUX = "AMAZON_LINUX",
  AMAZON_LINUX_2 = "AMAZON_LINUX_2",
  WINDOWS_2012 = "WINDOWS_2012",
}

export enum BuildStatus {
  FAILED = "FAILED",
  INITIALIZED = "INITIALIZED",
  READY = "READY",
}

/**
 * <p>Properties describing a custom game build.</p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateBuild</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListBuilds</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeBuild</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateBuild</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteBuild</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Build {
  /**
   * <p>A unique identifier for a build.</p>
   */
  BuildId?: string;

  /**
   * <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) that is assigned to a GameLift build resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift build ARN, the resource ID matches the
   *                 <i>BuildId</i> value.</p>
   */
  BuildArn?: string;

  /**
   * <p>A descriptive label that is associated with a build. Build names do not need to be unique. It can be set using <a>CreateBuild</a> or <a>UpdateBuild</a>.</p>
   */
  Name?: string;

  /**
   * <p>Version information that is associated with a build or script. Version strings do not need to be unique. This value can be set using <a>CreateBuild</a> or <a>UpdateBuild</a>.</p>
   */
  Version?: string;

  /**
   * <p>Current status of the build.</p>
   *         <p>Possible build statuses include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>INITIALIZED</b> -- A new build has been defined,
   *                     but no files have been uploaded. You cannot create fleets for builds that are in
   *                     this status. When a build is successfully created, the build status is set to
   *                     this value. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>READY</b> -- The game build has been successfully
   *                     uploaded. You can now create new fleets for this build.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>FAILED</b> -- The game build upload failed. You
   *                     cannot create new fleets for this build. </p>
   *             </li>
   *          </ul>
   */
  Status?: BuildStatus | string;

  /**
   * <p>File size of the uploaded game build, expressed in bytes. When the build status is
   *                 <code>INITIALIZED</code>, this value is 0.</p>
   */
  SizeOnDisk?: number;

  /**
   * <p>Operating system that the game server binaries are built to run on. This value
   *             determines the type of fleet resources that you can use for this build.</p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;
}

export namespace Build {
  export const filterSensitiveLog = (obj: Build): any => ({
    ...obj,
  });
}

export enum CertificateType {
  Disabled = "DISABLED",
  Generated = "GENERATED",
}

/**
 * <p>Information about the use of a TLS/SSL certificate for a fleet. TLS certificate
 *             generation is enabled at the fleet level, with one certificate generated for the fleet.
 *             When this feature is enabled, the certificate can be retrieved using the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">GameLift Server SDK</a> call <code>GetInstanceCertificate</code>. All instances
 *             in a fleet share the same certificate.</p>
 */
export interface CertificateConfiguration {
  /**
   * <p>Indicates whether a TLS/SSL certificate was generated for a fleet. </p>
   *         <p> </p>
   *         <p> </p>
   */
  CertificateType: CertificateType | string | undefined;
}

export namespace CertificateConfiguration {
  export const filterSensitiveLog = (obj: CertificateConfiguration): any => ({
    ...obj,
  });
}

export interface ClaimGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running.
   *             Use either the <a>GameServerGroup</a> name or ARN value.. If you are not specifying a game server to claim,
   *             this value identifies where you want GameLift FleetIQ to look for an available
   *             game server to claim. </p>
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server to claim. If this parameter
   *             is left empty, GameLift FleetIQ searches for an available game server in the specified game
   *             server group.</p>
   */
  GameServerId?: string;

  /**
   * <p>A set of custom game server properties, formatted as a single string value. This data
   *             is passed to a game client or service when it requests information on game servers using
   *                 <a>ListGameServers</a> or <a>ClaimGameServer</a>. </p>
   */
  GameServerData?: string;
}

export namespace ClaimGameServerInput {
  export const filterSensitiveLog = (obj: ClaimGameServerInput): any => ({
    ...obj,
  });
}

export enum GameServerClaimStatus {
  CLAIMED = "CLAIMED",
}

export enum GameServerUtilizationStatus {
  AVAILABLE = "AVAILABLE",
  UTILIZED = "UTILIZED",
}

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *         <p>Properties describing a game server that is running on an instance in a <a>GameServerGroup</a>. </p>
 *          <p>A game server is created by a successful call to <code>RegisterGameServer</code> and
 *             deleted by calling <code>DeregisterGameServer</code>. A game server is claimed to host a
 *             game session by calling <code>ClaimGameServer</code>. </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>RegisterGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGameServers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ClaimGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameServer</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeregisterGameServer</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface GameServer {
  /**
   * <p>A unique identifier for the game server group where the game server is running.
   *             Use either the <a>GameServerGroup</a> name or ARN value.</p>
   */
  GameServerGroupName?: string;

  /**
   * <p>The ARN identifier for the game server group where the game server is located.</p>
   */
  GameServerGroupArn?: string;

  /**
   * <p>A custom string that uniquely identifies the game server. Game server IDs are
   *             developer-defined and are unique across all game server groups in an AWS
   *             account.</p>
   */
  GameServerId?: string;

  /**
   * <p>The unique identifier for the instance where the game server is running. This ID is
   *             available in the instance metadata. EC2 instance IDs
   *             use a 17-character format, for example: <code>i-1234567890abcdef0</code>.</p>
   */
  InstanceId?: string;

  /**
   * <p>The port and IP address that must be used to establish a client connection to the game server.</p>
   */
  ConnectionInfo?: string;

  /**
   * <p>A set of custom game server properties, formatted as a single string value. This data
   *             is passed to a game client or service when it requests information on game servers using
   *                 <a>ListGameServers</a> or <a>ClaimGameServer</a>.</p>
   */
  GameServerData?: string;

  /**
   * <p>Indicates when an available game server has been reserved for gameplay but has not yet
   *             started hosting a game. Once it is claimed, the game server remains in
   *                 <code>CLAIMED</code> status for a maximum of one minute. During this time, game
   *             clients connect to the game server to start the game and trigger the game server to
   *             update its utilization status. After one minute, the game server claim status reverts to
   *             null.</p>
   */
  ClaimStatus?: GameServerClaimStatus | string;

  /**
   * <p>Indicates whether the game server is currently available for new games or is busy. Possible statuses include:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>AVAILABLE</code> - The game server is available to be claimed. A game server that has
   *                     been claimed remains in this status until it reports game hosting activity. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UTILIZED</code> - The game server is currently hosting a game session with players. </p>
   *             </li>
   *          </ul>
   */
  UtilizationStatus?: GameServerUtilizationStatus | string;

  /**
   * <p>Timestamp that indicates when the game server was created with a <a>RegisterGameServer</a> request. The format is a number expressed in Unix
   *             time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   */
  RegistrationTime?: Date;

  /**
   * <p>Timestamp that indicates the last time the game server was claimed with a <a>ClaimGameServer</a> request. The format is a number expressed in Unix time
   *             as milliseconds (for example <code>"1469498468.057"</code>). This value is used to
   *             calculate when a claimed game server's status should revert to null.</p>
   */
  LastClaimTime?: Date;

  /**
   * <p>Timestamp that indicates the last time the game server was updated with health status
   *             using an <a>UpdateGameServer</a> request. The format is a number expressed in
   *             Unix time as milliseconds (for example <code>"1469498468.057"</code>). After game server
   *             registration, this property is only changed when a game server update specifies a health
   *             check value.</p>
   */
  LastHealthCheckTime?: Date;
}

export namespace GameServer {
  export const filterSensitiveLog = (obj: GameServer): any => ({
    ...obj,
  });
}

export interface ClaimGameServerOutput {
  /**
   * <p>Object that describes the newly claimed game server.</p>
   */
  GameServer?: GameServer;
}

export namespace ClaimGameServerOutput {
  export const filterSensitiveLog = (obj: ClaimGameServerOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The requested operation would cause a conflict with the current state of a service
 *             resource associated with the request. Resolve the conflict before retrying this
 *             request.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified game server group has no available game servers to fulfill a
 *             <code>ClaimGameServer</code> request. Clients can retry such requests immediately
 *             or after a waiting period.
 *
 *         </p>
 */
export interface OutOfCapacityException extends __SmithyException, $MetadataBearer {
  name: "OutOfCapacityException";
  $fault: "client";
  Message?: string;
}

export namespace OutOfCapacityException {
  export const filterSensitiveLog = (obj: OutOfCapacityException): any => ({
    ...obj,
  });
}

/**
 * <p>The client failed authentication. Clients should not retry such requests.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  Message?: string;
}

export namespace UnauthorizedException {
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
}

export enum ComparisonOperatorType {
  GreaterThanOrEqualToThreshold = "GreaterThanOrEqualToThreshold",
  GreaterThanThreshold = "GreaterThanThreshold",
  LessThanOrEqualToThreshold = "LessThanOrEqualToThreshold",
  LessThanThreshold = "LessThanThreshold",
}

/**
 * <p>
 *             A label that can be assigned to a GameLift resource.
 *         </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the
 *             <i>AWS General Reference</i>
 *          </p>
 *         <p>
 *             <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/">
 *             AWS Tagging Strategies</a>
 *          </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>TagResource</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Tag {
  /**
   * <p>
   *             The key for a developer-defined key:value pair for tagging an AWS resource.
   *         </p>
   */
  Key: string | undefined;

  /**
   * <p>
   *             The value for a developer-defined key:value pair for tagging an AWS resource.
   *         </p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface CreateAliasInput {
  /**
   * <p>A descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   */
  Name: string | undefined;

  /**
   * <p>A human-readable description of the alias.</p>
   */
  Description?: string;

  /**
   * <p>The routing configuration, including routing type and fleet target, for the alias. </p>
   */
  RoutingStrategy: RoutingStrategy | undefined;

  /**
   * <p>A list of labels to assign to the new alias resource. Tags are developer-defined
   *             key-value pairs. Tagging
   *             AWS resources are useful for resource management, access management and cost allocation.
   *             For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging AWS Resources</a> in the
   *                 <i>AWS General Reference</i>. Once the resource is created, you can
   *             use <a>TagResource</a>, <a>UntagResource</a>, and
   *             <a>ListTagsForResource</a> to add, remove, and view tags. The
   *             maximum tag limit may be lower than stated. See the AWS General Reference for actual
   *             tagging limits.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAliasInput {
  export const filterSensitiveLog = (obj: CreateAliasInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface CreateAliasOutput {
  /**
   * <p>The newly created alias resource.</p>
   */
  Alias?: Alias;
}

export namespace CreateAliasOutput {
  export const filterSensitiveLog = (obj: CreateAliasOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The requested operation would cause the resource to exceed the allowed service
 *             limit. Resolve the issue before retrying.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before retrying.
 *         </p>
 */
export interface TaggingFailedException extends __SmithyException, $MetadataBearer {
  name: "TaggingFailedException";
  $fault: "client";
  Message?: string;
}

export namespace TaggingFailedException {
  export const filterSensitiveLog = (obj: TaggingFailedException): any => ({
    ...obj,
  });
}

/**
 * <p>The location in S3 where build or script files are stored for access by Amazon GameLift. This
 *             location is specified in <a>CreateBuild</a>, <a>CreateScript</a>,
 *             and <a>UpdateScript</a> requests. </p>
 */
export interface S3Location {
  /**
   * <p>An S3 bucket identifier. This is the name of the S3 bucket.</p>
   *         <note>
   *             <p>GameLift currently does not support uploading from S3 buckets with names that contain a dot (.).</p>
   *          </note>
   */
  Bucket?: string;

  /**
   * <p>The name of the zip file that contains the build files or script files. </p>
   */
  Key?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that
   *             allows Amazon GameLift to access the S3 bucket.</p>
   */
  RoleArn?: string;

  /**
   * <p>The version of the file, if object versioning is turned on for the bucket. Amazon GameLift uses
   *             this information when retrieving files from an S3 bucket that you own. Use this
   *             parameter to specify a specific version of the file. If not set, the latest version of
   *             the file is retrieved. </p>
   */
  ObjectVersion?: string;
}

export namespace S3Location {
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface CreateBuildInput {
  /**
   * <p>A descriptive label that is associated with a build. Build names do not need to be unique. You can use <a>UpdateBuild</a> to change this value later.
   *         </p>
   */
  Name?: string;

  /**
   * <p>Version information that is associated with a build or script. Version strings do not need to be unique. You can use <a>UpdateBuild</a> to change this value later.
   *         </p>
   */
  Version?: string;

  /**
   * <p>The location where your game build files are stored. Use this parameter only when
   *             creating a build using files that are stored in an S3 bucket that you own. Identify an
   *             S3 bucket name and key, which must in the same Region where you're creating a build.
   *             This parameter must also specify the ARN for an IAM role that you've set up to give
   *             Amazon GameLift access your S3 bucket. To call this operation with a storage location, you must
   *             have IAM PassRole permission. For more details on IAM roles and PassRole permissions,
   *             see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">
   *                 Set up a role for GameLift access</a>. </p>
   */
  StorageLocation?: S3Location;

  /**
   * <p>The operating system that the game server binaries are built to run on. This value
   *             determines the type of fleet resources that you can use for this build. If your game
   *             build contains multiple executables, they all must run on the same operating system. If
   *             an operating system is not specified when creating a build, Amazon GameLift uses the
   *             default value (WINDOWS_2012). This value cannot be changed later.</p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>A list of labels to assign to the new build resource. Tags are developer-defined
   *             key-value pairs. Tagging
   *             AWS resources are useful for resource management, access management and cost allocation.
   *             For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging AWS Resources</a> in the
   *             <i>AWS General Reference</i>. Once the resource is created, you can
   *             use <a>TagResource</a>, <a>UntagResource</a>, and
   *             <a>ListTagsForResource</a> to add, remove, and view tags. The
   *             maximum tag limit may be lower than stated. See the AWS General Reference for actual
   *             tagging limits.</p>
   */
  Tags?: Tag[];
}

export namespace CreateBuildInput {
  export const filterSensitiveLog = (obj: CreateBuildInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface CreateBuildOutput {
  /**
   * <p>The newly created build resource, including a unique build IDs and status. </p>
   */
  Build?: Build;

  /**
   * <p>This element is returned only when the operation is called without a storage
   *             location. It contains credentials to use when you are uploading a build file to an S3
   *             bucket that is owned by Amazon GameLift. Credentials have a limited life span. To refresh these
   *             credentials, call <a>RequestUploadCredentials</a>. </p>
   */
  UploadCredentials?: AwsCredentials;

  /**
   * <p>Amazon S3 location for your game build file, including bucket name and
   *             key.</p>
   */
  StorageLocation?: S3Location;
}

export namespace CreateBuildOutput {
  export const filterSensitiveLog = (obj: CreateBuildOutput): any => ({
    ...obj,
    ...(obj.UploadCredentials && { UploadCredentials: SENSITIVE_STRING }),
  });
}

export enum IpProtocol {
  TCP = "TCP",
  UDP = "UDP",
}

/**
 * <p>A range of IP addresses and port settings that allow inbound traffic to connect to
 *             server processes on an Amazon GameLift hosting resource. New game sessions that are started on
 *             the fleet are assigned an IP address/port number combination, which must fall into the
 *             fleet's allowed ranges. For fleets created with a custom game server, the ranges reflect
 *             the server's game session assignments. For Realtime Servers fleets, Amazon GameLift automatically opens two
 *             port ranges, one for TCP messaging and one for UDP for use by the Realtime servers.</p>
 */
export interface IpPermission {
  /**
   * <p>A starting value for a range of allowed port numbers.</p>
   */
  FromPort: number | undefined;

  /**
   * <p>An ending value for a range of allowed port numbers. Port numbers are end-inclusive.
   *             This value must be higher than <code>FromPort</code>.</p>
   */
  ToPort: number | undefined;

  /**
   * <p>A range of allowed IP addresses. This value must be expressed in CIDR notation.
   *             Example: "<code>000.000.000.000/[subnet mask]</code>" or optionally the shortened
   *             version "<code>0.0.0.0/[subnet mask]</code>".</p>
   */
  IpRange: string | undefined;

  /**
   * <p>The network communication protocol used by the fleet.</p>
   */
  Protocol: IpProtocol | string | undefined;
}

export namespace IpPermission {
  export const filterSensitiveLog = (obj: IpPermission): any => ({
    ...obj,
  });
}

export type EC2InstanceType =
  | "c3.2xlarge"
  | "c3.4xlarge"
  | "c3.8xlarge"
  | "c3.large"
  | "c3.xlarge"
  | "c4.2xlarge"
  | "c4.4xlarge"
  | "c4.8xlarge"
  | "c4.large"
  | "c4.xlarge"
  | "c5.12xlarge"
  | "c5.18xlarge"
  | "c5.24xlarge"
  | "c5.2xlarge"
  | "c5.4xlarge"
  | "c5.9xlarge"
  | "c5.large"
  | "c5.xlarge"
  | "c5a.12xlarge"
  | "c5a.16xlarge"
  | "c5a.24xlarge"
  | "c5a.2xlarge"
  | "c5a.4xlarge"
  | "c5a.8xlarge"
  | "c5a.large"
  | "c5a.xlarge"
  | "m3.2xlarge"
  | "m3.large"
  | "m3.medium"
  | "m3.xlarge"
  | "m4.10xlarge"
  | "m4.2xlarge"
  | "m4.4xlarge"
  | "m4.large"
  | "m4.xlarge"
  | "m5.12xlarge"
  | "m5.16xlarge"
  | "m5.24xlarge"
  | "m5.2xlarge"
  | "m5.4xlarge"
  | "m5.8xlarge"
  | "m5.large"
  | "m5.xlarge"
  | "m5a.12xlarge"
  | "m5a.16xlarge"
  | "m5a.24xlarge"
  | "m5a.2xlarge"
  | "m5a.4xlarge"
  | "m5a.8xlarge"
  | "m5a.large"
  | "m5a.xlarge"
  | "r3.2xlarge"
  | "r3.4xlarge"
  | "r3.8xlarge"
  | "r3.large"
  | "r3.xlarge"
  | "r4.16xlarge"
  | "r4.2xlarge"
  | "r4.4xlarge"
  | "r4.8xlarge"
  | "r4.large"
  | "r4.xlarge"
  | "r5.12xlarge"
  | "r5.16xlarge"
  | "r5.24xlarge"
  | "r5.2xlarge"
  | "r5.4xlarge"
  | "r5.8xlarge"
  | "r5.large"
  | "r5.xlarge"
  | "r5a.12xlarge"
  | "r5a.16xlarge"
  | "r5a.24xlarge"
  | "r5a.2xlarge"
  | "r5a.4xlarge"
  | "r5a.8xlarge"
  | "r5a.large"
  | "r5a.xlarge"
  | "t2.large"
  | "t2.medium"
  | "t2.micro"
  | "t2.small";

export enum FleetType {
  OnDemand = "ON_DEMAND",
  Spot = "SPOT",
}

export enum ProtectionPolicy {
  FullProtection = "FullProtection",
  NoProtection = "NoProtection",
}

/**
 * <p>A policy that limits the number of game sessions a player can create on the same
 *             fleet. This optional policy gives game owners control over how players can consume
 *             available game server resources. A resource creation policy makes the following
 *             statement: "An individual player can create a maximum number of new game sessions within
 *             a specified time period".</p>
 *         <p>The policy is evaluated when a player tries to create a new game session. For example:
 *             Assume you have a policy of 10 new game sessions and a time period of 60 minutes. On
 *             receiving a <code>CreateGameSession</code> request, Amazon GameLift checks that the player
 *             (identified by <code>CreatorId</code>) has created fewer than 10 game sessions in the
 *             past 60 minutes.</p>
 */
export interface ResourceCreationLimitPolicy {
  /**
   * <p>The maximum number of game sessions that an individual can create during the policy
   *             period. </p>
   */
  NewGameSessionsPerCreator?: number;

  /**
   * <p>The time span used in evaluating the resource creation limit policy. </p>
   */
  PolicyPeriodInMinutes?: number;
}

export namespace ResourceCreationLimitPolicy {
  export const filterSensitiveLog = (obj: ResourceCreationLimitPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>A set of instructions for launching server processes on each instance in a fleet.
 *             Server processes run either a custom game build executable or a Realtime Servers script.
 *             Each instruction set identifies the location of the custom game build executable or
 *             Realtime launch script, optional launch
 *             parameters, and the number of server processes with this configuration to maintain
 *             concurrently on the instance. Server process configurations make up a fleet's <code>
 *                 <a>RuntimeConfiguration</a>
 *             </code>.</p>
 */
export interface ServerProcess {
  /**
   * <p>The location of the server executable in a custom game build or the name of the Realtime
   *             script file that contains the <code>Init()</code> function. Game builds and Realtime
   *             scripts are installed on instances at the root: </p>
   *         <ul>
   *             <li>
   *                <p>Windows (for custom game builds only): <code>C:\game</code>. Example:
   *                         "<code>C:\game\MyGame\server.exe</code>" </p>
   *             </li>
   *             <li>
   *                <p>Linux: <code>/local/game</code>. Examples: "<code>/local/game/MyGame/server.exe</code>" or
   *                         "<code>/local/game/MyRealtimeScript.js</code>"</p>
   *             </li>
   *          </ul>
   */
  LaunchPath: string | undefined;

  /**
   * <p>An optional list of parameters to pass to the server executable or Realtime script on
   *             launch.</p>
   */
  Parameters?: string;

  /**
   * <p>The number of server processes that use this configuration to run concurrently on an
   *             instance.</p>
   */
  ConcurrentExecutions: number | undefined;
}

export namespace ServerProcess {
  export const filterSensitiveLog = (obj: ServerProcess): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of server process configurations that describe what processes to run on
 *             each instance in a fleet. Server processes run either a custom game build executable or
 *             a Realtime Servers script. Each instance in the fleet starts the specified server processes and
 *             continues to start new processes as existing processes end. Each instance regularly
 *             checks for an updated runtime configuration. </p>
 *         <p>The runtime configuration enables the instances in a fleet to run multiple processes
 *             simultaneously. Learn more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html"> Running Multiple
 *                 Processes on a Fleet </a>.</p>
 *         <p>A Amazon GameLift instance is limited to 50 processes running simultaneously. To calculate the
 *             total number of processes in a runtime configuration, add the values of the
 *                 <code>ConcurrentExecutions</code> parameter for each <a>ServerProcess</a>
 *             object.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListFleets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartFleetActions</a> or <a>StopFleetActions</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface RuntimeConfiguration {
  /**
   * <p>A collection of server process configurations that describe which server processes to
   *             run on each instance in a fleet.</p>
   */
  ServerProcesses?: ServerProcess[];

  /**
   * <p>The maximum number of game sessions with status <code>ACTIVATING</code> to allow on an
   *             instance simultaneously. This setting limits the amount of instance resources that can
   *             be used for new game activations at any one time.</p>
   */
  MaxConcurrentGameSessionActivations?: number;

  /**
   * <p>The maximum amount of time (in seconds) that a game session can remain in status
   *                 <code>ACTIVATING</code>. If the game session is not active before the timeout,
   *             activation is terminated and the game session status is changed to
   *                 <code>TERMINATED</code>.</p>
   */
  GameSessionActivationTimeoutSeconds?: number;
}

export namespace RuntimeConfiguration {
  export const filterSensitiveLog = (obj: RuntimeConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface CreateFleetInput {
  /**
   * <p>A descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>
   */
  Name: string | undefined;

  /**
   * <p>A human-readable description of a fleet.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier for a build to be deployed on the new fleet. You can use either the build ID or ARN value.
   *             The custom game server build must have been successfully uploaded to Amazon GameLift and be in a
   *                 <code>READY</code> status. This fleet setting cannot be changed once the fleet is
   *             created. </p>
   */
  BuildId?: string;

  /**
   * <p>A unique identifier for a Realtime script to be deployed on the new fleet. You can use either the script ID or ARN value.
   *             The Realtime script must have been successfully uploaded to Amazon GameLift. This fleet setting
   *             cannot be changed once the fleet is created.</p>
   */
  ScriptId?: string;

  /**
   * <p>This parameter is no longer used. Instead, specify a server launch path using the
   *                 <code>RuntimeConfiguration</code> parameter. Requests that specify a server launch
   *             path and launch parameters instead of a runtime configuration will continue to
   *             work.</p>
   */
  ServerLaunchPath?: string;

  /**
   * <p>This parameter is no longer used. Instead, specify server launch parameters in the
   *                 <code>RuntimeConfiguration</code> parameter. (Requests that specify a server launch
   *             path and launch parameters instead of a runtime configuration will continue to
   *             work.)</p>
   */
  ServerLaunchParameters?: string;

  /**
   * <p>This parameter is no longer used. Instead, to specify where Amazon GameLift should store log
   *             files once a server process shuts down, use the Amazon GameLift server API
   *                 <code>ProcessReady()</code> and specify one or more directory paths in
   *                 <code>logParameters</code>. See more information in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api-ref.html#gamelift-sdk-server-api-ref-dataypes-process">Server API Reference</a>. </p>
   */
  LogPaths?: string[];

  /**
   * <p>The name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type
   *             determines the computing resources of each instance in the fleet, including CPU, memory,
   *             storage, and networking capacity. Amazon GameLift supports the following EC2 instance types.
   *             See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>
   *             for detailed descriptions.</p>
   */
  EC2InstanceType: EC2InstanceType | string | undefined;

  /**
   * <p>Range of IP addresses and port settings that permit inbound traffic to access game
   *             sessions that are running on the fleet. For fleets using a custom game build, this
   *             parameter is required before game sessions running on the fleet can accept connections.
   *             For Realtime Servers fleets, Amazon GameLift automatically sets TCP and UDP ranges for use by the Realtime
   *             servers. You can specify multiple permission settings or add more by updating the
   *             fleet.</p>
   */
  EC2InboundPermissions?: IpPermission[];

  /**
   * <p>A game session protection policy to apply to all instances in this fleet. If this
   *             parameter is not set, instances in this fleet default to no protection. You can change a
   *             fleet's protection policy using <a>UpdateFleetAttributes</a>, but this change
   *             will only affect sessions created after the policy change. You can also set protection
   *             for individual instances using <a>UpdateGameSession</a>.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>NoProtection</b> - The game session can be
   *                     terminated during a scale-down event.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>FullProtection</b> - If the game session is in an
   *                         <code>ACTIVE</code> status, it cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy | string;

  /**
   * <p>Instructions for launching server processes on each instance in the fleet. Server
   *             processes run either a custom game build executable or a Realtime script. The runtime
   *             configuration defines the server executables or launch script file, launch parameters,
   *             and the number of processes to run concurrently on each instance. When creating a fleet,
   *             the runtime configuration must have at least one server process configuration; otherwise
   *             the request fails with an invalid request exception.  (This parameter replaces the
   *             parameters <code>ServerLaunchPath</code> and <code>ServerLaunchParameters</code>,
   *             although requests that contain values for these parameters instead of a runtime
   *             configuration will continue to work.) This parameter is required unless the parameters
   *             <code>ServerLaunchPath</code> and <code>ServerLaunchParameters</code> are defined. Runtime
   *             configuration replaced these parameters, but fleets that use them will continue to work. </p>
   */
  RuntimeConfiguration?: RuntimeConfiguration;

  /**
   * <p>A policy that limits the number of game sessions an individual player can create over
   *             a span of time for this fleet.</p>
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  /**
   * <p>The name of an Amazon CloudWatch metric group to add this fleet to. A metric group
   *             aggregates the metrics for all fleets in the group. Specify an existing metric group
   *             name, or provide a new name to create a new metric group. A fleet can only be included
   *             in one metric group at a time. </p>
   */
  MetricGroups?: string[];

  /**
   * <p>A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift
   *             fleet with. You can find your account ID in the AWS Management Console under account settings. </p>
   */
  PeerVpcAwsAccountId?: string;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region as your fleet. To look up a VPC ID, use the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the AWS Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>. </p>
   */
  PeerVpcId?: string;

  /**
   * <p>Indicates whether to use On-Demand instances or Spot instances for this fleet. If
   *             empty, the default is <code>ON_DEMAND</code>. Both categories of instances use identical
   *             hardware and configurations based on the instance type selected for this fleet. Learn
   *             more about <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-ec2-instances.html#gamelift-ec2-instances-spot"> On-Demand versus Spot Instances</a>. </p>
   */
  FleetType?: FleetType | string;

  /**
   * <p>A unique identifier for an AWS IAM role that manages access to your AWS services.
   *         Fleets with an instance role ARN allow applications that are running on the fleet's instances to assume the role.
   *         Learn more about using on-box credentials for your game servers at
   *         <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-resources.html">
   *         Access external resources from a game server</a>. To call this operation with instance role ARN, you must have IAM PassRole
   *             permissions. See <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-iam-policy-examples.html">IAM policy examples for GameLift</a>.  </p>
   */
  InstanceRoleArn?: string;

  /**
   * <p>Indicates whether to generate a TLS/SSL certificate for the new fleet. TLS
   *             certificates are used for encrypting traffic between game clients and game servers
   *             running on GameLift. If this parameter is not specified, the default value, DISABLED, is
   *             used. This fleet setting cannot be changed once the fleet is created. Learn more at
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-howitworks.html#gamelift-howitworks-security">Securing Client/Server Communication</a>. </p>
   *         <p>Note: This feature requires the AWS Certificate Manager (ACM) service, which is
   *             available in the AWS global partition but not in all other partitions. When working in a
   *             partition that does not support this feature, a request for a new fleet with certificate
   *             generation results fails with a 4xx unsupported Region error.</p>
   *         <p>Valid values include: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>GENERATED</b> - Generate a TLS/SSL certificate
   *                     for this fleet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>DISABLED</b> - (default) Do not generate a
   *                     TLS/SSL certificate for this fleet.</p>
   *             </li>
   *          </ul>
   */
  CertificateConfiguration?: CertificateConfiguration;

  /**
   * <p>A list of labels to assign to the new fleet resource. Tags are developer-defined
   *             key-value pairs. Tagging
   *             AWS resources are useful for resource management, access management and cost allocation.
   *             For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging AWS Resources</a> in the
   *             <i>AWS General Reference</i>. Once the resource is created, you can
   *             use <a>TagResource</a>, <a>UntagResource</a>, and
   *             <a>ListTagsForResource</a> to add, remove, and view tags. The
   *             maximum tag limit may be lower than stated. See the AWS General Reference for actual
   *             tagging limits.</p>
   */
  Tags?: Tag[];
}

export namespace CreateFleetInput {
  export const filterSensitiveLog = (obj: CreateFleetInput): any => ({
    ...obj,
  });
}

export enum FleetStatus {
  ACTIVATING = "ACTIVATING",
  ACTIVE = "ACTIVE",
  BUILDING = "BUILDING",
  DELETING = "DELETING",
  DOWNLOADING = "DOWNLOADING",
  ERROR = "ERROR",
  NEW = "NEW",
  TERMINATED = "TERMINATED",
  VALIDATING = "VALIDATING",
}

export enum FleetAction {
  AutoScaling = "AUTO_SCALING",
}

/**
 * <p>General properties describing a fleet.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListFleets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartFleetActions</a> or <a>StopFleetActions</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface FleetAttributes {
  /**
   * <p>A unique identifier for a fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) that is assigned to a GameLift fleet resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift fleet ARN, the resource ID matches the
   *                 <i>FleetId</i> value.</p>
   */
  FleetArn?: string;

  /**
   * <p>Indicates whether the fleet uses on-demand or spot instances. A spot instance in use
   *             may be interrupted with a two-minute notification.</p>
   */
  FleetType?: FleetType | string;

  /**
   * <p>EC2 instance type indicating the computing resources of each instance in the
   *             fleet, including CPU, memory, storage, and networking capacity. See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a> for
   *             detailed descriptions.</p>
   */
  InstanceType?: EC2InstanceType | string;

  /**
   * <p>Human-readable description of the fleet.</p>
   */
  Description?: string;

  /**
   * <p>A descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;

  /**
   * <p>Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  TerminationTime?: Date;

  /**
   * <p>Current status of the fleet.</p>
   *         <p>Possible fleet statuses include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>NEW</b> -- A new fleet has been defined and desired
   *                     instances is set to 1. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>DOWNLOADING/VALIDATING/BUILDING/ACTIVATING</b> --
   *                     Amazon GameLift is setting up the new fleet, creating new instances with the game build
   *                     or Realtime script and starting server processes.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>ACTIVE</b> -- Hosts can now accept game
   *                     sessions.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>ERROR</b> -- An error occurred when downloading,
   *                     validating, building, or activating the fleet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>DELETING</b> -- Hosts are responding to a delete
   *                     fleet request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>TERMINATED</b> -- The fleet no longer
   *                     exists.</p>
   *             </li>
   *          </ul>
   */
  Status?: FleetStatus | string;

  /**
   * <p>A unique identifier for a build.</p>
   */
  BuildId?: string;

  /**
   * <p> The Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) associated with the GameLift build resource that is deployed on instances
   *             in this fleet.  In a GameLift build ARN, the resource ID matches the
   *                 <i>BuildId</i> value.</p>
   */
  BuildArn?: string;

  /**
   * <p>A unique identifier for a Realtime script.</p>
   */
  ScriptId?: string;

  /**
   * <p> The Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) associated with the GameLift script resource that is deployed on instances
   *             in this fleet.  In a GameLift script ARN, the resource ID matches the
   *                 <i>ScriptId</i> value.</p>
   */
  ScriptArn?: string;

  /**
   * <p>Path to a game server executable in the fleet's build, specified for fleets created
   *             before 2016-08-04 (or AWS SDK v. 0.12.16). Server launch paths for fleets created after
   *             this date are specified in the fleet's <a>RuntimeConfiguration</a>.</p>
   */
  ServerLaunchPath?: string;

  /**
   * <p>Game server launch parameters specified for fleets created before 2016-08-04 (or
   *             AWS SDK v. 0.12.16). Server launch parameters for fleets created after this date are
   *             specified in the fleet's <a>RuntimeConfiguration</a>.</p>
   */
  ServerLaunchParameters?: string;

  /**
   * <p>Location of default log files. When a server process is shut down, Amazon GameLift captures
   *             and stores any log files in this location. These logs are in addition to game session
   *             logs; see more on game session logs in the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-api-server-code">Amazon GameLift Developer Guide</a>. If no default log path for a fleet is specified,
   *             Amazon GameLift automatically uploads logs that are stored on each instance at
   *                 <code>C:\game\logs</code> (for Windows) or <code>/local/game/logs</code> (for
   *             Linux). Use the Amazon GameLift console to access stored logs. </p>
   */
  LogPaths?: string[];

  /**
   * <p>The type of game session protection to set for all new instances started in the
   *             fleet.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>NoProtection</b> -- The game session can be
   *                     terminated during a scale-down event.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>FullProtection</b> -- If the game session is in an
   *                         <code>ACTIVE</code> status, it cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy | string;

  /**
   * <p>Operating system of the fleet's computing resources. A fleet's operating system
   *             depends on the OS specified for the build that is deployed on this fleet.</p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>Fleet policy to limit the number of game sessions an individual player can create
   *             over a span of time.</p>
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  /**
   * <p>Names of metric groups that this fleet is included in. In Amazon CloudWatch, you
   *             can view metrics for an individual fleet or aggregated metrics for fleets that are in a
   *             fleet metric group. A fleet can be included in only one metric group at a
   *             time.</p>
   */
  MetricGroups?: string[];

  /**
   * <p>List of fleet activity that have been suspended using <a>StopFleetActions</a>. This includes auto-scaling.</p>
   */
  StoppedActions?: (FleetAction | string)[];

  /**
   * <p>A unique identifier for an AWS IAM role that manages access to your AWS services.</p>
   */
  InstanceRoleArn?: string;

  /**
   * <p>Indicates whether a TLS/SSL certificate was generated for the fleet. </p>
   */
  CertificateConfiguration?: CertificateConfiguration;
}

export namespace FleetAttributes {
  export const filterSensitiveLog = (obj: FleetAttributes): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface CreateFleetOutput {
  /**
   * <p>Properties for the newly created fleet.</p>
   */
  FleetAttributes?: FleetAttributes;
}

export namespace CreateFleetOutput {
  export const filterSensitiveLog = (obj: CreateFleetOutput): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *         <p>Settings for a target-based scaling policy as part of a <a>GameServerGroupAutoScalingPolicy</a>.
 *             These settings are used to
 *             create a target-based policy that tracks the GameLift FleetIQ metric
 *                 <code>"PercentUtilizedGameServers"</code> and specifies a target value for the
 *             metric. As player usage changes, the policy triggers to adjust the game server group
 *             capacity so that the metric returns to the target value. </p>
 */
export interface TargetTrackingConfiguration {
  /**
   * <p>Desired value to use with a game server group target-based scaling policy.  </p>
   */
  TargetValue: number | undefined;
}

export namespace TargetTrackingConfiguration {
  export const filterSensitiveLog = (obj: TargetTrackingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *         <p>Configuration settings for intelligent automatic scaling that uses target tracking.
 *             These settings are used to add an Auto Scaling policy when creating the corresponding
 *             Auto Scaling group with <a>CreateGameServerGroup</a>. After the Auto Scaling
 *             group is created, all updates to Auto Scaling policies, including changing this policy
 *             and adding or removing other policies, is done directly on the Auto Scaling group. </p>
 */
export interface GameServerGroupAutoScalingPolicy {
  /**
   * <p>Length of time, in seconds, it takes for a new instance to start new game server
   *             processes and register with GameLift FleetIQ. Specifying a warm-up time can be useful, particularly
   *             with game servers that take a long time to start up, because it avoids prematurely
   *             starting new instances. </p>
   */
  EstimatedInstanceWarmup?: number;

  /**
   * <p>Settings for a target-based scaling policy applied to Auto Scaling group. These
   *             settings are used to create a target-based policy that tracks the GameLift FleetIQ metric
   *                 <code>"PercentUtilizedGameServers"</code> and specifies a target value for the
   *             metric. As player usage changes, the policy triggers to adjust the game server group
   *             capacity so that the metric returns to the target value. </p>
   */
  TargetTrackingConfiguration: TargetTrackingConfiguration | undefined;
}

export namespace GameServerGroupAutoScalingPolicy {
  export const filterSensitiveLog = (obj: GameServerGroupAutoScalingPolicy): any => ({
    ...obj,
  });
}

export enum GameServerProtectionPolicy {
  FULL_PROTECTION = "FULL_PROTECTION",
  NO_PROTECTION = "NO_PROTECTION",
}

export type GameServerGroupInstanceType =
  | "c4.2xlarge"
  | "c4.4xlarge"
  | "c4.8xlarge"
  | "c4.large"
  | "c4.xlarge"
  | "c5.12xlarge"
  | "c5.18xlarge"
  | "c5.24xlarge"
  | "c5.2xlarge"
  | "c5.4xlarge"
  | "c5.9xlarge"
  | "c5.large"
  | "c5.xlarge"
  | "m4.10xlarge"
  | "m4.2xlarge"
  | "m4.4xlarge"
  | "m4.large"
  | "m4.xlarge"
  | "m5.12xlarge"
  | "m5.16xlarge"
  | "m5.24xlarge"
  | "m5.2xlarge"
  | "m5.4xlarge"
  | "m5.8xlarge"
  | "m5.large"
  | "m5.xlarge"
  | "r4.16xlarge"
  | "r4.2xlarge"
  | "r4.4xlarge"
  | "r4.8xlarge"
  | "r4.large"
  | "r4.xlarge"
  | "r5.12xlarge"
  | "r5.16xlarge"
  | "r5.24xlarge"
  | "r5.2xlarge"
  | "r5.4xlarge"
  | "r5.8xlarge"
  | "r5.large"
  | "r5.xlarge";

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *         <p>An allowed instance type for a <a>GameServerGroup</a>. All game server groups must have at least two
 *             instance types defined for it. GameLift FleetIQ periodically evaluates each defined instance type
 *             for viability. It then updates the Auto Scaling group with the list of viable instance
 *             types.</p>
 */
export interface InstanceDefinition {
  /**
   * <p>An EC2 instance type designation.</p>
   */
  InstanceType: GameServerGroupInstanceType | string | undefined;

  /**
   * <p>Instance weighting that indicates how much this instance type contributes to the total
   *             capacity of a game server group. Instance weights are used by GameLift FleetIQ to calculate the
   *             instance type's cost per unit hour and better identify the most cost-effective options.
   *             For detailed information on weighting instance capacity, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html">Instance
   *                 Weighting</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
   *             Default value is "1".</p>
   */
  WeightedCapacity?: string;
}

export namespace InstanceDefinition {
  export const filterSensitiveLog = (obj: InstanceDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *         <p>An EC2 launch template that contains configuration settings and game server code to
 *             be deployed to all instances in a game server group. The launch template is specified
 *             when creating a new game server group with <a>CreateGameServerGroup</a>. </p>
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>A unique identifier for an existing EC2 launch template.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>A readable identifier for an existing EC2 launch template. </p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version of the EC2 launch template to use. If no version is specified, the
   *             default version will be used. With Amazon EC2, you can specify a default version for a
   *             launch template. If none is set, the default is the first version created.</p>
   */
  Version?: string;
}

export namespace LaunchTemplateSpecification {
  export const filterSensitiveLog = (obj: LaunchTemplateSpecification): any => ({
    ...obj,
  });
}

export interface CreateGameServerGroupInput {
  /**
   * <p>An identifier for the new game server group. This value is used to generate unique ARN
   *             identifiers for the EC2 Auto Scaling group and the GameLift FleetIQ game server group. The name
   *             must be unique per Region per AWS account.</p>
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that
   *             allows Amazon GameLift to access your EC2 Auto Scaling groups.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The minimum number of instances allowed in the EC2 Auto Scaling group. During
   *             automatic scaling events, GameLift FleetIQ and EC2 do not scale down the group below this
   *             minimum. In production, this value should be set to at least 1. After the Auto Scaling
   *             group is created, update this value directly in the Auto Scaling group using the AWS
   *             console or APIs.</p>
   */
  MinSize: number | undefined;

  /**
   * <p>The maximum number of instances allowed in the EC2 Auto Scaling group. During
   *             automatic scaling events, GameLift FleetIQ and EC2 do not scale up the group above this maximum.
   *             After the Auto Scaling group is created, update this value directly in the Auto Scaling
   *             group using the AWS console or APIs.</p>
   */
  MaxSize: number | undefined;

  /**
   * <p>The EC2 launch template that contains configuration settings and game server code to
   *             be deployed to all instances in the game server group. You can specify the template
   *             using either the template name or ID. For help with creating a launch template, see
   *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a Launch
   *                 Template for an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling
   *                 User Guide</i>. After the Auto Scaling group is created, update this value
   *             directly in the Auto Scaling group using the AWS console or APIs.</p>
   */
  LaunchTemplate: LaunchTemplateSpecification | undefined;

  /**
   * <p>The EC2 instance types and sizes to use in the Auto Scaling group. The instance
   *             definitions must specify at least two different instance types that are supported by
   *             GameLift FleetIQ. For more information on instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">EC2 Instance Types</a> in the
   *                 <i>Amazon EC2 User Guide</i>. You can optionally specify capacity
   *             weighting for each instance type. If no weight value is specified for an instance type,
   *             it is set to the default value "1". For more information about capacity weighting, see
   *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html"> Instance Weighting for
   *                 Amazon EC2 Auto Scaling</a> in the Amazon EC2 Auto Scaling User Guide.</p>
   */
  InstanceDefinitions: InstanceDefinition[] | undefined;

  /**
   * <p>Configuration settings to define a scaling policy for the Auto Scaling group that is
   *             optimized for game hosting. The scaling policy uses the metric
   *                 <code>"PercentUtilizedGameServers"</code> to maintain a buffer of idle game servers
   *             that can immediately accommodate new games and players. After the Auto Scaling group is
   *             created, update this value directly in the Auto Scaling group using the AWS console or
   *             APIs.</p>
   */
  AutoScalingPolicy?: GameServerGroupAutoScalingPolicy;

  /**
   * <p>Indicates how GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the
   *             game server group. Method options include the following:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>SPOT_ONLY</code> - Only Spot Instances are used in the game server group. If Spot
   *                     Instances are unavailable or not viable for game hosting, the game server group
   *                     provides no hosting capacity until Spot Instances can again be used. Until then,
   *                     no new instances are started, and the existing nonviable Spot Instances are
   *                     terminated (after current gameplay ends) and are not replaced.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SPOT_PREFERRED</code> - (default value) Spot Instances are used whenever available in
   *                     the game server group. If Spot Instances are unavailable, the game server group
   *                     continues to provide hosting capacity by falling back to On-Demand Instances.
   *                     Existing nonviable Spot Instances are terminated (after current gameplay ends)
   *                     and are replaced with new On-Demand Instances.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ON_DEMAND_ONLY</code> - Only On-Demand Instances are used in the game
   *                     server group. No Spot Instances are used, even when available, while this
   *                     balancing strategy is in force.</p>
   *             </li>
   *          </ul>
   */
  BalancingStrategy?: BalancingStrategy | string;

  /**
   * <p>A flag that indicates whether instances in the game server group are protected
   *             from early termination. Unprotected instances that have active game servers running might
   *             be terminated during a scale-down event, causing players to be dropped from the game.
   *             Protected instances cannot be terminated while there are active game servers running except
   *             in the event of a forced game server group deletion (see ). An exception to this is with Spot
   *             Instances, which can be terminated by AWS regardless of protection status. This property is set to <code>NO_PROTECTION</code> by default.</p>
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy | string;

  /**
   * <p>A list of virtual private cloud (VPC) subnets to use with instances in the game server
   *             group. By default, all GameLift FleetIQ-supported Availability Zones are used. You can use this
   *             parameter to specify VPCs that you've set up. This property cannot be updated after the
   *             game server group is created, and the corresponding Auto Scaling group will always use
   *             the property value that is set with this request, even if the Auto Scaling group is
   *             updated directly.</p>
   */
  VpcSubnets?: string[];

  /**
   * <p>A list of labels to assign to the new game server group resource. Tags are
   *             developer-defined key-value pairs. Tagging AWS resources is useful for resource
   *             management, access management, and cost allocation. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging AWS
   *                 Resources</a> in the <i>AWS General Reference</i>. Once the
   *             resource is created, you can use <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a> to add, remove,
   *             and view tags, respectively. The maximum tag limit may be lower than stated. See the
   *             AWS General Reference for actual tagging limits.</p>
   */
  Tags?: Tag[];
}

export namespace CreateGameServerGroupInput {
  export const filterSensitiveLog = (obj: CreateGameServerGroupInput): any => ({
    ...obj,
  });
}

export enum GameServerGroupStatus {
  ACTIVATING = "ACTIVATING",
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  DELETE_SCHEDULED = "DELETE_SCHEDULED",
  DELETING = "DELETING",
  ERROR = "ERROR",
  NEW = "NEW",
}

export enum GameServerGroupAction {
  REPLACE_INSTANCE_TYPES = "REPLACE_INSTANCE_TYPES",
}

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *         <p>Properties that describe a game server group resource. A game server group manages
 *             certain properties related to a corresponding EC2 Auto Scaling group. </p>
 *         <p>A game server group is created by a successful call to
 *                 <code>CreateGameServerGroup</code> and deleted by calling
 *                 <code>DeleteGameServerGroup</code>. Game server group activity can be temporarily
 *             suspended and resumed by calling <code>SuspendGameServerGroup</code> and
 *                 <code>ResumeGameServerGroup</code>, respectively. </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGameServerGroups</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ResumeGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>SuspendGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameServerInstances</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface GameServerGroup {
  /**
   * <p>A developer-defined identifier for the game server group. The name is unique for each
   *             Region in each AWS account.</p>
   */
  GameServerGroupName?: string;

  /**
   * <p>A generated unique ID for the game server group.</p>
   */
  GameServerGroupArn?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that
   *             allows Amazon GameLift to access your EC2 Auto Scaling groups.</p>
   */
  RoleArn?: string;

  /**
   * <p>The set of EC2 instance types that GameLift FleetIQ can use when balancing and automatically
   *             scaling instances in the corresponding Auto Scaling group. </p>
   */
  InstanceDefinitions?: InstanceDefinition[];

  /**
   * <p>Indicates how GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the
   *             game server group. Method options include the following:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>SPOT_ONLY</code> - Only Spot Instances are used in the game server group. If Spot
   *                     Instances are unavailable or not viable for game hosting, the game server group
   *                     provides no hosting capacity until Spot Instances can again be used. Until then,
   *                     no new instances are started, and the existing nonviable Spot Instances are
   *                     terminated (after current gameplay ends) and are not replaced.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SPOT_PREFERRED</code> - (default value) Spot Instances are used whenever available in
   *                     the game server group. If Spot Instances are unavailable, the game server group
   *                     continues to provide hosting capacity by falling back to On-Demand Instances.
   *                     Existing nonviable Spot Instances are terminated (after current gameplay ends)
   *                     and are replaced with new On-Demand Instances.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ON_DEMAND_ONLY</code> - Only On-Demand Instances are used in the game
   *                     server group. No Spot Instances are used, even when available, while this
   *                     balancing strategy is in force.</p>
   *             </li>
   *          </ul>
   */
  BalancingStrategy?: BalancingStrategy | string;

  /**
   * <p>A flag that indicates whether instances in the game server group are protected
   *             from early termination. Unprotected instances that have active game servers running might
   *             be terminated during a scale-down event, causing players to be dropped from the game.
   *             Protected instances cannot be terminated while there are active game servers running except
   *             in the event of a forced game server group deletion (see ). An exception to this is with Spot
   *             Instances, which can be terminated by AWS regardless of protection status. </p>
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy | string;

  /**
   * <p>A generated unique ID for the EC2 Auto Scaling group that is associated with this
   *             game server group.</p>
   */
  AutoScalingGroupArn?: string;

  /**
   * <p>The current status of the game server group. Possible statuses include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>NEW</code> - GameLift FleetIQ has validated the <code>CreateGameServerGroup()</code>
   *                     request. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ACTIVATING</code> - GameLift FleetIQ is setting up a game server group, which
   *                     includes creating an Auto Scaling group in your AWS account. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ACTIVE</code> - The game server group has been successfully created. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETE_SCHEDULED</code> - A request to delete the game server group has
   *                     been received. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETING</code> - GameLift FleetIQ has received a valid
   *                         <code>DeleteGameServerGroup()</code> request and is processing it. GameLift FleetIQ
   *                     must first complete and release hosts before it deletes the Auto Scaling group
   *                     and the game server group. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETED</code> - The game server group has been successfully deleted. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - The asynchronous processes of activating or deleting a game server group
   *                     has failed, resulting in an error state.</p>
   *             </li>
   *          </ul>
   */
  Status?: GameServerGroupStatus | string;

  /**
   * <p>Additional information about the current game server group status. This information
   *             might provide additional insight on groups that are in <code>ERROR</code> status.</p>
   */
  StatusReason?: string;

  /**
   * <p>A list of activities that are currently suspended for this game server group.
   *         If this property is empty, all activities are occurring.</p>
   */
  SuspendedActions?: (GameServerGroupAction | string)[];

  /**
   * <p>A timestamp that indicates when this data object was created. Format is a number expressed in Unix time as milliseconds (for example <code>"1469498468.057"</code>).</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp that indicates when this game server group was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace GameServerGroup {
  export const filterSensitiveLog = (obj: GameServerGroup): any => ({
    ...obj,
  });
}

export interface CreateGameServerGroupOutput {
  /**
   * <p>The newly created game server group object, including the new ARN value for the GameLift FleetIQ
   *             game server group and the object's status. The EC2 Auto Scaling group ARN is initially
   *             null, since the group has not yet been created. This value is added once the game server
   *             group status reaches <code>ACTIVE</code>. </p>
   */
  GameServerGroup?: GameServerGroup;
}

export namespace CreateGameServerGroupOutput {
  export const filterSensitiveLog = (obj: CreateGameServerGroupOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Set of key-value pairs that contain information about a game session. When included in
 *             a game session request, these properties communicate details to be used when setting up
 *             the new game session. For example, a game property might specify a game mode, level, or
 *             map. Game properties are passed to the game server process when initiating a new game
 *             session. For more information, see the <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-create"> Amazon GameLift Developer Guide</a>.</p>
 */
export interface GameProperty {
  /**
   * <p>The game property identifier.</p>
   */
  Key: string | undefined;

  /**
   * <p>The game property value.</p>
   */
  Value: string | undefined;
}

export namespace GameProperty {
  export const filterSensitiveLog = (obj: GameProperty): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface CreateGameSessionInput {
  /**
   * <p>A unique identifier for a fleet to create a game session in. You can use either the fleet ID or ARN value. Each
   *             request must reference either a fleet ID or alias ID, but not both.</p>
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for an alias associated with the fleet to create a game session in. You can use either the
   *             alias ID or ARN value. Each request must reference either a fleet ID or alias ID, but
   *             not both.</p>
   */
  AliasId?: string;

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   */
  MaximumPlayerSessionCount: number | undefined;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   */
  GameProperties?: GameProperty[];

  /**
   * <p>A unique identifier for a player or entity creating the game session. This ID is used to enforce a
   *             resource protection policy (if one exists) that limits the number of concurrent active
   *             game sessions one player can have.</p>
   */
  CreatorId?: string;

  /**
   * <p>
   *             <i>This parameter is no longer preferred. Please use
   *                     <code>IdempotencyToken</code> instead.</i> Custom string that uniquely
   *             identifies a request for a new game session. Maximum token length is 48 characters. If
   *             provided, this string is included in the new game session's ID. (A game session ARN has the following format:
   *     <code>arn:aws:gamelift:<region>::gamesession/<fleet ID>/<custom ID string or idempotency token></code>.) </p>
   */
  GameSessionId?: string;

  /**
   * <p>Custom string that uniquely identifies a request for a new game session. Maximum
   *             token length is 48 characters. If provided, this string is included in the new game
   *             session's ID. (A game session ARN has the following format:
   *     <code>arn:aws:gamelift:<region>::gamesession/<fleet ID>/<custom ID string or idempotency token></code>.) Idempotency tokens remain in use for 30 days after a game
   *             session has ended; game session objects are retained for this time period and then
   *             deleted.</p>
   */
  IdempotencyToken?: string;

  /**
   * <p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   */
  GameSessionData?: string;
}

export namespace CreateGameSessionInput {
  export const filterSensitiveLog = (obj: CreateGameSessionInput): any => ({
    ...obj,
  });
}

export enum PlayerSessionCreationPolicy {
  ACCEPT_ALL = "ACCEPT_ALL",
  DENY_ALL = "DENY_ALL",
}

export enum GameSessionStatus {
  ACTIVATING = "ACTIVATING",
  ACTIVE = "ACTIVE",
  ERROR = "ERROR",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING",
}

export enum GameSessionStatusReason {
  INTERRUPTED = "INTERRUPTED",
}

/**
 * <p>Properties describing a game session.</p>
 *         <p>A game session in ACTIVE status can host players. When a game session ends, its
 *             status is set to <code>TERMINATED</code>. </p>
 *         <p>Once the session ends, the game session object is retained for 30 days. This means
 *             you can reuse idempotency token values after this time. Game session logs are retained
 *             for 14 days.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGameSession</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameSessionDetails</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>SearchGameSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameSession</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetGameSessionLogUrl</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Game session placements</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>StartGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>StopGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 */
export interface GameSession {
  /**
   * <p>A unique identifier for the game session. A game session ARN has the following format:
   *     <code>arn:aws:gamelift:<region>::gamesession/<fleet ID>/<custom ID string or idempotency token></code>.</p>
   */
  GameSessionId?: string;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for a fleet that the game session is running on.</p>
   */
  FleetId?: string;

  /**
   * <p>
   *             The Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) associated with the GameLift fleet that this game session is running on.
   *         </p>
   */
  FleetArn?: string;

  /**
   * <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;

  /**
   * <p>Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  TerminationTime?: Date;

  /**
   * <p>Number of players currently in the game session.</p>
   */
  CurrentPlayerSessionCount?: number;

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   */
  MaximumPlayerSessionCount?: number;

  /**
   * <p>Current status of the game session. A game session must have an <code>ACTIVE</code>
   *             status to have player sessions.</p>
   */
  Status?: GameSessionStatus | string;

  /**
   * <p>Provides additional information about game session status. <code>INTERRUPTED</code>
   *             indicates that the game session was hosted on a spot instance that was reclaimed,
   *             causing the active game session to be terminated.</p>
   */
  StatusReason?: GameSessionStatusReason | string;

  /**
   * <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). You can search for active game sessions based on this custom data
   *             with <a>SearchGameSessions</a>.</p>
   */
  GameProperties?: GameProperty[];

  /**
   * <p>IP address of the instance that is running the game session. When connecting to a Amazon GameLift game server, a client needs to reference an IP address (or DNS name) and port number.</p>
   */
  IpAddress?: string;

  /**
   * <p>DNS identifier assigned to the instance that is running the game session. Values have
   *             the following format:</p>
   *          <ul>
   *             <li>
   *                <p>TLS-enabled fleets: <code><unique identifier>.<region identifier>.amazongamelift.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>Non-TLS-enabled fleets: <code>ec2-<unique identifier>.compute.amazonaws.com</code>. (See
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon EC2 Instance IP Addressing</a>.)</p>
   *             </li>
   *          </ul>
   *             <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   */
  DnsName?: string;

  /**
   * <p>Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   */
  Port?: number;

  /**
   * <p>Indicates whether or not the game session is accepting new players.</p>
   */
  PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy | string;

  /**
   * <p>A unique identifier for a player. This ID is used to enforce a resource protection policy (if one
   *             exists), that limits the number of game sessions a player can create.</p>
   */
  CreatorId?: string;

  /**
   * <p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   */
  GameSessionData?: string;

  /**
   * <p>Information about the matchmaking process that was used to create the game session.
   *             It is in JSON syntax, formatted as a string. In addition the matchmaking configuration
   *             used, it contains data on all players assigned to the match, including player attributes
   *             and team assignments. For more details on matchmaker data, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data">Match
   *                 Data</a>. Matchmaker data is useful when requesting match backfills, and is
   *             updated whenever new players are added during a successful backfill (see <a>StartMatchBackfill</a>). </p>
   */
  MatchmakerData?: string;
}

export namespace GameSession {
  export const filterSensitiveLog = (obj: GameSession): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface CreateGameSessionOutput {
  /**
   * <p>Object that describes the newly created game session record.</p>
   */
  GameSession?: GameSession;
}

export namespace CreateGameSessionOutput {
  export const filterSensitiveLog = (obj: CreateGameSessionOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The specified fleet has no available instances to fulfill a
 *                 <code>CreateGameSession</code> request. Clients can retry such requests immediately
 *             or after a waiting period.</p>
 */
export interface FleetCapacityExceededException extends __SmithyException, $MetadataBearer {
  name: "FleetCapacityExceededException";
  $fault: "client";
  Message?: string;
}

export namespace FleetCapacityExceededException {
  export const filterSensitiveLog = (obj: FleetCapacityExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>A game session with this custom ID string already exists in this fleet. Resolve
 *             this conflict before retrying this request.</p>
 */
export interface IdempotentParameterMismatchException extends __SmithyException, $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  Message?: string;
}

export namespace IdempotentParameterMismatchException {
  export const filterSensitiveLog = (obj: IdempotentParameterMismatchException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the fleet. Resolve the conflict before
 *             retrying.</p>
 */
export interface InvalidFleetStatusException extends __SmithyException, $MetadataBearer {
  name: "InvalidFleetStatusException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidFleetStatusException {
  export const filterSensitiveLog = (obj: InvalidFleetStatusException): any => ({
    ...obj,
  });
}

/**
 * <p>The service is unable to resolve the routing for a particular alias because it has
 *             a terminal <a>RoutingStrategy</a> associated with it. The message returned in
 *             this exception is the message defined in the routing strategy itself. Such requests
 *             should only be retried if the routing strategy for the specified alias is modified.
 *         </p>
 */
export interface TerminalRoutingStrategyException extends __SmithyException, $MetadataBearer {
  name: "TerminalRoutingStrategyException";
  $fault: "client";
  Message?: string;
}

export namespace TerminalRoutingStrategyException {
  export const filterSensitiveLog = (obj: TerminalRoutingStrategyException): any => ({
    ...obj,
  });
}

/**
 * <p>Fleet designated in a game session queue. Requests for new game sessions in the queue
 *             are fulfilled by starting a new game session on any destination that is configured for a
 *             queue. </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGameSessionQueue</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameSessionQueues</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameSessionQueue</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteGameSessionQueue</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface GameSessionQueueDestination {
  /**
   * <p>The Amazon Resource Name (ARN) that is assigned to fleet or fleet alias. ARNs, which
   *             include a fleet ID or alias ID and a Region name, provide a unique identifier across all
   *             Regions. </p>
   */
  DestinationArn?: string;
}

export namespace GameSessionQueueDestination {
  export const filterSensitiveLog = (obj: GameSessionQueueDestination): any => ({
    ...obj,
  });
}

/**
 * <p>Queue setting that determines the highest latency allowed for individual players when
 *             placing a game session. When a latency policy is in force, a game session cannot be
 *             placed with any fleet in a Region where a player reports latency higher than the cap.
 *             Latency policies are only enforced when the placement request contains player latency
 *             information.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGameSessionQueue</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameSessionQueues</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameSessionQueue</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteGameSessionQueue</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface PlayerLatencyPolicy {
  /**
   * <p>The maximum latency value that is allowed for any player, in milliseconds. All
   *             policies must have a value set for this property.</p>
   */
  MaximumIndividualPlayerLatencyMilliseconds?: number;

  /**
   * <p>The length of time, in seconds, that the policy is enforced while placing a new
   *             game session. A null value for this property means that the policy is enforced until the
   *             queue times out.</p>
   */
  PolicyDurationSeconds?: number;
}

export namespace PlayerLatencyPolicy {
  export const filterSensitiveLog = (obj: PlayerLatencyPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface CreateGameSessionQueueInput {
  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region.</p>
   */
  Name: string | undefined;

  /**
   * <p>The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.</p>
   */
  TimeoutInSeconds?: number;

  /**
   * <p>A collection of latency policies to apply when processing game sessions placement requests with
   *             player latency information. Multiple policies are evaluated in order of the maximum latency value,
   *             starting with the lowest latency values. With just one policy, the policy is enforced at the start of the game session
   *             placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period.
   *             For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the
   *             remainder of the placement. A player latency policy must set a value for
   *                 <code>MaximumIndividualPlayerLatencyMilliseconds</code>. If none is set, this API
   *             request fails.</p>
   */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[];

  /**
   * <p>A list of fleets that can be used to fulfill game session placement requests in the queue.
   *     Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order.</p>
   */
  Destinations?: GameSessionQueueDestination[];

  /**
   * <p>A list of labels to assign to the new game session queue resource. Tags are developer-defined
   *             key-value pairs. Tagging
   *             AWS resources are useful for resource management, access management and cost allocation.
   *             For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging AWS Resources</a> in the
   *             <i>AWS General Reference</i>. Once the resource is created, you can
   *             use <a>TagResource</a>, <a>UntagResource</a>, and
   *             <a>ListTagsForResource</a> to add, remove, and view tags. The
   *             maximum tag limit may be lower than stated. See the AWS General Reference for actual
   *             tagging limits.</p>
   */
  Tags?: Tag[];
}

export namespace CreateGameSessionQueueInput {
  export const filterSensitiveLog = (obj: CreateGameSessionQueueInput): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration of a queue that is used to process game session placement requests.
 *             The queue configuration identifies several game features:</p>
 *         <ul>
 *             <li>
 *                 <p>The destinations where a new game session can potentially be hosted. Amazon GameLift
 *                     tries these destinations in an order based on either the queue's default order
 *                     or player latency information, if provided in a placement request. With latency
 *                     information, Amazon GameLift can place game sessions where the majority of players are
 *                     reporting the lowest possible latency. </p>
 *             </li>
 *             <li>
 *                 <p>The length of time that placement requests can wait in the queue before
 *                     timing out. </p>
 *             </li>
 *             <li>
 *                 <p>A set of optional latency policies that protect individual players from
 *                     high latencies, preventing game sessions from being placed where any individual
 *                     player is reporting latency higher than a policy's maximum.</p>
 *             </li>
 *          </ul>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGameSessionQueue</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameSessionQueues</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameSessionQueue</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteGameSessionQueue</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface GameSessionQueue {
  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region.</p>
   */
  Name?: string;

  /**
   * <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) that is assigned to a GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions.   In a GameLift game session queue ARN, the resource ID matches the
   *                 <i>Name</i> value.</p>
   */
  GameSessionQueueArn?: string;

  /**
   * <p>The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.</p>
   */
  TimeoutInSeconds?: number;

  /**
   * <p>A collection of latency policies to apply when processing game sessions placement requests with
   *             player latency information. Multiple policies are evaluated in order of the maximum latency value,
   *             starting with the lowest latency values. With just one policy, the policy is enforced at the start of the game session
   *             placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period.
   *             For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the
   *             remainder of the placement. </p>
   */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[];

  /**
   * <p>A list of fleets that can be used to fulfill game session placement requests in the queue.
   *     Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order.</p>
   */
  Destinations?: GameSessionQueueDestination[];
}

export namespace GameSessionQueue {
  export const filterSensitiveLog = (obj: GameSessionQueue): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface CreateGameSessionQueueOutput {
  /**
   * <p>An object that describes the newly created game session queue.</p>
   */
  GameSessionQueue?: GameSessionQueue;
}

export namespace CreateGameSessionQueueOutput {
  export const filterSensitiveLog = (obj: CreateGameSessionQueueOutput): any => ({
    ...obj,
  });
}

export enum FlexMatchMode {
  STANDALONE = "STANDALONE",
  WITH_QUEUE = "WITH_QUEUE",
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface CreateMatchmakingConfigurationInput {
  /**
   * <p>A unique identifier for a matchmaking configuration. This name is used to identify the configuration associated with a
   *             matchmaking request or ticket.</p>
   */
  Name: string | undefined;

  /**
   * <p>A human-readable description of the matchmaking configuration. </p>
   */
  Description?: string;

  /**
   * <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) that is assigned to a GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Queues can be located in any Region. Queues are used to start new
   *             GameLift-hosted game sessions for matches that are created with this matchmaking
   *             configuration. If <code>FlexMatchMode</code> is set to <code>STANDALONE</code>, do not
   *             set this parameter.  </p>
   */
  GameSessionQueueArns?: string[];

  /**
   * <p>The maximum duration, in seconds, that a matchmaking ticket can remain in process
   *             before timing out. Requests that fail due to timing out can be resubmitted as
   *             needed.</p>
   */
  RequestTimeoutSeconds: number | undefined;

  /**
   * <p>The length of time (in seconds) to wait for players to accept a proposed match, if
   *             acceptance is required. If any player rejects the match or fails to accept before the
   *             timeout, the tickets are returned to the ticket pool and continue to be evaluated for an
   *             acceptable match.</p>
   */
  AcceptanceTimeoutSeconds?: number;

  /**
   * <p>A flag that determines whether a match that was created with this configuration must
   *             be accepted by the matched players. To require acceptance, set to <code>TRUE</code>.
   *             With this option enabled, matchmaking tickets use the status
   *                 <code>REQUIRES_ACCEPTANCE</code> to indicate when a completed potential match is
   *             waiting for player acceptance. </p>
   */
  AcceptanceRequired: boolean | undefined;

  /**
   * <p>A unique identifier for a matchmaking rule set to use with this configuration. You can use either the rule set name or ARN
   *             value. A matchmaking configuration can only use rule sets that are defined in the same
   *             Region.</p>
   */
  RuleSetName: string | undefined;

  /**
   * <p>An SNS topic ARN that is set up to receive matchmaking notifications.</p>
   */
  NotificationTarget?: string;

  /**
   * <p>The number of player slots in a match to keep open for future players. For example,
   *             assume that the configuration's rule set specifies a match for a single 12-person team. If
   *             the additional player count is set to 2, only 10 players are initially selected for the match. This parameter is not used if <code>FlexMatchMode</code> is set to
   *                 <code>STANDALONE</code>.</p>
   */
  AdditionalPlayerCount?: number;

  /**
   * <p>Information to be added to all events related to this matchmaking configuration.
   *         </p>
   */
  CustomEventData?: string;

  /**
   * <p>A set of custom properties for a game session, formatted as key-value pairs. These properties are passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <a>GameSession</a>
   *             object that is created for a successful match. This parameter is not used if
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   */
  GameProperties?: GameProperty[];

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <a>GameSession</a> object
   *             that is created for a successful match. This parameter is not used if
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   */
  GameSessionData?: string;

  /**
   * <p>The method used to backfill game sessions that are created with this matchmaking
   *             configuration. Specify <code>MANUAL</code> when your game manages backfill requests
   *             manually or does not use the match backfill feature. Specify <code>AUTOMATIC</code> to
   *             have GameLift create a <a>StartMatchBackfill</a> request whenever a game
   *             session has one or more open slots. Learn more about manual and automatic backfill in
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html"> Backfill Existing Games with FlexMatch</a>. Automatic backfill is not
   *             available when <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   */
  BackfillMode?: BackfillMode | string;

  /**
   * <p>Indicates whether this matchmaking configuration is being used with GameLift hosting or
   *             as a standalone matchmaking solution. </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>STANDALONE</b> - FlexMatch forms matches and returns
   *             match information, including players and team assignments, in a
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html#match-events-matchmakingsucceeded">
   *                     MatchmakingSucceeded</a> event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>WITH_QUEUE</b> - FlexMatch forms matches and uses the specified GameLift queue to
   *             start a game session for the match. </p>
   *             </li>
   *          </ul>
   */
  FlexMatchMode?: FlexMatchMode | string;

  /**
   * <p>A list of labels to assign to the new matchmaking configuration resource. Tags are developer-defined
   *             key-value pairs. Tagging
   *             AWS resources are useful for resource management, access management and cost allocation.
   *             For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging AWS Resources</a> in the
   *             <i>AWS General Reference</i>. Once the resource is created, you can
   *             use <a>TagResource</a>, <a>UntagResource</a>, and
   *             <a>ListTagsForResource</a> to add, remove, and view tags. The
   *             maximum tag limit may be lower than stated. See the AWS General Reference for actual
   *             tagging limits.</p>
   */
  Tags?: Tag[];
}

export namespace CreateMatchmakingConfigurationInput {
  export const filterSensitiveLog = (obj: CreateMatchmakingConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Guidelines for use with FlexMatch to match players into games. All matchmaking
 *             requests must specify a matchmaking configuration.</p>
 */
export interface MatchmakingConfiguration {
  /**
   * <p>A unique identifier for a matchmaking configuration. This name is used to identify the configuration associated with a
   *             matchmaking request or ticket.</p>
   */
  Name?: string;

  /**
   * <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) that is assigned to a GameLift matchmaking configuration resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift configuration ARN, the resource ID matches the
   *                 <i>Name</i> value. </p>
   */
  ConfigurationArn?: string;

  /**
   * <p>A descriptive label that is associated with matchmaking configuration.</p>
   */
  Description?: string;

  /**
   * <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) that is assigned to a GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Queues can be located in any Region. Queues are used to start new
   *             GameLift-hosted game sessions for matches that are created with this matchmaking
   *             configuration. Thais property is not set when <code>FlexMatchMode</code> is set to
   *                 <code>STANDALONE</code>.</p>
   */
  GameSessionQueueArns?: string[];

  /**
   * <p>The maximum duration, in seconds, that a matchmaking ticket can remain in process
   *             before timing out. Requests that fail due to timing out can be resubmitted as
   *             needed.</p>
   */
  RequestTimeoutSeconds?: number;

  /**
   * <p>The length of time (in seconds) to wait for players to accept a proposed match, if
   *             acceptance is required. If any player rejects the match or fails to accept before the
   *             timeout, the tickets are returned to the ticket pool and continue to be evaluated for an
   *             acceptable match.</p>
   */
  AcceptanceTimeoutSeconds?: number;

  /**
   * <p>A flag that indicates whether a match that was created with this configuration must be
   *             accepted by the matched players. To require acceptance, set to TRUE. When this option is
   *             enabled, matchmaking tickets use the status <code>REQUIRES_ACCEPTANCE</code> to indicate
   *             when a completed potential match is waiting for player acceptance.</p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>A unique identifier for a matchmaking rule set to use with this configuration. A matchmaking configuration can only use
   *             rule sets that are defined in the same Region.</p>
   */
  RuleSetName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) associated with the GameLift matchmaking rule set resource that this configuration uses.</p>
   */
  RuleSetArn?: string;

  /**
   * <p>An SNS topic ARN that is set up to receive matchmaking notifications.</p>
   */
  NotificationTarget?: string;

  /**
   * <p>The number of player slots in a match to keep open for future players. For example,
   *             assume that the configuration's rule set specifies a match for a single 12-person team. If
   *             the additional player count is set to 2, only 10 players are initially selected for the match. This parameter is not used when <code>FlexMatchMode</code> is set to
   *                 <code>STANDALONE</code>.</p>
   */
  AdditionalPlayerCount?: number;

  /**
   * <p>Information to attach to all events related to the matchmaking configuration. </p>
   */
  CustomEventData?: string;

  /**
   * <p>The time stamp indicating when this data object was created. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;

  /**
   * <p>A set of custom properties for a game session, formatted as key-value pairs. These properties are passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <a>GameSession</a>
   *             object that is created for a successful match. This parameter is not used when
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   */
  GameProperties?: GameProperty[];

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <a>GameSession</a> object
   *             that is created for a successful match. This parameter is not used when
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   */
  GameSessionData?: string;

  /**
   * <p>The method used to backfill game sessions created with this matchmaking configuration.
   *             MANUAL indicates that the game makes backfill requests or does not use the match
   *             backfill feature. AUTOMATIC indicates that GameLift creates <a>StartMatchBackfill</a> requests whenever a game session has one or more open
   *             slots. Learn more about manual and automatic backfill in <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html">Backfill Existing Games
   *                 with FlexMatch</a>. Automatic backfill is not available when
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   */
  BackfillMode?: BackfillMode | string;

  /**
   * <p>Indicates whether this matchmaking configuration is being used with GameLift hosting or
   *             as a standalone matchmaking solution. </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>STANDALONE</b> - FlexMatch forms matches and returns
   *                 match information, including players and team assignments, in a
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html#match-events-matchmakingsucceeded">
   *                     MatchmakingSucceeded</a> event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>WITH_QUEUE</b> - FlexMatch forms matches and uses the specified GameLift queue to
   *                 start a game session for the match. </p>
   *             </li>
   *          </ul>
   */
  FlexMatchMode?: FlexMatchMode | string;
}

export namespace MatchmakingConfiguration {
  export const filterSensitiveLog = (obj: MatchmakingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface CreateMatchmakingConfigurationOutput {
  /**
   * <p>Object that describes the newly created matchmaking configuration.</p>
   */
  Configuration?: MatchmakingConfiguration;
}

export namespace CreateMatchmakingConfigurationOutput {
  export const filterSensitiveLog = (obj: CreateMatchmakingConfigurationOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface CreateMatchmakingRuleSetInput {
  /**
   * <p>A unique identifier for a matchmaking rule set. A matchmaking configuration identifies the rule set it uses by this name
   *             value. Note that the rule set name is different from the optional <code>name</code>
   *             field in the rule set body.</p>
   */
  Name: string | undefined;

  /**
   * <p>A collection of matchmaking rules, formatted as a JSON string. Comments are not
   *             allowed in JSON, but most elements support a description field.</p>
   */
  RuleSetBody: string | undefined;

  /**
   * <p>A list of labels to assign to the new matchmaking rule set resource. Tags are developer-defined
   *             key-value pairs. Tagging
   *             AWS resources are useful for resource management, access management and cost allocation.
   *             For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging AWS Resources</a> in the
   *             <i>AWS General Reference</i>. Once the resource is created, you can
   *             use <a>TagResource</a>, <a>UntagResource</a>, and
   *             <a>ListTagsForResource</a> to add, remove, and view tags. The
   *             maximum tag limit may be lower than stated. See the AWS General Reference for actual
   *             tagging limits.</p>
   */
  Tags?: Tag[];
}

export namespace CreateMatchmakingRuleSetInput {
  export const filterSensitiveLog = (obj: CreateMatchmakingRuleSetInput): any => ({
    ...obj,
  });
}

/**
 * <p>Set of rule statements, used with FlexMatch, that determine how to build your player
 *             matches. Each rule set describes a type of group to be created and defines the
 *             parameters for acceptable player matches. Rule sets are used in <a>MatchmakingConfiguration</a> objects.</p>
 *         <p>A rule set may define the following elements for a match. For detailed information
 *             and examples showing how to construct a rule set, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a FlexMatch Rule
 *                 Set</a>. </p>
 *         <ul>
 *             <li>
 *                 <p>Teams -- Required. A rule set must define one or multiple teams for the
 *                     match and set minimum and maximum team sizes. For example, a rule set might
 *                     describe a 4x4 match that requires all eight slots to be filled. </p>
 *             </li>
 *             <li>
 *                 <p>Player attributes -- Optional. These attributes specify a set of player
 *                     characteristics to evaluate when looking for a match. Matchmaking requests that
 *                     use a rule set with player attributes must provide the corresponding attribute
 *                     values. For example, an attribute might specify a player's skill or
 *                     level.</p>
 *             </li>
 *             <li>
 *                 <p>Rules -- Optional. Rules define how to evaluate potential players for a
 *                     match based on player attributes. A rule might specify minimum requirements for
 *                     individual players, teams, or entire matches. For example, a rule might require
 *                     each player to meet a certain skill level, each team to have at least one player
 *                     in a certain role, or the match to have a minimum average skill level. or may
 *                     describe an entire group--such as all teams must be evenly matched or have at
 *                     least one player in a certain role. </p>
 *             </li>
 *             <li>
 *                 <p>Expansions -- Optional. Expansions allow you to relax the rules after a
 *                     period of time when no acceptable matches are found. This feature lets you
 *                     balance getting players into games in a reasonable amount of time instead of
 *                     making them wait indefinitely for the best possible match. For example, you
 *                     might use an expansion to increase the maximum skill variance between players
 *                     after 30 seconds.</p>
 *             </li>
 *          </ul>
 */
export interface MatchmakingRuleSet {
  /**
   * <p>A unique identifier for a matchmaking rule set</p>
   */
  RuleSetName?: string;

  /**
   * <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) that is assigned to a GameLift matchmaking rule set resource and uniquely identifies it. ARNs are unique across all Regions.  In a GameLift rule set ARN, the resource ID matches the
   *                 <i>RuleSetName</i> value.</p>
   */
  RuleSetArn?: string;

  /**
   * <p>A collection of matchmaking rules, formatted as a JSON string. Comments are not
   *             allowed in JSON, but most elements support a description field.</p>
   */
  RuleSetBody: string | undefined;

  /**
   * <p>The time stamp indicating when this data object was created. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;
}

export namespace MatchmakingRuleSet {
  export const filterSensitiveLog = (obj: MatchmakingRuleSet): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface CreateMatchmakingRuleSetOutput {
  /**
   * <p>The newly created matchmaking rule set.</p>
   */
  RuleSet: MatchmakingRuleSet | undefined;
}

export namespace CreateMatchmakingRuleSetOutput {
  export const filterSensitiveLog = (obj: CreateMatchmakingRuleSetOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface CreatePlayerSessionInput {
  /**
   * <p>A unique identifier for the game session to add a player to.</p>
   */
  GameSessionId: string | undefined;

  /**
   * <p>A unique identifier for a player. Player IDs are developer-defined.</p>
   */
  PlayerId: string | undefined;

  /**
   * <p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.</p>
   */
  PlayerData?: string;
}

export namespace CreatePlayerSessionInput {
  export const filterSensitiveLog = (obj: CreatePlayerSessionInput): any => ({
    ...obj,
  });
}

export enum PlayerSessionStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  RESERVED = "RESERVED",
  TIMEDOUT = "TIMEDOUT",
}

/**
 * <p>Properties describing a player session. Player session objects are created either
 *         by creating a player session for a specific game session, or as part of a game session
 *         placement. A player session represents either a player reservation for a game session
 *         (status <code>RESERVED</code>) or actual player activity in a game session (status
 *         <code>ACTIVE</code>). A player session object (including player data) is
 *         automatically passed to a game session when the player connects to the game session and
 *         is validated.</p>
 *          <p>When a player disconnects, the player session status changes to
 *         <code>COMPLETED</code>. Once the session ends, the player session object is retained
 *         for 30 days and then removed.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreatePlayerSession</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreatePlayerSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribePlayerSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Game session placements</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a>StartGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>StopGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 */
export interface PlayerSession {
  /**
   * <p>A unique identifier for a player session.</p>
   */
  PlayerSessionId?: string;

  /**
   * <p>A unique identifier for a player that is associated with this player session.</p>
   */
  PlayerId?: string;

  /**
   * <p>A unique identifier for the game session that the player session is connected to.</p>
   */
  GameSessionId?: string;

  /**
   * <p>A unique identifier for a fleet that the player's game session is running on.</p>
   */
  FleetId?: string;

  /**
   * <p>
   *             The Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) associated with the GameLift fleet that the player's game session is running on.
   *         </p>
   */
  FleetArn?: string;

  /**
   * <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;

  /**
   * <p>Time stamp indicating when this data object was terminated. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  TerminationTime?: Date;

  /**
   * <p>Current status of the player session.</p>
   *          <p>Possible player session statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>RESERVED</b> -- The player session request has been
   *                 received, but the player has not yet connected to the server process and/or been
   *                 validated. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- The player has been validated by the
   *                 server process and is currently connected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>COMPLETED</b> -- The player connection has been
   *                 dropped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TIMEDOUT</b> -- A player session request was
   *                 received, but the player did not connect and/or was not validated within the
   *                 timeout limit (60 seconds).</p>
   *             </li>
   *          </ul>
   */
  Status?: PlayerSessionStatus | string;

  /**
   * <p>IP address of the instance that is running the game session. When connecting to a Amazon GameLift game server, a client needs to reference an IP address (or DNS name) and port number.</p>
   */
  IpAddress?: string;

  /**
   * <p>DNS identifier assigned to the instance that is running the game session. Values have
   *             the following format:</p>
   *          <ul>
   *             <li>
   *                <p>TLS-enabled fleets: <code><unique identifier>.<region identifier>.amazongamelift.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>Non-TLS-enabled fleets: <code>ec2-<unique identifier>.compute.amazonaws.com</code>. (See
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon EC2 Instance IP Addressing</a>.)</p>
   *             </li>
   *          </ul>
   *             <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   */
  DnsName?: string;

  /**
   * <p>Port number for the game session. To connect to a Amazon GameLift server process, an app
   *         needs both the IP address and port number.</p>
   */
  Port?: number;

  /**
   * <p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game. </p>
   */
  PlayerData?: string;
}

export namespace PlayerSession {
  export const filterSensitiveLog = (obj: PlayerSession): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface CreatePlayerSessionOutput {
  /**
   * <p>Object that describes the newly created player session record.</p>
   */
  PlayerSession?: PlayerSession;
}

export namespace CreatePlayerSessionOutput {
  export const filterSensitiveLog = (obj: CreatePlayerSessionOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The game instance is currently full and cannot allow the requested player(s) to
 *             join. Clients can retry such requests immediately or after a waiting period.</p>
 */
export interface GameSessionFullException extends __SmithyException, $MetadataBearer {
  name: "GameSessionFullException";
  $fault: "client";
  Message?: string;
}

export namespace GameSessionFullException {
  export const filterSensitiveLog = (obj: GameSessionFullException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested operation would cause a conflict with the current state of a resource
 *             associated with the request and/or the game instance. Resolve the conflict before
 *             retrying.</p>
 */
export interface InvalidGameSessionStatusException extends __SmithyException, $MetadataBearer {
  name: "InvalidGameSessionStatusException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidGameSessionStatusException {
  export const filterSensitiveLog = (obj: InvalidGameSessionStatusException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface CreatePlayerSessionsInput {
  /**
   * <p>A unique identifier for the game session to add players to.</p>
   */
  GameSessionId: string | undefined;

  /**
   * <p>List of unique identifiers for the players to be added.</p>
   */
  PlayerIds: string[] | undefined;

  /**
   * <p>Map of string pairs, each specifying a player ID and a set of developer-defined
   *         information related to the player. Amazon GameLift does not use this data, so it can be formatted
   *         as needed for use in the game. Player data strings for player IDs not included in the
   *         <code>PlayerIds</code> parameter are ignored. </p>
   */
  PlayerDataMap?: { [key: string]: string };
}

export namespace CreatePlayerSessionsInput {
  export const filterSensitiveLog = (obj: CreatePlayerSessionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface CreatePlayerSessionsOutput {
  /**
   * <p>A collection of player session objects created for the added players.</p>
   */
  PlayerSessions?: PlayerSession[];
}

export namespace CreatePlayerSessionsOutput {
  export const filterSensitiveLog = (obj: CreatePlayerSessionsOutput): any => ({
    ...obj,
  });
}

export interface CreateScriptInput {
  /**
   * <p>A descriptive label that is associated with a script. Script names do not need to be unique. You can use <a>UpdateScript</a> to change this value later.
   *         </p>
   */
  Name?: string;

  /**
   * <p>The version that is associated with a build or script. Version strings do not need to be unique. You can use <a>UpdateScript</a> to change this value later.
   *         </p>
   */
  Version?: string;

  /**
   * <p>The Amazon S3 location of your Realtime scripts. The storage location must specify the S3
   *             bucket name, the zip file name (the "key"), and an IAM role ARN that allows Amazon GameLift to
   *             access the S3 storage location. The S3 bucket must be in the same Region where you are
   *             creating a new script. By default, Amazon GameLift uploads the latest version of the zip file; if
   *             you have S3 object versioning turned on, you can use the <code>ObjectVersion</code>
   *             parameter to specify an earlier version. To call this operation with a storage location,
   *             you must have IAM PassRole permission. For more details on IAM roles and PassRole
   *             permissions, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html"> Set up a role for
   *                 GameLift access</a>. </p>
   */
  StorageLocation?: S3Location;

  /**
   * <p>A data object containing your Realtime scripts and dependencies as a zip file. The zip
   *             file can have one or multiple files. Maximum size of a zip file is 5 MB.</p>
   *         <p>When using the AWS CLI tool to create a script, this parameter is set to the zip file name. It must be prepended with the
   *             string "fileb://" to indicate that the file data is a binary object. For example: <code>--zip-file fileb://myRealtimeScript.zip</code>.</p>
   */
  ZipFile?: Uint8Array;

  /**
   * <p>A list of labels to assign to the new script resource. Tags are developer-defined
   *             key-value pairs. Tagging
   *             AWS resources are useful for resource management, access management and cost allocation.
   *             For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging AWS Resources</a> in the
   *             <i>AWS General Reference</i>. Once the resource is created, you can
   *             use <a>TagResource</a>, <a>UntagResource</a>, and
   *             <a>ListTagsForResource</a> to add, remove, and view tags. The
   *             maximum tag limit may be lower than stated. See the AWS General Reference for actual
   *             tagging limits.</p>
   */
  Tags?: Tag[];
}

export namespace CreateScriptInput {
  export const filterSensitiveLog = (obj: CreateScriptInput): any => ({
    ...obj,
  });
}

/**
 * <p>Properties describing a Realtime script.</p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateScript</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListScripts</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeScript</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateScript</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteScript</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Script {
  /**
   * <p>A unique identifier for a Realtime script</p>
   */
  ScriptId?: string;

  /**
   * <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) that is assigned to a GameLift script resource and uniquely identifies it. ARNs are unique across all Regions.  In a GameLift script ARN, the resource ID matches the
   *                 <i>ScriptId</i> value.</p>
   */
  ScriptArn?: string;

  /**
   * <p>A descriptive label that is associated with a script. Script names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>The version that is associated with a build or script. Version strings do not need to be unique.</p>
   */
  Version?: string;

  /**
   * <p>The file size of the uploaded Realtime script, expressed in bytes. When files are
   *             uploaded from an S3 location, this value remains at "0".</p>
   */
  SizeOnDisk?: number;

  /**
   * <p>A time stamp indicating when this data object was created. The format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;

  /**
   * <p>The location in S3 where build or script files are stored for access by Amazon GameLift. This
   *             location is specified in <a>CreateBuild</a>, <a>CreateScript</a>,
   *             and <a>UpdateScript</a> requests. </p>
   */
  StorageLocation?: S3Location;
}

export namespace Script {
  export const filterSensitiveLog = (obj: Script): any => ({
    ...obj,
  });
}

export interface CreateScriptOutput {
  /**
   * <p>The newly created script record with a unique script ID and ARN. The new script's
   *             storage location reflects an Amazon S3 location: (1) If the script was uploaded from an S3
   *             bucket under your account, the storage location reflects the information that was
   *             provided in the <i>CreateScript</i> request; (2) If the script file was
   *             uploaded from a local zip file, the storage location reflects an S3 location controls by
   *             the Amazon GameLift service.</p>
   */
  Script?: Script;
}

export namespace CreateScriptOutput {
  export const filterSensitiveLog = (obj: CreateScriptOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface CreateVpcPeeringAuthorizationInput {
  /**
   * <p>A unique identifier for the AWS account that you use to manage your Amazon GameLift fleet.
   *             You can find your Account ID in the AWS Management Console under account settings.</p>
   */
  GameLiftAwsAccountId: string | undefined;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region where your fleet is deployed. Look up a VPC ID using the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the AWS Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   */
  PeerVpcId: string | undefined;
}

export namespace CreateVpcPeeringAuthorizationInput {
  export const filterSensitiveLog = (obj: CreateVpcPeeringAuthorizationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an authorization for a VPC peering connection between the VPC for an
 *             Amazon GameLift fleet and another VPC on an account you have access to. This authorization
 *             must exist and be valid for the peering connection to be established. Authorizations are
 *             valid for 24 hours after they are issued.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateVpcPeeringAuthorization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeVpcPeeringAuthorizations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteVpcPeeringAuthorization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateVpcPeeringConnection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeVpcPeeringConnections</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteVpcPeeringConnection</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface VpcPeeringAuthorization {
  /**
   * <p>A unique identifier for the AWS account that you use to manage your Amazon GameLift fleet.
   *             You can find your Account ID in the AWS Management Console under account settings.</p>
   */
  GameLiftAwsAccountId?: string;

  /**
   * <p></p>
   */
  PeerVpcAwsAccountId?: string;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region where your fleet is deployed. Look up a VPC ID using the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the AWS Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   */
  PeerVpcId?: string;

  /**
   * <p>Time stamp indicating when this authorization was issued. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;

  /**
   * <p>Time stamp indicating when this authorization expires (24 hours after issuance).
   *             Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  ExpirationTime?: Date;
}

export namespace VpcPeeringAuthorization {
  export const filterSensitiveLog = (obj: VpcPeeringAuthorization): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface CreateVpcPeeringAuthorizationOutput {
  /**
   * <p>Details on the requested VPC peering authorization, including expiration.</p>
   */
  VpcPeeringAuthorization?: VpcPeeringAuthorization;
}

export namespace CreateVpcPeeringAuthorizationOutput {
  export const filterSensitiveLog = (obj: CreateVpcPeeringAuthorizationOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface CreateVpcPeeringConnectionInput {
  /**
   * <p>A unique identifier for a fleet. You can use either the fleet ID or ARN value. This tells Amazon GameLift which GameLift
   *             VPC to peer with. </p>
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for the AWS account with the VPC that you want to peer your
   *             Amazon GameLift fleet with. You can find your Account ID in the AWS Management Console under account
   *             settings.</p>
   */
  PeerVpcAwsAccountId: string | undefined;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region where your fleet is deployed. Look up a VPC ID using the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the AWS Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   */
  PeerVpcId: string | undefined;
}

export namespace CreateVpcPeeringConnectionInput {
  export const filterSensitiveLog = (obj: CreateVpcPeeringConnectionInput): any => ({
    ...obj,
  });
}

export interface CreateVpcPeeringConnectionOutput {}

export namespace CreateVpcPeeringConnectionOutput {
  export const filterSensitiveLog = (obj: CreateVpcPeeringConnectionOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DeleteAliasInput {
  /**
   * <p>A unique identifier of the alias that you want to delete. You can use either the alias
   *             ID or ARN value.</p>
   */
  AliasId: string | undefined;
}

export namespace DeleteAliasInput {
  export const filterSensitiveLog = (obj: DeleteAliasInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DeleteBuildInput {
  /**
   * <p>A unique identifier for a build to delete. You can use either the build ID or ARN value. </p>
   */
  BuildId: string | undefined;
}

export namespace DeleteBuildInput {
  export const filterSensitiveLog = (obj: DeleteBuildInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DeleteFleetInput {
  /**
   * <p>A unique identifier for a fleet to be deleted. You can use either the fleet ID or ARN value.</p>
   */
  FleetId: string | undefined;
}

export namespace DeleteFleetInput {
  export const filterSensitiveLog = (obj: DeleteFleetInput): any => ({
    ...obj,
  });
}

export enum GameServerGroupDeleteOption {
  FORCE_DELETE = "FORCE_DELETE",
  RETAIN = "RETAIN",
  SAFE_DELETE = "SAFE_DELETE",
}

export interface DeleteGameServerGroupInput {
  /**
   * <p>A unique identifier for the game server group. Use either the <a>GameServerGroup</a> name or ARN value.</p>
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The type of delete to perform. Options include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SAFE_DELETE</code> – (default) Terminates the game server group and
   *                     EC2 Auto Scaling group only when it has no game servers that are in
   *                         <code>UTILIZED</code> status.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FORCE_DELETE</code> – Terminates the game server group, including all
   *                     active game servers regardless of their utilization status, and the EC2 Auto
   *                     Scaling group. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>RETAIN</code> – Does a safe delete of the game server group but retains
   *                     the EC2 Auto Scaling group as is.</p>
   *             </li>
   *          </ul>
   */
  DeleteOption?: GameServerGroupDeleteOption | string;
}

export namespace DeleteGameServerGroupInput {
  export const filterSensitiveLog = (obj: DeleteGameServerGroupInput): any => ({
    ...obj,
  });
}

export interface DeleteGameServerGroupOutput {
  /**
   * <p>An object that describes the deleted game server group resource, with status updated
   *             to <code>DELETE_SCHEDULED</code>. </p>
   */
  GameServerGroup?: GameServerGroup;
}

export namespace DeleteGameServerGroupOutput {
  export const filterSensitiveLog = (obj: DeleteGameServerGroupOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation. </p>
 */
export interface DeleteGameSessionQueueInput {
  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region. You can use either the queue ID or ARN value. </p>
   */
  Name: string | undefined;
}

export namespace DeleteGameSessionQueueInput {
  export const filterSensitiveLog = (obj: DeleteGameSessionQueueInput): any => ({
    ...obj,
  });
}

export interface DeleteGameSessionQueueOutput {}

export namespace DeleteGameSessionQueueOutput {
  export const filterSensitiveLog = (obj: DeleteGameSessionQueueOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DeleteMatchmakingConfigurationInput {
  /**
   * <p>A unique identifier for a matchmaking configuration.  You can use either the configuration name or ARN value.</p>
   */
  Name: string | undefined;
}

export namespace DeleteMatchmakingConfigurationInput {
  export const filterSensitiveLog = (obj: DeleteMatchmakingConfigurationInput): any => ({
    ...obj,
  });
}

export interface DeleteMatchmakingConfigurationOutput {}

export namespace DeleteMatchmakingConfigurationOutput {
  export const filterSensitiveLog = (obj: DeleteMatchmakingConfigurationOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DeleteMatchmakingRuleSetInput {
  /**
   * <p>A unique identifier for a matchmaking rule set to be deleted. (Note: The rule set name is different from the optional "name"
   *             field in the rule set body.)  You can use either the rule set name or ARN value.</p>
   */
  Name: string | undefined;
}

export namespace DeleteMatchmakingRuleSetInput {
  export const filterSensitiveLog = (obj: DeleteMatchmakingRuleSetInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DeleteMatchmakingRuleSetOutput {}

export namespace DeleteMatchmakingRuleSetOutput {
  export const filterSensitiveLog = (obj: DeleteMatchmakingRuleSetOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DeleteScalingPolicyInput {
  /**
   * <p>A descriptive label that is associated with a scaling policy. Policy names do not need to be unique.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for a fleet to be deleted. You can use either the fleet ID or ARN value.</p>
   */
  FleetId: string | undefined;
}

export namespace DeleteScalingPolicyInput {
  export const filterSensitiveLog = (obj: DeleteScalingPolicyInput): any => ({
    ...obj,
  });
}

export interface DeleteScriptInput {
  /**
   * <p>A unique identifier for a Realtime script to delete. You can use either the script ID or ARN value.</p>
   */
  ScriptId: string | undefined;
}

export namespace DeleteScriptInput {
  export const filterSensitiveLog = (obj: DeleteScriptInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DeleteVpcPeeringAuthorizationInput {
  /**
   * <p>A unique identifier for the AWS account that you use to manage your Amazon GameLift fleet.
   *             You can find your Account ID in the AWS Management Console under account settings.</p>
   */
  GameLiftAwsAccountId: string | undefined;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region where your fleet is deployed. Look up a VPC ID using the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the AWS Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   */
  PeerVpcId: string | undefined;
}

export namespace DeleteVpcPeeringAuthorizationInput {
  export const filterSensitiveLog = (obj: DeleteVpcPeeringAuthorizationInput): any => ({
    ...obj,
  });
}

export interface DeleteVpcPeeringAuthorizationOutput {}

export namespace DeleteVpcPeeringAuthorizationOutput {
  export const filterSensitiveLog = (obj: DeleteVpcPeeringAuthorizationOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DeleteVpcPeeringConnectionInput {
  /**
   * <p>A unique identifier for a fleet. This fleet specified must match the fleet referenced in the VPC peering
   *             connection record. You can use either the fleet ID or ARN value.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for a VPC peering connection. This value is included in the <a>VpcPeeringConnection</a> object, which can be retrieved by calling <a>DescribeVpcPeeringConnections</a>.</p>
   */
  VpcPeeringConnectionId: string | undefined;
}

export namespace DeleteVpcPeeringConnectionInput {
  export const filterSensitiveLog = (obj: DeleteVpcPeeringConnectionInput): any => ({
    ...obj,
  });
}

export interface DeleteVpcPeeringConnectionOutput {}

export namespace DeleteVpcPeeringConnectionOutput {
  export const filterSensitiveLog = (obj: DeleteVpcPeeringConnectionOutput): any => ({
    ...obj,
  });
}

export interface DeregisterGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running.
   *             Use either the <a>GameServerGroup</a> name or ARN value.</p>
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server to deregister.</p>
   */
  GameServerId: string | undefined;
}

export namespace DeregisterGameServerInput {
  export const filterSensitiveLog = (obj: DeregisterGameServerInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeAliasInput {
  /**
   * <p>The unique identifier for the fleet alias that you want to retrieve. You can use
   *             either the alias ID or ARN value. </p>
   */
  AliasId: string | undefined;
}

export namespace DescribeAliasInput {
  export const filterSensitiveLog = (obj: DescribeAliasInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeAliasOutput {
  /**
   * <p>The requested alias resource.</p>
   */
  Alias?: Alias;
}

export namespace DescribeAliasOutput {
  export const filterSensitiveLog = (obj: DescribeAliasOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeBuildInput {
  /**
   * <p>A unique identifier for a build to retrieve properties for. You can use either the build ID or ARN value. </p>
   */
  BuildId: string | undefined;
}

export namespace DescribeBuildInput {
  export const filterSensitiveLog = (obj: DescribeBuildInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeBuildOutput {
  /**
   * <p>Set of properties describing the requested build.</p>
   */
  Build?: Build;
}

export namespace DescribeBuildOutput {
  export const filterSensitiveLog = (obj: DescribeBuildOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeEC2InstanceLimitsInput {
  /**
   * <p>Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type
   *             determines the computing resources of each instance in the fleet, including CPU, memory,
   *             storage, and networking capacity. Amazon GameLift supports the following EC2 instance types.
   *             See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>
   *             for detailed descriptions. Leave this parameter blank to retrieve limits for all
   *             types.</p>
   */
  EC2InstanceType?: EC2InstanceType | string;
}

export namespace DescribeEC2InstanceLimitsInput {
  export const filterSensitiveLog = (obj: DescribeEC2InstanceLimitsInput): any => ({
    ...obj,
  });
}

/**
 * <p>The maximum number of instances allowed based on the Amazon Elastic Compute Cloud
 *             (Amazon EC2) instance type. Instance limits can be retrieved by calling <a>DescribeEC2InstanceLimits</a>.</p>
 */
export interface EC2InstanceLimit {
  /**
   * <p>Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type
   *             determines the computing resources of each instance in the fleet, including CPU, memory,
   *             storage, and networking capacity. Amazon GameLift supports the following EC2 instance types.
   *             See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>
   *             for detailed descriptions.</p>
   */
  EC2InstanceType?: EC2InstanceType | string;

  /**
   * <p>Number of instances of the specified type that are currently in use by this AWS
   *             account.</p>
   */
  CurrentInstances?: number;

  /**
   * <p>Number of instances allowed.</p>
   */
  InstanceLimit?: number;
}

export namespace EC2InstanceLimit {
  export const filterSensitiveLog = (obj: EC2InstanceLimit): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeEC2InstanceLimitsOutput {
  /**
   * <p>The maximum number of instances for the specified instance
   *             type.</p>
   */
  EC2InstanceLimits?: EC2InstanceLimit[];
}

export namespace DescribeEC2InstanceLimitsOutput {
  export const filterSensitiveLog = (obj: DescribeEC2InstanceLimitsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeFleetAttributesInput {
  /**
   * <p>A list of unique fleet identifiers to retrieve attributes for. You can use either the
   *             fleet ID or ARN value. To retrieve attributes for all current fleets, do not include
   *             this parameter. If the list of fleet identifiers includes fleets that don't currently
   *             exist, the request succeeds but no attributes for that fleet are returned.</p>
   */
  FleetIds?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   */
  Limit?: number;

  /**
   * <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   */
  NextToken?: string;
}

export namespace DescribeFleetAttributesInput {
  export const filterSensitiveLog = (obj: DescribeFleetAttributesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeFleetAttributesOutput {
  /**
   * <p>A collection of objects containing attribute metadata for each requested fleet ID.
   *             Attribute objects are returned only for fleets that currently exist.</p>
   */
  FleetAttributes?: FleetAttributes[];

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace DescribeFleetAttributesOutput {
  export const filterSensitiveLog = (obj: DescribeFleetAttributesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeFleetCapacityInput {
  /**
   * <p>A unique identifier for a fleet(s) to retrieve capacity information for.  You can use either the fleet ID or ARN
   *             value.</p>
   */
  FleetIds?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   */
  Limit?: number;

  /**
   * <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   */
  NextToken?: string;
}

export namespace DescribeFleetCapacityInput {
  export const filterSensitiveLog = (obj: DescribeFleetCapacityInput): any => ({
    ...obj,
  });
}

/**
 * <p>Current status of fleet capacity. The number of active instances should match or be
 *             in the process of matching the number of desired instances. Pending and terminating
 *             counts are non-zero only if fleet capacity is adjusting to an <a>UpdateFleetCapacity</a> request, or if access to resources is temporarily
 *             affected.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListFleets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartFleetActions</a> or <a>StopFleetActions</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface EC2InstanceCounts {
  /**
   * <p>Ideal number of active instances in the fleet.</p>
   */
  DESIRED?: number;

  /**
   * <p>The minimum value allowed for the fleet's instance count.</p>
   */
  MINIMUM?: number;

  /**
   * <p>The maximum value allowed for the fleet's instance count.</p>
   */
  MAXIMUM?: number;

  /**
   * <p>Number of instances in the fleet that are starting but not yet active.</p>
   */
  PENDING?: number;

  /**
   * <p>Actual number of active instances in the fleet.</p>
   */
  ACTIVE?: number;

  /**
   * <p>Number of active instances in the fleet that are not currently hosting a game
   *             session.</p>
   */
  IDLE?: number;

  /**
   * <p>Number of instances in the fleet that are no longer active but haven't yet been
   *             terminated.</p>
   */
  TERMINATING?: number;
}

export namespace EC2InstanceCounts {
  export const filterSensitiveLog = (obj: EC2InstanceCounts): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the fleet's capacity. Fleet capacity is measured in EC2
 *             instances. By default, new fleets have a capacity of one instance, but can be updated as
 *             needed. The maximum number of instances for a fleet is determined by the fleet's
 *             instance type.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListFleets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartFleetActions</a> or <a>StopFleetActions</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface FleetCapacity {
  /**
   * <p>A unique identifier for a fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>Name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type
   *             determines the computing resources of each instance in the fleet, including CPU, memory,
   *             storage, and networking capacity. Amazon GameLift supports the following EC2 instance types.
   *             See <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 Instance Types</a>
   *             for detailed descriptions.</p>
   */
  InstanceType?: EC2InstanceType | string;

  /**
   * <p>Current status of fleet capacity.</p>
   */
  InstanceCounts?: EC2InstanceCounts;
}

export namespace FleetCapacity {
  export const filterSensitiveLog = (obj: FleetCapacity): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeFleetCapacityOutput {
  /**
   * <p>A collection of objects containing capacity information for each requested fleet ID.
   *             Leave this parameter empty to retrieve capacity information for all fleets.</p>
   */
  FleetCapacity?: FleetCapacity[];

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace DescribeFleetCapacityOutput {
  export const filterSensitiveLog = (obj: DescribeFleetCapacityOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeFleetEventsInput {
  /**
   * <p>A unique identifier for a fleet to get event logs for.  You can use either the fleet ID or ARN value.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>Earliest date to retrieve event logs for. If no start time is specified, this call
   *             returns entries starting from when the fleet was created to the specified end time.
   *             Format is a number expressed in Unix time as milliseconds (ex:
   *             "1469498468.057").</p>
   */
  StartTime?: Date;

  /**
   * <p>Most recent date to retrieve event logs for. If no end time is specified, this call
   *             returns entries from the specified start time up to the present. Format is a number
   *             expressed in Unix time as milliseconds (ex: "1469498468.057").</p>
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   */
  Limit?: number;

  /**
   * <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace DescribeFleetEventsInput {
  export const filterSensitiveLog = (obj: DescribeFleetEventsInput): any => ({
    ...obj,
  });
}

export enum EventCode {
  FLEET_ACTIVATION_FAILED = "FLEET_ACTIVATION_FAILED",
  FLEET_ACTIVATION_FAILED_NO_INSTANCES = "FLEET_ACTIVATION_FAILED_NO_INSTANCES",
  FLEET_BINARY_DOWNLOAD_FAILED = "FLEET_BINARY_DOWNLOAD_FAILED",
  FLEET_CREATED = "FLEET_CREATED",
  FLEET_CREATION_EXTRACTING_BUILD = "FLEET_CREATION_EXTRACTING_BUILD",
  FLEET_CREATION_RUNNING_INSTALLER = "FLEET_CREATION_RUNNING_INSTALLER",
  FLEET_CREATION_VALIDATING_RUNTIME_CONFIG = "FLEET_CREATION_VALIDATING_RUNTIME_CONFIG",
  FLEET_DELETED = "FLEET_DELETED",
  FLEET_INITIALIZATION_FAILED = "FLEET_INITIALIZATION_FAILED",
  FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED = "FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED",
  FLEET_SCALING_EVENT = "FLEET_SCALING_EVENT",
  FLEET_STATE_ACTIVATING = "FLEET_STATE_ACTIVATING",
  FLEET_STATE_ACTIVE = "FLEET_STATE_ACTIVE",
  FLEET_STATE_BUILDING = "FLEET_STATE_BUILDING",
  FLEET_STATE_DOWNLOADING = "FLEET_STATE_DOWNLOADING",
  FLEET_STATE_ERROR = "FLEET_STATE_ERROR",
  FLEET_STATE_VALIDATING = "FLEET_STATE_VALIDATING",
  FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE = "FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE",
  FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND = "FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND",
  FLEET_VALIDATION_TIMED_OUT = "FLEET_VALIDATION_TIMED_OUT",
  FLEET_VPC_PEERING_DELETED = "FLEET_VPC_PEERING_DELETED",
  FLEET_VPC_PEERING_FAILED = "FLEET_VPC_PEERING_FAILED",
  FLEET_VPC_PEERING_SUCCEEDED = "FLEET_VPC_PEERING_SUCCEEDED",
  GAME_SESSION_ACTIVATION_TIMEOUT = "GAME_SESSION_ACTIVATION_TIMEOUT",
  GENERIC_EVENT = "GENERIC_EVENT",
  INSTANCE_INTERRUPTED = "INSTANCE_INTERRUPTED",
  SERVER_PROCESS_CRASHED = "SERVER_PROCESS_CRASHED",
  SERVER_PROCESS_FORCE_TERMINATED = "SERVER_PROCESS_FORCE_TERMINATED",
  SERVER_PROCESS_INVALID_PATH = "SERVER_PROCESS_INVALID_PATH",
  SERVER_PROCESS_PROCESS_EXIT_TIMEOUT = "SERVER_PROCESS_PROCESS_EXIT_TIMEOUT",
  SERVER_PROCESS_PROCESS_READY_TIMEOUT = "SERVER_PROCESS_PROCESS_READY_TIMEOUT",
  SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT = "SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT",
  SERVER_PROCESS_TERMINATED_UNHEALTHY = "SERVER_PROCESS_TERMINATED_UNHEALTHY",
}

/**
 * <p>Log entry describing an event that involves Amazon GameLift resources (such as a fleet). In
 *             addition to tracking activity, event codes and messages can provide additional
 *             information for troubleshooting and debugging problems.</p>
 */
export interface Event {
  /**
   * <p>A unique identifier for a fleet event.</p>
   */
  EventId?: string;

  /**
   * <p>A unique identifier for an event resource, such as a fleet ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of event being logged. </p>
   *         <p>
   *             <b>Fleet creation events (ordered by fleet creation activity):</b>
   *          </p>
   *         <ul>
   *             <li>
   *                 <p>FLEET_CREATED -- A fleet resource was successfully created with a status of
   *                         <code>NEW</code>. Event messaging includes the fleet ID.</p>
   *             </li>
   *             <li>
   *                 <p>FLEET_STATE_DOWNLOADING -- Fleet status changed from <code>NEW</code> to
   *                         <code>DOWNLOADING</code>. The compressed build has started downloading to a
   *                     fleet instance for installation.</p>
   *             </li>
   *             <li>
   *                 <p> FLEET_BINARY_DOWNLOAD_FAILED -- The build failed to download to the fleet
   *                     instance.</p>
   *             </li>
   *             <li>
   *                 <p>FLEET_CREATION_EXTRACTING_BUILD – The game server build was successfully
   *                     downloaded to an instance, and the build files are now being extracted from the
   *                     uploaded build and saved to an instance. Failure at this stage prevents a fleet
   *                     from moving to <code>ACTIVE</code> status. Logs for this stage display a list of
   *                     the files that are extracted and saved on the instance. Access the logs by using
   *                     the URL in <i>PreSignedLogUrl</i>.</p>
   *             </li>
   *             <li>
   *                 <p>FLEET_CREATION_RUNNING_INSTALLER – The game server build files were
   *                     successfully extracted, and the Amazon GameLift is now running the build's install
   *                     script (if one is included). Failure in this stage prevents a fleet from moving
   *                     to <code>ACTIVE</code> status. Logs for this stage list the installation steps
   *                     and whether or not the install completed successfully. Access the logs by using
   *                     the URL in <i>PreSignedLogUrl</i>. </p>
   *             </li>
   *             <li>
   *                 <p>FLEET_CREATION_VALIDATING_RUNTIME_CONFIG -- The build process was successful,
   *                     and the Amazon GameLift is now verifying that the game server launch paths, which are
   *                     specified in the fleet's runtime configuration, exist. If any listed launch path
   *                     exists, Amazon GameLift tries to launch a game server process and waits for the process
   *                     to report ready. Failures in this stage prevent a fleet from moving to
   *                         <code>ACTIVE</code> status. Logs for this stage list the launch paths in the
   *                     runtime configuration and indicate whether each is found. Access the logs by
   *                     using the URL in <i>PreSignedLogUrl</i>.
   *
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>FLEET_STATE_VALIDATING -- Fleet status changed from
   *                         <code>DOWNLOADING</code> to <code>VALIDATING</code>.</p>
   *             </li>
   *             <li>
   *                 <p> FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND -- Validation of the runtime
   *                     configuration failed because the executable specified in a launch path does not
   *                     exist on the instance.</p>
   *             </li>
   *             <li>
   *                 <p>FLEET_STATE_BUILDING -- Fleet status changed from <code>VALIDATING</code>
   *                     to <code>BUILDING</code>.</p>
   *             </li>
   *             <li>
   *                 <p>FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE -- Validation of the runtime
   *                     configuration failed because the executable specified in a launch path failed to
   *                     run on the fleet instance.</p>
   *             </li>
   *             <li>
   *                 <p>FLEET_STATE_ACTIVATING -- Fleet status changed from <code>BUILDING</code>
   *                     to <code>ACTIVATING</code>. </p>
   *             </li>
   *             <li>
   *                 <p> FLEET_ACTIVATION_FAILED - The fleet failed to successfully complete one of
   *                     the steps in the fleet activation process. This event code indicates that the
   *                     game build was successfully downloaded to a fleet instance, built, and
   *                     validated, but was not able to start a server process. Learn more at
   *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation"> Debug Fleet
   *                         Creation Issues</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>FLEET_STATE_ACTIVE -- The fleet's status changed from
   *                         <code>ACTIVATING</code> to <code>ACTIVE</code>. The fleet is now ready to
   *                     host game sessions.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>VPC peering events:</b>
   *          </p>
   *         <ul>
   *             <li>
   *                 <p>FLEET_VPC_PEERING_SUCCEEDED -- A VPC peering connection has been
   *                     established between the VPC for an Amazon GameLift fleet and a VPC in your AWS
   *                     account.</p>
   *             </li>
   *             <li>
   *                 <p>FLEET_VPC_PEERING_FAILED -- A requested VPC peering connection has failed.
   *                     Event details and status information (see <a>DescribeVpcPeeringConnections</a>) provide additional detail. A
   *                     common reason for peering failure is that the two VPCs have overlapping CIDR
   *                     blocks of IPv4 addresses. To resolve this, change the CIDR block for the VPC in
   *                     your AWS account. For more information on VPC peering failures, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html">https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/invalid-peering-configurations.html</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>FLEET_VPC_PEERING_DELETED -- A VPC peering connection has been successfully
   *                     deleted.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Spot instance events:</b>
   *          </p>
   *         <ul>
   *             <li>
   *                 <p> INSTANCE_INTERRUPTED -- A spot instance was interrupted by EC2 with a
   *                     two-minute notification.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Other fleet events:</b>
   *          </p>
   *         <ul>
   *             <li>
   *                 <p>FLEET_SCALING_EVENT -- A change was made to the fleet's capacity settings
   *                     (desired instances, minimum/maximum scaling limits). Event messaging includes
   *                     the new capacity settings.</p>
   *             </li>
   *             <li>
   *                 <p>FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED -- A change was made to
   *                     the fleet's game session protection policy setting. Event messaging includes
   *                     both the old and new policy setting. </p>
   *             </li>
   *             <li>
   *                 <p>FLEET_DELETED -- A request to delete a fleet was initiated.</p>
   *             </li>
   *             <li>
   *                 <p> GENERIC_EVENT -- An unspecified event has occurred.</p>
   *             </li>
   *          </ul>
   */
  EventCode?: EventCode | string;

  /**
   * <p>Additional information related to the event.</p>
   */
  Message?: string;

  /**
   * <p>Time stamp indicating when this event occurred. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  EventTime?: Date;

  /**
   * <p>Location of stored logs with additional detail that is related to the event. This
   *             is useful for debugging issues. The URL is valid for 15 minutes. You can also access
   *             fleet creation logs through the Amazon GameLift console.</p>
   */
  PreSignedLogUrl?: string;
}

export namespace Event {
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeFleetEventsOutput {
  /**
   * <p>A collection of objects containing event log entries for the specified
   *             fleet.</p>
   */
  Events?: Event[];

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace DescribeFleetEventsOutput {
  export const filterSensitiveLog = (obj: DescribeFleetEventsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeFleetPortSettingsInput {
  /**
   * <p>A unique identifier for a fleet to retrieve port settings for. You can use either the fleet ID or ARN
   *             value.</p>
   */
  FleetId: string | undefined;
}

export namespace DescribeFleetPortSettingsInput {
  export const filterSensitiveLog = (obj: DescribeFleetPortSettingsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeFleetPortSettingsOutput {
  /**
   * <p>The port settings for the requested fleet ID.</p>
   */
  InboundPermissions?: IpPermission[];
}

export namespace DescribeFleetPortSettingsOutput {
  export const filterSensitiveLog = (obj: DescribeFleetPortSettingsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeFleetUtilizationInput {
  /**
   * <p>A unique identifier for a fleet(s) to retrieve utilization data for. You can use either the fleet ID or ARN
   *             value. To retrieve attributes for all current fleets, do not include this parameter. If
   *             the list of fleet identifiers includes fleets that don't currently exist, the request
   *             succeeds but no attributes for that fleet are returned.</p>
   */
  FleetIds?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   */
  Limit?: number;

  /**
   * <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. This parameter is ignored when the request specifies one or a list of fleet
   *             IDs.</p>
   */
  NextToken?: string;
}

export namespace DescribeFleetUtilizationInput {
  export const filterSensitiveLog = (obj: DescribeFleetUtilizationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Current status of fleet utilization, including the number of game and player
 *             sessions being hosted.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListFleets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteFleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateFleetAttributes</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartFleetActions</a> or <a>StopFleetActions</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface FleetUtilization {
  /**
   * <p>A unique identifier for a fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>Number of server processes in an <code>ACTIVE</code> status currently running
   *             across all instances in the fleet</p>
   */
  ActiveServerProcessCount?: number;

  /**
   * <p>Number of active game sessions currently being hosted on all instances in the
   *             fleet.</p>
   */
  ActiveGameSessionCount?: number;

  /**
   * <p>Number of active player sessions currently being hosted on all instances in the
   *             fleet.</p>
   */
  CurrentPlayerSessionCount?: number;

  /**
   * <p>The maximum number of players allowed across all game sessions currently being hosted on all
   *             instances in the fleet.</p>
   */
  MaximumPlayerSessionCount?: number;
}

export namespace FleetUtilization {
  export const filterSensitiveLog = (obj: FleetUtilization): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeFleetUtilizationOutput {
  /**
   * <p>A collection of objects containing utilization information for each requested fleet
   *             ID.</p>
   */
  FleetUtilization?: FleetUtilization[];

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace DescribeFleetUtilizationOutput {
  export const filterSensitiveLog = (obj: DescribeFleetUtilizationOutput): any => ({
    ...obj,
  });
}

export interface DescribeGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running.
   *             Use either the <a>GameServerGroup</a> name or ARN value.</p>
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server information to be retrieved.</p>
   */
  GameServerId: string | undefined;
}

export namespace DescribeGameServerInput {
  export const filterSensitiveLog = (obj: DescribeGameServerInput): any => ({
    ...obj,
  });
}

export interface DescribeGameServerOutput {
  /**
   * <p>Object that describes the requested game server.</p>
   */
  GameServer?: GameServer;
}

export namespace DescribeGameServerOutput {
  export const filterSensitiveLog = (obj: DescribeGameServerOutput): any => ({
    ...obj,
  });
}

export interface DescribeGameServerGroupInput {
  /**
   * <p>A unique identifier for the game server group. Use either the <a>GameServerGroup</a> name or ARN value.</p>
   */
  GameServerGroupName: string | undefined;
}

export namespace DescribeGameServerGroupInput {
  export const filterSensitiveLog = (obj: DescribeGameServerGroupInput): any => ({
    ...obj,
  });
}

export interface DescribeGameServerGroupOutput {
  /**
   * <p>An object with the property settings for the requested game server group resource. </p>
   */
  GameServerGroup?: GameServerGroup;
}

export namespace DescribeGameServerGroupOutput {
  export const filterSensitiveLog = (obj: DescribeGameServerGroupOutput): any => ({
    ...obj,
  });
}

export interface DescribeGameServerInstancesInput {
  /**
   * <p>A unique identifier for the game server group. Use either the <a>GameServerGroup</a> name or ARN value.</p>
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The EC2 instance IDs that you want to retrieve status on. EC2 instance IDs use a
   *             17-character format, for example: <code>i-1234567890abcdef0</code>. To retrieve all
   *             instances in the game server group, leave this parameter empty. </p>
   */
  InstanceIds?: string[];

  /**
   * <p>
   *             The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential segments.
   *         </p>
   */
  Limit?: number;

  /**
   * <p>
   *             A token that indicates the start of the next sequential segment of results. Use the token returned with the previous call to this operation. To start at the beginning of the result set, do not specify a value.
   *         </p>
   */
  NextToken?: string;
}

export namespace DescribeGameServerInstancesInput {
  export const filterSensitiveLog = (obj: DescribeGameServerInstancesInput): any => ({
    ...obj,
  });
}

export enum GameServerInstanceStatus {
  ACTIVE = "ACTIVE",
  DRAINING = "DRAINING",
  SPOT_TERMINATING = "SPOT_TERMINATING",
}

/**
 * <p>
 *             <b>This data type is used with the Amazon GameLift FleetIQ and game server groups.</b>
 *          </p>
 *             <p> Additional properties, including status, that describe an EC2 instance in a game
 *             server group. Instance configurations are set with game server group properties (see
 *                 <code>DescribeGameServerGroup</code> and with the EC2 launch template that was used
 *             when creating the game server group. </p>
 *             <p>Retrieve game server instances for a game server group by calling
 *                 <code>DescribeGameServerInstances</code>. </p>
 *             <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGameServerGroups</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ResumeGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>SuspendGameServerGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameServerInstances</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface GameServerInstance {
  /**
   * <p>A developer-defined identifier for the game server group that includes the game
   *             server instance. The name is unique for each Region in each AWS account.</p>
   */
  GameServerGroupName?: string;

  /**
   * <p>A generated unique identifier for the game server group that includes the game
   *             server instance. </p>
   */
  GameServerGroupArn?: string;

  /**
   * <p>The unique identifier for the instance where the game server is running. This ID is
   *             available in the instance metadata. EC2 instance IDs
   *             use a 17-character format, for example: <code>i-1234567890abcdef0</code>.</p>
   */
  InstanceId?: string;

  /**
   * <p>
   *                 Current status of the game server instance.
   *             </p>
   *             <ul>
   *             <li>
   *                     <p>
   *                         <b>ACTIVE</b> -- The instance is viable for hosting
   *                         game servers. </p>
   *                 </li>
   *             <li>
   *                     <p>
   *                     <b>DRAINING</b> -- The instance is not viable for
   *                     hosting game servers. Existing game servers are in the process of ending, and
   *                     new game servers are not started on this instance unless no other resources are
   *                     available. When the instance is put in DRAINING, a new instance is started up to
   *                     replace it. Once the instance has no UTILIZED game servers, it will be terminated
   *                     in favor of the new instance.</p>
   *                 </li>
   *             <li>
   *                     <p>
   *                     <b>SPOT_TERMINATING</b> -- The instance is in the
   *                     process of shutting down due to a Spot instance interruption. No new game
   *                     servers are started on this instance.</p>
   *                 </li>
   *          </ul>
   */
  InstanceStatus?: GameServerInstanceStatus | string;
}

export namespace GameServerInstance {
  export const filterSensitiveLog = (obj: GameServerInstance): any => ({
    ...obj,
  });
}

export interface DescribeGameServerInstancesOutput {
  /**
   * <p>
   *             The collection of requested game server instances.
   *         </p>
   */
  GameServerInstances?: GameServerInstance[];

  /**
   * <p>
   *             A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.
   *         </p>
   */
  NextToken?: string;
}

export namespace DescribeGameServerInstancesOutput {
  export const filterSensitiveLog = (obj: DescribeGameServerInstancesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeGameSessionDetailsInput {
  /**
   * <p>A unique identifier for a fleet to retrieve all game sessions active on the fleet. You can use either the fleet
   *             ID or ARN value.</p>
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for the game session to retrieve. </p>
   */
  GameSessionId?: string;

  /**
   * <p>A unique identifier for an alias associated with the fleet to retrieve all game sessions for. You can use either
   *             the alias ID or ARN value.</p>
   */
  AliasId?: string;

  /**
   * <p>Game session status to filter results on. Possible game session statuses include
   *                 <code>ACTIVE</code>, <code>TERMINATED</code>, <code>ACTIVATING</code> and
   *                 <code>TERMINATING</code> (the last two are transitory). </p>
   */
  StatusFilter?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   */
  Limit?: number;

  /**
   * <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace DescribeGameSessionDetailsInput {
  export const filterSensitiveLog = (obj: DescribeGameSessionDetailsInput): any => ({
    ...obj,
  });
}

/**
 * <p>A game session's properties plus the protection policy currently in
 *             force.</p>
 */
export interface GameSessionDetail {
  /**
   * <p>Object that describes a game session.</p>
   */
  GameSession?: GameSession;

  /**
   * <p>Current status of protection for the game session.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>NoProtection</b> -- The game session can be
   *                     terminated during a scale-down event.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>FullProtection</b> -- If the game session is in an
   *                     <code>ACTIVE</code> status, it cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   */
  ProtectionPolicy?: ProtectionPolicy | string;
}

export namespace GameSessionDetail {
  export const filterSensitiveLog = (obj: GameSessionDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeGameSessionDetailsOutput {
  /**
   * <p>A collection of objects containing game session properties and the protection policy
   *             currently in force for each session matching the request.</p>
   */
  GameSessionDetails?: GameSessionDetail[];

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace DescribeGameSessionDetailsOutput {
  export const filterSensitiveLog = (obj: DescribeGameSessionDetailsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeGameSessionPlacementInput {
  /**
   * <p>A unique identifier for a game session placement to retrieve.</p>
   */
  PlacementId: string | undefined;
}

export namespace DescribeGameSessionPlacementInput {
  export const filterSensitiveLog = (obj: DescribeGameSessionPlacementInput): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a player session that was created as part of a <a>StartGameSessionPlacement</a> request. This object contains only the player
 *         ID and player session ID. To retrieve full details on a player session, call <a>DescribePlayerSessions</a> with the player session ID.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreatePlayerSession</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreatePlayerSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribePlayerSessions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Game session placements</p>
 *                         <ul>
 *                   <li>
 *                      <p>
 *                         <a>StartGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>StopGameSessionPlacement</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 */
export interface PlacedPlayerSession {
  /**
   * <p>A unique identifier for a player that is associated with this player session.</p>
   */
  PlayerId?: string;

  /**
   * <p>A unique identifier for a player session.</p>
   */
  PlayerSessionId?: string;
}

export namespace PlacedPlayerSession {
  export const filterSensitiveLog = (obj: PlacedPlayerSession): any => ({
    ...obj,
  });
}

/**
 * <p>Regional latency information for a player, used when requesting a new game session
 *         with <a>StartGameSessionPlacement</a>. This value indicates the amount of
 *         time lag that exists when the player is connected to a fleet in the specified Region.
 *         The relative difference between a player's latency values for multiple Regions are used
 *         to determine which fleets are best suited to place a new game session for the player.
 *     </p>
 */
export interface PlayerLatency {
  /**
   * <p>A unique identifier for a player associated with the latency data.</p>
   */
  PlayerId?: string;

  /**
   * <p>Name of the Region that is associated with the latency value.</p>
   */
  RegionIdentifier?: string;

  /**
   * <p>Amount of time that represents the time lag experienced by the player when
   *         connected to the specified Region.</p>
   */
  LatencyInMilliseconds?: number;
}

export namespace PlayerLatency {
  export const filterSensitiveLog = (obj: PlayerLatency): any => ({
    ...obj,
  });
}

export enum GameSessionPlacementState {
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  FULFILLED = "FULFILLED",
  PENDING = "PENDING",
  TIMED_OUT = "TIMED_OUT",
}

/**
 * <p>Object that describes a <a>StartGameSessionPlacement</a> request. This
 *         object includes the full details of the original request plus the current status and
 *         start/end time stamps.</p>
 *          <p>Game session placement-related operations include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>StartGameSessionPlacement</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeGameSessionPlacement</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopGameSessionPlacement</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface GameSessionPlacement {
  /**
   * <p>A unique identifier for a game session placement.</p>
   */
  PlacementId?: string;

  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region.</p>
   */
  GameSessionQueueName?: string;

  /**
   * <p>Current status of the game session placement request.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PENDING</b> -- The placement request is currently
   *                 in the queue waiting to be processed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FULFILLED</b> -- A new game session and player
   *                 sessions (if requested) have been successfully created. Values for
   *                 <i>GameSessionArn</i> and
   *                 <i>GameSessionRegion</i> are available. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>CANCELLED</b> -- The placement request was canceled
   *                 with a call to <a>StopGameSessionPlacement</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TIMED_OUT</b> -- A new game session was not
   *                 successfully created before the time limit expired. You can resubmit the
   *                 placement request as needed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>FAILED</b> -- GameLift is not able to complete the
   *             process of placing the game session. Common reasons are the
   *             game session terminated before the placement process was completed, or an unexpected
   *             internal error.</p>
   *             </li>
   *          </ul>
   */
  Status?: GameSessionPlacementState | string;

  /**
   * <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   */
  GameProperties?: GameProperty[];

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   */
  MaximumPlayerSessionCount?: number;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   */
  GameSessionName?: string;

  /**
   * <p>A unique identifier for the game session. This value is set once the new game session is placed (placement status is
   *         <code>FULFILLED</code>).</p>
   */
  GameSessionId?: string;

  /**
   * <p>Identifier for the game session created by this placement request. This value is
   *         set once the new game session is placed (placement status is <code>FULFILLED</code>).
   *         This identifier is unique across all Regions. You can use this value as a
   *         <code>GameSessionId</code> value as needed.</p>
   */
  GameSessionArn?: string;

  /**
   * <p>Name of the Region where the game session created by this placement request is
   *         running. This value is set once the new game session is placed (placement status is
   *         <code>FULFILLED</code>).</p>
   */
  GameSessionRegion?: string;

  /**
   * <p>Set of values, expressed in milliseconds, indicating the amount of latency that a player experiences when connected to AWS Regions.</p>
   */
  PlayerLatencies?: PlayerLatency[];

  /**
   * <p>Time stamp indicating when this request was placed in the queue. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  StartTime?: Date;

  /**
   * <p>Time stamp indicating when this request was completed, canceled, or timed
   *         out.</p>
   */
  EndTime?: Date;

  /**
   * <p>IP address of the instance that is running the game session. When connecting to a Amazon GameLift game server, a client needs to reference an IP address (or DNS name) and port number. This value is set once the new game session is placed (placement status is
   *         <code>FULFILLED</code>). </p>
   */
  IpAddress?: string;

  /**
   * <p>DNS identifier assigned to the instance that is running the game session. Values have
   *             the following format:</p>
   *          <ul>
   *             <li>
   *                <p>TLS-enabled fleets: <code><unique identifier>.<region identifier>.amazongamelift.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>Non-TLS-enabled fleets: <code>ec2-<unique identifier>.compute.amazonaws.com</code>. (See
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon EC2 Instance IP Addressing</a>.)</p>
   *             </li>
   *          </ul>
   *             <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   */
  DnsName?: string;

  /**
   * <p>Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number. This value is set once the new game session is placed (placement status is
   *         <code>FULFILLED</code>).</p>
   */
  Port?: number;

  /**
   * <p>A collection of information on player sessions created in response to the game
   *         session placement request. These player sessions are created only once a new game
   *         session is successfully placed (placement status is <code>FULFILLED</code>). This
   *         information includes the player ID (as provided in the placement request) and the
   *         corresponding player session ID. Retrieve full player sessions by calling <a>DescribePlayerSessions</a> with the player session ID.</p>
   */
  PlacedPlayerSessions?: PlacedPlayerSession[];

  /**
   * <p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   */
  GameSessionData?: string;

  /**
   * <p>Information on the matchmaking process for this game. Data is in JSON syntax,
   *         formatted as a string. It identifies the matchmaking configuration used to create the
   *         match, and contains data on all players assigned to the match, including player
   *         attributes and team assignments. For more details on matchmaker data, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data">Match
   *             Data</a>.</p>
   */
  MatchmakerData?: string;
}

export namespace GameSessionPlacement {
  export const filterSensitiveLog = (obj: GameSessionPlacement): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeGameSessionPlacementOutput {
  /**
   * <p>Object that describes the requested game session placement.</p>
   */
  GameSessionPlacement?: GameSessionPlacement;
}

export namespace DescribeGameSessionPlacementOutput {
  export const filterSensitiveLog = (obj: DescribeGameSessionPlacementOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeGameSessionQueuesInput {
  /**
   * <p>A list of queue names to retrieve information for. You can use either the queue ID or
   *             ARN value. To request settings for all queues, leave this parameter empty. </p>
   */
  Names?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. You can request up to 50 results.</p>
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace DescribeGameSessionQueuesInput {
  export const filterSensitiveLog = (obj: DescribeGameSessionQueuesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeGameSessionQueuesOutput {
  /**
   * <p>A collection of objects that describe the requested game session queues.</p>
   */
  GameSessionQueues?: GameSessionQueue[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace DescribeGameSessionQueuesOutput {
  export const filterSensitiveLog = (obj: DescribeGameSessionQueuesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeGameSessionsInput {
  /**
   * <p>A unique identifier for a fleet to retrieve all game sessions for. You can use either the fleet ID or ARN value. </p>
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for the game session to retrieve. </p>
   */
  GameSessionId?: string;

  /**
   * <p>A unique identifier for an alias associated with the fleet to retrieve all game sessions for.  You can use either
   *             the alias ID or ARN value.</p>
   */
  AliasId?: string;

  /**
   * <p>Game session status to filter results on. Possible game session statuses include
   *                 <code>ACTIVE</code>, <code>TERMINATED</code>, <code>ACTIVATING</code>, and
   *                 <code>TERMINATING</code> (the last two are transitory). </p>
   */
  StatusFilter?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   */
  Limit?: number;

  /**
   * <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace DescribeGameSessionsInput {
  export const filterSensitiveLog = (obj: DescribeGameSessionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeGameSessionsOutput {
  /**
   * <p>A collection of objects containing game session properties for each session matching
   *             the request.</p>
   */
  GameSessions?: GameSession[];

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace DescribeGameSessionsOutput {
  export const filterSensitiveLog = (obj: DescribeGameSessionsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeInstancesInput {
  /**
   * <p>A unique identifier for a fleet to retrieve instance information for.  You can use either the fleet ID or ARN
   *             value.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for an instance to retrieve. Specify an instance ID or leave
   *             blank to retrieve all instances in the fleet.</p>
   */
  InstanceId?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   */
  Limit?: number;

  /**
   * <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstancesInput {
  export const filterSensitiveLog = (obj: DescribeInstancesInput): any => ({
    ...obj,
  });
}

export enum InstanceStatus {
  ACTIVE = "ACTIVE",
  PENDING = "PENDING",
  TERMINATING = "TERMINATING",
}

/**
 * <p>Properties that describe an instance of a virtual computing resource that hosts one
 *         or more game servers. A fleet may contain zero or more instances.</p>
 */
export interface Instance {
  /**
   * <p>A unique identifier for a fleet that the instance is in.</p>
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for an instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>IP address that is assigned to the instance.</p>
   */
  IpAddress?: string;

  /**
   * <p>DNS identifier assigned to the instance that is running the game session. Values have
   *             the following format:</p>
   *          <ul>
   *             <li>
   *                <p>TLS-enabled fleets: <code><unique identifier>.<region identifier>.amazongamelift.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>Non-TLS-enabled fleets: <code>ec2-<unique identifier>.compute.amazonaws.com</code>. (See
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon EC2 Instance IP Addressing</a>.)</p>
   *             </li>
   *          </ul>
   *             <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   */
  DnsName?: string;

  /**
   * <p>Operating system that is running on this instance. </p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>EC2 instance type that defines the computing resources of this instance.
   *     </p>
   */
  Type?: EC2InstanceType | string;

  /**
   * <p>Current status of the instance. Possible statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>PENDING</b> -- The instance is in the process of
   *                 being created and launching server processes as defined in the fleet's run-time
   *                 configuration. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- The instance has been successfully
   *                 created and at least one server process has successfully launched and reported
   *                 back to Amazon GameLift that it is ready to host a game session. The instance is now
   *                 considered ready to host game sessions. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TERMINATING</b> -- The instance is in the process
   *                 of shutting down. This may happen to reduce capacity during a scaling down event
   *                 or to recycle resources in the event of a problem.</p>
   *             </li>
   *          </ul>
   */
  Status?: InstanceStatus | string;

  /**
   * <p>Time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  CreationTime?: Date;
}

export namespace Instance {
  export const filterSensitiveLog = (obj: Instance): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeInstancesOutput {
  /**
   * <p>A collection of objects containing properties for each instance returned.</p>
   */
  Instances?: Instance[];

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstancesOutput {
  export const filterSensitiveLog = (obj: DescribeInstancesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeMatchmakingInput {
  /**
   * <p>A unique identifier for a matchmaking ticket. You can include up to 10 ID values. </p>
   */
  TicketIds: string[] | undefined;
}

export namespace DescribeMatchmakingInput {
  export const filterSensitiveLog = (obj: DescribeMatchmakingInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a new player session that is created as a result of a successful FlexMatch
 *             match. A successful match automatically creates new player sessions for every player ID
 *             in the original matchmaking request. </p>
 *         <p>When players connect to the match's game session, they must include both player ID
 *             and player session ID in order to claim their assigned player slot.</p>
 */
export interface MatchedPlayerSession {
  /**
   * <p>A unique identifier for a player </p>
   */
  PlayerId?: string;

  /**
   * <p>A unique identifier for a player session</p>
   */
  PlayerSessionId?: string;
}

export namespace MatchedPlayerSession {
  export const filterSensitiveLog = (obj: MatchedPlayerSession): any => ({
    ...obj,
  });
}

/**
 * <p>Connection information for a new game session that is created in response to a <a>StartMatchmaking</a> request. Once a match is made, the FlexMatch engine
 *             creates a new game session for it. This information, including the game session endpoint
 *             and player sessions for each player in the original matchmaking request, is added to the
 *                 <a>MatchmakingTicket</a>, which can be retrieved by calling <a>DescribeMatchmaking</a>.</p>
 */
export interface GameSessionConnectionInfo {
  /**
   * <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) that is assigned to a game session and uniquely identifies it.</p>
   */
  GameSessionArn?: string;

  /**
   * <p>IP address of the instance that is running the game session. When connecting to a Amazon GameLift game server, a client needs to reference an IP address (or DNS name) and port number.</p>
   */
  IpAddress?: string;

  /**
   * <p>DNS identifier assigned to the instance that is running the game session. Values have
   *             the following format:</p>
   *          <ul>
   *             <li>
   *                <p>TLS-enabled fleets: <code><unique identifier>.<region identifier>.amazongamelift.com</code>.</p>
   *             </li>
   *             <li>
   *                <p>Non-TLS-enabled fleets: <code>ec2-<unique identifier>.compute.amazonaws.com</code>. (See
   *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-instance-addressing.html#concepts-public-addresses">Amazon EC2 Instance IP Addressing</a>.)</p>
   *             </li>
   *          </ul>
   *             <p>When connecting to a game session that is running on a TLS-enabled fleet, you must use the DNS name, not the IP address.</p>
   */
  DnsName?: string;

  /**
   * <p>Port number for the game session. To connect to a Amazon GameLift game server, an app needs both the IP address and port number.</p>
   */
  Port?: number;

  /**
   * <p>A collection of player session IDs, one for each player ID that was included in the
   *             original matchmaking request. </p>
   */
  MatchedPlayerSessions?: MatchedPlayerSession[];
}

export namespace GameSessionConnectionInfo {
  export const filterSensitiveLog = (obj: GameSessionConnectionInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a player in matchmaking. When starting a matchmaking request, a player
 *             has a player ID, attributes, and may have latency data. Team information is added after
 *             a match has been successfully completed.</p>
 */
export interface Player {
  /**
   * <p>A unique identifier for a player</p>
   */
  PlayerId?: string;

  /**
   * <p>A collection of key:value pairs containing player information for use in matchmaking.
   *             Player attribute keys must match the <i>playerAttributes</i> used in a
   *             matchmaking rule set. Example: <code>"PlayerAttributes": {"skill": {"N": "23"},
   *                 "gameMode": {"S": "deathmatch"}}</code>.</p>
   */
  PlayerAttributes?: { [key: string]: AttributeValue };

  /**
   * <p>Name of the team that the player is assigned to in a match. Team names are defined
   *             in a matchmaking rule set.</p>
   */
  Team?: string;

  /**
   * <p>Set of values, expressed in milliseconds, indicating the amount of latency that a player experiences when connected to AWS Regions. If this property is present, FlexMatch considers placing the match only
   *             in Regions for which latency is reported. </p>
   *         <p>If a matchmaker has a rule that evaluates player latency, players must report
   *             latency in order to be matched. If no latency is reported in this scenario, FlexMatch
   *             assumes that no Regions are available to the player and the ticket is not matchable.
   *         </p>
   */
  LatencyInMs?: { [key: string]: number };
}

export namespace Player {
  export const filterSensitiveLog = (obj: Player): any => ({
    ...obj,
  });
}

export type MatchmakingConfigurationStatus =
  | "CANCELLED"
  | "COMPLETED"
  | "FAILED"
  | "PLACING"
  | "QUEUED"
  | "REQUIRES_ACCEPTANCE"
  | "SEARCHING"
  | "TIMED_OUT";

/**
 * <p>Ticket generated to track the progress of a matchmaking request. Each ticket is
 *             uniquely identified by a ticket ID, supplied by the requester, when creating a
 *             matchmaking request with <a>StartMatchmaking</a>. Tickets can be retrieved by
 *             calling <a>DescribeMatchmaking</a> with the ticket ID.</p>
 */
export interface MatchmakingTicket {
  /**
   * <p>A unique identifier for a matchmaking ticket.</p>
   */
  TicketId?: string;

  /**
   * <p>Name of the <a>MatchmakingConfiguration</a> that is used with this
   *             ticket. Matchmaking configurations determine how players are grouped into a match and
   *             how a new game session is created for the match.</p>
   */
  ConfigurationName?: string;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) associated with the GameLift matchmaking configuration resource that is used with this ticket.</p>
   */
  ConfigurationArn?: string;

  /**
   * <p>Current status of the matchmaking request.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>QUEUED</b> -- The matchmaking request has been
   *                     received and is currently waiting to be processed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>SEARCHING</b> -- The matchmaking request is
   *                     currently being processed. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>REQUIRES_ACCEPTANCE</b> -- A match has been
   *                     proposed and the players must accept the match (see <a>AcceptMatch</a>). This status is used only with requests that use a matchmaking configuration
   *                     with a player acceptance requirement.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>PLACING</b> -- The FlexMatch engine has matched
   *                     players and is in the process of placing a new game session for the
   *                     match.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>COMPLETED</b> -- Players have been matched and a
   *                     game session is ready to host the players. A ticket in this state contains the
   *                     necessary connection information for players.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>FAILED</b> -- The matchmaking request was not
   *                     completed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>CANCELLED</b> -- The matchmaking request was
   *                     canceled. This may be the result of a call to <a>StopMatchmaking</a>
   *                     or a proposed match that one or more players failed to accept.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>TIMED_OUT</b> -- The matchmaking request was not
   *                     successful within the duration specified in the matchmaking configuration.
   *                 </p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>Matchmaking requests that fail to successfully complete (statuses FAILED,
   *                 CANCELLED, TIMED_OUT) can be resubmitted as new requests with new ticket
   *                 IDs.</p>
   *         </note>
   */
  Status?: MatchmakingConfigurationStatus | string;

  /**
   * <p>Code to explain the current status. For example, a status reason may indicate when
   *             a ticket has returned to <code>SEARCHING</code> status after a proposed match fails to
   *             receive player acceptances.</p>
   */
  StatusReason?: string;

  /**
   * <p>Additional information about the current status.</p>
   */
  StatusMessage?: string;

  /**
   * <p>Time stamp indicating when this matchmaking request was received. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  StartTime?: Date;

  /**
   * <p>Time stamp indicating when this matchmaking request stopped being processed due to
   *             success, failure, or cancellation. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</p>
   */
  EndTime?: Date;

  /**
   * <p>A set of <code>Player</code> objects, each representing a player to find matches
   *             for. Players are identified by a unique player ID and may include latency data for use
   *             during matchmaking. If the ticket is in status <code>COMPLETED</code>, the
   *             <code>Player</code> objects include the team the players were assigned to in the
   *             resulting match.</p>
   */
  Players?: Player[];

  /**
   * <p>Identifier and connection information of the game session created for the match. This
   *             information is added to the ticket only after the matchmaking request has been
   *             successfully completed. This parameter is not set when FlexMatch is being used without
   *                 GameLift hosting.</p>
   */
  GameSessionConnectionInfo?: GameSessionConnectionInfo;

  /**
   * <p>Average amount of time (in seconds) that players are currently waiting for a match.
   *             If there is not enough recent data, this property may be empty.</p>
   */
  EstimatedWaitTime?: number;
}

export namespace MatchmakingTicket {
  export const filterSensitiveLog = (obj: MatchmakingTicket): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeMatchmakingOutput {
  /**
   * <p>A collection of existing matchmaking ticket objects matching the request.</p>
   */
  TicketList?: MatchmakingTicket[];
}

export namespace DescribeMatchmakingOutput {
  export const filterSensitiveLog = (obj: DescribeMatchmakingOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeMatchmakingConfigurationsInput {
  /**
   * <p>A unique identifier for a matchmaking configuration(s) to retrieve. You can use either the configuration name or ARN value. To
   *             request all existing configurations, leave this parameter empty.</p>
   */
  Names?: string[];

  /**
   * <p>A unique identifier for a matchmaking rule set. You can use either the rule set name or ARN value. Use this parameter to
   *             retrieve all matchmaking configurations that use this rule set.</p>
   */
  RuleSetName?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. This parameter is limited to 10.</p>
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace DescribeMatchmakingConfigurationsInput {
  export const filterSensitiveLog = (obj: DescribeMatchmakingConfigurationsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeMatchmakingConfigurationsOutput {
  /**
   * <p>A collection of requested matchmaking configurations.</p>
   */
  Configurations?: MatchmakingConfiguration[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace DescribeMatchmakingConfigurationsOutput {
  export const filterSensitiveLog = (obj: DescribeMatchmakingConfigurationsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeMatchmakingRuleSetsInput {
  /**
   * <p>A list of one or more matchmaking rule set names to retrieve details for. (Note: The
   *             rule set name is different from the optional "name" field in the rule set body.) You can
   *             use either the rule set name or ARN value. </p>
   */
  Names?: string[];

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace DescribeMatchmakingRuleSetsInput {
  export const filterSensitiveLog = (obj: DescribeMatchmakingRuleSetsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeMatchmakingRuleSetsOutput {
  /**
   * <p>A collection of requested matchmaking rule set objects. </p>
   */
  RuleSets: MatchmakingRuleSet[] | undefined;

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace DescribeMatchmakingRuleSetsOutput {
  export const filterSensitiveLog = (obj: DescribeMatchmakingRuleSetsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribePlayerSessionsInput {
  /**
   * <p>A unique identifier for the game session to retrieve player sessions for.</p>
   */
  GameSessionId?: string;

  /**
   * <p>A unique identifier for a player to retrieve player sessions for.</p>
   */
  PlayerId?: string;

  /**
   * <p>A unique identifier for a player session to retrieve.</p>
   */
  PlayerSessionId?: string;

  /**
   * <p>Player session status to filter results on.</p>
   *          <p>Possible player session statuses include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>RESERVED</b> -- The player session request has been
   *                 received, but the player has not yet connected to the server process and/or been
   *                 validated. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- The player has been validated by the
   *                 server process and is currently connected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>COMPLETED</b> -- The player connection has been
   *                 dropped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>TIMEDOUT</b> -- A player session request was
   *                 received, but the player did not connect and/or was not validated within the
   *                 timeout limit (60 seconds).</p>
   *             </li>
   *          </ul>
   */
  PlayerSessionStatusFilter?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. If a player session ID is specified, this parameter is ignored.</p>
   */
  Limit?: number;

  /**
   * <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value. If a player session ID is specified, this parameter is ignored.</p>
   */
  NextToken?: string;
}

export namespace DescribePlayerSessionsInput {
  export const filterSensitiveLog = (obj: DescribePlayerSessionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribePlayerSessionsOutput {
  /**
   * <p>A collection of objects containing properties for each player session that matches
   *         the request.</p>
   */
  PlayerSessions?: PlayerSession[];

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace DescribePlayerSessionsOutput {
  export const filterSensitiveLog = (obj: DescribePlayerSessionsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeRuntimeConfigurationInput {
  /**
   * <p>A unique identifier for a fleet to get the runtime configuration for. You can use either the fleet ID or ARN
   *             value.</p>
   */
  FleetId: string | undefined;
}

export namespace DescribeRuntimeConfigurationInput {
  export const filterSensitiveLog = (obj: DescribeRuntimeConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeRuntimeConfigurationOutput {
  /**
   * <p>Instructions describing how server processes should be launched and maintained on
   *             each instance in the fleet.</p>
   */
  RuntimeConfiguration?: RuntimeConfiguration;
}

export namespace DescribeRuntimeConfigurationOutput {
  export const filterSensitiveLog = (obj: DescribeRuntimeConfigurationOutput): any => ({
    ...obj,
  });
}

export enum ScalingStatusType {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  DELETE_REQUESTED = "DELETE_REQUESTED",
  DELETING = "DELETING",
  ERROR = "ERROR",
  UPDATE_REQUESTED = "UPDATE_REQUESTED",
  UPDATING = "UPDATING",
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeScalingPoliciesInput {
  /**
   * <p>A unique identifier for a fleet to retrieve scaling policies for. You can use either the fleet ID or ARN
   *             value.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>Scaling policy status to filter results on. A scaling policy is only in force when
   *             in an <code>ACTIVE</code> status.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>ACTIVE</b> -- The scaling policy is currently in
   *                     force.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>UPDATEREQUESTED</b> -- A request to update the
   *                     scaling policy has been received.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>UPDATING</b> -- A change is being made to the
   *                     scaling policy.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>DELETEREQUESTED</b> -- A request to delete the
   *                     scaling policy has been received.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>DELETING</b> -- The scaling policy is being
   *                     deleted.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>DELETED</b> -- The scaling policy has been
   *                     deleted.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>ERROR</b> -- An error occurred in creating the
   *                     policy. It should be removed and recreated.</p>
   *             </li>
   *          </ul>
   */
  StatusFilter?: ScalingStatusType | string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   */
  Limit?: number;

  /**
   * <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace DescribeScalingPoliciesInput {
  export const filterSensitiveLog = (obj: DescribeScalingPoliciesInput): any => ({
    ...obj,
  });
}

export type MetricName =
  | "ActivatingGameSessions"
  | "ActiveGameSessions"
  | "ActiveInstances"
  | "AvailableGameSessions"
  | "AvailablePlayerSessions"
  | "CurrentPlayerSessions"
  | "IdleInstances"
  | "PercentAvailableGameSessions"
  | "PercentIdleInstances"
  | "QueueDepth"
  | "WaitTime";

export enum PolicyType {
  RuleBased = "RuleBased",
  TargetBased = "TargetBased",
}

export enum ScalingAdjustmentType {
  ChangeInCapacity = "ChangeInCapacity",
  ExactCapacity = "ExactCapacity",
  PercentChangeInCapacity = "PercentChangeInCapacity",
}

/**
 * <p>Settings for a target-based scaling policy (see <a>ScalingPolicy</a>. A
 *         target-based policy tracks a particular fleet metric specifies a target value for the
 *         metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so
 *         that the metric returns to the target value. The target configuration specifies settings
 *         as needed for the target based policy, including the target value. </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeFleetCapacity</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateFleetCapacity</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEC2InstanceLimits</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Manage scaling policies:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a>PutScalingPolicy</a> (auto-scaling)</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeScalingPolicies</a> (auto-scaling)</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DeleteScalingPolicy</a> (auto-scaling)</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Manage fleet actions:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a>StartFleetActions</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>StopFleetActions</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 */
export interface TargetConfiguration {
  /**
   * <p>Desired value to use with a target-based scaling policy. The value must be relevant
   *         for whatever metric the scaling policy is using. For example, in a policy using the
   *         metric PercentAvailableGameSessions, the target value should be the preferred size of
   *         the fleet's buffer (the percent of capacity that should be idle and ready for new game
   *         sessions).</p>
   */
  TargetValue: number | undefined;
}

export namespace TargetConfiguration {
  export const filterSensitiveLog = (obj: TargetConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Rule that controls how a fleet is scaled. Scaling policies are uniquely identified
 *         by the combination of name and fleet ID.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeFleetCapacity</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateFleetCapacity</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEC2InstanceLimits</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Manage scaling policies:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a>PutScalingPolicy</a> (auto-scaling)</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DescribeScalingPolicies</a> (auto-scaling)</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>DeleteScalingPolicy</a> (auto-scaling)</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Manage fleet actions:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <a>StartFleetActions</a>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <a>StopFleetActions</a>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 */
export interface ScalingPolicy {
  /**
   * <p>A unique identifier for a fleet that is associated with this scaling policy.</p>
   */
  FleetId?: string;

  /**
   * <p>A descriptive label that is associated with a scaling policy. Policy names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>Current status of the scaling policy. The scaling policy can be in force only when
   *         in an <code>ACTIVE</code> status. Scaling policies can be suspended for individual
   *         fleets (see <a>StopFleetActions</a>; if suspended for a fleet, the policy
   *         status does not change. View a fleet's stopped actions by calling <a>DescribeFleetCapacity</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ACTIVE</b> -- The scaling policy can be used for
   *                 auto-scaling a fleet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPDATE_REQUESTED</b> -- A request to update the
   *                 scaling policy has been received.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>UPDATING</b> -- A change is being made to the
   *                 scaling policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETE_REQUESTED</b> -- A request to delete the
   *                 scaling policy has been received.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETING</b> -- The scaling policy is being
   *                 deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>DELETED</b> -- The scaling policy has been
   *                 deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ERROR</b> -- An error occurred in creating the
   *                 policy. It should be removed and recreated.</p>
   *             </li>
   *          </ul>
   */
  Status?: ScalingStatusType | string;

  /**
   * <p>Amount of adjustment to make, based on the scaling adjustment type.</p>
   */
  ScalingAdjustment?: number;

  /**
   * <p>The type of adjustment to make to a fleet's instance count (see <a>FleetCapacity</a>):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ChangeInCapacity</b> -- add (or subtract) the
   *                 scaling adjustment value from the current instance count. Positive values scale
   *                 up while negative values scale down.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ExactCapacity</b> -- set the instance count to the
   *                 scaling adjustment value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PercentChangeInCapacity</b> -- increase or reduce
   *                 the current instance count by the scaling adjustment, read as a percentage.
   *                 Positive values scale up while negative values scale down.</p>
   *             </li>
   *          </ul>
   */
  ScalingAdjustmentType?: ScalingAdjustmentType | string;

  /**
   * <p>Comparison operator to use when measuring a metric against the threshold
   *         value.</p>
   */
  ComparisonOperator?: ComparisonOperatorType | string;

  /**
   * <p>Metric value used to trigger a scaling event.</p>
   */
  Threshold?: number;

  /**
   * <p>Length of time (in minutes) the metric must be at or beyond the threshold before a
   *         scaling event is triggered.</p>
   */
  EvaluationPeriods?: number;

  /**
   * <p>Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For
   *             detailed descriptions of fleet metrics, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html">Monitor Amazon GameLift
   *                 with Amazon CloudWatch</a>. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>ActivatingGameSessions</b> -- Game sessions in
   *                     the process of being created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>ActiveGameSessions</b> -- Game sessions that
   *                     are currently running.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>ActiveInstances</b> -- Fleet instances that
   *                     are currently running at least one game session.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>AvailableGameSessions</b> -- Additional game
   *                     sessions that fleet could host simultaneously, given current capacity.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>AvailablePlayerSessions</b> -- Empty player
   *                     slots in currently active game sessions. This includes game sessions that are
   *                     not currently accepting players. Reserved player slots are not
   *                     included.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>CurrentPlayerSessions</b> -- Player slots in
   *                     active game sessions that are being used by a player or are reserved for a
   *                     player. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>IdleInstances</b> -- Active instances that are
   *                     currently hosting zero game sessions. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>PercentAvailableGameSessions</b> -- Unused
   *                     percentage of the total number of game sessions that a fleet could host
   *                     simultaneously, given current capacity. Use this metric for a target-based
   *                     scaling policy.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>PercentIdleInstances</b> -- Percentage of the
   *                     total number of active instances that are hosting zero game sessions.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>QueueDepth</b> -- Pending game session
   *                     placement requests, in any queue, where the current fleet is the top-priority
   *                     destination.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>WaitTime</b> -- Current wait time for pending
   *                     game session placement requests, in any queue, where the current fleet is the
   *                     top-priority destination. </p>
   *             </li>
   *          </ul>
   */
  MetricName?: MetricName | string;

  /**
   * <p>The type of scaling policy to create. For a target-based policy, set the parameter
   *                 <i>MetricName</i> to 'PercentAvailableGameSessions' and specify a
   *                 <i>TargetConfiguration</i>. For a rule-based policy set the following
   *             parameters: <i>MetricName</i>, <i>ComparisonOperator</i>,
   *                 <i>Threshold</i>, <i>EvaluationPeriods</i>,
   *                 <i>ScalingAdjustmentType</i>, and
   *                 <i>ScalingAdjustment</i>.</p>
   */
  PolicyType?: PolicyType | string;

  /**
   * <p>The settings for a target-based scaling policy.</p>
   */
  TargetConfiguration?: TargetConfiguration;
}

export namespace ScalingPolicy {
  export const filterSensitiveLog = (obj: ScalingPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeScalingPoliciesOutput {
  /**
   * <p>A collection of objects containing the scaling policies matching the
   *             request.</p>
   */
  ScalingPolicies?: ScalingPolicy[];

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace DescribeScalingPoliciesOutput {
  export const filterSensitiveLog = (obj: DescribeScalingPoliciesOutput): any => ({
    ...obj,
  });
}

export interface DescribeScriptInput {
  /**
   * <p>A unique identifier for a Realtime script to retrieve properties for. You can use either the script ID or ARN
   *             value.</p>
   */
  ScriptId: string | undefined;
}

export namespace DescribeScriptInput {
  export const filterSensitiveLog = (obj: DescribeScriptInput): any => ({
    ...obj,
  });
}

export interface DescribeScriptOutput {
  /**
   * <p>A set of properties describing the requested script.</p>
   */
  Script?: Script;
}

export namespace DescribeScriptOutput {
  export const filterSensitiveLog = (obj: DescribeScriptOutput): any => ({
    ...obj,
  });
}

export interface DescribeVpcPeeringAuthorizationsInput {}

export namespace DescribeVpcPeeringAuthorizationsInput {
  export const filterSensitiveLog = (obj: DescribeVpcPeeringAuthorizationsInput): any => ({
    ...obj,
  });
}

export interface DescribeVpcPeeringAuthorizationsOutput {
  /**
   * <p>A collection of objects that describe all valid VPC peering operations for the
   *             current AWS account.</p>
   */
  VpcPeeringAuthorizations?: VpcPeeringAuthorization[];
}

export namespace DescribeVpcPeeringAuthorizationsOutput {
  export const filterSensitiveLog = (obj: DescribeVpcPeeringAuthorizationsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface DescribeVpcPeeringConnectionsInput {
  /**
   * <p>A unique identifier for a fleet. You can use either the fleet ID or ARN value.</p>
   */
  FleetId?: string;
}

export namespace DescribeVpcPeeringConnectionsInput {
  export const filterSensitiveLog = (obj: DescribeVpcPeeringConnectionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents status information for a VPC peering connection. Status is associated
 *             with a <a>VpcPeeringConnection</a> object. Status codes and messages are
 *             provided from EC2 (see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_VpcPeeringConnectionStateReason.html">VpcPeeringConnectionStateReason</a>). Connection status information is also
 *             communicated as a fleet <a>Event</a>.</p>
 */
export interface VpcPeeringConnectionStatus {
  /**
   * <p>Code indicating the status of a VPC peering connection.</p>
   */
  Code?: string;

  /**
   * <p>Additional messaging associated with the connection status. </p>
   */
  Message?: string;
}

export namespace VpcPeeringConnectionStatus {
  export const filterSensitiveLog = (obj: VpcPeeringConnectionStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a peering connection between a VPC on one of your AWS accounts and the
 *             VPC for your Amazon GameLift fleets. This record may be for an active peering connection or a
 *             pending connection that has not yet been established.</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateVpcPeeringAuthorization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeVpcPeeringAuthorizations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteVpcPeeringAuthorization</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateVpcPeeringConnection</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeVpcPeeringConnections</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteVpcPeeringConnection</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface VpcPeeringConnection {
  /**
   * <p>A unique identifier for a fleet. This ID determines the ID of the Amazon GameLift VPC for your fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>
   *             The Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) associated with the GameLift fleet resource for this connection.
   *         </p>
   */
  FleetArn?: string;

  /**
   * <p>CIDR block of IPv4 addresses assigned to the VPC peering connection for the
   *             GameLift VPC. The peered VPC also has an IPv4 CIDR block associated with it; these
   *             blocks cannot overlap or the peering connection cannot be created. </p>
   */
  IpV4CidrBlock?: string;

  /**
   * <p>A unique identifier that is automatically assigned to the connection record. This ID
   *             is referenced in VPC peering connection events, and is used when deleting a connection
   *             with <a>DeleteVpcPeeringConnection</a>. </p>
   */
  VpcPeeringConnectionId?: string;

  /**
   * <p>The status information about the connection. Status indicates if a
   *             connection is pending, successful, or failed.</p>
   */
  Status?: VpcPeeringConnectionStatus;

  /**
   * <p>A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The
   *             VPC must be in the same Region where your fleet is deployed. Look up a VPC ID using the
   *             <a href="https://console.aws.amazon.com/vpc/">VPC Dashboard</a> in the AWS Management Console.
   *             Learn more about VPC peering in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   */
  PeerVpcId?: string;

  /**
   * <p>A unique identifier for the VPC that contains the Amazon GameLift fleet for this
   *             connection. This VPC is managed by Amazon GameLift and does not appear in your AWS account.
   *         </p>
   */
  GameLiftVpcId?: string;
}

export namespace VpcPeeringConnection {
  export const filterSensitiveLog = (obj: VpcPeeringConnection): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface DescribeVpcPeeringConnectionsOutput {
  /**
   * <p>A collection of VPC peering connection records that match the request.</p>
   */
  VpcPeeringConnections?: VpcPeeringConnection[];
}

export namespace DescribeVpcPeeringConnectionsOutput {
  export const filterSensitiveLog = (obj: DescribeVpcPeeringConnectionsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Player information for use when creating player sessions using a game session
 *         placement request with <a>StartGameSessionPlacement</a>.</p>
 */
export interface DesiredPlayerSession {
  /**
   * <p>A unique identifier for a player to associate with the player session.</p>
   */
  PlayerId?: string;

  /**
   * <p>Developer-defined information related to a player. Amazon GameLift does not use this data, so it can be formatted as needed for use in the game.</p>
   */
  PlayerData?: string;
}

export namespace DesiredPlayerSession {
  export const filterSensitiveLog = (obj: DesiredPlayerSession): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface GetGameSessionLogUrlInput {
  /**
   * <p>A unique identifier for the game session to get logs for. </p>
   */
  GameSessionId: string | undefined;
}

export namespace GetGameSessionLogUrlInput {
  export const filterSensitiveLog = (obj: GetGameSessionLogUrlInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface GetGameSessionLogUrlOutput {
  /**
   * <p>Location of the requested game session logs, available for download. This URL is
   *             valid for 15 minutes, after which S3 will reject any download request using this URL.
   *             You can request a new URL any time within the 14-day period that the logs are
   *             retained.</p>
   */
  PreSignedUrl?: string;
}

export namespace GetGameSessionLogUrlOutput {
  export const filterSensitiveLog = (obj: GetGameSessionLogUrlOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface GetInstanceAccessInput {
  /**
   * <p>A unique identifier for a fleet that contains the instance you want access to. You can use either the fleet ID
   *             or ARN value. The fleet can be in any of the following statuses:
   *             <code>ACTIVATING</code>, <code>ACTIVE</code>, or <code>ERROR</code>. Fleets with an
   *                 <code>ERROR</code> status may be accessible for a short time before they are
   *             deleted.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>A unique identifier for an instance you want to get access to. You can access an instance in any
   *             status.</p>
   */
  InstanceId: string | undefined;
}

export namespace GetInstanceAccessInput {
  export const filterSensitiveLog = (obj: GetInstanceAccessInput): any => ({
    ...obj,
  });
}

/**
 * <p>Set of credentials required to remotely access a fleet instance. Access credentials
 *         are requested by calling <a>GetInstanceAccess</a> and returned in an <a>InstanceAccess</a> object.</p>
 */
export interface InstanceCredentials {
  /**
   * <p>User login string.</p>
   */
  UserName?: string;

  /**
   * <p>Secret string. For Windows instances, the secret is a password for use with Windows
   *         Remote Desktop. For Linux instances, it is a private key (which must be saved as a
   *         <code>.pem</code> file) for use with SSH.</p>
   */
  Secret?: string;
}

export namespace InstanceCredentials {
  export const filterSensitiveLog = (obj: InstanceCredentials): any => ({
    ...obj,
  });
}

/**
 * <p>Information required to remotely connect to a fleet instance. Access is requested
 *         by calling <a>GetInstanceAccess</a>. </p>
 */
export interface InstanceAccess {
  /**
   * <p>A unique identifier for a fleet containing the instance being accessed.</p>
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for an instance being accessed.</p>
   */
  InstanceId?: string;

  /**
   * <p>IP address that is assigned to the instance.</p>
   */
  IpAddress?: string;

  /**
   * <p>Operating system that is running on the instance.</p>
   */
  OperatingSystem?: OperatingSystem | string;

  /**
   * <p>Credentials required to access the instance.</p>
   */
  Credentials?: InstanceCredentials;
}

export namespace InstanceAccess {
  export const filterSensitiveLog = (obj: InstanceAccess): any => ({
    ...obj,
    ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface GetInstanceAccessOutput {
  /**
   * <p>The connection information for a fleet instance, including IP
   *             address and access credentials.</p>
   */
  InstanceAccess?: InstanceAccess;
}

export namespace GetInstanceAccessOutput {
  export const filterSensitiveLog = (obj: GetInstanceAccessOutput): any => ({
    ...obj,
    ...(obj.InstanceAccess && { InstanceAccess: InstanceAccess.filterSensitiveLog(obj.InstanceAccess) }),
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface ListAliasesInput {
  /**
   * <p>The routing type to filter results on. Use this parameter to retrieve only aliases
   *             with a certain routing type. To retrieve all aliases, leave this parameter empty.</p>
   *         <p>Possible routing types include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>SIMPLE</b> -- The alias resolves to one specific
   *                     fleet. Use this type when routing to active fleets.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>TERMINAL</b> -- The alias does not resolve to a
   *                     fleet but instead can be used to display a message to the user. A terminal alias
   *                     throws a TerminalRoutingStrategyException with the <a>RoutingStrategy</a> message embedded.</p>
   *             </li>
   *          </ul>
   */
  RoutingStrategyType?: RoutingStrategyType | string;

  /**
   * <p>A descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace ListAliasesInput {
  export const filterSensitiveLog = (obj: ListAliasesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface ListAliasesOutput {
  /**
   * <p>A collection of alias resources that match the request parameters.</p>
   */
  Aliases?: Alias[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace ListAliasesOutput {
  export const filterSensitiveLog = (obj: ListAliasesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface ListBuildsInput {
  /**
   * <p>Build status to filter results by. To retrieve all builds, leave this parameter
   *             empty.</p>
   *         <p>Possible build statuses include the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>INITIALIZED</b> -- A new build has been defined,
   *                     but no files have been uploaded. You cannot create fleets for builds that are in
   *                     this status. When a build is successfully created, the build status is set to
   *                     this value. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>READY</b> -- The game build has been successfully
   *                     uploaded. You can now create new fleets for this build.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>FAILED</b> -- The game build upload failed. You
   *                     cannot create new fleets for this build. </p>
   *             </li>
   *          </ul>
   */
  Status?: BuildStatus | string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   */
  Limit?: number;

  /**
   * <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace ListBuildsInput {
  export const filterSensitiveLog = (obj: ListBuildsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface ListBuildsOutput {
  /**
   * <p>A collection of build resources that match the request.</p>
   */
  Builds?: Build[];

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace ListBuildsOutput {
  export const filterSensitiveLog = (obj: ListBuildsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface ListFleetsInput {
  /**
   * <p>A unique identifier for a build to return fleets for. Use this parameter to return only fleets using a specified
   *             build. Use either the build ID or ARN value. To retrieve all fleets, do not include
   *             either a BuildId and ScriptID parameter.</p>
   */
  BuildId?: string;

  /**
   * <p>A unique identifier for a Realtime script to return fleets for. Use this parameter to return only fleets using a
   *             specified script. Use either the script ID or ARN value. To retrieve all fleets, leave
   *             this parameter empty.</p>
   */
  ScriptId?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   */
  Limit?: number;

  /**
   * <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace ListFleetsInput {
  export const filterSensitiveLog = (obj: ListFleetsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface ListFleetsOutput {
  /**
   * <p>Set of fleet IDs matching the list request. You can retrieve additional information
   *             about all returned fleets by passing this result set to a call to <a>DescribeFleetAttributes</a>, <a>DescribeFleetCapacity</a>, or
   *                 <a>DescribeFleetUtilization</a>.</p>
   */
  FleetIds?: string[];

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace ListFleetsOutput {
  export const filterSensitiveLog = (obj: ListFleetsOutput): any => ({
    ...obj,
  });
}

export interface ListGameServerGroupsInput {
  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential segments.</p>
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential segment of results. Use the token returned with the previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace ListGameServerGroupsInput {
  export const filterSensitiveLog = (obj: ListGameServerGroupsInput): any => ({
    ...obj,
  });
}

export interface ListGameServerGroupsOutput {
  /**
   * <p>A collection of game server group objects that match the request.</p>
   */
  GameServerGroups?: GameServerGroup[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace ListGameServerGroupsOutput {
  export const filterSensitiveLog = (obj: ListGameServerGroupsOutput): any => ({
    ...obj,
  });
}

export enum SortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export interface ListGameServersInput {
  /**
   * <p>An identifier for the game server group to retrieve a list of game servers from.
   *             Use either the <a>GameServerGroup</a> name or ARN value.</p>
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>Indicates how to sort the returned data based on game server registration timestamp.
   *             Use ASCENDING to retrieve oldest game servers first, or use DESCENDING to retrieve
   *             newest game servers first. If this parameter is left empty, game servers
   *             are returned in no particular order.</p>
   */
  SortOrder?: SortOrder | string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential segments.</p>
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential segment of results. Use the token returned with the previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace ListGameServersInput {
  export const filterSensitiveLog = (obj: ListGameServersInput): any => ({
    ...obj,
  });
}

export interface ListGameServersOutput {
  /**
   * <p>A collection of game server objects that match the request.</p>
   */
  GameServers?: GameServer[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace ListGameServersOutput {
  export const filterSensitiveLog = (obj: ListGameServersOutput): any => ({
    ...obj,
  });
}

export interface ListScriptsInput {
  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages.</p>
   */
  Limit?: number;

  /**
   * <p>A token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace ListScriptsInput {
  export const filterSensitiveLog = (obj: ListScriptsInput): any => ({
    ...obj,
  });
}

export interface ListScriptsOutput {
  /**
   * <p>A set of properties describing the requested script.</p>
   */
  Scripts?: Script[];

  /**
   * <p>A token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace ListScriptsOutput {
  export const filterSensitiveLog = (obj: ListScriptsOutput): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>
   *             The Amazon Resource Name
   *             (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>)
   *             that is assigned to and uniquely identifies the GameLift resource that you want to retrieve
   *             tags for. GameLift resource ARNs are included in the data object for the resource, which
   *             can be retrieved by calling a List or Describe operation for the resource type. </p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>
   *             The collection of tags that have been assigned to the specified resource.
   *         </p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface PutScalingPolicyInput {
  /**
   * <p>A descriptive label that is associated with a scaling policy. Policy names do not need to be unique. A fleet can have only one scaling policy with the same name.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for a fleet to apply this policy to. You can use either the fleet ID or ARN value. The fleet
   *             cannot be in any of the following statuses: ERROR or DELETING.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>Amount of adjustment to make, based on the scaling adjustment type.</p>
   */
  ScalingAdjustment?: number;

  /**
   * <p>The type of adjustment to make to a fleet's instance count (see <a>FleetCapacity</a>):</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>ChangeInCapacity</b> -- add (or subtract) the
   *                     scaling adjustment value from the current instance count. Positive values scale
   *                     up while negative values scale down.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>ExactCapacity</b> -- set the instance count to the
   *                     scaling adjustment value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>PercentChangeInCapacity</b> -- increase or reduce
   *                     the current instance count by the scaling adjustment, read as a percentage.
   *                     Positive values scale up while negative values scale down; for example, a value
   *                     of "-10" scales the fleet down by 10%.</p>
   *             </li>
   *          </ul>
   */
  ScalingAdjustmentType?: ScalingAdjustmentType | string;

  /**
   * <p>Metric value used to trigger a scaling event.</p>
   */
  Threshold?: number;

  /**
   * <p>Comparison operator to use when measuring the metric against the threshold
   *             value.</p>
   */
  ComparisonOperator?: ComparisonOperatorType | string;

  /**
   * <p>Length of time (in minutes) the metric must be at or beyond the threshold before a
   *             scaling event is triggered.</p>
   */
  EvaluationPeriods?: number;

  /**
   * <p>Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. For
   *             detailed descriptions of fleet metrics, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/monitoring-cloudwatch.html">Monitor Amazon GameLift
   *                 with Amazon CloudWatch</a>. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>ActivatingGameSessions</b> -- Game sessions in
   *                     the process of being created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>ActiveGameSessions</b> -- Game sessions that
   *                     are currently running.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>ActiveInstances</b> -- Fleet instances that
   *                     are currently running at least one game session.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>AvailableGameSessions</b> -- Additional game
   *                     sessions that fleet could host simultaneously, given current capacity.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>AvailablePlayerSessions</b> -- Empty player
   *                     slots in currently active game sessions. This includes game sessions that are
   *                     not currently accepting players. Reserved player slots are not
   *                     included.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>CurrentPlayerSessions</b> -- Player slots in
   *                     active game sessions that are being used by a player or are reserved for a
   *                     player. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>IdleInstances</b> -- Active instances that are
   *                     currently hosting zero game sessions. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>PercentAvailableGameSessions</b> -- Unused
   *                     percentage of the total number of game sessions that a fleet could host
   *                     simultaneously, given current capacity. Use this metric for a target-based
   *                     scaling policy.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>PercentIdleInstances</b> -- Percentage of the
   *                     total number of active instances that are hosting zero game sessions.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>QueueDepth</b> -- Pending game session
   *                     placement requests, in any queue, where the current fleet is the top-priority
   *                     destination.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>WaitTime</b> -- Current wait time for pending
   *                     game session placement requests, in any queue, where the current fleet is the
   *                     top-priority destination. </p>
   *             </li>
   *          </ul>
   */
  MetricName: MetricName | string | undefined;

  /**
   * <p>The type of scaling policy to create. For a target-based policy, set the parameter
   *                 <i>MetricName</i> to 'PercentAvailableGameSessions' and specify a
   *                 <i>TargetConfiguration</i>. For a rule-based policy set the following
   *             parameters: <i>MetricName</i>, <i>ComparisonOperator</i>,
   *                 <i>Threshold</i>, <i>EvaluationPeriods</i>,
   *                 <i>ScalingAdjustmentType</i>, and
   *                 <i>ScalingAdjustment</i>.</p>
   */
  PolicyType?: PolicyType | string;

  /**
   * <p>The settings for a target-based scaling policy.</p>
   */
  TargetConfiguration?: TargetConfiguration;
}

export namespace PutScalingPolicyInput {
  export const filterSensitiveLog = (obj: PutScalingPolicyInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface PutScalingPolicyOutput {
  /**
   * <p>A descriptive label that is associated with a scaling policy. Policy names do not need to be unique.</p>
   */
  Name?: string;
}

export namespace PutScalingPolicyOutput {
  export const filterSensitiveLog = (obj: PutScalingPolicyOutput): any => ({
    ...obj,
  });
}

export interface RegisterGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running.
   *             Use either the <a>GameServerGroup</a> name or ARN value.</p>
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server to register.
   *             Game server IDs are developer-defined and must be unique across all game server groups in your AWS account.</p>
   */
  GameServerId: string | undefined;

  /**
   * <p>The unique identifier for the instance where the game server is running. This ID is
   *             available in the instance metadata. EC2 instance IDs
   *             use a 17-character format, for example: <code>i-1234567890abcdef0</code>.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Information that is needed to make inbound client connections to the game server. This
   *             might include the IP address and port, DNS name, and other information.</p>
   */
  ConnectionInfo?: string;

  /**
   * <p>A set of custom game server properties, formatted as a single string value. This data
   *             is passed to a game client or service when it requests information on game servers using
   *                 <a>ListGameServers</a> or <a>ClaimGameServer</a>. </p>
   */
  GameServerData?: string;
}

export namespace RegisterGameServerInput {
  export const filterSensitiveLog = (obj: RegisterGameServerInput): any => ({
    ...obj,
  });
}

export interface RegisterGameServerOutput {
  /**
   * <p>Object that describes the newly registered game server.</p>
   */
  GameServer?: GameServer;
}

export namespace RegisterGameServerOutput {
  export const filterSensitiveLog = (obj: RegisterGameServerOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface RequestUploadCredentialsInput {
  /**
   * <p>A unique identifier for a build to get credentials for. You can use either the build ID or ARN value. </p>
   */
  BuildId: string | undefined;
}

export namespace RequestUploadCredentialsInput {
  export const filterSensitiveLog = (obj: RequestUploadCredentialsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface RequestUploadCredentialsOutput {
  /**
   * <p>AWS credentials required when uploading a game build to the storage location.
   *             These credentials have a limited lifespan and are valid only for the build they were
   *             issued for.</p>
   */
  UploadCredentials?: AwsCredentials;

  /**
   * <p>Amazon S3 path and key, identifying where the game build files are
   *             stored.</p>
   */
  StorageLocation?: S3Location;
}

export namespace RequestUploadCredentialsOutput {
  export const filterSensitiveLog = (obj: RequestUploadCredentialsOutput): any => ({
    ...obj,
    ...(obj.UploadCredentials && { UploadCredentials: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface ResolveAliasInput {
  /**
   * <p>The unique identifier of the alias that you want to retrieve a fleet ID for. You can
   *             use either the alias ID or ARN value.</p>
   */
  AliasId: string | undefined;
}

export namespace ResolveAliasInput {
  export const filterSensitiveLog = (obj: ResolveAliasInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface ResolveAliasOutput {
  /**
   * <p>The fleet identifier that the alias is pointing to.</p>
   */
  FleetId?: string;

  /**
   * <p>
   *            The Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) associated with the GameLift fleet resource that this alias points to.
   *         </p>
   */
  FleetArn?: string;
}

export namespace ResolveAliasOutput {
  export const filterSensitiveLog = (obj: ResolveAliasOutput): any => ({
    ...obj,
  });
}

export interface ResumeGameServerGroupInput {
  /**
   * <p>A unique identifier for the game server group. Use either the <a>GameServerGroup</a> name or ARN value.</p>
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The activity to resume for this game server group.</p>
   */
  ResumeActions: (GameServerGroupAction | string)[] | undefined;
}

export namespace ResumeGameServerGroupInput {
  export const filterSensitiveLog = (obj: ResumeGameServerGroupInput): any => ({
    ...obj,
  });
}

export interface ResumeGameServerGroupOutput {
  /**
   * <p>An object that describes the game server group resource, with the
   *                 <code>SuspendedActions</code> property updated to reflect the resumed
   *             activity.</p>
   */
  GameServerGroup?: GameServerGroup;
}

export namespace ResumeGameServerGroupOutput {
  export const filterSensitiveLog = (obj: ResumeGameServerGroupOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface SearchGameSessionsInput {
  /**
   * <p>A unique identifier for a fleet to search for active game sessions. You can use either the fleet ID or ARN
   *             value. Each request must reference either a fleet ID or alias ID, but not both.</p>
   */
  FleetId?: string;

  /**
   * <p>A unique identifier for an alias associated with the fleet to search for active game sessions. You can use either
   *             the alias ID or ARN value. Each request must reference either a fleet ID or alias ID,
   *             but not both.</p>
   */
  AliasId?: string;

  /**
   * <p>String containing the search criteria for the session search. If no filter
   *             expression is included, the request returns results for all game sessions in the fleet
   *             that are in <code>ACTIVE</code> status.</p>
   *         <p>A filter expression can contain one or multiple conditions. Each condition consists
   *             of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>Operand</b> -- Name of a game session
   *                     attribute. Valid values are <code>gameSessionName</code>,
   *                         <code>gameSessionId</code>, <code>gameSessionProperties</code>,
   *                         <code>maximumSessions</code>, <code>creationTimeMillis</code>,
   *                         <code>playerSessionCount</code>,
   *                     <code>hasAvailablePlayerSessions</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Comparator</b> -- Valid comparators are:
   *                         <code>=</code>, <code><></code>, <code><</code>, <code>></code>,
   *                         <code><=</code>, <code>>=</code>. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Value</b> -- Value to be searched for. Values
   *                     may be numbers, boolean values (true/false) or strings depending on the operand.
   *                     String values are case sensitive and must be enclosed in single quotes. Special
   *                     characters must be escaped. Boolean and string values can only be used with the
   *                     comparators <code>=</code> and <code><></code>. For example, the following
   *                     filter expression searches on <code>gameSessionName</code>:
   *                         "<code>FilterExpression": "gameSessionName = 'Matt\\'s Awesome Game
   *                         1'"</code>. </p>
   *             </li>
   *          </ul>
   *         <p>To chain multiple conditions in a single expression, use the logical keywords
   *                 <code>AND</code>, <code>OR</code>, and <code>NOT</code> and parentheses as needed.
   *             For example: <code>x AND y AND NOT z</code>, <code>NOT (x OR y)</code>.</p>
   *         <p>Session search evaluates conditions from left to right using the following
   *             precedence rules:</p>
   *         <ol>
   *             <li>
   *                 <p>
   *                     <code>=</code>, <code><></code>, <code><</code>, <code>></code>,
   *                         <code><=</code>, <code>>=</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>Parentheses</p>
   *             </li>
   *             <li>
   *                 <p>NOT</p>
   *             </li>
   *             <li>
   *                 <p>AND</p>
   *             </li>
   *             <li>
   *                 <p>OR</p>
   *             </li>
   *          </ol>
   *         <p>For example, this filter expression retrieves game sessions hosting at least ten
   *             players that have an open player slot: <code>"maximumSessions>=10 AND
   *                 hasAvailablePlayerSessions=true"</code>. </p>
   */
  FilterExpression?: string;

  /**
   * <p>Instructions on how to sort the search results. If no sort expression is included,
   *             the request returns results in random order. A sort expression consists of the following
   *             elements:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>Operand</b> -- Name of a game session attribute.
   *                     Valid values are <code>gameSessionName</code>, <code>gameSessionId</code>,
   *                         <code>gameSessionProperties</code>, <code>maximumSessions</code>,
   *                         <code>creationTimeMillis</code>, <code>playerSessionCount</code>,
   *                         <code>hasAvailablePlayerSessions</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>Order</b> -- Valid sort orders are <code>ASC</code>
   *                     (ascending) and <code>DESC</code> (descending).</p>
   *             </li>
   *          </ul>
   *         <p>For example, this sort expression returns the oldest active sessions first:
   *                 <code>"SortExpression": "creationTimeMillis ASC"</code>. Results with a null value
   *             for the sort operand are returned at the end of the list.</p>
   */
  SortExpression?: string;

  /**
   * <p>The maximum number of results to return. Use this parameter with <code>NextToken</code> to get results as a set of sequential pages. The maximum number of results returned is 20, even if this value is not set
   *             or is set higher than 20. </p>
   */
  Limit?: number;

  /**
   * <p>Token that indicates the start of the next sequential page of results. Use the token that is returned with a previous call to this operation. To start at the beginning of the result set, do not specify a value.</p>
   */
  NextToken?: string;
}

export namespace SearchGameSessionsInput {
  export const filterSensitiveLog = (obj: SearchGameSessionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface SearchGameSessionsOutput {
  /**
   * <p>A collection of objects containing game session properties for each session matching
   *             the request.</p>
   */
  GameSessions?: GameSession[];

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this operation. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;
}

export namespace SearchGameSessionsOutput {
  export const filterSensitiveLog = (obj: SearchGameSessionsOutput): any => ({
    ...obj,
  });
}

export interface StartFleetActionsInput {
  /**
   * <p>A unique identifier for a fleet to start actions on.  You can use either the fleet ID or ARN value.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>List of actions to restart on the fleet.</p>
   */
  Actions: (FleetAction | string)[] | undefined;
}

export namespace StartFleetActionsInput {
  export const filterSensitiveLog = (obj: StartFleetActionsInput): any => ({
    ...obj,
  });
}

export interface StartFleetActionsOutput {}

export namespace StartFleetActionsOutput {
  export const filterSensitiveLog = (obj: StartFleetActionsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface StartGameSessionPlacementInput {
  /**
   * <p>A unique identifier to assign to the new game session placement. This value is
   *         developer-defined. The value must be unique across all Regions and cannot be reused
   *         unless you are resubmitting a canceled or timed-out placement request.</p>
   */
  PlacementId: string | undefined;

  /**
   * <p>Name of the queue to use to place the new game session. You can use either the queue name
   *             or ARN value. </p>
   */
  GameSessionQueueName: string | undefined;

  /**
   * <p>Set of custom properties for a game session, formatted as key:value pairs. These properties are passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   */
  GameProperties?: GameProperty[];

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   */
  MaximumPlayerSessionCount: number | undefined;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   */
  GameSessionName?: string;

  /**
   * <p>Set of values, expressed in milliseconds, indicating the amount of latency that a player experiences when connected to AWS Regions. This information is used to try to place the new game session where
   *         it can offer the best possible gameplay experience for the players. </p>
   */
  PlayerLatencies?: PlayerLatency[];

  /**
   * <p>Set of information on each player to create a player session for.</p>
   */
  DesiredPlayerSessions?: DesiredPlayerSession[];

  /**
   * <p>Set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>).</p>
   */
  GameSessionData?: string;
}

export namespace StartGameSessionPlacementInput {
  export const filterSensitiveLog = (obj: StartGameSessionPlacementInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface StartGameSessionPlacementOutput {
  /**
   * <p>Object that describes the newly created game session placement. This object
   *         includes all the information provided in the request, as well as start/end time stamps
   *         and placement status. </p>
   */
  GameSessionPlacement?: GameSessionPlacement;
}

export namespace StartGameSessionPlacementOutput {
  export const filterSensitiveLog = (obj: StartGameSessionPlacementOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface StartMatchBackfillInput {
  /**
   * <p>A unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of
   *             a UUID. Use this identifier to track the match backfill ticket status and retrieve match
   *             results.</p>
   */
  TicketId?: string;

  /**
   * <p>Name of the matchmaker to use for this request. You can use either the configuration
   *             name or ARN value. The ARN of the matchmaker that was used with the original game
   *             session is listed in the <a>GameSession</a> object,
   *                 <code>MatchmakerData</code> property.</p>
   */
  ConfigurationName: string | undefined;

  /**
   * <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) that is assigned to a game session and uniquely identifies it. This is the same as the game session ID.</p>
   */
  GameSessionArn?: string;

  /**
   * <p>Match information on all players that are currently assigned to the game session.
   *             This information is used by the matchmaker to find new players and add them to the
   *             existing game.</p>
   *         <ul>
   *             <li>
   *                 <p>PlayerID, PlayerAttributes, Team -\\- This information is maintained in the
   *                     <a>GameSession</a> object, <code>MatchmakerData</code> property,
   *                     for all players who are currently assigned to the game session. The matchmaker
   *                     data is in JSON syntax, formatted as a string. For more details, see <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-server.html#match-server-data">
   *                         Match Data</a>. </p>
   *             </li>
   *             <li>
   *                 <p>LatencyInMs -\\- If the matchmaker uses player latency, include a latency
   *                     value, in milliseconds, for the Region that the game session is currently in. Do
   *                     not include latency values for any other Region.</p>
   *             </li>
   *          </ul>
   */
  Players: Player[] | undefined;
}

export namespace StartMatchBackfillInput {
  export const filterSensitiveLog = (obj: StartMatchBackfillInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface StartMatchBackfillOutput {
  /**
   * <p>Ticket representing the backfill matchmaking request. This object includes the
   *             information in the request, ticket status, and match results as generated during the
   *             matchmaking process.</p>
   */
  MatchmakingTicket?: MatchmakingTicket;
}

export namespace StartMatchBackfillOutput {
  export const filterSensitiveLog = (obj: StartMatchBackfillOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface StartMatchmakingInput {
  /**
   * <p>A unique identifier for a matchmaking ticket. If no ticket ID is specified here, Amazon GameLift will generate one in the form of
   *             a UUID. Use this identifier to track the matchmaking ticket status and retrieve match
   *             results.</p>
   */
  TicketId?: string;

  /**
   * <p>Name of the matchmaking configuration to use for this request. Matchmaking
   *             configurations must exist in the same Region as this request. You can use either the
   *             configuration name or ARN value.</p>
   */
  ConfigurationName: string | undefined;

  /**
   * <p>Information on each player to be matched. This information must include a player
   *             ID, and may contain player attributes and latency data to be used in the matchmaking
   *             process. After a successful match, <code>Player</code> objects contain the name of the
   *             team the player is assigned to.</p>
   */
  Players: Player[] | undefined;
}

export namespace StartMatchmakingInput {
  export const filterSensitiveLog = (obj: StartMatchmakingInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface StartMatchmakingOutput {
  /**
   * <p>Ticket representing the matchmaking request. This object include the information
   *             included in the request, ticket status, and match results as generated during the
   *             matchmaking process.</p>
   */
  MatchmakingTicket?: MatchmakingTicket;
}

export namespace StartMatchmakingOutput {
  export const filterSensitiveLog = (obj: StartMatchmakingOutput): any => ({
    ...obj,
  });
}

export interface StopFleetActionsInput {
  /**
   * <p>A unique identifier for a fleet to stop actions on.  You can use either the fleet ID or ARN value.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>List of actions to suspend on the fleet. </p>
   */
  Actions: (FleetAction | string)[] | undefined;
}

export namespace StopFleetActionsInput {
  export const filterSensitiveLog = (obj: StopFleetActionsInput): any => ({
    ...obj,
  });
}

export interface StopFleetActionsOutput {}

export namespace StopFleetActionsOutput {
  export const filterSensitiveLog = (obj: StopFleetActionsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface StopGameSessionPlacementInput {
  /**
   * <p>A unique identifier for a game session placement to cancel.</p>
   */
  PlacementId: string | undefined;
}

export namespace StopGameSessionPlacementInput {
  export const filterSensitiveLog = (obj: StopGameSessionPlacementInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface StopGameSessionPlacementOutput {
  /**
   * <p>Object that describes the canceled game session placement, with
   *         <code>CANCELLED</code> status and an end time stamp. </p>
   */
  GameSessionPlacement?: GameSessionPlacement;
}

export namespace StopGameSessionPlacementOutput {
  export const filterSensitiveLog = (obj: StopGameSessionPlacementOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface StopMatchmakingInput {
  /**
   * <p>A unique identifier for a matchmaking ticket.</p>
   */
  TicketId: string | undefined;
}

export namespace StopMatchmakingInput {
  export const filterSensitiveLog = (obj: StopMatchmakingInput): any => ({
    ...obj,
  });
}

export interface StopMatchmakingOutput {}

export namespace StopMatchmakingOutput {
  export const filterSensitiveLog = (obj: StopMatchmakingOutput): any => ({
    ...obj,
  });
}

export interface SuspendGameServerGroupInput {
  /**
   * <p>A unique identifier for the game server group. Use either the <a>GameServerGroup</a> name or ARN value.</p>
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The activity to suspend for this game server group.</p>
   */
  SuspendActions: (GameServerGroupAction | string)[] | undefined;
}

export namespace SuspendGameServerGroupInput {
  export const filterSensitiveLog = (obj: SuspendGameServerGroupInput): any => ({
    ...obj,
  });
}

export interface SuspendGameServerGroupOutput {
  /**
   * <p>An object that describes the game server group resource, with the
   *                 <code>SuspendedActions</code> property updated to reflect the suspended
   *             activity.</p>
   */
  GameServerGroup?: GameServerGroup;
}

export namespace SuspendGameServerGroupOutput {
  export const filterSensitiveLog = (obj: SuspendGameServerGroupOutput): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>
   *             The Amazon Resource Name
   *             (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>)
   *             that is assigned to and uniquely identifies the GameLift resource that you want to assign
   *             tags to. GameLift resource ARNs are included in the data object for the resource, which
   *             can be retrieved by calling a List or Describe operation for the resource type. </p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of one or more tags to assign to the specified GameLift resource.
   *             Tags are developer-defined and structured as key-value pairs.
   *             The maximum tag limit may be lower than stated. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html"> Tagging AWS Resources</a>
   *             for actual tagging limits.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) that is assigned to and
   *             uniquely identifies the GameLift resource that you want to remove tags from. GameLift
   *             resource ARNs are included in the data object for the resource, which can be retrieved
   *             by calling a List or Describe operation for the resource type. </p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of one or more tag keys to remove from the specified GameLift resource. An
   *             AWS resource can have only one tag with a specific tag key, so specifying the tag key
   *             identifies which tag to remove. </p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface UpdateAliasInput {
  /**
   * <p>A unique identifier for the alias that you want to update. You can use either the
   *             alias ID or ARN value.</p>
   */
  AliasId: string | undefined;

  /**
   * <p>A descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>A human-readable description of the alias.</p>
   */
  Description?: string;

  /**
   * <p>The routing configuration, including routing type and fleet target, for the
   *             alias.</p>
   */
  RoutingStrategy?: RoutingStrategy;
}

export namespace UpdateAliasInput {
  export const filterSensitiveLog = (obj: UpdateAliasInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface UpdateAliasOutput {
  /**
   * <p>The updated alias resource.</p>
   */
  Alias?: Alias;
}

export namespace UpdateAliasOutput {
  export const filterSensitiveLog = (obj: UpdateAliasOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface UpdateBuildInput {
  /**
   * <p>A unique identifier for a build to update. You can use either the build ID or ARN value.  </p>
   */
  BuildId: string | undefined;

  /**
   * <p>A descriptive label that is associated with a build. Build names do not need to be unique. </p>
   */
  Name?: string;

  /**
   * <p>Version information that is associated with a build or script. Version strings do not need to be unique.</p>
   */
  Version?: string;
}

export namespace UpdateBuildInput {
  export const filterSensitiveLog = (obj: UpdateBuildInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface UpdateBuildOutput {
  /**
   * <p>The updated build resource.</p>
   */
  Build?: Build;
}

export namespace UpdateBuildOutput {
  export const filterSensitiveLog = (obj: UpdateBuildOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface UpdateFleetAttributesInput {
  /**
   * <p>A unique identifier for a fleet to update attribute metadata for. You can use either the fleet ID or ARN
   *             value.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>A descriptive label that is associated with a fleet. Fleet names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>Human-readable description of a fleet.</p>
   */
  Description?: string;

  /**
   * <p>Game session protection policy to apply to all new instances created in this fleet.
   *             Instances that already exist are not affected. You can set protection for individual
   *             instances using <a>UpdateGameSession</a>.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>NoProtection</b> -- The game session can be
   *                     terminated during a scale-down event.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>FullProtection</b> -- If the game session is in an
   *                         <code>ACTIVE</code> status, it cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   */
  NewGameSessionProtectionPolicy?: ProtectionPolicy | string;

  /**
   * <p>Policy that limits the number of game sessions an individual player can create over
   *             a span of time. </p>
   */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;

  /**
   * <p>Names of metric groups to include this fleet in. Amazon CloudWatch uses a fleet
   *             metric group is to aggregate metrics from multiple fleets. Use an existing metric group
   *             name to add this fleet to the group. Or use a new name to create a new metric group. A
   *             fleet can only be included in one metric group at a time.</p>
   */
  MetricGroups?: string[];
}

export namespace UpdateFleetAttributesInput {
  export const filterSensitiveLog = (obj: UpdateFleetAttributesInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface UpdateFleetAttributesOutput {
  /**
   * <p>A unique identifier for a fleet that was updated. Use either the fleet ID or ARN value.</p>
   */
  FleetId?: string;
}

export namespace UpdateFleetAttributesOutput {
  export const filterSensitiveLog = (obj: UpdateFleetAttributesOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface UpdateFleetCapacityInput {
  /**
   * <p>A unique identifier for a fleet to update capacity for. You can use either the fleet ID or ARN value.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>Number of EC2 instances you want this fleet to host.</p>
   */
  DesiredInstances?: number;

  /**
   * <p>The minimum value allowed for the fleet's instance count. Default if not set is
   *             0.</p>
   */
  MinSize?: number;

  /**
   * <p>The maximum value allowed for the fleet's instance count. Default if not set is
   *             1.</p>
   */
  MaxSize?: number;
}

export namespace UpdateFleetCapacityInput {
  export const filterSensitiveLog = (obj: UpdateFleetCapacityInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface UpdateFleetCapacityOutput {
  /**
   * <p>A unique identifier for a fleet that was updated.</p>
   */
  FleetId?: string;
}

export namespace UpdateFleetCapacityOutput {
  export const filterSensitiveLog = (obj: UpdateFleetCapacityOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface UpdateFleetPortSettingsInput {
  /**
   * <p>A unique identifier for a fleet to update port settings for. You can use either the fleet ID or ARN
   *             value.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>A collection of port settings to be added to the fleet resource.</p>
   */
  InboundPermissionAuthorizations?: IpPermission[];

  /**
   * <p>A collection of port settings to be removed from the fleet resource.</p>
   */
  InboundPermissionRevocations?: IpPermission[];
}

export namespace UpdateFleetPortSettingsInput {
  export const filterSensitiveLog = (obj: UpdateFleetPortSettingsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface UpdateFleetPortSettingsOutput {
  /**
   * <p>A unique identifier for a fleet that was updated.</p>
   */
  FleetId?: string;
}

export namespace UpdateFleetPortSettingsOutput {
  export const filterSensitiveLog = (obj: UpdateFleetPortSettingsOutput): any => ({
    ...obj,
  });
}

export enum GameServerHealthCheck {
  HEALTHY = "HEALTHY",
}

export interface UpdateGameServerInput {
  /**
   * <p>A unique identifier for the game server group where the game server is running.
   *             Use either the <a>GameServerGroup</a> name or ARN value.</p>
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>A custom string that uniquely identifies the game server to update.</p>
   */
  GameServerId: string | undefined;

  /**
   * <p>A set of custom game server properties, formatted as a single string value. This data
   *             is passed to a game client or service when it requests information on game servers using
   *                 <a>ListGameServers</a> or <a>ClaimGameServer</a>. </p>
   */
  GameServerData?: string;

  /**
   * <p>Indicates whether the game server is available or is currently hosting
   *             gameplay.</p>
   */
  UtilizationStatus?: GameServerUtilizationStatus | string;

  /**
   * <p>Indicates health status of the game server. A request that includes this parameter
   *             updates the game server's <i>LastHealthCheckTime</i> timestamp. </p>
   */
  HealthCheck?: GameServerHealthCheck | string;
}

export namespace UpdateGameServerInput {
  export const filterSensitiveLog = (obj: UpdateGameServerInput): any => ({
    ...obj,
  });
}

export interface UpdateGameServerOutput {
  /**
   * <p>Object that describes the newly updated game server.</p>
   */
  GameServer?: GameServer;
}

export namespace UpdateGameServerOutput {
  export const filterSensitiveLog = (obj: UpdateGameServerOutput): any => ({
    ...obj,
  });
}

export interface UpdateGameServerGroupInput {
  /**
   * <p>A unique identifier for the game server group. Use either the <a>GameServerGroup</a> name or ARN value.</p>
   */
  GameServerGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (<a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/s3-arn-format.html">ARN</a>) for an IAM role that
   *             allows Amazon GameLift to access your EC2 Auto Scaling groups.</p>
   */
  RoleArn?: string;

  /**
   * <p>An updated list of EC2 instance types to use in the Auto Scaling group. The instance
   *             definitions must specify at least two different instance types that are supported by
   *             GameLift FleetIQ. This updated list replaces the entire current list of instance definitions for
   *             the game server group. For more information on instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">EC2 Instance
   *                 Types</a> in the <i>Amazon EC2 User Guide</i>. You can optionally
   *             specify capacity weighting for each instance type. If no weight value is specified for
   *             an instance type, it is set to the default value "1". For more information about
   *             capacity weighting, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-weighting.html"> Instance Weighting for
   *                 Amazon EC2 Auto Scaling</a> in the Amazon EC2 Auto Scaling User Guide.</p>
   */
  InstanceDefinitions?: InstanceDefinition[];

  /**
   * <p>A flag that indicates whether instances in the game server group are protected
   *             from early termination. Unprotected instances that have active game servers running might
   *             be terminated during a scale-down event, causing players to be dropped from the game.
   *             Protected instances cannot be terminated while there are active game servers running except
   *             in the event of a forced game server group deletion (see ). An exception to this is with Spot
   *             Instances, which can be terminated by AWS regardless of protection status. This property is set to <code>NO_PROTECTION</code> by default.</p>
   */
  GameServerProtectionPolicy?: GameServerProtectionPolicy | string;

  /**
   * <p>Indicates how GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances in the
   *             game server group. Method options include the following:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>SPOT_ONLY</code> - Only Spot Instances are used in the game server group. If Spot
   *                     Instances are unavailable or not viable for game hosting, the game server group
   *                     provides no hosting capacity until Spot Instances can again be used. Until then,
   *                     no new instances are started, and the existing nonviable Spot Instances are
   *                     terminated (after current gameplay ends) and are not replaced.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SPOT_PREFERRED</code> - (default value) Spot Instances are used whenever available in
   *                     the game server group. If Spot Instances are unavailable, the game server group
   *                     continues to provide hosting capacity by falling back to On-Demand Instances.
   *                     Existing nonviable Spot Instances are terminated (after current gameplay ends)
   *                     and are replaced with new On-Demand Instances.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ON_DEMAND_ONLY</code> - Only On-Demand Instances are used in the game
   *                     server group. No Spot Instances are used, even when available, while this
   *                     balancing strategy is in force.</p>
   *             </li>
   *          </ul>
   */
  BalancingStrategy?: BalancingStrategy | string;
}

export namespace UpdateGameServerGroupInput {
  export const filterSensitiveLog = (obj: UpdateGameServerGroupInput): any => ({
    ...obj,
  });
}

export interface UpdateGameServerGroupOutput {
  /**
   * <p>An object that describes the game server group resource with updated properties. </p>
   */
  GameServerGroup?: GameServerGroup;
}

export namespace UpdateGameServerGroupOutput {
  export const filterSensitiveLog = (obj: UpdateGameServerGroupOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface UpdateGameSessionInput {
  /**
   * <p>A unique identifier for the game session to update. </p>
   */
  GameSessionId: string | undefined;

  /**
   * <p>The maximum number of players that can be connected simultaneously to the game session.</p>
   */
  MaximumPlayerSessionCount?: number;

  /**
   * <p>A descriptive label that is associated with a game session. Session names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>Policy determining whether or not the game session accepts new players.</p>
   */
  PlayerSessionCreationPolicy?: PlayerSessionCreationPolicy | string;

  /**
   * <p>Game session protection policy to apply to this game session only.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <b>NoProtection</b> -- The game session can be
   *                     terminated during a scale-down event.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <b>FullProtection</b> -- If the game session is in an
   *                         <code>ACTIVE</code> status, it cannot be terminated during a scale-down
   *                     event.</p>
   *             </li>
   *          </ul>
   */
  ProtectionPolicy?: ProtectionPolicy | string;
}

export namespace UpdateGameSessionInput {
  export const filterSensitiveLog = (obj: UpdateGameSessionInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface UpdateGameSessionOutput {
  /**
   * <p>The updated game session metadata.</p>
   */
  GameSession?: GameSession;
}

export namespace UpdateGameSessionOutput {
  export const filterSensitiveLog = (obj: UpdateGameSessionOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface UpdateGameSessionQueueInput {
  /**
   * <p>A descriptive label that is associated with game session queue. Queue names must be unique within each Region. You can use either the queue ID or ARN value. </p>
   */
  Name: string | undefined;

  /**
   * <p>The maximum time, in seconds, that a new game session placement request remains in the queue. When a request exceeds this time, the game session placement changes to a <code>TIMED_OUT</code> status.</p>
   */
  TimeoutInSeconds?: number;

  /**
   * <p>A collection of latency policies to apply when processing game sessions placement requests with
   *             player latency information. Multiple policies are evaluated in order of the maximum latency value,
   *             starting with the lowest latency values. With just one policy, the policy is enforced at the start of the game session
   *             placement for the duration period. With multiple policies, each policy is enforced consecutively for its duration period.
   *             For example, a queue might enforce a 60-second policy followed by a 120-second policy, and then no policy for the
   *             remainder of the placement. When updating policies, provide a complete collection of
   *             policies.</p>
   */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[];

  /**
   * <p>A list of fleets that can be used to fulfill game session placement requests in the queue.
   *     Fleets are identified by either a fleet ARN or a fleet alias ARN. Destinations are listed in default preference order. When updating this list, provide a complete list of destinations.</p>
   */
  Destinations?: GameSessionQueueDestination[];
}

export namespace UpdateGameSessionQueueInput {
  export const filterSensitiveLog = (obj: UpdateGameSessionQueueInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface UpdateGameSessionQueueOutput {
  /**
   * <p>An object that describes the newly updated game session queue.</p>
   */
  GameSessionQueue?: GameSessionQueue;
}

export namespace UpdateGameSessionQueueOutput {
  export const filterSensitiveLog = (obj: UpdateGameSessionQueueOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface UpdateMatchmakingConfigurationInput {
  /**
   * <p>A unique identifier for a matchmaking configuration to update. You can use either the configuration name or ARN value. </p>
   */
  Name: string | undefined;

  /**
   * <p>A descriptive label that is associated with matchmaking configuration.</p>
   */
  Description?: string;

  /**
   * <p>Amazon Resource Name (<a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a>) that is assigned to a GameLift game session queue resource and uniquely identifies it. ARNs are unique across all Regions. Queues can be located in any Region. Queues are used to start new
   *             GameLift-hosted game sessions for matches that are created with this matchmaking
   *             configuration. If <code>FlexMatchMode</code> is set to <code>STANDALONE</code>, do not
   *             set this parameter.</p>
   */
  GameSessionQueueArns?: string[];

  /**
   * <p>The maximum duration, in seconds, that a matchmaking ticket can remain in process
   *             before timing out. Requests that fail due to timing out can be resubmitted as
   *             needed.</p>
   */
  RequestTimeoutSeconds?: number;

  /**
   * <p>The length of time (in seconds) to wait for players to accept a proposed match, if
   *             acceptance is required. If any player rejects the match or fails to accept before the
   *             timeout, the tickets are returned to the ticket pool and continue to be evaluated for an
   *             acceptable match.</p>
   */
  AcceptanceTimeoutSeconds?: number;

  /**
   * <p>A flag that indicates whether a match that was created with this configuration must be
   *             accepted by the matched players. To require acceptance, set to TRUE. With this option
   *             enabled, matchmaking tickets use the status <code>REQUIRES_ACCEPTANCE</code> to indicate
   *             when a completed potential match is waiting for player acceptance. </p>
   */
  AcceptanceRequired?: boolean;

  /**
   * <p>A unique identifier for a matchmaking rule set to use with this configuration. You can use either the rule set name or ARN
   *             value. A matchmaking configuration can only use rule sets that are defined in the same
   *             Region.</p>
   */
  RuleSetName?: string;

  /**
   * <p>An SNS topic ARN that is set up to receive matchmaking notifications. See <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html">
   *                 Setting up Notifications for Matchmaking</a> for more information.</p>
   */
  NotificationTarget?: string;

  /**
   * <p>The number of player slots in a match to keep open for future players. For example,
   *             assume that the configuration's rule set specifies a match for a single 12-person team. If
   *             the additional player count is set to 2, only 10 players are initially selected for the match. This parameter is not used if <code>FlexMatchMode</code> is set to
   *                 <code>STANDALONE</code>.</p>
   */
  AdditionalPlayerCount?: number;

  /**
   * <p>Information to add to all events related to the matchmaking configuration. </p>
   */
  CustomEventData?: string;

  /**
   * <p>A set of custom properties for a game session, formatted as key-value pairs. These properties are passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <a>GameSession</a>
   *             object that is created for a successful match.  This parameter is not used if
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   */
  GameProperties?: GameProperty[];

  /**
   * <p>A set of custom game session properties, formatted as a single string value. This data is passed to a game server process in the
   *     <a>GameSession</a> object with a request to start a new game session (see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession">Start a Game Session</a>). This information is added to the new <a>GameSession</a> object
   *             that is created for a successful match.  This parameter is not used if
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   */
  GameSessionData?: string;

  /**
   * <p>The method that is used to backfill game sessions created with this matchmaking
   *             configuration. Specify MANUAL when your game manages backfill requests manually or does
   *             not use the match backfill feature. Specify AUTOMATIC to have GameLift create a <a>StartMatchBackfill</a> request whenever a game session has one or more open
   *             slots. Learn more about manual and automatic backfill in <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-backfill.html">Backfill Existing Games
   *                 with FlexMatch</a>. Automatic backfill is not available when
   *                 <code>FlexMatchMode</code> is set to <code>STANDALONE</code>.</p>
   */
  BackfillMode?: BackfillMode | string;

  /**
   * <p>Indicates whether this matchmaking configuration is being used with GameLift hosting or
   *             as a standalone matchmaking solution. </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <b>STANDALONE</b> - FlexMatch forms matches and returns
   *                 match information, including players and team assignments, in a
   *                 <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-events.html#match-events-matchmakingsucceeded">
   *                     MatchmakingSucceeded</a> event.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>WITH_QUEUE</b> - FlexMatch forms matches and uses the specified GameLift queue to
   *                 start a game session for the match. </p>
   *             </li>
   *          </ul>
   */
  FlexMatchMode?: FlexMatchMode | string;
}

export namespace UpdateMatchmakingConfigurationInput {
  export const filterSensitiveLog = (obj: UpdateMatchmakingConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface UpdateMatchmakingConfigurationOutput {
  /**
   * <p>The updated matchmaking configuration.</p>
   */
  Configuration?: MatchmakingConfiguration;
}

export namespace UpdateMatchmakingConfigurationOutput {
  export const filterSensitiveLog = (obj: UpdateMatchmakingConfigurationOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface UpdateRuntimeConfigurationInput {
  /**
   * <p>A unique identifier for a fleet to update runtime configuration for. You can use either the fleet ID or ARN
   *             value.</p>
   */
  FleetId: string | undefined;

  /**
   * <p>Instructions for launching server processes on each instance in the fleet. Server
   *             processes run either a custom game build executable or a Realtime Servers script. The runtime
   *             configuration lists the types of server processes to run on an instance and includes the
   *             following configuration settings: the server executable or launch script file, launch
   *             parameters, and the number of processes to run concurrently on each instance. A
   *             CreateFleet request must include a runtime configuration with at least one server
   *             process configuration.</p>
   */
  RuntimeConfiguration: RuntimeConfiguration | undefined;
}

export namespace UpdateRuntimeConfigurationInput {
  export const filterSensitiveLog = (obj: UpdateRuntimeConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface UpdateRuntimeConfigurationOutput {
  /**
   * <p>The runtime configuration currently in force. If the update was successful, this
   *             object matches the one in the request.</p>
   */
  RuntimeConfiguration?: RuntimeConfiguration;
}

export namespace UpdateRuntimeConfigurationOutput {
  export const filterSensitiveLog = (obj: UpdateRuntimeConfigurationOutput): any => ({
    ...obj,
  });
}

export interface UpdateScriptInput {
  /**
   * <p>A unique identifier for a Realtime script to update. You can use either the script ID or ARN value.</p>
   */
  ScriptId: string | undefined;

  /**
   * <p>A descriptive label that is associated with a script. Script names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>The version that is associated with a build or script. Version strings do not need to be unique.</p>
   */
  Version?: string;

  /**
   * <p>The Amazon S3 location of your Realtime scripts. The storage location must specify the S3
   *             bucket name, the zip file name (the "key"), and an IAM role ARN that allows Amazon GameLift to
   *             access the S3 storage location. The S3 bucket must be in the same Region as the script
   *             you're updating. By default, Amazon GameLift uploads the latest version of the zip file; if you
   *             have S3 object versioning turned on, you can use the <code>ObjectVersion</code>
   *             parameter to specify an earlier version. To call this operation with a storage location,
   *             you must have IAM PassRole permission. For more details on IAM roles and PassRole
   *             permissions, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html"> Set up a role for
   *                 GameLift access</a>. </p>
   */
  StorageLocation?: S3Location;

  /**
   * <p>A data object containing your Realtime scripts and dependencies as a zip file. The zip
   *             file can have one or multiple files. Maximum size of a zip file is 5 MB.</p>
   *         <p>When using the AWS CLI tool to create a script, this parameter is set to the zip file
   *             name. It must be prepended with the string "fileb://" to indicate that the file data is
   *             a binary object. For example: <code>--zip-file
   *             fileb://myRealtimeScript.zip</code>.</p>
   */
  ZipFile?: Uint8Array;
}

export namespace UpdateScriptInput {
  export const filterSensitiveLog = (obj: UpdateScriptInput): any => ({
    ...obj,
  });
}

export interface UpdateScriptOutput {
  /**
   * <p>The newly created script record with a unique script ID. The new script's storage
   *             location reflects an Amazon S3 location: (1) If the script was uploaded from an S3 bucket
   *             under your account, the storage location reflects the information that was provided in
   *             the <i>CreateScript</i> request; (2) If the script file was uploaded from
   *             a local zip file, the storage location reflects an S3 location controls by the Amazon GameLift
   *             service.</p>
   */
  Script?: Script;
}

export namespace UpdateScriptOutput {
  export const filterSensitiveLog = (obj: UpdateScriptOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the input for a request operation.</p>
 */
export interface ValidateMatchmakingRuleSetInput {
  /**
   * <p>A collection of matchmaking rules to validate, formatted as a JSON string.</p>
   */
  RuleSetBody: string | undefined;
}

export namespace ValidateMatchmakingRuleSetInput {
  export const filterSensitiveLog = (obj: ValidateMatchmakingRuleSetInput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the returned data in response to a request operation.</p>
 */
export interface ValidateMatchmakingRuleSetOutput {
  /**
   * <p>A response indicating whether the rule set is valid.</p>
   */
  Valid?: boolean;
}

export namespace ValidateMatchmakingRuleSetOutput {
  export const filterSensitiveLog = (obj: ValidateMatchmakingRuleSetOutput): any => ({
    ...obj,
  });
}
